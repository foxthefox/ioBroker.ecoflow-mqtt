function createobj(device) {
    let states = {};
    let dict = {};
    let ranges = {};
    let cmd = {};
    let version = require('../../io-package.json').common.version;
    if (device === 'pstream600' || device === 'pstream800') {
        device = 'pstream';
    }
    states = require('../dict_data/ef_' + device + '_data.js').deviceStates;
    dict = require('../dict_data/ef_' + device + '_data.js').deviceStatesDict[device];
    cmd = require('../dict_data/ef_' + device + '_data.js').deviceCmd[device];

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
                        console.log(`not created/mismatch ->${channel} ${state} ${type}`);
                    }
                }
            }
        }
    }
    return { version: version, device: device, data: obj };
}

function makedoku(device) {
    console.log(`WORKING on device ${device}`);
    const obj = createobj(device);
    console.log(JSON.stringify(obj));
    const fs = require('fs');
    const handlebars = require('handlebars');

    handlebars.registerHelper('ifeq', function (a, b, options) {
        if (a == b) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    handlebars.registerHelper('ifnoteq', function (a, b, options) {
        if (a != b) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    handlebars.registerHelper('lowercase', function (str) {
        if (str && typeof str === 'string') {
            return str.toLowerCase();
        }
        return '';
    });

    handlebars.registerHelper('uppercase', function (str) {
        if (str && typeof str === 'string') {
            return str.toUpperCase();
        }
        return '';
    });
    const path = require('path');
    const inFile = 'gen_doc.hbs';
    let source = fs.readFileSync(path.join(__dirname, './') + inFile, 'utf8');
    const template = handlebars.compile(source, { strict: true });
    const result = template(obj);
    //console.log(result.replace(/&amp;/g, '&'));
    //console.log(result.replace(/&quot;/g, ''));
    fs.writeFileSync(
        `${path.join(__dirname, '../../doc/devices/') + device}.md`,
        result.replace(/&amp;/g, '&').replace(/&quot;/g, ''),
    );
    console.log(`${device}.md created`);
}

const devices = ['delta', 'deltamini', 'deltamax', 'deltapro', 'delta2', 'delta2max', 'pstream600'];

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
        'panel2',
        'alternator',
        'deltapro3',
        'delta3plus',
        'river3plus',
        'delta3',
        'smartmeter',
        'poweroceanfit',
        'stream_ultra',
        'stream_ac_pro',
        'wave3',
        'poweroceanplus',
        'river3',
        'stream_inverter',
        'glacier55',
    ];
    for (let i = 0; i < devices.length; i++) {
        makedoku(devices[i]);
    }
}

createDocu();
