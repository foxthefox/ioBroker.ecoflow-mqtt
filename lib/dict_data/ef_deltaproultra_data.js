const deviceStates = {
	//new delta pro ultra
	AppParaHeartbeatReport: {
		diagnostic: {
			sysWorkMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'System Work Mode',
				role: 'info',
				sysWorkMode: { '0': 'OK?' }
			},
			sysBackupEvent: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'System Backup Event',
				role: 'info',
				sysBackupEvent: { '0': 'OK?' }
			},
			acXboost: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC X-Boost',
				role: 'info',
				acXboost: { '0': 'disabled?', '1': 'enabled?' }
			},
			bmsModeSet: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BMS Mode Setting',
				role: 'info',
				bmsModeSet: { '0': '?' }
			},
			acOftenOpenFlg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'acOftenOpenFlg',
				role: 'info',
				acOftenOpenFlg: { '0': 'OK?' }
			},
			solarOnlyFlg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Solar only',
				role: 'info',
				solarOnlyFlg: { '0': 'all?', '1': 'solar only?' }
			},
			timezoneSettype: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Timezone tracking',
				role: 'info',
				timezoneSettype: { '0': 'no tracking?', '1': 'tracking?' }
			}
		},
		number: {
			sysBackupSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'System backup SOC'
			},
			acOutFreq: {
				min: 50,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'AC output frequency'
			},
			acOftenOpenMinSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'acOftenOpenMinSoc'
			},
			sysTimezone: {
				min: -12,
				max: 12,
				unit_of_measurement: 'h',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Timezone offset'
			},
			//to be deleted when level
			backupRatio: {
				min: 20,
				max: 90,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Backup limit (ratio?)'
			}
		},
		switch: {
			energyManageEnable: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Enable energy management',
				role: 'switch',
				energyManageEnable: { '0': 'off', '1': 'on' }
			}
		},
		level: {
			backupRatio: {
				min: 20,
				max: 90,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'level',
				name: 'Backup limit (ratio?)'
			},
			chgMaxSoc: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Maximum charge SOC',
				role: 'level'
			},
			dsgMinSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Minimum discharge SOC',
				role: 'level'
			},
			chg_5p8SetWatts: {
				min: 200,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Default charge power PowerI/O',
				role: 'level'
			},
			chgC20SetWatts: {
				min: 200,
				max: 2400,
				unit_of_measurement: 'W',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Default charge power AC IN',
				role: 'level'
			},
			powerStandbyMins: {
				min: 0,
				max: 800,
				unit_of_measurement: 'min',
				mult: 1,
				step: 1,
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
				name: 'System standby time',
				role: 'level',
				subrole: 'timer'
			},
			screenStandbySec: {
				min: 0,
				max: 1800,
				unit_of_measurement: 's',
				mult: 1,
				step: 60,
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
				name: 'Screen standby time',
				role: 'level',
				subrole: 'timer'
			},
			dcStandbyMins: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				step: 120,
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
				name: 'DC12V standby time',
				role: 'level',
				subrole: 'timer'
			},
			acStandbyMins: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 1,
				step: 1,
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
				name: 'AC standby time',
				role: 'level',
				subrole: 'timer'
			}
		},
		string: {
			sysTimezoneId: { entity_type: 'text', entity_category: 'diagnostic', name: 'Timezone', role: 'info' }
		}
	},
	AppShowHeartbeatReport: {
		string: {
			protoVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'Version', role: 'info' },
			simIccid: { entity_type: 'text', entity_category: 'diagnostic', name: 'simIccid:', role: 'info' },
			chgTimeTaskTable_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Table 0',
				role: 'info'
			},
			chgTimeTaskTable_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Table 1',
				role: 'info'
			},
			chgTimeTaskTable_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Table 2',
				role: 'info'
			},
			dsgTimeTaskTable_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Table 0',
				role: 'info'
			},
			dsgTimeTaskTable_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Table 1',
				role: 'info'
			},
			dsgTimeTaskTable_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Table 2',
				role: 'info'
			}
		},
		number: {
			//as a number until it is clear how the bits are used
			showFlag: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'show flag'
			},
			soc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'SOC'
			},
			bpNum: {
				min: 0,
				max: 5,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Battery pack count'
			},
			c20ChgMaxWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Max charging power AC IN'
			},
			paraChgMaxWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Max parallel charging power'
			},
			remainTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'time',
				role: 'value',
				name: 'Remaining time'
			},
			fullCombo: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'fullCombo'
			},
			remainCombo: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'remainCombo'
			},
			wattsInSum: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Total power input'
			},
			wattsOutSum: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Total power output'
			},
			outUsb1Pwr: {
				min: 0,
				max: 12,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power USB-A 1'
			},
			outUsb2Pwr: {
				min: 0,
				max: 12,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power USB-A 2'
			},
			outTypec1Pwr: {
				min: 0,
				max: 100,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power USB-C 1'
			},
			outTypec2Pwr: {
				min: 0,
				max: 100,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power USB-C 2'
			},
			outAdsPwr: {
				min: 0,
				max: 378,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power DC12V'
			},
			outAcL1_1Pwr: {
				min: 0,
				max: 2400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power Backup 1'
			},
			outAcL1_2Pwr: {
				min: 0,
				max: 2400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power Backup 2'
			},
			outAcL2_1Pwr: {
				min: 0,
				max: 2400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power UPS 1'
			},
			outAcL2_2Pwr: {
				min: 0,
				max: 2400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power UPS 2'
			},
			outAcTtPwr: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power UPS TT-30'
			},
			outAcL14Pwr: {
				min: 0,
				max: 4800,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power Backup L-14'
			},
			outAc_5p8Pwr: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Output power Power I/O'
			},
			inAc_5p8Pwr: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power Power I/O'
			},
			inAcC20Pwr: {
				min: 0,
				max: 2800,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Input power AC IN'
			},
			inLvMpptPwr: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'LV solar power input'
			},
			inHvMpptPwr: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'HV solar power input'
			},
			outPrPwr: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'outPrPwr'
			},
			timeTaskChangeCnt: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Time Task Change Count'
			}
		},
		diagnostic: {
			accessType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Access Type',
				role: 'info',
				accessType: { '0': 'OK?' }
			},
			wireless_4gSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '4G connection status',
				role: 'info',
				wireless_4gSta: {
					'0': 'Operator not search?',
					'1': 'registered?',
					'2': 'searching?',
					'3': 'refuses?',
					'4': 'unknwon?',
					'5': 'roaming registered?'
				}
			},
			access_5p8InType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power I/O input type',
				role: 'info',
				access_5p8InType: { '0': 'idle?', '1': 'AC EV?', '2': 'SHP2?', '3': 'L14 transfer switch?' }
			},
			access_5p8OutType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power I/O output type',
				role: 'info',
				access_5p8OutType: { '0': 'idle?', '1': 'parallel box?', '2': 'SHP2?' }
			},
			wireless_4gCon: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '4G connection',
				role: 'info',
				wireless_4gCon: { '0': 'none?', '1': '2G?', '2?': '3G?', '4': '4G?' }
			},
			wirlesss_4gErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: '4G error code',
				role: 'info',
				wirlesss_4gErrCode: {
					'0': 'OK?',
					'1': 'SIM not inserted?',
					'2': 'PIN required?',
					'3': 'PUK required?',
					'4': 'SIM error?',
					'6': 'No Operator?',
					'7': 'USB disconnect?',
					'8': 'unknown device?',
					'9': 'CTL error?'
				}
			},
			pcsType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PCS type',
				role: 'info',
				pcsType: { '0': 'OK?' }
			},
			sysErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'System error code',
				role: 'info',
				sysErrCode: { '0': 'OK?' }
			},
			timeTaskConflictFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Time Task Conflict',
				role: 'info',
				timeTaskConflictFlag: { '0': 'OK?' }
			},
			chgTimeTaskNotice: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Notice',
				role: 'info',
				chgTimeTaskNotice: { '0': 'OK?' }
			},
			chgTimeTaskType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Type',
				role: 'info',
				chgTimeTaskType: { '-1': 'nothing set?', '0': 'AC charge?', '1': 'AC discharge?', '2': 'DC discharge?' }
			},
			chgTimeTaskIndex: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Index',
				role: 'info',
				chgTimeTaskIndex: { '-1': 'nothing set?', '0': 'OK?' }
			},
			chgTimeTaskMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Mode',
				role: 'info',
				chgTimeTaskMode: { '-1': 'nothing set?', '0': 'OK?' }
			},
			chgTimeTaskParam: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging Time Task Param',
				role: 'info',
				chgTimeTaskParam: { '0': 'OK?' }
			},
			dsgTimeTaskNotice: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Notice',
				role: 'info',
				dsgTimeTaskNotice: { '0': 'OK?' }
			},
			dsgTimeTaskType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Type',
				role: 'info',
				dsgTimeTaskType: { '-1': 'nothing set?', '0': 'AC charge?', '1': 'AC discharge?', '2': 'DC discharge?' }
			},
			dsgTimeTaskIndex: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Index',
				role: 'info',
				dsgTimeTaskIndex: { '-1': 'nothing set?', '0': 'OK?' }
			},
			dsgTimeTaskMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Mode',
				role: 'info',
				dsgTimeTaskMode: { '-1': 'nothing set?', '0': 'OK?' }
			},
			dsgTimeTaskParam: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Discharging Time Task Param',
				role: 'info',
				dsgTimeTaskParam: { '0': 'OK?' }
			}
		},
		switch: {
			wireless_4gOn: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: '4G connection off/on',
				role: 'switch',
				wireless_4gOn: { '0': 'off', '1': 'on' }
			}
		}
	},
	BackendRecordHeartbeatReport: {
		diagnostic: {
			recordFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Record flag',
				role: 'info',
				recordFlag: { '0': 'OK?' }
			},
			sysWorkSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'System work status',
				role: 'info',
				sysWorkSta: { '0': 'OK?' }
			},
			chgReignSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'chgReignSta',
				role: 'info',
				chgReignSta: { '0': 'OK?' }
			},
			pcsWorkSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PCS work status',
				role: 'info',
				pcsWorkSta: { '0': 'OK?' }
			},
			fanState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Fan state',
				role: 'info',
				fanState: { '0': 'off?', '1': 'level 1?' }
			},
			emsWorkSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'EMS work status',
				role: 'info',
				emsWorkSta: { '0': 'OK?' }
			},
			c20InType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC IN type',
				role: 'info',
				c20InType: { '0': '120V?', '1': '240V?' }
			},
			work_5p8Mode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power I/O work mode',
				role: 'info',
				work_5p8Mode: { '0': 'comm?', '1': 'solar only?', '2': 'backup?', '3': 'dbg?' }
			},
			emsOpenBmsIdx: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery pack enable state',
				role: 'info',
				emsOpenBmsIdx: { '0': 'off', '1': 'OK?' }
			},
			pcsDcErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code PCS DC',
				role: 'info',
				pcsDcErrCode: { '0': 'OK?' }
			},
			pcsAcErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code PCS AC',
				role: 'info',
				pcsAcErrCode: { '0': 'OK?' }
			},
			lvPvErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code LV MPPT',
				role: 'info',
				lvPvErrCode: { '0': 'OK?' }
			},
			hvPvErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code HV MPPT',
				role: 'info',
				hvPvErrCode: { '0': 'OK?' }
			},
			adsErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error code DC12V',
				role: 'info',
				adsErrCode: { '0': 'OK?' }
			}
		},
		number: {
			acInFreq: {
				min: 50,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'AC input frequency'
			},
			emsMaxAvailNum: {
				min: 0,
				max: 5,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'EMS max avail. number'
			},
			emsParaVolMin: {
				min: 0,
				max: 120,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Minimum parallel voltage'
			},
			emsParaVolMax: {
				min: 0,
				max: 120,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Maximum parallel voltage'
			},
			acOutFreq: {
				min: 0, //should always be 50
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'AC output frequency'
			},
			batVol: {
				min: 0,
				max: 120,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Battery voltage'
			},
			batAmp: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Battery current'
			},
			bmsInputWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'BMS input power'
			},
			bmsOutputWatts: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'BMS output power'
			},
			outUsb1Vol: {
				min: 0,
				max: 6,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage USB-A 1'
			},
			outUsb1Amp: {
				min: 0,
				max: 3,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current USB-A 1'
			},
			outUsb2Vol: {
				min: 0,
				max: 6,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage USB-A 2'
			},
			outUsb2Amp: {
				min: 0,
				max: 3,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current USB-A 2'
			},
			outTypec1Vol: {
				min: 0,
				max: 25,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage USB-C 1'
			},
			outTypec1Amp: {
				min: 0,
				max: 6,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current USB-C 1'
			},
			outTypec2Vol: {
				min: 0,
				max: 25,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage USB-C 2'
			},
			outTypec2Amp: {
				min: 0,
				max: 6,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current USB-C 2'
			},
			outAdsVol: {
				min: 0,
				max: 13,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage DC12V'
			},
			outAdsAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current DC12V'
			},
			outAcL1_1Vol: {
				min: 0,
				max: 130,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage Backup 1'
			},
			outAcL1_1Amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current Backup 1'
			},
			outAcL1_2Vol: {
				min: 0,
				max: 130,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage Backup 2'
			},
			outAcL1_2Amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current Backup 2'
			},
			outAcL2_1Vol: {
				min: 0,
				max: 130,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage UPS 1'
			},
			outAcL2_1Amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current UPS 1'
			},
			outAcL2_2Vol: {
				min: 0,
				max: 130,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage UPS 2'
			},
			outAcL2_2Amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current UPS 2'
			},
			outAcTtVol: {
				min: 0,
				max: 130,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage UPS TT-30'
			},
			outAcTtAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current UPS TT-30'
			},
			outAcL14Vol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage Backup L-14'
			},
			outAcL14Amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current Backup L-14'
			},
			outAc_5p8Vol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Output voltage PowerI/O'
			},
			outAc_5p8Amp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Output current PowerI/O'
			},
			inAc_5p8Vol: {
				min: 0,
				max: 260,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Input voltage PowerI/O'
			},
			inAc_5p8Amp: {
				min: 0,
				max: 31,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Input current PowerI/O'
			},
			inAcC20Vol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Input voltage AC IN'
			},
			inAcC20Amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Input current AC IN'
			},
			inLvMpptVol: {
				min: 0,
				max: 150,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'LV solar input voltage'
			},
			inLvMpptAmp: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'LV solar input current'
			},
			inHvMpptVol: {
				min: 0,
				max: 450,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'HV solar input voltage'
			},
			inHvMpptAmp: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'HV solar input current'
			},
			pcsDcTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Temperature PCS DC'
			},
			pcsAcTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Temperature PCS AC'
			},
			mpptLvTemp: {
				min: 0,
				max: 69,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Temperature LV MPPT'
			},
			mpptHvTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Temperature HV MPPT'
			},
			pdTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Temperature PD'
			},
			evMaxChargerCur: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Maximum EV charge current'
			}
		}
	},
	BPInfo: {
		number: {
			bpNo: {
				min: 0,
				max: 5,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Battery pack number'
			},
			bpSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery pack SOC'
			},
			bpPwr: {
				min: 0,
				max: 7200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Battery pack power'
			},
			bpEnergy: {
				min: 0,
				max: 6200,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'Battery pack energy'
			},
			heatTime: {
				min: 0,
				max: 360,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Battery pack heating time'
			},
			remainTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Battery pack remain time'
			},
			bpSocMax: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery pack max SOC'
			},
			bpSocMin: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery pack min SOC'
			},
			bpTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Battery pack temperature'
			}
		},
		diagnostic: {
			bpChgSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery pack Charge State',
				role: 'info',
				bpChgSta: { '0': 'OK?' }
			},
			bpErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery pack Error Code',
				role: 'info',
				bpErrCode: { '0': 'OK?' }
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

const deviceStatesDict = {
	deltaproultra: {
		AppParaHeartbeatReport: {
			sysWorkMode: { entity: 'diagnostic' },
			sysBackupEvent: { entity: 'diagnostic' },
			sysBackupSoc: { entity: 'number' },
			energyManageEnable: { entity: 'switch' },
			backupRatio: { entity: 'number' },
			acXboost: { entity: 'diagnostic' },
			acOutFreq: { entity: 'number' },
			bmsModeSet: { entity: 'diagnostic' },
			chgMaxSoc: { entity: 'level' },
			dsgMinSoc: { entity: 'level' },
			acOftenOpenFlg: { entity: 'diagnostic' },
			acOftenOpenMinSoc: { entity: 'number' },
			chg_5p8SetWatts: { entity: 'level' },
			chgC20SetWatts: { entity: 'level' },
			powerStandbyMins: { entity: 'level' },
			screenStandbySec: { entity: 'level' },
			dcStandbyMins: { entity: 'level' },
			acStandbyMins: { entity: 'level' },
			solarOnlyFlg: { entity: 'diagnostic' },
			timezoneSettype: { entity: 'diagnostic' },
			sysTimezone: { entity: 'number' },
			sysTimezoneId: { entity: 'string' }
		},
		AppShowHeartbeatReport: {
			protoVer: { entity: 'string' },
			showFlag: { entity: 'number' },
			accessType: { entity: 'diagnostic' },
			wireless_4gOn: { entity: 'switch' },
			wireless_4gSta: { entity: 'diagnostic' },
			access_5p8InType: { entity: 'diagnostic' },
			access_5p8OutType: { entity: 'diagnostic' },
			wireless_4gCon: { entity: 'diagnostic' },
			wirlesss_4gErrCode: { entity: 'diagnostic' },
			simIccid: { entity: 'string' },
			soc: { entity: 'number' },
			bpNum: { entity: 'number' },
			pcsType: { entity: 'diagnostic' },
			c20ChgMaxWatts: { entity: 'number' },
			paraChgMaxWatts: { entity: 'number' },
			remainTime: { entity: 'number' },
			sysErrCode: { entity: 'diagnostic' },
			fullCombo: { entity: 'number' },
			remainCombo: { entity: 'number' },
			wattsInSum: { entity: 'number' },
			wattsOutSum: { entity: 'number' },
			outUsb1Pwr: { entity: 'number' },
			outUsb2Pwr: { entity: 'number' },
			outTypec1Pwr: { entity: 'number' },
			outTypec2Pwr: { entity: 'number' },
			outAdsPwr: { entity: 'number' },
			outAcL1_1Pwr: { entity: 'number' },
			outAcL1_2Pwr: { entity: 'number' },
			outAcL2_1Pwr: { entity: 'number' },
			outAcL2_2Pwr: { entity: 'number' },
			outAcTtPwr: { entity: 'number' },
			outAcL14Pwr: { entity: 'number' },
			outAc_5p8Pwr: { entity: 'number' },
			inAc_5p8Pwr: { entity: 'number' },
			inAcC20Pwr: { entity: 'number' },
			inLvMpptPwr: { entity: 'number' },
			inHvMpptPwr: { entity: 'number' },
			outPrPwr: { entity: 'number' },
			timeTaskChangeCnt: { entity: 'number' },
			timeTaskConflictFlag: { entity: 'diagnostic' },
			chgTimeTaskNotice: { entity: 'diagnostic' },
			chgTimeTaskType: { entity: 'diagnostic' },
			chgTimeTaskIndex: { entity: 'diagnostic' },
			chgTimeTaskMode: { entity: 'diagnostic' },
			chgTimeTaskParam: { entity: 'diagnostic' },
			chgTimeTaskTable_0: { entity: 'string' },
			chgTimeTaskTable_1: { entity: 'string' },
			chgTimeTaskTable_2: { entity: 'string' },
			dsgTimeTaskNotice: { entity: 'diagnostic' },
			dsgTimeTaskType: { entity: 'diagnostic' },
			dsgTimeTaskIndex: { entity: 'diagnostic' },
			dsgTimeTaskMode: { entity: 'diagnostic' },
			dsgTimeTaskParam: { entity: 'diagnostic' },
			dsgTimeTaskTable_0: { entity: 'string' },
			dsgTimeTaskTable_1: { entity: 'string' },
			dsgTimeTaskTable_2: { entity: 'string' }
		},
		BackendRecordHeartbeatReport: {
			recordFlag: { entity: 'diagnostic' },
			sysWorkSta: { entity: 'diagnostic' },
			chgReignSta: { entity: 'diagnostic' },
			pcsWorkSta: { entity: 'diagnostic' },
			fanState: { entity: 'diagnostic' },
			emsWorkSta: { entity: 'diagnostic' },
			c20InType: { entity: 'diagnostic' },
			work_5p8Mode: { entity: 'diagnostic' },
			acInFreq: { entity: 'number' },
			emsMaxAvailNum: { entity: 'number' },
			emsOpenBmsIdx: { entity: 'diagnostic' },
			emsParaVolMin: { entity: 'number' },
			emsParaVolMax: { entity: 'number' },
			acOutFreq: { entity: 'number' },
			pcsDcErrCode: { entity: 'diagnostic' },
			pcsAcErrCode: { entity: 'diagnostic' },
			lvPvErrCode: { entity: 'diagnostic' },
			hvPvErrCode: { entity: 'diagnostic' },
			adsErrCode: { entity: 'diagnostic' },
			batVol: { entity: 'number' },
			batAmp: { entity: 'number' },
			bmsInputWatts: { entity: 'number' },
			bmsOutputWatts: { entity: 'number' },
			outUsb1Vol: { entity: 'number' },
			outUsb1Amp: { entity: 'number' },
			outUsb2Vol: { entity: 'number' },
			outUsb2Amp: { entity: 'number' },
			outTypec1Vol: { entity: 'number' },
			outTypec1Amp: { entity: 'number' },
			outTypec2Vol: { entity: 'number' },
			outTypec2Amp: { entity: 'number' },
			outAdsVol: { entity: 'number' },
			outAdsAmp: { entity: 'number' },
			outAcL1_1Vol: { entity: 'number' },
			outAcL1_1Amp: { entity: 'number' },
			outAcL1_2Vol: { entity: 'number' },
			outAcL1_2Amp: { entity: 'number' },
			outAcL2_1Vol: { entity: 'number' },
			outAcL2_1Amp: { entity: 'number' },
			outAcL2_2Vol: { entity: 'number' },
			outAcL2_2Amp: { entity: 'number' },
			outAcTtVol: { entity: 'number' },
			outAcTtAmp: { entity: 'number' },
			outAcL14Vol: { entity: 'number' },
			outAcL14Amp: { entity: 'number' },
			outAc_5p8Vol: { entity: 'number' },
			outAc_5p8Amp: { entity: 'number' },
			inAc_5p8Vol: { entity: 'number' },
			inAc_5p8Amp: { entity: 'number' },
			inAcC20Vol: { entity: 'number' },
			inAcC20Amp: { entity: 'number' },
			inLvMpptVol: { entity: 'number' },
			inLvMpptAmp: { entity: 'number' },
			inHvMpptVol: { entity: 'number' },
			inHvMpptAmp: { entity: 'number' },
			pcsDcTemp: { entity: 'number' },
			pcsAcTemp: { entity: 'number' },
			mpptLvTemp: { entity: 'number' },
			mpptHvTemp: { entity: 'number' },
			pdTemp: { entity: 'number' },
			evMaxChargerCur: { entity: 'number' }
		},
		BPInfo: {
			bpNo: { entity: 'number' },
			bpChgSta: { entity: 'diagnostic' },
			bpSoc: { entity: 'number' },
			bpPwr: { entity: 'number' },
			bpEnergy: { entity: 'number' },
			heatTime: { entity: 'number' },
			remainTime: { entity: 'number' },
			bpSocMax: { entity: 'number' },
			bpSocMin: { entity: 'number' },
			bpErrCode: { entity: 'diagnostic' },
			bpTemp: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const deviceRanges = {
	deltaproultra: {
		AppShowHeartbeatReport: {
			number: {
				c20ChgMaxWatts: { max: 7200 }
			}
		}
	}
};

const deviceCmd = {
	deltaproultra: {
		AppShowHeartbeatReport: {
			wireless_4gOn: { msg: { dest: 53, cmdFunc: 2, cmdId: 117, dataLen: 2 } }
		},
		AppParaHeartbeatReport: {
			energyManageEnable: { msg: { dest: 2, cmdFunc: 2, cmdId: 94, dataLen: 4 } }, // field 1 = enable, field2 = limit backupRatio
			chgMaxSoc: { msg: { dest: 2, cmdFunc: 2, cmdId: 87, dataLen: 2 } },
			dsgMinSoc: { msg: { dest: 2, cmdFunc: 2, cmdId: 88, dataLen: 2 } },
			chg_5p8SetWatts: { msg: { dest: 2, cmdFunc: 2, cmdId: 73, dataLen: 3 } }, //field 1
			chgC20SetWatts: { msg: { dest: 2, cmdFunc: 2, cmdId: 73, dataLen: 3 } }, //field 2
			powerStandbyMins: { msg: { dest: 2, cmdFunc: 2, cmdId: 81, dataLen: 2 } },
			screenStandbySec: { msg: { dest: 2, cmdFunc: 2, cmdId: 82, dataLen: 3 } },
			dcStandbyMins: { msg: { dest: 2, cmdFunc: 2, cmdId: 84, dataLen: 2 } },
			acStandbyMins: { msg: { dest: 2, cmdFunc: 2, cmdId: 83, dataLen: 2 } },
			//missing datapoints for mapping
			dcON: { msg: { dest: 2, cmdFunc: 2, cmdId: 68, dataLen: 2 } },
			acAlwaysOn: { msg: { dest: 2, cmdFunc: 2, cmdId: 93, dataLen: 2 } }, //acAlwaysOnTime
			BatteryPreCond_ON: { msg: { dest: 2, cmdFunc: 2, cmdId: 89, dataLen: 2 } },
			// should be done through the app
			timezone: { msg: { dest: 2, cmdFunc: 2, cmdId: 86, dataLen: 2 } }, //+ timezoneSetAuto
			town: { msg: { dest: 2, cmdFunc: 2, cmdId: 87, dataLen: 2 } }, //länge des strings
			rename: { msg: { dest: 2, cmdFunc: 2, cmdId: 65, dataLen: 2 } } //länge des strings
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 2, cmdId: 1, dataLen: 0 } }
		}
	}
};

const protoMsg = {
	cmdId: {
		117: { cmdFunc: { 53: 'lte4g_pack' } },
		103: { cmdFunc: { 2: 'lab_pack' } },
		94: { cmdFunc: { 2: 'backup_pack' } },
		93: { cmdFunc: { 2: 'acalwaysOn_pack' } },
		89: { cmdFunc: { 2: 'batPreCondOn_pack' } },
		88: { cmdFunc: { 2: 'dischaLim_pack' } },
		87: { cmdFunc: { 2: 'chaLim_pack', 1: 'areaTown_pack' } },
		86: { cmdFunc: { 1: 'town_pack' } },
		84: { cmdFunc: { 2: 'dcTimeout_pack' } },
		83: { cmdFunc: { 2: 'acTimeout_pack' } },
		82: { cmdFunc: { 2: 'lcdTimeout_pack' } },
		81: { cmdFunc: { 2: 'deviceTimeout_pack' } },
		73: { cmdFunc: { 2: 'acChargeSpeed_pack' } },
		68: { cmdFunc: { 2: 'dcoutput_pack' } },
		65: { cmdFunc: { 2: 'rename_pack' } },
		//28: { cmdFunc: { 3: 'nodata_src6' } },
		4: { cmdFunc: { 2: 'BPInfoReport' } },
		3: { cmdFunc: { 2: 'AppParaHeartbeatReport' } },
		2: { cmdFunc: { 2: 'BackendRecordHeartbeatReport' } },
		1: { cmdFunc: { 2: 'AppShowHeartbeatReport' } }
	}
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus

async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged) {
	let haUpdate = [];
	if (payload) {
		if (stateDictObj) {
			if (stateObj) {
				for (let channel in payload) {
					//other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
					switch (channel) {
						case 'AppParaHeartbeatReport':
						case 'AppShowHeartbeatReport':
						case 'BackendRecordHeartbeatReport':
							// all cases without nested states
							await setOnlineStatus(adapter, topic);
							for (let state in payload[channel]) {
								let val;
								let haupd;
								val = payload[channel][state];
								haupd = await compareUpdate(
									adapter,
									stateDictObj,
									stateObj,
									haenable,
									topic,
									channel,
									state,
									val,
									channel,
									logged
								);
								if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							}
							break;
						case 'BPInfoReport':
							await setOnlineStatus(adapter, topic);
							//BPInfo mit bpNo verknüpfen
							for (let i = 0; i < payload[channel]['bpInfo'].length; i++) {
								//BPInfo mit bpNo verknüpfen, wenn 1 dann ohne Anhang wegen Kompatibilität
								let name =
									payload[channel]['bpInfo'][i]['bpNo'] == 1
										? 'BPInfo'
										: ''.concat('BPInfo', String(payload[channel]['bpInfo'][i]['bpNo']));
								for (let state in payload[channel]['bpInfo'][i]) {
									let val;
									let haupd;
									val = payload[channel]['bpInfo'][i][state];
									haupd = await compareUpdate(
										adapter,
										stateDictObj,
										stateObj,
										haenable,
										topic,
										name, //channel,
										state,
										val,
										'BPInfo', //channel,
										logged
									);
									if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
								}
							}
							break;
						case 'info':
							//channel info is only received when offline, no need to check the content
							await setOfflineStatus(adapter, topic);
							break;
						default:
							//nothing todo
							break;
					}
				}
			} else {
				adapter.log.warn('storeStreamPayload no stateObj');
			}
		} else {
			adapter.log.warn('storeStreamPayload no stateDictobj');
		}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}


async function prepareProtoCmd(adapter, serial, streamType, state, value, cmd, log) {
	if (state === 'latestQuotas') {
		if (log === true) {
			adapter.log.debug('preparaing latestQuotas: ' + serial);
		}
		let muster = {
			header: {
				src: 32,
				dest: 32,
				seq: Date.now(),
				from: 'ios'
			}
		};
		const root = protobuf.parse(protoSource).root;
		const SetMessage = root.lookupType('setMessage');
		const message = SetMessage.create(muster);
		const messageBuffer = SetMessage.encode(message).finish();
		return messageBuffer;
	} else {
		if (streamType === 'deltaproultra') {
			let muster = {
				header: {
					src: 32,
					dest: 2,
					dSrc: 1,
					dDest: 1,
					checkType: 3,
					cmdFunc: 2,
					cmdId: 129,
					needAck: 1,
					seq: Date.now(),
					version: 19,
					payloadVer: 1,
					from: 'ios'
				}
			};
			if (state === 'wireless_4gOn') {
				if (value === true) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value ? 1 : 0;
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
					muster['header']['dest'] = cmd['msg']['dest'] || 53;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'energyManageEnable') {
				//enable sends true +limit
				//disable sends only limit
				//minDsgSoc changes also limit (+5%)
				const minsoc = await adapter.getStateAsync(serial + '.AppParaHeartbeatReport.dsgMinSoc').catch((e) => {
					adapter.log.warn('did not get ' + serial + '.AppParaHeartbeatReport.dsgMinSoc ->' + e);
				});
				const bpsoc = await adapter.getStateAsync(serial + '.AppParaHeartbeatReport.backupRatio').catch((e) => {
					adapter.log.warn('did not get ' + serial + '.AppParaHeartbeatReport.backupRatio ->' + e);
				});
				if (value === true) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = value ? 1 : 0;
					if (bpsoc.val < minsoc.val + 5) {
						muster['header']['pdata']['value2'] = minsoc.val + 5;
					} else {
						muster['header']['pdata']['value2'] = bpsoc.val;
					}
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = cmd['msg']['dataLen'] || 4;
				} else {
					//omit pdata value#1
					// the APP sends no value for padata respectively the item #1
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value2'] = bpsoc.val;
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = 2; //always 2
				}
			} else if (state === 'chgMaxSoc' || state === 'dsgMinSoc' || state === 'chg_5p8SetWatts') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = parseInt(value);
					//muster['header']['dataLen'] = {};
					if (value > 128) {
						muster['header']['dataLen'] = 3;
					} else {
						muster['header']['dataLen'] = 2;
					}
					//muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (state === 'chgC20SetWatts') {
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value2'] = parseInt(value); // must be field 2
					//muster['header']['dataLen'] = {};
					muster['header']['dataLen'] = 3;
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else if (
				state === 'powerStandbyMins' ||
				state === 'screenStandbySec' ||
				state === 'dcStandbyMins' ||
				state === 'acStandbyMins'
			) {
				//selects
				//manipulate value?
				if (value !== 0) {
					muster['header']['pdata'] = {};
					muster['header']['pdata']['value'] = parseInt(value);
					//muster['header']['dataLen'] = {};
					if (value > 128) {
						muster['header']['dataLen'] = 3;
					} else {
						muster['header']['dataLen'] = 2;
					}
				} else {
					//omit pdata
					// the APP sends no value for padata respectively the item #1
				}
			} else {
				muster['header']['pdata'] = {};
				muster['header']['pdata']['value'] = value;
				muster['header']['dataLen'] = 2;
			}
			//for all commands
			muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
			muster['header']['cmdId'] = cmd['msg']['cmdId'];
			if (log) {
				adapter.log.debug(
					'[PROTOBUF encode] ' + state + ' ' + value + ' send deltaproultra ' + JSON.stringify(muster)
				);
			}
			const root = protobuf.parse(protoSource).root;
			const SetMessage = root.lookupType('setMessage');
			const message = SetMessage.create(muster);
			const messageBuffer = SetMessage.encode(message).finish();
			return messageBuffer;
		}
	}
}

const protoSource = `
syntax = "proto3";

message dcoutput_pack {
	optional int32 dcoutput = 1;
}
message deviceTimeout_pack {
	optional int32 deviceTimeout = 1;
}
message lcdTimeout_pack {
	optional int32 lcdTimeout = 1;
}    
message dcTimeout_pack {
	optional int32 dcTimeout = 1;
} 
message acTimeout_pack {
	optional int32 acTimeout = 1;
} 
message chaLim_pack {
	optional int32 chaLim = 1;
}
message dischaLim_pack {
	optional int32 dischaLim = 1;
}
message acChargeSpeed_pack {
	optional int32 acChargeSpeedPower = 1;
	optional int32 acChargeSpeedAC = 2;
}
message backup_pack {
	optional int32 backupEnable = 1;
	optional int32 backupLim = 2;
}
message lte4g_pack {
	optional int32 lte4gEnable = 1;
}
message acalwaysOn_pack {
	optional int32 acAlwaysOnEnable = 1;
	optional int32 acAlwaysOnTime = 2;
}
message batPreCondOn_pack {
	optional int32 batPreCondOn = 1;
}
message areaTown_pack {
	optional string areaTown = 1;
}
message town_pack {
	optional sint32 town = 1;
	optional uint32 setAuto = 2;
}
message init_pack {
	optional uint32 unixtime = 1;
	optional sint32 town = 2;
}
message lab_pack {
	optional uint32 labVal = 1;
}
message rename_pack {
	optional string devName = 1;
}
message dpu_3 {
	optional uint32 bmsOnline1 = 1; // status or error?
	optional uint32 unknown2 = 2; // status or error?
	optional uint32 unknown3 = 3; // value
	optional uint32 bkpResEn = 4; // Backup reserve (0: Disabled, 1: Enabled)
	optional int32 bkpResLev = 5; // Backup reserve level [%]
	optional int32 unknown6 = 6; // enable; on/off
	optional int32 bkpResSolLev = 7; // Backup reserve solar charging level [%]
	optional int32 batPreCondEn = 8; // Battery Preconditioning (0: Disabled, 1: Enabled)
	optional int32 chaLim = 9; // Charge Limit [%]
	optional int32 dischaLim = 10; // Discharge Limit [%]
	optional int32 unknown11 = 11; // enable; on/off
	optional int32 unknown12 = 12; //limit?
	optional int32 acSpeed = 13; // AC Charging Speed [W]
	optional int32 power = 14; // Power In/Out [W]
	optional int32 devTimeout = 15; // Device Timeout [min] (0=Never)
	optional int32 lcdTimeout = 16; // LCD screen timeout [sec] (0=Never)
	optional int32 dc12vTimeout = 17; // 12V DC Timeout [min] (0=Never)
	optional int32 acTimeout = 18; // AC Timeout [min] (0=Never)
	optional int32 unknown19 = 19; // enable; on/off
	optional int32 unknown20 = 20; // enable; on/off
	optional int32 town = 21; //town
	optional string timezone = 22; //area/town
}
message AppParaHeartbeatReport
{
    optional uint32 sys_work_mode = 1;
    optional uint32 sys_backup_event = 2;
    optional uint32 sys_backup_soc = 3;
    optional uint32 energy_manage_enable = 4;
    optional uint32 backup_ratio = 5;
    optional uint32 ac_xboost = 6;
    optional uint32 ac_out_freq = 7;
    optional uint32 bms_mode_set = 8;
    optional uint32 chg_max_soc = 9;
    optional uint32 dsg_min_soc = 10;
    optional uint32 ac_often_open_flg = 11;
    optional uint32 ac_often_open_min_soc = 12;
    optional uint32 chg_5p8_set_watts = 13;
    optional uint32 chg_c20_set_watts = 14;
    optional uint32 power_standby_mins = 15;
    optional uint32 screen_standby_sec = 16;
    optional uint32 dc_standby_mins = 17;
    optional uint32 ac_standby_mins = 18;
    optional uint32 solar_only_flg = 19;
    optional uint32 timezone_settype = 20;
    optional sint32 sys_timezone = 21;
    optional string sys_timezone_id = 22;
}

message dpu_4 {
	optional uint32 unknown1 = 1; // status or error?
	optional uint32 soc3 = 3; // Soc
	optional float unknown4  = 4; // battery power
	optional float capacity5 = 5; // 
	optional int32 remainTime7 = 7; //  remain time
	optional int32 chaLim = 8; // Charge Limit [%]
	optional int32 dischaLim = 9; // Discharge Limit [%]
	optional int32 unknown11 = 11; // type
}
message BPInfo
{
    optional uint32 bp_no = 1;
    optional uint32 bp_chg_sta = 2;
    optional uint32 bp_soc = 3;
    optional float bp_pwr = 4;
    optional float bp_energy = 5; 
    optional uint32 heat_time = 6;
    optional uint32 remain_time = 7;
    optional uint32 bp_soc_max = 8;
    optional uint32 bp_soc_min = 9;
    optional uint32 bp_err_code = 10;
    optional int32 bp_temp = 11;
}

message BPInfoReport
{
    repeated BPInfo bp_info = 1;
}

message dpu_2 {
	optional uint32 unknown1 = 1; // status or error?
	optional uint32 unknown21 = 21; // status or error?
	optional uint32 unknown22 = 22; // status or error?
	optional uint32 watthBatt23 = 23; // Wh battery
	optional uint32 unknown24 = 24; // status or error?
	optional uint32 unknown25 = 25; // status or error?

	optional uint32 unknown41 = 41; // status 
	optional uint32 unknown42 = 42; // status 
	optional uint32 freq43 = 43; // frequency
	optional uint32 unknown44 = 44; // status 
	optional uint32 unknown45 = 45; // status 
	optional uint32 watthOut46 = 46; // Wh out
	optional uint32 watthIn47 = 47; // Wh in
	optional uint32 freq48 = 48; // frequency
	optional uint32 unknown49 = 49; // status 
	optional uint32 unknown50 = 50; // status 
	optional uint32 unknown51 = 51; // status 
	optional uint32 unknown52 = 52; // status 
	optional uint32 unknown53 = 53; // status 
	
	optional float volt61 = 61; // voltage
	optional float current62 = 62; // current

	optional float float63 = 63; // voltage
	optional float float64 = 64; // current

	optional float usbC1Volt65 = 65; // voltage
	optional float usbC1Current66 = 66; // current
	optional float usbC2Colt67 = 67; // voltage
	optional float usbC2Current68 = 68; // current

	optional float usbA1Volt69 = 69; // voltage
	optional float usbA1Current70 = 70; // current
	optional float usbA2Volt71 = 71; // voltage
	optional float usbA2Current72 = 72; // current

	optional float dcVolt73 = 73; // voltage
	optional float dcCurrent74 = 74; // current

	optional float ac1outBackupVolt75 = 75; // voltage
	optional float ac1outBackupCurrent76 = 76; // current
	optional float ac2outBackupvolt77 = 77; // voltage
	optional float ac2outBackupCurrent78 = 78; // current
	optional float ac1outOnlineVolt79 = 79; // voltage
	optional float ac1outOnlineCurrent80 = 80; // current
	optional float ac2outOnlineVolt81 = 81; // voltage
	optional float ac2outOnlineCurrent82 = 82; // current

	optional float ac30AVolt83 = 83; // voltage
	optional float ac30ACurrent84 = 84; // current
	optional float acL14Volt85 = 85; // voltage
	optional float acL14Current86 = 86; // current

	optional float solarLowVolt87 = 87; // voltage
	optional float solarLowcurrent88 = 88; // current

	optional float solarHighVolt89 = 89; // voltage
	optional float solarHighCurrent90 = 90; // current

	optional float acInVolt91 = 91; // voltage
	optional float acInCurrent92 = 92; // current

	optional float powerIOInVolt93 = 93; // voltage
	optional float powerIOInCurrent94 = 94; // current

	optional float powerIOOutVolt95 = 95; // voltage
	optional float powerIOOutCurrent96 = 96; // current

	optional float temp97 = 97; //temp in degC?
	optional float temp98 = 98; //temp in degC?
	optional float temp99 = 99; //temp in degC?
	optional float temp100 = 100; //temp in degC?

	optional uint32 unknown101 = 101; //
	optional float unknown102 = 102; // value 
}
message BackendRecordHeartbeatReport
{
    optional uint32 record_flag = 1;
    optional uint32 sys_work_sta = 21;
    optional uint32 chg_reign_sta = 22;
    optional uint32 pcs_work_sta = 23;
    optional uint32 fan_state = 24;
    optional uint32 ems_work_sta = 25;
    optional uint32 c20_in_type = 41;
    optional uint32 work_5p8_mode = 42;
    optional uint32 ac_in_freq = 43;
    optional uint32 ems_max_avail_num = 44;
    optional uint32 ems_open_bms_idx = 45;
    optional uint32 ems_para_vol_min = 46;
    optional uint32 ems_para_vol_max = 47;
    optional uint32 ac_out_freq = 48;
    optional uint32 pcs_dc_err_code = 49;
    optional uint32 pcs_ac_err_code = 50;
    optional uint32 lv_pv_err_code = 51;
    optional uint32 hv_pv_err_code = 52;
    optional uint32 ads_err_code = 53;
    optional float bat_vol = 61;
    optional float bat_amp = 62;
    optional float bms_input_watts = 63;
    optional float bms_output_watts = 64;
    optional float out_usb1_vol = 65;
    optional float out_usb1_amp = 66;
    optional float out_usb2_vol = 67;
    optional float out_usb2_amp = 68;
    optional float out_typec1_vol = 69;
    optional float out_typec1_amp = 70;
    optional float out_typec2_vol = 71;
    optional float out_typec2_amp = 72;
    optional float out_ads_vol = 73;
    optional float out_ads_amp = 74;
    optional float out_ac_l1_1_vol = 75;
    optional float out_ac_l1_1_amp = 76;
    optional float out_ac_l1_2_vol = 77;
    optional float out_ac_l1_2_amp = 78;
    optional float out_ac_l2_1_vol = 79;
    optional float out_ac_l2_1_amp = 80;
    optional float out_ac_l2_2_vol = 81;
    optional float out_ac_l2_2_amp = 82;
    optional float out_ac_tt_vol = 83;
    optional float out_ac_tt_amp = 84;
    optional float out_ac_l14_vol = 85;
    optional float out_ac_l14_amp = 86;
    optional float out_ac_5p8_vol = 87;
    optional float out_ac_5p8_amp = 88;
    optional float in_ac_5p8_vol = 89;
    optional float in_ac_5p8_amp = 90;
    optional float in_ac_c20_vol = 91;
    optional float in_ac_c20_amp = 92;
    optional float in_lv_mppt_vol = 93;
    optional float in_lv_mppt_amp = 94;
    optional float in_hv_mppt_vol = 95;
    optional float in_hv_mppt_amp = 96;
    optional float pcs_dc_temp = 97;
    optional float pcs_ac_temp = 98;
    optional float mppt_lv_temp = 99;
    optional float mppt_hv_temp = 100;
    optional int32 pd_temp = 101;
    optional float ev_max_charger_cur = 102;
}

//pd?
message dpu_1 {
	optional uint32 sysVer1 = 1; // 
	optional int32 unknown2 = 2; // status or error?
	optional int32 unknown3 = 3; // status or error?

	optional int32 unknown10 = 10; // status
	optional int32 unknown11 = 11; // status
	optional int32 unknown12 = 12; // status
	optional int32 unknown13 = 13; // status
	optional int32 unknown14 = 14; // status

	optional int32 lim15 = 15; // limit discharge

	optional string unknown16 = 16; // array?
	
	optional int32 soc21 = 21; // soc same as dpu_4 item3
	optional int32 unknown22 = 22; // status
	optional int32 unknown23 = 23; // status
	optional int32 maxAcPower24 = 24; // 
	optional int32 maxPowerPowerPort25 = 25; // 

	optional int32 remainTime26 = 26; // same as dpu_4 item7
	optional int32 unknown27 = 27; // status

	optional int32 limit28 = 28; // 
	optional int32 limit29 = 29; // 

	optional float totalInputPower41 = 41; // total input power [W]
	optional float totalOutputPower42 = 42; // total output power [W]
	optional float usbC1power43 = 43; // USB C
	optional float usbC2power44 = 44; // USB C
	optional float usbA1power45 = 45; // USBA
 	optional float usbA2power46 = 46; // USB A
	optional float dcPower47 = 47; // DC Anderson
	optional float ac1outBackupPower48 = 48; // backup UPS left AC 20A output power [W]
	optional float ac2outBackupPower49 = 49; //  backup UPS right AC 20A output power [W]
	optional float ac1outOnlinePower50 = 50; // online UPS left AC 20A output power [W]
	optional float ac2outOnlinePower51 = 51; // online UPS right AC 20A output power [W]
	optional float acout30APower52 = 52; // 200V AC 20A output power [W]
	optional float acoutL14Power53 = 53; // 100/200V AC 30A output power [W]
	optional float ioPower54 = 54; // POWER IO output power [W]
	optional float totalInputPower56 = 56; // total input power [W], float 
	optional float solarLowInputPower57 = 57; // solar low
	optional float solarHighInputPower58 = 58; // solar high
	optional float float59 = 59; // ac in


	optional int32 unknown100 = 100; // status 
	optional int32 unknown101 = 101; // status 

	//102-109 repeated as 121-128
	optional int32 unknown102 = 102; // status 
	optional int32 unknown103 = 103; //
	optional int32 unknown104 = 104; //
	optional int32 unknown105 = 105; //
	optional int32 unknown106 = 106; // status 
	optional int32 unknown107 = 107; // status 
	optional int32 unknown108 = 108; // status 
	optional int32 unknown109 = 109; // status 

	optional int32 unknown121 = 121; // status
	optional int32 unknown122 = 122; //
	optional int32 unknown123 = 123; //
	optional int32 unknown124 = 124; //
	optional int32 unknown125 = 125; // status 
	optional int32 unknown126 = 126; // status 
	optional int32 unknown127 = 127; // status 
	optional int32 unknown128 = 128; // status 

}

message AppShowHeartbeatReport
{
    optional uint32 proto_ver = 1;
    optional uint32 show_flag = 2;
    optional uint32 access_type = 3;
    optional sint32 wireless_4g_on = 10;
    optional sint32 wireless_4g_sta = 11;
    optional uint32 access_5p8_in_type = 12;
    optional uint32 access_5p8_out_type = 13;
    optional sint32 wireless_4g_con = 14;
    optional sint32 wirlesss_4g_err_code = 15;
    optional string sim_iccid = 16;
    optional uint32 soc = 21;
    optional uint32 bp_num = 22;
    optional uint32 pcs_type = 23;
    optional uint32 c20_chg_max_watts = 24;
    optional uint32 para_chg_max_watts = 25;
    optional uint32 remain_time = 26;
    optional uint32 sys_err_code = 27;
    optional uint32 full_combo = 28;
    optional uint32 remain_combo = 29;
    optional float watts_in_sum = 41;
    optional float watts_out_sum = 42;
    optional float out_usb1_pwr = 43;
    optional float out_usb2_pwr = 44;
    optional float out_typec1_pwr = 45;
    optional float out_typec2_pwr = 46;
    optional float out_ads_pwr = 47;
    optional float out_ac_l1_1_pwr = 48;
    optional float out_ac_l1_2_pwr = 49;
    optional float out_ac_l2_1_pwr = 50;
    optional float out_ac_l2_2_pwr = 51;
    optional float out_ac_tt_pwr = 52;
    optional float out_ac_l14_pwr = 53;
    optional float out_ac_5p8_pwr = 54;
    optional float in_ac_5p8_pwr = 55;
    optional float in_ac_c20_pwr = 56;
    optional float in_lv_mppt_pwr = 57;
    optional float in_hv_mppt_pwr = 58;
    optional float out_pr_pwr = 59;
    optional uint32 time_task_change_cnt = 100;
    optional uint32 time_task_conflict_flag = 101;
    optional uint32 chg_time_task_notice = 102;
    optional  int32 chg_time_task_type = 103;
    optional  int32 chg_time_task_index = 104;
    optional  int32 chg_time_task_mode = 105;
    optional uint32 chg_time_task_param = 106;
    optional uint32 chg_time_task_table_0 = 107;
    optional uint32 chg_time_task_table_1 = 108;
    optional uint32 chg_time_task_table_2 = 109;
    optional uint32 dsg_time_task_notice = 121;
    optional  int32 dsg_time_task_type = 122;
    optional  int32 dsg_time_task_index = 123;
    optional  int32 dsg_time_task_mode = 124;
    optional uint32 dsg_time_task_param = 125;
    optional uint32 dsg_time_task_table_0 = 126;
    optional uint32 dsg_time_task_table_1 = 127;
    optional uint32 dsg_time_task_table_2 = 128;
}

message setMessage {
    setHeader header = 1;
 }
message setHeader {
    setValue pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 enc_type = 6;
    int32 check_type = 7;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
    int32 time_snap = 18;
    int32 is_rw_cmd = 19;
    int32 is_queue = 20;
    int32 ack_type = 21;
    string code = 22;
    string from = 23;
    string module_sn = 24;
    string device_sn = 25;
}
message setValue {
    optional int32 value = 1;
	optional int32 value2 = 2;
}

`;

module.exports = {
	deviceStates,
	deviceStatesDict,
	deviceRanges,
	deviceCmd,
	protoMsg,
	protoSource,
	storeProtoPayload,
	prepareProtoCmd
};
