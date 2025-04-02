const deviceStates = {
	plug_heartbeat: {
		number: {
			volt: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Plug AC voltage',
				unique_id: 'efplug_volt',
				role: 'value'
			},
			maxCur: {
				min: 0,
				max: 11,
				unit_of_measurement: 'A',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Plug AC max. current',
				unique_id: 'efplug_maxCur',
				role: 'value'
			},
			current: {
				min: 0,
				max: 11,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Plug AC current',
				unique_id: 'efplug_current',
				role: 'value'
			},
			watts: {
				min: 0,
				max: 2500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Plug AC power',
				unique_id: 'efplug_watts',
				role: 'value'
			},
			temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Plug temperature',
				unique_id: 'efplug_temp',
				role: 'value'
			},
			freq: {
				min: 0,
				max: 52,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Plug AC frequency',
				unique_id: 'efplug_freq',
				role: 'value'
			},

			heartbeatFrequency: {
				min: 0,
				max: 20,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Plug heartbeat',
				unique_id: 'efplug_heartbeatFrequency',
				role: 'value'
			},
			geneNum: {
				min: 0,
				max: 20,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				name: 'Amount of PS',
				role: 'value'
			},
			consNum: {
				min: 0,
				max: 20,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				name: 'Amount of Plugs connected to PS',
				role: 'value'
			},
			geneWatt: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power Stream(s) output power',
				role: 'value'
			},
			powerPlugs: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power of plugs',
				role: 'value'
			},
			parentWifiRssi: {
				min: -90,
				max: 10,
				unit_of_measurement: 'dBm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'signal_strength',
				name: 'parent wifi RSSI',
				role: 'value'
			},
			uptime: {
				min: 0,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Smart plug uptime',
				role: 'value'
			}
		},
		string: {
			country: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				unique_id: 'efplug_country',
				name: 'Install Country'
			},
			town: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				unique_id: 'efplug_town',
				name: 'Install Town'
			},
			resetReason: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'reset reason'
			},
			rtcResetReason: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'RTC Reset Reason'
			},
			resetCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'reset count'
			},
			lanState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'lan state'
			},
			stackFree: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'stack free'
			},
			stackMinFree: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'stack min free'
			},
			meshId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mesh id'
			},
			meshLayer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mesh layer'
			},
			selfMac: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'self mac'
			},
			parentMac: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'parent mac'
			},
			otaDlErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'ota dl err'
			},
			otaDlTlsErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'ota dl tls err'
			},
			staIpAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'sta ip addr'
			},
			matterFabric: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'matter fabric'
			},
			wifiErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'wifi err'
			},
			wifiErrTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'wifi err time'
			},
			mqttErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mqtt err '
			},
			mqttErrTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mqtt err time'
			},
			rssiThreshold: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'rssi threshold'
			},
			rssiVariance: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'rssi variance'
			}
		},
		level: {
			maxWatts: {
				min: 1000,
				max: 2500,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'number',
				device_class: 'power',
				name: 'Plug Max. AC power',
				unique_id: 'efplug_maxWatts',
				role: 'level'
			},
			brightness: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 0.097752,
				step: 1,
				entity_type: 'number',
				device_class: 'illuminance',
				name: 'Plug brightness',
				unique_id: 'efplug_brightness',
				role: 'level',
				subrole: 'brightness'
			}
		},
		switch: {
			switch: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Plug Switch',
				unique_id: 'efplug_switch',
				role: 'switch',
				switch: { '0': 'off', '1': 'on' }
			},
			meshEnable: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'disabled',
				payload_on: 'enabled',
				name: 'Plug Mesh enable',
				unique_id: 'efplug_mesh_enable',
				role: 'switch',
				meshEnable: { '0': 'disabled', '1': 'enabled' }
			},
			dynWattEnable: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Dynamic watt enable',
				unique_id: 'efplug_dynwatt_enable',
				role: 'switch',
				dynWattEnable: { '0': 'off', '1': 'on' }
			}
		},
		diagnostic: {
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Plug Error Code',
				unique_id: 'efplug_errCode',
				role: 'info',
				errCode: {
					'0': 'OK ?'
				}
			},
			warnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Plug Warn Code',
				unique_id: 'efstream_warnCode',
				role: 'info',
				warnCode: {
					'0': 'OK ?'
				}
			}
		}
	},
	energy: {
		number: {
			watth5: {
				min: 0,
				max: 60000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy of smart plug',
				unique_id: 'efstream_watth5',
				role: 'value'
			},
			watth6: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Smart plug ON time',
				unique_id: 'efstream_watth6',
				role: 'value'
			}
		}
	},
	time_task_config_post: {
		tasks: {
			taskIndex: {
				min: 0,
				max: 11,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				name: 'Task index',
				role: 'value'
			},
			type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Task type',
				role: 'info',
				type: {
					1: 'prioritize power supply',
					2: 'prioritize power storage',
					3: 'plug switch off?',
					4: 'plug switch on?'
				}
			},
			timeRange: {
				isConfig: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task configuration',
					role: 'info',
					isConfig: {
						'0': 'not configured',
						'1': 'configured'
					}
				},
				isEnable: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task activation',
					role: 'info',
					isEnable: {
						'0': 'not enabled',
						'1': 'enabled'
					}
				},
				timeMode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task activation',
					role: 'info',
					timeMode: {
						'0': 'daily',
						'1': 'weekly',
						'2': 'monthly',
						'3': 'do not repeat'
					}
				},
				startTime: {
					week: {
						min: 0,
						max: 52,
						unit_of_measurement: 'week',
						mult: 1,
						entity_type: 'sensor',
						name: 'week',
						role: 'value'
					},
					sec: {
						min: 0,
						max: 59,
						unit_of_measurement: 's',
						mult: 1,
						entity_type: 'sensor',
						name: 'second',
						role: 'value'
					},
					min: {
						min: 0,
						max: 59,
						unit_of_measurement: 'min',
						mult: 1,
						entity_type: 'sensor',
						name: 'minute',
						role: 'value'
					},
					hour: {
						min: 0,
						max: 23,
						unit_of_measurement: 'hour',
						mult: 1,
						entity_type: 'sensor',
						name: 'hour',
						role: 'value'
					},
					day: {
						min: 0,
						max: 31,
						unit_of_measurement: 'day',
						mult: 1,
						entity_type: 'sensor',
						name: 'day',
						role: 'value'
					},
					month: {
						min: 0,
						max: 12,
						unit_of_measurement: 'month',
						mult: 1,
						entity_type: 'sensor',
						name: 'month',
						role: 'value'
					},
					year: {
						min: 0,
						max: 2050,
						unit_of_measurement: 'year',
						mult: 1,
						entity_type: 'sensor',
						name: 'year',
						role: 'value'
					}
				},
				stopTime: {
					week: {
						min: 0,
						max: 52,
						unit_of_measurement: 'week',
						mult: 1,
						entity_type: 'sensor',
						name: 'week',
						role: 'value'
					},
					sec: {
						min: 0,
						max: 59,
						unit_of_measurement: 's',
						mult: 1,
						entity_type: 'sensor',
						name: 'second',
						role: 'value'
					},
					min: {
						min: 0,
						max: 59,
						unit_of_measurement: 'min',
						mult: 1,
						entity_type: 'sensor',
						name: 'minute',
						role: 'value'
					},
					hour: {
						min: 0,
						max: 23,
						unit_of_measurement: 'hour',
						mult: 1,
						entity_type: 'sensor',
						name: 'hour',
						role: 'value'
					},
					day: {
						min: 0,
						max: 31,
						unit_of_measurement: 'day',
						mult: 1,
						entity_type: 'sensor',
						name: 'day',
						role: 'value'
					},
					month: {
						min: 0,
						max: 12,
						unit_of_measurement: 'month',
						mult: 1,
						entity_type: 'sensor',
						name: 'month',
						role: 'value'
					},
					year: {
						min: 0,
						max: 2050,
						unit_of_measurement: 'year',
						mult: 1,
						entity_type: 'sensor',
						name: 'year',
						role: 'value'
					}
				},
				type: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task type',
					role: 'info',
					type: {
						1: 'prioritize power supply',
						2: 'prioritize power storage',
						3: 'plug switch off',
						4: 'plug switch on'
					}
				}
			}
		}
	},
	action: {
		switch: {
			latestQuotas: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get latest Quotas',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				latestQuotas: { '0': 'no trigger', '1': 'trigger' }
			}
		}
	},
	info: {
		diagnostic: {
			status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Cloud Connection Status',
				role: 'info',
				status: { '-2': 'offline', '0': 'offline', '1': 'online' }
			}
		}
	}
};

const deviceStatesDict = {
	plug: {
		plug_heartbeat: {
			errCode: { entity: 'diagnostic' },
			warnCode: { entity: 'diagnostic' },
			country: { entity: 'string' },
			town: { entity: 'string' },
			maxCur: { entity: 'number' },
			temp: { entity: 'number' },
			freq: { entity: 'number' },
			current: { entity: 'number' },
			volt: { entity: 'number' },
			watts: { entity: 'number' },
			switch: { entity: 'switch' },
			brightness: { entity: 'level' },
			maxWatts: { entity: 'level' },
			heartbeatFrequency: { entity: 'number' },
			meshEnable: { entity: 'switch' },
			resetReason: { entity: 'string' },
			rtcResetReason: { entity: 'string' },
			resetCount: { entity: 'string' },
			uptime: { entity: 'number' }, //run_time
			lanState: { entity: 'string' },
			stackFree: { entity: 'string' },
			stackMinFree: { entity: 'string' },
			meshId: { entity: 'string' }, // Powerstream X_Unknown_36 und Plug .plug_heartbeat.unknown23 haben den identischen Wert
			meshLayer: { entity: 'string' },
			selfMac: { entity: 'string' },
			parentMac: { entity: 'string' },
			otaDlErr: { entity: 'string' },
			otaDlTlsErr: { entity: 'string' },
			staIpAddr: { entity: 'string' },
			matterFabric: { entity: 'string' },
			geneNum: { entity: 'number' },
			consNum: { entity: 'number' },
			geneWatt: { entity: 'number' },
			powerPlugs: { entity: 'number' }, //cons_watt
			wifiErr: { entity: 'string' },
			wifiErrTime: { entity: 'string' },
			mqttErr: { entity: 'string' },
			mqttErrTime: { entity: 'string' },
			dynWattEnable: { entity: 'switch' }, //self_ems_switch
			parentWifiRssi: { entity: 'number' },
			rssiThreshold: { entity: 'string' },
			rssiVariance: { entity: 'string' }
		},
		energy: {
			watth5: { entity: 'number' },
			watth6: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const deviceRanges = {
	plug: {
		energy: {
			number: {
				watth5: {
					max: 60000
				},
				watth6: {
					max: 1440
				}
			}
		}
	}
};

const deviceCmd = {
	plug: {
		plug_heartbeat: {
			maxWatts: { mult: 1, msg: { cmdFunc: 2, cmdId: 137, dataLen: 3 } },
			/*
			maxCur: {
				mult: 10,
				msg: { cmdFunc: 2, cmdId: 135, dataLen: 3 }
			},
			*/
			brightness: {
				msg: { cmdFunc: 2, cmdId: 130, dataLen: 3 }
			},
			switch: {
				msg: { cmdFunc: 2, cmdId: 129, dataLen: 2 }
			},
			meshEnable: {
				msg: { cmdFunc: 2, cmdId: 138, dataLen: 2 }
			},
			//include_plug = dynwattEnable
			dynWattEnable: {
				msg: { cmdFunc: 2, cmdId: 142, dataLen: 2 }
			}
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
		}
	}
};

const protoMsg = {
	cmdId: {
		142: { cmdFunc: { 2: 'include_plug' } },
		138: { cmdFunc: { 2: 'mesh_ctrl_pack' } },
		137: { cmdFunc: { 2: 'max_watts_pack' } },
		135: { cmdFunc: { 2: 'PowerPack' } },
		134: { cmdFunc: { 2: 'time_task_config_post' } },
		133: { cmdFunc: { 2: 'PowerPack' } },
		132: { cmdFunc: { 2: 'time_task_config' } },
		131: { cmdFunc: { 2: 'time_task_config' } },
		130: { cmdFunc: { 2: 'brightness_pack' } },
		129: { cmdFunc: { 2: 'plug_switch_message' } },
		105: { cmdFunc: { 2: 'init_pack' } },
		32: { cmdFunc: { 254: 'EnergyPack' } },
		11: { cmdFunc: { 32: 'country_town_message' } }, //or ping
		2: { cmdFunc: { 2: 'time_task_config_post' } },
		1: { cmdFunc: { 2: 'plug_heartbeat', 53: 'plug_heartbeat' } }
	}
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus

async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged, cmdLockUpd) {
	let haUpdate = [];
	if (payload) {
		if (stateDictObj) {
			if (stateObj) {
				for (let channel in payload) {
					//other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
					switch (channel) {
						case 'plug_heartbeat':
							// all cases without nested states
							await setOnlineStatus(adapter, topic);
							for (let state in payload[channel]) {
								let val;
								let haupd;
								val = payload[channel][state];
								haupd = await compareUpdate(
									adapter,
									stateDictObj,
									stateObj,
									haenable,
									topic,
									channel,
									state,
									val,
									channel,
									logged,
									cmdLockUpd
								);
								if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							}
							break;
						case 'time_task_config_post':
							for (let task in payload[channel]) {
								for (let item in payload[channel][task]) {
									if (item !== 'timeRange') {
										await adapter.setStateAsync(topic + '.' + channel + '.' + task + '.' + item, {
											val:
												item === 'taskIndex'
													? parseInt(payload[channel][task][item])
													: String(payload[channel][task][item]),
											ack: true
										});
									} else if (item === 'timeRange') {
										for (let range in payload[channel][task]['timeRange']) {
											if (range === 'startTime' || range === 'stopTime') {
												for (let time in payload[channel][task][item][range]) {
													await adapter.setStateAsync(
														topic +
														'.' +
														channel +
														'.' +
														task +
														'.' +
														item +
														'.' +
														range +
														'.' +
														time,
														{
															val: payload[channel][task][item][range][time],
															ack: true
														}
													);
												}
											} else {
												//taskIndex or type
												// convert type fehlt noch
												await adapter.setStateAsync(
													topic + '.' + channel + '.' + task + '.' + item + '.' + range,
													{
														val: String(payload[channel][task][item][range]),
														ack: true
													}
												);
											}
										}
									}
								}
							}
							break;

						case 'EnergyPack': {
							let msgobj32 = payload[channel];
							let watthType;
							let energy;
							let timeStamp;
							let energyobj = {};
							try {
								for (let i = 0; i < msgobj32.sysEnergyStream.length; i++) {
									if (
										msgobj32.sysEnergyStream[i].watthType &&
										msgobj32.sysEnergyStream[i].watth &&
										msgobj32.sysEnergyStream[i].timestamp
									) {
										//adapter.log.debug('complete ' + i);
										//we assume all timestamps are equal and the last is used for historical message
										timeStamp = msgobj32.sysEnergyStream[i].timestamp;
										watthType = msgobj32.sysEnergyStream[i].watthType;
										energy = msgobj32.sysEnergyStream[i].watth.reduce((a, b) => a + b, 0);
										energyobj['watth' + watthType] = energy;
									} else {
										//adapter.log.debug('incomplete');
										//incomplete telegram
									}
								}
							} catch (error) {
								adapter.log.debug('id 32 error at: ' + error);
							}
							if (msgobj32.sysSeq == 65535) {
								await setOnlineStatus(adapter, topic);
								for (let state in energyobj) {
									let val;
									let haupd;
									val = energyobj[state];
									haupd = await compareUpdate(
										adapter,
										stateDictObj,
										stateObj,
										haenable,
										topic,
										'energy',
										state,
										val,
										'energy',
										logged,
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								// send "raw" history data 
								// haUpdate['hist_energy'] = { time: timeStamp, energy: energyobj };
							}
						}
							break;
						case 'info':
							//channel info is only received when offline, no need to check the content
							await setOfflineStatus(adapter, topic);
							break;
						default:
							//nothing todo
							break;
					}
				}
			} else {
				adapter.log.warn('storeStreamPayload no stateObj');
			}
		} else {
			adapter.log.warn('storeStreamPayload no stateDictobj');
		}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}
async function prepareProtoCmd(adapter, serial, streamType, state, value, cmd, log) {
	if (state === 'latestQuotas') {
		if (log === true) {
			adapter.log.debug('preparaing latestQuotas: ' + serial);
		}
		let muster = {
			header: {
				src: 32,
				dest: 32,
				seq: Date.now(),
				from: 'ios'
			}
		};
		const root = protobuf.parse(protoSource).root;
		const SetMessage = root.lookupType('setMessage');
		const message = SetMessage.create(muster);
		const messageBuffer = SetMessage.encode(message).finish();
		return messageBuffer;
	} else {
		let muster = {
			header: {
				src: 32,
				dest: 53,
				dSrc: 1,
				dDest: 1,
				checkType: 3,
				cmdFunc: 2,
				cmdId: 129,
				needAck: 1,
				seq: Date.now(),
				version: 19,
				payloadVer: 1,
				from: 'ios',
				deviceSn: serial
			}
		};
		if (state === 'switch' || state === 'meshEnable' || state === 'dynWattEnable') {
			if (value === true) {
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = value ? 1 : 0;
				//muster['header']['dataLen'] = {};
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
			} else {
				//omit pdata
				// the APP sends no value for padata respectively the item #1
			}
		} else if (state === 'maxWatts') {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['value'] = parseInt(value);
			//muster['header']['dataLen'] = {};
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
		} else if (state === 'brightness') {
			if (value !== 0) {
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = parseInt(String(value / 100 * 1023));
				//muster['header']['dataLen'] = {};
				if (parseInt(String(value / 100 * 1023)) > 128) {
					muster['header']['dataLen'] = 3;
				} else {
					muster['header']['dataLen'] = 2;
				}
				//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
			} else {
				//omit pdata
				// the APP sends no value for padata respectively the item #1
			}
		} else {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['value'] = value;
			muster['header']['dataLen'] = {};
		}
		//for all commands
		muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
		muster['header']['cmdId'] = cmd['msg']['cmdId'];

		if (log) {
			adapter.log.debug('[PROTOBUF encode] ' + state + ' ' + value + ' send plug ' + JSON.stringify(muster));
		}
		// reconnect prepareStreamCmd(adapter, serial, streamType, '', 17477,{msg: {cmdFunc: 32, cmdId: 11, dataLen: 4 }})

		const root = protobuf.parse(protoSource).root;
		const SetMessage = root.lookupType('setMessage');
		const message = SetMessage.create(muster);
		const messageBuffer = SetMessage.encode(message).finish();
		return messageBuffer;

	}
}

const protoSource = `
syntax = "proto3";

message plug_heartbeat {
	optional uint32 err_code = 1;
	optional uint32 warn_code = 2;
	optional uint32 country = 3;
	optional uint32 town = 4;
	optional int32 max_cur = 5;
	optional int32 temp = 6;
	optional int32 freq = 7;
	optional int32 current = 8;
	optional int32 volt = 9;
	optional int32 watts = 10;
	optional bool switch = 11;
	optional int32 brightness = 12;
	optional int32 max_watts = 13;
	optional int32 heartbeat_frequency = 14;
	optional int32 mesh_enable = 15;
	optional int32 reset_reason = 16;
	optional int32 rtc_reset_reason = 17;
	optional int32 reset_count = 18;
	optional int32 uptime = 19; // run_time
	optional int32 lan_state = 20;
	optional int32 stack_free = 21;
	optional int32 stack_min_free = 22;
	optional int32 mesh_id = 23;
	optional int32 mesh_layer = 24;
	optional int32 self_mac = 25;
	optional int32 parent_mac = 26;
	optional int32 ota_dl_err = 27;
	optional int32 ota_dl_tls_err = 28;
	optional int32 sta_ip_addr = 29;
	optional int32 matter_fabric = 30;
	optional int32 gene_num = 31;//stream connected
	optional int32 cons_num = 32; //count of devices
	optional int32 gene_watt = 33; //total streamoutputpower
	optional int32 powerPlugs = 34; // cons_watt power to plugs
	optional int32 wifi_err = 35;
	optional int32 wifi_err_time = 36;
	optional int32 mqtt_err = 37;
	optional int32 mqtt_err_time = 38; //unixtime, ggf. last connection, when connected to mqtt server
	optional int32 dynWattEnable = 39; //plug included for dynamic watts
	optional int32 parent_wifi_rssi = 40; //wifiRssi
	optional int32 rssi_threshold = 41;
	optional int32 rssi_variance = 42;
  }
  message plug_switch_message {
	optional uint32 plug_switch = 1;
  }
  message brightness_pack {
	optional int32 brightness = 1 [(nanopb).default = 0];
  }
  message max_cur_pack {
	optional int32 max_cur = 1 [(nanopb).default = 0];
  }
  message max_watts_pack {
	optional int32 max_watts = 1 [(nanopb).default = 0];
  }
  message mesh_ctrl_pack {
	optional uint32 mesh_enable = 1 [(nanopb).default = 0];
  }
  message ret_pack {
	optional bool ret_sta = 1 [(nanopb).default = false];
  }

  message include_plug {
	optional bool include_plug = 1 [(nanopb).default = false];
  }

  message rated_power_pack {
	optional int32 rated_power = 1 [(nanopb).default = 0];
  } 

  message country_town_message {
	optional uint32 country = 1;
	optional uint32 town = 2;
  }
  message time_task_config {
	optional uint32 task_index = 1;
	optional time_range_strategy time_range = 2;
	optional uint32 type = 3; // Task type: 1: prioritize power supply; 2: prioritize power storage
  }
  message time_task_delet {
	optional uint32 task_index = 1;
  }
  message time_task_config_post {
	optional time_task_config task1 = 1;
	optional time_task_config task2 = 2;
	optional time_task_config task3 = 3;
	optional time_task_config task4 = 4;
	optional time_task_config task5 = 5;
	optional time_task_config task6 = 6;
	optional time_task_config task7 = 7;
	optional time_task_config task8 = 8;
	optional time_task_config task9 = 9;
	optional time_task_config task10 = 10;
	optional time_task_config task11 = 11;
  }
  message time_task_config_ack {
	optional uint32 task_info = 1;
  }

  message time_range_strategy {
	optional bool is_config = 1; // Whether to enable: 0: no; 1: yes
	optional bool is_enable = 2; // Whether to configure: 0: no; 1: yes
	optional int32 time_mode = 3; // Scheduled mode: 0: daily; 1: weekly; 2: monthly; 3: do not repeat
	optional int32 time_data = 4; // mode == 1, bit0-bit6 represents Monday to Saturday respectively; mode == 2, bit0-bit30 represents the 1st to the 31st
	optional rtc_data start_time = 5;
	optional rtc_data stop_time = 6;
  }

  message rtc_data {
	optional int32 week = 1 [(nanopb).default = 0];
	optional int32 sec = 2 [(nanopb).default = 0];
	optional int32 min = 3 [(nanopb).default = 0];
	optional int32 hour = 4 [(nanopb).default = 0];
	optional int32 day = 5 [(nanopb).default = 0];
	optional int32 month = 6 [(nanopb).default = 0];
	optional int32 year = 7 [(nanopb).default = 0];
  }

  message plug_ack_message {
	optional uint32 ack = 1;
  }


message PowerItem {
	optional uint32 timestamp = 1;
	optional sint32 timezone = 2;
	optional uint32 plug_power = 3;
  }
  
message PowerPack {
	optional uint32 sys_seq = 1;
	repeated PowerItem sys_power_stream = 2;
}
message EnergyItem
{
    optional uint32 timestamp = 1;
    optional uint32 watth_type = 2;
    repeated uint32 watth = 3;
}

message EnergyPack
{
    optional uint32 sys_seq = 1;
    repeated EnergyItem sys_energy_stream = 2;
}	

message setMessage {
    setHeader header = 1;
 }
message setHeader {
    setValue pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 enc_type = 6;
    int32 check_type = 7;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
    int32 time_snap = 18;
    int32 is_rw_cmd = 19;
    int32 is_queue = 20;
    int32 ack_type = 21;
    string code = 22;
    string from = 23;
    string module_sn = 24;
    string device_sn = 25;
}
message setValue {
    optional int32 value = 1;
	optional int32 value2 = 2;
}

`;

module.exports = {
	deviceStates,
	deviceStatesDict,
	deviceRanges,
	deviceCmd,
	protoMsg,
	protoSource,
	storeProtoPayload,
	prepareProtoCmd
};
