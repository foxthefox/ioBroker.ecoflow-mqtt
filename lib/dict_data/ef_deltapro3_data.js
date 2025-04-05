const deviceStates = {
	DisplayPropertyUpload: {
		array: {
			plugInInfo_4p8_1Resv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_1 resv',
				role: 'list'
			},
			plugInInfo_4p8_2Resv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_2 resv',
				role: 'list'
			},
			plugInInfo_5p8Resv: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_5p8 resv',
				role: 'list'
			}
		},
		string: {
			errcode: { entity_type: 'text', entity_category: 'diagnostic', name: 'errcode', role: 'info' },
			utcTimezoneId: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'utc timezone id',
				role: 'info'
			},
			pcsFanLevel: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs fan level', role: 'info' },
			plugInInfo_5p8Detail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_5p8 detail',
				role: 'info'
			},
			bmsErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'bms err code', role: 'info' },
			plugInInfo_4p8_1Detail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_1 detail',
				role: 'info'
			},
			plugInInfo_4p8_2Detail: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_2 detail',
				role: 'info'
			},
			plugInInfo_4p8_1Sn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'SN of the device connected to the Extra Battery port',
				role: 'info'
			},
			plugInInfo_4p8_1FirmVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_1 firm ver',
				role: 'info'
			},
			plugInInfo_4p8_2Sn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'SN of the ecosystem product connected to Extra Battery Port 2',
				role: 'info'
			},
			plugInInfo_4p8_2FirmVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_2 firm ver',
				role: 'info'
			},
			plugInInfo_5p8DsgChg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging/Discharging type of the Power In/Out port',
				role: 'info'
			},
			plugInInfo_5p8Sn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'SN of the device connected to the Power In/Out port',
				role: 'info'
			},
			plugInInfo_5p8FirmVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_5p8 firm ver',
				role: 'info'
			},
			pdErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd err code', role: 'info' },
			llcErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'llc err code', role: 'info' },
			mpptErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'mppt err code', role: 'info' },
			plugInInfo_5p8ErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_5p8 err code',
				role: 'info'
			},
			plugInInfo_4p8_1ErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_1 err code',
				role: 'info'
			},
			plugInInfo_4p8_2ErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_2 err code',
				role: 'info'
			},
			llcInvErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc inv err code',
				role: 'info'
			}
		},
		number: {
			powInSumW: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Total input power',
				subrole: 'number'
			},
			powOutSumW: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Total output power',
				subrole: 'number'
			},
			energyBackupStartSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Backup reserve level',
				subrole: 'number'
			},
			powGetQcusb1: {
				min: 0,
				max: 120,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of the USB 1 port',
				subrole: 'number'
			},
			powGetQcusb2: {
				min: 0,
				max: 120,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of the USB 2 port',
				subrole: 'number'
			},
			powGetTypec1: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of Type-C port 1',
				subrole: 'number'
			},
			powGetTypec2: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of Type-C port 2',
				subrole: 'number'
			},
			acAlwaysOnMiniSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Sets the minimum SOC to enable the AC Always-on function',
				subrole: 'number'
			},
			powGetPvH: {
				min: 0,
				max: 1600,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time high-voltage PV power',
				subrole: 'number'
			},
			powGetPvL: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time low-voltage PV power',
				subrole: 'number'
			},
			powGet_12v: {
				min: 0,
				max: 60,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time 12V power',
				subrole: 'number'
			},
			powGet_24v: {
				min: 0,
				max: 400,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time 24V power',
				subrole: 'number'
			},
			powGetLlc: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'pow get llc',
				subrole: 'number'
			},
			powGetAc: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time AC power',
				subrole: 'number'
			},
			powGetAcIn: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time AC input power',
				subrole: 'number'
			},
			powGetAcHvOut: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time grid power',
				subrole: 'number'
			},
			powGetAcLvOut: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time low-voltage AC output power',
				subrole: 'number'
			},
			powGetAcLvTt30Out: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of the low-voltage AC output port',
				subrole: 'number'
			},
			powGet_5p8: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of the Power In/Out port',
				subrole: 'number'
			},
			utcTimezone: {
				min: -1200,
				max: 1200,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'utc timezone',
				subrole: 'number'
			},
			powGetBms: {
				min: 0,
				max: 8000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'pow get bms',
				subrole: 'number'
			},
			powGet_4p8_1: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of Extra Battery Port 1',
				subrole: 'number'
			},
			powGet_4p8_2: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Real-time power of Extra Battery Port 2',
				subrole: 'number'
			},
			acOutFreq: {
				min: 49,
				max: 61,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'AC output frequency',
				subrole: 'number'
			},
			plugInInfoPvHChgVolMax: {
				min: 0,
				max: 150,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Maximum charging voltage of the high-voltage PV port',
				subrole: 'number'
			},
			plugInInfoPvHChgAmpMax: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Maximum charging current of the high-voltage PV port',
				subrole: 'number'
			},
			bmsBattSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'SOC of the main battery',
				subrole: 'number'
			},
			bmsBattSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'SOH of the main battery',
				subrole: 'number'
			},
			bmsDesignCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'value',
				name: 'Battery capacity',
				subrole: 'number'
			},
			bmsDsgRemTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining discharging time',
				subrole: 'number'
			},
			bmsChgRemTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining charging time of the main battery',
				subrole: 'number'
			},
			bmsMinCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Minimum temperature of the main battery',
				subrole: 'number'
			},
			bmsMaxCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Temperature of the main battery',
				subrole: 'number'
			},
			bmsMinMosTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'bms min mos temp',
				subrole: 'number'
			},
			bmsMaxMosTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'bms max mos temp',
				subrole: 'number'
			},
			cmsBattSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Overall SOC',
				subrole: 'number'
			},
			cmsBattSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Overall SOH',
				subrole: 'number'
			},
			cmsDsgRemTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining discharging time',
				subrole: 'number'
			},
			cmsChgRemTime: {
				min: 0,
				max: 15999,
				unit_of_measurement: 'min',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'Remaining charging time',
				subrole: 'number'
			},

			timeTaskChangeCnt: {
				min: 0,
				max: 60,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'time task change cnt',
				subrole: 'number'
			},
			generatorPvHybridModeSocMax: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'generator pv hybrid mode soc max',
				subrole: 'number'
			},
			generatorCareModeStartTime: {
				min: 0,
				max: 2000,
				unit_of_measurement: 'h',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'generator care mode start time',
				subrole: 'number'
			},
			plugInInfoAcInFeq: {
				min: 50,
				max: 60,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'AC input frequency',
				subrole: 'number'
			},

			plugInInfoPvLChgVolMax: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Maximum charging voltage of the low-voltage PV port',
				subrole: 'number'
			},
			plugInInfoPvLChgAmpMax: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Maximum charging current of the PV port',
				subrole: 'number'
			},
			plugInInfo_5p8DsgPowMax: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Maximum discharging power of the Power In/Out port',
				subrole: 'number'
			},
			plugInInfoAcOutDsgPowMax: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Maximum AC discharging power',
				subrole: 'number'
			},
			plugInInfo_5p8ChgHalPowMax: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Maximum AC charging power In/Out port',
				subrole: 'number'
			},
			plugInInfoAcInChgHalPowMax: {
				min: 0,
				max: 2000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Maximum AC charging power',
				subrole: 'number'
			}
		},
		diagnostic: {
			outputPowerOffMemory: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'output power off memory',
				outputPowerOffMemory: { '0': 'OFF?', '1': 'ON?' }
			},
			timeTaskConflictFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'time task conflict flag',
				timeTaskConflictFlag: { '0': 'no conflict?', '1': 'conflict?' }
			},
			generatorPvHybridModeOpen: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Generator and solar energy hybrid mode',
				generatorPvHybridModeOpen: { '0': 'off', '1': 'on' }
			},
			generatorCareModeOpen: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Night care mode switch',
				generatorCareModeOpen: { '0': 'off', '1': 'on' }
			},

			fastChargeSwitch: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Fast charging slider switch',
				fastChargeSwitch: { '0': ' fast charging', '1': 'custom charging power' }
			},
			energyBackupState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'energy backup state',
				energyBackupState: { '0': 'OK?' }
			},
			energyBackupEn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Backup reserve function switch',
				energyBackupEn: { '0': 'off', '1': 'on' }
			},
			plugInInfoPvHFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Indicates whether the high-voltage PV port is connected',
				role: 'info',
				plugInInfoPvHFlag: { '0': 'disconnected', '1': 'connected' }
			},
			plugInInfoPvHType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'High-voltage PV port charging mode',
				role: 'info',
				plugInInfoPvHType: { '1': 'car charging', '2': 'solar charging', '3': 'DC charging' }
			},
			plugInInfoPvLFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Indicates whether the low-voltage PV port is connected',
				role: 'info',
				plugInInfoPvLFlag: { '0': 'disconnected', '1': 'connected' }
			},
			utcSetMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'utc set mode',
				role: 'info',
				utcSetMode: { '0': 'OK?' }
			},
			plugInInfoPvHChargerFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV connection status',
				role: 'info',
				plugInInfoPvHChargerFlag: { '0': 'disconnected', '1': 'connected' }
			},
			devSleepState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Sleep status',
				role: 'info',
				devSleepState: { '0': 'Off?', '1': 'On?' }
			},
			llcHvLvFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'High-voltage/Low-voltage AC identifier',
				role: 'info',
				llcHvLvFlag: { '0': 'LV?', '1': 'HV?' }
			},
			cmsBmsRunState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'On/Off status',
				role: 'info',
				cmsBmsRunState: { '0': 'off', '1': 'on' }
			},
			bmsChgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging/Discharging status of the main battery',
				role: 'info',
				bmsChgDsgState: { '0': 'not charging or discharging', '1': 'discharging', '2': 'charging' }
			},
			cmsChgDsgState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging/Discharging status',
				role: 'info',
				cmsChgDsgState: { '0': 'not charging or discharging', '1': 'discharging', '2': 'charging' }
			},
			acHvAlwaysOn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Sets the High-voltage AC Always-on function',
				role: 'info',
				acHvAlwaysOn: { '0': 'OK?' }
			},
			acLvAlwaysOn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC Always-on',
				role: 'info',
				acLvAlwaysOn: { '0': 'OK?' }
			},
			plugInInfoPvLType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PV port charging mode',
				role: 'info',
				plugInInfoPvLType: { '0': 'disconnected', '1': 'connected' }
			},
			plugInInfoAcInFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Indicates whether the AC charging port is connected',
				role: 'info',
				plugInInfoAcInFlag: { '0': 'disconnected', '1': 'connected' }
			},
			plugInInfo_5p8Flag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Indicates whether the Power In/Out port is connected',
				role: 'info',
				plugInInfo_5p8Flag: { '0': 'disconnected', '1': 'connected' }
			},
			plugInInfo_5p8Type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_5p8 type',
				role: 'info',
				plugInInfo_5p8Type: { '0': 'type?' }
			},
			plugInInfo_4p8_1InFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Indicates whether Extra Battery Port 1 is connected',
				role: 'info',
				plugInInfo_4p8_1InFlag: { '0': 'disconnected', '1': 'connected' }
			},
			plugInInfo_4p8_1Type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_1 type',
				role: 'info',
				plugInInfo_4p8_1Type: { '0': 'type?' }
			},
			plugInInfo_4p8_2InFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Indicates whether the Extra Battery port is connected',
				role: 'info',
				plugInInfo_4p8_2InFlag: { '0': 'disconnected', '1': 'connected' }
			},
			plugInInfo_4p8_2Type: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info_4p8_2 type',
				role: 'info',
				plugInInfo_4p8_2Type: { '0': 'type?' }
			},
			plugInInfoPvLChargerFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Identifier of charger connection to the low-voltage PV port',
				role: 'info',
				plugInInfoPvLChargerFlag: { '0': 'disconnected', '1': 'connected' }
			},
			plugInInfo_4p8_1DsgChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging/Discharging type of Extra Battery Port 1',
				role: 'info',
				plugInInfo_4p8_1DsgChgType: {
					'0': 'reserved',
					'1': 'charging/discharging',
					'2': 'charging only',
					'3': 'discharging only'
				}
			},
			plugInInfo_4p8_2DsgChgType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charging/Discharging type of Extra Battery Port 2',
				role: 'info',
				plugInInfo_4p8_2DsgChgType: {
					'0': 'reserved',
					'1': 'charging/discharging',
					'2': 'charging only',
					'3': 'discharging only'
				}
			},
			plugInInfoAcChargerFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Indicates whether the charger is connected to the AC port',
				role: 'info',
				plugInInfoAcChargerFlag: { '0': 'not charging?', '1': 'charging?' }
			},
			plugInInfo_5p8ChargerFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating status of the device connected to the Power In/Out port',
				role: 'info',
				plugInInfo_5p8ChargerFlag: { '0': 'not charging?', '1': 'charging?' }
			},
			plugInInfo_5p8RunState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating status of the device connected to the Power In/Out port',
				role: 'info',
				plugInInfo_5p8RunState: { '0': 'OK?' }
			},
			plugInInfo_4p8_1ChargerFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Identifier of charger connection to Extra Battery Port 1',
				role: 'info',
				plugInInfo_4p8_1ChargerFlag: { '0': 'not charging?', '1': 'charging?' }
			},
			plugInInfo_4p8_1RunState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating status of the device connected to Extra Battery Port 1',
				role: 'info',
				plugInInfo_4p8_1RunState: { '0': 'OK?' }
			},
			plugInInfo_4p8_2ChargerFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Identifier of charger connection to Extra Battery Port 2',
				role: 'info',
				plugInInfo_4p8_2ChargerFlag: { '0': 'not charging?', '1': 'charging?' }
			},
			plugInInfo_4p8_2RunState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Operating status of the device connected to Extra Battery Port 2',
				role: 'info',
				plugInInfo_4p8_2RunState: { '0': 'OK?' }
			},
			pcsFanErrFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pcs fan err flag',
				role: 'info',
				pcsFanErrFlag: { '0': 'OK?', '1': 'error' }
			},
			flowInfoQcusb1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'USB output port 1 switch status',
				role: 'info',
				flowInfoQcusb1: { '0': 'off', '2': 'on' }
			},
			flowInfoQcusb2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'USB output port 2 switch status',
				role: 'info',
				flowInfoQcusb2: { '0': 'off', '2': 'on' }
			},
			flowInfoTypec1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Type-C port 1 switch status',
				role: 'info',
				flowInfoTypec1: { '0': 'off', '2': 'on' }
			},
			flowInfoTypec2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Type-C port 2 switch status',
				role: 'info',
				flowInfoTypec2: { '0': 'off', '2': 'on' }
			},
			flowInfoPvH: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'High-voltage PV switch status',
				role: 'info',
				flowInfoPvH: { '0': 'off', '2': 'on' }
			},
			flowInfoPvL: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Low-voltage PV switch status',
				role: 'info',
				flowInfoPvL: { '0': 'off', '2': 'on' }
			},
			flowInfo_12v: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'flow info_12v',
				role: 'info',
				flowInfo_12v: { '0': 'off', '2': 'on' }
			},
			flowInfo_24v: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'flow info_24v',
				role: 'info',
				flowInfo_24v: { '0': 'off', '2': 'on' }
			},
			flowInfoAc2dc: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'flow info ac2dc',
				role: 'info',
				flowInfoAc2dc: { '0': 'off', '2': 'on' }
			},
			flowInfoDc2ac: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'flow info dc2ac',
				role: 'info',
				flowInfoDc2ac: { '0': 'off', '2': 'on' }
			},
			flowInfoAcIn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC input switch status',
				role: 'info',
				flowInfoAcIn: { '0': 'off', '2': 'on' }
			},
			flowInfoAcHvOut: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'High-voltage AC output switch status',
				role: 'info',
				flowInfoAcHvOut: { '0': 'off', '2': 'on' }
			},
			flowInfoAcLvOut: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC low-voltage output switch status',
				role: 'info',
				flowInfoAcLvOut: { '0': 'off', '2': 'on' }
			},
			flowInfo_5p8In: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power In/Out port switch status',
				role: 'info',
				flowInfo_5p8In: { '0': 'off', '2': 'on' }
			},
			flowInfo_5p8Out: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Power In/Out port switch status',
				role: 'info',
				flowInfo_5p8Out: { '0': 'off', '2': 'on' }
			},
			flowInfoBmsDsg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'flow info bms dsg',
				role: 'info',
				flowInfoBmsDsg: { '0': 'off', '2': 'on' }
			},
			flowInfoBmsChg: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'flow info bms chg',
				role: 'info',
				flowInfoBmsChg: { '0': 'off', '2': 'on' }
			},
			flowInfo_4p8_1In: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Extra Battery Port 1 input switch status',
				role: 'info',
				flowInfo_4p8_1In: { '0': 'off', '2': 'on' }
			},
			flowInfo_4p8_1Out: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Extra Battery Port 1 switch status',
				role: 'info',
				flowInfo_4p8_1Out: { '0': 'off', '2': 'on' }
			},
			flowInfo_4p8_2In: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Extra Battery Port 2 input switch status',
				role: 'info',
				flowInfo_4p8_2In: { '0': 'off', '2': 'on' }
			},
			flowInfo_4p8_2Out: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Extra Battery port output switch status',
				role: 'info',
				flowInfo_4p8_2Out: { '0': 'off', '2': 'on' }
			}
		},
		switch: {
			cmsOilSelfStart: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Smart Generator auto start/stop switch',
				role: 'switch',
				cmsOilSelfStart: { '0': 'off', '1': 'on' }
			},
			acEnergySavingOpen: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'AC energy-saving mode switch',
				role: 'switch',
				acEnergySavingOpen: { '0': 'off', '1': 'on' }
			},
			xboostEn: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'X-Boost switch',
				role: 'switch',
				xboostEn: { '0': 'off', '1': 'on' }
			},
			enBeep: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Beeper on/off. (true: on, false: off.)',
				role: 'switch',
				enBeep: { '0': 'off', '1': 'on' }
			},
			llc_GFCIFlag: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'GFCI switch',
				role: 'switch',
				llc_GFCIFlag: { '0': 'off', '1': 'on' }
			},
		},
		level: {
			cmsOilOnSoc: {
				min: 10,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC for automatically starting the Smart Generator',
				role: 'level'
			},
			cmsOilOffSoc: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'SOC for automatically stopping the Smart Generator',
				role: 'level'
			},
			lcdLight: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 0.390625,
				step: 1,
				entity_type: 'sensor',
				device_class: 'brightness',
				name: 'Screen brightness',
				role: 'level',
				subrole: 'number'
			},
			devStandbyTime: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'duration',
				name: 'Device timeout (min)',
				role: 'level',
				subrole: 'timer',
				//30m,1h,2h,4h,6h,12h,24h,never
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
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					240: '4 hr',
					360: '6 hr',
					720: '12 hr',
					1440: '24 hr'
				}
			},
			screenOffTime: {
				min: 0,
				max: 1800,
				unit_of_measurement: 's',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'duration',
				name: 'Screen timeout (s)',
				role: 'level',
				subrole: 'timer',
				//10s,30s,1m,5m,30m,never
				select: ['Never', '10 s', '30 s', '1 min', '5 min', '30 min'],
				select_obj: {
					Never: 0,
					'10 s': 10,
					'30 s': 30,
					'1 min': 60,
					'5 min': 300,
					'30 min': 1800
				},
				states: {
					0: 'Never',
					10: '10 s',
					30: '30 s',
					60: '1 min',
					300: '5 min',
					1800: '30 min'
				}
			},
			cmsMaxChgSoc: {
				min: 50,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Charge limit',
				role: 'level'
			},
			cmsMinDsgSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				name: 'Discharge limit',
				role: 'level'
			},
			//cfgBleStandbyTime: (Hours)? 
			//Wifi/BT timeout 1h,6h,12h,1day,7day,30day
			//2592000
			bleStandbyTime: {
				min: 0,
				max: 2592000,
				unit_of_measurement: 's',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'duration',
				name: 'Device timeout',
				role: 'level',
				subrole: 'timer',
				//1h,6h,12h,1day,7day,30day
				select: ['Never', '1 hr', '6 hr', '24 hr', '7 day', '30 day'],
				select_obj: {
					Never: 0,
					'1 hr': 3600,
					'6 hr': 21600,
					'24 hr': 86400,
					'7 day': 604800,
					'30 day': 2592000
				},
				states: {
					0: 'Never',
					3600: '1 hr',
					21600: '6 hr',
					86400: '24 hr',
					604800: '7 day',
					2592000: '30 day'
				}
			},
			dcStandbyTime: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'duration',
				name: 'DC timeout (min)',
				role: 'level',
				subrole: 'timer',
				//30m,1h,2h,4h,6h,12h,24h,never
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
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					240: '4 hr',
					360: '6 hr',
					720: '12 hr',
					1440: '24 hr'
				}
			},
			acStandbyTime: {
				min: 0,
				max: 1440,
				unit_of_measurement: 'min',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'duration',
				name: 'AC timeout (min)',
				role: 'level',
				subrole: 'timer',
				//30m,1h,2h,4h,6h,12h,24h,never
				select: ['Never', '30 min', '1 hr', '2 hr', '6 hr', '12 hr', '24 hr'],
				select_obj: {
					Never: 0,
					'30 min': 30,
					'1 hr': 60,
					'2 hr': 120,
					'6 hr': 360,
					'12 hr': 720,
					'24 hr': 1440
				},
				states: {
					0: 'Never',
					30: '30 min',
					60: '1 hr',
					120: '2 hr',
					360: '6 hr',
					720: '12 hr',
					1440: '24 hr'
				}
			},
			plugInInfoAcInChgPowMax: {
				min: 100,
				max: 1500,
				unit_of_measurement: 'W',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Maximum AC input power for charging',
				role: 'level'
			},
			plugInInfo_5p8ChgPowMax: {
				min: 500,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'power',
				name: 'Maximum charging power of the Power In/Out port',
				role: 'level'
			},
			multiBpChgDsgMode: {
				min: 0,
				max: 2,
				unit_of_measurement: '',
				mult: 1,
				step: 1,
				entity_type: 'select',
				device_class: 'power',
				name: 'Battery charging/discharging order',
				role: 'level',
				subrole: 'number',
				select: ['default', 'automatic', 'main bat prio'],
				select_obj: {
					default: 0,
					automatic: 1,
					'main bat prio': 2
				},
				states: {
					0: 'Never',
					1: 'automatic',
					2: 'main bat prio'
				}
				//website
				//0: default
				//1: The device will automatically decide the charge and discharge order based on each battery's voltage.
				//2: The main battery is prioritized during charging, and extra batteries are prioritized during discharging.
			},
			plugInInfoPvLDcAmpMax: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Maximum input current of the low-voltage PV port',
				role: 'level'
			},
			plugInInfoPvHDcAmpMax: {
				min: 0,
				max: 10,
				unit_of_measurement: 'A',
				mult: 1,
				step: 1,
				entity_type: 'sensor',
				device_class: 'current',
				name: 'Maximum input current of the high-voltage PV port',
				role: 'level'
			},
		}
	},
	RuntimePropertyUpload: {
		diagnostic: {
			acPhaseType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'ac phase type',
				role: 'info',
				acPhaseType: { '0': 'OK?' }
			},
			pcsWorkMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pcs work mode',
				role: 'info',
				pcsWorkMode: { '0': 'OK?' }
			},
			plugInInfoAcOutType: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'plug in info ac out type',
				role: 'info',
				plugInInfoAcOutType: { '0': 'OK?' }
			},
			mpptMonitorFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mppt monitor flag',
				role: 'info',
				mpptMonitorFlag: { '0': 'OK?' }
			},
			bmsBalState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms bal state',
				role: 'info',
				bmsBalState: { '0': 'OK?' }
			},
			bmsAlmState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms alm state',
				role: 'info',
				bmsAlmState: { '0': 'OK?' }
			},
			bmsProState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms pro state',
				role: 'info',
				bmsProState: { '0': 'OK?' }
			},
			bmsFltState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms flt state',
				role: 'info',
				bmsFltState: { '0': 'OK?' }
			},

			bmsAlmState_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms alm state_2',
				role: 'info',
				bmsAlmState_2: { '0': 'OK?' }
			},
			bmsProState_2: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms pro state_2',
				role: 'info',
				bmsProState_2: { '0': 'OK?' }
			},
			invMonitorFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'inv monitor flag',
				role: 'info',
				invMonitorFlag: { '0': 'OK?' }
			},
			invMainFsmstate: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'inv main fsmstate',
				role: 'info',
				invMainFsmstate: { '0': 'OK?' }
			},
			l1MainFsmstate: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'l1 main fsmstate',
				role: 'info',
				l1MainFsmstate: { '0': 'OK?' }
			},
			l2MainFsmstate: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'l2 main fsmstate',
				role: 'info',
				l2MainFsmstate: { '0': 'OK?' }
			},
			llcMonitorFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc monitor flag',
				role: 'info',
				llcMonitorFlag: { '0': 'OK?' }
			},
			llcFsmstate: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc fsmstate',
				role: 'info',
				llcFsmstate: { '0': 'OK?' }
			},
			pdToInvDsgMode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pd to inv dsg mode',
				role: 'info',
				pdToInvDsgMode: { '0': 'OK?' }
			}
		},
		icon: {
			bmsOverloadIcon: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms overload icon',
				role: 'info',
				bmsOverloadIcon: { '0': 'OK?' }
			},
			bmsWarnIcon: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms warn icon',
				role: 'info',
				bmsWarnIcon: { '0': 'OK?' }
			},
			bmsLimitIcon: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bms limit icon',
				role: 'info',
				bmsLimitIcon: { '0': 'OK?' }
			},
			bmsHighTempIcon: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'bms high temp icon',
				subrole: 'number'
			},
			bmsLowTempIcon: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'bms low temp icon',
				subrole: 'number'
			}
		},
		number: {
			tempPcsDc: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'temp pcs dc',
				subrole: 'number'
			},
			tempPcsAc: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'temp pcs ac',
				subrole: 'number'
			},
			tempPvH: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'temp pv h',
				subrole: 'number'
			},
			tempPvL: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'temp pv l',
				subrole: 'number'
			},
			plugInInfoPvHVol: {
				min: 0,
				max: 150,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info pv h vol',
				subrole: 'number'
			},
			plugInInfoPvLVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info pv l vol',
				subrole: 'number'
			},
			plugInInfoAcOutFreq: {
				min: 49,
				max: 61,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'plug in info ac out freq',
				subrole: 'number'
			},
			plugInInfo_5p8Freq: {
				min: 0,
				max: 61,
				unit_of_measurement: 'Hz',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'frequency',
				role: 'value',
				name: 'plug in info_5p8 freq',
				subrole: 'number'
			},
			plugInInfoAcInVol: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info ac in vol',
				subrole: 'number'
			},
			plugInInfo_24vVol: {
				min: 0,
				max: 30,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info_24v vol',
				subrole: 'number'
			},
			plugInInfo_24vAmp: {
				min: -30,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info_24v amp',
				subrole: 'number'
			},
			plugInInfoL1Vol: {
				min: 0,
				max: 240,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info l1 vol',
				subrole: 'number'
			},
			plugInInfo_4p8_1Vol: {
				min: 0,
				max: 240,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info_4p8_1 vol',
				subrole: 'number'
			},
			plugInInfo_4p8_2Vol: {
				min: 0,
				max: 240,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info_4p8_2 vol',
				subrole: 'number'
			},
			plugInInfoBmsVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info bms vol',
				subrole: 'number'
			},
			plugInInfoL1Amp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info l1 amp',
				subrole: 'number'
			},
			plugInInfoL2Vol: {
				min: 0,
				max: 240,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info l2 vol',
				subrole: 'number'
			},
			plugInInfoL2Amp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info l2 amp',
				subrole: 'number'
			},
			plugInInfoAcpL1Vol: {
				min: 0,
				max: 240,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info acp l1 vol',
				subrole: 'number'
			},
			plugInInfoAcpL1l2Vol: {
				min: 0,
				max: 240,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info acp l1l2 vol',
				subrole: 'number'
			},
			plugInInfoPvHAmp: {
				min: 0,
				max: 15,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info pv h amp',
				subrole: 'number'
			},
			plugInInfoPvLAmp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info pv l amp',
				subrole: 'number'
			},
			plugInInfoAcInAmp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info ac in amp',
				subrole: 'number'
			},
			plugInInfo_4p8_1Amp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info_4p8_1 amp',
				subrole: 'number'
			},
			plugInInfo_4p8_2Amp: {
				min: 0,
				max: 30,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info_4p8_2 amp',
				subrole: 'number'
			},
			bmsBattVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'bms batt vol',
				subrole: 'number'
			},
			bmsBattAmp: {
				min: -80,
				max: 80,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'bms batt amp',
				subrole: 'number'
			},
			bmsFullCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'value',
				name: 'bms full cap',
				subrole: 'number'
			},
			bmsRemainCap: {
				min: 0,
				max: 80000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'value',
				name: 'bms remain cap',
				subrole: 'number'
			},
			bmsMinCellVol: {
				min: 0,
				max: 5,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Minimum voltage of the main battery',
				subrole: 'number'
			},
			bmsMaxCellVol: {
				min: 0,
				max: 5,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'bms max cell vol',
				subrole: 'number'
			},
			cmsBattVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'cms batt vol',
				subrole: 'number'
			},
			cmsBattAmp: {
				min: -80,
				max: 80,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'cms batt amp',
				subrole: 'number'
			},
			cmsChgReqVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'cms chg req vol',
				subrole: 'number'
			},
			cmsChgReqAmp: {
				min: 0,
				max: 80,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'cms chg req amp',
				subrole: 'number'
			},

			runtimePropertyFullUploadPeriod: {
				min: 0,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'runtime property full upload period',
				subrole: 'number'
			},
			runtimePropertyIncrementalUploadPeriod: {
				min: 0,
				unit_of_measurement: 's',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'duration',
				role: 'value',
				name: 'runtime property incremental upload period',
				subrole: 'number'
			},
			mpptRecvCmsChgReqVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'mppt recv cms chg req vol',
				subrole: 'number'
			},
			mpptRecvCmsChgReqAmp: {
				min: 0,
				max: 80,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'mppt recv cms chg req amp',
				subrole: 'number'
			},
			pv2BusVol: {
				min: 0,
				max: 150,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'pv2 bus vol',
				subrole: 'number'
			},
			mpptBatVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'mppt bat vol',
				subrole: 'number'
			},
			mpptBatAmp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'mppt bat amp',
				subrole: 'number'
			},
			adsNtcTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'ads ntc temp',
				subrole: 'number'
			},
			plugInInfoPfcOutVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info pfc out vol',
				subrole: 'number'
			},
			powGetL1: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'pow get l1',
				subrole: 'number'
			},
			powGetL2: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'pow get l2',
				subrole: 'number'
			},
			invBusVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'inv bus vol',
				subrole: 'number'
			},
			invNtcTemp2: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'inv ntc temp2',
				subrole: 'number'
			},
			invNtcTemp3: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'inv ntc temp3',
				subrole: 'number'
			},
			llcNtcTemp: {
				min: 0,
				max: 100,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'llc ntc temp',
				subrole: 'number'
			},
			dcdcChgReqCur: {
				min: 0,
				max: 80,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'dcdc chg req cur',
				subrole: 'number'
			},
			llcRecvCmsChgReqVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'llc recv cms chg req vol',
				subrole: 'number'
			},
			invToLlcAcPowLim: {
				min: 0,
				max: 4000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'inv to llc ac pow lim',
				subrole: 'number'
			},
			plugInInfo_12vVol: {
				min: 0,
				max: 16,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'plug in info_12v vol',
				subrole: 'number'
			},
			plugInInfo_12vAmp: {
				min: 0,
				max: 10,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'plug in info_12v amp',
				subrole: 'number'
			},
			llcBatVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'llc bat vol',
				subrole: 'number'
			},
			llcBatCur: {
				min: -60,
				max: 60,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'llc bat cur',
				subrole: 'number'
			},
			llcBusVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'llc bus vol',
				subrole: 'number'
			}
		},
		string: {
			pdMpptCommErr: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'pd mppt comm err',
				role: 'info'
			},
			pdLlcCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd llc comm err', role: 'info' },
			pdBmsCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd bms comm err', role: 'info' },
			pdIotCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd iot comm err', role: 'info' },
			pdFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd firm ver', role: 'info' },
			iotFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'iot firm ver', role: 'info' },
			mpptFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'mppt firm ver', role: 'info' },
			llcFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'llc firm ver', role: 'info' },
			llcInvFirmVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'llc inv firm ver',
				role: 'info'
			},
			bmsFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'bms firm ver', role: 'info' },
			bmsErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'bms err code', role: 'info' },
			displayPropertyFullUploadPeriod: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'display property full upload period',
				role: 'info'
			},
			displayPropertyIncrementalUploadPeriod: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'display property incremental upload period',
				role: 'info'
			},
			pvVinRef: { entity_type: 'text', entity_category: 'diagnostic', name: 'pv vin ref', role: 'info' },
			pv2VinRef: { entity_type: 'text', entity_category: 'diagnostic', name: 'pv2 vin ref', role: 'info' },
			pvPauseCnt: { entity_type: 'text', entity_category: 'diagnostic', name: 'pv pause cnt', role: 'info' },
			pv2PauseCnt: { entity_type: 'text', entity_category: 'diagnostic', name: 'pv2 pause cnt', role: 'info' },
			mpptFanspeed: { entity_type: 'text', entity_category: 'diagnostic', name: 'mppt fanspeed', role: 'info' },
			mpptHardwareVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'mppt hardware ver',
				role: 'info'
			},
			pdSktOcp1: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd skt ocp1', role: 'info' },
			pdSktOcp2: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd skt ocp2', role: 'info' },
			pdSktOcp3: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd skt ocp3', role: 'info' },
			pdSktOcp4: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd skt ocp4', role: 'info' },
			pdSktOcp5: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd skt ocp5', role: 'info' }
		}
	},
	setDp3: {
		switch: {
			cfgPowerOff: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'Shut down the entire device',
				role: 'switch',
				cfgPowerOff: { '0': 'off', '1': 'on' }
			},

			cfgHvAcOutOpen: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'high-voltage AC output switch',
				role: 'switch',
				cfgHvAcOutOpen: { '0': 'off', '1': 'on' }
			},
			cfgLvAcOutOpen: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: 'low-voltage AC output switch',
				role: 'switch',
				cfgLvAcOutOpen: { '0': 'off', '1': 'on' }
			},
			cfgDc12vOutOpen: {
				entity_type: 'switch',
				device_class: 'switch',
				payload_off: 'off',
				payload_on: 'on',
				name: '12V output switch',
				role: 'switch',
				cfgDc12vOutOpen: { '0': 'off', '1': 'on' }
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

const deviceStatesDict = {
	deltapro3: {
		DisplayPropertyUpload: {
			errcode: { entity: 'string' },
			powInSumW: { entity: 'number' },
			powOutSumW: { entity: 'number' },
			lcdLight: { entity: 'level' },
			energyBackupState: { entity: 'diagnostic' },
			energyBackupEn: { entity: 'diagnostic' },
			energyBackupStartSoc: { entity: 'number' },
			powGetQcusb1: { entity: 'number' },
			powGetQcusb2: { entity: 'number' },
			powGetTypec1: { entity: 'number' },
			powGetTypec2: { entity: 'number' },
			flowInfoQcusb1: { entity: 'diagnostic' },
			flowInfoQcusb2: { entity: 'diagnostic' },
			flowInfoTypec1: { entity: 'diagnostic' },
			flowInfoTypec2: { entity: 'diagnostic' },
			devStandbyTime: { entity: 'level' },
			screenOffTime: { entity: 'level' },
			acStandbyTime: { entity: 'level' },
			dcStandbyTime: { entity: 'level' },
			acAlwaysOnMiniSoc: { entity: 'number' },
			xboostEn: { entity: 'switch' },
			flowInfoPvH: { entity: 'diagnostic' },
			flowInfoPvL: { entity: 'diagnostic' },
			flowInfo_12v: { entity: 'diagnostic' },
			flowInfo_24v: { entity: 'diagnostic' },
			powGetPvH: { entity: 'number' },
			powGetPvL: { entity: 'number' },
			powGet_12v: { entity: 'number' },
			powGet_24v: { entity: 'number' },
			plugInInfoPvHFlag: { entity: 'diagnostic' },
			plugInInfoPvHType: { entity: 'diagnostic' },
			plugInInfoPvLFlag: { entity: 'diagnostic' },
			flowInfoAc2dc: { entity: 'diagnostic' },
			flowInfoDc2ac: { entity: 'diagnostic' },
			flowInfoAcIn: { entity: 'diagnostic' },
			flowInfoAcHvOut: { entity: 'diagnostic' },
			flowInfoAcLvOut: { entity: 'diagnostic' },
			flowInfo_5p8In: { entity: 'diagnostic' },
			flowInfo_5p8Out: { entity: 'diagnostic' },
			powGetLlc: { entity: 'number' },
			powGetAc: { entity: 'number' },
			powGetAcIn: { entity: 'number' },
			powGetAcHvOut: { entity: 'number' },
			powGetAcLvOut: { entity: 'number' },
			powGetAcLvTt30Out: { entity: 'number' },
			powGet_5p8: { entity: 'number' },
			utcTimezone: { entity: 'number' },
			utcTimezoneId: { entity: 'string' },
			utcSetMode: { entity: 'diagnostic' },
			outputPowerOffMemory: { entity: 'diagnostic' },
			flowInfoBmsDsg: { entity: 'diagnostic' },
			flowInfoBmsChg: { entity: 'diagnostic' },
			flowInfo_4p8_1In: { entity: 'diagnostic' },
			flowInfo_4p8_1Out: { entity: 'diagnostic' },
			flowInfo_4p8_2In: { entity: 'diagnostic' },
			flowInfo_4p8_2Out: { entity: 'diagnostic' },
			powGetBms: { entity: 'number' },
			powGet_4p8_1: { entity: 'number' },
			powGet_4p8_2: { entity: 'number' },
			plugInInfoPvHChargerFlag: { entity: 'diagnostic' },
			plugInInfoPvHDcAmpMax: { entity: 'level' },
			fastChargeSwitch: { entity: 'diagnostic' },
			enBeep: { entity: 'switch' },
			llc_GFCIFlag: { entity: 'switch' },
			acOutFreq: { entity: 'number' },
			devSleepState: { entity: 'diagnostic' },
			llcHvLvFlag: { entity: 'diagnostic' },
			plugInInfoPvHChgVolMax: { entity: 'number' },
			plugInInfoPvHChgAmpMax: { entity: 'number' },
			bmsBattSoc: { entity: 'number' },
			bmsBattSoh: { entity: 'number' },
			bmsDesignCap: { entity: 'number' },
			bmsDsgRemTime: { entity: 'number' },
			bmsChgRemTime: { entity: 'number' },
			bmsMinCellTemp: { entity: 'number' },
			bmsMaxCellTemp: { entity: 'number' },
			bmsMinMosTemp: { entity: 'number' },
			bmsMaxMosTemp: { entity: 'number' },
			cmsBattSoc: { entity: 'number' },
			cmsBattSoh: { entity: 'number' },
			cmsDsgRemTime: { entity: 'number' },
			cmsChgRemTime: { entity: 'number' },
			cmsMaxChgSoc: { entity: 'level' },
			cmsMinDsgSoc: { entity: 'level' },
			cmsOilOnSoc: { entity: 'level' },
			cmsOilOffSoc: { entity: 'level' },
			cmsOilSelfStart: { entity: 'switch' },
			cmsBmsRunState: { entity: 'diagnostic' },
			bmsChgDsgState: { entity: 'diagnostic' },
			cmsChgDsgState: { entity: 'diagnostic' },
			acHvAlwaysOn: { entity: 'diagnostic' },
			acLvAlwaysOn: { entity: 'diagnostic' },
			timeTaskConflictFlag: { entity: 'diagnostic' },
			timeTaskChangeCnt: { entity: 'number' },
			bleStandbyTime: { entity: 'level' },
			generatorPvHybridModeOpen: { entity: 'diagnostic' },
			generatorPvHybridModeSocMax: { entity: 'number' },
			generatorCareModeOpen: { entity: 'diagnostic' },
			generatorCareModeStartTime: { entity: 'number' },
			acEnergySavingOpen: { entity: 'switch' },
			multiBpChgDsgMode: { entity: 'level' },

			pcsFanLevel: { entity: 'string' },
			plugInInfoPvLType: { entity: 'diagnostic' },
			plugInInfoAcInFlag: { entity: 'diagnostic' },
			plugInInfoAcInFeq: { entity: 'number' },
			plugInInfo_5p8Flag: { entity: 'diagnostic' },
			plugInInfo_5p8Type: { entity: 'diagnostic' },
			plugInInfo_5p8Detail: { entity: 'string' },
			bmsErrCode: { entity: 'string' },
			plugInInfo_4p8_1InFlag: { entity: 'diagnostic' },
			plugInInfo_4p8_1Type: { entity: 'diagnostic' },
			plugInInfo_4p8_1Detail: { entity: 'string' },
			plugInInfo_4p8_2InFlag: { entity: 'diagnostic' },
			plugInInfo_4p8_2Type: { entity: 'diagnostic' },
			plugInInfo_4p8_2Detail: { entity: 'string' },
			plugInInfoPvLChargerFlag: { entity: 'diagnostic' },
			plugInInfoPvLDcAmpMax: { entity: 'level' },
			plugInInfo_4p8_1DsgChgType: { entity: 'diagnostic' },
			plugInInfo_4p8_1Resv: { entity: 'array' },
			plugInInfo_4p8_1Sn: { entity: 'string' },
			plugInInfo_4p8_1FirmVer: { entity: 'string' },
			plugInInfo_4p8_2DsgChgType: { entity: 'diagnostic' },
			plugInInfo_4p8_2Resv: { entity: 'array' },
			plugInInfo_4p8_2Sn: { entity: 'string' },
			plugInInfo_4p8_2FirmVer: { entity: 'string' },
			plugInInfo_5p8DsgChg: { entity: 'string' },
			plugInInfo_5p8Resv: { entity: 'array' },
			plugInInfo_5p8Sn: { entity: 'string' },
			plugInInfo_5p8FirmVer: { entity: 'string' },
			plugInInfoAcChargerFlag: { entity: 'diagnostic' },
			plugInInfo_5p8ChargerFlag: { entity: 'diagnostic' },
			plugInInfo_5p8RunState: { entity: 'diagnostic' },
			plugInInfo_4p8_1ChargerFlag: { entity: 'diagnostic' },
			plugInInfo_4p8_1RunState: { entity: 'diagnostic' },
			plugInInfo_4p8_2ChargerFlag: { entity: 'diagnostic' },
			plugInInfo_4p8_2RunState: { entity: 'diagnostic' },
			plugInInfoAcInChgPowMax: { entity: 'level' },
			plugInInfo_5p8ChgPowMax: { entity: 'level' },
			pdErrCode: { entity: 'string' },
			llcErrCode: { entity: 'string' },
			mpptErrCode: { entity: 'string' },
			plugInInfo_5p8ErrCode: { entity: 'string' },
			plugInInfo_4p8_1ErrCode: { entity: 'string' },
			plugInInfo_4p8_2ErrCode: { entity: 'string' },
			pcsFanErrFlag: { entity: 'diagnostic' },
			llcInvErrCode: { entity: 'string' },
			plugInInfoPvLChgVolMax: { entity: 'number' },
			plugInInfoPvLChgAmpMax: { entity: 'number' },
			plugInInfo_5p8DsgPowMax: { entity: 'number' },
			plugInInfoAcOutDsgPowMax: { entity: 'number' },
			plugInInfo_5p8ChgHalPowMax: { entity: 'number' },
			plugInInfoAcInChgHalPowMax: { entity: 'number' }
		},
		RuntimePropertyUpload: {
			acPhaseType: { entity: 'diagnostic' },
			pcsWorkMode: { entity: 'diagnostic' },
			tempPcsDc: { entity: 'number' },
			tempPcsAc: { entity: 'number' },
			tempPvH: { entity: 'number' },
			tempPvL: { entity: 'number' },
			plugInInfoPvHVol: { entity: 'number' },
			plugInInfoPvLVol: { entity: 'number' },
			plugInInfoAcOutType: { entity: 'diagnostic' },
			plugInInfoAcOutFreq: { entity: 'number' },
			plugInInfo_5p8Freq: { entity: 'number' },
			plugInInfoAcInVol: { entity: 'number' },
			plugInInfo_24vVol: { entity: 'number' },
			plugInInfo_24vAmp: { entity: 'number' },
			plugInInfoL1Vol: { entity: 'number' },
			plugInInfo_4p8_1Vol: { entity: 'number' },
			plugInInfo_4p8_2Vol: { entity: 'number' },
			plugInInfoBmsVol: { entity: 'number' },
			pdMpptCommErr: { entity: 'string' },
			pdLlcCommErr: { entity: 'string' },
			pdBmsCommErr: { entity: 'string' },
			pdIotCommErr: { entity: 'string' },
			pdFirmVer: { entity: 'string' },
			iotFirmVer: { entity: 'string' },
			mpptFirmVer: { entity: 'string' },
			llcFirmVer: { entity: 'string' },
			plugInInfoL1Amp: { entity: 'number' },
			plugInInfoL2Vol: { entity: 'number' },
			plugInInfoL2Amp: { entity: 'number' },
			plugInInfoAcpL1Vol: { entity: 'number' },
			plugInInfoAcpL1l2Vol: { entity: 'number' },
			mpptMonitorFlag: { entity: 'diagnostic' },
			plugInInfoPvHAmp: { entity: 'number' },
			plugInInfoPvLAmp: { entity: 'number' },
			plugInInfoAcInAmp: { entity: 'number' },
			llcInvFirmVer: { entity: 'string' },
			plugInInfo_4p8_1Amp: { entity: 'number' },
			plugInInfo_4p8_2Amp: { entity: 'number' },
			bmsFirmVer: { entity: 'string' },
			bmsBattVol: { entity: 'number' },
			bmsBattAmp: { entity: 'number' },
			bmsBalState: { entity: 'diagnostic' },
			bmsFullCap: { entity: 'number' },
			bmsRemainCap: { entity: 'number' },
			bmsAlmState: { entity: 'diagnostic' },
			bmsProState: { entity: 'diagnostic' },
			bmsFltState: { entity: 'diagnostic' },
			bmsErrCode: { entity: 'string' },
			bmsMinCellVol: { entity: 'number' },
			bmsMaxCellVol: { entity: 'number' },
			cmsBattVol: { entity: 'number' },
			cmsBattAmp: { entity: 'number' },
			cmsChgReqVol: { entity: 'number' },
			cmsChgReqAmp: { entity: 'number' },
			bmsOverloadIcon: { entity: 'icon' },
			bmsWarnIcon: { entity: 'icon' },
			bmsHighTempIcon: { entity: 'icon' },
			bmsLowTempIcon: { entity: 'icon' },
			bmsLimitIcon: { entity: 'icon' },
			bmsAlmState_2: { entity: 'diagnostic' },
			bmsProState_2: { entity: 'diagnostic' },
			displayPropertyFullUploadPeriod: { entity: 'string' },
			displayPropertyIncrementalUploadPeriod: { entity: 'string' },
			runtimePropertyFullUploadPeriod: { entity: 'number' },
			runtimePropertyIncrementalUploadPeriod: { entity: 'number' },
			mpptRecvCmsChgReqVol: { entity: 'number' },
			mpptRecvCmsChgReqAmp: { entity: 'number' },
			pvVinRef: { entity: 'string' },
			pv2VinRef: { entity: 'string' },
			pv2BusVol: { entity: 'number' },
			mpptBatVol: { entity: 'number' },
			mpptBatAmp: { entity: 'number' },
			pvPauseCnt: { entity: 'string' },
			pv2PauseCnt: { entity: 'string' },
			mpptFanspeed: { entity: 'string' },
			adsNtcTemp: { entity: 'number' },
			mpptHardwareVer: { entity: 'string' },
			invMonitorFlag: { entity: 'diagnostic' },
			invMainFsmstate: { entity: 'diagnostic' },
			l1MainFsmstate: { entity: 'diagnostic' },
			l2MainFsmstate: { entity: 'diagnostic' },
			plugInInfoPfcOutVol: { entity: 'number' },
			powGetL1: { entity: 'number' },
			powGetL2: { entity: 'number' },
			invBusVol: { entity: 'number' },
			invNtcTemp2: { entity: 'number' },
			invNtcTemp3: { entity: 'number' },
			llcMonitorFlag: { entity: 'diagnostic' },
			llcNtcTemp: { entity: 'number' },
			llcFsmstate: { entity: 'diagnostic' },
			pdToInvDsgMode: { entity: 'diagnostic' },
			dcdcChgReqCur: { entity: 'number' },
			llcRecvCmsChgReqVol: { entity: 'number' },
			invToLlcAcPowLim: { entity: 'number' },
			plugInInfo_12vVol: { entity: 'number' },
			plugInInfo_12vAmp: { entity: 'number' },
			llcBatVol: { entity: 'number' },
			llcBatCur: { entity: 'number' },
			llcBusVol: { entity: 'number' },
			pdSktOcp1: { entity: 'string' },
			pdSktOcp2: { entity: 'string' },
			pdSktOcp3: { entity: 'string' },
			pdSktOcp4: { entity: 'string' },
			pdSktOcp5: { entity: 'string' }
		},
		setDp3: {
			cfgPowerOff: { entity: 'switch' },
			cfgHvAcOutOpen: { entity: 'switch' },
			cfgLvAcOutOpen: { entity: 'switch' },
			cfgDc12vOutOpen: { entity: 'switch' },
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const deviceRanges = {
	deltapro3: {
		DisplayPropertyUpload: {
			number: {
				powInSumW: {
					max: 8000
				}
			}
		}
	}
};

const deviceCmd = {
	deltapro3: {
		DisplayPropertyUpload: {
			cmsOilSelfStart: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			acEnergySavingOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			cmsOilOnSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			cmsOilOffSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			lcdLight: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			devStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			screenOffTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			cmsMaxChgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			cmsMinDsgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			bleStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 4 } },
			dcStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, //oder Länge 4
			acStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, //oder Länge 4
			xboostEn: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			enBeep: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			llc_GFCIFlag: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			plugInInfoAcInChgPowMax: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 4 } },
			plugInInfo_5p8ChgPowMax: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 4 } },
			multiBpChgDsgMode: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			plugInInfoPvLDcAmpMax: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			plugInInfoPvHDcAmpMax: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
		},
		setDp3: {
			cfgDc12vOutOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			cfgLvAcOutOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			cfgHvAcOutOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			//cfgAcOutFreq: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			cfgPowerOff: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
			/*
			cfgEnergyBackup: {  msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 },
				energyBackupStartSoc: 40,
				energyBackupEn: true
			},
			*/
		},
		action: {
			latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
		}
	}
};

const protoMsg = {
	cmdId: {
		50: { cmdFunc: { 32: 'cmdFunc50_cmdId30_Report' } },
		23: { cmdFunc: { 254: 'cmdFunc254_cmdId23_Report' } },
		22: { cmdFunc: { 254: 'RuntimePropertyUpload' } },
		21: { cmdFunc: { 254: 'DisplayPropertyUpload' } },
		// 20: {},
		// 19: {},
		18: { cmdFunc: { 254: 'setReply_dp3' } },
		17: { cmdFunc: { 254: 'set_dp3' } },
		2: { cmdFunc: { 32: 'cmdFunc32_cmdId2_Report' } }
	}
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus

async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged) {
	let haUpdate = [];
	if (payload) {
		if (stateDictObj) {
			if (stateObj) {
				for (let channel in payload) {
					//other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
					switch (channel) {
						case 'RuntimePropertyUpload':
						case 'DisplayPropertyUpload':
							// all cases without nested states
							await setOnlineStatus(adapter, topic);
							for (let state in payload[channel]) {
								let val;
								let haupd;
								val = payload[channel][state];
								haupd = await compareUpdate(
									adapter,
									stateDictObj,
									stateObj,
									haenable,
									topic,
									channel,
									state,
									val,
									channel,
									logged
								);
								if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
							}
							break;
						case 'setReply_dp3':
							//Auswertung ob OK und dann auf set_dp3 und zusätzlich in anderer struktur ohne cfg setzen
							await setOnlineStatus(adapter, topic);
							for (let state in payload[channel]) {
								if (payload[channel]['configOk'] && payload[channel]['configOk'] == true) {
									if (state !== 'actionId' &&
										state !== 'configOk' &&
										state !== 'cfgLvAcOutOpen' &&
										state !== 'cfgHvAcOutOpen' &&
										state !== 'cfgPowerOff' &&
										state !== 'cfgDc12vOutOpen'
									) {
										let val;
										let haupd;
										val = payload[channel][state];
										haupd = await compareUpdate(
											adapter,
											stateDictObj,
											stateObj,
											haenable,
											topic,
											'DisplayPropertyUpload',
											state,
											val,
											'DisplayPropertyUpload',
											logged
										);
										if (Object.keys(haupd).length !== 0) haUpdate.push(haupd)
									}
									else {
										let val;
										let haupd;
										val = payload[channel][state];
										haupd = await compareUpdate(
											adapter,
											stateDictObj,
											stateObj,
											haenable,
											topic,
											'setDp3',
											state,
											val,
											'setDp3',
											logged
										);
										if (Object.keys(haupd).length !== 0) haUpdate.push(haupd)
									}
								} else {
									adapter.log.warn('Not successfull command ' + JSON.stringify(payload[channel]))
								}
							}
							break;
							break;
						case 'info':
							//channel info is only received when offline, no need to check the content
							await setOfflineStatus(adapter, topic);
							break;
						default:
							//nothing todo
							break;
					}
				}
			} else {
				adapter.log.warn('storeStreamPayload no stateObj');
			}
		} else {
			adapter.log.warn('storeStreamPayload no stateDictobj');
		}
	} else {
		adapter.log.debug('nothing to process');
	}
	return haUpdate;
}

async function prepareProtoCmd(adapter, serial, streamType, state, value, cmd, log) {
	if (state === 'latestQuotas') {
		if (log === true) {
			adapter.log.debug('preparaing latestQuotas: ' + serial);
		}
		let muster = {
			header: {
				src: 32,
				dest: 32,
				seq: Date.now(),
				from: 'ios'
			}
		};
		const root = protobuf.parse(protoSource).root;
		const SetMessage = root.lookupType('setMessage');
		const message = SetMessage.create(muster);
		const messageBuffer = SetMessage.encode(message).finish();
		return messageBuffer;
	} else {
		const seq = Date.now();
		let muster = {
			header: {
				src: 32,
				dest: 2,
				dSrc: 1,
				dDest: 1,
				encType: 1,
				checkType: 3,
				cmdFunc: 254,
				cmdId: 17,
				needAck: 1,
				seq: seq,
				version: 19,
				payloadVer: 1,
				from: 'Android',
				deviceSn: serial
			}
		};

		// encryption is set but is actually not done, if needed then to find a way to only encrypt pdata
		/*
		//cfgAcOutFreq: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
		cfgEnergyBackup: {  msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 },
			energyBackupStartSoc: 40,
			energyBackupEn: true
		},

		*/
		muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
		muster['header']['cmdId'] = cmd['msg']['cmdId'];

		switch (state) {
			case 'cfgLvAcOutOpen':
			case 'cfgHvAcOutOpen':
			case 'enBeep':
			case 'cfgPowerOff':
			case 'cfgDc12vOutOpen':
			case 'llc_GFCIFlag':
			case 'xboostEn':
			case 'acEnergySavingOpen':
			case 'cmsOilSelfStart':
				muster['header']['pdata'] = {};
				muster['header']['pdata'][state] = value ? 1 : 0;
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
				break;
			case 'plugInInfoAcInChgPowMax':
			case 'plugInInfo_5p8ChgPowMax':
				muster['header']['pdata'] = {};
				muster['header']['pdata'][state] = parseInt(String(value)); //int
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 4;
				break;
			case 'acStandbyTime':
			case 'dcStandbyTime':
				//case 'bleStandbyTime':	
				muster['header']['pdata'] = {};
				muster['header']['pdata'][state] = parseInt(String(value)); //int
				//todo ermittlung len
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
				break;
			case 'cmsMinDsgSoc':
			case 'cmsMaxChgSoc':
			case 'screenOffTime':
			case 'devStandbyTime':
			case 'lcdLight':
			case 'cmsOilOnSoc':
			case 'cmsOilOffSoc':
				//case 'plugInInfoPvLDcAmpMax': //ungewiss ob das so zulässig ist
				//case 'plugInInfoPvHDcAmpMax':
				muster['header']['pdata'] = {};
				muster['header']['pdata'][state] = parseInt(String(value)); //int
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
				break;
			case 'multiBpChgDsgMode':
				muster['header']['pdata'] = {};
				muster['header']['pdata'][state] = parseInt(String(value)); //int
				muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
				break;
			default:
				muster = null;
				adapter.log.debug('command not recognized');
				break;
		}

		if (log) {
			adapter.log.debug('[PROTOBUF encode] ' + state + ' ' + value + ' send stream ' + JSON.stringify(muster));
		}
		if (muster) {
			const root = protobuf.parse(protoSource).root;
			const SetMessage = root.lookupType('setMessage');
			const message = SetMessage.create(muster);
			const messageBuffer = SetMessage.encode(message).finish();
			return messageBuffer;
		}
		return null;
	}
}

const protoSource = `
syntax = "proto3";

message RuntimePropertyUpload {
	optional uint32 ac_phase_type = 21;
	optional uint32 pcs_work_mode = 24;
	optional float temp_pcs_dc = 26;
	optional float temp_pcs_ac = 27;
	optional float temp_pv_h = 28;
	optional float temp_pv_l = 29;
	optional float plug_in_info_pv_h_vol = 41;
	optional float plug_in_info_pv_l_vol = 44;
	optional uint32 plug_in_info_ac_out_type = 59;
	optional uint32 plug_in_info_ac_out_freq = 60;
	optional uint32 plug_in_info_5p8_freq = 66;
	optional float plug_in_info_ac_in_vol = 68;
	optional float plug_in_info_24v_vol = 149;
	optional float plug_in_info_24v_amp = 150;
	optional float plug_in_info_l1_vol = 151;
	optional float plug_in_info_4p8_1_vol = 167;
	optional float plug_in_info_4p8_2_vol = 168;
	optional float plug_in_info_bms_vol = 169;
	optional uint32 pd_mppt_comm_err = 172; //bool
	optional uint32 pd_llc_comm_err = 173; //bool
	optional uint32 pd_bms_comm_err = 174; //bool
	optional uint32 pd_iot_comm_err = 175; //bool
	optional uint32 pd_firm_ver = 176;
	optional uint32 iot_firm_ver = 177;
	optional uint32 mppt_firm_ver = 178;
	optional uint32 llc_firm_ver = 179;
	optional float plug_in_info_l1_amp = 196;
	optional float plug_in_info_l2_vol = 197;
	optional float plug_in_info_l2_amp = 198;
	optional float plug_in_info_acp_l1_vol = 199;
	optional float plug_in_info_acp_l1l2_vol = 201;
	optional uint32 mppt_monitor_flag = 220;
	optional float plug_in_info_pv_h_amp = 221;
	optional float plug_in_info_pv_l_amp = 222;
	optional float plug_in_info_ac_in_amp = 223;
	optional uint32 llc_inv_firm_ver = 231;
	optional float plug_in_info_4p8_1_amp = 239;
	optional float plug_in_info_4p8_2_amp = 240;
	optional uint32 bms_firm_ver = 241;
	optional float bms_batt_vol = 244;
	optional float bms_batt_amp = 245;
	optional uint32 bms_bal_state = 246;
	optional uint32 bms_full_cap = 247;
	optional uint32 bms_remain_cap = 249;
	optional uint32 bms_alm_state = 250;
	optional uint32 bms_pro_state = 251;
	optional uint32 bms_flt_state = 252;
	optional uint32 bms_err_code = 253;
	optional uint32 bms_min_cell_vol = 256;
	optional uint32 bms_max_cell_vol = 257;
	optional float cms_batt_vol = 264;
	optional float cms_batt_amp = 265;
	optional float cms_chg_req_vol = 266;
	optional float cms_chg_req_amp = 267;
	optional uint32 bms_overload_icon = 276;
	optional uint32 bms_warn_icon = 277;
	optional uint32 bms_high_temp_icon = 278;
	optional uint32 bms_low_temp_icon = 279;
	optional uint32 bms_limit_icon = 280;
	optional uint32 bms_alm_state_2 = 291;
	optional uint32 bms_pro_state_2 = 292;
	optional int32 display_property_full_upload_period = 293;
	optional int32 display_property_incremental_upload_period = 294;
	optional int32 runtime_property_full_upload_period = 295;
	optional int32 runtime_property_incremental_upload_period = 296;
	optional float mppt_recv_cms_chg_req_vol = 318;
	optional float mppt_recv_cms_chg_req_amp = 337;
	optional float pv_vin_ref = 338;
	optional float pv2_vin_ref = 339;
	optional float pv2_bus_vol = 340;
	optional float mppt_bat_vol = 341;
	optional float mppt_bat_amp = 342;
	optional uint32 pv_pause_cnt = 343;
	optional uint32 pv2_pause_cnt = 344;
	optional uint32 mppt_fanspeed = 345;
	optional int32 ads_ntc_temp = 346;
	optional uint32 mppt_hardware_ver = 347;
	optional uint32 inv_monitor_flag = 348;
	optional uint32 inv_main_fsmstate = 349;
	optional uint32 l1_main_fsmstate = 350;
	optional uint32 l2_main_fsmstate = 351;
	optional float plug_in_info_pfc_out_vol = 352;
	optional float pow_get_l1 = 353;
	optional float pow_get_l2 = 354;
	optional float inv_bus_vol = 369;
	optional int32 inv_ntc_temp2 = 370;
	optional int32 inv_ntc_temp3 = 371;
	optional uint32 llc_monitor_flag = 372;
	optional int32 llc_ntc_temp = 373;
	optional uint32 llc_fsmstate = 374;
	optional uint32 pd_to_inv_dsg_mode = 375;
	optional float dcdc_chg_req_cur = 376;
	optional float llc_recv_cms_chg_req_vol = 377;
	optional float inv_to_llc_ac_pow_lim = 378;
	optional float plug_in_info_12v_vol = 382;
	optional float plug_in_info_12v_amp = 383;
	optional float llc_bat_vol = 384;
	optional float llc_bat_cur = 385;
	optional float llc_bus_vol = 386;
	optional float pd_skt_ocp1 = 387;
	optional float pd_skt_ocp2 = 388;
	optional float pd_skt_ocp3 = 389;
	optional float pd_skt_ocp4 = 390;
	optional float pd_skt_ocp5 = 391;
}

message cmdFunc50_cmdId30_Report {
    optional int32 unknown1 = 1;
    optional int32 unknown2 = 2;
    optional int32 unknown3 = 3;
    optional int32 unknown4 = 4;
    optional int32 unknown5 = 5;
    optional int32 unknown6 = 6;
    optional int32 unknown7 = 7;
    optional int32 unknown8 = 8;
    optional int32 unknown9 = 9;
    optional int32 unknown10 = 10;
    optional int32 unknown11 = 11;
    optional int32 remainCap12 = 12;
    optional int32 unknown13 = 13;
    optional int32 unknown14 = 14;
    optional int32 unknown15 = 15;
    optional int32 maxCellVol16 = 16;
    optional int32 minCellVol17 = 17;
    optional int32 maxCellTemp18 = 18;
    optional int32 minCellTemp19 = 19;
    optional int32 maxMosTemp20 = 20;
    optional int32 minMosTemp21 = 21;
    optional int32 unknown22 = 22;
    optional int32 unknown23 = 23;
    optional int32 unknown24 = 24;
    optional float unknown25 = 25;
    optional int32 unknown26 = 26;
    optional int32 unknown27 = 27;
    optional int32 unknown28 = 28;
    optional int32 unknown29 = 29;
    optional int32 unknown30 = 30;
    optional int32 unknown31 = 31;
    optional int32 unknown32 = 32;
    repeated int32  cellVol33 = 33;
    optional int32 unknown34 = 34;
    repeated int32 cellTemp35 = 35;
    optional string version36 = 36;
    optional int32 bmsHeartVer37 = 37;
    optional int32 ecloudOcv38 = 38;
    optional string deveiceSn39 = 39;
    optional int32 unknown40 = 40;
    optional int32 unknown41 = 41;
    optional float unknown42 = 42;
    optional float unknown43 = 43;
    optional float unknown44 = 44;
    optional int32 unknown45 = 45;
    optional int32 unknown46 = 46;
    optional int32 unknown47 = 47;
    optional int32 unknown48 = 48;
    optional int32 unknown49 = 49;
    optional int32 unknown50 = 50;
    optional int32 unknown51 = 51;
    optional float unknown52 = 52;
    optional float unknown53 = 53;
    optional float soh54 = 54;
    optional int32 unknown55 = 55;
    repeated int32 mosTemp56 = 56;
    optional int32 unknown57 = 57;
    repeated int32 unknown58 = 58;
    optional int32 unknown61 = 61;
    repeated int32 unknown62 = 62;
    optional int32 unknown63 = 63;
    optional int32 unknown64 = 64;
    optional int32 unknown67 = 67;
    optional int32 unknown68 = 68;
    optional int32 unknown69 = 69;
    repeated int32 error70 = 70;
    optional int32 unknown71 = 71;
    repeated int32 batVolt72 = 72;
    optional int32 unknown73 = 73;
    optional int32 unknown74 = 74;
    optional int32 unknown75 = 75;
    optional int32 unknown76 = 76;
    optional int32 unknown77 = 77;
    optional int32 unknown78 = 78;
    optional int32 unknown79 = 79;
    optional int32 unknown80 = 80;
    optional string packSn81 = 81;
    optional int32 unknown82 = 82;
}

enum TIME_TASK_MODE {
	TIME_TASK_MODE_RESV = 0;
	TIME_TASK_MODE_PER_WEEK = 1;
	TIME_TASK_MODE_ONCE = 2;
  }
  
  enum TIME_TASK_TYPE {
	TIME_TASK_TYPE_AC_CHG = 0;
	TIME_TASK_TYPE_AC_DSG = 1;
	TIME_TASK_TYPE_AC2_DSG = 2;
	TIME_TASK_TYPE_DC_CHG = 3;
	TIME_TASK_TYPE_DC2_CHG = 4;
	TIME_TASK_TYPE_DC_DSG = 5;
	TIME_TASK_TYPE_OIL_ON = 6;
	TIME_TASK_TYPE_OIL_OFF = 7;
	TIME_TASK_TYPE_USB_CHG = 8;
	TIME_TASK_TYPE_USB_DSG = 9;
  }
  enum TIME_TASK_DETAIL_TYPE {
	TIME_TASK_DETAIL_IDLE = 0;
	TIME_TASK_DETAIL_POW = 1;
	TIME_TASK_DETAIL_TEMP = 2;
	TIME_TASK_DETAIL_LEVEL = 3;
  }

  message TimeTaskParamDetail {
	optional .TIME_TASK_DETAIL_TYPE type = 1;
	optional float val = 2;
  }
message TimeTaskItemV2 {
	optional uint32 task_index = 1;
	optional bool is_cfg = 2; //bool
	optional bool is_enable = 3; //bool
	optional uint32 conflict_flag = 4;
	optional .TIME_TASK_MODE time_mode = 5;
	optional uint32 time_param = 6;
	optional uint32 time_table = 7;
	optional .TIME_TASK_TYPE task_type = 8;
	optional uint32 task_param = 9;
	repeated .TimeTaskParamDetail task_param_detail = 10;
  }


message DisplayPropertyUpload {
	optional uint32 errcode = 1;
	optional float pow_in_sum_w = 3;
	optional float pow_out_sum_w = 4;
	optional uint32 lcd_light = 5;
	optional uint32 energy_backup_state = 6;
	optional uint32 energy_backup_en = 7; //bool
	optional uint32 energy_backup_start_soc = 8;
	optional float pow_get_qcusb1 = 9;
	optional float pow_get_qcusb2 = 10;
	optional float pow_get_typec1 = 11;
	optional float pow_get_typec2 = 12;
	optional uint32 flow_info_qcusb1 = 13;
	optional uint32 flow_info_qcusb2 = 14;
	optional uint32 flow_info_typec1 = 15;
	optional uint32 flow_info_typec2 = 16;
	optional uint32 dev_standby_time = 17;
	optional uint32 screen_off_time = 18;
	optional uint32 ac_standby_time = 19;
	optional uint32 dc_standby_time = 20;
	optional uint32 ac_always_on_mini_soc = 23;
	optional uint32 xboost_en = 25; //bool
	optional uint32 pcs_fan_level = 30;
	optional uint32 flow_info_pv_h = 31;
	optional uint32 flow_info_pv_l = 32;
	optional uint32 flow_info_12v = 33;
	optional uint32 flow_info_24v = 34;
	optional float pow_get_pv_h = 35;
	optional float pow_get_pv_l = 36;
	optional float pow_get_12v = 37;
	optional float pow_get_24v = 38;
	optional uint32 plug_in_info_pv_h_flag = 39;
	optional uint32 plug_in_info_pv_h_type = 40;
	optional uint32 plug_in_info_pv_l_flag = 42;
	optional uint32 plug_in_info_pv_l_type = 43;
	optional uint32 flow_info_ac2dc = 45;
	optional uint32 flow_info_dc2ac = 46;
	optional uint32 flow_info_ac_in = 47;
	optional uint32 flow_info_ac_hv_out = 48;
	optional uint32 flow_info_ac_lv_out = 49;
	optional uint32 flow_info_5p8_in = 50;
	optional uint32 flow_info_5p8_out = 51;
	optional float pow_get_llc = 52;
	optional float pow_get_ac = 53;
	optional float pow_get_ac_in = 54;
	optional float pow_get_ac_hv_out = 55;
	optional float pow_get_ac_lv_out = 56;
	optional float pow_get_ac_lv_tt30_out = 57;
	optional float pow_get_5p8 = 58;
	optional uint32 plug_in_info_ac_in_flag = 61;
  	optional uint32 plug_in_info_ac_in_feq = 62;
  	optional uint32 plug_in_info_5p8_flag = 63;
   	optional uint32 plug_in_info_5p8_type = 64;
   	optional uint32 plug_in_info_5p8_detail = 65;
	optional .TimeTaskItemV2 current_time_task_v2_item = 126;
	optional int32 utc_timezone = 133;
	optional string utc_timezone_id = 134;
	optional uint32 utc_set_mode = 135; //bool
	optional uint32 bms_err_code = 140;
	optional uint32 output_power_off_memory = 147; //bool
	optional uint32 flow_info_bms_dsg = 152;
	optional uint32 flow_info_bms_chg = 153;
	optional uint32 flow_info_4p8_1_in = 154;
	optional uint32 flow_info_4p8_1_out = 155;
	optional uint32 flow_info_4p8_2_in = 156;
	optional uint32 flow_info_4p8_2_out = 157;
	optional float pow_get_bms = 158;
	optional float pow_get_4p8_1 = 159;
	optional float pow_get_4p8_2 = 160;
	optional uint32 plug_in_info_4p8_1_in_flag = 161;
    optional uint32 plug_in_info_4p8_1_type = 162;
    optional uint32 plug_in_info_4p8_1_detail = 163;
    optional uint32 plug_in_info_4p8_2_in_flag = 164;
    optional uint32 plug_in_info_4p8_2_type = 165;
    optional uint32 plug_in_info_4p8_2_detail = 166;
	optional uint32 plug_in_info_pv_l_charger_flag = 170; //bool
	optional uint32 plug_in_info_pv_h_charger_flag = 171; //bool
	optional uint32 plug_in_info_pv_l_dc_amp_max = 180; 
	optional uint32 plug_in_info_pv_h_dc_amp_max = 181;
	optional uint32 fast_charge_switch = 182;
	optional uint32 plug_in_info_4p8_1_dsg_chg_type = 183;
    optional .ResvInfo plug_in_info_4p8_1_resv = 184;
    optional string plug_in_info_4p8_1_sn = 185;
    optional uint32 plug_in_info_4p8_1_firm_ver = 186;
    optional uint32 plug_in_info_4p8_2_dsg_chg_type = 187;
    optional .ResvInfo plug_in_info_4p8_2_resv = 188;
    optional string plug_in_info_4p8_2_sn = 189;
    optional uint32 plug_in_info_4p8_2_firm_ver = 190;
    optional uint32 plug_in_info_5p8_dsg_chg = 191;
    optional .ResvInfo plug_in_info_5p8_resv = 192;
    optional string plug_in_info_5p8_sn = 193;
    optional uint32 plug_in_info_5p8_firm_ver = 194;
	optional uint32 en_beep = 195; //bool
	optional uint32 llc_GFCI_flag = 200; //bool
	optional uint32 plug_in_info_ac_charger_flag = 202; //bool
    optional uint32 plug_in_info_5p8_charger_flag = 203; //bool
    optional uint32 plug_in_info_5p8_run_state = 204; 
    optional uint32 plug_in_info_4p8_1_charger_flag = 205; //bool
    optional uint32 plug_in_info_4p8_1_run_state = 206;
    optional uint32 plug_in_info_4p8_2_charger_flag = 207; //bool
    optional uint32 plug_in_info_4p8_2_run_state = 208;
    optional uint32 plug_in_info_ac_in_chg_pow_max = 209;
    optional uint32 plug_in_info_5p8_chg_pow_max = 210;
	optional uint32 ac_out_freq = 211;
	optional uint32 dev_sleep_state = 212;
	optional uint32 pd_err_code = 213;
    optional uint32 llc_err_code = 214;
    optional uint32 mppt_err_code = 215;
    optional uint32 plug_in_info_5p8_err_code = 216;
    optional uint32 plug_in_info_4p8_1_err_code = 217;
    optional uint32 plug_in_info_4p8_2_err_code = 218;
    optional uint32 pcs_fan_err_flag = 226;
	optional uint32 llc_hv_lv_flag = 227;
	optional uint32 llc_inv_err_code = 232;
	optional uint32 plug_in_info_pv_h_chg_vol_max = 233;
	optional uint32 plug_in_info_pv_l_chg_vol_max = 234;
	optional uint32 plug_in_info_pv_l_chg_amp_max = 235;
	optional uint32 plug_in_info_pv_h_chg_amp_max = 236;
	optional uint32 plug_in_info_5p8_dsg_pow_max = 237;
   	optional uint32 plug_in_info_ac_out_dsg_pow_max = 238;
	optional float bms_batt_soc = 242;
	optional float bms_batt_soh = 243;
	optional uint32 bms_design_cap = 248;
	optional uint32 bms_dsg_rem_time = 254;
	optional uint32 bms_chg_rem_time = 255;
	optional int32 bms_min_cell_temp = 258;
	optional int32 bms_max_cell_temp = 259;
	optional int32 bms_min_mos_temp = 260;
	optional int32 bms_max_mos_temp = 261;
	optional float cms_batt_soc = 262;
	optional float cms_batt_soh = 263;
	optional uint32 cms_dsg_rem_time = 268;
	optional uint32 cms_chg_rem_time = 269;
	optional uint32 cms_max_chg_soc = 270;
	optional uint32 cms_min_dsg_soc = 271;
	optional uint32 cms_oil_on_soc = 272;
	optional uint32 cms_oil_off_soc = 273;
	optional uint32 cms_oil_self_start = 274; //bool
	optional uint32 cms_bms_run_state = 275;
	optional uint32 bms_chg_dsg_state = 281;
	optional uint32 cms_chg_dsg_state = 282;
	optional uint32 ac_hv_always_on = 283; //bool
	optional uint32 ac_lv_always_on = 284; //bool
	optional uint32 time_task_conflict_flag = 285;
	optional uint32 time_task_change_cnt = 286;
	optional uint32 ble_standby_time = 290;
	optional uint32 generator_pv_hybrid_mode_open = 451; //bool
	optional uint32 generator_pv_hybrid_mode_soc_max = 452;
	optional uint32 generator_care_mode_open = 453; //bool
	optional uint32 generator_care_mode_start_time = 454;
	optional uint32 ac_energy_saving_open = 455; //bool
	optional uint32 multi_bp_chg_dsg_mode = 456;
	optional uint32 plug_in_info_5p8_chg_hal_pow_max = 457;
   	optional uint32 plug_in_info_ac_in_chg_hal_pow_max = 458;
}

message ResvInfo {
  repeated uint32 resv_info = 1;
}

//ems
message struct32_2_1 {
    optional int32 unknown1 = 1;
    optional int32 unknown2 = 2;
    optional int32 unknown3 = 3;
    optional int32 volt4 = 4;
    optional int32 unknown5 = 5;
    optional int32 unknown6 = 6;
    optional int32 maxChargeSoc7 = 7;
    optional int32 unknown8 = 8;
    optional int32 unknown9 = 9;
    optional int32 unknown10 = 10;
    optional int32 unknown11 = 11;
    optional int32 unknown12 = 12;
    optional int32 unknown13 = 13;
    optional int32 unknown14 = 14;
    optional float soc15 = 15;
    repeated int32 bmsIsConnt16 = 16;
    optional int32 unknown17 = 17;
    optional int32 unknown18 = 18;
    optional int32 unknown19 = 19;
    optional int32 unknown20 = 20;
    optional int32 unknown21 = 21;
    optional int32 unknown22 = 22;
    optional int32 unknown23 = 23;
}

message struct32_2_2 {
    optional int32 unknown1 = 1;
    optional int32 unknown2 = 2;
    optional int32 unknown3 = 3;
    optional int32 unknown4 = 4;
    optional int32 unknown5 = 5;
}

message cmdFunc32_cmdId2_Report {
    optional struct32_2_1 msg32_2_1 = 1;
    optional struct32_2_2 msg32_2_2 = 2;
}

message cmdFunc254_cmdId23_Report {
    optional int32 timestamp1 = 1;
    optional float unknown2 = 2;
    optional int32 unknown5 = 5;
}

message set_dp3 {
    optional int32 cfgPowerOff = 3;
	optional int32 enBeep = 9;
    optional int32 acStandbyTime = 10;
    optional int32 dcStandbyTime = 11;
    optional int32 screenOffTime = 12;
	optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;
    optional int32 cfgHvAcOutOpen = 15;
    optional int32 cfgLvAcOutOpen = 16;
    optional int32 cfgDc12vOutOpen = 18;
    optional int32 xboostEn = 25;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;
    optional int32 plugInInfoPvLDcAmpMax = 52;
    optional int32 plugInInfoPvHDcAmpMax = 53;
    optional int32 plugInInfoAcInChgPowMax= 54;
    optional int32 plugInInfo_5p8ChgPowMax = 56;
    optional int32 cmsOilSelfStart = 58;
    optional int32 cmsOilOnSoc = 59;
	optional int32 cmsOilOffSoc = 60;
    optional int32 llc_GFCIFlag = 61;
    optional int32 acEnergySavingOpen = 99;
    optional int32 multiBpChgDsgMode = 100;
	optional int32 lowDischargeLimitCmd = 102; //not EF-API
	optional int32 unknown167 = 167;
	// bleStandbyTime //Bluetooth timeout.
	// fastChargeSwitch
}

message setReply_dp3 {
    optional int32 actionId = 1;
    optional bool configOk = 2; //bool
	optional int32 cfgPowerOff = 3;
	optional int32 enBeep = 9;
    optional int32 acStandbyTime = 10;
    optional int32 dcStandbyTime = 11;
    optional int32 screenOffTime = 12;
	optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;
    optional int32 cfgHvAcOutOpen = 15;
    optional int32 cfgLvAcOutOpen = 16;
    optional int32 cfgDc12vOutOpen = 18;
    optional int32 xboostEn = 25;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;
    optional int32 plugInInfoPvLDcAmpMax = 52;
    optional int32 plugInInfoPvHDcAmpMax = 53;
    optional int32 plugInInfoAcInChgPowMax= 54;
    optional int32 plugInInfo_5p8ChgPowMax = 56;
    optional int32 cmsOilSelfStart = 58;
    optional int32 cmsOilOnSoc = 59;
	optional int32 cmsOilOffSoc = 60;
    optional int32 llc_GFCIFlag = 61;
    optional int32 acEnergySavingOpen = 99;
    optional int32 multiBpChgDsgMode = 100;
	optional int32 lowDischargeLimitCmd = 102; //not EF-API
	optional int32 unknown167 = 167;
	// bleStandbyTime //Bluetooth timeout.
	// fastChargeSwitch
}

message setMessage {
    setHeader header = 1;
 }
message setHeader {
    set_dp3 pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 enc_type = 6;
    int32 check_type = 7;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
    int32 time_snap = 18;
    int32 is_rw_cmd = 19;
    int32 is_queue = 20;
    int32 ack_type = 21;
    string code = 22;
    string from = 23;
    string module_sn = 24;
    string device_sn = 25;
}

`;


const officialapi = {
	beeper: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgBeepEn: true
		}
	},
	actimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgAcStandbyTime: 120
		}
	},
	dctimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgDcStandbyTime: 120
		}
	},
	screentimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgScreenOffTime: 30
		}
	},
	devicetimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgDevStandbyTime: 30
		}
	},
	screenbrightness: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgLcdLight: 30
		}
	},
	highvoltacout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgHvAcOutOpen: true
		}
	},
	lowvoltacout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgLvAcOutOpen: true
		}
	},
	frequency: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgAcOutFreq: 50
		}
	},
	car12voutput: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgDc12vOutOpen: true
		}
	},
	xboost: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgXboostEn: true
		}
	},
	shutdown: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPowerOff: true
		}
	},
	chargelimit: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgMaxChgSoc: 70
		}
	},
	dischargelimit: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgMinDsgSoc: 30
		}
	},
	backupreservelevel: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgEnergyBackup: {
				energyBackupStartSoc: 40,
				energyBackupEn: true
			}
		}
	},
	maxinputcurrentPVlowVolt: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfoPvLDcAmpMax: 7
		}
	},
	maxinputcurrentPVhighVolt: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfoPvHDcAmpMax: 12
		}
	},
	maxACcharge: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfoAcInChgPowMax: 3000
		}
	},
	maxChargePowerPort: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfo5p8ChgPowMax: 1800
		}
	},
	generatorAutoStart: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgCmsOilSelfStart: true
		}
	},
	socStartGenerator: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgCmsOilOnSoc: 36
		}
	},
	socStopGenerator: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgCmsOilOffSoc: 67
		}
	},
	gfciswitch: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgLlcGFCIFlag: true
		}
	},
	bluetoothtimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgBleStandbyTime: 200
		}
	},
	acenergysavingmode: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgAcEnergySavingOpen: true
		}
	},
	batterychargingmode: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgMultiBpChgDsgMode: 1
		}
	}
};

module.exports = {
	deviceStates,
	deviceStatesDict,
	deviceRanges,
	deviceCmd,
	protoMsg,
	protoSource,
	storeProtoPayload,
	prepareProtoCmd
};
