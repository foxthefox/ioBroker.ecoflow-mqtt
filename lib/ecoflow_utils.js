const protobuf = require('protobufjs');
const https = require('https');

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
    optional int32 batChargingTime = 59;
    optional int32 batDischargingTime = 60;
	optional int32 feedPriority = 61;
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

message feed_priority_pack
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
    optional uint32 watth_type = 2;
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

message EnergyTotalReportAck {
	optional uint32 result = 1;
	optional uint32 watth_seq = 2;
	optional uint32 watth_type = 3;
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
  message rtc_data {
	optional int32 week = 1 [(nanopb).default = 0];
	optional int32 sec = 2 [(nanopb).default = 0];
	optional int32 min = 3 [(nanopb).default = 0];
	optional int32 hour = 4 [(nanopb).default = 0];
	optional int32 day = 5 [(nanopb).default = 0];
	optional int32 month = 6 [(nanopb).default = 0];
	optional int32 year = 7 [(nanopb).default = 0];
  }
  message time_range_strategy {
	optional bool is_config = 1; // Whether to enable: 0: no; 1: yes
	optional bool is_enable = 2; // Whether to configure: 0: no; 1: yes
	optional int32 time_mode = 3; // Scheduled mode: 0: daily; 1: weekly; 2: monthly; 3: do not repeat
	optional int32 time_data = 4; // mode == 1, bit0-bit6 represents Monday to Saturday respectively; mode == 2, bit0-bit30 represents the 1st to the 31st
	optional rtc_data start_time = 5;
	optional rtc_data stop_time = 6;
  }
  message plug_ack_message {
	optional uint32 ack = 1;
  }

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
	optional bool switch = 11; //switchSta
	optional int32 brightness = 12;
	optional int32 max_watts = 13;
	optional int32 heartbeat_frequency = 14;
	optional int32 mesh_enable = 15;
	optional int32 unknown16 = 16;
	optional int32 unknown17 = 17;
	optional int32 unknown18 = 18;
	optional int32 unknown19 = 19;
	optional int32 unknown20 = 20;
	optional int32 unknown21 = 21;
	optional int32 unknown22 = 22;
	optional int32 unknown23 = 23;
	optional int32 unknown24 = 24;
	optional int32 unknown25 = 25;
	optional int32 unknown26 = 26;
	optional int32 unknown27 = 27;
	optional int32 unknown28 = 28;
	optional int32 unknown29 = 29;
	optional int32 unknown30 = 30;
	optional int32 unknown31 = 31;
	optional int32 cnt_plugs_32 = 32;
	optional int32 stream_power_33 = 33;
	optional int32 sum_incl_plugs_34 = 34;
	optional int32 unknown35 = 35;
	optional int32 unknown36 = 36;
	optional int32 unknown37 = 37;
	optional int32 unknown38 = 38;
	optional int32 unknown39 = 39;
	optional int32 unknown40 = 40;
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

/*
pstream umbauen, damit Antworten mit mehr als einer Nachricht auch verarbeitet werden
Rückgabe der decodierung als Object
abspeichern mit loop durch Objekt


*/

function pstreamDecode(adapter, payload, usage) {
	// @ts-ignore
	const buf = new Buffer.from(payload, 'base64');
	//try {
	let msgobj = decodeMsg(buf, 'HeaderMessage');
	//adapter.log.debug(JSON.stringify(msgobj));
	if (Array.isArray(msgobj.header)) {
		let returnobj = {};
		for (let i = 0; i < msgobj.header.length; i++) {
			let deviceType = msgobj.header[i].cmdFunc;
			let packetType = msgobj.header[i].cmdId;
			let dataLen = msgobj.header[i].dataLen;
			//adapter.log.debug('packetType: ' + packetType);

			let prototyp = '';
			if (packetType) {
				switch (packetType) {
					case 143:
						prototyp = deviceType === 20 ? 'feed_priority_pack' : 'undef';
						break;
					case 142:
						prototyp = deviceType === 20 ? 'undef' : 'include_plug';
						break;
					case 138:
						prototyp = deviceType === 20 ? 'PowerPack' : 'mesh_ctrl_pack';
						break;
					case 137:
						prototyp = deviceType === 20 ? 'undef' : 'max_watts_pack';
						break;
					case 136:
						prototyp = 'undef'; // stream -> PowerPack?
						break;
					case 135:
						prototyp = deviceType === 20 ? 'brightness_pack' : 'undef'; // plug -> PowerPack?
						break;
					case 134:
						prototyp = 'time_task_config_post';
						break;
					case 133:
						prototyp = deviceType === 20 ? 'bat_upper_pack' : 'undef'; // plug -> PowerPack?
						break;
					case 132:
						prototyp = deviceType === 20 ? 'bat_lower_pack' : 'time_task_config';
						break;
					case 131:
						prototyp = 'time_task_config';
						break;
					case 130:
						prototyp = deviceType === 20 ? 'permanent_watts_pack' : 'brightness_pack';
						break;
					case 129:
						prototyp = deviceType === 20 ? 'supply_priority_pack' : 'plug_switch_message';
						break;
					case 32:
						//deviceType === 254
						prototyp = 'EnergyPack';
						break;
					case 11:
						//deviceType === 32
						prototyp = 'country_town_message';
						break;
					case 4:
						prototyp = deviceType === 20 ? 'InverterHeartbeat2' : 'undef';
						break;
					case 2:
						prototyp = 'time_task_config_post';
						break;
					case 1:
						prototyp = deviceType === 20 ? 'inverter_heartbeat' : 'plug_heartbeat';
						break;
					default:
						// not decodeable packet
						prototyp = 'undef';
						break;
				}
				let msg = null;
				if (prototyp !== 'undef') {
					try {
						if (msgobj.header[i].pdata) {
							msg = decodeMsg(msgobj.header[i].pdata, prototyp);
							//console.log(JSON.stringify(msg));
							returnobj[prototyp] = msg;
						} else {
							adapter.log.debug('no pdata : ' + JSON.stringify(msgobj.header[i]));
						}
					} catch (error) {
						adapter.log.debug('id ' + prototyp + ' error at: ' + error);
					}
				} else {
					if (deviceType === 20 && adapter.config.msgUnknownMsgPstream) {
						adapter.log.debug('Pstream unknown packetType cmdId = ' + packetType);
						adapter.log.debug('Pstream device: ' + msgobj.header[i].deviceSn);
						if (msgobj.header[i].pdata) {
							adapter.log.debug('pdata: ' + msgobj.header[i].pdata.toString('hex'));
						}
					} else if (deviceType === 2 && adapter.config.msgUnknownMsgPlug) {
						adapter.log.debug('Plug unknown packetType cmdId = ' + packetType);
						adapter.log.debug('Plug device: ' + msgobj.header[i].deviceSn);
						if (msgobj.header[i].pdata) {
							adapter.log.debug('pdata: ' + msgobj.header[i].pdata.toString('hex'));
						}
					} else if (deviceType !== 20 && deviceType !== 2) {
						adapter.log.debug(
							'unknown packetType cmdId = ' + packetType + ' unknown deviceType cmdFunc = ' + deviceType
						);
						if (msgobj.header[i].pdata) {
							adapter.log.debug('pdata: ' + msgobj.header[i].pdata.toString('hex'));
						}
					}
				}
				if (packetType === 32) {
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
						try {
							let msgobj32 = msg;
							//adapter.log.debug('energy:' + JSON.stringify(msgobj32));
							let energyobj = {
								watth1: 0,
								watth2: 0,
								watth3: 0,
								watth4: 0,
								watth5: 0,
								watth6: 0,
								watth7: 0,
								watth8: 0
							};
							for (let i = 0; i < msgobj32.sysEnergyStream.length; i++) {
								const watthType = msgobj32.sysEnergyStream[i].watthType;
								const energy = msgobj32.sysEnergyStream[i].watth.reduce((a, b) => a + b, 0);
								energyobj['watth' + watthType] = energy;
							}
							returnobj['energy'] = energyobj;
						} catch (error) {
							adapter.log.debug('id 32 error at: ' + error);
						}
					}
				}
			} else {
				//message without packageType;
				adapter.log.debug('noch packetType : ' + JSON.stringify(msgobj.header[i]));
			}
		}
		return returnobj;
	}
	//} catch (error) {
	//	adapter.log.debug('error at: ', error);
	//}
}

async function storeStreamPayload(adapter, stateDictObj, stateObj, topic, payload, devtype) {
	if (payload) {
		try {
			if (
				(adapter.config.msgUpdateValuePstream && devtype === 'pstream') ||
				(adapter.config.msgUpdateValuePlug && devtype === 'plug')
			) {
				adapter.log.debug(
					'got topic ' + topic + ' ( stateDictObj ' + stateDictObj + ' stateObj: ' + stateObj + ' )'
				);
			}
			for (let channel in payload) {
				//other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
				if (
					channel === 'plug_heartbeat' ||
					channel === 'inverter_heartbeat' ||
					channel === 'InverterHeartbeat2' ||
					channel === 'energy'
				) {
					if (
						(adapter.config.msgUpdateValuePstream && devtype === 'pstream') ||
						(adapter.config.msgUpdateValuePlug && devtype === 'plug')
					) {
						adapter.log.debug('parsing channel ' + channel);
					}
					for (let state in payload[channel]) {
						if (
							(adapter.config.msgUpdateValuePstream && devtype === 'pstream') ||
							(adapter.config.msgUpdateValuePlug && devtype === 'plug')
						) {
							adapter.log.debug('processing state ' + state);
						}
						if (stateDictObj[channel][state]) {
							if (stateDictObj[channel][state]['entity'] !== 'icon') {
								let value = convertData(
									stateDictObj,
									channel,
									state,
									payload[channel][state],
									stateObj
								);
								// adapter.log.debug('converted value ' + value);
								let old = await adapter
									.getStateAsync(topic + '.' + channel + '.' + state)
									.catch((e) => {
										adapter.log.warn(
											'did not get old value ' + topic + '.' + channel + '.' + state + ' ->' + e
										);
									});
								//adapter.log.debug('old ' + JSON.stringify(old));
								if (!old) {
									await adapter.setStateAsync(topic + '.' + channel + '.' + state, {
										val: value,
										ack: true
									});
								} else {
									if (old.val !== value) {
										if (
											(adapter.config.msgUpdateValuePstream && devtype === 'pstream') ||
											(adapter.config.msgUpdateValuePlug && devtype === 'plug')
										) {
											adapter.log.debug(
												devtype +
													' update ' +
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
							adapter.log.debug(
								'not processed ' + channel + ' state : ' + state + '  value: ' + payload[channel][state]
							);
						}
					}
				}
			}
		} catch (error) {
			adapter.log.debug('store stream payload ' + error);
			adapter.log.debug('payload from ' + topic + ' was: ' + JSON.stringify(payload));
		}
	} else {
		adapter.log.debug('nothing to process');
	}
}

async function storeStationPayload(adapter, stateDictObj, stateObj, topic, payload) {
	if (payload) {
		try {
			let payloadobj = null;
			if (payload['params']) {
				payloadobj = payload['params'];
			} else if (payload['data']) {
				if (payload['data']['quotaMap']) {
					payloadobj = payload['data']['quotaMap'];
					adapter.log.debug('processed get_reply latest quotas !');
				}
			} else {
				adapter.log.debug('no params or data in payload ->' + JSON.stringify(payload));
			}
			for (let comportion in payloadobj) {
				let dotted = comportion.split('.');
				let channel = dotted[0];
				let state = dotted[1];
				if (channel === 'latestTimeStamp' || state === null || channel === 'kit' || channel === 'bms_kitInfo') {
					//exceptions
				} else {
					// manipulation of delta2 and delta2max
					if (channel === 'bms_bmsStatus') {
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
										'did not get old value ' + topic + '.' + channelsave + '.' + state + ' ->' + e
									);
								});
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
						adapter.log.debug(
							'not processed ' + channel + ' state: ' + state + ' value ' + payloadobj[comportion]
						);
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
		}
	}
	return topics;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

async function prepareStationCmd(adapter, serial, stationType, state, value, cmd) {
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
					default:
						//all analog values
						msg['params'][cmd['valName']] = value;
						break;
				}

				return msg;
			} else if (
				stationType === 'delta2' ||
				stationType === 'delta2max' ||
				stationType === 'river2pro' ||
				stationType === 'river2max'
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
					if (state === 'cfgDcChgCurrent') {
						const curr = await adapter.getStateAsync(serial + '.mppt.pv2DcChgCurrent').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.mppt.pv2DcChgCurrent ->' + e);
						});
						msg['params']['dcChgCfg2'] = curr.val * 1000;
					} else if (state === 'pv2DcChgCurrent') {
						const curr = await adapter.getStateAsync(serial + '.mppt.cfgDcChgCurrent').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.mppt.cfgDcChgCurrent ->' + e);
						});
						msg['params']['dcChgCfg'] = curr.val * 1000;
					} else if (state === 'bppowerSoc') {
						const min = await adapter.getStateAsync(serial + '.ems.minDsgSoc').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.ems.minDsgSoc->' + e);
						});
						if (value < min.val + 5) {
							value = min.val + 5;
						}
						msg['params']['minDsgSoc'] = min;
					}
				}

				switch (state) {
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
					case 'newAcAutoOnCfg':
						msg['params'][cmd['valName']] = value ? 1 : 0;
						break;
					case 'cfgDcChgCurrent':
					case 'pv2DcChgCurrent':
						value = value * 1000;
						msg['params'][cmd['valName']] = value;
					default:
						msg['params'][cmd['valName']] = value;
						break;
				}
				msg['operateType'] = cmd['operateType'];
				msg['moduleType'] = cmd['moduleType'];
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
					case 'mainMode':
					case 'idleMode':
					case 'beepEn':
						msg['params'][cmd['valName']] = value ? 1 : 0;
						break;
					default:
						msg['params'][cmd['valName']] = value;
						break;
				}
				msg['operateType'] = cmd['operateType'];
				msg['moduleType'] = cmd['moduleType'];
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
					default:
						msg['params'][cmd['valName']] = value;
						break;
				}
				msg['operateType'] = cmd['operateType'];
				msg['moduleType'] = cmd['moduleType'];
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
function prepareStreamCmd(adapter, serial, streamType, state, value, cmd) {
	if (state === 'lastQuotas') {
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
				//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
			} else if (state === 'feedPriority') {
				if (value === true) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value ? 1 : 0;
					muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else {
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = value;
				muster['header']['dataLen'] = {};
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
			if (state === 'switch' || state === 'mesh_enable') {
				if (value === true) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value ? 1 : 0;
					muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'max_watts') {
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = parseInt(value);
				muster['header']['dataLen'] = {};
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
			} else if (state === 'brightness') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = parseInt(String(value / 100 * 1023));
					muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
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

			adapter.log.debug(state + ' ' + value + ' send plug ' + JSON.stringify(muster));
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
exports.createSubscribeTopics = createSubscribeTopics;
exports.getEcoFlowMqttCredits = getEcoFlowMqttCredits;
exports.prepareStreamCmd = prepareStreamCmd;
exports.prepareStationCmd = prepareStationCmd;
