function testRanges() {
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
        'poweroceanfit',
        'shelly3em',
        'panel',
        'panel2',
        'alternator',
        'deltapro3',
        'delta3plus',
        'river3plus',
        'delta3',
        'smartmeter',
        'delta3',
        'river3',
        'stream_ac_pro',
        'stream_ultra',
        'wave3',
        'stream_inverter',
        'glacier55',
        'rapidpro320',
    ];
    for (let i = 0; i < devices.length; i++) {
        testrange(devices[i]);
    }
}
const snakeToCamel = str =>
    str.toLowerCase().replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''));

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const protobufjs = require('protobufjs');

async function testrange(device) {
    if (device === 'pstream600' || device === 'pstream800') {
        device = 'pstream';
    }
    const dict = require(`./ef_${device}_data.js`).deviceStatesDict[device];
    //https://stackoverflow.com/questions/68437919/how-can-we-convert-proto-file-and-json-descriptors
    // Alternative way without loading proto string from file
    //const root = protobufjs.parse('syntax = "proto3"; ...').root;​
    const proto = require(`./ef_${device}_data.js`).protoSource;

    for (const name in dict) {
        switch (name) {
            case 'BMSHeartBeatReport0':
            case 'BMSHeartBeatReport1':
            case 'action':
            case 'info':
                break;

            default:
                {
                    console.log(`\x1b[43m ${name} \x1b[0m`);
                    const root = await protobufjs.parse(proto).root;
                    const descriptorMsg = root.lookupType(name);
                    //console.log(descriptorMsg.fieldsArray);
                    let protoObj = {};
                    protoObj[name] = {};
                    // check for dict definitions are in prooto
                    for (const field of descriptorMsg.fieldsArray) {
                        if (Object.prototype.hasOwnProperty.call(dict[name], field.name)) {
                            //console.log(`\x1b[32m ${field.name}\x1b[0m`);
                        } else {
                            console.log(`\x1b[31m missing ${field.name} in dict \x1b[0m`);
                        }
                        protoObj[name][field.name] = field.type;
                    }
                    // check proto is in dict definitions
                    for (const id in dict[name]) {
                        if (Object.prototype.hasOwnProperty.call(protoObj[name], id)) {
                            //console.log(`\x1b[32m ${id} \x1b[0m`);
                        } else {
                            console.log(`\x1b[35m to much ${id} in dict  \x1b[0m`);
                        }
                    }
                }
                break;
        }
    }
}

//testRanges();

testrange('rapidpro320');
