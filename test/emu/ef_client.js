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
let quota = {};
quota['SHP10ZFB5EF412345'] = require('../lastQuotas/panel.json');
quota['DECBZ5ZE4112345'] = require('../lastQuotas/deltapro.json');
quota['BX11ZFB5EF412345'] = require('../lastQuotas/glacier.json');
quota['KT21ZCH2ZF112345'] = require('../lastQuotas/wave2.json');
quota['R331ZEB4ZEA12345'] = require('../lastQuotas/delta2.json');
quota['R351ZFB4HF6L12345'] = require('../lastQuotas/delta2max.json');
quota['DAABZ5ZE4112345'] = require('../lastQuotas/deltamini.json');
quota['DAEBZ5ZE4112345'] = require('../lastQuotas/deltamax.json');
quota['R521ZEB4XEC12345'] = require('../lastQuotas/river2max.json');
quota['R621ZEB4XEC12345'] = require('../lastQuotas/river2pro.json');
quota['R421ZEB4XEC12345'] = require('../lastQuotas/riverpro.json');
quota['R351ZFB4HF6SL12345'] = require('../lastQuotas/delta2max2slave.json');
quota['DAEBZ5ZE41SL12345'] = require('../lastQuotas/deltamax1slave.json');
quota['DPU0ZFB5EF412345'] = require('../lastQuotas/dpu.js').message.getreply2bat; //get_reply;
quota['1234345346'] = require('../lastQuotas/shelly3em.json');
quota['M106ZAB4Z000001F'] = require('../lastQuotas/pkit_txt.json');
quota['M106ZBB4Z000001F'] = require('../lastQuotas/pkit_txt.json'); //powerkit.json');
quota['HJ312000BF7W1234'] = require('../lastQuotas/ocean.js').message.full;
quota['SHP20ZFB5EF412345'] = require('../lastQuotas/panel2.js').message.jerry; //latestQuotas;
quota['F317ZEB49G1234567'] = require('../lastQuotas/alternator.js').message.get2; //latestQuotas;
quota['MR51ZAS4PG1234567'] = require('../lastQuotas/dp3.js').message.all; //latestQuotas;
quota['HW5155555G1234567'] = require('../lastQuotas/watth.js').watth;
quota['R632Z1B1234567890'] = require('../lastQuotas/river3plus.js').all;
quota['R332Z1B1234567890'] = require('../lastQuotas/delta3plus.js').all;
quota['BK21Z1B1234567890'] = require('../lastQuotas/smartmeter.js').all;
quota['HC31Z123456789012'] = require('../lastQuotas/oceanfit.js').get.all;
quota['R631Z1B1234567890'] = require('../lastQuotas/river3.js').message.kv2; //debug4_1;
quota['R331Z1B1234567890'] = require('../lastQuotas/delta3.js').all;
quota['BK31Z123456789012'] = require('../lastQuotas/streamacpro.js').get.all;
quota['BK11Z123456789012'] = require('../lastQuotas/streamultra.js').get.all;
quota['KT31ZC123456789'] = require('../lastQuotas/wave3.js').message.latestQuotas;
quota['UNKNOWNPROTO'] = require('../lastQuotas/unknown.js').messages.test;
quota['UNKNOWNJSON'] = require('../lastQuotas/unknownjson.json');
quota['R371A112345678'] = require('../lastQuotas/oceanplus.js').get.all;
quota['BK41Z123456789012'] = require('../lastQuotas/streaminverter.js').get.all;

const panelparams = require('../lastQuotas/vm2.js').params;

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
};

let lastQuotInterval = null;
let paramsInterval = null;
const mqttUserId = 'testuser1234testuser1234';

client.on('connect', () => {
    //create subscription topics
    let topics = [];
    if (mqttUserId.length > 0) {
        topics = topics.concat(ef.createSubscribeTopics(mqttUserId, pdevices));
    }
    console.log('subscription topics EF ' + JSON.stringify(topics));

    if (topics.length > 0) {
        if (client) {
            client.subscribe(topics, async err => {
                if (!err) {
                    console.log('subscribed the topics EF');
                    console.log(quota);
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
        if (topic == 'HJ312000BF7W1234') {
            const string = quota['HJ312000BF7W1234'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'DPU0ZFB5EF412345') {
            const string = quota['DPU0ZFB5EF412345'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'SHP20ZFB5EF412345') {
            const string = quota['SHP20ZFB5EF412345'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'F317ZEB49G1234567') {
            const string = quota['F317ZEB49G1234567'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'MR51ZAS4PG1234567') {
            const string = quota['MR51ZAS4PG1234567'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'HW5155555G1234567') {
            const string = quota['HW5155555G1234567'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'R632Z1B1234567890') {
            const string = quota['R632Z1B1234567890'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'R332Z1B1234567890') {
            const string = quota['R332Z1B1234567890'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'BK21Z1B1234567890') {
            const string = quota['BK21Z1B1234567890'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'HC31Z123456789012') {
            const string = quota['HC31Z123456789012'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'R631Z1B1234567890') {
            const string = quota['R631Z1B1234567890'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'R331Z1B1234567890') {
            const string = quota['R331Z1B1234567890'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'BK31Z123456789012') {
            const string = quota['BK31Z123456789012'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'BK11Z123456789012') {
            const string = quota['BK11Z123456789012'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'KT31ZC123456789') {
            const string = quota['KT31ZC123456789'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'UNKNOWNPROTO') {
            const string = quota['UNKNOWNPROTO'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'R371A112345678') {
            const string = quota['R371A112345678'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else if (topic == 'BK41Z123456789012') {
            const string = quota['BK41Z123456789012'].replace(/ /g, '').toLowerCase();
            //console.log(string);
            const buffer = Buffer.from(string, 'hex');
            client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
        } else {
            client.publish(
                '/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply',
                JSON.stringify(quota[topic]),
            );
        }
    }
});
