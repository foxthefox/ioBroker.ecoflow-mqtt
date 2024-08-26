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

module.exports = {
	poweroceanStates,
	poweroceanStatesDict,
	poweroceanRanges,
	poweroceanCmd
};
