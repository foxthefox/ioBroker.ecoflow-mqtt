const deviceStates = {
    bmsMaster: {
        number: {
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
            remainCap: {
                min: 0,
                max: 80000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Remaining capacity',
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
            fullCap: {
                min: 0,
                max: 80000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Full capacity',
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
            bmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS permanent fault'
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
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Global error code',
                errCode: {
                    '0': 'OK?'
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
            }
        }
    },
    ems: {
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
            bmsWarningState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS warning state',
                bmsWarningState: {
                    '0': 'no warning?',
                    '1': 'hi_temp',
                    '2': 'low_temp',
                    '4': 'overload',
                    '8': 'chg_flag'
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
            bms0Online: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS0 online signal',
                bms0Online: {
                    '0': 'not online?',
                    '1': 'HW online',
                    '2': 'SW online',
                    '3': 'HW-SW online'
                }
            },
            bms1Online: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS1 online signal',
                bms1Online: {
                    '0': 'not online?',
                    '1': 'HW online',
                    '2': 'SW online',
                    '3': 'HW-SW online'
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
        },
        level: {
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
            minOpenOilEbSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                role: 'level',
                name: 'The upper threshold of smart generator auto on Range: 0~100'
            },
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
            maxCloseOilEbSoc: {
                min: 50,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                role: 'level',
                name: 'The lower threshold of smart generator auto off Range: 0~100'
            }
        },
        number: {
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
        string: {
            openBmsIdx: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Open BMS index'
            },
            maxAvailableNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Maximum available quantity'
            },
            bmsModel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS model'
            },
            openUpsFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'UPS mode enable flag'
            },
            fanLevel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Fan level'
            }
        }
    },
    inv: {
        number: {
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
            cfgFastChgWatts: {
                min: 200,
                max: 1200,
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
            invOutAmp: {
                min: 0,
                max: 13,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                name: 'Inverter output current',
                role: 'value'
            }
        },
        switch: {
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
        string: {
            cfgAcOutVoltage: {
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
        level: {
            cfgStandbyMin: {
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
                name: 'AC standby time /min 0 Never standby 720 Default value'
            },
            cfgSlowChgWatts: {
                min: 200,
                max: 700,
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
            acPassByAutoEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'acPassByAutoEn',
                acPassByAutoEn: {
                    '0': '0?',
                    '1': '1?'
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
            }
        }
    },
    mppt: {
        number: {
            carOutVol: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Car charging output voltage',
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
                max: 65,
                unit_of_measurement: 'V',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'PV input voltage',
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
            dc24vTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                name: 'DCDC24V temperature',
                role: 'value'
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
            xt60ChgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'XT60 charging type',
                xt60ChgType: {
                    '0': 'not detected',
                    '1': 'MPPT',
                    '2': 'adapter'
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
            }
        },
        string: {
            swVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Version number'
            }
        },
        level: {
            cfgDcChgCurrent: {
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
        }
    },
    pd: {
        number: {
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
            chgPowerDc: {
                min: 0,
                max: 65000,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative DC power charged (adapter)',
                state_class: 'total_increasing',
                role: 'value'
            },
            dsgPowerDc: {
                min: 0,
                max: 65000,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative DC power discharged',
                state_class: 'total_increasing',
                role: 'value'
            },
            typccUsedTime: {
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
            dsgPowerAc: {
                min: 0,
                max: 65000,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative AC power discharged',
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
            chgPowerAc: {
                min: 0,
                max: 65000,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative AC power charged (wall socket)',
                state_class: 'total_increasing',
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
            usb2Watts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Common usb2 output power',
                role: 'value'
            }
        },
        string: {
            wifiVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wi-Fi version'
            },
            wirelessWatts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wireless charging output power (W)'
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
            }
        },
        level: {
            standByMode: {
                min: 0,
                max: 5999,
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
                UNIT_TIMEOUT_OPTIONS: {
                    Never: 0,
                    '30 min': 30,
                    '1 hr': 60,
                    '2 hr': 120,
                    '4 hr': 240,
                    '6 hr': 360,
                    '12 hr': 720,
                    '24 hr': 1440
                },
                role: 'level',
                subrole: 'timer',
                name: 'Device standby time /min 0 Never standby 5999 Max value',
                standByMode: {
                    '0': 'Never standby',
                    '5999': 'Max value'
                }
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
            }
        },
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
            sysChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Charging/discharging state on screen',
                sysChgDsgState: {
                    '0': 'discharged',
                    '1': 'charged'
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
        switch: {
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
            }
        },
        icon: {
            lcdBrightness: {
                name:
                    'Screen brightness Range:0~100 Input 128(0x11111111), indicates turned on the automatic brightness adjustment'
            },
            kit0: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                special: 'delta max'
            },
            kit1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                special: 'delta max'
            },
            kit2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                special: 'delta max'
            },
            iconFanState: {
                name:
                    'Fan icon state: 0: off; 1: Level 1; 2: Level 2; 3: Level 3. This parameter is valid only when the fan icon mode is 0.'
            },
            iconUsbState: {
                name: 'USB icon state: 0: off; 1: on. This parameter is valid only when the USB icon mode is 0.'
            },
            iconBtMode: {
                name: 'Bluetooth icon mode: 0: normal; 1: blinking'
            },
            iconAcFreqMode: {
                name: 'AC icon mode: 0: normal; 1: blinking'
            },
            iconLowTempState: {
                name:
                    'Low temperature icon state: 0: off; 1: on. This parameter is valid only when the low temperature icon mode is 0.'
            },
            iconPackHeaterState: {
                name:
                    'Battery heater icon state: 0: off; 1: on. This parameter is valid only when the battery heater icon mode is 0.'
            },
            iconRechgTimeState: {
                name: 'Charge icon state: 0: off; 1: on. This parameter is valid only when the charge icon mode is 0.'
            },
            iconTransSwState: {
                name:
                    'Transfer switch icon state: 0: off; 1: on. This parameter is valid only when the transfer switch icon mode is 0.'
            },
            iconTypecMode: {
                name: 'Type-C icon mode: 0: normal; 1: blinking'
            },
            iconTypecState: {
                name: 'Type-C icon state: 0: off; 1: on. This parameter is valid only when the Type-C icon mode is 0.'
            },
            iconCarMode: {
                name: 'CAR icon mode: 0: normal; 1: blinking'
            },
            iconCoGasState: {
                name:
                    'CO toxic gas icon state: 0: off; 1: on. This parameter is valid only when the CO toxic gas icon mode is 0.'
            },
            iconRcState: {
                name:
                    'Remote control icon state: 0: off; 1: on; 2: one signal bar; 3: two signal bars; 4: searching signal. This parameter is valid only when the remote control icon mode is 0.'
            },
            iconHiTempState: {
                name:
                    'High temperature icon state: 0: off; 1: on. This parameter is valid only when the high temperature icon mode is 0.'
            },
            iconHiTempMode: {
                name: 'High temperature icon mode: 0: normal; 1: blinking'
            },
            iconEcoMode: {
                name: 'ECO icon mode: 0: normal; 1: blinking'
            },
            iconCarState: {
                name: 'CAR icon state: 0: off; 1: on. This parameter is valid only when the CAR icon mode is 0.'
            },
            iconSocUpsMode: {
                name: 'UPS icon mode: 0: normal; 1: blinking'
            },
            iconSolarBracketMode: {
                name: 'Solar panel tracking bracket icon mode: 0: normal; 1: blinking'
            },
            iconLowTempMode: {
                name: 'Low temperature icon mode: 0: normal; 1: blinking'
            },
            iconGasGenMode: {
                name: 'Oil-powered generation icon mode: 0: normal; 1: blinking'
            },
            iconBmsParallelMode: {
                name: 'BMS parallel icon mode: 0: normal; 1: blinking'
            },
            iconInvParallelState: {
                name:
                    'Inverter parallel icon state: 0: off; 1: on. This parameter is valid only when the inverter parallel icon mode is 0.'
            },
            iconWifiMode: {
                name: 'Wi-Fi icon mode: 0: normal; 1: blinking'
            },
            iconOverloadState: {
                name:
                    'OVERLOAD icon state: 0: off; 1: on. This parameter is valid only when the OVERLOAD icon mode is 0.'
            },
            iconFactoryState: {
                name: 'Factory icon state: 0: off; 1: on. This parameter is valid only when the factory icon mode is 0.'
            },
            iconChgStationState: {
                name:
                    'Charging pile icon state: 0: off; 1: on. This parameter is valid only when the charging pile icon mode is 0.'
            },
            iconBmsParallelState: {
                name:
                    'BMS parallel icon state: 0: off; 1: on. This parameter is valid only when the BMS parallel icon mode is 0.'
            },
            iconWifiState: {
                name: 'Wi-Fi icon state: 0: off; 1: on. This parameter is valid only when the Wi-Fi icon mode is 0.'
            },
            iconWindGenMode: {
                name: 'Wind power generation icon mode: 0: normal; 1: blinking'
            },
            iconUsbMode: {
                name: 'USB icon mode: 0: normal; 1: blinking'
            },
            iconBmsErrState: {
                name:
                    'Exclamation mark icon state: 0: off; 1: on. This parameter is valid only when the exclamation mark icon mode is 0.'
            },
            iconBmsErrMode: {
                name: 'Exclamation mark icon mode: 0: normal; 1: blinking'
            },
            iconWindGenState: {
                name:
                    'Wind power generation icon state: 0: off; 1: on. This parameter is valid only when the wind power generation icon mode is 0.'
            },
            iconBtState: {
                name:
                    'Bluetooth icon state: 0: off; 1: on. This parameter is valid only when the Bluetooth icon mode is 0.'
            },
            iconEcoState: {
                name: 'ECO icon state: 0: off; 1: on. This parameter is valid only when the ECO icon mode is 0.'
            },
            iconOverloadMode: {
                name: 'OVERLOAD icon mode: 0: normal; 1: blinking'
            },
            iconInvParallelMode: {
                name: 'Inverter parallel icon mode: 0: normal; 1: blinking'
            },
            iconTransSwMode: {
                name: 'Transfer switch icon mode: 0: normal; 1: blinking'
            },
            iconFactoryMode: {
                name: 'Factory icon mode: 0: normal; 1: blinking'
            },
            iconFanMode: {
                name: 'Fan icon mode: 0: normal; 1: blinking'
            },
            iconSolarPanelState: {
                name:
                    'Solar panel icon state: 0: off; 1: on. This parameter is valid only when the solar panel icon mode is 0.'
            },
            iconWirelessChgMode: {
                name: 'Wireless charging icon mode: 0: normal; 1: blinking'
            },
            iconSocUpsState: {
                name: 'UPS icon state: 0: off; 1: on. This parameter is valid only when the UPS icon mode is 0.'
            },
            iconSolarBracketState: {
                name:
                    'Solar panel tracking bracket icon state: 0: off; 1: on. This parameter is valid only when the solar panel tracking bracket icon mode is 0.'
            },
            iconPackHeaterMode: {
                name: 'Battery heater icon mode: 0: normal; 1: blinking'
            },
            iconCoGasMode: {
                name: 'CO toxic gas icon mode: 0: normal; 1: blinking'
            },
            iconChgStationMode: {
                name: 'Charging pile icon mode: 0: normal; 1: blinking'
            },
            iconAcFreqState: {
                name:
                    'AC icon state: 0: off; 1: 50 Hz; 2: 60 Hz. This parameter is valid only when the AC icon mode is 0.'
            },
            iconGasGenState: {
                name:
                    'Oil-powered generation icon state: 0: off; 1: on. This parameter is valid only when the oil-powered generation icon mode is 0.'
            },
            iconRcMode: {
                name: 'Remote control icon mode: 0: normal; 1: blinking'
            },
            iconWirelessChgState: {
                name:
                    'Wireless charging icon state: 0: off; 1: on. This parameter is valid only when the wireless charging icon mode is 0.'
            },
            iconSolarPanelMode: {
                name: 'Solar panel icon mode: 0: normal; 1: blinking'
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
    delta: {
        bmsMaster: {
            f32ShowSoc: {
                entity: 'number'
            },
            designCap: {
                entity: 'number'
            },
            remainCap: {
                entity: 'number'
            },
            temp: {
                entity: 'number'
            },
            bmsFault: {
                entity: 'string'
            },
            maxCellTemp: {
                entity: 'number'
            },
            vol: {
                entity: 'number'
            },
            soh: {
                entity: 'string'
            },
            sysVer: {
                entity: 'string'
            },
            bqSysStatReg: {
                entity: 'string'
            },
            amp: {
                entity: 'number'
            },
            outputWatts: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
            },
            num: {
                entity: 'string'
            },
            openBmsIdx: {
                entity: 'string'
            },
            type: {
                entity: 'diagnostic'
            },
            minCellTemp: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            maxMosTemp: {
                entity: 'number'
            },
            tagChgAmp: {
                entity: 'number'
            },
            maxCellVol: {
                entity: 'number'
            },
            inputWatts: {
                entity: 'number'
            },
            minMosTemp: {
                entity: 'number'
            },
            remainTime: {
                entity: 'number'
            },
            minCellVol: {
                entity: 'number'
            },
            fullCap: {
                entity: 'number'
            },
            cellId: {
                entity: 'diagnostic'
            },
            cycles: {
                entity: 'number'
            }
        },
        ems: {
            chgCmd: {
                entity: 'diagnostic'
            },
            bmsWarningState: {
                entity: 'diagnostic'
            },
            emsIsNormalFlag: {
                entity: 'diagnostic'
            },
            minDsgSoc: {
                entity: 'level'
            },
            paraVolMax: {
                entity: 'number'
            },
            f32LcdShowSoc: {
                entity: 'number'
            },
            lcdShowSoc: {
                entity: 'number'
            },
            bms0Online: {
                entity: 'diagnostic'
            },
            minOpenOilEbSoc: {
                entity: 'level'
            },
            maxChargeSoc: {
                entity: 'level'
            },
            chgRemainTime: {
                entity: 'number'
            },
            paraVolMin: {
                entity: 'number'
            },
            openBmsIdx: {
                entity: 'string'
            },
            dsgRemainTime: {
                entity: 'number'
            },
            maxAvailableNum: {
                entity: 'string'
            },
            bms1Online: {
                entity: 'diagnostic'
            },
            chgVol: {
                entity: 'number'
            },
            bmsModel: {
                entity: 'string'
            },
            dsgCmd: {
                entity: 'diagnostic'
            },
            openUpsFlag: {
                entity: 'string'
            },
            maxCloseOilEbSoc: {
                entity: 'level'
            },
            chgState: {
                entity: 'diagnostic'
            },
            fanLevel: {
                entity: 'string'
            },
            chgAmp: {
                entity: 'number'
            }
        },
        inv: {
            dcInVol: {
                entity: 'number'
            },
            cfgAcWorkMode: {
                entity: 'switch'
            },
            cfgAcOutVoltage: {
                entity: 'string'
            },
            cfgStandbyMin: {
                entity: 'level'
            },
            dcInAmp: {
                entity: 'number'
            },
            cfgAcOutFreq: {
                entity: 'diagnostic'
            },
            errCode: {
                entity: 'string'
            },
            outputWatts: {
                entity: 'number'
            },
            dcInTemp: {
                entity: 'number'
            },
            invOutFreq: {
                entity: 'number'
            },
            cfgFastChgWatts: {
                entity: 'number'
            },
            chargerType: {
                entity: 'diagnostic'
            },
            acInAmp: {
                entity: 'number'
            },
            fanState: {
                entity: 'diagnostic'
            },
            cfgAcEnabled: {
                entity: 'switch'
            },
            cfgAcXboost: {
                entity: 'switch'
            },
            outTemp: {
                entity: 'number'
            },
            invType: {
                entity: 'string'
            },
            acDipSwitch: {
                entity: 'diagnostic'
            },
            invOutVol: {
                entity: 'number'
            },
            acInVol: {
                entity: 'number'
            },
            inputWatts: {
                entity: 'number'
            },
            acPassByAutoEn: {
                entity: 'diagnostic'
            },
            acInFreq: {
                entity: 'number'
            },
            chgPauseFlag: {
                entity: 'diagnostic'
            },
            dischargeType: {
                entity: 'diagnostic'
            },
            invOutAmp: {
                entity: 'number'
            },
            sysVer: {
                entity: 'string'
            },
            cfgSlowChgWatts: {
                entity: 'level'
            }
        },
        mppt: {
            carOutVol: {
                entity: 'number'
            },
            carState: {
                entity: 'switch'
            },
            faultCode: {
                entity: 'diagnostic'
            },
            xt60ChgType: {
                entity: 'diagnostic'
            },
            dc24vState: {
                entity: 'diagnostic'
            },
            carTemp: {
                entity: 'number'
            },
            outWatts: {
                entity: 'number'
            },
            swVer: {
                entity: 'string'
            },
            carOutAmp: {
                entity: 'number'
            },
            outAmp: {
                entity: 'number'
            },
            dcdc12vWatts: {
                entity: 'number'
            },
            chgPauseFlag: {
                entity: 'diagnostic'
            },
            inWatts: {
                entity: 'number'
            },
            dcdc12vVol: {
                entity: 'number'
            },
            cfgDcChgCurrent: {
                entity: 'level'
            },
            inAmp: {
                entity: 'number'
            },
            inVol: {
                entity: 'number'
            },
            carOutWatts: {
                entity: 'number'
            },
            mpptTemp: {
                entity: 'number'
            },
            outVol: {
                entity: 'number'
            },
            chgType: {
                entity: 'diagnostic'
            },
            dcdc12vAmp: {
                entity: 'number'
            },
            cfgChgType: {
                entity: 'diagnostic'
            },
            dc24vTemp: {
                entity: 'number'
            },
            chgState: {
                entity: 'diagnostic'
            }
        },
        pd: {
            wattsInSum: {
                entity: 'number'
            },
            wifiVer: {
                entity: 'string'
            },
            typec2Watts: {
                entity: 'number'
            },
            usb1Watts: {
                entity: 'number'
            },
            standByMode: {
                entity: 'level'
            },
            chgPowerDc: {
                entity: 'number'
            },
            dsgPowerDc: {
                entity: 'number'
            },
            typccUsedTime: {
                entity: 'number'
            },
            typec2Temp: {
                entity: 'number'
            },
            carUsedTime: {
                entity: 'number'
            },
            typec1Watts: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
            },
            wirelessWatts: {
                entity: 'string'
            },
            wattsOutSum: {
                entity: 'number'
            },
            carState: {
                entity: 'diagnostic'
            },
            invUsedTime: {
                entity: 'number'
            },
            typec1Temp: {
                entity: 'number'
            },
            dsgPowerAc: {
                entity: 'number'
            },
            dcInUsedTime: {
                entity: 'number'
            },
            model: {
                entity: 'string'
            },
            chgPowerAc: {
                entity: 'number'
            },
            beepState: {
                entity: 'switch'
            },
            wifiAutoRcvy: {
                entity: 'diagnostic'
            },
            remainTime: {
                entity: 'number'
            },
            chgSunPower: {
                entity: 'number'
            },
            carTemp: {
                entity: 'number'
            },
            lcdBrightness: {
                entity: 'icon'
            },
            qcUsb2Watts: {
                entity: 'number'
            },
            lcdOffSec: {
                entity: 'level'
            },
            sysVer: {
                entity: 'string'
            },
            sysChgDsgState: {
                entity: 'diagnostic'
            },
            qcUsb1Watts: {
                entity: 'number'
            },
            kit0: {
                entity: 'icon'
            },
            kit1: {
                entity: 'icon'
            },
            kit2: {
                entity: 'icon'
            },
            usbqcUsedTime: {
                entity: 'number'
            },
            dcOutState: {
                entity: 'switch'
            },
            usbUsedTime: {
                entity: 'number'
            },
            mpptUsedTime: {
                entity: 'number'
            },
            wifiRssi: {
                entity: 'string'
            },
            errCode: {
                entity: 'diagnostic'
            },
            carWatts: {
                entity: 'number'
            },
            usb2Watts: {
                entity: 'number'
            },
            iconFanState: {
                entity: 'icon'
            },
            iconUsbState: {
                entity: 'icon'
            },
            iconBtMode: {
                entity: 'icon'
            },
            iconAcFreqMode: {
                entity: 'icon'
            },
            iconLowTempState: {
                entity: 'icon'
            },
            iconPackHeaterState: {
                entity: 'icon'
            },
            iconRechgTimeState: {
                entity: 'icon'
            },
            iconTransSwState: {
                entity: 'icon'
            },
            iconTypecMode: {
                entity: 'icon'
            },
            iconTypecState: {
                entity: 'icon'
            },
            iconCarMode: {
                entity: 'icon'
            },
            iconCoGasState: {
                entity: 'icon'
            },
            iconRcState: {
                entity: 'icon'
            },
            iconHiTempState: {
                entity: 'icon'
            },
            iconHiTempMode: {
                entity: 'icon'
            },
            iconEcoMode: {
                entity: 'icon'
            },
            iconCarState: {
                entity: 'icon'
            },
            iconSocUpsMode: {
                entity: 'icon'
            },
            iconSolarBracketMode: {
                entity: 'icon'
            },
            iconLowTempMode: {
                entity: 'icon'
            },
            iconGasGenMode: {
                entity: 'icon'
            },
            iconBmsParallelMode: {
                entity: 'icon'
            },
            iconInvParallelState: {
                entity: 'icon'
            },
            iconWifiMode: {
                entity: 'icon'
            },
            iconOverloadState: {
                entity: 'icon'
            },
            iconFactoryState: {
                entity: 'icon'
            },
            iconChgStationState: {
                entity: 'icon'
            },
            iconBmsParallelState: {
                entity: 'icon'
            },
            iconWifiState: {
                entity: 'icon'
            },
            iconWindGenMode: {
                entity: 'icon'
            },
            iconUsbMode: {
                entity: 'icon'
            },
            iconBmsErrState: {
                entity: 'icon'
            },
            iconBmsErrMode: {
                entity: 'icon'
            },
            iconWindGenState: {
                entity: 'icon'
            },
            iconBtState: {
                entity: 'icon'
            },
            iconEcoState: {
                entity: 'icon'
            },
            iconOverloadMode: {
                entity: 'icon'
            },
            iconRechgTimeMode: {
                entity: 'icon'
            },
            iconInvParallelMode: {
                entity: 'icon'
            },
            iconTransSwMode: {
                entity: 'icon'
            },
            iconFactoryMode: {
                entity: 'icon'
            },
            iconFanMode: {
                entity: 'icon'
            },
            iconSolarPanelState: {
                entity: 'icon'
            },
            iconWirelessChgMode: {
                entity: 'icon'
            },
            iconSocUpsState: {
                entity: 'icon'
            },
            iconSolarBracketState: {
                entity: 'icon'
            },
            iconPackHeaterMode: {
                entity: 'icon'
            },
            iconCoGasMode: {
                entity: 'icon'
            },
            iconChgStationMode: {
                entity: 'icon'
            },
            iconAcFreqState: {
                entity: 'icon'
            },
            iconGasGenState: {
                entity: 'icon'
            },
            iconRcMode: {
                entity: 'icon'
            },
            iconWirelessChgState: {
                entity: 'icon'
            },
            iconSolarPanelMode: {
                entity: 'icon'
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
            msgCount: { entity: 'number' },
            status: {
                entity: 'diagnostic'
            }
        }
    }
};
const deviceRanges = {
    delta: {
        inv: {
            number: {
                cfgFastChgWatts: {
                    min: 200,
                    max: 1200
                }
            },
            level: {
                cfgSlowChgWatts: {
                    min: 200,
                    max: 700
                }
            }
        },
        mppt: {
            level: {
                cfgDcChgCurrent: {
                    min: 4,
                    max: 8
                }
            },
            number: {
                carOutVol: {
                    max: 15
                },
                inVol: {
                    max: 65
                }
            }
        }
    }
};

const deviceCmd = {
    delta: {
        ems: {
            maxChargeSoc: {
                valName: 'maxChgSoc',
                moduleType: 2,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '38461351',
                    lang: 'en-us',
                    params: {
                        id: 49,
                        maxChgSoc: 95
                    },
                    version: '1.0'
                }
            },
            minDsgSoc: {
                valName: 'minDsgSoc',
                moduleType: 2,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '38454960',
                    lang: 'en-us',
                    params: {
                        id: 51,
                        minDsgSoc: 25
                    },
                    version: '1.0'
                }
            },
            maxCloseOilEbSoc: {
                valName: 'closeOilSoc',
                moduleType: 2,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '878673259',
                    lang: 'en-us',
                    params: {
                        id: 53,
                        closeOilSoc: 84
                    },
                    version: '1.0'
                }
            },
            minOpenOilEbSoc: {
                valName: 'openOilSoc',
                moduleType: 2,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '878666957',
                    lang: 'en-us',
                    params: {
                        id: 52,
                        openOilSoc: 0
                    },
                    version: '1.0'
                }
            }
        },
        inv: {
            cfgAcEnabled: {
                valName: 'enabled',
                moduleType: 0,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '554272649',
                    lang: 'en-us',
                    params: {
                        id: 66,
                        enabled: 1
                    },
                    version: '1.0'
                }
            },
            cfgAcWorkMode: {},
            cfgAcXboost: {
                valName: 'xboost',
                moduleType: 0,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '602507362',
                    lang: 'en-us',
                    params: {
                        id: 66,
                        xboost: 1
                    },
                    version: '1.0'
                }
            },
            cfgFastChgWatts: {},
            cfgSlowChgWatts: {
                valName: 'slowChgPower',
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '747329085',
                    lang: 'en-us',
                    params: {
                        id: 69,
                        slowChgPower: 300
                    },
                    version: '1.0'
                }
            },
            cfgStandbyMin: {
                valName: 'standByMins',
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '153750799',
                    lang: 'en-us',
                    params: {
                        id: 153,
                        standByMins: 360
                    },
                    version: '1.0'
                }
            }
        },
        mppt: {
            carState: {
                valName: 'enabled',
                moduleType: 0,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '639503104',
                    lang: 'en-us',
                    params: {
                        id: 81,
                        enabled: 1
                    },
                    version: '1.0'
                }
            },
            cfgDcChgCurrent: {
                valName: 'currMa',
                moduleType: 0,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '787426012',
                    lang: 'en-us',
                    params: {
                        id: 71,
                        currMa: 6000
                    },
                    version: '1.0'
                }
            }
        },
        pd: {
            beepState: {
                valName: 'enabled',
                moduleType: 5,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '834553333',
                    lang: 'en-us',
                    params: {
                        id: 38,
                        enabled: 1
                    },
                    version: '1.0'
                }
            },
            dcOutState: {
                valName: 'enabled',
                moduleType: 0,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '689699572',
                    lang: 'en-us',
                    params: {
                        id: 34,
                        enabled: 1
                    },
                    version: '1.0'
                }
            },
            lcdOffSec: {
                valName: 'lcdTime',
                moduleType: 0,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '93980337',
                    lang: 'en-us',
                    params: {
                        id: 39,
                        lcdTime: 1800
                    },
                    version: '1.0'
                }
            },
            standByMode: {
                valName: 'standByMode',
                moduleType: 0,
                msg: {
                    from: 'Android',
                    operateType: 'TCP',
                    id: '119032574',
                    lang: 'en-us',
                    params: {
                        id: 33,
                        standByMode: 360
                    },
                    version: '1.0'
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
            },
            getAllTaskCfg: {
                msg: {
                    from: 'iOS',
                    operateType: 'getAllTaskCfg',
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