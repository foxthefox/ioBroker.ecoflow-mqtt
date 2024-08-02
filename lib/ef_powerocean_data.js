const poweroceanStates = {
	statusReportBattery1: {
		number: {
			bpPwr: {
				min: 0,
				max: 7000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'indicator',
				name: 'Battery power',
				subrole: 'number'
			},
			bpSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Battery SOC',
				subrole: 'number'
			},
			bpSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Battery SOH',
				subrole: 'number'
			},
			bpMaxCellVol: {
				min: 0,
				max: 5,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Battery maximum cell voltage',
				subrole: 'number'
			},
			bpMinCellVol: {
				min: 0,
				max: 5,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Battery miniimum cell voltage',
				subrole: 'number'
			},
			bpVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Battery Voltage',
				subrole: 'number'
			},
			bpAmp: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'indicator',
				name: 'Battery Current',
				subrole: 'number'
			},
			bpBusVol: {
				min: 0,
				max: 900,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'indicator',
				name: 'Bus voltage',
				subrole: 'number'
			},
			bpCycles: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'cycles',
				role: 'indicator',
				name: 'Battery cycles',
				subrole: 'number'
			},
			bpHvMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'High voltage Mos temperature',
				subrole: 'number'
			},
			bpLvMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Low voltage Mos temparature',
				subrole: 'number'
			},
			bpPtcTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PTC temperature',
				subrole: 'number'
			},
			bpHtsTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Hts temperature',
				subrole: 'number'
			},
			bpBusNegTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Bus neg. temperature',
				subrole: 'number'
			},
			bpBusPosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Bus pos. temperature',
				subrole: 'number'
			},
			bpEnvTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Env. temperature',
				subrole: 'number'
			},
			bpAccuChgCap: {
				min: 0,
				max: 7500000,
				unit_of_measurement: 'mAh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'indicator',
				name: 'Accu charge capacity',
				subrole: 'number'
			},
			bpAccuDsgCap: {
				min: 0,
				max: 7500000,
				unit_of_measurement: 'mAh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'indicator',
				name: 'Accu discharge capacity',
				subrole: 'number'
			},
			bpDesignCap: {
				min: 0,
				max: 110000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'indicator',
				name: 'Design cpapcity',
				subrole: 'number'
			},
			bpFullCap: {
				min: 0,
				max: 110000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'indicator',
				name: 'Full capacity',
				subrole: 'number'
			},
			bpMaxCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Battery maximum cell temperature',
				subrole: 'number'
			},
			bpMinCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Battery minimum cell temperature',
				subrole: 'number'
			},
			bpMaxMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Maximum Mos temperature',
				subrole: 'number'
			},
			bpMinMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'Minimum Mos temperature',
				subrole: 'number'
			},
			bpEcloundSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'EcloundSoc',
				subrole: 'number'
			},
			bpRealSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Real SOC',
				subrole: 'number'
			},
			bpRealSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'REAL SOH',
				subrole: 'number'
			},
			bpDownLimitSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Discharge limit SOC',
				subrole: 'number'
			},
			bpUpLimitSoc: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Charge limit SOC',
				subrole: 'number'
			},
			bpChgSop: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'ChgSop',
				subrole: 'number'
			},
			bpDsgSop: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'DsgSop',
				subrole: 'number'
			},
			bpRemainWatth: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'indicator',
				name: 'Remain energy',
				subrole: 'number'
			},
			bpTargetSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Target SOC',
				subrole: 'number'
			},
			bpDiffSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Diff. SOC',
				subrole: 'number'
			},
			bpMaxSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Maximum SOC',
				subrole: 'number'
			},
			bpMinSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Minimum SOC',
				subrole: 'number'
			},
			bpLimitSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Limit SOC',
				subrole: 'number'
			},
			bpCalendarSoh: {
				min: 0,
				max: 60,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Calendar SOH',
				subrole: 'number'
			},
			bpCycleSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'indicator',
				name: 'Cycle SOH',
				subrole: 'number'
			},
			bpAccuChgEnergy: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'indicator',
				name: 'Accu Charged energy',
				subrole: 'number'
			},
			bpAccuDsgEnergy: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'indicator',
				name: 'Accu Discharged energy',
				subrole: 'number'
			},
			bpPtcTemp2: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'indicator',
				name: 'PTC temperature 2',
				subrole: 'number'
			}
		},
		array: {
			bpTemp: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'Battery tremperatures'
			},
			bpCellVol: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				mult: 0.001,
				name: 'Battery Cell voltages'
			}
		},
		diagnostic: {
			bpRunSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Baattery Run Status',
				role: 'info',
				bpRunSta: { '1': 'RUNSTA_RUN' }
			},
			bpErrCode: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery Error Code',
				role: 'info',
				bpErrCode: { '0': 'OK?' }
			},
			bpBalanceState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Balance state',
				role: 'info',
				bpBalanceState: { '0': 'OK?' }
			},
			bpBmsFault: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'BMS fault',
				role: 'info',
				bpBmsFault: { '0': 'OK?' }
			},
			bpGlobalProtect: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Global Protect',
				role: 'info',
				bpGlobalProtect: { '0': 'OK?' }
			},
			bpActiveCalReqStat: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Active Cal. request status',
				role: 'info',
				bpActiveCalReqStat: { '0': 'OK?' }
			},
			bpActiveCalRunStat: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'active Cal. run status',
				role: 'info',
				bpActiveCalRunStat: { '0': 'OK?' }
			},
			moduleProgramSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module program start',
				role: 'info',
				moduleProgramSta: { '0': 'OK?' }
			},
			bmsRunSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Running status',
				role: 'info',
				bmsRunSta: { '1': 'PB_BMS_STATE_NORMAL' }
			},
			bmsChgDsgSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Charge/Discharge status',
				role: 'info',
				bmsChgDsgSta: { '0': 'PB_DSG_STATE' }
			},
			dabModSta: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'dabModSta',
				role: 'info',
				dabModSta: { '0': 'PB_MOD_STA_NORMAL' }
			},
			bpAcRechargeFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'AC recharge flag',
				role: 'info',
				bpAcRechargeFlag: { '0': 'no AC recharge', '1': 'AC recharge' }
			},
			bpPtcHeatFlag: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PTC heat flag',
				role: 'info',
				bpPtcHeatFlag: { '0': 'OK?' }
			},
			bpPtcExitEvent: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'PTC Exit event',
				role: 'info',
				bpPtcExitEvent: { '0': 'PB_PTC_OT_STATE' }
			},
			bpSysState: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Syste state',
				role: 'info',
				bpSysState: { '2': 'NORMAL_STATE' }
			},
			bpDsrc: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'bpDsrc',
				role: 'info',
				bpDsrc: { '0': 'OK?', '1': '1?', '2': '2?' }
			}
		},
		string: {
			bpSn: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Battery serial number',
				role: 'info'
			},
			moduleProductInfo: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module product info',
				role: 'info'
			},
			moduleAplSwVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module Aplication SW version',
				role: 'info'
			},
			moduleLoaderSwVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Module Loader SW version',
				role: 'info'
			},
			bpHeartbeatVer: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Heartbeat version',
				role: 'info'
			},
			bpTimestamp: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Timestamp',
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

const poweroceanStatesDict = {
	powerocean: {
		statusReportBattery1: {
			bpPwr: { entity: 'number' },
			bpSoc: { entity: 'number' },
			bpSoh: { entity: 'number' },
			bpTemp: { entity: 'array' },
			bpMaxCellVol: { entity: 'number' },
			bpMinCellVol: { entity: 'number' },
			bpRunSta: { entity: 'diagnostic' },
			bpVol: { entity: 'number' },
			bpAmp: { entity: 'number' },
			bpBusVol: { entity: 'number' },
			bpErrCode: { entity: 'diagnostic' },
			bpCellVol: { entity: 'array' },
			bpDsrc: { entity: 'diagnostic' },
			bpSn: { entity: 'string' },
			bpCycles: { entity: 'number' },
			bpBalanceState: { entity: 'diagnostic' },
			bpHvMosTemp: { entity: 'number' },
			bpLvMosTemp: { entity: 'number' },
			bpPtcTemp: { entity: 'number' },
			bpHtsTemp: { entity: 'number' },
			bpBusNegTemp: { entity: 'number' },
			bpBusPosTemp: { entity: 'number' },
			bpEnvTemp: { entity: 'number' },
			bpAccuChgCap: { entity: 'number' },
			bpAccuDsgCap: { entity: 'number' },
			bpDesignCap: { entity: 'number' },
			bpFullCap: { entity: 'number' },
			bpMaxCellTemp: { entity: 'number' },
			bpMinCellTemp: { entity: 'number' },
			bpMaxMosTemp: { entity: 'number' },
			bpMinMosTemp: { entity: 'number' },
			bpBmsFault: { entity: 'diagnostic' },
			bpEcloundSoc: { entity: 'number' },
			bpHeartbeatVer: { entity: 'string' },
			bpTimestamp: { entity: 'string' },
			bpRealSoc: { entity: 'number' },
			bpRealSoh: { entity: 'number' },
			bpGlobalProtect: { entity: 'diagnostic' },
			bpDownLimitSoc: { entity: 'number' },
			bpUpLimitSoc: { entity: 'number' },
			bpActiveCalReqStat: { entity: 'diagnostic' },
			bpActiveCalRunStat: { entity: 'diagnostic' },
			moduleProductInfo: { entity: 'string' },
			moduleProgramSta: { entity: 'diagnostic' },
			moduleAplSwVer: { entity: 'string' },
			moduleLoaderSwVer: { entity: 'string' },
			bmsRunSta: { entity: 'diagnostic' },
			bmsChgDsgSta: { entity: 'diagnostic' },
			dabModSta: { entity: 'diagnostic' },
			bpChgSop: { entity: 'number' },
			bpDsgSop: { entity: 'number' },
			bpRemainWatth: { entity: 'number' },
			bpTargetSoc: { entity: 'number' },
			bpDiffSoc: { entity: 'number' },
			bpMaxSoc: { entity: 'number' },
			bpMinSoc: { entity: 'number' },
			bpLimitSoc: { entity: 'number' },
			bpCalendarSoh: { entity: 'number' },
			bpCycleSoh: { entity: 'number' },
			bpAcRechargeFlag: { entity: 'diagnostic' },
			bpPtcHeatFlag: { entity: 'diagnostic' },
			bpPtcExitEvent: { entity: 'diagnostic' },
			bpAccuChgEnergy: { entity: 'number' },
			bpAccuDsgEnergy: { entity: 'number' },
			bpPtcTemp2: { entity: 'number' },
			bpSysState: { entity: 'diagnostic' }
		},
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const poweroceanRanges = {
	powerocean: {
		statusReportBattery1: {
			number: {
				bpFullCap: { max: 100000 }
			}
		}
	}
};

const poweroceanCmd = {
	powerocean: {
		action: {
			latestQuotas: {
				operateType: 'latestQuotas',
				params: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
			}
		}
	}
};

module.exports = {
	poweroceanStates,
	poweroceanStatesDict,
	poweroceanRanges,
	poweroceanCmd
};
