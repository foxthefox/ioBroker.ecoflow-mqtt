function logger() {
    this.debug = function (text) {
        console.log(text);
    };
}
function configure() {
    this.msgUnknownMsg = true;
    this.showHex = true;
}

const that = () => this;

that.log = new logger();
that.config = new configure();

const mqtt = require('mqtt');
//const client = mqtt.connect('mqtt://localhost:1883');
const client = mqtt.connect({
    host: '192.168.178.74',
    port: 1883,
    username: 'efSimulation',
    password: 'devicePWD',
});

const ef = require('../../lib/ecoflow_utils.js');

function loadQuotas(pdevices) {
    let quota = {};
    for (let device in pdevices) {
        console.log('load quota of ' + pdevices[device]['devType'] + ' ' + device);
        quota[device] = require('../data2/' + pdevices[device]['devType'] + '.json');
    }
    return quota;
}

function loadMesgObj(pdevices) {
    let msgQbj = {};
    for (let device in pdevices) {
        let devtype = pdevices[device]['devType'];
        if (
            devtype === 'pstream' ||
            devtype === 'pstream600' ||
            devtype === 'pstream800' ||
            devtype === 'plug' ||
            devtype === 'deltaproultra' ||
            devtype === 'powerocean' ||
            devtype === 'poweroceanplus' ||
            devtype === 'poweroceanfit' ||
            devtype === 'panel2' ||
            devtype === 'alternator' ||
            devtype === 'deltapro3' ||
            devtype === 'delta3' ||
            devtype === 'delta3plus' ||
            devtype === 'river3' ||
            devtype === 'river3plus' ||
            devtype === 'smartmeter' ||
            devtype === 'stream_ac_pro' ||
            devtype === 'stream_pro' ||
            devtype === 'stream_ultra' ||
            devtype === 'stream_inverter' ||
            devtype === 'wave3' ||
            devtype === 'unknown'
        ) {
            if (devtype === 'pstream600' || devtype === 'pstream800') {
                devtype = 'pstream';
            }
            console.log('load msgObj of ' + device);
            msgQbj[device] = require('../../lib/dict_data/ef_' + devtype + '_data.js').msgNameObj;
        }
    }
    return msgQbj;
}

function loadProtoObj(pdevices) {
    let protoObj = {};
    for (let device in pdevices) {
        let devtype = pdevices[device]['devType'];
        if (
            devtype === 'pstream' ||
            devtype === 'pstream600' ||
            devtype === 'pstream800' ||
            devtype === 'plug' ||
            devtype === 'deltaproultra' ||
            devtype === 'powerocean' ||
            devtype === 'poweroceanplus' ||
            devtype === 'poweroceanfit' ||
            devtype === 'panel2' ||
            devtype === 'alternator' ||
            devtype === 'deltapro3' ||
            devtype === 'delta3' ||
            devtype === 'delta3plus' ||
            devtype === 'river3' ||
            devtype === 'river3plus' ||
            devtype === 'smartmeter' ||
            devtype === 'stream_ac_pro' ||
            devtype === 'stream_pro' ||
            devtype === 'stream_ultra' ||
            devtype === 'stream_inverter' ||
            devtype === 'wave3' ||
            devtype === 'unknown'
        ) {
            if (devtype === 'pstream600' || devtype === 'pstream800') {
                devtype = 'pstream';
            }
            console.log('load proto of ' + device);
            protoObj[device] = require('../../lib/dict_data/ef_' + devtype + '_data.js').protoSource;
        }
    }
    return protoObj;
}

const pdevices = {
    SHP10ZFB5EF412345: { devName: 'My panel', devType: 'panel', haEnable: false },
    DECBZ5ZE4112345: {
        devName: 'My panel',
        devType: 'deltapro',
        haEnable: false,
        pstationsSlave1: true,
        pstationsSlave2: false,
    },
    BX11ZFB5EF412345: { devName: 'My glacier', devType: 'glacier', haEnable: false },
    KT21ZCH2ZF112345: { devName: 'My wave', devType: 'wave2', haEnable: false },
    DPU0ZFB5EF412345: { devName: 'My wave', devType: 'deltaproultra', haEnable: false },
    R331ZEB4ZEA12345: { devName: 'My delta2', devType: 'delta2', haEnable: false },
    R351ZFB4HF6L12345: { devName: 'My delta2max', devType: 'delta2max', haEnable: false },
    DAABZ5ZE4112345: { devName: 'My deltamini', devType: 'deltamini', haEnable: false },
    DAEBZ5ZE4112345: { devName: 'My deltamax', devType: 'deltamax', haEnable: false },
    R521ZEB4XEC12345: { devName: 'My river2max', devType: 'river2max', haEnable: false },
    R621ZEB4XEC12345: { devName: 'My river2pro', devType: 'river2pro', haEnable: false },
    R421ZEB4XEC12345: { devName: 'My riverpro', devType: 'riverpro', haEnable: false },
    R351ZFB4HF6SL12345: { devName: 'My delta2max Slave', devType: 'delta2max', haEnable: false },
    DAEBZ5ZE41SL12345: { devName: 'My deltamax Slave', devType: 'deltamax', haEnable: false },
    1234345346: { devName: 'My shelly 3em', devType: 'shelly3em', haEnable: false },
    M106ZAB4Z000001F: { devName: 'My powerkit', devType: 'powerkit', haEnable: false },
    M106ZBB4Z000001F: { devName: 'My powerkit2bat', devType: 'powerkit', haEnable: false, pstationsSlave1: true },
    HJ312000BF7W1234: { devName: 'My powerocean', devType: 'powerocean', haEnable: false },
    SHP20ZFB5EF412345: { devName: 'My SHP2', devType: 'panel2', haEnable: false },
    F317ZEB49G1234567: { devName: 'My alternator', devType: 'alternator', haEnable: false },
    MR51ZAS4PG1234567: { devName: 'My deltapro3', devType: 'deltapro3', haEnable: false },
    HW5155555G1234567: { devName: 'My stream', devType: 'pstream800', haEnable: false },
    R632Z1B1234567890: { devName: 'My river3plus', devType: 'river3plus', haEnable: false },
    R332Z1B1234567890: { devName: 'My delta3plus', devType: 'delta3plus', haEnable: false },
    BK21Z1B1234567890: { devName: 'EF smartmeter', devType: 'smartmeter', haEnable: false },
    HC31Z123456789012: { devName: 'EF Oecan dc fit', devType: 'poweroceanfit', haEnable: false },
    R631Z1B1234567890: { devName: 'My river3', devType: 'river3', haEnable: false },
    R331Z1B1234567890: { devName: 'My delta3', devType: 'delta3', haEnable: false },
    BK31Z123456789012: { devName: 'My stream ac pro', devType: 'stream_ac_pro', haEnable: false },
    BK11Z123456789012: { devName: 'My stream ultra', devType: 'stream_ultra', haEnable: false },
    KT31ZC123456789: { devName: 'My wave3', devType: 'wave3', haEnable: false },
    UNKNOWNPROTO: { devName: 'My wave3', devType: 'wave3', haEnable: false },
    UNKNOWNJSON: { devName: 'My wave3', devType: 'wave3', haEnable: false },
    R371A112345678: { devName: 'EF Oecan dc plus', devType: 'poweroceanplus', haEnable: false },
    BK41Z123456789012: { devName: 'Stream inverter', devType: 'stream_inverter', haEnable: false },
    HW5255555G1234567: { devName: 'My plug', devType: 'plug', haEnable: false },
};

let quota = loadQuotas(pdevices);
let msgQbj = loadMesgObj(pdevices);
const protoQbj = loadProtoObj(pdevices);

let lastQuotInterval = null;
let paramsInterval = null;
const mqttUserId = 'testuser1234testuser1234';

client.on('connect', () => {
    //create subscription topics
    let topics = [];
    if (mqttUserId.length > 0) {
        topics = topics.concat(ef.createSubscribeTopics(mqttUserId, pdevices));
    }
    console.log('subscription topics EF ');
    console.table(JSON.stringify(topics));

    if (topics.length > 0) {
        if (client) {
            client.subscribe(topics, async err => {
                if (!err) {
                    console.log('subscribed the topics EF');
                    //console.log(quota);
                    //initial and interval for requesting last quotas
                    /*
					paramsInterval = setInterval(async () => {
						client.publish(
							'/app/device/property/' + 'SHP10ZFB5EF412345',
							JSON.stringify({ params: panelparams })
						);
					}, 10 * 1000); // lastQuot every 5min
					*/
                } else {
                    console.log('could not subscribe to topics ' + err);
                }
            });
        }
    } else {
        console.log('no topics for subscription');
    }
});

client.on('message', (topic, message) => {
    // message is Buffer
    console.log(message.toString());
    const msgtop = ef.getIdFromTopic(topic, mqttUserId);
    const msgtype = msgtop.msg;
    //this topic only contains the id of device
    topic = msgtop.topic;
    console.log('processing [ ' + topic + ' ] = ' + msgtype);
    // client.end();

    if (msgtype === 'get' && quota[topic]) {
        let devtype = '';
        if (pdevices[topic]) {
            devtype = pdevices[topic]['devType'];
        } else {
            console.log('unknown device ' + topic);
        }
        switch (devtype) {
            case 'pstream600':
            case 'pstream800':
            case 'plug':
            case 'deltaproultra':
            case 'powerocean':
            case 'poweroceanplus':
            case 'poweroceanfit':
            case 'panel2':
            case 'alternator':
            case 'deltapro3':
            case 'delta3plus':
            case 'delta3':
            case 'river3plus':
            case 'river3':
            case 'smartmeter':
            case 'stream_ac_pro':
            case 'stream_pro':
            case 'stream_ultra':
            case 'stream_inverter':
            case 'wave3':
            case 'unknown':
                if (msgQbj[topic]) {
                    const string = ef.createMsgFromObjects(msgQbj[topic], quota[topic], protoQbj[topic], true);
                    client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', string);
                }
                break;
            default:
                client.publish(
                    '/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply',
                    JSON.stringify(quota[topic]),
                );
                break;
        }
    } else if (msgtype === 'set' && quota[topic]) {
        //evaluate
    }
});
