function testRanges() {
    const devices = [
        'pstream600',
        'plug',
        'deltaproultra',
        'powerocean',
        'poweroceanfit',
        'panel2',
        'alternator',
        'deltapro3',
        'delta3plus',
        'river3plus',
        'delta3',
        'smartmeter',
        'delta3',
        'river3',
    ];
    for (let i = 0; i < devices.length; i++) {
        testrange(devices[i]);
    }
}
var newproto = {};

function testrange(device) {
    if (device === 'pstream600' || device === 'pstream800') {
        device = 'pstream';
    }
    newproto[device] = {};
    newproto[device]['cmdFunc'] = {};
    const oldproto = require(`./ef_${device}_data.js`).protoMsg;

    for (let id in oldproto['cmdId']) {
        const msgs = oldproto['cmdId'][id]['cmdFunc'];
        console.log(msgs);
        for (let func in msgs) {
            console.log(`${id} ${func}`);
            let message = oldproto['cmdId'][id]['cmdFunc'][func];
            if (!newproto[device]['cmdFunc'][func]) {
                newproto[device]['cmdFunc'][func] = {};
                newproto[device]['cmdFunc'][func]['cmdId'] = {};
                newproto[device]['cmdFunc'][func]['cmdId'][id] = message;
            } else {
                newproto[device]['cmdFunc'][func]['cmdId'][id] = message;
            }
        }
    }
}

//testRanges();

testrange('stream_ac_pro');
console.log(JSON.stringify(newproto));
