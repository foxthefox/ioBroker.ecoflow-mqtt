const models = require('./ecoflow_data.js').models;

function prepareDiscoveryMessage(deviceID, type, devicedict, devicestates, topic, adapterversion) {
	//function must be called only after the modification of ranges was done
	let msgqeue = [];

	//const device_config_topic = 'homeassistant/' + 'binary_sensor' + '/' + deviceID + '/config';
	const origin = {
		name: 'iobroker.ecoflow-mqtt',
		sw_version: adapterversion
	};
	/*
	const device_discovery_msg = {
		unique_id: deviceID + '_main',
		device: {
			identifiers: deviceID,
			manufacturer: models[type]['manufacturer'],
			name: deviceID + '_main',
			model: models[type]['model'],
			sw_version: '0.0.22',
			suggested_area: 'energy'
		},
		device_class: 'connectivity',
		payload_on: 'true',
		payload_off: 'false',
		state_topic: topic + '/' + deviceID + '/conn',
		name: 'Main Device Connection',
		origin: origin
	};
    */
	let msg = {};
	//msg['topic'] = device_config_topic;
	//msg['payload'] = device_discovery_msg;
	//msgqeue.push(msg);
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
				const mqtt_config_topic =
					'homeassistant/' + value.entity_type + '/' + deviceID + '_' + key + '/' + key2 + '/config';
				const sensor_unique_id = deviceID + '_' + key + '_' + key2;
				const state_topic = topic + '/' + deviceID + '_' + key + '/' + key2; // "/"+key.toLowerCase

				const value_template = '{{value|round(3)}}';

				let discovery_message = {
					has_entity_name: true,
					unique_id: sensor_unique_id,
					state_topic: state_topic,
					device: {
						identifiers: deviceID + '_' + key,
						name: key,
						manufacturer: models[type]['manufacturer'],
						model: models[type]['model']
						//via_device: deviceID
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
						discovery_message['value_template'] = value_template;
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

				//button

				// switch
				if (value.entity_type === 'switch' || value.entity_type === 'level' || value.entity_type === 'select') {
					let command_topic = topic + '/' + deviceID + '/set/' + key + '/' + key2;
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
			}
		});
	});
	return msgqeue;
}

function prepareHaStream() {
	let msgstream = [];
	for (let key in msg.payload.params) {
		let keysplit = key.split('.');
		let part1 = keysplit[0];
		let part2 = keysplit[1];
		if (part1 === 'bms_bmsStatus') part1 = 'bmsMaster';
		if (part1 === 'bms_emsStatus') part1 = 'ems';

		if (devicestates[part1]) {
			if (devicestates[part1].number[part2]) {
				let val = nodeContext.get(part1 + '_' + part2);
				let msgval = parseFloat(msg.payload.params[key] * devicestates[part1].number[part2].mult);
				let msgpart = {
					topic: '',
					payload: ''
				};
				if (val != null) {
					if (val == msgval) {
						//console.log("same val")
					} else {
						nodeContext.set(part1 + '_' + part2, msgval);
						msgpart.payload = msgval;
						msgpart.topic = 'ecoflow/DAEBZ5ZE4151148_' + part1 + '/' + part2;
						msgstream.push(msgpart);
					}
				} else {
					nodeContext.set(part1 + '_' + part2, msgval);
					msgpart.payload = msgval;
					msgpart.topic = 'ecoflow/DAEBZ5ZE4151148_' + part1 + '/' + part2;
					msgstream.push(msgpart);
				}
			}
		} else {
			this.debug('unknown value ' + key);
		}
	}
}

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
exports.prepareHaStream = prepareHaStream;
exports.defineHaDevices = defineHaDevices;
