'use strict';

const models = {
	smartmeter: {
		identifiers: 'BK21Zxxxxx',
		type: 1, //unbekannt
		manufacturer: 'Ecoflow',
		model: 'EF Smartmeter',
		name: 'EF Smartmeter'
	},
	shelly3em: {
		identifiers: '012345xxxx',
		type: 99, //eventuell auch 75
		manufacturer: 'Shelly',
		model: 'Shelly 3 EM',
		name: 'Shelly 3 EM'
	},
	pstream600: {
		identifiers: 'HW51Zxxxx',
		type: 67, //eventuell auch 75
		manufacturer: 'Ecoflow',
		model: 'Power Stream 600',
		name: 'Power Stream'
	},
	pstream800: {
		identifiers: 'HW51Zxxxx',
		type: 75,
		manufacturer: 'Ecoflow',
		model: 'Power Stream 800',
		name: 'Power Stream'
	},
	plug: {
		identifiers: 'HW52Zxxxx',
		manufacturer: 'Ecoflow',
		model: 'Ecoflow Smart Plug',
		name: 'Ecoflow Smart Plug'
	},
	deltamini: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'Delta Mini, 882Wh',
		name: 'Delta Mini',
		type: 15,
		spec: {
			capacity: '882Wh, 50,4V',
			acInputPower: '900W',
			solarInput: '11-75V, 10A, 300W',
			carInput: '12/24V, 8A',
			acOutput: '1400W',
			acOutputPeak: '2100W',
			xboost: '2200W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	delta: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'Delta 1260Wh',
		name: 'Delta',
		spec: {
			capacity: '1260Wh, 50,4V',
			acInputPower: '1200W',
			solarInput: '10-65V, 10A, 400W',
			carInput: '12/24V, 10A',
			acOutput: '1800W',
			acOutputPeak: '3300W',
			carOutput: '13,6V, 8A, 108,8W'
		}
	},
	deltamax: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'Delta Max 1600/2000Wh',
		name: 'Delta Max',
		type: 13,
		spec: {
			capacity: '2016Wh, 50,4V',
			acInputPower: '2000W',
			solarInput: '11-100V, 10A, 800W',
			carInput: '12/24V, 8A',
			acOutput: '2400W',
			acOutputPeak: '4600W',
			xboost: '3000W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	deltapro: {
		identifiers: 'DCExxx',
		manufacturer: 'Ecoflow',
		model: 'Delta Pro, 3600Wh',
		name: 'Delta Pro',
		spec: {
			capacity: '3600Wh, 48V',
			acInputPower: '2875W',
			solarInput: '11-150V, 15A, 1600W',
			carInput: '12/24V, 8A',
			acOutput: '3600W',
			acOutputPeak: '7200W',
			xboost: '4500W',
			carOutput: '12,6V, 10A, 126W',
			andersonOutput: '12,6V,30A, 378W'
		}
	},
	delta2: {
		identifiers: 'R331Zxxx',
		manufacturer: 'Ecoflow',
		model: 'Delta 2, 1024Wh',
		name: 'Delta 2',
		moduleType: {
			1: 'PD',
			2: 'BMS',
			3: 'INV',
			4: 'BMS_SLAVE',
			5: 'MPPT'
		},
		type: 80,
		spec: {
			capacity: '1024Wh, (51,2V)',
			acInputPower: '1200W',
			solarInput: '11-60V, 15A, 500W',
			carInput: '12/24V, 8A',
			acOutput: '1800W',
			acOutputPeak: '2700W',
			xboost: '2200W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	delta2max: {
		identifiers: 'R351Zxxxxxx',
		manufacturer: 'Ecoflow',
		model: 'Delta 2 Max, EFD350,2048Wh',
		name: 'Delta 2 Max',
		moduleType: {
			1: 'PD',
			2: 'BMS',
			3: 'INV',
			4: 'BMS_SLAVE',
			5: 'MPPT'
		},
		type: 81,
		spec: {
			capacity: '2048Wh',
			acInputPower: '2400W',
			solarInput: '11-60V, 15A, 500W',
			carInput: '12V, 8A, 96W',
			acOutput: '2400W',
			acOutputPeak: '4800W',
			xboost: '3400W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	deltaproultra: {
		identifiers: 'R331Zxxx',
		manufacturer: 'Ecoflow',
		model: 'Delta Pro Ultra, 6000Wh',
		name: 'Delta Pro Ultra',
		moduleType: {
			1: 'PD',
			2: 'BMS',
			3: 'INV',
			4: 'BMS_SLAVE',
			5: 'MPPT'
		},
		type: 89,
		spec: {
			capacity: '102.4V⎓60A, 6,144Wh',
			acInputPower:
				'(Charging only) 100-120V~15A; 200-240V~12.5A, 50/60 Hz;(Bypass) 100-120V~ 15A, 50/60 Hz (duration < 3hrs when the current exceeds 12A)',
			solarInput: '80-450V⎓15A max, 4,000W max; 30-150V⎓15A max, 1,600W max',
			acOutput:
				'Discharging only) Pure sine, 7,200W total, 120/240 V~ 60 Hz; (Bypass) 100-120V~30A max, 50/60 Hz',
			usbOutput:
				'USB-A: 5V⎓2.4A, 12W max per port, total 24W; USB-C: 5/9/12/15/20V⎓5A, 100W max per port, total 200W',
			dcInput: '12V 8A max, 48V 20A max',
			carOutput: '12.6V⎓30A, 378W max'
		}
	},
	deltapro3: {
		identifiers: 'R331Zxxx', //todo
		manufacturer: 'Ecoflow',
		model: 'Delta Pro 3, 4096Wh',
		name: 'Delta Pro 3',
		type: 89, //todo
		spec: {
			capacity: 'V⎓A, 4096Wh',
			acInputPower: '(Charging only) 200-240V~12.5A, 50/60 Hz 2900W max',
			solarInput: '30-150V⎓15A max, 1600W max; 11-60V⎓20A max, 1000W max',
			acOutput: '4000W, (6000W X-Boost), max 8000W',
			usbOutput:
				'USB-A fast charge: 5V⎓2,4A/9⎓2A/12V⎓1,5A, 2x, 18W max per port; USB-C: 5/9/12/15/20V⎓5A, 2x, 100W max per port',
			carOutput: '12.6V⎓30A, 378W max, DC5521 1x 3 A max, Anderson 1x 30A max.'
		}
	},
	delta3plus: {
		identifiers: 'MR51xxx', //todo
		manufacturer: 'Ecoflow',
		model: 'Delta 3 Plus, 1536Wh',
		name: 'Delta 3 Plus',
		type: 89, //todo
		spec: {
			capacity: 'V⎓A, 1536Wh',
			acInputPower: '(Charging only) 100-120V~15A; 200-240V~12.5A, 50/60 Hz 1500W;',
			solarInput: '11-60V⎓ A max, 2x 500W max',
			acOutput: '1800W, 3600W X-Boost',
			usbOutput:
				'USB-A: 5V⎓2.4A, 2x, 12W max per port; USB-A fast charge: 5V⎓2,4A/9⎓2A/12V⎓1,5A 2x, 18W max per port, USB-C: 5/9/12/15/20V⎓5A, 2x, 100W max per port',
			carOutput: '12.6V⎓10A, 126W max, DC5521 2 × 12,6 V, 3 A max'
		}
	},
	delta3: {
		identifiers: 'R331Zxxx', //todo
		manufacturer: 'Ecoflow',
		model: 'Delta 3, 1024Wh',
		name: 'Delta 3',
		type: 89, //todo
		spec: {
			capacity: 'V⎓ A, 1024Wh',
			acInputPower: '(Charging only) 100-120V~A; 200-240V~A, 50/60 Hz, 1500W',
			solarInput: '11-60V⎓ A max, 1x 500W max',
			acOutput: '1800W, 3600W X-Boost',
			usbOutput:
				'USB-A fast charge: 5V⎓2,4A/9⎓2A/12V⎓1,5A, 2x, 18W max per port; USB-C: 5/9/12/15/20V⎓5A, 2x, 100W max per port',
			carOutput: '12.6V⎓10A, 126W max, DC5521 2 × 12,6 V, 3 A max'
		}
	},
	river2max: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River 2 Max, EFR610, 512Wh  ',
		name: 'River 2 Max',
		type: 71,
		spec: {
			capacity: '512Wh, (20Ah, 25,6V)',
			acInputPower: '10A',
			usbcInput: '100W',
			solarInput: '11-50V, 13A, 220W',
			carInput: '12/24V, 8A, 100W',
			acOutput: '500W',
			acOutputPeak: '1000W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	rivermax: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River Max, 576Wh  ',
		name: 'River 2 Max',
		spec: {
			capacity: '576Wh, (28,8V)',
			acInputPower: '500W',
			solarInput: '10-25V, 12A, 200W',
			carInput: '12V, 8A',
			acOutput: '600W',
			acOutputPeak: '1200W',
			xboost: '1800W',
			carOutput: '13,6V, 10A, 136W'
		}
	},
	river2pro: {
		identifiers: 'R6xxx',
		manufacturer: 'Ecoflow',
		model: 'River 2 Pro, EFR620 768Wh  ',
		name: 'River 2 Pro',
		moduleType: {
			1: 'PD',
			2: 'BMS',
			3: 'INV',
			5: 'MPPT'
		},
		type: 72,
		spec: {
			capacity: '768Wh, (40Ah, 19,2V)',
			acInputPower: '8A',
			usbcInput: '100W',
			solarInput: '11-50V, 13A, 220W',
			carInput: '12/24V, 8A, 100W',
			acOutput: '800W',
			acOutputPeak: '1600W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	riverpro: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River Pro, 720Wh  ',
		name: 'River Pro',
		type: 12,
		spec: {
			capacity: '720Wh, (28,8V)',
			acInputPower: '660W',
			usbcInput: '100W',
			solarInput: '10-25V, 12A, 200W',
			carInput: '12V, 8A',
			acOutput: '600W',
			acOutputPeak: '1200W',
			carOutput: '13,6V, 10A, 136W'
		}
	},
	river3: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River 3, 245Wh  ',
		name: 'River 3',
		spec: {
			capacity: '245Wh, (6800mAh)',
			acInputPower: '3A',
			generatorInput: '100~120V, 6.5A Max, 50/60Hz, 320W; 200-240 V, 3 A max., 50/60 Hz, 300 W',
			usbaOutput: '2 ports, 5V⎓2.4A, 12W Max per port, total 24W',
			usbcOutput: '1 × 5/9/12/15 V⎓3 A max., 20 V⎓5 A max., 100 W pro Ausgang',
			solarInput: '11-50V, 13A, 220W',
			carInput: '11-30V, 8A, 100W',
			acOutput: '300W',
			acOutputPeak: '600W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	river3plus: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River 3 Plus, 286Wh  ',
		name: 'River 3 Plus',
		spec: {
			capacity: '286Wh, (9600mAh)',
			acInputPower: '10A',
			generatorInput: '100~120V, 6.5A Max 50/60Hz, 380W; 200-240 V, 3 A max., 50/60 Hz, 360 W',
			usbaOutput: '2 ports, 5V⎓2.4A, 12W Max per port, total 24W',
			usbcOutput: '1 × 5/9/12/15 V⎓3 A max., 20 V⎓5 A max., 100 W pro Ausgang',
			solarInput: '11-50V, 13A, 220W',
			carInput: '11-55V, 8A, 220W',
			acOutput: '600W',
			acOutputPeak: '1200W',
			carOutput: '12,6V, 10A, 126W',
			addBatt: { eb300: '286Wh', eb600: '572Wh' }
		}
	},
	river3max: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River 3 Max, 572Wh  ',
		name: 'River 3 Max',
		spec: {
			capacity: '572Wh',
		}
	},
	wave2: {
		identifiers: 'KT21ZCHxxxx',
		manufacturer: 'Ecoflow',
		model: 'WAVE 2 Air Conditioner',
		name: 'WAVE 2 Air EFKT210',
		type: 45,
		moduleType: {
			1: 'PD',
			2: 'POWER',
			3: 'MOTOR',
			4: 'BMS'
		},
		spec: {
			acInputPower: '820W',
			addOnBatteryPower: '700W',
			coolInputAC: '550W',
			coolInputDC: '495W',
			heatInputAC: '600W',
			heatInputDC: '540W',
			maxCoolPower: '700W',
			maxHeatPower: '700W',
			coolingCapacity: '1500Wh/5100BTU',
			heatingCapacity: '1800Wh/6100BTU',
			solarInput: '11-60V, 13A, 400W',
			carInput: '12/24V, 8A, 200W'
		}
		// Zusatzakku 1159Wh
		// oder Akku Delta Serie
		// Gerät hat selbst keinen Akku
	},
	glacier: {
		identifiers: 'BX11ZCBxxxx',
		manufacturer: 'Ecoflow',
		model: 'GLACIER Cooler',
		name: 'GLACIER',
		moduleType: {
			1: 'PD',
			2: 'BMS',
			3: 'INV',
			4: 'BMS_SLAVE',
			5: 'MPPT'
		},
		type: 46,
		spec: {
			comprPower: '120W',
			acInputPower: '180W',
			batteryPackPower: '100W (USB-C)',
			solarInput: '11-60V, 13A, 240W',
			carInput: '12/24V, 8A, 96/192W'
		}
	},
	river2: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River 2,EFR600, 256Wh ',
		name: 'River 2',
		spec: {
			capacity: '256Wh, (20Ah, 12,8V)',
			acInputPower: '8A',
			usbcInput: '60W',
			solarInput: '11-30V, 8A, 110W',
			carInput: '12/24V, 8A, 100W',
			acOutput: '300W',
			acOutputPeak: '600W',
			carOutput: '12,6V, 8A, 100W'
		}
	},
	river: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River, 288Wh  ',
		name: 'River',
		spec: {
			capacity: '288Wh, (28,8V)',
			acInputPower: '250W',
			usbcInput: '100W',
			solarInput: '10-25V, 12A, 200W',
			carInput: '12V, 8A',
			acOutput: '600W',
			acOutputPeak: '1200W',
			xboost: '1800W',
			carOutput: '13,6V, 10A, 136W'
		}
	},
	rivermini: {
		identifiers: 'Rxxx',
		manufacturer: 'Ecoflow',
		model: 'River Mini, 210Wh  ',
		name: 'River Mini',
		spec: {
			capacity: '210Wh, (25,2V)',
			acInputPower: '300W',
			solarInput: '11-39V, 8A, 100W',
			carInput: '12/24V, 8A, 100W',
			acOutput: '300W',
			acOutputPeak: '600W',
			xboost: '600W',
			carOutput: '12,6V, 10A, 126W'
		}
	},
	wave: {
		identifiers: 'H2xxxx',
		manufacturer: 'Ecoflow',
		model: 'WAVE Air Conditioner',
		name: 'WAVE Air EFH200',
		moduleType: {
			1: 'PD',
			2: 'POWER',
			3: 'MOTOR',
			4: 'BMS'
		},
		spec: {
			acInputPower: '700W',
			addOnBatteryPower: '600W',
			coolInputAC: '460W',
			coolInputDC: '410W',
			maxCoolPower: '600W',
			coolingCapacity: '1200Wh',
			solarInput: '11-35V, 12A, 200W',
			carInput: '12/24V, 8A, 200W'
		}
	},
	tracker: {
		identifiers: 'HZ31xxxx',
		manufacturer: 'Ecoflow',
		model: 'Solar Tracker',
		name: 'Solar Tracker'
	},
	blade: {
		identifiers: 'H101Zxxxxx',
		manufacturer: 'Ecoflow',
		model: 'Blade',
		name: 'Blade',
		type: 42
	},
	generator: {
		identifiers: 'DGEBZ5Rxxxxx',
		manufacturer: 'Ecoflow',
		model: 'Smart Generator',
		name: 'Smart Generator',
		spec: {
			acOutput: '1800W',
			acOutputPeak: '1900W',
			dcOutput: '42–58.8 V, max 32A'
		}
	},
	generatordf: {
		identifiers: 'Dxxxxx',
		manufacturer: 'Ecoflow',
		model: 'Smart Generator Dual Fuel',
		name: 'Dual Fuel Generator',
		spec: {
			acOutput: '1800W',
			acOutputPeak: '1900W',
			dcOutput: '42–58.8 V, max 32A'
		}
	},
	generator3k: {
		identifiers: 'G371xxxxx',
		manufacturer: 'Ecoflow',
		model: 'Smart Generator 3000 (Dual Fuel)',
		name: 'Smart Generator 3000 (Dual Fuel)',
		spec: {
			acOutput: '3000W',
			acOutputPeak: '3000W',
			dcOutput: '42–58.8 V, max 32A'
		}
	},
	generator4k: {
		identifiers: 'G351xxxxx',
		manufacturer: 'Ecoflow',
		model: 'Smart Generator 4000 (Dual Fuel)',
		name: 'Smart Generator 4000 (Dual Fuel)',
		spec: {
			acOutput: '4000W',
			acOutputPeak: '4000W',
			dcOutput: '42–58.8 V, max 32A'
		}
	},
	panel: {
		identifiers: 'SH10xxxxx',
		manufacturer: 'Ecoflow',
		model: 'Smart Home Panel',
		name: 'Smart Home Panel',
		type: 89 //?
	},
	panel2: {
		identifiers: 'SH20xxxxx',
		manufacturer: 'Ecoflow',
		model: 'Smart Home Panel 2',
		name: 'Smart Home Panel 2'
	},
	powerkit: {
		identifiers: 'M106ZABxxxx',
		manufacturer: 'Ecoflow',
		model: 'Power Kit & Power Hub',
		name: 'Power Kit & Power Hub'
	},
	powerkitbp2000: {
		identifiers: 'M106ZABxxxx',
		manufacturer: 'Ecoflow',
		model: 'Power Kit & Power Hub 2kWh',
		name: 'Power Kit & Power Hub'
	},
	powerkitbp5000: {
		identifiers: 'M106ZABxxxx',
		manufacturer: 'Ecoflow',
		model: 'Power Kit & Power Hub 5kWh',
		name: 'Power Kit & Power Hub'
	},
	powerocean: {
		identifiers: 'HJ31xxxx',
		manufacturer: 'Ecoflow',
		model: 'Power OCEAN DC',
		name: 'Power OCEAN DC'
	},
	poweroceanfit: {
		identifiers: 'HC31xxxx',
		manufacturer: 'Ecoflow',
		model: 'Power OCEAN DC FIT',
		name: 'Power OCEAN DC FIT'
	},
	alternator: {
		identifiers: 'F371ZEBxxxx',
		manufacturer: 'Ecoflow',
		model: 'Alternator 800W',
		name: 'Alternator 800W'
	},
	stream_ac_pro: {
		identifiers: 'BK31Zxxx',
		manufacturer: 'Ecoflow',
		model: 'Stream AC, 1920Wh',
		name: 'Stream AC Pro',
		spec: {
			capacity: '1920Wh, 19,2V',
			acInputPower: '1050W charge, 2300W',
			acOutputGrid: '800W',
			acOutput: '1200W'
		}
	},
	stream_pro: {
		identifiers: 'BK11Zxxx',
		manufacturer: 'Ecoflow',
		model: 'Stream Ultra, 1920Wh',
		name: 'Stream AC',
		spec: {
			capacity: '1920Wh, 19,2V',
			acInputPower: '1050W charge, 2300W',
			acOutputGrid: '800W',
			acOutput: '1200W',
			acOutputMax: '2300W',
			solarInput: '3*500W,15-60V, 14A',
		}
	},
	stream_ultra: {
		identifiers: 'BK11Zxxx',
		manufacturer: 'Ecoflow',
		model: 'Stream Ultra, 1920Wh',
		name: 'Stream AC',
		spec: {
			capacity: '1920Wh, 19,2V',
			acInputPower: '1050W charge, 2300W',
			acOutputGrid: '800W',
			acOutput: '1200W',
			acOutputMax: '2300W',
			solarInput: '4*500W,15-60V, 14A',
		}
	},
};

const pstationStates = {
	bmsMaster: {
		number: {
			soc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Remaining battery percentage',
				role: 'value'
			},
			temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Temperature',
				role: 'value'
			},
			inputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Input power',
				role: 'value'
			},
			outputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Output power',
				role: 'value'
			},
			vol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Voltage',
				role: 'value'
			},
			amp: {
				min: 0,
				max: 25,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Current',
				role: 'value'
			},
			designCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Design capacity',
				entity_category: 'diagnostic',
				role: 'value'
			},
			remainCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Remaining capacity',
				role: 'value'
			},
			fullCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Full capacity',
				role: 'value'
			},
			maxCellVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Maximum cell voltage',
				role: 'value'
			},
			minCellVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Minimum cell voltage',
				role: 'value'
			},
			maxCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Maximum cell temperature',
				role: 'value'
			},
			minCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Minimum cell temperature',
				role: 'value'
			},
			maxMosTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Maximum MOS temperature',
				role: 'value'
			},
			minMosTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Minimum MOS temperature',
				role: 'value'
			},
			tagChgAmp: {
				min: 0,
				max: 100,
				unit_of_measurement: 'A',
				mult: 0.0001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Target charging current',
				entity_category: 'diagnostic',
				role: 'value'
			},
			f32ShowSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC',
				role: 'value'
			},
			remainTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Time remaining',
				entity_category: 'diagnostic',
				role: 'value'
			},
			cycles: {
				min: 0,
				max: 6000,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				name: 'Number of cycles',
				role: 'value'
			},
			//new for delta2
			OCV: {
				min: 0,
				max: 65,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Open Circuit Voltage',
				role: 'value'
			},
			//new delta 2 max
			maxVolDiff: {
				min: 0,
				max: 500,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Maximum cell voltage difference',
				role: 'value'
			},
			//new riverpro
			tagChgVol: {
				min: 0,
				max: 100,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Target charging voltage',
				entity_category: 'diagnostic',
				role: 'value'
			},
			//new wave2
			bmsDisplayTime: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Time displayed in BMS'
			},
			bmsSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SoC'
			},
			bmsCur: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'BMS current'
			},
			bmsReqVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'BMS request voltage'
			},
			bmsDsgTime: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'BMS discharging time'
			},
			bmsVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'BMS voltage'
			},
			bmsReqCur: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'BMS request current'
			},
			bmsChgTime: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'BMS charging duration'
			},

			bmsMinDsgSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'UPS minimum discharge SoC'
			},
			bmsMaxChgSoc: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'UPS maximum charging SOC'
			},
			//new glacier
			minMosTmp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Minimum MOS temperature'
			},
			tmp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Temperature'
			},
			outWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power'
			},
			maxMosTmp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Maximum MOS temperature'
			},
			inWatts: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power'
			},
			minCellTmp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Minimum cell temperature'
			},
			maxCellTmp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Maximum cell temperature'
			},
			diffSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'SOC difference'
			},
			cellVol: {
				min: 0,
				max: 10,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Cell voltage'
			},
			cellTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Cell temperature'
			},
			targetSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Target SoC'
			},
			actSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Actual SoC'
			}
		},
		string: {
			openBmsIdx: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Battery pack enable state'
			},
			soh: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Health status' },
			bmsFault: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'BMS permanent fault' },
			bqSysStatReg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BQ hardware protection register'
			},
			bqSysStatReq: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BQ hardware protection register'
			},
			num: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'BMS number' },
			sysVer: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'System version' },
			//new delta 2 max
			recv: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'recv' },

			//new wave2
			bmsBatErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BMS error code',
				role: 'info'
			},
			bmsHwFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hardware in place',
				role: 'info'
			},
			bmsSwFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Software in place',
				role: 'info'
			},
			sleepCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of pressing the Sleep button'
			},
			xt150AccessCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of XT150 connections'
			},
			awakeCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of pressing button for wakeup'
			},
			powerOnCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of pressing button for startup'
			},
			powerOffCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of pressing button for shutdown'
			},
			usbUseCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using USB'
			},
			typecUseCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using AC'
			},
			//new glacier
			err: { entity_type: 'text', entity_category: 'diagnostic', name: 'Global error code', role: 'info' },
			bqStatReg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BQ hardware protection register',
				role: 'info'
			},
			ver: { entity_type: 'text', entity_category: 'diagnostic', name: 'System version', role: 'info' },
			cycleSoh: { entity_type: 'text', entity_category: 'diagnostic', name: 'cycle Soh', role: 'info' },
			realSoh: { entity_type: 'text', entity_category: 'diagnostic', name: 'real Soh', role: 'info' },
			bmsHeartbeatVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms Heartbeat Version',
				role: 'info'
			},
			productDetail: { entity_type: 'text', entity_category: 'diagnostic', name: 'Product Detail', role: 'info' },
			sysLoaderVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'sysLoaderVer', role: 'info' },
			totalDsgCap: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Total Discharge Capacity',
				role: 'info'
			}, //4294967295
			totalChgCap: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Total Charge Capacity',
				role: 'info'
			},
			ecloudOcv: { entity_type: 'text', entity_category: 'diagnostic', name: 'ecloudOcv', role: 'info' }
		},
		diagnostic: {
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Global error code',
				errCode: { '0': 'OK?' }
			},
			type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS type',
				type: { '1': 'Lithium battery', '2': 'Oil-powered' }
			},
			cellId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Battery capacity type',
				cellId: { '1': '2.5 Ah per battery', '2': '2 Ah per battery' }
			},
			//new delta 2 max
			balanceState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Balance State',
				balanceState: { '0': '0=OK?', '1': '1?', '2': '2?' }
			},
			mosState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'MOS state',
				mosState: { '0': '0?', '1': '1?', '2': '2?', '3': '3?' }
			},
			//new wave2
			bmsType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bmsType',
				role: 'info',
				bmsType: { '0': 'master', '1': 'slave' }
			},
			bmsChgDsgSts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms Charge Discharge Status',
				role: 'info',
				bmsChgDsgSts: { '0': 'idle', '1': 'chg', '2': 'dsg' }
			},
			//new glacier
			openBmsIdx: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery pack status',
				role: 'info',
				openBmsIdx: { '0': 'Not enabled', '1': 'Enabled' }
			},
			//delta pro
			chgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'chg Dsg State',
				chgDsgState: { '0': '0?', '1': '1?', '2': '2?' }
			},
			productType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Product Type',
				productType: { '14': 'Delta Pro?' }
			}, //14
			calendarSch: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Calendar Schedule',
				calendarSch: { '0': '0?', '1': '1?' }
			},
			sysState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'sys State',
				sysState: { '0': '0?', '1': '1?' }
			},
			allErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'all Err Code',
				allErrCode: { '0': '0?', '1': '1?', '2': '2?' }
			},
			allBmsFault: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'all Bms Faulttype',
				allBmsFault: { '0': '0?', '1': '1?', '2': '2?' }
			}
		},
		icon: {
			//new delta 2 max
			recv: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'recv' },
			//new from deltamax
			cellSeriesNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Cell Series Number'
			},
			cellNtcNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Number of NTC sensors'
			},
			//new rivermax only at slave
			ambientLightColor: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Ambient Light Color'
			},
			ambientLightBrightness: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Ambient Light Brightness'
			},
			ambientLightAnimate: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Ambient Light Animate'
			},
			ambientLightEnabled: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Ambient Light Enabled'
			},
			//new wave2
			bmsResv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Reserve'
			},
			resv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Reserve'
			}
		},
		level: {
			//new riverpro
			maxChargeSoc: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'Charge upper limit',
				icon: 'mdi:battery-charging-90'
			}
		},
		array: {
			cellVol: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'Cell voltage' },
			cellTemp: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'Cell temperature' },
			hwVersion: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'HW version' },
			dsgWattRangeTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Length of time (sec) when the discharging power falls in each of the four intervals',
				role: 'list'
			},
			usbWattRangeTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Length of time (sec) when the usb power falls in each of the four intervals',
				role: 'list'
			},
			chgWattRangeTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Length of time (sec) when the charging power falls in each of the four intervals',
				role: 'list'
			},
			typecWattRangeTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Length of time (sec) when the AC power falls in each of the four intervals',
				role: 'list'
			},
			hwEdition: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'HW edition' },
			packSn: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'Pack SN' }
		}
	},
	inv: {
		number: {
			inputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Charging power',
				role: 'value'
			},
			outputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Discharging power',
				role: 'value'
			},
			invOutVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Actual inverter output voltage',
				role: 'value'
			},
			invOutAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Inverter output current',
				role: 'value'
			},
			invOutFreq: {
				min: 0,
				max: 62,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter output frequency',
				role: 'value'
			},
			acInVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Inverter input voltage',
				role: 'value'
			},
			acInAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Inverter input current',
				role: 'value'
			},
			acInFreq: {
				min: 0,
				max: 62,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter input frequency',
				role: 'value'
			},
			outTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Inverter temperature',
				role: 'value'
			},
			dcInVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'DC input voltage',
				role: 'value'
			},
			dcInAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'DC input current',
				role: 'value'
			},
			dcInTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'DC temperature',
				role: 'value'
			},
			FastChgWatts: {
				min: 200,
				max: 2400,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',

				name: 'Maximum charging power for AC fast charging (W)'
			},
			SlowChgWatts: {
				min: 200,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',

				name: 'Maximum charging power for AC slow charging (W)'
			},
			standbyMins: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				AC_TIMEOUT_OPTIONS: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720,
					'24 hr': 1440
				},
				role: 'value',

				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			//new delta 2 max
			standbyMin: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				AC_TIMEOUT_OPTIONS: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720,
					'24 hr': 1440
				},
				role: 'value',

				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			acChgRatedPower: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',

				name: 'AC charge rated power'
			},
			cfgFastChgWatts: {
				min: 200,
				max: 2400,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',

				name: 'Maximum charging power for AC fast charging (W)'
			},
			//new riverpro
			invInAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Inverter input current',
				role: 'value'
			},
			invInFreq: {
				min: 0,
				max: 62,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter input frequency',
				role: 'value'
			},
			invInVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Inverter input voltage',
				role: 'value'
			},
			inTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Inverter temperature',
				role: 'value'
			}
		},
		switch: {
			//nochmals in diagnostic wegen delta 2
			cfgAcEnabled: {
				entity_type: 'switch',
				device_class: 'outlet',
				role: 'switch',
				name: 'AC discharge (INV) switch setting',
				payload_off: 'off',
				payload_on: 'on',
				cfgAcEnabled: { '0': 'off', '1': 'on' }
			},
			cfgAcXboost: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'X-Boost switch',
				payload_off: 'off',
				payload_on: 'on',
				cfgAcXboost: { '0': 'off', '1': 'on', ff: 'ignored' }
			},
			cfgAcWorkMode: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC charging mode',
				payload_off: 'full power',
				payload_on: 'mute',
				cfgAcWorkMode: { '0': 'full power', '1': 'mute' }
			},
			chgPauseFlag: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC Charging Pause',
				payload_off: 'not stopped?',
				payload_on: 'charge stopped',
				chgPauseFlag: { '0': 'not stopped?', '1': 'charge stopped' }
			}
		},
		level: {
			cfgSlowChgWatts: {
				min: 200,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'number',
				device_class: 'power',
				role: 'level',
				name: 'Maximum charging power for AC slow charging (W)'
			},
			cfgStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'select',
				device_class: 'duration',
				select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr'],
				select_obj: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720
				},
				states: {
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					240: '4 hr',
					360: '6 hr',
					720: '12 hr'
				},
				role: 'level',
				subrole: 'timer',
				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			//new delta 2max
			SlowChgWatts: {
				min: 200,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'number',
				device_class: 'power',
				role: 'level',
				name: 'Maximum charging power for AC slow charging (W)'
			}
		},
		string: {
			errCode: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Global error code' },
			sysVer: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'System version' },
			invType: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'PSDR model code' },
			cfgAcOutVoltage: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output voltage (V): 0xffffffff: ignored'
			},
			//new delta 2
			cfgAcOutVol: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output voltage (V): 0xffffffff: ignored'
			}
			//new delta 2 max
		},
		diagnostic: {
			fanState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fan state',
				fanState: { '0': 'disabled', '1': 'Level 1', '2': 'Level 2', '3': 'Level 3' }
			},
			chgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC charging pause flag',
				chgPauseFlag: { '0': 'no pause?', '1': 'charging stopped' }
			},
			chargerType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				chargerType: {
					'0': 'no charging',
					'1': 'AC charging',
					'2': 'DC adapter charging',
					'3': 'solar charging',
					'4': 'CC',
					'5': 'BC'
				}
			},
			dischargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Discharging type',
				dischargeType: { '0': 'no discharge?', '1': 'AC discharging', '2': 'PR', '3': 'BC' }
			},
			acDipSwitch: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC fast/slow charging dip switch',
				acDipSwitch: { '0': 'unknown', '1': 'fast charging mode', '2': 'slow charging mode' }
			},
			cfgAcOutFreq: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output frequency (Hz)',
				cfgAcOutFreq: { '1': '50 Hz', '2': '60 Hz', 0xff: 'ignored' }
			},
			cfgAcEnabled: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC discharge switch setting',
				cfgAcEnabled: { '0': 'off', '1': 'on' }
			},
			cfgAcXboost: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'X-Boost switch',
				cfgAcXboost: { '0': 'off', '1': 'on', ff: 'ignored' }
			},
			cfgAcWorkMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC charging mode',
				cfgAcWorkMode: { '0': 'full power', '1': 'mute' }
			},
			acPassByAutoEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'acPassByAutoEn',
				acPassByAutoEn: { '0': '0?', '1': '1?' }
			},
			//new delta 2 max
			prBalanceMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'prBalanceMode',
				prBalanceMode: { '0': '0=?', '1': '1=?' }
			},
			acPassbyAutoEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'acPassbyAutoEn',
				acPassbyAutoEn: { '0': '0?', '1': '1?' }
			},
			//new riverpro
			cfgFanMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fan mode',
				cfgFanMode: { '0': 'disabled', '1': 'Level 1', '2': 'Level 2', '3': 'Level 3' }
			},
			cfgAcChgModeFlg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC charging mode flag',
				cfgAcChgModeFlg: { '0': '?', '1': '?' }
			}
		},
		icon: {
			//new delta 2
			reserved: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'reserved'
			}
		}
	},
	mppt: {
		number: {
			inVol: {
				min: 0,
				max: 150,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV input voltage',
				role: 'value'
			},
			inAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV input current',
				role: 'value'
			},
			inWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV input power',
				role: 'value'
			},
			outVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV output voltage',
				role: 'value'
			},
			outAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV output current',
				role: 'value'
			},
			outWatts: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV output power',
				role: 'value'
			},
			mpptTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'MPPT temperature',
				role: 'value'
			},
			dcdc12vVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'DC12V30A output voltage, which is valid only for DELTA Pro',
				role: 'value'
			},
			dcdc12vAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'DC12V30A output current, which is valid only for DELTA Pro',
				role: 'value'
			},
			dcdc12vWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'DC12V30A output power, which is valid only for DELTA Pro',
				role: 'value'
			},
			carOutVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Car charging output voltage',
				role: 'value'
			},
			carOutAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Car charging output current',
				role: 'value'
			},
			carOutWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Car charging output power',
				role: 'value'
			},
			carTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Car charging temperature',
				role: 'value'
			},
			dc24vTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'DCDC24V temperature',
				role: 'value'
			},
			//new delta 2
			powStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',

				name: 'Power standby time /min 0 Never standby 720 Default value ?'
			},
			scrStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',

				name: 'SCR standby time /min 0 Never standby 720 Default value ?'
			},
			//new delta 2 max
			pv2InVol: {
				min: 0,
				max: 150,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV input voltage',
				role: 'value'
			},
			pv2InAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV input current',
				role: 'value'
			},
			pv2InWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV input power',
				role: 'value'
			},
			pv2MpptTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'MPPT temperature',
				role: 'value'
			}
		},
		level: {
			cfgDcChgCurrent: {
				min: 4,
				max: 8,
				unit_of_measurement: 'A',
				step: 2,
				mult: 0.001,
				entity_type: 'select',
				device_class: 'current',
				select: ['4A', '6A', '8A'],
				select_obj: {
					'4A': 4,
					'6A': 6,
					'8A': 8
				},
				states: {
					4: '4A',
					6: '6A',
					8: '8A'
				},

				name: 'On-board charging current',
				role: 'level'
			},
			//new delta 2
			dcChgCurrent: {
				min: 4,
				max: 8,
				unit_of_measurement: 'A',
				step: 2,
				mult: 0.001,
				entity_type: 'select',
				device_class: 'current',
				select: ['4A', '6A', '8A'],
				select_obj: {
					'4A': 4,
					'6A': 6,
					'8A': 8
				},
				states: {
					4: '4A',
					6: '6A',
					8: '8A'
				},
				name: 'On-board charging current',
				role: 'level'
			},
			cfgChgWatts: {
				min: 0,
				max: 2200,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'number',
				device_class: 'power',
				role: 'level',
				name: 'Maximum charging power for charging (W) ?'
			},
			acStandbyMins: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'select',
				device_class: 'duration',
				select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr'],
				select_obj: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720,
					'24 hr': 1440
				},
				states: {
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					240: '4 hr',
					360: '6 hr',
					720: '12 hr',
					1440: '24 hr'
				},
				role: 'level',
				subrole: 'timer',
				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			carStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'select',
				device_class: 'duration',
				select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr'],
				select_obj: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720,
					'24 hr': 1440
				},
				states: {
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					240: '4 hr',
					360: '6 hr',
					720: '12 hr',
					1440: '24 hr'
				},
				role: 'level',
				subrole: 'timer',
				name: 'CAR standby time /min 0 Never standby 720 Default value'
			},
			//new delta2max
			pv2DcChgCurrent: {
				min: 4,
				max: 8,
				unit_of_measurement: 'A',
				step: 2,
				mult: 0.001,
				entity_type: 'select',
				device_class: 'current',
				select: ['4A', '6A', '8A'],
				select_obj: {
					'4A': 4,
					'6A': 6,
					'8A': 8
				},
				states: {
					4: '4A',
					6: '6A',
					8: '8A'
				},
				name: 'pv2DcChgCurrent',
				role: 'level'
			}
		},
		switch: {
			// bei delta 2 eventuell in pd als switch, dann aber problem?
			carState: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Car charger switch setting',
				payload_off: 'off',
				payload_on: 'on',
				carState: { '0': 'off', '1': 'on' }
			},
			//new delta 2
			beepState: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Beep status',
				payload_off: 'normal',
				payload_on: 'quiet',
				beepState: { '0': 'Normal', '1': 'Quiet' }
			},
			cfgAcEnabled: {
				entity_type: 'switch',
				device_class: 'outlet',
				role: 'switch',
				name: 'AC discharge switch setting',
				payload_off: 'off',
				payload_on: 'on',
				cfgAcEnabled: { '0': 'off', '1': 'on' }
			},
			cfgAcXboost: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'X-Boost switch',
				payload_off: 'off',
				payload_on: 'on',
				cfgAcXboost: { '0': 'off', '1': 'on', ff: 'ignored' }
			},
			//new river2pro
			chgPauseFlag: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC Charging Pause',
				payload_off: 'not stopped?',
				payload_on: 'charge stopped',
				chgPauseFlag: { '0': 'not stopped?', '1': 'charge stopped' }
			}
		},
		string: {
			swVer: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Version number' },
			reserved: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Reserved' },
			//new delta 2
			cfgAcOutVol: {
				//'Inverter output voltage (V): 0xffffffff: ignored'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output voltage (mV)'
			}
		},
		diagnostic: {
			faultCode: {
				//'Error code: byte0: mppt_fault; byte1: car_fault; byte2: dc24v_fault',
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Error code',
				faultCode: { '0': 'OK?', '1': 'mppt_fault', 2: 'car_fault', 4: 'dc24v_fault' }
			},
			xt60ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'XT60 charging type',
				xt60ChgType: { '0': 'not detected', '1': 'MPPT', '2': 'adapter' }
			},
			cfgChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Configured charging type: This parameter is valid when xt60_chg_type is 0.',
				cfgChgType: { '0': 'auto', '1': 'MPPT', '2': 'adapter' }
			},
			chgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Actual charging type',
				chgType: {
					0: 'null',
					1: 'adapter (adapter/DC source)',
					2: 'MPPT (solar)',
					3: 'AC (mains supply)',
					4: 'gas',
					5: 'wind'
				}
			},
			chgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging state',
				chgState: { '0': 'disabled', '1': 'charging', '2': 'standby (DC charging stopped during AC charging)' }
			},
			dc24vState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'DCDC24 switch state',
				dc24vState: { '0': 'off', '1': 'on' }
			},
			chgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'PV charging pause flag',
				chgPauseFlag: { '0': 'not stopped ?', '1': 'charging stopped' }
			},
			//new delta 2
			x60ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'XT60 charging type',
				x60ChgType: { '0': 'not detected', '1': 'MPPT', '2': 'adapter' }
			},
			cfgAcOutFreq: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output frequency (Hz)',
				cfgAcOutFreq: { '1': '50 Hz', '2': '60 Hz', 0xff: 'ignored' }
			},
			dischargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Discharging type',
				dischargeType: { '0': 'no discharge?', '1': 'AC discharging', '2': 'PR', '3': 'BC' }
			},
			//new delta 2 max
			pv2Xt60ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'XT60 charging type',
				pv2Xt60ChgType: { '0': 'not detected', '1': 'MPPT?', '2': 'adapter?' }
			},
			pv2CfgChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Configured charging type: This parameter is valid when xt60_chg_type is 0.',
				pv2CfgChgType: { '0': 'auto?', '1': 'MPPT?', '2': 'adapter?' }
			},
			pv2ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Actual charging type',
				pv2ChgType: {
					'0': 'null',
					'1': 'adapter (adapter/DC source)',
					'2': 'MPPT (solar)',
					'3': 'AC (mains supply)',
					'4': 'gas',
					'5': 'wind'
				}
			},
			pv2ChgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging state',
				pv2ChgState: {
					'0': 'disabled',
					'1': 'charging',
					'2': 'standby (DC charging stopped during AC charging)'
				}
			},
			pv2ChgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'PV charging pause flag',
				pv2ChgPauseFlag: { '0': 'not stopped', '1': 'charging stopped' }
			}
		},
		icon: {
			//new delta 2
			res: {}
		}
	},
	pd: {
		number: {
			soc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Displayed SOC',
				role: 'value'
			},
			wattsOutSum: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Total output power',
				role: 'value'
			},
			wattsInSum: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Total input power',
				role: 'value'
			},
			remainTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name:
					'Time remaining (min) > 0: remaining charging time; time remaining (min) < 0: remaining discharging time',
				role: 'value'
			},
			usb1Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Common usb1 output power',
				role: 'value'
			},
			usb2Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Common usb2 output power',
				role: 'value'
			},
			qcUsb1Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Quick charge usb1 output power',
				role: 'value'
			},
			qcUsb2Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Quick charge usb2 output power',
				role: 'value'
			},
			typec1Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Typec1 output power',
				role: 'value'
			},
			typec2Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Typec2 output power',
				role: 'value'
			},
			typec1Temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Type-C 1 temperature',
				role: 'value'
			},
			typec2Temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Type-C 2 temperature',
				role: 'value'
			},
			carWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'CAR output power',
				role: 'value'
			},
			carTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'CAR temperature',
				role: 'value'
			},
			chgPowerDc: {
				min: 0,
				max: 65000,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Cumulative DC power charged (adapter)',
				state_class: 'total_increasing',
				role: 'value'
			},
			chgSunPower: {
				min: 0,
				max: 65000,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Cumulative solar power charged',
				state_class: 'total_increasing',
				role: 'value'
			},
			chgPowerAc: {
				min: 0,
				max: 65000,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Cumulative AC power charged (wall socket)',
				state_class: 'total_increasing',
				role: 'value'
			},
			dsgPowerDc: {
				min: 0,
				max: 65000,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Cumulative DC power discharged',
				state_class: 'total_increasing',
				role: 'value'
			},
			dsgPowerAc: {
				min: 0,
				max: 65000,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Cumulative AC power discharged',
				state_class: 'total_increasing',
				role: 'value'
			},
			usbUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'USB use time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			usbqcUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'USB QC use time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			typccUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Type-C use time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			carUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Car use time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			invUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Inverter use time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			dcInUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'DC charging time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			mpptUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'MPPT use time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			//new DeltaPro FW
			acautooutPause: {
				min: 0,
				max: 255,
				unit_of_measurement: 's (0-255?)',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'AC Auto out Pause',
				entity_category: 'diagnostic',
				role: 'value'
			},
			minAcoutSoc: {
				min: 0,
				max: 255,
				unit_of_measurement: '% (0-255?)',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'level',
				name: 'minimum AC out SOC',
				entity_category: 'diagnostic',
				role: 'value'
			},
			//new delta 2
			inputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Input power',
				role: 'value'
			},
			inWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PD? input power',
				role: 'value'
			},
			outWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PD? output power',
				role: 'value'
			},
			outputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Output power',
				role: 'value'
			},
			typecUsedTime: {
				min: 0,
				max: 9999999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Type-C use time',
				entity_category: 'diagnostic',
				role: 'value'
			},
			acAutoOutPause: {
				min: 0,
				max: 255,
				unit_of_measurement: 's (0-255?)',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'AC Auto out Pause',
				entity_category: 'diagnostic',
				role: 'value'
			},
			chgPowerAC: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				name: 'Cumulative AC power charged for PD (wall socket)',
				role: 'value'
			},
			chgPowerDC: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				name: 'Cumulative DC power charged for PD (adapter)',
				role: 'value'
			},
			dsgPowerAC: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				name: 'Cumulative AC power discharged ',
				role: 'value'
			},
			dsgPowerDC: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				name: 'Cumulative DC discharge capacity',
				role: 'value'
			},
			//new delta 2 max
			minAcSoc: {
				min: 0,
				max: 255,
				unit_of_measurement: '% (0-255?)',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'level',
				name: 'minimum AC out SOC',
				entity_category: 'diagnostic',
				role: 'value'
			},
			invInWatts: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Inverter Input  Watts',
				role: 'value'
			},
			invOutWatts: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Inverter Output Watts',
				role: 'value'
			},
			XT150Watts1: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'XT150 (1) Watts',
				role: 'value'
			},
			XT150Watts2: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'XT150 (2) Watts',
				role: 'value'
			},
			pv1ChargeWatts: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV1 charge Watts',
				role: 'value'
			},
			pv2ChargeWatts: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV2 charge Watts',
				role: 'value'
			},
			//new riverpro
			typecWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Type-C output power',
				role: 'value'
			},
			typecTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Type-C temperature',
				role: 'value'
			},
			usb3Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Common usb3 output power',
				role: 'value'
			},
			ledWatts: {
				min: 0,
				max: 100,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'LED output power',
				role: 'value'
			},
			//new river2pro
			typecChaWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PD? charging power',
				role: 'value'
			},
			//new wave2
			heatEnv: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Return air temperature in condensation zone'
			},

			mpptPwr: {
				min: 0,
				max: 400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'PV input power'
			},

			batVolt: {
				min: 0,
				max: 65,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Battery voltage'
			},

			busVol: {
				min: 0,
				max: 65,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Bus voltage'
			},
			batSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SoC'
			},
			sacWorkTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Device working duration'
			},
			condTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Condensation temperature'
			},
			batCurr: {
				min: 0,
				max: 10,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Battery current'
			},

			setTempCel: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Set temperature in degrees Celsius'
			},
			pvPower: {
				min: 0,
				max: 400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'PV charging power'
			},

			batPwrOut: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Battery output power'
			},
			acFreq: {
				min: 0,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'AC input frequency'
			},
			mpptVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'PV voltage'
			},
			acCurrRms: {
				min: 0,
				max: 10,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'RMS value of the AC input current'
			},
			batPowerSupplyTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of using battery provided with the air conditioner'
			},

			acPwrIn: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'AC input power'
			},

			tempNtc: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'NTC temperature'
			},
			envTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Ambient temperature'
			},
			sacIdleTime: {
				min: 0,
				//max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Device standby time'
			},
			acVoltRms: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'RMS value of the AC input voltage'
			},
			dp2PowerSupplyTime: {
				min: 0,

				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of using DELTA 2 as the power source'
			},

			coolEnv: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Air outlet temperature'
			},
			batChgRemain: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining battery charging time'
			},
			coolTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Air outlet temperature'
			},

			mpptCur: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'PV current'
			},

			busVolt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Bus voltage'
			},

			psdrPower: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power supply power'
			},

			dpPowerSupplyTime: {
				min: 0,

				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of using DELTA Pro as the power source'
			},
			timeRemain: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining time in current mode'
			},

			sysPowerWatts: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'System power'
			},

			evapTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Evaporation temperature'
			},
			batDsgRemain: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining battery discharging time'
			},
			batPower: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Battery power'
			},
			motorOutTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Exhaust temperature'
			},

			airInTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Evaporation zone return air temperature'
			},
			setTempfah: {
				min: 0,
				max: 100,
				unit_of_measurement: '°F',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Set temperature in degrees Fahrenheit'
			},
			llcCurr: {
				min: 0,
				max: 10,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'LLC output current'
			},

			dmPowerSupplyTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of using DELTA Max as the power source'
			},
			//new glacier
			exhaustTmp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Exhaust pipe wall temperature'
			},

			batTime: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name:
					'batTime; a negative value indicates a discharging time, and positive value indicates a charging time'
			},

			tempWater: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Water temperature of the ice making zone'
			},
			A12Val: {
				min: 0,
				max: 15,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: '12 V auxiliary supply voltage'
			},

			motorCur: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Motor Current'
			},

			tmpM: {
				min: -20,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Combined temperature zone temperature'
			},

			icePercent: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Ice making progress'
			},

			powerBatInTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of battery pack in place'
			},
			ambientTmp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Ambient temperature'
			},

			coolZoneSingleTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Single temperature zone duration'
			},
			tmpAver: {
				min: -20,
				max: 60,
				unit_of_measurement: 'C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Real-time temperature of single temperature zone'
			},
			tmpR: {
				min: -20,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.11,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Actual Right temperature zone value'
			},

			batPct: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery level'
			},

			iceTmTag: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'The ice making target time (used for app and LCD effect display)'
			},

			coolCoverTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of cooling zone being opened'
			},
			powerBatOutTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of battery pack not in place'
			},
			chargeWorkTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of working while charging'
			},

			motorVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Motor voltage'
			},

			coolZoneDoubleTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of dual temperature zone'
			},

			tmpL: {
				min: -20,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Actual temperature of the left temperature zone'
			},
			motorSpeed: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'rpm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Motor speed'
			},
			motorWat: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Motor power'
			},
			iceTm: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Duration of the current ice making (for app and LCD effect display)',
				role: 'value'
			}
		},
		level: {
			lcdOffSec: {
				min: 0,
				max: 1800,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'select',
				device_class: 'duration',
				select: ['Never', '10 sec', '30 sec', '1 min', '5 min', '30 min'],
				select_obj: {
					Never: 0,
					'10 sec': 10,
					'30 sec': 30,
					'1 min': 60,
					'5 min': 300,
					'30 min': 1800
				},
				states: {
					0: 'Never',
					10: '10 sec',
					30: '30 sec',
					60: '1 min',
					300: '5 min',
					1800: '30 min'
				},
				role: 'level',
				subrole: 'timer',
				name: 'LCD screen-off duration: 0: never off'
			},
			standByMode: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'select', //select
				device_class: 'duration',
				select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr'],
				select_obj: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720
				},
				states: {
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					240: '4 hr',
					360: '6 hr',
					720: '12 hr'
				},
				UNIT_TIMEOUT_OPTIONS: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720,
					'24 hr': 1440
				},
				role: 'level',
				subrole: 'timer',
				name: 'Device standby time /min 0 Never standby 5999 Max value',
				standByMode: { '0': 'Never standby', '5999': 'Max value' }
			},
			//new DeltaPro Pro
			bppowerSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'Backup Power SOC'
			},
			//new delta 2
			bpPowerSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'Backup Power SOC'
			},
			standbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'select',
				device_class: 'duration',
				select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr'],
				select_obj: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720
				},
				states: {
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					240: '4 hr',
					360: '6 hr',
					720: '12 hr'
				},
				role: 'level',
				subrole: 'timer',
				name: 'Standby time /min 0 Never standby 720 Default value ?'
			},
			//new wave2
			pdSubMode: {
				min: 0,
				max: 3,
				unit_of_measurement: 'mode',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'enum',
				select: ['Max', 'Sleep', 'Eco', 'Manual'],
				select_obj: {
					Max: 0,
					Sleep: 1,
					Eco: 2,
					Manual: 3
				},
				states: {
					0: 'Max',
					1: 'Sleep',
					2: 'Eco',
					3: 'Manual'
				},
				name: 'Set sub-mode (0: Max, 1: Sleep, 2: Eco, 3: Manual )',
				role: 'level',
				subrole: 'mode'
			},
			fanValue: {
				min: 0,
				max: 3,
				unit_of_measurement: 'mode',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				select: ['Low', 'Medium', 'High'],
				select_obj: {
					Low: 0,
					Medium: 1,
					High: 2
				},
				states: {
					0: 'Low',
					1: 'Medium',
					2: 'High'
				},
				name: 'Wind speed in the current mode: 0: Low; 1: Medium; 2: High',
				role: 'level'
			},
			setTemp: {
				min: 16,
				max: 30,
				unit_of_measurement: '°C',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'temperature',
				name: 'Temperature set in current mode',
				role: 'level'
			},
			idleTime: {
				min: 0,
				max: 3600,
				unit_of_measurement: 's',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'duration',
				select: ['Never', '10 sec', '30 sec', '1 min', '5 min', '30 min'],
				select_obj: {
					Never: 0,
					'10 sec': 10,
					'30 sec': 30,
					'1 min': 60,
					'5 min': 300,
					'30 min': 1800
				},
				states: {
					0: 'Never',
					10: '10 sec',
					30: '30 sec',
					60: '1 min',
					300: '5 min',
					1800: '30 min'
				},
				name: 'Screen timeout (sec)',
				role: 'level',
				subrole: 'timer'
			},
			mainMode: {
				min: 0,
				max: 2,
				unit_of_measurement: 'mode',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'enum',
				select: ['Cool', 'Heat', 'Fan'],
				select_obj: {
					Cool: 0,
					Heat: 1,
					Fan: 2
				},
				states: {
					0: 'Cool',
					1: 'Heat',
					2: 'Fan'
				},
				name: 'Main mode: 0: Cool; 1: Heat; 2: Fan',
				role: 'level',
				subrole: 'mode'
			},
			timeSet: {
				min: 0,
				max: 65535,
				unit_of_measurement: 'min',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'duration',
				name: 'Time set for current mode',
				role: 'level',
				subrole: 'timer'
			},
			//during runtime options are changing!!!
			wteFthEn: {
				min: 0,
				max: 3,
				unit_of_measurement: 'mode',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'enum',
				select: ['Option 0', 'Option 1', 'Option 2'],
				select_obj: {
					'Option 0': 0,
					'Option 1': 1,
					'Option 2': 2
				},
				states: {
					0: 'Option 0',
					1: 'Option 1',
					2: 'Option 2'
				},
				name:
					'bit1 (main switch of automatic drainage function): 0: On; 1: Off bit0: (in Cool/Fan mode): 0: Manual drainage; 1: No drainage (in Heat mode): 0: Off; 1: Physical drainage (In Cool/Fan mode: 0: Turn on Manual drainage，1: Turn on No drainage, 2: Turn off Manual drainage, 3 Turn off No drainage In Heat Mode: 0: Turn off, 1: Turn on Manual drainage， 3: Turn off Manual drainage)',
				role: 'level',
				subrole: 'mode'
			},
			rgbState: {
				min: 0,
				max: 3,
				unit_of_measurement: '',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'brightness',
				select: ['Follow the screen', 'Always on', 'Always off'],
				select_obj: {
					'Follow the screen': 0,
					'Always on': 1,
					'Always off': 2
				},
				states: {
					0: 'Follow the screen',
					1: 'Always on',
					2: 'Always off'
				},
				name: 'Light strip settings: 0: Follow the screen; 1: Always on; 2: Always off',
				role: 'level'
			},
			powerMode: {
				min: 0,
				max: 3,
				unit_of_measurement: 'mode',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'power',
				select: ['Startup', 'Standby', 'Shutdown'],
				select_obj: {
					Startup: 1,
					Standby: 2,
					Shutdown: 3
				},
				states: {
					1: 'Startup',
					2: 'Standby',
					3: 'Shutdown'
				},
				name: 'Remote startup/shutdown (1: Startup; 2: Standby; 3: Shutdown)',
				role: 'level'
			},
			//new glacier
			powerPbLevel: {
				min: 0,
				max: 2,
				unit_of_measurement: 'level',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'enum',
				select: ['Low', 'Medium', 'High'],
				select_obj: {
					Low: 0,
					Medium: 1,
					High: 2
				},
				states: {
					0: 'Low',
					1: 'Medium',
					2: 'High'
				},
				name: 'Battery protection level 0: Low; 1: Medium; 2: High',
				role: 'level',
				subrole: 'mode'
			},
			tmpRSet: {
				min: -20,
				max: 50,
				unit_of_measurement: '°C',
				mult: 0.01,
				step: 1,
				entity_type: 'number',
				device_class: 'temperature',
				name: 'Set Temperature of the right temperature zone (valid when partition is inserted)',
				role: 'level'
			},
			tmpLSet: {
				min: -20,
				max: 50,
				unit_of_measurement: '°C',
				mult: 0.01,
				step: 1,
				entity_type: 'number',
				device_class: 'temperature',
				name: 'Set Temperature of the left temperature zone (valid when partition is inserted)',
				role: 'level'
			},
			tmpMSet: {
				min: -20,
				max: 50,
				unit_of_measurement: '°C',
				mult: 0.01,
				step: 1,
				entity_type: 'number',
				device_class: 'temperature',
				name: 'Set Temperature of the middle temperature zone',
				role: 'level'
			},
			blTime: {
				min: 0,
				max: 3600,
				unit_of_measurement: 's',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'duration',
				select: ['Never', '10 sec', '30 sec', '1 min', '5 min', '30 min', '1 hr'],
				select_obj: {
					Never: 0,
					'10 sec': 10,
					'30 sec': 30,
					'1 min': 60,
					'5 min': 300,
					'30 min': 1800,
					'1 hr': 3600
				},
				states: {
					0: 'Never',
					10: '10 sec',
					30: '30 sec',
					60: '1 min',
					300: '5 min',
					1800: '30 min',
					3600: '1 hr'
				},
				name: 'Screen timeout',
				role: 'level',
				subrole: 'timer'
			}
		},
		string: {
			model: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Product model' },
			sysVer: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'System version' },
			wifiVer: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Wi-Fi version' },
			brightnessLevel: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'LCD brightness level: 0-3'
			},

			wifiRssi: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wi-Fi signal intensity'
			},
			wirelessWatts: {
				//'Wireless charging output power (W): Reserved, not available'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wireless charging output power (W)'
			},
			lcdBrightness: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'delta max special'
			},
			//new DeltaPro FW
			relayswitchcnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'relayswitchcnt status or cnt?'
			},
			hysteresisAdd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Hysteresis SOC'
			},
			//new delta 2
			relaySwitchCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Number of relay disconnections'
			},
			wireWatts: {
				//'Wireless charging output power (W): Reserved, not available'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wireless charging output power (W)'
			},
			brightLevel: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'LCD brightness level: 0-3'
			},
			//new delta 2 max
			acAutoPause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'acAutoPause'
			},
			//new riverpro
			bmsSlave: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS slave'
			},
			//new wave 2
			batChgStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery charging/discharging status',
				role: 'info'
			},
			ver: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Version of drainage logic',
				role: 'info'
			},
			deviceName: { entity_type: 'text', entity_category: 'diagnostic', name: 'Name', role: 'info' },
			pdTempSys: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Unit of temperature',
				role: 'info'
			},
			bmsPid: { entity_type: 'text', entity_category: 'diagnostic', name: 'Product ID of BMS', role: 'info' },
			mpptSts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV execution status',
				role: 'info'
			},
			bmsErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'BMS error code', role: 'info' },
			powerSts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power supply status',
				role: 'info'
			},
			pdErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'Error code', role: 'info' },

			lcdStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Screen enabling bit',
				role: 'info'
			},
			midWindSpeedCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting medium wind speed'
			},
			lowWindSpeedCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting low wind speed'
			},
			dmPowerSupplyCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using DELTA Max as the power source'
			},
			CompressorTempCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of temperature sensor errors at the compressor discharge pipe'
			},
			dp2PowerSupplyCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using DELTA 2 as the power source'
			},
			hotSleepCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the Sleep mode in Heat mode'
			},
			hotNormalCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the Normal mode in Heat mode'
			},
			coolMaxCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the Max mode in Cool mode'
			},
			frontInTempErrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of temperature sensor errors at the front air inlet'
			},
			coolNormalCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the Normal mode in Cool mode'
			},
			powerOffCounts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of shutdown'
			},
			errPowerCommCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of power communication errors'
			},
			backPipeTempErrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of temperature sensor errors at the rear copper pipe'
			},
			dpPowerSupplyCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using DELTA Pro as the power source'
			},
			powerOnCounts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of startup'
			},
			hotEcoCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the ECO mode in Heat mode'
			},
			errAllCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Total count of errors'
			},
			frontPipeTempErrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of temperature sensor errors at the front copper pipe'
			},
			highWindSpeedCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting high wind speed'
			},
			errMotorCommCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of motor communication errors'
			},
			hotMaxCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the Max mode in Heat mode'
			},
			batPowerSupplyCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using battery provided with the air conditioner'
			},
			errWifiCommCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of Wi-Fi communication errors'
			},
			windCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting in Fan mode'
			},
			frontOutTempErrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of temperature sensor errors at the front air outlet'
			},
			coolSleepCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the Sleep mode in Cool mode'
			},
			frontBarTempErrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of temperature sensor errors at the front copper bar'
			},
			psdrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Communication counter'
			},
			coolEcoCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting the ECO mode in Cool mode'
			},
			//new glacier
			errBms: { entity_type: 'text', entity_category: 'diagnostic', name: 'BMS fault code', role: 'info' },
			errPd: { entity_type: 'text', entity_category: 'diagnostic', name: 'PD fault code', role: 'info' },
			errBldc: { entity_type: 'text', entity_category: 'diagnostic', name: 'BLDC fault code', role: 'info' },
			emsChgFlg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'EMS charging flag',
				role: 'info'
			},
			errLcd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Fault code displayed on LCD screen',
				role: 'info'
			},
			threeWayState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Refrigerant flow direction flag bit',
				role: 'info'
			},
			flagTwoZone: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Partition detection',
				role: 'info'
			},
			errCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'Error code', role: 'info' },
			errPwr: { entity_type: 'text', entity_category: 'diagnostic', name: 'POWER fault code', role: 'info' },
			coolZoneDoubleCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of dual temperature zones'
			},

			coolCoverCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of cooling zone openings'
			},

			appOpCountDeIce: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of ice detaching through app'
			},
			dntMakeIceDevice: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of pressing the ice making button when ice making is disabled'
			},
			appOpCountBeepOff: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of turning off buzzer through app'
			},
			appOpCountPowerOn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of powering on through app'
			},
			countinueMakeIceMax: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Maximum count of consecutive ice making'
			},
			appOpCountPowerOff: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of powering off through app'
			},
			appOpCountDntMakeIce: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of ice making through app when ice making is disabled'
			},
			powerBatInCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of battery pack in place'
			},

			makeIceCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Total count of ice making'
			},

			chargeWorkCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of working while charging'
			},
			coolZoneSingleCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of single temperature zone'
			},

			countinueMakeIceAve: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Average count of consecutive ice making actions'
			},
			appOpCountTempUnitC: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting degrees in Celsius through app'
			},
			appOpCountTempUnitF: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of setting degrees in Fahrenheit through app'
			},
			appOpCountBeepOn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of enabling buzzer through app'
			},
			err: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'PD error'
			},
			appOpCountMakeIce: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of ice making through app?'
			}
		},
		switch: {
			beepState: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Beep status',
				payload_off: 'normal',
				payload_on: 'quiet',
				beepState: { '0': 'Normal', '1': 'Quiet' }
			},
			dcOutState: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'DC button state',
				payload_off: 'off',
				payload_on: 'on',
				dcOutState: { '0': 'off', '1': 'on' }
			},
			//new DeltaPro FW
			acautooutConfig: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC auto out Config',
				payload_off: 'off',
				payload_on: 'on',
				acautooutConfig: { '0': 'off', '1': 'on' }
			},
			//new delta 2
			acAutoOutConfig: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC auto out Config',
				payload_off: 'off',
				payload_on: 'on',
				acAutoOutConfig: { '0': 'off', '1': 'on' }
			},
			pvChgPrioSet: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'PV Chg Prio Set',
				payload_off: 'off',
				payload_on: 'on',
				pvChgPrioSet: { '0': 'off', '1': 'on' }
			},
			newAcAutoOnCfg: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC auto out Config',
				payload_off: 'off',
				payload_on: 'on',
				newAcAutoOnCfg: { '0': 'off', '1': 'on' }
			},
			//new river max
			carSwitch: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'switch',
				name: 'Car charger switch',
				payload_off: 'off',
				payload_on: 'on',
				carSwitch: { '0': 'off?', '1': 'on?' }
			},
			//new wave2
			idleMode: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Disable',
				payload_on: 'Enable',
				name: 'Screen timeout',
				role: 'switch',
				idleMode: { '0': 'Disable', '1': 'Enable' }
			},
			tempDisplay: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Display ambient temperature',
				payload_on: 'Display air outlet temperature',
				name: 'Temperature display',
				role: 'switch',
				tempDisplay: { '0': 'Display ambient temperature', '1': 'Display air outlet temperature' }
			},
			tempSys: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Celsius',
				payload_on: 'Fahrenheit',
				name: 'Unit of temperature',
				role: 'switch',
				tempSys: { '0': 'Celsius', '1': 'Fahrenheit' }
			},
			beepEn: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Disabled',
				payload_on: 'Enabled',
				name: 'Buzzer enabling status',
				role: 'switch',
				beepEn: { '0': 'Disabled', '1': 'Enabled' }
			},
			//new glacier
			coolMode: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Normal',
				payload_on: 'Eco',
				name: 'cool Mode',
				role: 'switch',
				coolMode: { '0': 'Normal', '1': 'Eco' }
			},
			sensorAdv: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Unblocked',
				payload_on: 'Blocked',
				name:
					'Sensor detection blocking. Refer to @ST_SENSOR for data explanation. Bit: 1: Blocked; 0: Unblocked.',
				role: 'switch',
				sensorAdv: { '1': 'Blocked', '0': 'Unblocked' }
			},
			pwrPbEn: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Disable',
				payload_on: 'Enable',
				name: 'Battery protection switch',
				role: 'switch',
				pwrPbEn: { '0': 'Disable', '1': 'Enable' }
			},
			tmpUnit: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Celsius',
				payload_on: 'Fahrenheit',
				name: 'Temperature Unit',
				role: 'switch',
				tmpUnit: { '0': 'Celsius', '1': 'Fahrenheit' }
			},
			iceMode: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Disable',
				payload_on: 'Enable',
				name: 'Ice Making',
				role: 'switch',
				iceMode: { '0': 'Disable', '1': 'Enable' }
			},
			iceShape: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'small cubes',
				payload_on: 'large cubes',
				name: 'Ice Shape',
				role: 'switch',
				iceShape: { '0': 'small cubes', '1': 'large cubes' }
			},
			iceDetach: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Disable',
				payload_on: 'Enable',
				name: 'Ice Detaching',
				role: 'switch',
				iceDetach: { '0': 'Disable', '1': 'Enable' }
			},
			watchIsConfig: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'Disable',
				payload_on: 'Enable',
				role: 'switch',
				name: 'Power management configuration (Backup Reserve) ',
				watchIsConfig: { '0': 'disable', '1': 'enable' }
			}
		},
		diagnostic: {
			carState: {
				//'CAR button state: 0: off; 1: on'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'CAR button state',
				carState: { '0': 'off', '1': 'on' }
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Global error code',
				errCode: { '0': 'OK?' }
			},
			wifiAutoRcvy: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wi-Fi auto mode',
				wifiAutoRcvy: {
					'0': 'default mode (STA)',
					'1': 'The Wi-Fi network is automatically restored to the last mode (STA/AP) after powering on'
				}
			},
			sysChgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging/discharging state on screen',
				sysChgDsgState: { '0': 'discharged', '1': 'charged' }
			},
			iconRechgTimeMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charge icon mode',
				iconRechgTimeMode: { '0': 'normal', '1': 'blinking' }
			},
			extRj45Port: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'RJ45 port',
				extRj45Port: { '0': 'NULL', '1': 'RC(BLE_CTL)' }
			},
			ext3p8Port: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Infinity port / 3+8 ports',
				ext3p8Port: { '0': 'NULL', '1': 'CC', '2': 'PR', '3': 'SP (BC)' }
			},
			ext4p8Port: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Extra battery port. Only the status of the leftmost port can be identified.',
				ext4p8Port: { '0': 'NULL', '1': 'Extra battery', '2': 'Smart generator' }
			},
			//new DeltaPro
			watthisconfig: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Power management configuration',
				watthisconfig: { '0': 'disable', '1': 'enable' }
			},
			//new delta 2
			chgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging/discharging state on screen',
				chgDsgState: { '0': 'discharging', '1': 'charging' }
			},
			chargerType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				chargerType: {
					'0': 'no charging',
					'1': 'AC charging',
					'2': 'DC adapter charging',
					'3': 'solar charging',
					'4': 'CC',
					'5': 'BC'
				}
			},
			beepMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Beep mode',
				beepMode: { '0': 'normal', '1': 'quiet' }
			},
			acEnabled: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC enabled',
				acEnabled: { '0': 'off', '1': 'on' }
			},
			acAutoOnCfg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC Auto On Cfg',
				acAutoOnCfg: { '0': 'off?', '1': 'on?' }
			},
			//can be deleted if other than D2M have it also as switch
			watchIsConfig: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Power management configuration: ',
				watchIsConfig: { '0': 'disable', '1': 'enable' }
			},
			//new delta 2 max
			otherKitState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'other Kit State',
				otherKitState: { '0': '0?', '1': '1?' }
			},
			pv1ChargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				pv1ChargeType: {
					'0': 'none',
					'1': 'adapter',
					'2': 'solar panel'
				}
			},
			pv2ChargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				pv2ChargeType: {
					'0': 'none',
					'1': 'adapter',
					'2': 'solar panel'
				}
			},
			pvChargePrioSet: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				pvChargePrioSet: {
					'0': 'power supply prio?',
					'1': 'charge prio?'
				}
			},
			//new riverpro
			ledState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'LED state',
				payload_off: 'off',
				payload_on: 'on',
				ledState: { '0': 'off?', '1': 'on?' }
			},
			//new wave2
			bmsBoundFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Upper and lower limits on main battery pack charging and discharging',
				role: 'info',
				bmsBoundFlag: { '0': 'Normal charging and discharging', '1': 'Upper limit on charging' }
			},
			runSts: {
				//  'bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run'
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Run status',
				role: 'info',
				runSts: { '0': 'not run?', '1': 'AC_IN run', '2': 'PFC run', '4': 'LLC run', '8': 'MPPT run' }
			},
			rlySts: {
				//'bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open'
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Relay status',
				role: 'info',
				rlySts: { '0': 'OK?', '1': 'soft start rly closed?', '2': 'ac rly closed?' }
			},
			timeEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Timer enable status',
				role: 'info',
				timeEn: { '0': 'Timer off', '1': 'Timer on' }
			},
			setFanVal: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Fan speed',
				role: 'info',
				setFanVal: { '0': 'Low', '1': 'Medium', '2': 'High' }
			},
			bmsUnderVoltage: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery undervoltage flag bit',
				role: 'info',
				bmsUnderVoltage: { '0': 'Normal', '1': 'Undervoltage' }
			},
			waterValue: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Water level',
				role: 'info',
				waterValue: { '0': 'Level 1', '1': 'Level 2', '2': 'Full' }
			},
			mpptWork: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT operating status',
				role: 'info',
				mpptWork: { '1': 'Car charging', '2': 'Solar charging' }
			},
			refEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Cool/Heat enabling flag',
				role: 'info',
				refEn: { '0': 'Cool/Heat mode cannot be set', '1': 'Cool/Heat mode can be set' }
			},
			pdMainMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Set mode',
				role: 'info',
				pdMainMode: { '0': 'Cool', '1': 'Heat', '2': 'Fan' }
			},
			powerSrc: {
				//'Input source: bit0: AC; bit1: MPTT; bit2: Battery main pack; bit3: Battery slave pack'
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Input source',
				role: 'info',
				powerSrc: { '0': 'OK?', 1: 'AC', 2: 'MPPT', 4: 'Battery main pack', 8: 'Battery slave pack' }
			},
			subMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Set sub-mode ',
				role: 'info',
				subMode: { '0': 'Max', '1': 'Sleep', '2': 'Eco', '3': 'Manual' }
			},
			fanSts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fan speed level',
				fanSts: { '0': 'non-rotation', '1': 'Level 1', '2': 'Level 2', '3': 'Level3', '4': 'Level 4' }
			},
			//new glacier
			fsmState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Real-time running status ',
				role: 'info',
				fsmState: {
					'0': 'Small ice cube (in preparation)?',
					'1': 'Large ice cube (in preparation)?',
					'2': 'Small ice cube (ice making in progress; cannot be changed)?',
					'3': 'Large ice cube (ice making in progress)?',
					'4': 'Detaching ice',
					'5': 'Detaching completed'
				}
			},
			motorWait: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Waiting for compressor: ',
				role: 'info',
				motorWait: { '0': 'No need to wait', '1': 'Need to wait' }
			},
			pwrState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pwrState',
				role: 'info',
				pwrState: { '0': 'Powered off', '1': 'Powered on' }
			},
			bldcDntWork: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Compressor work limit ',
				role: 'info',
				bldcDntWork: { '0': 'Allow to work', '1': 'Do not allow to work' }
			},
			waterLine: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ice making zone water level: 0-3 levels',
				role: 'info',
				waterLine: { '0': 'OK?' }
			},
			flagAmbintReady: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ambient temperature reliability',
				role: 'info',
				flagAmbintReady: { '0': 'Unreliable', '1': 'Reliable' }
			},
			batFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery pack in-place status ',
				role: 'info',
				batFlag: { '0': 'Not in place', '1': 'In place' }
			},
			xt150InState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'xt150InState',
				role: 'info',
				xt150InState: { '0': 'no input', '1': 'has input' }
			},
			doorStat: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Door status detection',
				role: 'info',
				doorStat: { '1': 'Open', '0': 'Closed' }
			},
			runState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating status',
				role: 'info',
				runState: {
					'0': 'Normal (24 V output, 40 V output)',
					'1': 'Charging suspended (or when there is no input) (24 V off, 40 V output)',
					'2': 'Standby (24 V off, 40 V off)'
				}
			},
			chgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charger type //Charger type',
				role: 'info',
				chgType: {
					'0': 'NULL',
					'1': 'XT150 charging',
					'2': 'Adapter charging (hardware detection)',
					'3': 'Car charging (hardware detection)',
					'4': 'Solar panel charging (hardware detection)',
					'5': 'Car charging (software detection)',
					'6': 'Solar panel charging (software detection)',
					'7':
						'Input source cannot be identified (0xff): the charging cable is connected, but it actually does not work due to charging being disabled'
				}
			},
			sensor: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Sensor status; refer to @ST_SENSOR for data explanation; bit 1: Error; bit 0: Normal',
				role: 'info',
				sensor: { '2': 'Error', '0': 'Normal' }
			},
			xt60InState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'xt60 connection status ',
				role: 'info',
				xt60InState: { '0': 'no input', '1': 'has input' }
			},
			iceAlert: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ice taking reminder',
				role: 'info',
				iceAlert: { '0': 'Do not remind', '1': 'Remind' }
			},
			carBatLow: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Car charger battery protection reminder',
				role: 'info',
				carBatLow: { '0': 'Do not remind', '1': 'Remind' }
			},
			bmsInFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BMS in-place flag, detected through BMS->PD heartbeat packet',
				role: 'info',
				bmsInFlag: { '0': 'Not in place', '1': 'In place' }
			},
			bldcDntIce: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ice making limit on compressor',
				role: 'info',
				bldcDntIce: { '0': 'Ice making is allowed', '1': 'Ice making is not allowed' }
			},
			warnInfo: {
				//'Warning: BIT0: Over-temperature; BIT1: Under-temperature; BIT2: Overload; BIT3: Charging error; BIT4: Fan error; BIT5: BLCD communication error'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Warning',
				warnInfo: {
					'0': 'no warning?',
					'1': 'overtemperature',
					'2': 'Under-temperature',
					'4': 'Overload',
					'8': 'Charging error',
					'16': 'Fan error',
					'32': 'BLCD communication error'
				}
			},
			fanLvl: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fan level',
				fanLvl: {
					'0': 'non-rotation',
					'1': 'Level 1',
					'2': 'Level 2',
					'3': 'Level3',
					'4': 'Level 4',
					'5': 'Level 5'
				}
			},
			iceMkMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Large/small ice cube status',
				iceMkMode: {
					'0': 'Small ice cube (in preparation)',
					'1': 'Large ice cube (in preparation)',
					'2': 'Small ice cube (ice making in progress; cannot be changed)',
					'3': 'Large ice cube (ice making in progress)'
				}
			},
			deiceAct: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Deice Active?',
				deiceAct: {
					'0': 'inactive',
					'1': 'active'
				}
			}
		},
		icon: {
			kit0: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', special: 'delta max' },
			kit1: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', special: 'delta max' },
			kit2: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', special: 'delta max' },
			iconRechgTimeState: {
				name: 'Charge icon state: 0: off; 1: on. This parameter is valid only when the charge icon mode is 0.'
			},
			iconFanMode: { name: 'Fan icon mode: 0: normal; 1: blinking' },
			iconFanState: {
				name:
					'Fan icon state: 0: off; 1: Level 1; 2: Level 2; 3: Level 3. This parameter is valid only when the fan icon mode is 0.'
			},
			iconBmsParallelMode: { name: 'BMS parallel icon mode: 0: normal; 1: blinking' },
			iconBmsParallelState: {
				name:
					'BMS parallel icon state: 0: off; 1: on. This parameter is valid only when the BMS parallel icon mode is 0.'
			},
			iconInvParallelMode: { name: 'Inverter parallel icon mode: 0: normal; 1: blinking' },
			iconInvParallelState: {
				name:
					'Inverter parallel icon state: 0: off; 1: on. This parameter is valid only when the inverter parallel icon mode is 0.'
			},
			iconAcFreqMode: { name: 'AC icon mode: 0: normal; 1: blinking' },
			iconAcFreqState: {
				name:
					'AC icon state: 0: off; 1: 50 Hz; 2: 60 Hz. This parameter is valid only when the AC icon mode is 0.'
			},
			iconSocUpsMode: { name: 'UPS icon mode: 0: normal; 1: blinking' },
			iconSocUpsState: {
				name: 'UPS icon state: 0: off; 1: on. This parameter is valid only when the UPS icon mode is 0.'
			},
			iconUsbMode: { name: 'USB icon mode: 0: normal; 1: blinking' },
			iconUsbState: {
				name: 'USB icon state: 0: off; 1: on. This parameter is valid only when the USB icon mode is 0.'
			},
			iconTypecMode: { name: 'Type-C icon mode: 0: normal; 1: blinking' },
			iconTypecState: {
				name: 'Type-C icon state: 0: off; 1: on. This parameter is valid only when the Type-C icon mode is 0.'
			},
			iconCarMode: { name: 'CAR icon mode: 0: normal; 1: blinking' },
			iconCarState: {
				name: 'CAR icon state: 0: off; 1: on. This parameter is valid only when the CAR icon mode is 0.'
			},
			iconWifiMode: { name: 'Wi-Fi icon mode: 0: normal; 1: blinking' },
			iconWifiState: {
				name: 'Wi-Fi icon state: 0: off; 1: on. This parameter is valid only when the Wi-Fi icon mode is 0.'
			},
			iconBmsErrMode: { name: 'Exclamation mark icon mode: 0: normal; 1: blinking' },
			iconBmsErrState: {
				name:
					'Exclamation mark icon state: 0: off; 1: on. This parameter is valid only when the exclamation mark icon mode is 0.'
			},
			iconOverloadMode: { name: 'OVERLOAD icon mode: 0: normal; 1: blinking' },
			iconOverloadState: {
				name:
					'OVERLOAD icon state: 0: off; 1: on. This parameter is valid only when the OVERLOAD icon mode is 0.'
			},
			iconHiTempMode: { name: 'High temperature icon mode: 0: normal; 1: blinking' },
			iconHiTempState: {
				name:
					'High temperature icon state: 0: off; 1: on. This parameter is valid only when the high temperature icon mode is 0.'
			},
			iconLowTempMode: { name: 'Low temperature icon mode: 0: normal; 1: blinking' },
			iconLowTempState: {
				name:
					'Low temperature icon state: 0: off; 1: on. This parameter is valid only when the low temperature icon mode is 0.'
			},
			iconWirelessChgMode: { name: 'Wireless charging icon mode: 0: normal; 1: blinking' },
			iconWirelessChgState: {
				name:
					'Wireless charging icon state: 0: off; 1: on. This parameter is valid only when the wireless charging icon mode is 0.'
			},
			iconPackHeaterMode: { name: 'Battery heater icon mode: 0: normal; 1: blinking' },
			iconPackHeaterState: {
				name:
					'Battery heater icon state: 0: off; 1: on. This parameter is valid only when the battery heater icon mode is 0.'
			},
			iconFactoryMode: { name: 'Factory icon mode: 0: normal; 1: blinking' },
			iconFactoryState: {
				name: 'Factory icon state: 0: off; 1: on. This parameter is valid only when the factory icon mode is 0.'
			},
			iconBtMode: { name: 'Bluetooth icon mode: 0: normal; 1: blinking' },
			iconBtState: {
				name:
					'Bluetooth icon state: 0: off; 1: on. This parameter is valid only when the Bluetooth icon mode is 0.'
			},
			iconRcMode: { name: 'Remote control icon mode: 0: normal; 1: blinking' },
			iconRcState: {
				name:
					'Remote control icon state: 0: off; 1: on; 2: one signal bar; 3: two signal bars; 4: searching signal. This parameter is valid only when the remote control icon mode is 0.'
			},
			iconChgStationMode: { name: 'Charging pile icon mode: 0: normal; 1: blinking' },
			iconChgStationState: {
				name:
					'Charging pile icon state: 0: off; 1: on. This parameter is valid only when the charging pile icon mode is 0.'
			},
			iconCoGasMode: { name: 'CO toxic gas icon mode: 0: normal; 1: blinking' },
			iconCoGasState: {
				name:
					'CO toxic gas icon state: 0: off; 1: on. This parameter is valid only when the CO toxic gas icon mode is 0.'
			},
			iconTransSwMode: { name: 'Transfer switch icon mode: 0: normal; 1: blinking' },
			iconTransSwState: {
				name:
					'Transfer switch icon state: 0: off; 1: on. This parameter is valid only when the transfer switch icon mode is 0.'
			},
			iconEcoMode: { name: 'ECO icon mode: 0: normal; 1: blinking' },
			iconEcoState: {
				name: 'ECO icon state: 0: off; 1: on. This parameter is valid only when the ECO icon mode is 0.'
			},
			iconWindGenMode: { name: 'Wind power generation icon mode: 0: normal; 1: blinking' },
			iconWindGenState: {
				name:
					'Wind power generation icon state: 0: off; 1: on. This parameter is valid only when the wind power generation icon mode is 0.'
			},
			iconGasGenMode: { name: 'Oil-powered generation icon mode: 0: normal; 1: blinking' },
			iconGasGenState: {
				name:
					'Oil-powered generation icon state: 0: off; 1: on. This parameter is valid only when the oil-powered generation icon mode is 0.'
			},
			iconSolarBracketMode: { name: 'Solar panel tracking bracket icon mode: 0: normal; 1: blinking' },
			iconSolarBracketState: {
				name:
					'Solar panel tracking bracket icon state: 0: off; 1: on. This parameter is valid only when the solar panel tracking bracket icon mode is 0.'
			},
			iconSolarPanelMode: { name: 'Solar panel icon mode: 0: normal; 1: blinking' },
			iconSolarPanelState: {
				name:
					'Solar panel icon state: 0: off; 1: on. This parameter is valid only when the solar panel icon mode is 0.'
			},
			lcdBrightness: {
				name:
					'Screen brightness Range:0~100 Input 128(0x11111111), indicates turned on the automatic brightness adjustment'
			},
			//new delta 2
			reserved: { name: 'Reserve' },
			icoBytes: {},
			//new glacier
			resvP: { name: 'Reserve 5 bytes' },
			resvD: { name: 'Reserve 1 byte' },
			resvB: { name: 'Reserve 2 bytes' },
			//new wave2
			pdResv: { name: 'Reserve' },
			resv: { name: 'Reserve' }
		},
		array: {
			bmsKitState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'bms Kit State',
				bmsKitState: { '0': '0?', '1': '1?' }
			},
			envTempRangeCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name:
					'Count of ambient temperature intervals; the range is 0-55 degrees Celsius; each interval covers 5 degrees; it is counted every time the button is pressed to power on.'
			},
			sacWattRangeTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name:
					'Length of time the device power falls in each interval (sec). The intervals include 101 W-200 W, 201 W-300 W, 301 W-400 W, 401 W-500 W, 501 W-600 W, and 601 W-700 W.',
				role: 'list'
			},
			tempCoolTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name:
					'Length of time when the actual temperature of the cooling zone falls in each interval: COOL_ ZONE_ MAX*TEMP_ COOL_ MAX'
			},
			appSensorAdv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Duration of sensor blocking: SENSOR_ADV_MAX'
			},
			errorTimePower: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Duration of each type of fault in the POWER module: ERROR_MAX_POWER'
			},
			buttonLong: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of long presses: USER_BEHAVIOR_BUTTON_MAX'
			},
			errorTimeBldc: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'array errors?'
			},
			tempIceTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Length of time when temperature of the ice-making zone falls in each interval: TEMP_ICE_MAX'
			},
			networkTypeCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of being networked: NETWORK_TYPE_MAX'
			},
			powerXt60Count: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of each type of power supply on XT60: POWER_TYPE_MAX'
			},
			networkTypeTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Duration of being networked: NETWORK_TYPE_MAX'
			},
			errorCountPower: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of each type of fault in POWER module: ERROR_MAX_POWER'
			},
			powerXt60Time: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Duration of each type of power supply on XT60: POWER_TYPE_MAX'
			},
			workFsmCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of entering each state of state machine: USER_BEHAVIOR_FSM_MAX'
			},
			workModeCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of entering each work mode; WORK_MODE_MAX'
			},
			errorCountBms: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of each type of fault in BMS module: ERROR_MAX_PD'
			},
			chargeXt60Time: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Duration of each type of charging power supply on XT60: POWER_TYPE_MAX'
			},
			chargeXt60Count: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of each type of charging power supply on XT60: POWER_TYPE_MAX'
			},
			errorTimeBms: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Duration of each type of fault in BMS module: ERROR_MAX_BMS'
			},
			appOpTimeBlTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Screen timeout set through app: BL_TIME_MAX'
			},
			appOpCountWorkMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of each work mode set through app: WORK_MODE_MAX'
			},
			errorTimePd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Duration of each type of fault in PD module: ERROR_MAX_PD'
			},
			workFsmTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Running duration of state machine under each state: USER_BEHAVIOR_FSM_MAX'
			},
			workModeTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Running duration of each work mode; WORK_MODE_MAX'
			},
			appOpCountBlTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of setting different screen timeout through app: BL_TIME_MAX'
			},
			tempAmbientTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Length of time when ambient temperature falls in each interval: TEMP_AMBIENT_MAX'
			},
			tempCoolSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name:
					'Length of time when the set temperature of the cooling zone falls in each interval: COOL_ZONE_MAX*TEMP_COOL_SET_MAX'
			},
			buttonShort: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of short pressings: USER_BEHAVIOR_BUTTON_MAX'
			},
			errorCountPd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of each fault in PD module: ERROR_MAX_PD'
			},
			errorCountBldc: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Count of each type of fault in BLDC module: ERROR_MAX_BLDC'
			}
		}
	},
	ems: {
		number: {
			chgVol: {
				min: 0,
				max: 150,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Charging voltage',
				role: 'value'
			},
			chgAmp: {
				min: 0,
				max: 100,
				unit_of_measurement: 'A',
				mult: 0.0001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Charging current',
				role: 'value'
			},
			lcdShowSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC on LCD',
				role: 'value'
			},
			chgRemainTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Remaining charging time',
				role: 'value',

				icon: 'mdi:clock-start'
			},
			dsgRemainTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Remaining discharging time',
				role: 'value',

				icon: 'mdi:clock-start'
			},
			f32LcdShowSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC on LCD',
				role: 'value'
			},
			paraVolMin: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Minimum parallel voltage',
				role: 'value'
			},
			paraVolMax: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Maximum parallel voltage',
				role: 'value'
			},
			//new glacier
			closeOilEbSocMax: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'SOC for turning off Smart Generator'
			},
			dsgRemain: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining discharging time'
			},
			maxAvailNum: {
				min: 0,
				max: 40000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Maximum available quantity'
			},
			lcdSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'SoC value displayed on LCD'
			},
			chgRemain: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining charging time'
			},
			openOilEbSocMin: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'SoC for turning on Smart Generator'
			},
			minDsgSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Minimum discharging SOC'
			},
			maxChgSoc: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Maximum charging SOC'
			},
			f32LcdSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC on LCD',
				role: 'value'
			}
		},
		switch: {},
		level: {
			maxChargeSoc: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'Charge upper limit',
				icon: 'mdi:battery-charging-90'
			},
			minDsgSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'Discharge lower limit',
				icon: 'mdi:battery-charging-10'
			},
			minOpenOilEbSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'The upper threshold of smart generator auto on Range: 0~100'
			},
			maxCloseOilEbSoc: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'The lower threshold of smart generator auto off Range: 0~100'
			},
			//new delta2
			minOpenOilEb: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'The upper threshold of smart generator auto on Range: 0~100'
			},
			maxCloseOilEb: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				role: 'level',
				name: 'The lower threshold of smart generator auto off Range: 0~100'
			}
		},
		string: {
			fanLevel: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Fan level' },
			bmsModel: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'BMS model' },
			openUpsFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'UPS mode enable flag'
			},

			maxAvailableNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Maximum available quantity'
			},
			openBmsIdx: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Open BMS index' },
			//new delta2
			maxAvailNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Maximum available quantity'
			},
			//new glacier
			upsFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'UPS mode enable flag',
				role: 'info'
			}
		},
		diagnostic: {
			//'BMS0 online signal: BIT0: hardware online signal; BIT1: software online signal'
			bms0Online: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS0 online signal',
				bms0Online: { '0': 'not online?', '1': 'HW online', '2': 'SW online', '3': 'HW-SW online' }
			},
			bms1Online: {
				//'BMS1 online signal: BIT0: hardware online signal; BIT1: software online signal'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS1 online signal',
				bms1Online: { '0': 'not online?', '1': 'HW online', '2': 'SW online', '3': 'HW-SW online' }
			},
			bms2Online: {
				//'BMS2 online signal: BIT0: hardware online signal; BIT1: software online signal'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS2 online signal',
				bms2Online: { '0': 'not online?', '1': 'HW online', '2': 'SW online', '3': 'HW-SW online' }
			},
			bmsWarningState: {
				// 'BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS warning state',
				bmsWarningState: {
					'0': 'no warning?',
					'1': 'hi_temp',
					'2': 'low_temp',
					'4': 'overload',
					'8': 'chg_flag'
				}
			},
			emsIsNormalFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Energy storage state: 0: sleep; 1: normal',
				emsIsNormalFlag: { '0': 'sleep', '1': 'normal' }
			},
			chgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging state',
				chgState: { '0': 'disabled', '1': 'CC', '2': 'CV', '3': 'UPS', '4': 'PARA 0x55: Charging error' }
			},
			chgCmd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charge switch',
				chgCmd: { '0': 'off', '1': 'on', '2': '2?' }
			},
			dsgCmd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Discharge switch',
				dsgCmd: { '0': 'off', '1': 'on', '2': '2?' }
			},
			//new delta 2
			bmsWarState: {
				//'BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag'
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS warning state',
				bmsWarState: { '0': 'no warning?', '1': 'hi_temp', '2': 'low_temp', '4': 'overload', '8': 'chg_flag' }
			},
			//new glacier
			//'BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag'
			warnState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BMS warning state',
				role: 'info',
				warnState: { '0': 'no warning?', '1': 'hi_temp', '2': 'low_temp', '4': 'overload', '8': 'chg_flag' }
			},
			emsFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ems Flag',
				role: 'info',
				emsFlag: { '0': 'sleep', '1': 'normal' }
			},
			fanLvl: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Fan level',
				role: 'info',
				fanLvl: {
					'0': 'non-rotation',
					'1': 'Level 1',
					'2': 'Level 2',
					'3': 'Level3',
					'4': 'Level 4',
					'5': 'Level 5'
				}
			}
		},
		array: {
			//'BMS online signal: BIT0: hardware online signal; BIT1: software online signal'
			bmsIsConnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BMS online signal',
				role: 'info',
				bmsIsConnt: { '0': 'not online', '1': 'HW online', '2': 'SW online', '3': 'HW+SW online' }
			}
		}
	},
	action: {
		switch: {
			latestQuotas: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get latest Quotas',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				latestQuotas: { 0: 'no trigger', 1: 'trigger' }
			},
			getAllTaskCfg: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get all tasks',
				payload_off: 'no trigger',
				payload_on: 'trigger',

				getAllTaskCfg: { 0: 'no trigger', 1: 'trigger' }
			}
		}
	},
	info: {
		number: {
			msgCount: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				name: 'received MSG#',
				role: 'value'
			}
		},
		diagnostic: {
			status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Status',
				role: 'info',
				status: { 0: 'offline', 1: 'online' }
			}
		}
	},
	//new wave2
	power: {
		number: {
			acFreq: {
				min: 0,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'AC input frequency'
			},
			batVolt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Battery voltage'
			},
			acWattsRange0Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when AC power falls in interval 0 (101 W-200 W)'
			},
			mpptVolRange0Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when MPPT power supply voltage falls in interval 0 (11 V-20 V)'
			},
			batCurr: {
				min: 0,
				max: 10,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Battery current'
			},
			acWattsRange4Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when AC power falls in interval 4 (501 W-600 W)'
			},

			fanSts: {
				min: 0,
				max: 4,
				unit_of_measurement: 'level',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Fan speed level: 0-4; 0 for non-rotation'
			},
			mpptVolRange3Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Length of time when MPPT power supply voltage falls in interval 3 (41 V-50 V)'
			},
			batPwrOut: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Battery output power'
			},
			mpptVolRange1Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when MPPT power supply voltage falls in interval 1 (21 V-30 V)'
			},

			acWattsRange1Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when AC power falls in interval 1 (201 W-300 W)'
			},
			acVoltRms: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'RMS value of the AC input voltage'
			},
			mpptWattsRange0Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when MPPT power supply falls in interval 0 (101 W-200 W)'
			},
			busVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Bus voltage'
			},
			acPwrIn: {
				min: 0,
				max: 700,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'AC input power'
			},

			acWattsRange5Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when AC power falls in interval 5 (601 W-700 W)'
			},

			mpptCur: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'PV current'
			},

			mpptVolRange2Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when MPPT power supply voltage falls in interval 2 (31 V-40 V)'
			},
			mpptWattsRange1Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when MPPT power supply falls in interval 1 (201 W-300 W)'
			},
			acCurrRms: {
				min: 0,
				max: 10,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'RMS value of the AC input current'
			},
			llcCurr: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'LLC output current'
			},
			busVolt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Bus voltage'
			},
			acWattsRange2Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when AC power falls in interval 2 (301 W-400 W)'
			},
			tempNtc: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'NTC temperature'
			},
			tempMax: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name:
					'The highest temperature among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature'
			},
			tempMin: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name:
					'The minimum temperature value among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature'
			},

			mpptVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'PV voltage'
			},
			mpptWattsRange2Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when MPPT power supply falls in interval 2 (301 W-400 W)'
			},

			mpptPwr: {
				min: 0,
				max: 400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'PV input power'
			},
			mpptVolRange4Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when MPPT power supply voltage falls in interval 4 (51 V-60 V)'
			},
			acWattsRange3Time: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Length of time when AC power falls in interval 3 (401 W-500 W)'
			}
		},
		string: {
			mpptLockFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT lock flag',
				role: 'info'
			},
			errCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'Fault error', role: 'info' },
			errLock: { entity_type: 'text', entity_category: 'diagnostic', name: 'Error lock', role: 'info' },
			mpptSts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV execution status',
				role: 'info'
			},
			pfcOcpS: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of PFC software overcurrent'
			},
			acPowerSupplyCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using AC power supply'
			},
			pvOcpHw: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of PV overcurrent'
			},
			carPowerSupplyCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of car charging'
			},
			pvPowerSupplyCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of using PV power supply'
			},
			llcOcpInt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of LLC overcurrent'
			},
			psdrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Communication counter'
			},
			busCurr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'busCurr'
			}
		},
		diagnostic: {
			runSts: {
				//'bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run'
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Run status',
				role: 'info',
				runSts: { '0': 'not run?', '1': 'AC_IN run?', '2': 'PFC run?', '4': 'LLC run?', '8': 'MPPT run?' }
			},
			mpptWork: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT operating status',
				role: 'info',
				mpptWork: { 1: 'Car charging', 2: 'Solar charging' }
			},
			rlySts: {
				// 'bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open'
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Relay status',
				role: 'info',
				rlySts: { '0': 'Open?', '1': 'soft start rly closed?', '2': 'ac rly closed?' }
			}
		},
		icon: {
			powerResv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Reserve'
			},
			resv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Reserve'
			}
		}
	},
	motor: {
		number: {
			power: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Motor operating power'
			},
			motorFsmState: {
				min: 0,
				max: 15,
				unit_of_measurement: 'state',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Current state of main state machine'
			},
			windTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in fan mode'
			},
			vBus: {
				min: 0,
				max: 13,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Bus voltage feedback'
			},
			mosTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'MOS tube temperature feedback',
				subrole: 'temperature'
			},
			frontFanWorkTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration of front fan'
			},
			compressorWorkTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration of compressor'
			},
			coolSleepTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in the Sleep mode of Cool mode'
			},
			setCondFanRpm: {
				min: 0,
				max: 1500,
				unit_of_measurement: 'rpm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Setpoint condensing fan speed'
			},
			setEvapFanRpm: {
				min: 0,
				max: 1300,
				unit_of_measurement: 'rpm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Setpoint evaporative fan speed'
			},

			drainageTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Duration of outward drainage'
			},
			hotNormalTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in Normal mode of the Heat mode'
			},
			hotSleepTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in the Sleep mode of Heat mode'
			},

			evapFanRpm: {
				min: 0,
				max: 2000,
				unit_of_measurement: 'rpm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Evaporative fan speed feedback'
			},

			fourWayWorkTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration of four-way valve'
			},
			mtrLogicErr: {
				min: 0,
				max: 15,
				unit_of_measurement: 'state',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Current state of the service state machine'
			},
			coolMaxTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in the Max mode of Cool mode'
			},

			setWaterRpm: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'rpm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Water pump speed settings'
			},
			hotEcoTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in the ECO mode of the Heat mode'
			},
			hotMaxTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in the Max mode of Heat mode'
			},
			backFanWorkTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration of rear fan'
			},
			condeFanRpm: {
				min: 0,
				max: 1800,
				unit_of_measurement: 'rpm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Condensing fan speed feedback'
			},
			setCompressorRpm: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'rpm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'speed',
				role: 'value',
				name: 'Compressor speed settings'
			},
			waterPumpWorkTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration of water pump'
			},
			coolEcoTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in the ECO mode of Cool mode'
			},
			coolNormalTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 0.0166667,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration in the Normal mode of Cool mode'
			}
		},
		diagnostic: {
			threeWayState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Three-way valve status',
				role: 'info',
				threeWayState: { '0': 'OK?' }
			},
			waterValue: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Water level',
				role: 'info',
				waterValue: { '0': 'Level 1', '1': 'Level 2', '2': 'Full' }
			}
		},
		string: {
			hpProtFlg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'High pressure protection flag bit',
				role: 'info'
			},
			serveFsmState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Current state of the service state machine',
				role: 'info'
			},
			ecoStopFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Energy-saving shutdown protection flag bit',
				role: 'info'
			},
			setEleExpansStep: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Opening of electronic expansion valve',
				role: 'info'
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code',
				role: 'info'
			},
			focId: { entity_type: 'text', entity_category: 'diagnostic', name: 'foc id', role: 'info' },
			protFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Shutdown protection flag bit',
				role: 'info'
			},
			compressorRpm: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Compressor speed feedback',
				role: 'info'
			},
			fourWayState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Status of the four-way valve',
				role: 'info'
			},
			commcAck: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Motor operating mode',
				role: 'info'
			},
			serveCtrlErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Service shutdown error code',
				role: 'info'
			},
			v24: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '24 V voltage feedback',
				role: 'info'
			},
			fourWaySwitchCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of four-way valve switching'
			},
			drainageCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of outward drainage'
			},
			frontFanBlockCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of front fan blocking'
			},
			pMtrCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Motor communication counter'
			},
			backFanBlockCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Count of rear fan blocking'
			}
		},
		icon: {
			motorResv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Reserve'
			},
			resv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Reserve'
			}
		}
	},
	//new generator
	oil: {
		number: {
			acPower: {
				min: 0,
				max: 2000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'AC power'
			},
			dcPower: {
				min: 0,
				max: 2000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'DC power'
			},
			totalPower: {
				min: 0,
				max: 2000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Total power'
			},
			oilMaxOutPower: {
				min: 0,
				max: 2000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Oil max power'
			},
			motorUseTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Working duration of generator'
			},
			remainTime: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining time'
			},
			oilVal: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Fuel tank'
			}
		},

		string: {
			num: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'num',
				role: 'info'
			},
			type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'type',
				role: 'info'
			},
			ceelId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ceelId',
				role: 'info'
			},
			version: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'version',
				role: 'info'
			}
		},
		diagnostic: {
			acState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC state',
				role: 'info',
				acState: { '0': 'off', '1': 'on' }
			},
			sysMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'System Mode',
				role: 'info',
				sysMode: { '0': 'eco?', '1': 'full power?' }
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error Code',
				role: 'info',
				errCode: { '0': 'OK?' }
			},
			dcOutState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'DC out state',
				role: 'info',
				dcOutState: { '0': 'off', '1': 'on' }
			},
			motorState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Motor state',
				role: 'info',
				motorState: { '0': 'off', '1': 'on' }
			}
		}
	},
	//new for stations
	timeTask: {
		number: {
			taskIndex: {
				min: 0,
				max: 5,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				name: 'Task index',
				role: 'value'
			},
			week: {
				min: 0,
				max: 52,
				unit_of_measurement: 'week',
				mult: 1,
				entity_type: 'sensor',
				name: 'week',
				role: 'value'
			},
			sec: {
				min: 0,
				max: 59,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'sensor',
				name: 'second',
				role: 'value'
			},
			min: {
				min: 0,
				max: 59,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				name: 'minute',
				role: 'value'
			},
			hour: {
				min: 0,
				max: 23,
				unit_of_measurement: 'hour',
				mult: 1,
				entity_type: 'sensor',
				name: 'hour',
				role: 'value'
			},
			day: {
				min: 0,
				max: 31,
				unit_of_measurement: 'day',
				mult: 1,
				entity_type: 'sensor',
				name: 'day',
				role: 'value'
			},
			month: {
				min: 0,
				max: 12,
				unit_of_measurement: 'month',
				mult: 1,
				entity_type: 'sensor',
				name: 'month',
				role: 'value'
			},
			year: {
				min: 2022,
				max: 2050,
				unit_of_measurement: 'year',
				mult: 1,
				entity_type: 'sensor',
				name: 'year',
				role: 'value'
			}
		},
		diagnostic: {
			isCfg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Task configuration',
				role: 'info',
				isCfg: {
					'0': 'not configured',
					'1': 'configured'
				}
			},
			isEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Task activation',
				role: 'info',
				isEnable: {
					'0': 'not enabled',
					'1': 'enabled'
				}
			},
			type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Task type',
				role: 'info',
				type: {
					'1': 'prioritize power supply',
					'2': 'prioritize power storage',
					'3': 'plug switch off?',
					'4': 'plug switch on?'
				}
			},
			timeMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Time Mode',
				role: 'info',
				timeMode: {
					'0': 'daily',
					'1': 'weekly',
					'2': 'monthly',
					'3': 'do not repeat'
				}
			},
			taskPrior: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Time Priority',
				role: 'info',
				timeMode: {
					'0': '0?',
					'1': '1?',
					'2': '2?',
					'3': '3?'
				}
			}
		},
		string: {
			timeScale: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Time Scale',
				role: 'info'
			},
			timeParam: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Time Param',
				role: 'info'
			}
		},
		totalTaskNum: {
			min: 0,
			max: 5,
			unit_of_measurement: '',
			mult: 1,
			entity_type: 'sensor',
			name: 'Task task numbder',
			role: 'value'
		}
	},
	//new shelly
	emeters: {
		number: {
			currentL1: {
				min: 0,
				max: 50,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Current L1',
				role: 'value'
			},
			currentL2: {
				min: 0,
				max: 50,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Current L2',
				role: 'value'
			},
			currentL3: {
				min: 0,
				max: 50,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Current L3',
				role: 'value'
			},
			voltageL1: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Voltage L1',
				role: 'value'
			},
			voltageL2: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Voltage L2',
				role: 'value'
			},
			voltageL3: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Voltage L3',
				role: 'value'
			},
			powerL1: {
				min: 0,
				max: 23000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power L1',
				role: 'value'
			},
			powerL2: {
				min: 0,
				max: 23000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power L2',
				role: 'value'
			},
			powerL3: {
				min: 0,
				max: 23000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power L3',
				role: 'value'
			},
			pfL1: {
				min: 0,
				max: 1,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power_factor',
				name: 'Powerfactor L1',
				role: 'value',
				subrole: 'none'
			},
			pfL2: {
				min: 0,
				max: 1,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power_factor',
				name: 'Powerfactor L2',
				role: 'value',
				subrole: 'none'
			},
			pfL3: {
				min: 0,
				max: 1,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power_factor',
				name: 'Powerfactor L3',
				role: 'value',
				subrole: 'none'
			},
			totalL1: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy L1',
				state_class: 'total_increasing',
				role: 'value'
			},
			totalL2: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy L2',
				state_class: 'total_increasing',
				role: 'value'
			},
			totalL3: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy L3',
				state_class: 'total_increasing',
				role: 'value'
			},
			total_power: {
				min: 0,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Total power',
				role: 'value'
			},
			total_returnedL1: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy returned L2',
				state_class: 'total_increasing',
				role: 'value'
			},
			total_returnedL2: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy returned L2',
				state_class: 'total_increasing',
				role: 'value'
			},
			total_returnedL3: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy returned L3',
				state_class: 'total_increasing',
				role: 'value'
			}
		}
	},
	communication: {
		diagnostic: {
			cloud_connected: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'cloud connected',
				role: 'info',
				cloud_connected: { false: 'off', true: 'on' }
			},
			cloud_enabled: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'cloud enabled',
				role: 'info',
				cloud_enabled: { false: 'off', true: 'on' }
			},
			mqtt_connected: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mqtt connected',
				role: 'info',
				mqtt_connected: { false: 'off', true: 'on' }
			},
			wifi_sta_connected: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wifi_sta connected',
				role: 'info',
				wifi_sta_connected: { false: 'off', true: 'on' }
			}
		}
	}
};

const pstationStatesDict = {
	deltamini: {
		bmsMaster: {
			amp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			bqSysStatReg: { entity: 'string' },
			cellId: { entity: 'diagnostic' },
			cycles: { entity: 'number' },
			designCap: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			f32ShowSoc: { entity: 'number' },
			fullCap: { entity: 'number' },
			inputWatts: { entity: 'number' },
			maxCellTemp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			maxMosTemp: { entity: 'number' },
			minCellTemp: { entity: 'number' },
			minCellVol: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			num: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			outputWatts: { entity: 'number' },
			remainCap: { entity: 'number' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			soh: { entity: 'string' },
			sysVer: { entity: 'string' },
			tagChgAmp: { entity: 'number' },
			temp: { entity: 'number' },
			type: { entity: 'diagnostic' },
			vol: { entity: 'number' }
		},
		ems: {
			bms0Online: { entity: 'diagnostic' },
			bms1Online: { entity: 'diagnostic' },
			bms2Online: { entity: 'diagnostic' },
			bmsModel: { entity: 'string' },
			bmsWarningState: { entity: 'diagnostic' },
			chgAmp: { entity: 'number' },
			chgCmd: { entity: 'diagnostic' },
			chgRemainTime: { entity: 'number' },
			chgState: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			dsgCmd: { entity: 'diagnostic' },
			dsgRemainTime: { entity: 'number' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			f32LcdShowSoc: { entity: 'number' },
			fanLevel: { entity: 'string' },
			lcdShowSoc: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			maxChargeSoc: { entity: 'level' },
			minDsgSoc: { entity: 'level' },
			openBmsIdx: { entity: 'string' },
			openUpsFlag: { entity: 'string' },
			paraVolMax: { entity: 'number' },
			paraVolMin: { entity: 'number' }
		},
		inv: {
			acDipSwitch: { entity: 'diagnostic' },
			acInAmp: { entity: 'number' },
			acInFreq: { entity: 'number' },
			acInVol: { entity: 'number' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			cfgAcOutVoltage: { entity: 'string' },
			cfgAcWorkMode: { entity: 'switch' },
			cfgAcXboost: { entity: 'switch' },
			cfgFastChgWatts: { entity: 'number' },
			cfgSlowChgWatts: { entity: 'level' },
			cfgStandbyMin: { entity: 'level' },
			chargerType: { entity: 'diagnostic' },
			chgPauseFlag: { entity: 'diagnostic' },
			dcInAmp: { entity: 'number' },
			dcInTemp: { entity: 'number' },
			dcInVol: { entity: 'number' },
			dischargeType: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			fanState: { entity: 'diagnostic' },
			inputWatts: { entity: 'number' },
			invOutAmp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			invOutVol: { entity: 'number' },
			invType: { entity: 'string' },
			outTemp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			sysVer: { entity: 'string' }
		},
		mppt: {
			carOutAmp: { entity: 'number' },
			carOutVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			carState: { entity: 'switch' },
			carTemp: { entity: 'number' },
			cfgChgType: { entity: 'diagnostic' },
			cfgDcChgCurrent: { entity: 'level' },
			chgPauseFlag: { entity: 'diagnostic' },
			chgState: { entity: 'diagnostic' },
			chgType: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			dcdc12vAmp: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			dcdc12vWatts: { entity: 'number' },
			faultCode: { entity: 'diagnostic' },
			inAmp: { entity: 'number' },
			inVol: { entity: 'number' },
			inWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outAmp: { entity: 'number' },
			outVol: { entity: 'number' },
			outWatts: { entity: 'number' },
			swVer: { entity: 'string' },
			xt60ChgType: { entity: 'diagnostic' }
		},
		pd: {
			beepState: { entity: 'switch' },
			carState: { entity: 'diagnostic' },
			carTemp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			carWatts: { entity: 'number' },
			chgPowerAc: { entity: 'number' },
			chgPowerDc: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			dsgPowerAc: { entity: 'number' },
			dsgPowerDc: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			iconAcFreqMode: { entity: 'icon' },
			iconAcFreqState: { entity: 'icon' },
			iconBmsErrMode: { entity: 'icon' },
			iconBmsErrState: { entity: 'icon' },
			iconBmsParallelMode: { entity: 'icon' },
			iconBmsParallelState: { entity: 'icon' },
			iconBtMode: { entity: 'icon' },
			iconBtState: { entity: 'icon' },
			iconCarMode: { entity: 'icon' },
			iconCarState: { entity: 'icon' },
			iconChgStationMode: { entity: 'icon' },
			iconChgStationState: { entity: 'icon' },
			iconCoGasMode: { entity: 'icon' },
			iconCoGasState: { entity: 'icon' },
			iconEcoMode: { entity: 'icon' },
			iconEcoState: { entity: 'icon' },
			iconFactoryMode: { entity: 'icon' },
			iconFactoryState: { entity: 'icon' },
			iconFanMode: { entity: 'icon' },
			iconFanState: { entity: 'icon' },
			iconGasGenMode: { entity: 'icon' },
			iconGasGenState: { entity: 'icon' },
			iconHiTempMode: { entity: 'icon' },
			iconHiTempState: { entity: 'icon' },
			iconInvParallelMode: { entity: 'icon' },
			iconInvParallelState: { entity: 'icon' },
			iconLowTempMode: { entity: 'icon' },
			iconLowTempState: { entity: 'icon' },
			iconOverloadMode: { entity: 'icon' },
			iconOverloadState: { entity: 'icon' },
			iconPackHeaterMode: { entity: 'icon' },
			iconPackHeaterState: { entity: 'icon' },
			iconRcMode: { entity: 'icon' },
			iconRcState: { entity: 'icon' },
			iconRechgTimeMode: { entity: 'diagnostic' },
			iconRechgTimeState: { entity: 'icon' },
			iconSocUpsMode: { entity: 'icon' },
			iconSocUpsState: { entity: 'icon' },
			iconSolarBracketMode: { entity: 'icon' },
			iconSolarBracketState: { entity: 'icon' },
			iconSolarPanelMode: { entity: 'icon' },
			iconSolarPanelState: { entity: 'icon' },
			iconTransSwMode: { entity: 'icon' },
			iconTransSwState: { entity: 'icon' },
			iconTypecMode: { entity: 'icon' },
			iconTypecState: { entity: 'icon' },
			iconUsbMode: { entity: 'icon' },
			iconUsbState: { entity: 'icon' },
			iconWifiMode: { entity: 'icon' },
			iconWifiState: { entity: 'icon' },
			iconWindGenMode: { entity: 'icon' },
			iconWindGenState: { entity: 'icon' },
			iconWirelessChgMode: { entity: 'icon' },
			iconWirelessChgState: { entity: 'icon' },
			invUsedTime: { entity: 'number' },
			lcdBrightness: { entity: 'string' },
			lcdOffSec: { entity: 'level' },
			model: { entity: 'string' },
			mpptUsedTime: { entity: 'number' },
			qcUsb1Watts: { entity: 'number' },
			qcUsb2Watts: { entity: 'number' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			standByMode: { entity: 'level' },
			sysChgDsgState: { entity: 'diagnostic' },
			sysVer: { entity: 'string' },
			typccUsedTime: { entity: 'number' },
			typec1Temp: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			typec2Temp: { entity: 'number' },
			typec2Watts: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			usbUsedTime: { entity: 'number' },
			usbqcUsedTime: { entity: 'number' },
			wattsInSum: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			wifiRssi: { entity: 'string' },
			wifiVer: { entity: 'string' },
			wirelessWatts: { entity: 'string' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	delta: {
		bmsMaster: {
			f32ShowSoc: { entity: 'number' },
			designCap: { entity: 'number' },
			remainCap: { entity: 'number' },
			temp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			maxCellTemp: { entity: 'number' },
			vol: { entity: 'number' },
			soh: { entity: 'string' },
			sysVer: { entity: 'string' },
			bqSysStatReg: { entity: 'string' },
			amp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			soc: { entity: 'number' },
			num: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			type: { entity: 'diagnostic' },
			minCellTemp: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			maxMosTemp: { entity: 'number' },
			tagChgAmp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			inputWatts: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			remainTime: { entity: 'number' },
			minCellVol: { entity: 'number' },
			fullCap: { entity: 'number' },
			cellId: { entity: 'diagnostic' },
			cycles: { entity: 'number' }
		},
		ems: {
			chgCmd: { entity: 'diagnostic' },
			bmsWarningState: { entity: 'diagnostic' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			minDsgSoc: { entity: 'level' },
			paraVolMax: { entity: 'number' },
			f32LcdShowSoc: { entity: 'number' },
			lcdShowSoc: { entity: 'number' },
			bms0Online: { entity: 'diagnostic' },
			minOpenOilEbSoc: { entity: 'level' },
			maxChargeSoc: { entity: 'level' },
			chgRemainTime: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			openBmsIdx: { entity: 'string' },
			dsgRemainTime: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			bms1Online: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			bmsModel: { entity: 'string' },
			dsgCmd: { entity: 'diagnostic' },
			openUpsFlag: { entity: 'string' },
			maxCloseOilEbSoc: { entity: 'level' },
			chgState: { entity: 'diagnostic' },
			fanLevel: { entity: 'string' },
			chgAmp: { entity: 'number' }
		},
		inv: {
			dcInVol: { entity: 'number' },
			cfgAcWorkMode: { entity: 'switch' },
			cfgAcOutVoltage: { entity: 'string' },
			cfgStandbyMin: { entity: 'level' },
			dcInAmp: { entity: 'number' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			outputWatts: { entity: 'number' },
			dcInTemp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			cfgFastChgWatts: { entity: 'number' },
			chargerType: { entity: 'diagnostic' },
			acInAmp: { entity: 'number' },
			fanState: { entity: 'diagnostic' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcXboost: { entity: 'switch' },
			outTemp: { entity: 'number' },
			invType: { entity: 'string' },
			acDipSwitch: { entity: 'diagnostic' },
			invOutVol: { entity: 'number' },
			acInVol: { entity: 'number' },
			inputWatts: { entity: 'number' },
			acPassByAutoEn: { entity: 'diagnostic' },
			acInFreq: { entity: 'number' },
			chgPauseFlag: { entity: 'diagnostic' },
			dischargeType: { entity: 'diagnostic' },
			invOutAmp: { entity: 'number' },
			sysVer: { entity: 'string' },
			cfgSlowChgWatts: { entity: 'level' }
		},
		mppt: {
			carOutVol: { entity: 'number' },
			carState: { entity: 'switch' },
			faultCode: { entity: 'diagnostic' },
			xt60ChgType: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			carTemp: { entity: 'number' },
			outWatts: { entity: 'number' },
			swVer: { entity: 'string' },
			carOutAmp: { entity: 'number' },
			outAmp: { entity: 'number' },
			dcdc12vWatts: { entity: 'number' },
			chgPauseFlag: { entity: 'diagnostic' },
			inWatts: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			cfgDcChgCurrent: { entity: 'level' },
			inAmp: { entity: 'number' },
			inVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outVol: { entity: 'number' },
			chgType: { entity: 'diagnostic' },
			dcdc12vAmp: { entity: 'number' },
			cfgChgType: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			chgState: { entity: 'diagnostic' }
		},
		pd: {
			wattsInSum: { entity: 'number' },
			wifiVer: { entity: 'string' },
			typec2Watts: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			standByMode: { entity: 'level' },
			chgPowerDc: { entity: 'number' },
			dsgPowerDc: { entity: 'number' },
			typccUsedTime: { entity: 'number' },
			typec2Temp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			soc: { entity: 'number' },
			wirelessWatts: { entity: 'string' },
			wattsOutSum: { entity: 'number' },
			carState: { entity: 'diagnostic' },
			invUsedTime: { entity: 'number' },
			typec1Temp: { entity: 'number' },
			dsgPowerAc: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			model: { entity: 'string' },
			chgPowerAc: { entity: 'number' },
			beepState: { entity: 'switch' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			remainTime: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			carTemp: { entity: 'number' },
			lcdBrightness: { entity: 'icon' },
			qcUsb2Watts: { entity: 'number' },
			lcdOffSec: { entity: 'level' },
			sysVer: { entity: 'string' },
			sysChgDsgState: { entity: 'diagnostic' },
			qcUsb1Watts: { entity: 'number' },
			kit0: { entity: 'icon' },
			kit1: { entity: 'icon' },
			kit2: { entity: 'icon' },
			usbqcUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			usbUsedTime: { entity: 'number' },
			mpptUsedTime: { entity: 'number' },
			wifiRssi: { entity: 'string' },
			errCode: { entity: 'diagnostic' },
			carWatts: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			iconFanState: { entity: 'icon' },
			iconUsbState: { entity: 'icon' },
			iconBtMode: { entity: 'icon' },
			iconAcFreqMode: { entity: 'icon' },
			iconLowTempState: { entity: 'icon' },
			iconPackHeaterState: { entity: 'icon' },
			iconRechgTimeState: { entity: 'icon' },
			iconTransSwState: { entity: 'icon' },
			iconTypecMode: { entity: 'icon' },
			iconTypecState: { entity: 'icon' },
			iconCarMode: { entity: 'icon' },
			iconCoGasState: { entity: 'icon' },
			iconRcState: { entity: 'icon' },
			iconHiTempState: { entity: 'icon' },
			iconHiTempMode: { entity: 'icon' },
			iconEcoMode: { entity: 'icon' },
			iconCarState: { entity: 'icon' },
			iconSocUpsMode: { entity: 'icon' },
			iconSolarBracketMode: { entity: 'icon' },
			iconLowTempMode: { entity: 'icon' },
			iconGasGenMode: { entity: 'icon' },
			iconBmsParallelMode: { entity: 'icon' },
			iconInvParallelState: { entity: 'icon' },
			iconWifiMode: { entity: 'icon' },
			iconOverloadState: { entity: 'icon' },
			iconFactoryState: { entity: 'icon' },
			iconChgStationState: { entity: 'icon' },
			iconBmsParallelState: { entity: 'icon' },
			iconWifiState: { entity: 'icon' },
			iconWindGenMode: { entity: 'icon' },
			iconUsbMode: { entity: 'icon' },
			iconBmsErrState: { entity: 'icon' },
			iconBmsErrMode: { entity: 'icon' },
			iconWindGenState: { entity: 'icon' },
			iconBtState: { entity: 'icon' },
			iconEcoState: { entity: 'icon' },
			iconOverloadMode: { entity: 'icon' },
			iconRechgTimeMode: { entity: 'icon' },
			iconInvParallelMode: { entity: 'icon' },
			iconTransSwMode: { entity: 'icon' },
			iconFactoryMode: { entity: 'icon' },
			iconFanMode: { entity: 'icon' },
			iconSolarPanelState: { entity: 'icon' },
			iconWirelessChgMode: { entity: 'icon' },
			iconSocUpsState: { entity: 'icon' },
			iconSolarBracketState: { entity: 'icon' },
			iconPackHeaterMode: { entity: 'icon' },
			iconCoGasMode: { entity: 'icon' },
			iconChgStationMode: { entity: 'icon' },
			iconAcFreqState: { entity: 'icon' },
			iconGasGenState: { entity: 'icon' },
			iconRcMode: { entity: 'icon' },
			iconWirelessChgState: { entity: 'icon' },
			iconSolarPanelMode: { entity: 'icon' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	deltamax: {
		bmsMaster: {
			f32ShowSoc: { entity: 'number' },
			designCap: { entity: 'number' },
			remainCap: { entity: 'number' },
			temp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			maxCellTemp: { entity: 'number' },
			vol: { entity: 'number' },
			soh: { entity: 'string' },
			sysVer: { entity: 'string' },
			bqSysStatReg: { entity: 'string' },
			amp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			soc: { entity: 'number' },
			num: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			type: { entity: 'diagnostic' },
			minCellTemp: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			maxMosTemp: { entity: 'number' },
			tagChgAmp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			inputWatts: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			remainTime: { entity: 'number' },
			minCellVol: { entity: 'number' },
			fullCap: { entity: 'number' },
			cellId: { entity: 'diagnostic' },
			cycles: { entity: 'number' },
			//new same as delta2max
			balanceState: { entity: 'diagnostic' },
			cellTemp: { entity: 'array' },
			cellVol: { entity: 'array' },
			hwEdition: { entity: 'array' },
			maxVolDiff: { entity: 'number' },
			mosState: { entity: 'diagnostic' },
			//additional
			cellSeriesNum: { entity: 'icon' },
			cellNtcNum: { entity: 'icon' }
		},
		ems: {
			chgCmd: { entity: 'diagnostic' },
			bmsWarningState: { entity: 'diagnostic' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			minDsgSoc: { entity: 'level' },
			paraVolMax: { entity: 'number' },
			f32LcdShowSoc: { entity: 'number' },
			lcdShowSoc: { entity: 'number' },
			bms0Online: { entity: 'diagnostic' },
			minOpenOilEbSoc: { entity: 'level' },
			maxChargeSoc: { entity: 'level' },
			chgRemainTime: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			openBmsIdx: { entity: 'string' },
			dsgRemainTime: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			bms1Online: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			bmsModel: { entity: 'string' },
			dsgCmd: { entity: 'diagnostic' },
			openUpsFlag: { entity: 'string' },
			maxCloseOilEbSoc: { entity: 'level' },
			chgState: { entity: 'diagnostic' },
			fanLevel: { entity: 'string' },
			chgAmp: { entity: 'number' },
			bms2Online: { entity: 'diagnostic' }
		},
		inv: {
			dcInVol: { entity: 'number' },
			cfgAcWorkMode: { entity: 'switch' },
			cfgAcOutVoltage: { entity: 'string' },
			cfgStandbyMin: { entity: 'level' },
			dcInAmp: { entity: 'number' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			outputWatts: { entity: 'number' },
			dcInTemp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			cfgFastChgWatts: { entity: 'number' },
			chargerType: { entity: 'diagnostic' },
			acInAmp: { entity: 'number' },
			fanState: { entity: 'diagnostic' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcXboost: { entity: 'switch' },
			outTemp: { entity: 'number' },
			invType: { entity: 'string' },
			acDipSwitch: { entity: 'diagnostic' },
			invOutVol: { entity: 'number' },
			acInVol: { entity: 'number' },
			inputWatts: { entity: 'number' },
			acPassByAutoEn: { entity: 'diagnostic' },
			acInFreq: { entity: 'number' },
			chgPauseFlag: { entity: 'switch' },
			dischargeType: { entity: 'diagnostic' },
			invOutAmp: { entity: 'number' },
			sysVer: { entity: 'string' },
			cfgSlowChgWatts: { entity: 'level' }
		},
		mppt: {
			carOutVol: { entity: 'number' },
			carState: { entity: 'switch' },
			faultCode: { entity: 'diagnostic' },
			xt60ChgType: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			carTemp: { entity: 'number' },
			outWatts: { entity: 'number' },
			swVer: { entity: 'string' },
			carOutAmp: { entity: 'number' },
			outAmp: { entity: 'number' },
			dcdc12vWatts: { entity: 'number' },
			chgPauseFlag: { entity: 'diagnostic' },
			inWatts: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			cfgDcChgCurrent: { entity: 'level' },
			inAmp: { entity: 'number' },
			inVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outVol: { entity: 'number' },
			chgType: { entity: 'diagnostic' },
			dcdc12vAmp: { entity: 'number' },
			cfgChgType: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			chgState: { entity: 'diagnostic' }
		},
		pd: {
			wattsInSum: { entity: 'number' },
			wifiVer: { entity: 'string' },
			typec2Watts: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			standByMode: { entity: 'level' },
			chgPowerDc: { entity: 'number' },
			dsgPowerDc: { entity: 'number' },
			typccUsedTime: { entity: 'number' },
			typec2Temp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			soc: { entity: 'number' },
			wirelessWatts: { entity: 'string' },
			wattsOutSum: { entity: 'number' },
			carState: { entity: 'diagnostic' },
			invUsedTime: { entity: 'number' },
			typec1Temp: { entity: 'number' },
			dsgPowerAc: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			model: { entity: 'string' },
			chgPowerAc: { entity: 'number' },
			beepState: { entity: 'switch' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			remainTime: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			carTemp: { entity: 'number' },
			lcdBrightness: { entity: 'icon' },
			qcUsb2Watts: { entity: 'number' },
			lcdOffSec: { entity: 'level' },
			sysVer: { entity: 'string' },
			sysChgDsgState: { entity: 'diagnostic' },
			qcUsb1Watts: { entity: 'number' },
			kit0: { entity: 'icon' },
			kit1: { entity: 'icon' },
			kit2: { entity: 'icon' },
			usbqcUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			usbUsedTime: { entity: 'number' },
			mpptUsedTime: { entity: 'number' },
			wifiRssi: { entity: 'string' },
			errCode: { entity: 'diagnostic' },
			carWatts: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			iconFanState: { entity: 'icon' },
			iconUsbState: { entity: 'icon' },
			iconBtMode: { entity: 'icon' },
			iconAcFreqMode: { entity: 'icon' },
			iconLowTempState: { entity: 'icon' },
			iconPackHeaterState: { entity: 'icon' },
			iconRechgTimeState: { entity: 'icon' },
			iconTransSwState: { entity: 'icon' },
			iconTypecMode: { entity: 'icon' },
			iconTypecState: { entity: 'icon' },
			iconCarMode: { entity: 'icon' },
			iconCoGasState: { entity: 'icon' },
			iconRcState: { entity: 'icon' },
			iconHiTempState: { entity: 'icon' },
			iconHiTempMode: { entity: 'icon' },
			iconEcoMode: { entity: 'icon' },
			iconCarState: { entity: 'icon' },
			iconSocUpsMode: { entity: 'icon' },
			iconSolarBracketMode: { entity: 'icon' },
			iconLowTempMode: { entity: 'icon' },
			iconGasGenMode: { entity: 'icon' },
			iconBmsParallelMode: { entity: 'icon' },
			iconInvParallelState: { entity: 'icon' },
			iconWifiMode: { entity: 'icon' },
			iconOverloadState: { entity: 'icon' },
			iconFactoryState: { entity: 'icon' },
			iconChgStationState: { entity: 'icon' },
			iconBmsParallelState: { entity: 'icon' },
			iconWifiState: { entity: 'icon' },
			iconWindGenMode: { entity: 'icon' },
			iconUsbMode: { entity: 'icon' },
			iconBmsErrState: { entity: 'icon' },
			iconBmsErrMode: { entity: 'icon' },
			iconWindGenState: { entity: 'icon' },
			iconBtState: { entity: 'icon' },
			iconEcoState: { entity: 'icon' },
			iconOverloadMode: { entity: 'icon' },
			iconRechgTimeMode: { entity: 'icon' },
			iconInvParallelMode: { entity: 'icon' },
			iconTransSwMode: { entity: 'icon' },
			iconFactoryMode: { entity: 'icon' },
			iconFanMode: { entity: 'icon' },
			iconSolarPanelState: { entity: 'icon' },
			iconWirelessChgMode: { entity: 'icon' },
			iconSocUpsState: { entity: 'icon' },
			iconSolarBracketState: { entity: 'icon' },
			iconPackHeaterMode: { entity: 'icon' },
			iconCoGasMode: { entity: 'icon' },
			iconChgStationMode: { entity: 'icon' },
			iconAcFreqState: { entity: 'icon' },
			iconGasGenState: { entity: 'icon' },
			iconRcMode: { entity: 'icon' },
			iconWirelessChgState: { entity: 'icon' },
			iconSolarPanelMode: { entity: 'icon' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	deltapro: {
		bmsMaster: {
			f32ShowSoc: { entity: 'number' },
			designCap: { entity: 'number' },
			remainCap: { entity: 'number' },
			temp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			maxCellTemp: { entity: 'number' },
			vol: { entity: 'number' },
			soh: { entity: 'string' },
			sysVer: { entity: 'string' },
			bqSysStatReg: { entity: 'string' },
			amp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			soc: { entity: 'number' },
			num: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			type: { entity: 'diagnostic' },
			minCellTemp: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			maxMosTemp: { entity: 'number' },
			tagChgAmp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			inputWatts: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			remainTime: { entity: 'number' },
			minCellVol: { entity: 'number' },
			fullCap: { entity: 'number' },
			cellId: { entity: 'diagnostic' },
			cycles: { entity: 'number' },
			packSn: { entity: 'array' },
			diffSoc: { entity: 'number' },
			//new with 1.0.67
			cellVol: { entity: 'array' },
			cellTemp: { entity: 'array' },
			targetSoc: { entity: 'number' },
			actSoc: { entity: 'number' },
			chgDsgState: { entity: 'diagnostic' },
			productType: { entity: 'diagnostic' }, //14
			calendarSch: { entity: 'diagnostic' },
			sysState: { entity: 'diagnostic' },
			allErrCode: { entity: 'diagnostic' },
			allBmsFault: { entity: 'diagnostic' },
			cycleSoh: { entity: 'string' },
			realSoh: { entity: 'string' },
			bmsHeartbeatVer: { entity: 'string' },
			productDetail: { entity: 'string' },
			sysLoaderVer: { entity: 'string' },
			totalDsgCap: { entity: 'string' }, //4294967295
			totalChgCap: { entity: 'string' },
			ecloudOcv: { entity: 'string' },
			hwEdition: { entity: 'array' },
			maxVolDiff: { entity: 'number' },
			mosState: { entity: 'diagnostic' },
			cellSeriesNum: { entity: 'icon' },
			cellNtcNum: { entity: 'icon' },
			balanceState: { entity: 'diagnostic' }
		},
		ems: {
			chgCmd: { entity: 'diagnostic' },
			bmsWarningState: { entity: 'diagnostic' },
			minDsgSoc: { entity: 'level' },
			paraVolMax: { entity: 'number' },
			f32LcdShowSoc: { entity: 'number' },
			lcdShowSoc: { entity: 'number' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			bms0Online: { entity: 'diagnostic' },
			minOpenOilEbSoc: { entity: 'level' },
			maxChargeSoc: { entity: 'level' },
			chgRemainTime: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			openBmsIdx: { entity: 'string' },
			dsgRemainTime: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			bms1Online: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			bmsModel: { entity: 'string' },
			dsgCmd: { entity: 'diagnostic' },
			openUpsFlag: { entity: 'string' },
			maxCloseOilEbSoc: { entity: 'level' },
			chgState: { entity: 'diagnostic' },
			fanLevel: { entity: 'string' },
			chgAmp: { entity: 'number' },
			bms2Online: { entity: 'diagnostic' }
		},
		inv: {
			dcInVol: { entity: 'number' },
			cfgAcWorkMode: { entity: 'switch' },
			cfgAcOutVoltage: { entity: 'string' },
			cfgStandbyMin: { entity: 'level' },
			dcInAmp: { entity: 'number' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			outputWatts: { entity: 'number' },
			dcInTemp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			cfgFastChgWatts: { entity: 'number' },
			chargerType: { entity: 'diagnostic' },
			acInAmp: { entity: 'number' },
			fanState: { entity: 'diagnostic' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcXboost: { entity: 'switch' },
			outTemp: { entity: 'number' },
			invType: { entity: 'string' },
			acDipSwitch: { entity: 'diagnostic' },
			invOutVol: { entity: 'number' },
			acInVol: { entity: 'number' },
			inputWatts: { entity: 'number' },
			acPassByAutoEn: { entity: 'diagnostic' },
			acInFreq: { entity: 'number' },
			chgPauseFlag: { entity: 'diagnostic' },
			dischargeType: { entity: 'diagnostic' },
			invOutAmp: { entity: 'number' },
			sysVer: { entity: 'string' },
			cfgSlowChgWatts: { entity: 'level' }
		},
		pd: {
			iconWifiMode: { entity: 'icon' },
			iconOverloadState: { entity: 'icon' },
			wattsInSum: { entity: 'number' },
			wifiVer: { entity: 'string' },
			iconLowTempMode: { entity: 'icon' },
			iconGasGenMode: { entity: 'icon' },
			iconBmsParallelMode: { entity: 'icon' },
			iconInvParallelState: { entity: 'icon' },
			typec2Watts: { entity: 'number' },
			iconTypecState: { entity: 'icon' },
			iconCarMode: { entity: 'icon' },
			iconCoGasState: { entity: 'icon' },
			iconRcState: { entity: 'icon' },
			iconHiTempState: { entity: 'icon' },
			iconHiTempMode: { entity: 'icon' },
			iconEcoMode: { entity: 'icon' },
			usb1Watts: { entity: 'number' },
			standByMode: { entity: 'level' },
			chgPowerDc: { entity: 'number' },
			dsgPowerDc: { entity: 'number' },
			iconUsbState: { entity: 'icon' },
			typccUsedTime: { entity: 'number' },
			extRj45Port: { entity: 'diagnostic' },
			iconBtMode: { entity: 'icon' },
			typec2Temp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			soc: { entity: 'number' },
			iconFactoryState: { entity: 'icon' },
			iconChgStationState: { entity: 'icon' },
			iconBmsParallelState: { entity: 'icon' },
			wirelessWatts: { entity: 'string' },
			iconCarState: { entity: 'icon' },
			iconSocUpsMode: { entity: 'icon' },
			ext3p8Port: { entity: 'diagnostic' },
			iconSolarBracketMode: { entity: 'icon' },
			wattsOutSum: { entity: 'number' },
			iconWifiState: { entity: 'icon' },
			iconWindGenMode: { entity: 'icon' },
			iconUsbMode: { entity: 'icon' },
			iconBmsErrState: { entity: 'icon' },
			iconBmsErrMode: { entity: 'icon' },
			iconWindGenState: { entity: 'icon' },
			iconBtState: { entity: 'icon' },
			iconEcoState: { entity: 'icon' },
			carState: { entity: 'diagnostic' },
			invUsedTime: { entity: 'number' },
			iconAcFreqMode: { entity: 'icon' },
			typec1Temp: { entity: 'number' },
			dsgPowerAc: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			iconLowTempState: { entity: 'icon' },
			model: { entity: 'string' },
			chgPowerAc: { entity: 'number' },
			beepState: { entity: 'switch' },
			iconPackHeaterState: { entity: 'icon' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			remainTime: { entity: 'number' },
			iconFanState: { entity: 'icon' },
			ext4p8Port: { entity: 'diagnostic' },
			chgSunPower: { entity: 'number' },
			carTemp: { entity: 'number' },
			lcdBrightness: { entity: 'string' },
			iconRechgTimeState: { entity: 'icon' },
			qcUsb2Watts: { entity: 'number' },
			lcdOffSec: { entity: 'level' },
			iconTransSwState: { entity: 'icon' },
			iconTypecMode: { entity: 'icon' },
			sysVer: { entity: 'string' },
			iconOverloadMode: { entity: 'icon' },
			iconRechgTimeMode: { entity: 'diagnostic' },
			sysChgDsgState: { entity: 'diagnostic' },
			iconInvParallelMode: { entity: 'icon' },
			qcUsb1Watts: { entity: 'number' },
			iconTransSwMode: { entity: 'icon' },
			iconFactoryMode: { entity: 'icon' },
			kit1: { entity: 'icon' },
			iconFanMode: { entity: 'icon' },
			usbqcUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			usbUsedTime: { entity: 'number' },
			mpptUsedTime: { entity: 'number' },
			iconSolarPanelState: { entity: 'icon' },
			iconWirelessChgMode: { entity: 'icon' },
			wifiRssi: { entity: 'string' },
			iconSocUpsState: { entity: 'icon' },
			iconSolarBracketState: { entity: 'icon' },
			errCode: { entity: 'diagnostic' },
			iconPackHeaterMode: { entity: 'icon' },
			iconCoGasMode: { entity: 'icon' },
			carWatts: { entity: 'number' },
			iconChgStationMode: { entity: 'icon' },
			iconAcFreqState: { entity: 'icon' },
			iconGasGenState: { entity: 'icon' },
			usb2Watts: { entity: 'number' },
			iconRcMode: { entity: 'icon' },
			iconWirelessChgState: { entity: 'icon' },
			iconSolarPanelMode: { entity: 'icon' },
			//new DeltaPro FW
			watthisconfig: { entity: 'diagnostic' },
			minAcoutSoc: { entity: 'number' },
			relayswitchcnt: { entity: 'string' },
			hysteresisAdd: { entity: 'string' },
			acautooutConfig: { entity: 'switch' },
			bppowerSoc: { entity: 'level' },
			acautooutPause: { entity: 'number' }
		},
		mppt: {
			carOutVol: { entity: 'number' },
			carState: { entity: 'switch' },
			faultCode: { entity: 'diagnostic' },
			xt60ChgType: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			carTemp: { entity: 'number' },
			outWatts: { entity: 'number' },
			swVer: { entity: 'string' },
			carOutAmp: { entity: 'number' },
			outAmp: { entity: 'number' },
			dcdc12vWatts: { entity: 'number' },
			chgPauseFlag: { entity: 'diagnostic' },
			inWatts: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			cfgDcChgCurrent: { entity: 'level' },
			inAmp: { entity: 'number' },
			inVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outVol: { entity: 'number' },
			chgType: { entity: 'diagnostic' },
			dcdc12vAmp: { entity: 'number' },
			cfgChgType: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			chgState: { entity: 'diagnostic' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	delta2: {
		bmsMaster: {
			amp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			bqSysStatReg: { entity: 'string' },
			cellId: { entity: 'diagnostic' },
			cycles: { entity: 'number' },
			designCap: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			f32ShowSoc: { entity: 'number' },
			fullCap: { entity: 'number' },
			inputWatts: { entity: 'number' },
			maxCellTemp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			maxMosTemp: { entity: 'number' },
			minCellTemp: { entity: 'number' },
			minCellVol: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			num: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			outputWatts: { entity: 'number' },
			remainCap: { entity: 'number' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			soh: { entity: 'string' },
			sysVer: { entity: 'string' },
			tagChgAmp: { entity: 'number' },
			temp: { entity: 'number' },
			type: { entity: 'diagnostic' },
			vol: { entity: 'number' },
			//new delta 2
			OCV: { entity: 'number' }
		},
		ems: {
			bmsModel: { entity: 'string' },
			chgAmp: { entity: 'number' },
			chgCmd: { entity: 'diagnostic' },
			chgRemainTime: { entity: 'number' },
			chgState: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			dsgCmd: { entity: 'diagnostic' },
			dsgRemainTime: { entity: 'number' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			f32LcdShowSoc: { entity: 'number' },
			fanLevel: { entity: 'string' },
			lcdShowSoc: { entity: 'number' },
			maxChargeSoc: { entity: 'level' },
			minDsgSoc: { entity: 'level' },
			openBmsIdx: { entity: 'string' },
			openUpsFlag: { entity: 'string' },
			paraVolMax: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			//new delta2
			bmsIsConnt: { entity: 'array' },
			bmsWarState: { entity: 'diagnostic' },
			maxAvailNum: { entity: 'string' },
			maxCloseOilEb: { entity: 'level' },
			minOpenOilEb: { entity: 'level' }
		},
		inv: {
			acDipSwitch: { entity: 'diagnostic' },
			acInAmp: { entity: 'number' },
			acInFreq: { entity: 'number' },
			acInVol: { entity: 'number' },
			cfgAcEnabled: { entity: 'diagnostic' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			cfgAcWorkMode: { entity: 'diagnostic' },
			cfgAcXboost: { entity: 'diagnostic' },
			chargerType: { entity: 'diagnostic' },
			chgPauseFlag: { entity: 'diagnostic' },
			dcInAmp: { entity: 'number' },
			dcInTemp: { entity: 'number' },
			dcInVol: { entity: 'number' },
			dischargeType: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			fanState: { entity: 'diagnostic' },
			inputWatts: { entity: 'number' },
			invOutAmp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			invOutVol: { entity: 'number' },
			invType: { entity: 'string' },
			outTemp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			sysVer: { entity: 'string' },
			//new delta2
			FastChgWatts: { entity: 'number' },
			SlowChgWatts: { entity: 'number' },
			cfgAcOutVol: { entity: 'string' },
			reserved: { entity: 'icon' },
			standbyMins: { entity: 'number' }
		},
		mppt: {
			carOutAmp: { entity: 'number' },
			carOutVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			carState: { entity: 'switch' },
			carTemp: { entity: 'number' },
			cfgChgType: { entity: 'diagnostic' },
			chgPauseFlag: { entity: 'diagnostic' },
			chgState: { entity: 'diagnostic' },
			chgType: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			dcdc12vAmp: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			dcdc12vWatts: { entity: 'number' },
			faultCode: { entity: 'diagnostic' },
			inAmp: { entity: 'number' },
			inVol: { entity: 'number' },
			inWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outAmp: { entity: 'number' },
			outVol: { entity: 'number' },
			outWatts: { entity: 'number' },
			swVer: { entity: 'string' },
			//new delta 2
			acStandbyMins: { entity: 'level' },
			beepState: { entity: 'switch' },
			carStandbyMin: { entity: 'level' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			cfgAcOutVol: { entity: 'string' },
			cfgAcXboost: { entity: 'switch' },
			cfgChgWatts: { entity: 'level' },
			dcChgCurrent: { entity: 'level' },
			dischargeType: { entity: 'diagnostic' },
			powStandbyMin: { entity: 'number' },
			res: { entity: 'icon' },
			scrStandbyMin: { entity: 'number' },
			x60ChgType: { entity: 'diagnostic' }
		},
		pd: {
			carState: { entity: 'diagnostic' }, //evtl. hier switch und in mppt diagnose
			carTemp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			carWatts: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			errCode: { entity: 'diagnostic' },
			ext3p8Port: { entity: 'diagnostic' },
			ext4p8Port: { entity: 'diagnostic' },
			extRj45Port: { entity: 'diagnostic' },
			hysteresisAdd: { entity: 'string' },
			invUsedTime: { entity: 'number' },
			lcdOffSec: { entity: 'level' },
			minAcoutSoc: { entity: 'number' },
			model: { entity: 'string' },
			mpptUsedTime: { entity: 'number' },
			qcUsb1Watts: { entity: 'number' },
			qcUsb2Watts: { entity: 'number' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			sysVer: { entity: 'string' },
			typec1Temp: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			typec2Temp: { entity: 'number' },
			typec2Watts: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			usbUsedTime: { entity: 'number' },
			usbqcUsedTime: { entity: 'number' },
			wattsInSum: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			wifiRssi: { entity: 'string' },
			wifiVer: { entity: 'string' },
			//new delta 2
			acAutoOnCfg: { entity: 'diagnostic' },
			acAutoOutConfig: { entity: 'switch' },
			acAutoOutPause: { entity: 'number' },
			acEnabled: { entity: 'diagnostic' },
			beepMode: { entity: 'diagnostic' },
			bpPowerSoc: { entity: 'level' },
			brightLevel: { entity: 'string' },
			chargerType: { entity: 'diagnostic' },
			chgDsgState: { entity: 'diagnostic' },
			chgPowerAC: { entity: 'number' },
			chgPowerDC: { entity: 'number' },
			dsgPowerAC: { entity: 'number' },
			dsgPowerDC: { entity: 'number' },
			icoBytes: { entity: 'icon' },
			inWatts: { entity: 'number' },
			inputWatts: { entity: 'number' },
			outWatts: { entity: 'number' },
			outputWatts: { entity: 'number' },
			pvChgPrioSet: { entity: 'switch' },
			relaySwitchCnt: { entity: 'string' },
			reserved: { entity: 'icon' },
			standbyMin: { entity: 'level' },
			typecUsedTime: { entity: 'number' },
			watchIsConfig: { entity: 'diagnostic' },
			wireWatts: { entity: 'string' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	delta2max: {
		bmsMaster: {
			amp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			bqSysStatReg: { entity: 'string' },
			cellId: { entity: 'diagnostic' },
			cycles: { entity: 'number' },
			designCap: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			f32ShowSoc: { entity: 'number' },
			fullCap: { entity: 'number' },
			inputWatts: { entity: 'number' },
			maxCellTemp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			maxMosTemp: { entity: 'number' },
			minCellTemp: { entity: 'number' },
			minCellVol: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			num: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			outputWatts: { entity: 'number' },
			remainCap: { entity: 'number' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			soh: { entity: 'string' },
			sysVer: { entity: 'string' },
			tagChgAmp: { entity: 'number' },
			temp: { entity: 'number' },
			type: { entity: 'diagnostic' },
			vol: { entity: 'number' },
			//new delta 2 max
			balanceState: { entity: 'diagnostic' },
			cellTemp: { entity: 'array' },
			cellVol: { entity: 'array' },
			hwVersion: { entity: 'array' },
			maxVolDiff: { entity: 'number' },
			mosState: { entity: 'diagnostic' },
			recv: { entity: 'icon' }
		},
		ems: {
			bmsIsConnt: { entity: 'array' },
			bmsModel: { entity: 'string' },
			bmsWarState: { entity: 'diagnostic' },
			chgAmp: { entity: 'number' },
			chgCmd: { entity: 'diagnostic' },
			chgRemainTime: { entity: 'number' },
			chgState: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			dsgCmd: { entity: 'diagnostic' },
			dsgRemainTime: { entity: 'number' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			f32LcdShowSoc: { entity: 'number' },
			fanLevel: { entity: 'string' },
			lcdShowSoc: { entity: 'number' },
			maxAvailNum: { entity: 'string' },
			maxChargeSoc: { entity: 'level' },
			maxCloseOilEb: { entity: 'level' },
			minDsgSoc: { entity: 'level' },
			minOpenOilEb: { entity: 'level' },
			openBmsIdx: { entity: 'string' },
			openUpsFlag: { entity: 'string' },
			paraVolMax: { entity: 'number' },
			paraVolMin: { entity: 'number' }
			//new delta 2 max
			//bms_kitInfo
			//aviDataLen: { entity: 'icon' }, //'part of kit, excluded'
			//kitNum: { entity: 'icon' },
			//version: { entity: 'icon' },
			//watts: { entity: 'icon' }
		},
		inv: {
			FastChgWatts: { entity: 'number' },
			SlowChgWatts: { entity: 'level' },
			acDipSwitch: { entity: 'diagnostic' },
			acInAmp: { entity: 'number' },
			acInFreq: { entity: 'number' },
			acInVol: { entity: 'number' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			cfgAcOutVol: { entity: 'string' },
			cfgAcWorkMode: { entity: 'switch' },
			cfgAcXboost: { entity: 'switch' },
			chargerType: { entity: 'diagnostic' },
			chgPauseFlag: { entity: 'switch' },
			dcInAmp: { entity: 'number' },
			dcInTemp: { entity: 'number' },
			dcInVol: { entity: 'number' },
			dischargeType: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			fanState: { entity: 'diagnostic' },
			inputWatts: { entity: 'number' },
			invOutAmp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			invOutVol: { entity: 'number' },
			invType: { entity: 'string' },
			outTemp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			reserved: { entity: 'icon' },
			sysVer: { entity: 'string' },
			//new delta 2 max
			acChgRatedPower: { entity: 'number' },
			acPassbyAutoEn: { entity: 'diagnostic' },
			prBalanceMode: { entity: 'diagnostic' },
			standbyMin: { entity: 'number' }
		},
		mppt: {
			carOutAmp: { entity: 'number' },
			carOutVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			carStandbyMin: { entity: 'level' },
			carState: { entity: 'switch' },
			carTemp: { entity: 'number' },
			cfgChgType: { entity: 'diagnostic' },
			chgPauseFlag: { entity: 'diagnostic' },
			chgState: { entity: 'diagnostic' },
			chgType: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			dcChgCurrent: { entity: 'level' },
			dcdc12vAmp: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			dcdc12vWatts: { entity: 'number' },
			faultCode: { entity: 'diagnostic' },
			inAmp: { entity: 'number' },
			inVol: { entity: 'number' },
			inWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outAmp: { entity: 'number' },
			outVol: { entity: 'number' },
			outWatts: { entity: 'number' },
			res: { entity: 'icon' },
			swVer: { entity: 'string' },
			x60ChgType: { entity: 'diagnostic' },
			//new delta 2 max
			pv2CfgChgType: { entity: 'diagnostic' },
			pv2ChgPauseFlag: { entity: 'diagnostic' },
			pv2ChgState: { entity: 'diagnostic' },
			pv2ChgType: { entity: 'diagnostic' },
			pv2DcChgCurrent: { entity: 'level' },
			pv2InAmp: { entity: 'number' },
			pv2InVol: { entity: 'number' },
			pv2InWatts: { entity: 'number' },
			pv2MpptTemp: { entity: 'number' },
			pv2Xt60ChgType: { entity: 'diagnostic' }
		},
		pd: {
			acAutoOnCfg: { entity: 'diagnostic' },
			beepMode: { entity: 'diagnostic' },
			bpPowerSoc: { entity: 'level' },
			brightLevel: { entity: 'string' },
			carState: { entity: 'diagnostic' },
			carTemp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			carWatts: { entity: 'number' },
			chgDsgState: { entity: 'diagnostic' },
			chgPowerAC: { entity: 'number' },
			chgPowerDC: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			dsgPowerAC: { entity: 'number' },
			dsgPowerDC: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			hysteresisAdd: { entity: 'string' },
			icoBytes: { entity: 'icon' },
			invUsedTime: { entity: 'number' },
			lcdOffSec: { entity: 'level' },
			model: { entity: 'string' },
			mpptUsedTime: { entity: 'number' },
			qcUsb1Watts: { entity: 'number' },
			qcUsb2Watts: { entity: 'number' },
			relaySwitchCnt: { entity: 'string' },
			remainTime: { entity: 'number' },
			reserved: { entity: 'icon' },
			soc: { entity: 'number' },
			standbyMin: { entity: 'level' },
			sysVer: { entity: 'string' },
			typec1Temp: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			typec2Temp: { entity: 'number' },
			typec2Watts: { entity: 'number' },
			typecUsedTime: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			usbUsedTime: { entity: 'number' },
			usbqcUsedTime: { entity: 'number' },
			watchIsConfig: { entity: 'switch' },
			wattsInSum: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			wifiRssi: { entity: 'string' },
			wifiVer: { entity: 'string' },
			wireWatts: { entity: 'string' },
			//new delta2max
			XT150Watts1: { entity: 'number' },
			XT150Watts2: { entity: 'number' },
			acAutoPause: { entity: 'string' },
			bmsKitState: { entity: 'array' },
			invInWatts: { entity: 'number' },
			invOutWatts: { entity: 'number' },
			minAcSoc: { entity: 'number' },
			newAcAutoOnCfg: { entity: 'switch' },
			otherKitState: { entity: 'diagnostic' },
			pv1ChargeType: { entity: 'diagnostic' },
			pv1ChargeWatts: { entity: 'number' },
			pv2ChargeType: { entity: 'diagnostic' },
			pv2ChargeWatts: { entity: 'number' },
			pvChargePrioSet: { entity: 'diagnostic' },
			minAcoutSoc: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	riverpro: {
		bmsMaster: {
			amp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			cycles: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			fullCap: { entity: 'number' },
			maxCellTemp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			maxMosTemp: { entity: 'number' },
			minCellTemp: { entity: 'number' },
			minCellVol: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			openBmsIdx: { entity: 'string' },
			remainCap: { entity: 'number' },
			soc: { entity: 'number' },
			sysVer: { entity: 'string' },
			tagChgAmp: { entity: 'number' },
			temp: { entity: 'number' },
			vol: { entity: 'number' },
			//new riverpro
			//bqSysStatReg: { entity: 'string' },
			maxChargeSoc: { entity: 'level' },
			tagChgVol: { entity: 'number' },
			bqSysStatReq: { entity: 'string' }
		},
		inv: {
			cfgAcEnabled: { entity: 'switch' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			cfgAcOutVoltage: { entity: 'string' },
			cfgAcXboost: { entity: 'switch' },
			cfgStandbyMin: { entity: 'level' },
			chargerType: { entity: 'diagnostic' },
			dcInAmp: { entity: 'number' },
			dcInVol: { entity: 'number' },
			errCode: { entity: 'string' },
			fanState: { entity: 'diagnostic' },
			inputWatts: { entity: 'number' },
			invOutAmp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			invOutVol: { entity: 'number' },
			invType: { entity: 'string' },
			outTemp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			sysVer: { entity: 'string' },
			//new
			cfgAcChgModeFlg: { entity: 'diagnostic' },
			cfgFanMode: { entity: 'diagnostic' },
			inTemp: { entity: 'number' },
			invInAmp: { entity: 'number' },
			invInFreq: { entity: 'number' },
			invInVol: { entity: 'number' }
		},
		pd: {
			beepState: { entity: 'switch' },
			carTemp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			carWatts: { entity: 'number' },
			chgPowerAC: { entity: 'number' },
			chgPowerDC: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			dsgPowerAC: { entity: 'number' },
			dsgPowerDC: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			invUsedTime: { entity: 'number' },
			model: { entity: 'string' },
			mpptUsedTime: { entity: 'number' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			standByMode: { entity: 'level' },
			sysVer: { entity: 'string' },
			typecUsedTime: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			usbUsedTime: { entity: 'number' },
			usbqcUsedTime: { entity: 'number' },
			wattsInSum: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			//new
			bmsSlave: { entity: 'string' },
			carSwitch: { entity: 'switch' },
			ledState: { entity: 'diagnostic' },
			ledWatts: { entity: 'number' },
			typecTemp: { entity: 'number' },
			typecWatts: { entity: 'number' },
			usb3Watts: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	river2pro: {
		pd: {
			typec1Temp: { entity: 'number' },
			qcUsb1Watts: { entity: 'number' },
			wattsInSum: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			wifiVer: { entity: 'string' },
			ext3p8Port: { entity: 'diagnostic' },
			dsgPowerDC: { entity: 'number' },
			chgPowerDC: { entity: 'number' },
			model: { entity: 'string' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			standbyMin: { entity: 'level' },
			beepMode: { entity: 'diagnostic' },
			remainTime: { entity: 'number' },
			typecUsedTime: { entity: 'number' },
			typec2Watts: { entity: 'number' },
			ext4p8Port: { entity: 'diagnostic' },
			brightLevel: { entity: 'string' },
			usbqcUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			chgSunPower: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			carTemp: { entity: 'number' },
			usbUsedTime: { entity: 'number' },
			mpptUsedTime: { entity: 'number' },
			icoBytes: { entity: 'icon' },
			usb1Watts: { entity: 'number' },
			dsgPowerAC: { entity: 'number' },
			qcUsb2Watts: { entity: 'number' },
			wifiRssi: { entity: 'string' },
			wireWatts: { entity: 'string' },
			chgPowerAC: { entity: 'number' },
			lcdOffSec: { entity: 'level' },
			extRj45Port: { entity: 'diagnostic' },
			errCode: { entity: 'diagnostic' },
			sysVer: { entity: 'string' },
			carWatts: { entity: 'number' },
			typec2Temp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			chgDsgState: { entity: 'diagnostic' },
			usb2Watts: { entity: 'number' },
			soc: { entity: 'number' },
			carState: { entity: 'diagnostic' },
			invUsedTime: { entity: 'number' },
			//new
			typecChaWatts: { entity: 'number' },
			hysteresisAdd: { entity: 'string' },
			relaySwitchCnt: { entity: 'string' },
			acAutoOutConfig: { entity: 'switch' },
			acAutoOutPause: { entity: 'number' },
			minAcoutSoc: { entity: 'number' },
			watchIsConfig: { entity: 'diagnostic' },
			bpPowerSoc: { entity: 'level' }
		},
		bmsMaster: {
			sysVer: { entity: 'string' },
			minCellTemp: { entity: 'number' },
			designCap: { entity: 'number' },
			temp: { entity: 'number' },
			minCellVol: { entity: 'number' },
			cycles: { entity: 'number' },
			f32ShowSoc: { entity: 'number' },
			outputWatts: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			type: { entity: 'diagnostic' },
			soh: { entity: 'string' },
			maxCellTemp: { entity: 'number' },
			remainCap: { entity: 'number' },
			cellId: { entity: 'diagnostic' },
			minMosTemp: { entity: 'number' },
			vol: { entity: 'number' },
			remainTime: { entity: 'number' },
			fullCap: { entity: 'number' },
			bqSysStatReg: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			amp: { entity: 'number' },
			num: { entity: 'string' },
			bmsFault: { entity: 'string' },
			soc: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			inputWatts: { entity: 'number' },
			tagChgAmp: { entity: 'number' },
			maxMosTemp: { entity: 'number' }
		},
		inv: {
			dcInVol: { entity: 'number' },
			cfgAcWorkMode: { entity: 'diagnostic' },
			SlowChgWatts: { entity: 'number' },
			dcInAmp: { entity: 'number' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			outputWatts: { entity: 'number' },
			errCode: { entity: 'string' },
			dcInTemp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			chargerType: { entity: 'diagnostic' },
			reserved: { entity: 'icon' },
			acInAmp: { entity: 'number' },
			fanState: { entity: 'diagnostic' },
			cfgAcXboost: { entity: 'diagnostic' },
			cfgAcEnabled: { entity: 'diagnostic' },
			outTemp: { entity: 'number' },
			invType: { entity: 'string' },
			cfgAcOutVol: { entity: 'string' },
			acDipSwitch: { entity: 'diagnostic' },
			acInVol: { entity: 'number' },
			invOutVol: { entity: 'number' },
			FastChgWatts: { entity: 'number' },
			inputWatts: { entity: 'number' },
			standbyMins: { entity: 'number' },
			chgPauseFlag: { entity: 'diagnostic' },
			acInFreq: { entity: 'number' },
			dischargeType: { entity: 'diagnostic' },
			invOutAmp: { entity: 'number' },
			sysVer: { entity: 'string' }
		},
		mppt: {
			carOutVol: { entity: 'number' },
			carState: { entity: 'switch' },
			dischargeType: { entity: 'diagnostic' },
			faultCode: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			cfgAcXboost: { entity: 'switch' },
			carTemp: { entity: 'number' },
			outWatts: { entity: 'number' },
			swVer: { entity: 'string' },
			x60ChgType: { entity: 'diagnostic' },
			carOutAmp: { entity: 'number' },
			outAmp: { entity: 'number' },
			chgPauseFlag: { entity: 'switch' },
			dcdc12vWatts: { entity: 'number' },
			acStandbyMins: { entity: 'level' },
			powStandbyMin: { entity: 'number' },
			inWatts: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			inAmp: { entity: 'number' },
			scrStandbyMin: { entity: 'number' },
			inVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outVol: { entity: 'number' },
			cfgAcEnabled: { entity: 'switch' },
			chgType: { entity: 'diagnostic' },
			res: { entity: 'icon' },
			dcdc12vAmp: { entity: 'number' },
			beepState: { entity: 'switch' },
			cfgAcOutVol: { entity: 'string' },
			cfgChgType: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			carStandbyMin: { entity: 'level' },
			dcChgCurrent: { entity: 'level' },
			chgState: { entity: 'diagnostic' },
			cfgChgWatts: { entity: 'level' },
			cfgAcOutFreq: { entity: 'diagnostic' }
		},
		ems: {
			dsgCmd: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			chgRemainTime: { entity: 'number' },
			f32LcdShowSoc: { entity: 'number' },
			maxChargeSoc: { entity: 'level' },
			paraVolMax: { entity: 'number' },
			lcdShowSoc: { entity: 'number' },
			bmsModel: { entity: 'string' },
			chgAmp: { entity: 'number' },
			chgState: { entity: 'diagnostic' },
			openUpsFlag: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			minDsgSoc: { entity: 'level' },
			paraVolMin: { entity: 'number' },
			minOpenOilEb: { entity: 'level' },
			chgCmd: { entity: 'diagnostic' },
			maxAvailNum: { entity: 'string' },
			maxCloseOilEb: { entity: 'level' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			bmsIsConnt: { entity: 'array' },
			bmsWarState: { entity: 'diagnostic' },
			dsgRemainTime: { entity: 'number' },
			fanLevel: { entity: 'string' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	river2max: {
		bmsMaster: {
			amp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			bqSysStatReg: { entity: 'string' },
			cellId: { entity: 'diagnostic' },
			cycles: { entity: 'number' },
			designCap: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			f32ShowSoc: { entity: 'number' },
			fullCap: { entity: 'number' },
			inputWatts: { entity: 'number' },
			maxCellTemp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			maxMosTemp: { entity: 'number' },
			minCellTemp: { entity: 'number' },
			minCellVol: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			num: { entity: 'string' },
			openBmsIdx: { entity: 'string' },
			outputWatts: { entity: 'number' },
			remainCap: { entity: 'number' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			soh: { entity: 'string' },
			sysVer: { entity: 'string' },
			tagChgAmp: { entity: 'number' },
			temp: { entity: 'number' },
			type: { entity: 'diagnostic' },
			vol: { entity: 'number' }
		},
		ems: {
			bmsIsConnt: { entity: 'array' },
			bmsModel: { entity: 'string' },
			bmsWarState: { entity: 'diagnostic' },
			chgAmp: { entity: 'number' },
			chgCmd: { entity: 'diagnostic' },
			chgRemainTime: { entity: 'number' },
			chgState: { entity: 'diagnostic' },
			chgVol: { entity: 'number' },
			dsgCmd: { entity: 'diagnostic' },
			dsgRemainTime: { entity: 'number' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			f32LcdShowSoc: { entity: 'number' },
			fanLevel: { entity: 'string' },
			lcdShowSoc: { entity: 'number' },
			maxAvailNum: { entity: 'string' },
			maxChargeSoc: { entity: 'level' },
			//maxCloseOilEb: { entity: 'level' },
			minDsgSoc: { entity: 'level' },
			//minOpenOilEb: { entity: 'level' },
			openBmsIdx: { entity: 'string' },
			openUpsFlag: { entity: 'string' },
			paraVolMax: { entity: 'number' },
			paraVolMin: { entity: 'number' }
		},
		inv: {
			//FastChgWatts: { entity: 'number' },
			//SlowChgWatts: { entity: 'level' },
			acDipSwitch: { entity: 'diagnostic' },
			acInAmp: { entity: 'number' },
			acInFreq: { entity: 'number' },
			acInVol: { entity: 'number' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			cfgAcOutVol: { entity: 'string' },
			cfgAcWorkMode: { entity: 'switch' },
			cfgAcXboost: { entity: 'switch' },
			chargerType: { entity: 'diagnostic' },
			chgPauseFlag: { entity: 'switch' },
			dcInAmp: { entity: 'number' },
			dcInTemp: { entity: 'number' },
			dcInVol: { entity: 'number' },
			dischargeType: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			fanState: { entity: 'diagnostic' },
			inputWatts: { entity: 'number' },
			invOutAmp: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			invOutVol: { entity: 'number' },
			invType: { entity: 'string' },
			outTemp: { entity: 'number' },
			outputWatts: { entity: 'number' },
			reserved: { entity: 'icon' },
			standbyMins: { entity: 'number' },
			sysVer: { entity: 'string' }
		},
		mppt: {
			acStandbyMins: { entity: 'level' },
			beepState: { entity: 'switch' },
			carOutAmp: { entity: 'number' },
			carOutVol: { entity: 'number' },
			carOutWatts: { entity: 'number' },
			carStandbyMin: { entity: 'level' },
			carState: { entity: 'switch' },
			carTemp: { entity: 'number' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			cfgAcOutVol: { entity: 'string' },
			cfgAcXboost: { entity: 'switch' },
			cfgChgType: { entity: 'diagnostic' },
			cfgChgWatts: { entity: 'level' },
			chgPauseFlag: { entity: 'diagnostic' },
			chgState: { entity: 'diagnostic' },
			chgType: { entity: 'diagnostic' },
			dc24vState: { entity: 'diagnostic' },
			dc24vTemp: { entity: 'number' },
			dcChgCurrent: { entity: 'level' },
			dcdc12vAmp: { entity: 'number' },
			dcdc12vVol: { entity: 'number' },
			dcdc12vWatts: { entity: 'number' },
			dischargeType: { entity: 'diagnostic' },
			faultCode: { entity: 'diagnostic' },
			inAmp: { entity: 'number' },
			inVol: { entity: 'number' },
			inWatts: { entity: 'number' },
			mpptTemp: { entity: 'number' },
			outAmp: { entity: 'number' },
			outVol: { entity: 'number' },
			outWatts: { entity: 'number' },
			powStandbyMin: { entity: 'number' },
			res: { entity: 'icon' },
			scrStandbyMin: { entity: 'number' },
			swVer: { entity: 'string' },
			x60ChgType: { entity: 'diagnostic' }
		},
		pd: {
			acAutoOutConfig: { entity: 'switch' },
			acAutoOutPause: { entity: 'number' },
			beepMode: { entity: 'diagnostic' },
			bpPowerSoc: { entity: 'level' },
			brightLevel: { entity: 'string' },
			carState: { entity: 'diagnostic' },
			carTemp: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			carWatts: { entity: 'number' },
			chgDsgState: { entity: 'diagnostic' },
			chgPowerAC: { entity: 'number' },
			chgPowerDC: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			dcOutState: { entity: 'switch' },
			dsgPowerAC: { entity: 'number' },
			dsgPowerDC: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			ext3p8Port: { entity: 'diagnostic' },
			ext4p8Port: { entity: 'diagnostic' },
			extRj45Port: { entity: 'diagnostic' },
			hysteresisAdd: { entity: 'string' },
			icoBytes: { entity: 'icon' },
			invUsedTime: { entity: 'number' },
			lcdOffSec: { entity: 'level' },
			minAcoutSoc: { entity: 'number' },
			model: { entity: 'string' },
			mpptUsedTime: { entity: 'number' },
			qcUsb1Watts: { entity: 'number' },
			qcUsb2Watts: { entity: 'number' },
			relaySwitchCnt: { entity: 'string' },
			remainTime: { entity: 'number' },
			soc: { entity: 'number' },
			standbyMin: { entity: 'level' },
			sysVer: { entity: 'string' },
			typec1Temp: { entity: 'number' },
			typec1Watts: { entity: 'number' },
			typec2Temp: { entity: 'number' },
			typec2Watts: { entity: 'number' },
			typecChaWatts: { entity: 'number' },
			typecUsedTime: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			usbUsedTime: { entity: 'number' },
			usbqcUsedTime: { entity: 'number' },
			watchIsConfig: { entity: 'diagnostic' },
			wattsInSum: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			wifiAutoRcvy: { entity: 'diagnostic' },
			wifiRssi: { entity: 'string' },
			wifiVer: { entity: 'string' },
			wireWatts: { entity: 'string' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	rivermax: {
		inv: {
			cfgFanMode: { entity: 'diagnostic' },
			dcInVol: { entity: 'number' },
			cfgAcOutVoltage: { entity: 'string' },
			cfgAcChgModeFlg: { entity: 'diagnostic' },
			cfgStandbyMin: { entity: 'level' },
			dcInAmp: { entity: 'number' },
			cfgAcOutFreq: { entity: 'diagnostic' },
			errCode: { entity: 'string' },
			outputWatts: { entity: 'number' },
			invOutFreq: { entity: 'number' },
			chargerType: { entity: 'diagnostic' },
			fanState: { entity: 'diagnostic' },
			inTemp: { entity: 'number' },
			cfgAcEnabled: { entity: 'switch' },
			cfgAcXboost: { entity: 'switch' },
			outTemp: { entity: 'number' },
			invType: { entity: 'string' },
			invOutVol: { entity: 'number' },
			invInAmp: { entity: 'number' },
			inputWatts: { entity: 'number' },
			invInFreq: { entity: 'number' },
			invOutAmp: { entity: 'number' },
			invInVol: { entity: 'number' },
			sysVer: { entity: 'string' }
		},
		bmsMaster: {
			maxCellTemp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			sysVer: { entity: 'string' },
			temp: { entity: 'number' },
			cycles: { entity: 'number' },
			remainCap: { entity: 'number' },
			vol: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			minCellVol: { entity: 'number' },
			soc: { entity: 'number' },
			bqSysStatReg: { entity: 'string' },
			amp: { entity: 'number' },
			minCellTemp: { entity: 'number' },
			minMosTemp: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			fullCap: { entity: 'number' },
			maxMosTemp: { entity: 'number' },
			// nur bei slave
			ambientLightColor: { entity: 'icon' },
			ambientLightBrightness: { entity: 'icon' },
			ambientLightAnimate: { entity: 'icon' },
			ambientLightEnabled: { entity: 'icon' }
		},
		pd: {
			wattsInSum: { entity: 'number' },
			dcInUsedTime: { entity: 'number' },
			chgPowerDC: { entity: 'number' },
			dsgPowerDC: { entity: 'number' },
			model: { entity: 'string' },
			ledState: { entity: 'diagnostic' },
			beepState: { entity: 'switch' },
			remainTime: { entity: 'number' },
			usb3Watts: { entity: 'number' },
			typecUsedTime: { entity: 'number' },
			typecWatts: { entity: 'number' },
			usbqcUsedTime: { entity: 'number' },
			chgSunPower: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			carSwitch: { entity: 'switch' },
			carTemp: { entity: 'number' },
			usbUsedTime: { entity: 'number' },
			mpptUsedTime: { entity: 'number' },
			ledWatts: { entity: 'number' },
			usb1Watts: { entity: 'number' },
			standByMode: { entity: 'level' },
			dsgPowerAC: { entity: 'number' },
			chgPowerAC: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			bmsSlave: { entity: 'string' },
			sysVer: { entity: 'string' },
			carWatts: { entity: 'number' },
			carUsedTime: { entity: 'number' },
			usb2Watts: { entity: 'number' },
			soc: { entity: 'number' },
			typecTemp: { entity: 'number' },
			invUsedTime: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAllTaskCfg: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	wave2: {
		pd: {
			idleMode: { entity: 'switch' },
			tempDisplay: { entity: 'switch' },
			tempSys: { entity: 'switch' },
			beepEn: { entity: 'switch' },
			heatEnv: { entity: 'number' },
			mpptPwr: { entity: 'number' },
			batVolt: { entity: 'number' },
			busVol: { entity: 'number' },
			batSoc: { entity: 'number' },
			sacWorkTime: { entity: 'number' },
			condTemp: { entity: 'number' },
			batCurr: { entity: 'number' },
			setTempCel: { entity: 'number' },
			pvPower: { entity: 'number' },
			batPwrOut: { entity: 'number' },
			acFreq: { entity: 'number' },
			mpptVol: { entity: 'number' },
			acCurrRms: { entity: 'number' },
			batPowerSupplyTime: { entity: 'number' },
			acPwrIn: { entity: 'number' },
			tempNtc: { entity: 'number' },
			envTemp: { entity: 'number' },
			sacIdleTime: { entity: 'number' },
			acVoltRms: { entity: 'number' },
			dp2PowerSupplyTime: { entity: 'number' },
			coolEnv: { entity: 'number' },
			batChgRemain: { entity: 'number' },
			coolTemp: { entity: 'number' },
			mpptCur: { entity: 'number' },
			busVolt: { entity: 'number' },
			psdrPower: { entity: 'number' },
			dpPowerSupplyTime: { entity: 'number' },
			timeRemain: { entity: 'number' },
			sysPowerWatts: { entity: 'number' },
			evapTemp: { entity: 'number' },
			batDsgRemain: { entity: 'number' },
			batPower: { entity: 'number' },
			motorOutTemp: { entity: 'number' },
			airInTemp: { entity: 'number' },
			setTempfah: { entity: 'number' },
			llcCurr: { entity: 'number' },
			dmPowerSupplyTime: { entity: 'number' },
			pdSubMode: { entity: 'level' },
			fanValue: { entity: 'level' },
			setTemp: { entity: 'level' },
			idleTime: { entity: 'level' },
			mainMode: { entity: 'level' },
			timeSet: { entity: 'level' },
			wteFthEn: { entity: 'level' },
			rgbState: { entity: 'level' },
			powerMode: { entity: 'level' },
			batChgStatus: { entity: 'string' },
			ver: { entity: 'string' },
			deviceName: { entity: 'string' },
			pdTempSys: { entity: 'string' },
			bmsPid: { entity: 'string' },
			sacWattRangeTime: { entity: 'array' },
			mpptSts: { entity: 'string' },
			bmsErr: { entity: 'string' },
			powerSts: { entity: 'string' },
			pdErrCode: { entity: 'string' },
			lcdStatus: { entity: 'string' },
			midWindSpeedCnt: { entity: 'string' },
			lowWindSpeedCnt: { entity: 'string' },
			dmPowerSupplyCnt: { entity: 'string' },
			CompressorTempCnt: { entity: 'string' },
			envTempRangeCnt: { entity: 'array' },
			dp2PowerSupplyCnt: { entity: 'string' },
			hotSleepCnt: { entity: 'string' },
			hotNormalCnt: { entity: 'string' },
			coolMaxCnt: { entity: 'string' },
			frontInTempErrCnt: { entity: 'string' },
			coolNormalCnt: { entity: 'string' },
			powerOffCounts: { entity: 'string' },
			errPowerCommCnt: { entity: 'string' },
			backPipeTempErrCnt: { entity: 'string' },
			dpPowerSupplyCnt: { entity: 'string' },
			powerOnCounts: { entity: 'string' },
			hotEcoCnt: { entity: 'string' },
			errAllCnt: { entity: 'string' },
			frontPipeTempErrCnt: { entity: 'string' },
			highWindSpeedCnt: { entity: 'string' },
			errMotorCommCnt: { entity: 'string' },
			hotMaxCnt: { entity: 'string' },
			batPowerSupplyCnt: { entity: 'string' },
			errWifiCommCnt: { entity: 'string' },
			windCnt: { entity: 'string' },
			frontOutTempErrCnt: { entity: 'string' },
			coolSleepCnt: { entity: 'string' },
			frontBarTempErrCnt: { entity: 'string' },
			psdrCnt: { entity: 'string' },
			coolEcoCnt: { entity: 'string' },
			bmsBoundFlag: { entity: 'diagnostic' },
			runSts: { entity: 'diagnostic' },
			rlySts: { entity: 'diagnostic' },
			timeEn: { entity: 'diagnostic' },
			setFanVal: { entity: 'diagnostic' },
			bmsUnderVoltage: { entity: 'diagnostic' },
			waterValue: { entity: 'diagnostic' },
			mpptWork: { entity: 'diagnostic' },
			refEn: { entity: 'diagnostic' },
			pdMainMode: { entity: 'diagnostic' },
			powerSrc: { entity: 'diagnostic' },
			subMode: { entity: 'diagnostic' },
			fanSts: { entity: 'diagnostic' },
			errCode: { entity: 'diagnostic' },
			pdResv: { entity: 'icon' },
			resv: { entity: 'icon' },
			reserved: { entity: 'icon' }
		},
		power: {
			acFreq: { entity: 'number' },
			batVolt: { entity: 'number' },
			acWattsRange0Time: { entity: 'number' },
			mpptVolRange0Time: { entity: 'number' },
			batCurr: { entity: 'number' },
			acWattsRange4Time: { entity: 'number' },
			fanSts: { entity: 'number' },
			mpptVolRange3Time: { entity: 'number' },
			batPwrOut: { entity: 'number' },
			mpptVolRange1Time: { entity: 'number' },
			acWattsRange1Time: { entity: 'number' },
			acVoltRms: { entity: 'number' },
			mpptWattsRange0Time: { entity: 'number' },
			busVol: { entity: 'number' },
			acPwrIn: { entity: 'number' },
			acWattsRange5Time: { entity: 'number' },
			mpptCur: { entity: 'number' },
			mpptVolRange2Time: { entity: 'number' },
			mpptWattsRange1Time: { entity: 'number' },
			acCurrRms: { entity: 'number' },
			llcCurr: { entity: 'number' },
			busVolt: { entity: 'number' },
			acWattsRange2Time: { entity: 'number' },
			tempNtc: { entity: 'number' },
			tempMax: { entity: 'number' },
			tempMin: { entity: 'number' },
			mpptVol: { entity: 'number' },
			mpptWattsRange2Time: { entity: 'number' },
			mpptPwr: { entity: 'number' },
			mpptVolRange4Time: { entity: 'number' },
			acWattsRange3Time: { entity: 'number' },
			mpptLockFlag: { entity: 'string' },
			errCode: { entity: 'string' },
			errLock: { entity: 'string' },
			mpptSts: { entity: 'string' },
			pfcOcpS: { entity: 'string' },
			acPowerSupplyCnt: { entity: 'string' },
			pvOcpHw: { entity: 'string' },
			carPowerSupplyCnt: { entity: 'string' },
			pvPowerSupplyCnt: { entity: 'string' },
			llcOcpInt: { entity: 'string' },
			psdrCnt: { entity: 'string' },
			runSts: { entity: 'diagnostic' },
			mpptWork: { entity: 'diagnostic' },
			rlySts: { entity: 'diagnostic' },
			powerResv: { entity: 'icon' },
			resv: { entity: 'icon' },
			busCurr: { entity: 'string' }
		},
		motor: {
			power: { entity: 'number' },
			motorFsmState: { entity: 'number' },
			windTime: { entity: 'number' },
			vBus: { entity: 'number' },
			mosTemp: { entity: 'number' },
			frontFanWorkTime: { entity: 'number' },
			compressorWorkTime: { entity: 'number' },
			coolSleepTime: { entity: 'number' },
			setCondFanRpm: { entity: 'number' },
			setEvapFanRpm: { entity: 'number' },
			drainageTime: { entity: 'number' },
			hotNormalTime: { entity: 'number' },
			hotSleepTime: { entity: 'number' },
			evapFanRpm: { entity: 'number' },
			fourWayWorkTime: { entity: 'number' },
			mtrLogicErr: { entity: 'number' },
			coolMaxTime: { entity: 'number' },
			setWaterRpm: { entity: 'number' },
			hotEcoTime: { entity: 'number' },
			hotMaxTime: { entity: 'number' },
			backFanWorkTime: { entity: 'number' },
			condeFanRpm: { entity: 'number' },
			setCompressorRpm: { entity: 'number' },
			waterPumpWorkTime: { entity: 'number' },
			coolEcoTime: { entity: 'number' },
			coolNormalTime: { entity: 'number' },
			threeWayState: { entity: 'diagnostic' },
			hpProtFlg: { entity: 'string' },
			serveFsmState: { entity: 'string' },
			ecoStopFlag: { entity: 'string' },
			setEleExpansStep: { entity: 'string' },
			errCode: { entity: 'string' },
			focId: { entity: 'string' },
			protFlag: { entity: 'string' },
			compressorRpm: { entity: 'string' },
			fourWayState: { entity: 'string' },
			commcAck: { entity: 'string' },
			serveCtrlErr: { entity: 'string' },
			v24: { entity: 'string' },
			fourWaySwitchCnt: { entity: 'string' },
			drainageCnt: { entity: 'string' },
			frontFanBlockCnt: { entity: 'string' },
			pMtrCnt: { entity: 'string' },
			backFanBlockCnt: { entity: 'string' },
			waterValue: { entity: 'diagnostic' },
			motorResv: { entity: 'icon' },
			resv: { entity: 'icon' }
		},
		bmsMaster: {
			bmsDisplayTime: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			bmsSoc: { entity: 'number' },
			remainCap: { entity: 'number' },
			bmsCur: { entity: 'number' },
			maxCellTemp: { entity: 'number' },
			minCellVol: { entity: 'number' },
			bmsReqVol: { entity: 'number' },
			bmsDsgTime: { entity: 'number' },
			minCellTemp: { entity: 'number' },
			bmsVol: { entity: 'number' },
			bmsReqCur: { entity: 'number' },
			bmsChgTime: { entity: 'number' },
			bmsMinDsgSoc: { entity: 'number' },
			bmsMaxChgSoc: { entity: 'number' },
			bmsBatErrCode: { entity: 'string' },
			chgWattRangeTime: { entity: 'array' },
			bmsHwFlag: { entity: 'string' },
			bmsSwFlag: { entity: 'string' },
			sleepCnt: { entity: 'string' },
			xt150AccessCnt: { entity: 'string' },
			awakeCnt: { entity: 'string' },
			powerOnCnt: { entity: 'string' },
			powerOffCnt: { entity: 'string' },
			bmsType: { entity: 'diagnostic' },
			bmsChgDsgSts: { entity: 'diagnostic' },
			dsgWattRangeTime: { entity: 'array' },
			usbWattRangeTime: { entity: 'array' },
			typecWattRangeTime: { entity: 'array' },
			usbUseCnt: { entity: 'string' },
			typecUseCnt: { entity: 'string' },
			bmsResv: { entity: 'icon' },
			resv: { entity: 'icon' },
			cellTemp: { entity: 'array' },
			bmsFault: { entity: 'string' },
			bqStatReg: { entity: 'string' },
			cellVol: { entity: 'array' },
			maxMosTmp: { entity: 'number' },
			cellId: { entity: 'diagnostic' },
			maxCellTmp: { entity: 'number' },
			outWatts: { entity: 'number' },
			minCellTmp: { entity: 'number' },
			soh: { entity: 'string' },
			num: { entity: 'string' },
			soc: { entity: 'number' },
			ver: { entity: 'string' },
			remainTime: { entity: 'number' },
			amp: { entity: 'number' },
			type: { entity: 'diagnostic' },
			openBmsIdx: { entity: 'string' },
			tmp: { entity: 'number' },
			balanceState: { entity: 'diagnostic' },
			err: { entity: 'string' },
			inWatts: { entity: 'number' },
			designCap: { entity: 'number' },
			f32ShowSoc: { entity: 'number' },
			minMosTmp: { entity: 'number' },
			maxVolDiff: { entity: 'number' },
			mosState: { entity: 'diagnostic' },
			fullCap: { entity: 'number' },
			vol: { entity: 'number' },
			tagChgAmp: { entity: 'number' },
			cycles: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	glacier: {
		pd: {
			exhaustTmp: { entity: 'number' },
			tempCoolTime: { entity: 'array' },
			batTime: { entity: 'number' },
			appSensorAdv: { entity: 'array' },
			errorTimePower: { entity: 'array' },
			tempWater: { entity: 'number' },
			A12Val: { entity: 'number' },
			tempIceTime: { entity: 'array' },
			motorCur: { entity: 'number' },
			networkTypeTime: { entity: 'array' },
			powerXt60Time: { entity: 'array' },
			tmpMSet: { entity: 'level' },
			tmpM: { entity: 'number' },
			icePercent: { entity: 'number' },
			powerBatInTime: { entity: 'number' },
			ambientTmp: { entity: 'number' },
			coolZoneSingleTime: { entity: 'number' },
			chargeXt60Time: { entity: 'array' },
			errorTimeBms: { entity: 'array' },
			tmpAver: { entity: 'number' },
			appOpTimeBlTime: { entity: 'array' },
			tmpRSet: { entity: 'level' },
			batPct: { entity: 'number' },
			errorTimePd: { entity: 'array' },
			iceTmTag: { entity: 'number' },
			coolCoverTime: { entity: 'number' },
			powerBatOutTime: { entity: 'number' },
			chargeWorkTime: { entity: 'number' },
			workFsmTime: { entity: 'array' },
			motorVol: { entity: 'number' },
			workModeTime: { entity: 'array' },
			coolZoneDoubleTime: { entity: 'number' },
			tempAmbientTime: { entity: 'array' },
			tempCoolSetTime: { entity: 'array' },
			tmpLSet: { entity: 'level' },
			motorSpeed: { entity: 'number' },
			motorWat: { entity: 'number' },
			errBms: { entity: 'string' },
			errPd: { entity: 'string' },
			errBldc: { entity: 'string' },
			emsChgFlg: { entity: 'string' },
			errLcd: { entity: 'string' },
			threeWayState: { entity: 'string' },
			flagTwoZone: { entity: 'string' },
			errCode: { entity: 'string' },
			errPwr: { entity: 'string' },
			coolZoneDoubleCount: { entity: 'string' },
			buttonLong: { entity: 'array' },
			coolCoverCount: { entity: 'string' },
			networkTypeCount: { entity: 'array' },
			powerXt60Count: { entity: 'array' },
			errorCountPower: { entity: 'array' },
			appOpCountDeIce: { entity: 'string' },
			dntMakeIceDevice: { entity: 'string' },
			appOpCountBeepOff: { entity: 'string' },
			appOpCountPowerOn: { entity: 'string' },
			countinueMakeIceMax: { entity: 'string' },
			workFsmCount: { entity: 'array' },
			appOpCountPowerOff: { entity: 'string' },
			appOpCountDntMakeIce: { entity: 'string' },
			powerBatInCount: { entity: 'string' },
			errorCountBldc: { entity: 'array' },
			workModeCount: { entity: 'array' },
			errorCountBms: { entity: 'array' },
			chargeXt60Count: { entity: 'array' },
			makeIceCount: { entity: 'string' },
			appOpCountWorkMode: { entity: 'array' },
			chargeWorkCount: { entity: 'string' },
			appOpCountBlTime: { entity: 'array' },
			coolZoneSingleCount: { entity: 'string' },
			errorCountPd: { entity: 'array' },
			buttonShort: { entity: 'array' },
			countinueMakeIceAve: { entity: 'string' },
			appOpCountTempUnitC: { entity: 'string' },
			appOpCountTempUnitF: { entity: 'string' },
			appOpCountBeepOn: { entity: 'string' },
			iceTm: { entity: 'number' },
			powerPbLevel: { entity: 'level' },
			tmpR: { entity: 'number' },
			tmpL: { entity: 'number' },
			blTime: { entity: 'level' },
			iceMkMode: { entity: 'diagnostic' },
			iceMode: { entity: 'switch' },
			iceShape: { entity: 'switch' },
			iceDetach: { entity: 'switch' },
			fsmState: { entity: 'diagnostic' },
			motorWait: { entity: 'diagnostic' },
			pwrState: { entity: 'diagnostic' },
			bldcDntWork: { entity: 'diagnostic' },
			waterLine: { entity: 'diagnostic' },
			flagAmbintReady: { entity: 'diagnostic' },
			batFlag: { entity: 'diagnostic' },
			xt150InState: { entity: 'diagnostic' },
			doorStat: { entity: 'diagnostic' },
			runState: { entity: 'diagnostic' },
			chgType: { entity: 'diagnostic' },
			sensor: { entity: 'diagnostic' },
			xt60InState: { entity: 'diagnostic' },
			iceAlert: { entity: 'diagnostic' },
			carBatLow: { entity: 'diagnostic' },
			bmsInFlag: { entity: 'diagnostic' },
			bldcDntIce: { entity: 'diagnostic' },
			warnInfo: { entity: 'diagnostic' },
			fanLvl: { entity: 'diagnostic' },
			coolMode: { entity: 'switch' },
			sensorAdv: { entity: 'switch' },
			beepEn: { entity: 'switch' },
			pwrPbEn: { entity: 'switch' },
			tmpUnit: { entity: 'switch' },
			err: { entity: 'string' },
			// new
			deiceAct: { entity: 'diagnostic' },
			appOpCountMakeIce: { entity: 'string' },
			errorTimeBldc: { entity: 'array' },
			resvP: { entity: 'icon' },
			resvD: { entity: 'icon' },
			resvB: { entity: 'icon' }
		},
		bmsMaster: {
			designCap: { entity: 'number' },
			f32ShowSoc: { entity: 'number' },
			minMosTmp: { entity: 'number' },
			vol: { entity: 'number' },
			fullCap: { entity: 'number' },
			remainCap: { entity: 'number' },
			tmp: { entity: 'number' },
			outWatts: { entity: 'number' },
			cycles: { entity: 'number' },
			minCellVol: { entity: 'number' },
			maxCellVol: { entity: 'number' },
			maxMosTmp: { entity: 'number' },
			inWatts: { entity: 'number' },
			soc: { entity: 'number' },
			tagChgAmp: { entity: 'number' },
			minCellTmp: { entity: 'number' },
			maxCellTmp: { entity: 'number' },
			remainTime: { entity: 'number' },
			amp: { entity: 'number' },
			bmsFault: { entity: 'string' },
			num: { entity: 'string' },
			err: { entity: 'string' },
			bqStatReg: { entity: 'string' },
			ver: { entity: 'string' },
			soh: { entity: 'string' },
			type: { entity: 'diagnostic' },
			cellId: { entity: 'diagnostic' },
			openBmsIdx: { entity: 'diagnostic' }
		},
		ems: {
			closeOilEbSocMax: { entity: 'number' },
			chgVol: { entity: 'number' },
			dsgRemain: { entity: 'number' },
			maxAvailNum: { entity: 'number' },
			paraVolMax: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			lcdSoc: { entity: 'number' },
			chgRemain: { entity: 'number' },
			openOilEbSocMin: { entity: 'number' },
			minDsgSoc: { entity: 'number' },
			maxChgSoc: { entity: 'number' },
			bmsIsConnt: { entity: 'array' },
			openBmsIdx: { entity: 'string' },
			warnState: { entity: 'diagnostic' },
			upsFlag: { entity: 'string' },
			bmsModel: { entity: 'string' },
			dsgCmd: { entity: 'diagnostic' },
			emsFlag: { entity: 'diagnostic' },
			chgCmd: { entity: 'diagnostic' },
			fanLvl: { entity: 'diagnostic' },
			//new
			f32LcdSoc: { entity: 'number' },
			chgState: { entity: 'diagnostic' },
			chgAmp: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	generator: {
		oil: {
			oilVal: { entity: 'number' },
			acPower: { entity: 'number' },
			acState: { entity: 'diagnostic' }, //switch
			num: { entity: 'string' },
			sysMode: { entity: 'diagnostic' }, //switch
			type: { entity: 'string' },
			totalPower: { entity: 'number' },
			version: { entity: 'string' },
			remainTime: { entity: 'number' },
			dcPower: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			ceelId: { entity: 'string' }, //Steckertyp?
			dcOutState: { entity: 'diagnostic' },
			motorState: { entity: 'diagnostic' }, //switch
			oilMaxOutPower: { entity: 'number' },
			motorUseTime: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	shelly3em: {
		emeters: {
			currentL1: { entity: 'number' },
			currentL2: { entity: 'number' },
			currentL3: { entity: 'number' },
			voltageL1: { entity: 'number' },
			voltageL2: { entity: 'number' },
			voltageL3: { entity: 'number' },
			powerL1: { entity: 'number' },
			powerL2: { entity: 'number' },
			powerL3: { entity: 'number' },
			pfL1: { entity: 'number' },
			pfL2: { entity: 'number' },
			pfL3: { entity: 'number' },
			totalL1: { entity: 'number' },
			totalL2: { entity: 'number' },
			totalL3: { entity: 'number' },
			total_returnedL1: { entity: 'number' },
			total_returnedL2: { entity: 'number' },
			total_returnedL3: { entity: 'number' },
			total_power: { entity: 'number' }
		},
		communication: {
			cloud_connected: { entity: 'diagnostic' },
			cloud_enabled: { entity: 'diagnostic' },
			mqtt_connected: { entity: 'diagnostic' },
			wifi_sta_connected: { entity: 'diagnostic' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	delta3: {
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	delta3plus: {
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	},
	deltapro3: {
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			msgCount: { entity: 'number' },
			status: { entity: 'diagnostic' }
		}
	}
};

const pstationRanges = {
	deltamini: {
		inv: {
			number: {
				cfgFastChgWatts: { min: 200, max: 900 }
			},
			level: {
				cfgSlowChgWatts: { min: 200, max: 800 },
				cfgStandbyMin: {
					max: 1440,
					select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr'],
					select_obj: {
						Never: 0,
						'30 min': 30,
						'1 hr': 60,
						'2 hr': 120,
						'4 hr': 240,
						'6 hr': 360,
						'12 hr': 720,
						'24 hr': 1440
					},
					states: {
						0: 'Never',
						30: '30 min',
						60: '1 hr',
						120: '2 hr',
						240: '4 hr',
						360: '6 hr',
						720: '12 hr',
						1440: '24 hr'
					},
					name: 'AC standby time /min 0 Never standby 1440 Default value'
				}
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 4, max: 8 }
			},
			number: {
				inVol: { max: 75 },
				carOutVol: { max: 15 }
			}
		}
	},
	delta: {
		inv: {
			number: {
				cfgFastChgWatts: { min: 200, max: 1200 }
			},
			level: {
				cfgSlowChgWatts: { min: 200, max: 700 }
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 4, max: 8 }
			},
			number: {
				carOutVol: { max: 15 },
				inVol: { max: 65 }
			}
		}
	},
	deltamax: {
		inv: {
			number: {
				cfgFastChgWatts: { min: 200, max: 2200 }
			},
			level: {
				cfgSlowChgWatts: { min: 200, max: 2000 }
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 4, max: 8 }
			},
			number: {
				carOutVol: { max: 15 },
				inWatts: { max: 800 },
				outWatts: { max: 800 },
				inVol: { max: 100 }
			}
		}
	},
	deltapro: {
		bmsMaster: {
			number: {
				amp: { max: 50 }
			}
		},
		inv: {
			number: {
				cfgFastChgWatts: { min: 200, max: 2900 }
			},
			level: {
				cfgSlowChgWatts: { min: 200, max: 2900 }
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 4, max: 13 }
			},
			number: {
				inWatts: { mult: 0.1, max: 1650 },
				outWatts: { mult: 0.1, max: 1600 },
				inVol: { max: 150 },
				mpptTemp: { max: 120 },
				outAmp: { max: 31 },
				inAmp: { max: 16 }
			},
			diagnostic: {
				xt60ChgType: {
					xt60ChgType: { '0': 'not detected', '1': 'adapter', '2': 'MPPT' }
				}
			}
		}
	},
	delta2: {
		mppt: {
			level: {
				cfgChgWatts: { min: 50, max: 1200 }
			},
			number: {
				inVol: { mult: 0.001, max: 60 },
				inAmp: { mult: 0.001 },
				outVol: { mult: 0.001 },
				outAmp: { mult: 0.001 },
				carOutAmp: { mult: 0.001 },
				carOutVol: { mult: 0.001, max: 15 },
				inWatts: { mult: 1, max: 550 },
				outWatts: { mult: 1 }
			}
		}
	},
	delta2max: {
		inv: {
			level: {
				SlowChgWatts: { min: 200, max: 2400 }
			}
		},
		mppt: {
			number: {
				inVol: { mult: 0.001, max: 60 },
				inAmp: { mult: 0.001 },
				outAmp: { mult: 0.001 },
				outVol: { mult: 0.001 },
				carOutAmp: { mult: 0.001 },
				carOutVol: { mult: 0.001, max: 15 },
				inWatts: { mult: 1, max: 900 },
				pv2InVol: { mult: 0.001 },
				pv2InAmp: { mult: 0.001 },
				pv2InWatts: { mult: 1 },
				outWatts: { mult: 1 }
			}
		},
		pd: {
			number: {
				dsgPowerAC: { mult: 0.001 },
				chgPowerAC: { mult: 0.001 }
			}
		}
	},
	river2pro: {
		mppt: {
			level: {
				cfgChgWatts: { min: 100, max: 940 },
				acStandbyMins: { max: 720 }
			},
			number: {
				inVol: { mult: 0.001, max: 55 },
				inAmp: { mult: 0.001 },
				outVol: { mult: 0.001 },
				outAmp: { mult: 0.001 },
				carOutAmp: { mult: 0.001 },
				carOutVol: { mult: 0.001, max: 15 },
				inWatts: { mult: 1, max: 230 },
				outWatts: { mult: 1 }
			}
		}
	},
	riverpro: {
		pd: {
			number: {
				wattsInSum: { max: 660 }
			}
		}
	},
	river2max: {
		mppt: {
			level: {
				cfgChgWatts: { min: 50, max: 660 },
				acStandbyMins: { max: 720 }
			},
			number: {
				inVol: { mult: 0.001, max: 50 },
				inAmp: { mult: 0.001 },
				outVol: { mult: 0.001 },
				outAmp: { mult: 0.001 },
				carOutAmp: { mult: 0.001 },
				carOutVol: { mult: 0.001, max: 15 },
				inWatts: { mult: 1 },
				outWatts: { mult: 1 }
			}
		}
	},
	rivermax: {
		pd: {
			number: {
				wattsInSum: { max: 500 }
			}
		}
	},
	wave2: {
		bmsMaster: {
			number: {
				remainCap: { max: 40000 }
			}
		}
	},
	glacier: {
		bmsMaster: {
			number: {
				designCap: { max: 13800 },
				remainCap: { max: 13800 },
				fullCap: { max: 13800 }
			}
		}
	},
	river2: {
		mppt: {
			level: {
				cfgChgWatts: { min: 100, max: 360 }
			}
		}
	},
	generator: {
		oil: {
			number: {
				totalPower: { max: 1900 }
			}
		}
	},
	shelly3em: {
		emeters: {
			number: {
				currentL1: { max: 100 },
				currentL2: { max: 100 },
				currentL3: { max: 100 }
			}
		}
	}
};

const pstationCmd = {
	deltamini: {
		ems: {
			maxChargeSoc: {
				valName: 'maxChgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38461351',
					lang: 'en-us',
					params: { id: 49, maxChgSoc: 95 },
					version: '1.0'
				}
			},
			minDsgSoc: {
				valName: 'minDsgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38454960',
					lang: 'en-us',
					params: { id: 51, minDsgSoc: 25 },
					version: '1.0'
				}
			}
		},
		inv: {
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '554272649',
					lang: 'en-us',
					params: { id: 66, enabled: 1 },
					version: '1.0'
				}
			},
			cfgAcWorkMode: {},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '602507362',
					lang: 'en-us',
					params: { id: 66, xboost: 1 },
					version: '1.0'
				}
			},
			cfgFastChgWatts: {},
			//cfgFastChgWatts: {valName:'enabled',"moduleType": 5,msg:{ "operateType": "acChgCfg", "params": {"chgWatts": "VALUE", "chgPauseFlag": 255}}},
			cfgSlowChgWatts: {
				valName: 'slowChgPower',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '747329085',
					lang: 'en-us',
					params: { id: 69, slowChgPower: 300 },
					version: '1.0'
				}
			},
			cfgStandbyMin: {
				valName: 'standByMins',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '153750799',
					lang: 'en-us',
					params: { id: 153, standByMins: 360 },
					version: '1.0'
				}
			}
		},
		mppt: {
			carState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '639503104',
					lang: 'en-us',
					params: { id: 81, enabled: 1 },
					version: '1.0'
				}
			},
			cfgDcChgCurrent: {
				valName: 'currMa',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '787426012',
					lang: 'en-us',
					params: { id: 71, currMa: 6000 },
					version: '1.0'
				}
			}
		},
		pd: {
			beepState: {
				valName: 'enabled',
				moduleType: 5, //wirklich 5?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 38, enabled: 1 },
					version: '1.0'
				}
			},
			dcOutState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '689699572',
					lang: 'en-us',
					params: { id: 34, enabled: 1 },
					version: '1.0'
				}
			},
			lcdOffSec: {
				valName: 'lcdTime',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '93980337',
					lang: 'en-us',
					params: { id: 39, lcdTime: 1800 },
					version: '1.0'
				}
			},
			standByMode: {
				valName: 'standByMode',
				moduleType: 0, //wirklich 0?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '119032574',
					lang: 'en-us',
					params: { id: 33, standByMode: 360 },
					version: '1.0'
				}
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			},
			getAllTaskCfg: {
				valName: '',
				msg: {
					from: 'iOS',
					operateType: 'getAllTaskCfg',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	delta: {
		ems: {
			maxChargeSoc: {
				valName: 'maxChgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38461351',
					lang: 'en-us',
					params: { id: 49, maxChgSoc: 95 },
					version: '1.0'
				}
			},
			minDsgSoc: {
				valName: 'minDsgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38454960',
					lang: 'en-us',
					params: { id: 51, minDsgSoc: 25 },
					version: '1.0'
				}
			},
			maxCloseOilEbSoc: {
				valName: 'closeOilSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '878673259',
					lang: 'en-us',
					params: { id: 53, closeOilSoc: 84 },
					version: '1.0'
				}
			},
			minOpenOilEbSoc: {
				valName: 'openOilSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '878666957',
					lang: 'en-us',
					params: { id: 52, openOilSoc: 0 },
					version: '1.0'
				}
			}
		},
		inv: {
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '554272649',
					lang: 'en-us',
					params: { id: 66, enabled: 1 },
					version: '1.0'
				}
			},
			cfgAcWorkMode: {},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '602507362',
					lang: 'en-us',
					params: { id: 66, xboost: 1 },
					version: '1.0'
				}
			},
			cfgFastChgWatts: {},
			//cfgFastChgWatts: {valName:'enabled',"moduleType": 5,msg:{ "operateType": "acChgCfg", "params": {"chgWatts": "VALUE", "chgPauseFlag": 255}}},
			cfgSlowChgWatts: {
				valName: 'slowChgPower',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '747329085',
					lang: 'en-us',
					params: { id: 69, slowChgPower: 300 },
					version: '1.0'
				}
			},
			cfgStandbyMin: {
				valName: 'standByMins',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '153750799',
					lang: 'en-us',
					params: { id: 153, standByMins: 360 },
					version: '1.0'
				}
			}
		},
		mppt: {
			carState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '639503104',
					lang: 'en-us',
					params: { id: 81, enabled: 1 },
					version: '1.0'
				}
			},
			cfgDcChgCurrent: {
				valName: 'currMa',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '787426012',
					lang: 'en-us',
					params: { id: 71, currMa: 6000 },
					version: '1.0'
				}
			}
		},
		pd: {
			beepState: {
				valName: 'enabled',
				moduleType: 5, //wirklich 5?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 38, enabled: 1 },
					version: '1.0'
				}
			},
			dcOutState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '689699572',
					lang: 'en-us',
					params: { id: 34, enabled: 1 },
					version: '1.0'
				}
			},
			lcdOffSec: {
				valName: 'lcdTime',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '93980337',
					lang: 'en-us',
					params: { id: 39, lcdTime: 1800 },
					version: '1.0'
				}
			},
			standByMode: {
				valName: 'standByMode',
				moduleType: 0, //wirklich 0?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '119032574',
					lang: 'en-us',
					params: { id: 33, standByMode: 360 },
					version: '1.0'
				}
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			},
			getAllTaskCfg: {
				msg: {
					from: 'iOS',
					operateType: 'getAllTaskCfg',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	deltamax: {
		ems: {
			maxChargeSoc: {
				valName: 'maxChgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38461351',
					lang: 'en-us',
					params: { id: 49, maxChgSoc: 95 },
					version: '1.0'
				}
			},
			maxCloseOilEbSoc: {
				valName: 'closeOilSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '878673259',
					lang: 'en-us',
					params: { id: 53, closeOilSoc: 84 },
					version: '1.0'
				}
			},
			minDsgSoc: {
				valName: 'minDsgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38454960',
					lang: 'en-us',
					params: { id: 51, minDsgSoc: 25 },
					version: '1.0'
				}
			},
			minOpenOilEbSoc: {
				valName: 'openOilSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '878666957',
					lang: 'en-us',
					params: { id: 52, openOilSoc: 0 },
					version: '1.0'
				}
			}
		},
		inv: {
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '554272649',
					lang: 'en-us',
					params: { id: 66, enabled: 1 },
					version: '1.0'
				}
			},
			cfgAcWorkMode: {},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '602507362',
					lang: 'en-us',
					params: { id: 66, xboost: 1 },
					version: '1.0'
				}
			},
			cfgFastChgWatts: {},
			//cfgFastChgWatts: {valName:'enabled',"moduleType": 5,msg:{ "operateType": "acChgCfg", "params": {"chgWatts": "VALUE", "chgPauseFlag": 255}}},
			cfgSlowChgWatts: {
				valName: 'slowChgPower',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '747329085',
					lang: 'en-us',
					params: { id: 69, slowChgPower: 300 },
					version: '1.0'
				}
			},
			chgPauseFlag: {
				valName: 'chgPause',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '747329085',
					lang: 'en-us',
					params: { id: 69, chgPause: 1 },
					version: '1.0'
				}
			},
			cfgStandbyMin: {
				valName: 'standByMins',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '153750799',
					lang: 'en-us',
					params: { id: 153, standByMins: 360 },
					version: '1.0'
				}
			}
		},
		mppt: {
			carState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '639503104',
					lang: 'en-us',
					params: { id: 81, enabled: 1 },
					version: '1.0'
				}
			},
			cfgDcChgCurrent: {
				valName: 'currMa',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '787426012',
					lang: 'en-us',
					params: { id: 71, currMa: 6000 },
					version: '1.0'
				}
			}
		},
		pd: {
			beepState: {
				valName: 'enabled',
				moduleType: 5, //wirklich 5?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 38, enabled: 1 },
					version: '1.0'
				}
			},
			dcOutState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '689699572',
					lang: 'en-us',
					params: { id: 34, enabled: 1 },
					version: '1.0'
				}
			},
			lcdOffSec: {
				valName: 'lcdTime',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '93980337',
					lang: 'en-us',
					params: { id: 39, lcdTime: 1800 },
					version: '1.0'
				}
			},
			standByMode: {
				valName: 'standByMode',
				moduleType: 0, //wirklich 0?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '119032574',
					lang: 'en-us',
					params: { id: 33, standByMode: 360 },
					version: '1.0'
				}
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			},
			getAllTaskCfg: {
				msg: {
					from: 'iOS',
					operateType: 'getAllTaskCfg',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	deltapro: {
		mppt: {
			carState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '639503104',
					lang: 'en-us',
					params: { id: 81, enabled: 1 },
					version: '1.0'
				}
			},
			cfgDcChgCurrent: {
				valName: 'currMa',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '787426012',
					lang: 'en-us',
					params: { id: 71, currMa: 6000 },
					version: '1.0'
				}
			},
			//PV charging type
			cfgChgType: {
				valName: 'chgType',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '787426012',
					lang: 'en-us',
					params: { id: 82, chgType: 1 },
					version: '1.0'
				}
			}
		},
		pd: {
			beepState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 38, enabled: 1 },
					version: '1.0'
				}
			},
			dcOutState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '689699572',
					lang: 'en-us',
					params: { id: 34, enabled: 1 },
					version: '1.0'
				}
			},
			acautooutConfig: {
				valName: 'acautooutConfig',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 95, acautooutConfig: 1 },
					version: '1.0'
				}
			},
			/*
				bpPowerSoc: {
					valName: 'isConfig',
					moduleType: 0,
					msg:{
						from: 'Android', 
						operateType: "TCP", 				
						id: '834553333',
						lang: 'en-us',
						"params": {"id": 94, "isConfig": 1, "bpPowerSoc": 0, "minDsgSoc": 0, "maxChgSoc": 0},
						version: '1.0'}
				}
				*/
			bppowerSoc: {
				valName: 'bpPowerSoc',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 94, isConfig: 1, bpPowerSoc: 0, minDsgSoc: 20, maxChgSoc: 100 },
					version: '1.0'
				}
			},
			lcdOffSec: {
				valName: 'lcdTime',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '93980337',
					lang: 'en-us',
					params: { id: 39, lcdTime: 1800 },
					version: '1.0'
				}
			},
			standByMode: {
				valName: 'standByMode',
				moduleType: 0, //wirklich 0?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '119032574',
					lang: 'en-us',
					params: { id: 33, standByMode: 360 },
					version: '1.0'
				}
			}
		},
		inv: {
			cfgAcWorkMode: {},
			cfgFastChgWatts: {},
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '554272649',
					lang: 'en-us',
					params: { id: 66, enabled: 1 },
					version: '1.0'
				}
			},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '602507362',
					lang: 'en-us',
					params: { id: 66, xboost: 1 },
					version: '1.0'
				}
			},
			cfgStandbyMin: {
				valName: 'standByMins',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '153750799',
					lang: 'en-us',
					params: { id: 153, standByMins: 360 },
					version: '1.0'
				}
			},
			cfgSlowChgWatts: {
				valName: 'slowChgPower',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '747329085',
					lang: 'en-us',
					params: { id: 69, slowChgPower: 300 },
					version: '1.0'
				}
			},
			acPassbyAutoEn: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '602507362',
					lang: 'en-us',
					params: { id: 84, enabled: 1 },
					version: '1.0'
				}
			}
		},
		ems: {
			maxChargeSoc: {
				valName: 'maxChgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38461351',
					lang: 'en-us',
					params: { id: 49, maxChgSoc: 95 },
					version: '1.0'
				}
			},
			maxCloseOilEbSoc: {
				valName: 'closeOilSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '878673259',
					lang: 'en-us',
					params: { id: 53, closeOilSoc: 84 },
					version: '1.0'
				}
			},
			minDsgSoc: {
				valName: 'minDsgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38454960',
					lang: 'en-us',
					params: { id: 51, minDsgSoc: 25 },
					version: '1.0'
				}
			},
			minOpenOilEbSoc: {
				valName: 'openOilSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '878666957',
					lang: 'en-us',
					params: { id: 52, openOilSoc: 0 },
					version: '1.0'
				}
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			},
			getAllTaskCfg: {
				msg: {
					from: 'iOS',
					operateType: 'getAllTaskCfg',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	delta2: {
		mppt: {
			beepState: { valName: 'enabled', moduleType: 5, operateType: 'quietMode', params: { enabled: 1 } },
			/*
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 5,
				operateType: 'acOutCfg',
				params: { enabled: 1, out_voltage: -1, out_freq: 255, xboost: 255 }
			},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 5,
				operateType: 'acOutCfg',
				params: { enabled: 255, out_voltage: -1, out_freq: 255, xboost: 1 }
			},
			*/
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 5,
				operateType: 'acOutCfg',
				params: { enabled: 1 }
			},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 5,
				operateType: 'acOutCfg',
				params: { xboost: 1 }
			},
			//AC charging settings(chgPauseFlag: 0: AC charging in normal operation, 1: AC charging paused (not saved, restored by plugging))
			cfgChgWatts: {
				valName: 'chgWatts',
				moduleType: 5,
				operateType: 'acChgCfg',
				params: { chgWatts: 200, chgPauseFlag: 255 }
			},

			dcChgCurrent: { valName: 'dcChgCfg', moduleType: 5, operateType: 'dcChgCfg', params: { dcChgCfg: 8000 } },

			acStandbyMins: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'standbyTime',
				params: { standbyMins: 720 }
			},

			carStandbyMin: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'carStandby',
				params: { standbyMins: 720 }
			},
			carState: { valName: 'enabled', moduleType: 5, operateType: 'mpptCar', params: { enabled: 1 } }
		},
		pd: {
			dcOutState: { valName: 'enabled', moduleType: 1, operateType: 'dcOutCfg', params: { enabled: 1 } },
			// Set AC always on (acAutoOutConfig: 0: disabled; 1: enabled; minAcOutSoc: minimum SoC for turning on "AC always on" )
			acAutoOutConfig: {
				valName: 'acAutoOutConfig',
				moduleType: 1,
				operateType: 'acAutoOutConfig',
				params: { acAutoOutConfig: 1, minAcOutSoc: 5 }
			}, //wert holen +5
			pvChgPrioSet: {
				valName: 'pvChangeSet',
				moduleType: 1,
				operateType: 'pvChangePrio',
				params: { pvChangeSet: 1 }
			},
			//bpPowerSoc: { valName: 'isConfig', moduleType: 1, operateType: 'watthConfig', params: { isConfig: 0 } },
			/*
			bpPowerSoc: {
				valName: 'bpPowerSoc',
				moduleType: 1,
				operateType: 'watthConfig',
				params: { isConfig: 1, bpPowerSoc: 55, minDsgSoc: 0, minChgSoc: 0 }
			},
			*/
			// Set energy management(isConfig: energy management, 0: disabled, 1: enabled; bpPowerSoc: backup reserve level; minDsgSoc: discharge limit (not in use);minChgSoc: charge limit (not in use))
			// { "id":123456789, "version":"1.0", "sn":"R331ZEB4ZEAL0528", "moduleType":1, "operateType":"watthConfig", "params":{ "isConfig":1, "bpPowerSoc":95, "minDsgSoc":40, "minChgSoc":95 } }
			bpPowerSoc: {
				valName: 'bpPowerSoc',
				moduleType: 1,
				operateType: 'watthConfig',
				params: { bpPowerSoc: 55 }
			},
			//brightness?
			lcdOffSec: {
				valName: 'delayOff',
				moduleType: 1,
				operateType: 'lcdCfg',
				params: { brighLevel: 3, delayOff: 300 }
			},
			standbyMin: {
				valName: 'standbyMin',
				moduleType: 1,
				operateType: 'standbyTime',
				params: { standbyMin: 720 }
			}
		},
		ems: {
			maxChargeSoc: { valName: 'maxChgSoc', moduleType: 2, operateType: 'upsConfig', params: { maxChgSoc: 90 } },
			minDsgSoc: { valName: 'minDsgSoc', moduleType: 2, operateType: 'dsgCfg', params: { minDsgSoc: 30 } },
			maxCloseOilEb: {
				valName: 'closeOilSoc',
				moduleType: 2,
				operateType: 'closeOilSoc',
				params: { closeOilSoc: 90 }
			},
			minOpenOilEb: {
				valName: 'openOilSoc',
				moduleType: 2,
				operateType: 'openOilSoc',
				params: { openOilSoc: 40 }
			}
		},
		action: {
			latestQuotas: {
				valName: '',
				operateType: 'latestQuotas',
				params: {}
			},
			getAllTaskCfg: {
				valName: '',
				moduleType: 1,
				operateType: 'getAllTaskCfg',
				params: {}
			}
		}
	},
	delta2max: {
		mppt: {
			carStandbyMin: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'standbyTime',
				params: { standbyMins: 720 }
			},
			carState: { valName: 'enabled', moduleType: 5, operateType: 'mpptCar', params: { enabled: 1 } },
			// 12 V DC (car charging) charging current settings(dcChgCfg: maximum DC charging current (mA), range: 4000 mA–8000 mA, default value: 8000 mA; dcChgCfg2: maximum DC charging current (mA), range: 4000 mA–8000 mA, default value: 8000 mA)
			dcChgCurrent: {
				valName: 'dcChgCfg',
				moduleType: 5,
				operateType: 'dcChgCfg',
				params: { dcChgCfg: 8000, dcChgCfg2: 8000 }
			},
			pv2DcChgCurrent: {
				valName: 'dcChgCfg2',
				moduleType: 5,
				operateType: 'dcChgCfg',
				params: { dcChgCfg: 8000, dcChgCfg2: 8000 }
			}
			// PV charging type settings(chaType: 0: auto identification, 1: MPPT, 2: adapter, other values are invalid; chaType2: 0: auto identification, 1: MPPT, 2: adapter, other values are invalid)
			// {"id": 123,"version": "1.0","sn": "R351ZFB4HF6L0030","moduleType": 5,"operateType": "chaType","params": {"chaType": 0,"chaType2": 0}}
			//cfgChgType
			//pv2CfgChgType
		},
		pd: {
			beepMode: { valName: 'enabled', moduleType: 1, operateType: 'quietCfg', params: { enabled: 1 } },
			dcOutState: { valName: 'enabled', moduleType: 1, operateType: 'dcOutCfg', params: { enabled: 1 } },
			acAutoOnCfg: { valName: 'cfg', moduleType: 1, operateType: 'acAutoOn', params: { cfg: 1 } },
			pvChgPrioSet: {
				valName: 'pvChangeSet',
				moduleType: 1,
				operateType: 'pvChangePrio',
				params: { pvChangeSet: 1 }
			},
			// AC always on(enabled: 0: disabled, 1: enabled; minAcSoc: minimum SOC for enabling the new “AC Always On” feature)
			// { "id": 123, "version": "1.0","sn": "R351ZFB4HF6L0030", "moduleType": 1, "operateType": "newAcAutoOnCfg", "params": { "enabled": 1, "minAcSoc": 21 } }
			newAcAutoOnCfg: {
				valName: 'enabled',
				moduleType: 1,
				operateType: 'newAcAutoOnCfg',
				params: { enabled: 1, minAcSoc: 5 }
			}, //wert holen +5
			// LCD screen settings(delayOff: screen timeout (s); brightLevel: brightness level, 0: off; 1: Level 1, 2: Level 2, 3: Level 3)
			// {"id": 123,"sn": "R351ZFB4HF6L0030","version": "1.0","moduleType": 1,"operateType": "lcdCfg","params": {"delayOff": 12,"brighLevel": 2}}
			lcdOffSec: {
				valName: 'delayOff',
				moduleType: 1,
				operateType: 'lcdCfg',
				params: { brighLevel: 255, delayOff: 300 }
			},

			watchIsConfig: {
				valName: 'isConfig',
				moduleType: 1,
				operateType: 'watthConfig',
				params: { isConfig: 1, bpPowerSoc: 55, minDsgSoc: 0, minChgSoc: 0 }
			},

			// Energy statistics(isConfig: energy management, 0: enabled, 1: disabled; bpPowerSoc: backup reserve level; minDsgSoc: lower limit when discharging (not in use); minChgSoc: upper limit when charging (not in use))
			// {"id": 123,"version": "1.0","sn": "R351ZFB4HF6L0030","moduleType": 1,"operateType": "watthConfig","params": {"isConfig": 0,"bpPowerSoc": 70,"minDsgSoc": 255,"minChgSoc": 255}}
			bpPowerSoc: {
				valName: 'bpPowerSoc',
				moduleType: 1,
				operateType: 'watthConfig',
				params: { isConfig: 1, bpPowerSoc: 55, minDsgSoc: 255, minChgSoc: 255 }
			},
			standbyMin: {
				valName: 'standbyMin',
				moduleType: 1,
				operateType: 'standbyTime',
				params: { standbyMin: 720 }
			}
		},
		inv: {
			// AC discharging settings(enabled: AC switch, 0: off, 1: on; xboost: X-Boost switch, 0: off, 1: on; out_voltage: output voltage, read-only; out_freq: output frequency, 1: 50 Hz, 2: 60 Hz, other values are invalid)
			// { "id":123, "version":"1.0", "sn":"R351ZFB4HF6L0030", "moduleType":3, "operateType":"acOutCfg", "params":{ "enabled":0, "xboost":0, "out_voltage":4294967295, "out_freq":2 } }

			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 3,
				operateType: 'acOutCfg',
				params: { enabled: 1 }
				//params: { enabled: 1, out_freq: 255, out_voltage: 4294967295, xboost: 255 }
			},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 3,
				operateType: 'acOutCfg',
				params: { xboost: 1 }
				//params: { xboost: 1, enabled: 255, out_freq: 255, out_voltage: 4294967295 }
			},

			/*
			xboost: {
				valName: 'xboost',
				params: { enabled: 255, out_freq: 255, out_voltage: 4294967295, xboost: 1 },
				moduleType: 3,
				operateType: 'acOutCfg'
			},
			*/
			xboost: {
				valName: 'xboost',
				params: { xboost: 1 },
				moduleType: 3,
				operateType: 'acOutCfg'
			},
			// AC charging settings(Maximum charging power for AC fast charging; slowChgWatts: maximum charging power for AC slow charging; chgPauseFlag: 0: AC charging in normal operation, 1: AC charging paused (not saved, restored by plugging))
			// { "id":123, "version":"1.0", "sn":"R351ZFB4HF6L0030", "moduleType":3, "operateType":"acChgCfg", "params":{ "fastChgWatts":2400, "slowChgWatts":400, "chgPauseFlag":0 } }

			SlowChgWatts: {
				valName: 'slowChgWatts',
				moduleType: 3,
				operateType: 'acChgCfg',
				params: { slowChgWatts: 200, fastChgWatts: 255, chgPauseFlag: 0 }
			},
			chgPauseFlag: {
				valName: 'chgPauseFlag',
				moduleType: 3,
				operateType: 'acOutCfg',
				params: { chgPauseFlag: 1 }
			},
			standbyMin: {
				valName: 'standbyMin',
				moduleType: 1,
				operateType: 'standbyTime',
				params: { standbyMin: 720 }
			}
		},
		ems: {
			maxChargeSoc: { valName: 'maxChgSoc', moduleType: 2, operateType: 'upsConfig', params: { maxChgSoc: 90 } },
			minDsgSoc: { valName: 'minDsgSoc', moduleType: 2, operateType: 'dsgCfg', params: { minDsgSoc: 30 } },
			maxCloseOilEb: {
				valName: 'closeOilSoc',
				moduleType: 2,
				operateType: 'closeOilSoc',
				params: { closeOilSoc: 90 }
			},
			minOpenOilEb: {
				valName: 'openOilSoc',
				moduleType: 2,
				operateType: 'openOilSoc',
				params: { openOilSoc: 40 }
			}
		},
		action: {
			latestQuotas: {
				valName: '',
				operateType: 'latestQuotas',
				params: {},
				version: '1.0'
			},
			getAllTaskCfg: {
				valName: '',
				moduleType: 1,
				operateType: 'getAllTaskCfg',
				params: {}
			}
		}
	},
	river2max: {
		inv: {
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 5,
				operateType: 'acOutCfg',
				//params: { enabled: 1 }
				params: { enabled: 1, out_freq: 255, out_voltage: 4294967295, xboost: 255 }
			},
			cfgAcWorkMode: {},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 5,
				operateType: 'acOutCfg',
				//params: { xboost: 1 }
				params: { xboost: 1, enabled: 255, out_freq: 255, out_voltage: 4294967295 }
			},
			chgPauseFlag: {
				valName: 'chgPauseFlag',
				moduleType: 5,
				operateType: 'acOutCfg',
				params: { chgPauseFlag: 1 }
			}
		},
		mppt: {
			beepState: { valName: 'enabled', moduleType: 5, operateType: 'quietCfg', params: { enabled: 1 } },
			carState: { valName: 'enabled', moduleType: 5, operateType: 'mpptCar', params: { enabled: 1 } },
			acStandbyMins: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'acStandby',
				params: { standbyMins: 720 }
			},
			carStandbyMin: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'standbyTime',
				params: { standbyMins: 720 }
			},
			cfgChgWatts: {
				valName: 'chgWatts',
				moduleType: 5,
				operateType: 'acChgCfg',
				params: { chgWatts: 200 } //, chgPauseFlag: 255
			},
			dcChgCurrent: {
				valName: 'dcChgCfg',
				moduleType: 5,
				operateType: 'dcChgCfg',
				params: { dcChgCfg: 8000 }
			}
		},
		pd: {
			acAutoOutConfig: {},
			dcOutState: { valName: 'enabled', moduleType: 1, operateType: 'dcOutCfg', params: { enabled: 1 } },
			bpPowerSoc: {
				valName: 'bpPowerSoc',
				moduleType: 1,
				operateType: 'watthConfig',
				params: { isConfig: 1, bpPowerSoc: 55, minDsgSoc: 0, minChgSoc: 0 }
			},
			lcdOffSec: {
				valName: 'delayOff',
				moduleType: 1,
				operateType: 'lcdCfg',
				params: { brighLevel: 255, delayOff: 300 }
			},
			standbyMin: {}
		},
		ems: {
			maxChargeSoc: { valName: 'maxChgSoc', moduleType: 2, operateType: 'upsConfig', params: { maxChgSoc: 90 } },
			minDsgSoc: { valName: 'minDsgSoc', moduleType: 2, operateType: 'dsgCfg', params: { minDsgSoc: 30 } }
		},
		action: {
			latestQuotas: {
				valName: '',
				operateType: 'latestQuotas',
				params: {}
			},
			getAllTaskCfg: {
				valName: '',
				moduleType: 1,
				operateType: 'getAllTaskCfg',
				params: {}
			}
		}
	},
	rivermax: {
		inv: {
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '554272649',
					lang: 'en-us',
					params: { id: 66, enabled: 1 },
					version: '1.0'
				}
			},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '602507362',
					lang: 'en-us',
					params: { id: 66, xboost: 1 },
					version: '1.0'
				}
			},
			cfgStandbyMin: {
				valName: 'standByMins',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '153750799',
					lang: 'en-us',
					params: { id: 153, standByMins: 360 },
					version: '1.0'
				}
			}
		},
		pd: {
			beepState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 38, enabled: 1 },
					version: '1.0'
				}
			},
			standByMode: {
				valName: 'standByMode',
				moduleType: 0, //wirklich 0?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '119032574',
					lang: 'en-us',
					params: { id: 33, standByMode: 360 },
					version: '1.0'
				}
			},
			carSwitch: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '689699572',
					lang: 'en-us',
					params: { id: 34, enabled: 1 },
					version: '1.0'
				}
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			},
			getAllTaskCfg: {
				msg: {
					from: 'iOS',
					operateType: 'getAllTaskCfg',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	river2pro: {
		pd: {
			dcOutState: { valName: 'enabled', moduleType: 1, operateType: 'dcOutCfg', params: { enabled: 1 } },
			standbyMin: {},
			lcdOffSec: {
				valName: 'delayOff',
				moduleType: 1,
				operateType: 'lcdCfg',
				params: { brighLevel: 255, delayOff: 300 }
			}
		},
		mppt: {
			carState: { valName: 'enabled', moduleType: 5, operateType: 'mpptCar', params: { enabled: 1 } },
			beepState: { valName: 'enabled', moduleType: 5, operateType: 'quietMode', params: { enabled: 1 } },
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 5,
				operateType: 'acOutCfg',
				params: {
					enabled: 255,
					out_freq: 255,
					out_voltage: 4294967295,
					xboost: 1
				}
			},
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 5,
				operateType: 'acOutCfg',
				params: {
					enabled: 1,
					out_freq: 255,
					out_voltage: 4294967295,
					xboost: 255
				}
			},
			chgPauseFlag: {
				valName: 'chgPauseFlag',
				moduleType: 5,
				operateType: 'acChgCfg',
				params: { chgWatts: 100, chgPauseFlag: 255 }
			},
			acStandbyMins: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'acStandby',
				params: { standbyMins: 360 }
			},
			powStandbyMin: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'standby',
				params: { standbyMins: 360 }
			},
			scrStandbyMin: {
				valName: 'delayOff',
				moduleType: 5,
				operateType: 'lcdCfg',
				params: { delayOff: 300, brightLevel: 255 }
			},
			carStandbyMin: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'standbyTime',
				params: { standbyMins: 720 }
			},
			dcChgCurrent: {
				valName: 'dcChgCfg',
				moduleType: 5,
				operateType: 'dcChgCfg',
				params: { dcChgCfg: 8000 }
			},
			cfgChgWatts: {
				valName: 'chgWatts',
				moduleType: 5,
				operateType: 'acChgCfg',
				params: { chgWatts: 100, chgPauseFlag: 255 }
			}
		},
		ems: {
			maxChargeSoc: {
				valName: 'maxChgSoc',
				moduleType: 2,
				operateType: 'upsConfig',
				params: {
					maxChgSoc: 90
				}
			},
			minDsgSoc: {
				valName: 'minDsgSoc',
				moduleType: 2,
				operateType: 'dsgCfg',
				params: {
					minDsgSoc: 5
				}
			}
		},
		action: {
			latestQuotas: {
				valName: '',
				operateType: 'latestQuotas',
				params: {},
				version: '1.0'
			},
			getAllTaskCfg: {
				valName: '',
				moduleType: 1,
				operateType: 'getAllTaskCfg',
				params: {}
			},
			setTimeRTC: {
				valName: '',
				moduleType: 5,
				operateType: 'setRtcTime',
				params: { sec: 39, min: 39, week: 4, month: 1, hour: 10, year: 2024, day: 4 }
			}
		},
		unknown: {
			chaType: {
				from: 'Android',
				id: '476281004',
				moduleType: 5,
				operateType: 'chaType',
				params: { chaType: 1 },
				version: '1.0'
			}
		}
	},
	riverpro: {
		inv: {
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '554272649',
					lang: 'en-us',
					params: { id: 66, enabled: 1 },
					version: '1.0'
				}
			},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '602507362',
					lang: 'en-us',
					params: { id: 66, xboost: 1 },
					version: '1.0'
				}
			},
			cfgStandbyMin: {
				valName: 'standByMins',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '153750799',
					lang: 'en-us',
					params: { id: 153, standByMins: 360 },
					version: '1.0'
				}
			}
		},
		pd: {
			beepState: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: { id: 38, enabled: 1 },
					version: '1.0'
				}
			},
			standByMode: {
				valName: 'standByMode',
				moduleType: 0, //wirklich 0?
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '119032574',
					lang: 'en-us',
					params: { id: 33, standByMode: 360 },
					version: '1.0'
				}
			},
			carSwitch: {
				valName: 'enabled',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '689699572',
					lang: 'en-us',
					params: { id: 34, enabled: 1 },
					version: '1.0'
				}
			}
		},
		bmsMaster: {
			maxChargeSoc: {
				valName: 'maxChgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38461351',
					lang: 'en-us',
					params: { id: 49, maxChgSoc: 95 },
					version: '1.0'
				}
			},
			minDsgSoc: {
				valName: 'minDsgSoc',
				moduleType: 2,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '38454960',
					lang: 'en-us',
					params: { id: 51, minDsgSoc: 25 },
					version: '1.0'
				}
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			},
			getAllTaskCfg: {
				msg: {
					from: 'iOS',
					operateType: 'getAllTaskCfg',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	wave2: {
		pd: {
			mainMode: {
				valName: 'mainMode',
				moduleType: 1,
				operateType: 'mainMode',
				params: { mainMode: 1 }
			},
			pdSubMode: {
				valName: 'subMode',
				moduleType: 1,
				operateType: 'subMode',
				params: { subMode: 3 }
			},
			tempSys: {
				valName: 'mode',
				moduleType: 1,
				operateType: 'tempSys',
				params: { mode: 1 }
			},
			idleMode: {
				valName: 'idleMode',
				moduleType: 1,
				operateType: 'display',
				params: { idleTime: 5, idleMode: 1 }
			},
			idleTime: {
				valName: 'idleTime',
				moduleType: 1,
				operateType: 'display',
				params: { idleTime: 5, idleMode: 1 }
			},
			timeSet: {
				valName: 'timeSet',
				moduleType: 1,
				operateType: 'sacTiming',
				params: { timeSet: 10, timeEn: 1 }
			},
			beepEn: {
				valName: 'en',
				moduleType: 1,
				operateType: 'beepEn',
				params: { en: 1 }
			},
			setTemp: {
				valName: 'setTemp',
				moduleType: 1,
				operateType: 'setTemp',
				params: { setTemp: 27 }
			},
			tempDisplay: {
				valName: 'tempDisplay',
				moduleType: 1,
				operateType: 'tempDisplay',
				params: { tempDisplay: 0 }
			},
			fanValue: {
				valName: 'fanValue',
				moduleType: 1,
				operateType: 'fanValue',
				params: { fanValue: 1 }
			},
			wteFthEn: {
				valName: 'wteFthEn',
				moduleType: 1,
				operateType: 'wteFthEn',
				params: { wteFthEn: 3 }
			},
			// level
			// Remote startup/shutdown (1: Startup; 2: Standby; 3: Shutdown)
			powerMode: {
				valName: 'powerMode',
				moduleType: 1,
				operateType: 'powerMode',
				params: { powerMode: 2 }
			},
			//pd.rgbState 	int 	Light strip settings: 0: Follow the screen; 1: Always on; 2: Always off
			rgbState: {
				valName: 'rgbState',
				moduleType: 1,
				operateType: 'rgbState',
				params: { rgbState: 2 }
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	glacier: {
		pd: {
			tmpLSet: {
				valName: 'tmpL',
				moduleType: 1,
				operateType: 'temp',
				params: { tmpR: -19, tmpL: 0, tmpM: 0 }
			},
			tmpMSet: {
				valName: 'tmpM',
				moduleType: 1,
				operateType: 'temp',
				params: { tmpR: -19, tmpL: 0, tmpM: 0 }
			},
			tmpRSet: {
				valName: 'tmpR',
				moduleType: 1,
				operateType: 'temp',
				params: { tmpR: -19, tmpL: 0, tmpM: 0 }
			},
			coolMode: {
				valName: 'mode',
				moduleType: 1,
				operateType: 'ecoMode',
				params: { mode: 1 }
			},
			beepEn: {
				valName: 'flag',
				moduleType: 1,
				operateType: 'beepEn',
				params: { flag: 1 }
			},
			beep: {
				valName: 'flag',
				moduleType: 1,
				operateType: 'beep',
				params: { flag: 1 }
			},
			blTime: {
				valName: 'time',
				moduleType: 1,
				operateType: 'blTime',
				params: { time: 600 }
			},
			tmpUnit: {
				valName: 'unit',
				moduleType: 1,
				operateType: 'tmpUnit',
				params: { unit: 0 }
			},
			iceMode: {
				valName: 'enable',
				moduleType: 1,
				operateType: 'iceMake',
				params: { enable: 1, iceShape: 1 }
			},
			iceShape: {
				valName: 'iceShape',
				moduleType: 1,
				operateType: 'iceMake',
				params: { enable: 1, iceShape: 1 }
			},
			iceDetach: {
				valName: 'enable',
				moduleType: 1,
				operateType: 'deIce',
				params: { enable: 0 }
			},
			sensorAdv: {
				valName: 'senseorAdv',
				moduleType: 1,
				operateType: 'sensorAdv',
				params: { sensorAdv: 1 }
			},
			// state pwrPbEn
			pwrPbEn: {
				valName: 'state',
				moduleType: 1,
				operateType: 'protectBat',
				params: { state: 1, level: 0 }
			},
			powerPbLevel: {
				valName: 'level',
				moduleType: 1,
				operateType: 'protectBat',
				params: { state: 1, level: 0 }
			}
		},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	generator: {
		motorState: {},
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	shelly3em: {
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	deltapro3: {
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	delta3plus: {
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	},
	delta3: {
		action: {
			latestQuotas: {
				moduleType: 0,
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		}
	}
};

module.exports = {
	models,
	pstationStates,
	pstationStatesDict,
	pstationRanges,
	pstationCmd
};
