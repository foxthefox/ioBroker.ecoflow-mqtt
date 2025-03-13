const deviceStates = {
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
    river3plus: {
        action: {
            latestQuotas: { entity: 'switch' }
        },
        info: {
            status: { entity: 'diagnostic' }
        }
    }
};

const deviceRanges = {
    river3plus: {}
};

const deviceCmd = {
    river3plus: {
        action: {
            latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
        }
    }
};

const protoMsg = {
    cmdId: {
        22: { cmdFunc: { 254: 'RuntimePropertyUpload' } },
        21: { cmdFunc: { 254: 'DisplayPropertyUpload' } },
        // 20: {},
        // 19: {},
        18: { cmdFunc: { 254: 'setReply_dp3' } },
        17: { cmdFunc: { 254: 'set_dp3' } },
        // 2: { cmdFunc: { 32: 'cmdFunc32_cmdId2_Report' } }
    }
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus

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
    }
}

const protoSource = `
syntax = "proto3";

enum STATISTICS_OBJECT {
  STATISTICS_OBJECT_START = 0;
  STATISTICS_OBJECT_DEV_WORK_TIME = 1;
  STATISTICS_OBJECT_AC_OUT_ENERGY = 2;
  STATISTICS_OBJECT_DC12V_OUT_ENERGY = 3;
  STATISTICS_OBJECT_TYPEC_OUT_ENERGY = 4;
  STATISTICS_OBJECT_USBA_OUT_ENERGY = 5;
  STATISTICS_OBJECT_AC_IN_ENERGY = 6;
  STATISTICS_OBJECT_PV_IN_ENERGY = 7;
  STATISTICS_OBJECT_AC_IN_0W_100W_TIME = 8;
  STATISTICS_OBJECT_AC_IN_OVER_100W_TIME = 9;
  STATISTICS_OBJECT_AC_OUT_0W_50W_TIME = 10;
  STATISTICS_OBJECT_AC_OUT_50W_100W_TIME = 11;
  STATISTICS_OBJECT_AC_OUT_100W_200W_TIME = 12;
  STATISTICS_OBJECT_AC_OUT_OVER_200W_TIME = 13;
  STATISTICS_OBJECT_AC_OUT_200W_300W_TIME = 14;
  STATISTICS_OBJECT_AC_OUT_300W_400W_TIME = 15;
  STATISTICS_OBJECT_AC_OUT_400W_500W_TIME = 16;
  STATISTICS_OBJECT_AC_OUT_OVER_500W_TIME = 17;
  STATISTICS_OBJECT_PV_IN_TIME = 18;
  STATISTICS_OBJECT_TYPEC_IN_TIME = 19;
  STATISTICS_OBJECT_DC_OUT_0W_60W_TIME = 20;
  STATISTICS_OBJECT_DC_OUT_OVER_60W_TIME = 21;
  STATISTICS_OBJECT_TYPEC_OUT_0W_30W_TIME = 22;
  STATISTICS_OBJECT_TYPEC_OUT_30W_60W_TIME = 23;
  STATISTICS_OBJECT_TYPEC_OUT_OVER_60W_TIME = 24;
  STATISTICS_OBJECT_USBA_OUT_TIME = 25;
  STATISTICS_OBJECT_LED_OUT_TIME = 26;
}

message StatisticsRecordItem {
  optional .STATISTICS_OBJECT statistics_object = 1;
  optional uint32 statistics_content = 2;
}

message DisplayStatisticsRecordList {
  repeated .StatisticsRecordItem list_info = 1;
}

message ErrcodeRecordItem {
  optional uint32 errcode = 1;
  optional uint32 errcode_timestamp = 2;
}

message ErrcodeRecordList {
  repeated .ErrcodeRecordItem list_info = 1;
}

message ResvInfo {
  repeated uint32 resv_info = 1;
}

mesage RuntimePropertyUpload {
   optional uint32 pcs_work_mode = 24;
   optional float temp_pcs_dc = 26;
   optional float temp_pcs_ac = 27;
   optional uint32 plug_in_info_ac_out_type = 59;
   optional uint32 plug_in_info_ac_out_freq = 60;
   optional float plug_in_info_ac_out_vol = 67;
   optional float plug_in_info_ac_in_vol = 68;
   optional float plug_in_info_bms_vol = 169;
   optional bool pd_mppt_comm_err = 172;
   optional bool pd_llc_comm_err = 173;
   optional bool pd_bms_comm_err = 174;
   optional bool pd_iot_comm_err = 175;
   optional uint32 pd_firm_ver = 176;
   optional uint32 iot_firm_ver = 177;
   optional uint32 mppt_firm_ver = 178;
   optional float plug_in_info_ac_in_amp = 223;
   optional float plug_in_info_ac_out_amp = 224;
   optional uint32 bms_firm_ver = 241;
   optional float bms_batt_vol = 244;
   optional float bms_batt_amp = 245;
   optional uint32 bms_bal_state = 246;
   optional uint32 bms_full_cap = 247;
   optional uint32 bms_remain_cap = 249;
   optional uint32 bms_alm_state = 250;
   optional uint32 bms_pro_state = 251;
   optional uint32 bms_flt_state = 252;
   optional uint32 bms_err_code = 253;
   optional uint32 bms_min_cell_vol = 256;
   optional uint32 bms_max_cell_vol = 257;
   optional float cms_batt_vol = 264;
   optional float cms_batt_amp = 265;
   optional float cms_chg_req_vol = 266;
   optional float cms_chg_req_amp = 267;
   optional uint32 bms_overload_icon = 276;
   optional uint32 bms_warn_icon = 277;
   optional uint32 bms_high_temp_icon = 278;
   optional uint32 bms_low_temp_icon = 279;
   optional uint32 bms_limit_icon = 280;
   optional uint32 bms_alm_state_2 = 291;
   optional uint32 bms_pro_state_2 = 292;
   optional int32 display_property_full_upload_period = 293;
   optional int32 display_property_incremental_upload_period = 294;
   optional int32 runtime_property_full_upload_period = 295;
   optional int32 runtime_property_incremental_upload_period = 296;
   optional float pv_vin_ref = 338;
   optional uint32 inv_main_fsmstate = 349;
   optional uint32 l1_main_fsmstate = 350;
   optional float dcdc_chg_req_cur = 376;
   optional float llc_recv_cms_chg_req_vol = 377;
   optional float temp_pv = 379;
   optional float plug_in_info_pv_vol = 380;
   optional float plug_in_info_pv_amp = 381;
   optional float plug_in_info_12v_vol = 382;
   optional float plug_in_info_12v_amp = 383;
   optional float llc_bat_vol = 384;
   optional float llc_bat_cur = 385;
   optional float llc_bus_vol = 386;
   optional float plug_in_info_dcp_vol = 443;
   optional float plug_in_info_dcp_amp = 448;
}

message DisplayPropertyUpload {
   optional uint32 errcode = 1;
   optional float pow_in_sum_w = 3;
   optional float pow_out_sum_w = 4;
   optional bool energy_backup_en = 7;
   optional uint32 energy_backup_start_soc = 8;
   optional float pow_get_qcusb1 = 9;
   optional float pow_get_qcusb2 = 10;
   optional float pow_get_typec1 = 11;
   optional float pow_get_typec2 = 12;
   optional uint32 flow_info_qcusb1 = 13;
   optional uint32 flow_info_qcusb2 = 14;
   optional uint32 flow_info_typec1 = 15;
   optional uint32 flow_info_typec2 = 16;
   optional uint32 dev_standby_time = 17;
   optional uint32 screen_off_time = 18;
   optional uint32 ac_standby_time = 19;
   optional bool ac_always_on_flag = 22;
   optional uint32 ac_always_on_mini_soc = 23;
   optional bool xboost_en = 25;
   optional uint32 pcs_fan_level = 30;
   optional uint32 flow_info_12v = 33;
   optional float pow_get_12v = 37;
   optional uint32 flow_info_ac2dc = 45;
   optional uint32 flow_info_dc2ac = 46;
   optional uint32 flow_info_ac_in = 47;
   optional float pow_get_ac = 53;
   optional float pow_get_ac_in = 54;
   optional uint32 plug_in_info_ac_in_flag = 61;
   optional uint32 plug_in_info_ac_in_feq = 62;
   optional bool dc_out_open = 74;
   optional float pow_get_dcp2 = 77;
   optional uint32 flow_info_dcp2_in = 78;
   optional uint32 flow_info_dcp2_out = 79;
   optional bool plug_in_info_dcp2_in_flag = 83;
   optional uint32 plug_in_info_dcp2_dsg_chg_type = 84;
   optional bool plug_in_info_dcp2_charger_flag = 85;
   optional uint32 plug_in_info_dcp2_type = 86;
   optional uint32 plug_in_info_dcp2_detail = 87;
   optional string plug_in_info_dcp2_sn = 88;
   optional uint32 plug_in_info_dcp2_run_state = 89;
   optional uint32 plug_in_info_dcp2_firm_ver = 90;
   optional .ResvInfo plug_in_info_dcp2_resv = 91;
   optional uint32 bms_err_code = 140;
   optional .ErrcodeRecordList err_code_record_list = 141;
   optional bool output_power_off_memory = 147;
   optional uint32 pv_chg_type = 148;
   optional uint32 flow_info_bms_dsg = 152;
   optional uint32 flow_info_bms_chg = 153;
   optional float pow_get_bms = 158;
   optional bool en_beep = 195;
   optional bool plug_in_info_ac_charger_flag = 202;
   optional uint32 plug_in_info_ac_in_chg_pow_max = 209;
   optional uint32 ac_out_freq = 211;
   optional uint32 dev_sleep_state = 212;
   optional uint32 pd_err_code = 213;
   optional uint32 mppt_err_code = 215;
   optional .SetTimeTaskWrite time_task_current = 219;
   optional uint32 llc_hv_lv_flag = 227;
   optional uint32 llc_inv_err_code = 232;
   optional uint32 plug_in_info_ac_out_dsg_pow_max = 238;
   optional float bms_batt_soc = 242;
   optional float bms_batt_soh = 243;
   optional uint32 bms_design_cap = 248;
   optional uint32 bms_dsg_rem_time = 254;
   optional uint32 bms_chg_rem_time = 255;
   optional int32 bms_min_cell_temp = 258;
   optional int32 bms_max_cell_temp = 259;
   optional int32 bms_min_mos_temp = 260;
   optional int32 bms_max_mos_temp = 261;
   optional float cms_batt_soc = 262;
   optional float cms_batt_soh = 263;
   optional uint32 cms_dsg_rem_time = 268;
   optional uint32 cms_chg_rem_time = 269;
   optional uint32 cms_max_chg_soc = 270;
   optional uint32 cms_min_dsg_soc = 271;
   optional uint32 cms_bms_run_state = 275;
   optional uint32 bms_chg_dsg_state = 281;
   optional uint32 cms_chg_dsg_state = 282;
   optional uint32 time_task_conflict_flag = 285;
   optional uint32 time_task_change_cnt = 286;
   optional bool ups_alram = 355;
   optional uint32 plug_in_info_pv_dc_amp_max = 356;
   optional uint32 led_mode = 357;
   optional uint32 low_power_alarm = 358;
   optional uint32 silence_chg_watt = 359;
   optional uint32 flow_info_pv = 360;
   optional float pow_get_pv = 361;
   optional bool plug_in_info_pv_flag = 362;
   optional uint32 plug_in_info_pv_type = 363;
   optional bool plug_in_info_pv_charger_flag = 364;
   optional uint32 plug_in_info_pv_chg_amp_max = 365;
   optional uint32 plug_in_info_pv_chg_vol_max = 366;
   optional uint32 flow_info_ac_out = 367;
   optional float pow_get_ac_out = 368;
   optional uint32 flow_info_dcp_in = 423;
   optional uint32 flow_info_dcp_out = 424;
   optional float pow_get_dcp = 425;
   optional bool plug_in_info_dcp_in_flag = 426;
   optional uint32 plug_in_info_dcp_type = 427;
   optional uint32 plug_in_info_dcp_detail = 428;
   optional uint32 plug_in_info_dcp_dsg_chg_type = 431;
   optional .ResvInfo plug_in_info_dcp_resv = 432;
   optional string plug_in_info_dcp_sn = 433;
   optional uint32 plug_in_info_dcp_firm_ver = 434;
   optional bool plug_in_info_dcp_charger_flag = 435;
   optional uint32 plug_in_info_dcp_run_state = 436;
   optional uint32 plug_in_info_dcp_err_code = 438;
   optional uint32 plug_in_info_dcp2_err_code = 439;
   optional uint32 plug_in_info_ac_in_chg_hal_pow_max = 458;
   optional .DisplayStatisticsRecordList display_statistics_sum = 463;
}


message set_dp3 {
    optional int32 cfgPowerOff = 3;
	optional uint32 cfg_utc_time = 6;
  	optional int32 cfg_utc_timezone = 7;
	optional int32 enBeep = 9;
    optional int32 acStandbyTime = 10;
    optional int32 dcStandbyTime = 11;
    optional int32 screenOffTime = 12;
	optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;


    optional int32 cfgDc12vOutOpen = 18;
    optional int32 xboostEn = 25;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;


	optional bool cfg_ac_out_open = 76;
	optional uint32 cfg_led_mode = 89;

}

message setReply_dp3 {
    optional int32 actionId = 1;
    optional bool configOk = 2; //bool
	optional uint32 cfg_utc_time = 6;
  	optional int32 cfg_utc_timezone = 7;
	optional int32 enBeep = 9;
    optional int32 acStandbyTime = 10;
    optional int32 dcStandbyTime = 11;
    optional int32 screenOffTime = 12;
	optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;

    optional int32 cfgDc12vOutOpen = 18;
    optional int32 xboostEn = 25;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;


	optional bool cfg_ac_out_open = 76;
	optional uint32 cfg_led_mode = 89;

}

message setMessage {
    setHeader header = 1;
 }
message setHeader {
    set_dp3 pdata = 1;
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
    prepareProtoCmd
};