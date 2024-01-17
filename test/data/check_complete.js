let states = require('../../lib/ecoflow_data.js').pstationStates;

const device = 'river2pro';
let jdevice = require('./' + device + '.json');

let missing = {};
missing[device] = {};

let dict = {};
dict[device] = {};

let typetest = [ 'string', 'switch', 'level', 'diagnostic', 'number', 'icon' ];

for (let channel in jdevice) {
	for (let combstate in jdevice[channel]) {
		let ct = combstate.split('.');
		let state = ct[1];

		let type = '';
		for (let i = 0; i < typetest.length; i++) {
			if (channel === 'bms') channel = 'bmsMaster';
			console.log(channel + '   ' + typetest[i] + '  ' + state);
			if (states[channel]) {
				if (states[channel][typetest[i]]) {
					const key = Object.keys(states[channel][typetest[i]]).find((key) => key === state);
					if (key === state) {
						type = typetest[i];
						break;
					}
				}
			}
		}
		if (type.length > 0) {
			if (!dict[device][channel]) {
				dict[device][channel] = {};
				dict[device][channel][state] = { entity: type };
			} else {
				dict[device][channel][state] = { entity: type };
			}
		} else {
			if (!missing[device][channel]) {
				missing[device][channel] = {};
				missing[device][channel][state] = { entity: 'missing' };
			} else {
				missing[device][channel][state] = { entity: 'missing' };
			}
		}
	}
}

console.log('missing: ' + JSON.stringify(missing));
console.log('');
console.log('dict: ' + JSON.stringify(dict));
