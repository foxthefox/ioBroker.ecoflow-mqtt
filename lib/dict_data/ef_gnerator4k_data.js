const deviceStates = {
    //new generator
    action: {
        switch: {
            latestQuotas: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'Get latest Quotas',
                payload_off: 'no trigger',
                payload_on: 'trigger',
                latestQuotas: { 0: 'no trigger', 1: 'trigger' },
            },
        },
    },
    info: {
        number: {
            msgCount: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'received MSG#',
                role: 'value',
            },
        },
        diagnostic: {
            status: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Status',
                role: 'info',
                status: { 0: 'offline', 1: 'online' },
            },
        },
    },
};

const deviceStatesDict = {};

const deviceCmd = {
    alternator: {
        DisplayPropertyUpload: {
            switchOFF130: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #1
            cableLength608: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 6 } }, // #203
            startVoltage: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 4 } }, // #137
            operationMode: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #116
            startStop: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #122
            permanentWatts: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 6 } }, // #123
        },
        action: {
            latestQuotas: { msg: { cmdFunc: 2, cmdId: 1, dataLen: 0 } }, //toCheck
        },
    },
};

const protoMsg = {
    cmdFunc: {
        254: { cmdId: { 17: 'ConfigWrite', 21: 'DisplayPropertyUpload' } },
    },
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate;
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus;
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus;

/**
 *
 * @param adapter - THIS transfer
 * @param {object} stateDictObj - dictionary of states
 * @param {object} stateObj - states definition
 * @param {string} topic - the TOPIC is the Serial#
 * @param {object} payloadarr - payload of MQTT telegram
 * @param {string} devtype - device type
 * @param {boolean} haenable -if HA is enabled
 * @param {boolean} logged - if logged
 */
async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payloadarr, devtype, haenable, logged) {
    let haUpdate = [];
    if (payloadarr) {
        if (stateDictObj) {
            if (stateObj) {
                for (let i = 0; i < payloadarr.length; i++) {
                    const payload = payloadarr[i];
                    for (let channel in payload) {
                        //other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
                        switch (channel) {
                            case 'DisplayPropertyUpload':
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
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                                break;
                            //set or set_reply
                            case 'ConfigWrite':
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
                                        'DisplayPropertyUpload',
                                        state,
                                        val,
                                        'DisplayPropertyUpload',
                                        logged,
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
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

/**
 * @param adapter - THIS transfer
 * @param {any} serial - serial# of device
 * @param {any} streamType - option to use
 * @param {string} state - the state reference, state name
 * @param {string | number | boolean} value - the value of the command
 * @param {object} cmd - cmd dictionary
 * @param {boolean} log - logging eneabled
 */
async function prepareProtoCmd(adapter, serial, streamType, state, value, cmd, log) {
    if (state === 'latestQuotas') {
        if (log === true) {
            adapter.log.debug(`preparaing latestQuotas: ${serial}`);
        }
        let muster = {
            header: {
                src: 32,
                dest: 32,
                seq: Date.now(),
                from: 'ios',
            },
        };
        const root = protobuf.parse(protoSource).root;
        const SetMessage = root.lookupType('setMessage');
        const message = SetMessage.create(muster);
        const messageBuffer = SetMessage.encode(message).finish();
        return messageBuffer;
    }
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
            deviceSn: serial,
        },
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
        adapter.log.debug(`[PROTOBUF encode] ${state} ${value} send stream ${JSON.stringify(muster)}`);
    }

    const root = protobuf.parse(protoSource).root;
    const SetMessage = root.lookupType('setMessage');
    const message = SetMessage.create(muster);
    const messageBuffer = SetMessage.encode(message).finish();
    return messageBuffer;
}

const protoSource = `
syntax = "proto3";

enum MODULE_TYPE {
  MODULE_TYPE_EF = 0;
}

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

enum PV_PLUG_INDEX {
  PV_PLUG_INDEX_RESV = 0;
  PV_PLUG_INDEX_1 = 1;
  PV_PLUG_INDEX_2 = 2;
}

enum PV_CHG_VOL_SPEC {
  PV_CHG_VOL_SPEC_RESV = 0;
  PV_CHG_VOL_SPEC_12V = 1;
  PV_CHG_VOL_SPEC_24V = 2;
  PV_CHG_VOL_SPEC_48V = 3;
}

enum TIME_TASK_MODE {
  TIME_TASK_MODE_RESV = 0;
  TIME_TASK_MODE_PER_WEEK = 1;
  TIME_TASK_MODE_ONCE = 2;
}

enum TIME_TASK_TYPE {
  TIME_TASK_TYPE_AC_CHG = 0;
  TIME_TASK_TYPE_AC_DSG = 1;
  TIME_TASK_TYPE_AC2_DSG = 2;
  TIME_TASK_TYPE_DC_CHG = 3;
  TIME_TASK_TYPE_DC2_CHG = 4;
  TIME_TASK_TYPE_DC_DSG = 5;
  TIME_TASK_TYPE_OIL_ON = 6;
  TIME_TASK_TYPE_OIL_OFF = 7;
  TIME_TASK_TYPE_USB_CHG = 8;
  TIME_TASK_TYPE_USB_DSG = 9;
}

enum TIME_TASK_DETAIL_TYPE {
  TIME_TASK_DETAIL_IDLE = 0;
  TIME_TASK_DETAIL_POW = 1;
  TIME_TASK_DETAIL_TEMP = 2;
  TIME_TASK_DETAIL_LEVEL = 3;
}

message EventPush {
  message LogItem {
    optional uint32 unix_time = 1;
    optional uint32 ms = 2;
    optional uint32 event_no = 3;
    repeated float event_detail = 4;
  }

  optional uint32 event_ver = 1;
  optional uint32 event_seq = 2;
  repeated EventPush.LogItem event_item = 3;
}

message EventAck {
  optional uint32 result = 1;
  optional uint32 event_seq = 2;
  optional uint32 event_item_num = 3;
}

message ReqTouStrategy {
  optional uint32 req_state = 1;
}

message ResvInfo {
  repeated uint32 resv_info = 1;
}

message PropertyUploadPeriod {
  optional int32 display_property_full_upload_period = 1;
  optional int32 display_property_incremental_upload_period = 2;
  optional int32 runtime_property_full_upload_period = 3;
  optional int32 runtime_property_incremental_upload_period = 4;
}

message TimeTaskItemV2 {
  optional uint32 task_index = 1;
  optional bool is_cfg = 2;
  optional bool is_enable = 3;
  optional uint32 conflict_flag = 4;
  optional TIME_TASK_MODE time_mode = 5;
  optional uint32 time_param = 6;
  optional uint32 time_table = 7;
  optional TIME_TASK_TYPE task_type = 8;
  optional uint32 task_param = 9;
  repeated TimeTaskParamDetail task_param_detail = 10;
}

message TimeTaskItemV2List {
  repeated TimeTaskItemV2 time_task = 1;
}

message TimeTaskParamDetail {
  optional TIME_TASK_DETAIL_TYPE type = 1;
  optional float val = 2;
}

message ConfigWrite {
  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;
  optional uint32 cfg_utc_time = 6;
  optional int32 cfg_utc_timezone = 7;
  optional bool cfg_beep_en = 9;
  optional uint32 cfg_screen_off_time = 12;
  optional uint32 cfg_dev_standby_time = 13;
  optional uint32 cfg_ac_out_freq = 17;
  optional bool cfg_xboost_en = 25;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional bool cfg_ac_out_open = 76;
  optional uint32 cfg_generator_perf_mode = 77;
  optional uint32 cfg_generator_engine_open = 78;
  optional uint32 cfg_generator_out_pow_max = 79;
  optional uint32 cfg_generator_ac_out_pow_max = 80;
  optional uint32 cfg_generator_dc_out_pow_max = 81;
  optional bool cfg_generator_self_on = 82;
  optional bool reset_generator_maintence_state = 83;
  optional uint32 cfg_fuels_liquefied_gas_type = 84;
  optional uint32 cfg_fuels_liquefied_gas_uint = 85;
  optional float cfg_fuels_liquefied_gas_val = 86;
  optional TimeTaskItemV2 cfg_time_task_v2_item = 127;
  optional uint32 active_selected_time_task_v2 = 128;
  optional bool cfg_generator_low_power_en = 130;
  optional uint32 cfg_generator_low_power_threshold = 131;
  optional bool cfg_generator_lpg_monitor_en = 132;
  optional uint32 cfg_fuels_liquefied_gas_lpg_uint = 133;
  optional uint32 cfg_fuels_liquefied_gas_lng_uint = 134;
}

message ConfigWriteAck {
  optional uint32 action_id = 1;
  optional bool config_ok = 2;
  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;
  optional uint32 cfg_utc_time = 6;
  optional int32 cfg_utc_timezone = 7;
  optional bool cfg_beep_en = 9;
  optional uint32 cfg_screen_off_time = 12;
  optional uint32 cfg_dev_standby_time = 13;
  optional uint32 cfg_ac_out_freq = 17;
  optional bool cfg_xboost_en = 25;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional bool cfg_ac_out_open = 76;
  optional uint32 cfg_generator_perf_mode = 77;
  optional uint32 cfg_generator_engine_open = 78;
  optional uint32 cfg_generator_out_pow_max = 79;
  optional uint32 cfg_generator_ac_out_pow_max = 80;
  optional uint32 cfg_generator_dc_out_pow_max = 81;
  optional bool cfg_generator_self_on = 82;
  optional bool reset_generator_maintence_state = 83;
  optional uint32 cfg_fuels_liquefied_gas_type = 84;
  optional uint32 cfg_fuels_liquefied_gas_uint = 85;
  optional float cfg_fuels_liquefied_gas_val = 86;
  optional TimeTaskItemV2 cfg_time_task_v2_item = 127;
  optional uint32 active_selected_time_task_v2 = 128;
  optional bool cfg_generator_low_power_en = 130;
  optional uint32 cfg_generator_low_power_threshold = 131;
  optional bool cfg_generator_lpg_monitor_en = 132;
  optional uint32 cfg_fuels_liquefied_gas_lpg_uint = 133;
  optional uint32 cfg_fuels_liquefied_gas_lng_uint = 134;
}

message ConfigRead {
  repeated uint32 action_id = 1;
}

message ConfigReadAck {
  optional uint32 cfg_utc_time = 6;
  optional int32 cfg_utc_timezone = 7;
  optional TimeTaskItemV2List read_time_task_v2_list = 129;
}

message DisplayPropertyUpload {
  optional uint32 errcode = 1;
  optional uint32 sys_status = 2;
  optional float cms_batt_soc = 262;
  optional uint32 cms_dsg_rem_time = 268;
  optional uint32 cms_chg_rem_time = 269;
  optional bool en_beep = 195;
  optional bool ac_out_open = 298;
  optional uint32 dev_standby_time = 17;
  optional uint32 screen_off_time = 18;
  optional uint32 ac_out_freq = 211;
  optional bool xboost_en = 25;
  optional TimeTaskItemV2 current_time_task_v2_item = 126;
  optional uint32 time_task_conflict_flag = 285;
  optional uint32 time_task_change_cnt = 286;
  optional bool cms_oil_self_start = 274;
  optional float pow_in_sum_w = 3;
  optional float pow_out_sum_w = 4;
  optional float pow_get_ac = 53;
  optional float pow_get_dc = 297;
  optional uint32 plug_in_info_ac_out_dsg_pow_max = 238;
  optional bool plug_in_info_dcp_in_flag = 426;
  optional uint32 plug_in_info_dcp_dsg_chg_type = 431;
  optional bool plug_in_info_dcp_charger_flag = 435;
  optional uint32 plug_in_info_dcp_type = 427;
  optional uint32 plug_in_info_dcp_detail = 428;
  optional string plug_in_info_dcp_sn = 433;
  optional uint32 plug_in_info_dcp_run_state = 436;
  optional uint32 plug_in_info_dcp_firm_ver = 434;
  optional ResvInfo plug_in_info_dcp_resv = 432;
  optional uint32 pd_err_code = 213;
  optional uint32 generator_fuels_type = 299;
  optional uint32 generator_remain_time = 300;
  optional uint32 generator_run_time = 301;
  optional uint32 generator_total_output = 302;
  optional uint32 generator_abnormal_state = 303;
  optional uint32 fuels_oil_val = 304;
  optional uint32 fuels_liquefied_gas_type = 305;
  optional uint32 fuels_liquefied_gas_uint = 306;
  optional float fuels_liquefied_gas_val = 307;
  optional float fuels_liquefied_gas_consume_per_hour = 308;
  optional uint32 fuels_liquefied_gas_remain_val = 309;
  optional uint32 fuels_liquefied_gas_lpg_uint = 131;
  optional uint32 fuels_liquefied_gas_lng_uint = 132;
  optional uint32 generator_perf_mode = 310;
  optional uint32 generator_engine_open = 311;
  optional bool generator_low_power_en = 127;
  optional uint32 generator_low_power_threshold = 128;
  optional bool generator_lpg_monitor_en = 129;
  optional uint32 generator_out_pow_max = 312;
  optional uint32 generator_ac_out_pow_max = 313;
  optional uint32 generator_dc_out_pow_max = 314;
  optional int32 generator_sub_battery_temp = 315;
  optional uint32 generator_sub_battery_soc = 316;
  optional uint32 generator_sub_battery_state = 317;
  optional bool generator_maintence_state = 319;
  optional uint32 generator_pcs_err_code = 330;
  optional uint32 generator_conn_dev_errcode = 123;
}

message RuntimePropertyUpload {
  optional int32 display_property_full_upload_period = 293;
  optional int32 display_property_incremental_upload_period = 294;
  optional int32 runtime_property_full_upload_period = 295;
  optional int32 runtime_property_incremental_upload_period = 296;
  optional float plug_in_info_ac_out_vol = 67;
  optional float plug_in_info_ac_out_amp = 224;
  optional float plug_in_info_dcp_vol = 443;
  optional float plug_in_info_dcp_amp = 448;
  optional uint32 pd_firm_ver = 176;
  optional float temp_pcs_dc = 26;
  optional float temp_pcs_ac = 27;
  optional uint32 generator_run_state = 320;
  optional uint32 generator_oil_val_real = 321;
  optional int32 generator_engine_spd = 322;
  optional uint32 generator_engine_oil_val = 323;
  optional uint32 generator_engine_activation_cnt = 324;
  optional int32 generator_engine_head_temp = 325;
  optional uint32 generator_sub_battery_vol = 326;
  optional int32 generator_sub_battery_amp = 327;
  optional uint32 generator_commc_cnt_ems_to_psdr = 328;
  optional uint32 generator_commc_cnt_psdr_to_ems = 329;
  optional uint32 generator_pcs_fan_level = 331;
  optional float generator_pcs_bus_vol = 332;
  optional float generator_pcs_bus_amp = 333;
  optional int32 generator_pcs_temp1 = 334;
  optional int32 generator_pcs_temp2 = 335;
  optional uint32 generator_pcs_fules_type = 336;
}

message DevRequest {
  optional uint32 dev_utc_time = 1;
  optional float dev_utc_timezone = 2;
  optional bool require_property_upload_period = 3;
  optional ReqTouStrategy require_tou_strategy = 4;
  optional bool require_time_service = 5;
}

message DevRequestAck {
  optional uint32 request_id = 1;
  optional uint32 require_ok = 2;
  optional PropertyUploadPeriod property_upload_period = 3;
}

message setMessage {
    setHeader header = 1;
 }

message setHeader {
    optional ConfigWrite pdata = 1;
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
    deviceCmd,
    protoMsg,
    protoSource,
    storeProtoPayload,
    prepareProtoCmd,
};
