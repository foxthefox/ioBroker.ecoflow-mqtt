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
			geneNum: {
				min: 0,
				max: 20,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				name: 'Amount of PS',
				role: 'value'
			},
			consNum: {
				min: 0,
				max: 20,
				unit_of_measurement: 'pcs',
				mult: 1,
				entity_type: 'sensor',
				name: 'Amount of Plugs connected to PS',
				role: 'value'
			},
			geneWatt: {
				min: 0,
				max: 800,
				unit_of_measurement: 'W',
				mult: 0.1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Power Stream(s) output power',
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
			parentWifiRssi: {
				min: -90,
				max: 10,
				unit_of_measurement: 'dBm',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'signal_strength',
				name: 'parent wifi RSSI',
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
			resetReason: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'reset reason'
			},
			rtcResetReason: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'RTC Reset Reason'
			},
			resetCount: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'reset count'
			},
			lanState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'lan state'
			},
			stackFree: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'stack free'
			},
			stackMinFree: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'stack min free'
			},
			meshId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mesh id'
			},
			meshLayer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mesh layer'
			},
			selfMac: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'self mac'
			},
			parentMac: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'parent mac'
			},
			otaDlErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'ota dl err'
			},
			otaDlTlsErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'ota dl tls err'
			},
			staIpAddr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'sta ip addr'
			},
			matterFabric: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'matter fabric'
			},
			wifiErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'wifi err'
			},
			wifiErrTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'wifi err time'
			},
			mqttErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mqtt err '
			},
			mqttErrTime: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'mqtt err time'
			},
			rssiThreshold: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'rssi threshold'
			},
			rssiVariance: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'rssi variance'
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
			resetReason: { entity: 'string' },
			rtcResetReason: { entity: 'string' },
			resetCount: { entity: 'string' },
			uptime: { entity: 'number' }, //run_time
			lanState: { entity: 'string' },
			stackFree: { entity: 'string' },
			stackMinFree: { entity: 'string' },
			meshId: { entity: 'string' }, // Powerstream X_Unknown_36 und Plug .plug_heartbeat.unknown23 haben den identischen Wert
			meshLayer: { entity: 'string' },
			selfMac: { entity: 'string' },
			parentMac: { entity: 'string' },
			otaDlErr: { entity: 'string' },
			otaDlTlsErr: { entity: 'string' },
			staIpAddr: { entity: 'string' },
			matterFabric: { entity: 'string' },
			geneNum: { entity: 'number' },
			consNum: { entity: 'number' },
			geneWatt: { entity: 'number' },
			powerPlugs: { entity: 'number' }, //cons_watt
			wifiErr: { entity: 'string' },
			wifiErrTime: { entity: 'string' },
			mqttErr: { entity: 'string' },
			mqttErrTime: { entity: 'string' },
			dynWattEnable: { entity: 'switch' }, //self_ems_switch
			parentWifiRssi: { entity: 'number' },
			rssiThreshold: { entity: 'string' },
			rssiVariance: { entity: 'string' }
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
			//include_plug = dynwattEnable
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
		142: { cmdFunc: { 2: 'include_plug' } },
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
		32: { cmdFunc: { 2: 'EnergyPack' } },
		11: { cmdFunc: { 32: 'country_town_message' } }, //or ping
		2: { cmdFunc: { 2: 'time_task_config_post' } },
		1: { cmdFunc: { 2: 'plug_heartbeat', 53: 'plug_heartbeat' } }
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
	optional bool switch = 11;
	optional int32 brightness = 12;
	optional int32 max_watts = 13;
	optional int32 heartbeat_frequency = 14;
	optional int32 mesh_enable = 15;
	optional int32 reset_reason = 16;
	optional int32 rtc_reset_reason = 17;
	optional int32 reset_count = 18;
	optional int32 uptime = 19; // run_time
	optional int32 lan_state = 20;
	optional int32 stack_free = 21;
	optional int32 stack_min_free = 22;
	optional int32 mesh_id = 23;
	optional int32 mesh_layer = 24;
	optional int32 self_mac = 25;
	optional int32 parent_mac = 26;
	optional int32 ota_dl_err = 27;
	optional int32 ota_dl_tls_err = 28;
	optional int32 sta_ip_addr = 29;
	optional int32 matter_fabric = 30;
	optional int32 gene_num = 31;//stream connected
	optional int32 cons_num = 32; //count of devices
	optional int32 gene_watt = 33; //total streamoutputpower
	optional int32 powerPlugs = 34; // cons_watt power to plugs
	optional int32 wifi_err = 35;
	optional int32 wifi_err_time = 36;
	optional int32 mqtt_err = 37;
	optional int32 mqtt_err_time = 38; //unixtime, ggf. last connection, when connected to mqtt server
	optional int32 dynWattEnable = 39; //plug included for dynamic watts
	optional int32 parent_wifi_rssi = 40; //wifiRssi
	optional int32 rssi_threshold = 41;
	optional int32 rssi_variance = 42;
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


message PowerItem {
	optional uint32 timestamp = 1;
	optional sint32 timezone = 2;
	optional uint32 plug_power = 3;
  }
  
message PowerPack {
	optional uint32 sys_seq = 1;
	repeated PowerItem sys_power_stream = 2;
}
message EnergyItem
{
    optional uint32 timestamp = 1;
    optional uint32 watth_type = 2;
    repeated uint32 watth = 3;
}

message EnergyPack
{
    optional uint32 sys_seq = 1;
    repeated EnergyItem sys_energy_stream = 2;
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
