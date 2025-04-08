const deviceStates = {
	//new alternator
	alternatorHeartbeat: {
		number: {
			unknown269: {
				min: 0,
				max: 144000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery Charging Time',
				role: 'value'
			},
			chargeToFull268: {
				min: 0,
				max: 144000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery Charging Time',
				role: 'value',
				icon: 'mdi:clock-start'
			},
			carBatVolt: {
				min: 10,
				max: 30,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Car battery voltage',
				role: 'value'
			},
			ratedPower: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Alternator rated power',
				role: 'value'
			},
			alternatorPower: {
				min: 0,
				max: 900,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Alternator power',
				role: 'value'
			},
			wifiRssi: {
				min: -100,
				max: 10,
				unit_of_measurement: 'dBm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'signal_strength',
				name: 'Wifi RSSI',
				role: 'value'
			},
			temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Temperature',
				role: 'value'
			},
			batSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Powerstation battery state of charge',
				role: 'value'
			},
			stationPower: {
				min: 0,
				max: 900,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Station Power',
				role: 'value'
			}
		},
		level: {
			permanentWatts: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 1,
				step: 50,
				entity_type: 'number',
				device_class: 'power',
				name: 'Permanent Power Limit',
				role: 'level'
			},
			startVoltage: {
				min: 11,
				max: 30,
				unit_of_measurement: 'V',
				mult: 0.1,
				step: 0.5,
				entity_type: 'number',
				device_class: 'voltage',
				name: 'Start voltage',
				role: 'level'
			},
			cableLength608: {
				min: 0,
				max: 10,
				unit_of_measurement: 'm',
				mult: 1,
				step: 0.2,
				entity_type: 'number',
				device_class: 'distance',
				name: 'X_cableLength608',
				role: 'level'
			},
			operationMode: {
				min: 1,
				max: 3,
				unit_of_measurement: '',
				mult: 1,
				step: 1,
				entity_type: 'select',
				select: ['charge', 'battery maintenance', 'reverse charge'],
				select_obj: {
					charge: 1,
					'battery maintenance': 2,
					'reverse charge': 3
				},
				states: {
					1: 'charge',
					2: 'battery maintenance',
					3: 'reverse charge'
				},
				name: 'Operation mode',
				role: 'level'
			}
		},
		switch: {
			startStop: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Start/Stop cmd',
				role: 'switch',
				startStop: { '0': 'off', '1': 'on' }
			},
			switchOFF130: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Switch OFF cmd',
				role: 'switch',
				startStop: { '0': 'off', '1': 'on' }
			}
		},
		diagnostic: {
			status1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_status1',
				role: 'info',
				status1: { '0': 'no undervoltage', '32': 'undervoltage at conn. to car batt. ' }
			},
		},
		string: {
			unknown427: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown427',
				role: 'info'
			},
			unknown428: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown428',
				role: 'info'
			},
			unknown609: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown609',
				role: 'info'
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
				name: 'Status',
				role: 'info',
				status: { 0: 'offline', 1: 'online' }
			}
		}
	}
};

const deviceStatesDict = {
	alternator: {
		alternatorHeartbeat: {
			status1: { entity: 'diagnostic' },
			temp: { entity: 'number' },
			alternatorPower: { entity: 'number' },
			switchOFF130: { entity: 'switch' },
			startVoltage: { entity: 'level' },
			carBatVolt: { entity: 'number' },
			batSoc: { entity: 'number' },
			unknown269: { entity: 'number' },
			chargeToFull268: { entity: 'number' },
			stationPower: { entity: 'number' },
			unknown427: { entity: 'string' },
			unknown428: { entity: 'string' },
			operationMode: { entity: 'level' },
			startStop: { entity: 'switch' },
			permanentWatts: { entity: 'level' },
			wifiRssi: { entity: 'number' },
			ratedPower: { entity: 'number' },
			cableLength608: { entity: 'level' },
			unknown609: { entity: 'string' }
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
	alternator: {
		alternatorHeartbeat: {
			number: {
				stationPower: { max: 900 }
			}
		}
	}
};

const deviceCmd = {
	alternator: {
		alternatorHeartbeat: {
			switchOFF130: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #1
			cableLength608: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 6 } }, // #203
			startVoltage: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 4 } }, // #137
			operationMode: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #116
			startStop: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #122
			permanentWatts: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 6 } } // #123
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 2, cmdId: 1, dataLen: 0 } } //toCheck
		}
	}
};

const protoMsg = {
	cmdId: {
		21: { cmdFunc: { 254: 'alternatorHeartbeat' } },
		17: { cmdFunc: { 254: 'alternatorSet' } }
	}
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus

async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged) {
	let haUpdate = [];
	if (payload) {
		if (stateDictObj) {
			if (stateObj) {
				for (let channel in payload) {
					//other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
					switch (channel) {
						case 'alternatorHeartbeat':
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
									logged
								);
								if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							}
							break;
						//set or set_reply	
						case 'alternatorSet':
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
									'alternatorHeartbeat',
									state,
									val,
									'alternatorHeartbeat',
									logged
								);
								if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
				dest: 20,
				dSrc: 1,
				dDest: 1,
				encType: 1,
				checkType: 3,
				cmdFunc: 254,
				cmdId: 17,
				needAck: 1,
				seq: Date.now(),
				version: 19,
				payloadVer: 1,
				from: 'Android',
				deviceSn: serial
			}
		};

		// switchOFF130 = 1; //unklar welche nummer
		// operationModeCmd = 116; // 1=Charge; 2=reverse charge; 3=battery maintenance;
		// startStopCmd = 122; // 0=off; 1= on
		// permanentWattsCmd = 123; // 30 - 800 Watt
		// startVoltageCmd = 137; // 11 - 30 V *10
		// cableLength608 = 1111; //unklar welche nummer

		// encryption is set but is actually not done, if needed then to find a way to only encrypt pdata

		if (state === 'startStop') {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['startStop'] = value ? 1 : 0;
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
		} else if (state === 'permanentWatts') {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['permanentWatts'] = value; //float
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 6;
		} else if (state === 'operationMode') {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['operationMode'] = value; //int
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
		} else if (state === 'startVoltage') {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['startVoltage'] = parseInt(String(value * 10)); //11V = 111
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 4;
		} else if (state === 'cableLength608') {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['cableLength608'] = value; //float
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 6;
		} else {
			adapter.log.debug('command not recognized');
		}
		muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
		muster['header']['cmdId'] = cmd['msg']['cmdId'];
		if (log) {
			adapter.log.debug('[PROTOBUF encode] ' + state + ' ' + value + ' send stream ' + JSON.stringify(muster));
		}

		const root = protobuf.parse(protoSource).root;
		const SetMessage = root.lookupType('setMessage');
		const message = SetMessage.create(muster);
		const messageBuffer = SetMessage.encode(message).finish();
		return messageBuffer;
	}
}

const protoSource = `
syntax = "proto3";

message alternatorHeartbeat {
	optional int32 status1 =1;
	optional int32 temp = 102;
	optional float alternatorPower = 105;
	optional int32 switchOFF130 = 130;
	optional int32 startVoltage = 138; // *0.1
	optional float carBatVolt = 139;
	optional float batSoc = 262;
	optional int32 chargeToFull268 = 268;
	optional int32 unknown269 = 269;
	optional float stationPower = 425;
	optional int32 unknown427 = 427;
	optional int32 unknown428 = 428;
	optional int32 operationMode = 581;
	optional int32 startStop = 597;
	optional float permanentWatts = 598;
	optional float wifiRssi = 602;
	optional float ratedPower = 603;
	optional float cableLength608 = 608;
	optional float unknown609 = 609;
}

message alternatorSet {
	optional int32 switchOFF130 = 1; //unklar welche nummer
	optional int32 operationMode = 116; // 1=Charge; 2=reverse charge; 3=battery maintenance;
	optional int32 startStop = 122; // 0=off; 1= on
	optional float permanentWatts = 123; // 0 - 800 Watt
	optional int32 startVoltage = 137; // 11 - 30 V *10
	optional float cableLength608 = 203; 

message setMessage {
    setHeader header = 1;
 }
	
message setHeader {
    alternatorSet pdata = 1;
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
