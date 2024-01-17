const base = {
	glacier: {
		pd: {
			exhaustTmp: { entity: 'number', name: 'Exhaust pipe wall temperature' },
			errBms: { entity: 'string', name: 'BMS fault code' },
			tempCoolTime: {
				entity: 'number',
				name:
					'Length of time when the actual temperature of the cooling zone falls in each interval: COOL_ ZONE_ MAX*TEMP_ COOL_ MAX'
			},
			errPd: { entity: 'string', name: 'PD fault code' },
			iceTm: { entity: 'level', name: 'Duration of the current ice making (for app and LCD effect display)' },
			batTime: {
				entity: 'number',
				name:
					'Unit: min; a negative value indicates a discharging time, and positive value indicates a charging time'
			},
			appSensorAdv: { entity: 'number', name: 'Duration of sensor blocking: SENSOR_ADV_MAX' },
			errorTimePower: {
				entity: 'number',
				name: 'Duration of each type of fault in the POWER module: ERROR_MAX_POWER'
			},
			fsmState: {
				entity: 'diagnostic',
				name: 'Real-time running status 4: Detaching ice, 5: Detaching completed'
			},
			tempWater: {
				entity: 'number',
				name: 'Water temperature of the ice making zone: the data is 10 times the actual temperature value'
			},
			motorWait: { entity: 'diagnostic', name: 'Waiting for compressor: 0: No need to wait; 1: Need to wait' },
			A12Val: { entity: 'number', name: '12 V auxiliary supply voltage' },
			pwrState: { entity: 'diagnostic', name: '0: Powered off; 1: Powered on' },
			coolZoneDoubleCount: { entity: 'number', name: 'Count of dual temperature zones' },
			buttonLong: { entity: 'number', name: 'Count of long presses: USER_BEHAVIOR_BUTTON_MAX' },
			coolMode: { entity: 'switch', name: '0: Normal; 1: Eco' },
			coolCoverCount: { entity: 'number', name: 'Count of cooling zone openings' },
			tempIceTime: {
				entity: 'number',
				name: 'Length of time when temperature of the ice-making zone falls in each interval: TEMP_ICE_MAX'
			},
			bldcDntWork: {
				entity: 'diagnostic',
				name: 'Compressor work limit: 0: Allow to work; 1: Do not allow to work'
			},
			networkTypeCount: { entity: 'number', name: 'Count of being networked: NETWORK_TYPE_MAX' },
			errBldc: { entity: 'string', name: 'BLDC fault code' },
			motorCur: { entity: 'number', name: 'mA' },
			waterLine: { entity: 'diagnostic', name: 'Ice making zone water level: 0-3 levels' },
			sensorAdv: {
				entity: 'switch',
				name:
					'Sensor detection blocking. Refer to @ST_SENSOR for data explanation. Bit: 1: Blocked; 0: Unblocked.'
			},
			powerXt60Count: { entity: 'number', name: 'Count of each type of power supply on XT60: POWER_TYPE_MAX' },
			flagAmbintReady: {
				entity: 'diagnostic',
				name: 'Ambient temperature reliability: 0: Unreliable; 1: Reliable'
			},
			batFlag: { entity: 'diagnostic', name: 'Battery pack in-place status: 0: Not in place; 1: In place' },
			networkTypeTime: { entity: 'number', name: 'Duration of being networked: NETWORK_TYPE_MAX' },
			emsChgFlg: { entity: 'string', name: 'EMS charging flag' },
			errorCountPower: {
				entity: 'number',
				name: 'Count of each type of fault in POWER module: ERROR_MAX_POWER'
			},
			appOpCountDeIce: { entity: 'number', name: 'Count of ice detaching through app' },
			xt150InState: { entity: 'diagnostic', name: '0:no input, 1:has input' },
			powerXt60Time: {
				entity: 'number',
				name: 'Duration of each type of power supply on XT60: POWER_TYPE_MAX'
			},
			dntMakeIceDevice: {
				entity: 'number',
				name: 'Count of pressing the ice making button when ice making is disabled'
			},
			doorStat: { entity: 'diagnostic', name: 'Door status detection. 1: Open; 0: Closed' },
			appOpCountBeepOff: { entity: 'number', name: 'Count of turning off buzzer through app' },
			appOpCountPowerOn: { entity: 'number', name: 'Count of powering on through app' },
			errLcd: { entity: 'string', name: 'Fault code displayed on LCD screen' },
			countinueMakeIceMax: { entity: 'number', name: 'Maximum count of consecutive ice making' },
			tmpMSet: {
				entity: 'number',
				name: 'Combined temperature zone settings (valid when the partition is removed)'
			},
			runState: {
				entity: 'diagnostic',
				name:
					'Operating status: 0: Normal (24 V output, 40 V output); 1: Charging suspended (or when there is no input) (24 V off, 40 V output); 2: Standby (24 V off, 40 V off)'
			},
			workFsmCount: {
				entity: 'number',
				name: 'Count of entering each state of state machine: USER_BEHAVIOR_FSM_MAX'
			},
			appOpCountPowerOff: { entity: 'number', name: 'Count of powering off through app' },
			appOpCountDntMakeIce: {
				entity: 'number',
				name: 'Count of ice making through app when ice making is disabled'
			},
			powerBatInCount: { entity: 'number', name: 'Count of battery pack in place' },
			icePercent: { entity: 'number', name: 'Ice making progress (%)' },
			errorCountBldc: { entity: 'number', name: 'Count of each type of fault in BLDC module: ERROR_MAX_BLDC' },
			beepEn: { entity: 'switch', name: '0: Buzzer disabled; 1: Buzzer enabled' },
			fanLvl: { entity: 'number', name: 'Fan level' },
			powerBatInTime: { entity: 'number', name: 'Duration of battery pack in place' },
			ambientTmp: { entity: 'number', name: 'Ambient temperature' },
			workModeCount: { entity: 'number', name: 'Count of entering each work mode; WORK_MODE_MAX' },
			warnInfo: {
				entity: 'number',
				name:
					'Warning: BIT0: Over-temperature; BIT1: Under-temperature; BIT2: Overload; BIT3: Charging error; BIT4: Fan error; BIT5: BLCD communication error'
			},
			errorCountBms: { entity: 'number', name: 'Count of each type of fault in BMS module: ERROR_MAX_PD' },
			powerPbLevel: { entity: 'level', name: 'Battery protection level 0: Low; 1: Medium; 2: High' },
			pwrPbEn: { entity: 'switch', name: 'Battery protection switch: 0: Disable; 1: Enable' },
			coolZoneSingleTime: { entity: 'number', name: 'Single temperature zone duration' },
			chgType: {
				entity: 'diagnostic',
				name:
					'Charger type //Charger type: 0: NULL; 1: XT150 charging; 2: Adapter charging (hardware detection); 3: Car charging (hardware detection); 4: Solar panel charging (hardware detection); 5: Car charging (software detection); 6: Solar panel charging (software detection); 7: Input source cannot be identified (0xff): the charging cable is connected, but it actually does not work due to charging being disabled.'
			},
			resvP: { entity: 'icon', name: 'Reserve 5 bytes' },
			chargeXt60Time: {
				entity: 'number',
				name: 'Duration of each type of charging power supply on XT60: POWER_TYPE_MAX'
			},
			chargeXt60Count: {
				entity: 'number',
				name: 'Count of each type of charging power supply on XT60: POWER_TYPE_MAX'
			},
			errorTimeBms: { entity: 'number', name: 'Duration of each type of fault in BMS module: ERROR_MAX_BMS' },
			makeIceCount: { entity: 'number', name: 'Total count of ice making' },
			threeWayState: { entity: 'string', name: 'Refrigerant flow direction flag bit' },
			tmpAver: {
				entity: 'number',
				name: 'Real-time temperature of single temperature zone, amplified 10 times'
			},
			sensor: {
				entity: 'diagnostic',
				name: 'Sensor status; refer to @ST_SENSOR for data explanation; bit 1: Error; bit 0: Normal'
			},
			flagTwoZone: { entity: 'string', name: 'Partition detection' },
			xt60InState: { entity: 'diagnostic', name: 'xt60 connection status 0: no input, 1: has input' },
			appOpTimeBlTime: { entity: 'number', name: 'Screen timeout set through app: BL_TIME_MAX' },
			tmpUnit: { entity: 'switch', name: '0: Celsius; 1: Fahrenheit' },
			tmpRSet: {
				entity: 'number',
				name: 'Right temperature zone setting value (works when partition is inserted)'
			},
			appOpCountWorkMode: { entity: 'number', name: 'Count of each work mode set through app: WORK_MODE_MAX' },
			iceAlert: { entity: 'diagnostic', name: 'Ice taking reminder: 0: Do not remind; 1: Remind' },
			carBatLow: {
				entity: 'diagnostic',
				name: 'Car charger battery protection reminder: 0: Do not remind; 1: Remind'
			},
			tmpR: {
				entity: 'level',
				name: 'Real-time temperature of the right temperature zone, amplified 10 times'
			},
			batPct: { entity: 'number', name: 'Battery level (%)' },
			errorTimePd: { entity: 'number', name: 'Duration of each type of fault in PD module: ERROR_MAX_PD' },
			iceTmTag: { entity: 'number', name: 'The ice making target time (used for app and LCD effect display)' },
			chargeWorkCount: { entity: 'number', name: 'Count of working while charging' },
			coolCoverTime: { entity: 'number', name: 'Duration of cooling zone being opened' },
			tmpL: {
				entity: 'level',
				name: 'Real-time temperature of the left temperature zone, amplified 10 times'
			},
			resvD: { entity: 'icon', name: 'Reserve 1 byte' },
			powerBatOutTime: { entity: 'number', name: 'Duration of battery pack not in place' },
			resvB: { entity: 'icon', name: 'Reserve 2 bytes' },
			chargeWorkTime: { entity: 'number', name: 'Duration of working while charging' },
			workFsmTime: {
				entity: 'number',
				name: 'Running duration of state machine under each state: USER_BEHAVIOR_FSM_MAX'
			},
			motorVol: { entity: 'number', name: 'Motor voltage' },
			appOpCountBlTime: {
				entity: 'number',
				name: 'Count of setting different screen timeout through app: BL_TIME_MAX'
			},
			workModeTime: { entity: 'number', name: 'Running duration of each work mode; WORK_MODE_MAX' },
			coolZoneSingleCount: { entity: 'number', name: 'Count of single temperature zone' },
			coolZoneDoubleTime: { entity: 'number', name: 'Duration of dual temperature zone' },
			tempAmbientTime: {
				entity: 'number',
				name: 'Length of time when ambient temperature falls in each interval: TEMP_AMBIENT_MAX'
			},
			err: { entity: 'nstring', name: 'Error code' },
			bmsInFlag: {
				entity: 'diagnostic',
				name: 'BMS in-place flag, detected through BMS->PD heartbeat packet: 0: Not in place; 1: In place'
			},
			tempCoolSetTime: {
				entity: 'number',
				name:
					'Length of time when the set temperature of the cooling zone falls in each interval: COOL_ZONE_MAX*TEMP_COOL_SET_MAX'
			},
			errorCountPd: { entity: 'number', name: 'Count of each fault in PD module: ERROR_MAX_PD' },
			buttonShort: { entity: 'number', name: 'Count of short pressings: USER_BEHAVIOR_BUTTON_MAX' },
			tmpLSet: {
				entity: 'number',
				name: 'Set temperature of the left temperature zone (valid when partition is inserted)'
			},
			motorSpeed: { entity: 'number', name: 'Motor speed' },
			blTime: { entity: 'level', name: 'Screen timeout (unit: sec)' },
			motorWat: { entity: 'number', name: 'Motor power w' },
			errCode: { entity: 'string', name: 'Error code' },
			countinueMakeIceAve: { entity: 'number', name: 'Average count of consecutive ice making actions' },
			appOpCountTempUnitC: { entity: 'number', name: 'Count of setting degrees in Celsius through app' },
			appOpCountTempUnitF: { entity: 'number', name: 'Count of setting degrees in Fahrenheit through app' },
			bldcDntIce: {
				entity: 'diagnostic',
				name: 'Ice making limit on compressor: 0: Ice making is allowed; 1: Ice making is not allowed'
			},
			appOpCountBeepOn: { entity: 'number', name: 'Count of enabling buzzer through app' },
			errPwr: { entity: 'string', name: 'POWER fault code' },
			iceMkMode: {
				entity: 'level',
				name:
					'Large/small ice cube status: 0: Small ice cube (in preparation); 1: Large ice cube (in preparation); 2: Small ice cube (ice making in progress; cannot be changed); 3: Large ice cube (ice making in progress)'
			}
		},
		bms_bmsStatus: {
			designCap: { entity: 'number', name: 'Design capacity (mAh)' },
			f32ShowSoc: { entity: 'number', name: 'Battery level SOC' },
			minMosTmp: { entity: 'number', name: 'Minimum MOS temperature' },
			vol: { entity: 'number', name: 'Voltage (mV)' },
			fullCap: { entity: 'number', name: 'Full capacity (mAh)' },
			remainCap: { entity: 'number', name: 'Remaining capacity (mAh)' },
			tmp: { entity: 'number', name: 'Temperature (℃)' },
			outWatts: { entity: 'number', name: 'Output power' },
			bmsFault: { entity: 'string', name: 'BMS permanent fault' },
			err: { entity: 'string', name: 'Global error code' },
			cycles: { entity: 'number', name: 'Number of cycles' },
			minCellVol: { entity: 'number', name: 'Minimum cell voltage' },
			maxCellVol: { entity: 'number', name: 'Maximum cell voltage' },
			maxMosTmp: { entity: 'number', name: 'Maximum MOS temperature' },
			type: { entity: 'diagnostic', name: 'BMS type: 1: Lithium battery; 2: Oil powered' },
			cellId: { entity: 'diagnostic', name: 'Cell material LI/LFP/LA' },
			inWatts: { entity: 'number', name: 'Input power' },
			bqStatReg: { entity: 'string', name: 'BQ hardware protection register' },
			openBmsIdx: { entity: 'diagnostic', name: 'Battery pack status: 0: Not enabled; 1: Enabled' },
			num: { entity: 'number', name: 'BMS number: 0-2' },
			soc: { entity: 'number', name: 'Battery level' },
			tagChgAmp: { entity: 'number', name: 'Target charging current' },
			ver: { entity: 'string', name: 'System version' },
			minCellTmp: { entity: 'number', name: 'Minimum cell temperature' },
			soh: { entity: 'string', name: 'Health status' },
			maxCellTmp: { entity: 'number', name: 'Maximum cell temperature' },
			remainTime: { entity: 'number', name: 'Time remaining' },
			amp: { entity: 'number', name: 'Current (mA)' }
		},
		bms_emsStatus: {
			closeOilEbSocMax: { entity: 'number', name: 'SOC for turning off Smart Generator' },
			bmsIsConnt: {
				entity: 'string',
				name: 'BMS online signal: BIT0: hardware online signal; BIT1: software online signal'
			},
			dsgCmd: { entity: 'diagnostic', name: 'Discharge command' },
			chgVol: { entity: 'number', name: 'Charging voltage' },
			openBmsIdx: { entity: 'string', name: 'BMS enable index: bit0: host (#1); bit1: #2; bit2: #3' },
			dsgRemain: { entity: 'number', name: 'Remaining discharging time (min)' },
			maxAvailNum: { entity: 'number', name: 'Maximum available quantity' },
			paraVolMax: { entity: 'number', name: 'Maximum voltage when battery packs work in parallel' },
			paraVolMin: { entity: 'number', name: 'Minimum voltage when battery packs work in parallel' },
			lcdSoc: { entity: 'number', name: 'SoC value displayed on LCD' },
			emsFlag: { entity: 'diagnostic', name: '0: sleep 1: normal' },
			fanLvl: { entity: 'number', name: 'Fan level' },
			chgRemain: { entity: 'number', name: 'Remaining charging time (min)' },
			chgCmd: { entity: 'diagnostic', name: 'Charge command' },
			openOilEbSocMin: { entity: 'number', name: 'SoC for turning on Smart Generator' },
			minDsgSoc: { entity: 'number', name: 'Minimum discharging SOC' },
			warnState: {
				entity: 'string',
				name: 'BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag'
			},
			upsFlag: { entity: 'string', name: 'UPS mode enable flag' },
			bmsModel: { entity: 'string', name: 'BMS model' },
			maxChgSoc: { entity: 'number', name: 'Maximum charging SOC' }
		}
	}
};

let dict = { glacier: {} };
let states = { glacier: {} };
const device = 'glacier';

for (let channel in base[device]) {
	for (let state in base[device][channel]) {
		const entity = base[device][channel][state]['entity'];

		if (!dict[device][channel]) {
			dict[device][channel] = {};
			dict[device][channel][state] = { entity: entity };
		} else {
			dict[device][channel][state] = { entity: entity };
		}

		const name = base[device][channel][state]['name'];

		if (!states[device][channel]) {
			states[device][channel] = {};
		}

		if (!states[device][channel][entity] && entity !== 'icon') {
			states[device][channel][entity] = {};
		}
		if (entity !== 'icon') {
			states[device][channel][entity][state] = {};

			switch (entity) {
				case 'number':
					states[device][channel][entity][state]['min'] = 0;
					states[device][channel][entity][state]['max'] = 60;
					states[device][channel][entity][state]['unit_of_measurement'] = 'V';
					states[device][channel][entity][state]['mult'] = 1;
					states[device][channel][entity][state]['entity_type'] = 'sensor';
					states[device][channel][entity][state]['device_class'] = 'voltage';
					states[device][channel][entity][state]['role'] = 'indicator';
					states[device][channel][entity][state]['name'] = name;
					states[device][channel][entity][state]['subrole'] = 'number';
					break;
				case 'level':
					states[device][channel][entity][state]['min'] = 0;
					states[device][channel][entity][state]['max'] = 800;
					states[device][channel][entity][state]['unit_of_measurement'] = 'W';
					states[device][channel][entity][state]['mult'] = 1;
					states[device][channel][entity][state]['step'] = 1;
					states[device][channel][entity][state]['entity_type'] = 'sensor';
					states[device][channel][entity][state]['device_class'] = 'power';
					states[device][channel][entity][state]['name'] = name;
					states[device][channel][entity][state]['role'] = 'value';
					states[device][channel][entity][state]['subrole'] = 'power';
					break;
				case 'diagnostic':
					states[device][channel][entity][state]['entity_type'] = 'text';
					states[device][channel][entity][state]['entity_category'] = 'diagnostic';
					states[device][channel][entity][state]['name'] = name;
					states[device][channel][entity][state]['role'] = 'info';
					states[device][channel][entity][state][state] = { 0: 'OK?' };
					break;
				case 'string':
					states[device][channel][entity][state]['entity_type'] = 'text';
					states[device][channel][entity][state]['entity_category'] = 'diagnostic';
					states[device][channel][entity][state]['name'] = name;
					states[device][channel][entity][state]['role'] = 'info';
					break;
				case 'switch':
					states[device][channel][entity][state]['entity_type'] = 'switch';
					states[device][channel][entity][state]['device_class'] = 'switch';
					states[device][channel][entity][state]['payload_off'] = 'off';
					states[device][channel][entity][state]['payload_on'] = 'on';
					states[device][channel][entity][state]['name'] = name;
					states[device][channel][entity][state]['role'] = 'switch';
					states[device][channel][entity][state][state] = { '0': 'off', '1': 'on' };
					break;
				default:
					break;
			}
		}
	}
}
console.log(dict);
console.log(states);
console.log(JSON.stringify(dict));
console.log();
console.log(JSON.stringify(states));
