let states = require('../../lib/ecoflow_data.js').pstationStates;

const device = 'wave2';
const quota = require('./' + device + '.json');
let jdevice = quota.data;

let missing = {};
missing[device] = {};

let dict = {};
dict[device] = {};

let typetest = [ 'string', 'switch', 'level', 'diagnostic', 'number', 'icon' ];

for (let combstate in jdevice['quotaMap']) {
	let ct = combstate.split('.');
	let channel = ct[0];
	let state = ct[1];

	let type = '';
	for (let i = 0; i < typetest.length; i++) {
		if (channel === 'bms_bmsStatus' || channel === 'bms') channel = 'bmsMaster';
		if (channel === 'bms_emsStatus') channel = 'ems';
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

console.log('missing: ' + JSON.stringify(missing));
console.log('');
console.log('dict: ' + JSON.stringify(dict));
