const deviceStates = {
    RuntimePropertyUpload: {
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
            },
            plugInInfoAcOutVol: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info ac out vol',
                subrole: 'number',
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
                subrole: 'number',
            },
            plugInInfoBmsVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info main battery vol',
                subrole: 'number',
            },
            plugInInfoAcInAmp: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info ac in amp',
                subrole: 'number',
            },
            plugInInfoAcOutAmp: {
                min: 0,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info ac out amp',
                subrole: 'number',
            },
            bmsBattVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'main battery batt vol',
                subrole: 'number',
            },
            bmsBattAmp: {
                min: -80,
                max: 80,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'main battery batt amp',
                subrole: 'number',
            },
            bmsFullCap: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'main battery full cap',
                subrole: 'number',
            },
            bmsRemainCap: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'main battery remain cap',
                subrole: 'number',
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
                subrole: 'number',
            },
            bmsMaxCellVol: {
                min: 0,
                max: 5,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'main battery max cell vol',
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
            },
            cmsChgReqAmp: {
                min: 0,
                max: 60,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'cms chg req amp',
                subrole: 'number',
            },
            runtimePropertyFullUploadPeriod: {
                min: 0,
                unit_of_measurement: 's',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'runtime property full upload period',
                subrole: 'number',
            },
            runtimePropertyIncrementalUploadPeriod: {
                min: 0,
                unit_of_measurement: 's',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'runtime property incremental upload period',
                subrole: 'number',
            },
            tempPv: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'temp pv',
                subrole: 'number',
            },
            plugInInfoPvVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv vol',
                subrole: 'number',
            },
            plugInInfoPvAmp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv amp',
                subrole: 'number',
            },
            plugInInfoDcpVol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info dcp vol',
                subrole: 'number',
            },
            plugInInfoDcpAmp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info dcp amp',
                subrole: 'number',
            },
        },
        diagnostic: {
            plugInInfoAcOutType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info ac out type',
                role: 'info',
                plugInInfoAcOutType: { 0: 'OK?' },
            },
            bmsBalState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery bal state',
                role: 'info',
                bmsBalState: { 0: 'OK?' },
            },
            bmsAlmState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery alm state',
                role: 'info',
                bmsAlmState: { 0: 'OK?' },
            },
            bmsProState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery pro state',
                role: 'info',
                bmsProState: { 0: 'OK?' },
            },
            bmsFltState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery flt state',
                role: 'info',
                bmsFltState: { 0: 'OK?' },
            },
            bmsAlmState_2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery alm state_2',
                role: 'info',
                bmsAlmState_2: { 0: 'OK?' },
            },
            bmsProState_2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery pro state_2',
                role: 'info',
                bmsProState_2: { 0: 'OK?' },
            },
        },
        string: {
            pdBmsCommErr: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pd main battery comm err',
                role: 'info',
            },
            pdIotCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd iot comm err', role: 'info' },
            pdFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd firm ver', role: 'info' },
            iotFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'iot firm ver', role: 'info' },
            bmsFirmVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery firm ver',
                role: 'info',
            },
            bmsErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery err code',
                role: 'info',
            },
            displayPropertyFullUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'display property full upload period',
                role: 'info',
            },
            displayPropertyIncrementalUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'display property incremental upload period',
                role: 'info',
            },
            pdDcdcCommErr: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pd dcdc comm err',
                role: 'info',
            },
            pdInvCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd inv comm err', role: 'info' },
            dcdcFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'dcdc firm ver', role: 'info' },
            invFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'inv firm ver', role: 'info' },
        },
        icon: {
            bmsOverloadIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery overload icon',
                role: 'info',
                bmsOverloadIcon: { 0: 'OK?' },
            },
            bmsWarnIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery warn icon',
                role: 'info',
                bmsWarnIcon: { 0: 'OK?' },
            },
            bmsHighTempIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'main batterys high temp icon',
                bmsHighTempIcon: { 0: 'OK?' },
            },
            bmsLowTempIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'main battery low temp icon',
                bmsLowTempIcon: { 0: 'OK?' },
            },
            bmsLimitIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery limit icon',
                role: 'info',
                bmsLimitIcon: { 0: 'OK?' },
            },
        },
    },
    DisplayPropertyUpload: {
        array: {
            timeTaskCurrent: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'time task current',
            },
            energyStrategyOperateMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Energy Strategy Operate Mode',
                // 1: 'self_powered_open', 2: 'scheduled_open', 3: 'tou_mode_open'
            },
        },
        string: {
            errcode: { entity_type: 'text', entity_category: 'diagnostic', name: 'errcode', role: 'info' },
            pcsFanLevel: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs fan level', role: 'info' },
            pvDcChgSettingList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pv dc chg setting list',
                role: 'info',
            },
            utcTimezoneId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc timezone id',
                role: 'info',
            },
            plugInInfoPvChgMaxList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv chg max list',
                role: 'info',
            },
            bmsErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery err code',
                role: 'info',
            },
            wirelessCoordinateDevList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wireless coordinate dev list',
                role: 'info',
            },
            wirelessOilSelfStart: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wireless oil self start',
                role: 'info',
            },
            bypassOutDisable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bypass out disable',
                role: 'info',
            },
            pdErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd err code', role: 'info' },
            plugInInfoDcpDetail: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp detail',
                role: 'info',
            },
            plugInInfoDcpResv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp resv',
                role: 'info',
            },
            plugInInfoDcpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp sn',
                role: 'info',
            },
            plugInInfoDcpFirmVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp firm ver',
                role: 'info',
            },
            dcdcErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'dcdc err code', role: 'info' },
            plugInInfoDcpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp err code',
                role: 'info',
            },
            invErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'inv err code', role: 'info' },
            selfPoweredConflictFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Self Powered Conflict Flag',
                role: 'info',
            },
            touModeConflictFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'TOU Mode Conflict Flag',
                role: 'info',
            },
        },
        number: {
            backupReverseSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'Backup Reverse Soc',
                subrole: 'number',
            },
            powInSumW: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Total input power',
                subrole: 'number',
            },
            powOutSumW: {
                min: 0,
                max: 1200,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Total output power',
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
            },
            powGet_12v: {
                min: 0,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Real-time 12V power',
                subrole: 'number',
            },
            powGetAc: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Real-time AC power',
                subrole: 'number',
            },
            powGetAcIn: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Real-time AC input power',
                subrole: 'number',
            },
            plugInInfoAcInFeq: {
                min: 49,
                max: 61,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'AC input frequency',
                subrole: 'number',
            },
            utcTimezone: {
                min: -1200,
                max: 1200,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'utc timezone',
                subrole: 'number',
            },
            wirelessOilOnSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'wireless oil on soc',
                subrole: 'number',
            },
            wirelessOilOffSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'wireless oil off soc',
                subrole: 'number',
            },
            powGetBms: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get bms',
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
            },
            bmsDesignCap: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'Battery capacity',
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
            },
            bmsMinMosTemp: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'main battery min mos temp',
                subrole: 'number',
            },
            bmsMaxMosTemp: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'main battery max mos temp',
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
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
                subrole: 'number',
            },
            timeTaskChangeCnt: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'time task change cnt',
                subrole: 'number',
            },
            powGetDc: {
                min: 0,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get dc',
                subrole: 'number',
            },
            plugInInfoPvDcAmpMax: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv dc amp max',
                subrole: 'number',
            },
            powGetPv: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv',
                subrole: 'number',
            },
            plugInInfoPvChgAmpMax: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv chg amp max',
                subrole: 'number',
            },
            plugInInfoPvChgVolMax: {
                min: 0,
                max: 61,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv chg vol max',
                subrole: 'number',
            },
            powGetAcOut: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get ac out',
                subrole: 'number',
            },
            powGetDcp: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get dcp',
                subrole: 'number',
            },
            cmsBattPowOutMax: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'cms batt pow out max',
                subrole: 'number',
            },
            cmsBattPowInMax: {
                min: 0,
                max: 4000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'cms batt pow in max',
                subrole: 'number',
            },
            cmsBattFullEnergy: {
                min: 0,
                max: 1024,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'cms batt full energy',
                subrole: 'number',
            },
            stormPatternEndTime: {
                min: 0,
                max: 60,
                unit_of_measurement: 'h',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'storm pattern end time',
                subrole: 'number',
            },
        },
        level: {
            lcdLight: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 0.390625,
                step: 1,
                entity_type: 'number',
                //device_class: 'brightness',
                name: 'Screen brightness',
                role: 'level',
                subrole: 'number',
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
                select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr'],
                select_obj: {
                    Never: 0,
                    '30 min': 30,
                    '1 hr': 60,
                    '2 hr': 120,
                    '4 hr': 240,
                    '6 hr': 360,
                    '12 hr': 720,
                    '24 hr': 1440,
                },
                states: {
                    0: 'Never',
                    30: '30 min',
                    60: '1 hr',
                    120: '2 hr',
                    240: '4 hr',
                    360: '6 hr',
                    720: '12 hr',
                    1440: '24 hr',
                },
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
                select: ['Never', '10 s', '30 s', '1 min', '5 min', '30 min'],
                select_obj: { Never: 0, '10 s': 10, '30 s': 30, '1 min': 60, '5 min': 300, '30 min': 1800 },
                states: { 0: 'Never', 10: '10 s', 30: '30 s', 60: '1 min', 300: '5 min', 1800: '30 min' },
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
                select: ['Never', '30 min', '1 hr', '2 hr', '6 hr', '12 hr', '24 hr'],
                select_obj: {
                    Never: 0,
                    '30 min': 30,
                    '1 hr': 60,
                    '2 hr': 120,
                    '6 hr': 360,
                    '12 hr': 720,
                    '24 hr': 1440,
                },
                states: {
                    0: 'Never',
                    30: '30 min',
                    60: '1 hr',
                    120: '2 hr',
                    360: '6 hr',
                    720: '12 hr',
                    1440: '24 hr',
                },
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
                select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr'],
                select_obj: {
                    Never: 0,
                    '30 min': 30,
                    '1 hr': 60,
                    '2 hr': 120,
                    '4 hr': 240,
                    '6 hr': 360,
                    '12 hr': 720,
                    '24 hr': 1440,
                },
                states: {
                    0: 'Never',
                    30: '30 min',
                    60: '1 hr',
                    120: '2 hr',
                    240: '4 hr',
                    360: '6 hr',
                    720: '12 hr',
                    1440: '24 hr',
                },
            },
            plugInInfoAcInChgPowMax: {
                min: 100,
                max: 1500,
                unit_of_measurement: 'W',
                mult: 1,
                step: 100,
                entity_type: 'number',
                device_class: 'power',
                name: 'Maximum AC input power for charging',
                role: 'level',
            },
            plugInInfoAcInChgMode: {
                min: 0,
                max: 2,
                mult: 1,
                step: 1,
                unit_of_measurement: '',
                entity_type: 'select',
                name: 'plug in info ac in chg mode',
                role: 'level',
                select: ['user defined', 'battery optimum', 'silence'],
                select_obj: {
                    'user defined': 0,
                    'battery optimum': 1,
                    silence: 2,
                },
                states: {
                    0: 'user defined',
                    1: 'battery optimum',
                    2: 'silence',
                },
            },
            cmsMaxChgSoc: {
                min: 50,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'Charge limit',
                role: 'level',
            },
            cmsMinDsgSoc: {
                min: 0,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'Discharge limit',
                role: 'level',
            },
            cmsOilOnSoc: {
                min: 10,
                max: 30,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'SOC for automatically starting the Smart Generator',
                role: 'level',
            },
            cmsOilOffSoc: {
                min: 50,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'SOC for automatically stopping the Smart Generator',
                role: 'level',
            },
        },
        diagnostic: {
            energyBackupEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Backup reserve function switch',
                energyBackupEn: { 0: 'off', 1: 'on' },
            },
            flowInfoQcusb1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'USB output port 1 switch status',
                role: 'info',
                flowInfoQcusb1: { 0: 'off', 2: 'on' },
            },
            flowInfoQcusb2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'USB output port 2 switch status',
                role: 'info',
                flowInfoQcusb2: { 0: 'off', 2: 'on' },
            },
            flowInfoTypec1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Type-C port 1 switch status',
                role: 'info',
                flowInfoTypec1: { 0: 'off', 2: 'on' },
            },
            flowInfoTypec2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Type-C port 2 switch status',
                role: 'info',
                flowInfoTypec2: { 0: 'off', 2: 'on' },
            },
            acAlwaysOnFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ac always on flag',
                role: 'info',
                acAlwaysOnFlag: { 0: 'OK?' },
            },
            flowInfo_12v: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info_12v',
                role: 'info',
                flowInfo_12v: { 0: 'off', 2: 'on' },
            },
            flowInfoAc2dc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info ac2dc',
                role: 'info',
                flowInfoAc2dc: { 0: 'off', 2: 'on' },
            },
            flowInfoDc2ac: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info dc2ac',
                role: 'info',
                flowInfoDc2ac: { 0: 'off', 2: 'on' },
            },
            flowInfoAcIn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'AC input switch status',
                role: 'info',
                flowInfoAcIn: { 0: 'off', 2: 'on' },
            },
            plugInInfoAcInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Indicates whether the AC charging port is connected',
                role: 'info',
                plugInInfoAcInFlag: { 0: 'disconnected', 1: 'connected' },
            },
            utcSetMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc set mode',
                role: 'info',
                utcSetMode: { 0: 'OK?' },
            },
            outputPowerOffMemory: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'output power off memory',
                outputPowerOffMemory: { 0: 'OFF?', 1: 'ON?' },
            },
            flowInfoBmsDsg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info main battery dsg',
                role: 'info',
                flowInfoBmsDsg: { 0: 'off', 2: 'on' },
            },
            flowInfoBmsChg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info main battery chg',
                role: 'info',
                flowInfoBmsChg: { 0: 'off', 2: 'on' },
            },
            fastChargeSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Fast charging slider switch',
                fastChargeSwitch: { 0: ' fast charging', 1: 'custom charging power' },
            },
            plugInInfoAcChargerFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Indicates whether the charger is connected to the AC port',
                role: 'info',
                plugInInfoAcChargerFlag: { 0: 'not charging?', 1: 'charging?' },
            },
            devSleepState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Sleep status',
                role: 'info',
                devSleepState: { 0: 'Off?', 1: 'On?' },
            },
            pcsFanErrFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fan err flag',
                role: 'info',
                pcsFanErrFlag: { 0: 'OK?', 1: 'error' },
            },
            cmsBmsRunState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'On/Off status',
                role: 'info',
                cmsBmsRunState: { 0: 'off', 1: 'on' },
            },
            bmsChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charging/Discharging status of the main battery',
                role: 'info',
                bmsChgDsgState: { 0: 'not charging or discharging', 1: 'discharging', 2: 'charging' },
            },
            cmsChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charging/Discharging status',
                role: 'info',
                cmsChgDsgState: { 0: 'not charging or discharging', 1: 'discharging', 2: 'charging' },
            },
            timeTaskConflictFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'time task conflict flag',
                timeTaskConflictFlag: { 0: 'no conflict?', 1: 'conflict?' },
            },
            flowInfoPv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info pv',
                role: 'info',
                flowInfoPv: { 0: 'OK?' },
            },
            plugInInfoPvFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv flag',
                role: 'info',
                plugInInfoPvFlag: { 0: 'OK?' },
            },
            plugInInfoPvType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv type',
                role: 'info',
                plugInInfoPvType: { 0: 'OK?' },
            },
            plugInInfoPvChargerFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv charger flag',
                role: 'info',
                plugInInfoPvChargerFlag: { 0: 'OK?' },
            },
            flowInfoAcOut: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info ac out',
                role: 'info',
                flowInfoAcOut: { 0: 'OK?' },
            },
            flowInfoDcpIn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info dcp in',
                role: 'info',
                flowInfoDcpIn: { 0: 'OK?' },
            },
            flowInfoDcpOut: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info dcp out',
                role: 'info',
                flowInfoDcpOut: { 0: 'OK?' },
            },
            plugInInfoDcpInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp in flag',
                role: 'info',
                plugInInfoDcpInFlag: { 0: 'OK?' },
            },
            plugInInfoDcpType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp type',
                role: 'info',
                plugInInfoDcpType: { 0: 'OK?' },
            },
            plugInInfoDcpDsgChgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp dsg chg type',
                role: 'info',
                plugInInfoDcpDsgChgType: { 0: 'OK?' },
            },
            plugInInfoDcpChargerFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp charger flag',
                role: 'info',
                plugInInfoDcpChargerFlag: { 0: 'OK?' },
            },
            plugInInfoDcpRunState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp run state',
                role: 'info',
                plugInInfoDcpRunState: { 0: 'OK?' },
            },
            stormPatternEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'storm pattern enable',
                role: 'info',
                stormPatternEnable: { 0: 'OK?' },
            },
            stormPatternOpenFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'storm pattern open flag',
                role: 'info',
                stormPatternOpenFlag: { 0: 'OK?' },
            },
        },
        switch: {
            xboostEn: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'X-Boost switch',
                role: 'switch',
                xboostEn: { 0: 'off', 1: 'on' },
            },
            enBeep: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'Beeper on/off. (true: on, false: off.)',
                role: 'switch',
                enBeep: { 0: 'off', 1: 'on' },
            },
            cmsOilSelfStart: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'Smart Generator auto start/stop switch',
                role: 'switch',
                cmsOilSelfStart: { 0: 'off', 1: 'on' },
            },
        },
    },
    BMSHeartBeatReport: {
        string: {
            num: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'num',
                role: 'info',
            },
            cellId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'cell id',
                role: 'info',
            },
            errCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'err code',
                role: 'info',
            },
            sysVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys ver',
                role: 'info',
            },

            bqSysStatReg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bq sys stat reg',
                role: 'info',
            },
            cellSeriesNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'cell series num',
                role: 'info',
            },
            cellNtcNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'cell ntc num',
                role: 'info',
            },
            hwVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'hw ver',
                role: 'info',
            },
            bmsHeartbeatVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms heartbeat ver',
                role: 'info',
            },
            ecloudOcv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ecloud ocv',
                role: 'info',
            },
            bmsSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms sn',
                role: 'info',
            },
            productType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'product type',
                role: 'info',
            },
            productDetail: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'product detail',
                role: 'info',
            },
            sysLoaderVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys loader ver',
                role: 'info',
            },

            mosNtcNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mos ntc num',
                role: 'info',
            },
            envNtcNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'env ntc num',
                role: 'info',
            },
            balanceCmd: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'balance cmd',
                role: 'info',
            },
            afeSysStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'afe sys status',
                role: 'info',
            },
            mcuPinInStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mcu pin in status',
                role: 'info',
            },
            mcuPinOutStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mcu pin out status',
                role: 'info',
            },
            packSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pack sn',
                role: 'info',
            },
            curSensorNtcNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'cur sensor ntc num',
            },
            waterInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'water in flag',
            },
            type: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'type',
                role: 'info',
            },
        },
        diagnostic: {
            openBmsFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'open bms flag',
                role: 'info',
                openBmsFlag: { 0: 'OK?' },
            },
            mosState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'mos state',
                role: 'info',
                mosState: { 0: 'OK?' },
            },
            balanceState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'balance state',
                role: 'info',
                balanceState: { 0: 'OK?' },
            },
            sysState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'sys state',
                role: 'info',
                sysState: { 0: 'OK?' },
            },
            chgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'chg dsg state',
                role: 'info',
                chgDsgState: { 0: 'OK?' },
            },
            bmsAlarmState1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms alarm state1',
                role: 'info',
                bmsAlarmState1: { 0: 'OK?' },
            },
            bmsAlarmState2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms alarm state2',
                role: 'info',
                bmsAlarmState2: { 0: 'OK?' },
            },
            bmsProtectState1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms protect state1',
                role: 'info',
                bmsProtectState1: { 0: 'OK?' },
            },
            bmsProtectState2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms protect state2',
                role: 'info',
                bmsProtectState2: { 0: 'OK?' },
            },
            bmsFaultState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms fault state',
                role: 'info',
                bmsFaultState: { 0: 'OK?' },
            },
            bmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms fault',
                role: 'info',
                bmsFault: { 0: 'OK?' },
            },
            allErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'all err code',
                role: 'info',
                allErrCode: { 0: 'OK?' },
            },
            allBmsFault: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'all bms fault',
                role: 'info',
                allBmsFault: { 0: 'OK?' },
            },
        },
        number: {
            soc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'soc',
                subrole: 'number',
            },
            vol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'vol',
                subrole: 'number',
            },
            amp: {
                min: 0,
                max: 30,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'amp',
                subrole: 'number',
            },
            temp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'temp',
                subrole: 'number',
            },
            designCap: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'design cap',
                subrole: 'number',
            },
            remainCap: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'remain cap',
                subrole: 'number',
            },
            fullCap: {
                min: 0,
                max: 20000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'full cap',
                subrole: 'number',
            },
            cycles: {
                min: 0,
                max: 6000,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'Number of cycles',
                role: 'value',
            },
            soh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'soh',
                subrole: 'number',
            },
            maxCellVol: {
                min: 0,
                max: 5,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'max cell vol',
                subrole: 'number',
            },
            minCellVol: {
                min: 0,
                max: 5,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'min cell vol',
                subrole: 'number',
            },
            maxCellTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'max cell temp',
                subrole: 'number',
            },
            minCellTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'min cell temp',
                subrole: 'number',
            },
            maxMosTemp: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'max mos temp',
                subrole: 'number',
            },
            minMosTemp: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'min mos temp',
                subrole: 'number',
            },
            tagChgAmp: {
                min: 0,
                max: 60,
                unit_of_measurement: 'A',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'tag chg amp',
                subrole: 'number',
            },
            f32ShowSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'f32 show soc',
                subrole: 'number',
            },
            inputWatts: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'input watts',
                subrole: 'number',
            },
            outputWatts: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'output watts',
                subrole: 'number',
            },
            remainTime: {
                min: 0,
                max: 5999,
                unit_of_measurement: 'h',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'remain time',
                subrole: 'number',
            },
            maxVolDiff: {
                min: 0,
                max: 1,
                unit_of_measurement: 'V',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'max vol diff',
                subrole: 'number',
            },

            actSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'act soc',
                subrole: 'number',
            },
            diffSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'diff soc',
                subrole: 'number',
            },
            targetSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'target soc',
                subrole: 'number',
            },
            accuChgCap: {
                min: 0,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'accu chg cap',
                subrole: 'number',
            },
            accuDsgCap: {
                min: 0,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'accu dsg cap',
                subrole: 'number',
            },
            realSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'real soh',
                subrole: 'number',
            },
            calendarSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'calendar soh',
                subrole: 'number',
            },
            cycleSoh: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'cycle soh',
                subrole: 'number',
            },
            maxEnvTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'max env temp',
                subrole: 'number',
            },
            minEnvTemp: {
                min: -10,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'min env temp',
                subrole: 'number',
            },
            maxCurSensorTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'max cur sensor temp',
                subrole: 'number',
            },
            minCurSensorTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'min cur sensor temp',
                subrole: 'number',
            },

            accuChgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                role: 'value',
                name: 'accu chg energy',
                subrole: 'number',
            },
            accuDsgEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                state_class: 'total_increasing',
                role: 'value',
                name: 'accu dsg energy',
                subrole: 'number',
            },
            heatfilmNtcNum: {
                min: 0,
                max: 10,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: ' heatfilm Ntc Num',
                subrole: 'number',
            },
            minHeatfilmTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'min Heatfilm Temp',
                subrole: 'number',
            },
            maxHeatfilmTemp: {
                min: 0,
                max: 90,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'max Heatfilm Temp',
                subrole: 'number',
            },
        },
        array: {
            cellVol: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Cell voltage',
            },
            cellTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Cell temperature',
            },
            remainBalanceTime: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'remain balance time',
            },
            mosTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'mos temp',
            },
            envTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'env temp',
            },

            curSensorTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'cur sensor temp',
            },
            heatfilmTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'heatfilm Temp',
            },
        },
    },
    StatisticsSum: {
        number: {
            start: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'start',
                subrole: 'number',
            },
            devWorkTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Devicd Work Time',
                subrole: 'number',
            },
            acOutEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative AC out energy',
                state_class: 'total_increasing',
                role: 'value',
            },
            dc12VoutEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative DC out Energy',
                state_class: 'total_increasing',
                role: 'value',
            },
            typecOutEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative Type C out energy',
                state_class: 'total_increasing',
                role: 'value',
            },
            usbaOutEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative USB A out energy',
                state_class: 'total_increasing',
                role: 'value',
            },
            acInEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative AC in energy',
                state_class: 'total_increasing',
                role: 'value',
            },
            pvInEnergy: {
                min: 0,
                unit_of_measurement: 'kWh',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'Cumulative PV in energy',
                state_class: 'total_increasing',
                role: 'value',
            },
            acIn0W100WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC In 0W to 100W Time',
                subrole: 'number',
            },
            acInOver100WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC In Over 100W Time',
                subrole: 'number',
            },
            acOut0W50WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out 0W to 50W Time',
                subrole: 'number',
            },
            acOut50W100WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out 50W to 100W Time',
                subrole: 'number',
            },
            acOut100W200WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out 100W to 200W Time',
                subrole: 'number',
            },
            acOutOver200WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out Over 200W Time',
                subrole: 'number',
            },
            acOut200W300WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out 200W to 300W Time',
                subrole: 'number',
            },
            acOut300W400WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out 300W to 400W Time',
                subrole: 'number',
            },
            acOut400W500WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out 400W to 500W Time',
                subrole: 'number',
            },
            acOutOver500WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'AC Out Over 500W Time',
                subrole: 'number',
            },
            pvInTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'PV In Time',
                subrole: 'number',
            },
            typecInTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Type C In Time',
                subrole: 'number',
            },
            dcOut0W60WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'DC Out 0W to 60W Time',
                subrole: 'number',
            },
            dcOutOver60WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'DC Out Over 60W Time',
                subrole: 'number',
            },
            typecOut0W30WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Type C Out 0W to 30W Time',
                subrole: 'number',
            },
            typecOut30W60WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Type C Out 30W to 60W Time',
                subrole: 'number',
            },
            typecOutOver60WTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'Type C Out Over 60W Time',
                subrole: 'number',
            },
            usbaOutTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'USB A Out Time',
                subrole: 'number',
            },
            ledOutTime: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'LED Out Time',
                subrole: 'number',
            },
        },
    },
    setDp3: {
        switch: {
            cfgDc12vOutOpen: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: '12V output switch',
                role: 'switch',
                cfgDc12vOutOpen: { 0: 'off', 1: 'on' },
            },
            cfgAcOutOpen: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'AC output switch',
                role: 'switch',
                cfgAcOutOpen: { 0: 'off', 1: 'on' },
            },
            cfgUsbOpen: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'USB output switch',
                role: 'switch',
                cfgUsbOpen: { 0: 'off', 1: 'on' },
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
                name: 'Cloud Connection Status',
                role: 'info',
                status: { '-2': 'offline', 0: 'offline', 1: 'online' },
            },
        },
    },
};

const deviceStatesDict = {
    delta3: {
        RuntimePropertyUpload: {
            tempPcsDc: { entity: 'number' },
            tempPcsAc: { entity: 'number' },
            plugInInfoAcOutType: { entity: 'diagnostic' },
            plugInInfoAcOutFreq: { entity: 'number' },
            plugInInfoAcOutVol: { entity: 'number' },
            plugInInfoAcInVol: { entity: 'number' },
            plugInInfoBmsVol: { entity: 'number' },
            pdBmsCommErr: { entity: 'string' },
            pdIotCommErr: { entity: 'string' },
            pdFirmVer: { entity: 'string' },
            iotFirmVer: { entity: 'string' },
            plugInInfoAcInAmp: { entity: 'number' },
            plugInInfoAcOutAmp: { entity: 'number' },
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
            tempPv: { entity: 'number' },
            plugInInfoPvVol: { entity: 'number' },
            plugInInfoPvAmp: { entity: 'number' },
            plugInInfoDcpVol: { entity: 'number' },
            pdDcdcCommErr: { entity: 'string' },
            pdInvCommErr: { entity: 'string' },
            dcdcFirmVer: { entity: 'string' },
            invFirmVer: { entity: 'string' },
            plugInInfoDcpAmp: { entity: 'number' },
        },
        DisplayPropertyUpload: {
            errcode: { entity: 'string' },
            powInSumW: { entity: 'number' },
            powOutSumW: { entity: 'number' },
            lcdLight: { entity: 'level' },
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
            acAlwaysOnFlag: { entity: 'diagnostic' },
            acAlwaysOnMiniSoc: { entity: 'number' },
            xboostEn: { entity: 'switch' },
            pcsFanLevel: { entity: 'string' },
            flowInfo_12v: { entity: 'diagnostic' },
            powGet_12v: { entity: 'number' },
            flowInfoAc2dc: { entity: 'diagnostic' },
            flowInfoDc2ac: { entity: 'diagnostic' },
            flowInfoAcIn: { entity: 'diagnostic' },
            powGetAc: { entity: 'number' },
            powGetAcIn: { entity: 'number' },
            plugInInfoAcInFlag: { entity: 'diagnostic' },
            plugInInfoAcInFeq: { entity: 'number' },
            plugInInfoAcInChgMode: { entity: 'level' },
            pvDcChgSettingList: { entity: 'string' },
            utcTimezone: { entity: 'number' },
            utcTimezoneId: { entity: 'string' },
            utcSetMode: { entity: 'diagnostic' },
            plugInInfoPvChgMaxList: { entity: 'string' },
            bmsErrCode: { entity: 'string' },
            wirelessCoordinateDevList: { entity: 'string' },
            wirelessOilSelfStart: { entity: 'string' },
            wirelessOilOnSoc: { entity: 'number' },
            wirelessOilOffSoc: { entity: 'number' },
            bypassOutDisable: { entity: 'string' },
            outputPowerOffMemory: { entity: 'diagnostic' },
            flowInfoBmsDsg: { entity: 'diagnostic' },
            flowInfoBmsChg: { entity: 'diagnostic' },
            powGetBms: { entity: 'number' },
            fastChargeSwitch: { entity: 'diagnostic' },
            enBeep: { entity: 'switch' },
            plugInInfoAcChargerFlag: { entity: 'diagnostic' },
            plugInInfoAcInChgPowMax: { entity: 'level' },
            acOutFreq: { entity: 'number' },
            devSleepState: { entity: 'diagnostic' },
            pdErrCode: { entity: 'string' },
            timeTaskCurrent: { entity: 'array' },
            pcsFanErrFlag: { entity: 'diagnostic' },
            plugInInfoAcOutDsgPowMax: { entity: 'number' },
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
            timeTaskConflictFlag: { entity: 'diagnostic' },
            timeTaskChangeCnt: { entity: 'number' },
            powGetDc: { entity: 'number' },
            plugInInfoPvDcAmpMax: { entity: 'number' },
            flowInfoPv: { entity: 'diagnostic' },
            powGetPv: { entity: 'number' },
            plugInInfoPvFlag: { entity: 'diagnostic' },
            plugInInfoPvType: { entity: 'diagnostic' },
            plugInInfoPvChargerFlag: { entity: 'diagnostic' },
            plugInInfoPvChgAmpMax: { entity: 'number' },
            plugInInfoPvChgVolMax: { entity: 'number' },
            flowInfoAcOut: { entity: 'diagnostic' },
            powGetAcOut: { entity: 'number' },
            flowInfoDcpIn: { entity: 'diagnostic' },
            flowInfoDcpOut: { entity: 'diagnostic' },
            powGetDcp: { entity: 'number' },
            plugInInfoDcpInFlag: { entity: 'diagnostic' },
            plugInInfoDcpType: { entity: 'diagnostic' },
            plugInInfoDcpDetail: { entity: 'string' },
            plugInInfoDcpDsgChgType: { entity: 'diagnostic' },
            plugInInfoDcpResv: { entity: 'string' },
            plugInInfoDcpSn: { entity: 'string' },
            plugInInfoDcpFirmVer: { entity: 'string' },
            plugInInfoDcpChargerFlag: { entity: 'diagnostic' },
            plugInInfoDcpRunState: { entity: 'diagnostic' },
            dcdcErrCode: { entity: 'string' },
            plugInInfoDcpErrCode: { entity: 'string' },
            invErrCode: { entity: 'string' },
            cmsBattPowOutMax: { entity: 'number' },
            cmsBattPowInMax: { entity: 'number' },
            cmsBattFullEnergy: { entity: 'number' },
            stormPatternEnable: { entity: 'diagnostic' },
            stormPatternOpenFlag: { entity: 'diagnostic' },
            stormPatternEndTime: { entity: 'number' },
            energyStrategyOperateMode: { entity: 'array' },
            selfPoweredConflictFlag: { entity: 'string' },
            touModeConflictFlag: { entity: 'string' },
            backupReverseSoc: { entity: 'number' },
        },
        /*
        StatisticsSum: {
            start: { entity: 'number' },
            devWorkTime: { entity: 'number' },
            acOutEnergy: { entity: 'number' },
            dc12VoutEnergy: { entity: 'number' },
            typecOutEnergy: { entity: 'number' },
            usbaOutEnergy: { entity: 'number' },
            acInEnergy: { entity: 'number' },
            pvInEnergy: { entity: 'number' },
            acIn0W100WTime: { entity: 'number' },
            acInOver100WTime: { entity: 'number' },
            acOut0W50WTime: { entity: 'number' },
            acOut50W100WTime: { entity: 'number' },
            acOut100W200WTime: { entity: 'number' },
            acOutOver200WTime: { entity: 'number' },
            acOut200W300WTime: { entity: 'number' },
            acOut300W400WTime: { entity: 'number' },
            acOut400W500WTime: { entity: 'number' },
            acOutOver500WTime: { entity: 'number' },
            pvInTime: { entity: 'number' },
            typecInTime: { entity: 'number' },
            dcOut0W60WTime: { entity: 'number' },
            dcOutOver60WTime: { entity: 'number' },
            typecOut0W30WTime: { entity: 'number' },
            typecOut30W60WTime: { entity: 'number' },
            typecOutOver60WTime: { entity: 'number' },
            usbaOutTime: { entity: 'number' },
            ledOutTime: { entity: 'number' }
        },
        */
        BMSHeartBeatReport: {
            num: { entity: 'string' },
            type: { entity: 'string' },
            cellId: { entity: 'string' },
            errCode: { entity: 'string' },
            sysVer: { entity: 'string' },
            soc: { entity: 'number' },
            vol: { entity: 'number' },
            amp: { entity: 'number' },
            temp: { entity: 'number' },
            openBmsFlag: { entity: 'diagnostic' },
            designCap: { entity: 'number' },
            remainCap: { entity: 'number' },
            fullCap: { entity: 'number' },
            cycles: { entity: 'number' },
            soh: { entity: 'number' },
            maxCellVol: { entity: 'number' },
            minCellVol: { entity: 'number' },
            maxCellTemp: { entity: 'number' },
            minCellTemp: { entity: 'number' },
            maxMosTemp: { entity: 'number' },
            minMosTemp: { entity: 'number' },
            bmsFault: { entity: 'diagnostic' },
            bqSysStatReg: { entity: 'string' },
            tagChgAmp: { entity: 'number' },
            f32ShowSoc: { entity: 'number' },
            inputWatts: { entity: 'number' },
            outputWatts: { entity: 'number' },
            remainTime: { entity: 'number' },
            mosState: { entity: 'diagnostic' },
            balanceState: { entity: 'diagnostic' },
            maxVolDiff: { entity: 'number' },
            cellSeriesNum: { entity: 'string' },
            cellVol: { entity: 'array' },
            cellNtcNum: { entity: 'string' },
            cellTemp: { entity: 'array' },
            hwVer: { entity: 'string' },
            bmsHeartbeatVer: { entity: 'string' },
            ecloudOcv: { entity: 'string' },
            bmsSn: { entity: 'string' },
            productType: { entity: 'string' },
            productDetail: { entity: 'string' },
            actSoc: { entity: 'number' },
            diffSoc: { entity: 'number' },
            targetSoc: { entity: 'number' },
            sysLoaderVer: { entity: 'string' },
            sysState: { entity: 'diagnostic' },
            chgDsgState: { entity: 'diagnostic' },
            allErrCode: { entity: 'diagnostic' },
            allBmsFault: { entity: 'diagnostic' },
            accuChgCap: { entity: 'number' },
            accuDsgCap: { entity: 'number' },
            realSoh: { entity: 'number' },
            calendarSoh: { entity: 'number' },
            cycleSoh: { entity: 'number' },
            mosNtcNum: { entity: 'string' },
            mosTemp: { entity: 'array' },
            envNtcNum: { entity: 'string' },
            envTemp: { entity: 'array' },
            curSensorNtcNum: { entity: 'string' },
            curSensorTemp: { entity: 'array' },
            maxEnvTemp: { entity: 'number' },
            minEnvTemp: { entity: 'number' },
            maxCurSensorTemp: { entity: 'number' },
            minCurSensorTemp: { entity: 'number' },
            balanceCmd: { entity: 'string' },
            remainBalanceTime: { entity: 'array' },
            afeSysStatus: { entity: 'string' },
            mcuPinInStatus: { entity: 'string' },
            mcuPinOutStatus: { entity: 'string' },
            bmsAlarmState1: { entity: 'diagnostic' },
            bmsAlarmState2: { entity: 'diagnostic' },
            bmsProtectState1: { entity: 'diagnostic' },
            bmsProtectState2: { entity: 'diagnostic' },
            bmsFaultState: { entity: 'diagnostic' },
            accuChgEnergy: { entity: 'number' },
            accuDsgEnergy: { entity: 'number' },
            packSn: { entity: 'string' },
            waterInFlag: { entity: 'string' },
            heatfilmNtcNum: { entity: 'number' },
            minHeatfilmTemp: { entity: 'number' },
            maxHeatfilmTemp: { entity: 'number' },
            heatfilmTemp: { entity: 'array' },
        },
        setDp3: {
            cfgAcOutOpen: { entity: 'switch' },
            cfgDc12vOutOpen: { entity: 'switch' },
            cfgUsbOpen: { entity: 'switch' },
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
    delta3: {
        DisplayPropertyUpload: {
            number: {
                powOutSumW: { max: 1000 },
            },
        },
        BMSHeartBeatReport: {
            number: {
                fullCap: { max: 20000 },
                remainCap: { max: 20000 },
                designCap: { max: 20000 },
            },
        },
    },
};

const deviceCmd = {
    delta3: {
        DisplayPropertyUpload: {
            cmsOilSelfStart: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsOilOnSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsOilOffSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMaxChgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMinDsgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            lcdLight: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 2 } },
            devStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            screenOffTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            dcStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, //oder Länge 4
            acStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } }, //oder Länge 4
            xboostEn: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            enBeep: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },

            plugInInfoAcInChgMode: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            plugInInfoAcInChgPowMax: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 7 } },
        },
        setDp3: {
            cfgAcOutOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cfgDc12vOutOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cfgUsbOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
        },
        action: {
            latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } },
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
                            case 'RuntimePropertyUpload':
                            case 'DisplayPropertyUpload':
                            case 'BMSHeartBeatReport':
                                // all cases without nested states
                                await setOnlineStatus(adapter, topic);
                                for (let state in payload[channel]) {
                                    let val;
                                    let haupd;
                                    switch (state) {
                                        case 'displayStatisticsSum':
                                        case 'runtimeStatisticsSum':
                                            adapter.log.debug(
                                                'StatisticsSum is available for delta3. Please inform developer.',
                                            );
                                            /*
                                        const statisticObjets = ['start', 'devWorkTime', 'acOutEnergy', 'dc12VoutEnergy', 'typecOutEnergy', 'usbaOutEnergy', 'acInEnergy', 'pvInEnergy', 'acIn0W100WTime', 'acInOver100WTime', 'acOut0W50WTime', 'acOut50W100WTime', 'acOut100W200WTime', 'acOutOver200WTime', 'acOut200W300WTime', 'acOut300W400WTime', 'acOut400W500WTime', 'acOutOver500WTime', 'pvInTime', 'typecInTime', 'dcOut0W60WTime', 'dcOutOver60WTime', 'typecOut0W30WTime', 'typecOut30W60WTime', 'typecOutOver60WTime', 'usbaOutTime', 'ledOutTime']
                                        if (payload[channel][state]['listInfo']) {
                                            for (var i = 0; i < payload[channel][state]['listInfo'].length; i++) {
                                            let listItem = payload[channel][state]['listInfo'][i];
                                                if (listItem['statisticsObject'] && listItem['statisticsContent']) {
                                                    haupd = await compareUpdate(
                                                        adapter,
                                                        stateDictObj,
                                                        stateObj,
                                                        haenable,
                                                        topic,
                                                        'StatisticsSum',
                                                        statisticObjets[listItem['statisticsObject']],
                                                        listItem['statisticsContent'],
                                                        'StatisticsSum',
                                                        logged
                                                    );
                                                    if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
                                                }
                                            }
                                        }
                                            */
                                            break;

                                        default:
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
                                            break;
                                    }
                                }
                                break;
                            case 'set_dp3':
                                for (let state in payload[channel]) {
                                    if (
                                        state !== 'cfgAcOutOpen' &&
                                        state !== 'cfgDc12vOutOpen' &&
                                        state !== 'cfgUsbOpen'
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
                                            logged,
                                        );
                                        if (Object.keys(haupd).length !== 0) {
                                            haUpdate.push(haupd);
                                        }
                                    } else {
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
                                            logged,
                                        );
                                        if (Object.keys(haupd).length !== 0) {
                                            haUpdate.push(haupd);
                                        }
                                    }
                                }
                                break;
                            case 'setReply_dp3':
                                //Auswertung ob OK und dann auf set_dp3 und zusätzlich in anderer struktur ohne cfg setzen
                                await setOnlineStatus(adapter, topic);
                                for (let state in payload[channel]) {
                                    if (payload[channel]['configOk'] && payload[channel]['configOk'] == true) {
                                        if (
                                            state !== 'actionId' &&
                                            state !== 'configOk' &&
                                            state !== 'cfgAcOutOpen' &&
                                            state !== 'cfgDc12vOutOpen' &&
                                            state !== 'cfgUsbOpen'
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
                                                logged,
                                            );
                                            if (Object.keys(haupd).length !== 0) {
                                                haUpdate.push(haupd);
                                            }
                                        } else {
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
                                                logged,
                                            );
                                            if (Object.keys(haupd).length !== 0) {
                                                haUpdate.push(haupd);
                                            }
                                        }
                                    } else {
                                        adapter.log.warn(`Not successfull command ${JSON.stringify(payload[channel])}`);
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
            productId: 1,
            version: 19,
            payloadVer: 1,
            from: 'Android',
            // deviceSn: serial
        },
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
        case 'enBeep':
        case 'xboostEn':
        case 'acEnergySavingOpen':
        case 'cmsOilSelfStart':
        case 'cfgAcOutOpen':
        case 'cfgDc12vOutOpen':
        case 'cfgUsbOpen':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = value ? 1 : 0;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
            break;
        case 'acStandbyTime':
        case 'dcStandbyTime':
        case 'screenOffTime':
        case 'devStandbyTime':
        case 'lcdLight':
            //case 'bleStandbyTime':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = parseInt(value); //int
            //todo ermittlung len
            if (value > 128) {
                muster['header']['dataLen'] = 3;
            } else {
                muster['header']['dataLen'] = 2;
            }

            break;
        case 'cmsMinDsgSoc':
        case 'cmsMaxChgSoc':
        case 'cmsOilOnSoc':
        case 'cmsOilOffSoc':
            //case 'plugInInfoPvLDcAmpMax': //ungewiss ob das so zulässig ist
            //case 'plugInInfoPvHDcAmpMax':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['dataLen'] = 3;
            break;
        case 'plugInInfoAcInChgPowMax':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = parseInt(value); //int
            Object.assign(muster['header']['pdata'], { plugInInfoAcInChgMode: 0 }); //always 0 for userdefined power level
            if (value > 128) {
                muster['header']['dataLen'] = 7;
            } else {
                muster['header']['dataLen'] = 6;
            }
            break;
        case 'plugInInfoAcInChgMode':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
            break;
        default:
            muster = null;
            adapter.log.debug('command not recognized');
            break;
    }

    if (log) {
        adapter.log.debug(`[PROTOBUF encode] ${state} ${value} send stream ${JSON.stringify(muster)}`);
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

const protoMsg = {
    cmdFunc: {
        32: { cmdId: { 2: 'CMSHeartBeatReport', 50: 'BMSHeartBeatReport' } },
        50: { cmdId: { 98: 'cmd98_cmdfunc50' } },
        254: {
            cmdId: {
                17: 'set_dp3',
                18: 'setReply_dp3',
                19: 'cmd19_cmdfunc254',
                //20: "ack",
                21: 'DisplayPropertyUpload',
                22: 'RuntimePropertyUpload',
            },
        },
    },
};

const msgNameObj = {
    CMSHeartBeatReport: { cmdId: 2, cmdFunc: 32 },
    BMSHeartBeatReport: { cmdId: 50, cmdFunc: 32 },
    DisplayPropertyUpload: { cmdId: 21, cmdFunc: 254 },
    RuntimePropertyUpload: { cmdId: 21, cmdFunc: 254 },
};
const protoSource = `
syntax = "proto3";

message cmdFunc50_cmdId2_Report {
    optional int32 acOutEnergy3 = 3;
    optional int32 acOutEnergy4 = 4;
    optional int32 acOutEnergy5 = 5;
}

message cmd98_cmdfunc50_1 {
    repeated int32 unknown6 = 6;
}

message cmd98_cmdfunc50 {
    optional cmd98_cmdfunc50_1 unknown1 =1;
    optional int32 timestamp2 =2;
    optional int32 unknown3 =3;
    optional int32 unknwon4 =4;
    optional int32 unknown5 =5;
}


message cmd19_cmdfunc254 {
    repeated bytes unknown = 1;
}


enum STATISTICS_OBJECT {
  STATISTICS_OBJECT_START = 0;
  STATISTICS_OBJECT_DEV_WORK_TIME = 1;
  STATISTICS_OBJECT_AC_OUT_ENERGY = 2;
  STATISTICS_OBJECT_DC12V_OUT_ENERGY = 3;
  STATISTICS_OBJECT_TYPEC_OUT_ENERGY = 4;
  STATISTICS_OBJECT_USBA_OUT_ENERGY = 5;
  STATISTICS_OBJECT_AC_IN_ENERGY = 6;
  STATISTICS_OBJECT_PV_IN_ENERGY = 7;
  STATISTICS_OBJECT_AC_IN_0W_100W_TIME = 8;
  STATISTICS_OBJECT_AC_IN_OVER_100W_TIME = 9;
  STATISTICS_OBJECT_AC_OUT_0W_50W_TIME = 10;
  STATISTICS_OBJECT_AC_OUT_50W_100W_TIME = 11;
  STATISTICS_OBJECT_AC_OUT_100W_200W_TIME = 12;
  STATISTICS_OBJECT_AC_OUT_OVER_200W_TIME = 13;
  STATISTICS_OBJECT_AC_OUT_200W_300W_TIME = 14;
  STATISTICS_OBJECT_AC_OUT_300W_400W_TIME = 15;
  STATISTICS_OBJECT_AC_OUT_400W_500W_TIME = 16;
  STATISTICS_OBJECT_AC_OUT_OVER_500W_TIME = 17;
  STATISTICS_OBJECT_PV_IN_TIME = 18;
  STATISTICS_OBJECT_TYPEC_IN_TIME = 19;
  STATISTICS_OBJECT_DC_OUT_0W_60W_TIME = 20;
  STATISTICS_OBJECT_DC_OUT_OVER_60W_TIME = 21;
  STATISTICS_OBJECT_TYPEC_OUT_0W_30W_TIME = 22;
  STATISTICS_OBJECT_TYPEC_OUT_30W_60W_TIME = 23;
  STATISTICS_OBJECT_TYPEC_OUT_OVER_60W_TIME = 24;
  STATISTICS_OBJECT_USBA_OUT_TIME = 25;
  STATISTICS_OBJECT_LED_OUT_TIME = 26;
}

message StatisticsRecordItem {
  optional STATISTICS_OBJECT statistics_object = 1;
  optional uint32 statistics_content = 2;
}

message DisplayStatisticsRecordList {
  repeated StatisticsRecordItem list_info = 1;
}

message RuntimeStatisticsRecordList {
  repeated StatisticsRecordItem list_info = 1;
}

message ems_heartbeat_pack_v1p0_t {
  optional uint32 chg_state = 1;
  optional uint32 chg_cmd = 2;
  optional uint32 dsg_cmd = 3;
  optional uint32 chg_vol = 4;
  optional uint32 chg_amp = 5;
  optional uint32 fan_level = 6;
  optional uint32 max_charge_soc = 7;
  optional uint32 bms_model = 8;
  optional uint32 lcd_show_soc = 9;
  optional uint32 open_ups_flag = 10;
  optional uint32 bms_warning_state = 11;
  optional uint32 chg_remain_time = 12;
  optional uint32 dsg_remain_time = 13;
  optional uint32 ems_is_normal_flag = 14;
  optional float f32_lcd_show_soc = 15;
  repeated uint32 bms_is_connt = 16;
  optional uint32 max_available_num = 17;
  optional uint32 open_bms_idx = 18;
  optional uint32 para_vol_min = 19;
  optional uint32 para_vol_max = 20;
  optional uint32 min_dsg_soc = 21;
  optional uint32 min_open_oil_eb_soc = 22;
  optional uint32 max_close_oil_eb_soc = 23;
}

message ems_heartbeat_pack_v1p3_t {
  optional uint32 chg_disable_cond = 1;
  optional uint32 dsg_disable_cond = 2;
  optional uint32 chg_line_plug_in_flag = 3;
  optional uint32 sys_chg_dsg_state = 4;
  optional uint32 ems_heartbeat_ver = 5;
}

message CMSHeartBeatReport {
  optional ems_heartbeat_pack_v1p0_t v1p0 = 1;
  optional ems_heartbeat_pack_v1p3_t v1p3 = 2;
}


message BMSHeartBeatReport {
  optional uint32 num = 1;
  optional uint32 type = 2;
  optional uint32 cell_id = 3;
  optional uint32 err_code = 4;
  optional uint32 sys_ver = 5;
  optional uint32 soc = 6;
  optional uint32 vol = 7;
  optional int32 amp = 8;
  optional int32 temp = 9;
  optional uint32 open_bms_flag = 10;
  optional uint32 design_cap = 11;
  optional uint32 remain_cap = 12;
  optional uint32 full_cap = 13;
  optional uint32 cycles = 14;
  optional uint32 soh = 15;
  optional uint32 max_cell_vol = 16;
  optional uint32 min_cell_vol = 17;
  optional int32 max_cell_temp = 18;
  optional int32 min_cell_temp = 19;
  optional int32 max_mos_temp = 20;
  optional int32 min_mos_temp = 21;
  optional uint32 bms_fault = 22;
  optional uint32 bq_sys_stat_reg = 23;
  optional uint32 tag_chg_amp = 24;
  optional float f32_show_soc = 25;
  optional uint32 input_watts = 26;
  optional uint32 output_watts = 27;
  optional uint32 remain_time = 28;
  optional uint32 mos_state = 29;
  optional uint32 balance_state = 30;
  optional uint32 max_vol_diff = 31;
  optional uint32 cell_series_num = 32;
  repeated uint32 cell_vol = 33;
  optional uint32 cell_ntc_num = 34;
  repeated int32 cell_temp = 35;
  optional string hw_ver = 36;
  optional uint32 bms_heartbeat_ver = 37;
  optional uint32 ecloud_ocv = 38;
  optional string bms_sn = 39;
  optional uint32 product_type = 40;
  optional uint32 product_detail = 41;
  optional float act_soc = 42;
  optional float diff_soc = 43;
  optional float target_soc = 44;
  optional uint32 sys_loader_ver = 45;
  optional uint32 sys_state = 46;
  optional uint32 chg_dsg_state = 47;
  optional uint32 all_err_code = 48;
  optional uint32 all_bms_fault = 49;
  optional uint32 accu_chg_cap = 50;
  optional uint32 accu_dsg_cap = 51;
  optional float real_soh = 52;
  optional float calendar_soh = 53;
  optional float cycle_soh = 54;
  optional uint32 mos_ntc_num = 55;
  repeated int32 mos_temp = 56;
  optional uint32 env_ntc_num = 57;
  repeated int32 env_temp = 58;
  optional uint32 heatfilm_ntc_num = 59;
  repeated int32 heatfilm_temp = 60;
  optional uint32 cur_sensor_ntc_num = 61;
  repeated int32 cur_sensor_temp = 62;
  optional int32 max_env_temp = 63;
  optional int32 min_env_temp = 64;
  optional int32 max_heatfilm_temp = 65;
  optional int32 min_heatfilm_temp = 66;
  optional int32 max_cur_sensor_temp = 67;
  optional int32 min_cur_sensor_temp = 68;
  optional uint32 balance_cmd = 69;
  repeated uint32 remain_balance_time = 70;
  optional uint32 afe_sys_status = 71;
  optional uint32 mcu_pin_in_status = 72;
  optional uint32 mcu_pin_out_status = 73;
  optional uint32 bms_alarm_state1 = 74;
  optional uint32 bms_alarm_state2 = 75;
  optional uint32 bms_protect_state1 = 76;
  optional uint32 bms_protect_state2 = 77;
  optional uint32 bms_fault_state = 78;
  optional uint32 accu_chg_energy = 79;
  optional uint32 accu_dsg_energy = 80;
  optional string pack_sn = 81;
  optional uint32 water_in_flag = 82;
}


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
   optional bool pd_mppt_comm_err = 172;
   optional bool pd_llc_comm_err = 173;
   optional bool pd_bms_comm_err = 174;
   optional bool pd_iot_comm_err = 175;
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
   optional .RuntimeStatisticsRecordList runtime_statistics_sum = 464; //not in sample
}

enum AC_IN_CHG_MODE {
  AC_IN_CHG_MODE_SELF_DEF_POW = 0;
  AC_IN_CHG_MODE_BAT_OPTIMAL_POW = 1;
  AC_IN_CHG_MODE_SILENCE = 2;
}


enum PV_PLUG_INDEX {
  PV_PLUG_INDEX_RESV = 0;
  PV_PLUG_INDEX_1 = 1;
  PV_PLUG_INDEX_2 = 2;
}

enum PV_CHG_VOL_SPEC {
  PV_CHG_VOL_SPEC_RESV = 0;
  PV_CHG_VOL_SPEC_12V = 1;
  PV_CHG_VOL_SPEC_24V = 2;
  PV_CHG_VOL_SPEC_48V = 3;
}

message PvDcChgSetting {
  optional .PV_PLUG_INDEX pv_plug_index = 1;
  optional .PV_CHG_VOL_SPEC pv_chg_vol_spec = 2;
  optional uint32 pv_chg_amp_limit = 3;
}

message PvDcChgSettingList {
  repeated .PvDcChgSetting list_info = 1;
}

message PvChgMaxItem {
  optional uint32 pv_chg_vol_type = 1;
  optional uint32 pv_chg_amp_max = 2;
  optional uint32 pv_chg_amp_mini = 3;
}

message PvChgMaxList {
  repeated .PvChgMaxItem pv_chg_max_item = 1;
}

message WirelessCoordinateList {
  optional bool connect_flag = 1; //bool
  optional uint32 dev_type = 2;
  optional uint32 dev_detail = 3;
  optional string dev_sn = 4;
  optional uint32 dev_firm_ver = 5;
  optional uint32 dev_err_code = 6;
}

message SetTimeTaskWrite {
  optional uint32 task_index = 1;
  optional bool is_valid = 2; //bool
  optional bool is_cfg = 3; //bool
  optional bool is_enable = 4; //bool
  optional uint32 conflict_flag = 5;
  optional uint32 type = 6;
  optional uint32 time_mode = 7;
  optional uint32 time_param = 8;
  repeated uint32 time_table = 9;
}

message ResvInfo {
  repeated uint32 resv_info = 1;
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

message TimeTaskItemV2 {
  optional uint32 task_index = 1;
  optional bool is_cfg = 2;
  optional bool is_enable = 3;
  optional uint32 conflict_flag = 4;
  optional .TIME_TASK_MODE time_mode = 5;
  optional uint32 time_param = 6;
  optional uint32 time_table = 7;
  optional .TIME_TASK_TYPE task_type = 8;
  optional uint32 task_param = 9;
}

message TimeTaskItemV2List {
  repeated .TimeTaskItemV2 time_task = 1;
}

message DisplayPropertyUpload { 
   optional uint32 errcode = 1;
   optional float pow_in_sum_w = 3;
   optional float pow_out_sum_w = 4;
   optional uint32 lcd_light = 5;
   optional uint32 energy_backup_state = 6;
   optional bool energy_backup_en = 7;
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
   optional bool xboost_en = 25;
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
   optional string plug_in_info_dcp2_sn = 88;
   optional .PvDcChgSettingList pv_dc_chg_setting_list = 125;
   optional .TimeTaskItemV2 current_time_task_v2_item = 126;
   optional int32 utc_timezone = 133;
   optional string utc_timezone_id = 134;
   optional bool utc_set_mode = 135;
   optional uint32 bms_err_code = 140;
   optional bool output_power_off_memory = 147;
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
   optional bool plug_in_info_pv_l_charger_flag = 170;
   optional bool plug_in_info_pv_h_charger_flag = 171;
   optional uint32 plug_in_info_pv_l_dc_amp_max = 180;
   optional uint32 plug_in_info_pv_h_dc_amp_max = 181;
   optional uint32 fast_charge_switch = 182;
   optional uint32 plug_in_info_4p8_1_dsg_chg_type = 183;
   optional .ResvInfo plug_in_info_4p8_1_resv = 184;
   optional uint32 plug_in_info_4p8_1_firm_ver = 186;
   optional uint32 plug_in_info_4p8_2_dsg_chg_type = 187;
   optional .ResvInfo plug_in_info_4p8_2_resv = 188;
   optional uint32 plug_in_info_4p8_2_firm_ver = 190;
   optional uint32 plug_in_info_5p8_dsg_chg = 191;
   optional .ResvInfo plug_in_info_5p8_resv = 192;
   optional string plug_in_info_5p8_sn = 193;
   optional uint32 plug_in_info_5p8_firm_ver = 194;
   optional bool en_beep = 195;
   optional bool llc_GFCI_flag = 200;
   optional bool plug_in_info_ac_charger_flag = 202;
   optional bool plug_in_info_5p8_charger_flag = 203;
   optional uint32 plug_in_info_5p8_run_state = 204;
   optional bool plug_in_info_4p8_1_charger_flag = 205;
   optional uint32 plug_in_info_4p8_1_run_state = 206;
   optional bool plug_in_info_4p8_2_charger_flag = 207;
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
   optional .SetTimeTaskWrite time_task_current = 219;
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
   optional bool cms_oil_self_start = 274;
   optional uint32 cms_bms_run_state = 275;
   optional uint32 bms_chg_dsg_state = 281;
   optional uint32 cms_chg_dsg_state = 282;
   optional bool ac_hv_always_on = 283;
   optional bool ac_lv_always_on = 284;
   optional uint32 time_task_conflict_flag = 285;
   optional uint32 time_task_change_cnt = 286;
   optional uint32 ble_standby_time = 290;
   optional CfgEnergyStrategyOperateMode energy_strategy_operate_mode = 393;
   optional uint32 self_powered_conflict_flag = 395;
   optional uint32 tou_mode_conflict_flag = 396;
   optional string plug_in_info_dcp_sn = 433;
   optional bool generator_pv_hybrid_mode_open = 451;
   optional uint32 generator_pv_hybrid_mode_soc_max = 452;
   optional bool generator_care_mode_open = 453;
   optional uint32 generator_care_mode_start_time = 454;
   optional bool ac_energy_saving_open = 455;
   optional uint32 multi_bp_chg_dsg_mode = 456;
   optional uint32 plug_in_info_5p8_chg_hal_pow_max = 457;
   optional uint32 plug_in_info_ac_in_chg_hal_pow_max = 458;
   optional uint32 cms_batt_pow_out_max = 459;
   optional uint32 cms_batt_pow_in_max = 460;
   optional uint32 backup_reverse_soc = 461;
   optional uint32 cms_batt_full_energy = 462;
   optional DisplayStatisticsRecordList display_statistics_sum = 463; //not in sample data
   //optional uint32 unknown481 = 481;
}

message CfgEnergyStrategyOperateMode {
  optional bool operate_self_powered_open = 1;
  optional bool operate_scheduled_open = 2;
  optional bool operate_tou_mode_open = 3;
}

message set_dp3 {
    optional int32 cfgPowerOff = 3;
    optional uint32 cfg_utc_time = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 enBeep = 9;
    optional int32 acStandbyTime = 10;
    optional int32 dcStandbyTime = 11;
    optional int32 screenOffTime = 12;
    optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;


    optional int32 cfgDc12vOutOpen = 18; //bool
    optional int32 cfgUsbOpen = 19; //bool
    optional int32 xboostEn = 25;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;

    optional uint32 plugInInfoAcInChgPowMax = 54;
    optional uint32 cmsOilSelfStart = 58; //bool
    optional uint32 cmsOilOnSoc = 59;
    optional uint32 cmsOilOffSoc = 60;
    optional int32 cfgAcOutOpen = 76; //bool
    optional uint32 cfg_led_mode = 89;
    optional int32 plugInInfoAcInChgMode = 125;
    optional string cfg_utc_timezone_id = 135;
    optional bool cfg_utc_set_mode = 136;

    optional .CfgEnergyStrategyOperateMode energy_strategy_operate_mode = 106;

}


message setReply_dp3 {
    optional int32 actionId = 1;
    optional bool configOk = 2; //bool
    optional uint32 cfg_utc_time = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 enBeep = 9;
    optional int32 acStandbyTime = 10;
    optional int32 dcStandbyTime = 11;
    optional int32 screenOffTime = 12;
    optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;

    optional int32 cfgDc12vOutOpen = 18;
    optional int32 cfgUsbOpen = 19; //bool
    optional int32 xboostEn = 25;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;

    optional uint32 plugInInfoAcInChgPowMax = 54;
    optional uint32 cmsOilSelfStart = 58; //bool
    optional uint32 cmsOilOnSoc = 59;
    optional uint32 cmsOilOffSoc = 60;

    optional int32 cfgAcOutOpen = 76; //bool
    optional uint32 cfg_led_mode = 89;
    optional uint32 plugInInfoAcInChgMode = 125; //.AC_IN_CHG_MODE
    optional string cfg_utc_timezone_id = 135;
    optional bool cfg_utc_set_mode = 136;

    optional .CfgEnergyStrategyOperateMode energy_strategy_operate_mode = 106;
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

    message sentBMSHeartBeatReport {
        setHeader1 header = 1;
    }
    message sentCMSHeartBeatReport {
        setHeader2 header = 1;
    }

    message sentDisplayPropertyUpload {
        setHeader3 header = 1;
    }

    message sentRuntimePropertyUpload {
        setHeader4 header = 1;
    } 

 message setHeader4 {
    RuntimePropertyUpload pdata = 1;
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
    DisplayPropertyUpload pdata = 1;
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
    CMSHeartBeatReport pdata = 1;
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
    BMSHeartBeatReport pdata = 1;
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
