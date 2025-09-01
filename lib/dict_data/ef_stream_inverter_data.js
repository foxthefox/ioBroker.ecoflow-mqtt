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
        number: {
            powGetPv2: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv2',
                subrole: 'number',
            },
            plugInInfoPv2Amp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv2 current',
                subrole: 'number',
            },
            utcTimezone: {
                min: -1200,
                max: 1200,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'utc timezone',
                subrole: 'number',
            },
            powGetPv: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv',
                subrole: 'number',
            },
            invNtcTemp3: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'inv Ntc Temp 3',
                subrole: 'number',
            },
            plugInInfoPvVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv1 vol',
                subrole: 'number',
            },
            plugInInfoPvAmp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv1 current',
                subrole: 'number',
            },
            plugInInfoPv2Vol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv2 vol',
                subrole: 'number',
            },
            feedGridModePowLimit: {
                min: 0,
                max: 1500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'feed Grid Mode Pow Limit',
                subrole: 'number',
            },
            gridConnectionVol: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'grid Connection Vol',
                subrole: 'number',
            },
            gridConnectionFreq: {
                min: 0,
                max: 62,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'grid connection freq',
                subrole: 'number',
            },
            gridConnectionPower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Grid Connection Power',
                subrole: 'number',
            },
            feedGridModePowMax: {
                min: 0,
                max: 1500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'feed Grid Mode Pow Max',
                subrole: 'number',
            },
            gridConnectionAmp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'grid connection amp',
                subrole: 'number',
            },
            gridConnectionReactivePower: {
                min: 0,
                max: 1200,
                unit_of_measurement: 'var',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Grid Connection Reactive Power',
                subrole: 'number',
            },
            invTargetPwr: {
                min: 0,
                max: 1200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'inv target pwr',
                subrole: 'number',
            },
            gridConnectionPowerFactor: {
                min: -1,
                max: 1,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power_factor',
                role: 'value',
                name: 'grid connection power factor',
                subrole: 'number',
            },
            gridConnectionPowerFactorSetting: {
                min: -1,
                max: 1,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power_factor',
                role: 'value',
                name: 'grid connection power factor setting',
                subrole: 'number',
            },
        },
        string: {
            utcTimezoneId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc timezone id',
                role: 'info',
            },
            moduleWifiRssi: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wi-Fi signal intensity',
            },
            townCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'town code',
                role: 'info',
            },
            gridCodeVersion: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'grid Code Version',
            },
            countryCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'country code',
            },
        },
        diagnostic: {
            utcSetMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc set mode',
                role: 'info',
                utcSetMode: { 0: 'OK?' },
            },
            gridConnectionSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'grid Connection Sta',
                role: 'info',
                gridConnectionSta: { 0: 'GRD_STA_NO_VALID', 1: 'GRID_IN', 2: 'GRID_NOT_ONLINE', 3: 'FEED_GRID' },
            },
            gridCodeSelection: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'grid Code Selection',
                role: 'info',
                gridCodeSelection: {
                    0: 'NULL',
                    1: 'AUSTRIA',
                    2: 'SWITZER',
                    3: 'POLAND',
                    4: 'NETHERLANDS',
                    5: 'VDE_4105',
                    6: 'IEEE_1547',
                    7: 'USER_DEFINED',
                    8: 'NORWAY',
                    9: 'CZECH_REPUBLIC',
                    10: 'DENMARK',
                    11: 'IRELAND',
                    12: 'SWEDEN',
                    13: 'LATVIA',
                    14: 'GREECE_A',
                    15: 'GREECE_B',
                    16: 'PORTUGAL',
                    17: 'ROMANIA',
                    18: 'LITHUANIA',
                    19: 'HUNGARY',
                    20: 'ITALY',
                    21: 'G98',
                    22: 'G99',
                    23: 'NTS_631',
                    24: 'UNE_217001',
                    25: 'UNE_217002',
                    26: 'UTE_MAINLAND',
                    27: 'UTE_50HZ_ISLAND',
                    28: 'UTE_60HZ_ISLAND',
                    29: 'BELGIUM',
                    30: 'UKRAINE',
                    31: 'SLOVENIA',
                    32: 'BULGARIA',
                    33: 'EU_GENERAL',
                    1001: 'NORTH_AMERICA',
                },
            },
            factoryModeEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'factory mode enable',
                role: 'info',
                factoryModeEnable: { 0: 'disabled?', 1: 'enabled?' },
            },
            debugModeEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'debug mode enable',
                role: 'info',
                debugModeEnable: { 0: 'disabled?', 1: 'enabled?' },
            },
        },
        array: {
            devErrcodeList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'dev Errcode List',
            },
            gridCurtailmentSignal: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'grid curtailment signal',
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
                name: 'Cloud Connection Status',
                role: 'info',
                status: { '-2': 'offline', 0: 'offline', 1: 'online' },
            },
        },
    },
};

const deviceStatesDict = {
    stream_inverter: {
        RuntimePropertyUpload: {
            displayPropertyFullUploadPeriod: { entity: 'string' },
            displayPropertyIncrementalUploadPeriod: { entity: 'string' },
            runtimePropertyFullUploadPeriod: { entity: 'string' },
            runtimePropertyIncrementalUploadPeriod: { entity: 'string' },
        },
        DisplayPropertyUpload: {
            powGetPv2: { entity: 'number' },
            plugInInfoPv2Amp: { entity: 'number' },
            utcTimezone: { entity: 'number' },
            utcTimezoneId: { entity: 'string' },
            utcSetMode: { entity: 'diagnostic' },
            powGetPv: { entity: 'number' },
            invNtcTemp3: { entity: 'number' },
            plugInInfoPvVol: { entity: 'number' },
            plugInInfoPvAmp: { entity: 'number' },
            plugInInfoPv2Vol: { entity: 'number' },
            feedGridModePowLimit: { entity: 'number' },
            moduleWifiRssi: { entity: 'string' },
            gridConnectionVol: { entity: 'number' },
            gridConnectionFreq: { entity: 'number' },
            gridConnectionPower: { entity: 'number' },
            gridConnectionSta: { entity: 'diagnostic' },
            devErrcodeList: { entity: 'array' },
            feedGridModePowMax: { entity: 'number' },
            townCode: { entity: 'string' },
            gridCodeSelection: { entity: 'diagnostic' },
            gridCodeVersion: { entity: 'string' },
            gridConnectionAmp: { entity: 'number' },
            gridConnectionReactivePower: { entity: 'number' },
            gridConnectionPowerFactor: { entity: 'number' },
            gridCurtailmentSignal: { entity: 'array' },
            invTargetPwr: { entity: 'number' },
            countryCode: { entity: 'string' },
            factoryModeEnable: { entity: 'diagnostic' },
            debugModeEnable: { entity: 'diagnostic' },
            gridConnectionPowerFactorSetting: { entity: 'number' },
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
    stream_inverter: {
        action: {
            latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } },
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
                        case 'RuntimePropertyUpload':
                        case 'DisplayPropertyUpload':
                            // all cases without nested states
                            await setOnlineStatus(adapter, topic);
                            for (let state in payload[channel]) {
                                let val;
                                let haupd;
                                switch (state) {
                                    case 'displayStatisticsSum':
                                    case 'runtimeStatisticsSum':
                                        adapter.log.debug(
                                            'StatisticsSum is available for delta3plus. Please inform developer.',
                                        );
                                        /*
                                        const statisticObjets = ['start', 'devWorkTime', 'acOutEnergy', 'dc12VoutEnergy', 'typecOutEnergy', 'usbaOutEnergy', 'acInEnergy', 'pvInEnergy', 'acIn0W100WTime', 'acInOver100WTime', 'acOut0W50WTime', 'acOut50W100WTime', 'acOut100W200WTime', 'acOutOver200WTime', 'acOut200W300WTime', 'acOut300W400WTime', 'acOut400W500WTime', 'acOutOver500WTime', 'pvInTime', 'typecInTime', 'dcOut0W60WTime', 'dcOutOver60WTime', 'typecOut0W30WTime', 'typecOut30W60WTime', 'typecOutOver60WTime', 'usbaOutTime', 'ledOutTime']
                                        for (let listItem in payload[channel][state]['listInfo']) {
                                            if (listItem['statisticsObject'] && listItem['statisticsContent']) {
                                                haupd = await compareUpdate(
                                                    adapter,
                                                    stateDictObj,
                                                    stateObj,
                                                    haenable,
                                                    topic,
                                                    'StatisticsSum',
                                                    statisticObjets[listItem['statisticsObject']],
                                                    listItem['statisticsContent'],
                                                    'StatisticsSum',
                                                    logged
                                                );
                                                if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
                                            }
                                        }
                                        */
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
                        case 'ConfigWrite':
                            for (let state in payload[channel]) {
                                switch (state) {
                                    case 'cfgUtcTime':
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
                                }
                            }
                            break;
                        case 'ConfigWriteAck':
                            //Auswertung ob OK und dann auf set_dp3 und zusätzlich in anderer struktur ohne cfg setzen
                            await setOnlineStatus(adapter, topic);
                            for (let state in payload[channel]) {
                                if (payload[channel]['configOk'] && payload[channel]['configOk'] == true) {
                                    switch (state) {
                                        case 'cfgUtcTime':
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
                                    }
                                } else {
                                    adapter.log.warn(`Not successfull command ${JSON.stringify(payload[channel])}`);
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
    const seq = Date.now();
    let muster = {
        header: {
            src: 32,
            dest: 2,
            dSrc: 1,
            dDest: 1,
            cmdFunc: 254,
            cmdId: 17,
            needAck: 1,
            seq: seq,
            productId: 56,
            version: 3,
            payloadVer: 1,
            from: 'Android',
            // deviceSn: serial
        },
    };

    // encryption is set but is actually not done, if needed then to find a way to only encrypt pdata
    /*
        //cfgAcOutFreq: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
        cfgEnergyBackup: {  msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 },
            energyBackupStartSoc: 40,
            energyBackupEn: true
        },
 
        */
    //muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
    //muster['header']['cmdId'] = cmd['msg']['cmdId'];
    const timestamp = Math.floor(Date.now() / 1000);

    const cmsMaxChgSoc = await adapter.getStateAsync(`${serial}.DisplayPropertyUpload.cmsMaxChgSoc`).catch(e => {
        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMaxChgSoc ->${e}`);
    });
    const cmsMinDsgSoc = await adapter.getStateAsync(`${serial}.DisplayPropertyUpload.cmsMinDsgSoc`).catch(e => {
        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMinDsgSoc ->${e}`);
    });

    switch (state) {
        case 'relay2Onoff':
        case 'relay3Onoff':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = value ? 1 : 0;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 9;
            break;
        case 'cmsMinDsgSoc':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata']['cmsMaxChgSoc'] = parseInt(cmsMaxChgSoc.val); //int
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['dataLen'] = 12;
            break;
        case 'cmsMaxChgSoc':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['pdata']['cmsMinDsgSoc'] = parseInt(cmsMinDsgSoc.val); //int
            muster['header']['dataLen'] = 12;
            break;
        case 'powConsumptionMeasurement':
        case 'backupReverseSoc':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 9;
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
    cmdId: {
        22: { cmdFunc: { 254: 'RuntimePropertyUpload' } },
        21: { cmdFunc: { 254: 'DisplayPropertyUpload' } },
        18: { cmdFunc: { 254: 'ConfigWriteAck' } },
        17: { cmdFunc: { 254: 'ConfigWrite' } },
    },
};
/*
const stream_ultra = {
    cmdFunc: {
        254: {
            cmdId: {
                17: 'ConfigWrite',
                18: 'ConfigWriteAck',
                21: 'DisplayPropertyUpload',
                22: 'RuntimePropertyUpload',
            },
        },
    },
};
*/
const protoSource = `
syntax = 'proto3';

message RuntimePropertyUpload {
   optional int32 display_property_full_upload_period = 293;
   optional int32 display_property_incremental_upload_period = 294;
   optional int32 runtime_property_full_upload_period = 295;
   optional int32 runtime_property_incremental_upload_period = 296;
}

message TimeAdjust {
    optional uint32 time = 1;
    optional uint32 timeZoneOffset = 2;
}

message TimeAdjustReport {
    repeated TimeAdjust adjustTask = 1;
}

message DevErrcodeList {
  repeated uint32 dev_errcode = 1;
}

enum PANEL_GRID_STA {
  PANEL_GRID_STA_NO_VAILD = 0;
  PANEL_GRID_IN = 1;
  PANEL_GRID_NOT_ONLINE = 2;
  PANEL_FEED_GRID = 3;
}

enum GRID_STD_CODE {
  GRID_STD_CODE_NULL = 0;
  GRID_STD_CODE_AUSTRIA = 1;
  GRID_STD_CODE_SWITZER = 2;
  GRID_STD_CODE_POLAND = 3;
  GRID_STD_CODE_NETHERLANDS = 4;
  GRID_STD_CODE_VDE_4105 = 5;
  GRID_STD_CODE_IEEE_1547 = 6;
  GRID_STD_CODE_USER_DEFINED = 7;
  GRID_STD_CODE_NORWAY = 8;
  GRID_STD_CODE_CZECH_REPUBLIC = 9;
  GRID_STD_CODE_DENMARK = 10;
  GRID_STD_CODE_IRELAND = 11;
  GRID_STD_CODE_SWEDEN = 12;
  GRID_STD_CODE_LATVIA = 13;
  GRID_STD_CODE_GREECE_A = 14;
  GRID_STD_CODE_GREECE_B = 15;
  GRID_STD_CODE_PORTUGAL = 16;
  GRID_STD_CODE_ROMANIA = 17;
  GRID_STD_CODE_LITHUANIA = 18;
  GRID_STD_CODE_HUNGARY = 19;
  GRID_STD_CODE_ITALY = 20;
  GRID_STD_CODE_G98 = 21;
  GRID_STD_CODE_G99 = 22;
  GRID_STD_CODE_NTS_631 = 23;
  GRID_STD_CODE_UNE_217001 = 24;
  GRID_STD_CODE_UNE_217002 = 25;
  GRID_STD_CODE_UTE_MAINLAND = 26;
  GRID_STD_CODE_UTE_50HZ_ISLAND = 27;
  GRID_STD_CODE_UTE_60HZ_ISLAND = 28;
  GRID_STD_CODE_BELGIUM = 29;
  GRID_STD_CODE_UKRAINE = 30;
  GRID_STD_CODE_SLOVENIA = 31;
  GRID_STD_CODE_BULGARIA = 32;
  GRID_STD_CODE_EU_GENERAL = 33;
  GRID_STD_CODE_NORTH_AMERICA = 1001;
}



message TimezoneChangeItem {
  optional uint32 utc_time = 1;
  optional int32 utc_timezone = 2;
}

message TimezoneChangeList {
  repeated TimezoneChangeItem time_zone_change_item = 1;
}

message CfgIntelligentScheduleMode {
  optional uint32 intelligent_schedule_mode = 1;
  optional uint32 join_intelligent_schedule = 2;
}

message CfgTimeScheduleTask {
  repeated TimeScheduleTaskItem time_schedule_task_item_list = 1;
  repeated CfgIntelligentScheduleChannelItem intelligent_schedule_channel_item_list = 2;
}

message TimeScheduleTaskItem {
  optional uint32 start_timestamp = 1;
  optional uint32 end_timestamp = 2;
  optional uint32 grid_chg_wh = 3;
  optional uint32 grid_dischg_wh = 4;
  optional uint32 chg_wh = 5;
  optional uint32 dischg_wh = 6;
  optional uint32 v2h_output_wh = 7;
}

message CfgIntelligentScheduleChannelItem {
  optional string sn = 1;
  repeated uint32 channel_num = 2;
  repeated uint32 cfg_turn_off = 3;
}

message GridCurtailmentSignalList {
  optional bool is_temp = 1; //bool
  optional bool is_grid_freq = 2; //bool
  optional bool is_grid_vol = 3; //bool
  optional bool is_pv1_oc = 4; //bool
  optional bool is_pv1_cl = 5; //bool
  optional bool is_pv2_oc = 6; //bool
  optional bool is_pv2_cl = 7; //bool
}

message DisplayPropertyUpload {
   optional float pow_get_pv2 = 70;
   optional float plug_in_info_pv2_amp = 71;
   optional int32 utc_timezone = 133;
   optional string utc_timezone_id = 134;
   optional uint32 utc_set_mode = 135; //bool
   optional float pow_get_pv = 361;
   optional int32 inv_ntc_temp3 = 371;
   optional float plug_in_info_pv_vol = 380;
   optional float plug_in_info_pv_amp = 381;
   optional float plug_in_info_pv2_vol = 442;
   optional uint32 feed_grid_mode_pow_limit = 521;
   optional float module_wifi_rssi = 602;
   optional float grid_connection_vol = 613;
   optional float grid_connection_amp = 614;
   optional float grid_connection_freq = 615;
   optional float grid_connection_power = 616;
   optional float grid_connection_reactive_power = 617;
   optional float grid_connection_power_factor = 618;
   optional PANEL_GRID_STA grid_connection_sta = 619;
   optional .GridCurtailmentSignalList grid_curtailment_signal = 620;
   optional DevErrcodeList dev_errcode_list = 627;
   optional float inv_target_pwr = 638;
   optional uint32 feed_grid_mode_pow_max = 727;
   optional string country_code = 728;
   optional uint32 town_code = 729;
   optional GRID_STD_CODE grid_code_selection = 730;
   optional uint32 grid_code_version = 731;
   optional uint32 factory_mode_enable = 732; //bool
   optional uint32 debug_mode_enable = 733; //bool
   optional float grid_connection_power_factor_setting = 734;
}

message ConfigWrite {
  optional uint32 cfgUtcTime = 6;
  optional uint32 cms_max_chg_soc = 33; //ac
  optional uint32 cms_min_dsg_soc = 34; //ac
  optional uint32 backup_reverse_soc = 102; //ac
  optional uint32 relay2Onoff = 380; //ac bool
  optional uint32 relay3Onoff = 381; //ac bool
  optional uint32 pow_consumption_measurement = 239;

  optional uint32 cfg_feed_grid_mode_pow_limit = 169; //ac
  optional DayResidentLoadList cfg_day_resident_load_list = 379;

  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;

  optional int32 cfg_utc_timezone = 7;
  optional PowerSocketList cfg_power_socket = 27;
  optional bool cfg_bms_power_off = 30;
  optional uint32 cfg_soc_cali = 31;
  optional CfgBmsPushWrite cfg_bms_push = 32;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional CfgEnergyStrategyOperateMode cfg_energy_strategy_operate_mode = 106;
  optional string cfg_utc_timezone_id = 135;
  optional bool cfg_utc_set_mode = 136;
  optional uint32 cfg_feed_grid_mode = 168;
  optional string cfg_country_code = 211;
  optional uint32 cfg_town_code = 212;
  optional bool active_sys_reboot = 213;
  optional float cfg_inv_target_pwr = 220;
  optional bool cfg_factory_mode_enable = 222;
  optional bool cfg_debug_mode_enable = 223;
  optional float cfg_grid_connection_power_factor_setting = 224;
  optional float cfg_grid_connection_power_setting = 225;
  optional uint32 cfg_grid_sys_device_cnt = 237;
  optional WifiApMeshIdInfo cfg_wifi_ap_mesh_id = 238;

  optional TimezoneChangeList cfg_timezone_change_list = 378;

  optional uint32 cfg_system_group_id = 382;
  optional CloudMeter cfg_cloud_metter = 383;
  optional uint32 cfg_brightness = 384;
  optional uint32 cfg_system_mesh_id = 385;
  optional CfgIntelligentScheduleMode cfg_cfg_intelligent_schedule_mode = 546;
  optional CfgTimeScheduleTask cfg_cfg_time_schedule_task = 547;
  optional gridConnectionPortBind grid_connection_port_bind = 564;
  optional string scoket1_bind_device_sn = 565;
  optional string scoket2_bind_device_sn = 566;
}

message ConfigWriteAck {
  optional uint32 action_id = 1;
  optional bool config_ok = 2;

  optional uint32 cfgUtcTime = 6;
  optional uint32 cms_max_chg_soc = 33; //ac
  optional uint32 cms_min_dsg_soc = 34; //ac
  optional uint32 backup_reverse_soc = 102; //ac
  optional uint32 relay2Onoff = 380; //ac bool
  optional uint32 relay3Onoff = 381; //ac bool
  optional uint32 pow_consumption_measurement = 239;

  optional uint32 cfg_feed_grid_mode_pow_limit = 169; //ac
  optional DayResidentLoadList cfg_day_resident_load_list = 379;

  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;

  optional int32 cfg_utc_timezone = 7;
  optional PowerSocketList cfg_power_socket = 27;
  optional bool cfg_bms_power_off = 30;
  optional uint32 cfg_soc_cali = 31;
  optional CfgBmsPushWrite cfg_bms_push = 32;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional CfgEnergyStrategyOperateMode cfg_energy_strategy_operate_mode = 106;
  optional string cfg_utc_timezone_id = 135;
  optional bool cfg_utc_set_mode = 136;
  optional uint32 cfg_feed_grid_mode = 168;
  optional string cfg_country_code = 211;
  optional uint32 cfg_town_code = 212;
  optional bool active_sys_reboot = 213;
  optional float cfg_inv_target_pwr = 220;
  optional bool cfg_factory_mode_enable = 222;
  optional bool cfg_debug_mode_enable = 223;
  optional float cfg_grid_connection_power_factor_setting = 224;
  optional float cfg_grid_connection_power_setting = 225;
  optional uint32 cfg_grid_sys_device_cnt = 237;
  optional WifiApMeshIdInfo cfg_wifi_ap_mesh_id = 238;

  optional TimezoneChangeList cfg_timezone_change_list = 378;

  optional uint32 cfg_system_group_id = 382;
  optional CloudMeter cfg_cloud_metter = 383;
  optional uint32 cfg_brightness = 384;
  optional uint32 cfg_system_mesh_id = 385;
  optional CfgIntelligentScheduleMode cfg_cfg_intelligent_schedule_mode = 546;
  optional CfgTimeScheduleTask cfg_cfg_time_schedule_task = 547;
  optional gridConnectionPortBind grid_connection_port_bind = 564;
  optional string scoket1_bind_device_sn = 565;
  optional string scoket2_bind_device_sn = 566;
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
message setValue {
    optional int32 value = 1;
	optional int32 value2 = 2;
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
