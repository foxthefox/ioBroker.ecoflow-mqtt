const allstates = {
	glacier: {
		pd: {
			number: {
				exhaustTmp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Exhaust pipe wall temperature',
					subrole: 'number'
				},
				tempCoolTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name:
						'Length of time when the actual temperature of the cooling zone falls in each interval: COOL_ ZONE_ MAX*TEMP_ COOL_ MAX',
					subrole: 'number'
				},
				batTime: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name:
						'batTime; a negative value indicates a discharging time, and positive value indicates a charging time',
					subrole: 'number'
				},
				appSensorAdv: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of sensor blocking: SENSOR_ADV_MAX',
					subrole: 'number'
				},
				errorTimePower: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of each type of fault in the POWER module: ERROR_MAX_POWER',
					subrole: 'number'
				},
				tempWater: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Water temperature of the ice making zone',
					subrole: 'number'
				},
				A12Val: {
					min: 0,
					max: 15,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: '12 V auxiliary supply voltage',
					subrole: 'number'
				},
				tempIceTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when temperature of the ice-making zone falls in each interval: TEMP_ICE_MAX',
					subrole: 'number'
				},

				motorCur: {
					min: 0,
					max: 60,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'Motor Current',
					subrole: 'number'
				},

				networkTypeTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of being networked: NETWORK_TYPE_MAX',
					subrole: 'number'
				},

				powerXt60Time: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of each type of power supply on XT60: POWER_TYPE_MAX',
					subrole: 'number'
				},

				tmpMSet: {
					min: -20,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Combined temperature zone settings (valid when the partition is removed)',
					subrole: 'number'
				},

				icePercent: {
					min: 0,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'Ice making progress',
					subrole: 'number'
				},

				powerBatInTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of battery pack in place',
					subrole: 'number'
				},
				ambientTmp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Ambient temperature',
					subrole: 'number'
				},

				coolZoneSingleTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Single temperature zone duration',
					subrole: 'number'
				},
				chargeXt60Time: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of each type of charging power supply on XT60: POWER_TYPE_MAX',
					subrole: 'number'
				},

				errorTimeBms: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of each type of fault in BMS module: ERROR_MAX_BMS',
					subrole: 'number'
				},

				tmpAver: {
					min: -20,
					max: 60,
					unit_of_measurement: 'C',
					mult: 0.1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Real-time temperature of single temperature zone',
					subrole: 'number'
				},
				appOpTimeBlTime: {
					min: 0,
					max: 3600,
					unit_of_measurement: 's',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Screen timeout set through app: BL_TIME_MAX',
					subrole: 'number'
				},
				tmpRSet: {
					min: -20,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Right temperature zone setting value (works when partition is inserted)',
					subrole: 'number'
				},

				batPct: {
					min: 0,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'Battery level',
					subrole: 'number'
				},
				errorTimePd: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of each type of fault in PD module: ERROR_MAX_PD',
					subrole: 'number'
				},
				iceTmTag: {
					min: 0,
					max: 1440,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'The ice making target time (used for app and LCD effect display)',
					subrole: 'number'
				},

				coolCoverTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of cooling zone being opened',
					subrole: 'number'
				},
				powerBatOutTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of battery pack not in place',
					subrole: 'number'
				},
				chargeWorkTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of working while charging',
					subrole: 'number'
				},
				workFsmTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Running duration of state machine under each state: USER_BEHAVIOR_FSM_MAX',
					subrole: 'number'
				},
				motorVol: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Motor voltage',
					subrole: 'number'
				},

				workModeTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Running duration of each work mode; WORK_MODE_MAX',
					subrole: 'number'
				},

				coolZoneDoubleTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of dual temperature zone',
					subrole: 'number'
				},
				tempAmbientTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when ambient temperature falls in each interval: TEMP_AMBIENT_MAX',
					subrole: 'number'
				},
				tempCoolSetTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name:
						'Length of time when the set temperature of the cooling zone falls in each interval: COOL_ZONE_MAX*TEMP_COOL_SET_MAX',
					subrole: 'number'
				},

				tmpLSet: {
					min: -20,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Set temperature of the left temperature zone (valid when partition is inserted)',
					subrole: 'number'
				},
				motorSpeed: {
					min: 0,
					max: 2000,
					unit_of_measurement: 'rpm',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Motor speed',
					subrole: 'number'
				},
				motorWat: {
					min: 0,
					max: 600,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Motor power',
					subrole: 'number'
				},
				iceTm: {
					min: 0,
					max: 1440,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					name: 'Duration of the current ice making (for app and LCD effect display)',
					role: 'value',
					subrole: 'number'
				}
			},
			string: {
				err: { entity_type: 'text', entity_category: 'diagnostic', name: 'Global error code', role: 'info' },
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
				buttonLong: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of long presses: USER_BEHAVIOR_BUTTON_MAX'
				},
				coolCoverCount: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of cooling zone openings'
				},
				networkTypeCount: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of being networked: NETWORK_TYPE_MAX'
				},
				powerXt60Count: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of each type of power supply on XT60: POWER_TYPE_MAX'
				},
				errorCountPower: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of each type of fault in POWER module: ERROR_MAX_POWER'
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
				workFsmCount: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of entering each state of state machine: USER_BEHAVIOR_FSM_MAX'
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
				errorCountBldc: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of each type of fault in BLDC module: ERROR_MAX_BLDC'
				},
				workModeCount: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of entering each work mode; WORK_MODE_MAX'
				},
				errorCountBms: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of each type of fault in BMS module: ERROR_MAX_PD'
				},
				chargeXt60Count: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of each type of charging power supply on XT60: POWER_TYPE_MAX'
				},
				makeIceCount: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Total count of ice making'
				},
				appOpCountWorkMode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of each work mode set through app: WORK_MODE_MAX'
				},
				chargeWorkCount: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of working while charging'
				},
				appOpCountBlTime: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting different screen timeout through app: BL_TIME_MAX'
				},
				coolZoneSingleCount: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of single temperature zone'
				},
				errorCountPd: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of each fault in PD module: ERROR_MAX_PD'
				},
				buttonShort: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of short pressings: USER_BEHAVIOR_BUTTON_MAX'
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
				}
			},
			level: {
				powerPbLevel: {
					min: 0,
					max: 800,
					unit_of_measurement: 'W',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Battery protection level 0: Low; 1: Medium; 2: High',
					role: 'value',
					subrole: 'power'
				},
				tmpR: {
					min: 0,
					max: 800,
					unit_of_measurement: 'W',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Real-time temperature of the right temperature zone, amplified 10 times',
					role: 'value',
					subrole: 'power'
				},
				tmpL: {
					min: 0,
					max: 800,
					unit_of_measurement: 'W',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Real-time temperature of the left temperature zone, amplified 10 times',
					role: 'value',
					subrole: 'power'
				},
				blTime: {
					min: 0,
					max: 800,
					unit_of_measurement: 'W',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Screen timeout (unit: sec)',
					role: 'value',
					subrole: 'power'
				},
				iceMkMode: {
					min: 0,
					max: 800,
					unit_of_measurement: 'W',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name:
						'Large/small ice cube status: 0: Small ice cube (in preparation); 1: Large ice cube (in preparation); 2: Small ice cube (ice making in progress; cannot be changed); 3: Large ice cube (ice making in progress)',
					role: 'value',
					subrole: 'power'
				}
			},
			diagnostic: {
				fsmState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Real-time running status ',
					role: 'info',
					fsmState: { 1: '?', 2: '?', 3: '?', 4: 'Detaching ice', 5: 'Detaching completed' }
				},
				motorWait: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Waiting for compressor: ',
					role: 'info',
					motorWait: { 0: 'No need to wait', 1: 'Need to wait' }
				},
				pwrState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'pwrState',
					role: 'info',
					pwrState: { 0: 'Powered off', 1: 'Powered on' }
				},
				bldcDntWork: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Compressor work limit ',
					role: 'info',
					bldcDntWork: { 0: 'Allow to work', 1: 'Do not allow to work' }
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
					flagAmbintReady: { 0: 'Unreliable', 1: 'Reliable' }
				},
				batFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Battery pack in-place status ',
					role: 'info',
					batFlag: { 0: 'Not in place', 1: 'In place' }
				},
				xt150InState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'xt150InState',
					role: 'info',
					xt150InState: { 0: 'no input', 1: 'has input' }
				},
				doorStat: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Door status detection',
					role: 'info',
					doorStat: { 1: 'Open', 0: 'Closed' }
				},
				runState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Operating status',
					role: 'info',
					runState: {
						0: 'Normal (24 V output, 40 V output)',
						1: 'Charging suspended (or when there is no input) (24 V off, 40 V output)',
						2: 'Standby (24 V off, 40 V off)'
					}
				},
				chgType: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Charger type //Charger type',
					role: 'info',
					chgType: {
						0: 'NULL',
						1: 'XT150 charging',
						2: 'Adapter charging (hardware detection)',
						3: 'Car charging (hardware detection)',
						4: 'Solar panel charging (hardware detection)',
						5: 'Car charging (software detection)',
						6: 'Solar panel charging (software detection)',
						7: 'Input source cannot be identified (0xff): the charging cable is connected, but it actually does not work due to charging being disabled'
					}
				},
				sensor: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Sensor status; refer to @ST_SENSOR for data explanation; bit 1: Error; bit 0: Normal',
					role: 'info',
					sensor: { 2: 'Error', 1: 'Normal' }
				},
				xt60InState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'xt60 connection status ',
					role: 'info',
					xt60InState: { 0: 'no input', 1: 'has input' }
				},
				iceAlert: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Ice taking reminder',
					role: 'info',
					iceAlert: { 0: 'Do not remind', 1: 'Remind' }
				},
				carBatLow: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Car charger battery protection reminder',
					role: 'info',
					carBatLow: { 0: 'Do not remind', 1: 'Remind' }
				},
				bmsInFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS in-place flag, detected through BMS->PD heartbeat packet',
					role: 'info',
					bmsInFlag: { 0: 'Not in place', 1: 'In place' }
				},
				bldcDntIce: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Ice making limit on compressor',
					role: 'info',
					bldcDntIce: { 0: 'Ice making is allowed', 1: 'Ice making is not allowed' }
				},
				warnInfo: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name:
						'Warning: BIT0: Over-temperature; BIT1: Under-temperature; BIT2: Overload; BIT3: Charging error; BIT4: Fan error; BIT5: BLCD communication error',
					warnInfo: { 1: 'overtemperature' }
				},
				fanLvl: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Fan level',
					fanLvL: { 0: 'non-rotation', 1: 'Level 1', 2: 'Level 2', 3: 'Level3', 4: 'Level 4', 5: 'Level 5' }
				}
			},
			switch: {
				coolMode: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Normal',
					payload_on: 'Eco',
					name: 'cool Mode',
					role: 'switch',
					coolMode: { 0: 'Normal', 1: 'Eco' }
				},
				sensorAdv: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Unblocked',
					payload_on: 'Blocked',
					name:
						'Sensor detection blocking. Refer to @ST_SENSOR for data explanation. Bit: 1: Blocked; 0: Unblocked.',
					role: 'switch',
					sensorAdv: { 1: 'Blocked', 0: 'Unblocked' }
				},
				beepEn: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Buzzer disabled',
					payload_on: 'Buzzer enabled',
					name: 'Beep enable',
					role: 'switch',
					beepEn: { 0: 'Buzzer disabled', 1: 'Buzzer enabled' }
				},
				pwrPbEn: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Disable',
					payload_on: 'Enable',
					name: 'Battery protection switch',
					role: 'switch',
					pwrPbEn: { 0: 'Disable', 1: 'Enable' }
				},
				tmpUnit: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Celsius',
					payload_on: 'Fahrenheit',
					name: 'Temperature Unit',
					role: 'switch',
					tmpUnit: { 0: 'Celsius', 1: 'Fahrenheit' }
				}
			}
		},
		bmsMaster: {
			number: {
				designCap: {
					min: 0,
					max: 40000,
					unit_of_measurement: 'mAh',
					mult: 1,
					entity_type: 'sensor',
					role: 'indicator',
					name: 'Design capacity',
					subrole: 'number'
				},
				f32ShowSoc: {
					min: 0,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'Battery level SOC',
					subrole: 'number'
				},
				minMosTmp: {
					min: 0,
					max: 80,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Minimum MOS temperature',
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
					name: 'Voltage',
					subrole: 'number'
				},
				fullCap: {
					min: 0,
					max: 40000,
					unit_of_measurement: 'mAh',
					mult: 1,
					entity_type: 'sensor',
					role: 'indicator',
					name: 'Full capacity',
					subrole: 'number'
				},
				remainCap: {
					min: 0,
					max: 40000,
					unit_of_measurement: 'mAh',
					mult: 1,
					entity_type: 'sensor',
					role: 'indicator',
					name: 'Remaining capacity',
					subrole: 'number'
				},
				tmp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Temperature',
					subrole: 'number'
				},
				outWatts: {
					min: 0,
					max: 500,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Output power',
					subrole: 'number'
				},
				cycles: {
					min: 0,
					max: 3000,
					unit_of_measurement: 'cycles',
					mult: 1,
					entity_type: 'sensor',
					role: 'indicator',
					name: 'Number of cycles',
					subrole: 'number'
				},
				minCellVol: {
					min: 0,
					max: 5,
					unit_of_measurement: 'V',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Minimum cell voltage',
					subrole: 'number'
				},
				maxCellVol: {
					min: 0,
					max: 5,
					unit_of_measurement: 'V',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Maximum cell voltage',
					subrole: 'number'
				},
				maxMosTmp: {
					min: 0,
					max: 80,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Maximum MOS temperature',
					subrole: 'number'
				},
				inWatts: {
					min: 0,
					max: 600,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Input power',
					subrole: 'number'
				},

				soc: {
					min: 0,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'üercentage',
					role: 'indicator',
					name: 'Battery level',
					subrole: 'number'
				},
				tagChgAmp: {
					min: 0,
					max: 10,
					unit_of_measurement: 'A',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'Target charging current',
					subrole: 'number'
				},
				minCellTmp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Minimum cell temperature',
					subrole: 'number'
				},
				maxCellTmp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Maximum cell temperature',
					subrole: 'number'
				},
				remainTime: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Time remaining',
					subrole: 'number'
				},
				amp: {
					min: 0,
					max: 15,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'Current',
					subrole: 'number'
				}
			},
			string: {
				bmsFault: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS permanent fault',
					role: 'info'
				},
				num: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS number: 0-2',
					role: 'info'
				},
				err: { entity_type: 'text', entity_category: 'diagnostic', name: 'Global error code', role: 'info' },
				bqStatReg: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BQ hardware protection register',
					role: 'info'
				},
				ver: { entity_type: 'text', entity_category: 'diagnostic', name: 'System version', role: 'info' },
				soh: { entity_type: 'text', entity_category: 'diagnostic', name: 'Health status', role: 'info' }
			},
			diagnostic: {
				type: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS type',
					role: 'info',
					type: { 1: 'Lithium battery', 2: 'Oil powered' }
				},
				cellId: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Cell material LI/LFP/LA',
					role: 'info',
					cellId: { '0': 'OK?' }
				},
				openBmsIdx: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Battery pack status',
					role: 'info',
					openBmsIdx: { 0: 'Not enabled', 1: 'Enabled' }
				}
			}
		},
		ems: {
			number: {
				closeOilEbSocMax: {
					min: 60,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'SOC for turning off Smart Generator',
					subrole: 'number'
				},
				chgVol: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Charging voltage',
					subrole: 'number'
				},
				dsgRemain: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Remaining discharging time',
					subrole: 'number'
				},
				maxAvailNum: {
					min: 0,
					max: 40000,
					unit_of_measurement: 'mAh',
					mult: 1,
					entity_type: 'sensor',
					role: 'indicator',
					name: 'Maximum available quantity',
					subrole: 'number'
				},
				paraVolMax: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Maximum voltage when battery packs work in parallel',
					subrole: 'number'
				},
				paraVolMin: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Minimum voltage when battery packs work in parallel',
					subrole: 'number'
				},
				lcdSoc: {
					min: 0,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'SoC value displayed on LCD',
					subrole: 'number'
				},
				chgRemain: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Remaining charging time',
					subrole: 'number'
				},
				openOilEbSocMin: {
					min: 0,
					max: 30,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'SoC for turning on Smart Generator',
					subrole: 'number'
				},
				minDsgSoc: {
					min: 0,
					max: 30,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'Minimum discharging SOC',
					subrole: 'number'
				},
				maxChgSoc: {
					min: 60,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'Maximum charging SOC',
					subrole: 'number'
				}
			},
			string: {
				bmsIsConnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS online signal: BIT0: hardware online signal; BIT1: software online signal',
					role: 'info'
				},
				openBmsIdx: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS enable index: bit0: host (#1); bit1: #2; bit2: #3',
					role: 'info'
				},
				warnState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag',
					role: 'info'
				},
				upsFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'UPS mode enable flag',
					role: 'info'
				},
				bmsModel: { entity_type: 'text', entity_category: 'diagnostic', name: 'BMS model', role: 'info' }
			},
			diagnostic: {
				dsgCmd: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Discharge command',
					role: 'info',
					dsgCmd: { '0': 'OK?' }
				},
				emsFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'ems Flag',
					role: 'info',
					emsFlag: { 0: 'sleep', 1: 'normal' }
				},
				chgCmd: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Charge command',
					role: 'info',
					chgCmd: { '0': 'OK?' }
				},
				fanLvl: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Fan level',
					role: 'info',
					fanLvL: { 0: 'non-rotation', 1: 'Level 1', 2: 'Level 2', 3: 'Level3', 4: 'Level 4', 5: 'Level 5' }
				}
			}
		}
	}
};

let states = require('../../lib/ecoflow_data.js').pstationStates;

const device = 'glacier';
let jdevice = allstates.glacier;

let missing = {};
missing[device] = {};

let dict = {};
dict[device] = {};

let dict2 = {};
dict2[device] = {};

let typetest = [ 'string', 'switch', 'level', 'diagnostic', 'number', 'icon' ];

for (let channel in jdevice) {
	for (let valtyp in jdevice[channel]) {
		for (let state in jdevice[channel][valtyp]) {
			let type = '';
			for (let i = 0; i < typetest.length; i++) {
				if (channel === 'bms') channel = 'bmsMaster';
				console.log(channel + '   ' + typetest[i] + '  ' + state);
				if (states[channel]) {
					if (states[channel][typetest[i]]) {
						const key = Object.keys(states[channel][typetest[i]]).find((key) => key === state);
						if (key === state) {
							type = typetest[i];
							break;
						}
					}
				}
			}
			if (type.length > 0) {
				if (!dict[device][channel]) {
					dict[device][channel] = {};
					dict[device][channel][state] = { entity: type };
				} else {
					dict[device][channel][state] = { entity: type };
				}
			} else {
				if (!missing[device][channel]) {
					missing[device][channel] = {};
					missing[device][channel][state] = { entity: 'missing' };
				} else {
					missing[device][channel][state] = { entity: 'missing' };
				}
			}
			if (!dict2[device][channel]) {
				dict2[device][channel] = {};
				dict2[device][channel][state] = { entity: valtyp };
			} else {
				dict2[device][channel][state] = { entity: valtyp };
			}
		}
	}
}

console.log('missing: ' + JSON.stringify(missing));
console.log('');
console.log('dict known: ' + JSON.stringify(dict));
console.log('');
console.log('dict: ' + JSON.stringify(dict2));

/*
dict known: {"glacier":{"pd":{"errCode":{"entity":"diagnostic"},"beepEn":{"entity":"switch"}},"bmsMaster":{"designCap":{"entity":"number"},"f32ShowSoc":{"entity":"number"},"vol":{"entity":"number"},"fullCap":{"entity":"number"},"remainCap":{"entity":"number"},"cycles":{"entity":"number"},"minCellVol":{"entity":"number"},"maxCellVol":{"entity":"number"},"soc":{"entity":"number"},"tagChgAmp":{"entity":"number"},"remainTime":{"entity":"number"},"amp":{"entity":"number"},"bmsFault":{"entity":"string"},"num":{"entity":"string"},"soh":{"entity":"string"},"type":{"entity":"diagnostic"},"cellId":{"entity":"diagnostic"},"openBmsIdx":{"entity":"string"}},"ems":{"chgVol":{"entity":"number"},"maxAvailNum":{"entity":"string"},"paraVolMax":{"entity":"number"},"paraVolMin":{"entity":"number"},"minDsgSoc":{"entity":"level"},"bmsIsConnt":{"entity":"diagnostic"},"openBmsIdx":{"entity":"string"},"bmsModel":{"entity":"string"},"dsgCmd":{"entity":"diagnostic"},"chgCmd":{"entity":"diagnostic"}}}}
*/
