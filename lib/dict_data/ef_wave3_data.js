const deviceStates = {
    RuntimePropertyUpload: {
        string: {
            displayPropertyFullUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'display property full upload period',
                role: 'info',
            },
        },
    },
    DisplayPropertyUpload: {
        string: {
            errcode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'errcode',
                role: 'info',
            },
            pcsFanLevel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pcs fan level',
                role: 'info',
            },
            utcTimezoneId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc timezone id',
                role: 'info',
            },
            bmsErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms err code',
                role: 'info',
            },
            pdErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pd err code',
                role: 'info',
            },
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
            plugInInfoDcpErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp err code',
                role: 'info',
            },
            tempPetCareWarning: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'temp Pet Care Warning',
            },
            powerOffDelaySet: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'powerOffDelaySet',
            },
            powerOffDelayRemaining: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'powerOffDelayRemaining',
            },
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
                subrole: 'number',
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
            powGetAc: {
                min: 0,
                max: 8000,
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
                max: 8000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Real-time AC input power',
                subrole: 'number',
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
                subrole: 'number',
            },
            currentTimeTaskV2Item: {
                min: 0,
                max: 60,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current time task v2 item',
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
            powGetBms: {
                min: 0,
                max: 8000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get bms',
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
                max: 80000,
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
                name: 'bms min mos temp',
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
                name: 'bms max mos temp',
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
                max: 60,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'time task change cnt',
                subrole: 'number',
            },
            plugInInfoPvDcAmpMax: {
                min: 0,
                max: 60,
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
                max: 60,
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
                max: 60,
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
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv chg vol max',
                subrole: 'number',
            },
            powGetDcp: {
                min: 0,
                max: 60,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get dcp',
                subrole: 'number',
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
                subrole: 'number',
            },
            tempAmbient: {
                min: 0,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'ambient temperature',
                role: 'value',
                name: 'inlet temp?',
                subrole: 'number',
            },
            humiAmbient: {
                min: 0,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'ambient humidity',
                role: 'value',
                name: 'humidity?',
                subrole: 'number',
            },

            tempIndoorSupplyAir: {
                min: 0,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'outlet temp?',
                subrole: 'number',
            },
            powGetSelfConsume: {
                min: 0,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Power Self Consumtion',
                subrole: 'number',
            },
            condensateWaterLevel: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'battery',
                role: 'value',
                name: 'condensateWaterLevel',
                subrole: 'number',
            },
            powerOffDelaySet: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                name: 'power Off Delay Set',
                role: 'value',
                subrole: 'number',
            },
            powerOffDelayRemaining: {
                min: 0,
                unit_of_measurement: 'min',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'duration',
                name: 'power OffD elay Remaining',
                role: 'value',
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
                //device_class: 'illuminance',
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
                select_obj: {
                    Never: 0,
                    '10 s': 10,
                    '30 s': 30,
                    '1 min': 60,
                    '5 min': 300,
                    '30 min': 1800,
                },
                states: {
                    0: 'Never',
                    10: '10 s',
                    30: '30 s',
                    60: '1 min',
                    300: '5 min',
                    1800: '30 min',
                },
            },
            plugInInfoAcInChgPowMax: {
                min: 100,
                max: 1500,
                unit_of_measurement: 'W',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'power',
                name: 'Maximum AC input power for charging',
                role: 'level',
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
        },
        diagnostic: {
            flowInfoQcusb1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'USB output port 1 switch status',
                role: 'info',
                flowInfoQcusb1: { 0: 'off', 2: 'on' },
            },
            flowInfoTypec1: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Type-C port 1 switch status',
                role: 'info',
                flowInfoTypec1: { 0: 'off', 2: 'on' },
            },
            flowInfoAc2dc: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info ac2dc',
                role: 'info',
                flowInfoAc2dc: { 0: 'off', 2: 'on' },
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
            flowInfoBmsDsg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info bms dsg',
                role: 'info',
                flowInfoBmsDsg: { 0: 'off', 2: 'on' },
            },
            flowInfoBmsChg: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'flow info bms chg',
                role: 'info',
                flowInfoBmsChg: { 0: 'off', 2: 'on' },
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
                bmsChgDsgState: {
                    0: 'not charging or discharging',
                    1: 'discharging',
                    2: 'charging',
                },
            },
            cmsChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charging/Discharging status',
                role: 'info',
                cmsChgDsgState: {
                    0: 'not charging or discharging',
                    1: 'discharging',
                    2: 'charging',
                },
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
            userTempUnit: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Unit of Temperature ',
                role: 'info',
                userTempUnit: { 0: 'not set?', 1: '°C (Celsius)', 2: '°F (Fahrenheit)' },
            },
            waveOperatingMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wave Operating Mode',
                waveOperatingMode: {
                    0: 'NULL',
                    1: 'COOLING',
                    2: 'HEATING',
                    3: 'VENTING',
                    4: 'DEHUMIDIFYING',
                    5: 'THERMOSTATIC',
                },
            },
            inDrainage: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'inDrainage',
                inDrainage: { 0: 'off?', 1: 'on?' },
            },
            drainageMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'drainageMode',
                drainageMode: { 0: 'off?', 1: 'on?' },
            },
            moodLightMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'moodLightMode',
                moodLightMode: { 0: 'off?', 1: 'on?', 2: 'dim?' },
            },
            lcdShowTempType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'lcdShowTempType',
                lcdShowTempType: { 0: 'off?', 1: 'on?' },
            },
            enPetCare: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: ' enPetCare',
                enPetCare: { 0: 'off', 1: 'on' },
            },
            petCareWarning: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'petCareWarning',
                petCareWarning: { 0: 'off?', 1: 'on?' },
            },
        },
        array: {
            waveModeInfo: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'wave mode info',
            },
            devErrcodeList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'device error code list',
            },
        },
        switch: {
            enBeep: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'Beeper on/off. (true: on, false: off.)',
                role: 'switch',
                enBeep: { 0: 'off', 1: 'on' },
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
    wave3: {
        RuntimePropertyUpload: {
            displayPropertyFullUploadPeriod: { name: 'errcode', entity: 'string' },
        },
        DisplayPropertyUpload: {
            errcode: { name: 'errcode', entity: 'string' },
            powInSumW: { name: 'Total input power', entity: 'number' },
            powOutSumW: { name: 'Total output power', entity: 'number' },
            lcdLight: { name: 'Screen brightness', entity: 'level' },
            powGetQcusb1: { name: 'Real-time power of the USB 1 port', entity: 'number' },
            powGetTypec1: { name: 'Real-time power of Type-C port 1', entity: 'number' },
            flowInfoQcusb1: { name: 'USB output port 1 switch status', entity: 'diagnostic' },
            flowInfoTypec1: { name: 'Type-C port 1 switch status', entity: 'diagnostic' },
            devStandbyTime: { name: 'Device timeout', entity: 'level' },
            screenOffTime: { name: 'Screen timeout', entity: 'level' },
            pcsFanLevel: { name: 'pcs fan level', entity: 'string' },
            flowInfoAc2dc: { name: 'flow info ac2dc', entity: 'diagnostic' },
            flowInfoAcIn: { name: 'AC input switch status', entity: 'diagnostic' },
            powGetAc: { name: 'Real-time AC power', entity: 'number' },
            powGetAcIn: { name: 'Real-time AC input power', entity: 'number' },
            plugInInfoAcInFlag: {
                name: 'Indicates whether the AC charging port is connected',
                entity: 'diagnostic',
            },
            plugInInfoAcInFeq: { name: 'AC input frequency', entity: 'number' },
            currentTimeTaskV2Item: { name: 'current time task v2 item', entity: 'number' },
            utcTimezone: { name: 'utc timezone', entity: 'number' },
            utcTimezoneId: { name: 'utc timezone id', entity: 'string' },
            utcSetMode: { name: 'utc set mode', entity: 'diagnostic' },
            bmsErrCode: { name: 'bms err code', entity: 'string' },
            flowInfoBmsDsg: { name: 'flow info bms dsg', entity: 'diagnostic' },
            flowInfoBmsChg: { name: 'flow info bms chg', entity: 'diagnostic' },
            powGetBms: { name: 'pow get bms', entity: 'number' },
            enBeep: {
                name: 'Indicates whether the beeper is turned on',
                entity: 'switch',
            },
            plugInInfoAcChargerFlag: {
                name: 'Indicates whether the charger is connected to the AC port',
                entity: 'diagnostic',
            },
            plugInInfoAcInChgPowMax: { name: 'Maximum AC charging power', entity: 'level' },
            devSleepState: { name: 'Sleep status.', entity: 'diagnostic' },
            pdErrCode: { name: 'pd err code', entity: 'string' },
            plugInInfoAcOutDsgPowMax: { name: 'Maximum AC discharging power', entity: 'number' },
            bmsBattSoc: { name: 'SOC of the main battery', entity: 'number' },
            bmsBattSoh: { name: 'bms batt soh', entity: 'number' },
            bmsDesignCap: { name: 'Battery capacity', entity: 'number' },
            bmsDsgRemTime: { name: 'Remaining discharging time', entity: 'number' },
            bmsChgRemTime: {
                name: 'Remaining charging time of the main battery',
                entity: 'number',
            },
            bmsMinCellTemp: { name: 'Minimum temperature of the main battery', entity: 'number' },
            bmsMaxCellTemp: { name: 'Temperature of the main battery', entity: 'number' },
            bmsMinMosTemp: { name: 'bms min mos temp', entity: 'number' },
            bmsMaxMosTemp: { name: 'bms max mos temp', entity: 'number' },
            cmsBattSoc: { name: 'Overall SOC', entity: 'number' },
            cmsBattSoh: { name: 'cms batt soh', entity: 'number' },
            cmsDsgRemTime: { name: 'Remaining discharging time', entity: 'number' },
            cmsChgRemTime: { name: 'Remaining charging time', entity: 'number' },
            cmsMaxChgSoc: { name: 'Charge limit', entity: 'level' },
            cmsMinDsgSoc: { name: 'Discharge limit.', entity: 'level' },
            cmsBmsRunState: { name: 'On/Off status', entity: 'diagnostic' },
            bmsChgDsgState: {
                name: 'Charging/Discharging status of the main battery',
                entity: 'diagnostic',
            },
            cmsChgDsgState: { name: 'Charging/Discharging status', entity: 'diagnostic' },
            timeTaskConflictFlag: { name: 'time task conflict flag', entity: 'diagnostic' },
            timeTaskChangeCnt: { name: 'time task change cnt', entity: 'number' },
            plugInInfoPvDcAmpMax: { name: 'plug in info pv dc amp max', entity: 'number' },
            flowInfoPv: { name: 'flow info pv', entity: 'diagnostic' },
            powGetPv: { name: 'pow get pv', entity: 'number' },
            plugInInfoPvType: { name: 'plug in info pv type', entity: 'diagnostic' },
            plugInInfoPvChargerFlag: { name: 'plug in info pv charger flag', entity: 'diagnostic' },
            plugInInfoPvChgAmpMax: { name: 'plug in info pv chg amp max', entity: 'number' },
            plugInInfoPvChgVolMax: { name: 'plug in info pv chg vol max', entity: 'number' },
            flowInfoDcpIn: { name: 'flow info dcp in', entity: 'diagnostic' },
            flowInfoDcpOut: { name: 'flow info dcp out', entity: 'diagnostic' },
            powGetDcp: { name: 'pow get dcp', entity: 'number' },
            plugInInfoDcpInFlag: { name: 'plug in info dcp in flag', entity: 'diagnostic' },
            plugInInfoDcpType: { name: 'plug in info dcp type', entity: 'diagnostic' },
            plugInInfoDcpDetail: { name: 'plug in info dcp detail', entity: 'string' },
            plugInInfoDcpDsgChgType: { name: 'plug in info dcp dsg chg type', entity: 'diagnostic' },
            plugInInfoDcpResv: { name: 'plug in info dcp resv', entity: 'string' },
            plugInInfoDcpSn: { name: 'plug in info dcp sn', entity: 'string' },
            plugInInfoDcpFirmVer: { name: 'plug in info dcp firm ver', entity: 'string' },
            plugInInfoDcpChargerFlag: { name: 'plug in info dcp charger flag', entity: 'diagnostic' },
            plugInInfoDcpRunState: { name: 'plug in info dcp run state', entity: 'diagnostic' },
            plugInInfoDcpErrCode: { name: 'plug in info dcp err code', entity: 'string' },
            plugInInfoAcInChgHalPowMax: { name: 'Maximum AC charging power.', entity: 'number' },
            tempAmbient: { entity: 'number' }, //cmd
            humiAmbient: { entity: 'number' }, //cmd
            waveOperatingMode: { entity: 'diagnostic' },
            tempIndoorSupplyAir: { entity: 'number' },
            condensateWaterLevel: { entity: 'number' },
            inDrainage: { entity: 'diagnostic' },
            drainageMode: { entity: 'diagnostic' }, //cmd
            moodLightMode: { entity: 'diagnostic' }, //cmd
            lcdShowTempType: { entity: 'diagnostic' },
            enPetCare: { entity: 'diagnostic' }, //cmd
            tempPetCareWarning: { entity: 'string' }, //cmd
            userTempUnit: { entity: 'diagnostic' }, //cmd
            petCareWarning: { entity: 'diagnostic' },
            waveModeInfo: { entity: 'array' },
            devErrcodeList: { entity: 'array' },
            powGetSelfConsume: { entity: 'number' },
            powerOffDelaySet: { entity: 'string' },
            powerOffDelayRemaining: { entity: 'string' },
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
    wave3: {
        DisplayPropertyUpload: {
            xboostEn: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            enBeep: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMaxChgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMinDsgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            lcdLight: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 2 } },
            devStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            screenOffTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },

            plugInInfoAcInChgPowMax: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 7 } },
        },
        action: {
            latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } },
        },
    },
};

const protoMsg = {
    cmdFunc: {
        50: { cmdId: { 98: 'AppRuquestBpEuLawData' } }, //APP_CMD_ID_EU_LAW_ACK
        254: {
            cmdId: {
                17: 'ConfigWrite',
                18: 'ConfigWriteAck',
                19: 'ConfigRead',
                20: 'ConfigReadAck',
                21: 'DisplayPropertyUpload',
                22: 'RuntimePropertyUpload',
            },
        },
    },
};

const msgNameObj = {
    DisplayPropertyUpload: { cmdId: 21, cmdFunc: 254 },
    RuntimePropertyUpload: { cmdId: 22, cmdFunc: 254 },
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
                                // all cases without nested states
                                await setOnlineStatus(adapter, topic);
                                for (let state in payload[channel]) {
                                    let val;
                                    let haupd;
                                    switch (state) {
                                        case 'displayStatisticsSum':
                                        case 'runtimeStatisticsSum':
                                            adapter.log.debug(
                                                'StatisticsSum is available for delta3plus. Please inform developer.',
                                            );
                                            /*
                                        const statisticObjets = ['start', 'devWorkTime', 'acOutEnergy', 'dc12VoutEnergy', 'typecOutEnergy', 'usbaOutEnergy', 'acInEnergy', 'pvInEnergy', 'acIn0W100WTime', 'acInOver100WTime', 'acOut0W50WTime', 'acOut50W100WTime', 'acOut100W200WTime', 'acOutOver200WTime', 'acOut200W300WTime', 'acOut300W400WTime', 'acOut400W500WTime', 'acOutOver500WTime', 'pvInTime', 'typecInTime', 'dcOut0W60WTime', 'dcOutOver60WTime', 'typecOut0W30WTime', 'typecOut30W60WTime', 'typecOutOver60WTime', 'usbaOutTime', 'ledOutTime']
                                        for (let listItem in payload[channel][state]['listInfo']) {
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
                                        */
                                            break;
                                        case 'wave':
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
                            case 'ConfigWrite':
                                break;
                            case 'ConfigWriteAck':
                                break;
                            case 'ConfigRead':
                            case 'ConfigReadAck':
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
}

const protoSource = `
syntax = "proto3";


message AppRuquestBpEuLawData {
  optional string pack_sn = 1;
  optional uint32 app_to_bms_launch_date = 2;
  optional uint32 app_launch_date_set_type = 3;
  optional uint32 app_to_bms_reset_flag = 4;
  optional uint32 bms_data_upload_en = 5;
}

message ConfigReadAck {
  optional uint32 cfg_utc_time = 6;
  optional int32 cfg_utc_timezone = 7;
  optional .GetAllTimeTaskReadck get_time_task_list = 41;
  optional .TimeTaskItemV2List read_time_task_v2_list = 129;
  optional uint32 get_pd_firm_ver = 144;
  optional uint32 get_iot_firm_ver = 145;
  optional uint32 get_mppt_firm_ver = 146;
  optional uint32 get_llc_firm_ver = 147;
  optional uint32 get_inv_firm_ver = 148;
  optional uint32 get_bms_firm_ver = 149;
}

message ConfigRead {
  repeated uint32 action_id = 1;
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
  optional bool is_cfg = 2;
  optional bool is_enable = 3;
  optional uint32 conflict_flag = 4;
  optional .TIME_TASK_MODE time_mode = 5;
  optional uint32 time_param = 6;
  optional uint32 time_table = 7;
  optional .TIME_TASK_TYPE task_type = 8;
  optional uint32 task_param = 9;
  repeated .TimeTaskParamDetail task_param_detail = 10;
}

message TimeTaskItemV2List {
  repeated .TimeTaskItemV2 time_task = 1;
}

message RuntimePropertyUpload { 
  optional float temp_pcs_dc = 26;
  optional float temp_pcs_ac = 27;
  optional float plug_in_info_ac_in_vol = 68;
  optional float plug_in_info_bms_vol = 169;
  optional int32 pd_mppt_comm_err = 172; //bool
  optional int32 pd_llc_comm_err = 173; //bool
  optional int32 pd_bms_comm_err = 174; //bool
  optional int32 pd_iot_comm_err = 175; //bool
  optional uint32 pd_firm_ver = 176;
  optional uint32 iot_firm_ver = 177;
  optional uint32 mppt_firm_ver = 178;
  optional uint32 llc_firm_ver = 179;
  optional float plug_in_info_ac_in_amp = 223;
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
  optional float plug_in_info_dcp_vol = 443;
  optional float plug_in_info_dcp_amp = 448;
  optional float temp_indoor_return_air = 493;
  optional float temp_outdoor_ambient = 495;
  optional float temp_condenser = 496;
  optional float temp_evaporator = 499;
  optional float temp_compressor_discharge = 503;
}


enum USER_TEMP_UNIT_TYPE {
  USER_TEMP_UNIT_NONE = 0;
  USER_TEMP_UNIT_C = 1;
  USER_TEMP_UNIT_F = 2;
}

message DevErrcodeList {
  repeated uint32 dev_errcode = 1;
}

message WaveOperatingModeParamItem {
  optional uint32 submode = 1;
  optional uint32 airflow_speed = 2;
  optional float temp_set = 3;
  optional float humi_set = 4;
  optional float temp_thermostatic_upper_limit = 5;
  optional float temp_thermostatic_lower_limit = 6;
}

message WaveOperatingModeParamList {
  repeated WaveOperatingModeParamItem list_info = 1;
}

message DisplayPropertyUpload {
   optional uint32 errcode = 1;
   optional float pow_in_sum_w = 3;
   optional float pow_out_sum_w = 4;
   optional uint32 lcd_light = 5;
   optional float pow_get_qcusb1 = 9;
   optional float pow_get_typec1 = 11;
   optional uint32 flow_info_qcusb1 = 13;
   optional uint32 flow_info_typec1 = 15;
   optional uint32 dev_standby_time = 17;
   optional uint32 screen_off_time = 18;
   optional uint32 pcs_fan_level = 30;
   optional uint32 flow_info_ac2dc = 45;
   optional uint32 flow_info_ac_in = 47;
   optional float pow_get_ac = 53;
   optional float pow_get_ac_in = 54;
   optional uint32 plug_in_info_ac_in_flag = 61;
   optional uint32 plug_in_info_ac_in_feq = 62;
   optional .TimeTaskItemV2 current_time_task_v2_item = 126;
   optional int32 utc_timezone = 133;
   optional string utc_timezone_id = 134;
   optional bool utc_set_mode = 135;
   optional uint32 bms_err_code = 140;
   optional uint32 flow_info_bms_dsg = 152;
   optional uint32 flow_info_bms_chg = 153;
   optional float pow_get_bms = 158;
   optional bool en_beep = 195;
   optional bool plug_in_info_ac_charger_flag = 202;
   optional uint32 plug_in_info_ac_in_chg_pow_max = 209;
   optional uint32 dev_sleep_state = 212;
   optional uint32 pd_err_code = 213;
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
   optional uint32 cms_bms_run_state = 275;
   optional uint32 bms_chg_dsg_state = 281;
   optional uint32 cms_chg_dsg_state = 282;
   optional uint32 time_task_conflict_flag = 285;
   optional uint32 time_task_change_cnt = 286;
   optional uint32 plug_in_info_pv_dc_amp_max = 356;
   optional uint32 flow_info_pv = 360;
   optional float pow_get_pv = 361;
   optional uint32 plug_in_info_pv_type = 363;
   optional bool plug_in_info_pv_charger_flag = 364;
   optional uint32 plug_in_info_pv_chg_amp_max = 365;
   optional uint32 plug_in_info_pv_chg_vol_max = 366;
   optional string bms_main_sn = 392;
   optional uint32 flow_info_dcp_in = 423;
   optional uint32 flow_info_dcp_out = 424;
   optional float pow_get_dcp = 425;
   optional bool plug_in_info_dcp_in_flag = 426;
   optional uint32 plug_in_info_dcp_type = 427;
   optional uint32 plug_in_info_dcp_detail = 428;
   optional uint32 plug_in_info_dcp_dsg_chg_type = 431;
   optional .ResvInfo plug_in_info_dcp_resv = 432;
   optional string plug_in_info_dcp_sn = 433;
   optional uint32 plug_in_info_dcp_firm_ver = 434;
   optional bool plug_in_info_dcp_charger_flag = 435;
   optional uint32 plug_in_info_dcp_run_state = 436;
   optional uint32 plug_in_info_dcp_err_code = 438;
   optional uint32 plug_in_info_ac_in_chg_hal_pow_max = 458;
   optional float temp_ambient = 484;
   optional float humi_ambient = 485;
   optional uint32 wave_operating_mode = 486;
    optional float temp_indoor_supply_air = 494;
    optional float condensate_water_level = 504;
    optional bool in_drainage = 505;
    optional uint32 drainage_mode = 506;
    optional uint32 mood_light_mode = 507;
    optional uint32 lcd_show_temp_type = 508;
    optional bool en_pet_care = 509;
    optional float temp_pet_care_warning = 510;
    optional USER_TEMP_UNIT_TYPE user_temp_unit = 512;
    optional bool pet_care_warning = 513;
    optional WaveOperatingModeParamList wave_mode_info = 514;
    optional DevErrcodeList dev_errcode_list = 627;
    optional float pow_get_self_consume = 777;
    optional uint32 power_off_delay_set = 778;
    optional uint32 power_off_delay_remaining = 779;
   
}

message SetTimeTaskWrite {
  optional uint32 task_index = 1;
  optional bool is_valid = 2;
  optional bool is_cfg = 3;
  optional bool is_enable = 4;
  optional uint32 conflict_flag = 5;
  optional uint32 type = 6;
  optional uint32 time_mode = 7;
  optional uint32 time_param = 8;
  repeated uint32 time_table = 9;
}

message SetTimeTaskWriteAck {
  optional uint32 task_index = 1;
  optional uint32 type = 2;
  optional uint32 sta = 3;
}

message GetAllTimeTaskReadck {
  repeated SetTimeTaskWrite time_task = 1;
}

message CfgBmsPushWrite {
  optional bool bms_heartbeap_open = 1;
  optional bool bms_health_open = 2;
  optional uint32 bms_heartbeap_freq = 3;
  optional uint32 bms_health_freq = 4;
}

message CfgBmsPushWriteAck {
  optional bool bms_heartbeap_open = 1;
  optional bool bms_health_open = 2;
}

message ConfigWrite {
    optional int32 cfgPowerOff = 3;
    optional uint32 cfg_utc_time = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 enBeep = 9;
    optional int32 screenOffTime = 12;
    optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;

    optional uint32 cfg_soc_cali = 31;
    optional CfgBmsPushWrite cfg_bms_push = 32;
    optional SetTimeTaskWrite set_time_task = 39;
    optional uint32 cfg_plug_in_info_ac_in_chg_pow_max = 54;
    optional int32 cfg_display_property_full_upload_period = 67;
    optional int32 cfg_display_property_incremental_upload_period = 68;
    optional int32 cfg_runtime_property_full_upload_period = 69;
    optional int32 cfg_runtime_property_incremental_upload_period = 70;
    optional bool active_display_property_full_upload = 71;
    optional bool active_runtime_property_full_upload = 72;
    optional uint32 cfg_plug_in_info_pv_dc_amp_max = 87;
    optional TimeTaskItemV2 cfg_time_task_v2_item = 127;
    optional uint32 active_selected_time_task_v2 = 128;
    optional string cfg_utc_timezone_id = 135;
    optional bool cfg_utc_set_mode = 136;
    optional uint32 cfg_wave_operating_mode = 153;
    optional uint32 cfg_wave_operating_submode = 154;
    optional uint32 cfg_airflow_speed = 155;
    optional float cfg_temp_set = 156;
    optional float cfg_humi_set = 157;
    optional float cfg_temp_thermostatic_upper_limit = 158;
    optional float cfg_temp_thermostatic_lower_limit = 159;
    optional uint32 cfg_drainage_mode = 160;
    optional uint32 cfg_mood_light_mode = 161;
    optional uint32 cfg_lcd_show_temp_type = 162;
    optional bool cfg_en_pet_care = 163;
    optional float cfg_temp_pet_care_warning = 164;
    optional USER_TEMP_UNIT_TYPE cfg_user_temp_unit = 166;
    optional bool cfg_sys_pause = 172;
    optional uint32 cfg_power_off_delay_set = 209;
}

message ConfigWriteAck {
    optional int32 actionId = 1;
    optional bool configOk = 2; //bool
    optional uint32 cfg_utc_time = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 enBeep = 9;
    optional int32 screenOffTime = 12;
    optional int32 devStandbyTime = 13;
    optional int32 lcdLight = 14;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;

    optional uint32 cfg_soc_cali = 31;
    optional CfgBmsPushWriteAck cfg_bms_push = 32;
    optional SetTimeTaskWriteAck set_time_task = 39;
    optional uint32 cfg_plug_in_info_ac_in_chg_pow_max = 54;
    optional int32 cfg_display_property_full_upload_period = 67;
    optional int32 cfg_display_property_incremental_upload_period = 68;
    optional int32 cfg_runtime_property_full_upload_period = 69;
    optional int32 cfg_runtime_property_incremental_upload_period = 70;
    optional bool active_display_property_full_upload = 71;
    optional bool active_runtime_property_full_upload = 72;
    optional uint32 cfg_plug_in_info_pv_dc_amp_max = 87;
    optional TimeTaskItemV2 cfg_time_task_v2_item = 127;
    optional uint32 active_selected_time_task_v2 = 128;
    optional string cfg_utc_timezone_id = 135;
    optional bool cfg_utc_set_mode = 136;
    optional uint32 cfg_wave_operating_mode = 153;
    optional uint32 cfg_wave_operating_submode = 154;
    optional uint32 cfg_airflow_speed = 155;
    optional float cfg_temp_set = 156;
    optional float cfg_humi_set = 157;
    optional float cfg_temp_thermostatic_upper_limit = 158;
    optional float cfg_temp_thermostatic_lower_limit = 159;
    optional uint32 cfg_drainage_mode = 160;
    optional uint32 cfg_mood_light_mode = 161;
    optional uint32 cfg_lcd_show_temp_type = 162;
    optional bool cfg_en_pet_care = 163;
    optional float cfg_temp_pet_care_warning = 164;
    optional USER_TEMP_UNIT_TYPE cfg_user_temp_unit = 166;
    optional bool cfg_sys_pause = 172;
    optional uint32 cfg_power_off_delay_set = 209;
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

`;

module.exports = {
    deviceStates,
    deviceStatesDict,
    deviceCmd,
    protoMsg,
    protoSource,
    prepareProtoCmd,
    storeProtoPayload,
    msgNameObj,
};
