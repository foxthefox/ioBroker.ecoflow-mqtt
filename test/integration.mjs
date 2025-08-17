import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import { tests } from '@iobroker/testing';

import { expect } from 'chai';
import { doesNotMatch } from 'assert/strict';

console.log('PATH ist ' + path.join(__dirname, './data/'));

import * as pstreamstates from '../lib/dict_data/ef_pstream_data.js';
import * as streamacstates from '../lib/dict_data/ef_stream_ac_pro_data.js';
import * as streamultrastates from '../lib/dict_data/ef_stream_ultra_data.js';
import * as plugstates from '../lib/dict_data/ef_plug_data.js';
import * as dpustates from '../lib/dict_data/ef_deltaproultra_data.js';
import * as shpstates from '../lib/dict_data/ef_panel_data.js';
import * as shp2states from '../lib/dict_data/ef_panel2_data.js';
import * as oceanstates from '../lib/dict_data/ef_powerocean_data.js';
import * as oceanfitstates from '../lib/dict_data/ef_poweroceanfit_data.js';
import * as oceanplusstates from '../lib/dict_data/ef_poweroceanplus_data.js';
import * as kitstates from '../lib/dict_data/ef_powerkit_data.js';

import * as deltaministates from '../lib/dict_data/ef_deltamini_data.js';
import * as deltastates from '../lib/dict_data/ef_delta_data.js';
import * as deltamaxstates from '../lib/dict_data/ef_deltamax_data.js';
import * as deltaprostates from '../lib/dict_data/ef_deltapro_data.js';
import * as deltapro3states from '../lib/dict_data/ef_deltapro3_data.js';
import * as delta2states from '../lib/dict_data/ef_delta2_data.js';
import * as delta2maxstates from '../lib/dict_data/ef_delta2max_data.js';
import * as delta3states from '../lib/dict_data/ef_delta3_data.js';
import * as delta3plusstates from '../lib/dict_data/ef_delta3plus_data.js';

import * as river2prostates from '../lib/dict_data/ef_river2pro_data.js';
import * as river2maxstates from '../lib/dict_data/ef_river2max_data.js';
import * as riverprostates from '../lib/dict_data/ef_riverpro_data.js';
import * as rivermaxstates from '../lib/dict_data/ef_rivermax_data.js';
import * as river3states from '../lib/dict_data/ef_river3_data.js';
import * as river3plusstates from '../lib/dict_data/ef_river3plus_data.js';

import * as wave2states from '../lib/dict_data/ef_wave2_data.js';
import * as wave3states from '../lib/dict_data/ef_wave3_data.js';
import * as glacierstates from '../lib/dict_data/ef_glacier_data.js';
import * as generatorstates from '../lib/dict_data/ef_generator_data.js';
import * as shelly3emstates from '../lib/dict_data/ef_shelly3em_data.js';

function delay(t, val) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(val);
        }, t);
    });
}

// Run integration tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.integration(path.join(__dirname, '..'), {
    // If the adapter may call process.exit during startup, define here which exit codes are allowed.
    // By default, termination during startup is not allowed.
    allowedExitCodes: [11],

    // To test against a different version of JS-Controller, you can change the version or dist-tag here.
    // Make sure to remove this setting when you're done testing.
    controllerVersion: 'latest', // or a specific version like "4.0.1"

    defineAdditionalTests({ suite }) {
        suite('Test creation of devices', getHarness => {
            let harness;
            before('start the emulation', async () => {
                /*
				let port = 3333;
				const emulation = new FritzEmu(
					port,
					false,
					xmlDevicesGroups,
					xmlTemplate,
					xmlTriggerlist,
					xmlColorDefaults,
					xmlTempStat,
					xmlPowerStats,
					guestWlan,
					hkr_batt
				);
				emulation.setupHttpServer(function() {});
				*/
                harness = getHarness();
                const obj = {
                    native: {
                        /*
						fritz_ip: 'http://localhost:3333',
						fritz_user: 'admin',
						//obj.native.fritz_pw = encrypt(systemConfig.native.secret, 'password');
						fritz_pw: encrypt('Zgfr56gFe87jJOM', 'password'),
						fritz_interval: 300,
						fritz_strictssl: true,
						*/
                        glaciers: [{ devName: 'My Glacier', devId: 'BX11ZFB5EF412345', devType: 'glacier' }],
                        waves: [
                            { devName: 'My Wave2', devId: 'KT21ZCH2ZF112345', devType: 'wave2' },
                            { devName: 'My Wave3', devId: 'KT31ZC123456789', devType: 'wave3' },
                        ],
                        plugs: [{ devName: 'My Plug1', devId: 'HW52ZDH4SF12345', devType: 'plug' }],
                        panels: [
                            { devName: 'My panel', devId: 'SHP10ZFB5EF412345', devType: 'panel' },
                            { devName: 'My panel', devId: 'SHP20ZFB5EF412345', devType: 'panel2' },
                        ],
                        generators: [{ devName: 'My Generator', devId: 'DGEBZ5R123412345', devType: 'generator' }],
                        pstations: [
                            {
                                pstationsSlave1: false,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'DAABZ5ZE4112345',
                                devType: 'deltamini',
                                devName: 'My Deltamini',
                            },
                            {
                                pstationsSlave1: false,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'DABBZ5ZE4112345',
                                devType: 'delta',
                                devName: 'My Delta',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: false,
                                devId: 'DAEBZ5ZE4112345',
                                devType: 'deltamax',
                                devName: 'My Deltamax',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: false,
                                devId: 'DECBZ5ZE4112345',
                                devType: 'deltapro',
                                devName: 'My DeltaPro',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R331ZEB4ZEA12345',
                                devType: 'delta2',
                                devName: 'My Delta2',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: false,
                                devId: 'R351ZFB4HF6L12345',
                                devType: 'delta2max',
                                devName: 'My Delta2max',
                            },
                            {
                                pstationsSlave1: false,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R621ZEB4XEC12345',
                                devType: 'river2pro',
                                devName: 'My river2pro',
                            },
                            {
                                pstationsSlave1: false,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R521ZEB4XEC12345',
                                devType: 'river2max',
                                devName: 'My river2max',
                            },
                            {
                                pstationsSlave1: false,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R421ZEB4XEC12345',
                                devType: 'riverpro',
                                devName: 'My riverpro',
                            },
                            {
                                pstationsSlave1: false,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R321ZEB4XEC12345',
                                devType: 'rivermax',
                                devName: 'My rivermax',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: true,
                                devId: 'DPU0ZFB5EF412345',
                                devType: 'deltaproultra',
                                devName: 'My deltaproultra',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R331Z1B1234567890',
                                devType: 'delta3',
                                devName: 'My delta 3',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R332Z1B1234567890',
                                devType: 'delta3plus',
                                devName: 'My delta 3 plus',
                            },
                            {
                                pstationsSlave1: false,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R631Z1B1234567890',
                                devType: 'river3',
                                devName: 'My river 3',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'R632Z1B1234567890',
                                devType: 'river3plus',
                                devName: 'My river 3 plus',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: false,
                                pstationsSlave3: false,
                                devId: 'MR51ZAS4PG1234567',
                                devType: 'deltapro3',
                                devName: 'My deltapro 3',
                            },
                        ],
                        pstreams: [
                            { devType: 'pstream600', devId: 'HW51ZOH4SF412345', devName: 'pstream600' },
                            { devType: 'pstream800', devId: 'HW51ZOH5SF412345', devName: 'pstream800' },
                            { devType: 'stream_ac_pro', devId: 'BK31Z123456789012', devName: 'stream AC' },
                            { devType: 'stream_ultra', devId: 'BK11Z123456789012', devName: 'stream ultra' },
                        ],
                        powerkits: [
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: false,
                                devName: 'My powerkit',
                                devId: 'M106ZAB4Z000001F',
                                devType: 'powerkitbp2000',
                            },
                        ],
                        poweroceans: [
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: true,
                                devName: 'My power ocean',
                                devId: 'HJ312000BF7W1234',
                                devType: 'powerocean',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: true,
                                devName: 'My power ocean FIT',
                                devId: 'HC31Z123456789012',
                                devType: 'poweroceanfit',
                            },
                            {
                                pstationsSlave1: true,
                                pstationsSlave2: true,
                                pstationsSlave3: true,
                                devName: 'My power ocean',
                                devId: 'R37200012345678',
                                devType: 'poweroceanplus',
                            },
                        ],
                        shellies: [{ devName: 'My shelly3em', devId: '1234345346', devType: 'shelly3em' }],
                    },
                };
                await harness.changeAdapterConfig('ecoflow-mqtt', obj);

                console.log('loaded test objects');
            });
            /*
			it('start Adapter and read config object', async () => {
				await harness.objects.getObject('system.adapter.ecoflow-mqtt.0', async (err, obj) => {
					if (err) console.error(err);
					console.log('TEST: ADAPTER SETTINGS ', JSON.stringify(obj));
					// Start the adapter and wait until it has started
				});
				await harness.startAdapterAndWait();
			});
			*/

            it('start Adapter and read config object', () => {
                return new Promise(async resolve => {
                    // Create a fresh harness instance each test!
                    // modification of some starting values

                    //schon Teil des iobroker/testing :-)
                    //config.common.enabled = true;
                    //config.common.loglevel = 'debug';
                    // systemConfig.native.secret ='Zgfr56gFe87jJOM'

                    //await harness.startAdapterAndWait();
                    //await delay(3000);
                    harness.objects.getObject('system.adapter.ecoflow-mqtt.0', async (err, obj) => {
                        console.log('TEST: ADAPTER SETTINGS ', JSON.stringify(obj));
                        // Start the adapter and wait until it has started
                        await harness.startAdapterAndWait();
                        await delay(9000);
                        resolve();
                    });
                });
            }).timeout(12000);

            it('Plug states should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.HW52ZDH4SF12345.plug_heartbeat.brightness');
                for (let channel in plugstates['deviceStatesDict']['plug']) {
                    for (let state in plugstates['deviceStatesDict']['plug'][channel]) {
                        await harness.objects.getObject(
                            'ecoflow-mqtt.0.HW52ZDH4SF12345.' + channel + '.' + state,
                            function (err, obj) {
                                if (err) console.error('plug TEST' + channel + '.' + state + ' -> ' + err);

                                if (!obj) {
                                    console.error('plug state ' + channel + '.' + state + ' not set');
                                }
                                expect(obj).to.exist;
                            },
                        );
                    }
                }
            });
            it('Pstream 600 states should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.HW51ZOH4SF412345.inverter_heartbeat.permanentWatts');
                for (let channel in pstreamstates['deviceStatesDict']['pstream']) {
                    for (let state in pstreamstates['deviceStatesDict']['pstream'][channel]) {
                        await harness.objects.getObject(
                            'ecoflow-mqtt.0.HW51ZOH4SF412345.' + channel + '.' + state,
                            function (err, obj) {
                                if (err) console.error('pstream600 TEST' + channel + '.' + state + ' -> ' + err);

                                if (!obj) {
                                    console.error('pstream600 state ' + channel + '.' + state + ' not set');
                                }
                                expect(obj).to.exist;
                            },
                        );
                    }
                }
            });
            it('Pstream 800 states should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.HW51ZOH5SF412345.inverter_heartbeat.permanentWatts');
                for (let channel in pstreamstates['deviceStatesDict']['pstream']) {
                    for (let state in pstreamstates['deviceStatesDict']['pstream'][channel]) {
                        await harness.objects.getObject(
                            'ecoflow-mqtt.0.HW51ZOH5SF412345.' + channel + '.' + state,
                            function (err, obj) {
                                if (err) console.error('pstream800 TEST' + channel + '.' + state + ' -> ' + err);

                                if (!obj) {
                                    console.error('pstream800 state ' + channel + '.' + state + ' not set');
                                }
                                expect(obj).to.exist;
                            },
                        );
                    }
                }
            });
            it('Stream AC pro states should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.HW51ZOH5SF412345.inverter_heartbeat.permanentWatts');
                for (let channel in streamacstates['deviceStatesDict']['stream_ac_pro']) {
                    for (let state in streamacstates['deviceStatesDict']['stream_ac_pro'][channel]) {
                        await harness.objects.getObject(
                            'ecoflow-mqtt.0.BK31Z123456789012.' + channel + '.' + state,
                            function (err, obj) {
                                if (err) console.error('stream ac TEST' + channel + '.' + state + ' -> ' + err);

                                if (!obj) {
                                    console.error('stream ac state ' + channel + '.' + state + ' not set');
                                }
                                expect(obj).to.exist;
                            },
                        );
                    }
                }
            });
            it('Stream Ultra states should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.HW51ZOH5SF412345.inverter_heartbeat.permanentWatts');
                for (let channel in streamultrastates['deviceStatesDict']['stream_ultra']) {
                    for (let state in streamultrastates['deviceStatesDict']['stream_ultra'][channel]) {
                        await harness.objects.getObject(
                            'ecoflow-mqtt.0.BK31Z123456789012.' + channel + '.' + state,
                            function (err, obj) {
                                if (err) console.error('stream ultra TEST' + channel + '.' + state + ' -> ' + err);

                                if (!obj) {
                                    console.error('stream ultra state ' + channel + '.' + state + ' not set');
                                }
                                expect(obj).to.exist;
                            },
                        );
                    }
                }
            });
            it('DeltaMini should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.DAABZ5ZE4112345.mppt.');
                for (let channel in deltaministates['deviceStatesDict']['deltamini']) {
                    for (let state in deltaministates['deviceStatesDict']['deltamini'][channel]) {
                        if (deltaministates['deviceStatesDict']['deltamini'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.DAABZ5ZE4112345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('deltamini TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('deltamini state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Delta should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.DABBZ5ZE4112345.mppt.');
                for (let channel in deltastates['deviceStatesDict']['delta']) {
                    for (let state in deltastates['deviceStatesDict']['delta'][channel]) {
                        if (deltastates['deviceStatesDict']['delta'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.DABBZ5ZE4112345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('delta TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('delta state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('DeltaMax should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.DAEBZ5ZE4112345.mppt.');
                for (let channel in deltamaxstates['deviceStatesDict']['deltamax']) {
                    for (let state in deltamaxstates['deviceStatesDict']['deltamax'][channel]) {
                        if (deltamaxstates['deviceStatesDict']['deltamax'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.DAEBZ5ZE4112345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('deltamax TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('deltamax state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('DeltaPro should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.DECBZ5ZE4112345.mppt.');
                for (let channel in deltaprostates['deviceStatesDict']['deltapro']) {
                    for (let state in deltaprostates['deviceStatesDict']['deltapro'][channel]) {
                        if (deltaprostates['deviceStatesDict']['deltapro'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.DECBZ5ZE4112345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('deltapro TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('deltapro state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('DeltaPro should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.DECBZ5ZE4112345.mppt.');
                for (let channel in deltapro3states['deviceStatesDict']['deltapro3']) {
                    for (let state in deltapro3states['deviceStatesDict']['deltapro3'][channel]) {
                        if (deltapro3states['deviceStatesDict']['deltapro3'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.MR51ZAS4PG1234567.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('deltapro3 TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('deltapro3 state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Delta2 should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R331ZEB4ZEA12345.mppt.');
                for (let channel in delta2states['deviceStatesDict']['delta2']) {
                    for (let state in delta2states['deviceStatesDict']['delta2'][channel]) {
                        if (delta2states['deviceStatesDict']['delta2'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R331ZEB4ZEA12345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('delta2 TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('delta2 state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Delta2Max should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R351ZFB4HF6L12345.mppt.');
                for (let channel in delta2maxstates['deviceStatesDict']['delta2max']) {
                    for (let state in delta2maxstates['deviceStatesDict']['delta2max'][channel]) {
                        if (delta2maxstates['deviceStatesDict']['delta2max'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R351ZFB4HF6L12345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('delta2max TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('delta2max state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Delta3 should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R331ZEB4ZEA12345.mppt.');
                for (let channel in delta3states['deviceStatesDict']['delta3']) {
                    for (let state in delta3states['deviceStatesDict']['delta3'][channel]) {
                        if (delta3states['deviceStatesDict']['delta3'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R331Z1B1234567890.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('delta3 TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('delta3 state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Delta3 plus should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R331ZEB4ZEA12345.mppt.');
                for (let channel in delta3plusstates['deviceStatesDict']['delta3plus']) {
                    for (let state in delta3plusstates['deviceStatesDict']['delta3plus'][channel]) {
                        if (delta3plusstates['deviceStatesDict']['delta3plus'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R332Z1B1234567890.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('delta3 plus TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('delta3 plus state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('River2Pro should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R621ZEB4XEC12345.mppt.');
                for (let channel in river2prostates['deviceStatesDict']['river2pro']) {
                    for (let state in river2prostates['deviceStatesDict']['river2pro'][channel]) {
                        if (river2prostates['deviceStatesDict']['river2pro'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R621ZEB4XEC12345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('river2pro TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('river2pro state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('River2Max should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R521ZEB4XEC12345.mppt.');
                for (let channel in river2maxstates['deviceStatesDict']['river2max']) {
                    for (let state in river2maxstates['deviceStatesDict']['river2max'][channel]) {
                        if (river2maxstates['deviceStatesDict']['river2max'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R521ZEB4XEC12345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('river2max TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('river2max state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('RiverPro should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R421ZEB4XEC12345.mppt.');
                for (let channel in riverprostates['deviceStatesDict']['riverpro']) {
                    for (let state in riverprostates['deviceStatesDict']['riverpro'][channel]) {
                        if (riverprostates['deviceStatesDict']['riverpro'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R421ZEB4XEC12345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('riverpro TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('riverpro state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('RiverMax should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R321ZEB4XEC12345.mppt.');
                for (let channel in rivermaxstates['deviceStatesDict']['rivermax']) {
                    for (let state in rivermaxstates['deviceStatesDict']['rivermax'][channel]) {
                        if (rivermaxstates['deviceStatesDict']['rivermax'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R321ZEB4XEC12345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('rivermax TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('rivermax state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('river3 should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R331ZEB4ZEA12345.mppt.');
                for (let channel in river3states['deviceStatesDict']['river3']) {
                    for (let state in river3states['deviceStatesDict']['river3'][channel]) {
                        if (river3states['deviceStatesDict']['river3'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R631Z1B1234567890.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('driver3 TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('river3 state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('river3 plus should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.R331ZEB4ZEA12345.mppt.');
                for (let channel in river3plusstates['deviceStatesDict']['river3plus']) {
                    for (let state in river3plusstates['deviceStatesDict']['river3plus'][channel]) {
                        if (river3plusstates['deviceStatesDict']['river3plus'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R632Z1B1234567890.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('river3 plus TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('river3 plus state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Wave 2 should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.KT21ZCH2ZF112345.mppt.');
                for (let channel in wave2states['deviceStatesDict']['wave2']) {
                    for (let state in wave2states['deviceStatesDict']['wave2'][channel]) {
                        if (wave2states['deviceStatesDict']['wave2'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.KT21ZCH2ZF112345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('wave2 TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('wave2 state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Wave 3 should be created', async () => {
                for (let channel in wave3states['deviceStatesDict']['wave3']) {
                    for (let state in wave3states['deviceStatesDict']['wave3'][channel]) {
                        if (wave3states['deviceStatesDict']['wave3'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.KT31ZC123456789.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('wave3 TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('wave3 state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Glacier should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.BX11ZFB5EF412345.mppt.');
                for (let channel in glacierstates['deviceStatesDict']['glacier']) {
                    for (let state in glacierstates['deviceStatesDict']['glacier'][channel]) {
                        if (glacierstates['deviceStatesDict']['glacier'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.BX11ZFB5EF412345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('glacier TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('glacier state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });

            it('Generator should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.BX11ZFB5EF412345.mppt.');
                for (let channel in generatorstates['deviceStatesDict']['generator']) {
                    for (let state in generatorstates['deviceStatesDict']['generator'][channel]) {
                        if (generatorstates['deviceStatesDict']['generator'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.DGEBZ5R123412345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('generator TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('generator state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('SHP should be created', async () => {
                for (let channel in shpstates['deviceStatesDict']['panel']) {
                    for (let state in shpstates['deviceStatesDict']['panel'][channel]) {
                        if (shpstates['deviceStatesDict']['panel'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.SHP10ZFB5EF412345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('panel TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('panel state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('SHP 2 should be created', async () => {
                for (let channel in shp2states['deviceStatesDict']['panel2']) {
                    for (let state in shp2states['deviceStatesDict']['panel2'][channel]) {
                        if (shp2states['deviceStatesDict']['panel2'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.SHP20ZFB5EF412345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('panel 2 TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('panel 2 state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            /*
			it('SHP 2 should be created', async () => {
				for (let channel in shp2states['panel2StatesDict']['panel2']) {
					for (let state in shp2states['panel2StatesDict']['panel2'][channel]) {
						if (shp2states['panel2StatesDict']['panel2'][channel][state]['entity'] !== 'icon') {
							let partname;
							switch (channel) {
								case 'backupChInfo':
									partname = [ 'backupCh1Info', 'backupCh2Info', 'backupCh3Info' ];
									for (let i = 0; i < 3; i++) {
										await harness.objects.getObject(
											'ecoflow-mqtt.0.SHP20ZFB5EF412345.' + partname[i] + '.' + state,
											function(err, obj) {
												if (err)
													console.error(
														'panel 2 TEST' + partname[i] + '.' + state + ' -> ' + err
													);

												if (!obj) {
													console.error(
														'panel 2 state ' + partname[i] + '.' + state + ' not set'
													);
												}
												expect(obj).to.exist;
											}
										);
									}
									break;
								case 'EnergyInfo':
									partname = [ 'Energy1Info', 'Energy2Info', 'Energy3Info' ];
									for (let i = 0; i < 3; i++) {
										await harness.objects.getObject(
											'ecoflow-mqtt.0.SHP20ZFB5EF412345.' + partname[i] + '.' + state,
											function(err, obj) {
												if (err)
													console.error(
														'panel 2 TEST' + partname[i] + '.' + state + ' -> ' + err
													);

												if (!obj) {
													console.error(
														'panel 2 state ' + partname[i] + '.' + state + ' not set'
													);
												}
												expect(obj).to.exist;
											}
										);
									}
									break;
								case 'DeltaProInfo':
									partname = [ 'DeltaPro1Info', 'DeltaPro2Info' ];
									for (let i = 0; i < 2; i++) {
										await harness.objects.getObject(
											'ecoflow-mqtt.0.SHP20ZFB5EF412345.' + partname[i] + '.' + state,
											function(err, obj) {
												if (err)
													console.error(
														'panel 2 TEST' + partname[i] + '.' + state + ' -> ' + err
													);

												if (!obj) {
													console.error(
														'panel 2 state ' + partname[i] + '.' + state + ' not set'
													);
												}
												expect(obj).to.exist;
											}
										);
									}
									break;
								default:
									await harness.objects.getObject(
										'ecoflow-mqtt.0.SHP20ZFB5EF412345.' + channel + '.' + state,
										function(err, obj) {
											if (err)
												console.error('panel 2 TEST' + channel + '.' + state + ' -> ' + err);

											if (!obj) {
												console.error('panel 2 state ' + channel + '.' + state + ' not set');
											}
											expect(obj).to.exist;
										}
									);
									break;
							}
						}
					}
				}
			});
			*/
            it('Delta Pro Ultra should be created', async () => {
                //await harness.objects.delObject('ecoflow-mqtt.0.BX11ZFB5EF412345.mppt.');
                for (let channel in dpustates['deviceStatesDict']['deltaproultra']) {
                    for (let state in dpustates['deviceStatesDict']['deltaproultra'][channel]) {
                        if (dpustates['deviceStatesDict']['deltaproultra'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.DPU0ZFB5EF412345.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('deltaproultra TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('deltaproultra state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Powerkit should be created', async () => {
                for (let channel in kitstates['deviceStatesDict']['powerkit']) {
                    for (let state in kitstates['deviceStatesDict']['powerkit'][channel]) {
                        if (kitstates['deviceStatesDict']['powerkit'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.M106ZAB4Z000001F.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('powerkit TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('powerkit state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Power ocean should be created', async () => {
                for (let channel in oceanstates['deviceStatesDict']['powerocean']) {
                    for (let state in oceanstates['deviceStatesDict']['powerocean'][channel]) {
                        if (oceanstates['deviceStatesDict']['powerocean'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.HJ312000BF7W1234.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('powerocean TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('powerocean state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Power ocean DC FIT should be created', async () => {
                for (let channel in oceanfitstates['deviceStatesDict']['poweroceanfit']) {
                    for (let state in oceanfitstates['deviceStatesDict']['poweroceanfit'][channel]) {
                        if (oceanfitstates['deviceStatesDict']['poweroceanfit'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.HC31Z123456789012.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err)
                                        console.error('powerocean FIT TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('powerocean FIT state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Power ocean Plus should be created', async () => {
                for (let channel in oceanplusstates['deviceStatesDict']['poweroceanplus']) {
                    for (let state in oceanplusstates['deviceStatesDict']['poweroceanplus'][channel]) {
                        if (
                            oceanplusstates['deviceStatesDict']['poweroceanplus'][channel][state]['entity'] !== 'icon'
                        ) {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.R37200012345678.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err)
                                        console.error('powerocean PLUS TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('powerocean PLUS state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            it('Shelly3em should be created', async () => {
                for (let channel in shelly3emstates['deviceStatesDict']['shelly3em']) {
                    for (let state in shelly3emstates['deviceStatesDict']['shelly3em'][channel]) {
                        if (shelly3emstates['deviceStatesDict']['shelly3em'][channel][state]['entity'] !== 'icon') {
                            await harness.objects.getObject(
                                'ecoflow-mqtt.0.1234345346.' + channel + '.' + state,
                                function (err, obj) {
                                    if (err) console.error('shelly3em TEST' + channel + '.' + state + ' -> ' + err);

                                    if (!obj) {
                                        console.error('shelly3em state ' + channel + '.' + state + ' not set');
                                    }
                                    expect(obj).to.exist;
                                },
                            );
                        }
                    }
                }
            });
            after(() => {
                console.log('test finished');
            });
        }); //suite
    }, //defineAdditionalTests
});
