

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
            },
            OCV: {
                min: 0,
                max: 65,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Open Circuit Voltage',
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
            },
            maxAvailNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Maximum available quantity'
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
        diagnostic: {
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
            },
            bmsWarState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS warning state',
                bmsWarState: {
                    '0': 'no warning?',
                    '1': 'hi_temp',
                    '2': 'low_temp',
                    '4': 'overload',
                    '8': 'chg_flag'
                }
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
            },
            maxCloseOilEb: {
                min: 50,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                role: 'level',
                name: 'The lower threshold of smart generator auto off Range: 0~100'
            },
            minOpenOilEb: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                role: 'level',
                name: 'The upper threshold of smart generator auto on Range: 0~100'
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
            cfgAcEnabled: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'AC discharge switch setting',
                cfgAcEnabled: {
                    '0': 'off',
                    '1': 'on'
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
            cfgAcWorkMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'AC charging mode',
                cfgAcWorkMode: {
                    '0': 'full power',
                    '1': 'mute'
                }
            },
            cfgAcXboost: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'X-Boost switch',
                cfgAcXboost: {
                    '0': 'off',
                    '1': 'on',
                    ff: 'ignored'
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
            },
            FastChgWatts: {
                min: 200,
                max: 2400,
                unit_of_measurement: 'W',
                mult: 1,
                step: 100,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Maximum charging power for AC fast charging (W)'
            },
            SlowChgWatts: {
                min: 200,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                step: 100,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Maximum charging power for AC slow charging (W)'
            },
            standbyMins: {
                min: 0,
                max: 1440,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                AC_TIMEOUT_OPTIONS: {
                    Never: 0,
                    '30 min': 30,
                    '1 hr': 60,
                    '2 hr': 120,
                    '4 hr': 240,
                    '6 hr': 360,
                    '12 hr': 720,
                    '24 hr': 1440
                },
                role: 'value',
                name: 'AC standby time /min 0 Never standby 720 Default value'
            }
        },
        string: {
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
            },
            cfgAcOutVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Inverter output voltage (V): 0xffffffff: ignored'
            }
        },
        icon: {
            reserved: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'reserved'
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
                max: 60,
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
                max: 150,
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
            },
            powStandbyMin: {
                min: 0,
                max: 720,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Power standby time /min 0 Never standby 720 Default value ?'
            },
            scrStandbyMin: {
                min: 0,
                max: 720,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'SCR standby time /min 0 Never standby 720 Default value ?'
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
            },
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
            cfgAcEnabled: {
                entity_type: 'switch',
                device_class: 'outlet',
                role: 'switch',
                name: 'AC discharge switch setting',
                payload_off: 'off',
                payload_on: 'on',
                cfgAcEnabled: {
                    '0': 'off',
                    '1': 'on'
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
            x60ChgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'XT60 charging type',
                x60ChgType: {
                    '0': 'not detected',
                    '1': 'MPPT',
                    '2': 'adapter'
                }
            }
        },
        string: {
            swVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Version number'
            },
            cfgAcOutVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Inverter output voltage (mV)'
            }
        },
        level: {
            acStandbyMins: {
                min: 0,
                max: 720,
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
                role: 'level',
                subrole: 'timer',
                name: 'AC standby time /min 0 Never standby 720 Default value'
            },
            carStandbyMin: {
                min: 0,
                max: 720,
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
                role: 'level',
                subrole: 'timer',
                name: 'CAR standby time /min 0 Never standby 720 Default value'
            },
            cfgChgWatts: {
                min: 0,
                max: 2200,
                unit_of_measurement: 'W',
                mult: 1,
                step: 100,
                entity_type: 'number',
                device_class: 'power',
                role: 'level',
                name: 'Maximum charging power for charging (W) ?'
            },
            dcChgCurrent: {
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
        icon: {
            res: {}
        }
    },
    pd: {
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
            ext3p8Port: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Infinity port / 3+8 ports',
                ext3p8Port: {
                    '0': 'NULL',
                    '1': 'CC',
                    '2': 'PR',
                    '3': 'SP (BC)'
                }
            },
            ext4p8Port: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Extra battery port. Only the status of the leftmost port can be identified.',
                ext4p8Port: {
                    '0': 'NULL',
                    '1': 'Extra battery',
                    '2': 'Smart generator'
                }
            },
            extRj45Port: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'RJ45 port',
                extRj45Port: {
                    '0': 'NULL',
                    '1': 'RC(BLE_CTL)'
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
            },
            acAutoOnCfg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'AC Auto On Cfg',
                acAutoOnCfg: {
                    '0': 'off?',
                    '1': 'on?'
                }
            },
            acEnabled: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'AC enabled',
                acEnabled: {
                    '0': 'off',
                    '1': 'on'
                }
            },
            beepMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Beep mode',
                beepMode: {
                    '0': 'normal',
                    '1': 'quiet'
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
            chgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Charging/discharging state on screen',
                chgDsgState: {
                    '0': 'discharging',
                    '1': 'charging'
                }
            },
            watchIsConfig: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Power management configuration: ',
                watchIsConfig: {
                    '0': 'disable',
                    '1': 'enable'
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
            minAcoutSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                name: 'minimum AC out SOC',
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
            },
            acAutoOutPause: {
                min: 0,
                max: 255,
                unit_of_measurement: 's',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                name: 'AC Auto out Pause',
                entity_category: 'diagnostic',
                role: 'value'
            },
            chgPowerAC: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                name: 'Cumulative AC power charged for PD (wall socket)',
                role: 'value'
            },
            chgPowerDC: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                name: 'Cumulative DC power charged for PD (adapter)',
                role: 'value'
            },
            dsgPowerAC: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                name: 'Cumulative AC power discharged ',
                role: 'value'
            },
            dsgPowerDC: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                name: 'Cumulative DC discharge capacity',
                role: 'value'
            },
            inWatts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'PD? input power',
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
            outWatts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'PD? output power',
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
            typecUsedTime: {
                min: 0,
                max: 9999999,
                unit_of_measurement: 'min',
                mult: 0.0166,
                entity_type: 'sensor',
                device_class: 'duration',
                name: 'Type-C use time',
                entity_category: 'diagnostic',
                role: 'value'
            }
        },
        switch: {
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
            },
            acAutoOutConfig: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'AC auto out Config',
                payload_off: 'off',
                payload_on: 'on',
                acAutoOutConfig: {
                    '0': 'off',
                    '1': 'on'
                }
            },
            pvChgPrioSet: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'PV Chg Prio Set',
                payload_off: 'off',
                payload_on: 'on',
                pvChgPrioSet: {
                    '0': 'off',
                    '1': 'on'
                }
            }
        },
        string: {
            hysteresisAdd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Hysteresis SOC'
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
            brightLevel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'LCD brightness level: 0-3'
            },
            relaySwitchCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Number of relay disconnections'
            },
            wireWatts: {
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
            bpPowerSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                role: 'level',
                name: 'Backup Power SOC'
            },
            standbyMin: {
                min: 0,
                max: 720,
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
                role: 'level',
                subrole: 'timer',
                name: 'Standby time /min 0 Never standby 720 Default value ?'
            }
        },
        icon: {
            icoBytes: {},
            reserved: {
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
    delta2: {
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
            },
            OCV: {
                entity: 'number'
            }
        },
        ems: {
            bmsModel: {
                entity: 'string'
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
            },
            bmsIsConnt: {
                entity: 'array'
            },
            bmsWarState: {
                entity: 'diagnostic'
            },
            maxAvailNum: {
                entity: 'string'
            },
            maxCloseOilEb: {
                entity: 'level'
            },
            minOpenOilEb: {
                entity: 'level'
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
                entity: 'diagnostic'
            },
            cfgAcOutFreq: {
                entity: 'diagnostic'
            },
            cfgAcWorkMode: {
                entity: 'diagnostic'
            },
            cfgAcXboost: {
                entity: 'diagnostic'
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
            },
            FastChgWatts: {
                entity: 'number'
            },
            SlowChgWatts: {
                entity: 'number'
            },
            cfgAcOutVol: {
                entity: 'string'
            },
            reserved: {
                entity: 'icon'
            },
            standbyMins: {
                entity: 'number'
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
            acStandbyMins: {
                entity: 'level'
            },
            beepState: {
                entity: 'switch'
            },
            carStandbyMin: {
                entity: 'level'
            },
            cfgAcEnabled: {
                entity: 'switch'
            },
            cfgAcOutFreq: {
                entity: 'diagnostic'
            },
            cfgAcOutVol: {
                entity: 'string'
            },
            cfgAcXboost: {
                entity: 'switch'
            },
            cfgChgWatts: {
                entity: 'level'
            },
            dcChgCurrent: {
                entity: 'level'
            },
            dischargeType: {
                entity: 'diagnostic'
            },
            powStandbyMin: {
                entity: 'number'
            },
            res: {
                entity: 'icon'
            },
            scrStandbyMin: {
                entity: 'number'
            },
            x60ChgType: {
                entity: 'diagnostic'
            }
        },
        pd: {
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
            chgSunPower: {
                entity: 'number'
            },
            dcInUsedTime: {
                entity: 'number'
            },
            dcOutState: {
                entity: 'switch'
            },
            errCode: {
                entity: 'diagnostic'
            },
            ext3p8Port: {
                entity: 'diagnostic'
            },
            ext4p8Port: {
                entity: 'diagnostic'
            },
            extRj45Port: {
                entity: 'diagnostic'
            },
            hysteresisAdd: {
                entity: 'string'
            },
            invUsedTime: {
                entity: 'number'
            },
            lcdOffSec: {
                entity: 'level'
            },
            minAcoutSoc: {
                entity: 'number'
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
            sysVer: {
                entity: 'string'
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
            acAutoOnCfg: {
                entity: 'diagnostic'
            },
            acAutoOutConfig: {
                entity: 'switch'
            },
            acAutoOutPause: {
                entity: 'number'
            },
            acEnabled: {
                entity: 'diagnostic'
            },
            beepMode: {
                entity: 'diagnostic'
            },
            bpPowerSoc: {
                entity: 'level'
            },
            brightLevel: {
                entity: 'string'
            },
            chargerType: {
                entity: 'diagnostic'
            },
            chgDsgState: {
                entity: 'diagnostic'
            },
            chgPowerAC: {
                entity: 'number'
            },
            chgPowerDC: {
                entity: 'number'
            },
            dsgPowerAC: {
                entity: 'number'
            },
            dsgPowerDC: {
                entity: 'number'
            },
            icoBytes: {
                entity: 'icon'
            },
            inWatts: {
                entity: 'number'
            },
            inputWatts: {
                entity: 'number'
            },
            outWatts: {
                entity: 'number'
            },
            outputWatts: {
                entity: 'number'
            },
            pvChgPrioSet: {
                entity: 'switch'
            },
            relaySwitchCnt: {
                entity: 'string'
            },
            reserved: {
                entity: 'icon'
            },
            standbyMin: {
                entity: 'level'
            },
            typecUsedTime: {
                entity: 'number'
            },
            watchIsConfig: {
                entity: 'diagnostic'
            },
            wireWatts: {
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
            status: {
                entity: 'diagnostic'
            }
        }
    }
};
const deviceRanges = {
    delta2: {
        mppt: {
            level: {
                cfgChgWatts: {
                    min: 50,
                    max: 1200
                }
            },
            number: {
                inVol: {
                    mult: 0.001,
                    max: 60
                },
                inAmp: {
                    mult: 0.001
                },
                outVol: {
                    mult: 0.001
                },
                outAmp: {
                    mult: 0.001
                },
                carOutAmp: {
                    mult: 0.001
                },
                carOutVol: {
                    mult: 0.001,
                    max: 15
                },
                inWatts: {
                    mult: 1,
                    max: 550
                },
                outWatts: {
                    mult: 1
                }
            }
        }
    }
};
const deviceCmd = {
    delta2: {
        mppt: {
            beepState: {
                valName: 'enabled',
                moduleType: 5,
                operateType: 'quietMode',
                params: {
                    enabled: 1
                }
            },
            cfgAcEnabled: {
                valName: 'enabled',
                moduleType: 5,
                operateType: 'acOutCfg',
                params: {
                    enabled: 1
                }
            },
            cfgAcXboost: {
                valName: 'xboost',
                moduleType: 5,
                operateType: 'acOutCfg',
                params: {
                    xboost: 1
                }
            },
            cfgChgWatts: {
                valName: 'chgWatts',
                moduleType: 5,
                operateType: 'acChgCfg',
                params: {
                    chgWatts: 200,
                    chgPauseFlag: 255
                }
            },
            dcChgCurrent: {
                valName: 'dcChgCfg',
                moduleType: 5,
                operateType: 'dcChgCfg',
                params: {
                    dcChgCfg: 8000
                }
            },
            acStandbyMins: {
                valName: 'standbyMins',
                moduleType: 5,
                operateType: 'standbyTime',
                params: {
                    standbyMins: 720
                }
            },
            carStandbyMin: {
                valName: 'standbyMins',
                moduleType: 5,
                operateType: 'carStandby',
                params: {
                    standbyMins: 720
                }
            },
            carState: {
                valName: 'enabled',
                moduleType: 5,
                operateType: 'mpptCar',
                params: {
                    enabled: 1
                }
            }
        },
        pd: {
            dcOutState: {
                valName: 'enabled',
                moduleType: 1,
                operateType: 'dcOutCfg',
                params: {
                    enabled: 1
                }
            },
            acAutoOutConfig: {
                valName: 'acAutoOutConfig',
                moduleType: 1,
                operateType: 'acAutoOutConfig',
                params: {
                    acAutoOutConfig: 1,
                    minAcOutSoc: 5
                }
            },
            pvChgPrioSet: {
                valName: 'pvChangeSet',
                moduleType: 1,
                operateType: 'pvChangePrio',
                params: {
                    pvChangeSet: 1
                }
            },
            bpPowerSoc: {
                valName: 'bpPowerSoc',
                moduleType: 1,
                operateType: 'watthConfig',
                params: {
                    bpPowerSoc: 55
                }
            },
            lcdOffSec: {
                valName: 'delayOff',
                moduleType: 1,
                operateType: 'lcdCfg',
                params: {
                    brighLevel: 3,
                    delayOff: 300
                }
            },
            standbyMin: {
                valName: 'standbyMin',
                moduleType: 1,
                operateType: 'standbyTime',
                params: {
                    standbyMin: 720
                }
            }
        },
        ems: {
            maxChargeSoc: {
                valName: 'maxChgSoc',
                moduleType: 2,
                operateType: 'upsConfig',
                params: {
                    maxChgSoc: 90
                }
            },
            minDsgSoc: {
                valName: 'minDsgSoc',
                moduleType: 2,
                operateType: 'dsgCfg',
                params: {
                    minDsgSoc: 30
                }
            },
            maxCloseOilEb: {
                valName: 'closeOilSoc',
                moduleType: 2,
                operateType: 'closeOilSoc',
                params: {
                    closeOilSoc: 90
                }
            },
            minOpenOilEb: {
                valName: 'openOilSoc',
                moduleType: 2,
                operateType: 'openOilSoc',
                params: {
                    openOilSoc: 40
                }
            }
        },
        action: {
            latestQuotas: {
                valName: '',
                operateType: 'latestQuotas',
                params: {}
            },
            getAllTaskCfg: {
                valName: '',
                moduleType: 1,
                operateType: 'getAllTaskCfg',
                params: {}
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
