function convertProtoToObject(filename) {
	var string = require('fs').readFileSync('./'.concat(filename), 'utf8');
	var textlines = string.split(/\r?\n/);
	let message = {};
	for (let i = 1; i < textlines.length - 1; i++) {
		const linesplit = textlines[i].split(' = ');
		const items = linesplit[0].split(' ');
		message[linesplit[1].replace(';', '')] = { name: items[4], what: items[3] };
		//message[items[4]] = { entity: 'string' };
	}
	return message;
}

function createArreayOfFieldnumber(filename) {
	var string2 = require('fs').readFileSync('./'.concat(filename), 'utf8');
	var textlines = string2.split(/\r?\n/);
	let content = [];

	for (let i = 1; i < textlines.length; i++) {
		var linesplit = textlines[i].split('\t');
		content.push(linesplit[1]);
	}
	return content;
}

const snakeToCamel = (str) =>
	str.toLowerCase().replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));

const snakeToName = (str) =>
	str.toLowerCase().replace(/([-_][a-z])/g, (group) => group.replace('-', ' ').replace('_', ' '));

function guessEntityFromName(name) {
	let type = 'string';
	if (
		name.toLowerCase().includes('pwr') ||
		name.toLowerCase().includes('pow') ||
		name.toLowerCase().includes('wat') ||
		name.toLowerCase().includes('amp') ||
		name.toLowerCase().includes('cur') ||
		name.toLowerCase().includes('vol') ||
		name.toLowerCase().includes('volt') ||
		name.toLowerCase().includes('time') ||
		name.toLowerCase().includes('temp') ||
		name.toLowerCase().includes('ener') ||
		name.toLowerCase().includes('energy') ||
		name.toLowerCase().includes('cap') ||
		name.toLowerCase().includes('soc') ||
		name.toLowerCase().includes('soh') ||
		name.toLowerCase().includes('freq') ||
		name.toLowerCase().includes('feq') ||
		name.toLowerCase().includes('rssi') ||
		name.toLowerCase().includes('spd') ||
		name.toLowerCase().includes('lcd') ||
		name.toLowerCase().includes('light')
	) {
		type = 'number';
	} else if (
		name.toLowerCase().includes('state') ||
		name.toLowerCase().includes('stat') ||
		name.toLowerCase().includes('sta') ||
		name.toLowerCase().includes('fsm') ||
		name.toLowerCase().includes('type') ||
		name.toLowerCase().includes('flag') ||
		name.toLowerCase().includes('flow') ||
		name.toLowerCase().includes('on') ||
		name.toLowerCase().includes('off') ||
		name.toLowerCase().includes('mode') ||
		name.toLowerCase().includes('switch') ||
		name.toLowerCase().includes('fault') ||
		name.toLowerCase().includes('code') ||
		name.toLowerCase().includes('enable')
	) {
		type = 'diagnostic';
	}
	return type;
}

function createProtoAndDictFromContentAndObject(array, protoObj) {
	let protoMsg = '';
	let dict = {};
	for (let i = 0; i < array.length; i++) {
		if (protoObj[array[i]]) {
			protoMsg = protoMsg.concat(
				'   optional ',
				protoObj[array[i]]['what'],
				' ',
				protoObj[array[i]]['name'],
				' = ',
				array[i],
				';',
				'\r\n'
			);
			dict[snakeToCamel(protoObj[array[i]]['name'])] = {
				name: snakeToName(protoObj[array[i]]['name']),
				entity: guessEntityFromName(protoObj[array[i]]['name'])
			};
		} else {
			console.log(array[i] + ' not in reference object ')
		}

	}
	return { protoMsg: protoMsg, dict: dict };
}

function createProtoAndDictFromMessage(protoObj) {
	let protoMsg = '';
	let dict = {};
	for (let o in protoObj) {
		protoMsg = protoMsg.concat(
			'   optional ',
			protoObj[o]['what'],
			' ',
			protoObj[o]['name'],
			' = ',
			o,
			';',
			'\r\n'
		);
		dict[snakeToCamel(protoObj[o]['name'])] = {
			name: snakeToName(protoObj[o]['name']),
			entity: guessEntityFromName(protoObj[o]['name'])
		};
	}
	return { protoMsg: protoMsg, dict: dict };
}

function exchangeName(obj, names) {
	let mod = {};
	for (let item in obj) {
		let name = obj[item]['name'];
		if (names[item]) {
			name = names[item]['name'];
		}
		mod[item] = { name: name, entity: obj[item]['entity'] };
	}
	return mod;
}

function guessUnitTypeFromName(name) {
	let unit = '';
	let type = 'check';
	if (name.toLowerCase().includes('pow') || name.toLowerCase().includes('wat') || name.toLowerCase().includes('pwr')) {
		unit = 'W';
		type = 'power';
	} else if (name.toLowerCase().includes('amp') || name.toLowerCase().includes('cur')) {
		unit = 'A';
		type = 'current';
	} else if (name.toLowerCase().includes('vol') || name.toLowerCase().includes('volt')) {
		unit = 'V';
		type = 'voltage';
	} else if (name.toLowerCase().includes('time')) {
		unit = 'h';
		type = 'duration';
	} else if (name.toLowerCase().includes('temp')) {
		unit = '°C';
		type = 'temperature';
	} else if (name.toLowerCase().includes('ener') || name.toLowerCase().includes('energy')) {
		unit = 'Wh';
		type = 'energy';
	} else if (name.toLowerCase().includes('cap')) {
		unit = 'mAh';
		type = 'capacity';
	} else if (name.toLowerCase().includes('soc') || name.toLowerCase().includes('soh')) {
		unit = '%';
		type = 'battery';
	} else if (name.toLowerCase().includes('freq') || name.toLowerCase().includes('feq')) {
		unit = 'Hz';
		type = 'frequency';
	} else if (name.toLowerCase().includes('rssi')) {
		unit = 'dBm';
		type = 'signal_strength';
	} else if (name.toLowerCase().includes('spd')) {
		unit = '1/min';
		type = 'speed';
	} else if (name.toLowerCase().includes('lcd') || name.toLowerCase().includes('light')) {
		unit = '%';
		type = 'brightness';
	}

	return { unit: unit, type: type };
}

function createStatesFromDict(device, baseItem) {
	let dict = {};
	dict[device] = {};
	let states = {};
	states[device] = {};

	for (let channel in baseItem[device]) {
		for (let state in baseItem[device][channel]) {
			const entity = baseItem[device][channel][state]['entity'];

			if (!dict[device][channel]) {
				dict[device][channel] = {};
				dict[device][channel][state] = { entity: entity };
			} else {
				dict[device][channel][state] = { entity: entity };
			}

			const name = baseItem[device][channel][state]['name'];

			if (!states[device][channel]) {
				states[device][channel] = {};
			}

			if (!states[device][channel][entity] && entity !== 'icon') {
				states[device][channel][entity] = {};
			}
			const unitType = guessUnitTypeFromName(state);
			if (entity !== 'icon') {
				states[device][channel][entity][state] = {};

				switch (entity) {
					case 'number':
						states[device][channel][entity][state]['min'] = 0;
						states[device][channel][entity][state]['max'] = 60;
						states[device][channel][entity][state]['unit_of_measurement'] = unitType.unit;
						states[device][channel][entity][state]['mult'] = 1;
						states[device][channel][entity][state]['entity_type'] = 'sensor';
						states[device][channel][entity][state]['device_class'] = unitType.type;
						states[device][channel][entity][state]['role'] = 'value';
						states[device][channel][entity][state]['name'] = name;
						states[device][channel][entity][state]['subrole'] = 'number';
						break;
					case 'level':
						states[device][channel][entity][state]['min'] = 0;
						states[device][channel][entity][state]['max'] = 800;
						states[device][channel][entity][state]['unit_of_measurement'] = unitType.unit;
						states[device][channel][entity][state]['mult'] = 1;
						states[device][channel][entity][state]['step'] = 1;
						states[device][channel][entity][state]['entity_type'] = 'sensor';
						states[device][channel][entity][state]['device_class'] = unitType.type;
						states[device][channel][entity][state]['name'] = name;
						states[device][channel][entity][state]['role'] = 'level';
						states[device][channel][entity][state]['subrole'] = unitType.type;
						break;
					case 'diagnostic':
						states[device][channel][entity][state]['entity_type'] = 'text';
						states[device][channel][entity][state]['entity_category'] = 'diagnostic';
						states[device][channel][entity][state]['name'] = name;
						states[device][channel][entity][state]['role'] = 'info';
						states[device][channel][entity][state][state] = { 0: 'OK?' };
						break;
					case 'string':
						states[device][channel][entity][state]['entity_type'] = 'text';
						states[device][channel][entity][state]['entity_category'] = 'diagnostic';
						states[device][channel][entity][state]['name'] = name;
						states[device][channel][entity][state]['role'] = 'info';
						break;
					case 'switch':
						states[device][channel][entity][state]['entity_type'] = 'switch';
						states[device][channel][entity][state]['device_class'] = 'switch';
						states[device][channel][entity][state]['payload_off'] = 'off';
						states[device][channel][entity][state]['payload_on'] = 'on';
						states[device][channel][entity][state]['name'] = name;
						states[device][channel][entity][state]['role'] = 'switch';
						states[device][channel][entity][state][state] = { '0': 'off', '1': 'on' };
						break;
					default:
						break;
				}
			}
		}
	}
	return { dict, states };
}

function createUnknownStructFromNetlifyDecode(filename) {
	//datei enthält den output von https://protobuf-decoder.netlify.app inkl. Überschrift
	//zweizeiligkeit eleminieren !
	var string = require('fs').readFileSync('./'.concat(filename), 'utf8');
	var textlines = string.split(/\r?\n/);

	let message = {};

	for (let i = 1; i < textlines.length; i++) {
		var linesplit = textlines[i].split('\t');
		// console.log(linesplit[1] + '' + linesplit[2]);
		let type = '';

		if (linesplit[2] == 'varint') {
			message[linesplit[1]] = 'int32';
		} else if (linesplit[2] == 'fixed32') {
			message[linesplit[1]] = 'float';
		} else {
			message[linesplit[1]] = linesplit[2];
		}
	}
	console.log(message);

	let protoMsg = '';

	for (let items in message) {
		protoMsg = protoMsg.concat('   optional ', message[items], ' unknown', items, ' = ', items, ';', '\r\n');
	}
	return protoMsg;
}

function createMsgObjFromString(string) {
	var textlines = string.split(/\r?\n/);
	let message = {};
	for (let i = 0; i < textlines.length; i++) {
		var linesplit = textlines[i].split(': ');
		message['msg'.concat(String(i))] = linesplit[2];
	}
	return message;
}

module.exports = {
	convertProtoToObject,
	createArreayOfFieldnumber,
	exchangeName,
	createProtoAndDictFromMessage,
	createProtoAndDictFromContentAndObject,
	guessEntityFromName,
	guessUnitTypeFromName,
	createStatesFromDict,
	createUnknownStructFromNetlifyDecode,
	createMsgObjFromString
};
