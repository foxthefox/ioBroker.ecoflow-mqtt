const deviceStates = {
    pd: {
        number: {
            exhaustTmp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Exhaust pipe wall temperature'
            },
            batTime: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name:
                    'batTime; a negative value indicates a discharging time, and positive value indicates a charging time'
            },
            tempWater: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Water temperature of the ice making zone'
            },
            A12Val: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: '12 V auxiliary supply voltage'
            },
            motorCur: {
                min: 0,
                max: 60,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Motor Current'
            },
            tmpM: {
                min: -20,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Combined temperature zone temperature'
            },
            icePercent: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'Ice making progress'
            },
            powerBatInTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of battery pack in place'
            },
            ambientTmp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Ambient temperature'
            },
            coolZoneSingleTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Single temperature zone duration'
            },
            tmpAver: {
                min: -20,
                max: 60,
                unit_of_measurement: 'C',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Real-time temperature of single temperature zone'
            },
            batPct: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery level'
            },
            iceTmTag: {
                min: 0,
                max: 1440,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'The ice making target time (used for app and LCD effect display)'
            },
            coolCoverTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of cooling zone being opened'
            },
            powerBatOutTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of battery pack not in place'
            },
            chargeWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of working while charging'
            },
            motorVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Motor voltage'
            },
            coolZoneDoubleTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 0.0166667,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Duration of dual temperature zone'
            },
            motorSpeed: {
                min: 0,
                max: 3600,
                unit_of_measurement: 'rpm',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'speed',
                role: 'value',
                name: 'Motor speed'
            },
            motorWat: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Motor power'
            },
            iceTm: {
                min: 0,
                max: 1440,
                unit_of_measurement: 'min',
                mult: 1,
                step: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                name: 'Duration of the current ice making (for app and LCD effect display)',
                role: 'value'
            },
            tmpR: {
                min: -20,
                max: 60,
                unit_of_measurement: '°C',
                mult: 0.11,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Actual Right temperature zone value'
            },
            tmpL: {
                min: -20,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Actual temperature of the left temperature zone'
            }
        },
        array: {
            tempCoolTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name:
                    'Length of time when the actual temperature of the cooling zone falls in each interval: COOL_ ZONE_ MAX*TEMP_ COOL_ MAX'
            },
            appSensorAdv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Duration of sensor blocking: SENSOR_ADV_MAX'
            },
            errorTimePower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Duration of each type of fault in the POWER module: ERROR_MAX_POWER'
            },
            tempIceTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Length of time when temperature of the ice-making zone falls in each interval: TEMP_ICE_MAX'
            },
            networkTypeTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Duration of being networked: NETWORK_TYPE_MAX'
            },
            powerXt60Time: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Duration of each type of power supply on XT60: POWER_TYPE_MAX'
            },
            chargeXt60Time: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Duration of each type of charging power supply on XT60: POWER_TYPE_MAX'
            },
            errorTimeBms: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Duration of each type of fault in BMS module: ERROR_MAX_BMS'
            },
            appOpTimeBlTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Screen timeout set through app: BL_TIME_MAX'
            },
            errorTimePd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Duration of each type of fault in PD module: ERROR_MAX_PD'
            },
            workFsmTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Running duration of state machine under each state: USER_BEHAVIOR_FSM_MAX'
            },
            workModeTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Running duration of each work mode; WORK_MODE_MAX'
            },
            tempAmbientTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Length of time when ambient temperature falls in each interval: TEMP_AMBIENT_MAX'
            },
            tempCoolSetTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name:
                    'Length of time when the set temperature of the cooling zone falls in each interval: COOL_ZONE_MAX*TEMP_COOL_SET_MAX'
            },
            buttonLong: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of long presses: USER_BEHAVIOR_BUTTON_MAX'
            },
            networkTypeCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of being networked: NETWORK_TYPE_MAX'
            },
            powerXt60Count: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of each type of power supply on XT60: POWER_TYPE_MAX'
            },
            errorCountPower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of each type of fault in POWER module: ERROR_MAX_POWER'
            },
            workFsmCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of entering each state of state machine: USER_BEHAVIOR_FSM_MAX'
            },
            errorCountBldc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of each type of fault in BLDC module: ERROR_MAX_BLDC'
            },
            workModeCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of entering each work mode; WORK_MODE_MAX'
            },
            errorCountBms: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of each type of fault in BMS module: ERROR_MAX_PD'
            },
            chargeXt60Count: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of each type of charging power supply on XT60: POWER_TYPE_MAX'
            },
            appOpCountWorkMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of each work mode set through app: WORK_MODE_MAX'
            },
            appOpCountBlTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of setting different screen timeout through app: BL_TIME_MAX'
            },
            errorCountPd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of each fault in PD module: ERROR_MAX_PD'
            },
            buttonShort: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Count of short pressings: USER_BEHAVIOR_BUTTON_MAX'
            },
            errorTimeBldc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'array errors?'
            }
        },
        level: {
            tmpMSet: {
                min: -20,
                max: 50,
                unit_of_measurement: '°C',
                mult: 0.01,
                step: 1,
                entity_type: 'number',
                device_class: 'temperature',
                name: 'Set Temperature of the middle temperature zone',
                role: 'level'
            },
            tmpRSet: {
                min: -20,
                max: 50,
                unit_of_measurement: '°C',
                mult: 0.01,
                step: 1,
                entity_type: 'number',
                device_class: 'temperature',
                name: 'Set Temperature of the right temperature zone (valid when partition is inserted)',
                role: 'level'
            },
            tmpLSet: {
                min: -20,
                max: 50,
                unit_of_measurement: '°C',
                mult: 0.01,
                step: 1,
                entity_type: 'number',
                device_class: 'temperature',
                name: 'Set Temperature of the left temperature zone (valid when partition is inserted)',
                role: 'level'
            },
            powerPbLevel: {
                min: 0,
                max: 2,
                unit_of_measurement: 'level',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'enum',
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
                name: 'Battery protection level 0: Low; 1: Medium; 2: High',
                role: 'level',
                subrole: 'mode'
            },
            blTime: {
                min: 0,
                max: 3600,
                unit_of_measurement: 's',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'duration',
                select: ['Never', '10 sec', '30 sec', '1 min', '5 min', '30 min', '1 hr'],
                select_obj: {
                    Never: 0,
                    '10 sec': 10,
                    '30 sec': 30,
                    '1 min': 60,
                    '5 min': 300,
                    '30 min': 1800,
                    '1 hr': 3600
                },
                states: {
                    '0': 'Never',
                    '10': '10 sec',
                    '30': '30 sec',
                    '60': '1 min',
                    '300': '5 min',
                    '1800': '30 min',
                    '3600': '1 hr'
                },
                name: 'Screen timeout',
                role: 'level',
                subrole: 'timer'
            }
        },
        string: {
            errBms: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS fault code',
                role: 'info'
            },
            errPd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PD fault code',
                role: 'info'
            },
            errBldc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BLDC fault code',
                role: 'info'
            },
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
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Error code',
                role: 'info'
            },
            errPwr: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'POWER fault code',
                role: 'info'
            },
            coolZoneDoubleCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Count of dual temperature zones'
            },
            coolCoverCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Count of cooling zone openings'
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
            makeIceCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Total count of ice making'
            },
            chargeWorkCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Count of working while charging'
            },
            coolZoneSingleCount: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Count of single temperature zone'
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
            },
            err: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'PD error'
            },
            appOpCountMakeIce: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Count of ice making through app?'
            }
        },
        diagnostic: {
            iceMkMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Large/small ice cube status',
                iceMkMode: {
                    '0': 'Small ice cube (in preparation)',
                    '1': 'Large ice cube (in preparation)',
                    '2': 'Small ice cube (ice making in progress; cannot be changed)',
                    '3': 'Large ice cube (ice making in progress)'
                }
            },
            fsmState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Real-time running status ',
                role: 'info',
                fsmState: {
                    '0': 'Small ice cube (in preparation)?',
                    '1': 'Large ice cube (in preparation)?',
                    '2': 'Small ice cube (ice making in progress; cannot be changed)?',
                    '3': 'Large ice cube (ice making in progress)?',
                    '4': 'Detaching ice',
                    '5': 'Detaching completed'
                }
            },
            motorWait: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Waiting for compressor: ',
                role: 'info',
                motorWait: {
                    '0': 'No need to wait',
                    '1': 'Need to wait'
                }
            },
            pwrState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pwrState',
                role: 'info',
                pwrState: {
                    '0': 'Powered off',
                    '1': 'Powered on'
                }
            },
            bldcDntWork: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Compressor work limit ',
                role: 'info',
                bldcDntWork: {
                    '0': 'Allow to work',
                    '1': 'Do not allow to work'
                }
            },
            waterLine: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Ice making zone water level: 0-3 levels',
                role: 'info',
                waterLine: {
                    '0': 'OK?'
                }
            },
            flagAmbintReady: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Ambient temperature reliability',
                role: 'info',
                flagAmbintReady: {
                    '0': 'Unreliable',
                    '1': 'Reliable'
                }
            },
            batFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery pack in-place status ',
                role: 'info',
                batFlag: {
                    '0': 'Not in place',
                    '1': 'In place'
                }
            },
            xt150InState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'xt150InState',
                role: 'info',
                xt150InState: {
                    '0': 'no input',
                    '1': 'has input'
                }
            },
            doorStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Door status detection',
                role: 'info',
                doorStat: {
                    '0': 'Closed',
                    '1': 'Open'
                }
            },
            runState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Operating status',
                role: 'info',
                runState: {
                    '0': 'Normal (24 V output, 40 V output)',
                    '1': 'Charging suspended (or when there is no input) (24 V off, 40 V output)',
                    '2': 'Standby (24 V off, 40 V off)'
                }
            },
            chgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charger type //Charger type',
                role: 'info',
                chgType: {
                    '0': 'NULL',
                    '1': 'XT150 charging',
                    '2': 'Adapter charging (hardware detection)',
                    '3': 'Car charging (hardware detection)',
                    '4': 'Solar panel charging (hardware detection)',
                    '5': 'Car charging (software detection)',
                    '6': 'Solar panel charging (software detection)',
                    '7':
                        'Input source cannot be identified (0xff): the charging cable is connected, but it actually does not work due to charging being disabled'
                }
            },
            sensor: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Sensor status; refer to @ST_SENSOR for data explanation; bit 1: Error; bit 0: Normal',
                role: 'info',
                sensor: {
                    '0': 'Normal',
                    '2': 'Error'
                }
            },
            xt60InState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'xt60 connection status ',
                role: 'info',
                xt60InState: {
                    '0': 'no input',
                    '1': 'has input'
                }
            },
            iceAlert: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Ice taking reminder',
                role: 'info',
                iceAlert: {
                    '0': 'Do not remind',
                    '1': 'Remind'
                }
            },
            carBatLow: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Car charger battery protection reminder',
                role: 'info',
                carBatLow: {
                    '0': 'Do not remind',
                    '1': 'Remind'
                }
            },
            bmsInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS in-place flag, detected through BMS->PD heartbeat packet',
                role: 'info',
                bmsInFlag: {
                    '0': 'Not in place',
                    '1': 'In place'
                }
            },
            bldcDntIce: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Ice making limit on compressor',
                role: 'info',
                bldcDntIce: {
                    '0': 'Ice making is allowed',
                    '1': 'Ice making is not allowed'
                }
            },
            warnInfo: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Warning',
                warnInfo: {
                    '0': 'no warning?',
                    '1': 'overtemperature',
                    '2': 'Under-temperature',
                    '4': 'Overload',
                    '8': 'Charging error',
                    '16': 'Fan error',
                    '32': 'BLCD communication error'
                }
            },
            fanLvl: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Fan level',
                fanLvl: {
                    '0': 'non-rotation',
                    '1': 'Level 1',
                    '2': 'Level 2',
                    '3': 'Level3',
                    '4': 'Level 4',
                    '5': 'Level 5'
                }
            },
            deiceAct: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Deice Active?',
                deiceAct: {
                    '0': 'inactive',
                    '1': 'active'
                }
            }
        },
        switch: {
            iceMode: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Disable',
                payload_on: 'Enable',
                name: 'Ice Making',
                role: 'switch',
                iceMode: {
                    '0': 'Disable',
                    '1': 'Enable'
                }
            },
            iceShape: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'small cubes',
                payload_on: 'large cubes',
                name: 'Ice Shape',
                role: 'switch',
                iceShape: {
                    '0': 'small cubes',
                    '1': 'large cubes'
                }
            },
            iceDetach: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Disable',
                payload_on: 'Enable',
                name: 'Ice Detaching',
                role: 'switch',
                iceDetach: {
                    '0': 'Disable',
                    '1': 'Enable'
                }
            },
            coolMode: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Normal',
                payload_on: 'Eco',
                name: 'cool Mode',
                role: 'switch',
                coolMode: {
                    '0': 'Normal',
                    '1': 'Eco'
                }
            },
            sensorAdv: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Unblocked',
                payload_on: 'Blocked',
                name:
                    'Sensor detection blocking. Refer to @ST_SENSOR for data explanation. Bit: 1: Blocked; 0: Unblocked.',
                role: 'switch',
                sensorAdv: {
                    '0': 'Unblocked',
                    '1': 'Blocked'
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
            },
            pwrPbEn: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Disable',
                payload_on: 'Enable',
                name: 'Battery protection switch',
                role: 'switch',
                pwrPbEn: {
                    '0': 'Disable',
                    '1': 'Enable'
                }
            },
            tmpUnit: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Celsius',
                payload_on: 'Fahrenheit',
                name: 'Temperature Unit',
                role: 'switch',
                tmpUnit: {
                    '0': 'Celsius',
                    '1': 'Fahrenheit'
                }
            }
        },
        icon: {
            resvP: {
                name: 'Reserve 5 bytes'
            },
            resvD: {
                name: 'Reserve 1 byte'
            },
            resvB: {
                name: 'Reserve 2 bytes'
            }
        }
    },
    bmsMaster: {
        number: {
            designCap: {
                min: 0,
                max: 13800,
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
            fullCap: {
                min: 0,
                max: 13800,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Full capacity',
                role: 'value'
            },
            remainCap: {
                min: 0,
                max: 13800,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Remaining capacity',
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
            cycles: {
                min: 0,
                max: 6000,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'Number of cycles',
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
            }
        },
        string: {
            bmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS permanent fault'
            },
            num: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS number'
            },
            err: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Global error code',
                role: 'info'
            },
            bqStatReg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BQ hardware protection register',
                role: 'info'
            },
            ver: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'System version',
                role: 'info'
            },
            soh: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Health status'
            }
        },
        diagnostic: {
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
            openBmsIdx: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery pack status',
                role: 'info',
                openBmsIdx: {
                    '0': 'Not enabled',
                    '1': 'Enabled'
                }
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
                device_class: 'battery',
                role: 'value',
                name: 'SOC for turning off Smart Generator'
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
            dsgRemain: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining discharging time'
            },
            maxAvailNum: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'Maximum available quantity'
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
            },
            lcdSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'SoC value displayed on LCD'
            },
            chgRemain: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining charging time'
            },
            openOilEbSocMin: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'SoC for turning on Smart Generator'
            },
            minDsgSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Minimum discharging SOC'
            },
            maxChgSoc: {
                min: 60,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Maximum charging SOC'
            },
            f32LcdSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                name: 'SOC on LCD',
                role: 'value'
            },
            chgAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 0.0001,
                entity_type: 'sensor',
                device_class: 'current',
                name: 'Charging current',
                role: 'value'
            }
        },
        array: {
            bmsIsConnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS online signal',
                role: 'info',
                bmsIsConnt: {
                    '0': 'not online',
                    '1': 'HW online',
                    '2': 'SW online',
                    '3': 'HW+SW online'
                }
            }
        },
        string: {
            openBmsIdx: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Open BMS index'
            },
            upsFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'UPS mode enable flag',
                role: 'info'
            },
            bmsModel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS model'
            }
        },
        diagnostic: {
            warnState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS warning state',
                role: 'info',
                warnState: {
                    '0': 'no warning?',
                    '1': 'hi_temp',
                    '2': 'low_temp',
                    '4': 'overload',
                    '8': 'chg_flag'
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
            emsFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems Flag',
                role: 'info',
                emsFlag: {
                    '0': 'sleep',
                    '1': 'normal'
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
            fanLvl: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Fan level',
                role: 'info',
                fanLvl: {
                    '0': 'non-rotation',
                    '1': 'Level 1',
                    '2': 'Level 2',
                    '3': 'Level3',
                    '4': 'Level 4',
                    '5': 'Level 5'
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
    glacier: {
        pd: {
            exhaustTmp: {
                entity: 'number'
            },
            tempCoolTime: {
                entity: 'array'
            },
            batTime: {
                entity: 'number'
            },
            appSensorAdv: {
                entity: 'array'
            },
            errorTimePower: {
                entity: 'array'
            },
            tempWater: {
                entity: 'number'
            },
            A12Val: {
                entity: 'number'
            },
            tempIceTime: {
                entity: 'array'
            },
            motorCur: {
                entity: 'number'
            },
            networkTypeTime: {
                entity: 'array'
            },
            powerXt60Time: {
                entity: 'array'
            },
            tmpMSet: {
                entity: 'level'
            },
            tmpM: {
                entity: 'number'
            },
            icePercent: {
                entity: 'number'
            },
            powerBatInTime: {
                entity: 'number'
            },
            ambientTmp: {
                entity: 'number'
            },
            coolZoneSingleTime: {
                entity: 'number'
            },
            chargeXt60Time: {
                entity: 'array'
            },
            errorTimeBms: {
                entity: 'array'
            },
            tmpAver: {
                entity: 'number'
            },
            appOpTimeBlTime: {
                entity: 'array'
            },
            tmpRSet: {
                entity: 'level'
            },
            batPct: {
                entity: 'number'
            },
            errorTimePd: {
                entity: 'array'
            },
            iceTmTag: {
                entity: 'number'
            },
            coolCoverTime: {
                entity: 'number'
            },
            powerBatOutTime: {
                entity: 'number'
            },
            chargeWorkTime: {
                entity: 'number'
            },
            workFsmTime: {
                entity: 'array'
            },
            motorVol: {
                entity: 'number'
            },
            workModeTime: {
                entity: 'array'
            },
            coolZoneDoubleTime: {
                entity: 'number'
            },
            tempAmbientTime: {
                entity: 'array'
            },
            tempCoolSetTime: {
                entity: 'array'
            },
            tmpLSet: {
                entity: 'level'
            },
            motorSpeed: {
                entity: 'number'
            },
            motorWat: {
                entity: 'number'
            },
            errBms: {
                entity: 'string'
            },
            errPd: {
                entity: 'string'
            },
            errBldc: {
                entity: 'string'
            },
            emsChgFlg: {
                entity: 'string'
            },
            errLcd: {
                entity: 'string'
            },
            threeWayState: {
                entity: 'string'
            },
            flagTwoZone: {
                entity: 'string'
            },
            errCode: {
                entity: 'string'
            },
            errPwr: {
                entity: 'string'
            },
            coolZoneDoubleCount: {
                entity: 'string'
            },
            buttonLong: {
                entity: 'array'
            },
            coolCoverCount: {
                entity: 'string'
            },
            networkTypeCount: {
                entity: 'array'
            },
            powerXt60Count: {
                entity: 'array'
            },
            errorCountPower: {
                entity: 'array'
            },
            appOpCountDeIce: {
                entity: 'string'
            },
            dntMakeIceDevice: {
                entity: 'string'
            },
            appOpCountBeepOff: {
                entity: 'string'
            },
            appOpCountPowerOn: {
                entity: 'string'
            },
            countinueMakeIceMax: {
                entity: 'string'
            },
            workFsmCount: {
                entity: 'array'
            },
            appOpCountPowerOff: {
                entity: 'string'
            },
            appOpCountDntMakeIce: {
                entity: 'string'
            },
            powerBatInCount: {
                entity: 'string'
            },
            errorCountBldc: {
                entity: 'array'
            },
            workModeCount: {
                entity: 'array'
            },
            errorCountBms: {
                entity: 'array'
            },
            chargeXt60Count: {
                entity: 'array'
            },
            makeIceCount: {
                entity: 'string'
            },
            appOpCountWorkMode: {
                entity: 'array'
            },
            chargeWorkCount: {
                entity: 'string'
            },
            appOpCountBlTime: {
                entity: 'array'
            },
            coolZoneSingleCount: {
                entity: 'string'
            },
            errorCountPd: {
                entity: 'array'
            },
            buttonShort: {
                entity: 'array'
            },
            countinueMakeIceAve: {
                entity: 'string'
            },
            appOpCountTempUnitC: {
                entity: 'string'
            },
            appOpCountTempUnitF: {
                entity: 'string'
            },
            appOpCountBeepOn: {
                entity: 'string'
            },
            iceTm: {
                entity: 'number'
            },
            powerPbLevel: {
                entity: 'level'
            },
            tmpR: {
                entity: 'number'
            },
            tmpL: {
                entity: 'number'
            },
            blTime: {
                entity: 'level'
            },
            iceMkMode: {
                entity: 'diagnostic'
            },
            iceMode: {
                entity: 'switch'
            },
            iceShape: {
                entity: 'switch'
            },
            iceDetach: {
                entity: 'switch'
            },
            fsmState: {
                entity: 'diagnostic'
            },
            motorWait: {
                entity: 'diagnostic'
            },
            pwrState: {
                entity: 'diagnostic'
            },
            bldcDntWork: {
                entity: 'diagnostic'
            },
            waterLine: {
                entity: 'diagnostic'
            },
            flagAmbintReady: {
                entity: 'diagnostic'
            },
            batFlag: {
                entity: 'diagnostic'
            },
            xt150InState: {
                entity: 'diagnostic'
            },
            doorStat: {
                entity: 'diagnostic'
            },
            runState: {
                entity: 'diagnostic'
            },
            chgType: {
                entity: 'diagnostic'
            },
            sensor: {
                entity: 'diagnostic'
            },
            xt60InState: {
                entity: 'diagnostic'
            },
            iceAlert: {
                entity: 'diagnostic'
            },
            carBatLow: {
                entity: 'diagnostic'
            },
            bmsInFlag: {
                entity: 'diagnostic'
            },
            bldcDntIce: {
                entity: 'diagnostic'
            },
            warnInfo: {
                entity: 'diagnostic'
            },
            fanLvl: {
                entity: 'diagnostic'
            },
            coolMode: {
                entity: 'switch'
            },
            sensorAdv: {
                entity: 'switch'
            },
            beepEn: {
                entity: 'switch'
            },
            pwrPbEn: {
                entity: 'switch'
            },
            tmpUnit: {
                entity: 'switch'
            },
            err: {
                entity: 'string'
            },
            deiceAct: {
                entity: 'diagnostic'
            },
            appOpCountMakeIce: {
                entity: 'string'
            },
            errorTimeBldc: {
                entity: 'array'
            },
            resvP: {
                entity: 'icon'
            },
            resvD: {
                entity: 'icon'
            },
            resvB: {
                entity: 'icon'
            }
        },
        bmsMaster: {
            designCap: {
                entity: 'number'
            },
            f32ShowSoc: {
                entity: 'number'
            },
            minMosTmp: {
                entity: 'number'
            },
            vol: {
                entity: 'number'
            },
            fullCap: {
                entity: 'number'
            },
            remainCap: {
                entity: 'number'
            },
            tmp: {
                entity: 'number'
            },
            outWatts: {
                entity: 'number'
            },
            cycles: {
                entity: 'number'
            },
            minCellVol: {
                entity: 'number'
            },
            maxCellVol: {
                entity: 'number'
            },
            maxMosTmp: {
                entity: 'number'
            },
            inWatts: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
            },
            tagChgAmp: {
                entity: 'number'
            },
            minCellTmp: {
                entity: 'number'
            },
            maxCellTmp: {
                entity: 'number'
            },
            remainTime: {
                entity: 'number'
            },
            amp: {
                entity: 'number'
            },
            bmsFault: {
                entity: 'string'
            },
            num: {
                entity: 'string'
            },
            err: {
                entity: 'string'
            },
            bqStatReg: {
                entity: 'string'
            },
            ver: {
                entity: 'string'
            },
            soh: {
                entity: 'string'
            },
            type: {
                entity: 'diagnostic'
            },
            cellId: {
                entity: 'diagnostic'
            },
            openBmsIdx: {
                entity: 'diagnostic'
            }
        },
        ems: {
            closeOilEbSocMax: {
                entity: 'number'
            },
            chgVol: {
                entity: 'number'
            },
            dsgRemain: {
                entity: 'number'
            },
            maxAvailNum: {
                entity: 'number'
            },
            paraVolMax: {
                entity: 'number'
            },
            paraVolMin: {
                entity: 'number'
            },
            lcdSoc: {
                entity: 'number'
            },
            chgRemain: {
                entity: 'number'
            },
            openOilEbSocMin: {
                entity: 'number'
            },
            minDsgSoc: {
                entity: 'number'
            },
            maxChgSoc: {
                entity: 'number'
            },
            bmsIsConnt: {
                entity: 'array'
            },
            openBmsIdx: {
                entity: 'string'
            },
            warnState: {
                entity: 'diagnostic'
            },
            upsFlag: {
                entity: 'string'
            },
            bmsModel: {
                entity: 'string'
            },
            dsgCmd: {
                entity: 'diagnostic'
            },
            emsFlag: {
                entity: 'diagnostic'
            },
            chgCmd: {
                entity: 'diagnostic'
            },
            fanLvl: {
                entity: 'diagnostic'
            },
            f32LcdSoc: {
                entity: 'number'
            },
            chgState: {
                entity: 'diagnostic'
            },
            chgAmp: {
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
    glacier: {
        bmsMaster: {
            number: {
                designCap: {
                    max: 13800
                },
                remainCap: {
                    max: 13800
                },
                fullCap: {
                    max: 13800
                }
            }
        }
    }
};
const deviceCmd = {
    glacier: {
        pd: {
            tmpLSet: {
                valName: 'tmpL',
                moduleType: 1,
                operateType: 'temp',
                params: {
                    tmpR: -19,
                    tmpL: 0,
                    tmpM: 0
                }
            },
            tmpMSet: {
                valName: 'tmpM',
                moduleType: 1,
                operateType: 'temp',
                params: {
                    tmpR: -19,
                    tmpL: 0,
                    tmpM: 0
                }
            },
            tmpRSet: {
                valName: 'tmpR',
                moduleType: 1,
                operateType: 'temp',
                params: {
                    tmpR: -19,
                    tmpL: 0,
                    tmpM: 0
                }
            },
            coolMode: {
                valName: 'mode',
                moduleType: 1,
                operateType: 'ecoMode',
                params: {
                    mode: 1
                }
            },
            beepEn: {
                valName: 'flag',
                moduleType: 1,
                operateType: 'beepEn',
                params: {
                    flag: 1
                }
            },
            beep: {
                valName: 'flag',
                moduleType: 1,
                operateType: 'beep',
                params: {
                    flag: 1
                }
            },
            blTime: {
                valName: 'time',
                moduleType: 1,
                operateType: 'blTime',
                params: {
                    time: 600
                }
            },
            tmpUnit: {
                valName: 'unit',
                moduleType: 1,
                operateType: 'tmpUnit',
                params: {
                    unit: 0
                }
            },
            iceMode: {
                valName: 'enable',
                moduleType: 1,
                operateType: 'iceMake',
                params: {
                    enable: 1,
                    iceShape: 1
                }
            },
            iceShape: {
                valName: 'iceShape',
                moduleType: 1,
                operateType: 'iceMake',
                params: {
                    enable: 1,
                    iceShape: 1
                }
            },
            iceDetach: {
                valName: 'enable',
                moduleType: 1,
                operateType: 'deIce',
                params: {
                    enable: 0
                }
            },
            sensorAdv: {
                valName: 'senseorAdv',
                moduleType: 1,
                operateType: 'sensorAdv',
                params: {
                    sensorAdv: 1
                }
            },
            pwrPbEn: {
                valName: 'state',
                moduleType: 1,
                operateType: 'protectBat',
                params: {
                    state: 1,
                    level: 0
                }
            },
            powerPbLevel: {
                valName: 'level',
                moduleType: 1,
                operateType: 'protectBat',
                params: {
                    state: 1,
                    level: 0
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
