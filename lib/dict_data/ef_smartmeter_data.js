const deviceStates = {
    DisplayPropertyUpload: {
        number: {
            utcTimezone: {
                min: -1200,
                max: 1200,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'utc timezone',
                subrole: 'number'
            },
            voltageL1: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Voltage L1',
                role: 'value'
            },
            voltageL2: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Voltage L2',
                role: 'value'
            },
            voltageL3: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Voltage L3',
                role: 'value'
            },
            totalPower: {
                min: -23000,
                max: 23000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Total Power',
                role: 'value'
            },
            powerL1: {
                min: 0,
                max: 23000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Power L1',
                role: 'value'
            },
            powerL2: {
                min: 0,
                max: 23000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Power L2',
                role: 'value'
            },
            powerL3: {
                min: 0,
                max: 23000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Power L3',
                role: 'value'
            },
            energyL1daily: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy L1',
                state_class: 'total_increasing',
                role: 'value'
            },
            energyL2daily: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy L2',
                state_class: 'total_increasing',
                role: 'value'
            },
            energyL3daily: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy L3',
                state_class: 'total_increasing',
                role: 'value'
            },
            lifeTimeEnergyConsumption: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Lifetime Consumption',
                state_class: 'total_increasing',
                role: 'value'
            },
            lifeTimeEnergyDelivery: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Lifetime Delivery',
                state_class: 'total_increasing',
                role: 'value'
            },
            netEnergyConsumption: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'net Energy Consumption',
                state_class: 'total_increasing',
                role: 'value'
            },
        },
        diagnostic: {
            utcSetMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc set mode',
                role: 'info',
                utcSetMode: { '0': 'OK?' }
            },
        },
        string: {
            utcTimezoneId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc timezone id',
                role: 'info'
            },
            unknown618: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown618',
                role: 'info'
            },
            unknown619: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown619',
                role: 'info'
            },
            unknown627: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown627',
                role: 'info'
            },
            unknown728: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown728',
                role: 'info'
            },
            unknown729: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown729',
                role: 'info'
            },
            unknown732: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown732',
                role: 'info'
            },
            unknown733: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown733',
                role: 'info'
            },
            unknown762: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown762',
                role: 'info'
            },
            unknown763: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown763',
                role: 'info'
            },
            unknown764: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'unknown764',
                role: 'info'
            }
        }
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
                latestQuotas: { '0': 'no trigger', '1': 'trigger' }
            }
        }
    },
    info: {
        number: {
            msgCount: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'received MSG#',
                role: 'value'
            }
        },
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
    smartmeter: {
        DisplayPropertyUpload: {
            voltageL1: { entity: 'number' },
            voltageL2: { entity: 'number' },
            voltageL3: { entity: 'number' },
            totalPower: { entity: 'number' },
            powerL1: { entity: 'number' },
            powerL2: { entity: 'number' },
            powerL3: { entity: 'number' },
            energyL1daily: { entity: 'number' },
            energyL2daily: { entity: 'number' },
            energyL3daily: { entity: 'number' },
            lifeTimeEnergyConsumption: { entity: 'number' },
            lifeTimeEnergyDelivery: { entity: 'number' },
            netEnergyConsumption: { entity: 'number' },
            utcTimezone: { entity: 'number' },
            utcTimezoneId: { entity: 'string' },
            utcSetMode: { entity: 'diagnostic' },
            unknown618: { entity: 'string' },
            unknown619: { entity: 'string' },
            unknown627: { entity: 'string' },
            unknown728: { entity: 'string' },
            unknown729: { entity: 'string' },
            unknown732: { entity: 'string' },
            unknown733: { entity: 'string' },
            unknown762: { entity: 'string' },
            unknown763: { entity: 'string' },
            unknown764: { entity: 'string' }
        },
        action: {
            latestQuotas: { entity: 'switch' }
        },
        info: {
            msgCount: { entity: 'number' },
            status: { entity: 'diagnostic' }
        }
    }
};

const deviceRanges = {
    smartmeter: {
        DisplayPropertyUpload: {
            number: {
                voltageL1: {
                    max: 250
                },
            }
        }
    }
};
const deviceCmd = {
    smartmeter: {
        action: {
            latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
        }
    }
};

const protoMsg = {
    cmdId: {
        22: { cmdFunc: { 254: 'RuntimePropertyUpload' } },
        21: { cmdFunc: { 254: 'DisplayPropertyUpload' } },
    }
};
/*
const smartmeter = {
    cmdFunc: {
        254: {
            cmdId: { 21: "DisplayPropertyUpload", 22: "RuntimePropertyUpload" },
        },
    },
},
*/
const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus

async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged) {
    let haUpdate = [];
    if (payload) {
        if (stateDictObj) {
            if (stateObj) {
                for (let channel in payload) {
                    switch (channel) {
                        //case 'RuntimePropertyUpload':
                        case 'DisplayPropertyUpload':
                            // all cases without nested states
                            await setOnlineStatus(adapter, topic);
                            for (let state in payload[channel]) {
                                let val;
                                let haupd;
                                switch (state) {
                                    case 'energy':
                                        for (let item in payload[channel][state]) {
                                            haupd = await compareUpdate(
                                                adapter,
                                                stateDictObj,
                                                stateObj,
                                                haenable,
                                                topic,
                                                channel,
                                                item,
                                                payload[channel][state][item],
                                                channel,
                                                logged
                                            );
                                            if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
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
                                            logged
                                        );
                                        if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
                                        break;
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

message RuntimePropertyUpload {
   optional int32 display_property_full_upload_period = 293;
   optional int32 display_property_incremental_upload_period = 294;
   optional int32 runtime_property_full_upload_period = 295;
   optional int32 runtime_property_incremental_upload_period = 296;
} 

message DisplayPropertyUpload {
  optional int32 utc_timezone = 133;
  optional string utc_timezone_id = 134;
  optional uint32 utc_set_mode = 135; //bool
  optional float totalPower = 515;
  
  optional float unknown618 = 618;
  optional uint32 unknown619 = 619; //bool?
  
  repeated string unknown627 = 627;
  repeated string unknown728 = 728;

    optional uint32 unknown729 = 729;
    optional uint32 unknown732 = 732;
    optional uint32 unknown733 = 733;
    optional uint32 unknown762 = 762;
    optional uint32 unknown763 = 763;
    optional uint32 unknown764 = 764;

  optional float voltageL3 = 771;
  optional float powerL3 = 772;
  optional EnergyArray energy = 773;
  //optional float currentL1 = 784;
  optional float voltageL1 = 956;
  optional float voltageL2 = 957;
  //optional float currentL3 = 958;
  //optional float currentL2 = 959;
  optional float powerL1 = 962;
  optional float powerL2 = 963;
  //optional uint32 unknown = 984;
}

message EnergyArray {
  optional float energyL1daily = 1; //Nettoverbrauch L1
  optional float energyL2daily = 2; //Nettoverbrauch L2
  optional float energyL3daily = 3; //Nettoverbrauch L3
  optional float lifeTimeEnergyConsumption = 4; // Lebenszeit Verbrauch
  optional float lifeTimeEnergyDelivery = 6; // Lebenszeit Einspeisung
  optional float netEnergyConsumption = 7; // Nettoverbrauch
}

message setMessage {
    setHeader header = 1;
}

message setValue {
    optional int32 value = 1;
	optional int32 value2 = 2;
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
`;

module.exports = {
    deviceStates,
    deviceStatesDict,
    deviceRanges,
    deviceCmd,
    protoMsg,
    protoSource,
    storeProtoPayload,
    prepareProtoCmd
};