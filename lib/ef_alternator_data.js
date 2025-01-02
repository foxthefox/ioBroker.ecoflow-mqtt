const alternatorStates = {
	//new alternator
	alternatorHeartbeat: {
		number: {
			unknown268: {
				min: 0,
				max: 144000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery Charging Time',
				role: 'value'
			},
			unknown269: {
				min: 0,
				max: 144000,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Battery Discharging Time',
				role: 'value',
				icon: 'mdi:clock-start'
			},
			carBatVolt: {
				min: 10,
				max: 30,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Car battery voltage',
				role: 'value'
			},
			ratedPower: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'number',
				device_class: 'power',
				name: 'Alternator rated power',
				role: 'value'
			},
			actPower: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'number',
				device_class: 'power',
				name: 'Alternator actual power',
				role: 'value'
			},
			wifiRssi: {
				min: -90,
				max: 10,
				unit_of_measurement: 'dBm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'signal_strength',
				name: 'Wifi RSSI',
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
			batSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Powerstation battery state of charge',
				role: 'value'
			},
			current425: {
				min: 0,
				max: 13,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'current',
				role: 'value'
			}
		},
		level: {
			permanentWatts: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'number',
				device_class: 'power',
				name: 'Permanent Power Limit',
				role: 'level'
			},
			startVoltage: {
				min: 11,
				max: 30,
				unit_of_measurement: 'V',
				mult: 0.1,
				step: 0.1,
				entity_type: 'number',
				device_class: 'voltage',
				name: 'Start voltage',
				role: 'level'
			},
			operationMode: {
				min: 1,
				max: 3,
				unit_of_measurement: '',
				mult: 1,
				step: 1,
				entity_type: 'select',
				select: [ 'charge', 'reverse charge', 'battery maintenance' ],
				select_obj: {
					charge: 1,
					'reverse charge': 2,
					'battery maintenance': 3
				},
				states: {
					1: 'charge',
					2: 'reverse charge',
					3: 'battery maintenance'
				},
				name: 'Operation mode',
				role: 'level'
			}
		},
		switch: {
			startStop: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Start/Stop cmd',
				role: 'switch',
				startStop: { '0': 'off', '1': 'on' }
			}
		},
		string: {
			status1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_status1',
				role: 'info'
			},
			unknown130: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown130',
				role: 'info'
			},
			unknown427: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown427',
				role: 'info'
			},
			unknown428: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown428',
				role: 'info'
			},
			unknown608: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown608',
				role: 'info'
			},
			unknown609: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'X_unknown609',
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
				latestQuotas: { '0': 'no trigger', '1': 'trigger' }
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
				status: { 0: 'offline', 1: 'online' }
			}
		}
	}
};

const alternatorStatesDict = {
	alternator: {
		alternatorHeartbeat: {
			status1: { entity: 'string' },
			temp: { entity: 'number' },
			actPower: { entity: 'number' },
			unknown130: { entity: 'string' },
			startVoltage: { entity: 'level' },
			carBatVolt: { entity: 'number' },
			batSoc: { entity: 'number' },
			unknown268: { entity: 'number' },
			unknown269: { entity: 'number' },
			current425: { entity: 'number' },
			unknown427: { entity: 'string' },
			unknown428: { entity: 'string' },
			operationMode: { entity: 'level' },
			startStop: { entity: 'switch' },
			permanentWatts: { entity: 'level' },
			wifiRssi: { entity: 'number' },
			ratedPower: { entity: 'number' },
			unknown608: { entity: 'string' },
			unknown609: { entity: 'string' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const alternatorRanges = {
	alternator: {
		alternatorHeartbeat: {
			number: {
				current425: { max: 30 }
			}
		}
	}
};

const alternatorCmd = {
	alternator: {
		alternatorHeartbeat: {
			startVoltage: { msg: { dest: 20, cmdFunc: 2, cmdId: 17, dataLen: 6 } }, //137
			operationMode: { msg: { dest: 20, cmdFunc: 2, cmdId: 17, dataLen: 6 } }, //116
			startStop: { msg: { dest: 20, cmdFunc: 2, cmdId: 17, dataLen: 6 } }, //122
			permanentWatts: { msg: { dest: 20, cmdFunc: 2, cmdId: 17, dataLen: 6 } } //123
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 2, cmdId: 1, dataLen: 0 } } //toCheck
		}
	}
};

module.exports = {
	alternatorStates,
	alternatorStatesDict,
	alternatorRanges,
	alternatorCmd
};
