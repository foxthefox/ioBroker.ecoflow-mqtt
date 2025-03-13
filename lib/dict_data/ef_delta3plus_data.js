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
    delta3plus: {
        action: {
            latestQuotas: { entity: 'switch' }
        },
        info: {
            status: { entity: 'diagnostic' }
        }
    }
};

const deviceRanges = {
    delta3plus: {}
};

const deviceCmd = {
    delta3plus: {
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