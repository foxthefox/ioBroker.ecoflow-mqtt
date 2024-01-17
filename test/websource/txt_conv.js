// kovertiert die update daten in json
const { readFileSync } = require('fs');

const device = 'wave';
let dict = { wave: {} };

const txt = readFileSync('./' + device + '.txt', 'utf8');

const rows = txt.split('\n');

for (let i = 0; i < rows.length; i++) {
	const idsplit = rows[i].split('\t');
	const cs_temp = idsplit[0].split('.');
	const channel = cs_temp[0];
	const state = cs_temp[1];
	const name = idsplit[2];
	if (!dict[device][channel]) {
		dict[device][channel] = {};
		dict[device][channel][state] = { entity: 'number', name: name };
	} else {
		dict[device][channel][state] = { entity: 'number', name: name };
	}
}

console.log(JSON.stringify(dict));
