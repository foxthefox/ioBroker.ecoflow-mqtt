const deviceStates = {
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
                name: 'Battery power',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOC',
            },
            bpSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOH',
            },
            bpSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOP',
            },
            bpMaxCellVol: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery maximum cell voltage',
            },
            bpMinCellVol: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery miniimum cell voltage',
            },
            bpVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery Voltage',
            },
            bpAmp: {
                min: 0,
                max: 60,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Battery Current',
            },
            bpBusVol: {
                min: 0,
                max: 900,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage',
            },
            bpCycles: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'Battery cycles',
            },
            bpHvMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'High voltage Mos temperature',
            },
            bpLvMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Low voltage Mos temparature',
            },
            bpPtcTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'PTC temperature',
            },
            bpHtsTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Hts temperature',
            },
            bpBusNegTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Bus neg. temperature',
            },
            bpBusPosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Bus pos. temperature',
            },
            bpEnvTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Env. temperature',
            },
            bpAccuChgCap: {
                min: 0,
                max: 7500000,
                unit_of_measurement: 'mAh',
                mult: 0.01,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Accu charge capacity',
            },
            bpAccuDsgCap: {
                min: 0,
                max: 7500000,
                unit_of_measurement: 'mAh',
                mult: 0.01,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Accu discharge capacity',
            },
            bpDesignCap: {
                min: 0,
                max: 110000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Design cpapcity',
            },
            bpFullCap: {
                min: 0,
                max: 110000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Full capacity',
            },
            bpMaxCellTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Battery maximum cell temperature',
            },
            bpMinCellTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Battery minimum cell temperature',
            },
            bpMaxMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Maximum Mos temperature',
            },
            bpMinMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Minimum Mos temperature',
            },
            bpRealSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Real SOC',
            },
            bpRealSoh: {
                min: 0,
                max: 110,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'REAL SOH',
            },
            bpDownLimitSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Discharge limit SOC',
            },
            bpUpLimitSoc: {
                min: 60,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Charge limit SOC',
            },
            bpChgSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'ChgSop',
            },
            bpDsgSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'DsgSop',
            },
            bpRemainWatth: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Remain energy',
            },
            bpTargetSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Target SOC',
            },
            bpDiffSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Diff. SOC',
            },
            bpMaxSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Maximum SOC',
            },
            bpMinSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Minimum SOC',
            },
            bpLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Limit SOC',
            },
            bpCalendarSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Calendar SOH',
            },
            bpCycleSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Cycle SOH',
            },
            bpAccuChgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Accu Charged energy',
            },
            bpAccuDsgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Accu Discharged energy',
            },
            bpPtcTemp2: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'PTC temperature 2',
            },
        },
        array: {
            bpTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Battery tremperatures',
            },
            bpCellVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                mult: 0.001,
                name: 'Battery Cell voltages',
            },
        },
        diagnostic: {
            bpRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Baattery Run Status',
                role: 'info',
                bpRunSta: { 0: 'RUNSTA_STANDBY', 1: 'RUNSTA_RUN', 2: 'RUNSTA_STOP' },
            },
            bpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery Error Code',
                role: 'info',
                bpErrCode: { 0: 'OK?' },
            },
            bpBalanceState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Balance state',
                role: 'info',
                bpBalanceState: { 0: 'OK?' },
            },
            bpBmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS fault',
                role: 'info',
                bpBmsFault: { 0: 'OK?' },
            },
            bpGlobalProtect: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Global Protect',
                role: 'info',
                bpGlobalProtect: { 0: 'OK?' },
            },
            bpActiveCalReqStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Active Cal. request status',
                role: 'info',
                bpActiveCalReqStat: { 0: 'OK?' },
            },
            bpActiveCalRunStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'active Cal. run status',
                role: 'info',
                bpActiveCalRunStat: { 0: 'OK?' },
            },
            moduleProgramSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module program start',
                role: 'info',
                moduleProgramSta: { 0: 'OK?' },
            },
            bmsRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Running status bms',
                role: 'info',
                bmsRunSta: {
                    0: 'PB_BMS_STATE_SHUTDOWN',
                    1: 'PB_BMS_STATE_NORMAL',
                    2: 'PB_BMS_STATE_CHARGEABLE',
                    3: 'PB_BMS_STATE_DISCHARGEABLE',
                    4: 'PB_BMS_STATE_FAULT',
                },
            },
            bmsChgDsgSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charge/Discharge status',
                role: 'info',
                bmsChgDsgSta: { 0: 'PB_STANDBY_STATE ', 1: 'PB_DSG_STATE', 2: 'PB_CHG_STATE' },
            },
            dabModSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'dabModSta',
                role: 'info',
                dabModSta: { 0: 'PB_MOD_STA_NORMAL', 1: 'PB_MOD_STA_WARNNING', 3: 'PB_MOD_STA_FAULT' },
            },
            bpAcRechargeFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'AC recharge flag',
                role: 'info',
                bpAcRechargeFlag: { 0: 'no AC recharge', 1: 'AC recharge' },
            },
            bpPtcHeatFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PTC heat flag',
                role: 'info',
                bpPtcHeatFlag: { 0: 'OK?' },
            },
            bpPtcExitEvent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PTC Exit event',
                role: 'info',
                bpPtcExitEvent: {
                    0: 'PB_PTC_OT_STATE',
                    1: 'HEAT_EVENT_TEMP_OK',
                    2: 'HEAT_EVENT_ABNORMAL',
                    3: 'HEAT_EVENT_TEMP_DIFF',
                    4: 'HEAT_EVENT_BMS_FAULT',
                    5: 'HEAT_EVENT_OVERTIME',
                    6: 'HEAT_EVENT_CHG_DISABLE',
                    7: 'HEAT_EVENT_POWER_LOW',
                    8: 'HEAT_EVENT_AB_DSG',
                    9: 'HEAT_EVENT_DSG_SOC_LOW',
                    10: 'HEAT_EVENT_DSG_VOL_LOW',
                    11: 'HEAT_EVENT_DSG_DISABLE',
                    12: 'HEAT_EVENT_AFE_FAULT',
                    13: 'HEAT_EVENT_FTOP_FAULT',
                    14: 'HEAT_EVENT_FVOP_FAULT',
                    15: 'HEAT_EVENT_PWR_FAULT',
                    16: 'HEAT_EVENT_PTC_SC',
                    17: 'HEAT_EVENT_MOS_SC',
                    18: 'HEAT_EVENT_PTC_TEMP_FAULT',
                    19: 'HEAT_EVENT_PTC_TEMP_SOT',
                },
            },
            bpSysState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Syste state',
                role: 'info',
                bpSysState: {
                    0: 'PRE_POWER_ON_STATE',
                    1: 'CFM_POWER_ON_STATE',
                    2: 'NORMAL_STATE',
                    3: 'POWER_OFF_STATE',
                    4: 'SLEEP_STATE',
                },
            },
            bpDsrc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bpDsrc',
                role: 'info',
                bpDsrc: { 0: 'OK?', 1: '1?', 2: '2?' },
            },
        },
        string: {
            bpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery serial number',
                role: 'info',
            },
            moduleProductInfo: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module product info',
                role: 'info',
            },
            moduleAplSwVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module Aplication SW version',
                role: 'info',
            },
            moduleLoaderSwVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module Loader SW version',
                role: 'info',
            },
            bpHeartbeatVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Heartbeat version',
                role: 'info',
            },
            bpTimestamp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Timestamp',
                role: 'info',
            },
            bpEcloundSoc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Eclound Soc',
            },
        },
    },
    statusReportBattery2: {
        number: {
            bpPwr: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Battery power',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOC',
            },
            bpSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOH',
            },
            bpSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOP',
            },
            bpMaxCellVol: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery maximum cell voltage',
            },
            bpMinCellVol: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery miniimum cell voltage',
            },
            bpVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery Voltage',
            },
            bpAmp: {
                min: 0,
                max: 60,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Battery Current',
            },
            bpBusVol: {
                min: 0,
                max: 900,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage',
            },
            bpCycles: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'Battery cycles',
            },
            bpHvMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'High voltage Mos temperature',
            },
            bpLvMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Low voltage Mos temparature',
            },
            bpPtcTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'PTC temperature',
            },
            bpHtsTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Hts temperature',
            },
            bpBusNegTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Bus neg. temperature',
            },
            bpBusPosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Bus pos. temperature',
            },
            bpEnvTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Env. temperature',
            },
            bpAccuChgCap: {
                min: 0,
                max: 7500000,
                unit_of_measurement: 'mAh',
                mult: 0.01,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Accu charge capacity',
            },
            bpAccuDsgCap: {
                min: 0,
                max: 7500000,
                unit_of_measurement: 'mAh',
                mult: 0.01,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Accu discharge capacity',
            },
            bpDesignCap: {
                min: 0,
                max: 110000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Design cpapcity',
            },
            bpFullCap: {
                min: 0,
                max: 110000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Full capacity',
            },
            bpMaxCellTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Battery maximum cell temperature',
            },
            bpMinCellTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Battery minimum cell temperature',
            },
            bpMaxMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Maximum Mos temperature',
            },
            bpMinMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Minimum Mos temperature',
            },
            bpRealSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Real SOC',
            },
            bpRealSoh: {
                min: 0,
                max: 110,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'REAL SOH',
            },
            bpDownLimitSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Discharge limit SOC',
            },
            bpUpLimitSoc: {
                min: 60,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Charge limit SOC',
            },
            bpChgSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'ChgSop',
            },
            bpDsgSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'DsgSop',
            },
            bpRemainWatth: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Remain energy',
            },
            bpTargetSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Target SOC',
            },
            bpDiffSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Diff. SOC',
            },
            bpMaxSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Maximum SOC',
            },
            bpMinSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Minimum SOC',
            },
            bpLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Limit SOC',
            },
            bpCalendarSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Calendar SOH',
            },
            bpCycleSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Cycle SOH',
            },
            bpAccuChgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Accu Charged energy',
            },
            bpAccuDsgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Accu Discharged energy',
            },
            bpPtcTemp2: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'PTC temperature 2',
            },
        },
        array: {
            bpTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Battery tremperatures',
            },
            bpCellVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                mult: 0.001,
                name: 'Battery Cell voltages',
            },
        },
        diagnostic: {
            bpRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Baattery Run Status',
                role: 'info',
                bpRunSta: { 0: 'RUNSTA_STANDBY', 1: 'RUNSTA_RUN', 2: 'RUNSTA_STOP' },
            },
            bpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery Error Code',
                role: 'info',
                bpErrCode: { 0: 'OK?' },
            },
            bpBalanceState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Balance state',
                role: 'info',
                bpBalanceState: { 0: 'OK?' },
            },
            bpBmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS fault',
                role: 'info',
                bpBmsFault: { 0: 'OK?' },
            },
            bpGlobalProtect: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Global Protect',
                role: 'info',
                bpGlobalProtect: { 0: 'OK?' },
            },
            bpActiveCalReqStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Active Cal. request status',
                role: 'info',
                bpActiveCalReqStat: { 0: 'OK?' },
            },
            bpActiveCalRunStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'active Cal. run status',
                role: 'info',
                bpActiveCalRunStat: { 0: 'OK?' },
            },
            moduleProgramSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module program start',
                role: 'info',
                moduleProgramSta: { 0: 'OK?' },
            },
            bmsRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Running status bms',
                role: 'info',
                bmsRunSta: {
                    0: 'PB_BMS_STATE_SHUTDOWN',
                    1: 'PB_BMS_STATE_NORMAL',
                    2: 'PB_BMS_STATE_CHARGEABLE',
                    3: 'PB_BMS_STATE_DISCHARGEABLE',
                    4: 'PB_BMS_STATE_FAULT',
                },
            },
            bmsChgDsgSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charge/Discharge status',
                role: 'info',
                bmsChgDsgSta: { 0: 'PB_STANDBY_STATE ', 1: 'PB_DSG_STATE', 2: 'PB_CHG_STATE' },
            },
            dabModSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'dabModSta',
                role: 'info',
                dabModSta: { 0: 'PB_MOD_STA_NORMAL', 1: 'PB_MOD_STA_WARNNING', 3: 'PB_MOD_STA_FAULT' },
            },
            bpAcRechargeFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'AC recharge flag',
                role: 'info',
                bpAcRechargeFlag: { 0: 'no AC recharge', 1: 'AC recharge' },
            },
            bpPtcHeatFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PTC heat flag',
                role: 'info',
                bpPtcHeatFlag: { 0: 'OK?' },
            },
            bpPtcExitEvent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PTC Exit event',
                role: 'info',
                bpPtcExitEvent: {
                    0: 'PB_PTC_OT_STATE',
                    1: 'HEAT_EVENT_TEMP_OK',
                    2: 'HEAT_EVENT_ABNORMAL',
                    3: 'HEAT_EVENT_TEMP_DIFF',
                    4: 'HEAT_EVENT_BMS_FAULT',
                    5: 'HEAT_EVENT_OVERTIME',
                    6: 'HEAT_EVENT_CHG_DISABLE',
                    7: 'HEAT_EVENT_POWER_LOW',
                    8: 'HEAT_EVENT_AB_DSG',
                    9: 'HEAT_EVENT_DSG_SOC_LOW',
                    10: 'HEAT_EVENT_DSG_VOL_LOW',
                    11: 'HEAT_EVENT_DSG_DISABLE',
                    12: 'HEAT_EVENT_AFE_FAULT',
                    13: 'HEAT_EVENT_FTOP_FAULT',
                    14: 'HEAT_EVENT_FVOP_FAULT',
                    15: 'HEAT_EVENT_PWR_FAULT',
                    16: 'HEAT_EVENT_PTC_SC',
                    17: 'HEAT_EVENT_MOS_SC',
                    18: 'HEAT_EVENT_PTC_TEMP_FAULT',
                    19: 'HEAT_EVENT_PTC_TEMP_SOT',
                },
            },
            bpSysState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Syste state',
                role: 'info',
                bpSysState: {
                    0: 'PRE_POWER_ON_STATE',
                    1: 'CFM_POWER_ON_STATE',
                    2: 'NORMAL_STATE',
                    3: 'POWER_OFF_STATE',
                    4: 'SLEEP_STATE',
                },
            },
            bpDsrc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bpDsrc',
                role: 'info',
                bpDsrc: { 0: 'OK?', 1: '1?', 2: '2?' },
            },
        },
        string: {
            bpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery serial number',
                role: 'info',
            },
            moduleProductInfo: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module product info',
                role: 'info',
            },
            moduleAplSwVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module Aplication SW version',
                role: 'info',
            },
            moduleLoaderSwVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module Loader SW version',
                role: 'info',
            },
            bpHeartbeatVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Heartbeat version',
                role: 'info',
            },
            bpTimestamp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Timestamp',
                role: 'info',
            },
            bpEcloundSoc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Eclound Soc',
            },
        },
    },
    statusReportBattery3: {
        number: {
            bpPwr: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Battery power',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOC',
            },
            bpSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOH',
            },
            bpSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOP',
            },
            bpMaxCellVol: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery maximum cell voltage',
            },
            bpMinCellVol: {
                min: 0,
                max: 15,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery miniimum cell voltage',
            },
            bpVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Battery Voltage',
            },
            bpAmp: {
                min: 0,
                max: 60,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Battery Current',
            },
            bpBusVol: {
                min: 0,
                max: 900,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage',
            },
            bpCycles: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'Battery cycles',
            },
            bpHvMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'High voltage Mos temperature',
            },
            bpLvMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Low voltage Mos temparature',
            },
            bpPtcTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'PTC temperature',
            },
            bpHtsTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Hts temperature',
            },
            bpBusNegTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Bus neg. temperature',
            },
            bpBusPosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Bus pos. temperature',
            },
            bpEnvTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Env. temperature',
            },
            bpAccuChgCap: {
                min: 0,
                max: 7500000,
                unit_of_measurement: 'mAh',
                mult: 0.01,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Accu charge capacity',
            },
            bpAccuDsgCap: {
                min: 0,
                max: 7500000,
                unit_of_measurement: 'mAh',
                mult: 0.01,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Accu discharge capacity',
            },
            bpDesignCap: {
                min: 0,
                max: 110000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Design cpapcity',
            },
            bpFullCap: {
                min: 0,
                max: 110000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Full capacity',
            },
            bpMaxCellTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Battery maximum cell temperature',
            },
            bpMinCellTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Battery minimum cell temperature',
            },
            bpMaxMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Maximum Mos temperature',
            },
            bpMinMosTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Minimum Mos temperature',
            },
            bpRealSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Real SOC',
            },
            bpRealSoh: {
                min: 0,
                max: 110,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'REAL SOH',
            },
            bpDownLimitSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Discharge limit SOC',
            },
            bpUpLimitSoc: {
                min: 60,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Charge limit SOC',
            },
            bpChgSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'ChgSop',
            },
            bpDsgSop: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'DsgSop',
            },
            bpRemainWatth: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Remain energy',
            },
            bpTargetSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Target SOC',
            },
            bpDiffSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Diff. SOC',
            },
            bpMaxSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Maximum SOC',
            },
            bpMinSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Minimum SOC',
            },
            bpLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Limit SOC',
            },
            bpCalendarSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Calendar SOH',
            },
            bpCycleSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Cycle SOH',
            },
            bpAccuChgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Accu Charged energy',
            },
            bpAccuDsgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'Accu Discharged energy',
            },
            bpPtcTemp2: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'PTC temperature 2',
            },
        },
        array: {
            bpTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Battery tremperatures',
            },
            bpCellVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                mult: 0.001,
                name: 'Battery Cell voltages',
            },
        },
        diagnostic: {
            bpRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Baattery Run Status',
                role: 'info',
                bpRunSta: { 0: 'RUNSTA_STANDBY', 1: 'RUNSTA_RUN', 2: 'RUNSTA_STOP' },
            },
            bpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery Error Code',
                role: 'info',
                bpErrCode: { 0: 'OK?' },
            },
            bpBalanceState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Balance state',
                role: 'info',
                bpBalanceState: { 0: 'OK?' },
            },
            bpBmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'BMS fault',
                role: 'info',
                bpBmsFault: { 0: 'OK?' },
            },
            bpGlobalProtect: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Global Protect',
                role: 'info',
                bpGlobalProtect: { 0: 'OK?' },
            },
            bpActiveCalReqStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Active Cal. request status',
                role: 'info',
                bpActiveCalReqStat: { 0: 'OK?' },
            },
            bpActiveCalRunStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'active Cal. run status',
                role: 'info',
                bpActiveCalRunStat: { 0: 'OK?' },
            },
            moduleProgramSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module program start',
                role: 'info',
                moduleProgramSta: { 0: 'OK?' },
            },
            bmsRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Running status bms',
                role: 'info',
                bmsRunSta: {
                    0: 'PB_BMS_STATE_SHUTDOWN',
                    1: 'PB_BMS_STATE_NORMAL',
                    2: 'PB_BMS_STATE_CHARGEABLE',
                    3: 'PB_BMS_STATE_DISCHARGEABLE',
                    4: 'PB_BMS_STATE_FAULT',
                },
            },
            bmsChgDsgSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charge/Discharge status',
                role: 'info',
                bmsChgDsgSta: { 0: 'PB_STANDBY_STATE ', 1: 'PB_DSG_STATE', 2: 'PB_CHG_STATE' },
            },
            dabModSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'dabModSta',
                role: 'info',
                dabModSta: { 0: 'PB_MOD_STA_NORMAL', 1: 'PB_MOD_STA_WARNNING', 3: 'PB_MOD_STA_FAULT' },
            },
            bpAcRechargeFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'AC recharge flag',
                role: 'info',
                bpAcRechargeFlag: { 0: 'no AC recharge', 1: 'AC recharge' },
            },
            bpPtcHeatFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PTC heat flag',
                role: 'info',
                bpPtcHeatFlag: { 0: 'OK?' },
            },
            bpPtcExitEvent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'PTC Exit event',
                role: 'info',
                bpPtcExitEvent: {
                    0: 'PB_PTC_OT_STATE',
                    1: 'HEAT_EVENT_TEMP_OK',
                    2: 'HEAT_EVENT_ABNORMAL',
                    3: 'HEAT_EVENT_TEMP_DIFF',
                    4: 'HEAT_EVENT_BMS_FAULT',
                    5: 'HEAT_EVENT_OVERTIME',
                    6: 'HEAT_EVENT_CHG_DISABLE',
                    7: 'HEAT_EVENT_POWER_LOW',
                    8: 'HEAT_EVENT_AB_DSG',
                    9: 'HEAT_EVENT_DSG_SOC_LOW',
                    10: 'HEAT_EVENT_DSG_VOL_LOW',
                    11: 'HEAT_EVENT_DSG_DISABLE',
                    12: 'HEAT_EVENT_AFE_FAULT',
                    13: 'HEAT_EVENT_FTOP_FAULT',
                    14: 'HEAT_EVENT_FVOP_FAULT',
                    15: 'HEAT_EVENT_PWR_FAULT',
                    16: 'HEAT_EVENT_PTC_SC',
                    17: 'HEAT_EVENT_MOS_SC',
                    18: 'HEAT_EVENT_PTC_TEMP_FAULT',
                    19: 'HEAT_EVENT_PTC_TEMP_SOT',
                },
            },
            bpSysState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Syste state',
                role: 'info',
                bpSysState: {
                    0: 'PRE_POWER_ON_STATE',
                    1: 'CFM_POWER_ON_STATE',
                    2: 'NORMAL_STATE',
                    3: 'POWER_OFF_STATE',
                    4: 'SLEEP_STATE',
                },
            },
            bpDsrc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bpDsrc',
                role: 'info',
                bpDsrc: { 0: 'OK?', 1: '1?', 2: '2?' },
            },
        },
        string: {
            bpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Battery serial number',
                role: 'info',
            },
            moduleProductInfo: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module product info',
                role: 'info',
            },
            moduleAplSwVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module Aplication SW version',
                role: 'info',
            },
            moduleLoaderSwVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Module Loader SW version',
                role: 'info',
            },
            bpHeartbeatVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Heartbeat version',
                role: 'info',
            },
            bpTimestamp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Timestamp',
                role: 'info',
            },
            bpEcloundSoc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Eclound Soc',
            },
        },
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
                name: 'System load',
            },
            sysGridPwr: {
                min: 0,
                max: 15000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Grid power',
            },
            mpptPwr: {
                min: 0,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Solar power',
            },
            bpPwr: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Battery power',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOC',
            },
        },
    },
    ParallelEnergyStreamReport: {
        number: {
            sysLoadPwr: {
                min: 0,
                max: 15000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'System load',
            },
            sysGridPwr: {
                min: -15000,
                max: 15000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Grid power',
            },
            mpptPwr: {
                min: 0,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Solar power',
            },
            bpPwr: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Battery power',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Battery SOC',
            },
            powerPv1: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Pv1 power',
            },
            powerPv2: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Pv2 power',
            },
            ocean_sysLoadPwr: {
                min: 0,
                max: 15000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ocean System load',
            },
            ocean_sysGridPwr: {
                min: 0,
                max: 15000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ocean Grid power',
            },
            ocean_mpptPwr: {
                min: 0,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ocean Solar power',
            },
            ocean_bpPwr: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ocean Battery power',
            },
            ocean_bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'ocean Battery SOC',
            },
            ocean_powerPv1: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ocean Pv1 power',
            },
            ocean_powerPv2: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ocean Pv2 power',
            },
            system1_sysLoadPwr: {
                min: 0,
                max: 15000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'system1 System load',
            },
            system1_sysGridPwr: {
                min: 0,
                max: 15000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'system1 Grid power',
            },
            system1_mpptPwr: {
                min: 0,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'system1 Solar power',
            },
            system1_bpPwr: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'system1 Battery power',
            },
            system1_bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'system1 Battery SOC',
            },
            system1_powerPv1: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'system1 Pv1 power',
            },
            system1_powerPv2: {
                min: 0,
                max: 5200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'system1 Pv2 power',
            },
        },
        string: {
            ocean_devSn: { entity_type: 'text', entity_category: 'diagnostic', name: 'ocean sn', role: 'info' },
            system1_devSn: { entity_type: 'text', entity_category: 'diagnostic', name: 'system1 sn', role: 'info' },
        },
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
                name: 'Phase A voltage',
            },
            pcsAPhase_amp: {
                min: 0,
                max: 20,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Phase A current',
            },
            pcsAPhase_actPwr: {
                min: -2000,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Phase A active power',
            },
            pcsAPhase_reactPwr: {
                min: -1000,
                max: 5000,
                unit_of_measurement: 'var',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'reactive_power',
                role: 'value',
                name: 'Phase A reactive power',
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
                subrole: 'power',
            },
            pcsBPhase_volt: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Phase B voltage',
            },
            pcsBPhase_amp: {
                min: 0,
                max: 20,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Phase B current',
            },
            pcsBPhase_actPwr: {
                min: -2000,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Phase B active power',
            },
            pcsBPhase_reactPwr: {
                min: -1000,
                max: 15000,
                unit_of_measurement: 'var',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'reactive_power',
                role: 'value',
                name: 'Phase B reactive power',
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
                subrole: 'power',
            },
            pcsCPhase_volt: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Phase C voltage',
            },
            pcsCPhase_amp: {
                min: 0,
                max: 20,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Phase C current',
            },
            pcsCPhase_actPwr: {
                min: -2000,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Phase C active power',
            },
            pcsCPhase_reactPwr: {
                min: -1000,
                max: 5000,
                unit_of_measurement: 'var',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'reactive_power',
                role: 'value',
                name: 'Phase C reactive power',
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
                subrole: 'power',
            },
            mpptHeartBeat_mpptPv_vol0: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Solar 1 voltage',
            },
            mpptHeartBeat_mpptPv_vol1: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Solar 2 voltage',
            },
            mpptHeartBeat_mpptPv_amp0: {
                min: 0,
                max: 21,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Solar 1 current',
            },
            mpptHeartBeat_mpptPv_amp1: {
                min: 0,
                max: 21,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'Solar 2 current',
            },
            mpptHeartBeat_mpptPv_pwr0: {
                min: 0,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Solar 1 power',
            },
            mpptHeartBeat_mpptPv_pwr1: {
                min: 0,
                max: 5000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Solar 2 power',
            },
            mpptHeartBeat_mpptInsResist: {
                min: 0,
                max: 1000,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'MPPT insulation resistance',
            },
            pcsLoadInfo_vol0: {
                min: 0,
                max: 410,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'load voltage 0',
            },
            pcsLoadInfo_amp0: {
                min: 0,
                max: 35,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'load current 0',
            },
            pcsLoadInfo_freq0: {
                min: 0,
                max: 65,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'load frequency 0',
            },
            pcsLoadInfo_pwr0: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'load power 0',
            },
            pcsLoadInfo_vol1: {
                min: 0,
                max: 410,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'load voltage 1',
            },
            pcsLoadInfo_amp1: {
                min: 0,
                max: 35,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'load current 1',
            },
            pcsLoadInfo_freq1: {
                min: 0,
                max: 65,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'load frequency 1',
            },
            pcsLoadInfo_pwr1: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'load power 1',
            },
            pcsLoadInfo_vol2: {
                min: 0,
                max: 410,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'load voltage 2',
            },
            pcsLoadInfo_amp2: {
                min: 0,
                max: 35,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'load current 2',
            },
            pcsLoadInfo_freq2: {
                min: 0,
                max: 65,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'load frequency 2',
            },
            pcsLoadInfo_pwr2: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'load power 2',
            },
            bpRemainWatth: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'bp remain watth',
                subrole: 'number',
            },
            bpDsgTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'bp dsg time',
                subrole: 'number',
            },
            pcsActPwr: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pcs act pwr',
            },
            pcsAcFreq: {
                min: 0,
                max: 65,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'pcs ac freq',
            },
            pcsBusVolt: {
                min: 0,
                max: 900,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'pcs bus volt',
            },
            pcsLeakAmp: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'mA',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'pcs leak amp',
            },
            pcsBpPower: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pcs bp power',
            },
            pcsBpPowerChgLimit: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'pcs bp power chg limit',
            },
            pcsPfcCurReal: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'pcs pfc cur real',
            },
            pcsPfcCurRef: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'pcs pfc cur ref',
            },
            pcsMeterPower: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pcs meter power',
            },
            pcsAverageVoltage: {
                min: 0,
                max: 900,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'pcs average voltage',
            },
            pcsVgridThd: {
                min: 0,
                max: 60,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'pcs vgrid thd',
                subrole: 'number',
            },
            emsBusVolt: {
                min: 0,
                max: 900,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'ems bus volt',
            },
            emsBpPower: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ems bp power',
            },
            emsBpChg: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'ems bp chg',
            },
            emsBpDsg: {
                min: 0,
                max: 60,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'ems bp dsg',
            },
            emsSelfUsedCnt: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'ems self used cnt',
                subrole: 'number',
            },
            emsAcMakeupMinSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'ems ac makeup min soc',
            },
            emsAcMakeupCnt: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'ems ac makeup cnt',
                subrole: 'number',
            },
            emsNtcTempMax: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'ems ntc temp max',
            },
            emsBusVoltRipple: {
                min: 0,
                max: 60,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'ems bus volt ripple',
                subrole: 'number',
            },
            emsPvInvPwr: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ems pv inv pwr',
            },
            dcdcBpVol: {
                min: 0,
                max: 900,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'dcdc bp vol',
            },
            dcdcInductanceCurr: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'dcdc inductance curr',
            },
            innerTemperature: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'inner temperature',
            },
            invRatedPower: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'inv rated power',
            },
            pcsBackupPwr: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pcs backup pwr',
            },
        },
        diagnostic: {
            mpptHeartBeat_mpptPv_lightSta0: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Solar 1 state',
                mpptHeartBeat_mpptPv_lightSta0: { 0: 'disabled?', 1: 'OK?' },
            },
            mpptHeartBeat_mpptPv_lightSta1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Solar 2 state',
                mpptHeartBeat_mpptPv_lightSta1: { 0: 'disabled?', 1: 'OK?' },
            },
            pcsCommInterfaceState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs comm interface state',
                role: 'info',
                pcsCommInterfaceState: { 0: 'OK?' },
            },
            emsMpptSelfcheckState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems mppt selfcheck state',
                role: 'info',
                emsMpptSelfcheckState: { 0: 'OK?' },
            },
            emsMpptStartupState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems mppt startup state',
                role: 'info',
                emsMpptStartupState: { 0: 'OK?' },
            },
            emsBpSelfcheckState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems bp selfcheck state',
                role: 'info',
                emsBpSelfcheckState: { 0: 'OK?' },
            },
            emsBpStartupState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems bp startup state',
                role: 'info',
                emsBpStartupState: { 0: 'OK?' },
            },
            emsPcsSelfcheckState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems pcs selfcheck state',
                role: 'info',
                emsPcsSelfcheckState: { 0: 'OK?' },
            },
            emsPcsStartupState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems pcs startup state',
                role: 'info',
                emsPcsStartupState: { 0: 'OK?' },
            },
            emsStartFsmState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems start fsm state',
                role: 'info',
                emsStartFsmState: { 0: 'OK?' },
            },
            emsMpptRunState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems mppt run state',
                role: 'info',
                emsMpptRunState: { 0: 'OK?' },
            },
            emsMpptModStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems mppt mod stat',
                role: 'info',
                emsMpptModStat: { 0: 'OK?' },
            },
            emsLpState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems lp state',
                role: 'info',
                emsLpState: { 0: 'OK?' },
            },
            emsMpptHbState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems mppt hb state',
                role: 'info',
                emsMpptHbState: { 0: 'OK?' },
            },
            powerLimitMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'power limit mode',
                role: 'info',
                powerLimitMode: { 0: 'off?', 1: 'on?' },
            },
            emsWorkMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems work mode',
                role: 'info',
                emsWorkMode: {
                    0: 'SELFUSE',
                    1: 'TOU',
                    2: 'BACKUP',
                    3: 'DBG',
                    4: 'AC_MAKEUP',
                    5: 'DRM_MODE',
                    6: 'REMOTE_SCHED',
                    7: 'STANDBY_MODE',
                    8: 'SOC_CALIB',
                    9: 'TIMER_MODE',
                },
            },
        },
        string: {
            rateCtrlSwtich: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'rate ctrl swtich',
                role: 'info',
            },
            sysRateCtrlTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys rate ctrl time',
                role: 'info',
            },
            duraTime: { entity_type: 'text', entity_category: 'diagnostic', name: 'dura time', role: 'info' },
            pcsDci: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs dci', role: 'info' },
            pcsDcv: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs dcv', role: 'info' },
            pcsVbusRef: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs vbus ref', role: 'info' },
            pcsActivePowerRef: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power ref',
                role: 'info',
            },
            pcsActivePowerLimitUp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power limit up',
                role: 'info',
            },
            pcsActivePowerLimitDn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power limit dn',
                role: 'info',
            },
            pcsRelayStateShow: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs relay state show',
                role: 'info',
            },
            pcsGridSafetyFuncRecord: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs grid safety func record',
                role: 'info',
            },
            pcsGridSafetyStateRecord: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs grid safety state record',
                role: 'info',
            },
            pcsGridInvErrorRms: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs grid inv error rms',
                role: 'info',
            },
            pcsReactivePowerRef: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reactive power ref',
                role: 'info',
            },
            pcsInterruptOccupancyRate: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs interrupt occupancy rate',
                role: 'info',
            },
            emsActiveOffGridCmd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems active off grid cmd',
                role: 'info',
            },
            emsBpAliveNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems bp alive num',
                role: 'info',
            },
            emsBpChgRequest: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems bp chg request',
                role: 'info',
            },
            emsAcMakeupTriggleSoc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems ac makeup triggle soc',
                role: 'info',
            },
            emsAcMakeupExitSoc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems ac makeup exit soc',
                role: 'info',
            },
            emsStopCmd: { entity_type: 'text', entity_category: 'diagnostic', name: 'ems stop cmd', role: 'info' },
            emsSysCfg: { entity_type: 'text', entity_category: 'diagnostic', name: 'ems sys cfg', role: 'info' },
            emsLpType: { entity_type: 'text', entity_category: 'diagnostic', name: 'ems lp type', role: 'info' },
            emsLpMpptCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems lp mppt cnt',
                role: 'info',
            },
            emsLpBpCnt: { entity_type: 'text', entity_category: 'diagnostic', name: 'ems lp bp cnt', role: 'info' },
            emsLpStateFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems lp state flag',
                role: 'info',
            },
            emsSocCalibState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems soc calib state',
                role: 'info',
            },
            emsSocCalibRequest: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems soc calib request',
                role: 'info',
            },
            emsBusVoltErrSlidFilter: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems bus volt err slid filter',
                role: 'info',
            },
            mpptBusVolRef: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mppt bus vol ref',
                role: 'info',
            },
            dcdcBusVolRef: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'dcdc bus vol ref',
                role: 'info',
            },
            dcdcStateRecord: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'dcdc state record',
                role: 'info',
            },
            meterHeartBeat_meterType0: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter type #0',
                role: 'info',
            },
            meterHeartBeat_meterAddr0: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter addr #0',
                role: 'info',
            },
            meterHeartBeat_meterData0: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter data #0',
                role: 'info',
            },
            meterHeartBeat_meterType1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter type #1',
                role: 'info',
            },
            meterHeartBeat_meterAddr1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter addr #1',
                role: 'info',
            },
            meterHeartBeat_meterData1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter data #1',
                role: 'info',
            },
        },
        array: {
            mpptHeartBeat_mpptTempVal: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'MPPT temperature values',
            },
        },
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
                name: 'Battery SOC',
            },
            bpTotalChgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                role: 'value',
                name: 'Battery total energy charged',
            },
            bpTotalDsgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                role: 'value',
                name: 'Battery total energy discharged',
            },
            sysBatChgUpLimit: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'sys bat chg up limit',
            },
            sysBatDsgDownLimit: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'sys bat dsg down limit',
            },
            sysBatBackupRatio: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'sys bat backup ratio',
            },
            emsFeedRatio: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'ems feed ratio',
                subrole: 'number',
            },
            emsFeedPwr: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ems feed pwr',
            },
            chgDsgPwr: {
                min: 0,
                max: 7000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'chg dsg pwr',
            },
        },
        diagnostic: {
            sysWorkSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys work sta',
                role: 'info',
                sysWorkSta: { 0: 'OK?' },
            },
            sysGridSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys grid sta',
                role: 'info',
                sysGridSta: { 0: 'OK?' },
            },
            emsWorkMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems work mode',
                role: 'info',
                emsWorkMode: {
                    0: 'SELFUSE',
                    1: 'TOU',
                    2: 'BACKUP',
                    3: 'DBG',
                    4: 'AC_MAKEUP',
                    5: 'DRM_MODE',
                    6: 'REMOTE_SCHED',
                    7: 'STANDBY_MODE',
                    8: 'SOC_CALIB',
                    9: 'TIMER_MODE',
                },
            },
            bpChgDsgSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp chg dsg sta',
                role: 'info',
                bpChgDsgSta: { 0: 'OK?' },
            },
            emsFeedMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems feed mode',
                role: 'info',
                emsFeedMode: { 0: 'off?', 1: 'on?' },
            },
            pcsRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs run sta',
                role: 'info',
                pcsRunSta: { 0: 'STANDBY', 1: 'RUN', 2: 'STOP' },
            },
            emsSgRunStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems sg run stat',
                role: 'info',
                emsSgRunStat: { 0: 'OK?' },
            },
            iot_4gSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'iot_4g sta',
                role: 'info',
                iot_4gSta: { 0: 'OK?' },
            },
            sysHeatStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys heat stat',
                role: 'info',
                sysHeatStat: { 0: 'OK?' },
            },
            batRealyStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bat realy status',
                role: 'info',
                batRealyStatus: { 0: 'OK?' },
            },
            wifiStaStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wifi sta stat',
                role: 'info',
                wifiStaStat: { 0: 'OK?' },
            },
            chgDsgMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'chg dsg mode',
                role: 'info',
                chgDsgMode: { 0: 'off?', 1: 'on?' },
            },
        },
        string: {
            emsBackupEvent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems backup event',
                role: 'info',
            },
            emsKeepSoc: { entity_type: 'text', entity_category: 'diagnostic', name: 'ems keep soc', role: 'info' },
            emsSysSelfCheckStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems sys self check stat',
                role: 'info',
            },
            bpOnlineSum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp online sum',
                role: 'info',
            },
            sysOnOffMachineStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys on off machine stat',
                role: 'info',
            },
            sysMeterCfg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys meter cfg',
                role: 'info',
            },
            sysTypeCfg: { entity_type: 'text', entity_category: 'diagnostic', name: 'sys type cfg', role: 'info' },
            pcsAcErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs ac err code',
                role: 'info',
            },
            pcsDcErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs dc err code',
                role: 'info',
            },
            pcsOverVol1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol1',
                role: 'info',
            },
            pcsOverVol2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol2',
                role: 'info',
            },
            pcsOverVol3: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol3',
                role: 'info',
            },
            pcsOverVolTime1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol time1',
                role: 'info',
            },
            pcsOverVolTime2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol time2',
                role: 'info',
            },
            pcsOverVolTime3: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol time3',
                role: 'info',
            },
            pcsLowVol1: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs low vol1', role: 'info' },
            pcsLowVol2: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs low vol2', role: 'info' },
            pcsLowVol3: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs low vol3', role: 'info' },
            pcsLowVolTime1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol time1',
                role: 'info',
            },
            pcsLowVolTime2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol time2',
                role: 'info',
            },
            pcsLowVolTime3: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol time3',
                role: 'info',
            },
            pcsOverVolRecover: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol recover',
                role: 'info',
            },
            pcsLowVolRecover: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol recover',
                role: 'info',
            },
            pcsVolRecoverTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs vol recover time',
                role: 'info',
            },
            pcs_10minOverVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs_10min over vol',
                role: 'info',
            },
            pcs_10minOverVolTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs_10min over vol time',
                role: 'info',
            },
            pcsOverFreq1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq1',
                role: 'info',
            },
            pcsOverFreq2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq2',
                role: 'info',
            },
            pcsOverFreqTime1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq time1',
                role: 'info',
            },
            pcsOverFreqTime2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq time2',
                role: 'info',
            },
            pcsLowFreq1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low freq1',
                role: 'info',
            },
            pcsLowFreq2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low freq2',
                role: 'info',
            },
            pcsLowFreqTime1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low freq time1',
                role: 'info',
            },
            pcsLowFreqTime2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low freq time2',
                role: 'info',
            },
            pcsOverFreqRecover: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over req recover',
                role: 'info',
            },
            pcsLowFreqRecover: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low freq recover',
                role: 'info',
            },
            pcsFreqRecoverTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs freq recover time',
                role: 'info',
            },
            pcsHvrtLvrtSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs hvrt lvrt switch',
                role: 'info',
            },
            pcsOverVolRideThroughStart1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol ride through start1',
                role: 'info',
            },
            pcsOverVolRideThroughStart2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol ride through start2',
                role: 'info',
            },
            pcsOverVolRideThroughProtectTime1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol ride through protect time1',
                role: 'info',
            },
            pcsOverVolRideThroughProtectTime2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol ride through protect time2',
                role: 'info',
            },
            pcsLowVolRideThroughStart1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol ride through start1',
                role: 'info',
            },
            pcsLowVolRideThroughStart2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol ride through start2',
                role: 'info',
            },
            pcsLowVolRideThroughStart3: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol ride through start3',
                role: 'info',
            },
            pcsLowVolRideThroughProtectTime1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol ride through protect time1',
                role: 'info',
            },
            pcsLowVolRideThroughProtectTime2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol ride through protect time2',
                role: 'info',
            },
            pcsLowVolRideThroughProtectTime3: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol ride through protect time3',
                role: 'info',
            },
            pcsHighVolRideThroughRecover: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs high vol ride through recover',
                role: 'info',
            },
            pcsLowVolRideThroughRecover: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol ride through recover',
                role: 'info',
            },
            pcsIslandDetectSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs island detect switch',
                role: 'info',
            },
            pcsActivePowerDeratingSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power derating switch',
                role: 'info',
            },
            pcsActivePowerDeratingPercent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power derating percent',
                role: 'info',
            },
            pcsActivePowerGradient: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power gradient',
                role: 'info',
            },
            pcsActivePowerSoftstartSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power softstart switch',
                role: 'info',
            },
            pcsActivePowerSoftstartTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power softstart time',
                role: 'info',
            },
            pcsOverFreqDeratingSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating switch',
                role: 'info',
            },
            pcsOverFreqDeratingPowerBased: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating power based',
                role: 'info',
            },
            pcsOverFreqDeratingStart: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating start',
                role: 'info',
            },
            pcsOverFreqDeratingEnd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating end',
                role: 'info',
            },
            pcsOverFreqDeratingSlope: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating slope',
                role: 'info',
            },
            pcsOverFreqDeratingRecoverSlope: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating recover slope',
                role: 'info',
            },
            pcsOverFreqDeratingFrozeSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating froze switch',
                role: 'info',
            },
            pcsOverFreqDeratingCutoffPower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating cutoff power',
                role: 'info',
            },
            pcsUnderFreqIncrementSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment switch',
                role: 'info',
            },
            pcsUnderFreqIncrementStart: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment start',
                role: 'info',
            },
            pcsUnderFreqIncrementEnd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment end',
                role: 'info',
            },
            pcsUnderFreqIncrementSlope: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment slope',
                role: 'info',
            },
            pcsUnderFreqIncrementRecoverSlope: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment recover slope',
                role: 'info',
            },
            pcsUnderFreqIncrementFrozeSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment froze switch',
                role: 'info',
            },
            pcsAntiBackFlowSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs anti back flow switch',
                role: 'info',
            },
            pcsOverVolDeratingSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating switch',
                role: 'info',
            },
            pcsOverVolDeratingStart: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating start',
                role: 'info',
            },
            pcsOverVolDeratingEnd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating end',
                role: 'info',
            },
            pcsOverVolDeratingStartingPower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating starting power',
                role: 'info',
            },
            pcsOverVolDeratingEndPower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating end power',
                role: 'info',
            },
            pcsOverVolDeratingTimeConst: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating time const',
                role: 'info',
            },
            pcsReactPwrModeSelect: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs react pwr mode select',
                role: 'info',
            },
            pcsReactPwrCompensation: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs react pwr compensation',
                role: 'info',
            },
            pcsPfValue: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs pf value', role: 'info' },
            pcsReactPwrPercent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs react pwr percent',
                role: 'info',
            },
            pcsQuV1: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs qu v1', role: 'info' },
            pcsQuV2: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs qu v2', role: 'info' },
            pcsQuV3: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs qu v3', role: 'info' },
            pcsQuV4: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs qu v4', role: 'info' },
            pcsQuQ1: { entity_type: 'text', entity_category: 'diagnostic', name: 'ppcs qu q1', role: 'info' },
            pcsQuQ2: { entity_type: 'text', entity_category: 'diagnostic', name: 'ppcs qu q2', role: 'info' },
            pcsQuQ3: { entity_type: 'text', entity_category: 'diagnostic', name: 'ppcs qu q3', role: 'info' },
            pcsQuQ4: { entity_type: 'text', entity_category: 'diagnostic', name: 'ppcs qu q4', role: 'info' },
            pcsQuTimeConst: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs qu time const',
                role: 'info',
            },
            pcsCospP1: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp p1', role: 'info' },
            pcsCospP2: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp p2', role: 'info' },
            pcsCospP3: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp p3', role: 'info' },
            pcsCospPf1: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp pf1', role: 'info' },
            pcsCospPf2: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp pf2', role: 'info' },
            pcsCospPf3: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp pf3', role: 'info' },
            pcsSafetyCountryCodeSelection: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs safety country code selection',
                role: 'info',
            },
            pcsReconnectGridDetectSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reconnect grid detect switch',
                role: 'info',
            },
            pcsOnGridWaitTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs on grid wait time',
                role: 'info',
            },
            pcsHighVolOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs high vol on grid',
                role: 'info',
            },
            pcsLowVolOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low vol on grid',
                role: 'info',
            },
            pcsHighFreqOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs high freq on grid',
                role: 'info',
            },
            pcsLowFreqOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs low freq on grid',
                role: 'info',
            },
            pcsFaultRecoverOnGridWaitTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fault recover on grid wait time',
                role: 'info',
            },
            pcsFaultRecoverHighVolOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fault recover high vol on grid',
                role: 'info',
            },
            pcsFaultRecoverLowVolOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fault recover low vol on grid',
                role: 'info',
            },
            pcsFaultRecoverHighFreqOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fault recover high freq on grid',
                role: 'info',
            },
            pcsFaultRecoverLowFreqOnGrid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fault recover low freq on grid',
                role: 'info',
            },
            pcsPowerDeratingFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs power derating flag',
                role: 'info',
            },
            pcsPowerDeratingSet: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs power derating set',
                role: 'info',
            },
            pcsSendEnd: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs send end', role: 'info' },
            rateCtrlSwtich: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'rate ctrl swtich',
                role: 'info',
            },
            sysRateCtrlTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys rate ctrl time',
                role: 'info',
            },
            duraTime: { entity_type: 'text', entity_category: 'diagnostic', name: 'dura time', role: 'info' },
            pcs_10minOverVolSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs_10min over vol switch',
                role: 'info',
            },
            pcsActivePowerSoftStartRate: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power soft start rate',
                role: 'info',
            },
            pcsActivePowerNormalRampUpRate: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs active power normal ramp up rate',
                role: 'info',
            },
            pcsOverFreqDeratingStartDelay: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating start delay',
                role: 'info',
            },
            pcsOverFreqDeratingEndDelay: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating end delay',
                role: 'info',
            },
            pcsOverFreqDeratingRecoverSlopeSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over freq derating recover slope switch',
                role: 'info',
            },
            pcsUnderFreqIncrementStartDelay: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment start delay',
                role: 'info',
            },
            pcsUnderFreqIncrementEndDelay: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment end delay',
                role: 'info',
            },
            pcsOverVolDeratingDelayTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating delay time',
                role: 'info',
            },
            pcsOngridReconnectFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs ongrid reconnect flag',
                role: 'info',
            },
            pcsQuLockinPower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs qu lockin power',
                role: 'info',
            },
            pcsQuLockoutPower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs qu lockout power',
                role: 'info',
            },
            pcsQuMinimumCosphi: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs qu minimum cosphi',
                role: 'info',
            },
            pcsFastCheck: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fast check',
                role: 'info',
            },
            pcsFunctionEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs function enable',
                role: 'info',
            },
            emsCtrlLedType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems ctrl led type',
                role: 'info',
            },
            emsCtrlLedBright: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems ctrl led bright',
                role: 'info',
            },
            pcsUnderFreqIncrementRecoverSlopeSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs under freq increment recover slope switch',
                role: 'info',
            },
            pcsOverVolDeratingDaleyTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs over vol derating daley time',
                role: 'info',
            },
            pcsCospP4: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp p4', role: 'info' },
            pcsCospPf4: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs cosp pf4', role: 'info' },
            pcsReserved1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved1',
                role: 'info',
            },
            pcsReserved2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved2',
                role: 'info',
            },
            pcsReserved3: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved3',
                role: 'info',
            },
            pcsReserved4: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved4',
                role: 'info',
            },
            pcsReserved5: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved5',
                role: 'info',
            },
            pcsReserved6: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved6',
                role: 'info',
            },
            pcsReserved7: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved7',
                role: 'info',
            },
            pcsReserved8: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved8',
                role: 'info',
            },
            pcsReserved9: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved9',
                role: 'info',
            },
            pcsReserved10: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved10',
                role: 'info',
            },
            pcsReserved11: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved11',
                role: 'info',
            },
            pcsReserved12: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved12',
                role: 'info',
            },
            pcsReserved13: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved13',
                role: 'info',
            },
            pcsReserved14: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved14',
                role: 'info',
            },
            pcsReserved15: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved15',
                role: 'info',
            },
            pcsReserved16: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs reserved16',
                role: 'info',
            },
            sysMulPeakSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys mul peak switch',
                role: 'info',
            },
            sysMulPeakTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys mul peak time',
                role: 'info',
            },
            emsSgReady: { entity_type: 'text', entity_category: 'diagnostic', name: 'ems sg ready', role: 'info' },
            emsSgReadyEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems sg ready en',
                role: 'info',
            },
            emsStopAll: { entity_type: 'text', entity_category: 'diagnostic', name: 'ems stop all', role: 'info' },
            iot_4gOn: { entity_type: 'text', entity_category: 'diagnostic', name: 'iot_4g on', role: 'info' },
            iot_4gPdp: { entity_type: 'text', entity_category: 'diagnostic', name: 'iot_4g pdp', role: 'info' },
            iot_4gErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'iot_4g err', role: 'info' },
            pcsAcWarningCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs ac warning code',
                role: 'info',
            },
            pcsRelaySelfCheckSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs relay self check sta',
                role: 'info',
            },
            pcsRunFsmState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcsRunFsmState',
                role: 'info',
            },
            mppt1FaultCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mppt1 fault code',
                role: 'info',
            },
            mppt2FaultCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mppt2 fault code',
                role: 'info',
            },
            mppt1WarningCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mppt1 warning code',
                role: 'info',
            },
            mppt2WarningCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mppt2 warning code',
                role: 'info',
            },
            bpLineOffFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp line off flag',
                role: 'info',
            },
            bpRestartFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp restart flag',
                role: 'info',
            },
            bpReverseFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp reverse flag',
                role: 'info',
            },
            batRelayCloseFailFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bat relay close fail flag',
                role: 'info',
            },
            batSoftRelayStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bat soft relay status',
                role: 'info',
            },
            pcsRelayStateShow: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcsRelayStateShow',
                role: 'info',
            },
            emsWorkState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems work state',
                role: 'info',
            },
            afciFaultCntCh1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault cnt ch1',
                role: 'info',
            },
            afciFaultValueCh1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault value ch1',
                role: 'info',
            },
            afciFaultMaxValueCh1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault max value ch1',
                role: 'info',
            },
            afciProtectValueCh1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci protect value ch1',
                role: 'info',
            },
            afciFaultFlagCh1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault flag ch1',
                role: 'info',
            },
            afciFaultCntCh2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault cnt ch2',
                role: 'info',
            },
            afciFaultValueCh2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault value ch2',
                role: 'info',
            },
            afciFaultMaxValueCh2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault max value ch2',
                role: 'info',
            },
            afciProtectValueCh2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci protect value ch2',
                role: 'info',
            },
            afciFaultFlagCh2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault flag ch2',
                role: 'info',
            },
            afciSelfTestCmdState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci self test cmd state',
                role: 'info',
            },
            afciEnableCmdState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci enable cmd state',
                role: 'info',
            },
            afciFaultClearState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci fault clear state',
                role: 'info',
            },
            afciSellfTestResult: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci sellf test result',
                role: 'info',
            },
            afciSwitchFreqCh1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci switch freq ch1',
                role: 'info',
            },
            afciSwitchFreqCh2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci switch freq ch2',
                role: 'info',
            },
            sysCalStat: { entity_type: 'text', entity_category: 'diagnostic', name: 'sys cal stat', role: 'info' },
            ethWanStat: { entity_type: 'text', entity_category: 'diagnostic', name: 'eth wan stat', role: 'info' },
            wireless_4gIccid: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wireless_4g iccid',
                role: 'info',
            },
            virtualHardEdition: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'virtual hard edition',
                role: 'info',
            },
            userRole: { entity_type: 'text', entity_category: 'diagnostic', name: 'user role', role: 'info' },
            parallelAllowState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'parallel allow state',
                role: 'info',
            },
            parallelTypeSet: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'parallel type set',
                role: 'info',
            },
            parallelType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'parallel type',
                role: 'info',
            },
            afciIsExist: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afci is exist',
                role: 'info',
            },
            afciEn: { entity_type: 'text', entity_category: 'diagnostic', name: 'afci en', role: 'info' },
            afciEnSet: { entity_type: 'text', entity_category: 'diagnostic', name: 'afci en set', role: 'info' },
            parallelTypeCur: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'parallel type cur',
                role: 'info',
            },
        },
        array: {
            evBindList: { entity_type: 'text', entity_category: 'diagnostic', name: 'ev bind list', role: 'list' },
        },
    },
    EVChargingParamReport: {
        string: {
            evSn: { entity_type: 'text', entity_category: 'diagnostic', name: 'ev sn', role: 'info' },
            onlineBits: { entity_type: 'text', entity_category: 'diagnostic', name: 'online bits', role: 'info' },
            evPlugAndPlay: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ev plug and play',
                role: 'info',
            },
            errorCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'error code', role: 'info' },
            defaultVehicleId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'default vehicle id',
                role: 'info',
            },
            chargeVehicleId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'charge vehicle id',
                role: 'info',
            },
            useGridFirst: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'use grid first',
                role: 'info',
            },
            unknown30: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown30', role: 'info' },
            unknown31: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown31', role: 'info' },
            unknown32: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown32', role: 'info' },
            unknown33: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown33', role: 'info' },
            unknown34: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown34', role: 'info' },
            unknown35: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown35', role: 'info' },
        },
        number: {
            expectChargingEnergy: {
                min: 0,
                max: 150,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'expect charging energy',
            },
            stopChargingSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'stop charging soc',
            },
            evPwr: {
                min: 0,
                max: 30000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'ev pwr',
            },
            evChargingEnergy: {
                min: 0,
                max: 150,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'ev charging energy',
            },
            orderTime: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'timestamp',
                role: 'value',
                name: 'order time',
            },
            orderStartTimestamp: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'timestamp',
                role: 'value',
                name: 'order start timestamp',
            },
            orderEndTimestamp: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'timestamp',
                role: 'value',
                name: 'order end timestamp',
            },
        },
        diagnostic: {
            chargingStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'charging status',
                role: 'info',
                chargingStatus: {
                    0: 'NONE',
                    1: 'AVAILABLE',
                    2: 'PREPARING',
                    3: 'CHARGING',
                    4: 'SUSPENDED_EVSE',
                    5: 'SUSPENDED_EV',
                    6: 'FINISHING',
                    9: 'FAULTED',
                },
            },
            workMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'work mode',
                role: 'info',
                workMode: { 0: 'off?', 1: 'on?' },
            },
            orderState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'order state',
                role: 'info',
                orderState: { 0: 'OK?' },
            },
        },
    },
    JTS1_EMS_PARAM_CHANGE_REPORT: {
        string: {
            smartCtrl: { entity_type: 'text', entity_category: 'diagnostic', name: 'smart ctrl', role: 'info' },
            energyEfficientEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'energy efficient enable',
                role: 'info',
            },
            sysZone: { entity_type: 'text', entity_category: 'diagnostic', name: 'sys zone', role: 'info' },
            sysTimeTab: { entity_type: 'text', entity_category: 'diagnostic', name: 'sys time tab', role: 'info' },
            bpBurst: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp burst', role: 'info' },
            lowerPowerStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'lower power stat',
                role: 'info',
            },
            breakerCapacityMax: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'breaker capacity max',
                role: 'info',
            },
            breakerEnableState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'breaker enable state',
                role: 'info',
            },
        },
    },
    HRChargingParamReport: {
        string: { hrSn: { entity_type: 'text', entity_category: 'diagnostic', name: 'hr serial', role: 'info' } },
        number: {
            heatingPower: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'heating power',
            },
            targetPower: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'target power',
            },
            temp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'water temperature',
            },
            targetTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'target temperature',
            },
            waterTankVolume: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'l',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'volume',
                role: 'value',
                name: 'water tank vaolume',
            },
            selfcheckPercent: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'selfcheck Percent',
            },
        },
        diagnostic: {
            mode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mode',
                role: 'info',
                mode: { 0: 'OK?', 1: '1?', 2: '2?' },
            },
            onlineBits: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'onlineBits',
                role: 'info',
                onlineBits: { 0: '0?', 1: '1?', 2: '2?' },
            },
            runStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'runStat',
                role: 'info',
                runStat: { 0: 'off?', 1: 'on?' },
            },
            errorCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'errorCode:',
                role: 'info',
                errorCode: { 0: 'OK?', 1: 'fault?' },
            },
            runFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'run Flag',
                role: 'info',
                runFlag: { 0: 'off?', 1: 'on?' },
            },
        },
    },
    HeatingRodEnergyStreamShow: {
        string: {
            rod1_hrSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'hr serial',
                role: 'info',
            },
        },
        number: {
            rod1_hrPwr: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'heating power',
            },
            rod1_temp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'rod temperature',
            },
            rod1_fromPv: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power from pv',
            },
            rod1_fromBat: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power from bat',
            },
            rod1_fromGrid: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power from grid',
            },
        },
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
                latestQuotas: { 0: 'no trigger', 1: 'trigger' },
            },
        },
    },
    info: {
        number: {
            msgCount: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'received MSG#',
                role: 'value',
            },
        },
        diagnostic: {
            status: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Status',
                role: 'info',
                status: { 0: 'offline', 1: 'online' },
            },
        },
    },
};

const deviceStatesDict = {
    powerocean: {
        statusReportBattery1: {
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpSoh: { entity: 'number' },
            bpSop: { entity: 'number' },
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
            bpEcloundSoc: { entity: 'string' },
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
            bpSysState: { entity: 'diagnostic' },
        },
        statusReportBattery2: {
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpSoh: { entity: 'number' },
            bpSop: { entity: 'number' },
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
            bpEcloundSoc: { entity: 'string' },
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
            bpSysState: { entity: 'diagnostic' },
        },
        statusReportBattery3: {
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpSoh: { entity: 'number' },
            bpSop: { entity: 'number' },
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
            bpEcloundSoc: { entity: 'string' },
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
            bpSysState: { entity: 'diagnostic' },
        },
        JTS1_ENERGY_STREAM_REPORT: {
            sysLoadPwr: { entity: 'number' },
            sysGridPwr: { entity: 'number' },
            mpptPwr: { entity: 'number' },
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
        },
        ParallelEnergyStreamReport: {
            sysLoadPwr: { entity: 'number' },
            sysGridPwr: { entity: 'number' },
            mpptPwr: { entity: 'number' },
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            powerPv1: { entity: 'number' },
            powerPv2: { entity: 'number' },

            ocean_sysLoadPwr: { entity: 'number' },
            ocean_sysGridPwr: { entity: 'number' },
            ocean_mpptPwr: { entity: 'number' },
            ocean_bpPwr: { entity: 'number' },
            ocean_bpSoc: { entity: 'number' },
            ocean_devSn: { entity: 'string' },
            ocean_powerPv1: { entity: 'number' },
            ocean_powerPv2: { entity: 'number' },
            system1_sysLoadPwr: { entity: 'number' },
            system1_sysGridPwr: { entity: 'number' },
            system1_mpptPwr: { entity: 'number' },
            system1_bpPwr: { entity: 'number' },
            system1_bpSoc: { entity: 'number' },
            system1_devSn: { entity: 'string' },
            system1_powerPv1: { entity: 'number' },
            system1_powerPv2: { entity: 'number' },
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
            mpptHeartBeat_mpptInsResist: { entity: 'number' },
            //loadinfo
            pcsLoadInfo_vol0: { entity: 'number' },
            pcsLoadInfo_amp0: { entity: 'number' },
            pcsLoadInfo_freq0: { entity: 'number' },
            pcsLoadInfo_pwr0: { entity: 'number' },
            pcsLoadInfo_vol1: { entity: 'number' },
            pcsLoadInfo_amp1: { entity: 'number' },
            pcsLoadInfo_freq1: { entity: 'number' },
            pcsLoadInfo_pwr1: { entity: 'number' },
            pcsLoadInfo_vol2: { entity: 'number' },
            pcsLoadInfo_amp2: { entity: 'number' },
            pcsLoadInfo_freq2: { entity: 'number' },
            pcsLoadInfo_pwr2: { entity: 'number' },
            //meterheartbeat
            meterHeartBeat_meterType0: { entity: 'string' },
            meterHeartBeat_meterAddr0: { entity: 'string' },
            meterHeartBeat_meterData0: { entity: 'string' },
            meterHeartBeat_meterType1: { entity: 'string' },
            meterHeartBeat_meterAddr1: { entity: 'string' },
            meterHeartBeat_meterData1: { entity: 'string' },
            //
            bpRemainWatth: { entity: 'number' },
            bpDsgTime: { entity: 'number' },
            rateCtrlSwtich: { entity: 'string' },
            sysRateCtrlTime: { entity: 'string' },
            duraTime: { entity: 'string' },
            pcsActPwr: { entity: 'number' },
            pcsAcFreq: { entity: 'number' },
            pcsBusVolt: { entity: 'number' },
            pcsLeakAmp: { entity: 'number' },
            pcsDci: { entity: 'string' },
            pcsDcv: { entity: 'string' },
            pcsVbusRef: { entity: 'string' },
            pcsActivePowerRef: { entity: 'string' },
            pcsActivePowerLimitUp: { entity: 'string' },
            pcsActivePowerLimitDn: { entity: 'string' },
            pcsBpPower: { entity: 'number' },
            pcsBpPowerChgLimit: { entity: 'number' },
            pcsRelayStateShow: { entity: 'string' },
            pcsGridSafetyFuncRecord: { entity: 'string' },
            pcsGridSafetyStateRecord: { entity: 'string' },
            pcsGridInvErrorRms: { entity: 'string' },
            pcsPfcCurReal: { entity: 'number' },
            pcsPfcCurRef: { entity: 'number' },
            pcsReactivePowerRef: { entity: 'string' },
            pcsMeterPower: { entity: 'number' },
            pcsCommInterfaceState: { entity: 'diagnostic' },
            pcsAverageVoltage: { entity: 'number' },
            pcsVgridThd: { entity: 'number' },
            pcsInterruptOccupancyRate: { entity: 'string' },
            emsMpptSelfcheckState: { entity: 'diagnostic' },
            emsMpptStartupState: { entity: 'diagnostic' },
            emsBpSelfcheckState: { entity: 'diagnostic' },
            emsBpStartupState: { entity: 'diagnostic' },
            emsPcsSelfcheckState: { entity: 'diagnostic' },
            emsPcsStartupState: { entity: 'diagnostic' },
            emsBusVolt: { entity: 'number' },
            emsActiveOffGridCmd: { entity: 'string' },
            emsBpAliveNum: { entity: 'string' },
            emsBpPower: { entity: 'number' },
            emsBpChg: { entity: 'number' },
            emsBpDsg: { entity: 'number' },
            emsBpChgRequest: { entity: 'string' },
            emsSelfUsedCnt: { entity: 'number' },
            emsAcMakeupTriggleSoc: { entity: 'string' },
            emsAcMakeupExitSoc: { entity: 'string' },
            emsAcMakeupMinSoc: { entity: 'number' },
            emsAcMakeupCnt: { entity: 'number' },
            emsStartFsmState: { entity: 'diagnostic' },
            emsMpptRunState: { entity: 'diagnostic' },
            emsMpptModStat: { entity: 'diagnostic' },
            emsStopCmd: { entity: 'string' },
            emsSysCfg: { entity: 'string' },
            emsLpState: { entity: 'diagnostic' },
            emsLpType: { entity: 'string' },
            emsLpMpptCnt: { entity: 'string' },
            emsLpBpCnt: { entity: 'string' },
            emsLpStateFlag: { entity: 'string' },
            emsSocCalibState: { entity: 'string' },
            emsSocCalibRequest: { entity: 'string' },
            emsMpptHbState: { entity: 'diagnostic' },
            emsNtcTempMax: { entity: 'number' },
            emsBusVoltErrSlidFilter: { entity: 'string' },
            emsBusVoltRipple: { entity: 'number' },
            emsPvInvPwr: { entity: 'number' },
            mpptBusVolRef: { entity: 'string' },
            dcdcBusVolRef: { entity: 'string' },
            dcdcBpVol: { entity: 'number' },
            dcdcInductanceCurr: { entity: 'number' },
            innerTemperature: { entity: 'number' },
            powerLimitMode: { entity: 'diagnostic' },
            invRatedPower: { entity: 'number' },
            dcdcStateRecord: { entity: 'string' },
            emsWorkMode: { entity: 'diagnostic' },
            pcsBackupPwr: { entity: 'number' },
        },
        JTS1_EMS_CHANGE_REPORT: {
            bpSoc: { entity: 'number' },
            bpTotalChgEnergy: { entity: 'number' },
            bpTotalDsgEnergy: { entity: 'number' },
            evBindList: { entity: 'array' },
            sysWorkSta: { entity: 'diagnostic' },
            sysGridSta: { entity: 'diagnostic' },
            emsWorkMode: { entity: 'diagnostic' },
            emsBackupEvent: { entity: 'string' },
            bpChgDsgSta: { entity: 'diagnostic' },
            emsKeepSoc: { entity: 'string' },
            emsSysSelfCheckStat: { entity: 'string' },
            bpOnlineSum: { entity: 'string' },
            sysOnOffMachineStat: { entity: 'string' },
            sysBatChgUpLimit: { entity: 'number' },
            sysBatDsgDownLimit: { entity: 'number' },
            sysBatBackupRatio: { entity: 'number' },
            emsFeedMode: { entity: 'diagnostic' },
            emsFeedRatio: { entity: 'number' },
            emsFeedPwr: { entity: 'number' },
            sysMeterCfg: { entity: 'string' },
            sysTypeCfg: { entity: 'string' },
            pcsRunSta: { entity: 'diagnostic' },
            pcsAcErrCode: { entity: 'string' },
            pcsDcErrCode: { entity: 'string' },
            pcsOverVol1: { entity: 'string' },
            pcsOverVol2: { entity: 'string' },
            pcsOverVol3: { entity: 'string' },
            pcsOverVolTime1: { entity: 'string' },
            pcsOverVolTime2: { entity: 'string' },
            pcsOverVolTime3: { entity: 'string' },
            pcsLowVol1: { entity: 'string' },
            pcsLowVol2: { entity: 'string' },
            pcsLowVol3: { entity: 'string' },
            pcsLowVolTime1: { entity: 'string' },
            pcsLowVolTime2: { entity: 'string' },
            pcsLowVolTime3: { entity: 'string' },
            pcsOverVolRecover: { entity: 'string' },
            pcsLowVolRecover: { entity: 'string' },
            pcsVolRecoverTime: { entity: 'string' },
            pcs_10minOverVol: { entity: 'string' },
            pcs_10minOverVolTime: { entity: 'string' },
            pcsOverFreq1: { entity: 'string' },
            pcsOverFreq2: { entity: 'string' },
            pcsOverFreqTime1: { entity: 'string' },
            pcsOverFreqTime2: { entity: 'string' },
            pcsLowFreq1: { entity: 'string' },
            pcsLowFreq2: { entity: 'string' },
            pcsLowFreqTime1: { entity: 'string' },
            pcsLowFreqTime2: { entity: 'string' },
            pcsOverFreqRecover: { entity: 'string' },
            pcsLowFreqRecover: { entity: 'string' },
            pcsFreqRecoverTime: { entity: 'string' },
            pcsHvrtLvrtSwitch: { entity: 'string' },
            pcsOverVolRideThroughStart1: { entity: 'string' },
            pcsOverVolRideThroughStart2: { entity: 'string' },
            pcsOverVolRideThroughProtectTime1: { entity: 'string' },
            pcsOverVolRideThroughProtectTime2: { entity: 'string' },
            pcsLowVolRideThroughStart1: { entity: 'string' },
            pcsLowVolRideThroughStart2: { entity: 'string' },
            pcsLowVolRideThroughStart3: { entity: 'string' },
            pcsLowVolRideThroughProtectTime1: { entity: 'string' },
            pcsLowVolRideThroughProtectTime2: { entity: 'string' },
            pcsLowVolRideThroughProtectTime3: { entity: 'string' },
            pcsHighVolRideThroughRecover: { entity: 'string' },
            pcsLowVolRideThroughRecover: { entity: 'string' },
            pcsIslandDetectSwitch: { entity: 'string' },
            pcsActivePowerDeratingSwitch: { entity: 'string' },
            pcsActivePowerDeratingPercent: { entity: 'string' },
            pcsActivePowerGradient: { entity: 'string' },
            pcsActivePowerSoftstartSwitch: { entity: 'string' },
            pcsActivePowerSoftstartTime: { entity: 'string' },
            pcsOverFreqDeratingSwitch: { entity: 'string' },
            pcsOverFreqDeratingPowerBased: { entity: 'string' },
            pcsOverFreqDeratingStart: { entity: 'string' },
            pcsOverFreqDeratingEnd: { entity: 'string' },
            pcsOverFreqDeratingSlope: { entity: 'string' },
            pcsOverFreqDeratingRecoverSlope: { entity: 'string' },
            pcsOverFreqDeratingFrozeSwitch: { entity: 'string' },
            pcsOverFreqDeratingCutoffPower: { entity: 'string' },
            pcsUnderFreqIncrementSwitch: { entity: 'string' },
            pcsUnderFreqIncrementStart: { entity: 'string' },
            pcsUnderFreqIncrementEnd: { entity: 'string' },
            pcsUnderFreqIncrementSlope: { entity: 'string' },
            pcsUnderFreqIncrementRecoverSlope: { entity: 'string' },
            pcsUnderFreqIncrementFrozeSwitch: { entity: 'string' },
            pcsAntiBackFlowSwitch: { entity: 'string' },
            pcsOverVolDeratingSwitch: { entity: 'string' },
            pcsOverVolDeratingStart: { entity: 'string' },
            pcsOverVolDeratingEnd: { entity: 'string' },
            pcsOverVolDeratingStartingPower: { entity: 'string' },
            pcsOverVolDeratingEndPower: { entity: 'string' },
            pcsOverVolDeratingTimeConst: { entity: 'string' },
            pcsReactPwrModeSelect: { entity: 'string' },
            pcsReactPwrCompensation: { entity: 'string' },
            pcsPfValue: { entity: 'string' },
            pcsReactPwrPercent: { entity: 'string' },
            pcsQuV1: { entity: 'string' },
            pcsQuV2: { entity: 'string' },
            pcsQuV3: { entity: 'string' },
            pcsQuV4: { entity: 'string' },
            pcsQuQ1: { entity: 'string' },
            pcsQuQ2: { entity: 'string' },
            pcsQuQ3: { entity: 'string' },
            pcsQuQ4: { entity: 'string' },
            pcsQuTimeConst: { entity: 'string' },
            pcsCospP1: { entity: 'string' },
            pcsCospP2: { entity: 'string' },
            pcsCospP3: { entity: 'string' },
            pcsCospPf1: { entity: 'string' },
            pcsCospPf2: { entity: 'string' },
            pcsCospPf3: { entity: 'string' },
            pcsSafetyCountryCodeSelection: { entity: 'string' },
            pcsReconnectGridDetectSwitch: { entity: 'string' },
            pcsOnGridWaitTime: { entity: 'string' },
            pcsHighVolOnGrid: { entity: 'string' },
            pcsLowVolOnGrid: { entity: 'string' },
            pcsHighFreqOnGrid: { entity: 'string' },
            pcsLowFreqOnGrid: { entity: 'string' },
            pcsFaultRecoverOnGridWaitTime: { entity: 'string' },
            pcsFaultRecoverHighVolOnGrid: { entity: 'string' },
            pcsFaultRecoverLowVolOnGrid: { entity: 'string' },
            pcsFaultRecoverHighFreqOnGrid: { entity: 'string' },
            pcsFaultRecoverLowFreqOnGrid: { entity: 'string' },
            pcsPowerDeratingFlag: { entity: 'string' },
            pcsPowerDeratingSet: { entity: 'string' },
            pcsSendEnd: { entity: 'string' },
            rateCtrlSwtich: { entity: 'string' },
            sysRateCtrlTime: { entity: 'string' },
            duraTime: { entity: 'string' },
            pcs_10minOverVolSwitch: { entity: 'string' },
            pcsActivePowerSoftStartRate: { entity: 'string' },
            pcsActivePowerNormalRampUpRate: { entity: 'string' },
            pcsOverFreqDeratingStartDelay: { entity: 'string' },
            pcsOverFreqDeratingEndDelay: { entity: 'string' },
            pcsOverFreqDeratingRecoverSlopeSwitch: { entity: 'string' },
            pcsUnderFreqIncrementStartDelay: { entity: 'string' },
            pcsUnderFreqIncrementEndDelay: { entity: 'string' },
            pcsOverVolDeratingDelayTime: { entity: 'string' },
            pcsOngridReconnectFlag: { entity: 'string' },
            pcsQuLockinPower: { entity: 'string' },
            pcsQuLockoutPower: { entity: 'string' },
            pcsQuMinimumCosphi: { entity: 'string' },
            pcsFastCheck: { entity: 'string' },
            pcsFunctionEnable: { entity: 'string' },
            emsCtrlLedType: { entity: 'string' },
            emsCtrlLedBright: { entity: 'string' },
            pcsUnderFreqIncrementRecoverSlopeSwitch: { entity: 'string' },
            pcsOverVolDeratingDaleyTime: { entity: 'string' },
            pcsCospP4: { entity: 'string' },
            pcsCospPf4: { entity: 'string' },
            pcsReserved1: { entity: 'string' },
            pcsReserved2: { entity: 'string' },
            pcsReserved3: { entity: 'string' },
            pcsReserved4: { entity: 'string' },
            pcsReserved5: { entity: 'string' },
            pcsReserved6: { entity: 'string' },
            pcsReserved7: { entity: 'string' },
            pcsReserved8: { entity: 'string' },
            pcsReserved9: { entity: 'string' },
            pcsReserved10: { entity: 'string' },
            pcsReserved11: { entity: 'string' },
            pcsReserved12: { entity: 'string' },
            pcsReserved13: { entity: 'string' },
            pcsReserved14: { entity: 'string' },
            pcsReserved15: { entity: 'string' },
            pcsReserved16: { entity: 'string' },
            sysMulPeakSwitch: { entity: 'string' },
            sysMulPeakTime: { entity: 'string' },
            emsSgReady: { entity: 'string' },
            emsSgReadyEn: { entity: 'string' },
            emsSgRunStat: { entity: 'diagnostic' },
            emsStopAll: { entity: 'string' },
            iot_4gOn: { entity: 'string' },
            iot_4gSta: { entity: 'diagnostic' },
            iot_4gPdp: { entity: 'string' },
            iot_4gErr: { entity: 'string' },
            sysHeatStat: { entity: 'diagnostic' },
            pcsAcWarningCode: { entity: 'string' },
            pcsRelaySelfCheckSta: { entity: 'string' },
            pcsRunFsmState: { entity: 'string' },
            mppt1FaultCode: { entity: 'string' },
            mppt2FaultCode: { entity: 'string' },
            mppt1WarningCode: { entity: 'string' },
            mppt2WarningCode: { entity: 'string' },
            bpLineOffFlag: { entity: 'string' },
            bpRestartFlag: { entity: 'string' },
            bpReverseFlag: { entity: 'string' },
            batRelayCloseFailFlag: { entity: 'string' },
            batSoftRelayStatus: { entity: 'string' },
            batRealyStatus: { entity: 'diagnostic' },
            pcsRelayStateShow: { entity: 'string' },
            emsWorkState: { entity: 'string' },
            afciFaultCntCh1: { entity: 'string' },
            afciFaultValueCh1: { entity: 'string' },
            afciFaultMaxValueCh1: { entity: 'string' },
            afciProtectValueCh1: { entity: 'string' },
            afciFaultFlagCh1: { entity: 'string' },
            afciFaultCntCh2: { entity: 'string' },
            afciFaultValueCh2: { entity: 'string' },
            afciFaultMaxValueCh2: { entity: 'string' },
            afciProtectValueCh2: { entity: 'string' },
            afciFaultFlagCh2: { entity: 'string' },
            afciSelfTestCmdState: { entity: 'string' },
            afciEnableCmdState: { entity: 'string' },
            afciFaultClearState: { entity: 'string' },
            afciSellfTestResult: { entity: 'string' },
            afciSwitchFreqCh1: { entity: 'string' },
            afciSwitchFreqCh2: { entity: 'string' },
            sysCalStat: { entity: 'string' },
            ethWanStat: { entity: 'string' },
            wifiStaStat: { entity: 'diagnostic' },
            wireless_4gIccid: { entity: 'string' },
            virtualHardEdition: { entity: 'string' },
            userRole: { entity: 'string' },
            chgDsgMode: { entity: 'diagnostic' },
            chgDsgPwr: { entity: 'number' },
            parallelAllowState: { entity: 'string' },
            parallelTypeSet: { entity: 'string' },
            parallelType: { entity: 'string' },
            afciIsExist: { entity: 'string' },
            afciEn: { entity: 'string' },
            afciEnSet: { entity: 'string' },
            parallelTypeCur: { entity: 'string' },
        },
        EVChargingParamReport: {
            evSn: { entity: 'string' },
            expectChargingEnergy: { entity: 'number' },
            stopChargingSoc: { entity: 'number' },
            onlineBits: { entity: 'string' },
            evPlugAndPlay: { entity: 'string' },
            chargingStatus: { entity: 'diagnostic' },
            errorCode: { entity: 'string' },
            evPwr: { entity: 'number' },
            evChargingEnergy: { entity: 'number' },
            workMode: { entity: 'diagnostic' },
            orderTime: { entity: 'number' },
            orderState: { entity: 'diagnostic' },
            defaultVehicleId: { entity: 'string' },
            chargeVehicleId: { entity: 'string' },
            orderStartTimestamp: { entity: 'number' },
            orderEndTimestamp: { entity: 'number' },
            useGridFirst: { entity: 'string' },
            unknown30: { entity: 'string' },
            unknown31: { entity: 'string' },
            unknown32: { entity: 'string' },
            unknown33: { entity: 'string' },
            unknown34: { entity: 'string' },
            unknown35: { entity: 'string' },
        },
        JTS1_EMS_PARAM_CHANGE_REPORT: {
            smartCtrl: { entity: 'string' },
            energyEfficientEnable: { entity: 'string' },
            sysZone: { entity: 'string' },
            sysTimeTab: { entity: 'string' },
            bpBurst: { entity: 'string' },
            lowerPowerStat: { entity: 'string' },
            breakerCapacityMax: { entity: 'string' },
            breakerEnableState: { entity: 'string' },
        },
        HRChargingParamReport: {
            hrSn: { entity: 'string' },
            mode: { entity: 'diagnostic' },
            onlineBits: { entity: 'diagnostic' },
            heatingPower: { entity: 'number' },
            targetPower: { entity: 'number' },
            temp: { entity: 'number' },
            targetTemp: { entity: 'number' },
            runStat: { entity: 'diagnostic' },
            errorCode: { entity: 'diagnostic' },
            waterTankVolume: { entity: 'number' },
            selfcheckPercent: { entity: 'number' },
            runFlag: { entity: 'diagnostic' },
        },
        HeatingRodEnergyStreamShow: {
            rod1_hrSn: { entity: 'string' },
            rod1_hrPwr: { entity: 'number' },
            rod1_temp: { entity: 'number' },
            rod1_fromPv: { entity: 'number' },
            rod1_fromBat: { entity: 'number' },
            rod1_fromGrid: { entity: 'number' },
        },
        action: {
            latestQuotas: { entity: 'switch' },
        },
        info: {
            msgCount: { entity: 'number' },
            status: { entity: 'diagnostic' },
        },
    },
};

const deviceRanges = {
    powerocean: {
        statusReportBattery1: {
            number: {
                bpFullCap: { max: 110000 },
            },
        },
    },
};

const deviceCmd = {
    powerocean: {
        action: {
            latestQuotas: {
                operateType: 'latestQuotas',
                params: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } },
            },
        },
    },
};

const protoMsg = {
    cmdFunc: {
        2: { cmdId: { 2: 'BackendRecordHeartbeatReport' } },
        50: { cmdId: { 98: 'AppRuquestBpEuLawDataAck' } },
        53: { cmdId: { 113: 'ModuleClusterInfo' } },
        96: {
            cmdId: {
                1: 'JTS1_EMS_HEARTBEAT',
                3: 'ErrorChangeReport',
                7: 'JTS1_BP_STA_REPORT',
                8: 'JTS1_EMS_CHANGE_REPORT',
                9: 'JTS1_ERROR_CODE_MASK_REPORT',
                10: 'EmsAllTimerTaskReport',
                11: 'EmsEcologyDevReport',
                12: 'ParallelDevList',
                13: 'JTS1_EMS_PARAM_CHANGE_REPORT',
                33: 'JTS1_ENERGY_STREAM_REPORT',
                34: 'EnergyStreamDetail',
                37: 'EmsGetParam',
                39: 'EmsPVInvEnergyStreamReport',
                50: 'ParallelEnergyStreamReport', //
                51: 'ParallelEnergyStreamDetail', //not implemented
                97: 'EnergyStreamSwitch',
                112: 'SysBatChgDsgSet',
                119: 'SysLedBrightSet',
                127: 'EmsAllTimerTaskGet',
            },
        },
        209: {
            cmdId: {
                2: 'EVChargingTimerTaskReport',
                8: 'EVChargingParamReport',
                33: 'EVChargingEnergyStreamReport',
                51: 'EVChargingRemoteListSync',
            },
        },
        //211: { cmdId: { 1:""}}, //heatpump
        212: {
            cmdId: {
                2: 'HeatingRodTimerTaskReport',
                8: 'HRChargingParamReport',
                33: 'HeatingRodEnergyStreamShow',
                34: 'HeatingRodStreamDetail',
                48: 'HeatingRodCtrl',
                50: 'HeatingRodRunDataAck',
            },
        },
        224: { cmdId: { 1: 'EcologyDevBindListReport', 37: 'id37func224' } },
        240: { cmdId: { 1: 'EDevBindListReport', 2: 'EDevPriorityListReport' } },
        241: { cmdId: { 3: 'EDevParamReport', 5: 'id5func241' } },
        254: { cmdId: { 32: 'EnergyTotalReport' } },
    },
};

const msgNameObj = {
    JTS1_EMS_HEARTBEAT: { cmdId: 1, cmdFunc: 96 },
    ErrorChangeReport: { cmdId: 3, cmdFunc: 96 },
    JTS1_BP_STA_REPORT: { cmdId: 7, cmdFunc: 96 },
    JTS1_EMS_CHANGE_REPORT: { cmdId: 8, cmdFunc: 96 },
    JTS1_ERROR_CODE_MASK_REPORT: { cmdId: 9, cmdFunc: 96 },
    EmsAllTimerTaskReport: { cmdId: 10, cmdFunc: 96 },
    EmsEcologyDevReport: { cmdId: 11, cmdFunc: 96 },
    ParallelDevList: { cmdId: 12, cmdFunc: 96 },
    JTS1_EMS_PARAM_CHANGE_REPORT: { cmdId: 13, cmdFunc: 96 },
    JTS1_ENERGY_STREAM_REPORT: { cmdId: 33, cmdFunc: 96 },
    EnergyStreamDetail: { cmdId: 34, cmdFunc: 96 },
    EmsGetParam: { cmdId: 37, cmdFunc: 96 },
    EmsPVInvEnergyStreamReport: { cmdId: 39, cmdFunc: 96 },
    ParallelEnergyStreamReport: { cmdId: 50, cmdFunc: 96 },
    ParallelEnergyStreamDetail: { cmdId: 51, cmdFunc: 96 },
    HRChargingParamReport: { cmdId: 8, cmdFunc: 212 },
    HeatingRodEnergyStreamShow: { cmdId: 33, cmdFunc: 212 },
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate;
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus;
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus;

/**
 *
 * @param adapter - THIS transfer
 * @param {object} stateDictObj - dictionary of states
 * @param {object} stateObj - states definition
 * @param {string} topic - the TOPIC is the Serial#
 * @param {object} payloadarr - payload of MQTT telegram
 * @param {string} devtype - device type
 * @param {boolean} haenable -if HA is enabled
 * @param {boolean} logged - if logged
 */
async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payloadarr, devtype, haenable, logged) {
    let haUpdate = [];
    if (payloadarr) {
        if (stateDictObj) {
            if (stateObj) {
                for (let i = 0; i < payloadarr.length; i++) {
                    const payload = payloadarr[i];
                    for (let channel in payload) {
                        //other incomming data is ignored (EnergyPack/PowerPack/timeConfig...)
                        switch (channel) {
                            case 'JTS1_ENERGY_STREAM_REPORT':
                            case 'JTS1_EMS_CHANGE_REPORT':
                            case 'EVChargingParamReport':
                            case 'JTS1_EMS_PARAM_CHANGE_REPORT':
                            case 'HRChargingParamReport':
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
                                        logged,
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
                                }
                                break;
                            case 'ParallelEnergyStreamReport':
                                await setOnlineStatus(adapter, topic);
                                for (let i = 0; i < payload[channel]['paraEnergyStream'].length; i++) {
                                    for (let state in payload[channel]['paraEnergyStream'][i]) {
                                        let val;
                                        let haupd;
                                        let prefix = '';
                                        if (i === 1) {
                                            prefix = 'ocean_';
                                        }
                                        if (i === 2) {
                                            prefix = 'system1_';
                                        }
                                        val = payload[channel]['paraEnergyStream'][i][state];
                                        haupd = await compareUpdate(
                                            adapter,
                                            stateDictObj,
                                            stateObj,
                                            haenable,
                                            topic,
                                            channel,
                                            `${prefix}${state}`,
                                            val,
                                            channel,
                                            logged,
                                        );
                                        if (Object.keys(haupd).length !== 0) {
                                            haUpdate.push(haupd);
                                        }
                                    }
                                }
                                break;
                            case 'ParallelEnergyStreamDetail':
                                await setOnlineStatus(adapter, topic);
                                for (let i = 0; i < payload[channel]['paraEnergyStreamDetail'].length; i++) {
                                    for (let state in payload[channel]['paraEnergyStreamDetail'][i]) {
                                        if (state !== 'timestamp') {
                                            let val;
                                            let haupd;
                                            let prefix = '';
                                            if (i === 1) {
                                                prefix = 'ocean_';
                                            }
                                            if (i === 2) {
                                                prefix = 'system1_';
                                            }
                                            val = payload[channel]['paraEnergyStreamDetail'][i][state];
                                            haupd = await compareUpdate(
                                                adapter,
                                                stateDictObj,
                                                stateObj,
                                                haenable,
                                                topic,
                                                'ParallelEnergyStreamReport',
                                                `${prefix}${state}`,
                                                val,
                                                'ParallelEnergyStreamReport',
                                                logged,
                                            );
                                            if (Object.keys(haupd).length !== 0) {
                                                haUpdate.push(haupd);
                                            }
                                        }
                                    }
                                }
                                break;
                            case 'HeatingRodEnergyStreamShow':
                                for (let i = 0; i < payload[channel]['hrEnergyStream'].length; i++) {
                                    for (let state in payload[channel]['hrEnergyStream'][i]) {
                                        let val;
                                        let haupd;
                                        val = payload[channel]['hrEnergyStream'][i][state];
                                        haupd = await compareUpdate(
                                            adapter,
                                            stateDictObj,
                                            stateObj,
                                            haenable,
                                            topic,
                                            channel,
                                            `rod${i + 1}_${state}`,
                                            val,
                                            channel,
                                            logged,
                                        );
                                        if (Object.keys(haupd).length !== 0) {
                                            haUpdate.push(haupd);
                                        }
                                    }
                                }
                                break;
                            case 'JTS1_BP_STA_REPORT':
                                await setOnlineStatus(adapter, topic);
                                for (let i = 0; i < payload[channel]['bpSta'].length; i++) {
                                    for (let state in payload[channel]['bpSta'][i]) {
                                        let val;
                                        let haupd;
                                        val = payload[channel]['bpSta'][i][state];
                                        haupd = await compareUpdate(
                                            adapter,
                                            stateDictObj,
                                            stateObj,
                                            haenable,
                                            topic,
                                            `statusReportBattery${i + 1}`,
                                            state,
                                            val,
                                            `statusReportBattery${i + 1}`,
                                            logged,
                                        );
                                        if (Object.keys(haupd).length !== 0) {
                                            haUpdate.push(haupd);
                                        }
                                    }
                                }
                                break;
                            case 'JTS1_EMS_HEARTBEAT':
                                await setOnlineStatus(adapter, topic);
                                for (let state in payload[channel]) {
                                    switch (state) {
                                        case 'pcsAPhase':
                                        case 'pcsBPhase':
                                        case 'pcsCPhase':
                                            for (let neststate in payload[channel][state]) {
                                                let val;
                                                let haupd;
                                                val = payload[channel][state][neststate];
                                                haupd = await compareUpdate(
                                                    adapter,
                                                    stateDictObj,
                                                    stateObj,
                                                    haenable,
                                                    topic,
                                                    channel,
                                                    state.concat('_', neststate),
                                                    val,
                                                    channel,
                                                    logged,
                                                );
                                                if (Object.keys(haupd).length !== 0) {
                                                    haUpdate.push(haupd);
                                                }
                                            }
                                            break;
                                        // pcsLoadInfo array mit 3 Objekten
                                        // meterHeartBeat array mit 2 Objecten (oder nur 1)
                                        case 'pcsLoadInfo':
                                        case 'meterHeartBeat':
                                            for (let i = 0; i < payload[channel][state].length; i++) {
                                                for (let neststate in payload[channel][state][i]) {
                                                    let val;
                                                    let haupd;
                                                    val = payload[channel][state][i][neststate];
                                                    haupd = await compareUpdate(
                                                        adapter,
                                                        stateDictObj,
                                                        stateObj,
                                                        haenable,
                                                        topic,
                                                        channel,
                                                        state.concat('_', neststate, String(i)),
                                                        val,
                                                        channel,
                                                        logged,
                                                    );
                                                    if (Object.keys(haupd).length !== 0) {
                                                        haUpdate.push(haupd);
                                                    }
                                                }
                                            }
                                            break;
                                        case 'mpptHeartBeat':
                                            if (
                                                Object.prototype.hasOwnProperty.call(payload[channel][state], 'mpptPv')
                                            ) {
                                                for (let i = 0; i < payload[channel][state]['mpptPv'].length; i++) {
                                                    for (let neststate in payload[channel][state]['mpptPv'][i]) {
                                                        let val;
                                                        let haupd;
                                                        val = payload[channel][state]['mpptPv'][i][neststate];
                                                        haupd = await compareUpdate(
                                                            adapter,
                                                            stateDictObj,
                                                            stateObj,
                                                            haenable,
                                                            topic,
                                                            channel,
                                                            state.concat('_mpptPv_', neststate, String(i)),
                                                            val,
                                                            channel,
                                                            logged,
                                                        );
                                                        if (Object.keys(haupd).length !== 0) {
                                                            haUpdate.push(haupd);
                                                        }
                                                    }
                                                }
                                            }
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    payload[channel][state],
                                                    'mpptTempVal',
                                                )
                                            ) {
                                                let val;
                                                let haupd;
                                                val = payload[channel][state]['mpptTempVal'];
                                                haupd = await compareUpdate(
                                                    adapter,
                                                    stateDictObj,
                                                    stateObj,
                                                    haenable,
                                                    topic,
                                                    channel,
                                                    state.concat('_', 'mpptTempVal'),
                                                    val,
                                                    channel,
                                                    logged,
                                                );
                                                if (Object.keys(haupd).length !== 0) {
                                                    haUpdate.push(haupd);
                                                }
                                            }
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    payload[channel][state],
                                                    'mpptInsResist',
                                                )
                                            ) {
                                                let val;
                                                let haupd;
                                                val = payload[channel][state]['mpptInsResist'];
                                                haupd = await compareUpdate(
                                                    adapter,
                                                    stateDictObj,
                                                    stateObj,
                                                    haenable,
                                                    topic,
                                                    channel,
                                                    state.concat('_', 'mpptInsResist'),
                                                    val,
                                                    channel,
                                                    logged,
                                                );
                                                if (Object.keys(haupd).length !== 0) {
                                                    haUpdate.push(haupd);
                                                }
                                            }
                                            break;

                                        default:
                                            {
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
                                                    logged,
                                                );
                                                if (Object.keys(haupd).length !== 0) {
                                                    haUpdate.push(haupd);
                                                }
                                            }
                                            break;
                                    }
                                }
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

/**
 * @param adapter - THIS transfer
 * @param {any} serial - serial# of device
 * @param {any} streamType - option to use
 * @param {string} state - the state reference, state name
 * @param {string | number | boolean} value - the value of the command
 * @param {object} cmd - cmd dictionary
 * @param {boolean} log - logging eneabled
 */
async function prepareProtoCmd(adapter, serial, streamType, state, value, cmd, log) {
    if (state === 'latestQuotas') {
        if (log === true) {
            adapter.log.debug(`preparaing latestQuotas: ${serial}`);
        }
        let muster = {
            header: {
                src: 32,
                dest: 32,
                seq: Date.now(),
                from: 'ios',
            },
        };
        const root = protobuf.parse(protoSource).root;
        const SetMessage = root.lookupType('setMessage');
        const message = SetMessage.create(muster);
        const messageBuffer = SetMessage.encode(message).finish();
        return messageBuffer;
    }
    let muster = {
        header: {
            src: 32,
            dest: 53,
            dSrc: 1,
            dDest: 1,
            checkType: 3,
            cmdFunc: 2,
            cmdId: 129,
            needAck: 1,
            seq: Date.now(),
            version: 19,
            payloadVer: 1,
            from: 'ios',
            deviceSn: serial,
        },
    };
    //for all commands
    muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
    muster['header']['cmdId'] = cmd['msg']['cmdId'];
    if (log) {
        adapter.log.debug(`[PROTOBUF encode] ${state} ${value} send powerocean ${JSON.stringify(muster)}`);
    }
    const root = protobuf.parse(protoSource).root;
    const SetMessage = root.lookupType('setMessage');
    const message = SetMessage.create(muster);
    const messageBuffer = SetMessage.encode(message).finish();
    return messageBuffer;
}

const protoSource = `
syntax = "proto3";

message id37func224id3 {
	optional string hr_sn = 1;
	optional int32 timestamp2 = 2;
	optional int32 power3 = 3;
	repeated int32 error4 = 4;
}

message id37func224 {
	optional uint32 addr = 1; //212 =rod?
	optional int32 unknown2 = 2;
	optional id37func224id3 data3 = 3;
}

message id5func241 {
	optional int32 socLow1 = 1;	
	optional int32 socHigh2 = 2;	
	optional float soc4 = 4;
	optional int32 unknown30 = 30;	
	optional int32 unknown31 = 31;
	optional substruct32 data32 = 32;
	optional substruct33 data33 = 33;
	optional int32 unknown41 = 41;
	optional int32 unknown42 = 42;
	optional float batPower44 = 44;
	optional int32 unknown45 = 45;	
	optional int32 unknown46 = 46;	
	optional int32 unknown47 = 47;	
	optional int32 unknown48 = 48;	
	optional int32 unknown49 = 49;	
}

message id99func212 {
	optional string hr_sn1 = 1;
	optional int32 switchRod2 = 2;	
}

message id2func240id1 {
	optional int32 type1 = 1; //212 = rod
	optional string hr_sn = 2;
	optional int32 switchRod = 3;
}

message id2func240 {
	optional id2func240id1 rodSatatus1 = 1;
	optional int32 switch2 = 2;
	repeated int32 error5 = 5;	
}

message EDevSmartPlugParamReport {
  optional float household_pwr = 1;
  optional float max_pwr = 2;
  optional uint32 switch_stat = 3;
  optional bytes error_code = 4;
}

message EDevParamReport {
  optional .EdevBaseInfo dev_info = 1;
  optional .EDevSmartPlugParamReport plugParam = 2;
}

message EdevBaseInfo {
  optional uint32 dev_addr = 1;
  optional string dev_sn = 2;
  optional uint32 sub_addr = 3;
}

message EDevBindItem {
  oneof _dev_prio {
    .EdevBaseInfo dev_info = 1;
    uint32 commute_type = 2;
    uint32 online_bits = 3;
    uint32 dev_prio = 4;
  }
}

message EDevBindListReport {
  optional uint32 dev_addr = 1;
  repeated .EDevBindItem dev_item = 2;
}

message EDevPriorityItem {
  optional .EdevBaseInfo dev_info = 1;
  optional uint32 dev_prio = 2;
  optional bool enable = 3;
  optional uint32 type = 4;
  optional bytes data = 5;
}

message EDevPriorityListReport {
  repeated .EDevPriorityItem dev_prio_report = 1;
}

message DevInfo {
  optional uint32 dev_addr = 1;
  optional string dev_sn = 2;
}

message ParallelDevList {
  repeated .DevInfo para_dev = 1;
}

message ParallelEnergyStreamItem {
  optional float sys_load_pwr = 1; //renamed from load_pwr to match the EnergyStream
  optional float sys_grid_pwr = 2; //renamed from grid_pwr to match the EnergyStream
  optional float mppt_pwr = 3;
  optional float bp_pwr = 4;
  optional uint32 timestamp = 5;
  optional uint32 bp_soc = 7;
  optional string dev_sn = 8;
  optional float power_pv1 = 9; //added to match the EnergyStream
  optional float power_pv2 = 10; //added to match the EnergyStream
}

message ParallelEnergyStreamDetail {
  repeated .ParallelEnergyStreamItem para_energy_stream_detail = 1;
  optional uint32 para_sys_seq = 2;
}

message ParallelEnergyStream {
  optional float sys_load_pwr = 1;
  optional float sys_grid_pwr = 2;
  optional float mppt_pwr = 3;
  optional float bp_pwr = 4;
  optional uint32 bp_soc = 5;
  optional string dev_sn = 6;
  optional float power_pv1 = 9;
  optional float power_pv2 = 10;
} 

message ParallelEnergyStreamReport {
  repeated .ParallelEnergyStream para_energy_stream = 1;
}

message AppRuquestBpEuLawData {
  optional string bp_sn = 1;
  optional uint32 app_to_bms_launch_date = 2;
  optional uint32 app_launch_date_set_type = 3;
  optional uint32 app_to_bms_reset_flag = 4;
  optional uint32 bms_data_upload_en = 5;
}

message AppRuquestBpEuLawDataAck {
  optional string bp_sn = 1;
  optional uint32 soh = 2;
  optional uint32 accu_chg_cap = 3;
  optional uint32 accu_dsg_cap = 4;
  optional uint32 accu_chg_energy = 5;
  optional uint32 accu_dsg_energy = 6;
  optional uint32 deep_dsg_cnt = 7;
  optional uint32 high_temp_use_time = 8;
  optional uint32 low_temp_use_time = 9;
  optional uint32 high_temp_chg_time = 10;
  optional uint32 low_temp_chg_time = 11;
  optional uint32 bp_launch_date = 12;
  optional uint32 bp_cycles = 13;
  optional float bp_power_capability = 14;
  optional float bp_round_trip_eff = 15;
  optional float bp_self_dsg_rate = 16;
  optional float bp_ohm_res = 17;
  optional .BpResetType bp_reset_flag = 18;
  optional .AppDateType bp_launch_date_flag = 19;
}

message HPParam {
  optional string dev_sn = 1;
  optional uint32 online = 2;
  optional bytes error_code = 7;
}

message EmsEcologyDevReport {
  optional .HPParam HP_report = 1;
}


//jt_s1_ev.proto

message EVChargingEnergyStreamReport {
	repeated EVChargingEnergyStreamShow ev_stream_show = 1;
  }
  
message EVChargingEnergyStreamShow {
	optional string ev_sn = 1;
	optional float ev_pwr = 2;
}

message EVChargingTimerTaskCfg {
	optional uint32 is_cfg = 1;
	optional uint32 task_index = 2;
	optional bool is_enable = 3;
	optional bool is_effect = 4;
	optional uint32 type = 5;
	optional int32 param = 6;
	optional uint32 time_mode = 7;
	optional uint32 time_param = 8;
	repeated uint32 time_table = 9;
  }

message EVChargingTimerTaskReport {
	optional string ev_sn = 1;
	repeated EVChargingTimerTaskCfg time_task_cfg = 2;
  }

  enum EVChgSts {
	EV_CHG_STS_NONE = 0;
	EV_CHG_STS_AVAILABLE = 1;
	EV_CHG_STS_PREPARING = 2;
	EV_CHG_STS_CHARGING = 3;
	EV_CHG_STS_SUSPENDED_EVSE = 4;
	EV_CHG_STS_SUSPENDED_EV = 5;
	EV_CHG_STS_FINISHING = 6;
	EV_CHG_STS_FAULTED = 9;
  }

message EVChargingParamReport {
	optional string ev_sn = 1;
	optional float expect_charging_energy = 2;
	optional uint32 stop_charging_soc = 3;
	optional uint32 online_bits = 4;
	optional uint32 ev_plug_and_play = 5;
	optional .EVChgSts charging_status = 6;
	optional bytes error_code = 7;
	optional float ev_pwr = 8;
	optional float ev_charging_energy = 9;
	optional uint32 work_mode = 10;
	optional uint32 order_time = 11;
	optional uint32 order_state = 12;
	optional string default_vehicle_id = 13;
	optional string charge_vehicle_id = 14;
	optional fixed32 order_start_timestamp = 15;
	optional fixed32 order_end_timestamp = 16;
	optional uint32 use_grid_first = 17;
	optional int32 unknown30 = 30;
	optional int32 unknown31 = 31;
	optional int32 unknown32 = 32;
	optional int32 unknown33 = 33;
	optional int32 unknown34 = 34;
	optional int32 unknown35 = 35;
  }


message ModuleInfo {
	optional uint32 product_type = 1;
	optional uint32 product_detail = 2;
	optional string module_sn = 3;
	optional string cpuid = 4;
	optional uint32 running_sta = 5;
	optional uint32 addr = 6;
	optional uint32 d_addr = 7;
	optional uint32 app_ver = 8;
	optional uint32 loader_ver = 9;
  }
  
  message ModuleClusterInfo {
	repeated ModuleInfo modules = 1;
	optional uint32 total_page = 2;
	optional uint32 page = 3;
  }

  message ErrorChangeReport {
	optional ErrorCode ems_err_code = 1;
	optional ErrorCode pcs_err_code = 2;
	repeated ErrorCode bp_err_code = 3;
  }

  message ErrorCode {
	optional string module_sn = 1;
	repeated uint32 err_code = 2;
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
	optional uint32 bp_dsg_time = 2;
	optional bool rate_ctrl_swtich = 3; //bool
	optional uint32 sys_rate_ctrl_time = 4;
	optional uint32 dura_time = 5;
	optional float pcs_act_pwr = 10;
	optional float pcsAcFreq = 11;
	optional pcsPhase pcsAPhase = 12;
	optional pcsPhase pcsBPhase = 13;
	optional pcsPhase pcsCPhase = 14;
	repeated LoadInfo pcsLoadInfo = 15; //flatten repeated
	optional float pcsBusVolt = 16;
	optional float pcsLeakAmp = 17;
	optional float pcsDci = 18;
	optional float pcs_dcv = 19;
	repeated meterHeartBeat meterHeartBeat = 30;
	repeated mpptHeartBeat mpptHeartBeat = 31;
	optional float pcsVbusRef = 32;
	optional float pcsActivePowerRef = 33;
	optional float pcsActivePowerLimitUp = 34; //evtl 33vs34 getauscht
	optional float pcsActivePowerLimitDn =35;
	optional float pcs_bp_power = 36;
	optional float pcs_bp_power_chg_limit = 37;
	optional int32 pcsRelayStateShow = 38;
	optional int32 pcsGridSafetyFuncRecord = 39;
	optional int32 pcsGridSafetyStateRecord = 40;
	optional float pcsGridInvErrorRms = 41;
	optional float pcs_pfc_cur_real = 42;
	optional float pcs_pfc_cur_ref = 43;
	optional float pcsReactivePowerRef = 44;
	optional float pcs_meter_power = 45;
	optional uint32 pcs_comm_interface_state = 46;
	optional float pcs_average_voltage = 47;
	optional float pcsVgridThd = 48;
	optional float pcs_interrupt_occupancy_rate = 49;
	optional uint32 ems_mppt_selfcheck_state = 50;
	optional uint32 ems_mppt_startup_state = 51;
	optional uint32 ems_bp_selfcheck_state = 52;
	optional uint32 ems_bp_startup_state = 53;
	optional uint32 ems_pcs_selfcheck_state = 54;
	optional uint32 ems_pcs_startup_state = 55;
	optional float emsBusVolt = 56;
	optional uint32 ems_active_off_grid_cmd = 57;
	optional int32 emsBpAliveNum = 58;
	optional float emsBpPower = 59;
	optional float emsBpChg = 60;
	optional float emsBpDsg = 61;
	optional uint32 ems_bp_chg_request = 62;
	optional uint32 emsSelfUsedCnt = 63;
	optional uint32 emsAcMakeupTriggleSoc = 64;
	optional uint32 emsAcMakeupExitSoc = 65;
	optional uint32 ems_ac_makeup_min_soc = 66;
	optional uint32 ems_ac_makeup_cnt = 67;
    optional uint32 emsStartFsmState = 68;
	optional uint32 ems_mppt_run_state = 69;
	optional uint32 ems_mppt_mod_stat = 70;
	optional uint32 emsStopCmd = 71;
	optional uint32 ems_sys_cfg = 72;
	optional uint32 ems_lp_state = 73;
	optional uint32 ems_lp_type = 74;
	optional uint32 ems_lp_mppt_cnt = 75;
	optional uint32 ems_lp_bp_cnt = 76;
	optional uint32 ems_lp_state_flag = 77;
	optional uint32 ems_soc_calib_state = 78;
	optional uint32 ems_soc_calib_request = 79;
	optional uint32 emsMpptHbState = 80;
	optional float emsNtcTempMax = 81;
	optional float emsBusVoltErrSlidFilter = 82;
	optional float emsBusVoltRipple = 83;
	optional float ems_pv_inv_pwr = 84;
	optional float mppt_bus_vol_ref = 100;
	optional float dcdc_bus_vol_ref = 101;
	optional float dcdc_bp_vol = 102;
	optional float dcdc_inductance_curr = 103;
	optional float inner_temperature = 104;
	optional uint32 power_limit_mode = 105;
	optional uint32 inv_rated_power = 106;
	optional uint32 dcdc_state_record = 107;
	optional uint32 ems_work_mode = 108;
	optional float pcs_backup_pwr = 109;
}

message JTS1_ENERGY_STREAM_REPORT {
	optional float sysLoadPwr  = 1;
	optional float sysGridPwr = 2;
	optional float mpptPwr = 3;
	optional float bpPwr = 4;
	optional int32 bpSoc = 5;
}

message JTS1_EMS_PARAM_CHANGE_REPORT {
	optional bool smart_ctrl = 1;
	optional bool energy_efficient_enable = 2;
	optional uint32 sys_zone = 3;
	optional uint32 sys_time_tab = 4;
	optional bool bp_burst = 5;
	optional bool lower_power_stat = 6;
	optional int32 breakerCapacityMax = 7;
	optional int32 breakerEnableState = 8;
}

//when heatpump, delete?
message JTS1_ECOLOGY_DEV_REPORT {
	optional string devSn = 1;
	optional int32 online =2;
	repeated int32 errorCode = 7;
}

enum WorkMode {
	WORKMODE_SELFUSE = 0;
	WORKMODE_TOU = 1;
	WORKMODE_BACKUP = 2;
	WORKMODE_DBG = 3;
	WORKMODE_AC_MAKEUP = 4;
	WORKMODE_DRM_MODE = 5;
	WORKMODE_REMOTE_SCHED = 6;
	WORKMODE_STANDBY_MODE = 7;
	WORKMODE_SOC_CALIB = 8;
	WORKMODE_TIMER_MODE = 9;
  }

  enum SgReadyMode {
  SG_AUTO = 0;
  SG_MANUAL = 1;
}

enum RunStaDef {
	RUNSTA_STANDBY = 0;
	RUNSTA_RUN = 1;
	RUNSTA_STOP = 2;
  }
message SgReadyStatParam {
	optional bool ems_sg_stat_en = 1;
	optional uint32 ems_sg_stat = 2;
	optional uint32 ems_sg_pwr = 3;
	optional uint32 ems_sg_soc = 4;
  }
  
  message SgReadyParam {
	optional .SgReadyMode ems_sg_mode = 1;
	repeated .SgReadyStatParam ems_sg_param = 2;
	optional uint32 ems_sg_rate_pwr = 3;
	optional uint32 ems_sg_swit_time = 4;
  }

  message EVChargingSnList {
	repeated string ev_sn = 1;
  }

message JTS1_EMS_CHANGE_REPORT {
	optional uint32 sys_work_sta = 1;
	optional uint32 sys_grid_sta = 2;
	optional .WorkMode ems_work_mode = 3;
	optional uint32 ems_backup_event = 4;
	optional uint32 bp_chg_dsg_sta = 5;
	optional uint32 ems_keep_soc = 6;
	optional int32 bpSoc = 7;
	optional int32 emsSysSelfCheckStat = 8;
	optional uint32 bp_online_sum = 9;
	optional uint32 sys_on_off_machine_stat = 10;
	optional uint32 sys_bat_chg_up_limit = 11;
	optional uint32 sys_bat_dsg_down_limit = 12;
	optional int32 bpTotalChgEnergy = 13;
	optional int32 bpTotalDsgEnergy = 14;
	optional uint32 sys_bat_backup_ratio = 15;
	optional int32 emsFeedMode = 16;
	optional int32 emsFeedRatio = 17;
	optional int32 emsFeedPwr = 18;
	optional uint32 sys_meter_cfg = 19;
	optional uint32 sys_type_cfg = 20;
	optional .RunStaDef pcs_run_sta = 21;
	optional uint32 pcs_ac_err_code = 22;
	optional uint32 pcs_dc_err_code = 23;
	optional float pcsOverVol1 = 31;
	optional float pcsOverVol2 = 32;
	optional float pcs_over_vol3 = 33;
	optional uint32 pcs_over_vol_time1 = 34;
	optional uint32 pcs_over_vol_time2 = 35;
	optional uint32 pcs_over_vol_time3 = 36;
	optional float pcsLowVol1 = 37;
	optional float pcsLowVol2 = 38;
	optional float pcsLowVol3 = 39;
	optional int32 pcsLowVolTime1 = 40;
	optional int32 pcsLowVolTime2 = 41;
	optional int32 pcsLowVolTime3 = 42;
	optional float pcs_over_vol_recover = 43;
	optional float pcs_low_vol_recover = 44;
	optional uint32 pcs_vol_recover_time = 45;
	optional float pcs_10min_over_vol = 46;
	optional uint32 pcs_10min_over_vol_time = 47;
	optional float pcsOverFreq1 = 48;
	optional float pcsOverFreq2 = 49;
	optional uint32 pcs_over_freq_time1 = 50;
	optional uint32 pcs_over_freq_time2 = 51;
	optional float pcsLowFreq1 = 52;
	optional float pcsLowFreq2 = 53;
	optional uint32 pcs_low_freq_time1 = 54;
	optional uint32 pcs_low_freq_time2 = 55;
	optional float pcsOverFreqRecover = 56;
	optional float pcs_low_freq_recover = 57;
	optional uint32 pcs_freq_recover_time = 58;
	optional uint32 pcs_hvrt_lvrt_switch = 59;
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
	optional float pcs_high_vol_ride_through_recover = 70;
	optional float pcs_low_vol_ride_through_recover = 71;
	optional uint32 pcs_island_detect_switch = 72;
	optional uint32 pcs_active_power_derating_switch = 73;
	optional float pcs_active_power_derating_percent = 74;
	optional float pcsActivePowerGradient = 75;
	optional uint32 pcs_active_power_softstart_switch = 76;
	optional int32 pcsActivePowerSoftstartTime = 77;
	optional uint32 pcs_over_freq_derating_switch = 78;
	optional float pcsOverFreqDeratingPowerBased = 79;
	optional float pcsOverFreqDeratingStart = 80;
	optional float pcsOverFreqDeratingEnd = 81;
	optional float pcsOverFreqDeratingSlope = 82;
	optional float pcsOverFreqDeratingRecoverSlope = 83;
	optional uint32 pcs_over_freq_derating_froze_switch = 84;
	optional float pcs_over_freq_derating_cutoff_power = 85;
	optional uint32 pcs_under_freq_increment_switch = 86;
	optional float pcsUnderFreqIncrementStart = 87;
	optional float pcsUnderFreqIncrementEnd = 88;
	optional float pcsUnderFreqIncrementSlope = 89;
	optional float pcsUnderFreqIncrementRecoverSlope = 90;
	optional uint32 pcs_under_freq_increment_froze_switch = 91;
	optional uint32 pcs_anti_back_flow_switch = 92;
	optional uint32 pcs_over_vol_derating_switch = 93;
	optional float pcs_over_vol_derating_start = 94;
	optional float pcs_over_vol_derating_end = 95;
	optional float pcs_over_vol_derating_starting_power = 96;
	optional float pcs_over_vol_derating_end_power = 97;
	optional float pcs_over_vol_derating_time_const = 98;
	optional uint32 pcs_react_pwr_mode_select = 99;
	optional float pcs_react_pwr_compensation = 100;
	optional float pcs_pf_value = 101;
	optional float pcs_react_pwr_percent = 102;
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
	optional uint32 pcs_safety_country_code_selection = 118;
	optional uint32 pcs_reconnect_grid_detect_switch = 119;
	optional int32 pcsOnGridWaitTime = 120;
	optional float pcs_high_vol_on_grid = 121;
	optional float pcs_low_vol_on_grid = 122;
	optional float pcsHighFreqOnGrid = 123;
	optional float pcs_low_freq_on_grid = 124;
	optional int32 pcsFaultRecoverOnGridWaitTime = 125;
	optional float pcs_fault_recover_high_vol_on_grid = 126;
	optional float pcs_fault_recover_low_vol_on_grid = 127;
	optional float pcsFaultRecoverHighFreqOnGrid = 128;
	optional float pcsFaultRecoverLowFreqOnGrid = 129;
	optional int32 pcsPowerDeratingFlag = 130;
	optional int32 pcsPowerDeratingSet = 131;
	optional uint32 pcs_send_end = 132;
	optional bool rate_ctrl_swtich = 133;
	optional uint32 sys_rate_ctrl_time = 134;
	optional uint32 dura_time = 135;
	optional uint32 pcs_10min_over_vol_switch = 136;
	optional float pcs_active_power_soft_start_rate = 137;
	optional float pcs_active_power_normal_ramp_up_rate = 138;
	optional float pcs_over_freq_derating_start_delay = 139;
	optional float pcs_over_freq_derating_end_delay = 140;
	optional uint32 pcs_over_freq_derating_recover_slope_switch = 141;
	optional float pcs_under_freq_increment_start_delay = 142;
	optional float pcs_under_freq_increment_end_delay = 143;
	optional uint32 pcs_over_vol_derating_delay_time = 144;
	optional uint32 pcs_ongrid_reconnect_flag = 145;
	optional float pcs_qu_lockin_power = 146;
	optional float pcs_qu_lockout_power = 147;
	optional float pcs_qu_minimum_cosphi = 148;
	optional uint32 pcs_fast_check = 149;
	optional uint32 pcs_function_enable = 150;
	optional uint32 ems_ctrl_led_type = 151;
	optional uint32 ems_ctrl_led_bright = 152;
	optional uint32 pcs_under_freq_increment_recover_slope_switch = 153;
	optional float pcs_over_vol_derating_daley_time = 154;
	optional float pcs_cosp_p4 = 155;
	optional float pcs_cosp_pf4 = 156;
	optional uint32 pcs_reserved1 = 157;
	optional uint32 pcs_reserved2 = 158;
	optional uint32 pcs_reserved3 = 159;
	optional uint32 pcs_reserved4 = 160;
	optional uint32 pcs_reserved5 = 161;
	optional uint32 pcs_reserved6 = 162;
	optional float pcs_reserved7 = 163;
	optional float pcs_reserved8 = 164;
	optional float pcs_reserved9 = 165;
	optional float pcs_reserved10 = 166;
	optional float pcs_reserved11 = 167;
	optional float pcs_reserved12 = 168;
	optional float pcs_reserved13 = 169;
	optional float pcs_reserved14 = 170;
	optional float pcs_reserved15 = 171;
	optional float pcs_reserved16 = 172;
	optional bool sys_mul_peak_switch = 180;	
	optional int32 sysMulPeakTime = 181;
	optional .SgReadyParam ems_sg_ready = 182;
	optional bool ems_sg_ready_en = 183;
	optional uint32 ems_sg_run_stat = 184;
	optional uint32 ems_stop_all = 185;
	optional sint32 iot_4g_on = 186;
	optional sint32 iot_4g_sta = 187;
	optional sint32 iot_4g_pdp = 188;
	optional sint32 iot_4g_err = 189;
	optional uint32 sys_heat_stat = 190;
	optional uint32 pcs_ac_warning_code = 191;
	optional uint32 pcs_relay_self_check_sta = 192;

	optional int32 pcsRunFsmState = 193;
	optional uint32 mppt1_fault_code = 194;
	optional uint32 mppt2_fault_code = 195;
	optional uint32 mppt1_warning_code = 196;
	optional uint32 mppt2_warning_code = 197;
	optional uint32 bp_line_off_flag = 198;
	optional uint32 bp_restart_flag = 199;
	optional uint32 bp_reverse_flag = 200;
	optional uint32 bat_relay_close_fail_flag = 201;
	optional uint32 bat_soft_relay_status = 202;
	optional uint32 bat_realy_status = 203;
	optional int32 pcsRelayStateShow = 204;
	optional uint32 ems_work_state = 205;
	optional EVChargingSnList ev_bind_list = 206;
	optional uint32 afci_fault_cnt_ch1 = 207;
	optional float afci_fault_value_ch1 = 208;
	optional float afci_fault_max_value_ch1 = 209;
	optional float afci_protect_value_ch1 = 210;
	optional uint32 afci_fault_flag_ch1 = 211;
	optional uint32 afci_fault_cnt_ch2 = 212;
	optional float afci_fault_value_ch2 = 213;
	optional float afci_fault_max_value_ch2 = 214;
	optional float afci_protect_value_ch2 = 215;
	optional uint32 afci_fault_flag_ch2 = 216;
	optional uint32 afci_self_test_cmd_state = 217;
	optional uint32 afci_enable_cmd_state = 218;
	optional uint32 afci_fault_clear_state = 219;
	optional uint32 afci_sellf_test_result = 220;
	optional uint32 afci_switch_freq_ch1 = 221;
	optional uint32 afci_switch_freq_ch2 = 222;
	optional uint32 sys_cal_stat = 223;
	optional uint32 eth_wan_stat = 224;
	optional uint32 wifi_sta_stat = 225;
	optional string wireless_4g_iccid = 226;
	optional uint32 virtual_hard_edition = 227;
	optional uint32 user_role = 228;
	optional uint32 chg_dsg_mode = 229;
	optional float chg_dsg_pwr = 230;
	optional bool parallel_allow_state = 231;
	optional uint32 parallel_type_set = 232;
	optional uint32 parallel_type = 233;
	optional uint32 afci_is_exist = 234;
	optional uint32 afci_en = 235;
	optional uint32 afci_en_set = 236;
	optional uint32 parallel_type_cur = 237;
}

message bpStaReport {
	optional float bpPwr =1;
	optional int32 bpSoc =2;
	optional int32 bpSoh =3;
	optional uint32 bp_sop = 4;
	repeated float bpTemp = 5;
	optional float bpMaxCellVol = 6;
	optional float bpMinCellVol = 7;
	optional int32 bpRunSta = 8;  //1=RUNSTA_RUN
	optional float bpVol = 9;
	optional float bpAmp = 10;
	optional float bpBusVol =11;
	optional int32 bpErrCode =13;
	repeated float bpCellVol = 14;
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

message EnergyStreamDetail {
	repeated .EnergyStreamItem sys_energy_stream = 1;
	optional uint32 sys_seq = 2;
  }

  message EnergyStreamItem {
	optional float load_pwr = 1;
	optional float grid_pwr = 2;
	optional float mppt_pwr = 3;
	optional float bp_pwr = 4;
	optional uint32 timestamp = 5;
	optional sint32 timezone = 6;
	optional uint32 bp_soc = 7;
  }

message SysLedBrightSet {
	optional int32 sys_led_type = 1;
	optional int32 sys_led_ctrl_bright = 2;
}
message EnergyStreamSwitch {
	optional bool ems_open_energy_stream = 1;
  }
message SysBatChgDsgSet {
	optional uint32 sys_bat_chg_up_limit = 1;
	optional uint32 sys_bat_dsg_down_limit = 2;
	optional uint32 sys_bat_backup_ratio = 3;
	optional uint32 dev_soc = 4; 
}
message EmsAllTimerTaskGet {
}
message EVChargingRemoteListSync {
} 
message EmsGetParam {
}
message EmsPVInvEnergyStreamReport {
	optional float pv_inv_pwr = 1;
  }

message EnergyItem {
  optional uint32 timestamp = 1;
  optional uint32 watth_type = 2;
  repeated uint32 watth = 3;
}

message EnergyTotalReport {
  optional uint32 watth_seq = 1;
  optional .EnergyItem watth_item = 2;
}

 message EcologyDevBindListReport {
	repeated EcologyDevBindItem dev_item = 1;
  }
  
  message EcologyDevBindItem {
	optional uint32 addr = 1;
	optional string dev_sn = 2;
	optional uint32 commute_type = 3;
	optional uint32 online_bits = 4;
  }
  message EmsAllTimerTaskReport {
	repeated EmsTimerTaskCfg time_task_cfg = 1;
  }
  message EmsTimerTaskCfg {
	optional uint32 role = 1;
	optional uint32 is_cfg = 2;
	optional uint32 task_index = 3;
	optional bool is_enable = 4;
	optional bool is_effect = 5;
	optional uint32 type = 6;
	optional uint32 sys_chg_dsg_pwr = 7;
	optional uint32 time_mode = 8;
	optional uint32 time_param = 9;
	repeated uint32 time_table = 10;
  }

  message HRChargingParamReport {
	optional string hr_sn = 1;
	optional uint32 mode = 2;
	optional uint32 online_bits = 3;
	optional uint32 heating_power = 4;
	optional uint32 target_power = 5;
	optional float temp = 6;
	optional float target_temp = 7;
	optional uint32 run_stat = 8;
	optional uint32 error_code = 9;
	optional uint32 water_tank_volume = 10;
	optional uint32 selfcheck_percent = 11;
	optional uint32 run_flag = 12;

  }
  message HeatingRodEnergyStreamShow {
	repeated .HeatingRodEnergyStream hr_energy_stream = 1;
  }
  
  message HeatingRodEnergyStream {
	optional string hr_sn = 1;
	optional float hr_pwr = 2;
	optional float temp = 3;
	optional float from_pv = 4;
	optional float from_bat = 5;
	optional float from_grid = 6;
  }	 

  message HeatingRodRunDataAck {
	optional string hr_sn = 1;
	optional uint32 heating_power = 2;
	optional uint32 target_power = 3;
	optional uint32 temp = 4;
	optional uint32 target_temp = 5;
	optional uint32 run_stat = 6;
	optional uint32 error_code = 7;
	optional uint32 water_tank_volume = 8;
	optional uint32 target_run_stat = 9;
  }

  message HeatingRodEnergyStreamItem {
	optional string hr_sn = 1;
	optional float hr_pwr = 2;
	optional uint32 temp = 3;
	optional fixed32 timestamp = 4;
	optional float from_pv = 5;
	optional float from_bat = 6;
	optional float from_grid = 7;
  }
  
  message HeatingRodStreamDetail {
	repeated .HeatingRodEnergyStreamItem hr_energy_stream = 1;
	optional uint32 sys_seq = 2;
  }

  message HeatingRodTimerTaskReport {
	optional string hr_sn = 1;
	repeated .HeatingRodTimerTaskCfg time_task_cfg = 2;
  }

  message HeatingRodTimerTaskCfg {
	optional uint32 is_cfg = 1;
	optional uint32 task_index = 2;
	optional bool is_enable = 3;
	optional bool is_effect = 4;
	optional uint32 type = 5;
	optional int32 param = 6;
	optional uint32 time_mode = 7;
	optional uint32 time_param = 8;
	repeated uint32 time_table = 9;
  }

  message HeatingRodCtrl {
	optional string hr_sn = 1;
	optional uint32 heating_rod_ctrl = 2;
	optional uint32 heating_rod_power = 3;
	optional uint32 heating_rod_temp = 4;
	optional uint32 water_tank_volume = 5;
  }

message setMessage {
    setHeader header = 1;
 }
message setHeader {
    setValue pdata = 1;
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
message setValue {
    optional int32 value = 1;
	optional int32 value2 = 2;
}

    message sentParallelEnergyStreamReport {
        setHeader1 header = 1;
    }
    message sentParallelEnergyStreamDetail {
        setHeader2 header = 1;
    }

    message sentEmsPVInvEnergyStreamReport {
        setHeader3 header = 1;
    }

    message sentEmsGetParam {
        setHeader4 header = 1;
    } 

    message sentEnergyStreamDetail {
        setHeader5 header = 1;
    } 

    message sentJTS1_ENERGY_STREAM_REPORT {
        setHeader6 header = 1;
    } 

    message sentJTS1_EMS_PARAM_CHANGE_REPORT {
        setHeader7 header = 1;
    } 
    message sentParallelDevList {
        setHeader8 header = 1;
    } 

    message sentEmsEcologyDevReport {
        setHeader9 header = 1;
    } 
    message sentEmsAllTimerTaskReport {
        setHeader10 header = 1;
    } 
    message sentJTS1_ERROR_CODE_MASK_REPORT {
        setHeader11 header = 1;
    } 
    message sentJTS1_EMS_CHANGE_REPORT {
        setHeader12 header = 1;
    } 
    message sentJTS1_BP_STA_REPORT {
        setHeader13 header = 1;
    } 
    message sentErrorChangeReport {
        setHeader14 header = 1;
    } 
    message sentJTS1_EMS_HEARTBEAT {
        setHeader15 header = 1;
    } 

    message sentHRChargingParamReport {
        setHeader16 header = 1;
    } 
    message sentHeatingRodEnergyStreamShow {
        setHeader17 header = 1;
    } 

 message setHeader17 {
    HeatingRodEnergyStreamShow pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader16 {
    HRChargingParamReport pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader15 {
    JTS1_EMS_HEARTBEAT pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader14 {
    ErrorChangeReport pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader13 {
    JTS1_BP_STA_REPORT pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader12 {
    JTS1_EMS_CHANGE_REPORT pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader11 {
    JTS1_ERROR_CODE_MASK_REPORT pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader10 {
    EmsAllTimerTaskReport pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader9 {
    EmsEcologyDevReport pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}
 message setHeader8 {
    ParallelDevList pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader7 {
    JTS1_EMS_PARAM_CHANGE_REPORT pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader6 {
    JTS1_ENERGY_STREAM_REPORT pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader5 {
    EnergyStreamDetail pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader4 {
    EmsGetParam pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader3 {
    EmsPVInvEnergyStreamReport pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}

 message setHeader2 {
    ParallelEnergyStreamDetail pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}         

message setHeader1 {
    ParallelEnergyStreamReport pdata = 1;
    int32 src = 2;
    int32 dest = 3;
    int32 d_src = 4;
    int32 d_dest = 5;
    int32 cmd_func = 8;
    int32 cmd_id = 9;
    int32 data_len = 10;
    int32 need_ack = 11;
    int32 is_ack = 12;
    int32 seq = 14;
    int32 product_id = 15;
    int32 version = 16;
    int32 payload_ver = 17;
}


`;

module.exports = {
    deviceStates,
    deviceStatesDict,
    deviceRanges,
    deviceCmd,
    protoMsg,
    protoSource,
    storeProtoPayload,
    prepareProtoCmd,
    msgNameObj,
};
