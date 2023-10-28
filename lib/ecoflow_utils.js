const protobuf = require('protobufjs');
const { isDataView } = require('util/types');
//const bufferFrom = require('buffer-from');

const protoSource = `
syntax = "proto3";
message inverter_heartbeat {
    optional uint32 invErrCode = 1;
    optional uint32 invWarnCode = 3;
    optional uint32 pv1ErrCode = 2;
    optional uint32 pv1WarnCode = 4;
    optional uint32 pv2ErrCode = 5;
    optional uint32 pv2WarningCode = 6;
    optional uint32 batErrCode = 7;
    optional uint32 batWarningCode = 8;
    optional uint32 llcErrCode = 9;
    optional uint32 llcWarningCode = 10;
    optional uint32 pv1Status = 11;
    optional uint32 pv2Status = 12;
    optional uint32 batStatus = 13;
    optional uint32 llcStatus = 14;
    optional uint32 invStatus = 15;
    optional int32 pv1InputVolt = 16;
    optional int32 pv1OpVolt = 17;
    optional int32 pv1InputCur = 18;
    optional int32 pv1InputWatts = 19;
    optional int32 pv1Temp = 20;
    optional int32 pv2InputVolt = 21;
    optional int32 pv2OpVolt = 22;
    optional int32 pv2InputCur = 23;
    optional int32 pv2InputWatts = 24;
    optional int32 pv2Temp = 25;
    optional int32 batInputVolt = 26;
    optional int32 batOpVolt = 27;
    optional int32 batInputCur = 28;
    optional int32 batInputWatts = 29;
    optional int32 batTemp = 30;
    optional uint32 batSoc = 31;
    optional int32 llcInputVolt = 32;
    optional int32 llcOpVolt = 33;
    optional int32 llcTemp = 34;
    optional int32 invInputVolt = 35;
    optional int32 invOpVolt = 36;
    optional int32 invOutputCur = 37;
    optional int32 invOutputWatts = 38;
    optional int32 invTemp = 39;
    optional int32 invFreq = 40;
    optional int32 invDcCur = 41;
    optional int32 bpType = 42;
    optional int32 invRelayStatus = 43;
    optional int32 pv1RelayStatus = 44;
    optional int32 pv2RelayStatus = 45;
    optional uint32 installCountry = 46;
    optional uint32 installTown = 47;
    optional uint32 permanentWatts = 48;
    optional uint32 dynamicWatts = 49;
    optional uint32 supplyPriority = 50;
    optional uint32 lowerLimit = 51;
    optional uint32 upperLimit = 52;
    optional uint32 invOnOff = 53;
    optional uint32 wirelessErrCode = 54;
    optional uint32 wirelessWarnCode = 55;
    optional uint32 invBrightness = 56;
    optional uint32 heartbeatFrequency = 57;
    optional uint32 ratedPower = 58;
    optional int32 Unknown59 = 59;
    optional int32 batMinutes = 60;
}
message InverterHeartbeat2 {
	optional int32 X_Unknown_1 = 1;
	optional int32 X_Unknown_2 = 2;
	optional int32 X_Unknown_3 = 3;
	optional int32 X_Unknown_4 = 4;
	optional int32 X_Unknown_5 = 5;
	optional int32 X_Unknown_6 = 6;
	optional int32 upperLimit_7 = 7;
	optional int32 lowerLimit_8 = 8;
	optional int32 X_Unknown_9 = 9;
	optional int32 X_Unknown_10 = 10;
	optional int32 X_Unknown_11 = 11;
	optional int32 baseLoad_12 = 12;
	optional int32 X_Unknown_13 = 13;
	optional int32 X_Unknown_14 = 14;
	optional int32 X_Unknown_15 = 15;
	optional int32 X_Unknown_16 = 16;
	optional int32 X_Unknown_17 = 17;
	optional int32 X_Unknown_18 = 18;
	optional int32 X_Unknown_19 = 19;
	optional int32 X_Unknown_20 = 20;
	optional int32 X_Unknown_21 = 21;
	optional int32 X_Unknown_22 = 22;
	optional int32 X_Unknown_23 = 23;
	optional int32 X_Unknown_24 = 24;
	optional int32 X_Unknown_25 = 25;
	optional int32 X_Unknown_26 = 26;
	optional int32 X_Unknown_27 = 27;
	optional int32 X_Unknown_28 = 28;
	optional int32 X_Unknown_29 = 29;
	optional int32 X_Unknown_30 = 30;
	optional int32 X_Unknown_31 = 31;
	optional int32 uptime_32 = 32;
	optional int32 X_Unknown_33 = 33;
	optional int32 X_Unknown_34 = 34;
	optional int32 X_Unknown_35 = 35;
	optional int32 X_Unknown_36 = 36;
	optional int32 X_Unknown_37 = 37;
	optional int32 X_Unknown_38 = 38;
	optional int32 X_Unknown_39 = 39;
	optional int32 X_Unknown_40 = 40;
	optional int32 X_Unknown_41 = 41;
	optional int32 X_Unknown_42 = 42;
	optional int32 X_Unknown_43 = 43;
	optional int32 X_Unknown_44 = 44;
	optional int32 gridWatt_45 = 45;
	optional int32 X_Unknown_46 = 46;
	optional int32 X_Unknown_47 = 47;
	optional int32 X_Unknown_48 = 48;
	optional int32 X_Unknown_49 = 49;
	optional int32 unixtime_50 = 50;
	optional int32 X_Unknown_51 = 51;
	optional int32 X_Unknown_52 = 52;
 }
message permanent_watts_pack
{
    optional uint32 permanent_watts = 1;
}

message supply_priority_pack
{
    optional uint32 supply_priority = 1;
}

message bat_lower_pack
{
    optional int32 lower_limit = 1;
}

message bat_upper_pack
{
    optional int32 upper_limit = 1;
}

message brightness_pack
{
    optional int32 brightness = 1;
}

message PowerItem
{
    optional uint32 timestamp = 1;
    optional sint32 timezone = 2;
    optional uint32 inv_to_grid_power = 3;
    optional uint32 inv_to_plug_power = 4;
    optional int32 battery_power = 5;
    optional uint32 pv1_output_power = 6;
    optional uint32 pv2_output_power = 7;
}

message PowerPack
{
    optional uint32 sys_seq = 1;
    repeated PowerItem sys_power_stream = 2;
}

message EnergyItem
{
    optional uint32 timestamp = 1;
    optional uint32 watth_type = 2; //1=output, 3=
    repeated uint32 watth = 3;
}

message EnergyPack
{
    optional uint32 sys_seq = 1;
    repeated EnergyItem sys_energy_stream = 2;
}


message EnergyTotalReport
{
    optional uint32 watth_seq = 1;
    optional EnergyItem watth_item = 2;
}

message BatchEnergyTotalReport
{
    optional uint32 watth_seq = 1;
    repeated EnergyItem watth_item = 2;
}

message PowerAckPack
{
    optional uint32 sys_seq = 1;
}

message node_massage
{
    optional string sn = 1;
    optional bytes mac = 2;
}

message mesh_child_node_info
{
    optional uint32 topology_type = 1;
    optional uint32 mesh_protocol = 2;
    optional uint32 max_sub_device_num = 3;
    optional bytes parent_mac_id = 4;
    optional bytes mesh_id = 5;
    repeated node_massage sub_device_list = 6;
}

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
}
`;

function decodeMsg(hexString, msgtype) {
	const root = protobuf.parse(protoSource).root;
	const PowerMessage = root.lookupType(msgtype);
	//const message = PowerMessage.decode(hexString);
	const message = PowerMessage.decode(Buffer.from(hexString, 'hex'));
	const object = PowerMessage.toObject(message, { defaults: false });
	return object;
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
	switch (key) {
		case 'number':
		case 'level':
			//convert number
			value = parseFloat(value) * stateObj[channel][key][state]['mult'];
			break;
		case 'string':
			value = value.toString();
			break;
		case 'switch':
			//convert false/treue
			value = value == 0 || value == false ? false : true;
			break;
		case 'diagnostic':
			//convert string to item
			if (stateObj[channel][key][state][state][value]) {
				value = stateObj[channel][key][state][state][value].toString();
			} else {
				value = value + ' not part of array';
			}
			break;
		default:
			break;
	}
	return value;
}

function pstreamDecode(adapter, payload) {
	// @ts-ignore
	const buf = new Buffer.from(payload, 'base64');
	try {
		let msgobj = decodeMsg(buf, 'HeaderMessage');
		if (Array.isArray(msgobj.header)) {
			for (let i = 0; i < msgobj.header.length; i++) {
				let packetType = msgobj.header[i].cmdId;
				//adapter.log.debug('packetType: ' + packetType);
				if (packetType == 4) {
					try {
						let msgobj4 = decodeMsg(msgobj.header[i].pdata, 'InverterHeartbeat2');
						//adapter.log.debug('inv2:' + JSON.stringify(msgobj4));
						return { InverterHeartbeat2: msgobj4 };
					} catch (error) {
						adapter.log.debug('id 4 error at: ' + error);
					}
				} else if (packetType == 1) {
					try {
						let msgobj1 = decodeMsg(msgobj.header[i].pdata, 'inverter_heartbeat');
						//adapter.log.debug('inv: '+ JSON.stringify(msgobj1));
						return { inverter_heartbeat: msgobj1 };
					} catch (error) {
						adapter.log.debug('id 1 error at: ' + error);
					}
				} else {
					// not interesting packet
					//adapter.log.debug('unknown packetType', packetType, "msg: ", unknown);
					return {};
				}
			}
		}
	} catch (error) {
		adapter.log.debug('error at: ', error);
	}
}

async function storeStreamPayload(adapter, stateDictObj, stateObj, topic, payload) {
	if (payload) {
		try {
			for (let channel in payload) {
				for (let state in payload[channel]) {
					if (adapter.config.msgUpdateValuePstream) {
						// adapter.log.debug('topic ' + topic + ' channel ' + channel + ' state ' + state);
					}
					if (stateDictObj[channel][state]) {
						if (stateDictObj[channel][state]['entity'] !== 'icon') {
							let value = convertData(stateDictObj, channel, state, payload[channel][state], stateObj);
							// adapter.log.debug('converted value ' + value);
							let old = await adapter.getStateAsync(topic + '.' + channel + '.' + state);
							//adapter.log.debug('old ' + JSON.stringify(old));
							if (!old) {
								await adapter.setStateAsync(topic + '.' + channel + '.' + state, {
									val: value,
									ack: true
								});
							} else {
								if (old.val !== value) {
									if (adapter.config.msgUpdateValuePstream) {
										adapter.log.debug(
											'stream update ' +
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
								}
							}
						}
					} else {
						adapter.log.debug('not processed ' + channel + '  ' + state);
					}
				}
			}
		} catch (error) {
			adapter.log.debug('store payload ' + error);
		}
	} else {
		adapter.log.debug('nothing to process');
	}
}

async function storeStationPayload(adapter, stateDictObj, stateObj, topic, payload) {
	if (payload) {
		try {
			for (let comportion in payload['params']) {
				let dotted = comportion.split('.');
				let channel = dotted[0];
				let state = dotted[1];
				if (channel === 'latestTimeStamp' || state === null) {
					//exceptions
				} else {
					//adapter.log.debug('comportion ' + comportion + ' channel ' + channel + ' state ' + state);
					const channelsave = channel;
					if (stateDictObj[channel][state]) {
						if (channel === 'bmsSlave1' || channel === 'bmsSlave2') {
							channel = 'bmsMaster';
						}
						if (stateDictObj[channel][state]['entity'] !== 'icon') {
							let value = convertData(
								stateDictObj,
								channel,
								state,
								payload['params'][comportion],
								stateObj
							);
							//adapter.log.debug('converted value ' + value);
							let old = await adapter.getStateAsync(topic + '.' + channelsave + '.' + state);
							//adapter.log.debug('old ' + JSON.stringify(old));
							if (!old) {
								await adapter.setStateAsync(topic + '.' + channelsave + '.' + state, {
									val: value,
									ack: true
								});
							} else {
								if (old.val !== value) {
									if (adapter.config.msgUpdateValuePstation) {
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
								}
							}
						}
					} else {
						adapter.log.debug('not processed ' + channel + '  ' + state);
					}
				}
			}
		} catch (error) {
			adapter.log.debug('store payload ' + error);
		}
	} else {
		adapter.log.debug('nothing to process');
	}
}

function createSubscribeTopics(userID, type1, id1, type2, id2) {
	let topics = [];
	if (type1 !== 'none') {
		topics.push('/app/' + userID + '/' + id1 + '/thing/property/set');
		//topics.push('/app/' + userID + '/' + id1 + '/thing/property/get');
		topics.push('/app/device/property/' + id1);
	}
	if (type2 !== 'none') {
		topics.push('/app/' + userID + '/' + id2 + '/thing/property/set');
		//topics.push('/app/' + userID + '/' + id1 + '/thing/property/set_reply');
		//topics.push('/app/' + userID + '/' + id2 + '/thing/property/get');
		topics.push('/app/device/property/' + id2);
	}
	return topics;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

async function prepareStationCmd(adapter, serial, stationType, state, value, cmd) {
	if (Object.keys(cmd).length > 0) {
		if (
			stationType === 'deltamax' ||
			stationType === 'deltapro' ||
			stationType === 'delta' ||
			stationType === 'deltamini'
		) {
			//keine Zuschaltung von Verbrauchern, wenn die Kapazität unterhalb min
			//APP verhindert dies mit Meldung
			if (
				(state === 'cfgAcEnabled' || state === 'carState' || state === 'dcOutState') &&
				(value === true || value == 1)
			) {
				const min = await adapter.getStateAsync(serial + '.ems.minDsgSoc');
				const soc = await adapter.getStateAsync(serial + '.bmsMaster.f32ShowSoc');
				if (soc.val < min.val) {
					adapter.log.warn(
						'soc ' + soc.val + ' is below the minimum ' + min.val + ', turning on is not allowed ' + state
					);
					return {};
				}
			}

			let msg = cmd.msg;
			//msg['moduleType'] = cmd['moduleType'] || 0;
			msg['id'] = String(getRandomInt(100000000, 900000000));
			//umrechnung der Werte
			switch (state) {
				case 'beepState':
					msg['params'][cmd['valName']] = value ? 0 : 1;
					break;
				case 'cfgAcEnabled':
				case 'cfgAcXboost':
				case 'carState':
				case 'dcOutState':
					msg['params'][cmd['valName']] = value ? 1 : 0;
					break;
				default:
					msg['params'][cmd['valName']] = value;
					break;
			}

			return msg;
		} else if (stationType === 'delta2' || stationType === 'delta2max') {
			let msg = {
				from: 'Android',
				lang: 'en-us',
				id: String(getRandomInt(100000000, 900000000)),
				moduleType: 1,
				operateType: '',
				version: '1.0'
			};
			if (stationType === 'delta2max') {
				msg['moduleSn'] = serial;
			}
			msg['params'] = cmd['params'];
			switch (state) {
				case 'beepState':
					msg['params'][cmd['valName']] = value ? 0 : 1;
					break;
				case 'cfgAcEnabled':
				case 'cfgAcXboost':
				case 'carState':
				case 'dcOutState':
					msg['params'][cmd['valName']] = value ? 1 : 0;
					break;
				default:
					msg['params'][cmd['valName']] = value;
					break;
			}
			if (state === 'acAutoOutConfig' || state === 'newAcAutoOnCfg') {
				// wert minAcOutSoc + 5
			}
			msg['operateType'] = cmd['operateType'];
			msg['moduleType'] = cmd['moduleType'];
			return msg;
		}
	} else {
		adapter.log.warn('no cmd prepared for this control ' + state);
		return {};
	}
}
function prepareStreamCmd(adapter, serial, streamType, state, value, cmd) {
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
		if (state === 'supplyPriority') {
			if (value === true) {
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = value ? 1 : 0;
				muster['header']['dataLen'] = {};
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
			} else {
				//omit pdata
				// the APP sends no value for padata respectively the item #1
			}
		} else if (state === 'permanentWatts' || state === 'invBrightness') {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['value'] = parseInt(value * 10);
			muster['header']['dataLen'] = {};
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
		} else {
			muster['header']['pdata'] = {};
			muster['header']['pdata']['value'] = value;
			muster['header']['dataLen'] = {};
			muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
		}
		muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
		muster['header']['cmdId'] = cmd['msg']['cmdId'];

		adapter.log.debug(state + ' ' + value + ' send stream ' + JSON.stringify(muster));
		// reconnect prepareStreamCmd(adapter, serial, streamType, '', 17477,{msg: {cmdFunc: 32, cmdId: 11, dataLen: 4 }})

		const root = protobuf.parse(protoSource).root;
		const SetMessage = root.lookupType('setMessage');
		const message = SetMessage.create(muster);
		const messageBuffer = SetMessage.encode(message).finish();
		return messageBuffer;
	} else {
		adapter.log.debug('nothing to do ' + streamType);
	}
}

async function getEcoFlowMqttCredits(adapter, email, password) {
	let mqttDaten = {
		UserID: '',
		User: '',
		Passwort: '',
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
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
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

		return mqttDaten;
	} catch (error) {
		adapter.log.debug(error);
		throw new Error(
			'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.'
		);
	}
}

exports.pstreamDecode = pstreamDecode;
exports.storeStationPayload = storeStationPayload;
exports.storeStreamPayload = storeStreamPayload;
exports.createSubscribeTopics = createSubscribeTopics;
exports.getEcoFlowMqttCredits = getEcoFlowMqttCredits;
exports.prepareStreamCmd = prepareStreamCmd;
exports.prepareStationCmd = prepareStationCmd;
