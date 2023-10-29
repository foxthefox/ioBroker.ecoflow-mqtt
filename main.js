'use strict';

/*
 * Created with @iobroker/create-adapter v2.5.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const myutils = require('./lib/adapter_utils.js');
const ef = require('./lib/ecoflow_utils.js');

const mqtt = require('mqtt');
const { isObject } = require('util');

// Load your modules here, e.g.:
// const fs = require("fs");

class EcoflowMqtt extends utils.Adapter {
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: 'ecoflow-mqtt'
		});
		this.mqttClient = null;
		this.msgCountPstream = 0;
		this.msgCountPstation = 0;
		this.msgReconnects = 0;
		this.mqttUserId = '';
		this.mqttUserName = '';
		this.mqttPwd = '';
		this.mqttClientId = '';
		this.mqttPort = 8883;
		this.mqttProtocol = 'mqtts://';
		this.mqttUrl = 'mqtt-e.ecoflow.com';
		this.pstreamId = null;
		this.pstreamType = null;
		this.pstreamStates = null;
		this.pstreamStatesDict = null;
		this.pstationId = null;
		this.pstationType = null;
		this.pstationStates = null;
		this.pstationStatesDict = null;
		this.pstationCmd = null;
		this.on('ready', this.onReady.bind(this));
		this.on('stateChange', this.onStateChange.bind(this));
		// this.on('objectChange', this.onObjectChange.bind(this));
		this.on('message', this.onMessage.bind(this));
		this.on('unload', this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here
		this.log.info('adapter entered ready');
		try {
			this.mqttUserId = this.config.mqttUserId;
			this.mqttUserName = this.config.mqttUserName;
			this.mqttPwd = this.config.mqttPwd;
			this.mqttClientId = this.config.mqttClientId;
			this.mqttPort = this.config.mqttPort || 8883;
			this.mqttProtocol = 'mqtts://';
			this.mqttUrl = this.config.mqttUrl || 'mqtt-e.ecoflow.com';
			this.pstreamId = this.config.streamId;
			this.pstreamType = this.config.streamType;
			this.pstreamStates = require('./lib/ecoflow_data.js').pstreamStates;
			this.pstreamStatesDict = require('./lib/ecoflow_data.js').pstreamStatesDict['pstream'];
			this.pstreamCmd = require('./lib/ecoflow_data.js').pstreamCmd['pstream'];
			this.pstationId = this.config.stationId;
			this.pstationType = this.config.stationType;
			this.pstationStates = require('./lib/ecoflow_data.js').pstationStates;
			if (this.pstationType) {
				this.pstationStatesDict = require('./lib/ecoflow_data.js').pstationStatesDict[this.pstationType];
				this.pstationCmd = require('./lib/ecoflow_data.js').pstationCmd[this.pstationType];
			} else {
				this.log.error('pstationType not taken over' + this.pstationType);
			}
			// value correction

			//modify this.pstationStates
			try {
				if (this.pstreamType && this.pstreamType !== 'pstream800') {
					const streamupd = require('./lib/ecoflow_data.js').pstreamRanges['pstream600'];
					this.log.debug('pstream upd ' + JSON.stringify(streamupd));
					if (Object.keys(streamupd).length > 0) {
						for (let channel in streamupd) {
							for (let type in streamupd[channel]) {
								for (let state in streamupd[channel][type]) {
									for (let value in streamupd[channel][type][state]) {
										this.pstreamStates[channel][type][state][value] =
											streamupd[channel][type][state][value];
										this.log.debug(
											'manipulate ' +
												this.pstreamStates[channel][type][state][value] +
												' -- ' +
												streamupd[channel][type][state][value]
										);
									}
								}
							}
						}
					} else {
						this.log.debug('streamupd not possible ' + this.pstreamType);
					}
				}

				if (this.pstationType) {
					const stationupd = require('./lib/ecoflow_data.js').pstationRanges[this.pstationType];
					this.log.debug('pstation upd ' + JSON.stringify(stationupd));
					if (Object.keys(stationupd).length > 0) {
						for (let channel in stationupd) {
							for (let type in stationupd[channel]) {
								for (let state in stationupd[channel][type]) {
									for (let value in stationupd[channel][type][state]) {
										this.pstationStates[channel][type][state][value] =
											stationupd[channel][type][state][value];
										this.log.debug(
											'manipulate ' +
												this.pstationStates[channel][type][state][value] +
												' -- ' +
												stationupd[channel][type][state][value]
										);
									}
								}
							}
						}
					} else {
						this.log.error('streamupd not possible');
					}
				} else {
					this.log.error('pstationType not set' + this.pstationType);
				}
			} catch (error) {
				this.log.error('modification went wrong' + error);
			}
		} catch (error) {
			this.log.error('read config ' + error);
		}

		//create pstream objects
		if (this.pstreamType !== 'none') {
			try {
				if (this.config.msgStateCreationPstream) {
					this.log.debug('____________________________________________');
					this.log.debug('create  device ' + this.pstreamId);
				}
				await this.setObjectNotExistsAsync(this.pstreamId, {
					type: 'device',
					common: {
						name: this.config.streamName,
						role: 'device'
					},
					native: {}
				});
				for (let part in this.pstreamStatesDict) {
					if (this.config.msgStateCreationPstream) {
						this.log.debug('____________________________________________');
						this.log.debug('create  channel ' + part);
					}
					await myutils.createMyChannel(this, this.pstreamId, part, part, 'channel');
					for (let key in this.pstreamStatesDict[part]) {
						let type = this.pstreamStatesDict[part][key]['entity'];
						if (this.pstreamStates[part][type][key]) {
							await myutils.createMyState(
								this,
								this.pstreamId,
								part,
								key,
								this.pstreamStates[part][type][key]
							);
						} else {
							this.log.debug('not created/mismatch ' + part + ' ' + key + ' ' + type);
						}
					}
				}
				//create states
			} catch (error) {
				this.log.error('create states powerstream ' + error);
			}
		}

		//create pstation objects
		if (this.pstationType !== 'none') {
			try {
				if (this.config.msgStateCreationPstation) {
					this.log.debug('____________________________________________');
					this.log.debug('create  device ' + this.pstationId);
				}
				await this.setObjectNotExistsAsync(this.pstationId, {
					type: 'device',
					common: {
						name: this.config.stationName,
						role: 'device'
					},
					native: {}
				});
				for (let part in this.pstationStatesDict) {
					if (this.config.msgStateCreationPstation) {
						this.log.debug('____________________________________________');
						this.log.debug('create  channel ' + part);
					}
					await myutils.createMyChannel(this, this.pstationId, part, part, 'channel');
					for (let key in this.pstationStatesDict[part]) {
						let type = this.pstationStatesDict[part][key]['entity'];
						if (type !== 'icon') {
							if (this.pstationStates[part][type][key]) {
								await myutils.createMyState(
									this,
									this.pstationId,
									part,
									key,
									this.pstationStates[part][type][key]
								);
							} else {
								this.log.debug('not created/mismatch ' + part + ' ' + key + ' ' + type);
							}
						}
					}
				}
				//first additional battery
				if (this.config.stationSlave1) {
					if (this.config.msgStateCreationPstation) {
						this.log.debug('____________________________________________');
						this.log.debug('create  channel ' + 'bmsSlave1');
					}
					await myutils.createMyChannel(this, this.pstationId, 'bmsSlave1', 'bmsSlave1', 'channel');
					for (let key in this.pstationStatesDict['bmsMaster']) {
						let type = this.pstationStatesDict['bmsMaster'][key]['entity'];
						if (type !== 'icon') {
							if (this.pstationStates['bmsMaster'][type][key]) {
								await myutils.createMyState(
									this,
									this.pstationId,
									'bmsSlave1',
									key,
									this.pstationStates['bmsMaster'][type][key]
								);
							} else {
								this.log.debug('not created/mismatch ' + 'bmsSlave1' + ' ' + key + ' ' + type);
							}
						}
					}
				}
				//second additional battery
				if (this.config.stationSlave2) {
					if (this.config.msgStateCreationPstation) {
						this.log.debug('____________________________________________');
						this.log.debug('create  channel ' + 'bmsSlave2');
					}
					await myutils.createMyChannel(this, this.pstationId, 'bmsSlave2', 'bmsSlave2', 'channel');
					for (let key in this.pstationStatesDict['bmsMaster']) {
						let type = this.pstationStatesDict['bmsMaster'][key]['entity'];
						if (type !== 'icon') {
							if (this.pstationStates['bmsMaster'][type][key]) {
								await myutils.createMyState(
									this,
									this.pstationId,
									'bmsSlave2',
									key,
									this.pstationStates['bmsMaster'][type][key]
								);
							} else {
								this.log.debug('not created/mismatch ' + 'bmsSlave2' + ' ' + key + ' ' + type);
							}
						}
					}
				}
			} catch (error) {
				this.log.error('create states powerstation ' + error);
			}
		}
		//additional states for observance
		myutils.createInfoStates(this);
		this.log.info('object creation finished');

		//create subscription topics
		let topics;
		if (this.mqttUserId.length > 0) {
			topics = ef.createSubscribeTopics(
				this.mqttUserId,
				this.pstreamType,
				this.pstreamId,
				this.pstationType,
				this.pstationId
			);
		}
		this.log.debug('subscription topics ' + JSON.stringify(topics));

		//connect
		const optionsMqtt = {
			port: this.mqttPort || 8883,
			clientId: this.mqttClientId,
			username: this.mqttUserName,
			password: this.mqttPwd
		};
		if (optionsMqtt.clientId.length > 18 && optionsMqtt.username.length > 18 && optionsMqtt.password.length > 18) {
			try {
				this.client = mqtt.connect(this.mqttUrl + ':' + this.mqttPort, optionsMqtt);

				this.client.on('connect', () => {
					this.log.debug('connected');
					if (topics.length > 0) {
						if (this.client) {
							this.client.subscribe(topics, (err) => {
								if (!err) {
									this.log.debug('subscribed the topics');
								}
							});
						}
					} else {
						this.log.debug('no topics for subscription');
					}
					this.setState('info.connection', true, true);
				});

				this.client.on('message', async (topic, message) => {
					// message is Buffer
					// this.log.debug(topic + ' got ' + message.toString());
					if (topic.includes('/app/device/property/')) {
						topic = topic.replace('/app/device/property/', '');
						if (topic === this.pstreamId) {
							let msgdecode = ef.pstreamDecode(this, message);
							if (this.config.msgUpdatePstream) {
								this.log.debug('pstream: ' + JSON.stringify(msgdecode));
							}
							if (msgdecode !== null && typeof msgdecode === 'object') {
								if (Object.keys(msgdecode).length > 0) {
									await ef.storeStreamPayload(
										this,
										this.pstreamStatesDict,
										this.pstreamStates,
										topic,
										msgdecode
									);
								}
							}
							this.msgCountPstream++;
							await this.setStateAsync('info.msgCountPstream', { val: this.msgCountPstream, ack: true });
						} else if (topic === this.pstationId) {
							if (this.config.msgUpdatePstation) {
								this.log.debug('pstation: ' + message.toString());
							}
							await ef.storeStationPayload(
								this,
								this.pstationStatesDict,
								this.pstationStates,
								topic,
								JSON.parse(message.toString())
							);
							this.msgCountPstation++;
							await this.setStateAsync('info.msgCountPstation', {
								val: this.msgCountPstation,
								ack: true
							});
						} else {
							this.log.debug('unknown topic, not matching IDs');
						}
					} else {
						//other msg -> get or set
						if (topic.includes('get')) {
							topic = topic
								.replace('/app/' + this.mqttUserId + '/', '')
								.replace('/thing/property/get', '');

							if (topic === this.pstreamId) {
								this.log.debug('received get -> ' + Buffer.from(message).toString('hex'));
								//ef.pstreamDecode()
							} else if (topic === this.pstationId) {
								if (this.config.msgSetGetPstation) {
									this.log.debug(topic + ' get ' + message.toString());
								}
							}
						} else if (topic.includes('set')) {
							topic = topic
								.replace('/app/' + this.mqttUserId + '/', '')
								.replace('/thing/property/set', '');
							if (topic === this.pstreamId) {
								this.log.debug('received set -> ' + Buffer.from(message).toString('hex'));

								//ef.pstreamDecode()
							} else if (topic === this.pstationId) {
								if (this.config.msgSetGetPstation) {
									let setmsg = JSON.parse(message.toString());
									if (setmsg.params) {
										let key = setmsg.params.id;
										switch (key) {
											case 40:
											case 68:
											case 72:
												//Lebenszeichen der APP?

												break;
											default:
												this.log.debug(topic + ' ->set ' + key + '  ' + JSON.stringify(setmsg));
												break;
										}
									} else {
										this.log.debug(topic + ' ->set wo params' + JSON.stringify(setmsg));
									}
								}
							}
						} else {
							this.log.debug(topic + ' got ' + message.toString());
						}
					}
				});

				this.client.on('close', () => {
					this.setState('info.connection', false, true);
					this.log.info('ecfolow connection closed');
				});
				this.client.on('error', (error) => {
					this.setState('info.connection', false, true);
					this.log.error('Fehler bei der Ecoflow MQTT-Verbindung:' + error);
				});

				this.client.on('reconnect', async () => {
					this.log.debug('Reconnecting to Ecoflow MQTT broker...');
					this.msgReconnects++;
					await this.setStateAsync('info.msgCountPstream', { val: this.msgReconnects, ack: true });
				});
			} catch (error) {
				this.log.error('create states powerstation ' + error);
			}
		} else {
			this.log.warn('check your mqtt credentials, they seem too short');
		}
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			// clearInterval(interval1);
			if (this.client) {
				this.client.end();
			}
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	async onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
			if (!state.ack) {
				// kein DC/AC/USB Einschalten wenn SOC unterhalb von minDsg liegt
				// kein Ladezuschaltung, wenn SOC über maxChg liegt
				const idsplit = id.split('.');
				const device = idsplit[2];
				const channel = idsplit[3];
				const item = idsplit[4];
				const topic = '/app/' + this.mqttUserId + '/' + device + '/thing/property/set';

				if (device === this.pstreamId) {
					const msgBuf = ef.prepareStreamCmd(
						this,
						this.pstreamId,
						this.pstreamType,
						item,
						state.val,
						this.pstreamCmd[channel][item]
					);
					this.log.debug('msgBuf ' + msgBuf);
					this.log.debug('Modifizierter Hex-String:' + Buffer.from(msgBuf).toString('hex'));

					if (this.client) {
						this.client.publish(topic, msgBuf, { qos: 1 }, (error) => {
							if (error) {
								this.log.error('Fehler beim Veröffentlichen der MQTT-Nachricht: ' + error);
							} else {
								if (this.config.msgCmdPstream) {
									this.log.debug('Die MQTT-Nachricht wurde erfolgreich veröffentlicht.');
								}
							}
						});
					}
				} else if (device === this.pstationId) {
					const msg = await ef.prepareStationCmd(
						this,
						this.pstationId,
						this.pstationType,
						item,
						state.val,
						this.pstationCmd[channel][item]
					);
					const topic = '/app/' + this.mqttUserId + '/' + device + '/thing/property/set';
					if (Object.keys(msg).length > 0) {
						this.log.debug('publish  ' + topic);
						this.log.debug('publish  ' + JSON.stringify(msg));

						if (this.client) {
							this.client.publish(topic, JSON.stringify(msg), { qos: 1 }, (error) => {
								if (error) {
									this.log.error('Fehler beim Veröffentlichen der MQTT-Nachricht: ' + error);
								} else {
									if (this.config.msgCmdPstation) {
										this.log.debug('Die MQTT-Nachricht wurde erfolgreich veröffentlicht.');
									}
								}
							});
						}
					} else {
						this.log.debug('nothing to send ' + id + state);
					}
				} else {
					this.log.warn('unknown state to be processed ' + id + state);
				}
			}
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.messagebox" property to be set to true in io-package.json
	//  * @param {ioBroker.Message} obj
	//  */
	onMessage(obj) {
		this.log.info('send command');
		this.log.info('obj' + JSON.stringify(obj.message));
		this.log.info('obj' + obj.message);
		if (!obj || !obj.command) {
			return;
		}
		switch (obj.command) {
			case 'create':
				this.log.info('send msg create');
				// e.g. send email or pushover or whatever
				this.log.info('msg ' + this.config.mqttUserName);
				this.log.info('msg ' + this.config.mqttUserId);
				this.log.info('msg ' + this.config.mqttPwd);
				this.log.info('msg ' + this.config.mqttClientId);
				/*
				this.updateConfig({
					mqttUserName: 'login.User',
					mqttPwd: 'login.Password',
					mqttClientId: 'login.clientID'
				});
				*/

				/**
				if (this.mqttDevice === '' && this.mqttUser === '' && this.mqttPwd === '') {
					try {
						let login = getEcoFlowMqttCredits(this, this.efUser, this.efPwd);
						this.config.mqttUser = login.User;
						this.config.mqttPwd = login.Password;
						this.config.mqttDevice = login.clientID;
					} catch (error) {
						this.log.debug(error); //
						throw new Error(
							'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.'
						);
					}
				}
				*/
				let result = {
					native: {
						mqttUserId: '1232445564356',
						mqttUserName: 'login.User',
						mqttPwd: 'login.Password',
						mqttClientId: 'login.clientID'
					},
					reloadBrowser: true
				};
				this.sendTo(obj.from, obj.command, result, obj.callback);
				// Send response in callback if required
				//this.sendTo(obj.from, obj.command, 'close admin page and reopen', obj.callback);
				//if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
				//if (obj.callback) this.sendTo(obj.from, obj.command, result, obj.callback);
				break;

			case 'test': {
				// Try to connect to mqtt broker
				if (obj.callback && obj.message) {
					const mqtt = require('mqtt');

					const _url = obj.message.url + ':' + obj.message.port;

					const optionsMqtt = {
						port: obj.message.port || 8883,
						clientId: obj.message.clientId,
						username: obj.message.user,
						password: obj.message.pass
					};

					const _client = mqtt.connect(_url, optionsMqtt);
					// Set timeout for connection
					const timeout = setTimeout(() => {
						_client.end();
						this.sendTo(obj.from, obj.command, 'timeout', obj.callback);
					}, 2000);

					// If connected, return success
					_client.on('connect', () => {
						_client.end();
						clearTimeout(timeout);
						this.sendTo(obj.from, obj.command, 'connected', obj.callback);
					});
					// If connected, return success
					_client.on('error', (err) => {
						_client.end();
						clearTimeout(timeout);
						this.log.warn(`Error on mqtt test: ${err}`);
						this.sendTo(obj.from, obj.command, 'error', obj.callback);
					});
				}
				break;
			}
			case 'sendmsg': {
				// Try to connect to mqtt broker
				if (obj.callback && obj.message) {
					this.mqttClient();
					// Set timeout for connection
					const timeout = setTimeout(() => {
						this.mqttClient.end();
						this.sendTo(obj.from, obj.command, 'timeout', obj.callback);
					}, 2000);

					// If connected, return success
					this.mqttClient.on('connect', () => {
						this.mqttClient.end();
						clearTimeout(timeout);
						this.sendTo(obj.from, obj.command, 'connected', obj.callback);
					});
					// If connected, return success
					this.mqttClient.on('error', (err) => {
						this.mqttClient.end();
						clearTimeout(timeout);
						this.log.warn(`Error on mqtt test: ${err}`);
						this.sendTo(obj.from, obj.command, 'error', obj.callback);
					});
				}
				break;
			}
		}
	}
}

if (require.main !== module) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new EcoflowMqtt(options);
} else {
	// otherwise start the instance directly
	new EcoflowMqtt();
}
