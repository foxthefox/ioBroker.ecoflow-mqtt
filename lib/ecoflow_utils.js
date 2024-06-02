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
	optional int32 pv1_active_1 = 1; //pv1 off/on?
	optional int32 pv1_status_2 = 2; //status pv1
	optional int32 pv2_active_3 = 3; //pv2 off/on?
	optional int32 pv2_status_4 = 4; //status pv2
	optional int32 X_Unknown_5 = 5;
	optional int32 status_6 = 6; //status
	optional int32 upperLimit = 7;
	optional int32 lowerLimit = 8;
	optional int32 status_9 = 9; //status 48->4096
	optional int32 status_10 = 10; //status
	optional int32 X_Unknown_11 = 11;
	optional int32 baseLoad = 12;
	optional int32 powerPlugsPos = 13; //stream power to plugs positive
	optional int32 X_Unknown_14 = 14;
	optional int32 X_Unknown_15 = 15; //power?
	optional int32 X_Unknown_16 = 16;
	optional int32 X_Unknown_17 = 17;
	optional int32 X_Unknown_18 = 18;
	optional int32 X_Unknown_19 = 19;
	optional int32 X_Unknown_20 = 20;
	optional int32 X_Unknown_21 = 21;
	optional int32 X_Unknown_22 = 22;
	optional int32 X_Unknown_23 = 23;
	optional int32 X_Unknown_24 = 24; //disch/chargeTime
	optional int32 X_Unknown_25 = 25;
	optional int32 X_Unknown_26 = 26;
	optional int32 X_Unknown_27 = 27; //disch/chargeTime
	optional int32 X_Unknown_28 = 28;
	optional int32 X_Unknown_29 = 29;
	optional int32 X_Unknown_30 = 30;
	optional int32 X_Unknown_31 = 31;
	optional int32 uptime = 32;
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
	optional int32 plugsConn_44 = 44; // plugs connected for dynamic watt
	optional int32 gridWatt_45 = 45;
	optional int32 powerPlugsNeg = 46; // stream power to plugs negative
	optional int32 X_Unknown_47 = 47;
	optional int32 unixtime_48 = 48; // Anfangszeit history werte?
	optional int32 X_Unknown_49 = 49;
	optional int32 unixtime_50 = 50;
	optional int32 X_Unknown_51 = 51; //letzte Zeit history?
	optional int32 wifiRssi = 52; //wifiRssi
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
	optional int32 uptime = 19;
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
	optional int32 streamConn_31 = 31;//stream connected
	optional int32 cntDevices = 32; //count of devices
	optional int32 streamOutputPower = 33; //total streamoutputpower
	optional int32 powerPlugs = 34; // power to plugs
	optional int32 unknown35 = 35;
	optional int32 unknown36 = 36;
	optional int32 unknown37 = 37;
	optional int32 unixtime_38 = 38; //unixtime, ggf. last connection, when connected to mqtt server
	optional int32 dynWattEnable = 39; //plug included for dynamic watts
	optional int32 wifiRssi = 40; //wifiRssi
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
	optional int32 value2 = 2;
}

//delta pro ultra
message dcoutput_pack {
	optional int32 dcoutput = 1;
}
message deviceTimeout_pack {
	optional int32 deviceTimeout = 1;
}
message lcdTimeout_pack {
	optional int32 lcdTimeout = 1;
}    
message dcTimeout_pack {
	optional int32 dcTimeout = 1;
} 
message acTimeout_pack {
	optional int32 acTimeout = 1;
} 
message chaLim_pack {
	optional int32 chaLim = 1;
}
message dischaLim_pack {
	optional int32 dischaLim = 1;
}
message acChargeSpeed_pack {
	optional int32 acChargeSpeedPower = 1;
	optional int32 acChargeSpeedAC = 2;
}
message backup_pack {
	optional int32 backupEnable = 1;
	optional int32 backupLim = 2;
}
message lte4g_pack {
	optional int32 lte4gEnable = 1;
}
message acalwaysOn_pack {
	optional int32 acAlwaysOnEnable = 1;
	optional int32 acAlwaysOnTime = 2;
}
message batPreCondOn_pack {
	optional int32 batPreCondOn = 1;
}
message areaTown_pack {
	optional string areaTown = 1;
}
message town_pack {
	optional sint32 town = 1;
	optional uint32 setAuto = 2;
}
message init_pack {
	optional uint32 unixtime = 1;
	optional sint32 town = 2;
}
message lab_pack {
	optional uint32 labVal = 1;
}
message rename_pack {
	optional string devName = 1;
}
message dpu_3 {
	optional uint32 bmsOnline1 = 1; // status or error?
	optional uint32 unknown2 = 2; // status or error?
	optional uint32 unknown3 = 3; // value
	optional uint32 bkpResEn = 4; // Backup reserve (0: Disabled, 1: Enabled)
	optional int32 bkpResLev = 5; // Backup reserve level [%]
	optional int32 unknown6 = 6; // enable; on/off
	optional int32 bkpResSolLev = 7; // Backup reserve solar charging level [%]
	optional int32 batPreCondEn = 8; // Battery Preconditioning (0: Disabled, 1: Enabled)
	optional int32 chaLim = 9; // Charge Limit [%]
	optional int32 dischaLim = 10; // Discharge Limit [%]
	optional int32 unknown11 = 11; // enable; on/off
	optional int32 unknown12 = 12; //limit?
	optional int32 acSpeed = 13; // AC Charging Speed [W]
	optional int32 power = 14; // Power In/Out [W]
	optional int32 devTimeout = 15; // Device Timeout [min] (0=Never)
	optional int32 lcdTimeout = 16; // LCD screen timeout [sec] (0=Never)
	optional int32 dc12vTimeout = 17; // 12V DC Timeout [min] (0=Never)
	optional int32 acTimeout = 18; // AC Timeout [min] (0=Never)
	optional int32 unknown19 = 19; // enable; on/off
	optional int32 unknown20 = 20; // enable; on/off
	optional int32 town = 21; //town
	optional string timezone = 22; //area/town
}
message AppParaHeartbeatReport
{
    optional uint32 sys_work_mode = 1;
    optional uint32 sys_backup_event = 2;
    optional uint32 sys_backup_soc = 3;
    optional uint32 energy_manage_enable = 4;
    optional uint32 backup_ratio = 5;
    optional uint32 ac_xboost = 6;
    optional uint32 ac_out_freq = 7;
    optional uint32 bms_mode_set = 8;
    optional uint32 chg_max_soc = 9;
    optional uint32 dsg_min_soc = 10;
    optional uint32 ac_often_open_flg = 11;
    optional uint32 ac_often_open_min_soc = 12;
    optional uint32 chg_5p8_set_watts = 13;
    optional uint32 chg_c20_set_watts = 14;
    optional uint32 power_standby_mins = 15;
    optional uint32 screen_standby_sec = 16;
    optional uint32 dc_standby_mins = 17;
    optional uint32 ac_standby_mins = 18;
    optional uint32 solar_only_flg = 19;
    optional uint32 timezone_settype = 20;
    optional sint32 sys_timezone = 21;
    optional string sys_timezone_id = 22;
}

message dpu_4 {
	optional uint32 unknown1 = 1; // status or error?
	optional uint32 soc3 = 3; // Soc
	optional float unknown4  = 4; // battery power
	optional float capacity5 = 5; // 
	optional int32 remainTime7 = 7; //  remain time
	optional int32 chaLim = 8; // Charge Limit [%]
	optional int32 dischaLim = 9; // Discharge Limit [%]
	optional int32 unknown11 = 11; // type
}
message BPInfo
{
    optional uint32 bp_no = 1;
    optional uint32 bp_chg_sta = 2;
    optional uint32 bp_soc = 3;
    optional float bp_pwr = 4;
    optional float bp_energy = 5; 
    optional uint32 heat_time = 6;
    optional uint32 remain_time = 7;
    optional uint32 bp_soc_max = 8;
    optional uint32 bp_soc_min = 9;
    optional uint32 bp_err_code = 10;
    optional int32 bp_temp = 11;
}

message BpInfoReport
{
    repeated BPInfo bp_info = 1;
}

message dpu_2 {
	optional uint32 unknown1 = 1; // status or error?
	optional uint32 unknown21 = 21; // status or error?
	optional uint32 unknown22 = 22; // status or error?
	optional uint32 watthBatt23 = 23; // Wh battery
	optional uint32 unknown24 = 24; // status or error?
	optional uint32 unknown25 = 25; // status or error?

	optional uint32 unknown41 = 41; // status 
	optional uint32 unknown42 = 42; // status 
	optional uint32 freq43 = 43; // frequency
	optional uint32 unknown44 = 44; // status 
	optional uint32 unknown45 = 45; // status 
	optional uint32 watthOut46 = 46; // Wh out
	optional uint32 watthIn47 = 47; // Wh in
	optional uint32 freq48 = 48; // frequency
	optional uint32 unknown49 = 49; // status 
	optional uint32 unknown50 = 50; // status 
	optional uint32 unknown51 = 51; // status 
	optional uint32 unknown52 = 52; // status 
	optional uint32 unknown53 = 53; // status 
	
	optional float volt61 = 61; // voltage
	optional float current62 = 62; // current

	optional float float63 = 63; // voltage
	optional float float64 = 64; // current

	optional float usbC1Volt65 = 65; // voltage
	optional float usbC1Current66 = 66; // current
	optional float usbC2Colt67 = 67; // voltage
	optional float usbC2Current68 = 68; // current

	optional float usbA1Volt69 = 69; // voltage
	optional float usbA1Current70 = 70; // current
	optional float usbA2Volt71 = 71; // voltage
	optional float usbA2Current72 = 72; // current

	optional float dcVolt73 = 73; // voltage
	optional float dcCurrent74 = 74; // current

	optional float ac1outBackupVolt75 = 75; // voltage
	optional float ac1outBackupCurrent76 = 76; // current
	optional float ac2outBackupvolt77 = 77; // voltage
	optional float ac2outBackupCurrent78 = 78; // current
	optional float ac1outOnlineVolt79 = 79; // voltage
	optional float ac1outOnlineCurrent80 = 80; // current
	optional float ac2outOnlineVolt81 = 81; // voltage
	optional float ac2outOnlineCurrent82 = 82; // current

	optional float ac30AVolt83 = 83; // voltage
	optional float ac30ACurrent84 = 84; // current
	optional float acL14Volt85 = 85; // voltage
	optional float acL14Current86 = 86; // current

	optional float solarLowVolt87 = 87; // voltage
	optional float solarLowcurrent88 = 88; // current

	optional float solarHighVolt89 = 89; // voltage
	optional float solarHighCurrent90 = 90; // current

	optional float acInVolt91 = 91; // voltage
	optional float acInCurrent92 = 92; // current

	optional float powerIOInVolt93 = 93; // voltage
	optional float powerIOInCurrent94 = 94; // current

	optional float powerIOOutVolt95 = 95; // voltage
	optional float powerIOOutCurrent96 = 96; // current

	optional float temp97 = 97; //temp in degC?
	optional float temp98 = 98; //temp in degC?
	optional float temp99 = 99; //temp in degC?
	optional float temp100 = 100; //temp in degC?

	optional uint32 unknown101 = 101; //
	optional float unknown102 = 102; // value 
}
message BackendRecordHeartbeatReport
{
    optional uint32 record_flag = 1;
    optional uint32 sys_work_sta = 21;
    optional uint32 chg_reign_sta = 22;
    optional uint32 pcs_work_sta = 23;
    optional uint32 fan_state = 24;
    optional uint32 ems_work_sta = 25;
    optional uint32 c20_in_type = 41;
    optional uint32 work_5p8_mode = 42;
    optional uint32 ac_in_freq = 43;
    optional uint32 ems_max_avail_num = 44;
    optional uint32 ems_open_bms_idx = 45;
    optional uint32 ems_para_vol_min = 46;
    optional uint32 ems_para_vol_max = 47;
    optional uint32 ac_out_freq = 48;
    optional uint32 pcs_dc_err_code = 49;
    optional uint32 pcs_ac_err_code = 50;
    optional uint32 lv_pv_err_code = 51;
    optional uint32 hv_pv_err_code = 52;
    optional uint32 ads_err_code = 53;
    optional float bat_vol = 61;
    optional float bat_amp = 62;
    optional float bms_input_watts = 63;
    optional float bms_output_watts = 64;
    optional float out_usb1_vol = 65;
    optional float out_usb1_amp = 66;
    optional float out_usb2_vol = 67;
    optional float out_usb2_amp = 68;
    optional float out_typec1_vol = 69;
    optional float out_typec1_amp = 70;
    optional float out_typec2_vol = 71;
    optional float out_typec2_amp = 72;
    optional float out_ads_vol = 73;
    optional float out_ads_amp = 74;
    optional float out_ac_l1_1_vol = 75;
    optional float out_ac_l1_1_amp = 76;
    optional float out_ac_l1_2_vol = 77;
    optional float out_ac_l1_2_amp = 78;
    optional float out_ac_l2_1_vol = 79;
    optional float out_ac_l2_1_amp = 80;
    optional float out_ac_l2_2_vol = 81;
    optional float out_ac_l2_2_amp = 82;
    optional float out_ac_tt_vol = 83;
    optional float out_ac_tt_amp = 84;
    optional float out_ac_l14_vol = 85;
    optional float out_ac_l14_amp = 86;
    optional float out_ac_5p8_vol = 87;
    optional float out_ac_5p8_amp = 88;
    optional float in_ac_5p8_vol = 89;
    optional float in_ac_5p8_amp = 90;
    optional float in_ac_c20_vol = 91;
    optional float in_ac_c20_amp = 92;
    optional float in_lv_mppt_vol = 93;
    optional float in_lv_mppt_amp = 94;
    optional float in_hv_mppt_vol = 95;
    optional float in_hv_mppt_amp = 96;
    optional float pcs_dc_temp = 97;
    optional float pcs_ac_temp = 98;
    optional float mppt_lv_temp = 99;
    optional float mppt_hv_temp = 100;
    optional int32 pd_temp = 101;
    optional float ev_max_charger_cur = 102;
}

//pd?
message dpu_1 {
	optional uint32 sysVer1 = 1; // 
	optional int32 unknown2 = 2; // status or error?
	optional int32 unknown3 = 3; // status or error?

	optional int32 unknown10 = 10; // status
	optional int32 unknown11 = 11; // status
	optional int32 unknown12 = 12; // status
	optional int32 unknown13 = 13; // status
	optional int32 unknown14 = 14; // status

	optional int32 lim15 = 15; // limit discharge

	optional string unknown16 = 16; // array?
	
	optional int32 soc21 = 21; // soc same as dpu_4 item3
	optional int32 unknown22 = 22; // status
	optional int32 unknown23 = 23; // status
	optional int32 maxAcPower24 = 24; // 
	optional int32 maxPowerPowerPort25 = 25; // 

	optional int32 remainTime26 = 26; // same as dpu_4 item7
	optional int32 unknown27 = 27; // status

	optional int32 limit28 = 28; // 
	optional int32 limit29 = 29; // 

	optional float totalInputPower41 = 41; // total input power [W]
	optional float totalOutputPower42 = 42; // total output power [W]
	optional float usbC1power43 = 43; // USB C
	optional float usbC2power44 = 44; // USB C
	optional float usbA1power45 = 45; // USBA
 	optional float usbA2power46 = 46; // USB A
	optional float dcPower47 = 47; // DC Anderson
	optional float ac1outBackupPower48 = 48; // backup UPS left AC 20A output power [W]
	optional float ac2outBackupPower49 = 49; //  backup UPS right AC 20A output power [W]
	optional float ac1outOnlinePower50 = 50; // online UPS left AC 20A output power [W]
	optional float ac2outOnlinePower51 = 51; // online UPS right AC 20A output power [W]
	optional float acout30APower52 = 52; // 200V AC 20A output power [W]
	optional float acoutL14Power53 = 53; // 100/200V AC 30A output power [W]
	optional float ioPower54 = 54; // POWER IO output power [W]
	optional float totalInputPower56 = 56; // total input power [W], float 
	optional float solarLowInputPower57 = 57; // solar low
	optional float solarHighInputPower58 = 58; // solar high
	optional float float59 = 59; // ac in


	optional int32 unknown100 = 100; // status 
	optional int32 unknown101 = 101; // status 

	//102-109 repeated as 121-128
	optional int32 unknown102 = 102; // status 
	optional int32 unknown103 = 103; //
	optional int32 unknown104 = 104; //
	optional int32 unknown105 = 105; //
	optional int32 unknown106 = 106; // status 
	optional int32 unknown107 = 107; // status 
	optional int32 unknown108 = 108; // status 
	optional int32 unknown109 = 109; // status 

	optional int32 unknown121 = 121; // status
	optional int32 unknown122 = 122; //
	optional int32 unknown123 = 123; //
	optional int32 unknown124 = 124; //
	optional int32 unknown125 = 125; // status 
	optional int32 unknown126 = 126; // status 
	optional int32 unknown127 = 127; // status 
	optional int32 unknown128 = 128; // status 

}

message AppShowHeartbeatReport
{
    optional uint32 proto_ver = 1;
    optional uint32 show_flag = 2;
    optional uint32 access_type = 3;
    optional sint32 wireless_4g_on = 10;
    optional sint32 wireless_4g_sta = 11;
    optional uint32 access_5p8_in_type = 12;
    optional uint32 access_5p8_out_type = 13;
    optional sint32 wireless_4g_con = 14;
    optional sint32 wirlesss_4g_err_code = 15;
    optional string sim_iccid = 16;
    optional uint32 soc = 21;
    optional uint32 bp_num = 22;
    optional uint32 pcs_type = 23;
    optional uint32 c20_chg_max_watts = 24;
    optional uint32 para_chg_max_watts = 25;
    optional uint32 remain_time = 26;
    optional uint32 sys_err_code = 27;
    optional uint32 full_combo = 28;
    optional uint32 remain_combo = 29;
    optional float watts_in_sum = 41;
    optional float watts_out_sum = 42;
    optional float out_usb1_pwr = 43;
    optional float out_usb2_pwr = 44;
    optional float out_typec1_pwr = 45;
    optional float out_typec2_pwr = 46;
    optional float out_ads_pwr = 47;
    optional float out_ac_l1_1_pwr = 48;
    optional float out_ac_l1_2_pwr = 49;
    optional float out_ac_l2_1_pwr = 50;
    optional float out_ac_l2_2_pwr = 51;
    optional float out_ac_tt_pwr = 52;
    optional float out_ac_l14_pwr = 53;
    optional float out_ac_5p8_pwr = 54;
    optional float in_ac_5p8_pwr = 55;
    optional float in_ac_c20_pwr = 56;
    optional float in_lv_mppt_pwr = 57;
    optional float in_hv_mppt_pwr = 58;
    optional float out_pr_pwr = 59;
    optional uint32 time_task_change_cnt = 100;
    optional uint32 time_task_conflict_flag = 101;
    optional uint32 chg_time_task_notice = 102;
    optional  int32 chg_time_task_type = 103;
    optional  int32 chg_time_task_index = 104;
    optional  int32 chg_time_task_mode = 105;
    optional uint32 chg_time_task_param = 106;
    optional uint32 chg_time_task_table_0 = 107;
    optional uint32 chg_time_task_table_1 = 108;
    optional uint32 chg_time_task_table_2 = 109;
    optional uint32 dsg_time_task_notice = 121;
    optional  int32 dsg_time_task_type = 122;
    optional  int32 dsg_time_task_index = 123;
    optional  int32 dsg_time_task_mode = 124;
    optional uint32 dsg_time_task_param = 125;
    optional uint32 dsg_time_task_table_0 = 126;
    optional uint32 dsg_time_task_table_1 = 127;
    optional uint32 dsg_time_task_table_2 = 128;
}

message shp2time
{
    optional int32 unixtime = 1;
}

message shp2cmd
{
    optional int32 max_current_amp = 10;
	optional int32 unknown_22 = 22;
	optional int32 unknown_23 = 23;
}

message shp2getreply
{
    optional uint64 percent = 10;
}


message first_1_pack 
{
	optional float homePower = 1; 
	optional sint32 sysTimezone = 2;
	optional string sysTimezoneId = 4; 
}

message first_2_pack 
{
	optional bytes unknown1 = 1; 
	optional bytes unknown2 = 2; 
}

message first_3_pack 
{
	optional bytes  unknown1 = 1; 
	optional int32 unknown2 = 2; 
	optional first_3_20_pack unknown20 = 20; 
	optional first_3_20_pack unknown21 = 21; 
}

message first_3_20_pack 
{
	optional int32 unknown1 = 1; 
	optional int32 unknown2 = 2; 
}

message first_4_pack 
{
	optional int32 unknown1 = 1; 
	optional string unknown11 = 11; 
	optional int32 unknown21 = 21; 

}

message first_5_pack 
{
	optional int32 unknown1 = 1;
	optional int32 unknown3 = 3;
	optional int32 unknown4 = 4;

}

message first_shp_message
{
	optional first_1_pack  first_1_pack = 1; 
	optional first_2_pack  first_2_pack = 2; 
	optional first_3_pack  first_3_pack = 3; 
	optional first_4_pack  first_4_pack = 4; 
	optional first_5_pack  first_5_pack = 5; 
}

message second_30_5_pack 
{
	optional int32 loadIsEnable1 = 1;
	optional int32 loadPriority2 = 2;
	optional int32 loadPriorityType = 3;
}

message second_30_pack 
{
	optional int32 unknown30_1 = 1; 
	optional int32 unknown30_4 = 4; 
	repeated second_30_5_pack chaSta = 5; 
}


message second_80_1_pack 
{
	repeated bytes string = 1;
}

message acin1_pack 
{
	optional int32 online1 = 1; 
	optional int32 unknown2 = 2; 
	optional int32 unknown3 = 3; 
	optional int32 unknown4 = 4; 
	optional int32 unknown5 = 5; 
	optional int32 unknown6 = 6; 
	optional int32 type = 7; 
}

message name_pack
{
	optional string name = 1;
}

message device_pack 
{
	optional name_pack device = 1;
	optional int32 type2 = 2;
	optional int32 capacity3 = 3;
	optional float ratePower4 = 4;
}

message acin2_pack 
{
	optional device_pack device = 1;
	optional int32 isEnable2 = 2;
	optional int32 isConnect3 = 3;
	optional int32 unknown4 = 4; 
	optional int32 unknown5 = 5; 
	optional int32 unknown6 = 6; 
	optional int32 unknown7 = 7; 
	optional int32 batteryPercentage8 = 8;
	optional float unknown9 = 9; 
	optional int32 unknown10 = 10; 
	optional int32 unknown11 = 11; 
	optional int32 unknown12 = 12; 
	optional int32 unknown13 = 13; 
	optional int32 emsBatTemp14 = 14;
	optional int32 unknown15 = 15; 
	optional int32 unknown16 = 16; 
	optional int32 unknown17 = 17; 
	optional int32 unknown18 = 18; 
	optional int32 unknown19 = 19; 
}

message dpu_pack 
{
	optional string unknown1 = 1; 
	optional int32 unknown2 = 2; 
	optional int32 unknown3 = 3; 
	optional int32 unknown4 = 4;
	optional float unknown5 = 5;
	optional int32 unknown6 = 6;
	optional float unknown7 = 7; 
	optional int32 unknown8 = 8;
	optional int32 unknown9 = 9;
	optional int32 unknown10 = 10;
	optional int32 unknown11 = 11;
	optional int32 unknown12 = 12;
	optional int32 unknown13 = 13;
}

message second_80_pack 
{
	optional second_80_1_pack unknown_80_1 = 1; 
	optional int32 unknown2 = 2; 
	optional int32 unknown3 = 3; 
	optional int32 unknown4 = 4; 
	optional int32 unknown5 = 5; 
	optional acin1_pack acIn1 = 60; 
	optional acin1_pack acIn2 = 61; 
	optional acin1_pack acIn3 = 62; 
	optional acin2_pack energyInfos1 = 80;
	optional acin2_pack energyInfos2 = 81; 
	optional acin2_pack energyInfos3 = 82; 
	optional dpu_pack data1 = 90; 
	optional dpu_pack data2 = 91; 
}

message second_81_1_1_pack 
{
	optional int32 id1 = 1;
}

message splitphaseinfo_pack 
{
	optional int32 linkMark = 1;
	optional int32 linkCh =2;
}

message splitphase_pack 
{
	optional splitphaseinfo_pack splitphaseinfo = 1;
	optional int32 size = 2; 
	optional int32 isEnable = 3; 
	optional string chName = 4;
	optional int32 iconNum5 = 5;
}

message splitphase2_pack 
{
	optional int32 unknown1 = 1; 
	optional int32 unknown2 = 2; 
	optional int32 unknown3 = 3; 
	optional int32 unknown4 = 4; 
	optional int32 unknown5 = 5; 
	optional int32 unknown6 = 6; 
	optional int32 unknown7 = 7; 
	optional int32 unknown8 = 8; 
}

message second_81_1_pack 
{
	optional second_81_1_1_pack strings1 = 1;
	optional string unknown2= 2; 
	optional int32 unknown3 = 3; 
	optional int32 unknown4 = 4; 
	optional splitphase_pack ch1data = 30; 
	optional splitphase_pack ch2data = 31;
	optional splitphase_pack ch3data = 32;
	optional splitphase_pack ch4data = 33;
	optional splitphase_pack ch5data = 34;
	optional splitphase_pack ch6data = 35;
	optional splitphase_pack ch7data = 36;
	optional splitphase_pack ch8data = 37;
	optional splitphase_pack ch9data = 38;
	optional splitphase_pack ch10data = 39;
	optional splitphase_pack ch11data = 40;
	optional splitphase_pack ch12data = 41;

	optional splitphase2_pack ch1data2 = 90;
	optional splitphase2_pack ch2data2 = 91;
	optional splitphase2_pack ch3data2 = 92;
	optional splitphase2_pack ch4data2 = 93;
	optional splitphase2_pack ch5data2 = 94;
	optional splitphase2_pack ch6data2 = 95;
	optional splitphase2_pack ch7data2 = 96;
	optional splitphase2_pack ch8data2 = 97;
	optional splitphase2_pack ch9data2 = 98;
	optional splitphase2_pack ch10data2 = 99;
	optional splitphase2_pack ch11data2 = 100;
	optional splitphase2_pack ch12data2 = 101;
}

message second_81_pack
{
	optional second_81_1_pack unknown_81_1 = 1;
}

message second_82_pack 
{
	optional second_81_1_1_pack errCode1 = 1; 
	optional int32 unknown2 = 2; 
	optional int32 unknown3 = 3; 
	optional int32 unknown4 = 4; 
	optional int32 unknown5 = 5; 
	optional int32 unknown6 = 6; 
	optional int32 unknown7 = 7; 
	optional int32 unknown16 = 16;
	optional float current30 = 30;
	optional float current31 = 31;
	optional int32 unknown32 =32;
	optional float voltage33 = 33;
	optional float voltage34 = 34;
	optional int32 unknown35 =35;
	optional float current36 = 36;
	optional float current37 = 37;
	optional int32 unknown38 =38;
}

message second_shp_message 
{
	optional int32 gridVol = 1;
	optional int32 gridFreq= 2;
	optional int32 unknown3 = 3; 
	optional int32 unexpected4 = 4;
	optional int32 epsMode = 5; 
	optional int32 chargeLimit = 6; 
	optional int32 chargePower = 7; 
	optional int32 unknown8 = 8; 
	optional int32 unknown9 = 9; 
	optional int32 maxCurrent = 10; 
	optional int32 unknown11 = 11; 
	optional int32 maxChargePower = 12; 
	optional int32 unknown14 = 14; 
	optional int32 unknown15 = 15; 
	optional int32 unknown16 = 16; 
	optional string area17 = 17;
	optional int32 unknown18 = 18; 
	optional int32 unknown19 = 19; 
	optional int32 unknown20 = 20; 
	optional int32 unknown21 = 21; 
	optional int32 unixtime22 = 22; 
	optional int32 unknown23 = 23; 
	optional int32 unknown24 = 24; 
	optional int32 unknown25 = 25; 
	optional int32 unknown26 = 26; 
	optional int32 unknown27 = 27; 
	optional int32 unknown28 = 28; 
	optional second_30_pack second_30_pack= 30;
	optional bytes unknown31 = 31; 
	optional bytes unknown32 = 32;
	optional bytes unknown33 = 33;
	optional bytes unknown34 = 34;
	optional bytes unknown35 = 35;
	optional bytes unknown36 = 36;
	optional bytes unknown37 = 37;
	optional bytes unknown38 = 38;
	optional bytes unknown39 = 39;
	optional bytes unknown40 = 40; 
	optional int32 unknown41 = 41; 
	optional int32 unknown61 = 61; 
	optional int32 unknown62 = 62; 
	optional int32 backupReserveSoc63 = 63;
	optional int32 unixtime64 = 64; 
	optional float unknown65 = 65; 
	optional float unknown66 = 66; 
	optional int32 unknown67 = 67; 
	optional int32 unknown70 = 70; 
	optional int32 maxPowerGenerator71 = 71; 
	optional second_80_pack second_80_pack= 80; 
	optional second_81_pack second_81_pack= 81; 
	optional second_82_pack second_82_pack= 82; 
	optional int32 unknown90 = 90; 
	optional int32 unknown91 = 91; 
	optional int32 unknown92 = 92; 
	optional int32 unknown93 = 93; 
	optional int32 unknown94 = 94; 
	optional int32 unknown95 = 95; 
	optional int32 unknown96 = 96; 
	optional int32 unknown97 = 97; 
	optional int32 unknown98 = 98; 
	optional int32 unknown99 = 99; 
	optional int32 unknown100 = 100; 
	optional int32 unknown101 = 101; 
	optional int32 unknown102 = 102; 
	optional int32 unknown103 = 103;
	optional int32 unknown104 = 104;  
}


`;

function decodeMsg(hexString, msgtype) {
	try {
		const root = protobuf.parse(protoSource).root;
		const PowerMessage = root.lookupType(msgtype);
		//const message = PowerMessage.decode(hexString);

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
	switch (key) {
		case 'number':
		case 'level':
			//convert number
			if (state !== 'brightness') {
				value = parseFloat(value) * stateObj[channel][key][state]['mult'];
			} else {
				value = parseInt(String(value * stateObj[channel][key][state]['mult']));
			}
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
		case 'array':
			//convert false/treue
			value = JSON.stringify(value);
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

function pstreamDecode(adapter, payload, usage, topic) {
	// @ts-ignore
	const buf = new Buffer.from(payload, 'base64');
	try {
		let msgobj = decodeMsg(buf, 'HeaderMessage');
		adapter.log.debug('Protobuf Decoded: ' + JSON.stringify(msgobj));
		if (msgobj) {
			if (Array.isArray(msgobj.header)) {
				let returnobj = {};
				for (let i = 0; i < msgobj.header.length; i++) {
					let deviceType = msgobj.header[i].cmdFunc;
					let packetType = msgobj.header[i].cmdId;
					let src = msgobj.header[i].src;
					const seq = msgobj.header[i].seq;
					let dataLen = msgobj.header[i].dataLen;
					//adapter.log.debug('packetType: ' + packetType);
					if (msgobj.header[i].encType) {
						if (msgobj.header[i].encType == 1) {
							//shp2 && src == 11
							adapter.log.debug('Message encrypted');
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

					let prototyp = '';
					if (packetType) {
						//deviceType = 2 is shared between plug and delta pro ultra!!!
						switch (packetType) {
							case 143:
								switch (deviceType) {
									case 20:
										prototyp = 'feed_priority_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 142:
								switch (deviceType) {
									case 2:
										prototyp = 'include_plug';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'undef' : 'include_plug';
								break;
							case 138:
								switch (deviceType) {
									case 20:
										prototyp = 'PowerPack';
										break;
									case 2:
										prototyp = 'mesh_ctrl_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'PowerPack' : 'mesh_ctrl_pack';
								break;
							case 137:
								switch (deviceType) {
									case 2:
										prototyp = 'max_watts_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'undef' : 'max_watts_pack';
								break;
							case 136:
								switch (deviceType) {
									case 20:
										prototyp = 'PowerPack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'PowerPack' : 'undef';
								break;
							case 135:
								switch (deviceType) {
									case 20:
										prototyp = 'brightness_pack';
										break;
									case 2:
										prototyp = 'PowerPack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'brightness_pack' : 'PowerPack';
								break;
							case 134:
								//20 and 2 but not dpu
								prototyp = 'time_task_config_post';
								break;
							case 133:
								switch (deviceType) {
									case 20:
										prototyp = 'bat_upper_pack';
										break;
									case 2:
										prototyp = 'PowerPack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'bat_upper_pack' : 'PowerPack'; // plug -> PowerPack?
								break;
							case 132:
								switch (deviceType) {
									case 20:
										prototyp = 'bat_lower_pack';
										break;
									case 2:
										prototyp = 'time_task_config';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'bat_lower_pack' : 'time_task_config';
								break;
							case 131:
								//20 and 2 but not dpu
								prototyp = 'time_task_config';
								break;
							case 130:
								switch (deviceType) {
									case 20:
										prototyp = 'supply_priority_pack';
										break;
									case 2:
										prototyp = 'brightness_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'supply_priority_pack' : 'brightness_pack';
								break;
							case 129:
								switch (deviceType) {
									case 20:
										prototyp = 'permanent_watts_pack';
										break;
									case 2:
										prototyp = 'plug_switch_message';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								// prototyp = deviceType === 20 ? 'permanent_watts_pack' : 'plug_switch_message';
								break;
							case 117:
								switch (deviceType) {
									case 53:
										//dpu cmdFunc 53, cmdId=117
										prototyp = 'lte4g_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 105:
								switch (deviceType) {
									case 2:
										prototyp = 'init_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 103:
								switch (deviceType) {
									case 2:
										prototyp = 'lab_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 94:
								switch (deviceType) {
									case 2:
										prototyp = 'backup_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 93:
								switch (deviceType) {
									case 2:
										prototyp = 'acalwaysOn_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 89:
								switch (deviceType) {
									case 2:
										prototyp = 'batPreCondOn_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 88:
								switch (deviceType) {
									case 2:
										prototyp = 'dischaLim_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 87:
								switch (deviceType) {
									case 2:
										prototyp = 'chaLim_pack';
										break;
									case 1:
										prototyp = 'areaTown_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 86:
								switch (deviceType) {
									case 1:
										prototyp = 'town_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 85:
								switch (deviceType) {
									case 1: //shp
										console.log('shp time');
										prototyp = 'shp2time';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 84:
								prototyp = deviceType === 20 ? 'undef' : 'dcTimeout_pack';
								break;
							case 83:
								prototyp = deviceType === 20 ? 'undef' : 'acTimeout_pack';
								break;
							case 82:
								prototyp = deviceType === 20 ? 'undef' : 'lcdTimeout_pack';
								break;
							case 81:
								prototyp = deviceType === 20 ? 'undef' : 'deviceTimeout_pack';
								break;
							case 73:
								prototyp = deviceType === 20 ? 'undef' : 'acChargeSpeed_pack';
								break;
							case 68:
								prototyp = deviceType === 20 ? 'undef' : 'dcoutput_pack';
								break;
							case 65:
								switch (deviceType) {
									case 2:
										prototyp = 'rename_pack';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 33:
								switch (deviceType) {
									case 12: //shp2
										console.log('shp2');
										prototyp = 'shp2cmd';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 32:
								//deviceType === 254
								//prototyp = deviceType === 20 ? 'EnergyPack' : 'EnergyPack';

								switch (deviceType) {
									case 254:
										prototyp = 'EnergyPack';
										break;
									case 20:
										prototyp = 'EnergyPack';
										break;
									case 12:
										prototyp = 'second_shp_message';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 11:
								//deviceType === 32
								prototyp = deviceType === 20 ? 'undef' : 'country_town_message';
								break;
							case 4:
								switch (deviceType) {
									case 20:
										prototyp = 'InverterHeartbeat2';
										break;
									case 2:
										prototyp = 'BPInfo';
										//prototyp = 'dpu_4';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;

							case 3:
								switch (deviceType) {
									case 2:
										prototyp = 'AppParaHeartbeatReport';
										//prototyp = 'dpu_3';
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 2:
								switch (deviceType) {
									case 20:
										prototyp = 'time_task_config_post';
										break;
									case 2:
										if (src === 53) {
											prototyp = 'time_task_config_post';
										} else if (src === 2) {
											prototyp = 'BackendRecordHeartbeatReport';
											//prototyp = 'dpu_2';
										} else {
											prototyp = 'undef';
										}
										break;
									default:
										prototyp = 'undef';
										break;
								}
								break;
							case 1:
								switch (deviceType) {
									case 20:
										prototyp = 'inverter_heartbeat';
										break;
									case 12:
										prototyp = 'first_shp_message';
										break;
									case 2:
										if (src === 53) {
											prototyp = 'plug_heartbeat';
										} else if (src === 2) {
											prototyp = 'AppShowHeartbeatReport';
											//prototyp = 'dpu_1';
										} else {
											prototyp = 'undef';
										}
										break;
									default:
										prototyp = 'undef';
										break;
								}
								//prototyp = deviceType === 20 ? 'inverter_heartbeat' : 'plug_heartbeat';
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
									//adapter.log.debug(JSON.stringify(msg));
									returnobj[prototyp] = msg;
								} else {
									adapter.log.debug('no pdata : ' + JSON.stringify(msgobj.header[i]));
								}
							} catch (error) {
								adapter.log.debug('id ' + prototyp + ' error at: ' + error);
							}
						} else {
							if (adapter.config.msgUnknownMsgPstream) {
								adapter.log.debug(
									'Pstream unknown packetType cmdId = ' + packetType + ' cmdFunc= ' + deviceType
								);
								adapter.log.debug('Pstream device: ' + msgobj.header[i].deviceSn);
								if (msgobj.header[i].pdata) {
									adapter.log.debug('pdata: ' + msgobj.header[i].pdata.toString('hex'));
								}
							} else if (deviceType !== 20 && deviceType !== 2) {
								adapter.log.debug(
									'unknown packetType cmdId = ' +
										packetType +
										' unknown deviceType cmdFunc = ' +
										deviceType
								);
								if (msgobj.header[i].pdata) {
									adapter.log.debug('pdata: ' + msgobj.header[i].pdata.toString('hex'));
								}
							}
						}
						if (packetType === 32 && deviceType !== 12) {
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
					} else {
						//message without packageType;
						adapter.log.debug('no packetType : ' + JSON.stringify(msgobj.header[i]));
						if (msgobj.header[i].code) {
							if (msgobj.header[i].code == '-2') {
								returnobj['info'] = { status: 'offline' };
							}
						}
					}
				}
				adapter.quotas[topic] = returnobj;
				return returnobj;
			}
		}
	} catch (error) {
		if (adapter.config.showHex) {
			adapter.log.debug('payload was: ' + payload.toString('hex'));
		}
		throw new Error('pstreamDecode ->  ' + error);
	}
}

async function storeStreamPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable) {
	let haUpdate = [];
	if (payload) {
		try {
			/*
			if (adapter.config.msgUpdatePstream) {
				adapter.log.debug(
					'got topic ' + topic + ' ( stateDictObj ' + stateDictObj + ' stateObj: ' + stateObj + ' )'
				);
			}
			*/
			for (let channel in payload) {
				//other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
				if (
					channel === 'plug_heartbeat' ||
					channel === 'inverter_heartbeat' ||
					channel === 'InverterHeartbeat2' ||
					channel === 'energy' ||
					channel === 'AppParaHeartbeatReport' ||
					channel === 'AppShowHeartbeatReport' ||
					channel === 'BackendRecordHeartbeatReport' ||
					channel === 'BPInfo'
				) {
					let status = await adapter.getStateAsync(topic + '.info.status').catch((e) => {
						adapter.log.warn('did not get old value .info.status ->' + e);
					});
					if (status && status.val === 'offline') {
						await adapter.setStateAsync(topic + '.info.status', { val: 'online', ack: true });
						adapter.log.info('[EF] ' + topic + ' is online with cloud');
					}
					for (let state in payload[channel]) {
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
															stateObj[channel][type][state]['states']
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
											topic: adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
											payload: havalue
										});
									}
								} else {
									if (old.val !== value) {
										if (adapter.config.msgUpdateValuePstream) {
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
																stateObj[channel][type][state]['states']
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
													adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
												payload: havalue
											});
										}
										// some postprocessing here
										// i.e. minDsgCh +5% to an internal value for bpMin
										// i.e. splitting bits to get dcOn status
									} else {
										//even the same value switches get an update
										//strange behaviour on HA side, where the switch returns to previous position
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
								'[store stream] not processed ' +
									channel +
									' state : ' +
									state +
									'  value: ' +
									payload[channel][state]
							);
						}
					}
				} else if (channel === 'time_task_config_post') {
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
				} else if (channel == 'info') {
					//channel info is only received when offline, no need to check the content
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
			}
		} catch (error) {
			adapter.log.debug('store stream payload ' + error);
			adapter.log.debug('payload from ' + topic + ' was: ' + JSON.stringify(payload));
		}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}

async function storeStationPayload(adapter, stateDictObj, stateObj, topic, payload, haenable) {
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
				} else if (payload['data']['timeTask']) {
					//logging
					//totalTaskNum als Kennung für Stations (bei SHP1 nicht dabei)
					if (payload['data']['timeTask']['totalTaskNum']) {
						await adapter.setStateAsync(topic + '.timeTask.totalTaskNum', {
							val: payload['data']['timeTask']['totalTaskNum'],
							ack: true
						});
						let taskarr = payload['data']['timeTask']['taskCfgs'];
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
						channel === 'bms_kitInfo'
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
															stateObj[channel][type][state]['states']
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
																stateObj[channel][type][state]['states']
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
async function compareUpdate(adapter, stateDictObj, stateObj, haenable, topic, channel, state, val) {
	let haUpdate = [];
	if (stateDictObj[channel][state]) {
		if (stateDictObj[channel][state]['entity'] !== 'icon') {
			let value = convertData(stateDictObj, channel, state, val, stateObj);
			//adapter.log.debug('converted value ' + value);
			let old = await adapter.getStateAsync(topic + '.' + channel + '.' + state).catch((e) => {
				adapter.log.warn('did not get old value ' + topic + '.' + channel + '.' + state + ' ->' + e);
			});
			//adapter.log.debug('old ' + JSON.stringify(old));
			if (!old) {
				await adapter.setStateAsync(topic + '.' + channel + '.' + state, {
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
								havalue = stateObj[channel][type][state]['states'][val];
							} catch (error) {
								adapter.log.warn(
									'select problem ' + value + ' not in ' + stateObj[channel][type][state]['states']
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
						topic: adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
						payload: havalue
					});
				}
			} else {
				if (old.val !== value) {
					if (adapter.config.msgUpdateValuePstation) {
						adapter.log.debug(
							'station update ' + '.' + channel + '.' + state + ' ' + old.val + ' -> ' + value
						);
					}
					await adapter.setStateAsync(topic + '.' + channel + '.' + state, {
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
									havalue = stateObj[channel][type][state]['states'][val];
								} catch (error) {
									adapter.log.warn(
										'select problem ' +
											value +
											' not in ' +
											stateObj[channel][type][state]['states']
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
							topic: adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
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
							topic: adapter.config.haTopic + '/' + topic + '_' + channel + '/' + state,
							payload: havalue
						});
					}
				}
			}
		}
	} else {
		adapter.log.debug('[SHP comp] ' + topic + ' not processed ' + channel + ' state: ' + state + ' value ' + val);
	}
	return haUpdate;
}
async function storeSHELLYpayload(adapter, stateDictObj, stateObj, topic, payload, haenable) {
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
				adapter.log.debug('no params or data in SHP payload ->' + JSON.stringify(payload));
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
async function storeSHPpayload(adapter, stateDictObj, stateObj, topic, payload, haenable) {
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);

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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);

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
										val
									);
									haUpdate.concat(haupd);

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
										val
									);
									haUpdate.concat(haupd);

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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
										val
									);
									haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
								val
							);
							haUpdate.concat(haupd);
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
		for (const [ device, value ] of Object.entries(pdevices)) {
			const devtype = value['devType'];
			if (
				devtype === 'pstream600' ||
				devtype === 'pstream800' ||
				devtype === 'plug' ||
				devtype === 'deltaproultra'
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
		for (const [ device, value ] of Object.entries(pdevices)) {
			const devtype = value['devType'];
			if (
				devtype !== 'pstream600' &&
				devtype !== 'pstream800' &&
				devtype !== 'plug' &&
				devtype !== 'deltaproultra'
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

async function prepareStationCmd(adapter, serial, stationType, state, value, cmd) {
	adapter.log.debug(adapter, serial, stationType, state, value, cmd);
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
					default:
						// cfgChgType?? analog oder
						//all analog values
						msg['params'][cmd['valName']] = value;
						break;
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
						msg['params']['dcChgCfg2'] = curr.val * 1000;
					} else if (state === 'pv2DcChgCurrent') {
						const curr = await adapter.getStateAsync(serial + '.mppt.dcChgCurrent').catch((e) => {
							adapter.log.warn('did not get ' + serial + '.mppt.dcChgCurrent ->' + e);
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
					case 'newAcAutoOnCfg':
						msg['params'][cmd['valName']] = value ? 1 : 0;
						break;
					case 'dcChgCurrent':
					//case 'cfgDcChgCurrent':
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
					case 'latestQuotas':
						//no params to send
						break;
					default:
						msg['params'][cmd['valName']] = value;
						break;
				}
				msg['operateType'] = cmd['operateType'];
				msg['moduleType'] = cmd['moduleType'];
				return msg;
			} else if (stationType === 'panel') {
				let msg = {
					from: 'Android',
					lang: 'en-us',
					id: String(getRandomInt(100000000, 900000000)),
					operateType: 'TCP',
					version: '1.0'
				};
				msg['params'] = cmd['params'];
				msg['moduleSn'] = serial;

				let seconditem = '';
				let secondval;
				let secondid = '';
				let path = '';
				//mode or ctrSta
				if (state.includes('ctrlSta_') || state.includes('ctrlMode_')) {
					const parts = state.split('_');
					const channel = parts[1];
					if (parts[0] === 'ctrlSta') {
						seconditem = 'ctrlMode';
						secondid = 'ctrlMode'.concat('_', channel);
					} else if (parts[0] === 'ctrlMode') {
						seconditem = 'sta';
						secondid = 'ctrlSta'.concat('_', channel);
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
				if (
					state === 'forceChargeHigh' ||
					state === 'discLower' ||
					state.includes('ctrlSta_') ||
					state.includes('ctrlMode_')
				) {
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

				if (seconditem === 'sta') {
					state = 'ctrlSta';
				} else if (seconditem === 'ctrlMode') {
					state = 'ctrlMode';
				}
				switch (state) {
					case 'forceChargeHigh':
					case 'discLower':
						msg['params'][cmd['valName']] = value;
						//hier noch abfangen ob secondid und secondval vorhanden?
						msg['params'][cmd[secondid]] = secondval;
						break;
					case 'eps':
						msg['params'][cmd['valName']] = value ? 1 : 0;
						break;
					case 'ctrSta':
						msg['params'][cmd['valName']] = value;
						//hier noch abfangen ob secondid und secondval vorhanden?
						msg['params'][cmd[seconditem]] = secondval ? 1 : 0;
						break;
					case 'ctrMode':
						msg['params'][cmd['valName']] = value ? 1 : 0;
						//hier noch abfangen ob secondid und secondval vorhanden?
						msg['params'][cmd[seconditem]] = secondval;
						break;
					default:
						//now actions
						//no value to be set
						break;
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
async function prepareStreamCmd(adapter, serial, streamType, state, value, cmd) {
	if (state === 'latestQuotas') {
		adapter.log.debug('preparaing latestQuotas: ' + serial);
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

			adapter.log.debug(state + ' ' + value + ' send plug ' + JSON.stringify(muster));
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

			adapter.log.debug(state + ' ' + value + ' send deltaproultra ' + JSON.stringify(muster));
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
exports.storeSHELLYpayload = storeSHELLYpayload;
exports.storeSHPpayload = storeSHPpayload;
exports.createSubscribeTopics = createSubscribeTopics;
exports.getEcoFlowMqttCredits = getEcoFlowMqttCredits;
exports.prepareStreamCmd = prepareStreamCmd;
exports.prepareStationCmd = prepareStationCmd;
exports.statesFromDict = statesFromDict;
exports.getLastProtobufQuotas = getLastProtobufQuotas;
exports.getLastJSONQuotas = getLastJSONQuotas;
exports.getIdFromTopic = getIdFromTopic;
