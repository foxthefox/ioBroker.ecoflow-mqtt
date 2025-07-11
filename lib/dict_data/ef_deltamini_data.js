const deviceStates = {
	bmsMaster: {
		number: {
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
			cycles: {
				min: 0,
				max: 6000,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				name: 'Number of cycles',
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
			fullCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Full capacity',
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
			remainCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				name: 'Remaining capacity',
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
			vol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Voltage',
				role: 'value'
			}
		},
		string: {
			bmsFault: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS permanent fault'
			},
			bqSysStatReg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BQ hardware protection register'
			},
			num: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS number'
			},
			openBmsIdx: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Battery pack enable state'
			},
			soh: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Health status'
			},
			sysVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'System version'
			}
		},
		diagnostic: {
			cellId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Battery capacity type',
				cellId: {
					'1': '2.5 Ah per battery',
					'2': '2 Ah per battery'
				}
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Global error code',
				errCode: {
					'0': 'OK?'
				}
			},
			type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS type',
				type: {
					'1': 'Lithium battery',
					'2': 'Oil-powered'
				}
			}
		}
	},
	ems: {
		diagnostic: {
			bms0Online: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS0 online signal',
				bms0Online: {
					'0': 'not online?',
					'1': 'HW online',
					'2': 'SW online',
					'3': 'HW-SW online'
				}
			},
			bms1Online: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS1 online signal',
				bms1Online: {
					'0': 'not online?',
					'1': 'HW online',
					'2': 'SW online',
					'3': 'HW-SW online'
				}
			},
			bms2Online: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS2 online signal',
				bms2Online: {
					'0': 'not online?',
					'1': 'HW online',
					'2': 'SW online',
					'3': 'HW-SW online'
				}
			},
			bmsWarningState: {
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
			chgCmd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charge switch',
				chgCmd: {
					'0': 'off',
					'1': 'on',
					'2': '2?'
				}
			},
			chgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging state',
				chgState: {
					'0': 'disabled',
					'1': 'CC',
					'2': 'CV',
					'3': 'UPS',
					'4': 'PARA 0x55: Charging error'
				}
			},
			dsgCmd: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Discharge switch',
				dsgCmd: {
					'0': 'off',
					'1': 'on',
					'2': '2?'
				}
			},
			emsIsNormalFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Energy storage state: 0: sleep; 1: normal',
				emsIsNormalFlag: {
					'0': 'sleep',
					'1': 'normal'
				}
			}
		},
		string: {
			bmsModel: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'BMS model'
			},
			fanLevel: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fan level'
			},
			maxAvailableNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Maximum available quantity'
			},
			openBmsIdx: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Open BMS index'
			},
			openUpsFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'UPS mode enable flag'
			}
		},
		number: {
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
			paraVolMin: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Minimum parallel voltage',
				role: 'value'
			}
		},
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
			}
		}
	},
	inv: {
		diagnostic: {
			acDipSwitch: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC fast/slow charging dip switch',
				acDipSwitch: {
					'0': 'unknown',
					'1': 'fast charging mode',
					'2': 'slow charging mode'
				}
			},
			cfgAcOutFreq: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output frequency (Hz)',
				cfgAcOutFreq: {
					'1': '50 Hz',
					'2': '60 Hz',
					'255': 'ignored'
				}
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
			chgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'AC charging pause flag',
				chgPauseFlag: {
					'0': 'no pause?',
					'1': 'charging stopped'
				}
			},
			dischargeType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Discharging type',
				dischargeType: {
					'0': 'no discharge?',
					'1': 'AC discharging',
					'2': 'PR',
					'3': 'BC'
				}
			},
			fanState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fan state',
				fanState: {
					'0': 'disabled',
					'1': 'Level 1',
					'2': 'Level 2',
					'3': 'Level 3'
				}
			}
		},
		number: {
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
			cfgFastChgWatts: {
				min: 200,
				max: 900,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Maximum charging power for AC fast charging (W)'
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
			outputWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Discharging power',
				role: 'value'
			}
		},
		switch: {
			cfgAcEnabled: {
				entity_type: 'switch',
				device_class: 'outlet',
				role: 'switch',
				name: 'AC discharge (INV) switch setting',
				payload_off: 'off',
				payload_on: 'on',
				cfgAcEnabled: {
					'0': 'off',
					'1': 'on'
				}
			},
			cfgAcWorkMode: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'AC charging mode',
				payload_off: 'full power',
				payload_on: 'mute',
				cfgAcWorkMode: {
					'0': 'full power',
					'1': 'mute'
				}
			},
			cfgAcXboost: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'X-Boost switch',
				payload_off: 'off',
				payload_on: 'on',
				cfgAcXboost: {
					'0': 'off',
					'1': 'on',
					ff: 'ignored'
				}
			}
		},
		string: {
			cfgAcOutVoltage: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Inverter output voltage (V): 0xffffffff: ignored'
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Global error code'
			},
			invType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'PSDR model code'
			},
			sysVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'System version'
			}
		},
		level: {
			cfgSlowChgWatts: {
				min: 200,
				max: 800,
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
				max: 1440,
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
					'0': 'Never',
					'30': '30 min',
					'60': '1 hr',
					'120': '2 hr',
					'240': '4 hr',
					'360': '6 hr',
					'720': '12 hr',
					'1440': '24 hr'
				},
				name: 'AC standby time /min 0 Never standby 1440 Default value',
				role: 'level',
				subrole: 'timer',
			}
		}
	},
	mppt: {
		number: {
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
			carOutVol: {
				min: 0,
				max: 15,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Car charging output voltage',
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
			inVol: {
				min: 0,
				max: 75,
				unit_of_measurement: 'V',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'PV input voltage',
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
			outWatts: {
				min: 0,
				max: 600,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'PV output power',
				role: 'value'
			}
		},
		switch: {
			carState: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Car charger switch setting',
				payload_off: 'off',
				payload_on: 'on',
				carState: {
					'0': 'off',
					'1': 'on'
				}
			}
		},
		diagnostic: {
			cfgChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Configured charging type: This parameter is valid when xt60_chg_type is 0.',
				cfgChgType: {
					'0': 'auto',
					'1': 'MPPT',
					'2': 'adapter'
				}
			},
			chgPauseFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'PV charging pause flag',
				chgPauseFlag: {
					'0': 'not stopped ?',
					'1': 'charging stopped'
				}
			},
			chgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging state',
				chgState: {
					'0': 'disabled',
					'1': 'charging',
					'2': 'standby (DC charging stopped during AC charging)'
				}
			},
			chgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Actual charging type',
				chgType: {
					'0': 'null',
					'1': 'adapter (adapter/DC source)',
					'2': 'MPPT (solar)',
					'3': 'AC (mains supply)',
					'4': 'gas',
					'5': 'wind'
				}
			},
			dc24vState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'DCDC24 switch state',
				dc24vState: {
					'0': 'off',
					'1': 'on'
				}
			},
			faultCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Error code',
				faultCode: {
					'0': 'OK?',
					'1': 'mppt_fault',
					'2': 'car_fault',
					'4': 'dc24v_fault'
				}
			},
			xt60ChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'XT60 charging type',
				xt60ChgType: {
					'0': 'not detected',
					'1': 'MPPT',
					'2': 'adapter'
				}
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
					'4': '4A',
					'6': '6A',
					'8': '8A'
				},
				name: 'On-board charging current',
				role: 'level'
			}
		},
		string: {
			swVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Version number'
			}
		}
	},
	pd: {
		switch: {
			beepState: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Beep status',
				payload_off: 'normal',
				payload_on: 'quiet',
				beepState: {
					'0': 'Normal',
					'1': 'Quiet'
				}
			},
			dcOutState: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'DC button state',
				payload_off: 'off',
				payload_on: 'on',
				dcOutState: {
					'0': 'off',
					'1': 'on'
				}
			}
		},
		diagnostic: {
			carState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'CAR button state',
				carState: {
					'0': 'off',
					'1': 'on'
				}
			},
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Global error code',
				errCode: {
					'0': 'OK?'
				}
			},
			iconRechgTimeMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charge icon mode',
				iconRechgTimeMode: {
					'0': 'normal',
					'1': 'blinking'
				}
			},
			sysChgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Charging/discharging state on screen',
				sysChgDsgState: {
					'0': 'discharged',
					'1': 'charged'
				}
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
			}
		},
		number: {
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
			wattsOutSum: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Total output power',
				role: 'value'
			}
		},
		icon: {
			iconAcFreqMode: {
				name: 'AC icon mode: 0: normal; 1: blinking'
			},
			iconAcFreqState: {
				name:
					'AC icon state: 0: off; 1: 50 Hz; 2: 60 Hz. This parameter is valid only when the AC icon mode is 0.'
			},
			iconBmsErrMode: {
				name: 'Exclamation mark icon mode: 0: normal; 1: blinking'
			},
			iconBmsErrState: {
				name:
					'Exclamation mark icon state: 0: off; 1: on. This parameter is valid only when the exclamation mark icon mode is 0.'
			},
			iconBmsParallelMode: {
				name: 'BMS parallel icon mode: 0: normal; 1: blinking'
			},
			iconBmsParallelState: {
				name:
					'BMS parallel icon state: 0: off; 1: on. This parameter is valid only when the BMS parallel icon mode is 0.'
			},
			iconBtMode: {
				name: 'Bluetooth icon mode: 0: normal; 1: blinking'
			},
			iconBtState: {
				name:
					'Bluetooth icon state: 0: off; 1: on. This parameter is valid only when the Bluetooth icon mode is 0.'
			},
			iconCarMode: {
				name: 'CAR icon mode: 0: normal; 1: blinking'
			},
			iconCarState: {
				name: 'CAR icon state: 0: off; 1: on. This parameter is valid only when the CAR icon mode is 0.'
			},
			iconChgStationMode: {
				name: 'Charging pile icon mode: 0: normal; 1: blinking'
			},
			iconChgStationState: {
				name:
					'Charging pile icon state: 0: off; 1: on. This parameter is valid only when the charging pile icon mode is 0.'
			},
			iconCoGasMode: {
				name: 'CO toxic gas icon mode: 0: normal; 1: blinking'
			},
			iconCoGasState: {
				name:
					'CO toxic gas icon state: 0: off; 1: on. This parameter is valid only when the CO toxic gas icon mode is 0.'
			},
			iconEcoMode: {
				name: 'ECO icon mode: 0: normal; 1: blinking'
			},
			iconEcoState: {
				name: 'ECO icon state: 0: off; 1: on. This parameter is valid only when the ECO icon mode is 0.'
			},
			iconFactoryMode: {
				name: 'Factory icon mode: 0: normal; 1: blinking'
			},
			iconFactoryState: {
				name: 'Factory icon state: 0: off; 1: on. This parameter is valid only when the factory icon mode is 0.'
			},
			iconFanMode: {
				name: 'Fan icon mode: 0: normal; 1: blinking'
			},
			iconFanState: {
				name:
					'Fan icon state: 0: off; 1: Level 1; 2: Level 2; 3: Level 3. This parameter is valid only when the fan icon mode is 0.'
			},
			iconGasGenMode: {
				name: 'Oil-powered generation icon mode: 0: normal; 1: blinking'
			},
			iconGasGenState: {
				name:
					'Oil-powered generation icon state: 0: off; 1: on. This parameter is valid only when the oil-powered generation icon mode is 0.'
			},
			iconHiTempMode: {
				name: 'High temperature icon mode: 0: normal; 1: blinking'
			},
			iconHiTempState: {
				name:
					'High temperature icon state: 0: off; 1: on. This parameter is valid only when the high temperature icon mode is 0.'
			},
			iconInvParallelMode: {
				name: 'Inverter parallel icon mode: 0: normal; 1: blinking'
			},
			iconInvParallelState: {
				name:
					'Inverter parallel icon state: 0: off; 1: on. This parameter is valid only when the inverter parallel icon mode is 0.'
			},
			iconLowTempMode: {
				name: 'Low temperature icon mode: 0: normal; 1: blinking'
			},
			iconLowTempState: {
				name:
					'Low temperature icon state: 0: off; 1: on. This parameter is valid only when the low temperature icon mode is 0.'
			},
			iconOverloadMode: {
				name: 'OVERLOAD icon mode: 0: normal; 1: blinking'
			},
			iconOverloadState: {
				name:
					'OVERLOAD icon state: 0: off; 1: on. This parameter is valid only when the OVERLOAD icon mode is 0.'
			},
			iconPackHeaterMode: {
				name: 'Battery heater icon mode: 0: normal; 1: blinking'
			},
			iconPackHeaterState: {
				name:
					'Battery heater icon state: 0: off; 1: on. This parameter is valid only when the battery heater icon mode is 0.'
			},
			iconRcMode: {
				name: 'Remote control icon mode: 0: normal; 1: blinking'
			},
			iconRcState: {
				name:
					'Remote control icon state: 0: off; 1: on; 2: one signal bar; 3: two signal bars; 4: searching signal. This parameter is valid only when the remote control icon mode is 0.'
			},
			iconRechgTimeState: {
				name: 'Charge icon state: 0: off; 1: on. This parameter is valid only when the charge icon mode is 0.'
			},
			iconSocUpsMode: {
				name: 'UPS icon mode: 0: normal; 1: blinking'
			},
			iconSocUpsState: {
				name: 'UPS icon state: 0: off; 1: on. This parameter is valid only when the UPS icon mode is 0.'
			},
			iconSolarBracketMode: {
				name: 'Solar panel tracking bracket icon mode: 0: normal; 1: blinking'
			},
			iconSolarBracketState: {
				name:
					'Solar panel tracking bracket icon state: 0: off; 1: on. This parameter is valid only when the solar panel tracking bracket icon mode is 0.'
			},
			iconSolarPanelMode: {
				name: 'Solar panel icon mode: 0: normal; 1: blinking'
			},
			iconSolarPanelState: {
				name:
					'Solar panel icon state: 0: off; 1: on. This parameter is valid only when the solar panel icon mode is 0.'
			},
			iconTransSwMode: {
				name: 'Transfer switch icon mode: 0: normal; 1: blinking'
			},
			iconTransSwState: {
				name:
					'Transfer switch icon state: 0: off; 1: on. This parameter is valid only when the transfer switch icon mode is 0.'
			},
			iconTypecMode: {
				name: 'Type-C icon mode: 0: normal; 1: blinking'
			},
			iconTypecState: {
				name: 'Type-C icon state: 0: off; 1: on. This parameter is valid only when the Type-C icon mode is 0.'
			},
			iconUsbMode: {
				name: 'USB icon mode: 0: normal; 1: blinking'
			},
			iconUsbState: {
				name: 'USB icon state: 0: off; 1: on. This parameter is valid only when the USB icon mode is 0.'
			},
			iconWifiMode: {
				name: 'Wi-Fi icon mode: 0: normal; 1: blinking'
			},
			iconWifiState: {
				name: 'Wi-Fi icon state: 0: off; 1: on. This parameter is valid only when the Wi-Fi icon mode is 0.'
			},
			iconWindGenMode: {
				name: 'Wind power generation icon mode: 0: normal; 1: blinking'
			},
			iconWindGenState: {
				name:
					'Wind power generation icon state: 0: off; 1: on. This parameter is valid only when the wind power generation icon mode is 0.'
			},
			iconWirelessChgMode: {
				name: 'Wireless charging icon mode: 0: normal; 1: blinking'
			},
			iconWirelessChgState: {
				name:
					'Wireless charging icon state: 0: off; 1: on. This parameter is valid only when the wireless charging icon mode is 0.'
			}
		},
		string: {
			lcdBrightness: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'delta max special'
			},
			model: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Product model'
			},
			sysVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'System version'
			},
			wifiRssi: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wi-Fi signal intensity'
			},
			wifiVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wi-Fi version'
			},
			wirelessWatts: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Wireless charging output power (W)'
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
					'0': 'Never',
					'10': '10 sec',
					'30': '30 sec',
					'60': '1 min',
					'300': '5 min',
					'1800': '30 min'
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
					'0': 'Never',
					'30': '30 min',
					'60': '1 hr',
					'120': '2 hr',
					'240': '4 hr',
					'360': '6 hr',
					'720': '12 hr'
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
				standByMode: {
					'0': 'Never standby',
					'5999': 'Max value'
				}
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
				latestQuotas: {
					'0': 'no trigger',
					'1': 'trigger'
				}
			},
			getAllTaskCfg: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get all tasks',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				getAllTaskCfg: {
					'0': 'no trigger',
					'1': 'trigger'
				}
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
				status: {
					'0': 'offline',
					'1': 'online'
				}
			}
		}
	}
};
const deviceStatesDict = {
	deltamini: {
		bmsMaster: {
			amp: {
				entity: 'number'
			},
			bmsFault: {
				entity: 'string'
			},
			bqSysStatReg: {
				entity: 'string'
			},
			cellId: {
				entity: 'diagnostic'
			},
			cycles: {
				entity: 'number'
			},
			designCap: {
				entity: 'number'
			},
			errCode: {
				entity: 'diagnostic'
			},
			f32ShowSoc: {
				entity: 'number'
			},
			fullCap: {
				entity: 'number'
			},
			inputWatts: {
				entity: 'number'
			},
			maxCellTemp: {
				entity: 'number'
			},
			maxCellVol: {
				entity: 'number'
			},
			maxMosTemp: {
				entity: 'number'
			},
			minCellTemp: {
				entity: 'number'
			},
			minCellVol: {
				entity: 'number'
			},
			minMosTemp: {
				entity: 'number'
			},
			num: {
				entity: 'string'
			},
			openBmsIdx: {
				entity: 'string'
			},
			outputWatts: {
				entity: 'number'
			},
			remainCap: {
				entity: 'number'
			},
			remainTime: {
				entity: 'number'
			},
			soc: {
				entity: 'number'
			},
			soh: {
				entity: 'string'
			},
			sysVer: {
				entity: 'string'
			},
			tagChgAmp: {
				entity: 'number'
			},
			temp: {
				entity: 'number'
			},
			type: {
				entity: 'diagnostic'
			},
			vol: {
				entity: 'number'
			}
		},
		ems: {
			bms0Online: {
				entity: 'diagnostic'
			},
			bms1Online: {
				entity: 'diagnostic'
			},
			bms2Online: {
				entity: 'diagnostic'
			},
			bmsModel: {
				entity: 'string'
			},
			bmsWarningState: {
				entity: 'diagnostic'
			},
			chgAmp: {
				entity: 'number'
			},
			chgCmd: {
				entity: 'diagnostic'
			},
			chgRemainTime: {
				entity: 'number'
			},
			chgState: {
				entity: 'diagnostic'
			},
			chgVol: {
				entity: 'number'
			},
			dsgCmd: {
				entity: 'diagnostic'
			},
			dsgRemainTime: {
				entity: 'number'
			},
			emsIsNormalFlag: {
				entity: 'diagnostic'
			},
			f32LcdShowSoc: {
				entity: 'number'
			},
			fanLevel: {
				entity: 'string'
			},
			lcdShowSoc: {
				entity: 'number'
			},
			maxAvailableNum: {
				entity: 'string'
			},
			maxChargeSoc: {
				entity: 'level'
			},
			minDsgSoc: {
				entity: 'level'
			},
			openBmsIdx: {
				entity: 'string'
			},
			openUpsFlag: {
				entity: 'string'
			},
			paraVolMax: {
				entity: 'number'
			},
			paraVolMin: {
				entity: 'number'
			}
		},
		inv: {
			acDipSwitch: {
				entity: 'diagnostic'
			},
			acInAmp: {
				entity: 'number'
			},
			acInFreq: {
				entity: 'number'
			},
			acInVol: {
				entity: 'number'
			},
			cfgAcEnabled: {
				entity: 'switch'
			},
			cfgAcOutFreq: {
				entity: 'diagnostic'
			},
			cfgAcOutVoltage: {
				entity: 'string'
			},
			cfgAcWorkMode: {
				entity: 'switch'
			},
			cfgAcXboost: {
				entity: 'switch'
			},
			cfgFastChgWatts: {
				entity: 'number'
			},
			cfgSlowChgWatts: {
				entity: 'level'
			},
			cfgStandbyMin: {
				entity: 'level'
			},
			chargerType: {
				entity: 'diagnostic'
			},
			chgPauseFlag: {
				entity: 'diagnostic'
			},
			dcInAmp: {
				entity: 'number'
			},
			dcInTemp: {
				entity: 'number'
			},
			dcInVol: {
				entity: 'number'
			},
			dischargeType: {
				entity: 'diagnostic'
			},
			errCode: {
				entity: 'string'
			},
			fanState: {
				entity: 'diagnostic'
			},
			inputWatts: {
				entity: 'number'
			},
			invOutAmp: {
				entity: 'number'
			},
			invOutFreq: {
				entity: 'number'
			},
			invOutVol: {
				entity: 'number'
			},
			invType: {
				entity: 'string'
			},
			outTemp: {
				entity: 'number'
			},
			outputWatts: {
				entity: 'number'
			},
			sysVer: {
				entity: 'string'
			}
		},
		mppt: {
			carOutAmp: {
				entity: 'number'
			},
			carOutVol: {
				entity: 'number'
			},
			carOutWatts: {
				entity: 'number'
			},
			carState: {
				entity: 'switch'
			},
			carTemp: {
				entity: 'number'
			},
			cfgChgType: {
				entity: 'diagnostic'
			},
			cfgDcChgCurrent: {
				entity: 'level'
			},
			chgPauseFlag: {
				entity: 'diagnostic'
			},
			chgState: {
				entity: 'diagnostic'
			},
			chgType: {
				entity: 'diagnostic'
			},
			dc24vState: {
				entity: 'diagnostic'
			},
			dc24vTemp: {
				entity: 'number'
			},
			dcdc12vAmp: {
				entity: 'number'
			},
			dcdc12vVol: {
				entity: 'number'
			},
			dcdc12vWatts: {
				entity: 'number'
			},
			faultCode: {
				entity: 'diagnostic'
			},
			inAmp: {
				entity: 'number'
			},
			inVol: {
				entity: 'number'
			},
			inWatts: {
				entity: 'number'
			},
			mpptTemp: {
				entity: 'number'
			},
			outAmp: {
				entity: 'number'
			},
			outVol: {
				entity: 'number'
			},
			outWatts: {
				entity: 'number'
			},
			swVer: {
				entity: 'string'
			},
			xt60ChgType: {
				entity: 'diagnostic'
			}
		},
		pd: {
			beepState: {
				entity: 'switch'
			},
			carState: {
				entity: 'diagnostic'
			},
			carTemp: {
				entity: 'number'
			},
			carUsedTime: {
				entity: 'number'
			},
			carWatts: {
				entity: 'number'
			},
			chgPowerAc: {
				entity: 'number'
			},
			chgPowerDc: {
				entity: 'number'
			},
			chgSunPower: {
				entity: 'number'
			},
			dcInUsedTime: {
				entity: 'number'
			},
			dcOutState: {
				entity: 'switch'
			},
			dsgPowerAc: {
				entity: 'number'
			},
			dsgPowerDc: {
				entity: 'number'
			},
			errCode: {
				entity: 'diagnostic'
			},
			iconAcFreqMode: {
				entity: 'icon'
			},
			iconAcFreqState: {
				entity: 'icon'
			},
			iconBmsErrMode: {
				entity: 'icon'
			},
			iconBmsErrState: {
				entity: 'icon'
			},
			iconBmsParallelMode: {
				entity: 'icon'
			},
			iconBmsParallelState: {
				entity: 'icon'
			},
			iconBtMode: {
				entity: 'icon'
			},
			iconBtState: {
				entity: 'icon'
			},
			iconCarMode: {
				entity: 'icon'
			},
			iconCarState: {
				entity: 'icon'
			},
			iconChgStationMode: {
				entity: 'icon'
			},
			iconChgStationState: {
				entity: 'icon'
			},
			iconCoGasMode: {
				entity: 'icon'
			},
			iconCoGasState: {
				entity: 'icon'
			},
			iconEcoMode: {
				entity: 'icon'
			},
			iconEcoState: {
				entity: 'icon'
			},
			iconFactoryMode: {
				entity: 'icon'
			},
			iconFactoryState: {
				entity: 'icon'
			},
			iconFanMode: {
				entity: 'icon'
			},
			iconFanState: {
				entity: 'icon'
			},
			iconGasGenMode: {
				entity: 'icon'
			},
			iconGasGenState: {
				entity: 'icon'
			},
			iconHiTempMode: {
				entity: 'icon'
			},
			iconHiTempState: {
				entity: 'icon'
			},
			iconInvParallelMode: {
				entity: 'icon'
			},
			iconInvParallelState: {
				entity: 'icon'
			},
			iconLowTempMode: {
				entity: 'icon'
			},
			iconLowTempState: {
				entity: 'icon'
			},
			iconOverloadMode: {
				entity: 'icon'
			},
			iconOverloadState: {
				entity: 'icon'
			},
			iconPackHeaterMode: {
				entity: 'icon'
			},
			iconPackHeaterState: {
				entity: 'icon'
			},
			iconRcMode: {
				entity: 'icon'
			},
			iconRcState: {
				entity: 'icon'
			},
			iconRechgTimeMode: {
				entity: 'diagnostic'
			},
			iconRechgTimeState: {
				entity: 'icon'
			},
			iconSocUpsMode: {
				entity: 'icon'
			},
			iconSocUpsState: {
				entity: 'icon'
			},
			iconSolarBracketMode: {
				entity: 'icon'
			},
			iconSolarBracketState: {
				entity: 'icon'
			},
			iconSolarPanelMode: {
				entity: 'icon'
			},
			iconSolarPanelState: {
				entity: 'icon'
			},
			iconTransSwMode: {
				entity: 'icon'
			},
			iconTransSwState: {
				entity: 'icon'
			},
			iconTypecMode: {
				entity: 'icon'
			},
			iconTypecState: {
				entity: 'icon'
			},
			iconUsbMode: {
				entity: 'icon'
			},
			iconUsbState: {
				entity: 'icon'
			},
			iconWifiMode: {
				entity: 'icon'
			},
			iconWifiState: {
				entity: 'icon'
			},
			iconWindGenMode: {
				entity: 'icon'
			},
			iconWindGenState: {
				entity: 'icon'
			},
			iconWirelessChgMode: {
				entity: 'icon'
			},
			iconWirelessChgState: {
				entity: 'icon'
			},
			invUsedTime: {
				entity: 'number'
			},
			lcdBrightness: {
				entity: 'string'
			},
			lcdOffSec: {
				entity: 'level'
			},
			model: {
				entity: 'string'
			},
			mpptUsedTime: {
				entity: 'number'
			},
			qcUsb1Watts: {
				entity: 'number'
			},
			qcUsb2Watts: {
				entity: 'number'
			},
			remainTime: {
				entity: 'number'
			},
			soc: {
				entity: 'number'
			},
			standByMode: {
				entity: 'level'
			},
			sysChgDsgState: {
				entity: 'diagnostic'
			},
			sysVer: {
				entity: 'string'
			},
			typccUsedTime: {
				entity: 'number'
			},
			typec1Temp: {
				entity: 'number'
			},
			typec1Watts: {
				entity: 'number'
			},
			typec2Temp: {
				entity: 'number'
			},
			typec2Watts: {
				entity: 'number'
			},
			usb1Watts: {
				entity: 'number'
			},
			usb2Watts: {
				entity: 'number'
			},
			usbUsedTime: {
				entity: 'number'
			},
			usbqcUsedTime: {
				entity: 'number'
			},
			wattsInSum: {
				entity: 'number'
			},
			wattsOutSum: {
				entity: 'number'
			},
			wifiAutoRcvy: {
				entity: 'diagnostic'
			},
			wifiRssi: {
				entity: 'string'
			},
			wifiVer: {
				entity: 'string'
			},
			wirelessWatts: {
				entity: 'string'
			}
		},
		action: {
			latestQuotas: {
				entity: 'switch'
			},
			getAllTaskCfg: {
				entity: 'switch'
			}
		},
		info: {
			msgCount: { entity: 'number' },
			status: {
				entity: 'diagnostic'
			}
		}
	}
};
const deviceRanges = {
	deltamini: {
		inv: {
			number: {
				cfgFastChgWatts: {
					min: 200,
					max: 900
				}
			},
			level: {
				cfgSlowChgWatts: {
					min: 200,
					max: 800
				},
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
						'0': 'Never',
						'30': '30 min',
						'60': '1 hr',
						'120': '2 hr',
						'240': '4 hr',
						'360': '6 hr',
						'720': '12 hr',
						'1440': '24 hr'
					},
					name: 'AC standby time /min 0 Never standby 1440 Default value'
				}
			}
		},
		mppt: {
			level: {
				cfgDcChgCurrent: {
					min: 4,
					max: 8
				}
			},
			number: {
				inVol: {
					max: 75
				},
				carOutVol: {
					max: 15
				}
			}
		}
	}
};
const deviceCmd = {
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
					params: {
						id: 49,
						maxChgSoc: 95
					},
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
					params: {
						id: 51,
						minDsgSoc: 25
					},
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
					params: {
						id: 66,
						enabled: 1
					},
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
					params: {
						id: 66,
						xboost: 1
					},
					version: '1.0'
				}
			},
			cfgFastChgWatts: {},
			cfgSlowChgWatts: {
				valName: 'slowChgPower',
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '747329085',
					lang: 'en-us',
					params: {
						id: 69,
						slowChgPower: 300
					},
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
					params: {
						id: 153,
						standByMins: 360
					},
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
					params: {
						id: 81,
						enabled: 1
					},
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
					params: {
						id: 71,
						currMa: 6000
					},
					version: '1.0'
				}
			}
		},
		pd: {
			beepState: {
				valName: 'enabled',
				moduleType: 5,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '834553333',
					lang: 'en-us',
					params: {
						id: 38,
						enabled: 1
					},
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
					params: {
						id: 34,
						enabled: 1
					},
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
					params: {
						id: 39,
						lcdTime: 1800
					},
					version: '1.0'
				}
			},
			standByMode: {
				valName: 'standByMode',
				moduleType: 0,
				msg: {
					from: 'Android',
					operateType: 'TCP',
					id: '119032574',
					lang: 'en-us',
					params: {
						id: 33,
						standByMode: 360
					},
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
	}
};

module.exports = {
	deviceStates,
	deviceStatesDict,
	deviceRanges,
	deviceCmd
};
