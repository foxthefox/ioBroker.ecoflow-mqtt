const deviceStates = {
    RuntimePropertyUpload: {
        string: {
            displayPropertyFullUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Display Property Full Upload Period',
                role: 'info',
            },
            displayPropertyIncrementalUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Display Property Incremental Upload Period',
                role: 'info',
            },
            runtimePropertyFullUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Runtime Property Full Upload Period',
                role: 'info',
            },
            runtimePropertyIncrementalUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Runtime Property Incremental Upload Period',
                role: 'info',
            },
        },
    },
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
                role: 'value',
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
                icon: 'mdi:clock-start',
            },
            carBatVolt: {
                min: 10,
                max: 30,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Car battery voltage',
                role: 'value',
            },
            ratedPower: {
                min: 0,
                max: 800,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Alternator rated power',
                role: 'value',
            },
            alternatorPower: {
                min: 0,
                max: 900,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Alternator power',
                role: 'value',
            },
            wifiRssi: {
                min: -100,
                max: 10,
                unit_of_measurement: 'dBm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'signal_strength',
                name: 'Wifi RSSI',
                role: 'value',
            },
            temp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                name: 'Temperature',
                role: 'value',
            },
            batSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                name: 'Powerstation battery state of charge',
                role: 'value',
            },
            stationPower: {
                min: 0,
                max: 900,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Station Power',
                role: 'value',
            },
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
                role: 'level',
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
                role: 'level',
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
                role: 'level',
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
                    'reverse charge': 3,
                },
                states: {
                    1: 'charge',
                    2: 'battery maintenance',
                    3: 'reverse charge',
                },
                name: 'Operation mode',
                role: 'level',
            },
        },
        switch: {
            startStop: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'Start/Stop cmd',
                role: 'switch',
                startStop: { 0: 'off', 1: 'on' },
            },
            switchOFF130: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'Switch OFF cmd',
                role: 'switch',
                startStop: { 0: 'off', 1: 'on' },
            },
        },
        diagnostic: {
            status1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'X_status1',
                role: 'info',
                status1: { 0: 'no undervoltage', 32: 'undervoltage at conn. to car batt. ' },
            },
        },
        string: {
            unknown427: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'X_unknown427',
                role: 'info',
            },
            unknown428: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'X_unknown428',
                role: 'info',
            },
            unknown609: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'X_unknown609',
                role: 'info',
            },
        },
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

const deviceStatesDict = {
    RuntimePropertyUpload: {
        displayPropertyFullUploadPeriod: { entity: 'string' },
        displayPropertyIncrementalUploadPeriod: { entity: 'string' },
        runtimePropertyFullUploadPeriod: { entity: 'string' },
        runtimePropertyIncrementalUploadPeriod: { entity: 'string' },
    },
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
            unknown609: { entity: 'string' },
        },
        action: {
            latestQuotas: { entity: 'switch' },
        },
        info: {
            msgCount: { entity: 'number' },
            status: { entity: 'diagnostic' },
        },
    },
};

const deviceRanges = {
    alternator: {
        alternatorHeartbeat: {
            number: {
                stationPower: { max: 900 },
            },
        },
    },
};

const deviceCmd = {
    alternator: {
        alternatorHeartbeat: {
            switchOFF130: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #1
            cableLength608: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 6 } }, // #203
            startVoltage: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 4 } }, // #137
            operationMode: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #116
            startStop: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, // #122
            permanentWatts: { msg: { dest: 20, cmdFunc: 254, cmdId: 17, dataLen: 6 } }, // #123
        },
        action: {
            latestQuotas: { msg: { cmdFunc: 2, cmdId: 1, dataLen: 0 } }, //toCheckclear
        },
    },
};

const protoMsg = {
    cmdId: {
        22: { cmdFunc: { 254: 'RuntimePropertyUpload' } },
        21: { cmdFunc: { 254: 'alternatorHeartbeat' } },
        17: { cmdFunc: { 254: 'alternatorSet' } },
    },
};
/*
const alternator = {
	cmdFunc: {
		254: { cmdId: { 17: "alternatorSet", 21: "alternatorHeartbeat", 22:: 'RuntimePropertyUpload'  } },
	},
},
*/

const msgNameObj = {
    alternatorHeartbeat: { cmdId: 21, cmdFunc: 254 },
    RuntimePropertyUpload: { cmdId: 21, cmdFunc: 254 },
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
 * @param {object} payload - payload of MQTT telegram
 * @param {string} devtype - device type
 * @param {boolean} haenable -if HA is enabled
 * @param {boolean} logged - if logged
 */
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
                                    logged,
                                );
                                if (Object.keys(haupd).length !== 0) {
                                    haUpdate.push(haupd);
                                }
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

enum SP_CHARGER_CHG_MODE {
  SP_CHARGER_CHG_MODE_IDLE = 0;
  SP_CHARGER_CHG_MODE_DRIVING_CHG = 1;
  SP_CHARGER_CHG_MODE_BAT_MAINTENANCE = 2;
  SP_CHARGER_CHG_MODE_PARKING_CHG = 3;
}

enum SP_CHARGER_DRIVING_CHG_SETTING {
  DRIVING_CHG_SETTING_IDLE = 0;
  DRIVING_CHG_SETTING_12V_IN_24V_OUT = 1;
  DRIVING_CHG_SETTING_12V_IN_48V_OUT = 2;
  DRIVING_CHG_SETTING_24V_IN_48V_OUT = 3;
}

enum CAR_BATT_TYPE {
  CAR_BATT_IDLE = 0;
  CAR_BATT_12V_TYPE = 1;
  CAR_BATT_24V_TYPE = 2;
}

enum DEV_BATT_CHG_XT60_SETTING {
  DEV_BATT_CHG_XT60_IDLE = 0;
  DEV_BATT_CHG_XT60_EF_DELTA_SERIES = 1;
  DEV_BATT_CHG_XT60_EF_11V_TO_30V_SERIES = 2;
  DEV_BATT_CHG_XT60_EF_11V_TO_60V_SERIES = 3;
  DEV_BATT_CHG_XT60_OTHER_11V_TO_30V_SERIES = 4;
  DEV_BATT_CHG_XT60_OTHER_11V_TO_60V_SERIES = 5;
}

message DisplayPropertyUpload {
	optional uint32 errcode = 1; //optional int32 status1 =1;
	optional int32 cms_batt_temp = 102; //optional int32 temp = 102;
	optional float pow_get_dc_bidi = 105; //optional float alternatorPower = 105;
	optional bool dev_online_flag = 130; //optional int32 switchOFF130 = 130;
	optional uint32 sp_charger_car_batt_vol_setting = 138; //optional int32 startVoltage = 138; // *0.1
	optional float sp_charger_car_batt_vol = 139; //optional float carBatVolt = 139;
	optional float cms_batt_soc = 262; //optional float batSoc = 262;
	optional uint32 cms_dsg_rem_time = 268; //optional int32 chargeToFull268 = 268;
	optional uint32 cms_chg_rem_time = 269; //optional int32 unknown269 = 269;
	optional float pow_get_dcp = 425; //optional float stationPower = 425;
	optional uint32 plug_in_info_dcp_type = 427; //optional int32 unknown427 = 427;
	optional uint32 plug_in_info_dcp_detail = 428; //optional int32 unknown428 = 428;
	optional SP_CHARGER_CHG_MODE sp_charger_chg_mode = 581; //optional int32 operationMode = 581;
	optional bool sp_charger_chg_open = 597; //optional int32 startStop = 597;
	optional float sp_charger_chg_pow_limit = 598; //optional float permanentWatts = 598;
	optional float module_wifi_rssi = 602; //optional float wifiRssi = 602;
	optional float sp_charger_chg_pow_max = 603; //optional float ratedPower = 603;
	optional float sp_charger_extension_line_p_setting = 608; //optional float cableLength608 = 608;
	optional float sp_charger_extension_line_n_setting = 609; //optional float unknown609 = 609;
}

message DisplayPropertyUpload_full {
  optional bool dev_online_flag = 130;
  optional int32 utc_timezone = 133;
  optional uint32 errcode = 1;
  optional float cms_batt_soc = 262;
  optional uint32 cms_chg_dsg_state = 282;
  optional uint32 cms_dsg_rem_time = 268;
  optional uint32 cms_chg_rem_time = 269;
  optional int32 cms_batt_temp = 102;
  optional float pow_in_sum_w = 3;
  optional float pow_out_sum_w = 4;
  optional float pow_get_dcp = 425;
  optional float pow_get_dc_bidi = 105;
  optional bool plug_in_info_dc_bidi_flag = 106;
  optional bool plug_in_info_dcp_in_flag = 426;
  optional uint32 plug_in_info_dcp_type = 427;
  optional uint32 plug_in_info_dcp_detail = 428;
  optional string plug_in_info_dcp_sn = 433;
  optional uint32 plug_in_info_dcp_run_state = 436;
  optional SP_CHARGER_CHG_MODE sp_charger_chg_mode = 581;
  optional bool sp_charger_chg_open = 597;
  optional float sp_charger_chg_pow_limit = 598;
  optional float sp_charger_chg_pow_max = 603;
  optional uint32 sp_charger_run_state = 582;
  optional bool sp_charger_is_connect_car = 583;
  optional uint32 sp_charger_car_batt_vol_setting = 138;
  optional float sp_charger_car_batt_vol = 139;
  optional float sp_charger_extension_line_p_setting = 608;
  optional float sp_charger_extension_line_n_setting = 609;
  optional SP_CHARGER_DRIVING_CHG_SETTING sp_charger_driving_chg_setting = 610;
  optional float sp_charger_car_batt_chg_amp_limit = 624;
  optional float sp_charger_dev_batt_chg_amp_limit = 625;
  optional SpChargerDevBattChgXt60Setting sp_charger_dev_batt_chg_xt60_setting = 626;
  optional float sp_charger_car_batt_chg_amp_max = 723;
  optional float sp_charger_dev_batt_chg_amp_max = 725;
  optional bool sp_charger_car_batt_urgent_chg_switch = 726;
  optional uint32 sp_charger_car_batt_urgent_chg_state = 724;
  optional float module_bluetooth_snr = 599;
  optional float module_bluetooth_rssi = 600;
  optional float module_wifi_snr = 601;
  optional float module_wifi_rssi = 602;
}

message ConfigWrite {
  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;
  optional uint32 cfg_utc_time = 6;
  optional int32 cfg_utc_timezone = 7;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional SP_CHARGER_CHG_MODE cfg_sp_charger_chg_mode = 116;
  optional bool cfg_sp_charger_chg_open = 122;
  optional float cfg_sp_charger_chg_pow_limit = 123;
  optional uint32 cfg_sp_charger_car_batt_vol_setting = 137;
  optional float cfg_sp_charger_extension_line_p_setting = 203;
  optional float cfg_sp_charger_extension_line_n_setting = 204;
  optional SP_CHARGER_DRIVING_CHG_SETTING cfg_sp_charger_driving_chg_setting = 205;
  optional float cfg_sp_charger_car_batt_chg_amp_limit = 217;
  optional float cfg_sp_charger_dev_batt_chg_amp_limit = 218;
  optional SpChargerDevBattChgXt60Setting cfg_sp_charger_dev_batt_chg_xt60_setting = 219;
  optional bool cfg_sp_charger_car_batt_urgent_chg_switch = 221;
}

message ConfigWriteAck {
  optional uint32 action_id = 1;
  optional bool config_ok = 2;
  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;
  optional uint32 cfg_utc_time = 6;
  optional int32 cfg_utc_timezone = 7;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional SP_CHARGER_CHG_MODE cfg_sp_charger_chg_mode = 116;
  optional bool cfg_sp_charger_chg_open = 122;
  optional float cfg_sp_charger_chg_pow_limit = 123;
  optional uint32 cfg_sp_charger_car_batt_vol_setting = 137;
  optional float cfg_sp_charger_extension_line_p_setting = 203;
  optional float cfg_sp_charger_extension_line_n_setting = 204;
  optional SP_CHARGER_DRIVING_CHG_SETTING cfg_sp_charger_driving_chg_setting = 205;
  optional float cfg_sp_charger_car_batt_chg_amp_limit = 217;
  optional float cfg_sp_charger_dev_batt_chg_amp_limit = 218;
  optional SpChargerDevBattChgXt60Setting cfg_sp_charger_dev_batt_chg_xt60_setting = 219;
  optional bool cfg_sp_charger_car_batt_urgent_chg_switch = 221;
}

message ConfigRead {
  repeated uint32 action_id = 1;
}

message ConfigReadAck {
  optional uint32 cfg_utc_time = 6;
  optional int32 cfg_utc_timezone = 7;
}

message RuntimePropertyUpload {
  optional int32 display_property_full_upload_period = 293;
  optional int32 display_property_incremental_upload_period = 294;
  optional int32 runtime_property_full_upload_period = 295;
  optional int32 runtime_property_incremental_upload_period = 296;
  optional float plug_in_info_dc_bidi_vol = 103;
  optional float plug_in_info_dc_bidi_amp = 104;
  optional float plug_in_info_dcp_vol = 443;
  optional float plug_in_info_dcp_amp = 448;
}

message DevRequest {
  optional uint32 dev_utc_time = 1;
  optional float dev_utc_timezone = 2;
  optional bool require_property_upload_period = 3;
  optional bool require_time_service = 5;
}

message DevRequestAck {
  optional uint32 request_id = 1;
  optional uint32 require_ok = 2;
  optional PropertyUploadPeriod property_upload_period = 3;
}


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
 }

message setMessage {
    setHeader header = 1;
 }

message setHeader {
    optional alternatorSet pdata = 1;
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

    message sentalternatorHeartbeat {
        setHeader3 header = 1;
    }

    message sentRuntimePropertyUpload {
        setHeader4 header = 1;
    } 

 message setHeader4 {
    RuntimePropertyUpload pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader3 {
    alternatorHeartbeat pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
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
    prepareProtoCmd,
    msgNameObj,
};
