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
    ];
    for (let i = 0; i < devices.length; i++) {
        testrange(devices[i]);
    }
}

function testrange(device) {
    if (device === 'pstream600' || device === 'pstream800') {
        device = 'pstream';
    }
    const states = require(`./ef_${device}_data.js`).deviceStates;
    const dict = require(`./ef_${device}_data.js`).deviceStatesDict[device];

    for (let channel in dict) {
        for (let datapoint in dict[channel]) {
            const type = dict[channel][datapoint]['entity'];
            if (!states[channel][type]) {
                console.log(`${device} missing state obj type ${channel}/${type}`);
            } else {
                if (!states[channel][type][datapoint]) {
                    console.log(`${device} missing state obj ${channel}/${datapoint}`);
                }
            }
        }
    }
}

testRanges();

//testrange('poweroceanfit')
