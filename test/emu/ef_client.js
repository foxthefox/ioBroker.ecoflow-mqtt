function logger() {
	this.debug = function(text) {
		console.log(text);
	};
}
function configure() {
	this.msgUnknownMsgPstream = true;
	this.msgUnknownMsgPlug = true;
	this.showHex = true;
}

const that = () => this;

that.log = new logger();
that.config = new configure();

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

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
quota['DPU0ZFB5EF412345'] = require('../lastQuotas/dpu.js').message.get_reply;

const panelparams = require('../websource/shp/vm2.js').params;

const pdevices = {
	SHP10ZFB5EF412345: { devName: 'My panel', devType: 'panel', haEnable: false },
	DECBZ5ZE4112345: {
		devName: 'My panel',
		devType: 'deltapro',
		haEnable: false,
		pstationsSlave1: true,
		pstationsSlave2: false
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
	R421ZEB4XEC12345: { devName: 'My riverpro', devType: 'riverpro', haEnable: false }
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
			client.subscribe(topics, async (err) => {
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
		if (topic !== 'DPU0ZFB5EF412345') {
			client.publish(
				'/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply',
				JSON.stringify(quota[topic])
			);
		} else {
			const string = quota['DPU0ZFB5EF412345'].replace(/ /g, '').toLowerCase();
			//console.log(string);
			const buffer = Buffer.from(string, 'hex');
			client.publish('/app/' + mqttUserId + '/' + topic + '/thing/property/get_reply', buffer);
		}
	}
});
