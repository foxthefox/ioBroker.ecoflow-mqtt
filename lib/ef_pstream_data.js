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
				role: 'value'
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
				role: 'value'
			},
			pv1InputCur: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV1 input current',
				unique_id: 'efstream_pv1InputCur',
				role: 'value'
			},
			pv1InputWatts: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV1 input power',
				unique_id: 'efstream_pv1InputWatts',
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
			},
			pv2InputCur: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'PV2 input current',
				unique_id: 'efstream_pv2InputCur',
				role: 'value'
			},
			pv2InputWatts: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV2 input power',
				unique_id: 'efstream_pv2InputWatts',
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
			},
			invOutputWatts: {
				min: 0,
				max: 810,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Inverter AC power',
				unique_id: 'efstream_invOutputWatts',
				role: 'value'
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
				role: 'value'
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
				role: 'value'
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
				role: 'value'
			},
			dynamicWatts: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Dynamic Power',
				unique_id: 'efstream_dynamicWatts',
				role: 'value'
			},
			heartbeatFrequency: {
				min: 0,
				max: 20,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Inverter heartbeat',
				unique_id: 'efstream_heartbeatFrequency',
				role: 'value'
			},

			batChargingTime: {
				min: 0,
				max: 144000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery Charging Time',
				unique_id: 'efstream_batMinutes',
				role: 'value',
				icon: 'mdi:clock-start'
			},
			batDischargingTime: {
				min: 0,
				max: 144000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery Discharging Time',
				unique_id: 'efstream_batMinutes',
				role: 'value',
				icon: 'mdi:clock-start'
			},
			pvToInvWatts: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'pv to inv watts'
			},
			gridConsWatts: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'grid cons watts'
			},
			plugTotalWatts: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug total watts'
			},
			invToPlugWatts: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'inv to plug watts'
			},
			spaceDemandWatts: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'space demand watts'
			},
			invDemandWatts: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'inv demand watts'
			},
			bmsReqChgVol: {
				min: 0,
				max: 65,
				unit_of_measurement: 'V',
				mult: 0.0001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'bms req chg vol'
			},
			bmsReqChgAmp: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'bms req chg amp'
			},
			invToOtherWatts: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'inv to other watts'
			},
			wifiRssi: {
				min: -90,
				max: 10,
				unit_of_measurement: 'dBm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'signal_strength',
				role: 'value',
				name: 'wifi rssi',
				subrole: 'number'
			},
			pvPowerLimitAcPower: {
				min: 0,
				max: 850,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'pv power limit ac power'
			},
			geneNum: {
				min: 0,
				max: 10,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'gene num',
				subrole: 'number'
			},
			consNum: {
				min: 0,
				max: 20,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'cons num',
				subrole: 'number'
			},
			geneWatt: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'gene watt'
			},
			consWatt: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'cons watt'
			},
			acSetWatts: {
				min: 0,
				max: 900,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'ac set watts'
			},
			fisoRxyz: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'fiso rxyz'
			},
			historyPvToInvWatts: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'history pv to inv watts'
			},
			historyBatInputWatts: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'history bat input watts'
			},
			historyInvOutputWatts: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'history inv output watts'
			},
			historyGridConsWatts: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'history grid cons watts'
			},
			historyPlugTotalWatts: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'history plug total watts'
			},
			historyInvToPlugWatts: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'history inv to plug watts'
			},
			historyPermanentWatts: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'history permanent watts'
			},
			espTempsensor: {
				min: -20,
				max: 90,
				unit_of_measurement: '°C',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'esp tempsensor'
			},
			floadLimitOut: {
				min: 0,
				max: 850,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'fload limit out'
			},
			invOutputLoadLimit: {
				min: 0,
				max: 850,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'inv output load limit'
			},
			batOutputLoadLimit: {
				min: 0,
				max: 850,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'bat output load limit'
			},
			batErrorInvLoadLimit: {
				min: 0,
				max: 850,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'bat error inv load limit'
			}
		},
		level: {
			permanentWatts: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				step: 1,
				entity_type: 'number',
				device_class: 'power',
				name: 'Permanent Power',
				unique_id: 'efstream_permanentWatts',
				role: 'level'
			},
			lowerLimit: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				name: 'Battery SOC lower limit',
				unique_id: 'efstream_lowerLimit',
				icon: 'mdi:speedometer',
				role: 'level'
			},
			upperLimit: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'number',
				device_class: 'battery',
				name: 'Battery SOC upper limit',
				unique_id: 'efstream_upperLimit',
				icon: 'mdi:speedometer',
				role: 'level'
			},
			invBrightness: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 0.1,
				step: 1,
				entity_type: 'number',
				device_class: 'illuminance',
				name: 'Inverter brightness',
				unique_id: 'efstream_invBrightness',
				role: 'level',
				subrole: 'brightness'
			},
			ratedPower: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				step: 1,
				entity_type: 'number',
				device_class: 'power',
				name: 'Inverter rated power',
				unique_id: 'efstream_ratedPower',
				role: 'level'
			}
		},
		diagnostic: {
			invErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter Error Code',
				unique_id: 'efstream_invErrCode',
				role: 'info',
				invErrCode: {
					'0': 'OK',
					'8': 'high voltage?',
					'72': 'no voltage?',
					'4096': 'no voltage',
					'4160': '4160',
					'8192': '8192',
					'12288': '12288'
				}
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
				llcStatus: { '1': 'idle', '2': 'starting/check logic', '3': '3', '5': '5', '6': '6' }
			},
			invStatus: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter Status',
				unique_id: 'efstream_invStatus',
				role: 'info',
				invStatus: {
					'1': 'synced/idle',
					'2': 'starting/check inv. logic',
					'6': 'successful grid connection',
					'11': 'disconnected'
				}
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
			},
			bpType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Batterypack Type',
				unique_id: 'efstream_bpType',
				role: 'info',
				bpType: { '0': 'no battery', '1': 'secondary pack', '2': 'primary pack', '3': 'primary pack' }
			}
		},
		string: {
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
			interfaceConnFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'interface conn flag',
				role: 'info'
			},
			pv1CtrlMpptOffFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pv1 ctrl mppt off flag',
				role: 'info'
			},
			pv2CtrlMpptOffFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pv2 ctrl mppt off flag',
				role: 'info'
			},
			batOffFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bat off flag',
				role: 'info'
			},
			llcOffFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc off flag',
				role: 'info'
			},
			acOffFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ac off flag',
				role: 'info'
			},
			uwloadLimitFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'uwload limit flag',
				role: 'info'
			},
			invLoadLimitFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'inv load limit flag',
				role: 'info'
			},
			batLoadLimitFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bat load limit flag',
				role: 'info'
			},
			antiBackFlowFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'anti back flow flag',
				role: 'info'
			},
			uwsocFlag: { entity_type: 'text', entity_category: 'diagnostic', name: 'uwsoc flag', role: 'info' },
			uwlowLightFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'uwlow light flag',
				role: 'info'
			},
			batSystem: { entity_type: 'text', entity_category: 'diagnostic', name: 'bat system', role: 'info' },
			resetReason: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'reset reason',
				role: 'info'
			},
			resetCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'reset count',
				role: 'info'
			},
			meshId: { entity_type: 'text', entity_category: 'diagnostic', name: 'mesh id', role: 'info' },
			meshLayel: { entity_type: 'text', entity_category: 'diagnostic', name: 'mesh layel', role: 'info' },
			selfMac: { entity_type: 'text', entity_category: 'diagnostic', name: 'self mac', role: 'info' },
			parentMac: { entity_type: 'text', entity_category: 'diagnostic', name: 'parent mac', role: 'info' },
			staIpAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'sta ip addr',
				role: 'info'
			},
			wifiErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'wifi err', role: 'info' },
			wifiErrTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wifi err time',
				role: 'info'
			},
			mqttErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'mqtt err', role: 'info' },
			mqttErrTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mqtt err time',
				role: 'info'
			},
			stackFree: { entity_type: 'text', entity_category: 'diagnostic', name: 'stack free', role: 'info' },
			stackMinFree: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'stack min free',
				role: 'info'
			},
			mqttTlsLastErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mqtt tls last err',
				role: 'info'
			},
			mqttTlsStackErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mqtt tls stack err',
				role: 'info'
			},
			mqttSockErrno: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mqtt sock errno',
				role: 'info'
			},
			mqttLastDisReason: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mqtt last dis reason',
				role: 'info'
			},
			mqttConnectReturnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mqtt connect return code',
				role: 'info'
			},
			wifiFirmwareVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wifi firmware version',
				role: 'info'
			},
			wifiConnectChannel: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wifi connect channel',
				role: 'info'
			},
			wifiEncryptMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wifi encrypt mode',
				role: 'info'
			},
			noiseFloor: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'noise floor',
				role: 'info'
			},
			rssiThreshold: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'rssi threshold',
				role: 'info'
			},
			rssiVariance: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'rssi variance',
				role: 'info'
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
			},
			feedPriority: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'all sun to power',
				payload_on: 'only permanent watt',
				name: 'Excessive Power Feed Priority',
				unique_id: 'efstream_feedPriority',
				role: 'switch',
				feedPriority: { '0': 'all sun to power', '1': 'only permanent watt' }
			}
		}
	},
	/*
	InverterHeartbeat2: {
		number: {
			upperLimit: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Charging upper limit',
				role: 'value'
			},
			lowerLimit: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Discharging lower limit',
				role: 'value'
			},
			baseLoad: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Home base load',
				role: 'value'
			},
			powerPlugsPos: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power of plugs',
				role: 'value'
			},
			uptime: {
				min: 0,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Power Stream uptime',
				role: 'value'
			},
			gridWatt_45: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power to Grid',
				role: 'value'
			},
			powerPlugsNeg: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power of plugs (-)',
				role: 'value'
			},
			wifiRssi: {
				min: -90,
				max: 10,
				unit_of_measurement: 'dBm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'signal_strength',
				name: 'wifi RSSI',
				role: 'value'
			},
			X_Unknown_15: {
				min: -1000,
				max: 1000,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				entity_category: 'diagnostic',
				name: 'X_Unknown_15',
				role: 'value'
			},
			X_Unknown_17: {
				min: 0,
				max: 100,
				unit_of_measurement: '',
				mult: 0.0001,
				entity_type: 'sensor',
				entity_category: 'diagnostic',
				name: 'X_Unknown_17',
				role: 'value'
			},
			X_Unknown_34: {
				min: -100,
				max: 100,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				entity_category: 'diagnostic',
				name: 'X_Unknown_34',
				role: 'value'
			}
		},

		string: {
			pv1Active_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_1',
				role: 'info'
			},
			pv1Status_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_2',
				role: 'info'
			},
			pv2Active_3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_3',
				role: 'info'
			},
			pv2Status_4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_4',
				role: 'info'
			},
			X_Unknown_5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_5',
				role: 'info'
			},
			status_6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_6',
				role: 'info'
			},

			status_9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_9',
				role: 'info'
			},
			status_10: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_10',
				role: 'info'
			},
			X_Unknown_11: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_11',
				role: 'info'
			},

			X_Unknown_14: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_14',
				role: 'info'
			},

			X_Unknown_16: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_16',
				role: 'info'
			},

			X_Unknown_18: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_18',
				role: 'info'
			},
			X_Unknown_19: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_19',
				role: 'info'
			},
			X_Unknown_20: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_20',
				role: 'info'
			},
			X_Unknown_21: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_21',
				role: 'info'
			},
			X_Unknown_22: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_22',
				role: 'info'
			},
			X_Unknown_23: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_23',
				role: 'info'
			},
			X_Unknown_24: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_24',
				role: 'info'
			},
			X_Unknown_25: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_25',
				role: 'info'
			},
			X_Unknown_26: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_26',
				role: 'info'
			},
			X_Unknown_27: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_27',
				role: 'info'
			},
			X_Unknown_28: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_28',
				role: 'info'
			},
			X_Unknown_29: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_29',
				role: 'info'
			},
			X_Unknown_30: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_30',
				role: 'info'
			},
			X_Unknown_31: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_31',
				role: 'info'
			},

			X_Unknown_33: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_33',
				role: 'info'
			},

			X_Unknown_35: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_35',
				role: 'info'
			},
			X_Unknown_36: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_36',
				role: 'info'
			},
			X_Unknown_37: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_37',
				role: 'info'
			},
			X_Unknown_38: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_38',
				role: 'info'
			},
			X_Unknown_39: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_39',
				role: 'info'
			},
			X_Unknown_40: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_40',
				role: 'info'
			},
			X_Unknown_41: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_41',
				role: 'info'
			},
			X_Unknown_42: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_42',
				role: 'info'
			},
			X_Unknown_43: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_43',
				role: 'info'
			},
			plugsConn_44: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_44',
				role: 'info'
			},

			X_Unknown_47: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_47',
				role: 'info'
			},
			unixtime_48: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_48',
				role: 'info'
			},
			X_Unknown_49: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_49',
				role: 'info'
			},
			unixtime_50: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_50',
				role: 'info'
			},
			X_Unknown_51: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_Unknown_51',
				role: 'info'
			}
		}
	},
	*/
	energy: {
		number: {
			watth1: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy to house loads',
				unique_id: 'efstream_watth1',
				role: 'value'
			},
			watth2: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy to smart plugs',
				unique_id: 'efstream_watth2',
				role: 'value'
			},
			watth3: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy to battery',
				unique_id: 'efstream_watth3',
				role: 'value'
			},
			watth4: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy from battery',
				unique_id: 'efstream_watth4',
				role: 'value'
			},
			watth5: {
				min: 0,
				max: 60000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy of smart plug',
				unique_id: 'efstream_watth5',
				role: 'value'
			},
			watth6: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Smart plug ON time',
				unique_id: 'efstream_watth6',
				role: 'value'
			},
			watth7: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy from solar PV1',
				unique_id: 'efstream_watth7',
				role: 'value'
			},
			watth8: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy from solar PV2',
				unique_id: 'efstream_watth8',
				role: 'value'
			},
			watth16: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy 16',
				unique_id: 'efstream_watth16',
				role: 'value'
			},
			watth17: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy 17',
				unique_id: 'efstream_watth17',
				role: 'value'
			},
			watth18: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy 18',
				unique_id: 'efstream_watth18',
				role: 'value'
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
				latestQuotas: { '0': 'no trigger', '1': 'trigger' }
			}
		}
	},
	info: {
		diagnostic: {
			status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Cloud Connection Status',
				role: 'info',
				status: { '-2': 'offline', '0': 'offline', '1': 'online' }
			}
		}
	},
	time_task_config_post: {
		tasks: {
			taskIndex: {
				min: 0,
				max: 11,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				name: 'Task index',
				role: 'value'
			},
			type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Task type',
				role: 'info',
				type: {
					1: 'prioritize power supply',
					2: 'prioritize power storage',
					3: 'plug switch off?',
					4: 'plug switch on?'
				}
			},
			timeRange: {
				isConfig: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task configuration',
					role: 'info',
					isConfig: {
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
				timeMode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task activation',
					role: 'info',
					timeMode: {
						'0': 'daily',
						'1': 'weekly',
						'2': 'monthly',
						'3': 'do not repeat'
					}
				},
				startTime: {
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
						min: 0,
						max: 2050,
						unit_of_measurement: 'year',
						mult: 1,
						entity_type: 'sensor',
						name: 'year',
						role: 'value'
					}
				},
				stopTime: {
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
						min: 0,
						max: 2050,
						unit_of_measurement: 'year',
						mult: 1,
						entity_type: 'sensor',
						name: 'year',
						role: 'value'
					}
				},
				type: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task type',
					role: 'info',
					type: {
						1: 'prioritize power supply',
						2: 'prioritize power storage',
						3: 'plug switch off',
						4: 'plug switch on'
					}
				}
			}
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
			ratedPower: { entity: 'level' },
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
			bpType: { entity: 'diagnostic' },
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
			batChargingTime: { entity: 'number' },
			batDischargingTime: { entity: 'number' },
			feedPriority: { entity: 'switch' },

			pvToInvWatts: { entity: 'number' },
			gridConsWatts: { entity: 'number' },
			plugTotalWatts: { entity: 'number' },
			invToPlugWatts: { entity: 'number' },
			spaceDemandWatts: { entity: 'number' },
			invDemandWatts: { entity: 'number' },
			interfaceConnFlag: { entity: 'string' },
			pv1CtrlMpptOffFlag: { entity: 'string' },
			pv2CtrlMpptOffFlag: { entity: 'string' },
			batOffFlag: { entity: 'string' },
			llcOffFlag: { entity: 'string' },
			acOffFlag: { entity: 'string' },
			bmsReqChgVol: { entity: 'number' },
			bmsReqChgAmp: { entity: 'number' },
			uwloadLimitFlag: { entity: 'string' },
			invLoadLimitFlag: { entity: 'string' },
			batLoadLimitFlag: { entity: 'string' },
			antiBackFlowFlag: { entity: 'string' },
			uwsocFlag: { entity: 'string' },
			uwlowLightFlag: { entity: 'string' },
			invToOtherWatts: { entity: 'number' },
			wifiRssi: { entity: 'number' },
			batSystem: { entity: 'string' },
			floadLimitOut: { entity: 'number' },
			invOutputLoadLimit: { entity: 'number' },
			batOutputLoadLimit: { entity: 'number' },
			pvPowerLimitAcPower: { entity: 'number' },
			batErrorInvLoadLimit: { entity: 'number' },
			resetReason: { entity: 'string' },
			resetCount: { entity: 'string' },
			meshId: { entity: 'string' },
			meshLayel: { entity: 'string' },
			selfMac: { entity: 'string' },
			parentMac: { entity: 'string' },
			staIpAddr: { entity: 'string' },
			geneNum: { entity: 'number' },
			consNum: { entity: 'number' },
			geneWatt: { entity: 'number' },
			consWatt: { entity: 'number' },
			wifiErr: { entity: 'string' },
			wifiErrTime: { entity: 'string' },
			mqttErr: { entity: 'string' },
			mqttErrTime: { entity: 'string' },
			stackFree: { entity: 'string' },
			stackMinFree: { entity: 'string' },
			mqttTlsLastErr: { entity: 'string' },
			mqttTlsStackErr: { entity: 'string' },
			mqttSockErrno: { entity: 'string' },
			acSetWatts: { entity: 'number' },
			mqttLastDisReason: { entity: 'string' },
			mqttConnectReturnCode: { entity: 'string' },
			wifiFirmwareVersion: { entity: 'string' },
			wifiConnectChannel: { entity: 'string' },
			wifiEncryptMode: { entity: 'string' },
			fisoRxyz: { entity: 'number' },
			historyPvToInvWatts: { entity: 'number' },
			historyBatInputWatts: { entity: 'number' },
			historyInvOutputWatts: { entity: 'number' },
			historyGridConsWatts: { entity: 'number' },
			historyPlugTotalWatts: { entity: 'number' },
			historyInvToPlugWatts: { entity: 'number' },
			historyPermanentWatts: { entity: 'number' },
			espTempsensor: { entity: 'number' },
			noiseFloor: { entity: 'string' },
			rssiThreshold: { entity: 'string' },
			rssiVariance: { entity: 'string' }
		},
		/*	
		InverterHeartbeat2: {
			pv1Active_1: { entity: 'string' },
			pv1Status_2: { entity: 'string' },
			pv2Active_3: { entity: 'string' },
			pv2Status_4: { entity: 'string' },
			X_Unknown_5: { entity: 'string' },
			status_6: { entity: 'string' },
			upperLimit: { entity: 'number' },
			lowerLimit: { entity: 'number' },
			status_9: { entity: 'string' },
			status_10: { entity: 'string' },
			X_Unknown_11: { entity: 'string' },
			baseLoad: { entity: 'number' },
			powerPlugsPos: { entity: 'number' }, // Smartplug Verbrauch (positiver Wert) ?
			X_Unknown_14: { entity: 'string' },
			X_Unknown_15: { entity: 'number' },
			X_Unknown_16: { entity: 'string' },
			X_Unknown_17: { entity: 'number' },
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
			uptime: { entity: 'number' },
			X_Unknown_33: { entity: 'string' },
			X_Unknown_34: { entity: 'number' },
			X_Unknown_35: { entity: 'string' },
			X_Unknown_36: { entity: 'string' }, // Powerstream X_Unknown_36 und Plug .plug_heartbeat.unknown23 haben den identischen Wert
			X_Unknown_37: { entity: 'string' },
			X_Unknown_38: { entity: 'string' },
			X_Unknown_39: { entity: 'string' },
			X_Unknown_40: { entity: 'string' },
			X_Unknown_41: { entity: 'string' },
			X_Unknown_42: { entity: 'string' },
			X_Unknown_43: { entity: 'string' },
			plugsConn_44: { entity: 'string' }, //plugs for dynWatt available
			gridWatt_45: { entity: 'number' },
			powerPlugsNeg: { entity: 'number' }, // Smartplug Verbrauch (negativer Wert) ?
			X_Unknown_47: { entity: 'string' },
			unixtime_48: { entity: 'string' },
			X_Unknown_49: { entity: 'string' },
			unixtime_50: { entity: 'string' },
			X_Unknown_51: { entity: 'string' },
			wifiRssi: { entity: 'number' }
		},
	*/

		energy: {
			watth1: { entity: 'number' },
			watth2: { entity: 'number' },
			watth3: { entity: 'number' },
			watth4: { entity: 'number' },
			watth7: { entity: 'number' },
			watth8: { entity: 'number' },
			watth16: { entity: 'number' },
			watth17: { entity: 'number' },
			watth18: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const pstreamRanges = {
	pstream600: {
		inverter_heartbeat: {
			level: {
				ratedPower: { max: 600 },
				permanentWatts: { max: 600 }
			}
		}
	},
	pstream800: {
		inverter_heartbeat: {
			level: {
				ratedPower: { max: 800 }
			}
		}
	}
};

const pstreamCmd = {
	pstream: {
		inverter_heartbeat: {
			permanentWatts: { mult: 10, msg: { cmdFunc: 20, cmdId: 129, dataLen: 3 } },
			ratedPower: { mult: 1, msg: { cmdFunc: 20, cmdId: 146, dataLen: 3 } },
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
			},
			feedPriority: {
				msg: { cmdFunc: 20, cmdId: 143, dataLen: 2 }
			}
		},
		action: {
			// {"src":32,"dest":32,"seq":1747550672,"from":"ios"}
			latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
		}
	},
	pstream600: {
		inverter_heartbeat: {
			permanentWatts: { mult: 10, msg: { cmdFunc: 20, cmdId: 129, dataLen: 3 } },
			ratedPower: { mult: 10, msg: { cmdFunc: 20, cmdId: 146, dataLen: 3 } },
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
			},
			feedPriority: {
				msg: { cmdFunc: 20, cmdId: 143, dataLen: 2 }
			}
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
		}
	},
	pstream800: {
		inverter_heartbeat: {
			permanentWatts: { mult: 10, msg: { cmdFunc: 20, cmdId: 129, dataLen: 3 } },
			ratedPower: { mult: 10, msg: { cmdFunc: 20, cmdId: 146, dataLen: 3 } },
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
			},
			feedPriority: {
				msg: { cmdFunc: 20, cmdId: 143, dataLen: 2 }
			}
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
		}
	}
};

const protoMsg = {
	cmdId: {
		146: { cmdFunc: { 20: 'rated_power_pack' } },
		143: { cmdFunc: { 20: 'feed_priority_pack' } },
		142: { cmdFunc: { 20: 'include_plug' } },
		138: { cmdFunc: { 20: 'PowerPack' } },
		136: { cmdFunc: { 20: 'PowerPack' } },
		135: { cmdFunc: { 20: 'brightness_pack' } },
		134: { cmdFunc: { 20: 'time_task_config_post' } },
		133: { cmdFunc: { 20: 'bat_upper_pack' } },
		132: { cmdFunc: { 20: 'bat_lower_pack' } },
		131: { cmdFunc: { 20: 'time_task_config' } },
		130: { cmdFunc: { 20: 'supply_priority_pack' } },
		129: { cmdFunc: { 20: 'permanent_watts_pack' } },
		11: { cmdFunc: { 32: 'country_town_message' } }, //or ping
		4: { cmdFunc: { 20: 'InverterHeartbeat2' } },
		2: { cmdFunc: { 20: 'time_task_config_post' } },
		1: { cmdFunc: { 20: 'inverter_heartbeat' } }
	}
};

const protoSource = `
syntax = "proto3";
message inverter_heartbeat {
    optional uint32 invErrCode = 1;
    optional uint32 invWarnCode = 3;
    optional uint32 pv1ErrCode = 2;
    optional uint32 pv1WarnCode = 4;
    optional uint32 pv2ErrCode = 5;
    optional uint32 pv2WarningCode = 6;
    optional uint32 batErrCode = 7;
    optional uint32 batWarningCode = 8;
    optional uint32 llcErrCode = 9;
    optional uint32 llcWarningCode = 10;
    optional uint32 pv1Status = 11;
    optional uint32 pv2Status = 12;
    optional uint32 batStatus = 13;
    optional uint32 llcStatus = 14;
    optional uint32 invStatus = 15;
    optional int32 pv1InputVolt = 16;
    optional int32 pv1OpVolt = 17;
    optional int32 pv1InputCur = 18;
    optional int32 pv1InputWatts = 19;
    optional int32 pv1Temp = 20;
    optional int32 pv2InputVolt = 21;
    optional int32 pv2OpVolt = 22;
    optional int32 pv2InputCur = 23;
    optional int32 pv2InputWatts = 24;
    optional int32 pv2Temp = 25;
    optional int32 batInputVolt = 26;
    optional int32 batOpVolt = 27;
    optional int32 batInputCur = 28;
    optional int32 batInputWatts = 29;
    optional int32 batTemp = 30;
    optional uint32 batSoc = 31;
    optional int32 llcInputVolt = 32;
    optional int32 llcOpVolt = 33;
    optional int32 llcTemp = 34;
    optional int32 invInputVolt = 35;
    optional int32 invOpVolt = 36;
    optional int32 invOutputCur = 37;
    optional int32 invOutputWatts = 38;
    optional int32 invTemp = 39;
    optional int32 invFreq = 40;
    optional int32 invDcCur = 41;
    optional int32 bpType = 42;
    optional int32 invRelayStatus = 43;
    optional int32 pv1RelayStatus = 44;
    optional int32 pv2RelayStatus = 45;
    optional uint32 installCountry = 46;
    optional uint32 installTown = 47;
    optional uint32 permanentWatts = 48;
    optional uint32 dynamicWatts = 49;
    optional uint32 supplyPriority = 50;
    optional uint32 lowerLimit = 51;
    optional uint32 upperLimit = 52;
    optional uint32 invOnOff = 53;
    optional uint32 wirelessErrCode = 54;
    optional uint32 wirelessWarnCode = 55;
    optional uint32 invBrightness = 56;
    optional uint32 heartbeatFrequency = 57;
    optional uint32 ratedPower = 58;
    optional int32 batChargingTime = 59; //chg_remain_time
    optional int32 batDischargingTime = 60; //dsg_remain_time
	optional int32 feedPriority = 61; //feed_protect

	optional int32 pv_to_inv_watts = 62;
	optional int32 grid_cons_watts = 63;
	optional int32 plug_total_watts = 64;
	optional int32 inv_to_plug_watts = 65;
	optional int32 space_demand_watts = 66;
	optional int32 inv_demand_watts = 67;
	optional uint32 interface_conn_flag = 68;
	optional uint32 pv1_ctrl_mppt_off_flag = 69;
	optional uint32 pv2_ctrl_mppt_off_flag = 70;
	optional uint32 bat_off_flag = 71;
	optional uint32 llc_off_flag = 72;
	optional uint32 ac_off_flag = 73;
	optional uint32 bms_req_chg_vol = 74;
	optional uint32 bms_req_chg_amp = 75;
	optional uint32 uwload_limit_flag = 76;
	optional uint32 inv_load_limit_flag = 77;
	optional uint32 bat_load_limit_flag = 78;
	optional uint32 anti_back_flow_flag = 79;
	optional uint32 uwsoc_flag = 80;
	optional uint32 uwlow_light_flag = 81;
	optional uint32 inv_to_other_watts = 82;
	optional int32 wifi_rssi = 83;
	optional uint32 bat_system = 84;
	optional uint32 fload_limit_out = 85;
	optional uint32 inv_output_load_limit = 86;
	optional uint32 bat_output_load_limit = 87;
	optional uint32 pv_power_limit_ac_power = 98;
	optional uint32 bat_error_inv_load_limit = 99;
	optional uint32 reset_reason = 100;
	optional uint32 reset_count = 101;
	optional uint32 mesh_id = 102;
	optional uint32 mesh_layel = 103;
	optional uint32 self_mac = 104;
	optional uint32 parent_mac = 105;
	optional int32 sta_ip_addr = 106;
	optional int32 gene_num = 107;
	optional int32 cons_num = 108;
	optional int32 gene_watt = 109;
	optional int32 cons_watt = 110;
	optional int32 wifi_err = 111;
	optional int32 wifi_err_time = 112;
	optional int32 mqtt_err = 113;
	optional int32 mqtt_err_time = 114;
	optional uint32 stack_free = 115;
	optional uint32 stack_min_free = 116;
	optional uint32 mqtt_tls_last_err = 117;
	optional uint32 mqtt_tls_stack_err = 118;
	optional uint32 mqtt_sock_errno = 119;
	optional uint32 ac_set_watts = 120;
	optional uint32 mqtt_last_dis_reason = 121;
	optional uint32 mqtt_connect_return_code = 122;
	optional uint32 wifi_firmware_version = 123;
	optional uint32 wifi_connect_channel = 124;
	optional uint32 wifi_encrypt_mode = 125;
	optional float fiso_rxyz = 126;
	optional int32 history_pv_to_inv_watts = 127;
	optional int32 history_bat_input_watts = 128;
	optional int32 history_inv_output_watts = 129;
	optional int32 history_grid_cons_watts = 130;
	optional int32 history_plug_total_watts = 131;
	optional int32 history_inv_to_plug_watts = 132;
	optional uint32 history_permanent_watts = 133;
	optional int32 esp_tempsensor = 134;
	optional uint32 noise_floor = 135;
	optional int32 rssi_threshold = 136;
	optional int32 rssi_variance = 137;
}
message InverterHeartbeat2 {
	optional int32 pv1_active_1 = 1; //pv1 off/on?
	optional int32 pv1_status_2 = 2; //status pv1
	optional int32 pv2_active_3 = 3; //pv2 off/on?
	optional int32 pv2_status_4 = 4; //status pv2
	optional int32 X_Unknown_5 = 5;
	optional int32 status_6 = 6; //status
	optional int32 upperLimit = 7;
	optional int32 lowerLimit = 8;
	optional int32 status_9 = 9; //status 48->4096
	optional int32 status_10 = 10; //status
	optional int32 X_Unknown_11 = 11;
	optional int32 baseLoad = 12;
	optional int32 powerPlugsPos = 13; //stream power to plugs positive
	optional int32 X_Unknown_14 = 14;
	optional int32 X_Unknown_15 = 15; //power?
	optional int32 X_Unknown_16 = 16;
	optional int32 X_Unknown_17 = 17;
	optional int32 X_Unknown_18 = 18;
	optional int32 X_Unknown_19 = 19;
	optional int32 X_Unknown_20 = 20;
	optional int32 X_Unknown_21 = 21;
	optional int32 X_Unknown_22 = 22;
	optional int32 X_Unknown_23 = 23;
	optional int32 X_Unknown_24 = 24; //disch/chargeTime
	optional int32 X_Unknown_25 = 25;
	optional int32 X_Unknown_26 = 26;
	optional int32 X_Unknown_27 = 27; //disch/chargeTime
	optional int32 X_Unknown_28 = 28;
	optional int32 X_Unknown_29 = 29;
	optional int32 X_Unknown_30 = 30;
	optional int32 X_Unknown_31 = 31;
	optional int32 uptime = 32;
	optional int32 X_Unknown_33 = 33; 
	optional int32 X_Unknown_34 = 34;
	optional int32 X_Unknown_35 = 35;
	optional int32 X_Unknown_36 = 36;
	optional int32 X_Unknown_37 = 37;
	optional int32 X_Unknown_38 = 38;
	optional int32 X_Unknown_39 = 39;
	optional int32 X_Unknown_40 = 40;
	optional int32 X_Unknown_41 = 41;
	optional int32 X_Unknown_42 = 42;
	optional int32 X_Unknown_43 = 43;
	optional int32 plugsConn_44 = 44; // plugs connected for dynamic watt
	optional int32 gridWatt_45 = 45;
	optional int32 powerPlugsNeg = 46; // stream power to plugs negative
	optional int32 X_Unknown_47 = 47;
	optional int32 unixtime_48 = 48; // Anfangszeit history werte?
	optional int32 X_Unknown_49 = 49;
	optional int32 unixtime_50 = 50;
	optional int32 X_Unknown_51 = 51; //letzte Zeit history?
	optional int32 wifiRssi = 52; //wifiRssi
 }
message permanent_watts_pack
{
    optional uint32 permanent_watts = 1;
}

message supply_priority_pack
{
    optional uint32 supply_priority = 1;
}

message feed_priority_pack
{
    optional uint32 supply_priority = 1;
}
message bat_lower_pack
{
    optional int32 lower_limit = 1;
}

message bat_upper_pack
{
    optional int32 upper_limit = 1;
}


message PowerItem
{
    optional uint32 timestamp = 1;
    optional sint32 timezone = 2;
    optional uint32 inv_to_grid_power = 3;
    optional uint32 inv_to_plug_power = 4;
    optional int32 battery_power = 5;
    optional uint32 pv1_output_power = 6;
    optional uint32 pv2_output_power = 7;
}

message PowerPack
{
    optional uint32 sys_seq = 1;
    repeated PowerItem sys_power_stream = 2;
}

message EnergyItem
{
    optional uint32 timestamp = 1;
    optional uint32 watth_type = 2;
    repeated uint32 watth = 3;
}

message EnergyPack
{
    optional uint32 sys_seq = 1;
    repeated EnergyItem sys_energy_stream = 2;
}


message EnergyTotalReport
{
    optional uint32 watth_seq = 1;
    optional EnergyItem watth_item = 2;
}

message BatchEnergyTotalReport
{
    optional uint32 watth_seq = 1;
    repeated EnergyItem watth_item = 2;
}

message EnergyTotalReportAck {
	optional uint32 result = 1;
	optional uint32 watth_seq = 2;
	optional uint32 watth_type = 3;
  }

message PowerAckPack
{
    optional uint32 sys_seq = 1;
}

message node_massage
{
    optional string sn = 1;
    optional bytes mac = 2;
}

message mesh_child_node_info
{
    optional uint32 topology_type = 1;
    optional uint32 mesh_protocol = 2;
    optional uint32 max_sub_device_num = 3;
    optional bytes parent_mac_id = 4;
    optional bytes mesh_id = 5;
    repeated node_massage sub_device_list = 6;
}

message country_town_message {
	optional uint32 country = 1;
	optional uint32 town = 2;
  }
  message time_task_config {
	optional uint32 task_index = 1;
	optional time_range_strategy time_range = 2;
	optional uint32 type = 3; // Task type: 1: prioritize power supply; 2: prioritize power storage
  }
  message time_task_delet {
	optional uint32 task_index = 1;
  }
  message time_task_config_post {
	optional time_task_config task1 = 1;
	optional time_task_config task2 = 2;
	optional time_task_config task3 = 3;
	optional time_task_config task4 = 4;
	optional time_task_config task5 = 5;
	optional time_task_config task6 = 6;
	optional time_task_config task7 = 7;
	optional time_task_config task8 = 8;
	optional time_task_config task9 = 9;
	optional time_task_config task10 = 10;
	optional time_task_config task11 = 11;
  }
  message time_task_config_ack {
	optional uint32 task_info = 1;
  }

  message time_range_strategy {
	optional bool is_config = 1; // Whether to enable: 0: no; 1: yes
	optional bool is_enable = 2; // Whether to configure: 0: no; 1: yes
	optional int32 time_mode = 3; // Scheduled mode: 0: daily; 1: weekly; 2: monthly; 3: do not repeat
	optional int32 time_data = 4; // mode == 1, bit0-bit6 represents Monday to Saturday respectively; mode == 2, bit0-bit30 represents the 1st to the 31st
	optional rtc_data start_time = 5;
	optional rtc_data stop_time = 6;
  }

  message rtc_data {
	optional int32 week = 1 [(nanopb).default = 0];
	optional int32 sec = 2 [(nanopb).default = 0];
	optional int32 min = 3 [(nanopb).default = 0];
	optional int32 hour = 4 [(nanopb).default = 0];
	optional int32 day = 5 [(nanopb).default = 0];
	optional int32 month = 6 [(nanopb).default = 0];
	optional int32 year = 7 [(nanopb).default = 0];
  }

  message plug_ack_message {
	optional uint32 ack = 1;
  }
`;

module.exports = {
	pstreamStates,
	pstreamStatesDict,
	pstreamRanges,
	pstreamCmd,
	protoMsg,
	protoSource
};
