const panel2States = {
	ProtoTime: {
		number: {
			master_gridWatt: {
				min: 0,
				max: 12000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Master grid power'
			},
			bkpChWatt: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Backup charge power'
			},
			backupDischargeTime: {
				min: 0,
				max: 30000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Backup discharge time'
			},
			bkpEnerg1ChargeTime: {
				min: 0,
				max: 30000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Backup Energy#1 charge time'
			},
			bkpEnerg1DischargeTime: {
				min: 0,
				max: 30000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Backup Energy#1 discharge time'
			},
			bkpEnerg2ChargeTime: {
				min: 0,
				max: 30000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Backup Energy#2 charge time'
			},
			bkpEnerg2DischargeTime: {
				min: 0,
				max: 30000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Backup Energy#2 discharge time'
			},
			wattInfoGridWatt: {
				min: 0,
				max: 12000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power info grid'
			},
			wattInfoChWatt: {
				min: 0,
				max: 12000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power info channel'
			},
			wattInfoAllHallWatt: {
				min: 0,
				max: 12000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power info all hall'
			}
		},
		string: {
			sysTimezone: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Backup charge power',
				role: 'info'
			},
			timezoneId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Backup charge power',
				role: 'info'
			},
			appMainVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Master app main version',
				role: 'info'
			},
			appDbgVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Master app debug version',
				role: 'info'
			},
			appTestVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Master app test version',
				role: 'info'
			}
		},
		array: {
			hall1Watt: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'Hall1 power' },
			hall1Curr: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'Hall1 current' }
		}
	},
	ProtoPushAndSet: {
		number: {
			gridVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Grid voltage'
			},
			gridFreq: {
				min: 0,
				max: 61,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'Grid Frequency'
			},
			foceChargeHight: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Charge upper threshold percentage'
			},
			chargeWattPower: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Charging Power'
			},
			discLower: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Discharge lower threshold percentage'
			},
			masterCur: {
				min: 0,
				max: 100,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Master current'
			},
			oilEngineWatt: {
				min: 0,
				max: 12000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Oil engine power'
			},
			backupReserveSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Backup Reserve SOC'
			},
			timeZone: {
				min: -12,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'time zone'
			},
			solarBackupReserveSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Solar backup reserve SOC'
			},
			oilMaxOutputWatt: {
				min: 500,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Oil max. charging output power?'
			},
			inletBoxCurrent: {
				min: 0,
				max: 100,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Inlet box current'
			},
			phaseSubValue: {
				min: 0,
				max: 360,
				unit_of_measurement: '°',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'phase Sub Value'
			}
		},
		switch: {
			epsModeInfo: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'EPS mode',
				role: 'switch',
				epsModeInfo: { '0': 'off', '1': 'on' }
			}
		},
		diagnostic: {
			productType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Product type',
				productType: { '1': 'SHP2?' }
			},
			powerSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power Status',
				role: 'info',
				powerSta: {
					'0': 'LOAD_CH_EG_POWER',
					'1': 'LOAD_CH_ES_POWER',
					'2': 'LOAD_CH_OIL_POWER',
					'3': 'LOAD_CH_STOP_EM',
					'4': 'LOAD_CH_OFF_POWER'
				}
			},
			isSetOilEngine: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'isSetOilEngine',
				role: 'info',
				isSetOilEngine: { '0': 'no generator?', '1': 'generator?' }
			},
			isAreaErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Area error',
				role: 'info',
				isAreaErr: { '0': 'OK?', '1': 'Error?' }
			},
			ch1ForceCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ch1 force charging',
				role: 'info',
				ch1ForceCharge: { '0': 'normal?', '1': 'forced?' }
			},
			ch2ForceCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ch2 force charging',
				role: 'info',
				ch2ForceCharge: { '0': 'normal?', '1': 'forced?' }
			},
			ch3ForceCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ch3 force charging',
				role: 'info',
				ch3ForceCharge: { '0': 'normal?', '1': 'forced?' }
			},
			stormIsEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Storm is enable',
				role: 'info',
				stormIsEnable: { '0': 'off?', '1': 'on' }
			},
			inStormMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Storm mode',
				role: 'info',
				inStormMode: { '0': 'inactive?', '1': 'active?' }
			},
			ch1EnableSet: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ch1 enabled',
				role: 'info',
				ch1EnableSet: { '0': 'off?', '1': 'on?' }
			},
			ch2EnableSet: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ch2 enabled',
				role: 'info',
				ch2EnableSet: { '0': 'off?', '1': 'on?' }
			},
			ch3EnableSet: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Ch3 enabled',
				role: 'info',
				ch3EnableSet: { '0': 'off?', '1': 'on?' }
			},
			oilEngineToBackChargePersent: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Oil Engine To Back Charge Present',
				role: 'info',
				oilEngineToBackChargePersent: { '0': 'not present?', '1': 'present?' }
			},
			ntcOverTempErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'NTC over temp error',
				role: 'info',
				ntcOverTempErr: { '0': 'OK?', '1': 'error?' }
			},
			smartBackupMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Smart Backup Mode',
				role: 'info',
				smartBackupMode: { '0': 'off?', '1': 'on?' }
			},
			oilType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Oil engine type',
				role: 'info',
				oilType: { '0': '120V single phase?', '1': '240V split phase?' }
			},
			stormRequestFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Storm request flag',
				role: 'info',
				stormRequestFlag: { '0': 'off?', '1': 'on?' }
			},
			stormCurTimeStopFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'stormCurTimeStopFlag',
				role: 'info',
				stormCurTimeStopFlag: { '0': 'off?', '1': 'on?' }
			},
			backupReserveEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Backup Reserve Enable',
				role: 'info',
				backupReserveEnable: { '0': 'off?', '1': 'on?' }
			},
			sysCurRunningState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'sysCurRunningState',
				role: 'info',
				sysCurRunningState: { '0': 'off?', '1': 'on?' }
			},
			rly1RealSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Relay1 Real Status',
				role: 'info',
				rly1RealSta: { '0': 'off?', '1': 'on?' }
			},
			rly2RealSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Relay2 Real Status',
				role: 'info',
				rly2RealSta: { '0': 'off?', '1': 'on?' }
			},
			rly3RealSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Relay3 Real Status',
				role: 'info',
				rly3RealSta: { '0': 'off?', '1': 'on?' }
			},
			rly4RealSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Relay4 Real Status',
				role: 'info',
				rly4RealSta: { '0': 'off?', '1': 'on?' }
			},
			curRunningStrategy: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Current running strategy',
				role: 'info',
				curRunningStrategy: { '0': '?' }
			},
			reasonOfStopDischar: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Reason of Stop Discharge',
				role: 'info',
				reasonOfStopDischar: { '0': '?' }
			},
			reasonOsStopCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Reason of Stop Charge',
				role: 'info',
				reasonOsStopCharge: { '0': '?' }
			}
		},
		string: {
			hasConfigDone: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'hasConfigDone',
				role: 'info'
			},
			stormEndTimestamp: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Storm End Timestamp',
				role: 'info'
			},
			localTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'local time',
				role: 'info'
			},
			area: { entity_type: 'text', entity_category: 'diagnostic', name: 'Area Info', role: 'info' }
		}
	},
	backupIncreInfo: {
		number: {
			backupFullCap: {
				min: 0,
				max: 20000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Full capacity'
			},
			backupBatPer: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			backupDischargeRmainBatCap: {
				min: 0,
				max: 20000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Discharge remain. capacity'
			}
		}
	},
	backupCh1Info: {
		diagnostic: {
			backupIsReady: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'backupIsReady',
				role: 'info',
				backupIsReady: { '0': 'not ready?', '1': 'ready?' }
			},
			ctrlSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ctrlSta',
				role: 'info',
				ctrlSta: { '0': 'OK?' }
			},
			forceChargeSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'forceChargeSta',
				role: 'info',
				forceChargeSta: { '0': 'OK?' }
			},
			wakeUpChargeSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wakeUpChargeSta',
				role: 'info',
				wakeUpChargeSta: { '0': 'OK?' }
			},
			energy_5p8Type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charge type',
				role: 'info',
				energy_5p8Type: { '0': 'idle?' }
			}
		},
		number: {
			backupRly1Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Backup Relay1 Count'
			},
			backupRly2Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Backup Relay2 Count'
			}
		}
	},
	backupCh2Info: {
		diagnostic: {
			backupIsReady: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'backupIsReady',
				role: 'info',
				backupIsReady: { '0': 'not ready?', '1': 'ready?' }
			},
			ctrlSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ctrlSta',
				role: 'info',
				ctrlSta: { '0': 'OK?' }
			},
			forceChargeSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'forceChargeSta',
				role: 'info',
				forceChargeSta: { '0': 'OK?' }
			},
			wakeUpChargeSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wakeUpChargeSta',
				role: 'info',
				wakeUpChargeSta: { '0': 'OK?' }
			},
			energy_5p8Type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charge type',
				role: 'info',
				energy_5p8Type: { '0': 'idle?' }
			}
		},
		number: {
			backupRly1Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Backup Relay1 Count'
			},
			backupRly2Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Backup Relay2 Count'
			}
		}
	},
	backupCh3Info: {
		diagnostic: {
			backupIsReady: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'backupIsReady',
				role: 'info',
				backupIsReady: { '0': 'not ready?', '1': 'ready?' }
			},
			ctrlSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ctrlSta',
				role: 'info',
				ctrlSta: { '0': 'OK?' }
			},
			forceChargeSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'forceChargeSta',
				role: 'info',
				forceChargeSta: { '0': 'OK?' }
			},
			wakeUpChargeSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'wakeUpChargeSta',
				role: 'info',
				wakeUpChargeSta: { '0': 'OK?' }
			},
			energy_5p8Type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charge type',
				role: 'info',
				energy_5p8Type: { '0': 'idle?' }
			}
		},
		number: {
			backupRly1Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Backup Relay1 Count'
			},
			backupRly2Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Backup Relay2 Count'
			}
		}
	},
	Energy1Info: {
		diagnostic: {
			isEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device enabled',
				role: 'info',
				isEnable: { '0': 'off?', '1': 'on' }
			},
			isConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device connected',
				role: 'info',
				isConnect: { '0': 'not connected?', '1': 'connected?' }
			},
			isAcOpen: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC switch open',
				role: 'info',
				isAcOpen: { '0': 'off?', '1': 'on' }
			},
			isPowerOutput: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power output',
				role: 'info',
				isPowerOutput: { '0': 'off?', '1': 'on' }
			},
			isGridCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Grid charge',
				role: 'info',
				isGridCharge: { '0': 'off?', '1': 'on' }
			},
			isMpptCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT charge',
				role: 'info',
				isMpptCharge: { '0': 'off?', '1': 'on' }
			},
			emsChgFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'EMS Charge flag',
				role: 'info',
				emsChgFlag: { '0': 'off?', '1': 'on' }
			},
			hwConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'HW connected',
				role: 'info',
				hwConnect: { '0': 'off?', '1': 'on' }
			},
			errorCodeNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code',
				role: 'info',
				errorCodeNum: { '0': 'OK?' }
			}
		},
		number: {
			batteryPercentage: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			outputPower: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power'
			},
			emsBatTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'EMS battery temperature'
			},
			lcdInputWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power (LCD)'
			},
			pvChargeWatts: {
				min: 0,
				max: 5600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Charge power'
			},
			pvLowChargeWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Low charge power'
			},
			pvHeightChargeWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'High charge power'
			}
		},
		string: {
			oilPackNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Oil pack#',
				role: 'info'
			},
			multPackNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Multo pack#',
				role: 'info'
			}
		}
	},
	Energy2Info: {
		diagnostic: {
			isEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device enabled',
				role: 'info',
				isEnable: { '0': 'off?', '1': 'on' }
			},
			isConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device connected',
				role: 'info',
				isConnect: { '0': 'not connected?', '1': 'connected?' }
			},
			isAcOpen: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC switch open',
				role: 'info',
				isAcOpen: { '0': 'off?', '1': 'on' }
			},
			isPowerOutput: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power output',
				role: 'info',
				isPowerOutput: { '0': 'off?', '1': 'on' }
			},
			isGridCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Grid charge',
				role: 'info',
				isGridCharge: { '0': 'off?', '1': 'on' }
			},
			isMpptCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT charge',
				role: 'info',
				isMpptCharge: { '0': 'off?', '1': 'on' }
			},
			emsChgFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'EMS Charge flag',
				role: 'info',
				emsChgFlag: { '0': 'off?', '1': 'on' }
			},
			hwConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'HW connected',
				role: 'info',
				hwConnect: { '0': 'off?', '1': 'on' }
			},
			errorCodeNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code',
				role: 'info',
				errorCodeNum: { '0': 'OK?' }
			}
		},
		number: {
			batteryPercentage: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			outputPower: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power'
			},
			emsBatTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'EMS battery temperature'
			},
			lcdInputWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power (LCD)'
			},
			pvChargeWatts: {
				min: 0,
				max: 5600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Charge power'
			},
			pvLowChargeWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Low charge power'
			},
			pvHeightChargeWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'High charge power'
			}
		},
		string: {
			oilPackNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Oil pack#',
				role: 'info'
			},
			multPackNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Multo pack#',
				role: 'info'
			}
		}
	},
	Energy3Info: {
		diagnostic: {
			isEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device enabled',
				role: 'info',
				isEnable: { '0': 'off?', '1': 'on' }
			},
			isConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device connected',
				role: 'info',
				isConnect: { '0': 'not connected?', '1': 'connected?' }
			},
			isAcOpen: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC switch open',
				role: 'info',
				isAcOpen: { '0': 'off?', '1': 'on' }
			},
			isPowerOutput: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power output',
				role: 'info',
				isPowerOutput: { '0': 'off?', '1': 'on' }
			},
			isGridCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Grid charge',
				role: 'info',
				isGridCharge: { '0': 'off?', '1': 'on' }
			},
			isMpptCharge: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'MPPT charge',
				role: 'info',
				isMpptCharge: { '0': 'off?', '1': 'on' }
			},
			emsChgFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'EMS Charge flag',
				role: 'info',
				emsChgFlag: { '0': 'off?', '1': 'on' }
			},
			hwConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'HW connected',
				role: 'info',
				hwConnect: { '0': 'off?', '1': 'on' }
			},
			errorCodeNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code',
				role: 'info',
				errorCodeNum: { '0': 'OK?' }
			}
		},
		number: {
			batteryPercentage: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			outputPower: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power'
			},
			emsBatTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'EMS battery temperature'
			},
			lcdInputWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power (LCD)'
			},
			pvChargeWatts: {
				min: 0,
				max: 5600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Charge power'
			},
			pvLowChargeWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Low charge power'
			},
			pvHeightChargeWatts: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'High charge power'
			}
		},
		string: {
			oilPackNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Oil pack#',
				role: 'info'
			},
			multPackNum: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Multo pack#',
				role: 'info'
			}
		}
	},
	DeltaPro1Info: {
		diagnostic: {
			isConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device connected',
				role: 'info',
				isConnect: { '0': 'off?', '1': 'on?' }
			},
			isAcOpen: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC switch open',
				role: 'info',
				isAcOpen: { '0': 'off?', '1': 'on?' }
			},
			pvInsertState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Insert state',
				role: 'info',
				pvInsertState: { '0': 'off?', '1': 'on?' }
			}
		},
		number: {
			batterySoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			fullCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Full capacity'
			},
			ratePower: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Rated power'
			},
			outputPower: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power'
			},
			emsBatTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'EMS battery temperature'
			},
			lcdInputWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power (LCD)'
			},
			pvLowChargeWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Low charge power'
			},
			chargeTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Charge time'
			},
			dischargeTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Discharge time'
			}
		}
	},
	DeltaPro2Info: {
		diagnostic: {
			isConnect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Device connected',
				role: 'info',
				isConnect: { '0': 'off?', '1': 'on?' }
			},
			isAcOpen: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC switch open',
				role: 'info',
				isAcOpen: { '0': 'off?', '1': 'on?' }
			},
			pvInsertState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Insert state',
				role: 'info',
				pvInsertState: { '0': 'off?', '1': 'on?' }
			}
		},
		number: {
			batterySoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			fullCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Full capacity'
			},
			ratePower: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Rated power'
			},
			outputPower: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power'
			},
			emsBatTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'EMS battery temperature'
			},
			lcdInputWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power (LCD)'
			},
			pvLowChargeWatts: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Low charge power'
			},
			chargeTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Charge time'
			},
			dischargeTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Discharge time'
			}
		}
	},
	loadIncreInfo: {
		number: {
			midPriorityDischargeTime: {
				min: 0,
				max: 15499,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'midPriorityDischargeTime'
			},
			highPriorityDischargeTime: {
				min: 0,
				max: 15499,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'highPriorityDischargeTime:'
			},
			ch1Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #1'
			},
			ch1Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #1'
			},
			ch1Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #1'
			},
			ch2Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #2'
			},
			ch2Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #2'
			},
			ch2Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #2'
			},
			ch3Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #3'
			},
			ch3Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #3'
			},
			ch3Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #3'
			},
			ch4Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #4'
			},
			ch4Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #4'
			},
			ch4Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #4'
			},
			ch5Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #5'
			},
			ch5Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #5'
			},
			ch5Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #5'
			},
			ch6Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #6'
			},
			ch6Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #6'
			},
			ch6Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #6'
			},
			ch7Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #7'
			},
			ch7Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Current setting #7'
			},
			ch7Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #7'
			},
			ch8Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #8'
			},
			ch8Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #8'
			},
			ch8Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #8'
			},
			ch9Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #9'
			},
			ch9Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #9'
			},
			ch9Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #9'
			},
			ch10Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #10'
			},
			ch10Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #10'
			},
			ch10Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #10'
			},
			ch11Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #11'
			},
			ch11Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #11'
			},
			ch11Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #11'
			},
			ch12Info_linkCh: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #12'
			},
			ch12Info_setAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Current setting #12'
			},
			ch12Info_loadRlyCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Load relay count #12'
			}
		},
		diagnostic: {
			ch1Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #1',
				role: 'info',
				ch1Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch2Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #2',
				role: 'info',
				ch2Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch3Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #3',
				role: 'info',
				ch3Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch4Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #4',
				role: 'info',
				ch4Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch5Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #5',
				role: 'info',
				ch5Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch6Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #6',
				role: 'info',
				ch6Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch7Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #7',
				role: 'info',
				ch7Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch8Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #8',
				role: 'info',
				ch8Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch9Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #9',
				role: 'info',
				ch9Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch10Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #10',
				role: 'info',
				ch10Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch11Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #11',
				role: 'info',
				ch11Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch12Info_linkMark: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #12',
				role: 'info',
				ch12Info_linkMark: { '0': 'Not be split?', '1': 'Should be split?' }
			},
			ch1Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #1 power supply type',
				role: 'info',
				ch1Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch1Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #1 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch1Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch1Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #1 Notice enable',
				role: 'info',
				ch1Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch1Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #1 Notice action',
				role: 'info',
				ch1Sta_noticeAction: { '0': 'OK?' }
			},
			ch1Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #1 Load switch cause',
				role: 'info',
				ch1Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch2Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #2 power supply type',
				role: 'info',
				ch2Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch2Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #2 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch2Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch2Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #2 Notice enable',
				role: 'info',
				ch2Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch2Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #2 Notice action',
				role: 'info',
				ch2Sta_noticeAction: { '0': 'OK?' }
			},
			ch2Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #2 Load switch cause',
				role: 'info',
				ch2Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch3Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #3 power supply type',
				role: 'info',
				ch3Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch3Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #3 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch3Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch3Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #3 Notice enable',
				role: 'info',
				ch3Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch3Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #3 Notice action',
				role: 'info',
				ch3Sta_noticeAction: { '0': 'OK?' }
			},
			ch3Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #3 Load switch cause',
				role: 'info',
				ch3Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch4Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #4 power supply type',
				role: 'info',
				ch4Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch4Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #4 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch4Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch4Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #4 Notice enable',
				role: 'info',
				ch4Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch4Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #4 Notice action',
				role: 'info',
				ch4Sta_noticeAction: { '0': 'OK?' }
			},
			ch4Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #4 Load switch cause',
				role: 'info',
				ch4Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch5Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #5 power supply type',
				role: 'info',
				ch5Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch5Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #5 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch5Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch5Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #5 Notice enable',
				role: 'info',
				ch5Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch5Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #5 Notice action',
				role: 'info',
				ch5Sta_noticeAction: { '0': 'OK?' }
			},
			ch5Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #5 Load switch cause',
				role: 'info',
				ch5Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch6Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #6 power supply type',
				role: 'info',
				ch6Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch6Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #6 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch6Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch6Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #6 Notice enable',
				role: 'info',
				ch6Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch6Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #6 Notice action',
				role: 'info',
				ch6Sta_noticeAction: { '0': 'OK?' }
			},
			ch6Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #6 Load switch cause',
				role: 'info',
				ch6Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch7Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #7 power supply type',
				role: 'info',
				ch7Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch7Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #7 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch7Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch7Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #7 Notice enable',
				role: 'info',
				ch7Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch7Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #7 Notice action',
				role: 'info',
				ch7Sta_noticeAction: { '0': 'OK?' }
			},
			ch7Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #7 Load switch cause',
				role: 'info',
				ch7Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch8Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #8 power supply type',
				role: 'info',
				ch8Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch8Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #8 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch8Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch8Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #8 Notice enable',
				role: 'info',
				ch8Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch8Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #8 Notice action',
				role: 'info',
				ch8Sta_noticeAction: { '0': 'OK?' }
			},
			ch8Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #8 Load switch cause',
				role: 'info',
				ch8Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch9Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #9 power supply type',
				role: 'info',
				ch9Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch9Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #9 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch9Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch9Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #9 Notice enable',
				role: 'info',
				ch9Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch9Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #9 Notice action',
				role: 'info',
				ch9Sta_noticeAction: { '0': 'OK?' }
			},
			ch9Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #9 Load switch cause',
				role: 'info',
				ch9Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch10Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #10 power supply type',
				role: 'info',
				ch10Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch10Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #10 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch10Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch10Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #10 Notice enable',
				role: 'info',
				ch10Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch10Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #10 Notice action',
				role: 'info',
				ch10Sta_noticeAction: { '0': 'OK?' }
			},
			ch10Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #10 Load switch cause',
				role: 'info',
				ch10Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch11Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #11 power supply type',
				role: 'info',
				ch11Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch11Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #11 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch11Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch11Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #11 Notice enable',
				role: 'info',
				ch11Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch11Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #11 Notice action',
				role: 'info',
				ch11Sta_noticeAction: { '0': 'OK?' }
			},
			ch11Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #11 Load switch cause',
				role: 'info',
				ch11Sta_loadChSwitchCause: { '0': 'OK?' }
			},
			ch12Sta_loadSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #12 power supply type',
				role: 'info',
				ch12Sta_loadSta: { '0': 'Grid supply', '1': 'storage power supply', '2': 'close' }
			},
			ch12Sta_ctrlMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #12 contol mode  0-Auto/1-Manual',
				role: 'info',
				ch12Sta_ctrlMode: { '0': 'Auto', '1': 'Manual' }
			},
			ch12Sta_noticeEnable: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #12 Notice enable',
				role: 'info',
				ch12Sta_noticeEnable: { '0': 'off?', '1': 'on?' }
			},
			ch12Sta_noticeAction: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #12 Notice action',
				role: 'info',
				ch12Sta_noticeAction: { '0': 'OK?' }
			},
			ch12Sta_loadChSwitchCause: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #12 Load switch cause',
				role: 'info',
				ch12Sta_loadChSwitchCause: { '0': 'OK?' }
			}
		},
		string: {
			ch1Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #1',
				role: 'info'
			},
			ch2Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #2',
				role: 'info'
			},
			ch3Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #3',
				role: 'info'
			},
			ch4Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #4',
				role: 'info'
			},
			ch5Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #5',
				role: 'info'
			},
			ch6Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #6',
				role: 'info'
			},
			ch7Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #7',
				role: 'info'
			},
			ch8Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #8',
				role: 'info'
			},
			ch9Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #9',
				role: 'info'
			},
			ch10Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #10',
				role: 'info'
			},
			ch11Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #11',
				role: 'info'
			},
			ch12Info_chName: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel name #12',
				role: 'info'
			},
			ch1Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #1 notice set time'
			},
			ch2Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #2 notice set time'
			},
			ch3Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #3 notice set time'
			},
			ch4Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #4 notice set time'
			},
			ch5Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #5 notice set time'
			},
			ch6Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #6 notice set time'
			},
			ch7Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #7 notice set time'
			},
			ch8Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #8 notice set time'
			},
			ch9Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #9 notice set time'
			},
			ch10Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #10 notice set time'
			},
			ch11Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #11 notice set time'
			},
			ch12Sta_noticeSetTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Channel #12 notice set time'
			}
		},
		icon: {
			ch1Info_iconNum: { name: 'Channel icon number #1' },
			ch2Info_iconNum: { name: 'Channel icon number #2' },
			ch3Info_iconNum: { name: 'Channel icon number #3' },
			ch4Info_iconNum: { name: 'Channel icon number #4' },
			ch5Info_iconNum: { name: 'Channel icon number #5' },
			ch6Info_iconNum: { name: 'Channel icon number #6' },
			ch7Info_iconNum: { name: 'Channel icon number #7' },
			ch8Info_iconNum: { name: 'Channel icon number #8' },
			ch9Info_iconNum: { name: 'Channel icon number #9' },
			ch10Info_iconNum: { name: 'Channel icon number #10' },
			ch11Info_iconNum: { name: 'Channel icon number #11' },
			ch12Info_iconNum: { name: 'Channel icon number #12' }
		}
	},
	masterIncreInfo: {
		diagnostic: {
			gridSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Grid status',
				role: 'info',
				gridSta: { '0': 'Grid volt. not detected', '1': 'Grid OK', '2': 'Grid overvolt./overfreq' } // #168
			},
			masterRlyErrFlg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Master Relay Error Flag',
				role: 'info',
				masterRlyErrFlg: { '0': 'OK?', '1': 'Error?' }
			}
		},
		number: {
			gridVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Grid volatge'
			},
			masterRly1Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Master Relay1 count'
			},
			masterRly2Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Master Relay2 count'
			},
			masterRly3Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Master Relay3 count'
			},
			masterRly4Cnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Master Relay4 count'
			},
			backupVol_L1SafeData: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'backupVol_L1SafeData'
			},
			backupVol_L2SafeData: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'backupVol_L2SafeData'
			},
			backupPhaseDiffSafeData: {
				min: 0,
				max: 65535,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'backupPhaseDiffSafeData'
			},
			loadVol_L1SafeData: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'loadVol_L1SafeData'
			},
			loadVol_L2SafeData: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'loadVol_L2SafeData'
			},
			loadPhaseDiffSafeData: {
				min: 0,
				max: 65535,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'loadPhaseDiffSafeData'
			},
			masterVol_L1SafeData: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'masterVol_L1SafeData'
			},
			masterVol_L2SafeData: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'masterVol_L2SafeData'
			},
			masterPhaseDiffSafeData: {
				min: 0,
				max: 65535,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'masterPhaseDiffSafeData'
			}
		}
	},
	LoadStrategyCfg: {
		diagnostic: {
			isCfg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Is config',
				role: 'info',
				isCfg: { '0': 'Config pending?', '1': 'Config done?' }
			},
			loadIsEnable1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #1 load status',
				role: 'info',
				loadIsEnable1: { '0': 'off', '1': 'on' }
			},
			loadIsEnable2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #2 load status',
				role: 'info',
				loadIsEnable2: { '0': 'off', '1': 'on' }
			},
			loadIsEnable3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #3 load status',
				role: 'info',
				loadIsEnable3: { '0': 'off', '1': 'on' }
			},
			loadIsEnable4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #4 load status',
				role: 'info',
				loadIsEnable4: { '0': 'off', '1': 'on' }
			},
			loadIsEnable5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #5 load status',
				role: 'info',
				loadIsEnable5: { '0': 'off', '1': 'on' }
			},
			loadIsEnable6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #6 load status',
				role: 'info',
				loadIsEnable6: { '0': 'off', '1': 'on' }
			},
			loadIsEnable7: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #7 load status',
				role: 'info',
				loadIsEnable7: { '0': 'off', '1': 'on' }
			},
			loadIsEnable8: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #8 load status',
				role: 'info',
				loadIsEnable8: { '0': 'off', '1': 'on' }
			},
			loadIsEnable9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #9 load status',
				role: 'info',
				loadIsEnable9: { '0': 'off', '1': 'on' }
			},
			loadIsEnable10: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #10 load status',
				role: 'info',
				loadIsEnable10: { '0': 'off', '1': 'on' }
			},
			loadIsEnable11: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #11 load status',
				role: 'info',
				loadIsEnable11: { '0': 'off', '1': 'on' }
			},
			loadIsEnable12: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #12 load status',
				role: 'info',
				loadIsEnable12: { '0': 'off', '1': 'on' }
			}
		},
		number: {
			midPriorityChDischargeLow: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'midPriorityChDischargeLow'
			},
			loadPriority1: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #1 load priority'
			},
			loadPriority2: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #2 load priority'
			},
			loadPriority3: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #3 load priority'
			},
			loadPriority4: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #4 load priority'
			},
			loadPriority5: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #5 load priority'
			},
			loadPriority6: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #6 load priority'
			},
			loadPriority7: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #7 load priority'
			},
			loadPriority8: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #8 load priority'
			},
			loadPriority9: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #9 load priority'
			},
			loadPriority10: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #10 load priority'
			},
			loadPriority11: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #11 load priority'
			},
			loadPriority12: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel #12 load priority'
			}
		}
	},
	loadCurrent: {
		number: {
			cur_0: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #1 current'
			},
			cur_1: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #2 current'
			},
			cur_2: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #3 current'
			},
			cur_3: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #4 current'
			},
			cur_4: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #5 current'
			},
			cur_5: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #6 current'
			},
			cur_6: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #7 current'
			},
			cur_7: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #8 current'
			},
			cur_8: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #9 current'
			},
			cur_9: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #10 current'
			},
			cur_10: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #11 current'
			},
			cur_11: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #12 current'
			},
			sumCur: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Total Load Current'
			}
		}
	},
	loadPower: {
		number: {
			chWatt_0: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #1'
			},
			chWatt_1: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #2'
			},
			chWatt_2: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #3'
			},
			chWatt_3: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #4'
			},
			chWatt_4: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #5'
			},
			chWatt_5: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #6'
			},
			chWatt_6: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #7'
			},
			chWatt_7: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #8'
			},
			chWatt_8: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #9'
			},
			chWatt_9: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #10'
			},
			chWatt_10: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #11'
			},
			chWatt_11: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #12'
			},
			sumWatt: {
				min: 0,
				max: 10000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Total Load Power'
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
				name: 'Status',
				role: 'info',
				status: { 0: 'offline', 1: 'online' }
			}
		}
	}
};
const panel2StatesDict = {
	panel2: {
		ProtoTime: {
			master_gridWatt: { entity: 'number' },
			sysTimezone: { entity: 'string' },
			timezoneId: { entity: 'string' },
			hall1Watt: { entity: 'array' },
			hall1Curr: { entity: 'array' },
			bkpChWatt: { entity: 'number' },
			backupDischargeTime: { entity: 'number' },
			bkpEnerg1ChargeTime: { entity: 'number' },
			bkpEnerg1DischargeTime: { entity: 'number' },
			bkpEnerg2ChargeTime: { entity: 'number' },
			bkpEnerg2DischargeTime: { entity: 'number' },
			wattInfoGridWatt: { entity: 'number' },
			wattInfoChWatt: { entity: 'number' },
			wattInfoAllHallWatt: { entity: 'number' },
			appMainVer: { entity: 'string' },
			appDbgVer: { entity: 'string' },
			appTestVer: { entity: 'string' }
		},
		ProtoPushAndSet: {
			gridVol: { entity: 'number' },
			gridFreq: { entity: 'number' },
			productType: { entity: 'diagnostic' },
			epsModeInfo: { entity: 'switch' },
			foceChargeHight: { entity: 'number' },
			chargeWattPower: { entity: 'number' },
			discLower: { entity: 'number' },
			powerSta: { entity: 'diagnostic' },
			masterCur: { entity: 'number' },
			isSetOilEngine: { entity: 'diagnostic' },
			oilEngineWatt: { entity: 'number' },
			hasConfigDone: { entity: 'string' },
			isAreaErr: { entity: 'diagnostic' },
			area: { entity: 'string' },
			ch1ForceCharge: { entity: 'diagnostic' },
			ch2ForceCharge: { entity: 'diagnostic' },
			ch3ForceCharge: { entity: 'diagnostic' },
			stormIsEnable: { entity: 'diagnostic' },
			stormEndTimestamp: { entity: 'string' },
			inStormMode: { entity: 'diagnostic' },
			ch1EnableSet: { entity: 'diagnostic' },
			ch2EnableSet: { entity: 'diagnostic' },
			ch3EnableSet: { entity: 'diagnostic' },
			oilEngineToBackChargePersent: { entity: 'diagnostic' },
			ntcOverTempErr: { entity: 'diagnostic' },
			smartBackupMode: { entity: 'diagnostic' },
			backupReserveEnable: { entity: 'diagnostic' },
			backupReserveSoc: { entity: 'number' },
			localTime: { entity: 'string' },
			timeZone: { entity: 'number' },
			solarBackupReserveSoc: { entity: 'number' },
			oilType: { entity: 'diagnostic' },
			oilMaxOutputWatt: { entity: 'number' },
			stormRequestFlag: { entity: 'diagnostic' },
			stormCurTimeStopFlag: { entity: 'diagnostic' },
			sysCurRunningState: { entity: 'diagnostic' },
			rly1RealSta: { entity: 'diagnostic' },
			rly2RealSta: { entity: 'diagnostic' },
			rly3RealSta: { entity: 'diagnostic' },
			rly4RealSta: { entity: 'diagnostic' },
			curRunningStrategy: { entity: 'diagnostic' },
			reasonOfStopDischar: { entity: 'diagnostic' },
			reasonOsStopCharge: { entity: 'diagnostic' },
			inletBoxCurrent: { entity: 'number' },
			phaseSubValue: { entity: 'number' }
		},
		backupIncreInfo: {
			backupFullCap: { entity: 'number' },
			backupBatPer: { entity: 'number' },
			backupDischargeRmainBatCap: { entity: 'number' }
		},
		backupCh1Info: {
			backupIsReady: { entity: 'diagnostic' },
			ctrlSta: { entity: 'diagnostic' },
			forceChargeSta: { entity: 'diagnostic' },
			backupRly1Cnt: { entity: 'number' },
			backupRly2Cnt: { entity: 'number' },
			wakeUpChargeSta: { entity: 'diagnostic' },
			energy_5p8Type: { entity: 'diagnostic' }
		},
		backupCh2Info: {
			backupIsReady: { entity: 'diagnostic' },
			ctrlSta: { entity: 'diagnostic' },
			forceChargeSta: { entity: 'diagnostic' },
			backupRly1Cnt: { entity: 'number' },
			backupRly2Cnt: { entity: 'number' },
			wakeUpChargeSta: { entity: 'diagnostic' },
			energy_5p8Type: { entity: 'diagnostic' }
		},
		backupCh3Info: {
			backupIsReady: { entity: 'diagnostic' },
			ctrlSta: { entity: 'diagnostic' },
			forceChargeSta: { entity: 'diagnostic' },
			backupRly1Cnt: { entity: 'number' },
			backupRly2Cnt: { entity: 'number' },
			wakeUpChargeSta: { entity: 'diagnostic' },
			energy_5p8Type: { entity: 'diagnostic' }
		},
		Energy1Info: {
			isEnable: { entity: 'diagnostic' },
			isConnect: { entity: 'diagnostic' },
			isAcOpen: { entity: 'diagnostic' },
			isPowerOutput: { entity: 'diagnostic' },
			isGridCharge: { entity: 'diagnostic' },
			isMpptCharge: { entity: 'diagnostic' },
			batteryPercentage: { entity: 'number' },
			outputPower: { entity: 'number' },
			oilPackNum: { entity: 'string' },
			multPackNum: { entity: 'string' },
			emsChgFlag: { entity: 'diagnostic' },
			hwConnect: { entity: 'diagnostic' },
			emsBatTemp: { entity: 'number' },
			lcdInputWatts: { entity: 'number' },
			pvChargeWatts: { entity: 'number' },
			pvLowChargeWatts: { entity: 'number' },
			pvHeightChargeWatts: { entity: 'number' },
			errorCodeNum: { entity: 'diagnostic' }
		},
		Energy2Info: {
			isEnable: { entity: 'diagnostic' },
			isConnect: { entity: 'diagnostic' },
			isAcOpen: { entity: 'diagnostic' },
			isPowerOutput: { entity: 'diagnostic' },
			isGridCharge: { entity: 'diagnostic' },
			isMpptCharge: { entity: 'diagnostic' },
			batteryPercentage: { entity: 'number' },
			outputPower: { entity: 'number' },
			oilPackNum: { entity: 'string' },
			multPackNum: { entity: 'string' },
			emsChgFlag: { entity: 'diagnostic' },
			hwConnect: { entity: 'diagnostic' },
			emsBatTemp: { entity: 'number' },
			lcdInputWatts: { entity: 'number' },
			pvChargeWatts: { entity: 'number' },
			pvLowChargeWatts: { entity: 'number' },
			pvHeightChargeWatts: { entity: 'number' },
			errorCodeNum: { entity: 'diagnostic' }
		},
		Energy3Info: {
			isEnable: { entity: 'diagnostic' },
			isConnect: { entity: 'diagnostic' },
			isAcOpen: { entity: 'diagnostic' },
			isPowerOutput: { entity: 'diagnostic' },
			isGridCharge: { entity: 'diagnostic' },
			isMpptCharge: { entity: 'diagnostic' },
			batteryPercentage: { entity: 'number' },
			outputPower: { entity: 'number' },
			oilPackNum: { entity: 'string' },
			multPackNum: { entity: 'string' },
			emsChgFlag: { entity: 'diagnostic' },
			hwConnect: { entity: 'diagnostic' },
			emsBatTemp: { entity: 'number' },
			lcdInputWatts: { entity: 'number' },
			pvChargeWatts: { entity: 'number' },
			pvLowChargeWatts: { entity: 'number' },
			pvHeightChargeWatts: { entity: 'number' },
			errorCodeNum: { entity: 'diagnostic' }
		},
		DeltaPro1Info: {
			isConnect: { entity: 'diagnostic' },
			batterySoc: { entity: 'number' },
			fullCap: { entity: 'number' },
			ratePower: { entity: 'number' },
			isAcOpen: { entity: 'diagnostic' },
			outputPower: { entity: 'number' },
			emsBatTemp: { entity: 'number' },
			lcdInputWatts: { entity: 'number' },
			pvInsertState: { entity: 'diagnostic' },
			pvLowChargeWatts: { entity: 'number' },
			chargeTime: { entity: 'number' },
			dischargeTime: { entity: 'number' }
		},
		DeltaPro2Info: {
			isConnect: { entity: 'diagnostic' },
			batterySoc: { entity: 'number' },
			fullCap: { entity: 'number' },
			ratePower: { entity: 'number' },
			isAcOpen: { entity: 'diagnostic' },
			outputPower: { entity: 'number' },
			emsBatTemp: { entity: 'number' },
			lcdInputWatts: { entity: 'number' },
			pvInsertState: { entity: 'diagnostic' },
			pvLowChargeWatts: { entity: 'number' },
			chargeTime: { entity: 'number' },
			dischargeTime: { entity: 'number' }
		},
		loadIncreInfo: {
			midPriorityDischargeTime: { entity: 'number' },
			highPriorityDischargeTime: { entity: 'number' },
			ch1Info_linkMark: { entity: 'diagnostic' },
			ch1Info_linkCh: { entity: 'number' },
			ch1Info_setAmp: { entity: 'number' },
			ch1Info_iconNum: { entity: 'icon' },
			ch1Info_chName: { entity: 'string' },
			ch1Info_loadRlyCnt: { entity: 'number' },
			ch2Info_linkMark: { entity: 'diagnostic' },
			ch2Info_linkCh: { entity: 'number' },
			ch2Info_setAmp: { entity: 'number' },
			ch2Info_iconNum: { entity: 'icon' },
			ch2Info_chName: { entity: 'string' },
			ch2Info_loadRlyCnt: { entity: 'number' },
			ch3Info_linkMark: { entity: 'diagnostic' },
			ch3Info_linkCh: { entity: 'number' },
			ch3Info_setAmp: { entity: 'number' },
			ch3Info_iconNum: { entity: 'icon' },
			ch3Info_chName: { entity: 'string' },
			ch3Info_loadRlyCnt: { entity: 'number' },
			ch4Info_linkMark: { entity: 'diagnostic' },
			ch4Info_linkCh: { entity: 'number' },
			ch4Info_setAmp: { entity: 'number' },
			ch4Info_iconNum: { entity: 'icon' },
			ch4Info_chName: { entity: 'string' },
			ch4Info_loadRlyCnt: { entity: 'number' },
			ch5Info_linkMark: { entity: 'diagnostic' },
			ch5Info_linkCh: { entity: 'number' },
			ch5Info_setAmp: { entity: 'number' },
			ch5Info_iconNum: { entity: 'icon' },
			ch5Info_chName: { entity: 'string' },
			ch5Info_loadRlyCnt: { entity: 'number' },
			ch6Info_linkMark: { entity: 'diagnostic' },
			ch6Info_linkCh: { entity: 'number' },
			ch6Info_setAmp: { entity: 'number' },
			ch6Info_iconNum: { entity: 'icon' },
			ch6Info_chName: { entity: 'string' },
			ch6Info_loadRlyCnt: { entity: 'number' },
			ch7Info_linkMark: { entity: 'diagnostic' },
			ch7Info_linkCh: { entity: 'number' },
			ch7Info_setAmp: { entity: 'number' },
			ch7Info_iconNum: { entity: 'icon' },
			ch7Info_chName: { entity: 'string' },
			ch7Info_loadRlyCnt: { entity: 'number' },
			ch8Info_linkMark: { entity: 'diagnostic' },
			ch8Info_linkCh: { entity: 'number' },
			ch8Info_setAmp: { entity: 'number' },
			ch8Info_iconNum: { entity: 'icon' },
			ch8Info_chName: { entity: 'string' },
			ch8Info_loadRlyCnt: { entity: 'number' },
			ch9Info_linkMark: { entity: 'diagnostic' },
			ch9Info_linkCh: { entity: 'number' },
			ch9Info_setAmp: { entity: 'number' },
			ch9Info_iconNum: { entity: 'icon' },
			ch9Info_chName: { entity: 'string' },
			ch9Info_loadRlyCnt: { entity: 'number' },
			ch10Info_linkMark: { entity: 'diagnostic' },
			ch10Info_linkCh: { entity: 'number' },
			ch10Info_setAmp: { entity: 'number' },
			ch10Info_iconNum: { entity: 'icon' },
			ch10Info_chName: { entity: 'string' },
			ch10Info_loadRlyCnt: { entity: 'number' },
			ch11Info_linkMark: { entity: 'diagnostic' },
			ch11Info_linkCh: { entity: 'number' },
			ch11Info_setAmp: { entity: 'number' },
			ch11Info_iconNum: { entity: 'icon' },
			ch11Info_chName: { entity: 'string' },
			ch11Info_loadRlyCnt: { entity: 'number' },
			ch12Info_linkMark: { entity: 'diagnostic' },
			ch12Info_linkCh: { entity: 'number' },
			ch12Info_setAmp: { entity: 'number' },
			ch12Info_iconNum: { entity: 'icon' },
			ch12Info_chName: { entity: 'string' },
			ch12Info_loadRlyCnt: { entity: 'number' },
			ch1Sta_loadSta: { entity: 'diagnostic' },
			ch1Sta_ctrlMode: { entity: 'diagnostic' },
			ch1Sta_noticeSetTime: { entity: 'string' },
			ch1Sta_noticeEnable: { entity: 'diagnostic' },
			ch1Sta_noticeAction: { entity: 'diagnostic' },
			ch1Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch2Sta_loadSta: { entity: 'diagnostic' },
			ch2Sta_ctrlMode: { entity: 'diagnostic' },
			ch2Sta_noticeSetTime: { entity: 'string' },
			ch2Sta_noticeEnable: { entity: 'diagnostic' },
			ch2Sta_noticeAction: { entity: 'diagnostic' },
			ch2Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch3Sta_loadSta: { entity: 'diagnostic' },
			ch3Sta_ctrlMode: { entity: 'diagnostic' },
			ch3Sta_noticeSetTime: { entity: 'string' },
			ch3Sta_noticeEnable: { entity: 'diagnostic' },
			ch3Sta_noticeAction: { entity: 'diagnostic' },
			ch3Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch4Sta_loadSta: { entity: 'diagnostic' },
			ch4Sta_ctrlMode: { entity: 'diagnostic' },
			ch4Sta_noticeSetTime: { entity: 'string' },
			ch4Sta_noticeEnable: { entity: 'diagnostic' },
			ch4Sta_noticeAction: { entity: 'diagnostic' },
			ch4Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch5Sta_loadSta: { entity: 'diagnostic' },
			ch5Sta_ctrlMode: { entity: 'diagnostic' },
			ch5Sta_noticeSetTime: { entity: 'string' },
			ch5Sta_noticeEnable: { entity: 'diagnostic' },
			ch5Sta_noticeAction: { entity: 'diagnostic' },
			ch5Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch6Sta_loadSta: { entity: 'diagnostic' },
			ch6Sta_ctrlMode: { entity: 'diagnostic' },
			ch6Sta_noticeSetTime: { entity: 'string' },
			ch6Sta_noticeEnable: { entity: 'diagnostic' },
			ch6Sta_noticeAction: { entity: 'diagnostic' },
			ch6Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch7Sta_loadSta: { entity: 'diagnostic' },
			ch7Sta_ctrlMode: { entity: 'diagnostic' },
			ch7Sta_noticeSetTime: { entity: 'string' },
			ch7Sta_noticeEnable: { entity: 'diagnostic' },
			ch7Sta_noticeAction: { entity: 'diagnostic' },
			ch7Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch8Sta_loadSta: { entity: 'diagnostic' },
			ch8Sta_ctrlMode: { entity: 'diagnostic' },
			ch8Sta_noticeSetTime: { entity: 'string' },
			ch8Sta_noticeEnable: { entity: 'diagnostic' },
			ch8Sta_noticeAction: { entity: 'diagnostic' },
			ch8Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch9Sta_loadSta: { entity: 'diagnostic' },
			ch9Sta_ctrlMode: { entity: 'diagnostic' },
			ch9Sta_noticeSetTime: { entity: 'string' },
			ch9Sta_noticeEnable: { entity: 'diagnostic' },
			ch9Sta_noticeAction: { entity: 'diagnostic' },
			ch9Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch10Sta_loadSta: { entity: 'diagnostic' },
			ch10Sta_ctrlMode: { entity: 'diagnostic' },
			ch10Sta_noticeSetTime: { entity: 'string' },
			ch10Sta_noticeEnable: { entity: 'diagnostic' },
			ch10Sta_noticeAction: { entity: 'diagnostic' },
			ch10Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch11Sta_loadSta: { entity: 'diagnostic' },
			ch11Sta_ctrlMode: { entity: 'diagnostic' },
			ch11Sta_noticeSetTime: { entity: 'string' },
			ch11Sta_noticeEnable: { entity: 'diagnostic' },
			ch11Sta_noticeAction: { entity: 'diagnostic' },
			ch11Sta_loadChSwitchCause: { entity: 'diagnostic' },
			ch12Sta_loadSta: { entity: 'diagnostic' },
			ch12Sta_ctrlMode: { entity: 'diagnostic' },
			ch12Sta_noticeSetTime: { entity: 'string' },
			ch12Sta_noticeEnable: { entity: 'diagnostic' },
			ch12Sta_noticeAction: { entity: 'diagnostic' },
			ch12Sta_loadChSwitchCause: { entity: 'diagnostic' }
		},
		masterIncreInfo: {
			gridSta: { entity: 'diagnostic' },
			gridVol: { entity: 'number' },
			masterRly1Cnt: { entity: 'number' },
			masterRly2Cnt: { entity: 'number' },
			masterRly3Cnt: { entity: 'number' },
			masterRly4Cnt: { entity: 'number' },
			masterRlyErrFlg: { entity: 'diagnostic' },
			backupVol_L1SafeData: { entity: 'number' },
			backupVol_L2SafeData: { entity: 'number' },
			backupPhaseDiffSafeData: { entity: 'number' },
			loadVol_L1SafeData: { entity: 'number' },
			loadVol_L2SafeData: { entity: 'number' },
			loadPhaseDiffSafeData: { entity: 'number' },
			masterVol_L1SafeData: { entity: 'number' },
			masterVol_L2SafeData: { entity: 'number' },
			masterPhaseDiffSafeData: { entity: 'number' }
		},
		LoadStrategyCfg: {
			isCfg: { entity: 'diagnostic' },
			midPriorityChDischargeLow: { entity: 'number' },
			loadIsEnable1: { entity: 'diagnostic' },
			loadPriority1: { entity: 'number' },
			loadIsEnable2: { entity: 'diagnostic' },
			loadPriority2: { entity: 'number' },
			loadIsEnable3: { entity: 'diagnostic' },
			loadPriority3: { entity: 'number' },
			loadIsEnable4: { entity: 'diagnostic' },
			loadPriority4: { entity: 'number' },
			loadIsEnable5: { entity: 'diagnostic' },
			loadPriority5: { entity: 'number' },
			loadIsEnable6: { entity: 'diagnostic' },
			loadPriority6: { entity: 'number' },
			loadIsEnable7: { entity: 'diagnostic' },
			loadPriority7: { entity: 'number' },
			loadIsEnable8: { entity: 'diagnostic' },
			loadPriority8: { entity: 'number' },
			loadIsEnable9: { entity: 'diagnostic' },
			loadPriority9: { entity: 'number' },
			loadIsEnable10: { entity: 'diagnostic' },
			loadPriority10: { entity: 'number' },
			loadIsEnable11: { entity: 'diagnostic' },
			loadPriority11: { entity: 'number' },
			loadIsEnable12: { entity: 'diagnostic' },
			loadPriority12: { entity: 'number' }
		},
		loadCurrent: {
			cur_0: { entity: 'number' },
			cur_1: { entity: 'number' },
			cur_2: { entity: 'number' },
			cur_3: { entity: 'number' },
			cur_4: { entity: 'number' },
			cur_5: { entity: 'number' },
			cur_6: { entity: 'number' },
			cur_7: { entity: 'number' },
			cur_8: { entity: 'number' },
			cur_9: { entity: 'number' },
			cur_10: { entity: 'number' },
			cur_11: { entity: 'number' },
			sumCur: { entity: 'number' }
		},
		loadPower: {
			chWatt_0: { entity: 'number' },
			chWatt_1: { entity: 'number' },
			chWatt_2: { entity: 'number' },
			chWatt_3: { entity: 'number' },
			chWatt_4: { entity: 'number' },
			chWatt_5: { entity: 'number' },
			chWatt_6: { entity: 'number' },
			chWatt_7: { entity: 'number' },
			chWatt_8: { entity: 'number' },
			chWatt_9: { entity: 'number' },
			chWatt_10: { entity: 'number' },
			chWatt_11: { entity: 'number' },
			sumWatt: { entity: 'number' }
		},

		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};
const panel2Ranges = {
	panel2: {
		backupIncreInfo: {
			number: {
				backupFullCap: { max: 12400 }
			}
		}
	}
};
const panel2Cmd = {
	panel2: {
		ProtoPushAndSet: {
			epsModeInfo: {
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			}
		},
		action: {
			latestQuotas: {
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

const protoSource = `
syntax = "proto3";
`;

module.exports = {
	panel2States,
	panel2StatesDict,
	panel2Ranges,
	panel2Cmd
};
