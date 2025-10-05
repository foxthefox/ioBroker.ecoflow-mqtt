const protobuf = require('protobufjs');
const https = require('https');

const protoSource = `
syntax = "proto3";

message Header
{
    optional bytes pdata = 1;
    optional int32 src = 2;
    optional int32 dest = 3;
    optional int32 d_src= 4;
    optional int32 d_dest = 5;
    optional int32 enc_type = 6;
    optional int32 check_type = 7;
    optional int32 cmd_func = 8;
    optional int32 cmd_id = 9;
    optional int32 data_len = 10;
    optional int32 need_ack = 11;
    optional int32 is_ack = 12;
    optional int32 seq = 14;
    optional int32 product_id = 15;
    optional int32 version = 16;
    optional int32 payload_ver = 17;
    optional int32 time_snap = 18;
    optional int32 is_rw_cmd = 19;
    optional int32 is_queue = 20;
    optional int32 ack_type= 21;
    optional string code = 22;
    optional string from = 23;
    optional string module_sn = 24;
    optional string device_sn = 25;
}

message HeaderMessage {
	repeated Header header = 1;
}

message EventRecordItem {
	optional uint32 timestamp = 1;
	optional uint32 sys_ms = 2;
	optional uint32 event_no = 3;
	repeated float event_detail = 4;
  }
  message EventRecordReport {
	optional uint32 event_ver = 1;
	optional uint32 event_seq = 2;
	repeated EventRecordItem event_item = 3;
  }
  message EventInfoReportAck {
	optional uint32 result = 1;
	optional uint32 event_seq = 2;
	optional uint32 event_item_num = 3;
  }
  message ProductNameSet {
	optional string name = 1;
  }
  message ProductNameSetAck {
	optional uint32 result = 1;
  }
  message ProductNameGet {}
  message ProductNameGetAck {
	optional string name = 3;
  }
  message RTCTimeGet {}

  message RTCTimeGetAck {
	optional uint32 timestamp = 1;
	optional int32 timezone = 2;
  }
  message RTCTimeSet {
	optional uint32 timestamp = 1;
	optional int32 timezone = 2 [(nanopb).default = 0];
  }
  message RTCTimeSetAck {
	optional uint32 result = 1;
  }


message Send_Header_Msg
{
    optional Header msg = 1;
}

message SendMsgHart
{
    optional int32 link_id = 1;
    optional int32 src = 2;
    optional int32 dest = 3;
    optional int32 d_src = 4; 
    optional int32 d_dest = 5;
    optional int32 enc_type = 6;
    optional int32 check_type = 7;
    optional int32 cmd_func = 8;
    optional int32 cmd_id = 9;
    optional int32 data_len = 10;
    optional int32 need_ack = 11;
    optional int32 is_ack = 12;
    optional int32 ack_type = 13;
    optional int32 seq = 14;
    optional int32 time_snap = 15;
    optional int32 is_rw_cmd = 16;
    optional int32 is_queue = 17;
    optional int32 product_id = 18;
    optional int32 version = 19;
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

function decodeMsg(hexString, msgtype, protoSource) {
    try {
        const root = protobuf.parse(protoSource).root;
        const PowerMessage = root.lookupType(msgtype);
        //const message = PowerMessage.decode(hexString);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const message = PowerMessage.decode(Buffer.from(hexString, 'hex'));
        const object = PowerMessage.toObject(message, { defaults: false });
        return object;
    } catch (error) {
        throw new Error(`decodeMsg -> ${error}`);
    }
}

/**
 * @param {object} stateDictObj - dictionary of datapoints
 * @param {string} channel - upper struct
 * @param {string} state - the datapoint
 * @param {string | number | boolean} value - the value of datapoint
 * @param {object} stateObj - datapoint definitions
 */
function convertData(stateDictObj, channel, state, value, stateObj) {
    let key = stateDictObj[channel][state]['entity'];
    if (value !== '' && value != null) {
        let val = value.toString();
        switch (key) {
            case 'number':
            case 'level':
                //convert number
                if (state !== 'brightness') {
                    if (typeof value === 'string' || value instanceof String) {
                        value = (parseFloat(value) * stateObj[channel][key][state]['mult']).toFixed(2);
                    } else if (Number.isInteger(value)) {
                        value = value * stateObj[channel][key][state]['mult'];
                    } else {
                        value = Number((value * stateObj[channel][key][state]['mult']).toFixed(2));
                    }
                }
                break;
            case 'string':
                value = value.toString();
                break;
            case 'switch':
                //convert false/true
                if (value == 0 || value == false || value == '0') {
                    value = false;
                } else {
                    value = true;
                }
                break;
            case 'diagnostic':
                //convert string to item

                if (Object.prototype.hasOwnProperty.call(stateObj[channel][key][state][state], val)) {
                    value = stateObj[channel][key][state][state][val].toString();
                } else {
                    value = `${val} not part of array`;
                }
                break;
            case 'array':
                value = JSON.stringify(value);
                break;
            default:
                break;
        }
    }

    return value;
}

/*
pstream umbauen, damit Antworten mit mehr als einer Nachricht auch verarbeitet werden
Rückgabe der decodierung als Object
abspeichern mit loop durch Objekt

*/

/**
 * @param adapter - THIS transfer
 * @param {import("buffer").WithImplicitCoercion<string>} payload - payload of MQTT msg
 * @param {any} usage - switch to use it for other cases
 * @param {string | number} topic - serial#
 * @param {string} msgtype - set/get/update
 * @param {any} protoSourceDevice - dictionary
 * @param protoMsg - proto definition
 * @param {boolean} log - log enable
 */
function pstreamDecode(adapter, payload, usage, topic, msgtype, protoSourceDevice, protoMsg, log) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const buf = new Buffer.from(payload, 'base64');
    try {
        if (log === true) {
            adapter.log.debug(`[PROTOBUF decode] ${topic} [${msgtype}] raw (hex): ${payload.toString('hex')}`);
        }

        let msgobj = decodeMsg(buf, 'HeaderMessage', protoSource);
        if (msgobj) {
            if (Array.isArray(msgobj.header)) {
                let returnobj = [];
                let dbgmsg = {};
                if (log === true) {
                    adapter.log.debug(
                        `[PROTOBUF decode] ${topic} [${msgtype}] stream has ${msgobj.header.length} message(s)`,
                    );
                }
                for (let i = 0; i < msgobj.header.length; i++) {
                    for (let info in msgobj.header[i]) {
                        if (info !== 'pdata') {
                            dbgmsg[info] = msgobj.header[i][info];
                        }
                    }
                    if (log === true) {
                        adapter.log.debug(
                            `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} header ${JSON.stringify(dbgmsg)}`,
                        );
                    }

                    //evaluate cmdFunc and cmd Id

                    let cmdFunc = msgobj.header[i].cmdFunc;
                    let cmdId = msgobj.header[i].cmdId;
                    let src = msgobj.header[i].src;
                    const seq = msgobj.header[i].seq;

                    let prototyp = '';
                    if (protoMsg && protoSourceDevice) {
                        if (cmdFunc) {
                            if (Object.prototype.hasOwnProperty.call(protoMsg['cmdFunc'], cmdFunc)) {
                                if (cmdId) {
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            protoMsg['cmdFunc'][cmdFunc]['cmdId'],
                                            cmdId,
                                        )
                                    ) {
                                        prototyp = protoMsg['cmdFunc'][cmdFunc]['cmdId'][cmdId];
                                    } else {
                                        prototyp = 'undef';
                                        //no decode possible;
                                        if (log === true) {
                                            adapter.log.debug(
                                                `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} unknown cmdId `,
                                            );
                                        }
                                        //continue;
                                    }
                                } else {
                                    prototyp = 'undef';
                                    //message without cmdId;
                                    if (log === true) {
                                        adapter.log.debug(
                                            `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} no cmdId in Message`,
                                        );
                                    }
                                }
                            } else {
                                prototyp = 'undef';
                                //no decodei possible;
                                if (log === true) {
                                    adapter.log.debug(
                                        `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} unknown cmdFunc`,
                                    );
                                }
                            }
                        } else {
                            prototyp = 'undef';
                            //message without packageType;
                            if (log === true) {
                                adapter.log.debug(
                                    `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} no cmdFunc in message`,
                                );
                            }
                            if (msgobj.header[i].code) {
                                if (msgobj.header[i].code == '-2') {
                                    returnobj.push({ info: { status: 'offline' } });
                                }
                            }
                        }
                    } else {
                        prototyp = 'undef';
                        //no objects
                        adapter.log.debug(
                            `[PROTOBUF decode] no protoMsg or protoSourceDevice objects ${topic} [${msgtype}] protoMsg ${protoMsg}protoSourceDevice ${
                                protoSourceDevice
                            }`,
                        );
                    }

                    // go to msg itself
                    let msg = null;
                    if (msgobj.header[i].pdata) {
                        if (msgobj.header[i].encType) {
                            if (msgobj.header[i].encType == 1 && src !== 32) {
                                //alternator && src !== 32
                                //shp2 && src == 11
                                if (log === true) {
                                    adapter.log.debug(`[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} Encrypted`);
                                }
                                const typedArray = new Uint8Array(msgobj.header[i].pdata);
                                const array = Array.from(typedArray);
                                let modarray = [];
                                for (let i = 0; i < array.length; i++) {
                                    modarray.push(array[i] ^ seq);
                                }
                                const newbuf = Buffer.from(modarray);
                                msgobj.header[i].pdata = newbuf;
                            }
                        }
                        if (log === true) {
                            if (msgobj.header[i].pdata) {
                                adapter.log.debug(
                                    `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} pdata: ${msgobj.header[
                                        i
                                    ].pdata.toString('hex')}`,
                                );
                            }
                        }
                        if (prototyp !== 'undef') {
                            try {
                                if (log === true && !msgobj.header[i].pdata) {
                                    adapter.log.debug(`[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} => no pdata `);
                                }
                                msg = decodeMsg(msgobj.header[i].pdata, prototyp, protoSourceDevice);
                                if (log === true) {
                                    adapter.log.debug(
                                        `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} => ${
                                            prototyp
                                        } ${JSON.stringify(msg)}`,
                                    );
                                }

                                returnobj.push({ [prototyp]: msg });
                            } catch (error) {
                                adapter.log.debug(
                                    `[PROTOBUF decode] ${topic} [${msgtype}] msg#${i} => ` +
                                        ` id ${prototyp} error at: ${error}`,
                                );
                            }
                        } else {
                            writeUnknownMsg(adapter, {
                                device: String(topic),
                                topic: msgtype,
                                cmdFunc: String(cmdFunc),
                                cmdId: String(cmdId),
                                buffer: msgobj.header[i].pdata.toString('hex'),
                                src: src,
                            });
                        }
                    } else {
                        if (log === true) {
                            adapter.log.debug(` [PROTOBUF decode] ${topic} [${msgtype}] msg#${i} => no pdata`);
                        }
                    }
                    //Umschreiben, damit das für get_reply nutzbar wird
                    if (msgobj.header[i].pdata) {
                        //msgtype === 'get_reply' &&
                        msgobj.header[i].pdata = msgobj.header[i].pdata.toString('hex');
                    }
                    /*	
					if (cmdId === 32 && cmdFunc !== 12) {
						if (usage === 'noderedchart') {
							try {
								let msgobj32 = msg;
								//adapter.log.debug('energy:' + JSON.stringify(msgobj32));
								let chart = [
									{
										label: 'no',
										series: [],
										data: [],
										labels: [
											'1',
											'2',
											'3',
											'4',
											'5',
											'6',
											'7',
											'8',
											'9',
											'10',
											'11',
											'12',
											'13',
											'14',
											'15',
											'16',
											'17',
											'18',
											'19',
											'20',
											'21',
											'22',
											'23',
											'24'
										]
									}
								];
								for (let i = 0; i < msgobj32.sysEnergyStream.length; i++) {
									let date = new Date(msgobj32.sysEnergyStream[i].timestamp * 1000);
									chart[0].label = date.toString();
									chart[0].series.push(
										String(msgobj32.sysEnergyStream[i].watthType) +
											' ' +
											msgobj32.sysEnergyStream[i].watth.reduce((a, b) => a + b, 0)
									);
									chart[0].data.push(msgobj32.sysEnergyStream[i].watth);
								}
								return chart;
							} catch (error) {
								adapter.log.debug('id 32 error at: ' + error);
							}
						} else {
							let msgobj32 = msg;
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
								returnobj.push({'energy': energyobj});
							} else {
								returnobj.push({'hist_energy':{ time: timeStamp, energy: energyobj }});
							}
						}
					}
					*/
                }
                if (msgtype === 'get_reply') {
                    adapter.quotas[topic] = msgobj;
                }
                return returnobj;
            }
        }
    } catch (error) {
        adapter.log.debug(`[PROTOBUF decode] error -> payload was: ${payload.toString('hex')}`);
        throw new Error(`[PROTOBUF decode] ->  ${error}`);
    }
}

function writeUnknownMsg(adapter, msg) {
    if (!adapter.unknownPBmsg[msg.device]) {
        adapter.unknownPBmsg[msg.device] = {};
    }
    if (!adapter.unknownPBmsg[msg.device][msg.topic]) {
        adapter.unknownPBmsg[msg.device][msg.topic] = {};
    }
    if (!adapter.unknownPBmsg[msg.device][msg.topic][msg.cmdFunc]) {
        adapter.unknownPBmsg[msg.device][msg.topic][msg.cmdFunc] = {};
    }
    if (!adapter.unknownPBmsg[msg.device][msg.topic][msg.cmdFunc][msg.cmdId]) {
        adapter.unknownPBmsg[msg.device][msg.topic][msg.cmdFunc][msg.cmdId] = {
            pbmsg: msg.buffer,
            src: msg.src,
            dst: msg.dst,
        };
    }
}

/**
 * @param adapter - THIS transfer
 * @param {any} topic - serial# of device
 */
async function setOnlineStatus(adapter, topic) {
    let status = await adapter.getStateAsync(`${topic}.info.status`).catch(e => {
        adapter.log.warn(`did not get old value .info.status ->${e}`);
    });
    if (status && status.val === 'offline') {
        await adapter.setStateAsync(`${topic}.info.status`, { val: 'online', ack: true });
        adapter.log.info(`[EF] ${topic} is online with cloud`);
    }
}

/**
 * @param adapter - THIS transfer
 * @param {any} topic - serial# of device
 */
async function setOfflineStatus(adapter, topic) {
    let status = await adapter.getStateAsync(`${topic}.info.status`).catch(e => {
        adapter.log.warn(`did not get old value .info.status ->${e}`);
    });
    if (status && status.val === 'online') {
        await adapter.setStateAsync(`${topic}.info.status`, {
            val: 'offline',
            ack: true,
        });
        adapter.log.info(`[EF] ${topic} is OFFLINE with cloud`);
    }
}

/**
 * @param adapter - THIS transfer
 * @param {object} stateDictObj - dictionary of states
 * @param {object} stateObj - datapoint definition
 * @param {string} topic - serial#
 * @param {string} msgtype - set/get/update
 * @param payload - payload
 * @param {boolean} haenable - HA enabled for this device
 * @param {boolean} logged - log enable
 */
async function storeStationPayload(adapter, stateDictObj, stateObj, topic, msgtype, payload, haenable, logged) {
    let haUpdate = [];
    if (payload) {
        /*
		if (adapter.config.msgUpdatePstation) {
			adapter.log.debug(
				'got topic ' + topic + ' ( stateDictObj ' + stateDictObj + ' stateObj: ' + stateObj + ' )'
			);
		}
		*/
        try {
            let payloadobj = null;
            //station cyclically receives params messages, so we can detect from here the online status
            await setOnlineStatus(adapter, topic);
            /*
			let onlinestatus = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
				adapter.log.warn('did not get old value .info.status ->' + e);
			});
			*/
            if (payload['params']) {
                //skipping the incomming data when not valid
                if (payload['params']['ems.openBmsIdx']) {
                    //only valid when payload ems.openBmsIdx=1 @Deltamax
                    if (payload['params']['ems.openBmsIdx'] !== 0) {
                        payloadobj = payload['params'];
                    }
                } else if (payload['params']['bmsMaster.bqSysStatReg']) {
                    //only valid when payload bmsMaster.bqSysStatReg = 128 @Deltamax
                    if (payload['params']['bmsMaster.bqSysStatReg'] !== 0) {
                        payloadobj = payload['params'];
                    }
                } else if (payload['params']['bms_emsStatus.openBmsIdx']) {
                    //only valid when payload ems.openBmsIdx=1 @Deltamax
                    if (payload['params']['bms_emsStatus.openBmsIdx'] !== 0) {
                        payloadobj = payload['params'];
                    }
                } else if (payload['params']['bms_bmsStatus.bqSysStatReg']) {
                    //only valid when payload bmsMaster.bqSysStatReg = 128 @Deltamax
                    if (payload['params']['bms_bmsStatus.bqSysStatReg'] !== 0) {
                        payloadobj = payload['params'];
                    }
                } else {
                    payloadobj = payload['params'];
                }
                /*
				if (onlinestatus && onlinestatus.val === 'offline') {
					await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
					adapter.log.info('[EF] ' + topic + ' is online with cloud');
				}
				*/
            } else if (payload['data']) {
                if (payload['data']['quotaMap']) {
                    let status = 'OK';
                    //skipping the incomming data when not valid
                    if (payload['data']['quotaMap']['ems.openBmsIdx']) {
                        if (payload['data']['quotaMap']['ems.openBmsIdx'] === 0) {
                            status = 'unreliable ems';
                        }
                    }
                    if (payload['data']['quotaMap']['bms_emsStatus.openBmsIdx']) {
                        if (payload['data']['quotaMap']['bms_emsStatus.openBmsIdx'] === 0) {
                            status = 'unreliable ems';
                        }
                    }
                    if (payload['data']['quotaMap']['bmsMaster.bqSysStatReg']) {
                        if (payload['data']['quotaMap']['bmsMaster.bqSysStatReg'] === 0) {
                            status = 'unreliable bmsMaster';
                        }
                    }
                    if (payload['data']['quotaMap']['bms_bmsStatus.bqSysStatReg']) {
                        if (payload['data']['quotaMap']['bms_bmsStatus.bqSysStatReg'] === 0) {
                            status = 'unreliable bms';
                        }
                    }
                    if (status === 'OK') {
                        payloadobj = payload['data']['quotaMap'];
                    }
                    /*
					if (onlinestatus && onlinestatus.val === 'offline' && payload['data']['online'] === 1) {
						await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
						adapter.log.info('[EF] ' + topic + ' is online with cloud');
					}
						*/
                    adapter.log.debug(`[${topic}] processing get_reply latest quotas !`);
                    //storage of latest quotas to object, can then be called from sendTo
                    if (msgtype === 'get_reply') {
                        adapter.quotas[topic] = payload;
                    }
                    if (payload['data']['quotaMap']['timeTask']) {
                        //logging
                        //totalTaskNum als Kennung für Stations (bei SHP1 nicht dabei)
                        if (payload['data']['timeTask']['totalTaskNum']) {
                            await adapter.setStateAsync(`${topic}.timeTask.totalTaskNum`, {
                                val: payload['data']['quotaMap']['timeTask']['totalTaskNum'],
                                ack: true,
                            });
                            let taskarr = payload['data']['quotaMap']['timeTask']['taskCfgs'];
                            for (let i = 0; i < taskarr.length; i++) {
                                const task = `task${i}`;
                                if (taskarr[i]['taskIndex'] !== 255) {
                                    for (let key in taskarr[i]) {
                                        if (key !== 'timeScale') {
                                            await adapter.setStateAsync(`${topic}.timeTask.${task}.${key}`, {
                                                val: taskarr[i][key],
                                                ack: true,
                                            });
                                        } else {
                                            //convert fehlt nich
                                            await adapter.setStateAsync(`${topic}.timeTask.${task}.${key}`, {
                                                val: JSON.stringify(taskarr[i][key]),
                                                ack: true,
                                            });
                                        }
                                    }
                                }
                            }
                            adapter.log.debug('processed get_reply timeTask !');
                        }
                    }
                } else if (payload['data']['online'] === 0) {
                    //station reports the data.online=0 as offline
                    //it is ony part of messages with data (rquested by latestQuotas)
                    /*
                    let status = await adapter.getStateAsync(`${topic}.info.status`).catch(e => {
                        adapter.log.warn(`did not get old value .info.status ->${e}`);
                    });
                    */
                    await setOfflineStatus(adapter, topic);
                    /*
					if (status && status.val === 'online') {
						await adapter.setStateAsync(topic + '.info.status', { val: 'offline', ack: true });
						adapter.log.info('[EF] ' + topic + ' is OFFLINE with cloud');
					}
					*/
                }
            } else {
                adapter.log.debug(`no params or data in payload ->${JSON.stringify(payload)}`);
            }
            if (payloadobj) {
                //stations with dotted syntax
                for (let comportion in payloadobj) {
                    let dotted = comportion.split('.');
                    let channel = dotted[0];
                    let state = dotted[1];
                    if (
                        channel === 'timestamp' ||
                        channel === 'latestTimeStamp' ||
                        state === null ||
                        channel === 'kit' ||
                        channel === 'bms_kitInfo' ||
                        //to avoid crashing when undefined datapoint is uncomming, better the way around to check the known and there is leftover
                        channel === 'bms_bmsInfo' ||
                        channel === 'bms_slave_bmsSlaveInfo_1' ||
                        channel === 'bms_slave_bmsSlaveInfo_2'
                    ) {
                        //exceptions
                    } else {
                        // manipulation of delta2 and delta2max
                        if (channel === 'bms_bmsStatus' || channel === 'bms') {
                            channel = 'bmsMaster';
                        } else if (channel === 'bms_emsStatus') {
                            channel = 'ems';
                        } else if (channel === 'bms_slave_bmsSlaveStatus_1') {
                            channel = 'bmsSlave1';
                        } else if (channel === 'bms_slave_bmsSlaveStatus_2') {
                            channel = 'bmsSlave2';
                        } else if (channel === 'bms_slave') {
                            //delta2 has only one port issue #264
                            channel = 'bmsSlave1';
                        }
                        const channelsave = channel; // for handling the slaves when converting the value
                        if (channel === 'bmsSlave1' || channel === 'bmsSlave2') {
                            channel = 'bmsMaster';
                        }
                        if (stateDictObj[channel][state]) {
                            if (stateDictObj[channel][state]['entity'] !== 'icon') {
                                let value = convertData(stateDictObj, channel, state, payloadobj[comportion], stateObj);
                                //adapter.log.debug('converted value ' + value);
                                let old = await adapter.getStateAsync(`${topic}.${channelsave}.${state}`).catch(e => {
                                    adapter.log.warn(`did not get old value ${topic}.${channelsave}.${state} ->${e}`);
                                });
                                //adapter.log.debug('old ' + JSON.stringify(old));
                                if (!old) {
                                    await adapter.setStateAsync(`${topic}.${channelsave}.${state}`, {
                                        val: value,
                                        ack: true,
                                    });
                                    if (haenable && stateDictObj[channel][state]['entity'] !== 'array') {
                                        let havalue;
                                        const type = stateDictObj[channel][state]['entity'];
                                        const enttype = stateObj[channel][type][state]['entity_type'];
                                        switch (enttype) {
                                            case 'sensor':
                                                havalue = String(value);
                                                break;
                                            case 'switch':
                                                if (value === true) {
                                                    havalue = stateObj[channel][type][state]['payload_on'];
                                                } else if (value === false) {
                                                    havalue = stateObj[channel][type][state]['payload_off'];
                                                }
                                                break;
                                            case 'select':
                                                try {
                                                    havalue = stateObj[channel][type][state]['states'][value];
                                                } catch (error) {
                                                    adapter.log.warn(
                                                        `select problem ${value} not in ${
                                                            stateObj[channel][type][state]['states']
                                                        } error -> ${error}`,
                                                    );
                                                }
                                                break;
                                            case 'text':
                                                havalue = value;
                                                break;
                                            default:
                                                havalue = String(value);
                                                break;
                                        }
                                        haUpdate.push({
                                            topic: `${adapter.config.haTopic}/${topic}_${channelsave}/${state}`,
                                            payload: havalue,
                                        });
                                    }
                                } else {
                                    if (old.val !== value) {
                                        if (logged) {
                                            adapter.log.debug(
                                                `station update ` + `.${channelsave}.${state} ${old.val} -> ${value}`,
                                            );
                                        }
                                        await adapter.setStateAsync(`${topic}.${channelsave}.${state}`, {
                                            val: value,
                                            ack: true,
                                        });
                                        if (haenable && stateDictObj[channel][state]['entity'] !== 'array') {
                                            let havalue;
                                            const type = stateDictObj[channel][state]['entity'];
                                            const enttype = stateObj[channel][type][state]['entity_type'];
                                            switch (enttype) {
                                                case 'sensor':
                                                    havalue = String(value);
                                                    break;
                                                case 'switch':
                                                    if (value === true) {
                                                        havalue = stateObj[channel][type][state]['payload_on'];
                                                    } else if (value === false) {
                                                        havalue = stateObj[channel][type][state]['payload_off'];
                                                    }
                                                    break;
                                                case 'select':
                                                    try {
                                                        havalue = stateObj[channel][type][state]['states'][value];
                                                    } catch (error) {
                                                        adapter.log.warn(
                                                            `select problem ${value} not in ${
                                                                stateObj[channel][type][state]['states']
                                                            } error -> ${error}`,
                                                        );
                                                    }

                                                    break;
                                                case 'text':
                                                    havalue = value;
                                                    break;

                                                default:
                                                    havalue = String(value);
                                                    break;
                                            }
                                            haUpdate.push({
                                                topic: `${adapter.config.haTopic}/${topic}_${channelsave}/${state}`,
                                                payload: havalue,
                                            });
                                        }
                                    } else {
                                        //even the same value switches get an update
                                        //strange behaviour on HA side, where the switch returns to previous position
                                        // achtung macht aber ordentlich last, da immer mitgeschickt
                                        if (haenable && stateDictObj[channel][state]['entity'] === 'switch') {
                                            let havalue;
                                            const type = stateDictObj[channel][state]['entity'];
                                            const enttype = stateObj[channel][type][state]['entity_type'];
                                            switch (enttype) {
                                                case 'switch':
                                                    if (value === true) {
                                                        havalue = stateObj[channel][type][state]['payload_on'];
                                                    } else if (value === false) {
                                                        havalue = stateObj[channel][type][state]['payload_off'];
                                                    }
                                                    break;
                                                default:
                                                    break;
                                            }
                                            haUpdate.push({
                                                topic: `${adapter.config.haTopic}/${topic}_${channel}/${state}`,
                                                payload: havalue,
                                            });
                                        }
                                    }
                                }
                            }
                        } else {
                            adapter.log.debug(
                                `[store station] ${topic} not processed ${channelsave} state: ${state} value ${
                                    payloadobj[comportion]
                                }`,
                            );
                        }
                    }
                }
            }
        } catch (error) {
            adapter.log.debug(`store JSON payload ${error}`);
            adapter.log.debug(`payload from ${topic} was: ${JSON.stringify(payload)}`);
        }
    } else {
        adapter.log.debug('nothing to process');
    }
    return haUpdate;
}
/**
 * @param adapter - THIS transfer
 * @param {object} stateDictObj - dictionary of states
 * @param {object} stateObj - datapoint definition
 * @param {boolean} haenable - HA enabled for this device
 * @param {string} topic - serial#
 * @param {string} channel - upper struct
 * @param {string} state - datapoint name
 * @param {any} val - value of state
 * @param {string} origchannel - the channel where references work
 * @param {boolean} logged - log enable
 */
async function compareUpdate(
    adapter,
    stateDictObj,
    stateObj,
    haenable,
    topic,
    channel,
    state,
    val,
    origchannel,
    logged,
) {
    let haUpdate = {};

    try {
        if (stateDictObj) {
            if (stateDictObj[origchannel]) {
                if (stateDictObj[origchannel][state]) {
                    if (stateDictObj[origchannel][state]['entity'] !== 'icon') {
                        let value = null;
                        try {
                            value = convertData(stateDictObj, origchannel, state, val, stateObj);
                        } catch (error) {
                            adapter.log.debug(
                                `CONVERT went wrong ${topic}.${channel}.${state} with ${val} error: ${error}`,
                            );
                        }
                        //adapter.log.debug('converted value ' + value);
                        let old = await adapter.getStateAsync(`${topic}.${channel}.${state}`).catch(e => {
                            adapter.log.warn(`[Compare] did not get old value ${topic}.${channel}.${state} ->${e}`);
                        });
                        // adapter.log.debug(`old ${JSON.stringify(old)}`);
                        if (!old) {
                            if (logged) {
                                adapter.log.debug(
                                    `[Compare] force update ` + `${topic}.${channel}.${state} -> ${value}`,
                                );
                            }
                            await adapter.setStateAsync(`${topic}.${channel}.${state}`, {
                                val: value,
                                ack: true,
                            });
                            if (haenable && stateDictObj[origchannel][state]['entity'] !== 'array') {
                                let havalue;
                                const type = stateDictObj[origchannel][state]['entity'];
                                const enttype = stateObj[origchannel][type][state]['entity_type'];
                                switch (enttype) {
                                    case 'sensor':
                                    case 'number':
                                        havalue = String(value);
                                        break;
                                    case 'switch':
                                        //always a cmd
                                        if (value === true) {
                                            havalue = stateObj[origchannel][type][state]['payload_on'];
                                        } else if (value === false) {
                                            havalue = stateObj[origchannel][type][state]['payload_off'];
                                        }
                                        break;
                                    case 'select':
                                        try {
                                            havalue = stateObj[origchannel][type][state]['states'][val];
                                        } catch (error) {
                                            adapter.log.warn(
                                                `[Compare] select problem ${value} not in ${
                                                    stateObj[origchannel][type][state]['states']
                                                } error -> ${error}`,
                                            );
                                        }
                                        break;
                                    case 'text':
                                        havalue = value;
                                        break;
                                    default:
                                        havalue = String(value);
                                        break;
                                }
                                haUpdate = {
                                    topic: `${adapter.config.haTopic}/${topic}_${channel}/${state}`,
                                    payload: havalue,
                                };
                            }
                        } else {
                            if (Object.prototype.hasOwnProperty.call(old, 'val')) {
                                if (old.val !== value) {
                                    if (logged) {
                                        adapter.log.debug(
                                            `[Compare] update ` + `${topic}.${channel}.${state} ${old.val} -> ${value}`,
                                        );
                                    }
                                    await adapter.setStateAsync(`${topic}.${channel}.${state}`, {
                                        val: value,
                                        ack: true,
                                    });
                                    if (haenable && stateDictObj[origchannel][state]['entity'] !== 'array') {
                                        let havalue;
                                        const type = stateDictObj[origchannel][state]['entity'];
                                        const enttype = stateObj[origchannel][type][state]['entity_type'];
                                        switch (enttype) {
                                            case 'sensor':
                                            case 'number':
                                                havalue = String(value);
                                                break;
                                            case 'switch':
                                                //always a cmd, no need to check the specific type
                                                if (value === true) {
                                                    havalue = stateObj[origchannel][type][state]['payload_on'];
                                                } else if (value === false) {
                                                    havalue = stateObj[origchannel][type][state]['payload_off'];
                                                } else {
                                                    adapter.log.warn(
                                                        `[Compare] switch problem ${value} not convertable `,
                                                    );
                                                }
                                                break;
                                            case 'select':
                                                //always a cmd, no need to check the specific type
                                                try {
                                                    havalue = stateObj[origchannel][type][state]['states'][val];
                                                } catch (error) {
                                                    adapter.log.warn(
                                                        `[Compare] select problem ${value} not in ${
                                                            stateObj[origchannel][type][state]['states']
                                                        } error -> ${error}`,
                                                    );
                                                }
                                                break;
                                            case 'text':
                                                havalue = value;
                                                break;

                                            default:
                                                havalue = String(value);
                                                break;
                                        }
                                        haUpdate = {
                                            topic: `${adapter.config.haTopic}/${topic}_${channel}/${state}`,
                                            payload: havalue,
                                        };
                                    }
                                } else {
                                    // even the same value switches get an update
                                    // strange behaviour on HA side, where the switch returns to previous position
                                    // achtung macht aber ordentlich last, da immer mitgeschickt
                                    // erweitert um die anderen CMD typen
                                    if (haenable) {
                                        let havalue;
                                        const type = stateDictObj[origchannel][state]['entity'];
                                        const enttype = stateObj[origchannel][type][state]['entity_type'];
                                        switch (enttype) {
                                            case 'switch':
                                                if (value === true) {
                                                    havalue = stateObj[origchannel][type][state]['payload_on'];
                                                    haUpdate = {
                                                        topic: `${adapter.config.haTopic}/${topic}_${channel}/${state}`,
                                                        payload: havalue,
                                                    };
                                                } else if (value === false) {
                                                    havalue = stateObj[origchannel][type][state]['payload_off'];
                                                    haUpdate = {
                                                        topic: `${adapter.config.haTopic}/${topic}_${channel}/${state}`,
                                                        payload: havalue,
                                                    };
                                                } else {
                                                    adapter.log.warn(
                                                        `[Compare] switch problem ${value} not convertable `,
                                                    );
                                                }
                                                break;
                                            case 'sensor':
                                            case 'number':
                                                // set only the cmd values
                                                if (
                                                    haenable &&
                                                    stateObj[origchannel][type][state]['role'] &&
                                                    stateObj[origchannel][type][state]['role'] === 'level'
                                                ) {
                                                    havalue = String(value);
                                                    haUpdate = {
                                                        topic: `${adapter.config.haTopic}/${topic}_${channel}/${state}`,
                                                        payload: havalue,
                                                    };
                                                }
                                                break;
                                            case 'select':
                                                try {
                                                    havalue = stateObj[origchannel][type][state]['states'][val];
                                                    haUpdate = {
                                                        topic: `${adapter.config.haTopic}/${topic}_${channel}/${state}`,
                                                        payload: havalue,
                                                    };
                                                } catch (error) {
                                                    adapter.log.warn(
                                                        `[Compare] select problem ${value} not in ${
                                                            stateObj[origchannel][type][state]['states']
                                                        } error -> ${error}`,
                                                    );
                                                }
                                                break;
                                            default:
                                                break;
                                        }
                                    }
                                }
                            } else {
                                adapter.log.debug(
                                    `Compare no val in old status ${topic}.${channel}.${state} -> ${JSON.stringify(old)}`,
                                );
                            }
                        }
                    }
                } else {
                    adapter.log.debug(
                        `[Compare] ${topic} not processed ${channel}/${origchannel} state: ${state} value ${val}`,
                    );
                }
            } else {
                adapter.log.debug(
                    `[Compare] no stateDictObj for device ${topic} / ${origchannel}  -> ${JSON.stringify(
                        stateDictObj,
                    )}`,
                );
            }
        } else {
            adapter.log.debug(`[Compare] no stateDictObj ${topic} -> ${JSON.stringify(stateDictObj)}`);
        }
    } catch (error) {
        adapter.log.debug(`Compare went wrong ${topic} / ${channel} / ${state} / ${val}->${error}`);
        adapter.log.debug(`Compare went wrong${origchannel}${stateDictObj[origchannel][state]}`);
    }

    return haUpdate;
}
/**
 * @param adapter - THIS transfer
 * @param {object} stateDictObj - dictionary of states
 * @param {object} stateObj - datapoint definition
 * @param {string} topic - serial#
 * @param {string} msgtype - set/get/update
 * @param payload - payload
 * @param {boolean} haenable - HA enabled for this device
 * @param {boolean} logged - log enable
 */
async function storeSHELLYpayload(adapter, stateDictObj, stateObj, topic, msgtype, payload, haenable, logged) {
    let haUpdate = [];
    if (payload) {
        try {
            let payloadobj = null;
            if (payload['data']) {
                if (payload['data']['quotaMap']) {
                    let status = 'OK';
                    if (status === 'OK') {
                        payloadobj = payload['data']['quotaMap'];
                        if (msgtype === 'get_reply') {
                            adapter.quotas[topic] = payloadobj;
                        }
                    }
                }
            } else if (payload['params']) {
                payloadobj = payload['params'];
                let status = await adapter.getStateAsync(`${topic}.info.status`).catch(e => {
                    adapter.log.warn(`did not get old value .info.status ->${e}`);
                });
                if (status && status.val === 'offline') {
                    await adapter.setStateAsync(`${topic}.info.status`, { val: 'online', ack: true });
                    adapter.log.info(`[EF] ${topic} is online with cloud`);
                }
            } else {
                adapter.log.debug(`no params or data in Shelly payload ->${JSON.stringify(payload)}`);
            }

            if (payloadobj) {
                // adapter.log.debug('SHELLY got: ' + JSON.stringify(payloadobj));
                //stations with dotted syntax
                //shp1 as object structure
                for (const channel in payloadobj) {
                    // adapter.log.debug(channel);
                    let state, val;
                    let haupd;
                    switch (channel) {
                        case 'cloud':
                            state = `${channel}_connected`;
                            val = payloadobj[channel]['connected'];
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                'communication',
                                state,
                                val,
                                'communication',
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            state = `${channel}_enabled`;
                            val = payloadobj[channel]['enabled'];
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                'communication',
                                state,
                                val,
                                'communication',
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'mqtt':
                            state = `${channel}_connected`;
                            val = payloadobj[channel]['connected'];
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                'communication',
                                state,
                                val,
                                'communication',
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'wifi_sta':
                            state = `${channel}_connected`;
                            val = payloadobj[channel]['connected'];
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                'communication',
                                state,
                                val,
                                'communication',
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'total_power':
                            state = 'total_power';
                            val = payloadobj[channel];
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                'emeters',
                                state,
                                val,
                                'emeters',
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'emeters':
                            if (payloadobj[channel].length === 3) {
                                for (let i = 0; i < payloadobj[channel].length; i++) {
                                    state = `currentL${i + 1}`;
                                    val = payloadobj[channel][i]['current'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `voltageL${i + 1}`;
                                    val = payloadobj[channel][i]['voltage'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `powerL${i + 1}`;
                                    val = payloadobj[channel][i]['power'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `pfL${i + 1}`;
                                    val = payloadobj[channel][i]['pf'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `totalL${i + 1}`;
                                    val = payloadobj[channel][i]['total'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `total_returnedL${i + 1}`;
                                    val = payloadobj[channel][i]['total_returned'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;
                        default:
                            //nothing todo
                            break;
                    }
                }
            }
        } catch (error) {
            adapter.log.debug(`store SHELLY JSON payload ${error}`);
            adapter.log.debug(`payload from ${topic} was: ${JSON.stringify(payload)}`);
        }
    } else {
        adapter.log.debug('nothing to process');
    }
    return haUpdate;
}
/**
 * @param adapter - THIS transfer
 * @param {object} stateDictObj - dictionary of states
 * @param {object} stateObj - datapoint definition
 * @param {string} topic - serial#
 * @param {string} msgtype - set/get/update
 * @param payload - payload
 * @param {boolean} haenable - HA enabled for this device
 * @param {boolean} logged - log enable
 */
async function storeSHPpayload(adapter, stateDictObj, stateObj, topic, msgtype, payload, haenable, logged) {
    let haUpdate = [];
    if (payload) {
        try {
            let payloadobj = null;
            if (payload['data']) {
                if (payload['data']['quotaMap']) {
                    let status = 'OK';
                    if (status === 'OK') {
                        payloadobj = payload['data']['quotaMap'];
                        if (msgtype === 'get_reply') {
                            adapter.quotas[topic] = payloadobj;
                        }
                    }
                    if (payload['data']['quotaMap']['timeTask']) {
                        //SHP1
                        const taskarr = payload['data']['quotaMap']['timeTask'];
                        for (let i = 0; i < taskarr.length; i++) {
                            if ('index' in taskarr[i]) {
                                //adapter.log.debug(`index ${taskarr[i]['index']}`);
                                const task = 'task'.concat(String(parseInt(taskarr[i]['index']) + 1));
                                //adapter.log.debug(task);
                                await adapter.setStateAsync(`${topic}.timeTask.${task}.index`, {
                                    val: taskarr[i]['index'],
                                    ack: true,
                                });
                                if ('id' in taskarr[i]) {
                                    await adapter.setStateAsync(`${topic}.timeTask.${task}.id`, {
                                        val: taskarr[i]['id'],
                                        ack: true,
                                    });
                                }
                                if ('chSta' in taskarr[i]) {
                                    await adapter.setStateAsync(`${topic}.timeTask.${task}.chSta`, {
                                        val: JSON.stringify(taskarr[i]['chSta']),
                                        ack: true,
                                    });
                                }
                                for (let key in taskarr[i]['cfg']) {
                                    //cfgIndex ggf. für tasknummerierung
                                    //adapter.log.debug(task + key);
                                    if (key == 'chSta' || key == 'id' || key == 'cfgIndex') {
                                        let value = taskarr[i]['cfg'][key];
                                        //adapter.log.debug(`${task} / ${key} = ${value}`);
                                        await adapter.setStateAsync(`${topic}.timeTask.${task}.${key}`, {
                                            val: value,
                                            ack: true,
                                        });
                                    } else if (key == 'param') {
                                        for (let key2 in taskarr[i]['cfg'][key]) {
                                            let value = taskarr[i]['cfg'][key][key2];
                                            //adapter.log.debug(`${task} / ${key} / ${key2} = ${value}`);
                                            if (key2 === 'chSta') {
                                                value = JSON.stringify(taskarr[i]['cfg'][key][key2]);
                                            }

                                            await adapter.setStateAsync(`${topic}.timeTask.${task}.param.${key2}`, {
                                                val: value,
                                                ack: true,
                                            });
                                        }
                                    } else if (key == 'comCfg') {
                                        for (let key2 in taskarr[i]['cfg'][key]) {
                                            if (key2 !== 'timeRange' && key2 !== 'setTime') {
                                                let value;
                                                if (key2 === 'timeScale') {
                                                    value = JSON.stringify(taskarr[i]['cfg'][key][key2]);
                                                } else if (key2 === 'isEnable') {
                                                    value = taskarr[i]['cfg'][key][key2] ? true : false;
                                                } else {
                                                    /*
                                                    if (stateObj['timeTask']) {
                                                        value =
                                                            stateObj['timeTask']['cfg'][key][key2][key2][
                                                                String(taskarr[i]['cfg'][key][key2])
                                                            ];
                                                    } else {
                                                        value = String(taskarr[i]['cfg'][key][key2]);
                                                    }
                                                        */
                                                    value = String(taskarr[i]['cfg'][key][key2]);
                                                }
                                                //adapter.log.debug(`${task} / ${key} / ${key2} = ${value}`);
                                                await adapter.setStateAsync(
                                                    `${topic}.timeTask.${task}.comCfg.${key2}`,
                                                    {
                                                        val: value,
                                                        ack: true,
                                                    },
                                                );
                                            } else if (key2 == 'setTime') {
                                                for (let key3 in taskarr[i]['cfg'][key][key2]) {
                                                    /*
                                                    adapter.log.debug(
                                                        `${task} / ${key} / ${key2} / ${key3} = ${taskarr[i]['cfg'][key][key2][key3]}`,
                                                    );
                                                    */
                                                    await adapter.setStateAsync(
                                                        `${topic}.timeTask.${task}.comCfg.${key2}.${key3}`,
                                                        {
                                                            val: taskarr[i]['cfg'][key][key2][key3],
                                                            ack: true,
                                                        },
                                                    );
                                                }
                                            } else if (key2 == 'timeRange') {
                                                for (let key3 in taskarr[i]['cfg'][key][key2]) {
                                                    if (key3 !== 'startTime' && key3 !== 'endTime') {
                                                        let value;
                                                        if (key3 === 'model') {
                                                            value = JSON.stringify(taskarr[i]['cfg'][key][key2][key3]);
                                                        } else {
                                                            if (stateObj['timeTask']) {
                                                                value =
                                                                    stateObj['timeTask']['cfg'][key][key2][key3][key3][
                                                                        String(taskarr[i]['cfg'][key][key2][key3])
                                                                    ];
                                                            } else {
                                                                value = String(taskarr[i]['cfg'][key][key2][key3]);
                                                            }
                                                        }
                                                        /*
                                                        adapter.log.debug(
                                                            `${task} / ${key} / ${key2} / ${key3} = ${value}`,
                                                        );
                                                        */
                                                        await adapter.setStateAsync(
                                                            `${topic}.timeTask.${task}.comCfg.${key2}.${key3}`,
                                                            {
                                                                val: value,
                                                                ack: true,
                                                            },
                                                        );
                                                    } else {
                                                        for (let key4 in taskarr[i]['cfg'][key][key2][key3]) {
                                                            /*
                                                            adapter.log.debug(
                                                                `${task} / ${key} / ${key2} / ${key3} / ${key4} = ${taskarr[i]['cfg'][key][key2][key3][key4]}`,
                                                            );
                                                            */
                                                            await adapter.setStateAsync(
                                                                `${topic}.timeTask.${task}.comCfg.${key2}.${key3}.${
                                                                    key4
                                                                }`,
                                                                {
                                                                    val: taskarr[i]['cfg'][key][key2][key3][key4],
                                                                    ack: true,
                                                                },
                                                            );
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        adapter.log.debug('processed get_reply SHP timeTask !');
                    }
                }
            } else if (payload['params']) {
                payloadobj = payload['params'];
                //SHP cyclically receives params messages, so we can detect from here the online status ??
                await setOnlineStatus(adapter, topic);
                /*
				let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
					adapter.log.warn('did not get old value .info.status ->' + e);
				});
				if (status && status.val === 'offline') {
					await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
					adapter.log.info('[EF] ' + topic + ' is online with cloud');
				}
					*/
            } else {
                adapter.log.debug(`no params or data in SHP payload ->${JSON.stringify(payload)}`);
            }

            if (payloadobj) {
                // adapter.log.debug('SHP got: ' + JSON.stringify(payloadobj));
                //stations with dotted syntax
                //shp1 as object structure
                for (const channel in payloadobj) {
                    // adapter.log.debug(channel);
                    let state, val;
                    let haupd;
                    switch (channel) {
                        case 'cfgSta':
                            state = 'sta';
                            val = payloadobj[channel]['sta'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'epsModeInfo':
                            state = 'eps';
                            val = payloadobj[channel]['eps'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'areaInfo':
                            state = 'area';
                            val = payloadobj[channel]['area'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'gridInfo':
                            state = 'gridFreq';
                            val = payloadobj[channel]['gridFreq'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            state = 'gridVol';
                            val = payloadobj[channel]['gridVol'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;

                        case 'emergencyStrategy':
                            state = 'backupMode';
                            val = payloadobj[channel]['backupMode'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            state = 'isCfg';
                            val = payloadobj[channel]['isCfg'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            //chSta ggf. doppelt
                            break;

                        case 'backupChaDiscCfg':
                            state = 'forceChargeHigh';
                            val = payloadobj[channel]['forceChargeHigh'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            state = 'discLower';
                            val = payloadobj[channel]['discLower'];
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
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }

                            break;
                        case 'loadCmdChCtrlInfos':
                            if (payloadobj[channel].length === 10) {
                                for (let i = 0; i < payloadobj[channel].length; i++) {
                                    state = `powCh_${i}`;
                                    val = payloadobj[channel][i]['powCh'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `ctrlSta_${i}`;
                                    val = payloadobj[channel][i]['ctrlSta'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `ctrlMode_${i}`;
                                    val = payloadobj[channel][i]['ctrlMode'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `priority_${i}`;
                                    val = payloadobj[channel][i]['priority'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;

                        case 'splitPhaseInfo':
                            if (payloadobj[channel]['cfgList'].length === 10) {
                                for (let i = 0; i < payloadobj[channel]['cfgList'].length; i++) {
                                    state = `linkMark_${i}`;
                                    val = payloadobj[channel]['cfgList'][i]['linkMark'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `linkCh_${i}`;
                                    val = payloadobj[channel]['cfgList'][i]['linkCh'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;
                        case 'mainsLoadWatt':
                            if (payloadobj[channel]['watth'].length === 10) {
                                for (let i = 0; i < payloadobj[channel]['watth'].length; i++) {
                                    state = `watthDaytoDate_${i}`;
                                    val = payloadobj[channel]['watth'][i].reduce((a, b) => a + b, 0);
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `watth_${i}`;
                                    val = payloadobj[channel]['watth'][i];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;

                        case 'chUseInfo':
                            if (payloadobj[channel]['isEnable'].length === 10) {
                                for (let i = 0; i < payloadobj[channel]['isEnable'].length; i++) {
                                    state = `isEnable_${i}`;
                                    // the only one where true instead of 1
                                    val = payloadobj[channel]['isEnable'][i] === true ? 1 : 0;
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;

                        case 'loadChInfo':
                            if (payloadobj[channel]['info'].length === 10) {
                                for (let i = 0; i < payloadobj[channel]['info'].length; i++) {
                                    const xtract = Buffer.from(payloadobj[channel]['info'][i]['chName']);
                                    state = `chName_${i}`;
                                    val = xtract.toString();
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }

                            break;
                        case 'backupCmdChCtrlInfos':
                            if (payloadobj[channel].length === 2) {
                                for (let i = 0; i < payloadobj[channel].length; i++) {
                                    state = `powCh_${10 + i}`;
                                    val = payloadobj[channel][i]['powCh'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }

                                    state = `ctrlSta_${10 + i}`;
                                    val = payloadobj[channel][i]['ctrlSta'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }

                                    state = `ctrlMode_${10 + i}`;
                                    val = payloadobj[channel][i]['ctrlMode'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }

                                    state = `priority_${10 + i}`;
                                    val = payloadobj[channel][i]['priority'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;

                        case 'topupLoadWatt':
                            if (payloadobj[channel]['watth'].length === 2) {
                                for (let i = 0; i < payloadobj[channel]['watth'].length; i++) {
                                    state = `watthDaytoDate_${10 + i}`;
                                    val = payloadobj[channel]['watth'][i].reduce((a, b) => a + b, 0);
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `watth_${10 + i}`;
                                    val = payloadobj[channel]['watth'][i];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;

                        case 'loadChCurInfo':
                            if (payloadobj[channel]['cur'].length === 12) {
                                for (let i = 0; i < payloadobj[channel]['cur'].length; i++) {
                                    state = `cur_${i}`;
                                    val = payloadobj[channel]['cur'][i];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;
                        case 'channelPower':
                            if (payloadobj[channel]['infoList'].length === 12) {
                                for (let i = 0; i < payloadobj[channel]['infoList'].length; i++) {
                                    state = `powType_${i}`;
                                    val = payloadobj[channel]['infoList'][i]['powType'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `chWatt_${i}`;
                                    val = payloadobj[channel]['infoList'][i]['chWatt'];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;

                        case 'backupLoadWatt':
                            if (payloadobj[channel]['watth'].length === 10) {
                                for (let i = 0; i < payloadobj[channel]['watth'].length; i++) {
                                    state = `watthDaytoDate_${i}`;
                                    val = payloadobj[channel]['watth'][i].reduce((a, b) => a + b, 0);
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                    state = `watth_${i}`;
                                    val = payloadobj[channel]['watth'][i];
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                            } else {
                                adapter.log.debug(`${channel} wrong length`);
                            }
                            break;
                        case 'errorCodes':
                            state = 'errorCodes';
                            val = payloadobj[channel];
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                'heartbeat',
                                state,
                                val,
                                'heartbeat',
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                        case 'timeTask':
                            //later
                            break;
                        case 'energyInfos':
                            //later
                            break;
                        case 'id':
                        case 'time':
                        case 'cmdSet':
                        case 'rtc':
                        case 'index':
                            //nothing todo
                            break;
                        default:
                            //hier sollten nur noch die direkten Einzelwerte landen, die bei params drin sind
                            // channel ist in dem Fall 'heartbeat"
                            state = channel;
                            val = payloadobj[channel];
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                'heartbeat',
                                state,
                                val,
                                'heartbeat',
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                            break;
                    }
                }
            }
        } catch (error) {
            adapter.log.debug(`store SHP JSON payload ${error}`);
            adapter.log.debug(`payload from ${topic} was: ${JSON.stringify(payload)}`);
        }
    } else {
        adapter.log.debug('nothing to process');
    }
    return haUpdate;
}
/**
 * @param adapter - THIS transfer
 * @param {object} stateDictObj - dictionary of states
 * @param {object} stateObj - datapoint definition
 * @param {string} topic - serial#
 * @param {string} msgtype - set/get/update
 * @param payload - payload
 * @param {boolean} haenable - HA enabled for this device
 * @param {boolean} logged - log enable
 */
async function storePowerkitPayload(adapter, stateDictObj, stateObj, topic, msgtype, payload, haenable, logged) {
    let haUpdate = [];
    if (payload) {
        try {
            let payloadobj = null;
            if (payload['data']) {
                if (payload['data']['quotaMap']) {
                    if (typeof payload['data']['quotaMap'] === 'string') {
                        payloadobj = JSON.parse(payload['data']['quotaMap']);
                    } else if (typeof payload['data']['quotaMap'] === 'object') {
                        for (let obj in payload['data']['quotaMap']) {
                            if (typeof payload['data']['quotaMap'][obj] === 'string') {
                                payload['data']['quotaMap'][obj] = JSON.parse(payload['data']['quotaMap'][obj]);
                            }
                        }
                        payloadobj = payload['data']['quotaMap'];
                    }
                    if (msgtype === 'get_reply') {
                        adapter.quotas[topic] = payloadobj;
                    }
                    await setOnlineStatus(adapter, topic);
                    /*
					let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
						adapter.log.warn('did not get old value .info.status ->' + e);
					});
					if (status && status.val === 'offline') {
						await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
						adapter.log.info('[EF] ' + topic + ' is online with cloud');
					}
						*/
                }
            } else if (payload['params']) {
                if (typeof payload['params'] === 'string') {
                    payloadobj = JSON.parse(payload['params']);
                } else if (typeof payload['params'] === 'object') {
                    for (let obj in payload['params']) {
                        if (typeof payload['params'][obj] === 'string') {
                            payload['params'][obj] = JSON.parse(payload['params'][obj]);
                        }
                    }
                    payloadobj = payload['params'];
                }
                await setOnlineStatus(adapter, topic);
                /*
				let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
					adapter.log.warn('did not get old value .info.status ->' + e);
				});
				if (status && status.val === 'offline') {
					await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
					adapter.log.info('[EF] ' + topic + ' is online with cloud');
				}
					*/
            } else {
                adapter.log.debug(`no params or data in Powerkit payload ->${JSON.stringify(payload)}`);
            }

            if (payloadobj) {
                //powerkit as object structure and additional modelSn before of data
                for (let channel in payloadobj) {
                    //bmsTotal without serial
                    if (channel === 'bmsTotal') {
                        for (let obj in payloadobj[channel]) {
                            let haupd;
                            haupd = await compareUpdate(
                                adapter,
                                stateDictObj,
                                stateObj,
                                haenable,
                                topic,
                                channel,
                                obj,
                                payloadobj[channel][obj],
                                channel,
                                logged,
                            );
                            if (Object.keys(haupd).length !== 0) {
                                haUpdate.push(haupd);
                            }
                        }
                    } else {
                        for (let serial in payloadobj[channel]) {
                            if (channel === 'bp2000' || channel === 'bp5000') {
                                if (Object.prototype.hasOwnProperty.call(payloadobj[channel][serial], 'kitNum')) {
                                    await adapter.setStateAsync(
                                        `${topic}.` + `bp${payloadobj[channel][serial]['kitNum']}.` + `moduleSn`,
                                        {
                                            val: serial,
                                            ack: true,
                                        },
                                    );
                                }
                            } else if (channel === 'wireless' || channel === 'onLineModuleSnList') {
                                //hier keine SN#
                            } else {
                                await adapter.setStateAsync(`${topic}.${channel}.` + `moduleSn`, {
                                    val: serial,
                                    ack: true,
                                });
                            }
                            for (let obj in payloadobj[channel][serial]) {
                                let haupd;
                                let dbgmsgonce = null;
                                switch (channel) {
                                    case 'bp2000':
                                    case 'bp5000':
                                        dbgmsgonce = false;
                                        if (
                                            Object.prototype.hasOwnProperty.call(payloadobj[channel][serial], 'kitNum')
                                        ) {
                                            haupd = await compareUpdate(
                                                adapter,
                                                stateDictObj,
                                                stateObj,
                                                haenable,
                                                topic,
                                                `bp${payloadobj[channel][serial]['kitNum']}`,
                                                obj,
                                                payloadobj[channel][serial][obj],
                                                'bp1',
                                                logged,
                                            );
                                            if (Object.keys(haupd).length !== 0) {
                                                haUpdate.push(haupd);
                                            }
                                        } else {
                                            if (dbgmsgonce === false) {
                                                adapter.log.warn(`powerkit battery ${serial} has no kitNum`);
                                            }
                                            dbgmsgonce = true;
                                        }

                                        break;
                                    case 'onLineModuleSnList':
                                        // is array, so serial is a number 0....7(8,9)
                                        haupd = await compareUpdate(
                                            adapter,
                                            stateDictObj,
                                            stateObj,
                                            haenable,
                                            topic,
                                            channel,
                                            `m${serial}_${obj}`,
                                            payloadobj[channel][serial][obj],
                                            channel,
                                            logged,
                                        );
                                        if (Object.keys(haupd).length !== 0) {
                                            haUpdate.push(haupd);
                                        }
                                        break;
                                    case 'ichigh':
                                        if (obj !== 'appCfg') {
                                            haupd = await compareUpdate(
                                                adapter,
                                                stateDictObj,
                                                stateObj,
                                                haenable,
                                                topic,
                                                channel,
                                                obj,
                                                payloadobj[channel][serial][obj],
                                                channel,
                                                logged,
                                            );
                                            if (Object.keys(haupd).length !== 0) {
                                                haUpdate.push(haupd);
                                            }
                                        } else {
                                            for (let key in payloadobj[channel][serial][obj]) {
                                                haupd = await compareUpdate(
                                                    adapter,
                                                    stateDictObj,
                                                    stateObj,
                                                    haenable,
                                                    topic,
                                                    channel,
                                                    key,
                                                    payloadobj[channel][serial][obj][key],
                                                    channel,
                                                    logged,
                                                );
                                                if (Object.keys(haupd).length !== 0) {
                                                    haUpdate.push(haupd);
                                                }
                                            }
                                        }

                                        break;
                                    default:
                                        haupd = await compareUpdate(
                                            adapter,
                                            stateDictObj,
                                            stateObj,
                                            haenable,
                                            topic,
                                            channel,
                                            obj,
                                            payloadobj[channel][serial][obj],
                                            channel,
                                            logged,
                                        );
                                        if (Object.keys(haupd).length !== 0) {
                                            haUpdate.push(haupd);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            adapter.log.debug(`store Powerkit JSON payload ${error}`);
            adapter.log.debug(`payload from ${topic} was: ${JSON.stringify(payload)}`);
        }
    } else {
        adapter.log.debug('nothing to process');
    }
    return haUpdate;
}
/*
function getShpMode(ctrlSta, ctrlMode) {
	let mode = '';
	if (ctrlSta === 0 && ctrlMode === 0) {
		mode = 'Auto';
	} else if (ctrlSta === 0 && ctrlMode === 1) {
		mode = 'Grid';
	} else if (ctrlSta === 1 && ctrlMode === 1) {
		mode = 'Battery';
	} else if (ctrlSta === 2 && ctrlMode === 1) {
		mode = 'Off';
	} else {
		//no valid combination
	}
	return mode;
}
*/

/**
 * @param {string} topic - serial#
 * @param {string} mqttUserId - user id
 */
function getIdFromTopic(topic, mqttUserId) {
    let msgtype;
    if (topic.includes('/app/device/property/')) {
        msgtype = 'update';
        topic = topic.replace('/app/device/property/', '');
    } else if (topic.includes('get_reply')) {
        msgtype = 'get_reply';
        topic = topic.replace(`/app/${mqttUserId}/`, '').replace('/thing/property/get_reply', '');
    } else if (topic.includes('get')) {
        msgtype = 'get';
        topic = topic.replace(`/app/${mqttUserId}/`, '').replace('/thing/property/get', '');
    } else if (topic.includes('set_reply')) {
        msgtype = 'set_reply';
        topic = topic.replace(`/app/${mqttUserId}/`, '').replace('/thing/property/set_reply', '');
    } else if (topic.includes('set')) {
        msgtype = 'set';
        topic = topic.replace(`/app/${mqttUserId}/`, '').replace('/thing/property/set', '');
    } else {
        msgtype = 'unknown msgtype';
    }
    return { msg: msgtype, topic: topic };
}

/**
 * @param {string} userID - EF user id
 * @param {object} devices - configured devices
 */
function createSubscribeTopics(userID, devices) {
    let topics = [];
    if (devices) {
        for (let key in devices) {
            topics.push(`/app/${userID}/${key}/thing/property/set`);
            topics.push(`/app/${userID}/${key}/thing/property/set_reply`);
            topics.push(`/app/${userID}/${key}/thing/property/get`);
            topics.push(`/app/${userID}/${key}/thing/property/get_reply`);
            topics.push(`/app/device/property/${key}`);
            //topics.push('/app/' + userID + '/' + key + '/status')
            //topics.push('/app/device/status+ '/' + key)
            //topics.push('/app/device/progress+ '/' + key)
            //topics.push('/app/+ userID + '/' + key + '/#)
        }
    }
    return topics;
}
/**
 * @param adapter - THIS transfer
 * @param {object} pdevices - configured devices
 */
async function getLastQuotas(adapter, pdevices) {
    try {
        for (const [device, value] of Object.entries(pdevices)) {
            const devtype = value['devType'];
            if (devtype) {
                adapter.log.debug(`${device} ${devtype} -> latestQuotas request`);
                const value = await adapter.getStateAsync(`${device}.action.latestQuotas`).catch(e => {
                    adapter.log.warn(`did not get old value .action.latestQuotas ->${e}`);
                });
                if (value) {
                    await adapter.setStateAsync(
                        `${device}.action.latestQuotas`,
                        value.val === true ? false : true,
                        false,
                    );
                } else {
                    await adapter.setStateAsync(`${device}.action.latestQuotas`, true, false);
                }
            }
        }
    } catch (error) {
        adapter.log.debug(`getLastProtobufQuotas -> ${error}`);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * @param {object} allstates - states definitions
 * @param {object} dict - dictionary
 */
function statesFromDict(allstates, dict) {
    let states = {};
    for (let channel in dict) {
        states[channel] = {};
        for (let key in dict[channel]) {
            const type = dict[channel][key]['entity'];
            if (!states[channel][type]) {
                states[channel][type] = {};
            }
            states[channel][type][key] = allstates[channel][type][key];
        }
    }
    return states;
}

/**
 * @param adapter - THIS transfer
 * @param {string} serial - serial#
 * @param {string} stationType - device type
 * @param {string} state - datapoint
 * @param {number | boolean} value - value
 * @param {object} cmd - cmd definitions
 * @param {any} channel - upper struct
 * @param {any} logged - log enable
 */
async function prepareStationCmd(adapter, serial, stationType, state, value, cmd, channel, logged) {
    if (cmd) {
        if (Object.keys(cmd).length > 0) {
            //keine Zuschaltung von Verbrauchern, wenn die Kapazität unterhalb min
            //APP verhindert dies mit Meldung
            // hier generisch für alle stations
            if (
                (state === 'cfgAcEnabled' || state === 'carState' || state === 'dcOutState') &&
                (value === true || value == 1)
            ) {
                //passt das für alle Powerstations?
                const min = await adapter.getStateAsync(`${serial}.ems.minDsgSoc`).catch(e => {
                    adapter.log.warn(`did not get ${serial}.ems.minDsgSoc ->${e}`);
                });
                const soc = await adapter.getStateAsync(`${serial}.bmsMaster.f32ShowSoc`).catch(e => {
                    adapter.log.warn(`did not get ${serial}.bmsMaster.f32ShowSoc ->${e}`);
                });
                try {
                    if (soc.val < min.val) {
                        adapter.log.warn(
                            `soc ${soc.val} is below the minimum ${min.val}, turning on is not allowed ${state}`,
                        );
                        return {};
                    }
                } catch (error) {
                    adapter.log.warn(
                        `soc or  minDsgSoc have empty value due to missing initializing, gave error ${error}`,
                    );
                    return {};
                }
            }
            //hier Unterscheidung
            if (
                stationType === 'deltamax' ||
                stationType === 'deltapro' ||
                stationType === 'delta' ||
                stationType === 'deltamini' ||
                stationType === 'riverpro' ||
                stationType === 'rivermax'
            ) {
                let msg = cmd.msg;
                // moduleTyp wird wohl nicht gebraucht
                //msg['moduleType'] = cmd['moduleType'] || 0;
                msg['id'] = String(getRandomInt(100000000, 900000000));
                //umrechnung der Werte
                switch (state) {
                    case 'latestQuotas':
                    case 'getAllTaskCfg':
                        //no params to send
                        break;
                    case 'beepState':
                        msg['params'][cmd['valName']] = value ? 0 : 1;
                        break;
                    case 'cfgAcEnabled':
                    case 'cfgAcXboost':
                    case 'carState':
                    case 'dcOutState':
                    case 'acautooutConfig':
                    case 'chgPauseFlag':
                        msg['params'][cmd['valName']] = value ? 1 : 0;
                        break;
                    case 'bppowerSoc':
                        //const min = await adapter.getStateAsync(serial + '.ems.minDsgSoc');
                        //msg['params']['minDsgSoc'] = min.val;
                        //const max = await adapter.getStateAsync(serial + '.ems.maxChgSoc');
                        //msg['params']['maxChgSoc'] = max.val;
                        msg['params'][cmd['valName']] = value;
                        break;
                    case 'cfgDcChgCurrent':
                        value = value * 1000;
                        msg['params'][cmd['valName']] = value;
                        break;
                    default:
                        // cfgChgType?? analog oder
                        //all analog values
                        msg['params'][cmd['valName']] = value;
                        break;
                }
                if (logged) {
                    adapter.log.debug(
                        `prep cmd  ${serial}  ${stationType}  ${state}  ${value}  ${JSON.stringify(msg)}`,
                    );
                }
                return msg;
            } else if (
                stationType === 'delta2' ||
                stationType === 'delta2max' ||
                stationType === 'river2pro' ||
                stationType === 'river2max' ||
                stationType === 'shelly3em' ||
                stationType === 'unknownjson'
            ) {
                let msg = {
                    from: 'Android',
                    lang: 'en-us',
                    id: String(getRandomInt(100000000, 900000000)),
                    moduleType: 1,
                    operateType: '',
                    version: '1.0',
                };
                msg['params'] = cmd['params'];
                msg['moduleSn'] = serial;

                if (stationType === 'delta2max') {
                    if (state === 'dcChgCurrent') {
                        const curr = await adapter.getStateAsync(`${serial}.mppt.pv2DcChgCurrent`).catch(e => {
                            adapter.log.warn(`did not get ${serial}.mppt.pv2DcChgCurrent ->${e}`);
                        });
                        if (curr) {
                            msg['params']['dcChgCfg2'] = curr.val * 1000;
                        } else {
                            //error ?
                        }
                    } else if (state === 'pv2DcChgCurrent') {
                        const curr = await adapter.getStateAsync(`${serial}.mppt.dcChgCurrent`).catch(e => {
                            adapter.log.warn(`did not get ${serial}.mppt.dcChgCurrent ->${e}`);
                        });
                        if (curr) {
                            msg['params']['dcChgCfg'] = curr.val * 1000;
                        } else {
                            // error
                        }
                    } else if (state === 'bpPowerSoc') {
                        const min = await adapter.getStateAsync(`${serial}.ems.minDsgSoc`).catch(e => {
                            adapter.log.warn(`did not get ${serial}.ems.minDsgSoc ->${e}`);
                        });
                        //currently changing bpsoc enables the backup reserve
                        if (min) {
                            if (value < min.val + 5) {
                                value = min.val + 5;
                            } else {
                                msg['params']['minDsgSoc'] = value;
                            }
                        } else {
                            //error ?
                        }
                    } else if (state === 'watchIsConfig') {
                        const bpsoc = await adapter.getStateAsync(`${serial}.pd.bpPowerSoc`).catch(e => {
                            adapter.log.warn(`did not get ${serial}.pd.bpPowerSoc ->${e}`);
                        });
                        if (bpsoc) {
                            msg['params']['bpPowerSoc'] = bpsoc.val;
                        } else {
                            //error ?
                        }
                    }
                }

                switch (state) {
                    case 'latestQuotas':
                    case 'getAllTaskCfg':
                        //no params to send
                        break;
                    case 'beepState':
                        msg['params'][cmd['valName']] = value ? 0 : 1;
                        break;
                    //hier noch andere switches ergänzen
                    case 'cfgAcEnabled':
                    case 'cfgAcXboost':
                    case 'carState':
                    case 'dcOutState':
                    case 'acAutoOnCfg':
                    case 'newAcAutoOnCfg':
                    case 'xboost':
                    case 'pvChgPrioSet':
                    case 'chgPauseFlag':
                    case 'acAutoOutConfig':
                        msg['params'][cmd['valName']] = value ? 1 : 0;
                        break;
                    case 'dcChgCurrent':
                        //case 'cfgDcChgCurrent':
                        break;
                    case 'pv2DcChgCurrent':
                        value = value * 1000;
                        msg['params'][cmd['valName']] = value;
                        break;
                    case 'bppowerSoc':
                        //const min = await adapter.getStateAsync(serial + '.ems.minDsgSoc');
                        //msg['params']['minDsgSoc'] = min.val;
                        //const max = await adapter.getStateAsync(serial + '.ems.maxChgSoc');
                        //msg['params']['maxChgSoc'] = max.val;
                        //if min max then in above code
                        msg['params'][cmd['valName']] = value;
                        break;
                    case 'watchIsConfig':
                        //const min = await adapter.getStateAsync(serial + '.ems.minDsgSoc');
                        //msg['params']['minDsgSoc'] = min.val;
                        //const max = await adapter.getStateAsync(serial + '.ems.maxChgSoc');
                        //msg['params']['maxChgSoc'] = max.val;
                        //if min max then in above code
                        msg['params'][cmd['valName']] = value ? 1 : 0;
                        break;
                    default:
                        msg['params'][cmd['valName']] = value;
                        break;
                }
                msg['operateType'] = cmd['operateType'];
                msg['moduleType'] = cmd['moduleType'];
                if (logged) {
                    adapter.log.debug(
                        `prep cmd  ${serial}  ${stationType}  ${state}  ${value}  ${JSON.stringify(msg)}`,
                    );
                }
                return msg;
            } else if (stationType === 'wave2') {
                let msg = {
                    from: 'Android',
                    lang: 'en-us',
                    id: String(getRandomInt(100000000, 900000000)),
                    moduleType: 1,
                    operateType: '',
                    version: '1.0',
                };
                msg['params'] = cmd['params'];
                msg['moduleSn'] = serial;

                // multivalue befehle
                // idleMode, idleTime
                // timeSet ?

                switch (state) {
                    case 'idleMode':
                    case 'tempSys':
                    case 'tempDisplay':
                    case 'beepEn':
                        msg['params'][cmd['valName']] = value ? 1 : 0;
                        break;
                    case 'latestQuotas':
                        //no params to send
                        break;
                    default:
                        msg['params'][cmd['valName']] = value;
                        break;
                }
                msg['operateType'] = cmd['operateType'];
                msg['moduleType'] = cmd['moduleType'];
                if (logged) {
                    adapter.log.debug(
                        `prep cmd  ${serial}  ${stationType}  ${state}  ${value}  ${JSON.stringify(msg)}`,
                    );
                }
                return msg;
            } else if (stationType === 'glacier') {
                let msg = {
                    from: 'Android',
                    lang: 'en-us',
                    id: String(getRandomInt(100000000, 900000000)),
                    moduleType: 1,
                    operateType: '',
                    version: '1.0',
                };
                msg['params'] = cmd['params'];
                msg['moduleSn'] = serial;

                // multivalue befehle
                // pwrPbEn, powerPbLevel
                // iceMode, iceShape
                // tmpL/R/M
                switch (state) {
                    case 'coolMode':
                    case 'tmpUnit':
                    case 'beepEn':
                    case 'iceMode':
                    case 'iceShape':
                    case 'iceDetach':
                    case 'sensorAdv':
                    case 'pwrPbEn':
                        msg['params'][cmd['valName']] = value ? 1 : 0;
                        break;
                    case 'dcChgCurrent':
                        value = value * 1000;
                        msg['params'][cmd['valName']] = value;
                        break;
                    case 'latestQuotas':
                        //no params to send
                        break;
                    default:
                        msg['params'][cmd['valName']] = value;
                        break;
                }
                msg['operateType'] = cmd['operateType'];
                msg['moduleType'] = cmd['moduleType'];
                if (logged) {
                    adapter.log.debug(
                        `prep cmd  ${serial}  ${stationType}  ${state}  ${value}  ${JSON.stringify(msg)}`,
                    );
                }
                return msg;
            } else if (stationType === 'panel') {
                let msg = {
                    from: 'Android',
                    lang: 'en-us',
                    id: String(getRandomInt(100000000, 900000000)),
                    moduleType: 0,
                    operateType: 'TCP',
                    version: '1.0',
                };
                msg['params'] = cmd['params'];
                msg['moduleType'] = cmd['moduleType'];
                //msg['moduleSn'] = serial;

                let secondval;
                let secondid = '';
                let path = '';
                //mode or ctrSta
                if (state.includes('ctrlSta_') || state.includes('ctrlMode_')) {
                    const parts = state.split('_');
                    const channel = parts[1];
                    if (parts[0] === 'ctrlSta') {
                        state = 'ctrlSta';
                        //seconditem = 'ctrlMode';
                        //secondid = 'ctrlMode'.concat('_', channel);
                    } else if (parts[0] === 'ctrlMode') {
                        state = 'ctrlMode';
                        //seconditem = 'sta';
                        //secondid = 'ctrlSta'.concat('_', channel);
                    }
                    if (channel < 10) {
                        path = 'loadCmdChCtrlInfos';
                    } else {
                        path = 'backupCmdChCtrlInfos';
                    }
                } else if (state === 'forceChargeHigh' || state === 'discLower') {
                    path = 'backupChaDiscCfg';
                    if (state === 'forceChargeHigh') {
                        secondid = 'discLower';
                    } else {
                        secondid = 'forceChargeHigh';
                    }
                }
                if (state === 'forceChargeHigh' || state === 'discLower') {
                    // der Aufruf ist immer für secondid notwendig
                    // eps braucht es nicht und würde zu Fehler bei Aufruf führen, da secondid =''
                    //if statment für weitere Befehle erweitern!!!!
                    const secvalue = await adapter.getStateAsync(`${serial}.${path}.${secondid}`).catch(e => {
                        adapter.log.warn(`did not get ${serial}.${path}.${secondid}->${e}`);
                    });
                    try {
                        if (secvalue.val) {
                            secondval = secvalue.val;
                            adapter.log.debug(`using ${secondid} =  ${secondval}as second value`);
                        } else {
                            return {};
                        }
                    } catch (error) {
                        adapter.log.warn(
                            `${path + secondid} has empty value due to missing initializing, gave error ${error}`,
                        );
                        return {};
                    }
                }

                switch (state) {
                    case 'forceChargeHigh':
                    case 'discLower':
                        msg['params'][cmd['valName']] = value;
                        //hier noch abfangen ob secondid und secondval vorhanden?
                        //wahrscheinlich nicht, da es vorher schon beim vergeblichen Wertholen zu Fehler kommt
                        msg['params'][secondid] = secondval;
                        break;
                    case 'eps':
                        msg['params'][cmd['valName']] = value ? 1 : 0;
                        break;
                    case 'ctrlSta':
                        msg['params'][cmd['valName']] = value;
                        break;
                    case 'ctrlMode':
                        msg['params'][cmd['valName']] = value ? 1 : 0;
                        break;
                    case 'isEnable':
                    case 'chChargeWatt':
                        {
                            delete msg['params'];
                            let params = {
                                cfg: {
                                    param: {
                                        lowBattery: 95,
                                        chChargeWatt: 2000,
                                        chSta: [1, 0],
                                        hightBattery: 100,
                                    },
                                    chSta: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                                    comCfg: {
                                        timeScale: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                        isCfg: 1,
                                        type: 1,
                                        timeRange: {
                                            isCfg: 1,
                                            timeMode: 0,
                                            startTime: {
                                                sec: 0,
                                                min: 0,
                                                week: 2,
                                                hour: 0,
                                                month: 10,
                                                year: 2022,
                                                day: 24,
                                            },
                                            endTime: {
                                                sec: 59,
                                                min: 59,
                                                week: 2,
                                                hour: 23,
                                                month: 10,
                                                year: 2022,
                                                day: 25,
                                            },
                                            isEnable: 1,
                                        },
                                        isEnable: 1,
                                        setTime: {
                                            sec: 61,
                                            min: 9,
                                            week: 7,
                                            hour: 16,
                                            month: 11,
                                            year: 2022,
                                            day: 15,
                                        },
                                    },
                                },
                                cfgIndex: 1,
                                cmdSet: 11,
                                id: 81,
                            };
                            adapter.log.debug(`channel ${channel}`);
                            adapter.log.debug(`value ${value}`);
                            let id = await adapter.getStateAsync(`${serial}.timeTask.${channel}.id`).catch(e => {
                                adapter.log.warn(`did not get ${serial}.timeTask.${channel}.id ->${e}`);
                            });
                            adapter.log.debug(`id ${id}`);
                            if (id !== null) {
                                adapter.log.debug(`id ${id} = ${id.val}`);
                                params.id = parseInt(id.val);
                            }
                            let index = await adapter.getStateAsync(`${serial}.timeTask.${channel}.index`).catch(e => {
                                adapter.log.warn(`did not get ${serial}.timeTask.${channel}.index ->${e}`);
                            });
                            if (index !== null) {
                                adapter.log.debug(`index ${index} = ${index.val}`);
                                params.cfgIndex = parseInt(index.val);
                            }
                            let type = await adapter.getStateAsync(`${serial}.timeTask.${channel}.comCfg.type`);

                            adapter.log.debug(`comCfg type ${type}`);
                            if (type !== null) {
                                adapter.log.debug(`comCfg type ${type} = ${type.val}`);
                                params.cfg.comCfg.type = parseInt(type.val);
                                // task object is different when charging or discharging
                                if (type.val == 1) {
                                    //all aparams without chChargeWatt
                                    for (let key in params['cfg']['param']) {
                                        if (key !== 'chChargeWatt') {
                                            const val = await adapter
                                                .getStateAsync(`${serial}.timeTask.${channel}.param.${key}`)
                                                .catch(e => {
                                                    adapter.log.warn(
                                                        `did not get ${serial}.timeTask.${channel}.param.${key} ->${e}`,
                                                    );
                                                });
                                            if (val !== null) {
                                                adapter.log.debug(`param ${key}  = ${val.val}`);
                                                if (key == 'chSta') {
                                                    params.cfg.param[key] = JSON.parse(val.val);
                                                } else {
                                                    params.cfg.param[key] = parseInt(val.val);
                                                }
                                            }
                                        }
                                    }
                                    if (state === 'isEnable') {
                                        const power = await adapter
                                            .getStateAsync(`${serial}.timeTask.${channel}.param.chChargeWatt`)
                                            .catch(e => {
                                                adapter.log.warn(
                                                    `did not get ${serial}.timeTask.${channel}.param.chChargeWatt ->${e}`,
                                                );
                                            });
                                        if (power !== null) {
                                            params.cfg.param.chChargeWatt = power.val;
                                        }
                                    } else if (state === 'chChargeWatt') {
                                        params.cfg.param.chChargeWatt = parseInt(value);
                                    }
                                    // delete this structure
                                    delete params.cfg['chSta'];
                                } else if (type.val == 2) {
                                    const cha = await adapter
                                        .getStateAsync(`${serial}.timeTask.${channel}.param.chSta`)
                                        .catch(e => {
                                            adapter.log.warn(
                                                `did not get ${serial}.timeTask.${channel}.param.chSta ->${e}`,
                                            );
                                        });
                                    adapter.log.debug(`param cha ${cha}`);
                                    if (cha !== null) {
                                        adapter.log.debug(`param chSta  = ${cha.val}`);
                                        params.cfg.chSta = JSON.parse(cha.val);
                                    }
                                    delete params.cfg['param'];
                                } else {
                                    // type is 0
                                    // no sense to sent something
                                    return {};
                                }
                            }
                            // always comCfg
                            for (let key in params['cfg']['comCfg']) {
                                if (key === 'setTime') {
                                    //setTime
                                    for (let key2 in params['cfg']['comCfg'][key]) {
                                        const val = await adapter
                                            .getStateAsync(`${serial}.timeTask.${channel}.comCfg.${key}.${key2}`)
                                            .catch(e => {
                                                adapter.log.warn(
                                                    `did not get ${serial}.timeTask.${channel}.comCfg.${key}.${key2} ->${e}`,
                                                );
                                            });
                                        adapter.log.debug(`comfg ${val}`);
                                        if (val !== null) {
                                            adapter.log.debug(`${key} / ${key2} = ${val.val}`);
                                            params.cfg.comCfg[key][key2] = val.val;
                                        }
                                    }
                                } else if (key === 'timeRange') {
                                    //timerange
                                    for (let key2 in params['cfg']['comCfg'][key]) {
                                        if (key2 === 'startTime' || key2 === 'endTime') {
                                            for (let key3 in params['cfg']['comCfg'][key][key2]) {
                                                const val = await adapter
                                                    .getStateAsync(
                                                        `${serial}.timeTask.${channel}.comCfg.${key}.${key2}.${key3}`,
                                                    )
                                                    .catch(e => {
                                                        adapter.log.warn(
                                                            `did not get ${serial}.timeTask.${channel}.comCfg.${key}.${key2}.${key3} ->${e}`,
                                                        );
                                                    });
                                                adapter.log.debug(`comfg ${val}`);
                                                if (val !== null) {
                                                    adapter.log.debug(`${key} / ${key2} / ${key3} = ${val.val}`);
                                                    params.cfg.comCfg[key][key2][key3] = parseInt(val.val);
                                                }
                                            }
                                        } else {
                                            const val = await adapter
                                                .getStateAsync(`${serial}.timeTask.${channel}.comCfg.${key}.${key2}`)
                                                .catch(e => {
                                                    adapter.log.warn(
                                                        `did not get ${serial}.timeTask.${channel}.comCfg.${key}.${key2} ->${e}`,
                                                    );
                                                });
                                            adapter.log.debug(`comfg ${val}`);
                                            if (val !== null) {
                                                adapter.log.debug(`${key} / ${key2} = ${val.val}`);
                                                params.cfg.comCfg[key][key2] = parseInt(val.val);
                                            }
                                        }
                                    }
                                } else {
                                    const val = await adapter
                                        .getStateAsync(`${serial}.timeTask.${channel}.comCfg.${key}`)
                                        .catch(e => {
                                            adapter.log.warn(
                                                `did not get ${serial}.timeTask.${channel}.comCfg.${key} ->${e}`,
                                            );
                                        });
                                    adapter.log.debug(`comfg ${val}`);
                                    if (val !== null) {
                                        //timescale JSON.parse
                                        adapter.log.debug(`comCfg ${key}  = ${val.val}`);
                                        if (key == 'timeScale') {
                                            params.cfg.comCfg[key] = JSON.parse(val.val);
                                        } else if (key == 'isEnable') {
                                            //even it could be the command itself, we process it with getting the data
                                            params.cfg.comCfg[key] = val.val ? 1 : 0;
                                        } else {
                                            params.cfg.comCfg[key] = parseInt(val.val);
                                        }
                                    }
                                }
                            }
                            adapter.log.debug(JSON.stringify(params));
                            msg['params'] = params;
                        }
                        break;
                    default:
                        //now actions
                        //no value to be set
                        break;
                }
                if (logged) {
                    adapter.log.debug(
                        `prep cmd  ${serial}  ${stationType}  ${state}  ${value}  ${JSON.stringify(msg)}`,
                    );
                }
                return msg;
            } else if (
                stationType === 'powerkit' ||
                stationType === 'powerkitbp2000' ||
                stationType === 'powerkitbp5000'
            ) {
                let msg = {
                    from: 'Android',
                    lang: 'en-us',
                    id: String(getRandomInt(100000000, 900000000)),
                    operateType: '',
                    version: '1.0',
                };
                msg['sn'] = serial; // device sn#
                msg['params'] = cmd['params'];

                const moduleSn = await adapter.getStateAsync(`${serial}.${channel}.` + `mduleSn`).catch(e => {
                    adapter.log.warn(`did not get ${serial}.${channel}.` + `moduleSn` + `->${e}`);
                });

                switch (channel) {
                    case 'bbcin':
                        msg['moduleType'] = 15362;
                        msg['moduleSn'] = moduleSn;
                        break;
                    case 'bbcout':
                        msg['moduleType'] = 15363;
                        msg['moduleSn'] = moduleSn;
                        break;
                    case 'bp1':
                    case 'bp2':
                    case 'bp3':
                        msg['moduleType'] = 0;
                        msg['moduleSn'] = '0000000000000000';
                        break;
                    case 'iclow':
                        msg['moduleType'] = 15365;
                        msg['moduleSn'] = moduleSn;
                        break;
                    case 'ldac':
                        msg['moduleType'] = 15367;
                        msg['moduleSn'] = moduleSn;
                        break;
                    case 'lddc':
                        msg['moduleType'] = 15368;
                        msg['moduleSn'] = moduleSn;
                        break;
                    case 'wireless':
                        msg['moduleType'] = 15370;
                        msg['moduleSn'] = moduleSn;
                        break;
                    default:
                        break;
                }

                switch (state) {
                    case 'latestQuotas':
                        msg['operateType'] = cmd['operateType'];
                        //no params to send
                        break;
                    default:
                        //msg['params'][cmd['valName']] = value;
                        break;
                }
                //msg['operateType'] = cmd['operateType'];
                if (logged) {
                    adapter.log.debug(
                        `prep cmd  ${serial}  ${stationType}  ${state}  ${value}  ${JSON.stringify(msg)}`,
                    );
                }
                return msg;
            }
        } else {
            adapter.log.warn(`no cmd prepared for this control ${state}`);
            return {};
        }
    } else {
        adapter.log.warn(`no cmd object provided ->${JSON.stringify(cmd)}`);
        return {};
    }
}

/**
 * @param adapter - THIS transfer
 * @param {string} email - email
 * @param {string} password - pw
 */
async function getEcoFlowMqttCredits(adapter, email, password) {
    let mqttDaten = {
        UserID: '',
        User: '',
        URL: '',
        Port: '',
        protocol: '',
        clientID: '',
    };
    const options = {
        hostname: 'api.ecoflow.com',
        path: '/auth/login',
        method: 'POST',
        headers: {
            Host: 'api.ecoflow.com',
            lang: 'de-de',
            platform: 'android',
            sysversion: '11',
            version: '4.1.2.02',
            phonemodel: 'SM-X200',
            'content-type': 'application/json',
            'user-agent': 'okhttp/3.14.9',
        },
    };
    const data = {
        appVersion: '4.1.2.02',
        email: email,
        os: 'android',
        osVersion: '30',
        password: Buffer.from(password).toString('base64'),
        scene: 'IOT_APP',
        userType: 'ECOFLOW',
    };
    function httpsRequest(options, data) {
        return new Promise((resolve, reject) => {
            const req = https.request(options, res => {
                let data = '';
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(data);
                });
            });
            req.on('error', error => {
                reject(error);
            });

            if (data) {
                req.write(JSON.stringify(data));
            }
            req.end();
        });
    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    let token;
    let userid;
    let response;
    try {
        response = await httpsRequest(options, data);
        adapter.log.debug(response);
        token = JSON.parse(response).data.token;
        userid = JSON.parse(response).data.user.userId;
    } catch (error) {
        adapter.log.debug(error); //
        throw new Error(
            'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.',
        );
    }

    options.path = `/iot-auth/app/certification?userId=${userid}`;
    options.method = 'GET';
    options.headers.authorization = `Bearer ${token}`;

    try {
        response = await httpsRequest(options);
        adapter.log.debug(response);
        mqttDaten.Password = JSON.parse(response).data.certificatePassword;
        mqttDaten.Port = JSON.parse(response).data.port;
        mqttDaten.UserID = userid;
        mqttDaten.User = JSON.parse(response).data.certificateAccount;
        mqttDaten.URL = JSON.parse(response).data.url;
        mqttDaten.protocol = JSON.parse(response).data.protocol;
        mqttDaten.clientID = `ANDROID_${uuidv4()}_${userid}`;
    } catch (error) {
        adapter.log.debug(error);
        throw new Error(
            'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.',
        );
    }
    return mqttDaten;
}

/**
 * @param {object} msgNameObj - singular or multiple objects names and cmdFunc,cmdId
 * @param {object} data - the full JSON
 * @param protoQbj - proto definitions
 * @param log - log enable
 */
function createMsgFromObjects(msgNameObj, data, protoQbj, log) {
    const seq = Date.now();
    let muster = {
        header: {
            src: 2,
            dest: 32,
            needAck: 1,
            seq: seq,
            version: 19,
            payloadVer: 1,
        },
    };
    let arr = [];
    for (let key in msgNameObj) {
        if (data[key]) {
            console.log(`gathering data for ${key}`);
            muster['header']['pdata'] = data[key];
            muster['header']['cmdId'] = msgNameObj[key]['cmdId'];
            muster['header']['cmdFunc'] = msgNameObj[key]['cmdFunc'];
            const root = protobuf.parse(protoQbj).root;
            const SetMessage = root.lookupType(`sent${key}`);
            const message = SetMessage.create(muster);
            const messageBuffer = SetMessage.encode(message).finish();
            console.log(`[Hex-String:${Buffer.from(messageBuffer).toString('hex')}`);
            arr.push(messageBuffer);
        } else {
            console.log(`no data ${key}`);
        }
    }
    let buf = Buffer.concat(arr);
    if (log === true) {
        console.log(`[PROTOBUF encode] converted  Hex-String:${Buffer.from(buf).toString('hex')}`);
    }
    return buf;
}

exports.pstreamDecode = pstreamDecode;
exports.storeStationPayload = storeStationPayload;
exports.storeSHELLYpayload = storeSHELLYpayload;
exports.storeSHPpayload = storeSHPpayload;
exports.storePowerkitPayload = storePowerkitPayload;
exports.createSubscribeTopics = createSubscribeTopics;
exports.getEcoFlowMqttCredits = getEcoFlowMqttCredits;
exports.prepareStationCmd = prepareStationCmd;
exports.statesFromDict = statesFromDict;
exports.getLastQuotas = getLastQuotas;
exports.getIdFromTopic = getIdFromTopic;
exports.compareUpdate = compareUpdate;
exports.setOnlineStatus = setOnlineStatus;
exports.setOfflineStatus = setOfflineStatus;
exports.createMsgFromObjects = createMsgFromObjects;
