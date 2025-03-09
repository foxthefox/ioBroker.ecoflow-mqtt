const deviceStates = {
    emeters: {
        number: {
            currentL1: {
                min: 0,
                max: 50,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                name: 'Current L1',
                role: 'value'
            },
            currentL2: {
                min: 0,
                max: 50,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                name: 'Current L2',
                role: 'value'
            },
            currentL3: {
                min: 0,
                max: 50,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                name: 'Current L3',
                role: 'value'
            },
            voltageL1: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Voltage L1',
                role: 'value'
            },
            voltageL2: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Voltage L2',
                role: 'value'
            },
            voltageL3: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                name: 'Voltage L3',
                role: 'value'
            },
            powerL1: {
                min: 0,
                max: 23000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Power L1',
                role: 'value'
            },
            powerL2: {
                min: 0,
                max: 23000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Power L2',
                role: 'value'
            },
            powerL3: {
                min: 0,
                max: 23000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Power L3',
                role: 'value'
            },
            pfL1: {
                min: 0,
                max: 1,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power_factor',
                name: 'Powerfactor L1',
                role: 'value',
                subrole: 'none'
            },
            pfL2: {
                min: 0,
                max: 1,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power_factor',
                name: 'Powerfactor L2',
                role: 'value',
                subrole: 'none'
            },
            pfL3: {
                min: 0,
                max: 1,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power_factor',
                name: 'Powerfactor L3',
                role: 'value',
                subrole: 'none'
            },
            totalL1: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy L1',
                state_class: 'total_increasing',
                role: 'value'
            },
            totalL2: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy L2',
                state_class: 'total_increasing',
                role: 'value'
            },
            totalL3: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy L3',
                state_class: 'total_increasing',
                role: 'value'
            },
            total_returnedL1: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy returned L2',
                state_class: 'total_increasing',
                role: 'value'
            },
            total_returnedL2: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy returned L2',
                state_class: 'total_increasing',
                role: 'value'
            },
            total_returnedL3: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Energy returned L3',
                state_class: 'total_increasing',
                role: 'value'
            },
            total_power: {
                min: 0,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Total power',
                role: 'value'
            }
        }
    },
    communication: {
        diagnostic: {
            cloud_connected: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'cloud connected',
                role: 'info',
                cloud_connected: {
                    false: 'off',
                    true: 'on'
                }
            },
            cloud_enabled: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'cloud enabled',
                role: 'info',
                cloud_enabled: {
                    false: 'off',
                    true: 'on'
                }
            },
            mqtt_connected: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mqtt connected',
                role: 'info',
                mqtt_connected: {
                    false: 'off',
                    true: 'on'
                }
            },
            wifi_sta_connected: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wifi_sta connected',
                role: 'info',
                wifi_sta_connected: {
                    false: 'off',
                    true: 'on'
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
    shelly3em: {
        emeters: {
            currentL1: {
                entity: 'number'
            },
            currentL2: {
                entity: 'number'
            },
            currentL3: {
                entity: 'number'
            },
            voltageL1: {
                entity: 'number'
            },
            voltageL2: {
                entity: 'number'
            },
            voltageL3: {
                entity: 'number'
            },
            powerL1: {
                entity: 'number'
            },
            powerL2: {
                entity: 'number'
            },
            powerL3: {
                entity: 'number'
            },
            pfL1: {
                entity: 'number'
            },
            pfL2: {
                entity: 'number'
            },
            pfL3: {
                entity: 'number'
            },
            totalL1: {
                entity: 'number'
            },
            totalL2: {
                entity: 'number'
            },
            totalL3: {
                entity: 'number'
            },
            total_returnedL1: {
                entity: 'number'
            },
            total_returnedL2: {
                entity: 'number'
            },
            total_returnedL3: {
                entity: 'number'
            },
            total_power: {
                entity: 'number'
            }
        },
        communication: {
            cloud_connected: {
                entity: 'diagnostic'
            },
            cloud_enabled: {
                entity: 'diagnostic'
            },
            mqtt_connected: {
                entity: 'diagnostic'
            },
            wifi_sta_connected: {
                entity: 'diagnostic'
            }
        },
        action: {
            latestQuotas: {
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
    shelly3em: {
        emeters: {
            number: {
                currentL1: {
                    max: 100
                },
                currentL2: {
                    max: 100
                },
                currentL3: {
                    max: 100
                }
            }
        }
    }
};
const deviceCmd = {
    shelly3em: {
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