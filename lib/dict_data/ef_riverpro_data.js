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
            fullCap: {
                min: 0,
                max: 80000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Full capacity',
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
            remainCap: {
                min: 0,
                max: 80000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Remaining capacity',
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
            tagChgVol: {
                min: 0,
                max: 100,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Target charging voltage',
                entity_category: 'diagnostic',
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
            openBmsIdx: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Battery pack enable state'
            },
            sysVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'System version'
            },
            bqSysStatReq: {
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
            }
        }
    },
    inv: {
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
        number: {
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
        }
    },
    pd: {
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
                max: 660,
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
            usb3Watts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Common usb3 output power',
                role: 'value'
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
            },
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
            }
        },
        string: {
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
            bmsSlave: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS slave'
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
    riverpro: {
        bmsMaster: {
            amp: {
                entity: 'number'
            },
            bmsFault: {
                entity: 'string'
            },
            cycles: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            fullCap: {
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
            openBmsIdx: {
                entity: 'string'
            },
            remainCap: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
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
            vol: {
                entity: 'number'
            },
            maxChargeSoc: {
                entity: 'level'
            },
            tagChgVol: {
                entity: 'number'
            },
            bqSysStatReq: {
                entity: 'string'
            }
        },
        inv: {
            cfgAcEnabled: {
                entity: 'switch'
            },
            cfgAcOutFreq: {
                entity: 'diagnostic'
            },
            cfgAcOutVoltage: {
                entity: 'string'
            },
            cfgAcXboost: {
                entity: 'switch'
            },
            cfgStandbyMin: {
                entity: 'level'
            },
            chargerType: {
                entity: 'diagnostic'
            },
            dcInAmp: {
                entity: 'number'
            },
            dcInVol: {
                entity: 'number'
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
            cfgAcChgModeFlg: {
                entity: 'diagnostic'
            },
            cfgFanMode: {
                entity: 'diagnostic'
            },
            inTemp: {
                entity: 'number'
            },
            invInAmp: {
                entity: 'number'
            },
            invInFreq: {
                entity: 'number'
            },
            invInVol: {
                entity: 'number'
            }
        },
        pd: {
            beepState: {
                entity: 'switch'
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
            dsgPowerAC: {
                entity: 'number'
            },
            dsgPowerDC: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            invUsedTime: {
                entity: 'number'
            },
            model: {
                entity: 'string'
            },
            mpptUsedTime: {
                entity: 'number'
            },
            remainTime: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
            },
            standByMode: {
                entity: 'level'
            },
            sysVer: {
                entity: 'string'
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
            wattsInSum: {
                entity: 'number'
            },
            wattsOutSum: {
                entity: 'number'
            },
            bmsSlave: {
                entity: 'string'
            },
            carSwitch: {
                entity: 'switch'
            },
            ledState: {
                entity: 'diagnostic'
            },
            ledWatts: {
                entity: 'number'
            },
            typecTemp: {
                entity: 'number'
            },
            typecWatts: {
                entity: 'number'
            },
            usb3Watts: {
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
    riverpro: {
        pd: {
            number: {
                wattsInSum: {
                    max: 660
                }
            }
        }
    }
};
const deviceCmd = {
    riverpro: {
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
        bmsMaster: {
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
