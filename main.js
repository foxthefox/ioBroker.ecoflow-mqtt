'use strict';

/*
 * Created with @iobroker/create-adapter v2.5.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const myutils = require('./lib/adapter_utils.js');
const ef = require('./lib/ecoflow_utils.js');
const ha = require('./lib/ha_utils.js');
const mqtt = require('mqtt');

const { isObject } = require('util');
const { debug } = require('console');
const { json } = require('stream/consumers');

// Load your modules here, e.g.:
// const fs = require("fs");

let recon_timer = null;
let lastQuotInterval = null;
let haLoadInterval = null;

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
		this.pdevices = {};
		this.pdevicesStates = {};
		this.pdevicesStatesDict = {};
		this.pdevicesStates = {};
		this.pdevicesCmd = {};
		this.quotas = {};
		this.haDevices = null;
		this.haCounter = 0;
		this.haCountMem = 0;

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

			//modify this.pstationStates
			this.log.info('your configration:');
			this.log.info('powerstream  -> ' + JSON.stringify(this.config.pstreams));
			this.log.info('powerstation -> ' + JSON.stringify(this.config.pstations));
			this.log.info('smartplug    -> ' + JSON.stringify(this.config.plugs));
			this.log.info('wave         -> ' + JSON.stringify(this.config.waves));
			this.log.info('glacier      -> ' + JSON.stringify(this.config.glaciers));
			//this.log.info('blade      -> ' + JSON.stringify(this.config.blades));
			//this.log.info('generator      -> ' + JSON.stringify(this.config.generators));

			try {
				//loop durch alle Geräte

				const confdevices = [].concat(
					this.config.pstreams,
					this.config.plugs,
					this.config.pstations,
					this.config.waves,
					this.config.glaciers
				);
				if (confdevices.length > 0) {
					//loop durch alle pstations
					for (let psta = 0; psta < confdevices.length; psta++) {
						let devtype = confdevices[psta]['devType'];
						if (devtype !== 'none' && devtype !== '') {
							const id = confdevices[psta]['devId'];
							const name = confdevices[psta]['devName'];
							const haEnable = confdevices[psta]['haEnable'];
							this.pdevices[id] = {};
							this.pdevices[id]['devType'] = devtype;
							this.pdevices[id]['devName'] = name;
							this.pdevices[id]['haEnable'] = haEnable;
							if (confdevices[psta]['pstationsSlave1']) {
								this.pdevices[id]['pstationsSlave1'] = confdevices[psta]['pstationsSlave1'];
							}
							if (confdevices[psta]['pstationsSlave2']) {
								this.pdevices[id]['pstationsSlave2'] = confdevices[psta]['pstationsSlave2'];
							}

							let devStates = null;
							if (devtype === 'pstream600' || devtype === 'pstream800' || devtype === 'plug') {
								devStates = require('./lib/ecoflow_data.js').pstreamStates;
							} else {
								devStates = require('./lib/ecoflow_data.js').pstationStates;
							}

							if (devtype !== 'none' && devStates) {
								let devupd = null;
								if (devtype === 'pstream600' || devtype === 'pstream800' || devtype === 'plug') {
									devupd = require('./lib/ecoflow_data.js').pstreamRanges[devtype];
								} else {
									devupd = require('./lib/ecoflow_data.js').pstationRanges[devtype];
								}
								this.log.debug('device upd ' + JSON.stringify(devupd));
								if (devupd) {
									if (Object.keys(devupd).length > 0) {
										for (let channel in devupd) {
											for (let type in devupd[channel]) {
												for (let state in devupd[channel][type]) {
													for (let value in devupd[channel][type][state]) {
														this.log.debug(
															'manipulate: ' +
																channel +
																'/' +
																state +
																' old--new ' +
																devStates[channel][type][state][value] +
																' -- ' +
																devupd[channel][type][state][value]
														);
														devStates[channel][type][state][value] =
															devupd[channel][type][state][value];
													}
												}
											}
										}
										//we have to store the states individually, because same state can have different ranges, factors in different devices
									} else {
										this.log.error('device states upd not possible');
									}
								} else {
									this.log.warn('did not get devupd');
								}
							} else {
								this.log.error('devType not set -> ' + devtype + 'or no device states -> ' + devStates);
							}
							//devStates is now modfied and used for the object creation
							//create pdevices objects
							const origdevtype = devtype;
							if (devtype === 'pstream600' || devtype === 'pstream800') {
								devtype = 'pstream';
							}

							let pdevicesStatesDict = null;
							let pdevicesCmd = null;
							if (devtype === 'pstream' || devtype === 'plug') {
								pdevicesStatesDict = require('./lib/ecoflow_data.js').pstreamStatesDict[devtype];
								pdevicesCmd = require('./lib/ecoflow_data.js').pstreamCmd[origdevtype];
							} else {
								pdevicesStatesDict = require('./lib/ecoflow_data.js').pstationStatesDict[origdevtype];
								pdevicesCmd = require('./lib/ecoflow_data.js').pstationCmd[origdevtype];
							}
							//create device objects
							//we store only the dict from used components
							if (!this.pdevicesStatesDict[origdevtype]) {
								this.pdevicesStatesDict[origdevtype] = pdevicesStatesDict;
							}
							if (!this.pdevicesStates[origdevtype]) {
								this.pdevicesStates[origdevtype] = ef.statesFromDict(devStates, pdevicesStatesDict);
							}
							//we store only the cmd from used components
							if (!this.pdevicesCmd[origdevtype]) {
								this.pdevicesCmd[origdevtype] = pdevicesCmd;
							}

							if (devtype !== 'none' && devStates && pdevicesStatesDict) {
								this.log.info('start device state creation ->' + devtype + ' for Id ' + id);
								try {
									if (this.config.msgStateCreation) {
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
									for (let part in pdevicesStatesDict) {
										if (this.config.msgStateCreation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + part);
										}
										await myutils.createMyChannel(this, id, part, part, 'channel');
										for (let key in pdevicesStatesDict[part]) {
											let type = pdevicesStatesDict[part][key]['entity'];
											if (type !== 'icon') {
												if (devStates[part][type][key]) {
													await myutils.createMyState(
														this,
														id,
														part,
														key,
														devStates[part][type][key]
													);
												} else {
													this.log.info(
														'not created/mismatch ->' + part + ' ' + key + ' ' + type
													);
												}
											}
										}
									}
									if (devtype === 'pstream' || devtype === 'plug') {
										let part = 'time_task_config_post';
										if (this.config.msgStateCreation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + part);
										}
										//createMyChannel(adapter, device, channel, name, role)
										await myutils.createMyChannel(this, id, part, part, 'channel');
										for (let j = 1; j < 12; j++) {
											const task = 'task' + j;
											await myutils.createMyChannel(this, id + '.' + part, task, task, 'channel');
											//taskIndex
											//createMyState(adapter, device, channel, datapoint, stateObj)
											await myutils.createMyState(
												this,
												id,
												part + '.' + task,
												'taskIndex',
												devStates[part]['tasks']['taskIndex']
											);
											//type
											await myutils.createMyState(
												this,
												id,
												part + '.' + task,
												'type',
												devStates[part]['tasks']['type']
											);
											//timerange
											await myutils.createMyChannel(
												this,
												id + '.' + part + '.' + task,
												'timeRange',
												'timeRange',
												'channel'
											);
											for (let key in devStates[part]['tasks']['timeRange']) {
												if (key === 'startTime' || key === 'stopTime') {
													for (let key2 in devStates[part]['tasks']['timeRange'][key]) {
														await myutils.createMyState(
															this,
															id,
															part + '.' + task + '.timeRange.' + key,
															key2,
															devStates[part]['tasks']['timeRange'][key][key2]
														);
													}
												} else {
													await myutils.createMyState(
														this,
														id,
														part + '.' + task + '.timeRange',
														key,
														devStates[part]['tasks']['timeRange'][key]
													);
												}
											}
										}
									} else if (devtype === 'deltamax') {
										let part = 'timeTask';
										if (this.config.msgStateCreation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + part);
										}
										//createMyChannel(adapter, device, channel, name, role)
										await myutils.createMyChannel(this, id, part, part, 'channel');
										//"totalTaskNum"
										await myutils.createMyState(
											this,
											id,
											part,
											'totalTaskNum',
											devStates[part]['totalTaskNum']
										);
										for (let j = 0; j < 6; j++) {
											const task = 'task' + j;
											await myutils.createMyChannel(this, id + '.' + part, task, task, 'channel');

											for (let type in devStates[part]) {
												if (type !== 'totalTaskNum') {
													for (let key in devStates[part][type]) {
														await myutils.createMyState(
															this,
															id,
															part + '.' + task,
															key,
															devStates[part][type][key]
														);
													}
												}
											}
										}
									}
									this.log.info('pdevices states created for ' + id + ' / ' + devtype + ' / ' + name);
									//first additional battery
									if (confdevices[psta]['pstationsSlave1']) {
										if (this.config.msgStateCreation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + 'bmsSlave1');
										}
										await myutils.createMyChannel(this, id, 'bmsSlave1', 'bmsSlave1', 'channel');
										for (let key in pdevicesStatesDict['bmsMaster']) {
											let type = pdevicesStatesDict['bmsMaster'][key]['entity'];
											if (type !== 'icon') {
												if (devStates['bmsMaster'][type][key]) {
													await myutils.createMyState(
														this,
														id,
														'bmsSlave1',
														key,
														devStates['bmsMaster'][type][key]
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
									if (confdevices[psta]['pstationsSlave2']) {
										if (this.config.msgStateCreation) {
											this.log.debug('____________________________________________');
											this.log.debug('create  channel ' + 'bmsSlave2');
										}
										await myutils.createMyChannel(this, id, 'bmsSlave2', 'bmsSlave2', 'channel');
										for (let key in pdevicesStatesDict['bmsMaster']) {
											let type = pdevicesStatesDict['bmsMaster'][key]['entity'];
											if (type !== 'icon') {
												if (devStates['bmsMaster'][type][key]) {
													await myutils.createMyState(
														this,
														id,
														'bmsSlave2',
														key,
														devStates['bmsMaster'][type][key]
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
									this.log.error('create states ' + error);
								}
							} else {
								this.log.error(
									'something empty ID->' +
										id +
										'states -> ' +
										devStates +
										' dict -> ' +
										pdevicesStatesDict +
										' type -> ' +
										devtype
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

		//Homeassistant connection
		if (this.config.haMqttEnable) {
			this.haDevices = ha.defineHaDevices(this.pdevices);
			this.log.info('HA communication:');
			this.log.info('devices  -> ' + JSON.stringify(this.config.pstreams));
		}
		myutils.createInfoStates(this, this.config.haMqttEnable);

		//create subscription topics
		let topics = [];
		if (this.mqttUserId.length > 0) {
			topics = topics.concat(ef.createSubscribeTopics(this.mqttUserId, this.pdevices));
		}
		this.log.debug('subscription topics EF ' + JSON.stringify(topics));

		//connect to Ecoflow
		const optionsMqtt = {
			port: this.mqttPort || 8883,
			clientId: this.mqttClientId,
			username: this.mqttUserName,
			password: this.mqttPwd
		};
		if (optionsMqtt.clientId.length > 18 && optionsMqtt.username.length > 18 && optionsMqtt.password.length > 18) {
			try {
				this.log.info('going to connect to mqtt broker');
				this.log.debug('your mqtt configration:');
				this.log.debug('user          -> ' + this.mqttUserId);
				this.log.debug('name          -> ' + this.mqttUserName);
				this.log.debug('client        -> ' + this.mqttClientId);
				this.log.debug('port          -> ' + this.mqttPort);
				this.log.debug('url           -> ' + this.mqttUrl);
				this.log.debug('ptotocol      -> ' + this.mqttProtocol);

				this.client = mqtt.connect(this.mqttUrl + ':' + this.mqttPort, optionsMqtt);

				this.client.on('connect', async () => {
					this.log.debug('connected');
					if (topics.length > 0) {
						if (this.client) {
							this.client.subscribe(topics, async (err) => {
								if (!err) {
									this.log.debug('subscribed the topics EF');
									//initial and interval for requesting last quotas
									await ef.getLastProtobufQuotas(this, this.pdevices);
									lastQuotInterval = setInterval(async () => {
										await ef.getLastProtobufQuotas(this, this.pdevices);
									}, 300 * 1000); // lastQuot every 5min
								} else {
									this.log.warn('could not subscribe to topics ' + err);
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
					if (this.pdevices) {
						if (this.pdevices[topic]) {
							devtype = this.pdevices[topic]['devType'];
						} else {
							this.log.debug(topic + ' not part of configured devices');
						}
					}

					if (devtype === 'pstream600' || devtype === 'pstream800' || devtype === 'plug') {
						if (this.pdevicesStatesDict && this.pdevicesStates) {
							let msgdecode = null;
							try {
								msgdecode = ef.pstreamDecode(this, message);
							} catch (error) {
								this.log.debug('pstreamDecode call ->' + error);
							}

							if (this.config.msgUpdatePstream && msgtype === 'update') {
								if (this.config.showHex) {
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
								this.log.debug(topic + '  ' + devtype + ' data update : ' + JSON.stringify(msgdecode));
							}
							if (this.config.msgSetGetPstream && msgtype !== 'update') {
								if (this.config.showHex) {
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
								this.log.debug(
									topic + ' ' + devtype + ' received ' + msgtype + ' -> ' + JSON.stringify(msgdecode)
								);
							}
							if (msgtype === 'update' || msgtype === 'get_reply') {
								if (msgdecode !== null && typeof msgdecode === 'object') {
									if (Object.keys(msgdecode).length > 0) {
										//storeStreamPayload handles multiple objects
										const haupdate = await ef.storeStreamPayload(
											this,
											this.pdevicesStatesDict[devtype],
											this.pdevicesStates[devtype],
											topic,
											msgdecode,
											devtype,
											this.pdevices[topic]['haEnable']
										);
										if (haupdate.length > 0) {
											if (this.haClient) {
												for (let i = 0; i < haupdate.length; i++) {
													if (typeof haupdate[i].payload === 'string') {
														this.haClient.publish(
															haupdate[i].topic,
															haupdate[i].payload,
															{ qos: 1 },
															(error) => {
																if (error) {
																	this.log.error(
																		'Error when publishing the HA MQTT message: ' +
																			error
																	);
																} else {
																	this.haCounter++;
																	if (
																		this.config.msgHaOutgoing &&
																		i === haupdate.length - 1
																	) {
																		this.log.debug(
																			topic +
																				' ha update ' +
																				JSON.stringify(haupdate)
																		);
																		this.log.debug(
																			'sent ' +
																				String(i + 1) +
																				' update objects to HA for ' +
																				topic
																		);
																	}
																}
															}
														);
													} else {
														this.log.warn(
															'not a string! : ' +
																haupdate[i].topic +
																'  ' +
																haupdate[i].payload
														);
													}
												}
											}
										}
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
						} else if (devtype === 'pstream600' || devtype === 'pstream800') {
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
							this.pdevicesStatesDict &&
							this.pdevicesStates &&
							(msgtype === 'get_reply' || msgtype === 'update')
						) {
							const dict = this.pdevicesStatesDict[devtype];
							const haupdate = await ef.storeStationPayload(
								this,
								dict,
								this.pdevicesStates[devtype],
								topic,
								JSON.parse(message.toString()),
								this.pdevices[topic]['haEnable']
							);
							if (haupdate.length > 0) {
								if (this.haClient) {
									for (let i = 0; i < haupdate.length; i++) {
										if (typeof haupdate[i].payload === 'string') {
											this.haClient.publish(
												haupdate[i].topic,
												haupdate[i].payload,
												{ qos: 1 },
												(error) => {
													if (error) {
														this.log.error(
															'Error when publishing the HA MQTT message: ' + error
														);
													} else {
														this.haCounter++;
														if (this.config.msgHaOutgoing && i === haupdate.length - 1) {
															this.log.debug(
																topic + ' ha update ' + JSON.stringify(haupdate)
															);
															this.log.debug(
																'sent ' +
																	String(i + 1) +
																	' update objects to HA for ' +
																	topic
															);
														}
													}
												}
											);
										} else {
											this.log.warn(
												'not a string! : ' + haupdate[i].topic + '  ' + haupdate[i].payload
											);
										}
									}
								}
							}
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
						recon_timer = setTimeout(async () => {
							this.log.debug('no telegrams from devices within 10min');
							this.msgReconnects++;
							await this.setStateAsync('info.msgReconnects', {
								val: this.msgReconnects,
								ack: true
							});
						}, 600 * 1000); // retrigger time
					}
				});

				this.client.on('close', () => {
					this.setState('info.connection', false, true);
					//all info/status auf offline setzen
					this.log.info('ecoflow connection closed');
				});
				this.client.on('error', (error) => {
					this.setState('info.connection', false, true);
					this.log.error('Error inconnection to Ecoflow MQTT-Broker:' + error);
				});

				this.client.on('reconnect', async () => {
					this.log.debug('Reconnecting to Ecoflow MQTT broker...');
				});
			} catch (error) {
				this.log.error('create mqtt client handling ' + error);
			}
		} else {
			this.log.warn('check your mqtt credentials, they seem too short');
		}

		//connect to Homeassistant
		if (this.config.haMqttEnable) {
			try {
				this.log.info('going to connect to HA mqtt broker');
				this.log.debug('your HA mqtt configration:');
				this.log.debug('topic         -> ' + this.haTopic);
				this.log.debug('user          -> ' + this.config.haMqttUserId);
				this.log.debug('port          -> ' + this.config.haMqttPort);
				this.log.debug('url           -> ' + this.config.haMqttUrl);
				this.log.debug('ptotocol      -> ' + this.config.haMqttProtocol);
				this.log.debug('devices       -> ' + JSON.stringify(this.haDevices));

				const optionsHaMqtt = {
					port: this.config.haMqttPort || 1883,
					username: this.config.haMqttUserId,
					password: this.config.haMqttUserPWd,
					will: {
						topic: this.config.haTopic + '/iob/info/status',
						payload: 'offline',
						qos: 1,
						retain: false
					}
				};

				this.haClient = mqtt.connect(
					this.config.haMqttProtocol + this.config.haMqttUrl + ':' + this.config.haMqttPort,
					optionsHaMqtt
				);

				this.haClient.on('connect', async () => {
					await this.setStateAsync('info.haConnection', { val: 'online', ack: true });
					this.log.debug('HA connected');
					if (this.haDevices.length > 0) {
						//iob
						const iob_topic = 'homeassistant/binary_sensor/iob/status/config';
						const iob_payload = {
							unique_id: 'iob_0_status',
							device: {
								identifiers: 'iob_0_status',
								manufacturer: 'foxthefox',
								name: 'IOB connector',
								model: 'ecoflow-mqtt Adapter',
								sw_version: '0.0.22',
								suggested_area: 'energy'
							},
							device_class: 'connectivity',
							payload_on: 'online',
							payload_off: 'offline',
							state_topic: this.config.haTopic + '/iob/info/status',
							name: 'ioBroker Connection'
						};
						this.haClient.publish(
							iob_topic,
							JSON.stringify(iob_payload),
							{ qos: 1, retain: true },
							(error) => {
								if (error) {
									this.log.error('Error when publishing IOB autodiscovery: ' + error);
								} else {
									this.haCounter++;
									if (this.config.msgHaAutoDiscovery) {
										this.log.debug('sent IOB autodiscovery object to HA');
									}
								}
							}
						);
						this.haClient.publish(
							this.config.haTopic + '/iob/info/status',
							'online',
							{ qos: 1 },
							(error) => {
								if (error) {
									this.log.error('Error when publishing the HA iob online message: ' + error);
								} else {
									this.haCounter++;
									if (this.config.msgHaAutoDiscovery) {
										this.log.debug('sent ONLINE for IOB status to HA');
									}
								}
							}
						);

						for (let j = 0; j < this.haDevices.length; j++) {
							const id = this.haDevices[j];
							const type = this.pdevices[id]['devType'];
							let bat1 = false;
							let bat2 = false;
							if (this.pdevices[id]['pstationsSlave1']) {
								bat1 = this.pdevices[id]['pstationsSlave1'];
							}
							if (this.pdevices[id]['pstationsSlave2']) {
								bat2 = this.pdevices[id]['pstationsSlave2'];
							}

							const discovery = ha.prepareDiscoveryMessage(
								this.haDevices[j],
								type,
								this.pdevicesStatesDict[type],
								this.pdevicesStates[type],
								this.config.haTopic,
								bat1,
								bat2,
								'0.0.22'
							);
							if (this.config.msgHaAutoDiscovery) {
								this.log.debug(id + ' autoconf: ' + discovery);
							}
							for (let i = 0; i < discovery.length; i++) {
								this.haClient.publish(
									discovery[i].topic,
									JSON.stringify(discovery[i].payload),
									{ qos: 1, retain: true },
									(error) => {
										if (error) {
											this.log.error('Error when publishing the HA MQTT message: ' + error);
										} else {
											this.haCounter++;
											if (this.config.msgHaAutoDiscovery && i === discovery.length - 1) {
												this.log.debug('sent ' + i + ' autodiscovery objects to HA for ' + id);
											}
										}
									}
								);
							}
							const status = await this.getStateAsync(id + '.info.status');
							if (status && status.val) {
								//eventuell zu früh um das zu senden
								const mode = status.val === 'online' ? 'online' : 'offline';
								this.haClient.publish(
									this.config.haTopic + '/' + id + '/info/status',
									mode,
									{ qos: 1 },
									(error) => {
										if (error) {
											this.log.error('Error when publishing the HA MQTT message: ' + error);
										} else {
											this.haCounter++;
											if (this.config.msgHaAutoDiscovery) {
												this.log.debug('sent ' + mode + ' to HA for ' + id);
											}
										}
									}
								);
							}
							this.haClient.subscribe(
								this.config.haTopic + '/' + this.haDevices[j] + '/set/#',
								async (err) => {
									if (!err) {
										this.log.debug('subscribed the topics HA');
									} else {
										this.log.warn('could not subscribe to topics HA ' + err);
									}
								}
							);
						}
						// this.setState('HA info.connection', true, true);
					}
				});

				this.haClient.on('message', async (topic, message) => {
					if (this.config.msgHaIncomming) {
						this.log.debug('HA msg: ' + topic + ' ' + message + ' ' + JSON.stringify(message));
					}
					const idsplit = topic.split('/');
					const device = idsplit[1];
					const channel = idsplit[3];
					const item = idsplit[4];
					let devtype = '';
					if (this.pdevices) {
						if (this.pdevices[device] && idsplit[2] === 'set') {
							devtype = this.pdevices[device]['devType'];
							//select decoding
							//select_obj
							//split message and set the state
							//must contain /set/
							if (this.config.msgHaIncomming) {
								this.log.debug(
									devtype +
										': processing ' +
										device +
										'  ' +
										channel +
										'   ' +
										item +
										' value : ' +
										String(message)
								);
							}
							let value;
							if (this.pdevicesStatesDict[devtype] && this.pdevicesStates) {
								const type = this.pdevicesStatesDict[devtype][channel][item]['entity'];
								if (type === 'switch') {
									const payloadtrue = this.pdevicesStates[devtype][channel]['switch'][item][
										'payload_on'
									];
									//const payloadfalse = this.pdevicesStates[devtype][channel]['switch'][item]['payload_off']
									value = String(message) === payloadtrue ? true : false;
								} else if (type === 'level') {
									if (
										this.pdevicesStates[devtype][channel]['level'][item]['entity_type'] === 'number'
									) {
										value = parseInt(String(message));
									} else if (
										this.pdevicesStates[devtype][channel]['level'][item]['entity_type'] === 'select'
									) {
										try {
											value = this.pdevicesStates[devtype][channel]['level'][item]['select_obj'][
												String(message)
											];
										} catch (error) {
											this.log.error(
												'Wrong selection value ' +
													String(message) +
													' for ' +
													device +
													'  ' +
													channel +
													' possible is : ' +
													this.pdevicesStates[devtype][channel]['level'][item]['select_obj'] +
													'   -> ' +
													error
											);
										}
									} else {
										this.log.debug('type level but not number or select ');
									}
								}
							} else {
								this.log.debug('states or dict missing for cmd evaluation');
							}
							if (this.config.msgHaIncomming) {
								this.log.debug(
									'sending cmd value ' + value + ' to ' + device + '.' + channel + '.' + item
								);
							}
							await this.setStateAsync(device + '.' + channel + '.' + item, { val: value, ack: false });
						} else {
							this.log.debug(topic + ' not part of configured devices');
						}
					}
				});

				this.haClient.on('close', () => {
					this.setState('info.haConnection', { val: 'online', ack: true });
					this.log.info('HA connection closed');
				});
				this.haClient.on('error', (error) => {
					this.log.error('Error inconnection to HA MQTT-Broker:' + error);
				});

				this.haClient.on('reconnect', async () => {
					this.log.debug('Reconnecting to HA MQTT broker...');
				});
			} catch (error) {
				this.log.error('create HA mqtt client handling ' + error);
			}
		}
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	async onUnload(callback) {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			// clearInterval(interval1);
			if (recon_timer) clearTimeout(recon_timer);
			if (lastQuotInterval) clearInterval(lastQuotInterval);
			if (haLoadInterval) clearInterval(haLoadInterval);
			if (this.haClient && this.haDevices) {
				// await ha.publishAsync(this, this.config.haTopic + '/iob/info/status', 'offline', 1);

				this.haClient.publish(this.config.haTopic + '/iob/info/status', 'offline', { qos: 1 }, (error) => {
					if (error) {
						this.log.error('Error when publishing the HA MQTT message: ' + error);
					} else {
						this.haCounter++;
						this.log.debug('sent OFFLINE  to HA for IOB ');
					}
				});

				for (let i = 0; i < this.haDevices.length; i++) {
					this.haClient.publish(
						this.config.haTopic + '/' + this.haDevices[i] + '/info/status',
						'offline',
						{ qos: 1 },
						(error) => {
							if (error) {
								this.log.error('Error when publishing the HA MQTT message: ' + error);
							} else {
								this.haCounter++;
								this.log.debug('sent OFFLINE  to HA for ' + this.haDevices[i]);
							}
						}
					);
				}
			}
			if (this.client) {
				this.client.end();
			}

			if (this.haClient) {
				await this.setStateAsync('info.haConnection', { val: 'offline', ack: true });
				this.haClient.end();
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
				if (item === 'latestQuotas') {
					topic = '/app/' + this.mqttUserId + '/' + device + '/thing/property/get';
					//reset of switch
					// not needed we trigger at 0 and 1
					// await this.setStateAsync(device + '.' + channel + '.' + item, {val:false, ack: true});
				} else {
					topic = '/app/' + this.mqttUserId + '/' + device + '/thing/property/set';
				}
				let devicetype = '';
				let type = '';
				let cmd = null;

				if (this.pdevices && this.pdevicesCmd) {
					if (this.pdevices[device]) {
						switch (this.pdevices[device]['devType']) {
							case 'pstream600':
							case 'pstream800':
							case 'plug':
								devicetype = this.pdevices[device]['devType'];
								type = 'stream'; //includes also plugs
								cmd = this.pdevicesCmd[devicetype];
								break;
							default:
								// all other is not protobuf
								devicetype = this.pdevices[device]['devType'];
								type = 'station'; //includes also glacier, wave
								cmd = this.pdevicesCmd[devicetype];
								break;
						}
					} else {
						this.log.warn(
							'pdevices -> ' +
								JSON.stringify(this.pdevices) +
								' or pdevicesCmd problematic -> ' +
								JSON.stringify(this.pdevicesCmd)
						);
					}
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
							if (this.config.msgCmdPstream && this.config.showHex) {
								this.log.debug('converted  Hex-String:' + Buffer.from(msgBuf).toString('hex'));
							}

							if (this.client) {
								this.client.publish(topic, msgBuf, { qos: 1 }, (error) => {
									if (error) {
										this.log.error('Error when publishing the MQTT message:: ' + error);
									} else {
										if (this.config.msgCmdPstream) {
											this.log.debug(topic + ' Message succesfully published.');
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
								if (this.config.msgCmdPstation) {
									this.log.debug('publish  ' + topic);
									this.log.debug('publish  ' + JSON.stringify(msg));
								}

								if (this.client) {
									this.client.publish(topic, JSON.stringify(msg), { qos: 1 }, (error) => {
										if (error) {
											this.log.error('Error when publishing the MQTT message: ' + error);
										} else {
											if (this.config.msgCmdPstation) {
												this.log.debug(topic + ' Message succesfully published.');
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
			} else {
				const idsplit = id.split('.');
				const device = idsplit[2];
				const channel = idsplit[3];
				const item = idsplit[4];
				if (channel === 'info' && item === 'status') {
					if (this.haClient && this.pdevices[device]['haEnable'] === true) {
						this.haClient.publish(
							this.config.haTopic + '/' + device + '/info/status',
							String(state.val),
							{ qos: 1 },
							(error) => {
								if (error) {
									this.log.error(device + ' error when publishing the HA status message: ' + error);
								} else {
									this.haCounter++;
									this.log.info(device + 'sent status' + state.val + ' to HA');
								}
							}
						);
						if (this.pdevices && this.pdevicesStatesDict && this.pdevicesStates && this.config.haTopic) {
							const id = device;
							const type = this.pdevices[id]['devType'];
							let bat1 = false;
							let bat2 = false;
							if (this.pdevices[id]['pstationsSlave1']) {
								bat1 = this.pdevices[id]['pstationsSlave1'];
							}
							if (this.pdevices[id]['pstationsSlave2']) {
								bat2 = this.pdevices[id]['pstationsSlave2'];
							}

							const update = ha.prepareFullHaUpd(
								id,
								this.pdevicesStatesDict[type],
								this.pdevicesStates[type],
								this.config.haTopic,
								bat1,
								bat2
							);
							if (this.config.msgHaStatusInitial) {
								this.log.debug(id + ' initial update: ' + update.length + ' objects ');
								//this.log.debug(id + ' initial update: ' + JSON.stringify(update));
							}
							let missing = [];
							for (let i = 0; i < update.length; i++) {
								const value = await this.getStateAsync(update[i].getId).catch((e) => {
									this.log.warn('problem getting state for initialization ' + e);
								});
								if (value) {
									let val;
									try {
										if (update[i].entity === 'switch') {
											val = value.val === true ? update[i].on : update[i].off;
										} else if (update[i].entity === 'select') {
											try {
												val = update[i].states[value.val];
											} catch (error) {
												this.log.warn(
													'value not in range ' + value.val + '  ' + update[i].states
												);
											}
										} else if (update[i].entity === 'text') {
											val = value.val;
										} else {
											val = String(value.val);
										}
										if (this.config.msgHaStatusInitial) {
											this.log.debug(
												id + ' update [' + i + '] ' + update[i].topic + ' with ' + val
											);
										}
										if (typeof val === 'string' && val !== 'undefined') {
											this.haClient.publish(update[i].topic, val, { qos: 1 }, (error) => {
												if (error) {
													this.log.error(
														'Error when publishing the HA MQTT message: ' + error
													);
												} else {
													this.haCounter++;
													if (this.config.msgHaStatusInitial && i === update.length - 1) {
														this.log.debug(
															'FINISHED sent ' +
																i +
																' initial updates objects to HA for ' +
																id
														);
													}
												}
											});
										} else {
											this.log.warn('not a STRING ! : ' + update[i].topic + ' with ' + val);
										}
									} catch (error) {
										this.log.warn(
											update[i].getId + ' problem initialiizing HA ' + value.val + '-> ' + error
										);
									}
								} else {
									missing.push(update[i].getId);
									this.log.warn(update[i].getId + ' getState ' + JSON.stringify(value));
								}
							}
							if (this.config.msgHaStatusInitial && missing.length > 0) {
								this.log.debug('Partly FINISHED sent initial updates objects to HA for ' + id);
								this.log.debug(id + ' missing items ' + JSON.stringify(missing));
							}
						}
					}
				}
				if (channel === 'info' && item === 'haConnection') {
					if (state.val === 'online') {
						//10s Intervall
						setInterval(async () => {
							const msgcnt = this.haCounter - this.haCountMem;
							this.haCountMem = this.haCounter;
							this.setStateAsync('info.haConnAvgLoad', { val: msgcnt, ack: true });
						}, 10 * 1000);
					} else {
						//stop interval
						if (haLoadInterval) clearInterval(haLoadInterval);
						this.setStateAsync('info.haConnAvgLoad', { val: 0, ack: true });
					}
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

			case 'quota':
				if (obj.callback && obj.message) {
					this.log.info('send msg quota data');
					await ef.getLastJSONQuotas(this, this.pdevices);
					const timeout = setTimeout(() => {
						try {
							const quotas = JSON.stringify(this.quotas);
							this.sendTo(
								obj.from,
								obj.command,
								{
									error: 'device data:' + quotas
								},
								obj.callback
							);
						} catch (error) {
							this.log.debug('send quota req ->' + error);
							clearTimeout(timeout);
						}
					}, 2000);
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
					// If not connected, return error
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
					// If not connected, return error
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
