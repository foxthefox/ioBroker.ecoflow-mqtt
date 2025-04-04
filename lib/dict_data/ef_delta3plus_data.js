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
            plugInInfoAcOutVol: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info ac out vol',
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
            plugInInfoPv2Amp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv2 amp',
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
                name: 'plug in info main battery vol',
                subrole: 'number'
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
                subrole: 'number'
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
                name: 'main battery batt vol',
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
                name: 'main battery batt amp',
                subrole: 'number'
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
                subrole: 'number'
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
                name: 'main battery max cell vol',
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
                max: 60,
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
            tempPv: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'temp pv',
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
            },
            tempPv2: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'temp pv2',
                subrole: 'number'
            },
            plugInInfoPv2Vol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv2 vol',
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
            }
        },
        diagnostic: {
            plugInInfoAcOutType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info ac out type',
                role: 'info',
                plugInInfoAcOutType: { '0': 'OK?' }
            },
            bmsBalState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery bal state',
                role: 'info',
                bmsBalState: { '0': 'OK?' }
            },
            bmsAlmState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery alm state',
                role: 'info',
                bmsAlmState: { '0': 'OK?' }
            },
            bmsProState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery pro state',
                role: 'info',
                bmsProState: { '0': 'OK?' }
            },
            bmsFltState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery flt state',
                role: 'info',
                bmsFltState: { '0': 'OK?' }
            },
            bmsAlmState_2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery alm state_2',
                role: 'info',
                bmsAlmState_2: { '0': 'OK?' }
            },
            bmsProState_2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery pro state_2',
                role: 'info',
                bmsProState_2: { '0': 'OK?' }
            }
        },
        string: {
            pdBmsCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd main battery comm err', role: 'info' },
            pdIotCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd iot comm err', role: 'info' },
            pdFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd firm ver', role: 'info' },
            iotFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'iot firm ver', role: 'info' },
            bmsFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'main battery firm ver', role: 'info' },
            bmsErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'main battery err code', role: 'info' },
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
            pdDcdcCommErr: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pd dcdc comm err',
                role: 'info'
            },
            pdInvCommErr: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd inv comm err', role: 'info' },
            dcdcFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'dcdc firm ver', role: 'info' },
            invFirmVer: { entity_type: 'text', entity_category: 'diagnostic', name: 'inv firm ver', role: 'info' }
        },
        icon: {
            bmsOverloadIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery overload icon',
                role: 'info',
                bmsOverloadIcon: { '0': 'OK?' }
            },
            bmsWarnIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery warn icon',
                role: 'info',
                bmsWarnIcon: { '0': 'OK?' }
            },
            bmsHighTempIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'main batterys high temp icon',
                bmsHighTempIcon: { '0': 'OK?' }
            },
            bmsLowTempIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'main battery low temp icon',
                bmsLowTempIcon: { '0': 'OK?' }
            },
            bmsLimitIcon: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery limit icon',
                role: 'info',
                bmsLimitIcon: { '0': 'OK?' }
            }
        }
    },
    DisplayPropertyUpload: {
        array: {
            timeTaskCurrent: {
                entity_type: 'text', entity_category: 'diagnostic', role: 'list', name: 'time task current'
            }
        },
        string: {
            errcode: { entity_type: 'text', entity_category: 'diagnostic', name: 'errcode', role: 'info' },
            pcsFanLevel: { entity_type: 'text', entity_category: 'diagnostic', name: 'pcs fan level', role: 'info' },
            pvDcChgSettingList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pv dc chg setting list',
                role: 'info'
            },
            utcTimezoneId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc timezone id',
                role: 'info'
            },
            plugInInfoPvChgMaxList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv chg max list',
                role: 'info'
            },
            plugInInfoPv2ChgMaxList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv2 chg max list',
                role: 'info'
            },
            bmsErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'main battery err code', role: 'info' },
            wirelessCoordinateDevList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wireless coordinate dev list',
                role: 'info'
            },
            wirelessOilSelfStart: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wireless oil self start',
                role: 'info'
            },
            bypassOutDisable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bypass out disable',
                role: 'info'
            },
            pdErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'pd err code', role: 'info' },
            plugInInfoDcpDetail: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp detail',
                role: 'info'
            },
            plugInInfoDcpResv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp resv',
                role: 'info'
            },
            plugInInfoDcpSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp sn',
                role: 'info'
            },
            plugInInfoDcpFirmVer: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp firm ver',
                role: 'info'
            },
            dcdcErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'dcdc err code', role: 'info' },
            plugInInfoDcpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp err code',
                role: 'info'
            },
            invErrCode: { entity_type: 'text', entity_category: 'diagnostic', name: 'inv err code', role: 'info' }
        },
        number: {
            powInSumW: {
                min: 0,
                max: 4000,
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
                max: 4000,
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
            powGet_12v: {
                min: 0,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Real-time 12V power',
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
            },
            powGetPv2: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv2',
                subrole: 'number'
            },
            plugInInfoPv2DcAmpMax: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv2 dc amp max',
                subrole: 'number'
            },
            plugInInfoPv2ChgAmpMax: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv2 chg amp max',
                subrole: 'number'
            },
            plugInInfoPv2ChgVolMax: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv2 chg vol max',
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
            wirelessOilOnSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'wireless oil on soc',
                subrole: 'number'
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
                subrole: 'number'
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
                max: 20000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
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
                name: 'main battery min mos temp',
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
                name: 'main battery max mos temp',
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
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                role: 'value',
                name: 'time task change cnt',
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
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
                subrole: 'number'
            }
        },
        level: {
            lcdLight: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 0.390625,
                step: 1,
                entity_type: 'sensor',
                //device_class: 'brightness',
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
                    '0': 'Never',
                    '30': '30 min',
                    '60': '1 hr',
                    '120': '2 hr',
                    '240': '4 hr',
                    '360': '6 hr',
                    '720': '12 hr',
                    '1440': '24 hr'
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
                select: ['Never', '10 s', '30 s', '1 min', '5 min', '30 min'],
                select_obj: { Never: 0, '10 s': 10, '30 s': 30, '1 min': 60, '5 min': 300, '30 min': 1800 },
                states: { '0': 'Never', '10': '10 s', '30': '30 s', '60': '1 min', '300': '5 min', '1800': '30 min' }
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
                    '24 hr': 1440
                },
                states: {
                    '0': 'Never',
                    '30': '30 min',
                    '60': '1 hr',
                    '120': '2 hr',
                    '360': '6 hr',
                    '720': '12 hr',
                    '1440': '24 hr'
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
                    '0': 'Never',
                    '30': '30 min',
                    '60': '1 hr',
                    '120': '2 hr',
                    '240': '4 hr',
                    '360': '6 hr',
                    '720': '12 hr',
                    '1440': '24 hr'
                }
            },
            plugInInfoAcInChgPowMax: {
                min: 100,
                max: 1500,
                unit_of_measurement: 'W',
                mult: 1,
                step: 100,
                entity_type: 'sensor',
                device_class: 'power',
                name: 'Maximum AC input power for charging',
                role: 'level'
            },
            plugInInfoAcInChgMode: {
                min: 0,
                max: 2,
                mult: 1,
                step: 1,
                unit_of_measurement: '',
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info ac in chg mode',
                role: 'level',
                select: ['user defined', 'battery optimum', 'silence'],
                select_obj: {
                    'user defined': 0,
                    'battery optimum': 1,
                    'silence': 2
                },
                states: {
                    '0': 'user defined',
                    '1': 'battery optimum',
                    '2': 'silence'
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
            }
        },
        diagnostic: {
            energyBackupEn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Backup reserve function switch',
                energyBackupEn: { '0': 'off', '1': 'on' }
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
            acAlwaysOnFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'ac always on flag',
                role: 'info',
                acAlwaysOnFlag: { '0': 'OK?' }
            },
            flowInfo_12v: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info_12v',
                role: 'info',
                flowInfo_12v: { '0': 'off', '2': 'on' }
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
            plugInInfoAcInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Indicates whether the AC charging port is connected',
                role: 'info',
                plugInInfoAcInFlag: { '0': 'disconnected', '1': 'connected' }
            },
            utcSetMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc set mode',
                role: 'info',
                utcSetMode: { '0': 'OK?' }
            },
            outputPowerOffMemory: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'output power off memory',
                outputPowerOffMemory: { '0': 'OFF?', '1': 'ON?' }
            },
            flowInfoBmsDsg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info main battery dsg',
                role: 'info',
                flowInfoBmsDsg: { '0': 'off', '2': 'on' }
            },
            flowInfoBmsChg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info main battery chg',
                role: 'info',
                flowInfoBmsChg: { '0': 'off', '2': 'on' }
            },
            fastChargeSwitch: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Fast charging slider switch',
                fastChargeSwitch: { '0': ' fast charging', '1': 'custom charging power' }
            },
            plugInInfoAcChargerFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Indicates whether the charger is connected to the AC port',
                role: 'info',
                plugInInfoAcChargerFlag: { '0': 'not charging?', '1': 'charging?' }
            },
            devSleepState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Sleep status',
                role: 'info',
                devSleepState: { '0': 'Off?', '1': 'On?' }
            },
            pcsFanErrFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fan err flag',
                role: 'info',
                pcsFanErrFlag: { '0': 'OK?', '1': 'error' }
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
            timeTaskConflictFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'time task conflict flag',
                timeTaskConflictFlag: { '0': 'no conflict?', '1': 'conflict?' }
            },
            flowInfoPv: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info pv',
                role: 'info',
                flowInfoPv: { '0': 'OK?' }
            },
            plugInInfoPvFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv flag',
                role: 'info',
                plugInInfoPvFlag: { '0': 'OK?' }
            },
            plugInInfoPvType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv type',
                role: 'info',
                plugInInfoPvType: { '0': 'OK?' }
            },
            plugInInfoPvChargerFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv charger flag',
                role: 'info',
                plugInInfoPvChargerFlag: { '0': 'OK?' }
            },
            flowInfoAcOut: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info ac out',
                role: 'info',
                flowInfoAcOut: { '0': 'OK?' }
            },
            flowInfoPv2: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info pv2',
                role: 'info',
                flowInfoPv2: { '0': 'OK?' }
            },
            plugInInfoPv2Flag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv2 flag',
                role: 'info',
                plugInInfoPv2Flag: { '0': 'OK?' }
            },
            plugInInfoPv2Type: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv2 type',
                role: 'info',
                plugInInfoPv2Type: { '0': 'OK?' }
            },
            flowInfoDcpIn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info dcp in',
                role: 'info',
                flowInfoDcpIn: { '0': 'OK?' }
            },
            flowInfoDcpOut: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info dcp out',
                role: 'info',
                flowInfoDcpOut: { '0': 'OK?' }
            },
            plugInInfoDcpInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp in flag',
                role: 'info',
                plugInInfoDcpInFlag: { '0': 'OK?' }
            },
            plugInInfoDcpType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp type',
                role: 'info',
                plugInInfoDcpType: { '0': 'OK?' }
            },
            plugInInfoPv2ChargerFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv2 charger flag',
                role: 'info',
                plugInInfoPv2ChargerFlag: { '0': 'OK?' }
            },
            plugInInfoDcpDsgChgType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp dsg chg type',
                role: 'info',
                plugInInfoDcpDsgChgType: { '0': 'OK?' }
            },
            plugInInfoDcpChargerFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp charger flag',
                role: 'info',
                plugInInfoDcpChargerFlag: { '0': 'OK?' }
            },
            plugInInfoDcpRunState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp run state',
                role: 'info',
                plugInInfoDcpRunState: { '0': 'OK?' }
            },
            stormPatternEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'storm pattern enable',
                role: 'info',
                stormPatternEnable: { '0': 'OK?' }
            },
            stormPatternOpenFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'storm pattern open flag',
                role: 'info',
                stormPatternOpenFlag: { '0': 'OK?' }
            }
        },
        switch: {
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
            cmsOilSelfStart: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'Smart Generator auto start/stop switch',
                role: 'switch',
                cmsOilSelfStart: { '0': 'off', '1': 'on' }
            }
        }
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
                cfgDc12vOutOpen: { '0': 'off', '1': 'on' }
            },
            cfgAcOutOpen: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'AC output switch',
                role: 'switch',
                cfgAcOutOpen: { '0': 'off', '1': 'on' }
            },
            cfgUsbOpen: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'USB output switch',
                role: 'switch',
                cfgUsbOpen: { '0': 'off', '1': 'on' }
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
    delta3plus: {
        RuntimePropertyUpload: {
            tempPcsDc: { entity: 'number' },
            tempPcsAc: { entity: 'number' },
            plugInInfoAcOutType: { entity: 'diagnostic' },
            plugInInfoAcOutFreq: { entity: 'number' },
            plugInInfoAcOutVol: { entity: 'number' },
            plugInInfoAcInVol: { entity: 'number' },
            plugInInfoPv2Amp: { entity: 'number' },
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
            tempPv2: { entity: 'number' },
            plugInInfoPv2Vol: { entity: 'number' },
            plugInInfoDcpVol: { entity: 'number' },
            pdDcdcCommErr: { entity: 'string' },
            pdInvCommErr: { entity: 'string' },
            dcdcFirmVer: { entity: 'string' },
            invFirmVer: { entity: 'string' },
            plugInInfoDcpAmp: { entity: 'number' }
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
            powGetPv2: { entity: 'number' },
            plugInInfoPv2DcAmpMax: { entity: 'number' },
            plugInInfoPv2ChgAmpMax: { entity: 'number' },
            plugInInfoPv2ChgVolMax: { entity: 'number' },
            plugInInfoAcInChgMode: { entity: 'level' },
            pvDcChgSettingList: { entity: 'string' },
            utcTimezone: { entity: 'number' },
            utcTimezoneId: { entity: 'string' },
            utcSetMode: { entity: 'diagnostic' },
            plugInInfoPvChgMaxList: { entity: 'string' },
            plugInInfoPv2ChgMaxList: { entity: 'string' },
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
            flowInfoPv2: { entity: 'diagnostic' },
            plugInInfoPv2Flag: { entity: 'diagnostic' },
            plugInInfoPv2Type: { entity: 'diagnostic' },
            flowInfoDcpIn: { entity: 'diagnostic' },
            flowInfoDcpOut: { entity: 'diagnostic' },
            powGetDcp: { entity: 'number' },
            plugInInfoDcpInFlag: { entity: 'diagnostic' },
            plugInInfoDcpType: { entity: 'diagnostic' },
            plugInInfoDcpDetail: { entity: 'string' },
            plugInInfoPv2ChargerFlag: { entity: 'diagnostic' },
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
            stormPatternEndTime: { entity: 'number' }
        },
        setDp3: {
            cfgAcOutOpen: { entity: 'switch' },
            cfgDc12vOutOpen: { entity: 'switch' },
            cfgUsbOpen: { entity: 'switch' }
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
    delta3plus: {
        DisplayPropertyUpload: {
            number: {
                powOutSumW: { max: 1000 }
            }
        }
    }
};

const deviceCmd = {
    delta3plus: {
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
            plugInInfoAcInChgPowMax: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 7 } }
        },
        setDp3: {
            cfgAcOutOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cfgDc12vOutOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cfgUsbOpen: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } }
        },
        action: {
            latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
        }
    }
};

const protoMsg = {
    cmdId: {
        //  247: { cmdFunc: { 53: '' } },
        98: { cmdFunc: { 50: 'cmd98_cmdfunc50' } },
        // 50: { cmdFunc: { 32: 'cmdFunc32_cmdId50_Report' } }
        22: { cmdFunc: { 254: 'RuntimePropertyUpload' } },
        21: { cmdFunc: { 254: 'DisplayPropertyUpload' } },
        // 20: {cmdFunc: { 254: 'ack' } },
        19: { cmdFunc: { 254: 'cmd19_cmdfunc254' } },
        18: { cmdFunc: { 254: 'setReply_dp3' } },
        17: { cmdFunc: { 254: 'set_dp3' } },
        // 2: { cmdFunc: { 32: 'cmdFunc32_cmdId2_Report' } }
    }
};

const protobuf = require('protobufjs');
const compareUpdate = require('../ecoflow_utils.js').compareUpdate
const setOnlineStatus = require('../ecoflow_utils.js').setOnlineStatus
const setOfflineStatus = require('../ecoflow_utils.js').setOfflineStatus

async function storeProtoPayload(adapter, stateDictObj, stateObj, topic, payload, devtype, haenable, logged, cmdLockUpd) {
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
                                    logged,
                                    cmdLockUpd
                                );
                                if (Object.keys(haupd).length !== 0) haUpdate.push(haupd);
                            }
                            break;
                        case 'set_dp3':
                            for (let state in payload[channel]) {
                                if (state !== 'cfgAcOutOpen' &&
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
                                        cmdLockUpd
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
                                        logged,
                                        cmdLockUpd
                                    );
                                    if (Object.keys(haupd).length !== 0) haUpdate.push(haupd)
                                }
                            }
                            break;
                        case 'setReply_dp3':
                            //Auswertung ob OK und dann auf set_dp3 und zusätzlich in anderer struktur ohne cfg setzen
                            await setOnlineStatus(adapter, topic);
                            for (let state in payload[channel]) {
                                if (payload[channel]['configOk'] && payload[channel]['configOk'] == true) {
                                    if (state !== 'actionId' &&
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
                                            cmdLockUpd
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
                                            logged,
                                            cmdLockUpd
                                        );
                                        if (Object.keys(haupd).length !== 0) haUpdate.push(haupd)
                                    }
                                } else {
                                    adapter.log.warn('Not successfull command ' + JSON.stringify(payload[channel]))
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
                productId: 1,
                version: 19,
                payloadVer: 1,
                from: 'Android',
                // deviceSn: serial
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

message RuntimePropertyUpload { 
   optional float temp_pcs_dc = 26;
   optional float temp_pcs_ac = 27;
   optional uint32 plug_in_info_ac_out_type = 59;
   optional uint32 plug_in_info_ac_out_freq = 60;
   optional float plug_in_info_ac_out_vol = 67;
   optional float plug_in_info_ac_in_vol = 68;
   optional float plug_in_info_pv2_amp = 71;
   optional float plug_in_info_bms_vol = 169;
   optional uint32 pd_bms_comm_err = 174; //bool
   optional uint32 pd_iot_comm_err = 175; //bool
   optional uint32 pd_firm_ver = 176;
   optional uint32 iot_firm_ver = 177;
   optional float plug_in_info_ac_in_amp = 223;
   optional float plug_in_info_ac_out_amp = 224;
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
   optional float temp_pv = 379;
   optional float plug_in_info_pv_vol = 380;
   optional float plug_in_info_pv_amp = 381;
   optional float temp_pv2 = 440;
   optional float plug_in_info_pv2_vol = 442;
   optional float plug_in_info_dcp_vol = 443;
   optional uint32 pd_dcdc_comm_err = 444; //bool
   optional uint32 pd_inv_comm_err = 445; //bool
   optional uint32 dcdc_firm_ver = 446;
   optional uint32 inv_firm_ver = 447;
   optional float plug_in_info_dcp_amp = 448;
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

message DisplayPropertyUpload { 
   optional uint32 errcode = 1;
   optional float pow_in_sum_w = 3;
   optional float pow_out_sum_w = 4;
   optional uint32 lcd_light = 5;
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
   optional uint32 ac_always_on_flag = 22; //bool
   optional uint32 ac_always_on_mini_soc = 23;
   optional uint32 xboost_en = 25; //bool
   optional uint32 pcs_fan_level = 30;
   optional uint32 flow_info_12v = 33;
   optional float pow_get_12v = 37;
   optional uint32 flow_info_ac2dc = 45;
   optional uint32 flow_info_dc2ac = 46;
   optional uint32 flow_info_ac_in = 47;
   optional float pow_get_ac = 53;
   optional float pow_get_ac_in = 54;
   optional uint32 plug_in_info_ac_in_flag = 61;
   optional uint32 plug_in_info_ac_in_feq = 62;
   optional float pow_get_pv2 = 70;
   optional uint32 plug_in_info_pv2_dc_amp_max = 80;
   optional uint32 plug_in_info_pv2_chg_amp_max = 81;
   optional uint32 plug_in_info_pv2_chg_vol_max = 82;
   optional .AC_IN_CHG_MODE plug_in_info_ac_in_chg_mode = 124;
   optional .PvDcChgSettingList pv_dc_chg_setting_list = 125;
   optional int32 utc_timezone = 133;
   optional string utc_timezone_id = 134;
   optional uint32 utc_set_mode = 135; //bool
   optional .PvChgMaxList plug_in_info_pv_chg_max_list = 136;
   optional .PvChgMaxList plug_in_info_pv2_chg_max_list = 137;
   optional uint32 bms_err_code = 140;
   optional .WirelessCoordinateList wireless_coordinate_dev_list = 142;
   optional uint32 wireless_oil_self_start = 143; //bool
   optional uint32 wireless_oil_on_soc = 144;
   optional uint32 wireless_oil_off_soc = 145;
   optional uint32 bypass_out_disable = 146; //bool
   optional uint32 output_power_off_memory = 147; //bool
   optional uint32 flow_info_bms_dsg = 152;
   optional uint32 flow_info_bms_chg = 153;
   optional float pow_get_bms = 158;
   optional uint32 fast_charge_switch = 182;
   optional uint32 en_beep = 195; //bool
   optional uint32 plug_in_info_ac_charger_flag = 202; //bool
   optional uint32 plug_in_info_ac_in_chg_pow_max = 209;
   optional uint32 ac_out_freq = 211;
   optional uint32 dev_sleep_state = 212;
   optional uint32 pd_err_code = 213;
   optional .SetTimeTaskWrite time_task_current = 219;
   optional uint32 pcs_fan_err_flag = 226;
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
   optional uint32 time_task_conflict_flag = 285;
   optional uint32 time_task_change_cnt = 286;
   optional float pow_get_dc = 297;
   optional uint32 plug_in_info_pv_dc_amp_max = 356;
   optional uint32 flow_info_pv = 360;
   optional float pow_get_pv = 361;
   optional uint32 plug_in_info_pv_flag = 362; //bool
   optional uint32 plug_in_info_pv_type = 363;
   optional uint32 plug_in_info_pv_charger_flag = 364; //bool
   optional uint32 plug_in_info_pv_chg_amp_max = 365;
   optional uint32 plug_in_info_pv_chg_vol_max = 366;
   optional uint32 flow_info_ac_out = 367;
   optional float pow_get_ac_out = 368;
   optional uint32 flow_info_pv2 = 414;
   optional uint32 plug_in_info_pv2_flag = 421; //bool
   optional uint32 plug_in_info_pv2_type = 422;
   optional uint32 flow_info_dcp_in = 423;
   optional uint32 flow_info_dcp_out = 424;
   optional float pow_get_dcp = 425;
   optional uint32 plug_in_info_dcp_in_flag = 426; //bool
   optional uint32 plug_in_info_dcp_type = 427;
   optional uint32 plug_in_info_dcp_detail = 428;
   optional uint32 plug_in_info_pv2_charger_flag = 430; //bool
   optional uint32 plug_in_info_dcp_dsg_chg_type = 431;
   optional .ResvInfo plug_in_info_dcp_resv = 432;
   optional string plug_in_info_dcp_sn = 433;
   optional uint32 plug_in_info_dcp_firm_ver = 434;
   optional uint32 plug_in_info_dcp_charger_flag = 435; //bool
   optional uint32 plug_in_info_dcp_run_state = 436;
   optional uint32 dcdc_err_code = 437;
   optional uint32 plug_in_info_dcp_err_code = 438;
   optional uint32 inv_err_code = 450;
   optional uint32 cms_batt_pow_out_max = 459;
   optional uint32 cms_batt_pow_in_max = 460;
   optional uint32 cms_batt_full_energy = 462;
   optional uint32 storm_pattern_enable = 467; //bool
   optional uint32 storm_pattern_open_flag = 468; //bool
   optional uint32 storm_pattern_end_time = 469;

   /*
   393 not in reference object
    395 not in reference object
    396 not in reference object
    461 not in reference object
    */
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