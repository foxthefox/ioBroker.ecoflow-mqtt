const deviceStates = {
    pd: {
        switch: {
            idleMode: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Disable',
                payload_on: 'Enable',
                name: 'Screen timeout',
                role: 'switch',
                idleMode: {
                    '0': 'Disable',
                    '1': 'Enable'
                }
            },
            tempDisplay: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Display ambient temperature',
                payload_on: 'Display air outlet temperature',
                name: 'Temperature display',
                role: 'switch',
                tempDisplay: {
                    '0': 'Display ambient temperature',
                    '1': 'Display air outlet temperature'
                }
            },
            tempSys: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Celsius',
                payload_on: 'Fahrenheit',
                name: 'Unit of temperature',
                role: 'switch',
                tempSys: {
                    '0': 'Celsius',
                    '1': 'Fahrenheit'
                }
            },
            beepEn: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Disabled',
                payload_on: 'Enabled',
                name: 'Buzzer enabling status',
                role: 'switch',
                beepEn: {
                    '0': 'Disabled',
                    '1': 'Enabled'
                }
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
                role: 'value',
                name: 'Return air temperature in condensation zone'
            },
            mpptPwr: {
                min: 0,
                max: 400,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'PV input power'
            },
            batVolt: {
                min: 0,
                max: 65,
                unit_of_measurement: 'V',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery voltage'
            },
            busVol: {
                min: 0,
                max: 65,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage'
            },
            batSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SoC'
            },
            sacWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Device working duration'
            },
            condTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Condensation temperature'
            },
            batCurr: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Battery current'
            },
            setTempCel: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Set temperature in degrees Celsius'
            },
            pvPower: {
                min: 0,
                max: 400,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'PV charging power'
            },
            batPwrOut: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Battery output power'
            },
            acFreq: {
                min: 0,
                max: 60,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'AC input frequency'
            },
            mpptVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'PV voltage'
            },
            acCurrRms: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'RMS value of the AC input current'
            },
            batPowerSupplyTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of using battery provided with the air conditioner'
            },
            acPwrIn: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'AC input power'
            },
            tempNtc: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'NTC temperature'
            },
            envTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Ambient temperature'
            },
            sacIdleTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Device standby time'
            },
            acVoltRms: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'RMS value of the AC input voltage'
            },
            dp2PowerSupplyTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of using DELTA 2 as the power source'
            },
            coolEnv: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Air outlet temperature'
            },
            batChgRemain: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining battery charging time'
            },
            coolTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Air outlet temperature'
            },
            mpptCur: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'PV current'
            },
            busVolt: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage'
            },
            psdrPower: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Power supply power'
            },
            dpPowerSupplyTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of using DELTA Pro as the power source'
            },
            timeRemain: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining time in current mode'
            },
            sysPowerWatts: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'System power'
            },
            evapTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Evaporation temperature'
            },
            batDsgRemain: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining battery discharging time'
            },
            batPower: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Battery power'
            },
            motorOutTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Exhaust temperature'
            },
            airInTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Evaporation zone return air temperature'
            },
            setTempfah: {
                min: 0,
                max: 100,
                unit_of_measurement: '°F',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Set temperature in degrees Fahrenheit'
            },
            llcCurr: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'LLC output current'
            },
            dmPowerSupplyTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of using DELTA Max as the power source'
            }
        },
        level: {
            pdSubMode: {
                min: 0,
                max: 3,
                unit_of_measurement: 'mode',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'enum',
                select: ['Max', 'Sleep', 'Eco', 'Manual'],
                select_obj: {
                    Max: 0,
                    Sleep: 1,
                    Eco: 2,
                    Manual: 3
                },
                states: {
                    '0': 'Max',
                    '1': 'Sleep',
                    '2': 'Eco',
                    '3': 'Manual'
                },
                name: 'Set sub-mode (0: Max, 1: Sleep, 2: Eco, 3: Manual )',
                role: 'level',
                subrole: 'mode'
            },
            fanValue: {
                min: 0,
                max: 3,
                unit_of_measurement: 'mode',
                mult: 1,
                step: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                select: ['Low', 'Medium', 'High'],
                select_obj: {
                    Low: 0,
                    Medium: 1,
                    High: 2
                },
                states: {
                    '0': 'Low',
                    '1': 'Medium',
                    '2': 'High'
                },
                name: 'Wind speed in the current mode: 0: Low; 1: Medium; 2: High',
                role: 'level'
            },
            setTemp: {
                min: 16,
                max: 30,
                unit_of_measurement: '°C',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'temperature',
                name: 'Temperature set in current mode',
                role: 'level'
            },
            idleTime: {
                min: 0,
                max: 3600,
                unit_of_measurement: 's',
                mult: 1,
                step: 1,
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
                name: 'Screen timeout (sec)',
                role: 'level',
                subrole: 'timer'
            },
            mainMode: {
                min: 0,
                max: 2,
                unit_of_measurement: 'mode',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'enum',
                select: ['Cool', 'Heat', 'Fan'],
                select_obj: {
                    Cool: 0,
                    Heat: 1,
                    Fan: 2
                },
                states: {
                    '0': 'Cool',
                    '1': 'Heat',
                    '2': 'Fan'
                },
                name: 'Main mode: 0: Cool; 1: Heat; 2: Fan',
                role: 'level',
                subrole: 'mode'
            },
            timeSet: {
                min: 0,
                max: 65535,
                unit_of_measurement: 'min',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'duration',
                name: 'Time set for current mode',
                role: 'level',
                subrole: 'timer'
            },
            wteFthEn: {
                min: 0,
                max: 3,
                unit_of_measurement: 'mode',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'enum',
                select: ['Option 0', 'Option 1', 'Option 2'],
                select_obj: {
                    'Option 0': 0,
                    'Option 1': 1,
                    'Option 2': 2
                },
                states: {
                    '0': 'Option 0',
                    '1': 'Option 1',
                    '2': 'Option 2'
                },
                name:
                    'bit1 (main switch of automatic drainage function): 0: On; 1: Off bit0: (in Cool/Fan mode): 0: Manual drainage; 1: No drainage (in Heat mode): 0: Off; 1: Physical drainage (In Cool/Fan mode: 0: Turn on Manual drainage，1: Turn on No drainage, 2: Turn off Manual drainage, 3 Turn off No drainage In Heat Mode: 0: Turn off, 1: Turn on Manual drainage， 3: Turn off Manual drainage)',
                role: 'level',
                subrole: 'mode'
            },
            rgbState: {
                min: 0,
                max: 3,
                unit_of_measurement: '',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'brightness',
                select: ['Follow the screen', 'Always on', 'Always off'],
                select_obj: {
                    'Follow the screen': 0,
                    'Always on': 1,
                    'Always off': 2
                },
                states: {
                    '0': 'Follow the screen',
                    '1': 'Always on',
                    '2': 'Always off'
                },
                name: 'Light strip settings: 0: Follow the screen; 1: Always on; 2: Always off',
                role: 'level'
            },
            powerMode: {
                min: 0,
                max: 3,
                unit_of_measurement: 'mode',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'power',
                select: ['Startup', 'Standby', 'Shutdown'],
                select_obj: {
                    Startup: 1,
                    Standby: 2,
                    Shutdown: 3
                },
                states: {
                    '1': 'Startup',
                    '2': 'Standby',
                    '3': 'Shutdown'
                },
                name: 'Remote startup/shutdown (1: Startup; 2: Standby; 3: Shutdown)',
                role: 'level'
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
            deviceName: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Name',
                role: 'info'
            },
            pdTempSys: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Unit of temperature',
                role: 'info'
            },
            bmsPid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Product ID of BMS',
                role: 'info'
            },
            mpptSts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PV execution status',
                role: 'info'
            },
            bmsErr: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS error code',
                role: 'info'
            },
            powerSts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Power supply status',
                role: 'info'
            },
            pdErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Error code',
                role: 'info'
            },
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
        array: {
            sacWattRangeTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name:
                    'Length of time the device power falls in each interval (sec). The intervals include 101 W-200 W, 201 W-300 W, 301 W-400 W, 401 W-500 W, 501 W-600 W, and 601 W-700 W.',
                role: 'list'
            },
            envTempRangeCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name:
                    'Count of ambient temperature intervals; the range is 0-55 degrees Celsius; each interval covers 5 degrees; it is counted every time the button is pressed to power on.'
            }
        },
        diagnostic: {
            bmsBoundFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Upper and lower limits on main battery pack charging and discharging',
                role: 'info',
                bmsBoundFlag: {
                    '0': 'Normal charging and discharging',
                    '1': 'Upper limit on charging'
                }
            },
            runSts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Run status',
                role: 'info',
                runSts: {
                    '0': 'not run?',
                    '1': 'AC_IN run',
                    '2': 'PFC run',
                    '4': 'LLC run',
                    '8': 'MPPT run'
                }
            },
            rlySts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Relay status',
                role: 'info',
                rlySts: {
                    '0': 'OK?',
                    '1': 'soft start rly closed?',
                    '2': 'ac rly closed?'
                }
            },
            timeEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Timer enable status',
                role: 'info',
                timeEn: {
                    '0': 'Timer off',
                    '1': 'Timer on'
                }
            },
            setFanVal: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Fan speed',
                role: 'info',
                setFanVal: {
                    '0': 'Low',
                    '1': 'Medium',
                    '2': 'High'
                }
            },
            bmsUnderVoltage: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery undervoltage flag bit',
                role: 'info',
                bmsUnderVoltage: {
                    '0': 'Normal',
                    '1': 'Undervoltage'
                }
            },
            waterValue: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Water level',
                role: 'info',
                waterValue: {
                    '0': 'Level 1',
                    '1': 'Level 2',
                    '2': 'Full'
                }
            },
            mpptWork: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'MPPT operating status',
                role: 'info',
                mpptWork: {
                    '1': 'Car charging',
                    '2': 'Solar charging'
                }
            },
            refEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Cool/Heat enabling flag',
                role: 'info',
                refEn: {
                    '0': 'Cool/Heat mode cannot be set',
                    '1': 'Cool/Heat mode can be set'
                }
            },
            pdMainMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Set mode',
                role: 'info',
                pdMainMode: {
                    '0': 'Cool',
                    '1': 'Heat',
                    '2': 'Fan'
                }
            },
            powerSrc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Input source',
                role: 'info',
                powerSrc: {
                    '0': 'OK?',
                    '1': 'AC',
                    '2': 'MPPT',
                    '4': 'Battery main pack',
                    '8': 'Battery slave pack'
                }
            },
            subMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Set sub-mode ',
                role: 'info',
                subMode: {
                    '0': 'Max',
                    '1': 'Sleep',
                    '2': 'Eco',
                    '3': 'Manual'
                }
            },
            fanSts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Fan speed level',
                fanSts: {
                    '0': 'non-rotation',
                    '1': 'Level 1',
                    '2': 'Level 2',
                    '3': 'Level3',
                    '4': 'Level 4'
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
            }
        },
        icon: {
            pdResv: {
                name: 'Reserve'
            },
            resv: {
                name: 'Reserve'
            },
            reserved: {
                name: 'Reserve'
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
                role: 'value',
                name: 'AC input frequency'
            },
            batVolt: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery voltage'
            },
            acWattsRange0Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when AC power falls in interval 0 (101 W-200 W)'
            },
            mpptVolRange0Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when MPPT power supply voltage falls in interval 0 (11 V-20 V)'
            },
            batCurr: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Battery current'
            },
            acWattsRange4Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when AC power falls in interval 4 (501 W-600 W)'
            },
            fanSts: {
                min: 0,
                max: 4,
                unit_of_measurement: 'level',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Fan speed level: 0-4; 0 for non-rotation'
            },
            mpptVolRange3Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Length of time when MPPT power supply voltage falls in interval 3 (41 V-50 V)'
            },
            batPwrOut: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Battery output power'
            },
            mpptVolRange1Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when MPPT power supply voltage falls in interval 1 (21 V-30 V)'
            },
            acWattsRange1Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when AC power falls in interval 1 (201 W-300 W)'
            },
            acVoltRms: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'RMS value of the AC input voltage'
            },
            mpptWattsRange0Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when MPPT power supply falls in interval 0 (101 W-200 W)'
            },
            busVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage'
            },
            acPwrIn: {
                min: 0,
                max: 700,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'AC input power'
            },
            acWattsRange5Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when AC power falls in interval 5 (601 W-700 W)'
            },
            mpptCur: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'PV current'
            },
            mpptVolRange2Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when MPPT power supply voltage falls in interval 2 (31 V-40 V)'
            },
            mpptWattsRange1Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when MPPT power supply falls in interval 1 (201 W-300 W)'
            },
            acCurrRms: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'RMS value of the AC input current'
            },
            llcCurr: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'LLC output current'
            },
            busVolt: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage'
            },
            acWattsRange2Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when AC power falls in interval 2 (301 W-400 W)'
            },
            tempNtc: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'NTC temperature'
            },
            tempMax: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name:
                    'The highest temperature among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature'
            },
            tempMin: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name:
                    'The minimum temperature value among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature'
            },
            mpptVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'PV voltage'
            },
            mpptWattsRange2Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when MPPT power supply falls in interval 2 (301 W-400 W)'
            },
            mpptPwr: {
                min: 0,
                max: 400,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'PV input power'
            },
            mpptVolRange4Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when MPPT power supply voltage falls in interval 4 (51 V-60 V)'
            },
            acWattsRange3Time: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Length of time when AC power falls in interval 3 (401 W-500 W)'
            }
        },
        string: {
            mpptLockFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'MPPT lock flag',
                role: 'info'
            },
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Fault error',
                role: 'info'
            },
            errLock: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Error lock',
                role: 'info'
            },
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
            },
            busCurr: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'busCurr'
            }
        },
        diagnostic: {
            runSts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Run status',
                role: 'info',
                runSts: {
                    '0': 'not run?',
                    '1': 'AC_IN run?',
                    '2': 'PFC run?',
                    '4': 'LLC run?',
                    '8': 'MPPT run?'
                }
            },
            mpptWork: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'MPPT operating status',
                role: 'info',
                mpptWork: {
                    '1': 'Car charging',
                    '2': 'Solar charging'
                }
            },
            rlySts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Relay status',
                role: 'info',
                rlySts: {
                    '0': 'Open?',
                    '1': 'soft start rly closed?',
                    '2': 'ac rly closed?'
                }
            }
        },
        icon: {
            powerResv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Reserve'
            },
            resv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Reserve'
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
                role: 'value',
                name: 'Motor operating power'
            },
            motorFsmState: {
                min: 0,
                max: 15,
                unit_of_measurement: 'state',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Current state of main state machine'
            },
            windTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in fan mode'
            },
            vBus: {
                min: 0,
                max: 13,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage feedback'
            },
            mosTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'MOS tube temperature feedback',
                subrole: 'temperature'
            },
            frontFanWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration of front fan'
            },
            compressorWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration of compressor'
            },
            coolSleepTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in the Sleep mode of Cool mode'
            },
            setCondFanRpm: {
                min: 0,
                max: 1500,
                unit_of_measurement: 'rpm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Setpoint condensing fan speed'
            },
            setEvapFanRpm: {
                min: 0,
                max: 1300,
                unit_of_measurement: 'rpm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Setpoint evaporative fan speed'
            },
            drainageTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of outward drainage'
            },
            hotNormalTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in Normal mode of the Heat mode'
            },
            hotSleepTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in the Sleep mode of Heat mode'
            },
            evapFanRpm: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'rpm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Evaporative fan speed feedback'
            },
            fourWayWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration of four-way valve'
            },
            mtrLogicErr: {
                min: 0,
                max: 15,
                unit_of_measurement: 'state',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Current state of the service state machine'
            },
            coolMaxTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in the Max mode of Cool mode'
            },
            setWaterRpm: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'rpm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Water pump speed settings'
            },
            hotEcoTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in the ECO mode of the Heat mode'
            },
            hotMaxTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in the Max mode of Heat mode'
            },
            backFanWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration of rear fan'
            },
            condeFanRpm: {
                min: 0,
                max: 1800,
                unit_of_measurement: 'rpm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Condensing fan speed feedback'
            },
            setCompressorRpm: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'rpm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Compressor speed settings'
            },
            waterPumpWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration of water pump'
            },
            coolEcoTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in the ECO mode of Cool mode'
            },
            coolNormalTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration in the Normal mode of Cool mode'
            }
        },
        diagnostic: {
            threeWayState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Three-way valve status',
                role: 'info',
                threeWayState: {
                    '0': 'OK?'
                }
            },
            waterValue: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Water level',
                role: 'info',
                waterValue: {
                    '0': 'Level 1',
                    '1': 'Level 2',
                    '2': 'Full'
                }
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
            focId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'foc id',
                role: 'info'
            },
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
        icon: {
            motorResv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Reserve'
            },
            resv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Reserve'
            }
        }
    },
    bmsMaster: {
        number: {
            bmsDisplayTime: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Time displayed in BMS'
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
            bmsSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SoC'
            },
            remainCap: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Remaining capacity',
                role: 'value'
            },
            bmsCur: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'BMS current'
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
            bmsReqVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'BMS request voltage'
            },
            bmsDsgTime: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'BMS discharging time'
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
            bmsVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'BMS voltage'
            },
            bmsReqCur: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'BMS request current'
            },
            bmsChgTime: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'BMS charging duration'
            },
            bmsMinDsgSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'UPS minimum discharge SoC'
            },
            bmsMaxChgSoc: {
                min: 60,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'UPS maximum charging SOC'
            },
            maxMosTmp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Maximum MOS temperature'
            },
            maxCellTmp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Maximum cell temperature'
            },
            outWatts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Output power'
            },
            minCellTmp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Minimum cell temperature'
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
            tmp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Temperature'
            },
            inWatts: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Input power'
            },
            designCap: {
                min: 0,
                max: 40000,
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
            minMosTmp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Minimum MOS temperature'
            },
            maxVolDiff: {
                min: 0,
                max: 500,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Maximum cell voltage difference',
                role: 'value'
            },
            fullCap: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Full capacity',
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
            cycles: {
                min: 0,
                max: 6000,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'Number of cycles',
                role: 'value'
            }
        },
        string: {
            bmsBatErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS error code',
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
            },
            usbUseCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Count of using USB'
            },
            typecUseCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Count of using AC'
            },
            bmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS permanent fault'
            },
            bqStatReg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BQ hardware protection register',
                role: 'info'
            },
            soh: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Health status'
            },
            num: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS number'
            },
            ver: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'System version',
                role: 'info'
            },
            openBmsIdx: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Battery pack enable state'
            },
            err: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Global error code',
                role: 'info'
            }
        },
        array: {
            chgWattRangeTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Length of time (sec) when the charging power falls in each of the four intervals',
                role: 'list'
            },
            dsgWattRangeTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Length of time (sec) when the discharging power falls in each of the four intervals',
                role: 'list'
            },
            usbWattRangeTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Length of time (sec) when the usb power falls in each of the four intervals',
                role: 'list'
            },
            typecWattRangeTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Length of time (sec) when the AC power falls in each of the four intervals',
                role: 'list'
            },
            cellTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Cell temperature'
            },
            cellVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Cell voltage'
            }
        },
        diagnostic: {
            bmsType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bmsType',
                role: 'info',
                bmsType: {
                    '0': 'master',
                    '1': 'slave'
                }
            },
            bmsChgDsgSts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms Charge Discharge Status',
                role: 'info',
                bmsChgDsgSts: {
                    '0': 'idle',
                    '1': 'chg',
                    '2': 'dsg'
                }
            },
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
            type: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS type',
                type: {
                    '1': 'Lithium battery',
                    '2': 'Oil-powered'
                }
            },
            balanceState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Balance State',
                balanceState: {
                    '0': '0=OK?',
                    '1': '1?',
                    '2': '2?'
                }
            },
            mosState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'MOS state',
                mosState: {
                    '0': '0?',
                    '1': '1?',
                    '2': '2?',
                    '3': '3?'
                }
            }
        },
        icon: {
            bmsResv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Reserve'
            },
            resv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Reserve'
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
    wave: {
        pd: {
            idleMode: {
                entity: 'switch'
            },
            tempDisplay: {
                entity: 'switch'
            },
            tempSys: {
                entity: 'switch'
            },
            beepEn: {
                entity: 'switch'
            },
            heatEnv: {
                entity: 'number'
            },
            mpptPwr: {
                entity: 'number'
            },
            batVolt: {
                entity: 'number'
            },
            busVol: {
                entity: 'number'
            },
            batSoc: {
                entity: 'number'
            },
            sacWorkTime: {
                entity: 'number'
            },
            condTemp: {
                entity: 'number'
            },
            batCurr: {
                entity: 'number'
            },
            setTempCel: {
                entity: 'number'
            },
            pvPower: {
                entity: 'number'
            },
            batPwrOut: {
                entity: 'number'
            },
            acFreq: {
                entity: 'number'
            },
            mpptVol: {
                entity: 'number'
            },
            acCurrRms: {
                entity: 'number'
            },
            batPowerSupplyTime: {
                entity: 'number'
            },
            acPwrIn: {
                entity: 'number'
            },
            tempNtc: {
                entity: 'number'
            },
            envTemp: {
                entity: 'number'
            },
            sacIdleTime: {
                entity: 'number'
            },
            acVoltRms: {
                entity: 'number'
            },
            dp2PowerSupplyTime: {
                entity: 'number'
            },
            coolEnv: {
                entity: 'number'
            },
            batChgRemain: {
                entity: 'number'
            },
            coolTemp: {
                entity: 'number'
            },
            mpptCur: {
                entity: 'number'
            },
            busVolt: {
                entity: 'number'
            },
            psdrPower: {
                entity: 'number'
            },
            dpPowerSupplyTime: {
                entity: 'number'
            },
            timeRemain: {
                entity: 'number'
            },
            sysPowerWatts: {
                entity: 'number'
            },
            evapTemp: {
                entity: 'number'
            },
            batDsgRemain: {
                entity: 'number'
            },
            batPower: {
                entity: 'number'
            },
            motorOutTemp: {
                entity: 'number'
            },
            airInTemp: {
                entity: 'number'
            },
            setTempfah: {
                entity: 'number'
            },
            llcCurr: {
                entity: 'number'
            },
            dmPowerSupplyTime: {
                entity: 'number'
            },
            pdSubMode: {
                entity: 'level'
            },
            fanValue: {
                entity: 'level'
            },
            setTemp: {
                entity: 'level'
            },
            idleTime: {
                entity: 'level'
            },
            mainMode: {
                entity: 'level'
            },
            timeSet: {
                entity: 'level'
            },
            wteFthEn: {
                entity: 'level'
            },
            rgbState: {
                entity: 'level'
            },
            powerMode: {
                entity: 'level'
            },
            batChgStatus: {
                entity: 'string'
            },
            ver: {
                entity: 'string'
            },
            deviceName: {
                entity: 'string'
            },
            pdTempSys: {
                entity: 'string'
            },
            bmsPid: {
                entity: 'string'
            },
            sacWattRangeTime: {
                entity: 'array'
            },
            mpptSts: {
                entity: 'string'
            },
            bmsErr: {
                entity: 'string'
            },
            powerSts: {
                entity: 'string'
            },
            pdErrCode: {
                entity: 'string'
            },
            lcdStatus: {
                entity: 'string'
            },
            midWindSpeedCnt: {
                entity: 'string'
            },
            lowWindSpeedCnt: {
                entity: 'string'
            },
            dmPowerSupplyCnt: {
                entity: 'string'
            },
            CompressorTempCnt: {
                entity: 'string'
            },
            envTempRangeCnt: {
                entity: 'array'
            },
            dp2PowerSupplyCnt: {
                entity: 'string'
            },
            hotSleepCnt: {
                entity: 'string'
            },
            hotNormalCnt: {
                entity: 'string'
            },
            coolMaxCnt: {
                entity: 'string'
            },
            frontInTempErrCnt: {
                entity: 'string'
            },
            coolNormalCnt: {
                entity: 'string'
            },
            powerOffCounts: {
                entity: 'string'
            },
            errPowerCommCnt: {
                entity: 'string'
            },
            backPipeTempErrCnt: {
                entity: 'string'
            },
            dpPowerSupplyCnt: {
                entity: 'string'
            },
            powerOnCounts: {
                entity: 'string'
            },
            hotEcoCnt: {
                entity: 'string'
            },
            errAllCnt: {
                entity: 'string'
            },
            frontPipeTempErrCnt: {
                entity: 'string'
            },
            highWindSpeedCnt: {
                entity: 'string'
            },
            errMotorCommCnt: {
                entity: 'string'
            },
            hotMaxCnt: {
                entity: 'string'
            },
            batPowerSupplyCnt: {
                entity: 'string'
            },
            errWifiCommCnt: {
                entity: 'string'
            },
            windCnt: {
                entity: 'string'
            },
            frontOutTempErrCnt: {
                entity: 'string'
            },
            coolSleepCnt: {
                entity: 'string'
            },
            frontBarTempErrCnt: {
                entity: 'string'
            },
            psdrCnt: {
                entity: 'string'
            },
            coolEcoCnt: {
                entity: 'string'
            },
            bmsBoundFlag: {
                entity: 'diagnostic'
            },
            runSts: {
                entity: 'diagnostic'
            },
            rlySts: {
                entity: 'diagnostic'
            },
            timeEn: {
                entity: 'diagnostic'
            },
            setFanVal: {
                entity: 'diagnostic'
            },
            bmsUnderVoltage: {
                entity: 'diagnostic'
            },
            waterValue: {
                entity: 'diagnostic'
            },
            mpptWork: {
                entity: 'diagnostic'
            },
            refEn: {
                entity: 'diagnostic'
            },
            pdMainMode: {
                entity: 'diagnostic'
            },
            powerSrc: {
                entity: 'diagnostic'
            },
            subMode: {
                entity: 'diagnostic'
            },
            fanSts: {
                entity: 'diagnostic'
            },
            errCode: {
                entity: 'diagnostic'
            },
            pdResv: {
                entity: 'icon'
            },
            resv: {
                entity: 'icon'
            },
            reserved: {
                entity: 'icon'
            }
        },
        power: {
            acFreq: {
                entity: 'number'
            },
            batVolt: {
                entity: 'number'
            },
            acWattsRange0Time: {
                entity: 'number'
            },
            mpptVolRange0Time: {
                entity: 'number'
            },
            batCurr: {
                entity: 'number'
            },
            acWattsRange4Time: {
                entity: 'number'
            },
            fanSts: {
                entity: 'number'
            },
            mpptVolRange3Time: {
                entity: 'number'
            },
            batPwrOut: {
                entity: 'number'
            },
            mpptVolRange1Time: {
                entity: 'number'
            },
            acWattsRange1Time: {
                entity: 'number'
            },
            acVoltRms: {
                entity: 'number'
            },
            mpptWattsRange0Time: {
                entity: 'number'
            },
            busVol: {
                entity: 'number'
            },
            acPwrIn: {
                entity: 'number'
            },
            acWattsRange5Time: {
                entity: 'number'
            },
            mpptCur: {
                entity: 'number'
            },
            mpptVolRange2Time: {
                entity: 'number'
            },
            mpptWattsRange1Time: {
                entity: 'number'
            },
            acCurrRms: {
                entity: 'number'
            },
            llcCurr: {
                entity: 'number'
            },
            busVolt: {
                entity: 'number'
            },
            acWattsRange2Time: {
                entity: 'number'
            },
            tempNtc: {
                entity: 'number'
            },
            tempMax: {
                entity: 'number'
            },
            tempMin: {
                entity: 'number'
            },
            mpptVol: {
                entity: 'number'
            },
            mpptWattsRange2Time: {
                entity: 'number'
            },
            mpptPwr: {
                entity: 'number'
            },
            mpptVolRange4Time: {
                entity: 'number'
            },
            acWattsRange3Time: {
                entity: 'number'
            },
            mpptLockFlag: {
                entity: 'string'
            },
            errCode: {
                entity: 'string'
            },
            errLock: {
                entity: 'string'
            },
            mpptSts: {
                entity: 'string'
            },
            pfcOcpS: {
                entity: 'string'
            },
            acPowerSupplyCnt: {
                entity: 'string'
            },
            pvOcpHw: {
                entity: 'string'
            },
            carPowerSupplyCnt: {
                entity: 'string'
            },
            pvPowerSupplyCnt: {
                entity: 'string'
            },
            llcOcpInt: {
                entity: 'string'
            },
            psdrCnt: {
                entity: 'string'
            },
            runSts: {
                entity: 'diagnostic'
            },
            mpptWork: {
                entity: 'diagnostic'
            },
            rlySts: {
                entity: 'diagnostic'
            },
            powerResv: {
                entity: 'icon'
            },
            resv: {
                entity: 'icon'
            },
            busCurr: {
                entity: 'string'
            }
        },
        motor: {
            power: {
                entity: 'number'
            },
            motorFsmState: {
                entity: 'number'
            },
            windTime: {
                entity: 'number'
            },
            vBus: {
                entity: 'number'
            },
            mosTemp: {
                entity: 'number'
            },
            frontFanWorkTime: {
                entity: 'number'
            },
            compressorWorkTime: {
                entity: 'number'
            },
            coolSleepTime: {
                entity: 'number'
            },
            setCondFanRpm: {
                entity: 'number'
            },
            setEvapFanRpm: {
                entity: 'number'
            },
            drainageTime: {
                entity: 'number'
            },
            hotNormalTime: {
                entity: 'number'
            },
            hotSleepTime: {
                entity: 'number'
            },
            evapFanRpm: {
                entity: 'number'
            },
            fourWayWorkTime: {
                entity: 'number'
            },
            mtrLogicErr: {
                entity: 'number'
            },
            coolMaxTime: {
                entity: 'number'
            },
            setWaterRpm: {
                entity: 'number'
            },
            hotEcoTime: {
                entity: 'number'
            },
            hotMaxTime: {
                entity: 'number'
            },
            backFanWorkTime: {
                entity: 'number'
            },
            condeFanRpm: {
                entity: 'number'
            },
            setCompressorRpm: {
                entity: 'number'
            },
            waterPumpWorkTime: {
                entity: 'number'
            },
            coolEcoTime: {
                entity: 'number'
            },
            coolNormalTime: {
                entity: 'number'
            },
            threeWayState: {
                entity: 'diagnostic'
            },
            hpProtFlg: {
                entity: 'string'
            },
            serveFsmState: {
                entity: 'string'
            },
            ecoStopFlag: {
                entity: 'string'
            },
            setEleExpansStep: {
                entity: 'string'
            },
            errCode: {
                entity: 'string'
            },
            focId: {
                entity: 'string'
            },
            protFlag: {
                entity: 'string'
            },
            compressorRpm: {
                entity: 'string'
            },
            fourWayState: {
                entity: 'string'
            },
            commcAck: {
                entity: 'string'
            },
            serveCtrlErr: {
                entity: 'string'
            },
            v24: {
                entity: 'string'
            },
            fourWaySwitchCnt: {
                entity: 'string'
            },
            drainageCnt: {
                entity: 'string'
            },
            frontFanBlockCnt: {
                entity: 'string'
            },
            pMtrCnt: {
                entity: 'string'
            },
            backFanBlockCnt: {
                entity: 'string'
            },
            waterValue: {
                entity: 'diagnostic'
            },
            motorResv: {
                entity: 'icon'
            },
            resv: {
                entity: 'icon'
            }
        },
        bmsMaster: {
            bmsDisplayTime: {
                entity: 'number'
            },
            maxCellVol: {
                entity: 'number'
            },
            bmsSoc: {
                entity: 'number'
            },
            remainCap: {
                entity: 'number'
            },
            bmsCur: {
                entity: 'number'
            },
            maxCellTemp: {
                entity: 'number'
            },
            minCellVol: {
                entity: 'number'
            },
            bmsReqVol: {
                entity: 'number'
            },
            bmsDsgTime: {
                entity: 'number'
            },
            minCellTemp: {
                entity: 'number'
            },
            bmsVol: {
                entity: 'number'
            },
            bmsReqCur: {
                entity: 'number'
            },
            bmsChgTime: {
                entity: 'number'
            },
            bmsMinDsgSoc: {
                entity: 'number'
            },
            bmsMaxChgSoc: {
                entity: 'number'
            },
            bmsBatErrCode: {
                entity: 'string'
            },
            chgWattRangeTime: {
                entity: 'array'
            },
            bmsHwFlag: {
                entity: 'string'
            },
            bmsSwFlag: {
                entity: 'string'
            },
            sleepCnt: {
                entity: 'string'
            },
            xt150AccessCnt: {
                entity: 'string'
            },
            awakeCnt: {
                entity: 'string'
            },
            powerOnCnt: {
                entity: 'string'
            },
            powerOffCnt: {
                entity: 'string'
            },
            bmsType: {
                entity: 'diagnostic'
            },
            bmsChgDsgSts: {
                entity: 'diagnostic'
            },
            dsgWattRangeTime: {
                entity: 'array'
            },
            usbWattRangeTime: {
                entity: 'array'
            },
            typecWattRangeTime: {
                entity: 'array'
            },
            usbUseCnt: {
                entity: 'string'
            },
            typecUseCnt: {
                entity: 'string'
            },
            bmsResv: {
                entity: 'icon'
            },
            resv: {
                entity: 'icon'
            },
            cellTemp: {
                entity: 'array'
            },
            bmsFault: {
                entity: 'string'
            },
            bqStatReg: {
                entity: 'string'
            },
            cellVol: {
                entity: 'array'
            },
            maxMosTmp: {
                entity: 'number'
            },
            cellId: {
                entity: 'diagnostic'
            },
            maxCellTmp: {
                entity: 'number'
            },
            outWatts: {
                entity: 'number'
            },
            minCellTmp: {
                entity: 'number'
            },
            soh: {
                entity: 'string'
            },
            num: {
                entity: 'string'
            },
            soc: {
                entity: 'number'
            },
            ver: {
                entity: 'string'
            },
            remainTime: {
                entity: 'number'
            },
            amp: {
                entity: 'number'
            },
            type: {
                entity: 'diagnostic'
            },
            openBmsIdx: {
                entity: 'string'
            },
            tmp: {
                entity: 'number'
            },
            balanceState: {
                entity: 'diagnostic'
            },
            err: {
                entity: 'string'
            },
            inWatts: {
                entity: 'number'
            },
            designCap: {
                entity: 'number'
            },
            f32ShowSoc: {
                entity: 'number'
            },
            minMosTmp: {
                entity: 'number'
            },
            maxVolDiff: {
                entity: 'number'
            },
            mosState: {
                entity: 'diagnostic'
            },
            fullCap: {
                entity: 'number'
            },
            vol: {
                entity: 'number'
            },
            tagChgAmp: {
                entity: 'number'
            },
            cycles: {
                entity: 'number'
            }
        },
        action: {
            latestQuotas: {
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
    wave: {
        bmsMaster: {
            number: {
                remainCap: {
                    max: 40000
                }
            }
        }
    }
};
const deviceCmd = {
    wave: {
        pd: {
            mainMode: {
                valName: 'mainMode',
                moduleType: 1,
                operateType: 'mainMode',
                params: {
                    mainMode: 1
                }
            },
            pdSubMode: {
                valName: 'subMode',
                moduleType: 1,
                operateType: 'subMode',
                params: {
                    subMode: 3
                }
            },
            tempSys: {
                valName: 'mode',
                moduleType: 1,
                operateType: 'tempSys',
                params: {
                    mode: 1
                }
            },
            idleMode: {
                valName: 'idleMode',
                moduleType: 1,
                operateType: 'display',
                params: {
                    idleTime: 5,
                    idleMode: 1
                }
            },
            idleTime: {
                valName: 'idleTime',
                moduleType: 1,
                operateType: 'display',
                params: {
                    idleTime: 5,
                    idleMode: 1
                }
            },
            timeSet: {
                valName: 'timeSet',
                moduleType: 1,
                operateType: 'sacTiming',
                params: {
                    timeSet: 10,
                    timeEn: 1
                }
            },
            beepEn: {
                valName: 'en',
                moduleType: 1,
                operateType: 'beepEn',
                params: {
                    en: 1
                }
            },
            setTemp: {
                valName: 'setTemp',
                moduleType: 1,
                operateType: 'setTemp',
                params: {
                    setTemp: 27
                }
            },
            tempDisplay: {
                valName: 'tempDisplay',
                moduleType: 1,
                operateType: 'tempDisplay',
                params: {
                    tempDisplay: 0
                }
            },
            fanValue: {
                valName: 'fanValue',
                moduleType: 1,
                operateType: 'fanValue',
                params: {
                    fanValue: 1
                }
            },
            wteFthEn: {
                valName: 'wteFthEn',
                moduleType: 1,
                operateType: 'wteFthEn',
                params: {
                    wteFthEn: 3
                }
            },
            powerMode: {
                valName: 'powerMode',
                moduleType: 1,
                operateType: 'powerMode',
                params: {
                    powerMode: 2
                }
            },
            rgbState: {
                valName: 'rgbState',
                moduleType: 1,
                operateType: 'rgbState',
                params: {
                    rgbState: 2
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
