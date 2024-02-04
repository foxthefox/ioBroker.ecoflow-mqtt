const models = require('./ecoflow_data.js').models;

/**
 * @param {string} deviceID
 * @param {string } type
 * @param {object} devicedict
 * @param {object} devicestates
 * @param {string} topic
 * @param {boolean} bat1
 * @param {boolean} bat2
 * @param {string} adapterversion
 */
function prepareDiscoveryMessage(deviceID, type, devicedict, devicestates, topic, bat1, bat2, adapterversion) {
	//function must be called only after the modification of ranges was done
	let msgqeue = [];

	const device_config_topic = 'homeassistant/' + 'binary_sensor' + '/' + deviceID + '_status/config';
	const origin = {
		name: 'iobroker.ecoflow-mqtt',
		sw_version: adapterversion
	};

	const device_discovery_msg = {
		unique_id: deviceID + '_main',
		device: {
			identifiers: deviceID + '_status',
			manufacturer: models[type]['manufacturer'],
			name: deviceID,
			model: models[type]['model'],
			via_device: 'iob_0_status'
		},
		device_class: 'connectivity',
		availability_topic: topic + '/iob/info/status',
		payload_available: 'online',
		payload_not_available: 'offline',
		payload_on: 'online',
		payload_off: 'offline',
		state_topic: topic + '/' + deviceID + '/info/status',
		name: 'Device Connection to Cloud',
		origin: origin
	};

	let msg = {};
	msg['topic'] = device_config_topic;
	msg['payload'] = device_discovery_msg;
	msgqeue.push(msg);
	let errors = [];
	Object.entries(devicedict).forEach(([ key, link ]) => {
		//key mppt/ems...
		//link possible values
		Object.entries(link).forEach(([ key2, link2 ]) => {
			// key2 = value
			// link ist object mit entity verweis auf devicestates
			// config path: sensor/HW51ZOH4SF4U1217/pv1InputVolt/config
			// state_topic: ecoflow/HW51ZOH4SF4U1217/pv1InputVolt
			// uniq_id: HW51ZOH4SF4U1217_pv1InputVolt

			// andere Methode um JSON direkt zu verarbeiten
			// https://community.home-assistant.io/t/sonoff-pow/40672/10
			//
			// config path: sensor/HW51ZOH4SF4U1217/pv1InputVolt/config
			// state_topic: ecoflow/HW51ZOH4SF4U1217/pstream
			// uniq_id: HW51ZOH4SF4U1217_pv1InputVolt
			// let state_topic= "ecoflow/"+inverter.deviceID+"/pstream";    // "/"+key.toLowerCase
			// let value_template = '{{value_json["'+key +'"]|round(3)}}';
			if (link2.entity !== 'array' && link2.entity !== 'icon' && key !== 'info') {
				const value = devicestates[key][link2.entity][key2];
				let msg = {
					topic: '',
					payload: ''
				};
				if (!value.entity_type) {
					errors.push(key + '_' + key2);
				}
				let mqtt_config_topic =
					'homeassistant/' + value.entity_type + '/' + deviceID + '_' + key + '/' + key2 + '/config';
				const sensor_unique_id = deviceID + '_' + key + '_' + key2;
				const state_topic = topic + '/' + deviceID + '_' + key + '/' + key2;

				let discovery_message = {
					has_entity_name: true,
					unique_id: sensor_unique_id,
					state_topic: state_topic,
					device: {
						identifiers: deviceID + '_' + key,
						name: deviceID + '_' + key,
						manufacturer: models[type]['manufacturer'],
						model: models[type]['model'],
						via_device: deviceID + '_status'
					},
					availability_topic: topic + '/' + deviceID + '/info/status',
					payload_available: 'online',
					payload_not_available: 'offline',
					origin: origin
				};

				//always
				if (value.name) discovery_message['name'] = value.name;

				//sensor/number/
				if (value.unit_of_measurement) discovery_message['unit_of_measurement'] = value.unit_of_measurement;
				if (value.device_class) discovery_message['device_class'] = value.device_class;

				// sensor
				if (value.entity_type === 'sensor') {
					if (value.unit_of_measurement !== 'Wh' && value.unit_of_measurement !== 'kWh') {
						discovery_message['state_class'] = 'measurement';
						discovery_message['value_template'] = '{{value|round(3)}}';
					} else {
						discovery_message['state_class'] = 'total_increasing';
					}
				}
				// number/level
				if (value.entity_type === 'number') {
					discovery_message['min'] = value.min;
					discovery_message['max'] = value.max;
					discovery_message['step'] = value.step;
				}
				// select
				if (value.entity_type === 'select') {
					discovery_message['options'] = value.select;
				}
				// text
				if (value.entity_type === 'text') {
					// text is nativly a command from HA, we use it here as indicator for displaying text
					// using sensor with state_class = None or not part of payload
					mqtt_config_topic =
						'homeassistant/' + 'sensor' + '/' + deviceID + '_' + key + '/' + key2 + '/config';
				}
				//button

				// switch
				if (
					value.entity_type === 'switch' ||
					value.entity_type === 'number' ||
					value.entity_type === 'select'
				) {
					const command_topic = topic + '/' + deviceID + '/set/' + key + '/' + key2;
					discovery_message['command_topic'] = command_topic;
				}

				//binary_sensor
				if (value.payload_on) discovery_message['payload_on'] = value.payload_on;
				if (value.payload_off) discovery_message['payload_off'] = value.payload_off;

				// when diagnostic / config
				if (value.entity_category) discovery_message['entity_category'] = value.entity_category;

				//if (value.entity_type) discovery_message['entity_type'] = value.entity_type;

				if (value.icon) discovery_message['icon'] = value.icon;

				/*
                if (value.attributes.length > 0) {
                    //for attribute_key, attribute_value in attributes.items():
                    //    discovery_message[attribute_key] = attribute_value
                }
                */

				msg.topic = mqtt_config_topic;
				msg.payload = discovery_message;
				msgqeue.push(msg);

				//extra betteries
				//gleiches payload nur anderes topic
				if (bat1) {
					if (value.entity_type === 'text') {
						// text is nativly a command from HA, we use it here as indicator for displaying text
						// using sensor with state_class = None or not part of payload
						mqtt_config_topic =
							'homeassistant/' + 'sensor' + '/' + deviceID + '_' + 'bmsSlave1' + '/' + key2 + '/config';
					} else {
						mqtt_config_topic =
							'homeassistant/' +
							value.entity_type +
							'/' +
							deviceID +
							'_' +
							'bmsSlave1' +
							'/' +
							key2 +
							'/config';
					}
					msg.topic = mqtt_config_topic;
					discovery_message['state_topic'] = topic + '/' + deviceID + '_' + 'bmsSlave1' + '/' + key2;
					msg.payload = discovery_message;
					msgqeue.push(msg);
				}
				if (bat2) {
					if (value.entity_type === 'text') {
						// text is nativly a command from HA, we use it here as indicator for displaying text
						// using sensor with state_class = None or not part of payload
						mqtt_config_topic =
							'homeassistant/' + 'sensor' + '/' + deviceID + '_' + 'bmsSlave2' + '/' + key2 + '/config';
					} else {
						mqtt_config_topic =
							'homeassistant/' +
							value.entity_type +
							'/' +
							deviceID +
							'_' +
							'bmsSlave2' +
							'/' +
							key2 +
							'/config';
					}
					msg.topic = mqtt_config_topic;
					discovery_message['state_topic'] = topic + '/' + deviceID + '_' + 'bmsSlave2' + '/' + key2;
					msg.payload = discovery_message;
					msgqeue.push(msg);
				}
			}
		});
	});
	return msgqeue;
}

/**
 * @param {string} deviceID
 * @param {object} devicedict
 * @param {object} devicestates
 * @param {string} topic
 * @param {boolean} bat1
 * @param {boolean} bat2
 */
function prepareFullHaUpd(deviceID, devicedict, devicestates, topic, bat1, bat2) {
	let msgqeue = [];
	Object.entries(devicedict).forEach(([ key, link ]) => {
		//key mppt/ems...
		//link possible values
		Object.entries(link).forEach(([ key2, link2 ]) => {
			// key2 = value
			// link ist object mit entity verweis auf devicestates

			if (link2.entity !== 'array' && link2.entity !== 'icon' && key !== 'info') {
				const value = devicestates[key][link2.entity][key2];
				let msg = {
					topic: '',
					getId: '',
					entity: '',
					channel: '',
					type: '',
					item: '',
					states: '',
					on: '',
					off: ''
				};

				const state_topic = topic + '/' + deviceID + '_' + key + '/' + key2;
				const getId = deviceID + '.' + key + '.' + key2;
				const entity = value.entity_type;

				msg.topic = state_topic;
				msg.getId = getId;
				msg.entity = entity;
				msg.channel = key;
				msg.type = link2.entity;
				msg.item = key2;
				if (value.payload_on) {
					msg.on = value.payload_on;
				}
				if (value.payload_off) {
					msg.off = value.payload_off;
				}
				if (value.states) {
					msg.states = value.states;
				}
				msgqeue.push(msg);

				//extra batteries
				if (bat1) {
					msg.topic = topic + '/' + deviceID + '_' + 'bmsSlave1' + '/' + key2;
					msg.getId = deviceID + '.' + 'bmsSlave1' + '.' + key2;
					msg.entity = entity;
					msg.channel = key;
					msg.type = link2.entity;
					msg.item = key2;
					if (value.payload_on) {
						msg.on = value.payload_on;
					}
					if (value.payload_off) {
						msg.off = value.payload_off;
					}
					if (value.states) {
						msg.states = value.states;
					}
					msgqeue.push(msg);
				}
				if (bat2) {
					msg.topic = topic + '/' + deviceID + '_' + 'bmsSlave2' + '/' + key2;
					msg.getId = deviceID + '.' + 'bmsSlave2' + '.' + key2;
					msg.entity = entity;
					msg.channel = key;
					msg.type = link2.entity;
					msg.item = key2;
					if (value.payload_on) {
						msg.on = value.payload_on;
					}
					if (value.payload_off) {
						msg.off = value.payload_off;
					}
					if (value.states) {
						msg.states = value.states;
					}
					msgqeue.push(msg);
				}
			}
		});
	});
	return msgqeue;
}

/**
 * @param {object} adapter
 * @param {any} topic
 * @param {any} payload
 * @param {any} qos
 */
async function publishAsync(adapter, topic, payload, qos) {
	try {
		await new Promise((resolve, reject) => {
			adapter.haClient.publish(topic, payload, { qos: qos }, (/** @type {any} */ error) => {
				if (error) {
					reject(error);
					return;
				}
				resolve('done');
			});
		});
		return;
	} catch (error) {
		adapter.log.debug('Error when publishing the HA MQTT message: ' + error);
	}
}

/**
 * @param {object} adapter
 * @param {string} id
 * @param {string} topic
 * @param {string} msg
 * @param {object} options
 * @param {boolean} log
 * @param {string} part
 */
function publish(adapter, id, topic, msg, options, log, part) {
	if (adapter.haClient) {
		adapter.haClient.publish(topic, msg, options, (/** @type {string} */ error) => {
			if (error) {
				adapter.log.error('[' + part + '] Error when publishing the HA iob online message: ' + error);
			} else {
				adapter.haCounter++;
				if (log) {
					adapter.log.debug('[' + part + '] sent ' + msg + ' to HA for ' + id);
				}
			}
		});
	} else {
		adapter.log.warn('[' + part + ']should publish, but no open HA connection');
	}
}

/**
 * @param {object} adapter
 * @param {string} topic
 * @param {string} part
 */
function subscribe(adapter, topic, part) {
	if (adapter.haClient) {
		adapter.haClient.subscribe(topic, async (/** @type {string} */ err) => {
			if (!err) {
				adapter.log.debug('[' + part + '] subscribed the topics HA');
			} else {
				adapter.log.warn('[' + part + ']could not subscribe to topics HA ' + err);
			}
		});
	} else {
		adapter.log.warn('[' + part + '] should subcribe, but no open HA connection');
	}
}

/**
 * @param {object} adapter
 * @param {string} id
 * @param {array} msgArray
 * @param {object} options
 * @param {boolean} log
 * @param {string} part
 */
function publishArrayObjects(adapter, id, msgArray, options, log, part) {
	let i = 0;
	for (i; i < msgArray.length; i++) {
		publish(adapter, id, msgArray[i].topic, JSON.stringify(msgArray[i].payload), options, log, part);
	}
	if (log && i === msgArray.length - 1) {
		adapter.log.debug('[' + part + '] sent ' + i + ' objects to HA for ' + id);
	} else if (log) {
		adapter.log.debug(
			'[' + part + '] sent only ' + (i - 1) + ' of ' + msgArray.length + ' autodiscovery objects to HA for ' + id
		);
	}
}

/**
 * @param {{ [x: string]: { [x: string]: any; }; }} pdevices
 */
function defineHaDevices(pdevices) {
	let devices = [];
	for (let id in pdevices) {
		if (pdevices[id]['haEnable']) {
			devices.push(id);
		}
	}
	return devices;
}

exports.prepareDiscoveryMessage = prepareDiscoveryMessage;
exports.prepareFullHaUpd = prepareFullHaUpd;
exports.defineHaDevices = defineHaDevices;
exports.subscribe = subscribe;
exports.publish = publish;
exports.publishArrayObjects = publishArrayObjects;
