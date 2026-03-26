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
    DisplayPropertyUpload: {
        diagnostic: {
            errcode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Global error code',
                errcode: {
                    0: 'OK?',
                },
            },
            cmsChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charging/Discharging status',
                role: 'info',
                cmsChgDsgState: { 0: 'not charging or discharging', 1: 'discharging', 2: 'charging' },
            },
            sysStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'System status',
                role: 'info',
                sysStatus: { 0: 'device off', 1: 'device on', 2: 'device standby' },
            },
        },
        string: {
            moduleWifiRssi: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wi-Fi signal intensity',
            },
        },
        array: {
            devErrcodeList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'dev Errcode List',
            },
        },
        number: {
            powInSumW: {
                min: -400,
                max: 400,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Total input power',
                subrole: 'number',
            },
            powOutSumW: {
                min: -400,
                max: 400,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Total output power',
                subrole: 'number',
            },
            cmsBattSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Overall SOC',
                subrole: 'number',
            },
            cmsBattSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Overall SOH',
                subrole: 'number',
            },
            cmsDsgRemTime: {
                min: 0,
                max: 15999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining discharging time',
                subrole: 'number',
            },
            cmsChgRemTime: {
                min: 0,
                max: 15999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining charging time',
                subrole: 'number',
            },
            usbC1power: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 1 port',
                subrole: 'number',
            },
            usbC1voltage: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 1 port',
                subrole: 'number',
            },
            usbC1current: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 1 port',
                subrole: 'number',
            },
            usbC2power: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 2 port',
                subrole: 'number',
            },
            usbC2voltage: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 2 port',
                subrole: 'number',
            },
            usbC2current: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 2 port',
                subrole: 'number',
            },
            usbC3power: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 3 port',
                subrole: 'number',
            },
            usbC3voltage: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 3 port',
                subrole: 'number',
            },
            usbC3current: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 3 port',
                subrole: 'number',
            },
            usbC4power: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 4 port',
                subrole: 'number',
            },
            usbC4voltage: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 4 port',
                subrole: 'number',
            },
            usbC4current: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 4 port',
                subrole: 'number',
            },
            usbApower: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB A port',
                subrole: 'number',
            },
            usbAvoltage: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB A port',
                subrole: 'number',
            },
            usbAcurrent: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB A port',
                subrole: 'number',
            },
            pogoPinpower: {
                min: -350,
                max: 350,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the pogoPin',
                subrole: 'number',
            },
            pogoPinvoltage: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the pogoPin',
                subrole: 'number',
            },
            pogoPincurrent: {
                min: -20,
                max: 20,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the pogoPin',
                subrole: 'number',
            },
        },
        level: {
            lcdLight: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 0.390625,
                step: 1,
                entity_type: 'number',
                //device_class: 'brightness',
                name: 'Screen brightness',
                role: 'level',
                subrole: 'number',
            },
            screenOffTime: {
                min: 0,
                max: 1800,
                unit_of_measurement: 's',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'duration',
                name: 'Screen timeout (s)',
                role: 'level',
                subrole: 'timer',
                select: ['Never', '10 s', '30 s', '1 min', '5 min', '30 min'],
                select_obj: { Never: 0, '10 s': 10, '30 s': 30, '1 min': 60, '5 min': 300, '30 min': 1800 },
                states: { 0: 'Never', 10: '10 s', 30: '30 s', 60: '1 min', 300: '5 min', 1800: '30 min' },
            },
            cmsMaxChgSoc: {
                min: 50,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'Charge limit',
                role: 'level',
            },
            cmsMinDsgSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'Discharge limit',
                role: 'level',
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
    rapidpro320: {
        RuntimePropertyUpload: {
            displayPropertyFullUploadPeriod: { entity: 'string' },
            displayPropertyIncrementalUploadPeriod: { entity: 'string' },
            runtimePropertyFullUploadPeriod: { entity: 'string' },
            runtimePropertyIncrementalUploadPeriod: { entity: 'string' },
        },
        DisplayPropertyUpload: {
            errcode: { entity: 'diagnostic' },
            sysStatus: { entity: 'diagnostic' },
            powInSumW: { entity: 'number' },
            powOutSumW: { entity: 'number' },
            lcdLight: { entity: 'level' },
            screenOffTime: { entity: 'level' },
            cmsBattSoc: { entity: 'number' },
            cmsBattSoh: { entity: 'number' },
            cmsDsgRemTime: { entity: 'number' },
            cmsChgRemTime: { entity: 'number' },
            cmsMaxChgSoc: { entity: 'level' },
            cmsMinDsgSoc: { entity: 'level' },
            cmsChgDsgState: { entity: 'diagnostic' },
            moduleWifiRssi: { entity: 'string' },
            devErrcodeList: { entity: 'array' },
            usbApower: { entity: 'number' },
            usbAvoltage: { entity: 'number' },
            usbAcurrent: { entity: 'number' },
            usbC1power: { entity: 'number' },
            usbC1voltage: { entity: 'number' },
            usbC1current: { entity: 'number' },
            usbC2power: { entity: 'number' },
            usbC2voltage: { entity: 'number' },
            usbC2current: { entity: 'number' },
            usbC3power: { entity: 'number' },
            usbC3voltage: { entity: 'number' },
            usbC3current: { entity: 'number' },
            usbC4power: { entity: 'number' },
            usbC4voltage: { entity: 'number' },
            usbC4current: { entity: 'number' },
            pogoPinpower: { entity: 'number' },
            pogoPinvoltage: { entity: 'number' },
            pogoPincurrent: { entity: 'number' },
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

const deviceCmd = {
    rapidpro320: {
        DisplayPropertyUpload: {
            lcdLight: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 2 } },
            screenOffTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMaxChgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMinDsgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
        },
        action: {
            latestQuotas: { msg: { cmdFunc: 2, cmdId: 1, dataLen: 0 } },
        },
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
                            case 'RuntimePropertyUpload':
                            case 'DisplayPropertyUpload':
                                // all cases without nested states
                                await setOnlineStatus(adapter, topic);
                                for (let state in payload[channel]) {
                                    let val;
                                    let haupd;
                                    switch (state) {
                                        case 'usbC1':
                                        case 'usbC2':
                                        case 'usbC3':
                                        case 'usbC4':
                                        case 'usbA':
                                        case 'pogoPin':
                                            for (let item in payload[channel][state]) {
                                                val = payload[channel][state][item];
                                                haupd = await compareUpdate(
                                                    adapter,
                                                    stateDictObj,
                                                    stateObj,
                                                    haenable,
                                                    topic,
                                                    channel,
                                                    state.concat(item),
                                                    val,
                                                    channel,
                                                    logged,
                                                );
                                                if (Object.keys(haupd).length !== 0) {
                                                    haUpdate.push(haupd);
                                                }
                                            }
                                            break;
                                        default:
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
                                            break;
                                    }
                                }
                                break;
                            case 'ConfigRead':
                            case 'ConfigReadAck':
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
    const timestamp = Math.floor(Date.now() / 1000);
    // encryption is set but is actually not done, if needed then to find a way to only encrypt pdata

    switch (state) {
        case 'relay2Onoff':
        case 'relay3Onoff':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = value ? 1 : 0;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 9;
            break;
        case 'cmsMinDsgSoc':
            {
                const cmsMaxChgSoc = await adapter
                    .getStateAsync(`${serial}.DisplayPropertyUpload.cmsMaxChgSoc`)
                    .catch(e => {
                        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMaxChgSoc ->${e}`);
                    });
                muster['header']['pdata'] = {};
                muster['header']['pdata']['cfgUtcTime'] = timestamp;
                muster['header']['pdata']['cmsMaxChgSoc'] = parseInt(cmsMaxChgSoc.val); //int
                muster['header']['pdata'][state] = parseInt(value); //int
                muster['header']['dataLen'] = 12;
            }
            break;
        case 'cmsMaxChgSoc':
            {
                const cmsMinDsgSoc = await adapter
                    .getStateAsync(`${serial}.DisplayPropertyUpload.cmsMinDsgSoc`)
                    .catch(e => {
                        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMinDsgSoc ->${e}`);
                    });
                muster['header']['pdata'] = {};
                muster['header']['pdata']['cfgUtcTime'] = timestamp;
                muster['header']['pdata'][state] = parseInt(value); //int
                muster['header']['pdata']['cmsMinDsgSoc'] = parseInt(cmsMinDsgSoc.val); //int
                muster['header']['dataLen'] = 12;
            }
            break;

        default:
            muster = null;
            adapter.log.debug('command not recognized');
            break;
    }
    if (log) {
        adapter.log.debug(`[PROTOBUF encode] ${state} ${value} send stream ${JSON.stringify(muster)}`);
    }
    if (muster) {
        const root = protobuf.parse(protoSource).root;
        const SetMessage = root.lookupType('setMessage');
        const message = SetMessage.create(muster);
        const messageBuffer = SetMessage.encode(message).finish();
        return messageBuffer;
    }
    return null;
}

const protoMsg = {
    cmdFunc: {
        254: {
            cmdId: {
                17: 'ConfigWrite',
                21: 'DisplayPropertyUpload',
                22: 'RuntimePropertyUpload',
            },
        },
    },
};

const msgNameObj = {
    DisplayPropertyUpload: { cmdId: 21, cmdFunc: 254 },
    RuntimePropertyUpload: { cmdId: 22, cmdFunc: 254 },
};

const protoSource = `
syntax = 'proto3';

message DevErrcodeList {
  repeated uint32 dev_errcode = 1;
}

message LoadDetails {
    optional float power = 1;
    optional float voltage = 2;
    optional float current = 3;
}

message DisplayPropertyUpload {
    optional uint32 errcode = 1;
    optional uint32 sys_status = 2;
    optional float pow_in_sum_w = 3;
    optional float pow_out_sum_w = 4;
    optional uint32 lcd_light = 5;
    optional uint32 screen_off_time = 18;
    optional uint32 uint102 = 102;
    optional int32 utc_timezone = 133;
    optional string utc_timezone_id = 134;
    optional bool utc_set_mode = 135;
    optional float cms_batt_soc = 262;
    optional float cms_batt_soh = 263;
    optional uint32 cms_dsg_rem_time = 268;
    optional uint32 cms_chg_rem_time = 269;
    optional uint32 cms_max_chg_soc = 270;
    optional uint32 cms_min_dsg_soc = 271;
    optional uint32 cms_chg_dsg_state = 282;
    optional uint32 uint287 = 287;
    optional uint32 uint288 = 288;
    optional uint32 uint289 = 289;
    optional float module_wifi_rssi = 602;
    optional DevErrcodeList dev_errcode_list = 627;
    //770 Error
    optional uint32 uint822 = 822;
    optional uint32 uint823 = 823;
    //824 sub
    optional uint32 uint825 = 825;
    optional uint32 uint826 = 826;
    optional uint32 uint827 = 827;
    //829 sub
    optional uint32 uint835 = 835; // switch usbc1?
    optional uint32 uint836 = 836; // switch usbc2?
    optional uint32 uint837 = 837; // switch usbc3?
    optional uint32 uint838 = 838; // switch usbc4?
    optional uint32 uint839 = 839; // switch usba?
    optional uint32 uint841 = 841; // switch pogopin?
    optional float float843 = 843;
    optional float float844 = 844;
    optional float float846 = 846;
    optional float float847 = 847;
    optional uint32 uint848 = 848; // fast charge?
    optional uint32 uint849 = 849; // mode?
    optional uint32 uint850 = 850; // mode?
    optional LoadDetails usb_a = 852;
    optional LoadDetails pogo_pin = 853;
    optional LoadDetails usb_c1 = 854;
    optional LoadDetails usb_c2 = 855;
    optional LoadDetails usb_c3 = 856;
    optional LoadDetails usb_c4 = 857;
    optional uint32 uint1249 = 1249; // mode?
    optional uint32 uint1250 = 1250; // mode?
    optional uint32 uint1251 = 1251; // mode?
    optional uint32 uint1252 = 1252; // mode?
    optional int32  int1259 = 1259; 
    optional uint32 uint1262 = 1262;
    optional uint32 uint1263 = 1263;
    optional uint32 uint1274 = 1274;
    optional uint32 uint1275 = 1275;
    optional float float1640 = 1640;
    optional uint32 uint1645 = 1645;
}


message RuntimePropertyUpload {
   optional int32 display_property_full_upload_period = 293;
   optional int32 display_property_incremental_upload_period = 294;
   optional int32 runtime_property_full_upload_period = 295;
   optional int32 runtime_property_incremental_upload_period = 296;
}

message ConfigWrite {
    optional uint32 cfgUtcTime = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 screenOffTime = 12;
    optional int32 lcdLight = 14;
    optional uint32 cms_max_chg_soc = 33;
    optional uint32 cms_min_dsg_soc = 34;
    optional string cfg_utc_timezone_id = 135;
    optional bool cfg_utc_set_mode = 136;
    optional bool set176 = 176;
    optional bool set177 = 177;
    optional bool set178 = 178;
    optional bool set556 = 556;
}

message setMessage {
    setHeader header = 1;
}

message setHeader {
    ConfigWrite pdata = 1;
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

    message sentDisplayPropertyUpload {
        setHeader1 header = 1;
    }

    message sentRuntimePropertyUpload {
        setHeader2 header = 1;
    } 

 message setHeader2 {
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

 message setHeader1 {
    DisplayPropertyUpload pdata = 1;
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
    deviceCmd,
    protoMsg,
    protoSource,
    storeProtoPayload,
    prepareProtoCmd,
    msgNameObj,
};
