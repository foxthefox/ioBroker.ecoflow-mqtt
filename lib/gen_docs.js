function createobj(device) {
	let states = {};
	let dict = {};
	let ranges = {};
	let cmd = {};
	let version = require('../io-package.json').common.version;

	if (
		device === 'delta' ||
		device === 'deltamini' ||
		device === 'deltamax' ||
		device === 'deltapro' ||
		device === 'delta2' ||
		device === 'delta2max' ||
		device === 'rivermax' ||
		device === 'riverpro' ||
		device === 'river2max' ||
		device === 'river2pro' ||
		device === 'wave2' ||
		device === 'glacier' ||
		device === 'generator' ||
		device === 'shelly3em'
	) {
		states = require('./ecoflow_data.js').pstationStates;
		dict = require('./ecoflow_data.js').pstationStatesDict[device];
		ranges = require('./ecoflow_data.js').pstationRanges[device];
		cmd = require('./ecoflow_data.js').pstationCmd[device];
	} else if (device === 'powerkit') {
		states = require('./ef_powerkit_data.js').powerkitStates;
		dict = require('./ef_powerkit_data.js').powerkitStatesDict[device];
		ranges = require('./ef_powerkit_data.js').powerkitRanges[device + 'bp5000'];
		cmd = require('./ef_powerkit_data.js').powerkitCmd[device];
	} else if (device === 'panel') {
		console.log('panel');
		states = require('./ef_shp_data.js').panelStates;
		dict = require('./ef_shp_data.js').panelStatesDict[device];
		ranges = require('./ef_shp_data.js').panelRanges[device];
		cmd = require('./ef_shp_data.js').panelCmd[device];
	} else if (device === 'panel2') {
		console.log('panel2');
		states = require('./ef_shp2_data.js').panel2States;
		dict = require('./ef_shp2_data.js').panel2StatesDict[device];
		ranges = require('./ef_shp2_data.js').panel2Ranges[device];
		cmd = require('./ef_shp2_data.js').panel2Cmd[device];
	} else if (device === 'powerocean') {
		console.log('powerocean');
		states = require('./ef_powerocean_data.js').poweroceanStates;
		dict = require('./ef_powerocean_data.js').poweroceanStatesDict[device];
		ranges = require('./ef_powerocean_data.js').poweroceanRanges[device];
		cmd = require('./ef_powerocean_data.js').poweroceanCmd[device];
	} else {
		states = require('./ecoflow_data.js').pstreamStates;
		ranges = require('./ecoflow_data.js').pstreamRanges[device];
		cmd = require('./ecoflow_data.js').pstreamCmd[device];
		if (device !== 'plug' && device !== 'deltaproultra') {
			device = 'pstream';
		}
		dict = require('./ecoflow_data.js').pstreamStatesDict[device];
		console.log('dict' + JSON.stringify(dict));
	}
	console.log('cmd  ' + cmd);
	console.log('ranges  ' + ranges);
	if (Object.keys(ranges).length > 0) {
		for (let channel in ranges) {
			console.log(channel);
			for (let type in ranges[channel]) {
				console.log(type);
				for (let state in ranges[channel][type]) {
					console.log(state);
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
		//console.log(channel);
		if (channel !== 'info' && channel !== 'action') {
			if (!obj[channel]) {
				obj[channel] = {};
			}
			for (let state in dict[channel]) {
				console.log(state);
				let type = dict[channel][state]['entity'];
				//console.log(type);
				if (type !== 'icon' && type !== 'info' && type !== 'action') {
					if (!obj[channel][type]) {
						obj[channel][type] = {};
					}
					if (states[channel][type][state]) {
						if (!obj[channel][type]) {
							obj[channel][type] = {};
						}
						obj[channel][type][state] = states[channel][type][state];
						if (type === 'switch' || type === 'level') {
							if (
								device !== 'delta2' &&
								device !== 'delta2max' &&
								device !== 'river2max' &&
								device !== 'river2pro' &&
								device !== 'wave2' &&
								device !== 'glacier' &&
								device !== 'panel'
							) {
								obj[channel][type][state]['cmd'] = JSON.stringify(cmd[channel][state]['msg']);
							} else {
								obj[channel][type][state]['cmd'] = JSON.stringify(cmd[channel][state]);
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
	}
	return { version: version, device: device, data: obj };
}

function makedoku(device) {
	const obj = createobj(device);
	console.log(JSON.stringify(obj));
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
	console.log(device + '.md created');
}

const devices = [ 'delta', 'deltamini', 'deltamax', 'deltapro', 'delta2', 'delta2max', 'pstream600' ];

function createDocu() {
	const devices = [
		'delta',
		'deltamini',
		'deltamax',
		'deltapro',
		'delta2',
		'delta2max',
		'pstream600',
		'plug',
		'riverpro',
		'river2pro',
		'rivermax',
		'river2max',
		'wave2',
		'glacier',
		'generator',
		'deltaproultra',
		'powerkit',
		'powerocean',
		'shelly3em',
		'panel',
		'panel2'
	];
	for (let i = 0; i < devices.length; i++) {
		makedoku(devices[i]);
	}
}

createDocu();
