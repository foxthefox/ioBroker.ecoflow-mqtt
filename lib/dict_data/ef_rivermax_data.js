const deviceStates = {
    inv: {
        diagnostic: {
            cfgFanMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Fan mode',
                cfgFanMode: {
                    '0': 'disabled',
                    '1': 'Level 1',
                    '2': 'Level 2',
                    '3': 'Level 3'
                }
            },
            cfgAcChgModeFlg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'AC charging mode flag',
                cfgAcChgModeFlg: {
                    '0': '?',
                    '1': '?'
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
            inTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                name: 'Inverter temperature',
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
            invInAmp: {
                min: 0,
                max: 13,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                name: 'Inverter input current',
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
            invInFreq: {
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
            },
            invInVol: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Inverter input voltage',
                role: 'value'
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
        }
    },
    bmsMaster: {
        number: {
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
            cycles: {
                min: 0,
                max: 6000,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'Number of cycles',
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
            fullCap: {
                min: 0,
                max: 80000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Full capacity',
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
            }
        },
        string: {
            bmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS permanent fault'
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
            }
        },
        diagnostic: {
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
            ambientLightColor: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Ambient Light Color'
            },
            ambientLightBrightness: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Ambient Light Brightness'
            },
            ambientLightAnimate: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Ambient Light Animate'
            },
            ambientLightEnabled: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Ambient Light Enabled'
            }
        }
    },
    pd: {
        number: {
            wattsInSum: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Total input power',
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
            usb3Watts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Common usb3 output power',
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
            typecWatts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Type-C output power',
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
            ledWatts: {
                min: 0,
                max: 100,
                unit_of_measurement: 'W',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'LED output power',
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
            typecTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                name: 'Type-C temperature',
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
            }
        },
        string: {
            model: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Product model'
            },
            bmsSlave: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS slave'
            },
            sysVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'System version'
            }
        },
        diagnostic: {
            ledState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'LED state',
                payload_off: 'off',
                payload_on: 'on',
                ledState: {
                    '0': 'off?',
                    '1': 'on?'
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
            carSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'switch',
                name: 'Car charger switch',
                payload_off: 'off',
                payload_on: 'on',
                carSwitch: {
                    '0': 'off?',
                    '1': 'on?'
                }
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
    rivermax: {
        inv: {
            cfgFanMode: {
                entity: 'diagnostic'
            },
            dcInVol: {
                entity: 'number'
            },
            cfgAcOutVoltage: {
                entity: 'string'
            },
            cfgAcChgModeFlg: {
                entity: 'diagnostic'
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
            invOutFreq: {
                entity: 'number'
            },
            chargerType: {
                entity: 'diagnostic'
            },
            fanState: {
                entity: 'diagnostic'
            },
            inTemp: {
                entity: 'number'
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
            invOutVol: {
                entity: 'number'
            },
            invInAmp: {
                entity: 'number'
            },
            inputWatts: {
                entity: 'number'
            },
            invInFreq: {
                entity: 'number'
            },
            invOutAmp: {
                entity: 'number'
            },
            invInVol: {
                entity: 'number'
            },
            sysVer: {
                entity: 'string'
            }
        },
        bmsMaster: {
            maxCellTemp: {
                entity: 'number'
            },
            bmsFault: {
                entity: 'string'
            },
            sysVer: {
                entity: 'string'
            },
            temp: {
                entity: 'number'
            },
            cycles: {
                entity: 'number'
            },
            remainCap: {
                entity: 'number'
            },
            vol: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            minCellVol: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
            },
            bqSysStatReg: {
                entity: 'string'
            },
            amp: {
                entity: 'number'
            },
            minCellTemp: {
                entity: 'number'
            },
            minMosTemp: {
                entity: 'number'
            },
            maxCellVol: {
                entity: 'number'
            },
            fullCap: {
                entity: 'number'
            },
            maxMosTemp: {
                entity: 'number'
            },
            ambientLightColor: {
                entity: 'icon'
            },
            ambientLightBrightness: {
                entity: 'icon'
            },
            ambientLightAnimate: {
                entity: 'icon'
            },
            ambientLightEnabled: {
                entity: 'icon'
            }
        },
        pd: {
            wattsInSum: {
                entity: 'number'
            },
            dcInUsedTime: {
                entity: 'number'
            },
            chgPowerDC: {
                entity: 'number'
            },
            dsgPowerDC: {
                entity: 'number'
            },
            model: {
                entity: 'string'
            },
            ledState: {
                entity: 'diagnostic'
            },
            beepState: {
                entity: 'switch'
            },
            remainTime: {
                entity: 'number'
            },
            usb3Watts: {
                entity: 'number'
            },
            typecUsedTime: {
                entity: 'number'
            },
            typecWatts: {
                entity: 'number'
            },
            usbqcUsedTime: {
                entity: 'number'
            },
            chgSunPower: {
                entity: 'number'
            },
            wattsOutSum: {
                entity: 'number'
            },
            carSwitch: {
                entity: 'switch'
            },
            carTemp: {
                entity: 'number'
            },
            usbUsedTime: {
                entity: 'number'
            },
            mpptUsedTime: {
                entity: 'number'
            },
            ledWatts: {
                entity: 'number'
            },
            usb1Watts: {
                entity: 'number'
            },
            standByMode: {
                entity: 'level'
            },
            dsgPowerAC: {
                entity: 'number'
            },
            chgPowerAC: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            bmsSlave: {
                entity: 'string'
            },
            sysVer: {
                entity: 'string'
            },
            carWatts: {
                entity: 'number'
            },
            carUsedTime: {
                entity: 'number'
            },
            usb2Watts: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
            },
            typecTemp: {
                entity: 'number'
            },
            invUsedTime: {
                entity: 'number'
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
    rivermax: {
        pd: {
            number: {
                wattsInSum: {
                    max: 500
                }
            }
        }
    }
};
const deviceCmd = {
    rivermax: {
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
        pd: {
            beepState: {
                valName: 'enabled',
                moduleType: 0,
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
            },
            carSwitch: {
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
