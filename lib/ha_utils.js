function prepareDiscoveryMessage(mydevice, model, powerstation, device) {
	let msgqeue = [];
	Object.entries(mydevice[model]).forEach(([ key, link ]) => {
		//key mppt/ems...
		//link possible values
		Object.entries(link).forEach(([ key2, link2 ]) => {
			// key2 = value
			// link ist object mit entity verweis auf powerstation
			// config path: sensor/HW51ZOH4SF4U1217/pv1InputVolt/config
			// state_topic: ecoflow/HW51ZOH4SF4U1217/pv1InputVolt
			// uniq_id: HW51ZOH4SF4U1217_pv1InputVolt

			// andere Methode um JSON direkt zu verarbeiten
			// https://community.home-assistant.io/t/sonoff-pow/40672/10
			//
			// config path: sensor/HW51ZOH4SF4U1217/pv1InputVolt/config
			// state_topic: ecoflow/HW51ZOH4SF4U1217/pstream
			// uniq_id: HW51ZOH4SF4U1217_pv1InputVolt
			// let state_topic= "ecoflow/"+inverter.device.identifiers+"/pstream";    // "/"+key.toLowerCase
			// let value_template = '{{value_json["'+key +'"]|round(3)}}';
			if (link2.entity == 'number') {
				let value = powerstation[key]['number'][key2];
				let msg = {
					topic: '',
					payload: ''
				};
				let mqtt_config_topic =
					'homeassistant/' +
					value.entity_type +
					'/' +
					device.identifiers +
					'_' +
					key +
					'/' +
					key2 +
					'/config';
				let sensor_unique_id = device.identifiers + '_' + key + '_' + key2;
				let state_topic = 'ecoflow/' + device.identifiers + '_' + key + '/' + key2; // "/"+key.toLowerCase
				let value_template = '{{value|round(3)}}';

				let discovery_message = {
					has_entity_name: true,
					availability_topic: device.identifiers + '/status',
					payload_available: 'online',
					payload_not_available: 'offline',
					unique_id: sensor_unique_id,
					state_class: 'measurement',
					state_topic: state_topic,
					value_template: value_template,
					device: {
						identifiers: device.identifiers + '_' + key,
						name: device.identifiers + '_' + key,
						manufacturer: device.manufacturer,
						model: device.model
					}
				};
				if (value.name) discovery_message['name'] = value.name;

				if (value.state_topic) discovery_message['state_topic'] = value.state_topic;

				if (value.entity_type === 'switch') {
					let command_topic = 'ecoflow/' + device.identifiers + '_' + key + '/pstream/' + key2 + '/set';
					discovery_message['command_topic'] = command_topic;
				}

				if (value.unit_of_measurement) discovery_message['unit_of_measurement'] = value.unit_of_measurement;

				if (value.device_class) discovery_message['device_class'] = value.device_class;

				if (value.entity_category) discovery_message['entity_category'] = value.entity_category;

				if (value.entity_type) discovery_message['entity_type'] = value.entity_type;

				if (value.icon) discovery_message['icon'] = value.icon;

				if (value.min)
					if (value.max == 'lookup') {
						// check variable setting
					} else {
						discovery_message['min'] = value.min;
					}
				if (value.max)
					if (value.max == 'lookup') {
						// check variable setting
					} else {
						discovery_message['max'] = value.max;
					}

				if (value.payload_on) discovery_message['payload_on'] = value.payload_on;

				if (value.payload_off) discovery_message['payload_off'] = value.payload_off;
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

		if (powerstation[part1]) {
			if (powerstation[part1].number[part2]) {
				let val = nodeContext.get(part1 + '_' + part2);
				let msgval = parseFloat(msg.payload.params[key] * powerstation[part1].number[part2].mult);
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
