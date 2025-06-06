const deviceStates = {
    pd: {
        number: {
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
            typecChaWatts: {
                min: 0,
                max: 500,
                unit_of_measurement: 'W',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'PD? charging power',
                role: 'value'
            },
            acAutoOutPause: {
                min: 0,
                max: 255,
                unit_of_measurement: 's (0-255?)',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                name: 'AC Auto out Pause',
                entity_category: 'diagnostic',
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
        string: {
            wifiVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wi-Fi version'
            },
            model: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Product model'
            },
            brightLevel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'LCD brightness level: 0-3'
            },
            wifiRssi: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wi-Fi signal intensity'
            },
            wireWatts: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wireless charging output power (W)'
            },
            sysVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'System version'
            },
            hysteresisAdd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Hysteresis SOC'
            },
            relaySwitchCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Number of relay disconnections'
            }
        },
        diagnostic: {
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
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Global error code',
                errCode: {
                    '0': 'OK?'
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
        level: {
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
            }
        },
        icon: {
            icoBytes: {}
        }
    },
    bmsMaster: {
        string: {
            sysVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'System version'
            },
            soh: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Health status'
            },
            bqSysStatReg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BQ hardware protection register'
            },
            openBmsIdx: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Battery pack enable state'
            },
            num: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS number'
            },
            bmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'BMS permanent fault'
            }
        },
        number: {
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
            cycles: {
                min: 0,
                max: 6000,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'Number of cycles',
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
            remainCap: {
                min: 0,
                max: 80000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Remaining capacity',
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
            fullCap: {
                min: 0,
                max: 80000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                name: 'Full capacity',
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
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Global error code',
                errCode: {
                    '0': 'OK?'
                }
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
        diagnostic: {
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
            cfgAcOutVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Inverter output voltage (V): 0xffffffff: ignored'
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
            scrStandbyMin: {
                min: 0,
                max: 720,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'SCR standby time /min 0 Never standby 720 Default value ?'
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
            }
        },
        diagnostic: {
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
            }
        },
        icon: {
            res: {}
        }
    },
    ems: {
        diagnostic: {
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
        number: {
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
            }
        },
        string: {
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
            openBmsIdx: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Open BMS index'
            },
            maxAvailNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Maximum available quantity'
            },
            fanLevel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Fan level'
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
    river2pro: {
        pd: {
            typec1Temp: {
                entity: 'number'
            },
            qcUsb1Watts: {
                entity: 'number'
            },
            wattsInSum: {
                entity: 'number'
            },
            dcInUsedTime: {
                entity: 'number'
            },
            wifiVer: {
                entity: 'string'
            },
            ext3p8Port: {
                entity: 'diagnostic'
            },
            dsgPowerDC: {
                entity: 'number'
            },
            chgPowerDC: {
                entity: 'number'
            },
            model: {
                entity: 'string'
            },
            wifiAutoRcvy: {
                entity: 'diagnostic'
            },
            standbyMin: {
                entity: 'level'
            },
            beepMode: {
                entity: 'diagnostic'
            },
            remainTime: {
                entity: 'number'
            },
            typecUsedTime: {
                entity: 'number'
            },
            typec2Watts: {
                entity: 'number'
            },
            ext4p8Port: {
                entity: 'diagnostic'
            },
            brightLevel: {
                entity: 'string'
            },
            usbqcUsedTime: {
                entity: 'number'
            },
            dcOutState: {
                entity: 'switch'
            },
            chgSunPower: {
                entity: 'number'
            },
            wattsOutSum: {
                entity: 'number'
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
            icoBytes: {
                entity: 'icon'
            },
            usb1Watts: {
                entity: 'number'
            },
            dsgPowerAC: {
                entity: 'number'
            },
            qcUsb2Watts: {
                entity: 'number'
            },
            wifiRssi: {
                entity: 'string'
            },
            wireWatts: {
                entity: 'string'
            },
            chgPowerAC: {
                entity: 'number'
            },
            lcdOffSec: {
                entity: 'level'
            },
            extRj45Port: {
                entity: 'diagnostic'
            },
            errCode: {
                entity: 'diagnostic'
            },
            sysVer: {
                entity: 'string'
            },
            carWatts: {
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
            chgDsgState: {
                entity: 'diagnostic'
            },
            usb2Watts: {
                entity: 'number'
            },
            soc: {
                entity: 'number'
            },
            carState: {
                entity: 'diagnostic'
            },
            invUsedTime: {
                entity: 'number'
            },
            typecChaWatts: {
                entity: 'number'
            },
            hysteresisAdd: {
                entity: 'string'
            },
            relaySwitchCnt: {
                entity: 'string'
            },
            acAutoOutConfig: {
                entity: 'switch'
            },
            acAutoOutPause: {
                entity: 'number'
            },
            minAcoutSoc: {
                entity: 'number'
            },
            watchIsConfig: {
                entity: 'diagnostic'
            },
            bpPowerSoc: {
                entity: 'level'
            }
        },
        bmsMaster: {
            sysVer: {
                entity: 'string'
            },
            minCellTemp: {
                entity: 'number'
            },
            designCap: {
                entity: 'number'
            },
            temp: {
                entity: 'number'
            },
            minCellVol: {
                entity: 'number'
            },
            cycles: {
                entity: 'number'
            },
            f32ShowSoc: {
                entity: 'number'
            },
            outputWatts: {
                entity: 'number'
            },
            maxCellVol: {
                entity: 'number'
            },
            type: {
                entity: 'diagnostic'
            },
            soh: {
                entity: 'string'
            },
            maxCellTemp: {
                entity: 'number'
            },
            remainCap: {
                entity: 'number'
            },
            cellId: {
                entity: 'diagnostic'
            },
            minMosTemp: {
                entity: 'number'
            },
            vol: {
                entity: 'number'
            },
            remainTime: {
                entity: 'number'
            },
            fullCap: {
                entity: 'number'
            },
            bqSysStatReg: {
                entity: 'string'
            },
            openBmsIdx: {
                entity: 'string'
            },
            amp: {
                entity: 'number'
            },
            num: {
                entity: 'string'
            },
            bmsFault: {
                entity: 'string'
            },
            soc: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            inputWatts: {
                entity: 'number'
            },
            tagChgAmp: {
                entity: 'number'
            },
            maxMosTemp: {
                entity: 'number'
            }
        },
        inv: {
            dcInVol: {
                entity: 'number'
            },
            cfgAcWorkMode: {
                entity: 'diagnostic'
            },
            SlowChgWatts: {
                entity: 'number'
            },
            dcInAmp: {
                entity: 'number'
            },
            cfgAcOutFreq: {
                entity: 'diagnostic'
            },
            outputWatts: {
                entity: 'number'
            },
            errCode: {
                entity: 'string'
            },
            dcInTemp: {
                entity: 'number'
            },
            invOutFreq: {
                entity: 'number'
            },
            chargerType: {
                entity: 'diagnostic'
            },
            reserved: {
                entity: 'icon'
            },
            acInAmp: {
                entity: 'number'
            },
            fanState: {
                entity: 'diagnostic'
            },
            cfgAcXboost: {
                entity: 'diagnostic'
            },
            cfgAcEnabled: {
                entity: 'diagnostic'
            },
            outTemp: {
                entity: 'number'
            },
            invType: {
                entity: 'string'
            },
            cfgAcOutVol: {
                entity: 'string'
            },
            acDipSwitch: {
                entity: 'diagnostic'
            },
            acInVol: {
                entity: 'number'
            },
            invOutVol: {
                entity: 'number'
            },
            FastChgWatts: {
                entity: 'number'
            },
            inputWatts: {
                entity: 'number'
            },
            standbyMins: {
                entity: 'number'
            },
            chgPauseFlag: {
                entity: 'diagnostic'
            },
            acInFreq: {
                entity: 'number'
            },
            dischargeType: {
                entity: 'diagnostic'
            },
            invOutAmp: {
                entity: 'number'
            },
            sysVer: {
                entity: 'string'
            }
        },
        mppt: {
            carOutVol: {
                entity: 'number'
            },
            carState: {
                entity: 'switch'
            },
            dischargeType: {
                entity: 'diagnostic'
            },
            faultCode: {
                entity: 'diagnostic'
            },
            dc24vState: {
                entity: 'diagnostic'
            },
            cfgAcXboost: {
                entity: 'switch'
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
            x60ChgType: {
                entity: 'diagnostic'
            },
            carOutAmp: {
                entity: 'number'
            },
            outAmp: {
                entity: 'number'
            },
            chgPauseFlag: {
                entity: 'switch'
            },
            dcdc12vWatts: {
                entity: 'number'
            },
            acStandbyMins: {
                entity: 'level'
            },
            powStandbyMin: {
                entity: 'number'
            },
            inWatts: {
                entity: 'number'
            },
            dcdc12vVol: {
                entity: 'number'
            },
            inAmp: {
                entity: 'number'
            },
            scrStandbyMin: {
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
            cfgAcEnabled: {
                entity: 'switch'
            },
            chgType: {
                entity: 'diagnostic'
            },
            res: {
                entity: 'icon'
            },
            dcdc12vAmp: {
                entity: 'number'
            },
            beepState: {
                entity: 'switch'
            },
            cfgAcOutVol: {
                entity: 'string'
            },
            cfgChgType: {
                entity: 'diagnostic'
            },
            dc24vTemp: {
                entity: 'number'
            },
            carStandbyMin: {
                entity: 'level'
            },
            dcChgCurrent: {
                entity: 'level'
            },
            chgState: {
                entity: 'diagnostic'
            },
            cfgChgWatts: {
                entity: 'level'
            },
            cfgAcOutFreq: {
                entity: 'diagnostic'
            }
        },
        ems: {
            dsgCmd: {
                entity: 'diagnostic'
            },
            chgVol: {
                entity: 'number'
            },
            chgRemainTime: {
                entity: 'number'
            },
            f32LcdShowSoc: {
                entity: 'number'
            },
            maxChargeSoc: {
                entity: 'level'
            },
            paraVolMax: {
                entity: 'number'
            },
            lcdShowSoc: {
                entity: 'number'
            },
            bmsModel: {
                entity: 'string'
            },
            chgAmp: {
                entity: 'number'
            },
            chgState: {
                entity: 'diagnostic'
            },
            openUpsFlag: {
                entity: 'string'
            },
            openBmsIdx: {
                entity: 'string'
            },
            minDsgSoc: {
                entity: 'level'
            },
            paraVolMin: {
                entity: 'number'
            },
            minOpenOilEb: {
                entity: 'level'
            },
            chgCmd: {
                entity: 'diagnostic'
            },
            maxAvailNum: {
                entity: 'string'
            },
            maxCloseOilEb: {
                entity: 'level'
            },
            emsIsNormalFlag: {
                entity: 'diagnostic'
            },
            bmsIsConnt: {
                entity: 'array'
            },
            bmsWarState: {
                entity: 'diagnostic'
            },
            dsgRemainTime: {
                entity: 'number'
            },
            fanLevel: {
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
    river2pro: {
        mppt: {
            level: {
                cfgChgWatts: {
                    min: 100,
                    max: 940
                },
                acStandbyMins: {
                    max: 720
                }
            },
            number: {
                inVol: {
                    mult: 0.001,
                    max: 55
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
                    max: 230
                },
                outWatts: {
                    mult: 1
                }
            }
        }
    }
};
const deviceCmd = {
    river2pro: {
        pd: {
            dcOutState: {
                valName: 'enabled',
                moduleType: 1,
                operateType: 'dcOutCfg',
                params: {
                    enabled: 1
                }
            },
            standbyMin: {},
            lcdOffSec: {
                valName: 'delayOff',
                moduleType: 1,
                operateType: 'lcdCfg',
                params: {
                    brighLevel: 255,
                    delayOff: 300
                }
            }
        },
        mppt: {
            carState: {
                valName: 'enabled',
                moduleType: 5,
                operateType: 'mpptCar',
                params: {
                    enabled: 1
                }
            },
            beepState: {
                valName: 'enabled',
                moduleType: 5,
                operateType: 'quietMode',
                params: {
                    enabled: 1
                }
            },
            cfgAcXboost: {
                valName: 'xboost',
                moduleType: 5,
                operateType: 'acOutCfg',
                params: {
                    enabled: 255,
                    out_freq: 255,
                    out_voltage: 4294967295,
                    xboost: 1
                }
            },
            cfgAcEnabled: {
                valName: 'enabled',
                moduleType: 5,
                operateType: 'acOutCfg',
                params: {
                    enabled: 1,
                    out_freq: 255,
                    out_voltage: 4294967295,
                    xboost: 255
                }
            },
            chgPauseFlag: {
                valName: 'chgPauseFlag',
                moduleType: 5,
                operateType: 'acChgCfg',
                params: {
                    chgWatts: 100,
                    chgPauseFlag: 255
                }
            },
            acStandbyMins: {
                valName: 'standbyMins',
                moduleType: 5,
                operateType: 'acStandby',
                params: {
                    standbyMins: 360
                }
            },
            powStandbyMin: {
                valName: 'standbyMins',
                moduleType: 5,
                operateType: 'standby',
                params: {
                    standbyMins: 360
                }
            },
            scrStandbyMin: {
                valName: 'delayOff',
                moduleType: 5,
                operateType: 'lcdCfg',
                params: {
                    delayOff: 300,
                    brightLevel: 255
                }
            },
            carStandbyMin: {
                valName: 'standbyMins',
                moduleType: 5,
                operateType: 'standbyTime',
                params: {
                    standbyMins: 720
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
            cfgChgWatts: {
                valName: 'chgWatts',
                moduleType: 5,
                operateType: 'acChgCfg',
                params: {
                    chgWatts: 100,
                    chgPauseFlag: 255
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
                    minDsgSoc: 5
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
            },
            setTimeRTC: {
                valName: '',
                moduleType: 5,
                operateType: 'setRtcTime',
                params: {
                    sec: 39,
                    min: 39,
                    week: 4,
                    month: 1,
                    hour: 10,
                    year: 2024,
                    day: 4
                }
            }
        },
        unknown: {
            chaType: {
                from: 'Android',
                id: '476281004',
                moduleType: 5,
                operateType: 'chaType',
                params: {
                    chaType: 1
                },
                version: '1.0'
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

//unknown??