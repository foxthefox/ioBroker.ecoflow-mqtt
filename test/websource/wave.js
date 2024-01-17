const { lstat } = require('fs');

const base = {
	wave: {
		pd: {
			idleMode: { entity: 'switch', name: 'Screen timeout: 0: Disable; 1: Enable' },
			midWindSpeedCnt: { entity: 'number', name: 'Count of setting medium wind speed' },
			pdSubMode: { entity: 'level', name: 'Set sub-mode (0: Max, 1: Sleep, 2: Eco, 3: Manual )' },
			lowWindSpeedCnt: { entity: 'number', name: 'Count of setting low wind speed' },
			batChgStatus: { entity: 'string', name: 'Battery charging/discharging status' },
			tempDisplay: {
				entity: 'switch',
				name: 'Temperature display: 0: Display ambient temperature; 1: Display air outlet temperature'
			},
			ver: { entity: 'string', name: 'Version of drainage logic' },
			heatEnv: { entity: 'number', name: 'Return air temperature in condensation zone, magnified 100 times' },
			dmPowerSupplyCnt: { entity: 'number', name: 'Count of using DELTA Max as the power source' },
			mpptPwr: { entity: 'number', name: 'PV input power' },
			CompressorTempCnt: {
				entity: 'number',
				name: 'Count of temperature sensor errors at the compressor discharge pipe'
			},
			batVolt: { entity: 'number', name: 'Battery voltage (unit: 0.01 V)' },
			envTempRangeCnt: {
				entity: 'number',
				name:
					'Count of ambient temperature intervals; the range is 0-55 degrees Celsius; each interval covers 5 degrees; it is counted every time the button is pressed to power on.'
			},
			fanValue: { entity: 'level', name: 'Wind speed in the current mode: 0: Low; 1: Medium; 2: High' },
			busVol: { entity: 'number', name: 'Bus voltage' },
			powerMode: { entity: 'diagnostic', name: 'Remotely power on/off: 1: Power on; 2: Power off,' },
			batSoc: { entity: 'number', name: 'Battery SoC (0-100)' },
			deviceName: { entity: 'string', name: 'Name' },
			tempSys: { entity: 'switch', name: 'Unit of temperature: 0: Celsius; 1: Fahrenheit' },
			sacWorkTime: { entity: 'number', name: 'Device working duration' },
			pdTempSys: { entity: 'string', name: 'Unit of temperature' },
			bmsBoundFlag: {
				entity: 'diagnostic',
				name:
					'Upper and lower limits on main battery pack charging and discharging: 0: Normal charging and discharging; 1: Upper limit on charging'
			},
			condTemp: { entity: 'number', name: 'Condensation temperature, magnified 100 times' },
			beepEn: { entity: 'switch', name: 'Buzzer enabling status: 0: Disabled; 1: Enabled' },
			runSts: { entity: 'diagnostic', name: 'bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run' },
			batCurr: { entity: 'number', name: 'Battery current (mA)' },
			dp2PowerSupplyCnt: { entity: 'number', name: 'Count of using DELTA 2 as the power source' },
			rlySts: { entity: 'diagnostic', name: 'bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open' },
			setTempCel: { entity: 'number', name: 'Set temperature in degrees Celsius' },
			pvPower: { entity: 'number', name: 'PV charging power' },
			hotSleepCnt: { entity: 'number', name: 'Count of setting the Sleep mode in Heat mode' },
			timeEn: { entity: 'diagnostic', name: '0: Timer off; 1: Timer on' },
			batPwrOut: { entity: 'number', name: 'Battery output power (W)' },
			bmsPid: { entity: 'string', name: 'Product ID of BMS' },
			acFreq: { entity: 'number', name: 'AC input frequency' },
			mpptVol: { entity: 'number', name: 'PV voltage (unit: 0.01 V)' },
			acCurrRms: { entity: 'number', name: 'RMS value of the AC input current (mA)' },
			setFanVal: { entity: 'diagnostic', name: 'Fan speed ?(0: Low; 1: Medium; 2: High)' },
			batPowerSupplyTime: {
				entity: 'number',
				name: 'Duration of using battery provided with the air conditioner (min)'
			},
			hotNormalCnt: { entity: 'number', name: 'Count of setting the Normal mode in Heat mode' },
			acPwrIn: { entity: 'number', name: 'AC input power (W)' },
			coolMaxCnt: { entity: 'number', name: 'Count of setting the Max mode in Cool mode' },
			frontInTempErrCnt: {
				entity: 'number',
				name: 'Count of temperature sensor errors at the front air inlet'
			},
			bmsUnderVoltage: {
				entity: 'diagnostic',
				name: 'Battery undervoltage flag bit: 0: Normal; 1: Undervoltage'
			},
			tempNtc: { entity: 'number', name: 'NTC temperature (unit: 0.1°C)' },
			envTemp: { entity: 'number', name: 'Ambient temperature' },
			waterValue: { entity: 'diagnostic', name: 'Water level: 0: Level 1; 1: Level 2; 2: Full' },
			sacIdleTime: { entity: 'number', name: 'Device standby time' },
			acVoltRms: { entity: 'number', name: 'RMS value of the AC input voltage (unit: 0.1 V)' },
			dp2PowerSupplyTime: { entity: 'number', name: 'Duration of using DELTA 2 as the power source (min)' },
			coolNormalCnt: { entity: 'number', name: 'Count of setting the Normal mode in Cool mode' },
			coolEnv: { entity: 'number', name: 'Air outlet temperature, magnified 100 times' },
			setTemp: { entity: 'level', name: 'Temperature set in current mode' },
			batChgRemain: { entity: 'number', name: 'Remaining battery charging time' },
			coolTemp: { entity: 'number', name: 'Air outlet temperature' },
			powerOffCounts: { entity: 'number', name: 'Count of shutdown' },
			sacWattRangeTime: {
				entity: 'string',
				name:
					'Length of time the device power falls in each interval (sec). The intervals include 101 W-200 W, 201 W-300 W, 301 W-400 W, 401 W-500 W, 501 W-600 W, and 601 W-700 W.'
			},
			errPowerCommCnt: { entity: 'number', name: 'Count of power communication errors' },
			mpptCur: { entity: 'number', name: 'PV current (mA)' },
			backPipeTempErrCnt: {
				entity: 'number',
				name: 'Count of temperature sensor errors at the rear copper pipe'
			},
			mpptSts: { entity: 'string', name: 'PV execution status' },
			dpPowerSupplyCnt: { entity: 'number', name: 'Count of using DELTA Pro as the power source' },
			mpptWork: { entity: 'diagnostic', name: 'MPPT operating status; 1: Car charging; 2: Solar charging' },
			powerOnCounts: { entity: 'number', name: 'Count of startup' },
			idleTime: { entity: 'level', name: 'Screen timeout (sec)' },
			hotEcoCnt: { entity: 'number', name: 'Count of setting the ECO mode in Heat mode' },
			pdResv: { entity: 'icon', name: 'Reserved pd field: 32 bytes' },
			mainMode: { entity: 'level', name: 'Main mode: 0: Cool; 1: Heat; 2: Fan' },
			busVolt: { entity: 'number', name: 'Bus voltage' },
			bmsErr: { entity: 'string', name: 'BMS error code' },
			refEn: {
				entity: 'diagnostic',
				name: 'Cool/Heat enabling flag: 0: Cool/Heat mode cannot be set; 1: Cool/Heat mode can be set'
			},
			errAllCnt: { entity: 'number', name: 'Total count of errors' },
			pdMainMode: { entity: 'diagnostic', name: 'Set mode 0: Cool; 1: Heat; 2: Fan' },
			frontPipeTempErrCnt: {
				entity: 'number',
				name: 'Count of temperature sensor errors at the front copper pipe'
			},
			highWindSpeedCnt: { entity: 'number', name: 'Count of setting high wind speed' },
			psdrPower: { entity: 'number', name: 'Power supply power' },
			errMotorCommCnt: { entity: 'number', name: 'Count of motor communication errors' },
			timeSet: { entity: 'level', name: 'Time set for current mode (min)' },
			dpPowerSupplyTime: { entity: 'number', name: 'Duration of using DELTA Pro as the power source (min)' },
			timeRemain: { entity: 'number', name: 'Remaining time in current mode (min)' },
			wteFthEn: {
				entity: 'level',
				name:
					'bit1 (main switch of automatic drainage function): 0: On; 1: Off bit0: (in Cool/Fan mode): 0: Manual drainage; 1: No drainage (in Heat mode): 0: Off; 1: Physical drainage (In Cool/Fan mode: 0: Turn on Manual drainage，1: Turn on No drainage, 2: Turn off Manual drainage, 3 Turn off No drainage In Heat Mode: 0: Turn off, 1: Turn on Manual drainage， 3: Turn off Manual drainage)'
			},
			hotMaxCnt: { entity: 'number', name: 'Count of setting the Max mode in Heat mode' },
			powerSrc: {
				entity: 'diagnostic',
				name: 'Input source: bit0: AC; bit1: MPTT; bit2: Battery main pack; bit3: Battery slave pack'
			},
			batPowerSupplyCnt: {
				entity: 'number',
				name: 'Count of using battery provided with the air conditioner'
			},
			errWifiCommCnt: { entity: 'number', name: 'Count of Wi-Fi communication errors' },
			fanSts: { entity: 'number', name: 'Fan speed level: 0-4; 0 for non-rotation' },
			windCnt: { entity: 'number', name: 'Count of setting in Fan mode' },
			sysPowerWatts: { entity: 'number', name: 'System power' },
			rgbState: {
				entity: 'level',
				name: 'Light strip settings: 0: Follow the screen; 1: Always on; 2: Always off'
			},
			resv: { entity: 'icon', name: 'Reserved bytes: 31 bytes' },
			frontOutTempErrCnt: {
				entity: 'number',
				name: 'Count of temperature sensor errors at the front air outlet'
			},
			powerSts: { entity: 'string', name: 'Power supply status' },
			evapTemp: { entity: 'number', name: 'Evaporation temperature, magnified 100 times' },
			batDsgRemain: { entity: 'number', name: 'Remaining battery discharging time' },
			batPower: { entity: 'number', name: 'Battery power' },
			motorOutTemp: { entity: 'number', name: 'Exhaust temperature, magnified 100 times' },
			recv: { entity: 'icon', name: 'Reserved 15 bytes' },
			reserved: { entity: 'icon', name: 'Reserved field: 20 bytes' },
			pdErrCode: { entity: 'string', name: 'Error code' },
			coolSleepCnt: { entity: 'number', name: 'Count of setting the Sleep mode in Cool mode' },
			frontBarTempErrCnt: {
				entity: 'number',
				name: 'Count of temperature sensor errors at the front copper bar'
			},
			psdrCnt: { entity: 'number', name: 'Communication counter' },
			airInTemp: { entity: 'number', name: 'Evaporation zone return air temperature, magnified 100 times' },
			setTempfah: { entity: 'number', name: 'Set temperature in degrees Fahrenheit' },
			llcCurr: { entity: 'number', name: 'LLC output current' },
			errCode: { entity: 'string', name: 'Error code' },
			lcdStatus: { entity: 'string', name: 'Screen enabling bit' },
			coolEcoCnt: { entity: 'number', name: 'Count of setting the ECO mode in Cool mode' },
			dmPowerSupplyTime: { entity: 'number', name: 'Duration of using DELTA Max as the power source (min)' },
			subMode: { entity: 'diagnostic', name: 'Set sub-mode (0: Max, 1: Sleep, 2: Eco, 3: Manual )' }
		},
		power: {
			acFreq: { entity: 'number', name: 'AC input frequency' },
			batVolt: { entity: 'number', name: 'Battery voltage' },
			mpptLockFlag: { entity: 'string', name: 'MPPT lock flag' },
			acWattsRange0Time: {
				entity: 'number',
				name: 'Length of time when AC power falls in interval 0 (101 W-200 W), measured in seconds'
			},
			mpptVolRange0Time: {
				entity: 'number',
				name:
					'Length of time when MPPT power supply voltage falls in interval 0 (11 V-20 V), measured in seconds'
			},
			powerResv: { entity: 'icon', name: 'Reserved power field: 32 bytes' },
			batCurr: { entity: 'number', name: 'Battery current (mA)' },
			acWattsRange4Time: {
				entity: 'number',
				name: 'Length of time when AC power falls in interval 4 (501 W-600 W), measured in seconds'
			},
			errCode: { entity: 'string', name: 'Fault error' },
			runSts: { entity: 'diagnostic', name: 'bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run' },
			pfcOcpS: { entity: 'number', name: 'Count of PFC software overcurrent' },
			fanSts: { entity: 'number', name: 'Fan speed level: 0-4; 0 for non-rotation' },
			mpptVolRange3Time: {
				entity: 'number',
				name:
					'Length of time when MPPT power supply voltage falls in interval 3 (41 V-50 V), measured in seconds'
			},
			batPwrOut: { entity: 'number', name: 'Battery output power (W)' },
			mpptVolRange1Time: {
				entity: 'number',
				name:
					'Length of time when MPPT power supply voltage falls in interval 1 (21 V-30 V), measured in seconds'
			},
			mpptWork: { entity: 'diagnostic', name: 'MPPT operating status; 1: Car charging; 2: Solar charging' },
			resv: { entity: 'icon', name: 'Reserved bytes: 31 bytes' },
			acPowerSupplyCnt: { entity: 'number', name: 'Count of using AC power supply' },
			acWattsRange1Time: {
				entity: 'number',
				name: 'Length of time when AC power falls in interval 1 (201 W-300 W), measured in seconds'
			},
			acVoltRms: { entity: 'number', name: 'RMS value of the AC input voltage (unit: 0.1 V)' },
			mpptWattsRange0Time: {
				entity: 'number',
				name: 'Length of time when MPPT power supply falls in interval 0 (101 W-200 W), measured in seconds'
			},
			busVol: { entity: 'number', name: 'Bus voltage (unit: 0.1 V)' },
			acPwrIn: { entity: 'number', name: 'AC input power (W)' },
			pvOcpHw: { entity: 'number', name: 'Count of PV overcurrent' },
			acWattsRange5Time: {
				entity: 'number',
				name: 'Length of time when AC power falls in interval 5 (601 W-700 W), measured in seconds'
			},
			carPowerSupplyCnt: { entity: 'number', name: 'Count of car charging' },
			mpptCur: { entity: 'number', name: 'PV current (mA)' },
			mpptSts: { entity: 'number', name: 'PV execution status' },
			errLock: { entity: 'string', name: 'Error lock' },
			mpptVolRange2Time: {
				entity: 'number',
				name:
					'Length of time when MPPT power supply voltage falls in interval 2 (31 V-40 V), measured in seconds'
			},
			mpptWattsRange1Time: {
				entity: 'number',
				name: 'Length of time when MPPT power supply falls in interval 1 (201 W-300 W), measured in seconds'
			},
			acCurrRms: { entity: 'number', name: 'RMS value of the AC input current (mA)' },
			llcCurr: { entity: 'number', name: 'LLC output current' },
			busVolt: { entity: 'number', name: 'Bus voltage' },
			rlySts: { entity: 'diagnostic', name: 'bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open' },
			acWattsRange2Time: {
				entity: 'number',
				name: 'Length of time when AC power falls in interval 2 (301 W-400 W), measured in seconds'
			},
			tempNtc: { entity: 'number', name: 'NTC temperature (unit: 0.1°C)' },
			tempMax: {
				entity: 'number',
				name:
					'The highest temperature among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature'
			},
			tempMin: {
				entity: 'number',
				name:
					'The minimum temperature value among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature'
			},
			pvPowerSupplyCnt: { entity: 'number', name: 'Count of using PV power supply' },
			mpptVol: { entity: 'number', name: 'PV voltage (unit: 0.01 V)' },
			mpptWattsRange2Time: {
				entity: 'number',
				name: 'Length of time when MPPT power supply falls in interval 2 (301 W-400 W), measured in seconds'
			},
			llcOcpInt: { entity: 'number', name: 'Count of LLC overcurrent' },
			psdrCnt: { entity: 'number', name: 'Communication counter' },
			mpptPwr: { entity: 'number', name: 'PV input power (W)' },
			mpptVolRange4Time: {
				entity: 'number',
				name:
					'Length of time when MPPT power supply voltage falls in interval 4 (51 V-60 V), measured in seconds'
			},
			acWattsRange3Time: {
				entity: 'number',
				name: 'Length of time when AC power falls in interval 3 (401 W-500 W), measured in seconds'
			}
		},
		motor: {
			power: { entity: 'number', name: 'Motor operating power' },
			motorFsmState: { entity: 'number', name: 'Current state of main state machine' },
			windTime: { entity: 'number', name: 'Working duration in fan mode (sec)' },
			threeWayState: { entity: 'diagnostic', name: 'Three-way valve status' },
			vBus: { entity: 'number', name: 'Bus voltage feedback' },
			mosTemp: { entity: 'number', name: 'MOS tube temperature feedback' },
			hpProtFlg: { entity: 'string', name: 'High pressure protection flag bit' },
			motorResv: { entity: 'icon', name: 'Reserved motor field: 32 bytes' },
			frontFanWorkTime: { entity: 'number', name: 'Working duration of front fan (sec)' },
			compressorWorkTime: { entity: 'number', name: 'Working duration of compressor (sec)' },
			serveFsmState: { entity: 'string', name: 'Current state of the service state machine' },
			coolSleepTime: { entity: 'number', name: 'Working duration in the Sleep mode of Cool mode (sec)' },
			setCondFanRpm: { entity: 'number', name: 'Set condensing fan speed' },
			setEvapFanRpm: { entity: 'number', name: 'Set evaporative fan speed' },
			ecoStopFlag: { entity: 'string', name: 'Energy-saving shutdown protection flag bit' },
			fourWaySwitchCnt: { entity: 'number', name: 'Count of four-way valve switching' },
			waterValue: { entity: 'dianostic', name: 'Water level: 0: Level 1; 1: Level 2; 2: Full' },
			drainageTime: { entity: 'number', name: 'Duration of outward drainage (sec)' },
			hotNormalTime: { entity: 'number', name: 'Working duration in Normal mode of the Heat mode (sec)' },
			setEleExpansStep: { entity: 'string', name: 'Opening of electronic expansion valve' },
			hotSleepTime: { entity: 'number', name: 'Working duration in the Sleep mode of Heat mode (sec)' },
			drainageCnt: { entity: 'number', name: 'Count of outward drainage' },
			evapFanRpm: { entity: 'number', name: 'Evaporative fan speed feedback' },
			frontFanBlockCnt: { entity: 'number', name: 'Count of front fan blocking' },
			fourWayWorkTime: { entity: 'number', name: 'Working duration of four-way valve (sec)' },
			mtrLogicErr: { entity: 'number', name: 'Current state of the service state machine' },
			focId: { entity: 'string', name: 'foc id' },
			protFlag: { entity: 'string', name: 'Shutdown protection flag bit' },
			compressorRpm: { entity: 'string', name: 'Compressor speed feedback' },
			coolMaxTime: { entity: 'number', name: 'Working duration in the Max mode of Cool mode (sec)' },
			pMtrCnt: { entity: 'number', name: 'Motor communication counter' },
			fourWayState: { entity: 'string', name: 'Status of the four-way valve' },
			commcAck: { entity: 'string', name: 'Motor operating mode' },
			backFanBlockCnt: { entity: 'number', name: 'Count of rear fan blocking' },
			setWaterRpm: { entity: 'number', name: 'Water pump speed settings' },
			errCode: { entity: 'string', name: 'Error code' },
			hotEcoTime: { entity: 'number', name: 'Working duration in the ECO mode of the Heat mode (sec)' },
			hotMaxTime: { entity: 'number', name: 'Working duration in the Max mode of Heat mode (sec)' },
			backFanWorkTime: { entity: 'number', name: 'Working duration of rear fan (sec)' },
			condeFanRpm: { entity: 'number', name: 'Condensing fan speed feedback' },
			setCompressorRpm: { entity: 'number', name: 'Compressor speed settings' },
			resv: { entity: 'icon', name: 'Reserved 10 bytes' },
			waterPumpWorkTime: { entity: 'number', name: 'Working duration of water pump (sec)' },
			serveCtrlErr: { entity: 'string', name: 'Service shutdown error code' },
			coolEcoTime: { entity: 'number', name: 'Working duration in the ECO mode of Cool mode (sec)' },
			v24: { entity: 'string', name: '24 V voltage feedback' },
			coolNormalTime: { entity: 'number', name: 'Working duration in the Normal mode of Cool mode (sec)' }
		},
		bms: {
			bmsDisplayTime: { entity: 'number', name: 'Time displayed in BMS (min)' },
			maxCellVol: { entity: 'number', name: 'Maximum cell voltage' },
			bmsBatErrCode: { entity: 'string', name: 'BMS error code' },
			bmsSoc: { entity: 'number', name: 'Battery SoC' },
			remainCap: { entity: 'number', name: 'Remaining capacity' },
			bmsCur: { entity: 'number', name: 'BMS current (1 mA)' },
			chgWattRangeTime: {
				entity: 'string',
				name: 'Length of time (sec) when the charging power falls in each of the four intervals'
			},
			sleepCnt: { entity: 'number', name: 'Count of pressing the Sleep button' },
			xt150AccessCnt: { entity: 'number', name: 'Count of XT150 connections' },
			awakeCnt: { entity: 'number', name: 'Count of pressing button for wakeup' },
			maxCellTemp: { entity: 'number', name: 'Maximum cell temperature' },
			powerOnCnt: { entity: 'number', name: 'Count of pressing button for startup' },
			bmsType: { entity: 'diagnostic', name: '0:master,1:slave' },
			minCellVol: { entity: 'number', name: 'Minimum cell voltage' },
			bmsReqVol: { entity: 'number', name: 'BMS request voltage (unit: 1 mV)' },
			bmsDsgTime: { entity: 'number', name: 'BMS discharging time (min)' },
			bmsHwFlag: { entity: 'string', name: 'Hardware in place' },
			minCellTemp: { entity: 'number', name: 'Minimum cell temperature' },
			bmsSwFlag: { entity: 'string', name: 'Software in place' },
			resv: { entity: 'icon', name: 'Reserved bytes: 16 bytes' },
			bmsVol: { entity: 'number', name: 'BMS voltage (unit: 1mV)' },
			bmsReqCur: { entity: 'number', name: 'BMS request current (unit: 1 mA)' },
			bmsChgTime: { entity: 'number', name: 'BMS charging duration (min)' },
			powerOffCnt: { entity: 'number', name: 'Count of pressing button for shutdown' },
			bmsMinDsgSoc: { entity: 'number', name: 'UPS minimum discharge SoC' },
			bmsMaxChgSoc: { entity: 'number', name: 'UPS maximum charging SOC' },
			bmsChgDsgSts: { entity: 'diagnostic', name: '0:idle,1:chg 2:dsg' }
		}
	}
};

let dict = { wave: {} };
let states = { wave: {} };
const device = 'wave';

for (let channel in base['wave']) {
	for (let state in base['wave'][channel]) {
		const entity = base['wave'][channel][state]['entity'];

		if (!dict[device][channel]) {
			dict[device][channel] = {};
			dict[device][channel][state] = { entity: entity };
		} else {
			dict[device][channel][state] = { entity: entity };
		}

		const name = base['wave'][channel][state]['name'];

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
