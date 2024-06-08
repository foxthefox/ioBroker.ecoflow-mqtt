const powerkitStates = {
	bp1: {
		string: {
			kitNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Unique dynamic ID for CAN Mediation',
				role: 'info'
			},
			canId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Version No.',
				role: 'info'
			},
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		},
		number: {
			oilCloseSoc: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'percentage',
				role: 'indicator',
				name: 'Smart generator shutoff SOC',
				subrole: 'number'
			},
			amp: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Current mA',
				subrole: 'number'
			},
			fullCap: {
				min: 0,
				max: 120000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'indicator',
				name: 'Capacity of full charging (mAh)',
				subrole: 'number'
			},
			soc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'soc',
				subrole: 'number'
			},
			minCellVol: {
				min: 0,
				max: 6,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Minimum battery cell voltage (mV)',
				subrole: 'number'
			},
			ptcRemaintime: {
				min: 0,
				max: 360,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'Remaining time of PTC heating (min)',
				subrole: 'number'
			},
			vol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Voltage (mV)',
				subrole: 'number'
			},
			minCellTemp: {
				min: -30,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Minimum battery cell temperature (℃)',
				subrole: 'number'
			},
			ptcChgErrCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'indicator',
				name: 'Error count of PTC heating',
				subrole: 'number'
			},
			remainCap: {
				min: 0,
				max: 100000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Remaining capacity (mAh)',
				subrole: 'number'
			},
			inWatts: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Input power (W)',
				subrole: 'number'
			},
			temp: {
				min: -30,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Showing current temperature (℃)',
				subrole: 'number'
			},
			maxMosTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Maximum MOS temperature (℃)',
				subrole: 'number'
			},
			remaintime: {
				min: 0,
				max: 15000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duramtion',
				role: 'indicator',
				name: 'Remaining time (min)',
				subrole: 'number'
			},
			maxCellTemp: {
				min: -30,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Maximum battery cell temperature (℃)',
				subrole: 'number'
			},
			minMosTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Minimum MOS temperature (℃)',
				subrole: 'number'
			},
			lcdStandbyMin: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'LCD screen standby time',
				subrole: 'number'
			},
			maxPtcTemp: {
				min: -30,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Maximum PTC temperature (℃)',
				subrole: 'number'
			},
			maxCellVol: {
				min: 0,
				max: 6,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Maximum battery cell voltage (mV)',
				subrole: 'number'
			},
			dsgSetSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'SOC lower limit when discharging the UPS',
				subrole: 'number'
			},
			minPtcTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Minimum PTC temperature (℃)',
				subrole: 'number'
			},
			chgSetSoc: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'SOC upper limit when charging the UPS',
				subrole: 'number'
			},
			oilOpenSoc: {
				min: 0,
				max: 60,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Smart generator startup SOC',
				subrole: 'number'
			},
			designCap: {
				min: 0,
				max: 40000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'indicator',
				name: 'Design capacity (mAh)',
				subrole: 'number'
			},
			outWatts: {
				min: 0,
				max: 6000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Output power (W)',
				subrole: 'number'
			},
			bmsChgUpline: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Upper limit of UPS charging of BMS',
				subrole: 'number'
			},
			remainTime: {
				min: 0,
				max: 15000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'Remaining time',
				subrole: 'number'
			}
		},
		diagnostic: {
			chgDsgMosState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Status of charging and discharging MOS',
				role: 'info',
				chgDsgMosState: { '0': 'OK?' }
			},
			ptcHeatingEvent: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PTC stop heating event',
				role: 'info',
				ptcHeatingEvent: { '0': 'OK?' }
			},
			upsFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Status of UPS mode',
				role: 'info',
				upsFlag: { '0': 'OK?' }
			},
			warnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm code',
				role: 'info',
				warnCode: { '0': 'OK?' }
			},
			openBmsIdex: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Enable the battery or not. 0: not enabled, 1: enabled',
				role: 'info',
				openBmsIdex: { '0': 'not enabled', '1': 'enabled' }
			},
			ptcHeatingFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Current status of PTC: 0: stop, 1: heating, in delay due to error',
				role: 'info',
				ptcHeatingFlag: { '0': 'stop', '1': 'heating, in delay due to error' }
			},
			proChgDsgMosState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Pre-discharging MOS status',
				role: 'info',
				proChgDsgMosState: { '0': 'OK?' }
			},
			ptcMosErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Heating MOS exception',
				role: 'info',
				ptcMosErr: { '0': 'OK?' }
			},
			ptcAllowFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Allow PTC heating indication: 0: not allowed, 1: allowed',
				role: 'info',
				ptcAllowFlag: { '0': 'not allowed', '1': 'allowed' }
			},
			eventCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Event code',
				role: 'info',
				eventCode: { '0': 'OK?' }
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code',
				role: 'info',
				errCode: { '0': 'OK?' }
			},
			ptcTouchFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PTC triggering event: 0: not triggered, 1: heating by charging, 2: heating by discharging',
				role: 'info',
				ptcTouchFlag: { '0': 'not triggered', '1': 'heating by charging', '2': 'heating by discharging' }
			},
			balanceFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Balancing status',
				role: 'info',
				balanceFlag: { '0': 'OK?' }
			},
			bmsType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '0:BP5000 1:BP2000',
				role: 'info',
				bmsType: { '0': 'BP5000', '1': 'BP2000' }
			},
			chgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging/Discharging status',
				role: 'info',
				chgState: { '0': 'charging?', '1': 'discharging?' }
			},
			bmsFault: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BMS permanent failure',
				role: 'info',
				bmsFault: { '0': 'OK?' }
			},
			doubleOilErrorFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Dual smart generator error',
				role: 'info',
				doubleOilErrorFlag: { '0': 'OK?' }
			}
		}
	},
	bbcout: {
		number: {
			dsgEnergy: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'indicator',
				name: 'Accumulative power discharged (Wh)',
				state_class: 'total_increasing',
				subrole: 'number'
			},
			ldOutCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Output current (mA)',
				subrole: 'number'
			},
			ldOutWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Output power (W)',
				subrole: 'number'
			},
			hs1Temp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Radiator 1 temperature (℃)',
				subrole: 'number'
			},
			l1Curr: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Inductor L1 current (mA)',
				subrole: 'number'
			},
			batCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Battery current (mA)',
				subrole: 'number'
			},
			batWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Battery power (W)',
				subrole: 'number'
			},
			l2Curr: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Inductor L2 current (mA)',
				subrole: 'number'
			},
			pcbTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PCB temperature (℃)',
				subrole: 'number'
			},
			hs2Temp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Radiator 2 temperature(℃)',
				subrole: 'number'
			},
			standbyTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'Standby time with open load',
				subrole: 'number'
			},
			batVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Battery voltage (mV)',
				subrole: 'number'
			},
			ldOutVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Output voltage (mV)',
				subrole: 'number'
			},
			dayEnergy: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: 'Daily power discharged (Wh)',
				subrole: 'number'
			}
		},
		diagnostic: {
			workMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating mode, 1: charging mode, 2: power supply mode',
				role: 'info',
				workMode: { '0': 'charging mode', '2': 'power supply mode' }
			},
			dcOutSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'DC output status',
				role: 'info',
				dcOutSta: { '0': 'OK?' }
			},
			warnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm code',
				role: 'info',
				warnCode: { '0': 'OK?' }
			},
			eventCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Event code',
				role: 'info',
				eventCode: { '0': 'OK?' }
			},
			cfgVolTag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Configured output voltage type',
				role: 'info',
				cfgVolTag: { '0': 'OK?' }
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'See the preceding details of error codes.',
				role: 'info',
				errCode: { '0': 'OK?' }
			}
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		}
	},
	bmsTotal: {
		diagnostic: {
			totalChgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Overall charging/discharging status, 0: idle, 1: discharging, 2: charging',
				role: 'info',
				totalChgDsgState: { '0': 'idle', '1': 'discharging', '2': 'charging' }
			},
			doubleOilErrorFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Dual smart generator error',
				role: 'info',
				doubleOilErrorFlag: { '0': 'OK?' }
			},
			remindDsgPtcFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'HUB under-voltage reminder to heat by charging',
				role: 'info',
				remindDsgPtcFlag: { '0': 'OK?' }
			},
			warningEvent: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm event, 0: no warning, 1: charging, shutoff warning not allowed',
				role: 'info',
				warningEvent: { '0': 'no warning', '1': 'charging, shutoff warning not allowed' }
			}
		},
		number: {
			bmsChgUpline: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Upper limit of UPS charging of BMS',
				subrole: 'number'
			},
			totalFullCap: {
				min: 0,
				max: 120000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'indicator',
				name: 'Total battery capacity',
				subrole: 'number'
			},
			totalOutWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Total output power (W)',
				subrole: 'number'
			},
			acDcLsplShutdMin: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'Time to shutoff when both AC and DC enter low power mode',
				subrole: 'number'
			},
			totalInWatts: {
				min: 0,
				max: 3000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Total input power (W)',
				subrole: 'number'
			},
			totalSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Total SOC',
				subrole: 'number'
			},
			lcdOffConfirmS: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'Screen shutoff time',
				subrole: 'number'
			},
			totalAmp: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Total current (0.1 A)',
				subrole: 'number'
			},
			totalRemainTime: {
				min: 0,
				max: 15000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'Total remaining time (min)',
				subrole: 'number'
			},
			oilStartDownline: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Lower limit for the smart generator to start',
				subrole: 'number'
			},
			oilStopUpline: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Upper limit for the smart generator to disable',
				subrole: 'number'
			},
			bmsDsgDownline: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Lower limit of UPS charging of BMS',
				subrole: 'number'
			}
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		}
	},
	kitscc: {
		diagnostic: {
			pv2ErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV2 error code',
				role: 'info',
				pv2ErrCode: { '0': 'OK?' }
			},
			pv1ErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV1 error code',
				role: 'info',
				pv1ErrCode: { '0': 'OK?' }
			},
			alt1VoltLmtEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom restricted voltage 1 enable',
				role: 'info',
				alt1VoltLmtEn: { '0': 'OK?' }
			},
			pv2WorkMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating mode, 1: solar, 2: adapter',
				role: 'info',
				pv2WorkMode: { '1': 'solar', '2': 'adapter' }
			},
			mppt2SwSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT2 button status',
				role: 'info',
				mppt2SwSta: { '0': 'OK?' }
			},
			alt2VoltLmtEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom restricted voltage 2 enable',
				role: 'info',
				alt2VoltLmtEn: { '0': 'OK?' }
			},
			mppt1SwSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT1 button status',
				role: 'info',
				mppt1SwSta: { '0': 'OK?' }
			},
			pv2InputFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV2 input status',
				role: 'info',
				pv2InputFlag: { '0': 'OK?' }
			},
			pv1InputFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV1 input status',
				role: 'info',
				pv1InputFlag: { '0': 'OK?' }
			},
			pv1WorkMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating mode, 1: solar, 2: adapter',
				role: 'info',
				pv1WorkMode: { '1': 'solar', '2': 'adapter' }
			},
			eventCode2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Event code',
				role: 'info',
				eventCode2: { '0': 'OK?' }
			},
			eventCode1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Event code',
				role: 'info',
				eventCode1: { '0': 'OK?' }
			},
			alt1CableUnit: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ALT power charging cable length unit, 0: meter, 1: foot',
				role: 'info',
				alt1CableUnit: { '0': 'meter', '1': 'foot' }
			},
			warnCode2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm code',
				role: 'info',
				warnCode2: { '0': 'OK?' }
			},
			warnCode1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm code',
				role: 'info',
				warnCode1: { '0': 'OK?' }
			},
			//new
			pv1_hot_out: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pv1_hot_out',
				role: 'info',
				pv1_hot_out: { '0': 'OK?', '1': '?' }
			},
			pv2_hot_out: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pv2_hot_out',
				role: 'info',
				pv2_hot_out: { '0': 'OK?', '1': '?' }
			}
		},
		number: {
			pv1InWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'PV1 input power (W)',
				subrole: 'number'
			},
			pv2InWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'PV2 input power (W)',
				subrole: 'number'
			},
			chgEnergy: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: 'Accumulative power discharged (Wh)',
				subrole: 'number'
			},
			l1Curr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Inductor L1 current (mA)',
				subrole: 'number'
			},
			alt2CableUnit: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: 'Accumulative power discharged (Wh)',
				subrole: 'number'
			},
			batCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Battery current (mA)',
				subrole: 'number'
			},
			batWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Battery power (W)',
				subrole: 'number'
			},
			pv1InCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'PV1 input current (mA)',
				subrole: 'number'
			},
			pv2InVol: {
				min: 0,
				max: 70,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'PV2 input voltage (mV)',
				subrole: 'number'
			},
			alt1CableLen: {
				min: 1,
				max: 30,
				unit_of_measurement: 'm',
				mult: 0.01,
				entity_type: 'sensor',
				role: 'indicator',
				name: 'ALT1 power charging cable length: 1 m to 30 m',
				subrole: 'number'
			},
			hs2Temp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Radiator 2 temperature(℃)',
				subrole: 'number'
			},
			alt2CableLen: {
				min: 1,
				max: 30,
				unit_of_measurement: 'm',
				mult: 0.01,
				entity_type: 'sensor',
				role: 'indicator',
				name: 'ALT2 power charging cable length: 1 m to 30 m',
				subrole: 'number'
			},
			dayEnergy: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: 'Daily power discharged (Wh)',
				subrole: 'number'
			},
			alt1VoltLmt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Custom restricted voltage value 1, unit: 100 mV',
				subrole: 'number'
			},
			alt2VoltLmt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Custom restricted voltage value 2, unit: 100 mV',
				subrole: 'number'
			},
			hs1Temp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Radiator 1 temperature (℃)',
				subrole: 'number'
			},
			pv2InCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'PV2 input current (mA)',
				subrole: 'number'
			},
			l2Curr: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Inductor L2 current (mA)',
				subrole: 'number'
			},
			pcbTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PCB temperature (℃)',
				subrole: 'number'
			},
			batVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Battery voltage (mV)',
				subrole: 'number'
			},
			pv1InVol: {
				min: 0,
				max: 70,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'PV1 input voltage (mV)',
				subrole: 'number'
			},
			dsgEnergy: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: 'Accumulative power discharged (Wh)',
				subrole: 'number'
			}
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		}
	},
	onLineModuleSnList: {
		string: {
			m0_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m0_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m0_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m0_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m0_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m0_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m0_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m0_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m1_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m1_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m1_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m1_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m1_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m1_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m1_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m1_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m2_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m2_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m2_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m2_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m2_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m2_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m2_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m2_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m3_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m3_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m3_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m3_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m3_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m3_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m3_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m3_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m4_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m4_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m4_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m4_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m4_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m4_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m4_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m4_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m5_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m5_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m5_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m5_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m5_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m5_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m5_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m5_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m6_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m6_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m6_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m6_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m6_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m6_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m6_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m6_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m7_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m7_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m7_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m7_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m7_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m7_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m7_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m7_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m8_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m8_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m8_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m8_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m8_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m8_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m8_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m8_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			},
			m9_customData: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom data',
				role: 'info'
			},
			m9_loaderVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Loader version',
				role: 'info'
			},
			m9_moduleAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module static address',
				role: 'info'
			},
			m9_moduleDAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module dynamic address',
				role: 'info'
			},
			m9_moduleDetail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module detail',
				role: 'info'
			},
			m9_moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN',
				role: 'info'
			},
			m9_moduleType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module type',
				role: 'info'
			},
			m9_moduleVersion: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module version',
				role: 'info'
			}
		}
	},
	wireless: {
		string: {
			scenes: { entity_type: 'text', entity_category: 'diagnostic', name: 'Scenario', role: 'info' }
		}
	},
	bbcin: {
		diagnostic: {
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'See the preceding details of error codes.',
				role: 'info',
				errCode: { '0': 'OK?' }
			},
			workMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating mode, 1: charging mode, 2: power supply mode',
				role: 'info',
				workMode: { '1': 'charging mode', '2': 'power supply mode' }
			},
			dcInState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'DC input status, 0: not connected, 1: connected',
				role: 'info',
				dcInState: { '0': 'not connected', '1': 'connected' }
			},
			bpOnlinePos: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BP in place information, BIT0:BP1 in place, BIT1:BP2 in place, BIT2:BP3 in place',
				role: 'info',
				bpOnlinePos: { '0': 'OK?' }
			},
			inHwTpe: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Input wire harness type, 0: ALT wire, 1: PV wire',
				role: 'info',
				inHwTpe: { '0': 'ALT wire', '1': 'PV wire' }
			},
			chgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging type, 0: unknown, 1: ALT, 2: PV',
				role: 'info',
				chgType: { '0': 'unknown', '1': 'ALT', '2': 'PV' }
			},
			isCarMoving: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating or not, enable after charging and operating',
				role: 'info',
				isCarMoving: { '0': 'OK?' }
			},
			chargeMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '0: charging, 1: discharging',
				role: 'info',
				chargeMode: { '0': 'charging', '1': 'discharging' }
			},
			warnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm code',
				role: 'info',
				warnCode: { '0': 'OK?' }
			},
			eventCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Event code',
				role: 'info',
				eventCode: { '0': 'OK?' }
			},
			workMode2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating mode, 0: charging mode, 1 reverse charging mode',
				role: 'info',
				workMode2: { '0': 'charging mode', '1': 'reverse charging mode' }
			},
			allowDsgOn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name:
					'Operation status: 1: allow to open the discharging switch, 0: not allow to open the discharging switch',
				role: 'info',
				allowDsgOn: {
					'0': 'not allow to open the discharging switch',
					'1': 'allow to open the discharging switch'
				}
			},
			chgPause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Pause of charging, 0: normal, 1: pause charging',
				role: 'info',
				chgPause: { '0': 'normal', '1': 'pause charging' }
			},
			shakeCtrlDisable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Disable vibration detection while operating, 0 enabled, 1 disabled',
				role: 'info',
				shakeCtrlDisable: { '0': 'enabled', '1': 'disabled' }
			},
			altCableUnit: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ALT power charging cable length unit, 0: meter, 1: foot',
				role: 'info',
				altCableUnit: { '0': 'meter', '1': 'foot' }
			},
			altVoltLmtEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Custom restricted voltage enable',
				role: 'info',
				altVoltLmtEn: { '0': 'OK?' }
			}
		},
		number: {
			dcInVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Input voltage (mV)',
				subrole: 'number'
			},
			dcInCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Input current (mA)',
				subrole: 'number'
			},
			dcInWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Input power (W)',
				subrole: 'number'
			},
			batVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Battery voltage (mV)',
				subrole: 'number'
			},
			batCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Battery current (mA)',
				subrole: 'number'
			},
			batWatts: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Battery power (W)',
				subrole: 'number'
			},
			l1Curr: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Inductor L1 current (mA)',
				subrole: 'number'
			},
			l2Curr: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Inductor L2 current (mA)',
				subrole: 'number'
			},
			hs1Temp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Radiator 1 temperature (℃)',
				subrole: 'number'
			},
			hs2Temp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Radiator 2 temperature(℃)',
				subrole: 'number'
			},
			pcbTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PCB temperature (℃)',
				subrole: 'number'
			},
			chgMaxCurr: {
				min: 0,
				max: 70,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Maximum charging current configured (mA)',
				subrole: 'number'
			},
			dayEnergy: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: 'Daily power discharged (Wh)',
				subrole: 'number'
			},
			dsgEnergy: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: 'Accumulative power discharged (Wh)',
				subrole: 'number'
			},
			altCableLen: {
				min: 1,
				max: 30,
				unit_of_measurement: 'm',
				mult: 0.01,
				entity_type: 'sensor',
				role: 'indicator',
				name: 'ALT power charging cable length',
				subrole: 'number'
			},
			altVoltLmt: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Custom restricted voltage value, unit: 100 mV',
				subrole: 'number'
			}
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		}
	},
	iclow: {
		diagnostic: {
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code',
				role: 'info',
				errCode: { '0': 'OK?' }
			},
			warn_code: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm keyword',
				role: 'info',
				warn_code: { '0': 'OK?' }
			},
			event_code: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Event keyword',
				role: 'info',
				event_code: { '0': 'OK?' }
			},
			fanLevel: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Fan level: 0–3',
				role: 'info',
				fanLevel: { '0': 'OK?' }
			},
			chgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name:
					'Charger type, 0: NULL, 1: AC charging, 2: adapter charging, 3: solar panel charging, 0xff: unknown charger type',
				role: 'info',
				chgType: {
					'0': 'NULL',
					'1': 'AC charging',
					'2': 'adapter charging',
					'3': 'solar panel charging',
					'0xff': 'unknown charger type'
				}
			},
			chgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging/discharging status, bit0~bit1: 00: idle, 01: discharging, 10: charging',
				role: 'info',
				chgDsgState: { '0': 'OK?' }
			},
			protectState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name:
					'Exception information displayed, BIT0: high temperature, BIT1: low temperature, BIT2: overload, BIT3: charging exception, BIT4: fan exception, BIT5: communication exception, BIT6: BMS failure',
				role: 'info',
				protectState: { '0': 'OK?' }
			},
			chrgFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '0: BMS idle or disconnected, 1: allowed to charge 2: not allowed to charge',
				role: 'info',
				chrgFlag: {
					'0': 'BMS idle or disconnected',
					'1': 'allowed to charge',
					'2': 'not allowed to charge'
				}
			},
			chgInType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Input type of charging and discharging, bit0~bit1: 00: null, 01: AC, 10: MPPT, 11: AC && MPPT',
				role: 'info',
				chgInType: { '0': 'OK?' }
			},
			extKitType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'External accessory type, CC/PR/BC(SP), only MR500 is valid',
				role: 'info',
				extKitType: { '0': 'OK?' }
			},
			lsplFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Low power indication, 1: enter low power mode, 0: exit low power mode',
				role: 'info',
				lsplFlag: { '0': 'exit low power mode', '1': 'enter low power mode' }
			},
			warnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Alarm code',
				role: 'info',
				warnCode: { '0': 'OK?' }
			},
			eventCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Event code',
				role: 'info',
				eventCode: { '0': 'OK?' }
			}
		},
		number: {
			batVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Battery voltage (mV)',
				subrole: 'number'
			},
			batCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Battery current (mA)',
				subrole: 'number'
			},
			busVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.0001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Bus Voltage (mV)',
				subrole: 'number'
			},
			dcTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'DC temperature',
				subrole: 'number'
			},
			maxChgCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Maximum chargeable current (mA)',
				subrole: 'number'
			},
			bmsChgCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'BMS chargeable current (mA)',
				subrole: 'number'
			},
			chgBatVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Charging voltage (mA)',
				subrole: 'number'
			},
			realSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '5',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Real SOC',
				subrole: 'number'
			}
		},
		icon: {
			res: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'reserve' }
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		}
	},
	ichigh: {
		number: {
			inVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Input voltage (mV)',
				subrole: 'number'
			},
			inCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Input current (mA)',
				subrole: 'number'
			},
			inWatts: {
				min: 0,
				max: 60,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Input power (W)',
				subrole: 'number'
			},
			outVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Output voltage (mV)',
				subrole: 'number'
			},
			outCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Output current (mA)',
				subrole: 'number'
			},
			outWatts: {
				min: 0,
				max: 60,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Output power (W)',
				subrole: 'number'
			},
			outVa: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'VA',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'apparent_power',
				role: 'indicator',
				name: 'Output apparent power (VA)',
				subrole: 'number'
			},
			acTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'AC temperature',
				subrole: 'number'
			},
			inFreq: {
				min: 0,
				max: 62,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'indicator',
				name: 'Inverter input frequency (Hz) 0,50,60',
				subrole: 'number'
			},
			outFreq: {
				min: 0,
				max: 62,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'indicator',
				name: 'Inverter output frequency (Hz) 0,50,60',
				subrole: 'number'
			},
			cfgOutFreq: {
				min: 0,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'indicator',
				name: 'Output frequency (Hz)',
				subrole: 'number'
			},
			inputWhInDay: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: '1 day input watt-hour',
				subrole: 'number'
			},
			outputWhInDay: {
				min: 0,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'indicator',
				name: '1 day output watt-hour',
				subrole: 'number'
			},
			acVolSet: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'RMS value, 220/110 V',
				subrole: 'number'
			},
			acFreqSet: {
				min: 0,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'indicator',
				name: '50/60Hz',
				subrole: 'number'
			},
			acMaxCurrSer: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Maximum AC input current (A)',
				subrole: 'number'
			},
			passByMaxCurr: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Setting bypass maximum current',
				subrole: 'number'
			},
			standbyTime: {
				min: 0,
				max: 60,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'indicator',
				name: 'Standby time with open load',
				subrole: 'number'
			},
			outAmp2: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Output current channel 2 (mA)',
				subrole: 'number'
			}
		},
		diagnostic: {
			invType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Machine type',
				role: 'info',
				invType: { '0': 'OK?' }
			},
			invSwSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Inverter switch, 1: on, 0: off',
				role: 'info',
				invSwSta: { '0': 'off', '1': 'on' }
			},
			appCfg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Object Application configuration',
				role: 'info',
				appCfg: { '0': 'OK?' }
			},
			powerOn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Command for discharging; valid for the rising edge, 0: off, 1: on',
				role: 'info',
				powerOn: { '0': 'off', '1': 'on' }
			},
			acChgDisable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging not allowed',
				role: 'info',
				acChgDisable: { '0': 'OK?' }
			},
			acRlyCtrlDis: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC earth relay control not allowed',
				role: 'info',
				acRlyCtrlDis: { '0': 'OK?' }
			},
			wakeup: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Exit low power mode, wake up',
				role: 'info',
				wakeup: { '0': 'OK?' }
			},
			ch2Watt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel 2 power Is the power of the standalone socket on the KIT for the MM100 project',
				role: 'info',
				ch2Watt: { '0': 'OK?' }
			},
			passByModeEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name:
					'Use the grid power in priority when the button is disabled, 0: ignored, 1: enabled, 2: disabled   ',
				role: 'info',
				passByModeEn: { '0': 'ignored', '1': 'enabled', '2': 'disabled' }
			}
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		}
	},
	ldac: {
		number: {
			acTemp1: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PCB temperature measurement (℃)',
				subrole: 'number'
			},
			acTemp2: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PCB temperature measurement (℃)',
				subrole: 'number'
			},
			acInVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Input voltage (mV)',
				subrole: 'number'
			},
			acTotalWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Total active power (W)',
				subrole: 'number'
			}
		},
		array: {
			acChWatt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: '6-way channel active power (W)'
			},
			errorCodeAdd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Matching of comments for error codes (supplementary)'
			},
			acChCur: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: '6-way channel current (mA)'
			}
		},
		diagnostic: {
			acChSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '6-way channel status, bot0->ch1, 0: off, 1: on',
				role: 'info',
				acChSta: { '0': 'off', '1': 'on' }
			},
			acSetChSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Setting 6-way channel status, bot0->ch1, 0: not allowed to use, 1: allowed to use  ',
				role: 'info',
				acSetChSta: { '0': 'not allowed to use', '1': 'allowed to use' }
			}
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
			}
		}
	},
	lddc: {
		array: {
			errorCode: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'Error code' },
			dcChCur: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: '12-way channel current (mA)'
			},
			dcChWatt: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Total power + 12-way channel active power (W)'
			},
			errorCodeAdd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Error codes (supplementary)'
			}
		},
		number: {
			dcInVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Input voltage (mV)',
				subrole: 'number'
			},
			dcTotalWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Total power (W)',
				subrole: 'number'
			},
			dcTemp1: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PCB temperature measurement (℃)',
				subrole: 'number'
			},
			dcTemp2: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PCB temperature measurement (℃)',
				subrole: 'number'
			}
		},
		diagnostic: {
			dcChRelay: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '6-way relay status, bit0->ch1, 0: off, 1: on',
				role: 'info',
				dcChRelay: { '0': 'off', '1': 'on' }
			},
			dcChSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '12 way channel status bit0->ch1 0: off 1: on',
				role: 'info',
				dcChSta: { '0': 'off', '1': 'on' }
			},
			dcSetChSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Setting 12 way channel status bot0->ch1 0: not allowed to use 1: allowed to use',
				role: 'info',
				dcSetChSta: { '0': 'not allowed to use', '1': 'allowed to use' }
			}
		},
		string: {
			moduleSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module SN#',
				role: 'info'
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
			getAll: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get all (latest Quotas)',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getAll: { 0: 'no trigger', 1: 'trigger' }
			},
			getBccin: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get bccin',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getBccin: { 0: 'no trigger', 1: 'trigger' }
			},
			getBccout: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get bccout',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getBccout: { 0: 'no trigger', 1: 'trigger' }
			},
			getIclow: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get iclow',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getIclow: { 0: 'no trigger', 1: 'trigger' }
			},
			getIchigh: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get ichigh',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getIchigh: { 0: 'no trigger', 1: 'trigger' }
			},
			getBp2000: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get bp data',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getBp2000: { 0: 'no trigger', 1: 'trigger' }
			},
			getLdac: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get ldac',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getLdac: { 0: 'no trigger', 1: 'trigger' }
			},
			getLddc: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get lddc',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getLddc: { 0: 'no trigger', 1: 'trigger' }
			},
			getWireless: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get wireless',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getWireless: { 0: 'no trigger', 1: 'trigger' }
			},
			getKitscc: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get kitscc',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getKitscc: { 0: 'no trigger', 1: 'trigger' }
			},
			getOnLineModuleSnList: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get OnLineModuleSnList',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getOnLineModuleSnList: { 0: 'no trigger', 1: 'trigger' }
			}
		}
	},
	info: {
		diagnostic: {
			status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Status',
				role: 'info',
				status: { 0: 'offline', 1: 'online' }
			}
		}
	}
};

const powerkitStatesDict = {
	powerkit: {
		bp1: {
			moduleSn: { entity: 'string' },
			kitNum: { entity: 'string' },
			oilCloseSoc: { entity: 'number' },
			chgDsgMosState: { entity: 'diagnostic' },
			amp: { entity: 'number' },
			fullCap: { entity: 'number' },
			soc: { entity: 'number' },
			ptcHeatingEvent: { entity: 'diagnostic' },
			minCellVol: { entity: 'number' },
			upsFlag: { entity: 'diagnostic' },
			warnCode: { entity: 'diagnostic' },
			ptcRemaintime: { entity: 'number' },
			vol: { entity: 'number' },
			openBmsIdex: { entity: 'diagnostic' },
			ptcHeatingFlag: { entity: 'diagnostic' },
			minCellTemp: { entity: 'number' },
			ptcChgErrCnt: { entity: 'number' },
			remainCap: { entity: 'number' },
			inWatts: { entity: 'number' },
			proChgDsgMosState: { entity: 'diagnostic' },
			temp: { entity: 'number' },
			maxMosTemp: { entity: 'number' },
			chgState: { entity: 'diagnostic' },
			remaintime: { entity: 'number' },
			canId: { entity: 'string' },
			maxCellTemp: { entity: 'number' },
			ptcMosErr: { entity: 'diagnostic' },
			minMosTemp: { entity: 'number' },
			ptcAllowFlag: { entity: 'diagnostic' },
			lcdStandbyMin: { entity: 'number' },
			maxPtcTemp: { entity: 'number' },
			eventCode: { entity: 'diagnostic' },
			maxCellVol: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			dsgSetSoc: { entity: 'number' },
			ptcTouchFlag: { entity: 'diagnostic' },
			minPtcTemp: { entity: 'number' },
			balanceFlag: { entity: 'diagnostic' },
			bmsFault: { entity: 'diagnostic' },
			bmsType: { entity: 'diagnostic' },
			chgSetSoc: { entity: 'number' },
			oilOpenSoc: { entity: 'number' },
			designCap: { entity: 'number' },
			outWatts: { entity: 'number' },
			bmsChgUpline: { entity: 'number' },
			doubleOilErrorFlag: { entity: 'diagnostic' },
			remainTime: { entity: 'number' }
		},
		bbcout: {
			moduleSn: { entity: 'string' },
			dsgEnergy: { entity: 'number' },
			ldOutCurr: { entity: 'number' },
			ldOutWatts: { entity: 'number' },
			workMode: { entity: 'diagnostic' },
			hs1Temp: { entity: 'number' },
			dcOutSta: { entity: 'diagnostic' },
			l1Curr: { entity: 'number' },
			batCurr: { entity: 'number' },
			warnCode: { entity: 'diagnostic' },
			batWatts: { entity: 'number' },
			eventCode: { entity: 'diagnostic' },
			l2Curr: { entity: 'number' },
			cfgVolTag: { entity: 'diagnostic' },
			pcbTemp: { entity: 'number' },
			errCode: { entity: 'diagnostic' },
			hs2Temp: { entity: 'number' },
			standbyTime: { entity: 'number' },
			batVol: { entity: 'number' },
			ldOutVol: { entity: 'number' },
			dayEnergy: { entity: 'number' }
		},
		bmsTotal: {
			totalChgDsgState: { entity: 'diagnostic' },
			bmsChgUpline: { entity: 'number' },
			totalFullCap: { entity: 'number' },
			totalOutWatts: { entity: 'number' },
			doubleOilErrorFlag: { entity: 'diagnostic' },
			acDcLsplShutdMin: { entity: 'number' },
			totalInWatts: { entity: 'number' },
			totalSoc: { entity: 'number' },
			lcdOffConfirmS: { entity: 'number' },
			remindDsgPtcFlag: { entity: 'diagnostic' },
			totalAmp: { entity: 'number' },
			totalRemainTime: { entity: 'number' },
			warningEvent: { entity: 'diagnostic' },
			oilStartDownline: { entity: 'number' },
			oilStopUpline: { entity: 'number' },
			bmsDsgDownline: { entity: 'number' }
		},
		kitscc: {
			moduleSn: { entity: 'string' },
			pv2ErrCode: { entity: 'diagnostic' },
			pv1InWatts: { entity: 'number' },
			pv2InWatts: { entity: 'number' },
			pv1ErrCode: { entity: 'diagnostic' },
			chgEnergy: { entity: 'number' },
			l1Curr: { entity: 'number' },
			alt2CableUnit: { entity: 'number' },
			batCurr: { entity: 'number' },
			batWatts: { entity: 'number' },
			pv1InCurr: { entity: 'number' },
			pv2InVol: { entity: 'number' },
			alt1VoltLmtEn: { entity: 'diagnostic' },
			pv2WorkMode: { entity: 'diagnostic' },
			alt1CableLen: { entity: 'number' },
			hs2Temp: { entity: 'number' },
			mppt2SwSta: { entity: 'diagnostic' },
			alt2CableLen: { entity: 'number' },
			alt2VoltLmtEn: { entity: 'diagnostic' },
			dayEnergy: { entity: 'number' },
			mppt1SwSta: { entity: 'diagnostic' },
			alt1VoltLmt: { entity: 'number' },
			alt2VoltLmt: { entity: 'number' },
			hs1Temp: { entity: 'number' },
			pv2InputFlag: { entity: 'diagnostic' },
			pv1InputFlag: { entity: 'diagnostic' },
			pv2InCurr: { entity: 'number' },
			pv1WorkMode: { entity: 'diagnostic' },
			l2Curr: { entity: 'number' },
			eventCode2: { entity: 'diagnostic' },
			pcbTemp: { entity: 'number' },
			eventCode1: { entity: 'diagnostic' },
			batVol: { entity: 'number' },
			pv1InVol: { entity: 'number' },
			alt1CableUnit: { entity: 'diagnostic' },
			warnCode2: { entity: 'diagnostic' },
			warnCode1: { entity: 'diagnostic' },
			//new
			pv1_hot_out: { entity: 'diagnostic' },
			pv2_hot_out: { entity: 'diagnostic' },
			dsgEnergy: { entity: 'number' }
		},
		onLineModuleSnList: {
			m0_customData: { entity: 'string' },
			m0_loaderVersion: { entity: 'string' },
			m0_moduleAddr: { entity: 'string' },
			m0_moduleDAddr: { entity: 'string' },
			m0_moduleDetail: { entity: 'string' },
			m0_moduleSn: { entity: 'string' },
			m0_moduleType: { entity: 'string' },
			m0_moduleVersion: { entity: 'string' },
			m1_customData: { entity: 'string' },
			m1_loaderVersion: { entity: 'string' },
			m1_moduleAddr: { entity: 'string' },
			m1_moduleDAddr: { entity: 'string' },
			m1_moduleDetail: { entity: 'string' },
			m1_moduleSn: { entity: 'string' },
			m1_moduleType: { entity: 'string' },
			m1_moduleVersion: { entity: 'string' },
			m2_customData: { entity: 'string' },
			m2_loaderVersion: { entity: 'string' },
			m2_moduleAddr: { entity: 'string' },
			m2_moduleDAddr: { entity: 'string' },
			m2_moduleDetail: { entity: 'string' },
			m2_moduleSn: { entity: 'string' },
			m2_moduleType: { entity: 'string' },
			m2_moduleVersion: { entity: 'string' },
			m3_customData: { entity: 'string' },
			m3_loaderVersion: { entity: 'string' },
			m3_moduleAddr: { entity: 'string' },
			m3_moduleDAddr: { entity: 'string' },
			m3_moduleDetail: { entity: 'string' },
			m3_moduleSn: { entity: 'string' },
			m3_moduleType: { entity: 'string' },
			m3_moduleVersion: { entity: 'string' },
			m4_customData: { entity: 'string' },
			m4_loaderVersion: { entity: 'string' },
			m4_moduleAddr: { entity: 'string' },
			m4_moduleDAddr: { entity: 'string' },
			m4_moduleDetail: { entity: 'string' },
			m4_moduleSn: { entity: 'string' },
			m4_moduleType: { entity: 'string' },
			m4_moduleVersion: { entity: 'string' },
			m5_customData: { entity: 'string' },
			m5_loaderVersion: { entity: 'string' },
			m5_moduleAddr: { entity: 'string' },
			m5_moduleDAddr: { entity: 'string' },
			m5_moduleDetail: { entity: 'string' },
			m5_moduleSn: { entity: 'string' },
			m5_moduleType: { entity: 'string' },
			m5_moduleVersion: { entity: 'string' },
			m6_customData: { entity: 'string' },
			m6_loaderVersion: { entity: 'string' },
			m6_moduleAddr: { entity: 'string' },
			m6_moduleDAddr: { entity: 'string' },
			m6_moduleDetail: { entity: 'string' },
			m6_moduleSn: { entity: 'string' },
			m6_moduleType: { entity: 'string' },
			m6_moduleVersion: { entity: 'string' },
			m7_customData: { entity: 'string' },
			m7_loaderVersion: { entity: 'string' },
			m7_moduleAddr: { entity: 'string' },
			m7_moduleDAddr: { entity: 'string' },
			m7_moduleDetail: { entity: 'string' },
			m7_moduleSn: { entity: 'string' },
			m7_moduleType: { entity: 'string' },
			m7_moduleVersion: { entity: 'string' },
			m8_customData: { entity: 'string' },
			m8_loaderVersion: { entity: 'string' },
			m8_moduleAddr: { entity: 'string' },
			m8_moduleDAddr: { entity: 'string' },
			m8_moduleDetail: { entity: 'string' },
			m8_moduleSn: { entity: 'string' },
			m8_moduleType: { entity: 'string' },
			m8_moduleVersion: { entity: 'string' },
			m9_customData: { entity: 'string' },
			m9_loaderVersion: { entity: 'string' },
			m9_moduleAddr: { entity: 'string' },
			m9_moduleDAddr: { entity: 'string' },
			m9_moduleDetail: { entity: 'string' },
			m9_moduleSn: { entity: 'string' },
			m9_moduleType: { entity: 'string' },
			m9_moduleVersion: { entity: 'string' }
		},
		wireless: { scenes: { entity: 'string' } },
		bbcin: {
			moduleSn: { entity: 'string' },
			errCode: { entity: 'diagnostic' },
			dcInVol: { entity: 'number' },
			dcInCurr: { entity: 'number' },
			dcInWatts: { entity: 'number' },
			batVol: { entity: 'number' },
			batCurr: { entity: 'number' },
			batWatts: { entity: 'number' },
			l1Curr: { entity: 'number' },
			l2Curr: { entity: 'number' },
			hs1Temp: { entity: 'number' },
			hs2Temp: { entity: 'number' },
			pcbTemp: { entity: 'number' },
			workMode: { entity: 'diagnostic' },
			chgMaxCurr: { entity: 'number' },
			dayEnergy: { entity: 'number' },
			dsgEnergy: { entity: 'number' },
			dcInState: { entity: 'diagnostic' },
			bpOnlinePos: { entity: 'diagnostic' },
			inHwTpe: { entity: 'diagnostic' },
			chgType: { entity: 'diagnostic' },
			isCarMoving: { entity: 'diagnostic' },
			chargeMode: { entity: 'diagnostic' },
			warnCode: { entity: 'diagnostic' },
			eventCode: { entity: 'diagnostic' },
			workMode2: { entity: 'diagnostic' },
			allowDsgOn: { entity: 'diagnostic' },
			chgPause: { entity: 'diagnostic' },
			shakeCtrlDisable: { entity: 'diagnostic' },
			altCableLen: { entity: 'number' },
			altCableUnit: { entity: 'diagnostic' },
			altVoltLmt: { entity: 'number' },
			altVoltLmtEn: { entity: 'diagnostic' }
		},
		iclow: {
			moduleSn: { entity: 'string' },
			errCode: { entity: 'diagnostic' },
			batVol: { entity: 'number' },
			warn_code: { entity: 'diagnostic' },
			event_code: { entity: 'diagnostic' },
			batCurr: { entity: 'number' },
			busVol: { entity: 'number' },
			dcTemp: { entity: 'number' },
			fanLevel: { entity: 'diagnostic' },
			chgType: { entity: 'diagnostic' },
			chgDsgState: { entity: 'diagnostic' },
			protectState: { entity: 'diagnostic' },
			maxChgCurr: { entity: 'number' },
			bmsChgCurr: { entity: 'number' },
			chgBatVol: { entity: 'number' },
			chrgFlag: { entity: 'diagnostic' },
			realSoc: { entity: 'number' },
			chgInType: { entity: 'diagnostic' },
			extKitType: { entity: 'diagnostic' },
			lsplFlag: { entity: 'diagnostic' },
			res: { entity: 'icon' },
			warnCode: { entity: 'diagnostic' },
			eventCode: { entity: 'diagnostic' }
		},
		ichigh: {
			moduleSn: { entity: 'string' },
			inVol: { entity: 'number' },
			inCurr: { entity: 'number' },
			inWatts: { entity: 'number' },
			outVol: { entity: 'number' },
			outCurr: { entity: 'number' },
			outWatts: { entity: 'number' },
			outVa: { entity: 'number' },
			acTemp: { entity: 'number' },
			invType: { entity: 'diagnostic' },
			inFreq: { entity: 'number' },
			outFreq: { entity: 'number' },
			invSwSta: { entity: 'diagnostic' },
			cfgOutFreq: { entity: 'number' },
			inputWhInDay: { entity: 'number' },
			outputWhInDay: { entity: 'number' },
			appCfg: { entity: 'diagnostic' },
			powerOn: { entity: 'diagnostic' },
			acVolSet: { entity: 'number' },
			acFreqSet: { entity: 'number' },
			acMaxCurrSer: { entity: 'number' },
			acChgDisable: { entity: 'diagnostic' },
			acRlyCtrlDis: { entity: 'diagnostic' },
			wakeup: { entity: 'diagnostic' },
			passByMaxCurr: { entity: 'number' },
			standbyTime: { entity: 'number' },
			ch2Watt: { entity: 'diagnostic' },
			outAmp2: { entity: 'number' },
			passByModeEn: { entity: 'diagnostic' }
		},
		ldac: {
			moduleSn: { entity: 'string' },
			acTemp1: { entity: 'number' },
			acChWatt: { entity: 'array' },
			errorCodeAdd: { entity: 'array' },
			acChCur: { entity: 'array' },
			acChSta: { entity: 'diagnostic' },
			acTemp2: { entity: 'number' },
			acInVol: { entity: 'number' },
			acTotalWatts: { entity: 'number' },
			acSetChSta: { entity: 'diagnostic' }
		},
		lddc: {
			moduleSn: { entity: 'string' },
			errorCode: { entity: 'array' },
			dcInVol: { entity: 'number' },
			dcChCur: { entity: 'array' },
			dcChWatt: { entity: 'array' },
			dcTotalWatts: { entity: 'number' },
			dcTemp1: { entity: 'number' },
			dcTemp2: { entity: 'number' },
			dcChRelay: { entity: 'diagnostic' },
			dcChSta: { entity: 'diagnostic' },
			dcSetChSta: { entity: 'diagnostic' },
			errorCodeAdd: { entity: 'array' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getAll: { entity: 'switch' },
			getBccin: { entity: 'switch' },
			getBccout: { entity: 'switch' },
			getIclow: { entity: 'switch' },
			getIchigh: { entity: 'switch' },
			getBp2000: { entity: 'switch' },
			getLdac: { entity: 'switch' },
			getLddc: { entity: 'switch' },
			getWireless: { entity: 'switch' },
			getKitscc: { entity: 'switch' },
			getOnLineModuleSnList: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const powerkitRanges = {
	powerkitbp2000: {
		bp1: {
			number: {
				fullCap: { max: 40000 },
				remainCap: { max: 40000 },
				designCap: { max: 40000 }
			}
		}
	},
	powerkitbp5000: {
		bp1: {
			number: {
				fullCap: { max: 100000 },
				remainCap: { max: 100000 },
				designCap: { max: 100000 }
			}
		}
	}
};

const powerkitCmd = {
	powerkit: {
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
			getAll: {
				sn: 'M106ZAB4Z000001F',
				params: { quotas: [ 'bbcin', 'bbcout', 'iclow', 'ichigh', 'bp2000', 'ldac', 'lddc', 'wireless' ] }
			},
			getBccin: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'bbcin' ] } },
			getBccout: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'bbcout' ] } },
			getIclow: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'iclow' ] } },
			getIchigh: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'ichigh' ] } },
			getBp2000: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'bp2000' ] } },
			getLdac: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'ldac' ] } },
			getLddc: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'lddc' ] } },
			getWireless: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'wireless' ] } },
			getKitscc: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'kitscc' ] } },
			getOnLineModuleSnList: { sn: 'M106ZAB4Z000001F', params: { quotas: [ 'onlinemodulesnlist' ] } }
		}
	}
};

module.exports = {
	powerkitStates,
	powerkitStatesDict,
	powerkitRanges,
	powerkitCmd
};
