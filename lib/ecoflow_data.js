'use strict';

const { getEnabledCategories } = require('trace_events');

const pstreamModels = {
	pstream600: {
		identifiers: 'HW51Zxxxx',
		manufacturer: 'Ecoflow',
		model: 'Power Stream 600',
		name: 'Power Stream'
	},
	pstream800: {
		identifiers: 'HW51Zxxxx',
		manufacturer: 'Ecoflow',
		model: 'Power Stream 800',
		name: 'Power Stream'
	}
};
const pstationModels = {
	deltamini: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'Delta Mini, 882Wh',
		name: 'Delta Mini'
	},
	delta: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'Delta 1260Wh',
		name: 'Delta'
	},
	deltamax: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'Delta Max 1600/2000Wh',
		name: 'Delta Max'
	},
	deltapro: {
		identifiers: 'DECxxx',
		manufacturer: 'Ecoflow',
		model: 'Delta Pro, 3600Wh',
		name: 'Delta Pro'
	},
	delta2: {
		identifiers: 'R351ZEB4HFxxxxxx',
		manufacturer: 'Ecoflow',
		model: 'Delta 2, 1024Wh',
		name: 'Delta 2'
	},
	delta2max: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'Delta 2 Max 2048Wh',
		name: 'Delta 2 Max'
	},
	river2: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'River 2, 256Wh ',
		name: 'River 2'
	},
	river2max: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'River 2 Max, 512Wh  ',
		name: 'River 2 Max'
	},
	river2pro: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'River 2 Pro, 768Wh  ',
		name: 'River 2 Pro'
	},
	rivermini: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'River Mini, 210Wh  ',
		name: 'River Mini'
	},
	riverpro: {
		identifiers: 'DAEBZ5xxx',
		manufacturer: 'Ecoflow',
		model: 'River Pro, 720Wh  ',
		name: 'River Pro'
	}
};

const pstreamStates = {
	inverter_heartbeat: {
		number: {
			pv1InputVolt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV1 input voltage',
				unique_id: 'efstream_pv1InputVolt',
				role: 'indicator',
				subrole: 'number'
			},
			pv1OpVolt: {
				min: 0,
				max: 62,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV1 operation voltage',
				unique_id: 'efstream_pv1OpVolt',
				role: 'indicator',
				subrole: 'number'
			},
			pv1InputCur: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV1 input current',
				unique_id: 'efstream_pv1InputCur',
				role: 'indicator',
				subrole: 'number'
			},
			pv1InputWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV1 input power',
				unique_id: 'efstream_pv1InputWatts',
				role: 'indicator',
				subrole: 'number'
			},
			pv1Temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'PV1 mppt temperature',
				unique_id: 'efstream_pv1Temp',
				role: 'indicator',
				subrole: 'number'
			},
			pv2InputVolt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV2 input voltage',
				unique_id: 'efstream_pv2InputVolt',
				role: 'indicator',
				subrole: 'number'
			},
			pv2OpVolt: {
				min: 0,
				max: 62,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV2 operation voltage',
				unique_id: 'efstream_pv2OpVolt',
				role: 'indicator',
				subrole: 'number'
			},
			pv2InputCur: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV2 input current',
				unique_id: 'efstream_pv2InputCur',
				role: 'indicator',
				subrole: 'number'
			},
			pv2InputWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV2 input power',
				unique_id: 'efstream_pv2InputWatts',
				role: 'indicator',
				subrole: 'number'
			},
			pv2Temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'PV2 mppt temperature',
				unique_id: 'efstream_pv2Temp',
				role: 'indicator',
				subrole: 'number'
			},
			batInputVolt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Battery input voltage',
				unique_id: 'efstream_batInputVolt',
				role: 'indicator',
				subrole: 'number'
			},
			batOpVolt: {
				min: 0,
				max: 62,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Battery operation voltage',
				unique_id: 'efstream_batOpVolt',
				role: 'indicator',
				subrole: 'number'
			},
			batInputCur: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Battery input current',
				unique_id: 'efstream_batInputCur',
				role: 'indicator',
				subrole: 'number'
			},
			batInputWatts: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Battery input power',
				unique_id: 'efstream_batInputWatts',
				role: 'indicator',
				subrole: 'number'
			},
			batTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Battery temperature',
				unique_id: 'efstream_batTemp',
				role: 'indicator',
				subrole: 'number'
			},
			batSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Battery state of charge',
				unique_id: 'efstream_batSoc',
				role: 'indicator',
				subrole: 'number'
			},
			llcInputVolt: {
				min: 0,
				max: 65,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Converter input voltage',
				unique_id: 'efstream_llcInputVolt',
				role: 'indicator',
				subrole: 'number'
			},
			llcOpVolt: {
				min: 0,
				max: 62,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Converter operation voltage',
				unique_id: 'efstream_llcOpVolt',
				role: 'indicator',
				subrole: 'number'
			},
			llcTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Converter temperature',
				unique_id: 'efstream_llcTemp',
				role: 'indicator',
				subrole: 'number'
			},
			invInputVolt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Inverter DC input voltage',
				unique_id: 'efstream_invInputVolt',
				role: 'indicator',
				subrole: 'number'
			},
			invOpVolt: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Inverter AC output voltage',
				unique_id: 'efstream_invOpVolt',
				role: 'indicator',
				subrole: 'number'
			},
			invOutputCur: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Inverter AC output current',
				unique_id: 'efstream_invOutputCur',
				role: 'indicator',
				subrole: 'number'
			},
			invOutputWatts: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Inverter AC power',
				unique_id: 'efstream_invOutputWatts',
				role: 'indicator',
				subrole: 'number'
			},
			invTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Inverter temperature',
				unique_id: 'efstream_invTemp',
				role: 'indicator',
				subrole: 'number'
			},
			invFreq: {
				min: 0,
				max: 52,
				unit_of_measurement: 'Hz',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter AC frequency',
				unique_id: 'efstream_invFreq',
				role: 'indicator',
				subrole: 'number'
			},
			invDcCur: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Inverter DC input current',
				unique_id: 'efstream_invDcCur',
				role: 'indicator',
				subrole: 'number'
			},
			dynamicWatts: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Dynamic Power',
				unique_id: 'efstream_dynamicWatts',
				role: 'indicator',
				subrole: 'number'
			},
			ratedPower: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Inverter rated power',
				unique_id: 'efstream_ratedPower',
				role: 'indicator',
				subrole: 'number'
			},
			dischTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery discharge time',
				unique_id: 'efstream_dischTime',
				role: 'indicator',
				subrole: 'number',
				icon: 'mdi:clock-start'
			},
			chargeTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery charge time',
				unique_id: 'efstream_chargeTime',
				role: 'indicator',
				subrole: 'number',
				icon: 'mdi:clock-start'
			},
			heartbeatFrequency: {
				min: 0,
				max: 20,
				unit_of_measurement: '1/s',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter heartbeat',
				unique_id: 'efstream_heartbeatFrequency',
				role: 'indicator',
				subrole: 'number'
			},

			batMinutes: {
				min: 0,
				max: 59999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
				name: 'Battery Minutes',
				unique_id: 'efstream_batMinutes',
				role: 'indicator',
				subrole: 'number'
			}
		},
		level: {
			permanentWatts: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Permanent Power',
				unique_id: 'efstream_permanentWatts',
				role: 'value',
				subrole: 'power'
			},
			lowerLimit: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Battery SOC lower limit',
				unique_id: 'efstream_lowerLimit',
				icon: 'mdi:speedometer',
				role: 'value',
				subrole: 'lowlimit'
			},
			upperLimit: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Battery SOC upper limit',
				unique_id: 'efstream_upperLimit',
				icon: 'mdi:speedometer',
				role: 'value',
				subrole: 'lowlimit'
			},
			invBrightness: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 0.1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'percentage',
				name: 'Inverter brightness',
				unique_id: 'efstream_invBrightness',
				role: 'value',
				subrole: 'brightness'
			}
		},
		diagnostic: {
			invErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter Error Code',
				unique_id: 'efstream_invErrCode',
				role: 'info',
				invErrCode: { '0': 'OK', '4096': 'no voltage', '4160': '4160', '8192': '8192', '12288': '12288' }
			},
			invWarnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter Warning Code',
				unique_id: 'efstream_invWarnCode',
				role: 'info',
				invWarnCode: { '0': '0' }
			},
			pv1ErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV1 Error Code',
				unique_id: 'efstream_pv1ErrCode',
				role: 'info',
				pv1ErrCode: { '0': '0', '128': '128', '130': '130', '256': '256', '384': '384' }
			},
			pv1WarnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV1 Warning Code',
				unique_id: 'efstream_pv1WarnCode',
				role: 'info',
				pv1WarnCode: { '0': '0' }
			},
			pv2ErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV2 Error Code',
				unique_id: 'efstream_pv2ErrCode',
				role: 'info',
				pv2ErrCode: { '0': '0', '128': '128', '130': '130', '256': '256', '384': '384' }
			},
			pv2WarningCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV2 Warning Code',
				unique_id: 'efstream_pv2WarningCode',
				role: 'info',
				pv2WarningCode: { '0': '0' }
			},
			batErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery Error Code',
				unique_id: 'efstream_batErrCode',
				role: 'info',
				batErrCode: { '0': '0', '4': '4', '8': '8' }
			},
			batWarningCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery Warning Code',
				unique_id: 'efstream_batWarningCode',
				role: 'info',
				batWarningCode: { '0': '0' }
			},
			llcErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc Error Code',
				unique_id: 'efstream_llcErrCode',
				role: 'info',
				llcErrCode: { '0': '0', '1': '1' }
			},
			llcWarningCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc Warning Code',
				unique_id: 'efstream_llcWarningCode',
				role: 'info',
				llcWarningCode: { '0': '0' }
			},
			wirelessErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Wireless Error Code',
				unique_id: 'efstream_wirelessErrCode',
				role: 'info',
				wirelessErrCode: { '0': '0' }
			},
			wirelessWarnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Wireless Warning Code',
				unique_id: 'efstream_wirelessWarnCode',
				role: 'info',
				wirelessWarnCode: { '0': '0' }
			},
			pv1Status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV1 Status',
				unique_id: 'efstream_pv1Status',
				role: 'info',
				pv1Status: { '1': '1', '2': '2', '3': '3', '4': '4', '6': '6', '7': '7' }
			},
			pv2Status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV2 Status',
				unique_id: 'efstream_pv2Status',
				role: 'info',
				pv2Status: { '1': '1', '2': '2', '3': '3', '4': '4', '6': '6', '7': '7' }
			},
			batStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery Status',
				unique_id: 'efstream_batStatus',
				role: 'info',
				batStatus: { '5': '5' }
			},
			llcStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc Status',
				unique_id: 'efstream_llcStatus',
				role: 'info',
				llcStatus: { '1': '1', '2': '2', '3': '3', '5': '5', '6': '6' }
			},
			invStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter Status',
				unique_id: 'efstream_invStatus',
				role: 'info',
				invStatus: { '1': 'synced', '2': '2', '6': '6', '11': 'disconnected' }
			},
			invRelayStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter Relay Status',
				unique_id: 'efstream_invRelayStatus',
				role: 'info',
				invRelayStatus: { '0': 'on', '8': '8', '16': '16', '17': '17', '18': '18', '24': '24' }
			},
			pv1RelayStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV1 Relay Status',
				unique_id: 'efstream_pv1RelayStatus',
				role: 'info',
				pv1RelayStatus: { '0': '0' }
			},
			pv2RelayStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV2 Relay Status',
				unique_id: 'efstream_pv2RelayStatus',
				role: 'info',
				pv2RelayStatus: { '0': '0' }
			},
			invOnOff: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter OnOff:',
				unique_id: 'efstream_invOnOff:',
				role: 'info',
				invOnOff: { '0': '0', '1': '1' }
			}
		},
		string: {
			bpType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Batterypack Type',
				unique_id: 'efstream_bpType',
				role: 'info'
			},
			installCountry: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				unique_id: 'efstream_installCountry',
				name: 'Install Country'
			},
			installTown: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				unique_id: 'efstream_installTown',
				name: 'Install Town'
			},
			Unknown59: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				unique_id: 'efstream_Unknown59',
				name: 'Unknown59'
			}
		},
		switch: {
			supplyPriority: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'supply prio',
				payload_on: 'charge prio',
				name: 'Supply Priority',
				unique_id: 'efstream_supplyPriority',
				role: 'switch',
				supplyPriority: { '0': 'supply prio', '1': 'charge prio' }
			}
		}
	},
	InverterHeartbeat2: {
		string: {
			X_Unknown_1: { name: 'X_Unknown_1', role: 'info' },
			X_Unknown_2: { name: 'X_Unknown_2', role: 'info' },
			X_Unknown_3: { name: 'X_Unknown_3', role: 'info' },
			X_Unknown_4: { name: 'X_Unknown_4', role: 'info' },
			X_Unknown_5: { name: 'X_Unknown_5', role: 'info' },
			X_Unknown_6: { name: 'X_Unknown_6', role: 'info' },
			upperLimit_7: { name: 'X_Unknown_7', role: 'info' },
			lowerLimit_8: { name: 'X_Unknown_8', role: 'info' },
			X_Unknown_9: { name: 'X_Unknown_9', role: 'info' },
			X_Unknown_10: { name: 'X_Unknown_10', role: 'info' },
			X_Unknown_11: { name: 'X_Unknown_11', role: 'info' },
			baseLoad_12: { name: 'X_Unknown_12', role: 'info' },
			X_Unknown_13: { name: 'X_Unknown_13', role: 'info' },
			X_Unknown_14: { name: 'X_Unknown_14', role: 'info' },
			X_Unknown_15: { name: 'X_Unknown_15', role: 'info' },
			X_Unknown_16: { name: 'X_Unknown_16', role: 'info' },
			X_Unknown_17: { name: 'X_Unknown_17', role: 'info' },
			X_Unknown_18: { name: 'X_Unknown_18', role: 'info' },
			X_Unknown_19: { name: 'X_Unknown_19', role: 'info' },
			X_Unknown_20: { name: 'X_Unknown_20', role: 'info' },
			X_Unknown_21: { name: 'X_Unknown_21', role: 'info' },
			X_Unknown_22: { name: 'X_Unknown_22', role: 'info' },
			X_Unknown_23: { name: 'X_Unknown_23', role: 'info' },
			X_Unknown_24: { name: 'X_Unknown_24', role: 'info' },
			X_Unknown_25: { name: 'X_Unknown_25', role: 'info' },
			X_Unknown_26: { name: 'X_Unknown_26', role: 'info' },
			X_Unknown_27: { name: 'X_Unknown_27', role: 'info' },
			X_Unknown_28: { name: 'X_Unknown_28', role: 'info' },
			X_Unknown_29: { name: 'X_Unknown_29', role: 'info' },
			X_Unknown_30: { name: 'X_Unknown_30', role: 'info' },
			X_Unknown_31: { name: 'X_Unknown_31', role: 'info' },
			uptime_32: { name: 'X_Unknown_32', role: 'info' },
			X_Unknown_33: { name: 'X_Unknown_33', role: 'info' },
			X_Unknown_34: { name: 'X_Unknown_34', role: 'info' },
			X_Unknown_35: { name: 'X_Unknown_35', role: 'info' },
			X_Unknown_36: { name: 'X_Unknown_36', role: 'info' },
			X_Unknown_37: { name: 'X_Unknown_37', role: 'info' },
			X_Unknown_38: { name: 'X_Unknown_38', role: 'info' },
			X_Unknown_39: { name: 'X_Unknown_39', role: 'info' },
			X_Unknown_40: { name: 'X_Unknown_40', role: 'info' },
			X_Unknown_41: { name: 'X_Unknown_41', role: 'info' },
			X_Unknown_42: { name: 'X_Unknown_42', role: 'info' },
			X_Unknown_43: { name: 'X_Unknown_43', role: 'info' },
			X_Unknown_44: { name: 'X_Unknown_44', role: 'info' },
			gridWatt_45: { name: 'X_Unknown_45', role: 'info' },
			X_Unknown_46: { name: 'X_Unknown_46', role: 'info' },
			X_Unknown_47: { name: 'X_Unknown_47', role: 'info' },
			X_Unknown_48: { name: 'X_Unknown_48', role: 'info' },
			X_Unknown_49: { name: 'X_Unknown_49', role: 'info' },
			unixtime_50: { name: 'X_Unknown_50', role: 'info' },
			X_Unknown_51: { name: 'X_Unknown_51', role: 'info' },
			X_Unknown_52: { name: 'X_Unknown_52', role: 'info' }
		}
	}
};

const pstreamStatesDict = {
	pstream: {
		inverter_heartbeat: {
			pv1InputVolt: { entity: 'number' },
			pv1OpVolt: { entity: 'number' },
			pv1InputCur: { entity: 'number' },
			pv1InputWatts: { entity: 'number' },
			pv1Temp: { entity: 'number' },
			pv2InputVolt: { entity: 'number' },
			pv2OpVolt: { entity: 'number' },
			pv2InputCur: { entity: 'number' },
			pv2InputWatts: { entity: 'number' },
			pv2Temp: { entity: 'number' },
			batInputVolt: { entity: 'number' },
			batOpVolt: { entity: 'number' },
			batInputCur: { entity: 'number' },
			batInputWatts: { entity: 'number' },
			batTemp: { entity: 'number' },
			batSoc: { entity: 'number' },
			llcInputVolt: { entity: 'number' },
			llcOpVolt: { entity: 'number' },
			llcTemp: { entity: 'number' },
			invInputVolt: { entity: 'number' },
			invOpVolt: { entity: 'number' },
			invOutputCur: { entity: 'number' },
			invOutputWatts: { entity: 'number' },
			invTemp: { entity: 'number' },
			invFreq: { entity: 'number' },
			invDcCur: { entity: 'number' },
			permanentWatts: { entity: 'level' },
			ratedPower: { entity: 'number' },
			dischTime: { entity: 'number' },
			chargeTime: { entity: 'number' },
			heartbeatFrequency: { entity: 'number' },
			dynamicWatts: { entity: 'number' },
			lowerLimit: { entity: 'level' },
			upperLimit: { entity: 'level' },
			invBrightness: { entity: 'level' },
			supplyPriority: { entity: 'switch' },
			invErrCode: { entity: 'diagnostic' },
			invWarnCode: { entity: 'diagnostic' },
			pv1ErrCode: { entity: 'diagnostic' },
			pv1WarnCode: { entity: 'diagnostic' },
			pv2ErrCode: { entity: 'diagnostic' },
			pv2WarningCode: { entity: 'diagnostic' },
			batErrCode: { entity: 'diagnostic' },
			bpType: { entity: 'string' },
			batWarningCode: { entity: 'diagnostic' },
			llcErrCode: { entity: 'diagnostic' },
			llcWarningCode: { entity: 'diagnostic' },
			wirelessErrCode: { entity: 'diagnostic' },
			wirelessWarnCode: { entity: 'diagnostic' },
			pv1Status: { entity: 'diagnostic' },
			pv2Status: { entity: 'diagnostic' },
			batStatus: { entity: 'diagnostic' },
			llcStatus: { entity: 'diagnostic' },
			invStatus: { entity: 'diagnostic' },
			invRelayStatus: { entity: 'diagnostic' },
			pv1RelayStatus: { entity: 'diagnostic' },
			pv2RelayStatus: { entity: 'diagnostic' },
			installCountry: { entity: 'string' },
			installTown: { entity: 'string' },
			invOnOff: { entity: 'diagnostic' },
			batMinutes: { entity: 'number' },
			Unknown59: { entity: 'string' }
		},
		InverterHeartbeat2: {
			X_Unknown_1: { entity: 'string' },
			X_Unknown_2: { entity: 'string' },
			X_Unknown_3: { entity: 'string' },
			X_Unknown_4: { entity: 'string' },
			X_Unknown_5: { entity: 'string' },
			X_Unknown_6: { entity: 'string' },
			upperLimit_7: { entity: 'string' },
			lowerLimit_8: { entity: 'string' },
			X_Unknown_9: { entity: 'string' },
			X_Unknown_10: { entity: 'string' },
			X_Unknown_11: { entity: 'string' },
			baseLoad_12: { entity: 'string' },
			X_Unknown_13: { entity: 'string' },
			X_Unknown_14: { entity: 'string' },
			X_Unknown_15: { entity: 'string' },
			X_Unknown_16: { entity: 'string' },
			X_Unknown_17: { entity: 'string' },
			X_Unknown_18: { entity: 'string' },
			X_Unknown_19: { entity: 'string' },
			X_Unknown_20: { entity: 'string' },
			X_Unknown_21: { entity: 'string' },
			X_Unknown_22: { entity: 'string' },
			X_Unknown_23: { entity: 'string' },
			X_Unknown_24: { entity: 'string' },
			X_Unknown_25: { entity: 'string' },
			X_Unknown_26: { entity: 'string' },
			X_Unknown_27: { entity: 'string' },
			X_Unknown_28: { entity: 'string' },
			X_Unknown_29: { entity: 'string' },
			X_Unknown_30: { entity: 'string' },
			X_Unknown_31: { entity: 'string' },
			uptime_32: { entity: 'string' },
			X_Unknown_33: { entity: 'string' },
			X_Unknown_34: { entity: 'string' },
			X_Unknown_35: { entity: 'string' },
			X_Unknown_36: { entity: 'string' },
			X_Unknown_37: { entity: 'string' },
			X_Unknown_38: { entity: 'string' },
			X_Unknown_39: { entity: 'string' },
			X_Unknown_40: { entity: 'string' },
			X_Unknown_41: { entity: 'string' },
			X_Unknown_42: { entity: 'string' },
			X_Unknown_43: { entity: 'string' },
			X_Unknown_44: { entity: 'string' },
			gridWatt_45: { entity: 'string' },
			X_Unknown_46: { entity: 'string' },
			X_Unknown_47: { entity: 'string' },
			X_Unknown_48: { entity: 'string' },
			X_Unknown_49: { entity: 'string' },
			unixtime_50: { entity: 'string' },
			X_Unknown_51: { entity: 'string' },
			X_Unknown_52: { entity: 'string' }
		}
	}
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
				role: 'indicator',
				subrole: 'number'
			},
			temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Temperature',
				role: 'indicator',
				subrole: 'number'
			},
			inputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Input power',
				role: 'indicator',
				subrole: 'number'
			},
			outputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Output power',
				role: 'indicator',
				subrole: 'number'
			},
			vol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Voltage',
				role: 'indicator',
				subrole: 'number'
			},
			amp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Current',
				role: 'indicator',
				subrole: 'number'
			},
			designCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Design capacity',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			remainCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Remaining capacity',
				role: 'indicator',
				subrole: 'number'
			},
			fullCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Full capacity',
				role: 'indicator',
				subrole: 'number'
			},
			maxCellVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Maximum cell voltage',
				role: 'indicator',
				subrole: 'number'
			},
			minCellVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Minimum cell voltage',
				role: 'indicator',
				subrole: 'number'
			},
			maxCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Maximum cell temperature',
				role: 'indicator',
				subrole: 'number'
			},
			minCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Minimum cell temperature',
				role: 'indicator',
				subrole: 'number'
			},
			maxMosTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Maximum MOS temperature',
				role: 'indicator',
				subrole: 'number'
			},
			minMosTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Minimum MOS temperature',
				role: 'indicator',
				subrole: 'number'
			},
			tagChgAmp: {
				min: 0,
				max: 50,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Target charging current',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			f32ShowSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC',
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
			},
			cycles: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'cycles',
				mult: 1,
				entity_type: 'sensor',
				name: 'Number of cycles',
				role: 'indicator',
				subrole: 'number'
			},
			//new for delta2
			OCV: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Open Circuit Voltage',
				role: 'indicator',
				subrole: 'number'
			},
			//new delta 2 max
			maxVolDiff: {
				min: 0,
				max: 500,
				unit_of_measurement: 'mV',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Maximum cell voltage difference',
				role: 'indicator',
				subrole: 'number'
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
			num: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'BMS number' },
			sysVer: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'System version' },
			//new delta 2 max

			recv: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'recv' }
		},
		diagnostic: {
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Global error code',
				errCode: { 0: 'OK?' }
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
				name: 'Battery capacity type',
				mosState: { '0': '0?', '1': '1?', '2': '2?', '3': '3?' }
			}
		},
		icon: {
			//new delta 2 max
			//mainly because of array inside
			cellTemp: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Cell temperature' },
			cellVol: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Cell voltage' },
			hwVersion: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'HW version' },
			recv: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'recv' }
		}
	},
	inv: {
		number: {
			inputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Charging power',
				role: 'indicator',
				subrole: 'number'
			},
			outputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Discharging power',
				role: 'indicator',
				subrole: 'number'
			},
			invOutVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Actual inverter output voltage',
				role: 'indicator',
				subrole: 'number'
			},
			invOutAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Inverter output current',
				role: 'indicator',
				subrole: 'number'
			},
			invOutFreq: {
				min: 0,
				max: 62,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter output frequency',
				role: 'indicator',
				subrole: 'number'
			},
			acInVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Inverter input voltage',
				role: 'indicator',
				subrole: 'number'
			},
			acInAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Inverter input current',
				role: 'indicator',
				subrole: 'number'
			},
			acInFreq: {
				min: 0,
				max: 62,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter input frequency',
				role: 'indicator',
				subrole: 'number'
			},
			outTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Inverter temperature',
				role: 'indicator',
				subrole: 'number'
			},
			dcInVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'DC input voltage',
				role: 'indicator',
				subrole: 'number'
			},
			dcInAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'DC input current',
				role: 'indicator',
				subrole: 'number'
			},
			dcInTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'DC temperature',
				role: 'indicator',
				subrole: 'number'
			},
			FastChgWatts: {
				min: 200,
				max: 2200,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				subrole: 'number',
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
				role: 'indicator',
				subrole: 'number',
				name: 'Maximum charging power for AC slow charging (W)'
			},
			standbyMins: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
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
				role: 'indicator',
				subrole: 'number',
				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			//new delta 2 max
			standbyMin: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
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
				role: 'indicator',
				subrole: 'number',
				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			acChgRatedPower: {
				min: 0,
				max: 1800,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				subrole: 'number',
				name: 'AC charge rated power'
			}
		},
		switch: {
			//nochmals in diagnostic wegen delta 2
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
			cfgAcWorkMode: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC charging mode',
				payload_off: 'full power',
				payload_on: 'mute',
				cfgAcWorkMode: { '0': 'full power', '1': 'mute' }
			}
		},
		level: {
			cfgFastChgWatts: {
				min: 200,
				max: 2200,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				subrole: 'power',
				name: 'Maximum charging power for AC fast charging (W)'
			},
			cfgSlowChgWatts: {
				min: 200,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				subrole: 'power',
				name: 'Maximum charging power for AC slow charging (W)'
			},
			cfgStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
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
				subrole: 'power',
				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			//new delta 2max
			SlowChgWatts: {
				min: 200,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				subrole: 'power',
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
			acPassByAutoEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'acPassByAutoEn '
			},
			//new delta 2
			cfgAcOutVol: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output voltage (V): 0xffffffff: ignored'
			},
			//new delta 2 max
			acPassbyAutoEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'acPassByAutoEn '
			}
		},
		diagnostic: {
			fanState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fan state',
				fanState: { 0: 'disabled', 1: 'Level 1', 2: 'Level 2', 3: 'Level 3' }
			},
			chgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC charging pause flag',
				chgPauseFlag: { 0: 'no pause?', 1: 'charging stopped' }
			},
			chargerType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				chargerType: {
					0: 'no charging',
					1: 'AC charging',
					2: 'DC adapter charging',
					3: 'solar charging',
					4: 'CC',
					5: 'BC'
				}
			},
			dischargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Discharging type',
				dischargeType: { 0: 'no discharge?', 1: 'AC discharging', 2: 'PR', 3: 'BC' }
			},
			acDipSwitch: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC fast/slow charging dip switch',
				acDipSwitch: { 0: 'unknown', 1: 'fast charging mode', 2: 'slow charging mode' }
			},
			cfgAcOutFreq: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output frequency (Hz)',
				cfgAcOutFreq: { 1: '50 Hz', 2: '60 Hz', 0xff: 'ignored' }
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
			//new delta 2 max
			prBalanceMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'prBalanceMode',
				prBalanceMode: { '0': '0=?', '1': '1=?' }
			}
		},
		icon: {
			//new delta 2
			reserved: {}
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
				role: 'indicator',
				subrole: 'number'
			},
			inAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV input current',
				role: 'indicator',
				subrole: 'number'
			},
			inWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV input power',
				role: 'indicator',
				subrole: 'number'
			},
			outVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV output voltage',
				role: 'indicator',
				subrole: 'number'
			},
			outAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV output current',
				role: 'indicator',
				subrole: 'number'
			},
			outWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV output power',
				role: 'indicator',
				subrole: 'number'
			},
			mpptTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'MPPT temperature',
				role: 'indicator',
				subrole: 'number'
			},
			dcdc12vVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'DC12V30A output voltage, which is valid only for DELTA Pro',
				role: 'indicator',
				subrole: 'number'
			},
			dcdc12vAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'DC12V30A output current, which is valid only for DELTA Pro',
				role: 'indicator',
				subrole: 'number'
			},
			dcdc12vWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'DC12V30A output power, which is valid only for DELTA Pro',
				role: 'indicator',
				subrole: 'number'
			},
			carOutVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Car charging output voltage',
				role: 'indicator',
				subrole: 'number'
			},
			carOutAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Car charging output current',
				role: 'indicator',
				subrole: 'number'
			},
			carOutWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Car charging output power',
				role: 'indicator',
				subrole: 'number'
			},
			carTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Car charging temperature',
				role: 'indicator',
				subrole: 'number'
			},
			dc24vTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'DCDC24V temperature',
				role: 'indicator',
				subrole: 'number'
			},
			//new delta 2
			powStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
				role: 'indicator',
				subrole: 'number',
				name: 'Power standby time /min 0 Never standby 720 Default value ?'
			},
			scrStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
				role: 'indicator',
				subrole: 'number',
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
				role: 'indicator',
				subrole: 'number'
			},
			pv2InAmp: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV input current',
				role: 'indicator',
				subrole: 'number'
			},
			pv2InWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV input power',
				role: 'indicator',
				subrole: 'number'
			},
			pv2MpptTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'MPPT temperature',
				role: 'indicator',
				subrole: 'number'
			},
			pv2DcChgCurrent: {
				min: 0,
				max: 8,
				unit_of_measurement: 'mA',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'pv2DcChgCurrent',
				role: 'indicator',
				subrole: 'number'
			}
		},
		level: {
			cfgDcChgCurrent: {
				//als level? ja
				min: 0,
				max: 8,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				DC_CHARGE_CURRENT_OPTIONS: {
					'4A': 4000,
					'6A': 6000,
					'8A': 8000
				},
				name: 'On-board charging current',
				role: 'value',
				subrole: 'current'
			},
			//new delta 2
			dcChgCurrent: {
				//als level? ja
				min: 0,
				max: 8,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				DC_CHARGE_CURRENT_OPTIONS: {
					'4A': 4000,
					'6A': 6000,
					'8A': 8000
				},
				name: 'On-board charging current',
				role: 'value',
				subrole: 'current'
			},
			cfgChgWatts: {
				min: 0,
				max: 2200,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				subrole: 'power',
				name: 'Maximum charging power for charging (W) ?'
			},
			acStandbyMins: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
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
				subrole: 'time',
				name: 'AC standby time /min 0 Never standby 720 Default value'
			},
			carStandbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
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
				subrole: 'time',
				name: 'CAR standby time /min 0 Never standby 720 Default value'
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
				entity_category: 'switch',
				role: 'switch',
				name: 'Beep status',
				payload_off: 'normal',
				payload_on: 'quiet',
				beepState: { 0: 'Normal', 1: 'Quiet' }
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
			}
		},
		string: {
			faultCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Error code: byte0: mppt_fault; byte1: car_fault; byte2: dc24v_fault'
			},
			swVer: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Version number' },
			reserved: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Reserved' },
			//new delta 2
			cfgAcOutVol: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output voltage (V): 0xffffffff: ignored'
			}
		},
		diagnostic: {
			xt60ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'XT60 charging type',
				xt60ChgType: { 0: 'not detected', 1: 'MPPT', 2: 'adapter' }
			},
			cfgChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Configured charging type: This parameter is valid when xt60_chg_type is 0.',
				cfgChgType: { 0: 'auto', 1: 'MPPT', 2: 'adapter' }
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
				chgState: { 0: 'disabled', 1: 'charging', 2: 'standby (DC charging stopped during AC charging)' }
			},
			dc24vState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'DCDC24 switch state',
				dc24vState: { 0: 'off', 1: 'on' }
			},
			chgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'PV charging pause flag',
				chgPauseFlag: { 0: 'not stopped ?', 1: 'charging stopped' }
			},
			//new delta 2
			x60ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'XT60 charging type',
				xt60ChgType: { 0: 'not detected', 1: 'MPPT', 2: 'adapter' }
			},
			cfgAcOutFreq: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output frequency (Hz)',
				cfgAcOutFreq: { 1: '50 Hz', 2: '60 Hz', 0xff: 'ignored' }
			},
			dischargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Discharging type',
				dischargeType: { 0: 'no discharge?', 1: 'AC discharging', 2: 'PR', 3: 'BC' }
			},
			//new delta 2 max
			pv2Xt60ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'XT60 charging type',
				pv2Xt60ChgType: { 0: 'not detected?', 1: 'MPPT?', 2: 'adapter?' }
			},
			pv2CfgChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Configured charging type: This parameter is valid when xt60_chg_type is 0.',
				pv2CfgChgType: { 0: 'auto?', 1: 'MPPT?', 2: 'adapter?' }
			},
			pv2ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Actual charging type',
				pv2ChgType: {
					0: 'null?',
					1: 'adapter (adapter/DC source)?',
					2: 'MPPT (solar)?',
					3: 'AC (mains supply)?',
					4: 'gas?',
					5: 'wind?'
				}
			},
			pv2ChgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging state',
				pv2ChgState: { 0: 'disabled?', 1: 'charging?', 2: 'standby (DC charging stopped during AC charging)?' }
			},
			pv2ChgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'PV charging pause flag',
				pv2ChgPauseFlag: { 0: 'not stopped ?', 1: 'charging stopped?' }
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
				role: 'indicator',
				subrole: 'number'
			},
			wattsOutSum: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Total output power',
				role: 'indicator',
				subrole: 'number'
			},
			wattsInSum: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Total input power',
				role: 'indicator',
				subrole: 'number'
			},
			remainTime: {
				in: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name:
					'Time remaining (min) > 0: remaining charging time; time remaining (min) < 0: remaining discharging time',
				role: 'indicator',
				subrole: 'number'
			},
			usb1Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Common usb1 output power',
				role: 'indicator',
				subrole: 'number'
			},
			usb2Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Common usb2 output power',
				role: 'indicator',
				subrole: 'number'
			},
			qcUsb1Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Quick charge usb1 output power',
				role: 'indicator',
				subrole: 'number'
			},
			qcUsb2Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Quick charge usb2 output power',
				role: 'indicator',
				subrole: 'number'
			},
			typec1Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Typec1 output power',
				role: 'indicator',
				subrole: 'number'
			},
			typec2Watts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Typec2 output power',
				role: 'indicator',
				subrole: 'number'
			},
			typec1Temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Type-C 1 temperature',
				role: 'indicator',
				subrole: 'number'
			},
			typec2Temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Type-C 2 temperature',
				role: 'indicator',
				subrole: 'number'
			},
			carWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'CAR output power',
				role: 'indicator',
				subrole: 'number'
			},
			carTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'CAR temperature',
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
			},
			usbUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'USB use time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			usbqcUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'USB QC use time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			typccUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Type-C use time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			carUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Car use time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			invUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Inverter use time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			dcInUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'DC charging time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
			},
			mpptUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'MPPT use time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
			},
			inWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PD? input power',
				role: 'indicator',
				subrole: 'number'
			},
			outWatts: {
				min: 0,
				max: 500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PD? output power',
				role: 'indicator',
				subrole: 'number'
			},
			outputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Output power',
				role: 'indicator',
				subrole: 'number'
			},
			typecUsedTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 0.0166,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Type-C use time',
				entity_category: 'diagnostic',
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
			},
			chgPowerAC: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Charge Power AC',
				role: 'indicator',
				subrole: 'number'
			},
			chgPowerDC: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Charge Power DC',
				role: 'indicator',
				subrole: 'number'
			},
			dsgPowerAC: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Discharge Power AC',
				role: 'indicator',
				subrole: 'number'
			},
			dsgPowerDC: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Discharge Power DC',
				role: 'indicator',
				subrole: 'number'
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
				role: 'indicator',
				subrole: 'number'
			},
			invInWatts: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Inverter Input  Watts',
				role: 'indicator',
				subrole: 'number'
			},
			invOutWatts: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Inverter Output Watts',
				role: 'indicator',
				subrole: 'number'
			},
			XT150Watts1: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'XT150 (1) Watts',
				role: 'indicator',
				subrole: 'number'
			},
			XT150Watts2: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'XT150 (2) Watts',
				role: 'indicator',
				subrole: 'number'
			},
			pv1ChargeWatts: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV1 charge Watts',
				role: 'indicator',
				subrole: 'number'
			},
			pv2ChargeWatts: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV2 charge Watts',
				role: 'indicator',
				subrole: 'number'
			}
		},
		level: {
			lcdOffSec: {
				min: 0,
				max: 1800,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				SCREEN_TIMEOUT_OPTIONS: {
					Never: 0,
					'10 sec': 10,
					'30 sec': 30,
					'1 min': 60,
					'5 min': 300,
					'30 min': 1800
				},
				role: 'value',
				subrole: 'time',
				name: 'LCD screen-off duration: 0: never off'
			},
			standByMode: {
				min: 0,
				max: 5999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				UNIT_TIMEOUT_OPTIONS_LIMITED: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'4 hr': 240,
					'6 hr': 360,
					'12 hr': 720
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
				role: 'value',
				subrole: 'time',
				name: 'Device standby time /min 0 Never standby 5999 Max value',
				standByMode: { '0': 'Never standby', '5999': 'Max value' }
			},
			//new DeltaPro Pro
			bppowerSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'Backup Power SOC'
			},
			//new delta 2
			bpPowerSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'Backup Power SOC'
			},
			standbyMin: {
				min: 0,
				max: 720,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
				role: 'value',
				subrole: 'time',
				name: 'Standby time /min 0 Never standby 720 Default value ?'
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
			extRj45Port: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'RJ45 port' },
			ext3p8Port: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Infinity port' },
			ext4p8Port: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Extra battery port. Only the status of the leftmost port can be identified.'
			},
			wifiRssi: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wi-Fi signal intensity'
			},
			wirelessWatts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wireless charging output power (W): Reserved, not available'
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
				name: 'hysteresis add'
			},
			watthisconfig: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'watthisconfig'
			},
			//new delta 2
			relaySwitchCnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'relayswitchcnt status or cnt?'
			},
			watchIsConfig: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'watchIsConfig'
			},
			wireWatts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wireless charging output power (W): Reserved, not available'
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
			}
		},
		switch: {
			beepState: {
				entity_type: 'switch',
				entity_category: 'switch',
				role: 'switch',
				name: 'Beep status',
				payload_off: 'normal',
				payload_on: 'quiet',
				beepState: { 0: 'Normal', 1: 'Quiet' }
			},
			dcOutState: {
				entity_type: 'switch',
				entity_category: 'switch',
				role: 'switch',
				name: 'DC button state',
				payload_off: 'off',
				payload_on: 'on',
				dcOutState: { 0: 'off', 1: 'on' }
			},
			//new DeltaPro FW
			acautooutConfig: {
				entity_type: 'switch',
				entity_category: 'switch',
				role: 'switch',
				name: 'AC auto out Config',
				payload_off: 'off',
				payload_on: 'on',
				acautooutConfig: { 0: 'off', 1: 'on' }
			},
			//new delta 2
			acAutoOutConfig: {
				entity_type: 'switch',
				entity_category: 'switch',
				role: 'switch',
				name: 'AC auto out Config',
				payload_off: 'off',
				payload_on: 'on',
				acAutoOutConfig: { 0: 'off', 1: 'on' }
			},
			pvChgPrioSet: {
				entity_type: 'switch',
				entity_category: 'switch',
				role: 'switch',
				name: 'PV Chg Prio Set',
				payload_off: 'off',
				payload_on: 'on',
				pvChgPrioSet: { 0: 'off', 1: 'on' }
			},
			newAcAutoOnCfg: {
				entity_type: 'switch',
				entity_category: 'switch',
				role: 'switch',
				name: 'AC auto out Config',
				payload_off: 'off',
				payload_on: 'on',
				newAcAutoOnCfg: { 0: 'off', 1: 'on' }
			}
		},
		diagnostic: {
			carState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'CAR button state: 0: off; 1: on',
				carState: { 0: 'off', 1: 'on' }
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Global error code',
				errCode: { 0: 'OK?' }
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
				sysChgDsgState: { 0: 'discharged', 1: 'charged' }
			},
			iconRechgTimeMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charge icon mode',
				iconRechgTimeMode: { 0: 'normal', 1: 'blinking' }
			},
			//new delta 2
			chgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging/discharging state on screen',
				chgDsgState: { 0: 'discharged', 1: 'charged' }
			},
			chargerType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				chargerType: {
					0: 'no charging',
					1: 'AC charging',
					2: 'DC adapter charging',
					3: 'solar charging',
					4: 'CC',
					5: 'BC'
				}
			},
			beepMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Beep mode',
				beepMode: { 0: 'normal?', 1: 'quit?' }
			},
			acEnabled: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC enabled',
				acEnabled: { 0: 'off', 1: 'on' }
			},
			acAutoOnCfg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC Auto On Cfg',
				acAutoOnCfg: { 0: 'off?', 1: 'on?' }
			},
			//new delta 2 max
			bmsKitState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'bms Kit State',
				bmsKitState: { 0: '0?', 1: '1?' }
			},
			otherKitState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'other Kit State',
				otherKitState: { 0: '0?', 1: '1?' }
			},
			pv1ChargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				pv1ChargeType: {
					0: '0?',
					1: '1?',
					2: '2?'
				}
			},
			pv2ChargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				pv2ChargeType: {
					0: '0?',
					1: '1?',
					2: '2?'
				}
			},
			pvChargePrioSet: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charger type',
				pvChargePrioSet: {
					0: 'power supply prio?',
					1: 'charge prio?'
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
			reserved: {},
			icoBytes: {}
		}
	},
	ems: {
		number: {
			chgVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Charging voltage',
				role: 'indicator',
				subrole: 'number'
			},
			chgAmp: {
				min: 0,
				max: 50,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Charging current',
				role: 'indicator',
				subrole: 'number'
			},
			lcdShowSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC on LCD',
				role: 'indicator',
				subrole: 'number'
			},
			chgRemainTime: {
				min: 0,
				max: 143999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Remaining charging time',
				role: 'indicator',
				subrole: 'number',
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
				role: 'indicator',
				subrole: 'number',
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
				role: 'indicator',
				subrole: 'number'
			},
			paraVolMin: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Minimum parallel voltage',
				role: 'indicator',
				subrole: 'number'
			},
			paraVolMax: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Maximum parallel voltage',
				role: 'indicator',
				subrole: 'number'
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
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'Charge upper limit',
				icon: 'mdi:battery-charging-90'
			},
			minDsgSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'Discharge lower limit',
				icon: 'mdi:battery-charging-10'
			},
			minOpenOilEbSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'The upper threshold of smart generator auto on Range: 0~100'
			},
			maxCloseOilEbSoc: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'The lower threshold of smart generator auto off Range: 0~100'
			},
			//new delta2
			minOpenOilEb: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'The upper threshold of smart generator auto on Range: 0~100'
			},
			maxCloseOilEb: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				subrole: 'percentage',
				name: 'The lower threshold of smart generator auto off Range: 0~100'
			}
		},
		string: {
			chgState: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Charging state' },
			fanLevel: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Fan level' },
			bmsModel: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'BMS model' },
			openUpsFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'UPS mode enable flag'
			},
			bms0Online: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS online signal: BIT0: hardware online signal; BIT1: software online signal'
			},
			bms1Online: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS online signal: BIT0: hardware online signal; BIT1: software online signal'
			},
			bms2Online: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS online signal: BIT0: hardware online signal; BIT1: software online signal'
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
			}
		},
		diagnostic: {
			bmsWarningState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag',
				bmsWarningState: { 0: 'no warning?', 1: 'hi_temp', 2: 'low_temp', 4: 'overload', 8: 'chg_flag' }
			},
			emsIsNormalFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Energy storage state: 0: sleep; 1: normal',
				emsIsNormalFlag: { 0: 'sleep', 1: 'normal' }
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
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag',
				bmsWarState: { 0: 'no warning?', 1: 'hi_temp', 2: 'low_temp', 4: 'overload', 8: 'chg_flag' }
			},
			bmsIsConnt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'bmsIsConnt',
				bmsIsConnt: { 0: '0?', 1: '1?' }
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
			bms0Online: { entity: 'string' },
			bms1Online: { entity: 'string' },
			bms2Online: { entity: 'string' },
			bmsModel: { entity: 'string' },
			bmsWarningState: { entity: 'diagnostic' },
			chgAmp: { entity: 'number' },
			chgCmd: { entity: 'diagnostic' },
			chgRemainTime: { entity: 'number' },
			chgState: { entity: 'string' },
			chgVol: { entity: 'number' },
			dsgCmd: { entity: 'diagnostic' },
			dsgRemainTime: { entity: 'number' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			f32LcdShowSoc: { entity: 'number' },
			fanLevel: { entity: 'string' },
			lcdShowSoc: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			maxChargeSoc: { entity: 'level' },
			maxCloseOilEbSoc: { entity: 'level' },
			minDsgSoc: { entity: 'level' },
			minOpenOilEbSoc: { entity: 'level' },
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
			cfgFastChgWatts: { entity: 'level' },
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
			faultCode: { entity: 'string' },
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
			bms0Online: { entity: 'string' },
			minOpenOilEbSoc: { entity: 'level' },
			maxChargeSoc: { entity: 'level' },
			chgRemainTime: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			openBmsIdx: { entity: 'string' },
			dsgRemainTime: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			bms1Online: { entity: 'string' },
			chgVol: { entity: 'number' },
			bmsModel: { entity: 'string' },
			dsgCmd: { entity: 'diagnostic' },
			openUpsFlag: { entity: 'string' },
			maxCloseOilEbSoc: { entity: 'level' },
			chgState: { entity: 'string' },
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
			cfgFastChgWatts: { entity: 'level' },
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
			acPassByAutoEn: { entity: 'string' },
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
			faultCode: { entity: 'string' },
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
			bms0Online: { entity: 'string' },
			minOpenOilEbSoc: { entity: 'level' },
			maxChargeSoc: { entity: 'level' },
			chgRemainTime: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			openBmsIdx: { entity: 'string' },
			dsgRemainTime: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			bms1Online: { entity: 'string' },
			chgVol: { entity: 'number' },
			bmsModel: { entity: 'string' },
			dsgCmd: { entity: 'diagnostic' },
			openUpsFlag: { entity: 'string' },
			maxCloseOilEbSoc: { entity: 'level' },
			chgState: { entity: 'string' },
			fanLevel: { entity: 'string' },
			chgAmp: { entity: 'number' },
			bms2Online: { entity: 'string' }
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
			cfgFastChgWatts: { entity: 'level' },
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
			acPassByAutoEn: { entity: 'string' },
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
			faultCode: { entity: 'string' },
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
			cycles: { entity: 'number' }
		},
		ems: {
			chgCmd: { entity: 'diagnostic' },
			bmsWarningState: { entity: 'diagnostic' },
			minDsgSoc: { entity: 'level' },
			paraVolMax: { entity: 'number' },
			f32LcdShowSoc: { entity: 'number' },
			lcdShowSoc: { entity: 'number' },
			emsIsNormalFlag: { entity: 'diagnostic' },
			bms0Online: { entity: 'string' },
			minOpenOilEbSoc: { entity: 'level' },
			maxChargeSoc: { entity: 'level' },
			chgRemainTime: { entity: 'number' },
			paraVolMin: { entity: 'number' },
			openBmsIdx: { entity: 'string' },
			dsgRemainTime: { entity: 'number' },
			maxAvailableNum: { entity: 'string' },
			bms1Online: { entity: 'string' },
			chgVol: { entity: 'number' },
			bmsModel: { entity: 'string' },
			dsgCmd: { entity: 'diagnostic' },
			openUpsFlag: { entity: 'string' },
			maxCloseOilEbSoc: { entity: 'level' },
			chgState: { entity: 'string' },
			fanLevel: { entity: 'string' },
			chgAmp: { entity: 'number' },
			bms2Online: { entity: 'string' }
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
			cfgFastChgWatts: { entity: 'level' },
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
			acPassByAutoEn: { entity: 'string' },
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
			extRj45Port: { entity: 'string' },
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
			ext3p8Port: { entity: 'string' },
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
			ext4p8Port: { entity: 'string' },
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
			watthisconfig: { entity: 'string' },
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
			faultCode: { entity: 'string' },
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
			chgState: { entity: 'string' },
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
			bmsIsConnt: { entity: 'diagnostic' },
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
			cfgAcXboost: { entity: 'iagnostic' },
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
			faultCode: { entity: 'string' },
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
			ext3p8Port: { entity: 'string' },
			ext4p8Port: { entity: 'string' },
			extRj45Port: { entity: 'string' },
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
			undefined: { entity: 'string' },
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
			watchIsConfig: { entity: 'string' },
			wireWatts: { entity: 'string' }
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
			cellTemp: { entity: 'icon' },
			cellVol: { entity: 'icon' },
			hwVersion: { entity: 'icon' },
			maxVolDiff: { entity: 'number' },
			mosState: { entity: 'diagnostic' },
			recv: { entity: 'icon' }
		},
		ems: {
			bmsIsConnt: { entity: 'diagnostic' },
			bmsModel: { entity: 'string' },
			bmsWarState: { entity: 'diagnostic' },
			chgAmp: { entity: 'number' },
			chgCmd: { entity: 'diagnostic' },
			chgRemainTime: { entity: 'number' },
			chgState: { entity: 'string' },
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
			paraVolMin: { entity: 'number' },
			//new delta 2 max
			aviDataLen: { entity: 'icon' }, //'part of kit, excluded'
			kitNum: { entity: 'icon' },
			version: { entity: 'icon' },
			watts: { entity: 'icon' }
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
			reserved: { entity: 'icon' },
			sysVer: { entity: 'string' },
			//new delta 2 max
			acChgRatedPower: { entity: 'number' },
			acPassbyAutoEn: { entity: 'string' },
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
			faultCode: { entity: 'string' },
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
			pv2DcChgCurrent: { entity: 'number' },
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
			watchIsConfig: { entity: 'string' },
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
			bmsKitState: { entity: 'diagnostic' },
			invInWatts: { entity: 'number' },
			invOutWatts: { entity: 'number' },
			minAcSoc: { entity: 'number' },
			newAcAutoOnCfg: { entity: 'switch' },
			otherKitState: { entity: 'diagnostic' },
			pv1ChargeType: { entity: 'diagnostic' },
			pv1ChargeWatts: { entity: 'number' },
			pv2ChargeType: { entity: 'diagnostic' },
			pv2ChargeWatts: { entity: 'number' },
			pvChargePrioSet: { entity: 'diagnostic' }
		}
	},
	river2max: {
		inv: {
			FastChgWatts: { special: 'river2max' },
			SlowChgWatts: { special: 'river2max' },
			cfgAcOutVol: { special: 'river2max' },
			reserved: { special: 'river2max' },
			standbyMins: { special: 'river2max' }
		},
		mppt: {
			acStandbyMins: { special: 'river2max' },
			beepState: { special: 'river2max' },
			carStandbyMin: { special: 'river2max' },
			cfgAcEnabled: { special: 'river2max' },
			cfgAcOutFreq: { special: 'river2max' },
			cfgAcOutVol: { special: 'river2max' },
			cfgAcXboost: { special: 'river2max' },
			cfgChgWatts: { special: 'river2max' },
			dcChgCurrent: { special: 'river2max' },
			dischargeType: { special: 'river2max' },
			powStandbyMin: { special: 'river2max' },
			res: { special: 'river2max' },
			scrStandbyMin: { special: 'river2max' },
			x60ChgType: { special: 'river2max' }
		},
		pd: {
			acAutoOutConfig: { special: 'river2max' },
			acAutoOutPause: { special: 'river2max' },
			beepMode: { special: 'river2max' },
			bpPowerSoc: { special: 'river2max' },
			brightLevel: { special: 'river2max' },
			chgDsgState: { special: 'river2max' },
			chgPowerAC: { special: 'river2max' },
			chgPowerDC: { special: 'river2max' },
			dsgPowerAC: { special: 'river2max' },
			dsgPowerDC: { special: 'river2max' },
			hysteresisAdd: { special: 'river2max' },
			icoBytes: { special: 'river2max' },
			minAcoutSoc: { special: 'river2max' },
			relaySwitchCnt: { special: 'river2max' },
			standbyMin: { special: 'river2max' },
			typecChaWatts: { special: 'river2max' },
			typecUsedTime: { special: 'river2max' },
			watchIsConfig: { special: 'river2max' },
			wireWatts: { special: 'river2max' }
		}
	},
	riverpro: {
		bmsMaster: {
			bqSysStatReq: { special: 'riverpro' },
			maxChargeSoc: { special: 'riverpro' },
			tagChgVol: { special: 'riverpro' }
		},
		inv: {
			cfgAcChgModeFlg: { special: 'riverpro' },
			cfgFanMode: { special: 'riverpro' },
			inTemp: { special: 'riverpro' },
			invInAmp: { special: 'riverpro' },
			invInFreq: { special: 'riverpro' },
			invInVol: { special: 'riverpro' }
		},
		pd: {
			bmsSlave: { special: 'riverpro' },
			carSwitch: { special: 'riverpro' },
			chgPowerAC: { special: 'riverpro' },
			chgPowerDC: { special: 'riverpro' },
			dsgPowerAC: { special: 'riverpro' },
			dsgPowerDC: { special: 'riverpro' },
			ledState: { special: 'riverpro' },
			ledWatts: { special: 'riverpro' },
			typecTemp: { special: 'riverpro' },
			typecUsedTime: { special: 'riverpro' },
			typecWatts: { special: 'riverpro' },
			usb3Watts: { special: 'riverpro' }
		}
	},
	river2max2: {
		bms_bmsStatus: {
			amp: { special: 'river2max' },
			bmsFault: { special: 'xriver2max' },
			bqSysStatReg: { special: 'xriver2max' },
			cellId: { special: 'xriver2max' },
			cycles: { special: 'xriver2max' },
			designCap: { special: 'xriver2max' },
			errCode: { special: 'xriver2max' },
			f32ShowSoc: { special: 'xriver2max' },
			fullCap: { special: 'xriver2max' },
			inputWatts: { special: 'xriver2max' },
			maxCellTemp: { special: 'xriver2max' },
			maxCellVol: { special: 'xriver2max' },
			maxMosTemp: { special: 'xriver2max' },
			minCellTemp: { special: 'xriver2max' },
			minCellVol: { special: 'xriver2max' },
			minMosTemp: { special: 'xriver2max' },
			num: { special: 'xriver2max' },
			openBmsIdx: { special: 'xriver2max' },
			outputWatts: { special: 'xriver2max' },
			remainCap: { special: 'xriver2max' },
			remainTime: { special: 'xriver2max' },
			soc: { special: 'xriver2max' },
			soh: { special: 'xriver2max' },
			sysVer: { special: 'xriver2max' },
			tagChgAmp: { special: 'xriver2max' },
			temp: { special: 'xriver2max' },
			type: { special: 'xriver2max' },
			vol: { special: 'xriver2max' }
		},
		bms_emsStatus: {
			bmsIsConnt: { special: 'river2max' },
			bmsModel: { special: 'xriver2max' },
			bmsWarState: { special: 'xriver2max' },
			chgAmp: { special: 'xriver2max' },
			chgCmd: { special: 'xriver2max' },
			chgRemainTime: { special: 'xriver2max' },
			chgState: { special: 'xriver2max' },
			chgVol: { special: 'xriver2max' },
			dsgCmd: { special: 'xriver2max' },
			dsgRemainTime: { special: 'xriver2max' },
			emsIsNormalFlag: { special: 'xriver2max' },
			f32LcdShowSoc: { special: 'xriver2max' },
			fanLevel: { special: 'xriver2max' },
			lcdShowSoc: { special: 'xriver2max' },
			maxAvailNum: { special: 'xriver2max' },
			maxChargeSoc: { special: 'xriver2max' },
			maxCloseOilEb: { special: 'xriver2max' },
			minDsgSoc: { special: 'xriver2max' },
			minOpenOilEb: { special: 'xriver2max' },
			openBmsIdx: { special: 'xriver2max' },
			openUpsFlag: { special: 'xriver2max' },
			paraVolMax: { special: 'xriver2max' },
			paraVolMin: { special: 'xriver2max' }
		},
		inv: {
			FastChgWatts: { special: 'river2max' },
			SlowChgWatts: { special: 'river2max' },
			cfgAcOutVol: { special: 'river2max' },
			reserved: { special: 'river2max' },
			standbyMins: { special: 'river2max' }
		},
		mppt: {
			acStandbyMins: { special: 'river2max' },
			beepState: { special: 'river2max' },
			carStandbyMin: { special: 'river2max' },
			cfgAcEnabled: { special: 'river2max' },
			cfgAcOutFreq: { special: 'river2max' },
			cfgAcOutVol: { special: 'river2max' },
			cfgAcXboost: { special: 'river2max' },
			cfgChgWatts: { special: 'river2max' },
			dcChgCurrent: { special: 'river2max' },
			dischargeType: { special: 'river2max' },
			powStandbyMin: { special: 'river2max' },
			res: { special: 'river2max' },
			scrStandbyMin: { special: 'river2max' },
			x60ChgType: { special: 'river2max' }
		},
		pd: {
			acAutoOutConfig: { special: 'river2max' },
			acAutoOutPause: { special: 'river2max' },
			beepMode: { special: 'river2max' },
			bpPowerSoc: { special: 'river2max' },
			brightLevel: { special: 'river2max' },
			chgDsgState: { special: 'river2max' },
			chgPowerAC: { special: 'river2max' },
			chgPowerDC: { special: 'river2max' },
			dsgPowerAC: { special: 'river2max' },
			dsgPowerDC: { special: 'river2max' },
			hysteresisAdd: { special: 'river2max' },
			icoBytes: { special: 'river2max' },
			minAcoutSoc: { special: 'river2max' },
			relaySwitchCnt: { special: 'river2max' },
			standbyMin: { special: 'river2max' },
			typecChaWatts: { special: 'river2max' },
			typecUsedTime: { special: 'river2max' },
			watchIsConfig: { special: 'river2max' },
			wireWatts: { special: 'river2max' }
		}
	}
};

const pstationRanges = {
	deltamini: {
		inv: {
			level: {
				cfgFastChgWatts: { min: 200, max: 900 },
				cfgSlowChgWatts: { min: 200, max: 800 }
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 0, max: 8 }
			}
		}
	},
	delta: {
		inv: {
			level: {
				cfgFastChgWatts: { min: 200, max: 1200 },
				cfgSlowChgWatts: { min: 200, max: 700 }
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 0, max: 8 }
			}
		}
	},
	deltamax: {
		inv: {
			level: {
				cfgFastChgWatts: { min: 100, max: 2200 },
				cfgSlowChgWatts: { min: 100, max: 700 }
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 0, max: 8 }
			}
		}
	},
	deltapro: {
		inv: {
			level: {
				cfgFastChgWatts: { min: 100, max: 2900 },
				cfgSlowChgWatts: { min: 200, max: 2900 }
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: { min: 0, max: 13 }
			}
		}
	},
	delta2: {
		mppt: {
			level: {
				cfgChgWatts: { min: 200, max: 1200 }
			}
		}
	},
	delta2max: {
		mppt: {
			number: {
				cfgSlowChgWatts: { min: 200, max: 2400 }
			}
		}
	},
	river2pro: {
		mppt: {
			level: {
				cfgChgWatts: { min: 100, max: 940 }
			}
		}
	},
	river2max: {
		mppt: {
			level: {
				cfgChgWatts: { min: 50, max: 660 }
			}
		}
	},
	river2: {
		mppt: {
			level: {
				cfgChgWatts: { min: 100, max: 360 }
			}
		}
	}
};

const pstreamRanges = {
	pstream600: {
		inverter_heartbeat: {
			number: {
				ratedPower: { max: 600 },
				dynamicWatts: { max: 600 }
			},
			level: {
				permanentWatts: { max: 600 }
			}
		}
	}
};

const pstreamCmd = {
	pstream: {
		inverter_heartbeat: {
			permanentWatts: { mult: 10, msg: { cmdFunc: 20, cmdId: 129, dataLen: 3 } },
			invBrightness: {
				mult: 10,
				msg: { cmdFunc: 20, cmdId: 135, dataLen: 3 }
			},
			lowerLimit: {
				mult: 1,
				msg: { cmdFunc: 20, cmdId: 132, dataLen: 2 }
			},
			supplyPriority: {
				msg: { cmdFunc: 20, cmdId: 130, dataLen: 2 }
			},
			upperLimit: {
				mult: 1,
				msg: { cmdFunc: 20, cmdId: 133, dataLen: 2 }
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
		latestQuotas: {
			from: 'iOS',
			operateType: 'latestQuotas',
			id: '83154039',
			lang: 'de-de',
			params: {},
			version: '1.0'
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
						params: { id: 94, isConfig: 1, bpPowerSoc: 0, minDsgSoc: 0, maxChgSoc: 0 },
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
		}
	},

	delta2: {
		mppt: {
			beepState: { valName: 'enabled', moduleType: 5, operateType: 'quietMode', params: { enabled: 1 } },
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
			}
		},
		pd: {
			dcOutState: { valName: 'enabled', moduleType: 1, operateType: 'dcOutCfg', params: { enabled: 1 } },
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
			carState: { valName: 'enabled', moduleType: 5, operateType: 'mpptCar', params: { enabled: 1 } },
			//bpPowerSoc: { valName: 'isConfig', moduleType: 1, operateType: 'watthConfig', params: { isConfig: 0 } },
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
			standbyMin: {
				valName: 'standbyMin',
				moduleType: 1,
				operateType: 'standbyTime',
				params: { standbyMin: 720 }
			}
		},
		bmsMaster: {
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
		}
	},

	delta2max: {
		mppt: {
			carStandbyMin: {
				valName: 'standbyMins',
				moduleType: 5,
				operateType: 'standbyTime',
				params: { standbyMins: 720 }
			}
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
			newAcAutoOnCfg: {
				valName: 'enabled',
				moduleType: 1,
				operateType: 'newAcAutoOnCfg',
				params: { enabled: 1, minAcSoc: 5 }
			}, //wert holen +5
			lcdOffSec: {
				valName: 'delayOff',
				moduleType: 1,
				operateType: 'lcdCfg',
				params: { brighLevel: 255, delayOff: 300 }
			},
			update: {
				params: {},
				moduleType: 1,
				operateType: 'getAllTaskCfg'
			},
			/*
			bpPowerSoc: {
				valName: 'isConfig',
				moduleType: 1,
				operateType: 'watthConfig',
				params: { isConfig: 1, bpPowerSoc: 55, minDsgSoc: 0, minChgSoc: 0 }
			},
			*/
			bppowerSoc: {
				valName: 'bpPowerSoc',
				moduleType: 1,
				operateType: 'watthConfig',
				params: { isConfig: 1, bpPowerSoc: 55, minDsgSoc: 0, minChgSoc: 0 }
			}
		},
		inv: {
			cfgAcEnabled: {
				valName: 'enabled',
				moduleType: 3,
				operateType: 'acOutCfg',
				params: { enabled: 1 }
			},
			cfgAcXboost: {
				valName: 'xboost',
				moduleType: 3,
				operateType: 'acOutCfg',
				params: { xboost: 1 }
			},
			xboost: {
				valName: 'xboost',
				params: { enabled: 255, out_freq: 255, out_voltage: 4294967295, xboost: 1 },
				moduleType: 3,
				operateType: 'acOutCfg'
			},
			SlowChgWatts: {
				valName: 'slowChgWatts',
				moduleType: 3,
				operateType: 'acChgCfg',
				params: { slowChgWatts: 200, fastChgWatts: 255, chgPauseFlag: 0 }
			},
			standbyMin: {
				valName: 'standbyMin',
				moduleType: 1,
				operateType: 'standbyTime',
				moduleSn: 'MOCK',
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
		}
	}
};

module.exports = {
	pstreamStates,
	pstreamStatesDict,
	pstationStates,
	pstationStatesDict,
	pstationRanges,
	pstreamRanges,
	pstreamCmd,
	pstationCmd
};
