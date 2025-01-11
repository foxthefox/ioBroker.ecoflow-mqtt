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
				role: 'value',
				name: 'Battery power'
			},
			bpSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			bpSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOH'
			},
			bpMaxCellVol: {
				min: 0,
				max: 15,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Battery maximum cell voltage'
			},
			bpMinCellVol: {
				min: 0,
				max: 15,
				unit_of_measurement: 'V',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Battery miniimum cell voltage'
			},
			bpVol: {
				min: 0,
				max: 60,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Battery Voltage'
			},
			bpAmp: {
				min: 0,
				max: 60,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Battery Current'
			},
			bpBusVol: {
				min: 0,
				max: 900,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Bus voltage'
			},
			bpCycles: {
				min: 0,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'cycles',
				role: 'value',
				name: 'Battery cycles'
			},
			bpHvMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'High voltage Mos temperature'
			},
			bpLvMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Low voltage Mos temparature'
			},
			bpPtcTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'PTC temperature'
			},
			bpHtsTemp: {
				min: 0,
				max: 60,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Hts temperature'
			},
			bpBusNegTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Bus neg. temperature'
			},
			bpBusPosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Bus pos. temperature'
			},
			bpEnvTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Env. temperature'
			},
			bpAccuChgCap: {
				min: 0,
				max: 7500000,
				unit_of_measurement: 'mAh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'value',
				name: 'Accu charge capacity'
			},
			bpAccuDsgCap: {
				min: 0,
				max: 7500000,
				unit_of_measurement: 'mAh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'value',
				name: 'Accu discharge capacity'
			},
			bpDesignCap: {
				min: 0,
				max: 110000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'value',
				name: 'Design cpapcity'
			},
			bpFullCap: {
				min: 0,
				max: 110000,
				unit_of_measurement: 'mAh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'capacity',
				role: 'value',
				name: 'Full capacity'
			},
			bpMaxCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Battery maximum cell temperature'
			},
			bpMinCellTemp: {
				min: 0,
				max: 80,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Battery minimum cell temperature'
			},
			bpMaxMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Maximum Mos temperature'
			},
			bpMinMosTemp: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'Minimum Mos temperature'
			},
			bpEcloundSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'EcloundSoc'
			},
			bpRealSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Real SOC'
			},
			bpRealSoh: {
				min: 0,
				max: 110,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'REAL SOH'
			},
			bpDownLimitSoc: {
				min: 0,
				max: 30,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Discharge limit SOC'
			},
			bpUpLimitSoc: {
				min: 60,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Charge limit SOC'
			},
			bpChgSop: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'ChgSop'
			},
			bpDsgSop: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'DsgSop'
			},
			bpRemainWatth: {
				min: 0,
				max: 7000,
				unit_of_measurement: 'Wh',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'Remain energy'
			},
			bpTargetSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Target SOC'
			},
			bpDiffSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Diff. SOC'
			},
			bpMaxSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Maximum SOC'
			},
			bpMinSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Minimum SOC'
			},
			bpLimitSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Limit SOC'
			},
			bpCalendarSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Calendar SOH'
			},
			bpCycleSoh: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Cycle SOH'
			},
			bpAccuChgEnergy: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'Accu Charged energy'
			},
			bpAccuDsgEnergy: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.01,
				entity_type: 'sensor',
				device_class: 'energy',
				role: 'value',
				name: 'Accu Discharged energy'
			},
			bpPtcTemp2: {
				min: 0,
				max: 90,
				unit_of_measurement: '°C',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'temperature',
				role: 'value',
				name: 'PTC temperature 2'
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
	JTS1_ENERGY_STREAM_REPORT: {
		number: {
			sysLoadPwr: {
				min: 0,
				max: 15000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'System load'
			},
			sysGridPwr: {
				min: 0,
				max: 15000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Grid power'
			},
			mpptPwr: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Solar power'
			},
			bpPwr: {
				min: 0,
				max: 5200,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Battery power'
			},
			bpSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			}
		}
	},
	JTS1_EMS_HEARTBEAT: {
		number: {
			pcsAPhase_volt: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Phase A voltage'
			},
			pcsAPhase_amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Phase A current'
			},
			pcsAPhase_actPwr: {
				min: -2000,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Phase A active power'
			},
			pcsAPhase_reactPwr: {
				min: -1000,
				max: 5000,
				unit_of_measurement: 'VAr',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Phase A reactive power'
			},
			pcsAPhase_apparentPwr: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'VA',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'apparent_power',
				role: 'value',
				name: 'Phase A apparent power',
				subrole: 'power'
			},
			pcsBPhase_volt: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Phase B voltage'
			},
			pcsBPhase_amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Phase B current'
			},
			pcsBPhase_actPwr: {
				min: -2000,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Phase B active power'
			},
			pcsBPhase_reactPwr: {
				min: -1000,
				max: 15000,
				unit_of_measurement: 'VAr',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Phase B reactive power'
			},
			pcsBPhase_apparentPwr: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'VA',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'apparent_power',
				role: 'value',
				name: 'Phase B apparent power',
				subrole: 'power'
			},
			pcsCPhase_volt: {
				min: 0,
				max: 250,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Phase C voltage'
			},
			pcsCPhase_amp: {
				min: 0,
				max: 20,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Phase C current'
			},
			pcsCPhase_actPwr: {
				min: -2000,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Phase C active power'
			},
			pcsCPhase_reactPwr: {
				min: -1000,
				max: 5000,
				unit_of_measurement: 'VAr',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Phase C reactive power'
			},
			pcsCPhase_apparentPwr: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'VA',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'apparent_power',
				role: 'value',
				name: 'Phase C apparent power',
				subrole: 'power'
			},
			mpptHeartBeat_mpptPv_vol0: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Solar 1 voltage'
			},
			mpptHeartBeat_mpptPv_vol1: {
				min: 0,
				max: 1000,
				unit_of_measurement: 'V',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'voltage',
				role: 'value',
				name: 'Solar 2 voltage'
			},
			mpptHeartBeat_mpptPv_amp0: {
				min: 0,
				max: 21,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Solar 1 current'
			},
			mpptHeartBeat_mpptPv_amp1: {
				min: 0,
				max: 21,
				unit_of_measurement: 'A',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'current',
				role: 'value',
				name: 'Solar 2 current'
			},
			mpptHeartBeat_mpptPv_pwr0: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Solar 1 power'
			},
			mpptHeartBeat_mpptPv_pwr1: {
				min: 0,
				max: 5000,
				unit_of_measurement: 'W',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'power',
				role: 'value',
				name: 'Solar 2 power'
			},
			mpptHeartBeat_mpptInsResist: {
				min: 0,
				max: 1000,
				unit_of_measurement: '',
				mult: 1,
				entity_type: 'sensor',
				role: 'value',
				name: 'MPPT insulation resistance'
			}
		},
		diagnostic: {
			mpptHeartBeat_mpptPv_lightSta0: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Solar 1 state',
				mpptHeartBeat_mpptPv_lightSta0: { '0': 'disabled?', '1': 'OK?' }
			},
			mpptHeartBeat_mpptPv_lightSta1: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'info',
				name: 'Solar 2 state',
				mpptHeartBeat_mpptPv_lightSta1: { '0': 'disabled?', '1': 'OK?' }
			}
		},
		array: {
			mpptHeartBeat_mpptTempVal: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				role: 'list',
				name: 'MPPT temperature values'
			}
		}
	},
	JTS1_EMS_CHANGE_REPORT: {
		number: {
			bpSoc: {
				min: 0,
				max: 100,
				unit_of_measurement: '%',
				mult: 1,
				entity_type: 'sensor',
				device_class: 'battery',
				role: 'value',
				name: 'Battery SOC'
			},
			bpTotalChgEnergy: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Battery total energy charged'
			},
			bpTotalDsgEnergy: {
				min: 0,
				unit_of_measurement: 'kWh',
				mult: 0.001,
				entity_type: 'sensor',
				device_class: 'energy',
				state_class: 'total_increasing',
				role: 'value',
				name: 'Battery total energy discharged'
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

		JTS1_ENERGY_STREAM_REPORT: {
			sysLoadPwr: { entity: 'number' },
			sysGridPwr: { entity: 'number' },
			mpptPwr: { entity: 'number' },
			bpPwr: { entity: 'number' },
			bpSoc: { entity: 'number' }
		},

		JTS1_EMS_HEARTBEAT: {
			pcsAPhase_volt: { entity: 'number' },
			pcsAPhase_amp: { entity: 'number' },
			pcsAPhase_actPwr: { entity: 'number' },
			pcsAPhase_reactPwr: { entity: 'number' },
			pcsAPhase_apparentPwr: { entity: 'number' },
			pcsBPhase_volt: { entity: 'number' },
			pcsBPhase_amp: { entity: 'number' },
			pcsBPhase_actPwr: { entity: 'number' },
			pcsBPhase_reactPwr: { entity: 'number' },
			pcsBPhase_apparentPwr: { entity: 'number' },
			pcsCPhase_volt: { entity: 'number' },
			pcsCPhase_amp: { entity: 'number' },
			pcsCPhase_actPwr: { entity: 'number' },
			pcsCPhase_reactPwr: { entity: 'number' },
			pcsCPhase_apparentPwr: { entity: 'number' },
			mpptHeartBeat_mpptPv_vol0: { entity: 'number' },
			mpptHeartBeat_mpptPv_vol1: { entity: 'number' },
			mpptHeartBeat_mpptPv_amp0: { entity: 'number' },
			mpptHeartBeat_mpptPv_amp1: { entity: 'number' },
			mpptHeartBeat_mpptPv_pwr0: { entity: 'number' },
			mpptHeartBeat_mpptPv_pwr1: { entity: 'number' },
			mpptHeartBeat_mpptPv_lightSta0: { entity: 'diagnostic' },
			mpptHeartBeat_mpptPv_lightSta1: { entity: 'diagnostic' },
			mpptHeartBeat_mpptTempVal: { entity: 'array' },
			mpptHeartBeat_mpptInsResist: { entity: 'number' }
		},
		JTS1_EMS_CHANGE_REPORT: {
			bpSoc: { entity: 'number' },
			bpTotalChgEnergy: { entity: 'number' },
			bpTotalDsgEnergy: { entity: 'number' }
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
				bpFullCap: { max: 110000 }
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

const protoMsg = {
	cmdId: {
		146: { cmdFunc: { 96: 'JTS1_brightness' } },
		119: { cmdFunc: { 96: 'JTS1_brightness' } }, // "src":32,"dest":96,
		113: { cmdFunc: { 53: 'ocean_113_1_msg' } }, //Status Einzelgeräte
		//39: { cmdFunc: { 96: '????' } }, no pdata
		//34: { cmdFunc: { 96: '????' } }, no pdata
		33: { cmdFunc: { 209: 'evPulseList', 96: 'JTS1_ENERGY_STREAM_REPORT' } },
		13: { cmdFunc: { 96: 'JTS1_EMS_PARAM_CHANGE_REPORT' } },
		11: { cmdFunc: { 96: 'JTS1_LOGY_DEV_REPORT' } },
		//10: { cmdFunc: { 96: '???' } }, no pdata
		9: { cmdFunc: { 96: 'JTS1_ERROR_CODE_MASK_REPORT' } },
		8: { cmdFunc: { 209: 'evPulse_report', 96: 'JTS1_EMS_CHANGE_REPORT' } },
		7: { cmdFunc: { 96: 'JTS1_BP_STA_REPORT' } },
		3: { cmdFunc: { 96: 'oceanConfig' } }, // IDs von ems/pcs und den Batterien
		2: { cmdFunc: { 209: 'evPulse_heartbeat', 2: 'BackendRecordHeartbeatReport' } },
		//1: { cmdFunc: { 224: '????' } }, no pdata
		1: { cmdFunc: { 96: 'JTS1_EMS_HEARTBEAT' } }
	}
};

const protoSource = `
syntax = "proto3";
message ocean_113_msg {
	optional ocean_113_1_msg msg_1 = 1;
}

message ocean_113_1_msg {
	repeated bpSta_msg bpSta = 1;
}

message bpSta_msg {
	optional int32 soc1 = 1;
	optional int32 status2 = 2;
	optional string name3 = 3;
	optional int32 unknown5 = 5;
	optional int32 unknown6 = 6;
	optional int32 unknown7 = 7;
	optional int32 moduleAplSwVer8 = 8;
	optional int32 moduleLoaderSwVer9 = 9;
}

message oceanConfig {
	optional string emsSerial = 1;
	optional string pcsSerial = 2;
	repeated string bpSerial = 3;
}

message mpptPv {
	optional float vol = 1;
	optional float amp = 2;
	optional float pwr = 3;
	optional int32 lightSta = 4;
}

message mpptHeartBeat {
	repeated mpptPv mpptPv = 1;
	optional float mpptInsResist = 2;
	repeated float mpptTempVal = 3;
}

message meterHeartBeat {
	optional int32 meterType = 1;
	optional int32 meterAddr = 2;
	repeated float meterData = 3;
}

message pcsPhase {
	optional float volt = 1;
	optional float amp = 2;
	optional float actPwr = 3;
	optional float reactPwr = 4;
	optional float apparentPwr = 5;
}

message MpptPVInfo {
	optional float vol = 1;
	optional float amp = 2;
	optional float pwr = 3;
	optional bool light_sta = 4;
  }

message DCBusInfo {
	optional float vol = 1;
	optional float amp = 2;
  }
  
  message LoadInfo {
	optional float vol = 1;
	optional float amp = 2;
	optional float freq = 3;
	optional float pwr = 4;
  }


message JTS1_EMS_HEARTBEAT {
	optional float bpRemainWatth = 1;

	optional float pcsAcFreq = 11;
	optional pcsPhase pcsAPhase = 12;
	optional pcsPhase pcsBPhase = 13;
	optional pcsPhase pcsCPhase = 14;
	// optional LoadInfo loadInfo = 15; //
	optional float pcsBusVolt = 16;
	optional float pcsLeakAmp = 17;
	optional float pcsDci = 18;
	optional meterHeartBeat meterHeartBeat = 30;
	optional mpptHeartBeat mpptHeartBeat = 31;
	optional float pcsVbusRef = 32;
	optional float pcsActivePowerRef = 33;
	optional float pcsActivePowerLimitUp = 34; //evtl 33vs34 getauscht
	optional float pcsActivePowerLimitDn =35;

	optional int32 pcsRelayStateShow = 38;
	optional int32 pcsGridSafetyFuncRecord = 39;
	optional int32 pcsGridSafetyStateRecord = 40;
	optional float pcsGridInvErrorRms = 41;

	optional float pcsReactivePowerRef = 44;

	optional float pcsVgridThd = 48;
	optional float pcsInterruptOccupancyRate = 49;

	optional float emsBusVolt = 56;

	optional int32 emsBpAliveNum = 58;
	optional float emsBpPower = 59;
	optional float emsBpChg = 60;
	optional float emsBpDsg = 61;

	optional int32 emsSelfUsedCnt = 63;
	optional int32 emsAcMakeupTriggleSoc = 64;
	optional int32 emsAcMakeupExitSoc = 65;

    optional int32 emsStartFsmState = 68;

	optional int32 emsStopCmd = 71;
	optional int32 iot4gErr = 72;

	optional int32 emsMpptHbState = 80;
	optional float emsNtcTempMax = 81;
	optional float emsBusVoltErrSlidFilter = 82;
	optional float emsBusVoltRipple = 83;
}

message JTS1_ENERGY_STREAM_REPORT {
	optional float sysLoadPwr  = 1;
	optional float sysGridPwr = 2;
	optional float mpptPwr = 3;
	optional float bpPwr = 4;
	optional int32 bpSoc = 5;
}

message JTS1_EMS_PARAM_CHANGE_REPORT {
	/*
	"smartCtrl": "False",
	"energyEfficientEnable": "False",
	"bpBurst": "False",
	"lowerPowerStat": "False",
	"sysZone": 0,
	"sysTimeTab": 0
	*/

	optional int32 breakerCapacityMax = 7;
	optional int32 breakerEnableState = 8;
}

message JTS1_LOGY_DEV_REPORT {
	optional string devSn = 1;
	optional int32 online =2;
	repeated int32 errorCode = 7;
}

message JTS1_EMS_CHANGE_REPORT {
	optional int32 bpSoc = 7;
	optional int32 emsSysSelfCheckStat = 8;
	optional int32 bpTotalChgEnergy = 13;
	optional int32 bpTotalDsgEnergy = 14;
	optional int32 emsFeedMode = 16;
	optional int32 emsFeedRatio = 17;
	optional int32 emsFeedPwr = 18;
	optional float pcsOverVol1 = 31;
	optional float pcsOverVol2 = 32;
	optional float pcsLowVol1 = 37;
	optional float pcsLowVol2 = 38;
	optional float pcsLowVol3 = 39;
	optional int32 pcsLowVolTime1 = 40;
	optional int32 pcsLowVolTime2 = 41;
	optional int32 pcsLowVolTime3 = 42;
	optional float pcsOverFreq1 = 48;
	optional float pcsOverFreq2 = 49;
	optional float pcsLowFreq1 = 52;
	optional float pcsLowFreq2 = 53;
	optional float pcsOverFreqRecover = 56;
	optional float pcsOverVolRideThroughStart1 = 60;
	optional float pcsOverVolRideThroughStart2 = 61;
	optional int32 pcsOverVolRideThroughProtectTime1 = 62;
	optional int32 pcsOverVolRideThroughProtectTime2 = 63;
	optional float pcsLowVolRideThroughStart1 = 64;
	optional float pcsLowVolRideThroughStart2 = 65;
	optional float pcsLowVolRideThroughStart3 = 66;
	optional int32 pcsLowVolRideThroughProtectTime1 = 67;
	optional int32 pcsLowVolRideThroughProtectTime2 = 68;
	optional int32 pcsLowVolRideThroughProtectTime3 = 69;
	optional float pcsActivePowerGradient = 75;
	optional int32 pcsActivePowerSoftstartTime = 77;
	optional float pcsOverFreqDeratingPowerBased = 79;
	optional float pcsOverFreqDeratingStart = 80;
	optional float pcsOverFreqDeratingEnd = 81;
	optional float pcsOverFreqDeratingSlope = 82;
	optional float pcsOverFreqDeratingRecoverSlope = 83;
	optional float pcsUnderFreqIncrementStart = 87;
	optional float pcsUnderFreqIncrementEnd = 88;
	optional float pcsUnderFreqIncrementSlope = 89;
	optional float pcsUnderFreqIncrementRecoverSlope = 90;
	optional float pcsOverVolRecover = 94;
	optional float pcsOverVolDeratingEnd = 95;
	optional float pcsReactPwrCompensation = 100;
	optional float pcsQuV1 = 103;
	optional float pcsQuV2 = 104;
	optional float pcsQuV3 = 105;
	optional float pcsQuV4 = 106;
	optional float pcsQuQ1 = 107;
	optional float pcsQuQ2 = 108;
	optional float pcsQuQ3 = 109;
	optional float pcsQuQ4 = 110;
	optional float pcsQuTimeConst = 111;
	optional float pcsCospP1 = 112;
	optional float pcsCospP2 = 113;
	optional float pcsCospP3 = 114;
	optional float pcsCospPf1 = 115;
	optional float pcsCospPf2 = 116;
	optional float pcsCospPf3 = 117;
	optional int32 pcsOnGridWaitTime = 120;
	optional float pcsHighFreqOnGrid = 123;
	optional int32 pcsFaultRecoverOnGridWaitTime = 125;
	optional float pcsFaultRecoverHighFreqOnGrid = 128;
	optional float pcsFaultRecoverLowFreqOnGrid = 129;
	optional int32 pcsPowerDeratingFlag = 130;
	optional int32 pcsPowerDeratingSet = 131;
	optional int32 sysMulPeakTime = 181;
	optional int32 pcsRunFsmState = 193;
	optional int32 pcsRelayStateShow = 204;
}

message bpStaReport {
	optional float bpPwr =1;
	optional int32 bpSoc =2;
	optional int32 bpSoh =3;
	repeated float bpTemp = 5 [packed=true];
	optional float bpMaxCellVol = 6;
	optional float bpMinCellVol = 7;
	optional int32 bpRunSta = 8;  //1=RUNSTA_RUN
	optional float bpVol = 9;
	optional float bpAmp = 10;
	optional float bpBusVol =11;
	optional int32 bpErrCode =13;
	repeated float bpCellVol = 14 [packed=true];
	optional int32 bpDsrc =15;
	optional string bpSn = 16;
	optional int32 bpCycles = 17;
	optional int32 bpBalanceState = 18;
	optional float bpHvMosTemp = 19;
	optional float bpLvMosTemp = 20;
	optional float bpPtcTemp= 21;
	optional float bpHtsTemp = 22;
	optional float bpBusNegTemp = 23;
	optional float bpBusPosTemp = 24;
	optional float bpEnvTemp = 25; 
	optional int32 bpAccuChgCap = 26;
	optional int32 bpAccuDsgCap = 27;
	optional int32 bpDesignCap = 28;
	optional int32 bpFullCap = 29;
	optional float bpMaxCellTemp = 30;
	optional float bpMinCellTemp = 31;
	optional float bpMaxMosTemp = 32;
	optional float bpMinMosTemp = 33;
	optional int32 bpBmsFault = 34;
	optional int32 bpEcloundSoc = 35;
	optional int32 bpHeartbeatVer = 36;
	optional int32 bpTimestamp = 37;
	optional float bpRealSoc = 38;
	optional float bpRealSoh = 39;
	optional int32 bpGlobalProtect = 40;
	optional int32 bpDownLimitSoc = 41;
	optional int32 bpUpLimitSoc = 42;
	optional int32 bpActiveCalReqStat = 43;
	optional int32 bpActiveCalRunStat = 44;
	optional int32 moduleProductInfo = 45;
	optional int32 moduleProgramSta = 46;
	optional int32 moduleAplSwVer = 47;
	optional int32 moduleLoaderSwVer = 48;
	optional int32 bmsRunSta = 49; // 1= PB_BMS_STATE_NORMAL
	optional int32 bmsChgDsgSta = 50; // 0=PB_DSG_STATE
	optional int32 dabModSta = 51; // 0= PB_MOD_STA_NORMAL
	optional int32 bpChgSop = 52;
	optional int32 bpDsgSop = 53;
	optional float bpRemainWatth = 54;
	optional float bpTargetSoc = 55;
	optional float bpDiffSoc = 56;
	optional float bpMaxSoc = 57;
	optional float bpMinSoc = 58;
	optional float bpLimitSoc = 59;
	optional float bpCalendarSoh = 60;
	optional float bpCycleSoh = 61;
	optional int32 bpAcRechargeFlag = 62;
	optional int32 bpPtcHeatFlag = 63;
	optional int32 bpPtcExitEvent = 64; // 0=PB_PTC_OT_STATE
	optional int32 bpAccuChgEnergy = 65;
	optional int32 bpAccuDsgEnergy = 66;
	optional float bpPtcTemp2 =67;
	optional int32 bpSysState = 68; // 2=NORMAL_STATE
}

message JTS1_BP_STA_REPORT {
	repeated bpStaReport bpSta = 1;
}

message JTS1_ERROR_CODE_MASK_REPORT {
	repeated int32 errorCode =1;
}

message JTS1_brightness {
	optional int32 unknown1 = 1;
	optional int32 brightness = 2;
}


//packetType cmdId = 33 unknown deviceType cmdFunc = 209
message evPulseList {
	repeated string evSerial = 1;
}

//cmdId = 8 unknown deviceType cmdFunc = 209
message evPulse_report {
	optional string evSerial = 1;
	optional float unknown2 =2; // power ?
	optional int32 unknown3 =3;
	optional int32 unknown4 =4;
	optional int32 unknown5 =5;
	optional int32 unknown6 =6;
	repeated bytes unknown7 =7;
	optional float unknown8 =8; // power?
	optional float energyCharged9 =9; //energy loaded kWh
	optional int32 unknown10 =10;
	optional int32 unknown11 =11; //energy loaded Wh?
	optional int32 unknown12 =12;
	optional string unknwon13 = 13;
	repeated bytes unknown14 =14;
	optional int32 unixtimeChargeStart15 =15; //charging time start
	optional int32 unixtimeChargeStop16 =16; //charge time stop
	optional int32 unknown17 =17;
	optional int32 unknown30 =30;
	optional int32 unknown31 =31;
	optional int32 unknown32 =32;
	optional int32 unknown33 =33;
	optional int32 unknown34 =34;
}

message evPulse_status {
	optional int32 unknown2 =2;
	optional int32 unknown3 =3;
	optional int32 unknown4 =4;
	optional int32 unknown5 =5;
	optional int32 unknown6 =6;
	optional int32 unknown7 =7;
	optional int32 unknown8 =8;
	repeated bytes error9 =9;
}

//cmdId = 2 unknown deviceType cmdFunc = 209
message evPulse_heartbeat {
	optional string evSerial = 1;
	optional evPulse_status evPulse_status  = 2;
}
`;

module.exports = {
	poweroceanStates,
	poweroceanStatesDict,
	poweroceanRanges,
	poweroceanCmd,
	protoMsg,
	protoSource
};
