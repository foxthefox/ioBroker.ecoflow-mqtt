function createobj(device) {
	let states = require('./ecoflow_data.js').pstationStates;
	let dict = require('./ecoflow_data.js').pstationStatesDict[device];
	let ranges = require('./ecoflow_data.js').pstationRanges[device];
	let cmd = require('./ecoflow_data.js').pstationCmd[device];
	let version = require('../io-package.json').common.version;

	if (Object.keys(ranges).length > 0) {
		for (let channel in ranges) {
			for (let type in ranges[channel]) {
				for (let state in ranges[channel][type]) {
					for (let value in ranges[channel][type][state]) {
						console.log(
							'manipulate: ' +
								channel +
								'/' +
								state +
								' old--new ' +
								states[channel][type][state][value] +
								' -- ' +
								ranges[channel][type][state][value]
						);
						states[channel][type][state][value] = ranges[channel][type][state][value];
					}
				}
			}
		}
	} else {
		console.log('ranges not possible ->' + device);
	}

	let obj = {};
	for (let channel in dict) {
		if (!obj[channel]) {
			obj[channel] = {};
		}
		for (let state in dict[channel]) {
			let type = dict[channel][state]['entity'];
			if (type !== 'icon') {
				if (!obj[channel][type]) {
					obj[channel][type] = {};
				}
				if (states[channel][type][state]) {
					if (!obj[channel][type]) {
						obj[channel][type] = {};
					}
					obj[channel][type][state] = states[channel][type][state];
					if (type === 'switch' || type === 'level') {
						if (device !== 'delta2' || device !== 'delta2max') {
							obj[channel][type][state]['cmd'] = JSON.stringify(cmd[channel][state]['msg']);
						} else {
							obj[channel][type][state]['cmd'] = cmd[channel][state];
							delete obj[channel][type][state]['values']['valName'];
						}
					} else if (type === 'diagnostic' && states[channel][type][state][state]) {
						obj[channel][type][state]['values'] = JSON.stringify(states[channel][type][state][state]);
					}
				} else {
					console.log('not created/mismatch ->' + channel + ' ' + state + ' ' + type);
				}
			}
		}
	}
	return { version: version, device: device, data: obj };
}

function makedoku(device) {
	const obj = createobj(device);
	const fs = require('fs');
	const handlebars = require('handlebars');

	handlebars.registerHelper('ifeq', function(a, b, options) {
		if (a == b) {
			return options.fn(this);
		}
		return options.inverse(this);
	});

	handlebars.registerHelper('ifnoteq', function(a, b, options) {
		if (a != b) {
			return options.fn(this);
		}
		return options.inverse(this);
	});

	handlebars.registerHelper('lowercase', function(str) {
		if (str && typeof str === 'string') {
			return str.toLowerCase();
		}
		return '';
	});

	handlebars.registerHelper('uppercase', function(str) {
		if (str && typeof str === 'string') {
			return str.toUpperCase();
		}
		return '';
	});
	const inFile = './gen_doc.hbs';
	let source = fs.readFileSync(inFile, 'utf8');
	const template = handlebars.compile(source, { strict: true });
	const result = template(obj);
	//console.log(result.replace(/&amp;/g, '&'));
	//console.log(result.replace(/&quot;/g, ''));
	fs.writeFileSync('../doc/devices/' + device + '.md', result.replace(/&amp;/g, '&').replace(/&quot;/g, ''));
}

const devices = [ 'delta', 'deltamini', 'deltamax', 'deltapro' ];

function createDocu() {
	const devices = [ 'delta', 'deltamini', 'deltamax', 'deltapro' ];
	for (let i = 0; i < devices.length; i++) {
		makedoku(devices[i]);
	}
}

createDocu();
