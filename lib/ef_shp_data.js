const panelStates = {
	//new shp1
	heartbeat: {
		number: {
			backupChaTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Backup discharge time'
			},
			workTime: {
				min: 0,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Device work time'
			},
			backupBatPer: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Backup battery percentage'
			},
			backupFullCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'Backup full capacity'
			},
			backupDayWatth: {
				min: 0,
				max: 864000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'Backup electricity consumption per day'
			},
			gridDayWatth: {
				min: 0,
				max: 864000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Grid electricity consumption per day'
			}
		},
		diagnostic: {
			gridSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Grid electricity status',
				role: 'info',
				gridSta: { '0': 'off', '1': 'on' }
			}
		},
		array: {
			errorCodes: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Error Codes',
				role: 'list'
			}
		}
	},
	backupCmdChCtrlInfos: {
		number: {
			powCh_10: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number DP1'
			},
			priority_10: {
				min: 0,
				max: 10,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel priority DP1'
			},
			powCh_11: {
				min: 0,
				max: 12,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number DP2'
			},
			priority_11: {
				min: 0,
				max: 10,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel priority DP2'
			}
		},
		level: {
			ctrlSta_10: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type DP1 0 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_11: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type DP2 0 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			}
		},
		switch: {
			ctrlMode_10: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode DP1 0-Auto/1-Manual',
				ctrlMode_10: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_11: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode DP2 0-Auto/1-Manual',
				ctrlMode_11: { '0': 'Auto', '1': 'Manual' }
			}
		}
	},
	loadCmdChCtrlInfos: {
		number: {
			powCh_0: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #1'
			},
			priority_0: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #1'
			},
			powCh_1: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #2'
			},
			priority_1: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #2'
			},
			powCh_2: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #3'
			},
			priority_2: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #3'
			},
			powCh_3: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #4'
			},
			priority_3: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #4'
			},
			powCh_4: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #5'
			},
			priority_4: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #5'
			},
			powCh_5: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #6'
			},
			priority_5: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #6'
			},
			powCh_6: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #7'
			},
			priority_6: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #7'
			},
			powCh_7: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #8'
			},
			priority_7: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #8'
			},
			powCh_8: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #9'
			},
			priority_8: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #9'
			},
			powCh_9: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Channel number #10'
			},
			priority_9: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Priority channel #10'
			}
		},
		level: {
			ctrlSta_0: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #1 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_1: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #2 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_2: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #3 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_3: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #4 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_4: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #5 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_5: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #6 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_6: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #7 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_7: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #8 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_8: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #9 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			},
			ctrlSta_9: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'select',
				role: 'level',
				select: [ 'Grid supply', 'storage power supply', 'close' ],
				select_obj: {
					'Grid supply': 0,
					'storage power supply,': 1,
					close: 2
				},
				states: {
					0: 'Grid supply',
					1: 'storage power supply,',
					2: 'close'
				},
				name: 'Power supply type channel #10 Grid supply, 1 storage power supply, 2 close',
				subrole: 'mode'
			}
		},
		switch: {
			ctrlMode_0: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #1 0-Auto/1-Manual',
				ctrlMode_0: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_1: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #2 0-Auto/1-Manual',
				ctrlMode_1: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_2: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #3 0-Auto/1-Manual',
				ctrlMode_2: { 0: 'Auto', 1: 'Manual' }
			},
			ctrlMode_3: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #4 0-Auto/1-Manual',
				ctrlMode_3: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_4: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #5 0-Auto/1-Manual',
				ctrlMode_4: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_5: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #6 0-Auto/1-Manual',
				ctrlMode_5: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_6: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #7 0-Auto/1-Manual',
				ctrlMode_6: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_7: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #8 0-Auto/1-Manual',
				ctrlMode_7: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_8: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #9 0-Auto/1-Manual',
				ctrlMode_8: { '0': 'Auto', '1': 'Manual' }
			},
			ctrlMode_9: {
				entity_type: 'switch',
				role: 'switch',
				payload_off: 'auto',
				payload_on: 'manual',
				name: 'Contol mode channel #10 0-Auto/1-Manual',
				ctrlMode_9: { '0': 'Auto', '1': 'Manual' }
			}
		}
	},
	//latestQuotas
	cfgSta: {
		diagnostic: {
			sta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'config status',
				role: 'info',
				sta: { '0': 'Config pending?', '1': 'Config done?' }
			}
		}
	},
	epsModeInfo: {
		switch: {
			eps: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'EPS mode',
				role: 'switch',
				eps: { '0': 'off', '1': 'on' }
			}
		}
	},
	chUseInfo: {
		diagnostic: {
			isEnable_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #1',
				role: 'info',
				isEnable_0: { '0': 'off', '1': 'on' }
			},
			isEnable_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #2',
				role: 'info',
				isEnable_1: { '0': 'off', '1': 'on' }
			},
			isEnable_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #3',
				role: 'info',
				isEnable_2: { '0': 'off', '1': 'on' }
			},
			isEnable_3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #4',
				role: 'info',
				isEnable_3: { '0': 'off', '1': 'on' }
			},
			isEnable_4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #5',
				role: 'info',
				isEnable_4: { '0': 'off', '1': 'on' }
			},
			isEnable_5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #6',
				role: 'info',
				isEnable_5: { '0': 'off', '1': 'on' }
			},
			isEnable_6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #7',
				role: 'info',
				isEnable_6: { '0': 'off', '1': 'on' }
			},
			isEnable_7: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #8',
				role: 'info',
				isEnable_7: { '0': 'off', '1': 'on' }
			},
			isEnable_8: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #9',
				role: 'info',
				isEnable_8: { '0': 'off', '1': 'on' }
			},
			isEnable_9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Load status channel #10',
				role: 'info',
				isEnable_9: { '0': 'off', '1': 'on' }
			}
		}
	},
	splitPhaseInfo: {
		diagnostic: {
			linkMark_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #1',
				role: 'info',
				linkMark_0: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #2',
				role: 'info',
				linkMark_1: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #3',
				role: 'info',
				linkMark_2: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #4',
				role: 'info',
				linkMark_3: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #5',
				role: 'info',
				linkMark_4: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #6',
				role: 'info',
				linkMark_5: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #7',
				role: 'info',
				linkMark_6: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_7: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #8',
				role: 'info',
				linkMark_7: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_8: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #9',
				role: 'info',
				linkMark_8: { '0': 'Not be split', '1': 'Should be split' }
			},
			linkMark_9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Split status channel #10',
				role: 'info',
				linkMark_9: { '0': 'Not be split', '1': 'Should be split' }
			}
		},
		number: {
			linkCh_0: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #1'
			},
			linkCh_1: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #2'
			},
			linkCh_2: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #3'
			},
			linkCh_3: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #4'
			},
			linkCh_4: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #5'
			},
			linkCh_5: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #6'
			},
			linkCh_6: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #7'
			},
			linkCh_7: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #8'
			},
			linkCh_8: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #9'
			},
			linkCh_9: {
				min: 0,
				max: 9,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'Split channel number #10'
			}
		}
	},
	loadChInfo: {
		string: {
			chName_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #1 nick name',
				role: 'info'
			},
			chName_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #2 nick name',
				role: 'info'
			},
			chName_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #3 nick name',
				role: 'info'
			},
			chName_3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #4 nick name',
				role: 'info'
			},
			chName_4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #5 nick name',
				role: 'info'
			},
			chName_5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #6 nick name',
				role: 'info'
			},
			chName_6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #7 nick name',
				role: 'info'
			},
			chName_7: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #8 nick name',
				role: 'info'
			},
			chName_8: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #9 nick name',
				role: 'info'
			},
			chName_9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Channel #10 nick name',
				role: 'info'
			}
		},
		icon: {
			iconNum_0: { entity: 'icon' },
			iconNum_1: { entity: 'icon' },
			iconNum_2: { entity: 'icon' },
			iconNum_3: { entity: 'icon' },
			iconNum_4: { entity: 'icon' },
			iconNum_5: { entity: 'icon' },
			iconNum_6: { entity: 'icon' },
			iconNum_7: { entity: 'icon' },
			iconNum_8: { entity: 'icon' },
			iconNum_9: { entity: 'icon' }
		}
	},
	loadChCurInfo: {
		number: {
			cur_0: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #1 current'
			},
			cur_1: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #2 current'
			},
			cur_2: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #3 current'
			},
			cur_3: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #4 current'
			},
			cur_4: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #5 current'
			},
			cur_5: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #6 current'
			},
			cur_6: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #7 current'
			},
			cur_7: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #8 current'
			},
			cur_8: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #9 current'
			},
			cur_9: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Channel #10 current'
			},
			cur_10: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'DP1 current'
			},
			cur_11: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'DP2 current'
			}
		}
	},
	gridInfo: {
		number: {
			gridVol: {
				min: 0,
				max: 240,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Grid voltage'
			},
			gridFreq: {
				min: 0,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'Grid Frequency'
			}
		}
	},
	areaInfo: {
		string: {
			area: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Area Info',
				role: 'info'
			}
		}
	},
	emergencyStrategy: {
		diagnostic: {
			backupMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Backup mode',
				role: 'info',
				backupMode: { '0': '0?', '1': '1?' }
			},
			isCfg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Backup config',
				role: 'info',
				isCfg: { '0': '0?', '1': '1?' }
			},
			overloadMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Backup overload mode',
				role: 'info',
				overloadMode: { '0': '0?', '1': '1?' }
			}
		}
	},
	channelPower: {
		diagnostic: {
			powType_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #1',
				role: 'info',
				powType_0: { '0': '0?', '1': '1?' }
			},
			powType_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #2',
				role: 'info',
				powType_1: { '0': '0?', '1': '1?' }
			},
			powType_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #3',
				role: 'info',
				powType_2: { '0': '0?', '1': '1?' }
			},
			powType_3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #4',
				role: 'info',
				powType_3: { '0': '0?', '1': '1?' }
			},
			powType_4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #5',
				role: 'info',
				powType_4: { '0': '0?', '1': '1?' }
			},
			powType_5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #6',
				role: 'info',
				powType_5: { '0': '0?', '1': '1?' }
			},
			powType_6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #7',
				role: 'info',
				powType_6: { '0': '0?', '1': '1?' }
			},
			powType_7: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #8',
				role: 'info',
				powType_7: { '0': '0?', '1': '1?' }
			},
			powType_8: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #9',
				role: 'info',
				powType_8: { '0': '0?', '1': '1?' }
			},
			powType_9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type channel #10',
				role: 'info',
				powType_9: { '0': '0?', '1': '1?' }
			},
			powType_10: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type DP1',
				role: 'info',
				powType_10: { '0': '0?', '1': '1?' }
			},
			powType_11: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power type DP2',
				role: 'info',
				powType_11: { '0': '0?', '1': '1?' }
			}
		},
		number: {
			chWatt_0: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #1'
			},
			chWatt_1: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #2'
			},
			chWatt_2: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #3'
			},
			chWatt_3: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #4'
			},
			chWatt_4: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #5'
			},
			chWatt_5: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #6'
			},
			chWatt_6: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #7'
			},
			chWatt_7: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #8'
			},
			chWatt_8: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #9'
			},
			chWatt_9: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power channel #10'
			},
			chWatt_10: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power DP1'
			},
			chWatt_11: {
				min: 0,
				max: 3600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Power DP2'
			}
		}
	},
	//latestQuotas and cyclic
	backupLoadWatt: {
		number: {
			watthDaytoDate_0: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #1'
			},
			watthDaytoDate_1: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #2'
			},
			watthDaytoDate_2: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #3'
			},
			watthDaytoDate_3: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #4'
			},
			watthDaytoDate_4: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #5'
			},
			watthDaytoDate_5: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #6'
			},
			watthDaytoDate_6: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #7'
			},
			watthDaytoDate_7: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #8'
			},
			watthDaytoDate_8: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #9'
			},
			watthDaytoDate_9: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily backup energy ch #10'
			}
		},
		array: {
			watth_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #1',
				role: 'list'
			},
			watth_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #2',
				role: 'list'
			},
			watth_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #3',
				role: 'list'
			},
			watth_3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #4',
				role: 'list'
			},
			watth_4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #5',
				role: 'list'
			},
			watth_5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #6',
				role: 'list'
			},
			watth_6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #7',
				role: 'list'
			},
			watth_7: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #8',
				role: 'list'
			},
			watth_8: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #9',
				role: 'list'
			},
			watth_9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly backup energy ch #10',
				role: 'list'
			}
		}
	},
	mainsLoadWatt: {
		number: {
			watthDaytoDate_0: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #1'
			},
			watthDaytoDate_1: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #2'
			},
			watthDaytoDate_2: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #3'
			},
			watthDaytoDate_3: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #4'
			},
			watthDaytoDate_4: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #5'
			},
			watthDaytoDate_5: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #6'
			},
			watthDaytoDate_6: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #7'
			},
			watthDaytoDate_7: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #8'
			},
			watthDaytoDate_8: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #9'
			},
			watthDaytoDate_9: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily mains energy ch #10'
			}
		},
		array: {
			watth_0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #1',
				role: 'list'
			},
			watth_1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #2',
				role: 'list'
			},
			watth_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #3',
				role: 'list'
			},
			watth_3: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #4',
				role: 'list'
			},
			watth_4: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #5',
				role: 'list'
			},
			watth_5: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #6',
				role: 'list'
			},
			watth_6: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #7',
				role: 'list'
			},
			watth_7: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #8',
				role: 'list'
			},
			watth_8: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #9',
				role: 'list'
			},
			watth_9: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly mains energy ch #10',
				role: 'list'
			}
		}
	},
	topupLoadWatt: {
		number: {
			watthDaytoDate_10: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily energy DP1'
			},
			watthDaytoDate_11: {
				min: 0,
				max: 86400,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Daily energy DP2'
			}
		},
		array: {
			watth_10: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly energy DP1',
				role: 'list'
			},
			watth_11: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Hourly energy DP2',
				role: 'list'
			}
		}
	},
	//other
	backupChaDiscCfg: {
		level: {
			forceChargeHigh: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Charge upper threshold percentage',
				role: 'level',
				subrole: 'power'
			},
			discLower: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Discharge lower threshold percentage',
				role: 'level',
				subrole: 'power'
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
			},
			getAllTaskCfg: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get all tasks',
				payload_off: 'no trigger',
				payload_on: 'trigger',

				getAllTaskCfg: { '0': 'no trigger', '1': 'trigger' }
			},
			//shp
			getHeartbeat: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getHeartbeat',
				role: 'switch',
				getHeartbeat: { '0': 'off', '1': 'on' }
			},
			getTime: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getTime',
				role: 'switch',
				getTime: { '0': 'off', '1': 'on' }
			},
			getGridInfo: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getGridInfo',
				role: 'switch',
				getGridInfo: { '0': 'off', '1': 'on' }
			},
			getChargeSetting: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getChargeSetting',
				role: 'switch',
				getChargeSetting: { '0': 'off', '1': 'on' }
			},
			getLoadChCurInfo: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getLoadChCurInfo',
				role: 'switch',
				getLoadChCurInfo: { '0': 'off', '1': 'on' }
			},
			getEpsMode: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getEpsMode',
				role: 'switch',
				getEpsMode: { '0': 'off', '1': 'on' }
			},
			getLoadChControl: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getLoadChControl',
				role: 'switch',
				getLoadChControl: { '0': 'off', '1': 'on' }
			},
			getBackupChControl: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getBackupChControl',
				role: 'switch',
				getBackupChControl: { '0': 'off', '1': 'on' }
			},
			getSplitPhaseInfo: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getSplitPhaseInfo',
				role: 'switch',
				getSplitPhaseInfo: { '0': 'off', '1': 'on' }
			},
			getChUseInfo: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getChUseInfo',
				role: 'switch',
				getChUseInfo: { '0': 'off', '1': 'on' }
			},
			getLoadChInfo: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getLoadChInfo',
				role: 'switch',
				getLoadChInfo: { '0': 'off', '1': 'on' }
			},
			getTimeTask: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getTimeTask',
				role: 'switch',
				getTimeTask: { '0': 'off', '1': 'on' }
			},
			getCfgSta: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getCfgSta',
				role: 'switch',
				getCfgSta: { '0': 'off', '1': 'on' }
			},
			getEmergencyStrategy: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getEmergencyStrategy',
				role: 'switch',
				getEmergencyStrategy: { '0': 'off', '1': 'on' }
			},
			getmainsLoadWatt: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getmainsLoadWatt',
				role: 'switch',
				getmainsLoadWatt: { '0': 'off', '1': 'on' }
			},
			getbackupLoadWatt: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'getbackupLoadWatt',
				role: 'switch',
				getbackupLoadWatt: { '0': 'off', '1': 'on' }
			},
			gettopupLoadWatt: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'gettopupLoadWatt',
				role: 'switch',
				gettopupLoadWatt: { '0': 'off', '1': 'on' }
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
const panelStatesDict = {
	panel: {
		//cyclic
		heartbeat: {
			backupChaTime: { entity: 'number' },
			gridSta: { entity: 'diagnostic' },
			workTime: { entity: 'number' },
			backupBatPer: { entity: 'number' },
			backupFullCap: { entity: 'number' },
			backupDayWatth: { entity: 'number' },
			gridDayWatth: { entity: 'number' },
			errorCodes: { entity: 'array' }
		},
		backupCmdChCtrlInfos: {
			powCh_10: { entity: 'number' },
			ctrlSta_10: { entity: 'level' },
			ctrlMode_10: { entity: 'switch' },
			priority_10: { entity: 'number' },
			powCh_11: { entity: 'number' },
			ctrlSta_11: { entity: 'level' },
			ctrlMode_11: { entity: 'switch' },
			priority_11: { entity: 'number' }
		},
		loadCmdChCtrlInfos: {
			powCh_0: { entity: 'number' },
			ctrlSta_0: { entity: 'level' },
			ctrlMode_0: { entity: 'switch' },
			priority_0: { entity: 'number' },
			powCh_1: { entity: 'number' },
			ctrlSta_1: { entity: 'level' },
			ctrlMode_1: { entity: 'switch' },
			priority_1: { entity: 'number' },
			powCh_2: { entity: 'number' },
			ctrlSta_2: { entity: 'level' },
			ctrlMode_2: { entity: 'switch' },
			priority_2: { entity: 'number' },
			powCh_3: { entity: 'number' },
			ctrlSta_3: { entity: 'level' },
			ctrlMode_3: { entity: 'switch' },
			priority_3: { entity: 'number' },
			powCh_4: { entity: 'number' },
			ctrlSta_4: { entity: 'level' },
			ctrlMode_4: { entity: 'switch' },
			priority_4: { entity: 'number' },
			powCh_5: { entity: 'number' },
			ctrlSta_5: { entity: 'level' },
			ctrlMode_5: { entity: 'switch' },
			priority_5: { entity: 'number' },
			powCh_6: { entity: 'number' },
			ctrlSta_6: { entity: 'level' },
			ctrlMode_6: { entity: 'switch' },
			priority_6: { entity: 'number' },
			powCh_7: { entity: 'number' },
			ctrlSta_7: { entity: 'level' },
			ctrlMode_7: { entity: 'switch' },
			priority_7: { entity: 'number' },
			powCh_8: { entity: 'number' },
			ctrlSta_8: { entity: 'level' },
			ctrlMode_8: { entity: 'switch' },
			priority_8: { entity: 'number' },
			powCh_9: { entity: 'number' },
			ctrlSta_9: { entity: 'level' },
			ctrlMode_9: { entity: 'switch' },
			priority_9: { entity: 'number' }
		},
		//latestQuotas
		epsModeInfo: { eps: { entity: 'switch' } },
		cfgSta: { sta: { entity: 'diagnostic' } },
		chUseInfo: {
			isEnable_0: { entity: 'diagnostic' },
			isEnable_1: { entity: 'diagnostic' },
			isEnable_2: { entity: 'diagnostic' },
			isEnable_3: { entity: 'diagnostic' },
			isEnable_4: { entity: 'diagnostic' },
			isEnable_5: { entity: 'diagnostic' },
			isEnable_6: { entity: 'diagnostic' },
			isEnable_7: { entity: 'diagnostic' },
			isEnable_8: { entity: 'diagnostic' },
			isEnable_9: { entity: 'diagnostic' }
		},
		splitPhaseInfo: {
			linkMark_0: { entity: 'diagnostic' },
			linkCh_0: { entity: 'number' },
			linkMark_1: { entity: 'diagnostic' },
			linkCh_1: { entity: 'number' },
			linkMark_2: { entity: 'diagnostic' },
			linkCh_2: { entity: 'number' },
			linkMark_3: { entity: 'diagnostic' },
			linkCh_3: { entity: 'number' },
			linkMark_4: { entity: 'diagnostic' },
			linkCh_4: { entity: 'number' },
			linkMark_5: { entity: 'diagnostic' },
			linkCh_5: { entity: 'number' },
			linkMark_6: { entity: 'diagnostic' },
			linkCh_6: { entity: 'number' },
			linkMark_7: { entity: 'diagnostic' },
			linkCh_7: { entity: 'number' },
			linkMark_8: { entity: 'diagnostic' },
			linkCh_8: { entity: 'number' },
			linkMark_9: { entity: 'diagnostic' },
			linkCh_9: { entity: 'number' }
		},
		loadChInfo: {
			chName_0: { entity: 'string' },
			iconNum_0: { entity: 'icon' },
			chName_1: { entity: 'string' },
			iconNum_1: { entity: 'icon' },
			chName_2: { entity: 'string' },
			iconNum_2: { entity: 'icon' },
			chName_3: { entity: 'string' },
			iconNum_3: { entity: 'icon' },
			chName_4: { entity: 'string' },
			iconNum_4: { entity: 'icon' },
			chName_5: { entity: 'string' },
			iconNum_5: { entity: 'icon' },
			chName_6: { entity: 'string' },
			iconNum_6: { entity: 'icon' },
			chName_7: { entity: 'string' },
			iconNum_7: { entity: 'icon' },
			chName_8: { entity: 'string' },
			iconNum_8: { entity: 'icon' },
			chName_9: { entity: 'string' },
			iconNum_9: { entity: 'icon' }
		},
		loadChCurInfo: {
			cur_0: { entity: 'number' },
			cur_1: { entity: 'number' },
			cur_2: { entity: 'number' },
			cur_3: { entity: 'number' },
			cur_4: { entity: 'number' },
			cur_5: { entity: 'number' },
			cur_6: { entity: 'number' },
			cur_7: { entity: 'number' },
			cur_8: { entity: 'number' },
			cur_9: { entity: 'number' },
			cur_10: { entity: 'number' },
			cur_11: { entity: 'number' }
		},
		gridInfo: {
			gridVol: { entity: 'number' },
			gridFreq: { entity: 'number' }
		},
		//latestQuotas and cyclic
		backupLoadWatt: {
			watthDaytoDate_0: { entity: 'number' },
			watth_0: { entity: 'array' },
			watthDaytoDate_1: { entity: 'number' },
			watth_1: { entity: 'array' },
			watthDaytoDate_2: { entity: 'number' },
			watth_2: { entity: 'array' },
			watthDaytoDate_3: { entity: 'number' },
			watth_3: { entity: 'array' },
			watthDaytoDate_4: { entity: 'number' },
			watth_4: { entity: 'array' },
			watthDaytoDate_5: { entity: 'number' },
			watth_5: { entity: 'array' },
			watthDaytoDate_6: { entity: 'number' },
			watth_6: { entity: 'array' },
			watthDaytoDate_7: { entity: 'number' },
			watth_7: { entity: 'array' },
			watthDaytoDate_8: { entity: 'number' },
			watth_8: { entity: 'array' },
			watthDaytoDate_9: { entity: 'number' },
			watth_9: { entity: 'array' }
		},
		mainsLoadWatt: {
			watthDaytoDate_0: { entity: 'number' },
			watth_0: { entity: 'array' },
			watthDaytoDate_1: { entity: 'number' },
			watth_1: { entity: 'array' },
			watthDaytoDate_2: { entity: 'number' },
			watth_2: { entity: 'array' },
			watthDaytoDate_3: { entity: 'number' },
			watth_3: { entity: 'array' },
			watthDaytoDate_4: { entity: 'number' },
			watth_4: { entity: 'array' },
			watthDaytoDate_5: { entity: 'number' },
			watth_5: { entity: 'array' },
			watthDaytoDate_6: { entity: 'number' },
			watth_6: { entity: 'array' },
			watthDaytoDate_7: { entity: 'number' },
			watth_7: { entity: 'array' },
			watthDaytoDate_8: { entity: 'number' },
			watth_8: { entity: 'array' },
			watthDaytoDate_9: { entity: 'number' },
			watth_9: { entity: 'array' }
		},
		topupLoadWatt: {
			watthDaytoDate_10: { entity: 'number' },
			watthDaytoDate_11: { entity: 'number' },
			watth_10: { entity: 'array' },
			watth_11: { entity: 'array' }
		},
		emergencyStrategy: {
			backupMode: { entity: 'diagnostic' },
			isCfg: { entity: 'diagnostic' },
			overloadMode: { entity: 'diagnostic' }
			/*
        seems doubled with other info, maybe there is special config for emergency
        chSta: [
            { priority: 0, isEnable: 1 },
            { priority: 1, isEnable: 1 },
            { priority: 2, isEnable: 1 },
            { priority: 3, isEnable: 1 },
            { priority: 4, isEnable: 1 },
            { priority: 5, isEnable: 1 },
            { priority: 6, isEnable: 1 },
            { priority: 7, isEnable: 1 },
            { priority: 8, isEnable: 1 },
            { priority: 9, isEnable: 1 }
        ],
        */
		},
		channelPower: {
			powType_0: { entity: 'diagnostic' },
			chWatt_0: { entity: 'number' },
			powType_1: { entity: 'diagnostic' },
			chWatt_1: { entity: 'number' },
			powType_2: { entity: 'diagnostic' },
			chWatt_2: { entity: 'number' },
			powType_3: { entity: 'diagnostic' },
			chWatt_3: { entity: 'number' },
			powType_4: { entity: 'diagnostic' },
			chWatt_4: { entity: 'number' },
			powType_5: { entity: 'diagnostic' },
			chWatt_5: { entity: 'number' },
			powType_6: { entity: 'diagnostic' },
			chWatt_6: { entity: 'number' },
			powType_7: { entity: 'diagnostic' },
			chWatt_7: { entity: 'number' },
			powType_8: { entity: 'diagnostic' },
			chWatt_8: { entity: 'number' },
			powType_9: { entity: 'diagnostic' },
			chWatt_9: { entity: 'number' },
			powType_10: { entity: 'diagnostic' },
			chWatt_10: { entity: 'number' },
			powType_11: { entity: 'diagnostic' },
			chWatt_11: { entity: 'number' }
		},
		areaInfo: {
			area: { entity: 'string' }
		},
		//other
		backupChaDiscCfg: {
			forceChargeHigh: { entity: 'level' },
			discLower: { entity: 'level' }
		},
		action: {
			latestQuotas: { entity: 'switch' },
			getHeartbeat: { entity: 'switch' },
			getTime: { entity: 'switch' },
			getGridInfo: { entity: 'switch' },
			getChargeSetting: { entity: 'switch' },
			getLoadChCurInfo: { entity: 'switch' },
			getEpsMode: { entity: 'switch' },
			getLoadChControl: { entity: 'switch' },
			getBackupChControl: { entity: 'switch' },
			getSplitPhaseInfo: { entity: 'switch' },
			getChUseInfo: { entity: 'switch' },
			getLoadChInfo: { entity: 'switch' },
			getTimeTask: { entity: 'switch' },
			getCfgSta: { entity: 'switch' },
			getEmergencyStrategy: { entity: 'switch' },
			getmainsLoadWatt: { entity: 'switch' },
			getbackupLoadWatt: { entity: 'switch' },
			gettopupLoadWatt: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};
const panelRanges = {
	panel: {
		channelPower: {
			number: {
				chWatt_10: { max: 7200 },
				chWatt_11: { max: 7200 }
			}
		}
	}
};
const panelCmd = {
	panel: {
		backupChaDiscCfg: {
			//jeweils anderer Wert muß vorher geholt werden
			forceChargeHigh: {
				valName: 'forceChargeHigh',
				operateType: 'TCP',
				params: { discLower: 30, forceChargeHigh: 78, cmdSet: 11, id: 29 }
			},
			discLower: {
				valName: 'discLower',
				moduleType: 0,
				operateType: 'TCP',
				params: { discLower: 30, forceChargeHigh: 78, cmdSet: 11, id: 29 }
			}
		},
		epsModeInfo: {
			eps: {
				valName: 'eps',
				moduleType: 0,
				operateType: 'TCP',
				params: { cmdSet: 11, id: 24, eps: 0 }
			}
		},
		chUseInfo: {
			isEnable: {
				valName: 'isEnable', //+ chNum
				moduleType: 0,
				operateType: 'TCP',
				params: { cmdSet: 11, id: 26, chNum: 1, isEnable: 1 }
			}
		},
		cfgSta: {
			sta: {
				valName: 'cfgSta', //chNum
				moduleType: 0,
				operateType: 'TCP',
				params: { cmdSet: 11, id: 7, cfgSta: 1 }
			}
		},
		//unklar wie genau geschaltet wird
		loadCmdChCtrlInfos: {
			ctrlSta_0: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 0, cmdSet: 11, id: 16 }
			},
			ctrlMode_0: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 0, cmdSet: 11, id: 16 }
			},
			ctrlSta_1: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 1, cmdSet: 11, id: 16 }
			},
			ctrlMode_1: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 1, cmdSet: 11, id: 16 }
			},
			ctrlSta_2: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 2, cmdSet: 11, id: 16 }
			},
			ctrlMode_2: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 2, cmdSet: 11, id: 16 }
			},
			ctrlSta_3: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 3, cmdSet: 11, id: 16 }
			},
			ctrlMode_3: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 3, cmdSet: 11, id: 16 }
			},
			ctrlSta_4: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 4, cmdSet: 11, id: 16 }
			},
			ctrlMode_4: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 4, cmdSet: 11, id: 16 }
			},
			ctrlSta_5: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 5, cmdSet: 11, id: 16 }
			},
			ctrlMode_5: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 5, cmdSet: 11, id: 16 }
			},
			ctrlSta_6: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 6, cmdSet: 11, id: 16 }
			},
			ctrlMode_6: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 6, cmdSet: 11, id: 16 }
			},
			ctrlSta_7: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 7, cmdSet: 11, id: 16 }
			},
			ctrlMode_7: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 7, cmdSet: 11, id: 16 }
			},
			ctrlSta_8: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 8, cmdSet: 11, id: 16 }
			},
			ctrlMode_8: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 8, cmdSet: 11, id: 16 }
			},
			ctrlSta_9: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 9, cmdSet: 11, id: 16 }
			},
			ctrlMode_9: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 9, cmdSet: 11, id: 16 }
			}
			//load channel control
			/*
			outputMode: {
				valName: 'ch',
				moduleType: 0,
				operateType: 'TCP',
				params: {
					Auto: { sta: 0, ctrlMode: 0, ch: 0, cmdSet: 11, id: 16 },
					Grid: { sta: 0, ctrlMode: 1, ch: 0, cmdSet: 11, id: 16 },
					Battery: { sta: 1, ctrlMode: 1, ch: 0, cmdSet: 11, id: 16 },
					Off: { sta: 2, ctrlMode: 1, ch: 0, cmdSet: 11, id: 16 }
				}
			}
			*/
		},
		backupCmdChCtrlInfos: {
			// Setting the alternate channel control
			ctrlSta_10: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 10, cmdSet: 11, id: 17 }
			},
			ctrlMode_10: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 10, cmdSet: 11, id: 17 }
			},
			ctrlSta_11: {
				valName: 'sta',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 11, cmdSet: 11, id: 17 }
			},
			ctrlMode_11: {
				valName: 'ctrlMode',
				moduleType: 0,
				operateType: 'TCP',
				params: { sta: 2, ctrlMode: 1, ch: 11, cmdSet: 11, id: 17 }
			}
		},

		// not implemented ...
		overload: {
			valName: 'eps',
			moduleType: 0,
			operateType: 'TCP',
			params: {}
			//   payload: '{"from":"HA","id":"{{999900000+(range(10000,99999)|random)}}","operateType":"TCP","lang":"en-us","version":"1.0","params":{"overloadMode":1,"cmdSet":11,"isCfg":1,"id":64,"backupMode":0,"chSta":[{"isEnable":{{channels[0].enabled}},"priority":{{channels[0].priority}}},{"isEnable":{{channels[1].enabled}},"priority":{{channels[1].priority}}},{"isEnable":{{channels[2].enabled}},"priority":{{channels[2].priority}}},{"isEnable":{{channels[3].enabled}},"priority":{{channels[3].priority}}},{"isEnable":{{channels[4].enabled}},"priority":{{channels[4].priority}}},{"isEnable":{{channels[5].enabled}},"priority":{{channels[5].priority}}},{"isEnable":{{channels[6].enabled}},"priority":{{channels[6].priority}}},{"isEnable":{{channels[7].enabled}},"priority":{{channels[7].priority}}},{"isEnable":{{channels[8].enabled}},"priority":{{channels[8].priority}}},{"isEnable":{{channels[9].enabled}},"priority":{{channels[9].priority}}}]}}'
		},
		UpdateRTCtime: {
			params: { cmdSet: 11, id: 3, week: 2, sec: 17, min: 38, hour: 18, day: 16, month: 11, year: 2021 }
		},
		SettingTheVoltageAndFrequency: {
			params: { cmdSet: 11, id: 22, gridVol: 100, gridFreq: 50 } //Range 100 ~ 250 "gridFreq": 50 //Range 50 ~ 60
		},
		// ... not implemented

		// Setting battery1 and battery2 max current Battery1 max current, chNum=10;Battery2 max current, chNum=11
		// "params":{ "cmdSet": 11, "id": 20, "chNum": 0, "cur": 10 }
		//Setting the split phase info  "params":{ "cmdSet": 11, "id": 18, "cfgList": [ { "linkMark": 1, "linkCh": 0 }, { "linkMark": 1, "linkCh": 1 }, { "linkMark": 1, "linkCh": 2 }, { "linkMark": 1, "linkCh": 3 }, { "linkMark": 1, "linkCh": 4 }, { "linkMark": 1, "linkCh": 5 }, { "linkMark": 1, "linkCh": 6 }, { "linkMark": 1, "linkCh": 7 }, { "linkMark": 1, "linkCh": 8 }, { "linkMark": 1, "linkCh": 9 } ] }
		// Setting the load channel info 	"params":{ "cmdSet": 11, "id": 32, "chNum": 1, "info": { "chName": "ch1", "iconNum": 10 } }
		// Setting the scheduled charging task 	"params":{ "cfg":{ "param":{ "lowBattery":95, "chChargeWatt":2000, "chSta":[ 1, 0 ], "hightBattery":100 }, "comCfg":{ "timeScale":[ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 127 ], "isCfg":1, "type":1, "timeRange":{ "isCfg":1, "startTime":{ "sec":0, "min":0, "week":4, "hour":0, "month":1, "year":2023, "day":11 }, "timeMode":0, "endTime":{ "sec":59, "min":59, "week":7, "hour":23, "month":1, "year":2023, "day":22 }, "mode1":{ "thur":0, "sat":0, "wed":0, "tues":0, "fri":0, "sun":0, "mon":0 }, "isEnable":1 }, "isEnable":1, "setTime":{ "sec":35, "min":53, "week":4, "hour":15, "month":1, "year":2023, "day":11 } } }, "cfgIndex":1, "cmdSet":11, "id":81 }
		// Setting the scheduled discharging task 	"params":{ "cfg":{ "chSta":[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], "comCfg":{ "timeScale":[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], "isCfg":1, "type":2, "timeRange":{ "isCfg":1, "timeMode":0, "startTime":{ "sec":0, "min":0, "week":2, "hour":0, "month":10, "year":2022, "day":24 }, "endTime":{ "sec":59, "min":59, "week":2, "hour":23, "month":10, "year":2022, "day":25 }, "isEnable":1 }, "isEnable":1, "setTime":{ "sec":61, "min":9, "week":7, "hour":16, "month":11, "year":2022, "day":15 } } }, "cfgIndex":0, "cmdSet":11, "id":82 }
		action: {
			latestQuotas: {
				msg: {
					from: 'iOS',
					operateType: 'latestQuotas',
					id: '83154039',
					lang: 'de-de',
					params: {},
					version: '1.0'
				}
			},
			getHeartbeat: { operateType: 'TCP', params: { cmdSet: 11, id: 2, quotas: [ 'heartbeat' ] } }, //guess for latestQuotas
			getTime: { operateType: 'TCP', params: { cmdSet: 11, id: 3, quotas: [ 'heartbeat.time' ] } },
			getGridInfo: { operateType: 'TCP', params: { cmdSet: 11, id: 22, quotas: [ 'gridInfo' ] } },
			getChargeSetting: { operateType: 'TCP', params: { cmdSet: 11, id: 29, quotas: [ 'backupChaDiscCfg' ] } },
			getLoadChCurInfo: { operateType: 'TCP', params: { cmdSet: 11, id: 20, quotas: [ 'loadChCurInfo' ] } },
			getEpsMode: { operateType: 'TCP', params: { cmdSet: 11, id: 24, quotas: [ 'epsModeInfo' ] } },
			getLoadChControl: {
				operateType: 'TCP',
				params: { cmdSet: 11, id: 16, quotas: [ 'heartbeat.loadCmdChCtrlInfos' ] }
			},
			getBackupChControl: {
				operateType: 'TCP',
				params: { cmdSet: 11, id: 17, quotas: [ 'heartbeat.backupCmdChCtrlInfos' ] }
			},
			getSplitPhaseInfo: { operateType: 'TCP', params: { cmdSet: 11, id: 18, quotas: [ 'splitPhaseInfo' ] } },
			getChUseInfo: { operateType: 'TCP', params: { cmdSet: 11, id: 26, quotas: [ 'chUseInfo' ] } },
			getLoadChInfo: { operateType: 'TCP', params: { cmdSet: 11, id: 32, quotas: [ 'loadChInfo' ] } },
			getTimeTask: { operateType: 'TCP', params: { cmdSet: 11, id: 81, quotas: [ 'timeTask' ] } },
			getCfgSta: { operateType: 'TCP', params: { cmdSet: 11, id: 7, quotas: [ 'cfgSta' ] } },
			getEmergencyStrategy: {
				operateType: 'TCP',
				params: { cmdSet: 11, id: 65, quotas: [ 'emergencyStrategy' ] }
			}, // guess
			getmainsLoadWatt: { operateType: 'TCP', params: { cmdSet: 11, id: 48, quotas: [ 'mainsLoadWatt' ] } }, // guess
			getbackupLoadWatt: { operateType: 'TCP', params: { cmdSet: 11, id: 49, quotas: [ 'backupLoadWatt' ] } }, // guess
			gettopupLoadWatt: { operateType: 'TCP', params: { cmdSet: 11, id: 50, quotas: [ 'topupLoadWatt' ] } } // guess
		}
	}
};

module.exports = {
	panelStates,
	panelStatesDict,
	panelRanges,
	panelCmd
};
