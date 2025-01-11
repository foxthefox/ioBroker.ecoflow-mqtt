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

const protoMsg = {
	cmdId: {
		138: { cmdFunc: { 2: 'mesh_ctrl_pack' } },
		137: { cmdFunc: { 2: 'max_watts_pack' } },
		135: { cmdFunc: { 2: 'PowerPack' } },
		134: { cmdFunc: { 2: 'time_task_config_post' } },
		133: { cmdFunc: { 2: 'PowerPack' } },
		132: { cmdFunc: { 2: 'time_task_config' } },
		131: { cmdFunc: { 2: 'time_task_config' } },
		130: { cmdFunc: { 2: 'brightness_pack' } },
		129: { cmdFunc: { 2: 'plug_switch_message' } },
		105: { cmdFunc: { 2: 'init_pack' } },
		11: { cmdFunc: { 32: 'country_town_message' } }, //or ping
		2: { cmdFunc: { 2: 'time_task_config_post' } },
		1: { cmdFunc: { 53: 'plug_heartbeat' } }
	}
};

const protoSource = `
syntax = "proto3";

message plug_heartbeat {
	optional uint32 err_code = 1;
	optional uint32 warn_code = 2;
	optional uint32 country = 3;
	optional uint32 town = 4;
	optional int32 max_cur = 5;
	optional int32 temp = 6;
	optional int32 freq = 7;
	optional int32 current = 8;
	optional int32 volt = 9;
	optional int32 watts = 10;
	optional bool switch = 11; //switchSta
	optional int32 brightness = 12;
	optional int32 max_watts = 13;
	optional int32 heartbeat_frequency = 14;
	optional int32 mesh_enable = 15;
	optional int32 unknown16 = 16;
	optional int32 unknown17 = 17;
	optional int32 unknown18 = 18;
	optional int32 uptime = 19;
	optional int32 unknown20 = 20;
	optional int32 unknown21 = 21;
	optional int32 unknown22 = 22;
	optional int32 unknown23 = 23;
	optional int32 unknown24 = 24;
	optional int32 unknown25 = 25;
	optional int32 unknown26 = 26;
	optional int32 unknown27 = 27;
	optional int32 unknown28 = 28;
	optional int32 unknown29 = 29;
	optional int32 unknown30 = 30;
	optional int32 streamConn_31 = 31;//stream connected
	optional int32 cntDevices = 32; //count of devices
	optional int32 streamOutputPower = 33; //total streamoutputpower
	optional int32 powerPlugs = 34; // power to plugs
	optional int32 unknown35 = 35;
	optional int32 unknown36 = 36;
	optional int32 unknown37 = 37;
	optional int32 unixtime_38 = 38; //unixtime, ggf. last connection, when connected to mqtt server
	optional int32 dynWattEnable = 39; //plug included for dynamic watts
	optional int32 wifiRssi = 40; //wifiRssi
  }
  message plug_switch_message {
	optional uint32 plug_switch = 1;
  }
  message brightness_pack {
	optional int32 brightness = 1 [(nanopb).default = 0];
  }
  message max_cur_pack {
	optional int32 max_cur = 1 [(nanopb).default = 0];
  }
  message max_watts_pack {
	optional int32 max_watts = 1 [(nanopb).default = 0];
  }
  message mesh_ctrl_pack {
	optional uint32 mesh_enable = 1 [(nanopb).default = 0];
  }
  message ret_pack {
	optional bool ret_sta = 1 [(nanopb).default = false];
  }

  message include_plug {
	optional bool include_plug = 1 [(nanopb).default = false];
  }

  message rated_power_pack {
	optional int32 rated_power = 1 [(nanopb).default = 0];
  } 

  message country_town_message {
	optional uint32 country = 1;
	optional uint32 town = 2;
  }
  message time_task_config {
	optional uint32 task_index = 1;
	optional time_range_strategy time_range = 2;
	optional uint32 type = 3; // Task type: 1: prioritize power supply; 2: prioritize power storage
  }
  message time_task_delet {
	optional uint32 task_index = 1;
  }
  message time_task_config_post {
	optional time_task_config task1 = 1;
	optional time_task_config task2 = 2;
	optional time_task_config task3 = 3;
	optional time_task_config task4 = 4;
	optional time_task_config task5 = 5;
	optional time_task_config task6 = 6;
	optional time_task_config task7 = 7;
	optional time_task_config task8 = 8;
	optional time_task_config task9 = 9;
	optional time_task_config task10 = 10;
	optional time_task_config task11 = 11;
  }
  message time_task_config_ack {
	optional uint32 task_info = 1;
  }

  message time_range_strategy {
	optional bool is_config = 1; // Whether to enable: 0: no; 1: yes
	optional bool is_enable = 2; // Whether to configure: 0: no; 1: yes
	optional int32 time_mode = 3; // Scheduled mode: 0: daily; 1: weekly; 2: monthly; 3: do not repeat
	optional int32 time_data = 4; // mode == 1, bit0-bit6 represents Monday to Saturday respectively; mode == 2, bit0-bit30 represents the 1st to the 31st
	optional rtc_data start_time = 5;
	optional rtc_data stop_time = 6;
  }

  message rtc_data {
	optional int32 week = 1 [(nanopb).default = 0];
	optional int32 sec = 2 [(nanopb).default = 0];
	optional int32 min = 3 [(nanopb).default = 0];
	optional int32 hour = 4 [(nanopb).default = 0];
	optional int32 day = 5 [(nanopb).default = 0];
	optional int32 month = 6 [(nanopb).default = 0];
	optional int32 year = 7 [(nanopb).default = 0];
  }

  message plug_ack_message {
	optional uint32 ack = 1;
  }

`;

module.exports = {
	plugStates,
	plugStatesDict,
	plugRanges,
	plugCmd,
	protoMsg,
	protoSource
};
