const path = require('path');
const { tests } = require('@iobroker/testing');
const expect = require('chai').expect;
const { doesNotMatch } = require('assert/strict');

console.log('PATH ist ' + path.join(__dirname, './data/'));

const states = require(path.join(__dirname, '../lib/') + 'ecoflow_data.js');
const shpstates = require(path.join(__dirname, '../lib/') + 'ef_shp_data.js');
const shp2states = require(path.join(__dirname, '../lib/') + 'ef_shp2_data.js');
const oceanstates = require(path.join(__dirname, '../lib/') + 'ef_powerocean_data.js');
const kitstates = require(path.join(__dirname, '../lib/') + 'ef_powerkit_data.js');

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
						panels: [
							{ devName: 'My panel', devId: 'SHP10ZFB5EF412345', devType: 'panel' },
							{ devName: 'My panel', devId: 'SHP20ZFB5EF412345', devType: 'panel2' }
						],
						generators: [ { devName: 'My Generator', devId: 'DGEBZ5R123412345', devType: 'generator' } ],
						pstations: [
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DAABZ5ZE4112345',
								devType: 'deltamini',
								devName: 'My Deltamini'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DABBZ5ZE4112345',
								devType: 'delta',
								devName: 'My Delta'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DAEBZ5ZE4112345',
								devType: 'deltamax',
								devName: 'My Deltamax'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DECBZ5ZE4112345',
								devType: 'deltapro',
								devName: 'My DeltaPro'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R331ZEB4ZEA12345',
								devType: 'delta2',
								devName: 'My Delta2'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R351ZFB4HF6L12345',
								devType: 'delta2max',
								devName: 'My Delta2max'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R621ZEB4XEC12345',
								devType: 'river2pro',
								devName: 'My river2pro'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R521ZEB4XEC12345',
								devType: 'river2max',
								devName: 'My river2max'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R421ZEB4XEC12345',
								devType: 'riverpro',
								devName: 'My riverpro'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'R321ZEB4XEC12345',
								devType: 'rivermax',
								devName: 'My rivermax'
							},
							{
								pstationsSlave1: false,
								pstationsSlave2: false,
								devId: 'DPU0ZFB5EF412345',
								devType: 'deltaproultra',
								devName: 'My deltaproultra'
							}
						],
						pstreams: [
							{ devType: 'pstream600', devId: 'HW51ZOH4SF412345', devName: 'pstream600' },
							{ devType: 'pstream800', devId: 'HW51ZOH5SF412345', devName: 'pstream800' }
						],
						powerkits: [ { devName: 'My powerkit', devId: 'M106ZAB4Z000001F', devType: 'powerkitbp2000' } ],
						poweroceans: [
							{ devName: 'My power ocean', devId: 'HJ312000BF7W1234', devType: 'powerocean' }
						],
						shellies: [ { devName: 'My shelly3em', devId: '1234345346', devType: 'shelly3em' } ]
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
						await delay(9000);
						resolve();
					});
				});
			}).timeout(12000);

			it('Plug states should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.HW52ZDH4SF12345.plug_heartbeat.brightness');
				for (let channel in states['pstreamStatesDict']['plug']) {
					for (let state in states['pstreamStatesDict']['plug'][channel]) {
						await harness.objects.getObject(
							'ecoflow-mqtt.0.HW52ZDH4SF12345.' + channel + '.' + state,
							function(err, obj) {
								if (err) console.error('plug TEST' + channel + '.' + state + ' -> ' + err);

								if (!obj) {
									console.error('plug state ' + channel + '.' + state + ' not set');
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
								if (err) console.error('pstream600 TEST' + channel + '.' + state + ' -> ' + err);

								if (!obj) {
									console.error('pstream600 state ' + channel + '.' + state + ' not set');
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
								if (err) console.error('pstream800 TEST' + channel + '.' + state + ' -> ' + err);

								if (!obj) {
									console.error('pstream800 state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('deltamini TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('deltamini state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('delta TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('delta state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('deltamax TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('deltamax state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('deltapro TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('deltapro state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('delta2 TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('delta2 state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('delta2max TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('delta2max state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('river2pro TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('river2pro state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('river2max TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('river2max state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('riverpro TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('riverpro state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('rivermax TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('rivermax state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('wave2 TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('wave2 state ' + channel + '.' + state + ' not set');
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
									if (err) console.error('glacier TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('glacier state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});

			it('Generator should be created', async () => {
				//await harness.objects.delObject('ecoflow-mqtt.0.BX11ZFB5EF412345.mppt.');
				for (let channel in states['pstationStatesDict']['generator']) {
					for (let state in states['pstationStatesDict']['generator'][channel]) {
						if (states['pstationStatesDict']['generator'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.DGEBZ5R123412345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('generator TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('generator state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});

			it('SHP should be created', async () => {
				for (let channel in shpstates['panelStatesDict']['panel']) {
					for (let state in shpstates['panelStatesDict']['panel'][channel]) {
						if (shpstates['panelStatesDict']['panel'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.SHP10ZFB5EF412345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('panel TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('panel state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('SHP 2 should be created', async () => {
				for (let channel in shp2states['panel2StatesDict']['panel2']) {
					for (let state in shp2states['panel2StatesDict']['panel2'][channel]) {
						if (shp2states['panel2StatesDict']['panel2'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.SHP20ZFB5EF412345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('panel 2 TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('panel 2 state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
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
				for (let channel in states['pstreamStatesDict']['deltaproultra']) {
					for (let state in states['pstreamStatesDict']['deltaproultra'][channel]) {
						if (states['pstreamStatesDict']['deltaproultra'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.DPU0ZFB5EF412345.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('deltaproultra TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('deltaproultra state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});

			it('Powerkit should be created', async () => {
				for (let channel in kitstates['powerkitStatesDict']['powerkit']) {
					for (let state in kitstates['powerkitStatesDict']['powerkit'][channel]) {
						if (kitstates['powerkitStatesDict']['powerkit'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.M106ZAB4Z000001F.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('powerkit TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('powerkit state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('Power ocean should be created', async () => {
				for (let channel in oceanstates['poweroceanStatesDict']['powerocean']) {
					for (let state in oceanstates['poweroceanStatesDict']['powerocean'][channel]) {
						if (oceanstates['poweroceanStatesDict']['powerocean'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.HJ312000BF7W1234.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('powerocean TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('powerocean state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			it('Shelly3em should be created', async () => {
				for (let channel in states['pstationStatesDict']['shelly3em']) {
					for (let state in states['pstationStatesDict']['shelly3em'][channel]) {
						if (states['pstationStatesDict']['shelly3em'][channel][state]['entity'] !== 'icon') {
							await harness.objects.getObject(
								'ecoflow-mqtt.0.1234345346.' + channel + '.' + state,
								function(err, obj) {
									if (err) console.error('shelly3em TEST' + channel + '.' + state + ' -> ' + err);

									if (!obj) {
										console.error('shelly3em state ' + channel + '.' + state + ' not set');
									}
									expect(obj).to.exist;
								}
							);
						}
					}
				}
			});
			after(() => {
				console.log('test finished');
			});
		}); //suite
	} //defineAdditionalTests
});
