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
        'shelly3em',
        'panel',
        'panel2',
        'alternator',
        'deltapro3',
        'delta3plus',
        'river3plus',
        'delta3',
        'smartmeter',
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
    const ranges = require(`./ef_${device}_data.js`).deviceRanges[device];

    for (let channel in ranges) {
        for (let type in ranges[channel]) {
            for (let state in ranges[channel][type]) {
                for (let value in ranges[channel][type][state]) {
                    if (states[channel][type][state][value] !== ranges[channel][type][state][value]) {
                        console.log(
                            `difference: ${device}/${channel}/${type}/${state} old--new ${
                                states[channel][type][state][value]
                            } -- ${ranges[channel][type][state][value]}`,
                        );
                    }
                }
            }
        }
    }
}

testRanges();
