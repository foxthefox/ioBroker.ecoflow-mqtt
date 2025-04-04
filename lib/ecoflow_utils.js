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
    setValue pdata = 1 [proto3_optional = true];
    int32 src = 2 [proto3_optional = true];
    int32 dest = 3 [proto3_optional = true];
    int32 d_src = 4 [proto3_optional = true];
    int32 d_dest = 5 [proto3_optional = true];
    int32 enc_type = 6 [proto3_optional = true];
    int32 check_type = 7 [proto3_optional = true];
    int32 cmd_func = 8 [proto3_optional = true];
    int32 cmd_id = 9 [proto3_optional = true];
    int32 data_len = 10 [proto3_optional = true];
    int32 need_ack = 11 [proto3_optional = true];
    int32 is_ack = 12 [proto3_optional = true];
    int32 seq = 14 [proto3_optional = true];
    int32 product_id = 15 [proto3_optional = true];
    int32 version = 16 [proto3_optional = true];
    int32 payload_ver = 17 [proto3_optional = true];
    int32 time_snap = 18 [proto3_optional = true];
    int32 is_rw_cmd = 19 [proto3_optional = true];
    int32 is_queue = 20 [proto3_optional = true];
    int32 ack_type = 21 [proto3_optional = true];
    string code = 22 [proto3_optional = true];
    string from = 23 [proto3_optional = true];
    string module_sn = 24 [proto3_optional = true];
    string device_sn = 25 [proto3_optional = true];
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
		/*global Buffer*/
		/*eslint no-undef: "error"*/
		const message = PowerMessage.decode(Buffer.from(hexString, 'hex'));
		const object = PowerMessage.toObject(message, { defaults: false });
		return object;
	} catch (error) {
		throw new Error('decodeMsg -> ' + error);
	}
}
/**
 * @param {object} stateDictObj
 * @param {string} channel
 * @param {string} state
 * @param {string | number | boolean} value
 * @param {object} stateObj
 */
function convertData(stateDictObj, channel, state, value, stateObj) {
	let key = stateDictObj[channel][state]['entity'];
	if (value !== '' && value != null) {
		let val = value.toString();
		switch (key) {
			case 'number':
			case 'level':
				//convert number
				if (Number.isInteger(value) || typeof value === 'string' || value instanceof String) {
					if (state !== 'brightness') {
						value = parseFloat(value) * stateObj[channel][key][state]['mult'];
					} else {
						value = parseInt(String(value * stateObj[channel][key][state]['mult']));
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
				} else value = true;
				break;
			case 'diagnostic':
				//convert string to item

				if (Object.prototype.hasOwnProperty.call(stateObj[channel][key][state][state], val)) {
					value = stateObj[channel][key][state][state][val].toString();
				} else {
					value = val + ' not part of array';
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

function pstreamDecode(adapter, payload, usage, topic, msgtype, protoSourceDevice, protoMsg, log) {
	// @ts-ignore
	const buf = new Buffer.from(payload, 'base64');
	try {
		if (log === true) {
			adapter.log.debug(
				'[PROTOBUF decode] ' + topic + ' [' + msgtype + '] raw (hex): ' + payload.toString('hex')
			);
		}

		let msgobj = decodeMsg(buf, 'HeaderMessage', protoSource);
		if (msgobj) {
			if (Array.isArray(msgobj.header)) {
				let returnobj = {};
				let dbgmsg = {};
				if (log === true) {
					adapter.log.debug(
						'[PROTOBUF decode] ' +
						topic +
						' [' +
						msgtype +
						'] stream has ' +
						msgobj.header.length +
						' message(s)'
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
							'[PROTOBUF decode] ' +
							topic +
							' [' +
							msgtype +
							'] msg#' +
							i +
							' header ' +
							JSON.stringify(dbgmsg)
						);
					}

					//evaluate cmdFunc and cmd Id

					let cmdFunc = msgobj.header[i].cmdFunc;
					let cmdId = msgobj.header[i].cmdId;
					let src = msgobj.header[i].src;
					const seq = msgobj.header[i].seq;

					let prototyp = '';
					if (protoMsg && protoSourceDevice) {
						if (cmdId) {
							if (Object.prototype.hasOwnProperty.call(protoMsg['cmdId'], cmdId)) {
								if (cmdFunc) {
									if (
										Object.prototype.hasOwnProperty.call(
											protoMsg['cmdId'][cmdId]['cmdFunc'],
											cmdFunc
										)
									) {
										prototyp = protoMsg['cmdId'][cmdId]['cmdFunc'][cmdFunc];
									} else {
										prototyp = 'undef';
										//no decode possible;
										if (log === true) {
											adapter.log.debug(
												'[PROTOBUF decode] ' +
												topic +
												' [' +
												msgtype +
												'] msg#' +
												i +
												' unknown cmdFunc '
											);
										}
									}
								} else {
									prototyp = 'undef';
									//message without cmdFunc;
									if (log === true) {
										adapter.log.debug(
											'[PROTOBUF decode] ' +
											topic +
											' [' +
											msgtype +
											'] msg#' +
											i +
											' no cmdFunc in Message'
										);
									}
								}
							} else {
								prototyp = 'undef';
								//no decodei possible;
								if (log === true) {
									adapter.log.debug(
										'[PROTOBUF decode] ' + topic + ' [' + msgtype + '] msg#' + i + ' unknown cmdId'
									);
								}
							}
						} else {
							prototyp = 'undef';
							//message without packageType;
							if (log === true) {
								adapter.log.debug(
									'[PROTOBUF decode] ' +
									topic +
									' [' +
									msgtype +
									'] msg#' +
									i +
									' no cmdId in message'
								);
							}
							if (msgobj.header[i].code) {
								if (msgobj.header[i].code == '-2') {
									returnobj['info'] = { status: 'offline' };
								}
							}
						}
					} else {
						prototyp = 'undef';
						//no objects
						adapter.log.debug(
							'[PROTOBUF decode] ' +
							topic +
							' [' +
							msgtype +
							'] protoMsg ' +
							protoMsg +
							'protoSourceDevice ' +
							protoSourceDevice +
							' no protoMsg or protoSourceDevice objects'
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
									adapter.log.debug(
										'[PROTOBUF decode] ' + topic + ' [' + msgtype + '] msg#' + i + ' Encrypted'
									);
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
									'[PROTOBUF decode] ' +
									topic +
									' [' +
									msgtype +
									'] msg#' +
									i +
									' pdata: ' +
									msgobj.header[i].pdata.toString('hex')
								);
							}
						}
						if (prototyp !== 'undef') {
							try {
								if (log === true && !msgobj.header[i].pdata) {
									adapter.log.debug(
										'[PROTOBUF decode] ' + topic + ' [' + msgtype + '] msg#' + i + ' => no pdata '
									);
								}
								msg = decodeMsg(msgobj.header[i].pdata, prototyp, protoSourceDevice);
								if (log === true) {
									adapter.log.debug(
										'[PROTOBUF decode] ' +
										topic +
										' [' +
										msgtype +
										'] msg#' +
										i +
										' => ' +
										prototyp +
										' ' +
										JSON.stringify(msg)
									);
								}

								returnobj[prototyp] = msg;
							} catch (error) {
								adapter.log.debug(
									'[PROTOBUF decode] ' +
									topic +
									' [' +
									msgtype +
									'] msg#' +
									i +
									' => ' +
									' id ' +
									prototyp +
									' error at: ' +
									error
								);
							}
						}
					} else {
						if (log === true) {
							adapter.log.debug(
								' [PROTOBUF decode] ' + topic + ' [' + msgtype + '] msg#' + i + ' => no pdata'
							);
						}
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
								returnobj['energy'] = energyobj;
							} else {
								returnobj['hist_energy'] = { time: timeStamp, energy: energyobj };
							}
						}
					}
					*/
				}
				adapter.quotas[topic] = returnobj;
				return returnobj;
			}
		}
	} catch (error) {
		adapter.log.debug('[PROTOBUF decode] error -> payload was: ' + payload.toString('hex'));
		throw new Error('[PROTOBUF decode] ->  ' + error);
	}
}

async function setOnlineStatus(adapter, topic) {
	let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
		adapter.log.warn('did not get old value .info.status ->' + e);
	});
	if (status && status.val === 'offline') {
		await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
		adapter.log.info('[EF] ' + topic + ' is online with cloud');
	}
}

async function setOfflineStatus(adapter, topic) {
	let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
		adapter.log.warn('did not get old value .info.status ->' + e);
	});
	if (status && status.val === 'online') {
		await adapter.setStateAsync(topic + '.info.status', {
			val: 'offline',
			ack: true
		});
		adapter.log.info('[EF] ' + topic + ' is OFFLINE with cloud');
	}
}

async function storeStreamPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged) {
	let haUpdate = [];
	if (payload) {
		//	try {
		/*
			if (adapter.config.msgUpdatePstream) {
				adapter.log.debug(
					'got topic ' + topic + ' ( stateDictObj ' + stateDictObj + ' stateObj: ' + stateObj + ' )'
				);
			}
			*/
		if (stateDictObj) {
			if (stateObj) {
				for (let channel in payload) {
					//other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
					switch (channel) {
						case 'plug_heartbeat':
						case 'inverter_heartbeat':
						case 'InverterHeartbeat2': //to delete
						case 'energy':
						case 'AppParaHeartbeatReport':
						case 'AppShowHeartbeatReport':
						case 'BackendRecordHeartbeatReport':
						case 'JTS1_ENERGY_STREAM_REPORT':
						case 'JTS1_EMS_CHANGE_REPORT':
						case 'EVChargingParamReport':
						case 'JTS1_EMS_PARAM_CHANGE_REPORT':
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
						case 'BPInfoReport':
							await setOnlineStatus(adapter, topic);
							//BPInfo mit bpNo verknüpfen
							for (let i = 0; i < payload[channel]['bpInfo'].length; i++) {
								//BPInfo mit bpNo verknüpfen, wenn 1 dann ohne Anhang wegen Kompatibilität
								let name =
									payload[channel]['bpInfo'][i]['bpNo'] == 1
										? 'BPInfo'
										: ''.concat('BPInfo', String(payload[channel]['bpInfo'][i]['bpNo']));
								for (let state in payload[channel]['bpInfo'][i]) {
									let val;
									let haupd;
									val = payload[channel]['bpInfo'][i][state];
									haupd = await compareUpdate(
										adapter,
										stateDictObj,
										stateObj,
										haenable,
										topic,
										name, //channel,
										state,
										val,
										'BPInfo', //channel,
										logged
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							}
							break;
						case 'JTS1_BP_STA_REPORT':
							await setOnlineStatus(adapter, topic);
							for (let i = 0; i < payload[channel]['bpSta'].length; i++) {
								for (let state in payload[channel]['bpSta'][i]) {
									let val;
									let haupd;
									val = payload[channel]['bpSta'][i][state];
									haupd = await compareUpdate(
										adapter,
										stateDictObj,
										stateObj,
										haenable,
										topic,
										'statusReportBattery' + (i + 1),
										state,
										val,
										'statusReportBattery1',
										logged
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							}
							break;
						case 'JTS1_EMS_HEARTBEAT':
							await setOnlineStatus(adapter, topic);
							for (let state in payload[channel]) {
								switch (state) {
									case 'pcsAPhase':
									case 'pcsBPhase':
									case 'pcsCPhase':
									case 'pcsLoadInfo':
										for (let neststate in payload[channel][state]) {
											let val;
											let haupd;
											val = payload[channel][state][neststate];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												channel,
												state.concat('_', neststate),
												val,
												channel,
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										break;
									case 'meterHeartBeat':
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel][state],
												'meterHeartBeat'
											)
										) {
											for (let i = 0; i < payload[channel][state]['meterHeartBeat'].length; i++) {
												for (let neststate in payload[channel][state]['meterHeartBeat']) {
													let val;
													let haupd;
													val = payload[channel][state][neststate];
													haupd = await compareUpdate(
														adapter,
														stateDictObj,
														stateObj,
														haenable,
														topic,
														channel,
														state.concat('_', neststate, String(i)),
														val,
														channel,
														logged
													);
													if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
												}
											}
										}
										break;
									case 'mpptHeartBeat':
										if (Object.prototype.hasOwnProperty.call(payload[channel][state], 'mpptPv')) {
											for (let i = 0; i < payload[channel][state]['mpptPv'].length; i++) {
												for (let neststate in payload[channel][state]['mpptPv'][i]) {
													let val;
													let haupd;
													val = payload[channel][state]['mpptPv'][i][neststate];
													haupd = await compareUpdate(
														adapter,
														stateDictObj,
														stateObj,
														haenable,
														topic,
														channel,
														state.concat('_mpptPv_', neststate, String(i)),
														val,
														channel,
														logged
													);
													if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
												}
											}
										}
										if (
											Object.prototype.hasOwnProperty.call(payload[channel][state], 'mpptTempVal')
										) {
											let val;
											let haupd;
											val = payload[channel][state]['mpptTempVal'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												channel,
												state.concat('_', 'mpptTempVal'),
												val,
												channel,
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel][state],
												'mpptInsResist'
											)
										) {
											let val;
											let haupd;
											val = payload[channel][state]['mpptInsResist'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												channel,
												state.concat('_', 'mpptInsResist'),
												val,
												channel,
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										break;

									default:
										{
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
								}
							}
							break;
						case 'ProtoTime':
						case 'ProtoTimeStat':
							// channel hart auf 'ProtoTime' gesetzt, damit die ProtoTimeStat in die gleiche Hierarchie schreibt
							await setOnlineStatus(adapter, topic);
							for (let state in payload[channel]) {
								let val;
								let haupd;
								switch (state) {
									case 'masterInfo':
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['masterInfo'],
												'gridWatt'
											)
										) {
											val = payload[channel][state]['gridWatt'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'master_gridWatt',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['masterInfo'],
												'sysTimezone'
											)
										) {
											val = payload[channel][state]['sysTimezone'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'sysTimezone',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['masterInfo'],
												'timezoneId'
											)
										) {
											val = payload[channel][state]['timezoneId'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'timezoneId',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										break;
									case 'loadInfo':
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['loadInfo'],
												'hall1Watt'
											)
										) {
											val = payload[channel][state]['hall1Watt'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'hall1Watt',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											let power = 0;
											for (let i = 0; i < val.length; i++) {
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													'loadPower',
													'chWatt'.concat('_', String(i)),
													val[i],
													'loadPower',
													logged
												);
												power = power + val[i];
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'loadPower',
												'sumWatt',
												power,
												'loadPower',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['loadInfo'],
												'hall1Curr'
											)
										) {
											val = payload[channel][state]['hall1Curr'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'hall1Curr',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											let current = 0;
											for (let i = 0; i < val.length; i++) {
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													'loadCurrent',
													'cur'.concat('_', String(i)),
													val[i],
													'loadCurrent',
													logged
												);
												current = current + val[i];
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'loadCurrent',
												'sumCur',
												current,
												'loadCurrent',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										break;
									case 'backupInfo':
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['backupInfo'],
												'chWatt'
											)
										) {
											//ggf. hier noch die einzelnen Datenpunkte des arrays durchlaufen
											val = payload[channel][state]['chWatt'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'bkpChWatt',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['backupInfo'],
												'backupDischargeTime'
											)
										) {
											val = payload[channel][state]['backupDischargeTime'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'backupDischargeTime',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['backupInfo'],
												'energy_1'
											)
										) {
											if (
												Object.prototype.hasOwnProperty.call(
													payload[channel]['backupInfo']['energy_1'],
													'chargeTime'
												)
											) {
												val = payload[channel][state]['energy_1']['chargeTime'];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													'ProtoTime',
													'bkpEnerg1ChargeTime',
													val,
													'ProtoTime',
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
											if (
												Object.prototype.hasOwnProperty.call(
													payload[channel]['backupInfo']['energy_1'],
													'dischargeTime'
												)
											) {
												val = payload[channel][state]['energy_1']['dischargeTime'];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													'ProtoTime',
													'bkpEnerg1DischargeTime',
													val,
													'ProtoTime',
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['backupInfo'],
												'energy_2'
											)
										) {
											if (
												Object.prototype.hasOwnProperty.call(
													payload[channel]['backupInfo']['energy_2'],
													'chargeTime'
												)
											) {
												val = payload[channel][state]['energy_2']['chargeTime'];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													'ProtoTime',
													'bkpEnerg2ChargeTime',
													val,
													'ProtoTime',
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
											if (
												Object.prototype.hasOwnProperty.call(
													payload[channel]['backupInfo']['energy_2'],
													'dischargeTime'
												)
											) {
												val = payload[channel][state]['energy_2']['dischargeTime'];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													'ProtoTime',
													'bkpEnerg2DischargeTime',
													val,
													'ProtoTime',
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
										}
										break;
									case 'wattInfo':
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['wattInfo'],
												'gridWatt'
											)
										) {
											val = payload[channel][state]['gridWatt'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'wattInfoGridWatt',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(payload[channel]['wattInfo'], 'chWatt')
										) {
											let sum = 0;
											for (let i = 0; i < payload[channel]['wattInfo']['chWatt'].length; i++) {
												val = payload[channel][state]['chWatt'][i];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													'ProtoTime',
													'wattInfoChWatt'.concat(String(i + 1)),
													val,
													'ProtoTime',
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}

											val = payload[channel][state]['chWatt'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'wattInfoChWatt',
												sum,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['wattInfo'],
												'allHallWatt'
											)
										) {
											val = payload[channel][state]['allHallWatt'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'wattInfoAllHallWatt',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										break;
									case 'masterVerInfo':
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['masterVerInfo'],
												'appMainVer'
											)
										) {
											val = payload[channel][state]['appMainVer'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'appMainVer',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['masterVerInfo'],
												'appDbgVer'
											)
										) {
											val = payload[channel][state]['appDbgVer'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'appDbgVer',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										if (
											Object.prototype.hasOwnProperty.call(
												payload[channel]['masterVerInfo'],
												'appTestVer'
											)
										) {
											val = payload[channel][state]['appTestVer'];
											haupd = await compareUpdate(
												adapter,
												stateDictObj,
												stateObj,
												haenable,
												topic,
												'ProtoTime',
												'appTestVer',
												val,
												'ProtoTime',
												logged
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										}
										break;
									//case timestampPlus für ProtoTimeStat
									default:
										break;
								}
							}
							break;
						case 'ProtoPushAndSet':
							await setOnlineStatus(adapter, topic);
							for (let state in payload[channel]) {
								let val;
								let haupd;
								switch (state) {
									case 'LoadStrategyCfg':
										for (let neststate in payload[channel][state]) {
											let val;
											let haupd;
											if (
												neststate === 'hall1ChInfo' &&
												payload[channel][state]['hall1ChInfo'].length === 12
											) {
												for (let i = 0; i < 12; i++) {
													if (payload[channel][state]['hall1ChInfo'][i]['loadIsEnable']) {
														val = payload[channel][state]['hall1ChInfo'][i]['loadIsEnable'];
														haupd = await compareUpdate(
															adapter,
															stateDictObj,
															stateObj,
															haenable,
															topic,
															state,
															'loadIsEnable' + (i + 1),
															val,
															state,
															logged
														);
														if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
													}
													if (payload[channel][state]['hall1ChInfo'][i]['loadPriority']) {
														val = payload[channel][state]['hall1ChInfo'][i]['loadPriority'];
														haupd = await compareUpdate(
															adapter,
															stateDictObj,
															stateObj,
															haenable,
															topic,
															state,
															'loadPriority' + (i + 1),
															val,
															state,
															logged
														);
														if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
													}
												}
											} else {
												val = payload[channel][state][neststate];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													state,
													neststate,
													val,
													state,
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
										}
										break;
									case 'backupIncreInfo':
										for (let neststate in payload[channel][state]) {
											let val;
											let haupd;

											if (
												neststate === 'Energy1Info' ||
												neststate === 'Energy2Info' ||
												neststate === 'Energy3Info'
											) {
												for (let dp in payload[channel][state][neststate]) {
													let val;
													let haupd;
													if (dp === 'devInfo') {
														//todo define dps first
													} else {
														val = payload[channel][state][neststate][dp];
														haupd = await compareUpdate(
															adapter,
															stateDictObj,
															stateObj,
															haenable,
															topic,
															neststate, //nested the state is channel
															dp,
															val,
															neststate, //'EnergyInfo',
															logged
														);
														if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
													}
												}
											} else if (
												neststate === 'backupCh1Info' ||
												neststate === 'backupCh2Info' ||
												neststate === 'backupCh3Info'
											) {
												for (let dp in payload[channel][state][neststate]) {
													let val;
													let haupd;
													val = payload[channel][state][neststate][dp];
													haupd = await compareUpdate(
														adapter,
														stateDictObj,
														stateObj,
														haenable,
														topic,
														neststate, //nested the state is channel
														dp,
														val,
														neststate,
														logged //'backupChInfo'
													);
													if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
												}
											} else if (neststate === 'DeltaPro1Info' || neststate === 'DeltaPro2Info') {
												for (let dp in payload[channel][state][neststate]) {
													let val;
													let haupd;
													if (dp === 'modelInfo') {
														//todo define dps first
													} else {
														val = payload[channel][state][neststate][dp];
														haupd = await compareUpdate(
															adapter,
															stateDictObj,
															stateObj,
															haenable,
															topic,
															neststate, //nested the state is channel
															dp,
															val,
															neststate,
															logged //'DeltaProInfo'
														);
														if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
													}
												}
											} else if (neststate === 'errcode') {
												//todo
											} else {
												//no nesting
												val = payload[channel][state][neststate];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													state,
													neststate,
													val,
													state,
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
										}

										break;
									case 'loadIncreInfo':
										for (let neststate in payload[channel][state]['hall1IncreInfo']) {
											let val;
											let haupd;
											if (
												neststate.includes('ch') &&
												(neststate.includes('Info') || neststate.includes('Sta'))
											) {
												for (let dp in payload[channel][state]['hall1IncreInfo'][neststate]) {
													if (dp === 'splitphase') {
														if (
															Object.prototype.hasOwnProperty.call(
																payload[channel][state]['hall1IncreInfo'][neststate][
																dp
																],
																'linkMark'
															)
														) {
															val =
																payload[channel][state]['hall1IncreInfo'][neststate][
																dp
																]['linkMark'];
															haupd = await compareUpdate(
																adapter,
																stateDictObj,
																stateObj,
																haenable,
																topic,
																state,
																neststate + '_' + 'linkMark',
																val,
																state,
																logged
															);
															if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
														}
														if (
															Object.prototype.hasOwnProperty.call(
																payload[channel][state]['hall1IncreInfo'][neststate][
																dp
																],
																'linkCh'
															)
														) {
															val =
																payload[channel][state]['hall1IncreInfo'][neststate][
																dp
																]['linkCh'];
															haupd = await compareUpdate(
																adapter,
																stateDictObj,
																stateObj,
																haenable,
																topic,
																state,
																neststate + '_' + 'linkCh',
																val,
																state,
																logged
															);
															if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
														}
													} else {
														val = payload[channel][state]['hall1IncreInfo'][neststate][dp];
														haupd = await compareUpdate(
															adapter,
															stateDictObj,
															stateObj,
															haenable,
															topic,
															state,
															neststate + '_' + dp,
															val,
															state,
															logged
														);
														if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
													}
												}
											} else if (neststate === 'errCode' || neststate === 'modelInfo') {
												//not yet
											} else {
												val = payload[channel][state]['hall1IncreInfo'][neststate];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													state,
													neststate,
													val,
													state,
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
										}
										break;
									case 'masterIncreInfo': //wie default
										for (let neststate in payload[channel][state]) {
											if (neststate === 'errCode') {
												//not yet
											} else {
												let val;
												let haupd;
												val = payload[channel][state][neststate];
												haupd = await compareUpdate(
													adapter,
													stateDictObj,
													stateObj,
													haenable,
													topic,
													state,
													neststate,
													val,
													state,
													logged
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
											}
										}
										break;
									case 'TimeTaskCfg_1':
									case 'TimeTaskCfg_2':
									case 'TimeTaskCfg_3':
									case 'TimeTaskCfg_4':
									case 'TimeTaskCfg_5':
									case 'TimeTaskCfg_6':
									case 'TimeTaskCfg_7':
									case 'TimeTaskCfg_8':
									case 'TimeTaskCfg_9':
									case 'TimeTaskCfg_10':
										//timetask has own structure
										break;
									default:
										//directly accessibly datapoints
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
										break;
								}
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
						case 'info':
							//channel info is only received when offline, no need to check the content
							await setOfflineStatus(adapter, topic);
							break;
						case 'EnergyPack': {
							let msgobj32 = payload[channel];;
							let watthType;
							let energy;
							//let timeStamp;
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
										// timeStamp = msgobj32.sysEnergyStream[i].timestamp;
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
										logged
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								// send "raw" history data 
								// haUpdate['hist_energy'] = { time: timeStamp, energy: energyobj };
							}
						}
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
		//} catch (error) {
		//	adapter.log.debug('store stream payload ' + error);
		//	adapter.log.debug('payload from ' + topic + ' was: ' + JSON.stringify(payload));
		//}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}

async function storeStationPayload(adapter, stateDictObj, stateObj, topic, payload, haenable, logged, cmdLockUpd) {
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
			let onlinestatus = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
				adapter.log.warn('did not get old value .info.status ->' + e);
			});
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
				if (onlinestatus && onlinestatus.val === 'offline') {
					await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
					adapter.log.info('[EF] ' + topic + ' is online with cloud');
				}
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
					if (onlinestatus && onlinestatus.val === 'offline' && payload['data']['online'] === 1) {
						await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
						adapter.log.info('[EF] ' + topic + ' is online with cloud');
					}
					adapter.log.debug('[' + topic + '] processing get_reply latest quotas !');
					//storage of latest quotas to object, can then be called from sendTo
					if (!adapter.quotas[topic]) {
						adapter.quotas[topic] = payload;
					}
					if (payload['data']['quotaMap']['timeTask']) {
						//logging
						//totalTaskNum als Kennung für Stations (bei SHP1 nicht dabei)
						if (payload['data']['timeTask']['totalTaskNum']) {
							await adapter.setStateAsync(topic + '.timeTask.totalTaskNum', {
								val: payload['data']['quotaMap']['timeTask']['totalTaskNum'],
								ack: true
							});
							let taskarr = payload['data']['quotaMap']['timeTask']['taskCfgs'];
							for (let i = 0; i < taskarr.length; i++) {
								const task = 'task' + i;
								if (taskarr[i]['taskIndex'] !== 255) {
									for (let key in taskarr[i]) {
										if (key !== 'timeScale') {
											await adapter.setStateAsync(topic + '.timeTask.' + task + '.' + key, {
												val: taskarr[i][key],
												ack: true
											});
										} else {
											//convert fehlt nich
											await adapter.setStateAsync(topic + '.timeTask.' + task + '.' + key, {
												val: JSON.stringify(taskarr[i][key]),
												ack: true
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
					let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
						adapter.log.warn('did not get old value .info.status ->' + e);
					});
					if (status && status.val === 'online') {
						await adapter.setStateAsync(topic + '.info.status', { val: 'offline', ack: true });
						adapter.log.info('[EF] ' + topic + ' is OFFLINE with cloud');
					}
				}
			} else {
				adapter.log.debug('no params or data in payload ->' + JSON.stringify(payload));
			}
			if (payloadobj) {
				//stations with dotted syntax
				for (let comportion in payloadobj) {
					let dotted = comportion.split('.');
					let channel = dotted[0];
					let state = dotted[1];
					if (
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
						}
						const channelsave = channel; // for handling the slaves when converting the value
						if (channel === 'bmsSlave1' || channel === 'bmsSlave2') {
							channel = 'bmsMaster';
						}
						if (stateDictObj[channel][state]) {
							if (stateDictObj[channel][state]['entity'] !== 'icon') {
								let value = convertData(stateDictObj, channel, state, payloadobj[comportion], stateObj);
								//adapter.log.debug('converted value ' + value);
								let old = await adapter
									.getStateAsync(topic + '.' + channelsave + '.' + state)
									.catch((e) => {
										adapter.log.warn(
											'did not get old value ' +
											topic +
											'.' +
											channelsave +
											'.' +
											state +
											' ->' +
											e
										);
									});
								//adapter.log.debug('old ' + JSON.stringify(old));
								if (!old) {
									await adapter.setStateAsync(topic + '.' + channelsave + '.' + state, {
										val: value,
										ack: true
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
														'select problem ' +
														value +
														' not in ' +
														stateObj[channel][type][state]['states'] +
														' error -> ' +
														error
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
											topic:
												adapter.config.haTopic + '/' + topic + '_' + channelsave + '/' + state,
											payload: havalue
										});
									}
								} else {
									if (old.val !== value) {
										if (logged) {
											adapter.log.debug(
												'station update ' +
												'.' +
												channelsave +
												'.' +
												state +
												' ' +
												old.val +
												' -> ' +
												value
											);
										}
										await adapter.setStateAsync(topic + '.' + channelsave + '.' + state, {
											val: value,
											ack: true
										});
										if (haenable && stateDictObj[channel][state]['entity'] !== 'array') {
											let havalue;
											const type = stateDictObj[channel][state]['entity'];
											const enttype = stateObj[channel][type][state]['entity_type'];
											switch (enttype) {
												case 'sensor':
													if (!cmdLockUpd) {
														havalue = String(value);
													} else {
														if (stateObj[channel][type][state]['role'] && stateObj[channel][type][state]['role'] === 'level') {
															//wait on updates when cmd
														} else {
															havalue = String(value);
														}
													}
													//havalue = String(value);
													break;
												case 'switch':
													if (!cmdLockUpd) {
														if (value === true) {
															havalue = stateObj[channel][type][state]['payload_on'];
														} else if (value === false) {
															havalue = stateObj[channel][type][state]['payload_off'];
														}
													}
													break;
												case 'select':
													if (!cmdLockUpd) {
														try {
															havalue = stateObj[channel][type][state]['states'][value];
														} catch (error) {
															adapter.log.warn(
																'select problem ' +
																value +
																' not in ' +
																stateObj[channel][type][state]['states'] +
																' error -> ' +
																error
															);
														}
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
												topic:
													adapter.config.haTopic +
													'/' +
													topic +
													'_' +
													channelsave +
													'/' +
													state,
												payload: havalue
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
												topic:
													adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
												payload: havalue
											});
										}
									}
								}
							}
						} else {
							adapter.log.debug(
								'[store station] ' +
								topic +
								' not processed ' +
								channelsave +
								' state: ' +
								state +
								' value ' +
								payloadobj[comportion]
							);
						}
					}
				}
			}
		} catch (error) {
			adapter.log.debug('store JSON payload ' + error);
			adapter.log.debug('payload from ' + topic + ' was: ' + JSON.stringify(payload));
		}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}
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
	cmdLockUpd
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
							adapter.log.debug('CONVERT went wrong ' + error);
						}
						//adapter.log.debug('converted value ' + value);
						let old = await adapter.getStateAsync(topic + '.' + channel + '.' + state).catch((e) => {
							adapter.log.warn(
								'did not get old value ' + topic + '.' + channel + '.' + state + ' ->' + e
							);
						});
						//adapter.log.debug('old ' + JSON.stringify(old));
						if (!old) {
							if (logged) {
								adapter.log.debug(
									'[Compare] force update ' + '.' + channel + '.' + state + ' -> ' + value
								);
							}
							await adapter.setStateAsync(topic + '.' + channel + '.' + state, {
								val: value,
								ack: true
							});
							if (haenable && stateDictObj[origchannel][state]['entity'] !== 'array') {
								let havalue;
								const type = stateDictObj[origchannel][state]['entity'];
								const enttype = stateObj[origchannel][type][state]['entity_type'];
								switch (enttype) {
									case 'sensor':
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
												'[Compare] select problem ' +
												value +
												' not in ' +
												stateObj[origchannel][type][state]['states'] +
												' error -> ' +
												error
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
									topic: adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
									payload: havalue
								};
							}
						} else {
							if (Object.prototype.hasOwnProperty.call(old, 'val')) {
								if (old.val !== value) {
									if (logged) {
										adapter.log.debug(
											'[Compare] update ' +
											'.' +
											channel +
											'.' +
											state +
											' ' +
											old.val +
											' -> ' +
											value
										);
									}
									await adapter.setStateAsync(topic + '.' + channel + '.' + state, {
										val: value,
										ack: true
									});
									if (haenable && stateDictObj[origchannel][state]['entity'] !== 'array') {
										let havalue;
										const type = stateDictObj[origchannel][state]['entity'];
										const enttype = stateObj[origchannel][type][state]['entity_type'];
										switch (enttype) {
											case 'sensor':
												if (!cmdLockUpd) {
													havalue = String(value);
												} else {
													if (stateObj[origchannel][type][state]['role'] && stateObj[origchannel][type][state]['role'] === 'level') {
														//wait on updates when cmd
													} else {
														havalue = String(value);
													}
												}

												break;
											case 'switch':
												//always a cmd, no need to check the specific type
												if (!cmdLockUpd) {
													if (value === true) {
														havalue = stateObj[origchannel][type][state]['payload_on'];
													} else if (value === false) {
														havalue = stateObj[origchannel][type][state]['payload_off'];
													}
												} // else wait on updates when cmd is returned after ack msg

												break;
											case 'select':
												//always a cmd, no need to check the specific type
												if (!cmdLockUpd) {
													try {
														havalue = stateObj[origchannel][type][state]['states'][val];
													} catch (error) {
														adapter.log.warn(
															'[Compare] select problem ' +
															value +
															' not in ' +
															stateObj[origchannel][type][state]['states'] +
															' error -> ' +
															error
														);
													}
												} // else wait on updates when cmd is returned after ack msg

												break;
											case 'text':
												havalue = value;
												break;

											default:
												havalue = String(value);
												break;
										}
										haUpdate = {
											topic: adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
											payload: havalue
										};
									}
								} else {
									// even the same value switches get an update
									// strange behaviour on HA side, where the switch returns to previous position
									// achtung macht aber ordentlich last, da immer mitgeschickt
									if (haenable && stateDictObj[origchannel][state]['entity'] === 'switch') {
										let havalue;
										const type = stateDictObj[origchannel][state]['entity'];
										const enttype = stateObj[origchannel][type][state]['entity_type'];
										switch (enttype) {
											case 'switch':
												if (value === true) {
													havalue = stateObj[origchannel][type][state]['payload_on'];
												} else if (value === false) {
													havalue = stateObj[origchannel][type][state]['payload_off'];
												}
												break;
											default:
												break;
										}
										haUpdate = {
											topic: adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
											payload: havalue
										};
									}
								}
							} else {
								adapter.log.debug('Compare no val in old status ' + JSON.stringify(old));
							}
						}
					}
				} else {
					adapter.log.debug(
						'[Compare] ' +
						topic +
						' not processed ' +
						channel +
						'/' +
						origchannel +
						' state: ' +
						state +
						' value ' +
						val
					);
				}
			} else {
				adapter.log.debug(
					'[Compare] no stateDictObj for device ' +
					topic +
					' / ' +
					origchannel +
					'  -> ' +
					JSON.stringify(stateDictObj)
				);
			}
		} else {
			adapter.log.debug('[Compare] no stateDictObj ' + topic + ' -> ' + JSON.stringify(stateDictObj));
		}
	} catch (error) {
		adapter.log.debug('Compare went wrong ' + topic + ' / ' + channel + ' / ' + state + ' / ' + val + '->' + error);
		adapter.log.debug('Compare went wrong' + origchannel + stateDictObj[origchannel][state]);
	}

	return haUpdate;
}
async function storeSHELLYpayload(adapter, stateDictObj, stateObj, topic, payload, haenable, logged, cmdLockUpd) {
	let haUpdate = [];
	if (payload) {
		try {
			let payloadobj = null;
			if (payload['data']) {
				if (payload['data']['quotaMap']) {
					let status = 'OK';
					if (status === 'OK') {
						payloadobj = payload['data']['quotaMap'];
					}
				}
			} else if (payload['params']) {
				payloadobj = payload['params'];
				let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
					adapter.log.warn('did not get old value .info.status ->' + e);
				});
				if (status && status.val === 'offline') {
					await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
					adapter.log.info('[EF] ' + topic + ' is online with cloud');
				}
			} else {
				adapter.log.debug('no params or data in Shelly payload ->' + JSON.stringify(payload));
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
							state = channel + '_connected';
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							state = channel + '_enabled';
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							break;
						case 'mqtt':
							state = channel + '_connected';
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							break;
						case 'wifi_sta':
							state = channel + '_connected';
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							break;
						case 'emeters':
							if (payloadobj[channel].length === 3) {
								for (let i = 0; i < payloadobj[channel].length; i++) {
									state = 'currentL' + (i + 1);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'voltageL' + (i + 1);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'powerL' + (i + 1);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'pfL' + (i + 1);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'totalL' + (i + 1);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'total_returnedL' + (i + 1);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;
						default:
							//nothing todo
							break;
					}
				}
			}
		} catch (error) {
			adapter.log.debug('store SHELLY JSON payload ' + error);
			adapter.log.debug('payload from ' + topic + ' was: ' + JSON.stringify(payload));
		}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}
async function storeSHPpayload(adapter, stateDictObj, stateObj, topic, payload, haenable, logged, cmdLockUpd) {
	let haUpdate = [];
	if (payload) {
		try {
			let payloadobj = null;
			if (payload['data']) {
				if (payload['data']['quotaMap']) {
					let status = 'OK';
					if (status === 'OK') {
						payloadobj = payload['data']['quotaMap'];
					}
					if (payload['data']['quotaMap']['timeTask']) {
						//SHP1
						let taskarr = payload['data']['quotaMap']['timeTask'];
						for (let i = 0; i < taskarr.length; i++) {
							if (taskarr[i]['index']) {
								const task = 'task'.concat(String(taskarr[i]['index'] + 1));
								for (let key in taskarr[i]['cfg']) {
									if (key == 'param') {
										for (let key2 in taskarr[i]['cfg'][key]) {
											let value = taskarr[i]['cfg'][key][key2];
											if (key2 === 'chSta') {
												value = JSON.stringify(taskarr[i]['cfg'][key][key2]);
											}
											await adapter.setStateAsync(
												topic + '.timeTask.' + task + '.param.' + key2,
												{
													val: value,
													ack: true
												}
											);
										}
									} else if (key == 'comCfg') {
										for (let key2 in taskarr[i]['cfg'][key]) {
											if (key2 !== 'timeRange' && key2 !== 'setTime') {
												let value;
												if (key2 === 'timeScale') {
													value = JSON.stringify(taskarr[i]['cfg'][key][key2]);
												} else {
													if (stateObj['timeTask']) {
														value =
															stateObj['timeTask']['cfg'][key][key2][key2][
															String(taskarr[i]['cfg'][key][key2])
															];
													} else {
														value = String(taskarr[i]['cfg'][key][key2]);
													}
												}
												await adapter.setStateAsync(
													topic + '.timeTask.' + task + '.comCfg.' + key2,
													{
														val: value,
														ack: true
													}
												);
											} else if (key2 == 'setTime') {
												for (let key3 in taskarr[i]['cfg'][key][key2]) {
													await adapter.setStateAsync(
														topic + '.timeTask.' + task + '.comCfg.' + key2 + '.' + key3,
														{
															val: taskarr[i]['cfg'][key][key2][key3],
															ack: true
														}
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
														await adapter.setStateAsync(
															topic +
															'.timeTask.' +
															task +
															'.comCfg.' +
															key2 +
															'.' +
															key3,
															{
																val: value,
																ack: true
															}
														);
													} else {
														for (let key4 in taskarr[i]['cfg'][key][key2][key3]) {
															await adapter.setStateAsync(
																topic +
																'.timeTask.' +
																task +
																'.comCfg.' +
																key2 +
																'.' +
																key3 +
																'.' +
																key4,
																{
																	val: taskarr[i]['cfg'][key][key2][key3][key4],
																	ack: true
																}
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
				let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
					adapter.log.warn('did not get old value .info.status ->' + e);
				});
				if (status && status.val === 'offline') {
					await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
					adapter.log.info('[EF] ' + topic + ' is online with cloud');
				}
			} else {
				adapter.log.debug('no params or data in SHP payload ->' + JSON.stringify(payload));
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);

							break;
						case 'loadCmdChCtrlInfos':
							if (payloadobj[channel].length === 10) {
								for (let i = 0; i < payloadobj[channel].length; i++) {
									state = 'powCh_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'ctrlSta_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'ctrlMode_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'priority_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;

						case 'splitPhaseInfo':
							if (payloadobj[channel]['cfgList'].length === 10) {
								for (let i = 0; i < payloadobj[channel]['cfgList'].length; i++) {
									state = 'linkMark_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'linkCh_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;
						case 'mainsLoadWatt':
							if (payloadobj[channel]['watth'].length === 10) {
								for (let i = 0; i < payloadobj[channel]['watth'].length; i++) {
									state = 'watthDaytoDate_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'watth_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;

						case 'chUseInfo':
							if (payloadobj[channel]['isEnable'].length === 10) {
								for (let i = 0; i < payloadobj[channel]['isEnable'].length; i++) {
									state = 'isEnable_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;

						case 'loadChInfo':
							if (payloadobj[channel]['info'].length === 10) {
								for (let i = 0; i < payloadobj[channel]['info'].length; i++) {
									const xtract = Buffer.from(payloadobj[channel]['info'][i]['chName']);
									state = 'chName_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}

							break;
						case 'backupCmdChCtrlInfos':
							if (payloadobj[channel].length === 2) {
								for (let i = 0; i < payloadobj[channel].length; i++) {
									state = 'powCh_' + (10 + i);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);

									state = 'ctrlSta_' + (10 + i);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);

									state = 'ctrlMode_' + (10 + i);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);

									state = 'priority_' + (10 + i);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;

						case 'topupLoadWatt':
							if (payloadobj[channel]['watth'].length === 2) {
								for (let i = 0; i < payloadobj[channel]['watth'].length; i++) {
									state = 'watthDaytoDate_' + (10 + i);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'watth_' + (10 + i);
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;

						case 'loadChCurInfo':
							if (payloadobj[channel]['cur'].length === 12) {
								for (let i = 0; i < payloadobj[channel]['cur'].length; i++) {
									state = 'cur_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;
						case 'channelPower':
							if (payloadobj[channel]['infoList'].length === 12) {
								for (let i = 0; i < payloadobj[channel]['infoList'].length; i++) {
									state = 'powType_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'chWatt_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
							}
							break;

						case 'backupLoadWatt':
							if (payloadobj[channel]['watth'].length === 10) {
								for (let i = 0; i < payloadobj[channel]['watth'].length; i++) {
									state = 'watthDaytoDate_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
									state = 'watth_' + i;
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
										cmdLockUpd
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							} else {
								adapter.log.debug(channel + ' wrong length');
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							break;
					}
				}
			}
		} catch (error) {
			adapter.log.debug('store SHP JSON payload ' + error);
			adapter.log.debug('payload from ' + topic + ' was: ' + JSON.stringify(payload));
		}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}
async function storePowerkitPayload(adapter, stateDictObj, stateObj, topic, payload, haenable, logged, cmdLockUpd) {
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
					let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
						adapter.log.warn('did not get old value .info.status ->' + e);
					});
					if (status && status.val === 'offline') {
						await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
						adapter.log.info('[EF] ' + topic + ' is online with cloud');
					}
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
				let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
					adapter.log.warn('did not get old value .info.status ->' + e);
				});
				if (status && status.val === 'offline') {
					await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
					adapter.log.info('[EF] ' + topic + ' is online with cloud');
				}
			} else {
				adapter.log.debug('no params or data in Powerkit payload ->' + JSON.stringify(payload));
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
								cmdLockUpd
							);
							if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
						}
					} else {
						for (let serial in payloadobj[channel]) {
							if (channel === 'bp2000' || channel === 'bp5000') {
								if (Object.prototype.hasOwnProperty.call(payloadobj[channel][serial], 'kitNum')) {
									await adapter.setStateAsync(
										topic + '.' + 'bp' + payloadobj[channel][serial]['kitNum'] + '.' + 'moduleSn',
										{
											val: serial,
											ack: true
										}
									);
								}
							} else if (channel === 'wireless' || channel === 'onLineModuleSnList') {
								//hier keine SN#
							} else {
								await adapter.setStateAsync(topic + '.' + channel + '.' + 'moduleSn', {
									val: serial,
									ack: true
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
												'bp' + payloadobj[channel][serial]['kitNum'],
												obj,
												payloadobj[channel][serial][obj],
												'bp1',
												logged,
												cmdLockUpd
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										} else {
											if (dbgmsgonce === false) {
												adapter.log.warn('powerkit battery ' + serial + ' has no kitNum');
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
											'm' + serial + '_' + obj,
											payloadobj[channel][serial][obj],
											channel,
											logged,
											cmdLockUpd
										);
										if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
												cmdLockUpd
											);
											if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
													cmdLockUpd
												);
												if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
											cmdLockUpd
										);
										if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
										break;
								}
							}
						}
					}
				}
			}
		} catch (error) {
			adapter.log.debug('store Powerkit JSON payload ' + error);
			adapter.log.debug('payload from ' + topic + ' was: ' + JSON.stringify(payload));
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

function getIdFromTopic(topic, mqttUserId) {
	let msgtype;
	if (topic.includes('/app/device/property/')) {
		msgtype = 'update';
		topic = topic.replace('/app/device/property/', '');
	} else if (topic.includes('get_reply')) {
		msgtype = 'get_reply';
		topic = topic.replace('/app/' + mqttUserId + '/', '').replace('/thing/property/get_reply', '');
	} else if (topic.includes('get')) {
		msgtype = 'get';
		topic = topic.replace('/app/' + mqttUserId + '/', '').replace('/thing/property/get', '');
	} else if (topic.includes('set_reply')) {
		msgtype = 'set_reply';
		topic = topic.replace('/app/' + mqttUserId + '/', '').replace('/thing/property/set_reply', '');
	} else if (topic.includes('set')) {
		msgtype = 'set';
		topic = topic.replace('/app/' + mqttUserId + '/', '').replace('/thing/property/set', '');
	} else {
		msgtype = 'unknown msgtype';
	}
	return { msg: msgtype, topic: topic };
}

function createSubscribeTopics(userID, devices) {
	let topics = [];
	if (devices) {
		for (let key in devices) {
			topics.push('/app/' + userID + '/' + key + '/thing/property/set');
			topics.push('/app/' + userID + '/' + key + '/thing/property/set_reply');
			topics.push('/app/' + userID + '/' + key + '/thing/property/get');
			topics.push('/app/' + userID + '/' + key + '/thing/property/get_reply');
			topics.push('/app/device/property/' + key);
			//topics.push('/app/' + userID + '/' + key + '/status')
			//topics.push('/app/device/status+ '/' + key)
			//topics.push('/app/device/progress+ '/' + key)
			//topics.push('/app/+ userID + '/' + key + '/#)
		}
	}
	return topics;
}
async function getLastProtobufQuotas(adapter, pdevices) {
	try {
		for (const [device, value] of Object.entries(pdevices)) {
			const devtype = value['devType'];
			if (
				devtype === 'pstream600' ||
				devtype === 'pstream800' ||
				devtype === 'plug' ||
				devtype === 'deltaproultra' ||
				devtype === 'powerocean' ||
				devtype === 'panel2' ||
				devtype === 'alternator' ||
				devtype === 'deltapro3' ||
				devtype === 'delta3' ||
				devtype === 'delta3plus' ||
				devtype === 'river3' ||
				devtype === 'river3plus'
			) {
				adapter.log.debug(device + ' -> latestQuotas request');
				const value = await adapter.getStateAsync(device + '.action.latestQuotas').catch((e) => {
					adapter.log.warn('did not get old value .action.latestQuotas ->' + e);
				});
				if (value) {
					await adapter.setStateAsync(
						device + '.action.latestQuotas',
						value.val === true ? false : true,
						false
					);
				} else {
					await adapter.setStateAsync(device + '.action.latestQuotas', true, false);
				}
			}
		}
	} catch (error) {
		adapter.log.debug('getLastProtobufQuotas -> ' + error);
	}
}

async function getLastJSONQuotas(adapter, pdevices) {
	try {
		for (const [device, value] of Object.entries(pdevices)) {
			const devtype = value['devType'];
			if (
				devtype !== 'pstream600' &&
				devtype !== 'pstream800' &&
				devtype !== 'plug' &&
				devtype !== 'deltaproultra' &&
				devtype !== 'powerocean' &&
				devtype !== 'panel2' &&
				devtype !== 'alternator' &&
				devtype !== 'deltapro3' &&
				devtype !== 'delta3' &&
				devtype !== 'delta3plus' &&
				devtype !== 'river3' &&
				devtype !== 'river3plus'
			) {
				adapter.log.debug(device + ' -> latestQuotas request');
				const value = await adapter.getStateAsync(device + '.action.latestQuotas').catch((e) => {
					adapter.log.warn('did not get old value .action.latestQuotas ->' + e);
				});
				if (value) {
					await adapter.setStateAsync(
						device + '.action.latestQuotas',
						value.val === true ? false : true,
						false
					);
				} else {
					await adapter.setStateAsync(device + '.action.latestQuotas', true, false);
				}
			}
		}
	} catch (error) {
		adapter.log.debug('getLastJSONQuotas -> ' + error);
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

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
				const min = await adapter.getStateAsync(serial + '.ems.minDsgSoc').catch((e) => {
					adapter.log.warn('did not get ' + serial + '.ems.minDsgSoc ->' + e);
				});
				const soc = await adapter.getStateAsync(serial + '.bmsMaster.f32ShowSoc').catch((e) => {
					adapter.log.warn('did not get ' + serial + '.bmsMaster.f32ShowSoc ->' + e);
				});
				try {
					if (soc.val < min.val) {
						adapter.log.warn(
							'soc ' +
							soc.val +
							' is below the minimum ' +
							min.val +
							', turning on is not allowed ' +
							state
						);
						return {};
					}
				} catch (error) {
					adapter.log.warn(
						'soc or  minDsgSoc have empty value due to missing initializing, gave error ' + error
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
						'prep cmd  ' +
						serial +
						'  ' +
						stationType +
						'  ' +
						state +
						'  ' +
						value +
						'  ' +
						JSON.stringify(msg)
					);
				}
				return msg;
			} else if (
				stationType === 'delta2' ||
				stationType === 'delta2max' ||
				stationType === 'river2pro' ||
				stationType === 'river2max' ||
				stationType === 'shelly3em'
			) {
				let msg = {
					from: 'Android',
					lang: 'en-us',
					id: String(getRandomInt(100000000, 900000000)),
					moduleType: 1,
					operateType: '',
					version: '1.0'
				};
				msg['params'] = cmd['params'];
				msg['moduleSn'] = serial;

				if (stationType === 'delta2max') {
					if (state === 'dcChgCurrent') {
						const curr = await adapter.getStateAsync(serial + '.mppt.pv2DcChgCurrent').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.mppt.pv2DcChgCurrent ->' + e);
						});
						if (curr) {
							msg['params']['dcChgCfg2'] = curr.val * 1000;
						} else {
							//error ?
						}
					} else if (state === 'pv2DcChgCurrent') {
						const curr = await adapter.getStateAsync(serial + '.mppt.dcChgCurrent').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.mppt.dcChgCurrent ->' + e);
						});
						if (curr) {
							msg['params']['dcChgCfg'] = curr.val * 1000;
						} else {
							// error
						}
					} else if (state === 'bpPowerSoc') {
						const min = await adapter.getStateAsync(serial + '.ems.minDsgSoc').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.ems.minDsgSoc ->' + e);
						});
						//currently changing bpsoc enables the backup reserve
						if (min) {
							if (value < min.val + 5) {
								value = min.val + 5;
							} else msg['params']['minDsgSoc'] = value;
						} else {
							//error ?
						}
					} else if (state === 'watchIsConfig') {
						const bpsoc = await adapter.getStateAsync(serial + '.pd.bpPowerSoc').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.pd.bpPowerSoc ->' + e);
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
						'prep cmd  ' +
						serial +
						'  ' +
						stationType +
						'  ' +
						state +
						'  ' +
						value +
						'  ' +
						JSON.stringify(msg)
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
					version: '1.0'
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
						'prep cmd  ' +
						serial +
						'  ' +
						stationType +
						'  ' +
						state +
						'  ' +
						value +
						'  ' +
						JSON.stringify(msg)
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
					version: '1.0'
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
						'prep cmd  ' +
						serial +
						'  ' +
						stationType +
						'  ' +
						state +
						'  ' +
						value +
						'  ' +
						JSON.stringify(msg)
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
					version: '1.0'
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
					const secvalue = await adapter.getStateAsync(serial + '.' + path + '.' + secondid).catch((e) => {
						adapter.log.warn('did not get ' + serial + '.' + path + '.' + secondid + '->' + e);
					});
					try {
						if (secvalue.val) {
							secondval = secvalue.val;
							adapter.log.debug('using ' + secondid + ' =  ' + secondval + 'as second value');
						} else {
							return {};
						}
					} catch (error) {
						adapter.log.warn(
							path + secondid + ' has empty value due to missing initializing, gave error ' + error
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
					default:
						//now actions
						//no value to be set
						break;
				}
				if (logged) {
					adapter.log.debug(
						'prep cmd  ' +
						serial +
						'  ' +
						stationType +
						'  ' +
						state +
						'  ' +
						value +
						'  ' +
						JSON.stringify(msg)
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
					version: '1.0'
				};
				msg['sn'] = serial; // device sn#
				msg['params'] = cmd['params'];

				const moduleSn = await adapter.getStateAsync(serial + '.' + channel + '.' + 'mduleSn').catch((e) => {
					adapter.log.warn('did not get ' + serial + '.' + channel + '.' + 'moduleSn' + '->' + e);
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
						'prep cmd  ' +
						serial +
						'  ' +
						stationType +
						'  ' +
						state +
						'  ' +
						value +
						'  ' +
						JSON.stringify(msg)
					);
				}
				return msg;
			}
		} else {
			adapter.log.warn('no cmd prepared for this control ' + state);
			return {};
		}
	} else {
		adapter.log.warn('no cmd object provided ->' + JSON.stringify(cmd));
		return {};
	}
}

async function prepareStreamCmd(adapter, serial, streamType, state, value, cmd, log) {
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
		if (streamType === 'pstream600' || streamType === 'pstream800') {
			let muster = {
				header: {
					src: 32,
					dest: 53,
					dSrc: 1,
					dDest: 1,
					checkType: 3,
					cmdFunc: 20,
					cmdId: 129,
					needAck: 1,
					seq: Date.now(),
					version: 19,
					payloadVer: 1,
					from: 'ios',
					deviceSn: serial
				}
			};
			if (state === 'supplyPriority' || state === 'feedPriority') {
				if (value === true) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value ? 1 : 0;
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'permanentWatts' || state === 'invBrightness') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = parseInt(String(value * 10));
					//muster['header']['dataLen'] = {};
					if (parseInt(String(value * 10)) > 128) {
						muster['header']['dataLen'] = 3;
					} else {
						muster['header']['dataLen'] = 2;
					}
					//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
					//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'ratedPower') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = parseInt(String(value));
					//muster['header']['dataLen'] = {};
					if (parseInt(String(value * 10)) > 128) {
						muster['header']['dataLen'] = 3;
					} else {
						muster['header']['dataLen'] = 2;
					}
					//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
					//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'lowerLimit' || state === 'upperLimit') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value;
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
				} else {
					//omit pdata
					// the APP sends no value for padata
				}
			} else {
				//mostly for the previous omitted ones
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = value;
				muster['header']['dataLen'] = {};
			}
			muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
			muster['header']['cmdId'] = cmd['msg']['cmdId'];
			if (log) {
				adapter.log.debug(
					'[PROTOBUF encode] ' + state + ' ' + value + ' send stream ' + JSON.stringify(muster)
				);
			}
			// reconnect prepareStreamCmd(adapter, serial, streamType, '', 17477,{msg: {cmdFunc: 32, cmdId: 11, dataLen: 4 }})

			const root = protobuf.parse(protoSource).root;
			const SetMessage = root.lookupType('setMessage');
			const message = SetMessage.create(muster);
			const messageBuffer = SetMessage.encode(message).finish();
			return messageBuffer;
		} else if (streamType === 'plug') {
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
		} else if (streamType === 'deltaproultra') {
			let muster = {
				header: {
					src: 32,
					dest: 2,
					dSrc: 1,
					dDest: 1,
					checkType: 3,
					cmdFunc: 2,
					cmdId: 129,
					needAck: 1,
					seq: Date.now(),
					version: 19,
					payloadVer: 1,
					from: 'ios'
				}
			};
			if (state === 'wireless_4gOn') {
				if (value === true) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value ? 1 : 0;
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
					muster['header']['dest'] = cmd['msg']['dest'] || 53;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'energyManageEnable') {
				//enable sends true +limit
				//disable sends only limit
				//minDsgSoc changes also limit (+5%)
				const minsoc = await adapter.getStateAsync(serial + '.AppParaHeartbeatReport.dsgMinSoc').catch((e) => {
					adapter.log.warn('did not get ' + serial + '.AppParaHeartbeatReport.dsgMinSoc ->' + e);
				});
				const bpsoc = await adapter.getStateAsync(serial + '.AppParaHeartbeatReport.backupRatio').catch((e) => {
					adapter.log.warn('did not get ' + serial + '.AppParaHeartbeatReport.backupRatio ->' + e);
				});
				if (value === true) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value ? 1 : 0;
					if (bpsoc.val < minsoc.val + 5) {
						muster['header']['pdata']['value2'] = minsoc.val + 5;
					} else {
						muster['header']['pdata']['value2'] = bpsoc.val;
					}
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 4;
				} else {
					//omit pdata value#1
					// the APP sends no value for padata respectively the item #1
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value2'] = bpsoc.val;
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = 2; //always 2
				}
			} else if (state === 'chgMaxSoc' || state === 'dsgMinSoc' || state === 'chg_5p8SetWatts') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = parseInt(value);
					//muster['header']['dataLen'] = {};
					if (value > 128) {
						muster['header']['dataLen'] = 3;
					} else {
						muster['header']['dataLen'] = 2;
					}
					//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'chgC20SetWatts') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value2'] = parseInt(value); // must be field 2
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = 3;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (
				state === 'powerStandbyMins' ||
				state === 'screenStandbySec' ||
				state === 'dcStandbyMins' ||
				state === 'acStandbyMins'
			) {
				//selects
				//manipulate value?
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = parseInt(value);
					//muster['header']['dataLen'] = {};
					if (value > 128) {
						muster['header']['dataLen'] = 3;
					} else {
						muster['header']['dataLen'] = 2;
					}
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else {
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = value;
				muster['header']['dataLen'] = 2;
			}
			//for all commands
			muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
			muster['header']['cmdId'] = cmd['msg']['cmdId'];
			if (log) {
				adapter.log.debug(
					'[PROTOBUF encode] ' + state + ' ' + value + ' send deltaproultra ' + JSON.stringify(muster)
				);
			}
			const root = protobuf.parse(protoSource).root;
			const SetMessage = root.lookupType('setMessage');
			const message = SetMessage.create(muster);
			const messageBuffer = SetMessage.encode(message).finish();
			return messageBuffer;
		} else if (streamType === 'powerocean') {
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
			//for all commands
			muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
			muster['header']['cmdId'] = cmd['msg']['cmdId'];
			if (log) {
				adapter.log.debug(
					'[PROTOBUF encode] ' + state + ' ' + value + ' send powerocean ' + JSON.stringify(muster)
				);
			}
			const root = protobuf.parse(protoSource).root;
			const SetMessage = root.lookupType('setMessage');
			const message = SetMessage.create(muster);
			const messageBuffer = SetMessage.encode(message).finish();
			return messageBuffer;
		} else {
			adapter.log.debug('nothing to do ' + streamType);
		}
	}
}


async function getEcoFlowMqttCredits(adapter, email, password) {
	let mqttDaten = {
		UserID: '',
		User: '',
		URL: '',
		Port: '',
		protocol: '',
		clientID: ''
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
			'user-agent': 'okhttp/3.14.9'
		}
	};
	const data = {
		appVersion: '4.1.2.02',
		email: email,
		os: 'android',
		osVersion: '30',
		password: Buffer.from(password).toString('base64'),
		scene: 'IOT_APP',
		userType: 'ECOFLOW'
	};
	function httpsRequest(options, data) {
		return new Promise((resolve, reject) => {
			const req = https.request(options, (res) => {
				let data = '';
				res.on('data', (chunk) => {
					data += chunk;
				});
				res.on('end', () => {
					resolve(data);
				});
			});
			req.on('error', (error) => {
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
			'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.'
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
		mqttDaten.clientID = 'ANDROID_' + uuidv4() + '_' + userid;
	} catch (error) {
		adapter.log.debug(error);
		throw new Error(
			'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.'
		);
	}
	return mqttDaten;
}

exports.pstreamDecode = pstreamDecode;
exports.storeStationPayload = storeStationPayload;
exports.storeStreamPayload = storeStreamPayload;
exports.storeSHELLYpayload = storeSHELLYpayload;
exports.storeSHPpayload = storeSHPpayload;
exports.storePowerkitPayload = storePowerkitPayload;
exports.createSubscribeTopics = createSubscribeTopics;
exports.getEcoFlowMqttCredits = getEcoFlowMqttCredits;
exports.prepareStreamCmd = prepareStreamCmd;
exports.prepareStationCmd = prepareStationCmd;
exports.statesFromDict = statesFromDict;
exports.getLastProtobufQuotas = getLastProtobufQuotas;
exports.getLastJSONQuotas = getLastJSONQuotas;
exports.getIdFromTopic = getIdFromTopic;
exports.compareUpdate = compareUpdate;
exports.setOnlineStatus = setOnlineStatus;
exports.setOfflineStatus = setOfflineStatus;
