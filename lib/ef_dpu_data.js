const deltaproultraStates = {
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
				select: [ 'Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr' ],
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
				select: [ 'Never', '10 sec', '30 sec', '1 min', '5 min', '30 min' ],
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
				select: [ 'Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr' ],
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
				select: [ 'Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr' ],
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

const deltaproultraStatesDict = {
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

const deltaproultraRanges = {
	deltaproultra: {
		AppShowHeartbeatReport: {
			number: {
				c20ChgMaxWatts: { max: 7200 }
			}
		}
	}
};

const deltaproultraCmd = {
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

const protoSource = `
syntax = "proto3";
`;

module.exports = {
	deltaproultraStates,
	deltaproultraStatesDict,
	deltaproultraRanges,
	deltaproultraCmd
};
