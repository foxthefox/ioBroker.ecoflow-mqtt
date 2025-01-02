const plugStates = {
	plug_heartbeat: {
		number: {
			volt: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				name: 'Plug AC voltage',
				unique_id: 'efplug_volt',
				role: 'value'
			},
			maxCur: {
				min: 0,
				max: 11,
				unit_of_measurement: 'A',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Plug AC max. current',
				unique_id: 'efplug_maxCur',
				role: 'value'
			},
			current: {
				min: 0,
				max: 11,
				unit_of_measurement: 'A',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Plug AC current',
				unique_id: 'efplug_current',
				role: 'value'
			},
			watts: {
				min: 0,
				max: 2500,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Plug AC power',
				unique_id: 'efplug_watts',
				role: 'value'
			},
			temp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				name: 'Plug temperature',
				unique_id: 'efplug_temp',
				role: 'value'
			},
			freq: {
				min: 0,
				max: 52,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Plug AC frequency',
				unique_id: 'efplug_freq',
				role: 'value'
			},

			heartbeatFrequency: {
				min: 0,
				max: 20,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				name: 'Plug heartbeat',
				unique_id: 'efplug_heartbeatFrequency',
				role: 'value'
			},
			cntDevices: {
				min: 0,
				max: 20,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				name: 'Amount of Plugs connected to PS',
				role: 'value'
			},
			streamOutputPower: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power Stream output power',
				role: 'value'
			},
			powerPlugs: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power of plugs',
				role: 'value'
			},
			wifiRssi: {
				min: -90,
				max: 10,
				unit_of_measurement: 'dBm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'signal_strength',
				name: 'wifi RSSI',
				role: 'value'
			},
			uptime: {
				min: 0,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Smart plug uptime',
				role: 'value'
			}
		},
		string: {
			country: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				unique_id: 'efplug_country',
				name: 'Install Country'
			},
			town: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				unique_id: 'efplug_town',
				name: 'Install Town'
			},
			unknown16: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown16'
			},
			unknown17: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown17'
			},
			unknown18: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown18'
			},
			unknown20: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown20'
			},
			unknown21: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown21'
			},
			unknown22: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown22'
			},
			unknown23: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown23'
			},
			unknown24: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown24'
			},
			unknown25: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown25'
			},
			unknown26: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown26'
			},
			unknown27: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown27'
			},
			unknown28: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown28'
			},
			unknown29: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown29'
			},
			unknown30: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown30'
			},
			streamConn_31: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown31'
			},
			unknown35: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown35'
			},
			unknown36: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown36'
			},
			unknown37: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown37'
			},
			unixtime_38: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'unknown38'
			}
		},
		level: {
			maxWatts: {
				min: 1000,
				max: 2500,
				unit_of_measurement: 'W',
				mult: 1,
				step: 100,
				entity_type: 'number',
				device_class: 'power',
				name: 'Plug Max. AC power',
				unique_id: 'efplug_maxWatts',
				role: 'level'
			},
			brightness: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 0.097752,
				step: 1,
				entity_type: 'number',
				device_class: 'illuminance',
				name: 'Plug brightness',
				unique_id: 'efplug_brightness',
				role: 'level',
				subrole: 'brightness'
			}
		},
		switch: {
			switch: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Plug Switch',
				unique_id: 'efplug_switch',
				role: 'switch',
				switch: { '0': 'off', '1': 'on' }
			},
			meshEnable: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'disabled',
				payload_on: 'enabled',
				name: 'Plug Mesh enable',
				unique_id: 'efplug_mesh_enable',
				role: 'switch',
				meshEnable: { '0': 'disabled', '1': 'enabled' }
			},
			dynWattEnable: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Dynamic watt enable',
				unique_id: 'efplug_dynwatt_enable',
				role: 'switch',
				dynWattEnable: { '0': 'off', '1': 'on' }
			}
		},
		diagnostic: {
			errCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Plug Error Code',
				unique_id: 'efplug_errCode',
				role: 'info',
				errCode: {
					'0': 'OK ?'
				}
			},
			warnCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Plug Warn Code',
				unique_id: 'efstream_warnCode',
				role: 'info',
				warnCode: {
					'0': 'OK ?'
				}
			}
		}
	},
	energy: {
		number: {
			watth5: {
				min: 0,
				max: 60000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				name: 'Energy of smart plug',
				unique_id: 'efstream_watth5',
				role: 'value'
			},
			watth6: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				name: 'Smart plug ON time',
				unique_id: 'efstream_watth6',
				role: 'value'
			}
		}
	},
	time_task_config_post: {
		tasks: {
			taskIndex: {
				min: 0,
				max: 11,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				name: 'Task index',
				role: 'value'
			},
			type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Task type',
				role: 'info',
				type: {
					1: 'prioritize power supply',
					2: 'prioritize power storage',
					3: 'plug switch off?',
					4: 'plug switch on?'
				}
			},
			timeRange: {
				isConfig: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task configuration',
					role: 'info',
					isConfig: {
						'0': 'not configured',
						'1': 'configured'
					}
				},
				isEnable: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task activation',
					role: 'info',
					isEnable: {
						'0': 'not enabled',
						'1': 'enabled'
					}
				},
				timeMode: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task activation',
					role: 'info',
					timeMode: {
						'0': 'daily',
						'1': 'weekly',
						'2': 'monthly',
						'3': 'do not repeat'
					}
				},
				startTime: {
					week: {
						min: 0,
						max: 52,
						unit_of_measurement: 'week',
						mult: 1,
						entity_type: 'sensor',
						name: 'week',
						role: 'value'
					},
					sec: {
						min: 0,
						max: 59,
						unit_of_measurement: 's',
						mult: 1,
						entity_type: 'sensor',
						name: 'second',
						role: 'value'
					},
					min: {
						min: 0,
						max: 59,
						unit_of_measurement: 'min',
						mult: 1,
						entity_type: 'sensor',
						name: 'minute',
						role: 'value'
					},
					hour: {
						min: 0,
						max: 23,
						unit_of_measurement: 'hour',
						mult: 1,
						entity_type: 'sensor',
						name: 'hour',
						role: 'value'
					},
					day: {
						min: 0,
						max: 31,
						unit_of_measurement: 'day',
						mult: 1,
						entity_type: 'sensor',
						name: 'day',
						role: 'value'
					},
					month: {
						min: 0,
						max: 12,
						unit_of_measurement: 'month',
						mult: 1,
						entity_type: 'sensor',
						name: 'month',
						role: 'value'
					},
					year: {
						min: 0,
						max: 2050,
						unit_of_measurement: 'year',
						mult: 1,
						entity_type: 'sensor',
						name: 'year',
						role: 'value'
					}
				},
				stopTime: {
					week: {
						min: 0,
						max: 52,
						unit_of_measurement: 'week',
						mult: 1,
						entity_type: 'sensor',
						name: 'week',
						role: 'value'
					},
					sec: {
						min: 0,
						max: 59,
						unit_of_measurement: 's',
						mult: 1,
						entity_type: 'sensor',
						name: 'second',
						role: 'value'
					},
					min: {
						min: 0,
						max: 59,
						unit_of_measurement: 'min',
						mult: 1,
						entity_type: 'sensor',
						name: 'minute',
						role: 'value'
					},
					hour: {
						min: 0,
						max: 23,
						unit_of_measurement: 'hour',
						mult: 1,
						entity_type: 'sensor',
						name: 'hour',
						role: 'value'
					},
					day: {
						min: 0,
						max: 31,
						unit_of_measurement: 'day',
						mult: 1,
						entity_type: 'sensor',
						name: 'day',
						role: 'value'
					},
					month: {
						min: 0,
						max: 12,
						unit_of_measurement: 'month',
						mult: 1,
						entity_type: 'sensor',
						name: 'month',
						role: 'value'
					},
					year: {
						min: 0,
						max: 2050,
						unit_of_measurement: 'year',
						mult: 1,
						entity_type: 'sensor',
						name: 'year',
						role: 'value'
					}
				},
				type: {
					entity_type: 'text',
					entity_category: 'diagnostic',
					name: 'Task type',
					role: 'info',
					type: {
						1: 'prioritize power supply',
						2: 'prioritize power storage',
						3: 'plug switch off',
						4: 'plug switch on'
					}
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
				latestQuotas: { '0': 'no trigger', '1': 'trigger' }
			}
		}
	},
	info: {
		diagnostic: {
			status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Cloud Connection Status',
				role: 'info',
				status: { '-2': 'offline', '0': 'offline', '1': 'online' }
			}
		}
	}
};

const plugStatesDict = {
	plug: {
		plug_heartbeat: {
			errCode: { entity: 'diagnostic' },
			warnCode: { entity: 'diagnostic' },
			country: { entity: 'string' },
			town: { entity: 'string' },
			maxCur: { entity: 'number' },
			temp: { entity: 'number' },
			freq: { entity: 'number' },
			current: { entity: 'number' },
			volt: { entity: 'number' },
			watts: { entity: 'number' },
			switch: { entity: 'switch' },
			brightness: { entity: 'level' },
			maxWatts: { entity: 'level' },
			heartbeatFrequency: { entity: 'number' },
			meshEnable: { entity: 'switch' },
			unknown16: { entity: 'string' },
			unknown17: { entity: 'string' },
			unknown18: { entity: 'string' },
			uptime: { entity: 'number' }, //uptime
			unknown20: { entity: 'string' },
			unknown21: { entity: 'string' },
			unknown22: { entity: 'string' },
			unknown23: { entity: 'string' }, // Powerstream X_Unknown_36 und Plug .plug_heartbeat.unknown23 haben den identischen Wert
			unknown24: { entity: 'string' },
			unknown25: { entity: 'string' },
			unknown26: { entity: 'string' },
			unknown27: { entity: 'string' },
			unknown28: { entity: 'string' },
			unknown29: { entity: 'string' },
			unknown30: { entity: 'string' },
			streamConn_31: { entity: 'string' },
			cntDevices: { entity: 'number' },
			streamOutputPower: { entity: 'number' },
			powerPlugs: { entity: 'number' },
			unknown35: { entity: 'string' },
			unknown36: { entity: 'string' },
			unknown37: { entity: 'string' },
			unixtime_38: { entity: 'string' },
			dynWattEnable: { entity: 'switch' },
			wifiRssi: { entity: 'number' } // WLAN Stärke?
		},
		energy: {
			watth5: { entity: 'number' },
			watth6: { entity: 'number' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const plugRanges = {
	plug: {
		energy: {
			number: {
				watth5: {
					max: 60000
				},
				watth6: {
					max: 1440
				}
			}
		}
	}
};

const plugCmd = {
	plug: {
		plug_heartbeat: {
			maxWatts: { mult: 1, msg: { cmdFunc: 2, cmdId: 137, dataLen: 3 } },
			/*
			maxCur: {
				mult: 10,
				msg: { cmdFunc: 2, cmdId: 135, dataLen: 3 }
			},
			*/
			brightness: {
				msg: { cmdFunc: 2, cmdId: 130, dataLen: 3 }
			},
			switch: {
				msg: { cmdFunc: 2, cmdId: 129, dataLen: 2 }
			},
			meshEnable: {
				msg: { cmdFunc: 2, cmdId: 138, dataLen: 2 }
			},
			dynWattEnable: {
				msg: { cmdFunc: 2, cmdId: 142, dataLen: 2 }
			}
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
		}
	}
};

const protoSource = `
syntax = "proto3";
`;

module.exports = {
	plugStates,
	plugStatesDict,
	plugRanges,
	plugCmd
};
