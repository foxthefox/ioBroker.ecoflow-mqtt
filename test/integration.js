const path = require('path');
const { tests } = require('@iobroker/testing');
const expect = require('chai').expect;
const { doesNotMatch } = require('assert/strict');

console.log('PATH ist ' + path.join(__dirname, './data/'));

const states = require(path.join(__dirname, '../lib/') + 'ecoflow_data.js');

function delay(t, val) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(val);
		}, t);
	});
}

// Run integration tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.integration(path.join(__dirname, '..'), {
	// If the adapter may call process.exit during startup, define here which exit codes are allowed.
	// By default, termination during startup is not allowed.
	allowedExitCodes: [ 11 ],

	// To test against a different version of JS-Controller, you can change the version or dist-tag here.
	// Make sure to remove this setting when you're done testing.
	controllerVersion: 'latest', // or a specific version like "4.0.1"

	defineAdditionalTests({ suite }) {
		suite('Test creation of devices', (getHarness) => {
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
						glaciers: [ { devName: 'My Glacier', devId: 'BX11ZFB5EF412345', devType: 'glacier' } ],
						waves: [ { devName: 'My Wave', devId: 'KT21ZCH2ZF112345', devType: 'wave2' } ],
						plugs: [ { devName: 'My Plug1', devId: 'HW52ZDH4SF12345', devType: 'plug' } ],
						pstations: [
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DAABZ5ZE4112345',
								devType: 'deltamini',
								devName: 'Deltamini'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DABBZ5ZE4112345',
								devType: 'delta',
								devName: 'Delta'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DAEBZ5ZE4112345',
								devType: 'deltamax',
								devName: 'Deltamax'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DECBZ5ZE4112345',
								devType: 'deltapro',
								devName: 'DeltaPro'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R331ZEB4ZEA12345',
								devType: 'delta2',
								devName: 'Delta2'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R351ZFB4HF6L12345',
								devType: 'delta2max',
								devName: 'Delta2max'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R621ZEB4XEC12345',
								devType: 'river2pro',
								devName: 'river2pro'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R521ZEB4XEC12345',
								devType: 'river2max',
								devName: 'river2max'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R421ZEB4XEC12345',
								devType: 'riverpro',
								devName: 'riverpro'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R321ZEB4XEC12345',
								devType: 'rivermax',
								devName: 'rivermax'
							}
						],
						pstreams: [
							{ devType: 'pstream600', devId: 'HW51ZOH4SF412345', devName: 'pstream600' },
							{ devType: 'pstream800', devId: 'HW51ZOH5SF412345', devName: 'pstream800' }
						]
					}
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
				return new Promise(async (resolve) => {
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
						await delay(4000);
						resolve();
					});
				});
			}).timeout(7000);

			it('Plug states should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.HW52ZDH4SF12345.plug_heartbeat.brightness');
				for (let channel in states['pstreamStatesDict']['plug']) {
					for (let state in states['pstreamStatesDict']['plug'][channel]) {
						await harness.objects.getObject(
							'ecoflow-mqtt.0.HW52ZDH4SF12345.' + channel + '.' + state,
							function(err, obj) {
								if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

								if (!obj) {
									console.error('state ' + channel + '.' + state + ' not set');
								}
								expect(obj).to.exist;
							}
						);
					}
				}
			});
			it('Pstream 600 states should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.HW51ZOH4SF412345.inverter_heartbeat.permanentWatts');
				for (let channel in states['pstreamStatesDict']['pstream']) {
					for (let state in states['pstreamStatesDict']['pstream'][channel]) {
						await harness.objects.getObject(
							'ecoflow-mqtt.0.HW51ZOH4SF412345.' + channel + '.' + state,
							function(err, obj) {
								if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

								if (!obj) {
									console.error('state ' + channel + '.' + state + ' not set');
								}
								expect(obj).to.exist;
							}
						);
					}
				}
			});
			it('Pstream 800 states should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.HW51ZOH5SF412345.inverter_heartbeat.permanentWatts');
				for (let channel in states['pstreamStatesDict']['pstream']) {
					for (let state in states['pstreamStatesDict']['pstream'][channel]) {
						await harness.objects.getObject(
							'ecoflow-mqtt.0.HW51ZOH5SF412345.' + channel + '.' + state,
							function(err, obj) {
								if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

								if (!obj) {
									console.error('state ' + channel + '.' + state + ' not set');
								}
								expect(obj).to.exist;
							}
						);
					}
				}
			});
			it('DeltaMini should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.DAABZ5ZE4112345.mppt.');
				for (let channel in states['pstationStatesDict']['deltamini']) {
					for (let state in states['pstationStatesDict']['deltamini'][channel]) {
						if (states['pstationStatesDict']['deltamini'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.DAABZ5ZE4112345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('Delta should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.DABBZ5ZE4112345.mppt.');
				for (let channel in states['pstationStatesDict']['delta']) {
					for (let state in states['pstationStatesDict']['delta'][channel]) {
						if (states['pstationStatesDict']['delta'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.DABBZ5ZE4112345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('DeltaMax should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.DAEBZ5ZE4112345.mppt.');
				for (let channel in states['pstationStatesDict']['deltamax']) {
					for (let state in states['pstationStatesDict']['deltamax'][channel]) {
						if (states['pstationStatesDict']['deltamax'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.DAEBZ5ZE4112345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('DeltaPro should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.DECBZ5ZE4112345.mppt.');
				for (let channel in states['pstationStatesDict']['deltapro']) {
					for (let state in states['pstationStatesDict']['deltapro'][channel]) {
						if (states['pstationStatesDict']['deltapro'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.DECBZ5ZE4112345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('Delta2 should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.R331ZEB4ZEA12345.mppt.');
				for (let channel in states['pstationStatesDict']['delta2']) {
					for (let state in states['pstationStatesDict']['delta2'][channel]) {
						if (states['pstationStatesDict']['delta2'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.R331ZEB4ZEA12345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('Delta2Max should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.R351ZFB4HF6L12345.mppt.');
				for (let channel in states['pstationStatesDict']['delta2max']) {
					for (let state in states['pstationStatesDict']['delta2max'][channel]) {
						if (states['pstationStatesDict']['delta2max'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.R351ZFB4HF6L12345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('River2Pro should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.R621ZEB4XEC12345.mppt.');
				for (let channel in states['pstationStatesDict']['river2pro']) {
					for (let state in states['pstationStatesDict']['river2pro'][channel]) {
						if (states['pstationStatesDict']['river2pro'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.R621ZEB4XEC12345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('River2Max should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.R521ZEB4XEC12345.mppt.');
				for (let channel in states['pstationStatesDict']['river2max']) {
					for (let state in states['pstationStatesDict']['river2max'][channel]) {
						if (states['pstationStatesDict']['river2max'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.R521ZEB4XEC12345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('RiverPro should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.R421ZEB4XEC12345.mppt.');
				for (let channel in states['pstationStatesDict']['riverpro']) {
					for (let state in states['pstationStatesDict']['riverpro'][channel]) {
						if (states['pstationStatesDict']['riverpro'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.R421ZEB4XEC12345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('RiverMax should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.R321ZEB4XEC12345.mppt.');
				for (let channel in states['pstationStatesDict']['rivermax']) {
					for (let state in states['pstationStatesDict']['rivermax'][channel]) {
						if (states['pstationStatesDict']['rivermax'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.R321ZEB4XEC12345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('Wave 2 should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.KT21ZCH2ZF112345.mppt.');
				for (let channel in states['pstationStatesDict']['wave2']) {
					for (let state in states['pstationStatesDict']['wave2'][channel]) {
						if (states['pstationStatesDict']['wave2'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.KT21ZCH2ZF112345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('Glacier should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.BX11ZFB5EF412345.mppt.');
				for (let channel in states['pstationStatesDict']['glacier']) {
					for (let state in states['pstationStatesDict']['glacier'][channel]) {
						if (states['pstationStatesDict']['glacier'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.BX11ZFB5EF412345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
		}); //suite
	} //defineAdditionalTests
});
