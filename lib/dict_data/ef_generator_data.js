const deviceStates = {
    oil: {
        number: {
            oilVal: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Fuel tank'
            },
            acPower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'AC power'
            },
            totalPower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Total power'
            },
            remainTime: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Remaining time'
            },
            dcPower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'DC power'
            },
            oilMaxOutPower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Oil max power'
            },
            motorUseTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Working duration of generator'
            }
        },
        diagnostic: {
            acState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'AC state',
                role: 'info',
                acState: {
                    '0': 'off',
                    '1': 'on'
                }
            },
            sysMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'System Mode',
                role: 'info',
                sysMode: {
                    '0': 'eco?',
                    '1': 'full power?'
                }
            },
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Error Code',
                role: 'info',
                errCode: {
                    '0': 'OK?'
                }
            },
            dcOutState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'DC out state',
                role: 'info',
                dcOutState: {
                    '0': 'off',
                    '1': 'on'
                }
            },
            motorState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Motor state',
                role: 'info',
                motorState: {
                    '0': 'off',
                    '1': 'on'
                }
            }
        },
        string: {
            num: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'num',
                role: 'info'
            },
            type: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'type',
                role: 'info'
            },
            version: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'version',
                role: 'info'
            },
            ceelId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ceelId',
                role: 'info'
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
    generator: {
        oil: {
            oilVal: {
                entity: 'number'
            },
            acPower: {
                entity: 'number'
            },
            acState: {
                entity: 'diagnostic'
            },
            num: {
                entity: 'string'
            },
            sysMode: {
                entity: 'diagnostic'
            },
            type: {
                entity: 'string'
            },
            totalPower: {
                entity: 'number'
            },
            version: {
                entity: 'string'
            },
            remainTime: {
                entity: 'number'
            },
            dcPower: {
                entity: 'number'
            },
            errCode: {
                entity: 'diagnostic'
            },
            ceelId: {
                entity: 'string'
            },
            dcOutState: {
                entity: 'diagnostic'
            },
            motorState: {
                entity: 'diagnostic'
            },
            oilMaxOutPower: {
                entity: 'number'
            },
            motorUseTime: {
                entity: 'number'
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
    generator: {
        oil: {
            number: {
                totalPower: {
                    max: 1900
                }
            }
        }
    }
};
const deviceCmd = {
    generator: {
        motorState: {},
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
