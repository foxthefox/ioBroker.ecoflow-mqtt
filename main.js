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
const { debug } = require('console');

// Load your modules here, e.g.:
// const fs = require("fs");

let recon_timer = null;
let wait_recon = null;

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
		this.msgCountPlug = 0;
		this.msgCountPstation = 0;
		this.msgReconnects = 0;
		this.mqttUserId = '';
		this.mqttUserName = '';
		this.mqttPwd = '';
		this.mqttClientId = '';
		this.mqttPort = 8883;
		this.mqttProtocol = 'mqtts://';
		this.mqttUrl = 'mqtt-e.ecoflow.com';
		this.pstreamStates = null;
		this.pstreamStatesDict = null;
		this.pstationStates = {};
		this.pstationStatesDict = null;
		this.pstationCmd = null;
		this.plugStates = null;
		this.plugStatesDict = null;
		this.plugCmd = null;
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
			this.pstreams = {};
			this.pstreamStates = require('./lib/ecoflow_data.js').pstreamStates;
			this.pstreamStatesDict = require('./lib/ecoflow_data.js').pstreamStatesDict;
			this.pstreamCmd = require('./lib/ecoflow_data.js').pstreamCmd;
			this.pstations = {};
			//this.pstationStates = require('./lib/ecoflow_data.js').pstationStates;
			this.pstationStatesDict = require('./lib/ecoflow_data.js').pstationStatesDict;
			this.pstationCmd = require('./lib/ecoflow_data.js').pstationCmd;

			// value correction

			//modify this.pstationStates
			this.log.info('your configration:');
			this.log.info('powerstream  -> ' + JSON.stringify(this.config.pstreams));
			this.log.info('powerstation -> ' + JSON.stringify(this.config.pstations));
			this.log.info('smartplug    -> ' + JSON.stringify(this.config.plugs));
			this.log.info('wave         -> ' + JSON.stringify(this.config.waves));
			this.log.info('glacier      -> ' + JSON.stringify(this.config.glaciers));
			try {
				//loop durch alle pstreams und plugs
				let protobufdevices = [];
				if (this.config.pstreams.length > 0) {
					protobufdevices.concat(this.config.pstreams);
				}
				if (this.config.plugs.length > 0) {
					protobufdevices.concat(this.config.plugs);
				}
				// Zusammenfassung beider IFs
				// plugType -> pstreamType etc.

				if (this.config.pstreams.length > 0) {
					for (let pstr = 0; pstr < this.config.pstreams.length; pstr++) {
						const type = this.config.pstreams[pstr]['pstreamType'];
						if (type !== 'none' && type !== '') {
							const id = this.config.pstreams[pstr]['pstreamId'];
							const name = this.config.pstreams[pstr]['pstreamName'];
							this.pstreams[id] = {};
							this.pstreams[id]['pstreamType'] = type;
							this.pstreams[id]['pstreamName'] = name;

							let pstreamStates = require('./lib/ecoflow_data.js').pstreamStates;
							// manipulation of ranges when 600W version
							if (type !== 'pstream800' && pstreamStates) {
								const streamupd = require('./lib/ecoflow_data.js').pstreamRanges['pstream600'];
								this.log.debug('pstream upd ' + JSON.stringify(streamupd));
								if (Object.keys(streamupd).length > 0) {
									for (let channel in streamupd) {
										for (let type in streamupd[channel]) {
											for (let state in streamupd[channel][type]) {
												for (let value in streamupd[channel][type][state]) {
													this.log.debug(
														'manipulate: ' +
															channel +
															'/' +
															state +
															' old--new ' +
															pstreamStates[channel][type][state][value] +
															' -- ' +
															streamupd[channel][type][state][value]
													);
													pstreamStates[channel][type][state][value] =
														streamupd[channel][type][state][value];
												}
											}
										}
									}
								} else {
									this.log.debug('streamupd not possible ->' + type);
								}
							}
							//create pstream objects
							const pstreamStatesDict = this.pstreamStatesDict['pstream'];
							if (id && pstreamStates && pstreamStatesDict && name) {
								this.log.info('start pstream state creation ->' + type + ' for Id ' + id);
								try {
									if (this.config.msgStateCreationPstream) {
										this.log.debug('____________________________________________');
										this.log.debug('create  device ' + id);
									}
									await this.setObjectNotExistsAsync(id, {
										type: 'device',
										common: {
											name: name,
											role: 'device'
										},
										native: {}
									});
									for (let part in pstreamStatesDict) {
										if (this.config.msgStateCreationPstream) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + part);
										}
										await myutils.createMyChannel(this, id, part, part, 'channel');
										for (let key in pstreamStatesDict[part]) {
											let type = pstreamStatesDict[part][key]['entity'];
											if (pstreamStates[part][type][key]) {
												await myutils.createMyState(
													this,
													id,
													part,
													key,
													pstreamStates[part][type][key]
												);
											} else {
												this.log.debug(
													'not created/mismatch ->' + part + ' ' + key + ' ' + type
												);
											}
										}
									}
									this.log.info('pstream states created for ' + id + ' / ' + type + ' / ' + name);
								} catch (error) {
									this.log.error('create states powerstream ->' + error);
								}
							} else {
								this.log.warn(
									id +
										'states -> ' +
										pstreamStates +
										' dict -> ' +
										pstreamStatesDict +
										' type -> ' +
										type
								);
								this.log.warn(
									'if in other message "type -> none" then no(none) powerstream is defined and this message is void'
								);
							}
						} else {
							this.log.warn('"none" or no configuration, you can delete the row in the table');
						}
					}
				}

				//loop durch alle plugs
				//wird auch in pstreams geschrieben, da hier auch protobuf benutzt wird
				if (this.config.plugs.length > 0) {
					for (let pstr = 0; pstr < this.config.plugs.length; pstr++) {
						const type = this.config.plugs[pstr]['plugType'];
						if (type !== 'none' && type !== '') {
							const id = this.config.plugs[pstr]['plugId'];
							const name = this.config.plugs[pstr]['plugName'];
							this.pstreams[id] = {};
							this.pstreams[id]['pstreamType'] = type;
							this.pstreams[id]['pstreamName'] = name;

							const plugStates = require('./lib/ecoflow_data.js').pstreamStates;
							const plugStatesDict = this.pstreamStatesDict['plug'];

							//create plug objects
							if (id && plugStates && plugStatesDict && name) {
								this.log.info('start plug state creation ->' + type + ' for Id ' + id);
								try {
									if (this.config.msgStateCreationPlug) {
										this.log.debug('____________________________________________');
										this.log.debug('create  device ' + id);
									}
									await this.setObjectNotExistsAsync(id, {
										type: 'device',
										common: {
											name: name,
											role: 'device'
										},
										native: {}
									});
									for (let part in plugStatesDict) {
										if (this.config.msgStateCreationPlug) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + part);
										}
										await myutils.createMyChannel(this, id, part, part, 'channel');
										for (let key in plugStatesDict[part]) {
											let type = plugStatesDict[part][key]['entity'];
											if (plugStates[part][type][key]) {
												await myutils.createMyState(
													this,
													id,
													part,
													key,
													plugStates[part][type][key]
												);
											} else {
												this.log.debug(
													'not created/mismatch ->' + part + ' ' + key + ' ' + type
												);
											}
										}
									}
									this.log.info('plug states created for ' + id + ' / ' + type + ' / ' + name);
								} catch (error) {
									this.log.error('create states plug ->' + error);
								}
							} else {
								this.log.warn(
									id + ' states -> ' + plugStates + ' dict -> ' + plugStatesDict + ' type -> ' + type
								);
								this.log.warn(
									'if in other message "type -> none" then no(none) plug is defined and this message is void'
								);
							}
						} else {
							this.log.warn('"none" or no configuration, you can delete the row in the table');
						}
					}
				}
				//loop durch alle pstations
				let jsondevices = [];
				if (this.config.pstations.length > 0) {
					jsondevices.concat(this.config.pstations);
				}
				if (this.config.waves.length > 0) {
					jsondevices.concat(this.config.waves);
				}
				if (this.config.glaciers.length > 0) {
					jsondevices.concat(this.config.glaciers);
				}
				if (jsondevices.length > 0) {
					//loop durch alle pstations
					for (let psta = 0; psta < jsondevices.length; psta++) {
						const type = jsondevices[psta]['pstationType'];
						if (type !== 'none' && type !== '') {
							const id = jsondevices[psta]['pstationId'];
							const name = jsondevices[psta]['pstationName'];
							this.pstations[id] = {};
							this.pstations[id]['pstationType'] = type;
							this.pstations[id]['pstationName'] = name;

							const pstationStates = require('./lib/ecoflow_data.js').pstationStates;

							if (type !== 'none' && pstationStates) {
								const stationupd = require('./lib/ecoflow_data.js').pstationRanges[type];
								this.log.debug('pstation upd ' + JSON.stringify(stationupd));
								if (stationupd) {
									if (Object.keys(stationupd).length > 0) {
										for (let channel in stationupd) {
											for (let type in stationupd[channel]) {
												for (let state in stationupd[channel][type]) {
													for (let value in stationupd[channel][type][state]) {
														this.log.debug(
															'manipulate: ' +
																channel +
																'/' +
																state +
																' old--new ' +
																pstationStates[channel][type][state][value] +
																' -- ' +
																stationupd[channel][type][state][value]
														);
														pstationStates[channel][type][state][value] =
															stationupd[channel][type][state][value];
													}
												}
											}
										}
										if (!this.pstationStates[type]) {
											this.pstationStates[type] = pstationStates;
										}
									} else {
										this.log.error('station upd not possible');
									}
								} else {
									this.log.warn('did not get stationupd');
								}
							} else {
								this.log.error(
									'pstationType not set -> ' + type + 'or no pstationStates -> ' + pstationStates
								);
							}
							//create pstation objects
							const pstationStatesDict = this.pstationStatesDict[type];

							if (type !== 'none' && pstationStates && pstationStatesDict) {
								this.log.info('start pstation state creation ->' + type + ' for Id ' + id);
								try {
									if (this.config.msgStateCreationPstation) {
										this.log.debug('____________________________________________');
										this.log.debug('create  device ' + id);
									}
									await this.setObjectNotExistsAsync(id, {
										type: 'device',
										common: {
											name: name,
											role: 'device'
										},
										native: {}
									});
									for (let part in pstationStatesDict) {
										if (this.config.msgStateCreationPstation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + part);
										}
										await myutils.createMyChannel(this, id, part, part, 'channel');
										for (let key in pstationStatesDict[part]) {
											let type = pstationStatesDict[part][key]['entity'];
											if (type !== 'icon') {
												if (pstationStates[part][type][key]) {
													await myutils.createMyState(
														this,
														id,
														part,
														key,
														pstationStates[part][type][key]
													);
												} else {
													this.log.info(
														'not created/mismatch ->' + part + ' ' + key + ' ' + type
													);
												}
											}
										}
									}
									this.log.info('pstation states created for ' + id + ' / ' + type + ' / ' + name);
									//first additional battery
									if (jsondevices[psta]['pstationsSlave1']) {
										if (this.config.msgStateCreationPstation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + 'bmsSlave1');
										}
										await myutils.createMyChannel(this, id, 'bmsSlave1', 'bmsSlave1', 'channel');
										for (let key in pstationStatesDict['bmsMaster']) {
											let type = pstationStatesDict['bmsMaster'][key]['entity'];
											if (type !== 'icon') {
												if (pstationStates['bmsMaster'][type][key]) {
													await myutils.createMyState(
														this,
														id,
														'bmsSlave1',
														key,
														pstationStates['bmsMaster'][type][key]
													);
												} else {
													this.log.info(
														'not created/mismatch ' +
															' bmsSlave1 ->' +
															' ' +
															key +
															' ' +
															type
													);
												}
											}
										}
										this.log.info('pstation add battery #1 states created');
									}
									//second additional battery
									if (jsondevices[psta]['pstationsSlave2']) {
										if (this.config.msgStateCreationPstation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + 'bmsSlave2');
										}
										await myutils.createMyChannel(this, id, 'bmsSlave2', 'bmsSlave2', 'channel');
										for (let key in this.pstationStatesDict['bmsMaster']) {
											let type = this.pstationStatesDict['bmsMaster'][key]['entity'];
											if (type !== 'icon') {
												if (pstationStates['bmsMaster'][type][key]) {
													await myutils.createMyState(
														this,
														id,
														'bmsSlave2',
														key,
														pstationStates['bmsMaster'][type][key]
													);
												} else {
													this.log.info(
														'not created/mismatch ' +
															'bmsSlave2 ->' +
															' ' +
															key +
															' ' +
															type
													);
												}
											}
										}
										this.log.info('pstation add battery #2 states created');
									}
								} catch (error) {
									this.log.error('create states powerstation ' + error);
								}
							} else {
								this.log.error(
									'something empty ID->' +
										id +
										'states -> ' +
										pstationStates +
										' dict -> ' +
										pstationStatesDict +
										' type -> ' +
										type
								);
							}
						}
					}
				}
			} catch (error) {
				this.log.error('modification or state creation went wrong ->' + error);
			}
		} catch (error) {
			this.log.error('read config ' + error);
		}

		//additional states for observance
		myutils.createInfoStates(this);

		//create subscription topics
		let topics = [];
		if (this.mqttUserId.length > 0) {
			topics = topics.concat(ef.createSubscribeTopics(this.mqttUserId, this.pstreams));
			topics = topics.concat(ef.createSubscribeTopics(this.mqttUserId, this.pstations));
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
						//loop and timeout for requesting last quotas
					} else {
						this.log.debug('no topics for subscription');
					}
					this.setState('info.connection', true, true);
				});

				this.client.on('message', async (topic, message) => {
					// message is Buffer
					// this.log.debug(topic + ' got ' + message.toString());
					let msgtype = '';
					if (topic.includes('/app/device/property/')) {
						msgtype = 'update';
						topic = topic.replace('/app/device/property/', '');
					} else if (topic.includes('get_reply')) {
						msgtype = 'get_reply';
						topic = topic
							.replace('/app/' + this.mqttUserId + '/', '')
							.replace('/thing/property/get_reply', '');
					} else if (topic.includes('get')) {
						msgtype = 'get';
						topic = topic.replace('/app/' + this.mqttUserId + '/', '').replace('/thing/property/get', '');
					} else if (topic.includes('set_reply')) {
						msgtype = 'set_reply';
						topic = topic
							.replace('/app/' + this.mqttUserId + '/', '')
							.replace('/thing/property/set_reply', '');
					} else if (topic.includes('set')) {
						msgtype = 'set';
						topic = topic.replace('/app/' + this.mqttUserId + '/', '').replace('/thing/property/set', '');
					} else {
						msgtype = 'unknown msgtype';
					}

					let devtype = '';
					if (this.pstreams && this.pstations) {
						if (this.pstations[topic]) {
							devtype = this.pstations[topic]['pstationType'];
						} else if (this.pstreams[topic]) {
							switch (this.pstreams[topic]['pstreamType']) {
								case 'plug':
									devtype = 'plug';
									break;
								case 'pstream600':
								case 'pstream800':
									devtype = 'pstream';
									break;
								default:
									break;
							}
						}
					}

					if (devtype === 'pstream' || devtype === 'plug') {
						if (this.pstreamStatesDict && this.pstreamStates) {
							let msgdecode = ef.pstreamDecode(this, message);
							if (
								(this.config.msgUpdateValuePstream && devtype === 'pstream') ||
								(this.config.msgUpdateValuePlug && devtype === 'plug')
							) {
								this.log.debug(topic + '  ' + devtype + ' data update : ' + JSON.stringify(msgdecode));
							}
							if (
								(this.config.msgSetGetPlug && devtype === 'plug') ||
								(this.config.msgSetGetPstream && devtype === 'pstream')
							) {
								this.log.debug(
									topic +
										' ' +
										devtype +
										' received ' +
										msgtype +
										' -> ' +
										Buffer.from(message).toString('hex')
								);
							}
							if (msgtype === 'update' || msgtype === 'get_reply') {
								if (msgdecode !== null && typeof msgdecode === 'object') {
									if (Object.keys(msgdecode).length > 0) {
										//storeStreamPayload handles multiple objects
										await ef.storeStreamPayload(
											this,
											this.pstreamStatesDict[devtype],
											this.pstreamStates,
											topic,
											msgdecode,
											devtype
										);
									}
								}
							} else {
								//ef.pstreamDecode()
							}
						}
						if (devtype === 'plug') {
							this.msgCountPlug++;
							await this.setStateAsync('info.msgCountPlug', {
								val: this.msgCountPlug,
								ack: true
							});
						} else if (devtype === 'pstream') {
							this.msgCountPstream++;
							await this.setStateAsync('info.msgCountPstream', {
								val: this.msgCountPstream,
								ack: true
							});
						}
					} else {
						if (this.config.msgUpdatePstation && msgtype === 'update') {
							this.log.debug(topic + '  ' + devtype + ' data update : ' + message.toString());
						}
						if (this.config.msgSetGetPstation && (msgtype === 'set' || msgtype === 'set_reply')) {
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
										this.log.debug(
											topic +
												'  ' +
												devtype +
												' -> ' +
												msgtype +
												' ' +
												key +
												'  ' +
												JSON.stringify(setmsg)
										);
										break;
								}
							} else {
								this.log.debug(topic + ' ->set w/o params' + JSON.stringify(setmsg));
							}
						}
						if (this.config.msgSetGetPstation && msgtype === 'get_reply') {
							this.log.debug(
								topic + '  ' + devtype + ' received ' + msgtype + '-> ' + message.toString()
							);
						}
						if (
							this.pstationStatesDict &&
							this.pstationStates &&
							(msgtype === 'get_reply' || msgtype === 'update')
						) {
							const dict = this.pstationStatesDict[devtype];
							await ef.storeStationPayload(
								this,
								dict,
								this.pstationStates[devtype],
								topic,
								JSON.parse(message.toString())
							);
						}
						this.msgCountPstation++;
						await this.setStateAsync('info.msgCountPstation', {
							val: this.msgCountPstation,
							ack: true
						});
					}
					//reconnection trial
					if (this.config.enableMqttReconnect) {
						if (recon_timer) clearTimeout(recon_timer);
						recon_timer = setTimeout(() => {
							this.log.debug('no telegrams from devices');

							if (this.client) {
								this.client.end();
							}
							if (this.client) {
								wait_recon = setTimeout(async () => {
									this.client.on('connect', async () => {
										this.log.debug('reconnected');
										this.msgReconnects++;
										await this.setStateAsync('info.msgReconnects', {
											val: this.msgReconnects,
											ack: true
										});
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
								}, 2000); // waiting time after client.end()
							}
						}, 30 * 1000); // retrigger time
					}
				});

				this.client.on('close', () => {
					this.setState('info.connection', false, true);
					this.log.info('ecfolow connection closed');
				});
				this.client.on('error', (error) => {
					this.setState('info.connection', false, true);
					this.log.error('Error inconnection to Ecoflow MQTT-Broker:' + error);
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
			if (recon_timer) clearTimeout(recon_timer);
			if (wait_recon) clearTimeout(wait_recon);
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
				this.log.info('(ack=false) ->cmd : channel ' + channel + ' state ' + item);
				let topic = '';
				if (item === 'lastQuotas') {
					topic = '/app/' + this.mqttUserId + '/' + device + '/thing/property/get';
					//reset of switch
					await this.setStateAsync(device + '.' + channel + '.' + item, false, true);
				} else {
					topic = '/app/' + this.mqttUserId + '/' + device + '/thing/property/set';
				}
				let devicetype = '';
				let type = '';
				let cmd = null;
				if (this.pstreams && this.pstreamCmd) {
					if (this.pstreams[device]) {
						devicetype = this.pstreams[device]['pstreamType'];
						type = 'stream'; //includes also plugs
						cmd = this.pstreamCmd[devicetype];
					}
				} else {
					this.log.warn('pstreams -> ' + this.pstreams + ' or pstreamCmd problematic -> ' + this.pstreamCmd);
				}
				if (this.pstations && this.pstationCmd) {
					if (this.pstations[device]) {
						devicetype = this.pstations[device]['pstationType'];
						type = 'station';
						cmd = this.pstationCmd[devicetype];
					}
				} else {
					this.log.warn(
						'pstations -> ' +
							this.pstations +
							' or pstationCmd problematic -> ' +
							JSON.stringify(this.pstationCmd)
					);
				}
				switch (type) {
					case 'stream':
						if (devicetype !== '' && devicetype !== 'none' && cmd) {
							const msgBuf = ef.prepareStreamCmd(
								this,
								device,
								devicetype,
								item,
								state.val,
								cmd[channel][item]
							);
							this.log.debug('msgBuf ' + msgBuf);
							this.log.debug('converted  Hex-String:' + Buffer.from(msgBuf).toString('hex'));

							if (this.client) {
								this.client.publish(topic, msgBuf, { qos: 1 }, (error) => {
									if (error) {
										this.log.error('Error when publishing the MQTT message:: ' + error);
									} else {
										if (this.config.msgCmdPlug && type === 'plug') {
											this.log.debug('Message succesfully published.');
										} else if (this.config.msgCmdPstream) {
											this.log.debug('Message succesfully published.');
										}
									}
								});
							}
						} else {
							this.log.debug('nothing to send ' + devicetype + '   ' + JSON.stringify(cmd));
						}
						break;
					case 'station':
						if (devicetype !== '' && devicetype !== 'none' && cmd) {
							const msg = await ef.prepareStationCmd(
								this,
								device,
								devicetype,
								item,
								state.val,
								cmd[channel][item]
							);
							if (Object.keys(msg).length > 0) {
								this.log.debug('publish  ' + topic);
								this.log.debug('publish  ' + JSON.stringify(msg));

								if (this.client) {
									this.client.publish(topic, JSON.stringify(msg), { qos: 1 }, (error) => {
										if (error) {
											this.log.error('Error when publishing the MQTT message: ' + error);
										} else {
											if (this.config.msgCmdPstation) {
												this.log.debug('Message succesfully published.');
											}
										}
									});
								}
							} else {
								this.log.debug('nothing to send ' + devicetype + cmd);
							}
						} else {
							this.log.debug('nothing send ' + devicetype + '  ' + JSON.stringify(cmd));
						}
						break;
					default:
						break;
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
	async onMessage(obj) {
		this.log.info('send command');
		//this.log.info('obj ' + JSON.stringify(obj));
		//this.log.info('obj ' + obj.message);
		if (!obj || !obj.command) {
			return;
		}
		switch (obj.command) {
			case 'create':
				if (obj.callback && obj.message) {
					this.log.info('send msg create mqtt data');
					const user = obj.message['user'];
					const pwd = obj.message['pass'];
					if (user && pwd) {
						try {
							const login = await ef.getEcoFlowMqttCredits(this, user, pwd);

							let result = {
								native: {
									mqttUserId: login.UserID,
									mqttUserName: login.User,
									mqttPwd: login.Password,
									mqttClientId: login.clientID
								}
							};
							this.sendTo(obj.from, obj.command, result, obj.callback);
						} catch (error) {
							this.log.error(error);
							this.sendTo(
								obj.from,
								obj.command,
								{
									error: 'Error getting mqtt credentials. See log for more information.'
								},
								obj.callback
							);
						}
					} else {
						this.sendTo(obj.from, obj.command, { error: 'user and pwd are undefined' }, obj.callback);
					}
				}
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
						this.sendTo(obj.from, obj.command, { result: 'timeout' }, obj.callback);
					}, 2000);

					// If connected, return success
					_client.on('connect', () => {
						_client.end();
						clearTimeout(timeout);
						this.sendTo(obj.from, obj.command, { result: 'connected' }, obj.callback);
					});
					// If connected, return success
					_client.on('error', (err) => {
						_client.end();
						clearTimeout(timeout);
						this.log.warn(`Error on mqtt test: ${err}`);
						this.sendTo(obj.from, obj.command, { error: err }, obj.callback);
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
						this.sendTo(obj.from, obj.command, { result: 'timeout' }, obj.callback);
					}, 2000);

					// If connected, return success
					this.mqttClient.on('connect', () => {
						this.mqttClient.end();
						clearTimeout(timeout);
						this.sendTo(obj.from, obj.command, { result: 'connected' }, obj.callback);
					});
					// If connected, return success
					this.mqttClient.on('error', (err) => {
						this.mqttClient.end();
						clearTimeout(timeout);
						this.log.warn(`Error on mqtt test: ${err}`);
						this.sendTo(obj.from, obj.command, { error: err }, obj.callback);
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
