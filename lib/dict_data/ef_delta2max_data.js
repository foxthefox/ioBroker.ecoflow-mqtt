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
            maxVolDiff: {
                min: 0,
                max: 500,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Maximum cell voltage difference',
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
        array: {
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
            },
            hwVersion: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'HW version'
            }
        },
        icon: {
            recv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'recv'
            }
        }
    },
    ems: {
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
            maxAvailNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Maximum available quantity'
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
            }
        },
        diagnostic: {
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
        }
    },
    inv: {
        number: {
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
            acChgRatedPower: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'AC charge rated power'
            },
            standbyMin: {
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
        level: {
            SlowChgWatts: {
                min: 200,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                step: 100,
                entity_type: 'number',
                device_class: 'power',
                role: 'level',
                name: 'Maximum charging power for AC slow charging (W)'
            }
        },
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
            },
            acPassbyAutoEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'acPassbyAutoEn',
                acPassbyAutoEn: {
                    '0': '0?',
                    '1': '1?'
                }
            },
            prBalanceMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'prBalanceMode',
                prBalanceMode: {
                    '0': '0=?',
                    '1': '1=?'
                }
            }
        },
        switch: {
            cfgAcEnabled: {
                entity_type: 'switch',
                device_class: 'outlet',
                role: 'switch',
                name: 'AC discharge (INV) switch setting',
                payload_off: 'off',
                payload_on: 'on',
                cfgAcEnabled: {
                    '0': 'off',
                    '1': 'on'
                }
            },
            cfgAcWorkMode: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'AC charging mode',
                payload_off: 'full power',
                payload_on: 'mute',
                cfgAcWorkMode: {
                    '0': 'full power',
                    '1': 'mute'
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
            },
            chgPauseFlag: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'AC Charging Pause',
                payload_off: 'not stopped?',
                payload_on: 'charge stopped',
                chgPauseFlag: {
                    '0': 'not stopped?',
                    '1': 'charge stopped'
                }
            }
        },
        string: {
            cfgAcOutVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Inverter output voltage (V): 0xffffffff: ignored'
            },
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
            pv2InAmp: {
                min: 0,
                max: 13,
                unit_of_measurement: 'A',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'current',
                name: 'PV input current',
                role: 'value'
            },
            pv2InVol: {
                min: 0,
                max: 150,
                unit_of_measurement: 'V',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'PV input voltage',
                role: 'value'
            },
            pv2InWatts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'PV input power',
                role: 'value'
            },
            pv2MpptTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                name: 'MPPT temperature',
                role: 'value'
            }
        },
        level: {
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
            },
            pv2DcChgCurrent: {
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
                name: 'pv2DcChgCurrent',
                role: 'level'
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
            },
            pv2CfgChgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Configured charging type: This parameter is valid when xt60_chg_type is 0.',
                pv2CfgChgType: {
                    '0': 'auto?',
                    '1': 'MPPT?',
                    '2': 'adapter?'
                }
            },
            pv2ChgPauseFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'PV charging pause flag',
                pv2ChgPauseFlag: {
                    '0': 'not stopped',
                    '1': 'charging stopped'
                }
            },
            pv2ChgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Charging state',
                pv2ChgState: {
                    '0': 'disabled',
                    '1': 'charging',
                    '2': 'standby (DC charging stopped during AC charging)'
                }
            },
            pv2ChgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Actual charging type',
                pv2ChgType: {
                    '0': 'null',
                    '1': 'adapter (adapter/DC source)',
                    '2': 'MPPT (solar)',
                    '3': 'AC (mains supply)',
                    '4': 'gas',
                    '5': 'wind'
                }
            },
            pv2Xt60ChgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'XT60 charging type',
                pv2Xt60ChgType: {
                    '0': 'not detected',
                    '1': 'MPPT?',
                    '2': 'adapter?'
                }
            }
        },
        icon: {
            res: {}
        },
        string: {
            swVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Version number'
            }
        }
    },
    pd: {
        diagnostic: {
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
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Global error code',
                errCode: {
                    '0': 'OK?'
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
            otherKitState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'other Kit State',
                otherKitState: {
                    '0': '0?',
                    '1': '1?'
                }
            },
            pv1ChargeType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Charger type',
                pv1ChargeType: {
                    '0': 'none',
                    '1': 'adapter',
                    '2': 'solar panel'
                }
            },
            pv2ChargeType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Charger type',
                pv2ChargeType: {
                    '0': 'none',
                    '1': 'adapter',
                    '2': 'solar panel'
                }
            },
            pvChargePrioSet: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Charger type',
                pvChargePrioSet: {
                    '0': 'power supply prio?',
                    '1': 'charge prio?'
                }
            }
        },
        level: {
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
        string: {
            brightLevel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'LCD brightness level: 0-3'
            },
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
            relaySwitchCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Number of relay disconnections'
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
            wireWatts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wireless charging output power (W)'
            },
            acAutoPause: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'acAutoPause'
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
            XT150Watts1: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'XT150 (1) Watts',
                role: 'value'
            },
            XT150Watts2: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'XT150 (2) Watts',
                role: 'value'
            },
            invInWatts: {
                min: 0,
                max: 3600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Inverter Input  Watts',
                role: 'value'
            },
            invOutWatts: {
                min: 0,
                max: 3600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Inverter Output Watts',
                role: 'value'
            },
            minAcSoc: {
                min: 0,
                max: 255,
                unit_of_measurement: '% (0-255?)',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'level',
                name: 'minimum AC out SOC',
                entity_category: 'diagnostic',
                role: 'value'
            },
            pv1ChargeWatts: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'PV1 charge Watts',
                role: 'value'
            },
            pv2ChargeWatts: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'PV2 charge Watts',
                role: 'value'
            },
            minAcoutSoc: {
                min: 0,
                max: 255,
                unit_of_measurement: '% (0-255?)',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'level',
                name: 'minimum AC out SOC',
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
            watchIsConfig: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'Disable',
                payload_on: 'Enable',
                role: 'switch',
                name: 'Power management configuration (Backup Reserve) ',
                watchIsConfig: {
                    '0': 'disable',
                    '1': 'enable'
                }
            },
            newAcAutoOnCfg: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'AC auto out Config',
                payload_off: 'off',
                payload_on: 'on',
                newAcAutoOnCfg: {
                    '0': 'off',
                    '1': 'on'
                }
            }
        },
        icon: {
            icoBytes: {},
            reserved: {
                name: 'Reserve'
            }
        },
        array: {
            bmsKitState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'bms Kit State',
                bmsKitState: {
                    '0': '0?',
                    '1': '1?'
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
    delta2max: {
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
            balanceState: {
                entity: 'diagnostic'
            },
            cellTemp: {
                entity: 'array'
            },
            cellVol: {
                entity: 'array'
            },
            hwVersion: {
                entity: 'array'
            },
            maxVolDiff: {
                entity: 'number'
            },
            mosState: {
                entity: 'diagnostic'
            },
            recv: {
                entity: 'icon'
            }
            /*
            dsgCap: {entity: 'number'},
            chgCap: {entity: 'number'},
            chgState 
            targetSoc: {entity: 'number'},
            sysState
            caleSoh: {entity: 'number'},
            allBmsFault
            diffSoc: {entity: 'number'},
            actSoc: {entity: 'number'},
            productDetail
            cycSoh: {entity: 'number'},
            bmsHeartVer
            ecloudOcv
            allErrCode
            productType
            loaderVer
            realSoh: {entity: 'number'},
            packSn
            
            */

        },
        ems: {
            bmsIsConnt: {
                entity: 'array'
            },
            bmsModel: {
                entity: 'string'
            },
            bmsWarState: {
                entity: 'diagnostic'
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
            maxAvailNum: {
                entity: 'string'
            },
            maxChargeSoc: {
                entity: 'level'
            },
            maxCloseOilEb: {
                entity: 'level'
            },
            minDsgSoc: {
                entity: 'level'
            },
            minOpenOilEb: {
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
            }
            /*
            emsVer
            sysChgDsgState
            dsgDisCond
            chgLinePlug
            chgDisCond
            */
        },
        inv: {
            FastChgWatts: {
                entity: 'number'
            },
            SlowChgWatts: {
                entity: 'level'
            },
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
                entity: 'switch'
            },
            cfgAcOutFreq: {
                entity: 'diagnostic'
            },
            cfgAcOutVol: {
                entity: 'string'
            },
            cfgAcWorkMode: {
                entity: 'switch'
            },
            cfgAcXboost: {
                entity: 'switch'
            },
            chargerType: {
                entity: 'diagnostic'
            },
            chgPauseFlag: {
                entity: 'switch'
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
            reserved: {
                entity: 'icon'
            },
            sysVer: {
                entity: 'string'
            },
            acChgRatedPower: {
                entity: 'number'
            },
            acPassbyAutoEn: {
                entity: 'diagnostic'
            },
            prBalanceMode: {
                entity: 'diagnostic'
            },
            standbyMin: {
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
            carStandbyMin: {
                entity: 'level'
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
            dcChgCurrent: {
                entity: 'level'
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
            res: {
                entity: 'icon'
            },
            swVer: {
                entity: 'string'
            },
            x60ChgType: {
                entity: 'diagnostic'
            },
            pv2CfgChgType: {
                entity: 'diagnostic'
            },
            pv2ChgPauseFlag: {
                entity: 'diagnostic'
            },
            pv2ChgState: {
                entity: 'diagnostic'
            },
            pv2ChgType: {
                entity: 'diagnostic'
            },
            pv2DcChgCurrent: {
                entity: 'level'
            },
            pv2InAmp: {
                entity: 'number'
            },
            pv2InVol: {
                entity: 'number'
            },
            pv2InWatts: {
                entity: 'number'
            },
            pv2MpptTemp: {
                entity: 'number'
            },
            pv2Xt60ChgType: {
                entity: 'diagnostic'
            }
        },
        pd: {
            acAutoOnCfg: {
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
            chgDsgState: {
                entity: 'diagnostic'
            },
            chgPowerAC: {
                entity: 'number'
            },
            chgPowerDC: {
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
            dsgPowerAC: {
                entity: 'number'
            },
            dsgPowerDC: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            hysteresisAdd: {
                entity: 'string'
            },
            icoBytes: {
                entity: 'icon'
            },
            invUsedTime: {
                entity: 'number'
            },
            lcdOffSec: {
                entity: 'level'
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
            relaySwitchCnt: {
                entity: 'string'
            },
            remainTime: {
                entity: 'number'
            },
            reserved: {
                entity: 'icon'
            },
            soc: {
                entity: 'number'
            },
            standbyMin: {
                entity: 'level'
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
            typecUsedTime: {
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
            watchIsConfig: {
                entity: 'switch'
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
            wireWatts: {
                entity: 'string'
            },
            XT150Watts1: {
                entity: 'number'
            },
            XT150Watts2: {
                entity: 'number'
            },
            acAutoPause: {
                entity: 'string'
            },
            bmsKitState: {
                entity: 'array'
            },
            invInWatts: {
                entity: 'number'
            },
            invOutWatts: {
                entity: 'number'
            },
            minAcSoc: {
                entity: 'number'
            },
            newAcAutoOnCfg: {
                entity: 'switch'
            },
            otherKitState: {
                entity: 'diagnostic'
            },
            pv1ChargeType: {
                entity: 'diagnostic'
            },
            pv1ChargeWatts: {
                entity: 'number'
            },
            pv2ChargeType: {
                entity: 'diagnostic'
            },
            pv2ChargeWatts: {
                entity: 'number'
            },
            pvChargePrioSet: {
                entity: 'diagnostic'
            },
            minAcoutSoc: {
                entity: 'number'
            } //löschen weil minAcSoc?
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
    delta2max: {
        inv: {
            level: {
                SlowChgWatts: {
                    min: 200,
                    max: 2400
                }
            }
        },
        mppt: {
            number: {
                inVol: {
                    mult: 0.001,
                    max: 60
                },
                inAmp: {
                    mult: 0.001
                },
                outAmp: {
                    mult: 0.001
                },
                outVol: {
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
                    max: 900
                },
                pv2InVol: {
                    mult: 0.001
                },
                pv2InAmp: {
                    mult: 0.001
                },
                pv2InWatts: {
                    mult: 1
                },
                outWatts: {
                    mult: 1
                }
            }
        },
        pd: {
            number: {
                dsgPowerAC: {
                    mult: 0.001
                },
                chgPowerAC: {
                    mult: 0.001
                }
            }
        }
    }
};
const deviceCmd = {
    delta2max: {
        mppt: {
            carStandbyMin: {
                valName: 'standbyMins',
                moduleType: 5,
                operateType: 'standbyTime',
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
            },
            dcChgCurrent: {
                valName: 'dcChgCfg',
                moduleType: 5,
                operateType: 'dcChgCfg',
                params: {
                    dcChgCfg: 8000,
                    dcChgCfg2: 8000
                }
            },
            pv2DcChgCurrent: {
                valName: 'dcChgCfg2',
                moduleType: 5,
                operateType: 'dcChgCfg',
                params: {
                    dcChgCfg: 8000,
                    dcChgCfg2: 8000
                }
            }
        },
        pd: {
            beepMode: {
                valName: 'enabled',
                moduleType: 1,
                operateType: 'quietCfg',
                params: {
                    enabled: 1
                }
            },
            dcOutState: {
                valName: 'enabled',
                moduleType: 1,
                operateType: 'dcOutCfg',
                params: {
                    enabled: 1
                }
            },
            acAutoOnCfg: {
                valName: 'cfg',
                moduleType: 1,
                operateType: 'acAutoOn',
                params: {
                    cfg: 1
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
            newAcAutoOnCfg: {
                valName: 'enabled',
                moduleType: 1,
                operateType: 'newAcAutoOnCfg',
                params: {
                    enabled: 1,
                    minAcSoc: 5
                }
            },
            lcdOffSec: {
                valName: 'delayOff',
                moduleType: 1,
                operateType: 'lcdCfg',
                params: {
                    brighLevel: 255,
                    delayOff: 300
                }
            },
            watchIsConfig: {
                valName: 'isConfig',
                moduleType: 1,
                operateType: 'watthConfig',
                params: {
                    isConfig: 1,
                    bpPowerSoc: 55,
                    minDsgSoc: 0,
                    minChgSoc: 0
                }
            },
            bpPowerSoc: {
                valName: 'bpPowerSoc',
                moduleType: 1,
                operateType: 'watthConfig',
                params: {
                    isConfig: 1,
                    bpPowerSoc: 55,
                    minDsgSoc: 255,
                    minChgSoc: 255
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
        inv: {
            cfgAcEnabled: {
                valName: 'enabled',
                moduleType: 3,
                operateType: 'acOutCfg',
                params: {
                    enabled: 1
                }
            },
            cfgAcXboost: {
                valName: 'xboost',
                moduleType: 3,
                operateType: 'acOutCfg',
                params: {
                    xboost: 1
                }
            },
            xboost: {
                valName: 'xboost',
                params: {
                    xboost: 1
                },
                moduleType: 3,
                operateType: 'acOutCfg'
            },
            SlowChgWatts: {
                valName: 'slowChgWatts',
                moduleType: 3,
                operateType: 'acChgCfg',
                params: {
                    slowChgWatts: 200,
                    fastChgWatts: 255,
                    chgPauseFlag: 0
                }
            },
            chgPauseFlag: {
                valName: 'chgPauseFlag',
                moduleType: 3,
                operateType: 'acOutCfg',
                params: {
                    chgPauseFlag: 1
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
                params: {},
                version: '1.0'
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
