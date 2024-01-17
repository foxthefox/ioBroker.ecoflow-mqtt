const allstat = {
	wave2: {
		pd: {
			switch: {
				idleMode: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Disable',
					payload_on: 'Enable',
					name: 'Screen timeout',
					role: 'switch',
					idleMode: { 0: 'Disable', 1: 'Enable' }
				},
				tempDisplay: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Display ambient temperature',
					payload_on: 'Display air outlet temperature',
					name: 'Temperature display',
					role: 'switch',
					tempDisplay: { 0: 'Display ambient temperature', 1: 'Display air outlet temperature' }
				},
				tempSys: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Celsius',
					payload_on: 'Fahrenheit',
					name: 'Unit of temperature',
					role: 'switch',
					tempSys: { 0: 'Celsius', 1: 'Fahrenheit' }
				},
				beepEn: {
					entity_type: 'switch',
					device_class: 'switch',
					payload_off: 'Disabled',
					payload_on: 'Enabled',
					name: 'Buzzer enabling status',
					role: 'switch',
					beepEn: { 0: 'Disabled', 1: 'Enabled' }
				}
			},
			number: {
				heatEnv: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Return air temperature in condensation zone',
					subrole: 'number'
				},

				mpptPwr: {
					min: 0,
					max: 400,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'PV input power',
					subrole: 'number'
				},

				batVolt: {
					min: 0,
					max: 65,
					unit_of_measurement: 'V',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Battery voltage',
					subrole: 'number'
				},

				busVol: {
					min: 0,
					max: 65,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Bus voltage',
					subrole: 'number'
				},
				batSoc: {
					min: 0,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'Battery SoC',
					subrole: 'number'
				},
				sacWorkTime: {
					min: 0,
					max: 1000000,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Device working duration',
					subrole: 'number'
				},
				condTemp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Condensation temperature',
					subrole: 'number'
				},
				batCurr: {
					min: 0,
					max: 10,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'Battery current',
					subrole: 'number'
				},

				setTempCel: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Set temperature in degrees Celsius',
					subrole: 'number'
				},
				pvPower: {
					min: 0,
					max: 400,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'PV charging power',
					subrole: 'number'
				},

				batPwrOut: {
					min: 0,
					max: 500,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Battery output power',
					subrole: 'number'
				},
				acFreq: {
					min: 0,
					max: 60,
					unit_of_measurement: 'Hz',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'frequency',
					role: 'indicator',
					name: 'AC input frequency',
					subrole: 'number'
				},
				mpptVol: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'PV voltage',
					subrole: 'number'
				},
				acCurrRms: {
					min: 0,
					max: 10,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'RMS value of the AC input current',
					subrole: 'number'
				},
				batPowerSupplyTime: {
					min: 0,
					max: 10000000,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of using battery provided with the air conditioner',
					subrole: 'number'
				},

				acPwrIn: {
					min: 0,
					max: 600,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'AC input power',
					subrole: 'number'
				},

				tempNtc: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'NTC temperature',
					subrole: 'number'
				},
				envTemp: {
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
				sacIdleTime: {
					min: 0,
					max: 1440,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Device standby time',
					subrole: 'number'
				},
				acVoltRms: {
					min: 0,
					max: 250,
					unit_of_measurement: 'V',
					mult: 0.1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'RMS value of the AC input voltage',
					subrole: 'number'
				},
				dp2PowerSupplyTime: {
					min: 0,
					max: 1000000,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of using DELTA 2 as the power source',
					subrole: 'number'
				},

				coolEnv: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Air outlet temperature',
					subrole: 'number'
				},
				batChgRemain: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Remaining battery charging time',
					subrole: 'number'
				},
				coolTemp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Air outlet temperature',
					subrole: 'number'
				},

				mpptCur: {
					min: 0,
					max: 15,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'PV current',
					subrole: 'number'
				},

				busVolt: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Bus voltage',
					subrole: 'number'
				},

				psdrPower: {
					min: 0,
					max: 600,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Power supply power',
					subrole: 'number'
				},

				dpPowerSupplyTime: {
					min: 0,
					max: 1000000,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of using DELTA Pro as the power source',
					subrole: 'number'
				},
				timeRemain: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Remaining time in current mode',
					subrole: 'number'
				},

				sysPowerWatts: {
					min: 0,
					max: 600,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'System power',
					subrole: 'number'
				},

				evapTemp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Evaporation temperature',
					subrole: 'number'
				},
				batDsgRemain: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Remaining battery discharging time',
					subrole: 'number'
				},
				batPower: {
					min: 0,
					max: 600,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Battery power',
					subrole: 'number'
				},
				motorOutTemp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Exhaust temperature',
					subrole: 'number'
				},

				airInTemp: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Evaporation zone return air temperature',
					subrole: 'number'
				},
				setTempfah: {
					min: 0,
					max: 100,
					unit_of_measurement: '°F',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'Set temperature in degrees Fahrenheit',
					subrole: 'number'
				},
				llcCurr: {
					min: 0,
					max: 10,
					unit_of_measurement: 'A',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'LLC output current',
					subrole: 'number'
				},

				dmPowerSupplyTime: {
					min: 0,
					max: 1000000,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of using DELTA Max as the power source',
					subrole: 'number'
				}
			},
			level: {
				pdSubMode: {
					min: 0,
					max: 3,
					unit_of_measurement: 'mode',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Set sub-mode (0: Max, 1: Sleep, 2: Eco, 3: Manual )',
					role: 'value',
					subrole: 'power'
				},
				fanValue: {
					min: 0,
					max: 3,
					unit_of_measurement: 'mode',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Wind speed in the current mode: 0: Low; 1: Medium; 2: High',
					role: 'value',
					subrole: 'power'
				},
				setTemp: {
					min: 16,
					max: 30,
					unit_of_measurement: '°C',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					name: 'Temperature set in current mode',
					role: 'value',
					subrole: 'temperature'
				},
				idleTime: {
					min: 0,
					max: 3600,
					unit_of_measurement: 's',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'time',
					name: 'Screen timeout (sec)',
					role: 'value',
					subrole: 'time'
				},
				mainMode: {
					min: 0,
					max: 2,
					unit_of_measurement: 'mode',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Main mode: 0: Cool; 1: Heat; 2: Fan',
					role: 'value',
					subrole: 'power'
				},
				timeSet: {
					min: 0,
					max: 65535,
					unit_of_measurement: 'min',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'time',
					name: 'Time set for current mode',
					role: 'value',
					subrole: 'time'
				},
				wteFthEn: {
					min: 0,
					max: 3,
					unit_of_measurement: 'mode',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name:
						'bit1 (main switch of automatic drainage function): 0: On; 1: Off bit0: (in Cool/Fan mode): 0: Manual drainage; 1: No drainage (in Heat mode): 0: Off; 1: Physical drainage (In Cool/Fan mode: 0: Turn on Manual drainage，1: Turn on No drainage, 2: Turn off Manual drainage, 3 Turn off No drainage In Heat Mode: 0: Turn off, 1: Turn on Manual drainage， 3: Turn off Manual drainage)',
					role: 'value',
					subrole: 'power'
				},
				rgbState: {
					min: 0,
					max: 3,
					unit_of_measurement: 'mode',
					mult: 1,
					step: 1,
					entity_type: 'sensor',
					device_class: 'power',
					name: 'Light strip settings: 0: Follow the screen; 1: Always on; 2: Always off',
					role: 'value',
					subrole: 'power'
				}
			},
			string: {
				batChgStatus: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Battery charging/discharging status',
					role: 'info'
				},
				ver: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Version of drainage logic',
					role: 'info'
				},
				deviceName: { entity_type: 'text', entity_category: 'diagnostic', name: 'Name', role: 'info' },
				pdTempSys: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Unit of temperature',
					role: 'info'
				},
				bmsPid: { entity_type: 'text', entity_category: 'diagnostic', name: 'Product ID of BMS', role: 'info' },
				sacWattRangeTime: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name:
						'Length of time the device power falls in each interval (sec). The intervals include 101 W-200 W, 201 W-300 W, 301 W-400 W, 401 W-500 W, 501 W-600 W, and 601 W-700 W.',
					role: 'info'
				},
				mpptSts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'PV execution status',
					role: 'info'
				},
				bmsErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'BMS error code', role: 'info' },
				powerSts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Power supply status',
					role: 'info'
				},
				pdErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'Error code', role: 'info' },

				lcdStatus: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Screen enabling bit',
					role: 'info'
				},
				midWindSpeedCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting medium wind speed'
				},
				lowWindSpeedCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting low wind speed'
				},
				dmPowerSupplyCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of using DELTA Max as the power source'
				},
				CompressorTempCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of temperature sensor errors at the compressor discharge pipe'
				},
				envTempRangeCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name:
						'Count of ambient temperature intervals; the range is 0-55 degrees Celsius; each interval covers 5 degrees; it is counted every time the button is pressed to power on.'
				},
				dp2PowerSupplyCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of using DELTA 2 as the power source'
				},
				hotSleepCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the Sleep mode in Heat mode'
				},
				hotNormalCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the Normal mode in Heat mode'
				},
				coolMaxCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the Max mode in Cool mode'
				},
				frontInTempErrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of temperature sensor errors at the front air inlet'
				},
				coolNormalCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the Normal mode in Cool mode'
				},
				powerOffCounts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of shutdown'
				},
				errPowerCommCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of power communication errors'
				},
				backPipeTempErrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of temperature sensor errors at the rear copper pipe'
				},
				dpPowerSupplyCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of using DELTA Pro as the power source'
				},
				powerOnCounts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of startup'
				},
				hotEcoCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the ECO mode in Heat mode'
				},
				errAllCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Total count of errors'
				},
				frontPipeTempErrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of temperature sensor errors at the front copper pipe'
				},
				highWindSpeedCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting high wind speed'
				},
				errMotorCommCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of motor communication errors'
				},
				hotMaxCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the Max mode in Heat mode'
				},
				batPowerSupplyCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of using battery provided with the air conditioner'
				},
				errWifiCommCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of Wi-Fi communication errors'
				},
				windCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting in Fan mode'
				},
				frontOutTempErrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of temperature sensor errors at the front air outlet'
				},
				coolSleepCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the Sleep mode in Cool mode'
				},
				frontBarTempErrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of temperature sensor errors at the front copper bar'
				},
				psdrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Communication counter'
				},
				coolEcoCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of setting the ECO mode in Cool mode'
				}
			},
			diagnostic: {
				powerMode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Remotely power on/off ',
					role: 'info',
					powerMode: { 1: 'Power on', 2: 'Power off' }
				},
				bmsBoundFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Upper and lower limits on main battery pack charging and discharging',
					role: 'info',
					bmsBoundFlag: { 0: 'Normal charging and discharging', 1: 'Upper limit on charging' }
				},
				runSts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run',
					role: 'info',
					runSts: { '0': 'OK?' }
				},
				rlySts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open',
					role: 'info',
					rlySts: { '0': 'OK?' }
				},
				timeEn: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Timer enable status',
					role: 'info',
					timeEn: { 0: 'Timer off', 1: 'Timer on' }
				},
				setFanVal: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Fan speed',
					role: 'info',
					setFanVal: { 0: 'Low', 1: 'Medium', 2: 'High' }
				},
				bmsUnderVoltage: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Battery undervoltage flag bit',
					role: 'info',
					bmsUnderVoltage: { 0: 'Normal', 1: 'Undervoltage' }
				},
				waterValue: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Water level',
					role: 'info',
					waterValue: { 0: 'Level 1', 1: 'Level 2', 2: 'Full' }
				},
				mpptWork: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'MPPT operating status',
					role: 'info',
					mpptWork: { 1: 'Car charging', 2: 'Solar charging' }
				},
				refEn: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Cool/Heat enabling flag',
					role: 'info',
					refEn: { 0: 'Cool/Heat mode cannot be set', 1: 'Cool/Heat mode can be set' }
				},
				pdMainMode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Set mode',
					role: 'info',
					pdMainMode: { 0: 'Cool', 1: 'Heat', 2: 'Fan' }
				},
				powerSrc: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Input source: bit0: AC; bit1: MPTT; bit2: Battery main pack; bit3: Battery slave pack',
					role: 'info',
					powerSrc: { '0': 'OK?' }
				},
				subMode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Set sub-mode ',
					role: 'info',
					subMode: { 0: 'Max', 1: 'Sleep', 2: 'Eco', 3: 'Manual' }
				},
				fanSts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Fan speed level',
					fanSts: { 0: 'non-rotation', 1: 'Level 1', 2: 'Level 2', 3: 'Level3', 4: 'Level 4' }
				},
				errCode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Error code',
					role: 'info',
					errCode: {}
				}
			}
		},
		power: {
			number: {
				acFreq: {
					min: 0,
					max: 60,
					unit_of_measurement: 'Hz',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'frequency',
					role: 'indicator',
					name: 'AC input frequency',
					subrole: 'number'
				},
				batVolt: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Battery voltage',
					subrole: 'number'
				},
				acWattsRange0Time: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when AC power falls in interval 0 (101 W-200 W)',
					subrole: 'number'
				},
				mpptVolRange0Time: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when MPPT power supply voltage falls in interval 0 (11 V-20 V)',
					subrole: 'number'
				},
				batCurr: {
					min: 0,
					max: 10,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'Battery current',
					subrole: 'number'
				},
				acWattsRange4Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when AC power falls in interval 4 (501 W-600 W)',
					subrole: 'number'
				},

				fanSts: {
					min: 0,
					max: 4,
					unit_of_measurement: 'level',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Fan speed level: 0-4; 0 for non-rotation',
					subrole: 'number'
				},
				mpptVolRange3Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Length of time when MPPT power supply voltage falls in interval 3 (41 V-50 V)',
					subrole: 'number'
				},
				batPwrOut: {
					min: 0,
					max: 600,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Battery output power',
					subrole: 'number'
				},
				mpptVolRange1Time: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when MPPT power supply voltage falls in interval 1 (21 V-30 V)',
					subrole: 'number'
				},

				acWattsRange1Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when AC power falls in interval 1 (201 W-300 W)',
					subrole: 'number'
				},
				acVoltRms: {
					min: 0,
					max: 250,
					unit_of_measurement: 'V',
					mult: 0.1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'RMS value of the AC input voltage',
					subrole: 'number'
				},
				mpptWattsRange0Time: {
					min: 0,
					max: 900000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when MPPT power supply falls in interval 0 (101 W-200 W)',
					subrole: 'number'
				},
				busVol: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 0.1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Bus voltage',
					subrole: 'number'
				},
				acPwrIn: {
					min: 0,
					max: 700,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'AC input power',
					subrole: 'number'
				},

				acWattsRange5Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when AC power falls in interval 5 (601 W-700 W)',
					subrole: 'number'
				},

				mpptCur: {
					min: 0,
					max: 15,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'PV current',
					subrole: 'number'
				},

				mpptVolRange2Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when MPPT power supply voltage falls in interval 2 (31 V-40 V)',
					subrole: 'number'
				},
				mpptWattsRange1Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when MPPT power supply falls in interval 1 (201 W-300 W)',
					subrole: 'number'
				},
				acCurrRms: {
					min: 0,
					max: 10,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'RMS value of the AC input current',
					subrole: 'number'
				},
				llcCurr: {
					min: 0,
					max: 15,
					unit_of_measurement: 'A',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'LLC output current',
					subrole: 'number'
				},
				busVolt: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Bus voltage',
					subrole: 'number'
				},
				acWattsRange2Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when AC power falls in interval 2 (301 W-400 W)',
					subrole: 'number'
				},
				tempNtc: {
					min: 0,
					max: 60,
					unit_of_measurement: '°C',
					mult: 0.1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'NTC temperature',
					subrole: 'number'
				},
				tempMax: {
					min: 0,
					max: 80,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name:
						'The highest temperature among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature',
					subrole: 'number'
				},
				tempMin: {
					min: 0,
					max: 80,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name:
						'The minimum temperature value among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature',
					subrole: 'number'
				},

				mpptVol: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'PV voltage',
					subrole: 'number'
				},
				mpptWattsRange2Time: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when MPPT power supply falls in interval 2 (301 W-400 W)',
					subrole: 'number'
				},

				mpptPwr: {
					min: 0,
					max: 400,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'PV input power',
					subrole: 'number'
				},
				mpptVolRange4Time: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when MPPT power supply voltage falls in interval 4 (51 V-60 V)',
					subrole: 'number'
				},
				acWattsRange3Time: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Length of time when AC power falls in interval 3 (401 W-500 W)',
					subrole: 'number'
				}
			},
			string: {
				mpptLockFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'MPPT lock flag',
					role: 'info'
				},
				errCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'Fault error', role: 'info' },
				errLock: { entity_type: 'text', entity_category: 'diagnostic', name: 'Error lock', role: 'info' },
				mpptSts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'PV execution status',
					role: 'info'
				},
				pfcOcpS: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of PFC software overcurrent'
				},
				acPowerSupplyCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of using AC power supply'
				},
				pvOcpHw: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of PV overcurrent'
				},
				carPowerSupplyCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of car charging'
				},
				pvPowerSupplyCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of using PV power supply'
				},
				llcOcpInt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of LLC overcurrent'
				},
				psdrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Communication counter'
				}
			},
			diagnostic: {
				runSts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run',
					role: 'info',
					runSts: { '0': 'OK?' }
				},
				mpptWork: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'MPPT operating status',
					role: 'info',
					mpptWork: { 1: 'Car charging', 2: 'Solar charging' }
				},
				rlySts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open',
					role: 'info',
					rlySts: { '0': 'OK?' }
				}
			}
		},
		motor: {
			number: {
				power: {
					min: 0,
					max: 500,
					unit_of_measurement: 'W',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'power',
					role: 'indicator',
					name: 'Motor operating power',
					subrole: 'number'
				},
				motorFsmState: {
					min: 0,
					max: 15,
					unit_of_measurement: 'state',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Current state of main state machine',
					subrole: 'number'
				},
				windTime: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in fan mode',
					subrole: 'number'
				},
				vBus: {
					min: 0,
					max: 13,
					unit_of_measurement: 'V',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Bus voltage feedback',
					subrole: 'number'
				},
				mosTemp: {
					min: 0,
					max: 80,
					unit_of_measurement: '°C',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'temperature',
					role: 'indicator',
					name: 'MOS tube temperature feedback',
					subrole: 'temperature'
				},
				frontFanWorkTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration of front fan',
					subrole: 'number'
				},
				compressorWorkTime: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration of compressor',
					subrole: 'number'
				},
				coolSleepTime: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in the Sleep mode of Cool mode',
					subrole: 'number'
				},
				setCondFanRpm: {
					min: 0,
					max: 4,
					unit_of_measurement: 'level',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Set condensing fan speed',
					subrole: 'number'
				},
				setEvapFanRpm: {
					min: 0,
					max: 5,
					unit_of_measurement: 'level',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Set evaporative fan speed',
					subrole: 'number'
				},

				drainageTime: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Duration of outward drainage',
					subrole: 'number'
				},
				hotNormalTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in Normal mode of the Heat mode',
					subrole: 'number'
				},
				hotSleepTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in the Sleep mode of Heat mode',
					subrole: 'number'
				},

				evapFanRpm: {
					min: 0,
					max: 2000,
					unit_of_measurement: 'rpm',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Evaporative fan speed feedback',
					subrole: 'number'
				},

				fourWayWorkTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration of four-way valve',
					subrole: 'number'
				},
				mtrLogicErr: {
					min: 0,
					max: 15,
					unit_of_measurement: 'state',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Current state of the service state machine',
					subrole: 'number'
				},
				coolMaxTime: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in the Max mode of Cool mode',
					subrole: 'number'
				},

				setWaterRpm: {
					min: 0,
					max: 1000,
					unit_of_measurement: 'rpm',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Water pump speed settings',
					subrole: 'number'
				},
				hotEcoTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in the ECO mode of the Heat mode',
					subrole: 'number'
				},
				hotMaxTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in the Max mode of Heat mode',
					subrole: 'number'
				},
				backFanWorkTime: {
					min: 0,
					max: 90000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration of rear fan',
					subrole: 'number'
				},
				condeFanRpm: {
					min: 0,
					max: 1000,
					unit_of_measurement: 'rpm',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Condensing fan speed feedback',
					subrole: 'number'
				},
				setCompressorRpm: {
					min: 0,
					max: 1000,
					unit_of_measurement: 'rpm',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'speed',
					role: 'indicator',
					name: 'Compressor speed settings',
					subrole: 'number'
				},
				waterPumpWorkTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration of water pump',
					subrole: 'number'
				},
				coolEcoTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in the ECO mode of Cool mode',
					subrole: 'number'
				},
				coolNormalTime: {
					min: 0,
					max: 9000000,
					unit_of_measurement: 'min',
					mult: 0.00027778,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Working duration in the Normal mode of Cool mode',
					subrole: 'number'
				}
			},
			diagnostic: {
				threeWayState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Three-way valve status',
					role: 'info',
					threeWayState: { '0': 'OK?' }
				}
			},
			string: {
				hpProtFlg: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'High pressure protection flag bit',
					role: 'info'
				},
				serveFsmState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Current state of the service state machine',
					role: 'info'
				},
				ecoStopFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Energy-saving shutdown protection flag bit',
					role: 'info'
				},
				setEleExpansStep: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Opening of electronic expansion valve',
					role: 'info'
				},
				errCode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Error code',
					role: 'info'
				},
				focId: { entity_type: 'text', entity_category: 'diagnostic', name: 'foc id', role: 'info' },
				protFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Shutdown protection flag bit',
					role: 'info'
				},
				compressorRpm: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Compressor speed feedback',
					role: 'info'
				},
				fourWayState: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Status of the four-way valve',
					role: 'info'
				},
				commcAck: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Motor operating mode',
					role: 'info'
				},
				serveCtrlErr: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Service shutdown error code',
					role: 'info'
				},
				v24: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: '24 V voltage feedback',
					role: 'info'
				},
				fourWaySwitchCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of four-way valve switching'
				},
				drainageCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of outward drainage'
				},
				frontFanBlockCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of front fan blocking'
				},
				pMtrCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Motor communication counter'
				},
				backFanBlockCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of rear fan blocking'
				}
			},
			dianostic: { waterValue: {} }
		},
		bmsMaster: {
			number: {
				bmsDisplayTime: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'Time displayed in BMS',
					subrole: 'number'
				},
				maxCellVol: {
					min: 0,
					max: 5,
					unit_of_measurement: 'V',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Maximum cell voltage',
					subrole: 'number'
				},
				bmsSoc: {
					min: 0,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'Battery SoC',
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
				bmsCur: {
					min: 0,
					max: 15,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'BMS current',
					subrole: 'number'
				},

				maxCellTemp: {
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

				minCellVol: {
					min: 0,
					max: 5,
					unit_of_measurement: 'V',
					mult: 0.01,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'Minimum cell voltage',
					subrole: 'number'
				},
				bmsReqVol: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'BMS request voltage',
					subrole: 'number'
				},
				bmsDsgTime: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'BMS discharging time',
					subrole: 'number'
				},
				minCellTemp: {
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
				bmsVol: {
					min: 0,
					max: 60,
					unit_of_measurement: 'V',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'voltage',
					role: 'indicator',
					name: 'BMS voltage',
					subrole: 'number'
				},
				bmsReqCur: {
					min: 0,
					max: 15,
					unit_of_measurement: 'A',
					mult: 0.001,
					entity_type: 'sensor',
					device_class: 'current',
					role: 'indicator',
					name: 'BMS request current',
					subrole: 'number'
				},
				bmsChgTime: {
					min: 0,
					max: 5999,
					unit_of_measurement: 'min',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'time',
					role: 'indicator',
					name: 'BMS charging duration',
					subrole: 'number'
				},

				bmsMinDsgSoc: {
					min: 0,
					max: 30,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'UPS minimum discharge SoC',
					subrole: 'number'
				},
				bmsMaxChgSoc: {
					min: 60,
					max: 100,
					unit_of_measurement: '%',
					mult: 1,
					entity_type: 'sensor',
					device_class: 'percentage',
					role: 'indicator',
					name: 'UPS maximum charging SOC',
					subrole: 'number'
				}
			},
			string: {
				bmsBatErrCode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'BMS error code',
					role: 'info'
				},
				chgWattRangeTime: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Length of time (sec) when the charging power falls in each of the four intervals',
					role: 'info'
				},
				bmsHwFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Hardware in place',
					role: 'info'
				},
				bmsSwFlag: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Software in place',
					role: 'info'
				},
				sleepCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of pressing the Sleep button'
				},
				xt150AccessCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of XT150 connections'
				},
				awakeCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of pressing button for wakeup'
				},
				powerOnCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of pressing button for startup'
				},
				powerOffCnt: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					role: 'info',
					name: 'Count of pressing button for shutdown'
				}
			},
			diagnostic: {
				bmsType: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'bmsType',
					role: 'info',
					bmsType: { 0: 'master', 1: 'slave' }
				},
				bmsChgDsgSts: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'bms Charge Discharge Status',
					role: 'info',
					bmsChgDsgSts: { 0: 'idle', 1: 'chg', 2: 'dsg' }
				}
			}
		}
	}
};

let states = require('../../lib/ecoflow_data.js').pstationStates;

const device = 'wave2';
let jdevice = allstat.wave2;

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
dict known: {"wave2":{"pd":{"errCode":{"entity":"diagnostic"}},"bmsMaster":{"maxCellVol":{"entity":"number"},"remainCap":{"entity":"number"},"maxCellTemp":{"entity":"number"},"minCellVol":{"entity":"number"},"minCellTemp":{"entity":"number"}}}}
*/
