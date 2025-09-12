const deviceStates = {
    CloudBmsInfoReport: {
        number: {
            bpPwr: {
                min: 0,
                max: 25000,
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
            bpTemp: {
                min: 0,
                max: 60,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'bp temp',
                subrole: 'number',
            },
            bpCellMaxVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp cell max vol',
                subrole: 'number',
            },
            bpCellMinVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.01,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp cell min vol',
                subrole: 'number',
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
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'Bus voltage',
            },
            bpBusAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'bp bus amp',
                subrole: 'number',
            },
            bpCellVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp cell vol',
                subrole: 'number',
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
                mult: 0.001,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Accu charge capacity',
            },
            bpAccuDsgCap: {
                min: 0,
                max: 7500000,
                unit_of_measurement: 'mAh',
                mult: 0.001,
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
            bpEcloundSoc: {
                min: 0,
                max: 60,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp eclound soc',
                subrole: 'number',
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
        },
        string: {
            bpSop: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp sop', role: 'info' },
            bpDsrc: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp dsrc', role: 'info' },
            bpSn: { entity_type: 'text', entity_category: 'diagnostic', name: 'Battery serial number', role: 'info' },
            bpCycles: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp cycles', role: 'info' },
            bpHeartbeatVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Heartbeat version',
                role: 'info',
            },
            bpGlobalProtect: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp global protect',
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
            bpChgSop: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp chg sop', role: 'info' },
            bpDsgSop: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp dsg sop', role: 'info' },
            bpPtcExitEvent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp ptc exit event',
                role: 'info',
            },
            bpEcloundSoc: { entity_type: 'text', entity_category: 'diagnostic', role: 'info', name: 'Eclound Soc' },
            bpTimestamp: { entity_type: 'text', entity_category: 'diagnostic', name: 'Timestamp', role: 'info' },
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
            bpDsrc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bpDsrc',
                role: 'info',
                bpDsrc: { 0: 'OK?', 1: '1?', 2: '2?' },
            },
            bpGlobalProtect: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Global Protect',
                role: 'info',
                bpGlobalProtect: { 0: 'OK?' },
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
        },
        array: {
            bpTemp: { entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'Battery tremperatures' },
            bpCellVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                mult: 0.001,
                name: 'Battery Cell voltages',
            },
        },
    },
    EMSHeartbeatReport: {
        diagnostic: {
            sysWorkSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys work sta',
                role: 'info',
                sysWorkSta: { 0: 'OK?' },
            },
            bpChgDsgSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp chg dsg sta',
                role: 'info',
                bpChgDsgSta: { 0: 'OK?' },
            },
            emsErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems err code',
                role: 'info',
                emsErrCode: { 0: 'OK?' },
            },
            sysErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys err code',
                role: 'info',
                sysErrCode: { 0: 'OK?' },
            },
            epoSwitchState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'epo switch state',
                role: 'info',
                epoSwitchState: { 0: 'OK?' },
            },
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'err code',
                role: 'info',
                errCode: { 0: 'OK?' },
            },
            meterType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter type',
                role: 'info',
                meterType: { 0: 'OK?' },
            },
            emsSystemState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems system state',
                role: 'info',
                emsSystemState: { 0: 'OK?' },
            },
            appCtrlState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'app ctrl state',
                role: 'info',
                appCtrlState: { 0: 'OK?' },
            },
            pvInvWiringMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pv inv wiring mode',
                role: 'info',
                pvInvWiringMode: { 0: 'OK?' },
            },
            workingMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'working mode',
                role: 'info',
                workingMode: { 0: 'OK?' },
            },
            emsErrorCodeMask: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ems error code mask',
                role: 'info',
                emsErrorCodeMask: { 0: 'OK?' },
            },
            bpErrorCodeMask: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp error code mask',
                role: 'info',
                bpErrorCodeMask: { 0: 'OK?' },
            },
            pv1ErrorCodeMask: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pv1 error code mask',
                role: 'info',
                pv1ErrorCodeMask: { 0: 'OK?' },
            },
            pv2ErrorCodeMask: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pv2 error code mask',
                role: 'info',
                pv2ErrorCodeMask: { 0: 'OK?' },
            },
            pvaErrorCodeMask: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pva error code mask',
                role: 'info',
                pvaErrorCodeMask: { 0: 'OK?' },
            },
            pvWiringType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pv wiring type',
                role: 'info',
                pvWiringType: { 0: 'OK?' },
            },
            invWiringType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'inv wiring type',
                role: 'info',
                invWiringType: { 0: 'OK?' },
            },
            appConfigFinish: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'app config finish',
                role: 'info',
                appConfigFinish: { 0: 'OK?' },
            },
            currentNetif: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'current netif',
                role: 'info',
                currentNetif: { 0: 'OK?' },
            },
            isPvToInvDirectly: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'isPvToInvDirectly',
                role: 'info',
                isPvToInvDirectly: { 0: 'OK?' },
            },
            autoDetectStartPowerEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'auto detect start power en',
                role: 'info',
                autoDetectStartPowerEn: { 0: 'OK?' },
            },
        },
        number: {
            bpRemainWatth: {
                min: 0,
                max: 25000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'bp remain watth',
                subrole: 'number',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp soc',
                subrole: 'number',
            },
            bpDsgTime: {
                min: 0,
                max: 159990,
                unit_of_measurement: 'h',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'bp dsg time',
                subrole: 'number',
            },
            sysRateCtrlTime: {
                min: 0,
                max: 60,
                unit_of_measurement: 'h',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'sys rate ctrl time',
                subrole: 'number',
            },
            meterTotalPower: {
                min: 0,
                max: 50000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'meter total power',
                subrole: 'number',
            },
            meterAVoltage: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'meter a voltage',
                subrole: 'number',
            },
            meterBVoltage: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'meter b voltage',
                subrole: 'number',
            },
            meterCVoltage: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'meter c voltage',
                subrole: 'number',
            },
            meterACurrent: {
                min: 0,
                max: 120,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'meter a current',
                subrole: 'number',
            },
            meterBCurrent: {
                min: 0,
                max: 120,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'meter b current',
                subrole: 'number',
            },
            meterCCurrent: {
                min: 0,
                max: 120,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'meter c current',
                subrole: 'number',
            },
            bp1SocCoefficient: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 100,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp1 soc coefficient',
                subrole: 'number',
            },
            bp2SocCoefficient: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 100,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp2 soc coefficient',
                subrole: 'number',
            },
            bp3SocCoefficient: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 100,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp3 soc coefficient',
                subrole: 'number',
            },
            bpBusVoltCoefficient: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 100,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp bus volt coefficient',
                subrole: 'number',
            },
            pvInDayEnergy: {
                min: 0,
                max: 100000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'pv in day energy',
                subrole: 'number',
            },
            bpInDayEnergy: {
                min: 0,
                max: 100000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'bp in day energy',
                subrole: 'number',
            },
            bpOutDayEnergy: {
                min: -25000,
                max: 100000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'bp out day energy',
                subrole: 'number',
            },
            gridInDayEnergy: {
                min: 0,
                max: 100000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'grid in day energy',
                subrole: 'number',
            },
            gridOutDayEnergy: {
                min: -25000,
                max: 100000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'grid out day energy',
                subrole: 'number',
            },
            loadDayEnergy: {
                min: -25000,
                max: 100000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'load day energy',
                subrole: 'number',
            },
            batterySocUpperLimit: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'battery soc upper limit',
                subrole: 'number',
            },
            batterySocLowerLimit: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'battery soc lower limit',
                subrole: 'number',
            },
            mpptVoltageMaximum: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'mppt voltage maximum',
                subrole: 'number',
            },
            mpptVoltageMinimum: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'mppt voltage minimum',
                subrole: 'number',
            },
            mpptRatePower: {
                min: 0,
                max: 25000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'mppt rate power',
                subrole: 'number',
            },
            mpptWithstandVoltage: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'mppt withstand voltage',
                subrole: 'number',
            },
            bpSocBaseCoefficient: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 100,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp soc base coefficient',
                subrole: 'number',
            },
            bpBusVoltageBaseCoefficient: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp bus voltage base coefficient',
                subrole: 'number',
            },
            sysRunMeterTakePower: {
                min: -25000,
                max: 25000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'sys run meter take power',
                subrole: 'number',
            },
            sysRunMeterFeedPower: {
                min: 0,
                max: 50000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'sys run meter feed power',
                subrole: 'number',
            },
            gridFeedPowerMinimum: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'grid feed power minimum',
                subrole: 'number',
            },
            manualSetStartChargePower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'manual set start charge power',
                subrole: 'number',
            },
            startDischargePower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'start discharge power',
                subrole: 'number',
            },
            underVoltageProtectPoint: {
                min: 0,
                max: 500,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'under voltage protect point',
                subrole: 'number',
            },
            gridFeedRate: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'grid feed rate',
                subrole: 'number',
            },
        },
        string: {
            meterAddress: { entity_type: 'text', entity_category: 'diagnostic', name: 'meter address', role: 'info' },
            inverterBand: { entity_type: 'text', entity_category: 'diagnostic', name: 'inverter band', role: 'info' },
            bpDichargeAbilityAdjustValueLv1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp dicharge ability adjust value lv1',
                role: 'info',
            },
            bpDichargeAbilityAdjustValueLv2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp dicharge ability adjust value lv2',
                role: 'info',
            },
            bpRunDelay: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp run delay', role: 'info' },
            bpStopDelay: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp stop delay', role: 'info' },
            disOrChargeAbilityStepValue: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'dis or charge ability step value',
                role: 'info',
            },
            reportCycleTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'report cycle time',
                role: 'info',
            },
            bpSaveSocStopDelay: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp save soc stop delay',
                role: 'info',
            },
        },
        array: {
            meterRatio: { entity_type: 'text', entity_category: 'diagnostic', name: 'meter ratio', role: 'list' },
            meterPhasePower: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter phase power',
                role: 'list',
            },
            meterPowerFactor: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'meter power factor',
                role: 'list',
            },
        },
    },
    EnergyStreamItem: {
        number: {
            gridPwr: {
                min: 0,
                max: 25000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'grid pwr',
                subrole: 'number',
            },
            dcdcPwr: {
                min: 0,
                max: 25000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'dcdc pwr',
                subrole: 'number',
            },
            bpPwr: {
                min: 0,
                max: 25000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp pwr',
                subrole: 'number',
            },
            pvPwr: {
                min: 0,
                max: 25000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pv pwr',
                subrole: 'number',
            },
            timezone: {
                min: -1200,
                max: 1200,
                unit_of_measurement: 'h',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'timezone',
                subrole: 'number',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp soc',
                subrole: 'number',
            },
            loadPwr: {
                min: 0,
                max: 25000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'load pwr',
                subrole: 'number',
            },
            bpHeatingPower: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp heating power',
                subrole: 'number',
            },
            heatingPower: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'heating power',
                subrole: 'number',
            },
        },
        string: {
            timestamp: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp timestamp', role: 'info' },
        },
    },
    bpInfo0: {
        number: {
            bpPwr: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp pwr',
                subrole: 'number',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp soc',
                subrole: 'number',
            },
            bpVol: {
                min: 0,
                max: 100,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp vol',
                subrole: 'number',
            },
            bpAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'bp amp',
                subrole: 'number',
            },
            bpRemainWatth: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp remain watth',
                subrole: 'number',
            },
            bpBusVol: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp bus vol',
                subrole: 'number',
            },
            bpBusAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'bp bus amp',
                subrole: 'number',
            },
            bpDownLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp down limit soc',
                subrole: 'number',
            },
            bpUpLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp up limit soc',
                subrole: 'number',
            },
            bpBusVolFilter: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp bus vol filter',
                subrole: 'number',
            },
            bpModuleChgMaxPwr: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp module chg max pwr',
                subrole: 'number',
            },
            bpModuleDsgMaxPwr: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp module dsg max pwr',
                subrole: 'number',
            },
        },
        diagnostic: {
            bpRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp run sta',
                role: 'info',
                bpRunSta: { 0: 'OK?' },
            },
            bpModSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp mod sta',
                role: 'info',
                bpModSta: { 0: 'OK ? ' },
            },
            bpChgDsgStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp chg dsg stat',
                role: 'info',
                bpChgDsgStat: { 0: 'OK?' },
            },
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'err code',
                role: 'info',
                errCode: { 0: 'OK ? ' },
            },
            bpSpinSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp spin switch',
                role: 'info',
                bpSpinSwitch: { 0: 'OK?' },
            },
            bpAcRechargeFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp ac recharge flag',
                role: 'info',
                bpAcRechargeFlag: { 0: 'OK ? ' },
            },
            bpActiveCalReqStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp active cal req stat',
                role: 'info',
                bpActiveCalReqStat: { 0: 'OK?' },
            },
            bpActiveCalRunStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp active cal run stat',
                role: 'info',
                bpActiveCalRunStat: { 0: 'OK ? ' },
            },
            bpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp err code',
                role: 'info',
                bpErrCode: { 0: 'OK?' },
            },
            bpHeatFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp heat fault',
                role: 'info',
                bpHeatFault: { 0: 'OK ? ' },
            },
        },
        string: {
            bpTimestamp: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp timestamp', role: 'info' },
            bpIna228A: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp ina228 a',
                role: 'info',
            },
            bpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp sn',
                role: 'info',
            },
        },
    },
    bpInfo1: {
        number: {
            bpPwr: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp pwr',
                subrole: 'number',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp soc',
                subrole: 'number',
            },
            bpVol: {
                min: 0,
                max: 100,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp vol',
                subrole: 'number',
            },
            bpAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'bp amp',
                subrole: 'number',
            },
            bpRemainWatth: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp remain watth',
                subrole: 'number',
            },
            bpBusVol: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp bus vol',
                subrole: 'number',
            },
            bpBusAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'bp bus amp',
                subrole: 'number',
            },
            bpDownLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp down limit soc',
                subrole: 'number',
            },
            bpUpLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp up limit soc',
                subrole: 'number',
            },
            bpBusVolFilter: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp bus vol filter',
                subrole: 'number',
            },
            bpModuleChgMaxPwr: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp module chg max pwr',
                subrole: 'number',
            },
            bpModuleDsgMaxPwr: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp module dsg max pwr',
                subrole: 'number',
            },
        },
        diagnostic: {
            bpRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp run sta',
                role: 'info',
                bpRunSta: { 0: 'OK?' },
            },
            bpModSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp mod sta',
                role: 'info',
                bpModSta: { 0: 'OK ? ' },
            },
            bpChgDsgStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp chg dsg stat',
                role: 'info',
                bpChgDsgStat: { 0: 'OK?' },
            },
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'err code',
                role: 'info',
                errCode: { 0: 'OK ? ' },
            },
            bpSpinSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp spin switch',
                role: 'info',
                bpSpinSwitch: { 0: 'OK?' },
            },
            bpAcRechargeFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp ac recharge flag',
                role: 'info',
                bpAcRechargeFlag: { 0: 'OK ? ' },
            },
            bpActiveCalReqStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp active cal req stat',
                role: 'info',
                bpActiveCalReqStat: { 0: 'OK?' },
            },
            bpActiveCalRunStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp active cal run stat',
                role: 'info',
                bpActiveCalRunStat: { 0: 'OK ? ' },
            },
            bpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp err code',
                role: 'info',
                bpErrCode: { 0: 'OK?' },
            },
            bpHeatFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp heat fault',
                role: 'info',
                bpHeatFault: { 0: 'OK ? ' },
            },
        },
        string: {
            bpTimestamp: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp timestamp', role: 'info' },
            bpIna228A: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp ina228 a',
                role: 'info',
            },
            bpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp sn',
                role: 'info',
            },
        },
    },
    bpInfo2: {
        number: {
            bpPwr: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp pwr',
                subrole: 'number',
            },
            bpSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp soc',
                subrole: 'number',
            },
            bpVol: {
                min: 0,
                max: 100,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp vol',
                subrole: 'number',
            },
            bpAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'bp amp',
                subrole: 'number',
            },
            bpRemainWatth: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp remain watth',
                subrole: 'number',
            },
            bpBusVol: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp bus vol',
                subrole: 'number',
            },
            bpBusAmp: {
                min: 0,
                max: 100,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'bp bus amp',
                subrole: 'number',
            },
            bpDownLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp down limit soc',
                subrole: 'number',
            },
            bpUpLimitSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'bp up limit soc',
                subrole: 'number',
            },
            bpBusVolFilter: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'bp bus vol filter',
                subrole: 'number',
            },
            bpModuleChgMaxPwr: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp module chg max pwr',
                subrole: 'number',
            },
            bpModuleDsgMaxPwr: {
                min: 0,
                max: 10000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'bp module dsg max pwr',
                subrole: 'number',
            },
        },
        diagnostic: {
            bpRunSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp run sta',
                role: 'info',
                bpRunSta: { 0: 'OK?' },
            },
            bpModSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp mod sta',
                role: 'info',
                bpModSta: { 0: 'OK ? ' },
            },
            bpChgDsgStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp chg dsg stat',
                role: 'info',
                bpChgDsgStat: { 0: 'OK?' },
            },
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'err code',
                role: 'info',
                errCode: { 0: 'OK ? ' },
            },
            bpSpinSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp spin switch',
                role: 'info',
                bpSpinSwitch: { 0: 'OK?' },
            },
            bpAcRechargeFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp ac recharge flag',
                role: 'info',
                bpAcRechargeFlag: { 0: 'OK ? ' },
            },
            bpActiveCalReqStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp active cal req stat',
                role: 'info',
                bpActiveCalReqStat: { 0: 'OK?' },
            },
            bpActiveCalRunStat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp active cal run stat',
                role: 'info',
                bpActiveCalRunStat: { 0: 'OK ? ' },
            },
            bpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp err code',
                role: 'info',
                bpErrCode: { 0: 'OK?' },
            },
            bpHeatFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp heat fault',
                role: 'info',
                bpHeatFault: { 0: 'OK ? ' },
            },
        },
        string: {
            bpTimestamp: { entity_type: 'text', entity_category: 'diagnostic', name: 'bp timestamp', role: 'info' },
            bpIna228A: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp ina228 a',
                role: 'info',
            },
            bpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bp sn',
                role: 'info',
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
    poweroceanfit: {
        CloudBmsInfoReport: {
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpSoh: { entity: 'number' },
            bpSop: { entity: 'number' },
            bpTemp: { entity: 'array' },
            bpCellMaxVol: { entity: 'number' },
            bpCellMinVol: { entity: 'number' },
            bpRunSta: { entity: 'diagnostic' },
            bpVol: { entity: 'number' },
            bpAmp: { entity: 'number' },
            bpBusVol: { entity: 'number' },
            bpBusAmp: { entity: 'number' },
            bpErrCode: { entity: 'diagnostic' },
            bpCellVol: { entity: 'array' },
            bpDsrc: { entity: 'diagnostic' },
            bpSn: { entity: 'string' },
            bpCycles: { entity: 'string' },
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
        },
        EMSHeartbeatReport: {
            sysWorkSta: { entity: 'diagnostic' },
            bpChgDsgSta: { entity: 'diagnostic' },
            bpRemainWatth: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpDsgTime: { entity: 'number' },
            emsErrCode: { entity: 'diagnostic' },
            sysErrCode: { entity: 'diagnostic' },
            epoSwitchState: { entity: 'diagnostic' },
            currentNetif: { entity: 'diagnostic' },
            meterTotalPower: { entity: 'number' },
            meterAVoltage: { entity: 'number' },
            meterBVoltage: { entity: 'number' },
            meterCVoltage: { entity: 'number' },
            meterACurrent: { entity: 'number' },
            meterBCurrent: { entity: 'number' },
            meterCCurrent: { entity: 'number' },
            bp1SocCoefficient: { entity: 'number' },
            bp2SocCoefficient: { entity: 'number' },
            bp3SocCoefficient: { entity: 'number' },
            bpBusVoltCoefficient: { entity: 'number' },
            pvInDayEnergy: { entity: 'number' },
            bpInDayEnergy: { entity: 'number' },
            bpOutDayEnergy: { entity: 'number' },
            gridInDayEnergy: { entity: 'number' },
            gridOutDayEnergy: { entity: 'number' },
            loadDayEnergy: { entity: 'number' },
            meterType: { entity: 'diagnostic' },
            meterAddress: { entity: 'string' },
            emsSystemState: { entity: 'diagnostic' },
            appCtrlState: { entity: 'diagnostic' },
            reportCycleTime: { entity: 'string' },
            batterySocUpperLimit: { entity: 'number' },
            batterySocLowerLimit: { entity: 'number' },
            inverterBand: { entity: 'string' },
            mpptVoltageMaximum: { entity: 'number' },
            mpptVoltageMinimum: { entity: 'number' },
            mpptRatePower: { entity: 'number' },
            mpptWithstandVoltage: { entity: 'number' },
            pvInvWiringMode: { entity: 'diagnostic' },
            bpSocBaseCoefficient: { entity: 'number' },
            bpBusVoltageBaseCoefficient: { entity: 'number' },
            bpDichargeAbilityAdjustValueLv1: { entity: 'string' },
            bpDichargeAbilityAdjustValueLv2: { entity: 'string' },
            bpRunDelay: { entity: 'string' },
            bpStopDelay: { entity: 'string' },
            bpSaveSocStopDelay: { entity: 'string' },
            sysRunMeterTakePower: { entity: 'number' },
            sysRunMeterFeedPower: { entity: 'number' },
            disOrChargeAbilityStepValue: { entity: 'string' },
            workingMode: { entity: 'diagnostic' },
            gridFeedPowerMinimum: { entity: 'number' },
            gridFeedRate: { entity: 'number' },
            emsErrorCodeMask: { entity: 'diagnostic' },
            bpErrorCodeMask: { entity: 'diagnostic' },
            pv1ErrorCodeMask: { entity: 'diagnostic' },
            pv2ErrorCodeMask: { entity: 'diagnostic' },
            pvaErrorCodeMask: { entity: 'diagnostic' },
            pvWiringType: { entity: 'diagnostic' },
            invWiringType: { entity: 'diagnostic' },
            isPvToInvDirectly: { entity: 'diagnostic' },
            autoDetectStartPowerEn: { entity: 'diagnostic' },
            manualSetStartChargePower: { entity: 'number' },
            startDischargePower: { entity: 'number' },
            underVoltageProtectPoint: { entity: 'number' },
            meterRatio: { entity: 'array' },
            meterPhasePower: { entity: 'array' },
            meterPowerFactor: { entity: 'array' },
        },
        EnergyStreamItem: {
            gridPwr: { entity: 'number' },
            dcdcPwr: { entity: 'number' },
            bpPwr: { entity: 'number' },
            pvPwr: { entity: 'number' },
            timestamp: { entity: 'string' },
            timezone: { entity: 'number' },
            bpSoc: { entity: 'number' },
            loadPwr: { entity: 'number' },
            bpHeatingPower: { entity: 'number' },
            heatingPower: { entity: 'number' },
        },
        bpInfo0: {
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpRunSta: { entity: 'diagnostic' },
            bpVol: { entity: 'number' },
            bpAmp: { entity: 'number' },
            bpModSta: { entity: 'diagnostic' },
            bpRemainWatth: { entity: 'number' },
            bpChgDsgStat: { entity: 'diagnostic' },
            bpBusVol: { entity: 'number' },
            bpBusAmp: { entity: 'number' },
            errCode: { entity: 'diagnostic' },
            bpSpinSwitch: { entity: 'diagnostic' },
            bpTimestamp: { entity: 'string' },
            bpDownLimitSoc: { entity: 'number' },
            bpUpLimitSoc: { entity: 'number' },
            bpBusVolFilter: { entity: 'number' },
            bpAcRechargeFlag: { entity: 'diagnostic' },
            bpActiveCalReqStat: { entity: 'diagnostic' },
            bpActiveCalRunStat: { entity: 'diagnostic' },
            bpModuleChgMaxPwr: { entity: 'number' },
            bpModuleDsgMaxPwr: { entity: 'number' },
            bpErrCode: { entity: 'diagnostic' },
            bpHeatFault: { entity: 'diagnostic' },
            bpIna228A: { entity: 'string' },
            bpSn: { entity: 'string' },
        },
        bpInfo1: {
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpRunSta: { entity: 'diagnostic' },
            bpVol: { entity: 'number' },
            bpAmp: { entity: 'number' },
            bpModSta: { entity: 'diagnostic' },
            bpRemainWatth: { entity: 'number' },
            bpChgDsgStat: { entity: 'diagnostic' },
            bpBusVol: { entity: 'number' },
            bpBusAmp: { entity: 'number' },
            errCode: { entity: 'diagnostic' },
            bpSpinSwitch: { entity: 'diagnostic' },
            bpTimestamp: { entity: 'string' },
            bpDownLimitSoc: { entity: 'number' },
            bpUpLimitSoc: { entity: 'number' },
            bpBusVolFilter: { entity: 'number' },
            bpAcRechargeFlag: { entity: 'diagnostic' },
            bpActiveCalReqStat: { entity: 'diagnostic' },
            bpActiveCalRunStat: { entity: 'diagnostic' },
            bpModuleChgMaxPwr: { entity: 'number' },
            bpModuleDsgMaxPwr: { entity: 'number' },
            bpErrCode: { entity: 'diagnostic' },
            bpHeatFault: { entity: 'diagnostic' },
            bpIna228A: { entity: 'string' },
            bpSn: { entity: 'string' },
        },
        bpInfo2: {
            bpPwr: { entity: 'number' },
            bpSoc: { entity: 'number' },
            bpRunSta: { entity: 'diagnostic' },
            bpVol: { entity: 'number' },
            bpAmp: { entity: 'number' },
            bpModSta: { entity: 'diagnostic' },
            bpRemainWatth: { entity: 'number' },
            bpChgDsgStat: { entity: 'diagnostic' },
            bpBusVol: { entity: 'number' },
            bpBusAmp: { entity: 'number' },
            errCode: { entity: 'diagnostic' },
            bpSpinSwitch: { entity: 'diagnostic' },
            bpTimestamp: { entity: 'string' },
            bpDownLimitSoc: { entity: 'number' },
            bpUpLimitSoc: { entity: 'number' },
            bpBusVolFilter: { entity: 'number' },
            bpAcRechargeFlag: { entity: 'diagnostic' },
            bpActiveCalReqStat: { entity: 'diagnostic' },
            bpActiveCalRunStat: { entity: 'diagnostic' },
            bpModuleChgMaxPwr: { entity: 'number' },
            bpModuleDsgMaxPwr: { entity: 'number' },
            bpErrCode: { entity: 'diagnostic' },
            bpHeatFault: { entity: 'diagnostic' },
            bpIna228A: { entity: 'string' },
            bpSn: { entity: 'string' },
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

const deviceCmd = {
    poweroceanfit: {
        action: {
            latestQuotas: {
                operateType: 'latestQuotas',
                params: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } },
            },
        },
    },
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
 * @param {object} payload - payload of MQTT telegram
 * @param {string} devtype - device type
 * @param {boolean} haenable -if HA is enabled
 * @param {boolean} logged - if logged
 */
async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged) {
    let haUpdate = [];
    if (payload) {
        if (stateDictObj) {
            if (stateObj) {
                for (let channel in payload) {
                    //other incomming data is ignored
                    switch (channel) {
                        case 'EMSHeartbeatReport':
                        case 'EnergyStreamItem':
                        case 'CloudBmsInfoReport':
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
                        case 'BPChangeReport':
                            await setOnlineStatus(adapter, topic);
                            for (let i = 0; i < payload[channel]['bpInfo'].length; i++) {
                                for (let state in payload[channel]['bpInfo'][i]) {
                                    let val;
                                    let haupd;
                                    val = payload[channel]['bpInfo'][i][state];
                                    haupd = await compareUpdate(
                                        adapter,
                                        stateDictObj,
                                        stateObj,
                                        haenable,
                                        topic,
                                        `bpInfo${i}`,
                                        state,
                                        val,
                                        `bpInfo${i}`,
                                        logged,
                                    );
                                    if (Object.keys(haupd).length !== 0) {
                                        haUpdate.push(haupd);
                                    }
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

const protoMsg = {
    cmdId: {
        136: { cmdFunc: { 96: 'EcologyDevRemoteBindListGet' } },
        127: { cmdFunc: { 96: 'EmsAllTimerTaskGet' } },
        113: { cmdFunc: { 53: 'ModuleClusterInfo' } }, //cmd // ??? IOT_CMD_ID_MODULE_INFO
        112: { cmdFunc: { 96: 'SysBatChgDsgSet' } },
        111: { cmdFunc: { 96: 'CloudBmsInfoReport' } }, //BMS_CLOUD_HEARTBEAT_REPORT DC303
        110: { cmdFunc: { 96: 'DcStaReport2' } }, // DCDC_OPERATION_DATA_REPORT DC303
        109: { cmdFunc: { 96: 'DcChangeReport' } }, //DCDC_CHANGE_REPORT DC303
        108: { cmdFunc: { 96: 'BPChangeReport' } }, //DC303
        107: { cmdFunc: { 96: 'EMSGetConfigCmd' } }, // DC303 GET_CONFIG
        106: { cmdFunc: { 96: 'EMSSetConfigCmd' } },
        97: { cmdFunc: { 96: 'EnergyStreamSwitch' } },
        34: { cmdFunc: { 96: 'EnergyStreamDetail' } }, //
        33: { cmdFunc: { 96: 'EnergyStreamItem' } },
        32: { cmdFunc: { 254: 'EnergyTotalReport' } }, // ENERGY_STREAM_TOTAL
        10: { cmdFunc: { 96: 'EmsAllTimerTaskReport' } },
        3: { cmdFunc: { 96: 'ErrorChangeReport' } },
        1: { cmdFunc: { 96: 'EMSHeartbeatReport' } },
    },
};
/*
const poweroceanfit = {
  cmdFunc: {
    53: { cmdId: { 113: "ModuleClusterInfo" } },
    96: {
      cmdId: {
        1: "EMSHeartbeatReport",
        3: "ErrorChangeReport",
        10: "EmsAllTimerTaskReport",
        33: "EnergyStreamItem",
        34: "EnergyStreamDetail",
        97: "EnergyStreamSwitch",
        106: "EMSSetConfigCmd",
        107: "EMSGetConfigCmd",
        108: "BPChangeReport",
        109: "DcChangeReport",
        110: "DcStaReport2",
        111: "CloudBmsInfoReport",
        112: "SysBatChgDsgSet",
        127: "EmsAllTimerTaskGet",
        136: "EcologyDevRemoteBindListGet",
      },
    },
    254: { cmdId: { 32: "EnergyTotalReport" } },
  },
},
*/

const msgNameObj = {
    EMSHeartbeatReport: { cmdId: 1, cmdFunc: 96 },
    ErrorChangeReport: { cmdId: 3, cmdFunc: 96 },
    EmsAllTimerTaskReport: { cmdId: 10, cmdFunc: 96 },
    EnergyStreamItem: { cmdId: 33, cmdFunc: 96 },
    EnergyStreamDetail: { cmdId: 34, cmdFunc: 96 },
    BPChangeReport: { cmdId: 108, cmdFunc: 96 },
    DcChangeReport: { cmdId: 109, cmdFunc: 96 },
    DcStaReport2: { cmdId: 110, cmdFunc: 96 },
    CloudBmsInfoReport: { cmdId: 111, cmdFunc: 96 },
};
const protoSource = `
syntax = "proto3";

message EnergyItem {
  optional uint32 timestamp = 1;
  optional uint32 watth_type = 2;
  repeated uint32 watth = 3;
}

message EnergyTotalReport {
  optional uint32 watth_seq = 1;
  optional .EnergyItem watth_item = 2;
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
  repeated .ModuleInfo modules = 1;
  optional uint32 total_page = 2;
  optional uint32 page = 3;
}


message ErrorCode {
  optional string module_sn = 1;
  repeated uint32 err_code = 2;
  repeated uint32 error_state = 3; //bool
}

message ErrorChangeReport {
  optional .ErrorCode ems_err_code = 1;
  optional .ErrorCode pcs_err_code = 2;
  repeated .ErrorCode bp_err_code = 3;
}

message EnergyStreamDetail {
  repeated .EnergyStreamItem sys_energy_stream = 1;
  optional uint32 sys_seq = 2;
}

message EnergyStreamDetailAck {
  optional uint32 sys_seq = 1;
}

message EnergyStreamSwitch {
  optional uint32 ems_open_energy_stream = 1; //bool
  optional uint32 need_push_immediately = 2; //bool
}

message EnergyStreamItem {
  optional float grid_pwr = 1;
  optional float dcdc_pwr = 2;
  optional float bp_pwr = 3;
  optional float pv_pwr = 4;
  optional uint32 timestamp = 5;
  optional sint32 timezone = 6;
  optional uint32 bp_soc = 7;
  optional float load_pwr = 8;
  optional float bp_heating_power = 9;
  optional float heating_power = 10;
}


message EcologyDevRemoteBindListGet {
  optional uint32 product_detail = 1;
}

enum SysRunStaDef {
  RUNSTA_STANDBY = 0;
  RUNSTA_RUN = 1;
  RUNSTA_STOP = 2;
}

enum BpModelStaDef {
  MOD_STA_NORMAL = 0;
  MOD_STA_WARNNING = 1;
  MOD_STA_FAULT = 2;
}

message BPReport {
  optional float bp_pwr = 1;
  optional float bp_soc = 2;
  optional .SysRunStaDef bp_run_sta = 3;
  optional float bp_vol = 4;
  optional float bp_amp = 5;
  optional .BpModelStaDef bp_mod_sta = 6;
  optional float bp_remain_watth = 7;
  optional uint32 bp_chg_dsg_stat = 8;
  optional float bp_bus_vol = 9;
  optional float bp_bus_amp = 10;
  repeated uint32 err_code = 11;
  optional uint32 bp_spin_switch = 12; //bool
  optional uint32 bp_timestamp = 13;
  optional float bp_down_limit_soc = 14;
  optional float bp_up_limit_soc = 15;
  optional float bp_bus_vol_filter = 16;
  optional uint32 bp_ac_recharge_flag = 17; //bool
  optional uint32 bp_active_cal_req_stat = 18;
  optional uint32 bp_active_cal_run_stat = 19;
  optional float bp_module_chg_max_pwr = 20;
  optional float bp_module_dsg_max_pwr = 21;
  optional uint32 bp_err_code = 22;
  optional uint32 bp_heat_fault = 23; //bool
  optional float bp_ina228_a = 24;
  optional string bp_sn = 25;
}

message BPChangeReport {
  repeated .BPReport bp_info = 1;
}



message DcChangeReport {
  optional .SysRunStaDef pv1_work_state = 1;
  optional float pv1_board_voltage = 2;
  optional float pv1_board_current = 3;
  optional float inv1_port_voltage = 4;
  optional float dc1_port_voltage = 5;
  optional float dc1_port_current = 6;
  optional float bat1_port_voltage = 7;
  optional float bat1_port_current = 8;
  optional .SysRunStaDef pv2_work_state = 9;
  optional float pv2_board_voltage = 10;
  optional float pv2_board_current = 11;
  optional float inv2_port_voltage = 12;
  optional float dc2_port_voltage = 13;
  optional float dc2_port_current = 14;
  optional float bat2_port_voltage = 15;
  optional float bat2_port_current = 16;
  optional uint32 dc_error_code_min = 17;
  optional uint32 pv1_dc_error_code = 18;
  optional uint32 pv2_dc_error_code = 19;
  optional uint32 pva_dc_error_code = 20;
  optional float bp_bus_volt_set = 21;
  optional float environment_temp = 22;
  optional float boost1_temp = 23;
  optional float boost2_temp = 24;
  optional float llc_temp = 25;
}

message DcStaReport2 {
  optional float pv1_i_in = 1;
  optional float pv1_vol_inv = 2;
  optional float pv1_bus1_vol = 3;
  optional float pv2_i_in = 4;
  optional float pv2_vol_inv = 5;
  optional float bat2_vol = 6;
  optional float v_1d65 = 7;
  optional float ntc_boost1_temp = 8;
  optional float ntc_llc_temp = 9;
  optional float ntc_pv2_temp = 10;
  optional float ntc_air_temp = 11;
  optional float bat_viso_vol = 12;
  optional float adc_editon = 13;
  optional float f32chg_volt_ref = 14;
  optional float f32chg_vol_out = 15;
  optional float f32chg_curr_ref = 16;
  optional float f32chg_curr_out = 17;
  optional float f32llc_vol_pwm = 18;
  optional float f32llc_cur_pwm = 19;
  optional float f32llc_pwm = 20;
  optional float u32llc_pwm_frq = 21;
  optional uint32 llc_chg_state = 22;
  optional float f32pfm_vol_tag = 23;
  optional float f32pfm_vol_out = 24;
  optional float f32pfm_pwm_per = 25;
  optional float u32pfm_freq = 26;
  optional float pv1_vol_pid_r_tag = 27;
  optional float pv1_vol_pid_r_cur = 28;
  optional float pv1_cur_pid_r_tag = 29;
  optional float pv1_cur_pid_r_cur = 30;
  optional uint32 pv1_test_pwm1 = 31;
  optional float pv2_vol_pid_r_tag = 32;
  optional float pv2_vol_pid_r_cur = 33;
  optional float pv2_cur_pid_r_tag = 34;
  optional float pv2_cur_pid_r_cur = 35;
  optional uint32 pv2_test_pwm2 = 36;
  optional float chg1_temp = 37;
  optional float chg2_temp = 38;
  optional uint32 pv1_fsm_id_dcdc_state = 39;
  optional uint32 pv2_fsm_id_dcdc_state = 40;
  optional uint32 dis_sta_now = 41;
  optional float f32chg_pwr_tag = 42;
  optional float pwr_tag_chg = 43;
  optional float rec_pv1_alloc_dsg_pwr = 44;
  optional float rec_pv2_alloc_dsg_pwr = 45;
  optional float pv1_dsg_tag = 46;
  optional float pv2_dsg_tag = 47;
  optional float meter_current_power = 48;
  optional float pv1_simu_action = 49;
  optional float pv2_simu_action = 50;
  optional float pv2dsg_vol_mid_tag = 51;
  optional float pv1_dsg_vol_mid_tag = 52;
  optional float iso_check_pos_res = 53;
  optional float iso_check_neg_res = 54;
  optional uint32 iso_check_finish_flg = 55;
}

enum BmsRunStaDef {
  PB_BMS_STATE_SHUTDOWN = 0;
  PB_BMS_STATE_NORMAL = 1;
  PB_BMS_STATE_CHARGEABLE = 2;
  PB_BMS_STATE_DISCHARGEABLE = 3;
  PB_BMS_STATE_FAULT = 4;
}

enum BmsChgDsgSta {
  PB_STANDBY_STATE = 0;
  PB_DSG_STATE = 1;
  PB_CHG_STATE = 2;
}

enum DabModelStaDef {
  PB_MOD_STA_NORMAL = 0;
  PB_MOD_STA_WARNNING = 1;
  PB_MOD_STA_FAULT = 2;
}

enum BmsHeatingExitEvent {
  PB_PTC_OT_STATE = 0;
}

message CloudBmsInfoReport {
  optional float bp_pwr = 1;
  optional uint32 bp_soc = 2;
  optional uint32 bp_soh = 3;
  optional uint32 bp_sop = 4;
  repeated float bp_temp = 5;
  optional float bp_cell_max_vol = 6;
  optional float bp_cell_min_vol = 7;
  optional .SysRunStaDef bp_run_sta = 8;
  optional float bp_vol = 9;
  optional float bp_amp = 10;
  optional float bp_bus_vol = 11;
  optional float bp_bus_amp = 12;
  optional uint32 bp_err_code = 13;
  repeated float bp_cell_vol = 14;
  optional uint32 bp_dsrc = 15;
  optional string bp_sn = 16;
  optional uint32 bp_cycles = 17;
  optional uint32 bp_balance_state = 18;
  optional float bp_hv_mos_temp = 19;
  optional float bp_lv_mos_temp = 20;
  optional float bp_ptc_temp = 21;
  optional float bp_hts_temp = 22;
  optional float bp_bus_neg_temp = 23;
  optional float bp_bus_pos_temp = 24;
  optional float bp_env_temp = 25;
  optional uint32 bp_accu_chg_cap = 26;
  optional uint32 bp_accu_dsg_cap = 27;
  optional uint32 bp_design_cap = 28;
  optional uint32 bp_full_cap = 29;
  optional float bp_max_cell_temp = 30;
  optional float bp_min_cell_temp = 31;
  optional float bp_max_mos_temp = 32;
  optional float bp_min_mos_temp = 33;
  optional uint32 bp_bms_fault = 34;
  optional uint32 bp_eclound_soc = 35;
  optional uint32 bp_heartbeat_ver = 36;
  optional uint32 bp_timestamp = 37;
  optional float bp_real_soc = 38;
  optional float bp_real_soh = 39;
  optional uint32 bp_global_protect = 40;
  optional uint32 bp_down_limit_soc = 41;
  optional uint32 bp_up_limit_soc = 42;
  optional uint32 bp_active_cal_req_stat = 43;
  optional uint32 bp_active_cal_run_stat = 44;
  optional uint32 module_product_info = 45;
  optional uint32 module_program_sta = 46;
  optional uint32 module_apl_sw_ver = 47;
  optional uint32 module_loader_sw_ver = 48;
  optional .BmsRunStaDef bms_run_sta = 49;
  optional .BmsChgDsgSta bms_chg_dsg_sta = 50;
  optional .DabModelStaDef dab_mod_sta = 51;
  optional uint32 bp_chg_sop = 52;
  optional uint32 bp_dsg_sop = 53;
  optional float bp_remain_watth = 54;
  optional float bp_target_soc = 55;
  optional float bp_diff_soc = 56;
  optional float bp_max_soc = 57;
  optional float bp_min_soc = 58;
  optional float bp_limit_soc = 59;
  optional float bp_calendar_soh = 60;
  optional float bp_cycle_soh = 61;
  optional uint32 bp_ac_recharge_flag = 62; //bool
  optional uint32 bp_ptc_heat_flag = 63; //bool
  optional .BmsHeatingExitEvent bp_ptc_exit_event = 64;
}

enum NetworkType {
  NETIF_WIFI_STA = 0;
  NETIF_4G_MODEM = 1;
  NETIF_WAN = 2;
  NETIF_NONE = 3;
}

message EMSHeartbeatReport {
  optional uint32 sys_work_sta = 1;
  optional uint32 bp_chg_dsg_sta = 2;
  optional float bp_remain_watth = 3;
  optional uint32 bp_soc = 4;
  optional uint32 bp_dsg_time = 5;
  optional uint32 ems_err_code = 6;
  optional uint32 sys_err_code = 7;
  optional uint32 epo_switch_state = 8;
  optional uint32 sys_rate_ctrl_time = 9;
  optional .NetworkType current_netif = 10;
  repeated uint32 err_code = 11;
  optional float meter_total_power = 12;
  optional float meter_a_voltage = 13;
  optional float meter_b_voltage = 14;
  optional float meter_c_voltage = 15;
  optional float meter_a_current = 16;
  optional float meter_b_current = 17;
  optional float meter_c_current = 18;
  optional float bp1_soc_coefficient = 19;
  optional float bp2_soc_coefficient = 20;
  optional float bp3_soc_coefficient = 21;
  optional float bp_bus_volt_coefficient = 22;
  optional float pv_in_day_energy = 23;
  optional float bp_in_day_energy = 24;
  optional float bp_out_day_energy = 25;
  optional float grid_in_day_energy = 26;
  optional float grid_out_day_energy = 27;
  optional float load_day_energy = 28;
  optional uint32 meter_type = 29;
  optional uint32 meter_address = 30;
  optional uint32 ems_system_state = 31;
  optional uint32 app_ctrl_state = 32;
  optional uint32 report_cycle_time = 33;
  optional uint32 battery_soc_upper_limit = 34;
  optional uint32 battery_soc_lower_limit = 35;
  optional uint32 inverter_band = 36;
  optional float mppt_voltage_maximum = 37;
  optional float mppt_voltage_minimum = 38;
  optional float mppt_rate_power = 39;
  optional float mppt_withstand_voltage = 40;
  optional uint32 pv_inv_wiring_mode = 41;
  optional float bp_soc_base_coefficient = 42;
  optional float bp_bus_voltage_base_coefficient = 43;
  optional float bp_dicharge_ability_adjust_value_lv1 = 44;
  optional float bp_dicharge_ability_adjust_value_lv2 = 45;
  optional uint32 bp_run_delay = 46;
  optional uint32 bp_stop_delay = 47;
  optional uint32 bp_save_soc_stop_delay = 48;
  optional float sys_run_meter_take_power = 49;
  optional float sys_run_meter_feed_power = 50;
  optional float dis_or_charge_ability_step_value = 51;
  optional uint32 working_mode = 52;
  optional float grid_feed_power_minimum = 53;
  optional float grid_feed_rate = 54;
  optional uint32 ems_error_code_mask = 55;
  optional uint32 bp_error_code_mask = 56;
  optional uint32 pv1_error_code_mask = 57;
  optional uint32 pv2_error_code_mask = 58;
  optional uint32 pva_error_code_mask = 59;
  optional uint32 pvWiringType = 60;
  optional uint32 invWiringType = 61;
  optional uint32 isPvToInvDirectly = 62; //bool
  optional uint32 auto_detect_start_power_en = 63; //bool
  optional float manual_set_start_charge_power = 64;
  optional float start_discharge_power = 65;
  optional float under_voltage_protect_point = 66;
  repeated float meter_ratio = 67;
  repeated float meter_phase_power = 68;
  repeated float meter_power_factor = 69;
  optional uint32 app_config_finish = 70;
}

message EMSGetConfigCmd {
  optional bool has_appCtrlState = 1; //bool
  optional bool has_sys_rate_ctrl_time = 2; //bool
  optional bool has_mppt_volt_max = 3; //bool
  optional bool has_mppt_volt_min = 4; //bool
  optional bool has_mppt_rate_power = 5; //bool
  optional bool has_mppt_withstand_voltage = 6; //bool
  optional bool has_pv_inv_wiring_mode = 7; //bool
  optional bool has_inv_brand = 8; //bool
  optional bool has_meter_type = 9; //bool
  optional bool has_pvWiringType = 10; //bool
  optional bool has_invWiringType = 11; //bool
  optional bool has_isPvToInvDirectly = 12; //bool
  optional bool has_auto_detect_start_charge_power_en = 13; //bool
  optional bool has_manual_set_start_charge_power = 14; //bool
  optional bool has_start_discharge_power = 15; //bool
  optional bool has_app_config_finish = 16; //bool
}


message EMSSetConfigCmd {
  optional uint32 appCtrlState = 1;
  optional uint32 sys_rate_ctrl_time = 2;
  optional float mppt_volt_max = 3;
  optional float mppt_volt_min = 4;
  optional float mppt_rate_power = 5;
  optional float mppt_withstand_voltage = 6;
  optional uint32 pv_inv_wiring_mode = 7;
  optional uint32 inv_brand = 8;
  optional uint32 meter_type = 9;
  optional uint32 pvWiringType = 10;
  optional uint32 invWiringType = 11;
  optional uint32 isPvToInvDirectly = 12; //bool
  optional uint32 auto_detect_start_charge_power_en = 13; //bool
  optional float manual_set_start_charge_power = 14;
  optional float start_discharge_power = 15;
  optional uint32 app_config_finish = 16;
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

`;

module.exports = {
    deviceStates,
    deviceStatesDict,
    deviceCmd,
    protoMsg,
    protoSource,
    storeProtoPayload,
    prepareProtoCmd,
    msgNameObj,
};
