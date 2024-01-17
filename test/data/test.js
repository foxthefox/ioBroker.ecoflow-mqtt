let states = require('../../lib/ecoflow_data.js').pstationStates;

let jdelta2 = require('./delta2.json');
let jdelta2max = require('./delta2max.json');
let jdeltapro = require('./deltaProSlave.json');
let jdeltamini = require('./deltaMini.json');
let jriverpro = require('./riverpro.json');
let jriver2pro = require('./river2pro.json');

let missing = {
	delta2: {},
	delta2max: {},
	deltamini: {},
	deltaMax: {},
	deltapro: {},
	river2Pro: {},
	river2max: {},
	riverpro: {}
};

let dict = {
	delta2: {},
	delta2max: {},
	deltamini: {},
	deltaMax: {},
	deltapro: {},
	river2Pro: {},
	river2max: {},
	riverpro: {}
};

let typetest = [ 'string', 'switch', 'level', 'diagnostic', 'number', 'icon' ];
/*
let delta2 = jdelta2;
for (let channel in delta2) {
	for (let combstate in delta2[channel]) {
		let ct = combstate.split('.');
		let state = ct[1];

		let type = '';
		for (let i = 0; i < typetest.length; i++) {
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
			if (!dict['delta2'][channel]) {
				dict['delta2'][channel] = {};
				dict['delta2'][channel][state] = { entity: type };
			} else {
				dict['delta2'][channel][state] = { entity: type };
			}
		} else {
			if (!missing['delta2'][channel]) {
				missing['delta2'][channel] = {};
				missing['delta2'][channel][state] = { entity: 'missing' };
			} else {
				missing['delta2'][channel][state] = { entity: 'missing' };
			}
		}
	}
}
*/
/*
let delta2max = jdelta2max;
for (let channel in delta2max) {
	for (let combstate in delta2max[channel]) {
		let ct = combstate.split('.');
		let state = ct[1];

		let type = '';
		for (let i = 0; i < typetest.length; i++) {
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
			if (!dict['delta2max'][channel]) {
				dict['delta2max'][channel] = {};
				dict['delta2max'][channel][state] = { entity: type };
			} else {
				dict['delta2max'][channel][state] = { entity: type };
			}
		} else {
			if (!missing['delta2max'][channel]) {
				missing['delta2max'][channel] = {};
				missing['delta2max'][channel][state] = { entity: 'missing' };
			} else {
				missing['delta2max'][channel][state] = { entity: 'missing' };
			}
		}
	}
}
*/

let riverpro = jriverpro;
for (let channel in riverpro) {
	for (let combstate in riverpro[channel]) {
		let ct = combstate.split('.');
		let state = ct[1];

		let type = '';
		for (let i = 0; i < typetest.length; i++) {
			//console.log(channel + '   ' + typetest[i] + '  ' + state);
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
			if (!dict['riverpro'][channel]) {
				dict['riverpro'][channel] = {};
				dict['riverpro'][channel][state] = { entity: type };
			} else {
				dict['riverpro'][channel][state] = { entity: type };
			}
		} else {
			if (!missing['riverpro'][channel]) {
				missing['riverpro'][channel] = {};
				missing['riverpro'][channel][state] = { entity: 'missing' };
			} else {
				missing['riverpro'][channel][state] = { entity: 'missing' };
			}
		}
	}
}

/*
let river2pro = jriver2pro;
for (let channel in river2pro) {
	for (let combstate in river2pro[channel]) {
		let ct = combstate.split('.');
		let state = ct[1];

		let type = '';
		for (let i = 0; i < typetest.length; i++) {
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
			if (!dict['riverpro'][channel]) {
				dict['riverpro'][channel] = {};
				dict['riverpro'][channel][state] = { entity: type };
			} else {
				dict['riverpro'][channel][state] = { entity: type };
			}
		} else {
			if (!missing['riverpro'][channel]) {
				missing['riverpro'][channel] = {};
				missing['riverpro'][channel][state] = { entity: 'missing' };
			} else {
				missing['riverpro'][channel][state] = { entity: 'missing' };
			}
		}
	}
}
*/
/*
let deltapro = jdeltapro;
for (let channel in deltapro) {
	for (let combstate in deltapro[channel]) {
		let ct = combstate.split('.');
		let state = ct[1];
		let type = '';
		for (let i = 0; i < typetest.length; i++) {
			type = '';
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
			if (!dict['deltapro'][channel]) {
				dict['deltapro'][channel] = {};
				dict['deltapro'][channel][state] = { entity: type };
			} else {
				dict['deltapro'][channel][state] = { entity: type };
			}
		} else {
			if (!missing['deltapro'][channel]) {
				missing['deltapro'][channel] = {};
				missing['deltapro'][channel][state] = { entity: 'missing' };
			} else {
				missing['deltapro'][channel][state] = { entity: 'missing' };
			}
		}
	}
}

/*
let deltamini = jdeltamini;
for (let channel in deltamini) {
	for (let combstate in deltamini[channel]) {
		let ct = combstate.split('.');
		let state = ct[1];

		let type = '';
		for (let i = 0; i < typetest.length; i++) {
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
			if (!dict['deltamini'][channel]) {
				dict['deltamini'][channel] = {};
				dict['deltamini'][channel][state] = { entity: type };
			} else {
				dict['deltamini'][channel][state] = { entity: type };
			}
		} else {
			if (!missing['deltamini'][channel]) {
				missing['deltamini'][channel] = {};
				missing['deltamini'][channel][state] = { entity: 'missing' };
			} else {
				missing['deltamini'][channel][state] = { entity: 'missing' };
			}
		}
	}
}
*/
console.log('missing: ' + JSON.stringify(missing));
console.log('');
console.log('dict: ' + JSON.stringify(dict));

/*
const pstationType = 'delta2';
let newstates = require('../../lib/ecoflow_data.js').pstationStates;
let pstationStatesDict = require('../../lib/ecoflow_data.js').pstationStatesDict[pstationType];
let pstationCmd = require('../../lib/ecoflow_data.js').pstationCmd[pstationType];

let channel = 'ems';
let item = 'maxCloseOilEb';
console.log(pstationCmd[channel]);
console.log(pstationCmd[channel][item]);
*/
