const deviceStates = {
    RuntimePropertyUpload: {
        string: {
            displayPropertyFullUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Display Property Full Upload Period',
                role: 'info',
            },
            displayPropertyIncrementalUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Display Property Incremental Upload Period',
                role: 'info',
            },
            runtimePropertyFullUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Runtime Property Full Upload Period',
                role: 'info',
            },
            runtimePropertyIncrementalUploadPeriod: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Runtime Property Incremental Upload Period',
                role: 'info',
            },
        },
    },
    DisplayPropertyUpload: {
        diagnostic: {
            utcSetMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc set mode',
                role: 'info',
                utcSetMode: { 0: 'OK?' },
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
                bmsChgDsgState: { 0: 'not charging or discharging', 1: 'discharging', 2: 'charging' },
            },
            cmsChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charging/Discharging status',
                role: 'info',
                cmsChgDsgState: { 0: 'not charging or discharging', 1: 'discharging', 2: 'charging' },
            },
            plugInInfoPvFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv flag',
                role: 'info',
                plugInInfoPvFlag: { 0: 'OK?' },
            },
            plugInInfoPv2Flag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv2 flag',
                role: 'info',
                plugInInfoPv2Flag: { 0: 'OK?' },
            },
            plugInInfoPv3Flag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv3 flag',
                role: 'info',
                plugInInfoPv3Flag: { 0: 'OK?' },
            },
            plugInInfoPv4Flag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv4 flag',
                role: 'info',
                plugInInfoPv4Flag: { 0: 'OK?' },
            },
            bmsBattHeating: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms Batt Heating status',
                role: 'info',
                bmsBattHeating: { 0: 'off?', 1: 'on' },
            },
            relay1Onoff: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'relay 1 status',
                role: 'info',
                relay1Onoff: { 0: 'off?', 1: 'on' },
            },
            relay4Onoff: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'relay 4 status',
                role: 'info',
                relay4Onoff: { 0: 'off?', 1: 'on' },
            },
            feedGridMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'feed grid mode',
                role: 'info',
                feedGridMode: { 1: 'online?' },
            },
            stormPatternEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'storm pattern enable',
                role: 'info',
                stormPatternEnable: { 0: 'off?', 1: 'on?' },
            },
            stormPatternOpenFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'storm pattern open flag',
                role: 'info',
                stormPatternOpenFlag: { 0: 'off?', 1: 'on?' },
            },
            energyBackupState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'energy Backup State',
                role: 'info',
                energyBackupState: { 0: 'OK?' },
            },
            gridConnectionSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'grid Connection Sta',
                role: 'info',
                gridConnectionSta: { 0: 'GRD_STA_NO_VAILD', 1: 'GRID_IN', 2: 'GRID_NOT_ONLINE', 3: 'FEED_GRID' },
            },
            gridCodeSelection: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'grid Code Selection',
                role: 'info',
                gridCodeSelection: {
                    0: 'NULL',
                    1: 'AUSTRIA',
                    2: 'SWITZER',
                    3: 'POLAND',
                    4: 'NETHERLANDS',
                    5: 'VDE_4105',
                    6: 'IEEE_1547',
                    7: 'USER_DEFINED',
                    8: 'NORWAY',
                    9: 'CZECH_REPUBLIC',
                    10: 'DENMARK',
                    11: 'IRELAND',
                    12: 'SWEDEN',
                    13: 'LATVIA',
                    14: 'GREECE_A',
                    15: 'GREECE_B',
                    16: 'PORTUGAL',
                    17: 'ROMANIA',
                    18: 'LITHUANIA',
                    19: 'HUNGARY',
                    20: 'ITALY',
                    21: 'G98',
                    22: 'G99',
                    23: 'NTS_631',
                    24: 'UNE_217001',
                    25: 'UNE_217002',
                    26: 'UTE_MAINLAND',
                    27: 'UTE_50HZ_ISLAND',
                    28: 'UTE_60HZ_ISLAND',
                    29: 'BELGIUM',
                    30: 'UKRAINE',
                    31: 'SLOVENIA',
                    32: 'BULGARIA',
                    33: 'EU_GENERAL',
                    1001: 'NORTH_AMERICA',
                },
            },
            distributedDeviceStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'distributed Device Status',
                role: 'info',
                distributedDeviceStatus: { 0: 'Election', 1: 'Master', 2: 'Slave' },
            },
            seriesConnectDeviceStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'series Connect Device Status',
                role: 'info',
                seriesConnectDeviceStatus: { 0: 'Election', 1: 'Master', 2: 'Slave' },
            },
            devCtrlStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'dev Ctrl Status',
                role: 'info',
                devCtrlStatus: { 0: 'not ok?', 1: 'ok?' },
            },
            updateBanFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'update Ban Flag',
                role: 'info',
                updateBanFlag: { 0: 'not set?', 1: 'set?' },
            },
        },
        number: {
            powGetPv2: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv2',
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
            invNtcTemp3: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'inv Ntc Temp 3',
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
                max: 1920,
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
            powGetPv3: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv3',
                subrole: 'number',
            },
            powGetPv4: {
                min: 0,
                max: 600,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv4',
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
                name: 'plug in info pv1 vol',
                subrole: 'number',
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
                subrole: 'number',
            },
            plugInInfoPv3Vol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv3 vol',
                subrole: 'number',
            },
            plugInInfoPv4Vol: {
                min: 0,
                max: 60,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'plug in info pv4 vol',
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
                name: 'plug in info pv1 current',
                subrole: 'number',
            },
            plugInInfoPv2Amp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv2 current',
                subrole: 'number',
            },
            plugInInfoPv3Amp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv3 current',
                subrole: 'number',
            },
            plugInInfoPv4Amp: {
                min: 0,
                max: 15,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'plug in info pv4 current',
                subrole: 'number',
            },
            powGetSysGrid: {
                min: 0,
                max: 3000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get sys grid',
                subrole: 'number',
            },
            powGetSysLoad: {
                min: 0,
                max: 3000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get sys load',
                subrole: 'number',
            },
            powGetPvSum: {
                min: 0,
                max: 2400,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get pv sum',
                subrole: 'number',
            },
            powGetBpCms: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get bp cms',
                subrole: 'number',
            },
            powSysAcOutMax: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow sys ac out max',
                subrole: 'number',
            },
            powGetSysLoadFromBp: {
                min: 0,
                max: 2500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get gys load from bp',
                subrole: 'number',
            },
            powGetSysLoadFromGrid: {
                min: 0,
                max: 3000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow get sys load from grid',
                subrole: 'number',
            },
            powSysAcInMax: {
                min: 0,
                max: 3000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'pow Sys Ac In Max',
                subrole: 'number',
            },
            socketMeasurePower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'socket Measure Power',
                subrole: 'number',
            },
            powGetSchuko1: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Power Outlet 1',
                subrole: 'number',
            },
            powGetSchuko2: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Power Outlet 2',
                subrole: 'number',
            },
            busbarPowLimit: {
                min: 0,
                max: 2300,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Busbar Power Limit',
                subrole: 'number',
            },
            gridConnectionVol: {
                min: 0,
                max: 250,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'grid Connection Vol',
                subrole: 'number',
            },
            gridConnectionFreq: {
                min: 0,
                max: 62,
                unit_of_measurement: 'Hz',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'frequency',
                role: 'value',
                name: 'grid connection freq',
                subrole: 'number',
            },
            gridConnectionPower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Grid Connection Power',
                subrole: 'number',
            },
            sysGridConnectionPower: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'sys Grid Connection Power',
                subrole: 'number',
            },
            powGetSysLoadFromPv: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power get sys load from Pv ',
                subrole: 'number',
            },
            maxInvInput: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'max Inv Input',
                subrole: 'number',
            },
            maxInvOutput: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'max Inv Output',
                subrole: 'number',
            },
            maxBpInput: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'max Bp Input',
                subrole: 'number',
            },
            maxBpOutput: {
                min: 0,
                max: 2000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'max Bp Output',
                subrole: 'number',
            },
            feedGridModePowLimit: {
                min: 0,
                max: 1500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'feed Grid Mode Pow Limit',
                subrole: 'number',
            },
            feedGridModePowMax: {
                min: 0,
                max: 1500,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'feed Grid Mode Pow Max',
                subrole: 'number',
            },
            brightness: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'sensor',
                //device_class: 'illuminance',
                role: 'value',
                name: 'brightness',
                subrole: 'brightness',
            },
        },
        string: {
            utcTimezoneId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc timezone id',
                role: 'info',
            },
            townCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'town code',
                role: 'info',
            },
            gridSysDeviceCnt: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'grid Sys Device Cnt',
                role: 'info',
            },
            systemMeshId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'system Mesh Id',
                role: 'info',
            },
            systemGroupId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'system Group Id',
                role: 'info',
            },
            seriesConnectDeviceId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'series Connect Device Id',
                role: 'info',
            },
            moduleWifiRssi: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wi-Fi signal intensity',
            },
            gridCodeVersion: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'grid Code Version',
            },
        },
        level: {
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
            backupReverseSoc: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'Backup Reserve SOC',
                role: 'level',
            },
            powConsumptionMeasurement: {
                min: 1,
                max: 2,
                unit_of_measurement: '',
                mult: 1,
                step: 1,
                entity_type: 'select',
                name: 'pow Consumption Measurement handling',
                role: 'level',
                //subrole: 'timer',
                select: ['partial autom', 'smart meter'],
                select_obj: {
                    Never: 1,
                    'partial autom': 1,
                    'smart meter': 2,
                },
                states: {
                    1: 'partial autom',
                    2: 'smart meter',
                },
            },
        },
        switch: {
            relay2Onoff: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'relay AC out #1',
                role: 'switch',
                relay2Onoff: { 0: 'off?', 1: 'on' },
            },
            relay3Onoff: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'relay AC out #2',
                role: 'switch',
                relay3Onoff: { 0: 'off?', 1: 'on' },
            },
        },
        array: {
            energyStrategyOperateMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'Energy Strategy Operate Mode',
            },
            timeAdjust: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'timeadjust',
            },
            powerSocket: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'power Socket',
            },
            devErrcodeList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'dev Errcode List',
            },
            timezoneChangeList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'timezone Change List',
            },
            dayResidentLoadList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'day Resident Load List',
            },
            cloudMeter: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'cloud meter',
            },
            wifiApMeshId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'wifi Ap Mesh Id',
                role: 'list',
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
                max: 40,
                unit_of_measurement: 'A',
                mult: 0.0001,
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
                max: 100000,
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
                max: 100000,
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
                max: 100000,
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
    stream_ac_pro: {
        RuntimePropertyUpload: {
            displayPropertyFullUploadPeriod: { entity: 'string' },
            displayPropertyIncrementalUploadPeriod: { entity: 'string' },
            runtimePropertyFullUploadPeriod: { entity: 'string' },
            runtimePropertyIncrementalUploadPeriod: { entity: 'string' },
        },
        DisplayPropertyUpload: {
            powGetPv2: { entity: 'number' },
            utcTimezone: { entity: 'number' },
            utcTimezoneId: { entity: 'string' },
            townCode: { entity: 'string' },
            wifiApMeshId: { entity: 'array' },
            systemMeshId: { entity: 'string' },
            systemGroupId: { entity: 'string' },
            seriesConnectDeviceId: { entity: 'string' },
            gridSysDeviceCnt: { entity: 'string' },
            utcSetMode: { entity: 'diagnostic' },
            devSleepState: { entity: 'diagnostic' },
            bmsBattSoc: { entity: 'number' },
            bmsBattSoh: { entity: 'number' },
            bmsDesignCap: { entity: 'number' },
            bmsDsgRemTime: { entity: 'number' },
            bmsChgRemTime: { entity: 'number' },
            bmsMinCellTemp: { entity: 'number' },
            bmsMaxCellTemp: { entity: 'number' },
            bmsMinMosTemp: { entity: 'number' },
            bmsMaxMosTemp: { entity: 'number' },
            invNtcTemp3: { entity: 'number' },
            cmsBattSoc: { entity: 'number' },
            cmsBattSoh: { entity: 'number' },
            cmsDsgRemTime: { entity: 'number' },
            cmsChgRemTime: { entity: 'number' },
            cmsMaxChgSoc: { entity: 'level' },
            cmsMinDsgSoc: { entity: 'level' },
            cmsBmsRunState: { entity: 'diagnostic' },
            bmsChgDsgState: { entity: 'diagnostic' },
            cmsChgDsgState: { entity: 'diagnostic' },
            powGetPv: { entity: 'number' },
            plugInInfoPvFlag: { entity: 'diagnostic' },
            gridCodeSelection: { entity: 'diagnostic' },
            powerSocket: { entity: 'array' },
            devErrcodeList: { entity: 'array' },
            timezoneChangeList: { entity: 'array' },
            dayResidentLoadList: { entity: 'array' },
            cloudMeter: { entity: 'array' },
            energyStrategyOperateMode: { entity: 'array' },
            plugInInfoPv2Flag: { entity: 'diagnostic' },
            plugInInfoPv3Flag: { entity: 'diagnostic' },
            plugInInfoPv4Flag: { entity: 'diagnostic' },
            relay1Onoff: { entity: 'diagnostic' },
            relay2Onoff: { entity: 'switch' },
            relay3Onoff: { entity: 'switch' },
            relay4Onoff: { entity: 'diagnostic' },
            feedGridMode: { entity: 'diagnostic' },
            bmsBattHeating: { entity: 'diagnostic' },
            cmsBattPowOutMax: { entity: 'number' },
            cmsBattPowInMax: { entity: 'number' },
            backupReverseSoc: { entity: 'level' },
            cmsBattFullEnergy: { entity: 'number' },
            stormPatternEnable: { entity: 'diagnostic' },
            stormPatternOpenFlag: { entity: 'diagnostic' },
            stormPatternEndTime: { entity: 'number' },
            powGetSysGrid: { entity: 'number' },
            powGetSysLoad: { entity: 'number' },
            powGetPvSum: { entity: 'number' },
            powGetBpCms: { entity: 'number' },
            powSysAcOutMax: { entity: 'number' },
            moduleWifiRssi: { entity: 'string' },
            gridConnectionVol: { entity: 'number' },
            gridConnectionFreq: { entity: 'number' },
            gridConnectionPower: { entity: 'number' },
            gridConnectionSta: { entity: 'diagnostic' },
            gridCodeVersion: { entity: 'string' },
            timeAdjust: { entity: 'array' },
            sysGridConnectionPower: { entity: 'number' },
            powGetPv3: { entity: 'number' },
            powGetPv4: { entity: 'number' },
            plugInInfoPvVol: { entity: 'number' },
            plugInInfoPvAmp: { entity: 'number' },
            plugInInfoPv2Vol: { entity: 'number' },
            plugInInfoPv2Amp: { entity: 'number' },
            plugInInfoPv3Vol: { entity: 'number' },
            plugInInfoPv3Amp: { entity: 'number' },
            plugInInfoPv4Vol: { entity: 'number' },
            plugInInfoPv4Amp: { entity: 'number' },
            powGetSysLoadFromPv: { entity: 'number' },
            powGetSysLoadFromBp: { entity: 'number' },
            powGetSysLoadFromGrid: { entity: 'number' },
            powSysAcInMax: { entity: 'number' },
            socketMeasurePower: { entity: 'number' },
            powGetSchuko1: { entity: 'number' },
            powGetSchuko2: { entity: 'number' },
            busbarPowLimit: { entity: 'number' },
            maxInvInput: { entity: 'number' },
            maxInvOutput: { entity: 'number' },
            maxBpInput: { entity: 'number' },
            maxBpOutput: { entity: 'number' },
            feedGridModePowLimit: { entity: 'number' },
            feedGridModePowMax: { entity: 'number' },
            energyBackupState: { entity: 'diagnostic' },
            brightness: { entity: 'number' },
            distributedDeviceStatus: { entity: 'diagnostic' },
            seriesConnectDeviceStatus: { entity: 'diagnostic' },
            powConsumptionMeasurement: { entity: 'level' },
            devCtrlStatus: { entity: 'diagnostic' },
            updateBanFlag: { entity: 'diagnostic' },
        },
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
    stream_ac_pro: {
        DisplayPropertyUpload: {
            relay2Onoff: {
                msg: {
                    src: 32,
                    dest: 2,
                    dSrc: 1,
                    dDest: 1,
                    cmdFunc: 254,
                    cmdId: 17,
                    dataLen: 9,
                    productId: 56,
                    version: 3,
                    payloadVer: 1,
                    pdata: { cfgUtcTime: 6, relay2Onoff: 380 },
                },
            },
            relay3Onoff: {
                msg: {
                    src: 32,
                    dest: 2,
                    dSrc: 1,
                    dDest: 1,
                    cmdFunc: 254,
                    cmdId: 17,
                    dataLen: 9,
                    productId: 56,
                    version: 3,
                    payloadVer: 1,
                    pdata: { cfgUtcTime: 6, relay3Onoff: 380 },
                },
            },
            powConsumptionMeasurement: {
                msg: {
                    src: 32,
                    dest: 2,
                    dSrc: 1,
                    dDest: 1,
                    cmdFunc: 254,
                    cmdId: 17,
                    dataLen: 9,
                    productId: 56,
                    version: 3,
                    payloadVer: 1,
                    pdata: { cfgUtcTime: 6, powConsumptionMeasurement: 239 },
                },
            },
            cmsMinDsgSoc: {
                msg: {
                    src: 32,
                    dest: 2,
                    dSrc: 1,
                    dDest: 1,
                    cmdFunc: 254,
                    cmdId: 17,
                    dataLen: 12,
                    productId: 56,
                    version: 3,
                    payloadVer: 1,
                    pdata: { cfgUtcTime: 6, cmsMinDsgSoc: 34 },
                },
            },
            cmsMaxChgSoc: {
                msg: {
                    src: 32,
                    dest: 2,
                    dSrc: 1,
                    dDest: 1,
                    cmdFunc: 254,
                    cmdId: 17,
                    dataLen: 12,
                    productId: 56,
                    version: 3,
                    payloadVer: 1,
                    pdata: { cfgUtcTime: 6, cmsMaxChgSoc: 33 },
                },
            },
            backupReverseSoc: {
                msg: {
                    src: 32,
                    dest: 2,
                    dSrc: 1,
                    dDest: 1,
                    cmdFunc: 254,
                    cmdId: 17,
                    dataLen: 9,
                    productId: 56,
                    version: 3,
                    payloadVer: 1,
                    pdata: { cfgUtcTime: 6, backupReverseSoc: 102 },
                },
            },
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
                                            'StatisticsSum is available for delta3plus. Please inform developer.',
                                        );
                                        /*
                                        const statisticObjets = [
                                            'start',
                                            'devWorkTime',
                                            'acOutEnergy',
                                            'dc12VoutEnergy',
                                            'typecOutEnergy',
                                            'usbaOutEnergy',
                                            'acInEnergy',
                                            'pvInEnergy',
                                            'acIn0W100WTime',
                                            'acInOver100WTime',
                                            'acOut0W50WTime',
                                            'acOut50W100WTime',
                                            'acOut100W200WTime',
                                            'acOutOver200WTime',
                                            'acOut200W300WTime',
                                            'acOut300W400WTime',
                                            'acOut400W500WTime',
                                            'acOutOver500WTime',
                                            'pvInTime',
                                            'typecInTime',
                                            'dcOut0W60WTime',
                                            'dcOutOver60WTime',
                                            'typecOut0W30WTime',
                                            'typecOut30W60WTime',
                                            'typecOutOver60WTime',
                                            'usbaOutTime',
                                            'ledOutTime',
                                        ];
                                        for (let listItem in payload[channel][state]['listInfo']) {
                                            if (
                                                listItem['statisticsObject'] &&
                                                listItem['statisticsContent']
                                            ) {
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
                                                if (Object.keys(haupd).length !== 0)
                                                    haUpdate.push(haupd);
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
                        case 'ConfigWrite':
                            for (let state in payload[channel]) {
                                switch (state) {
                                    case 'cfgUtcTime':
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
                                                'DisplayPropertyUpload',
                                                state,
                                                val,
                                                'DisplayPropertyUpload',
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
                        case 'ConfigWriteAck':
                            //Auswertung ob OK und dann auf set_dp3 und zusätzlich in anderer struktur ohne cfg setzen
                            await setOnlineStatus(adapter, topic);
                            for (let state in payload[channel]) {
                                if (payload[channel]['configOk'] && payload[channel]['configOk'] == true) {
                                    switch (state) {
                                        case 'cfgUtcTime':
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
                                                    'DisplayPropertyUpload',
                                                    state,
                                                    val,
                                                    'DisplayPropertyUpload',
                                                    logged,
                                                );
                                                if (Object.keys(haupd).length !== 0) {
                                                    haUpdate.push(haupd);
                                                }
                                            }
                                            break;
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
            cmdFunc: 254,
            cmdId: 17,
            needAck: 1,
            seq: seq,
            productId: 56,
            version: 3,
            payloadVer: 1,
            from: 'Android',
            // deviceSn: serial
        },
    };
    const timestamp = Math.floor(Date.now() / 1000);
    // encryption is set but is actually not done, if needed then to find a way to only encrypt pdata
    /*
            //cfgAcOutFreq: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cfgEnergyBackup: {  msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 },
                energyBackupStartSoc: 40,
                energyBackupEn: true
            },
     
            */
    //muster['header']['cmdFunc'] = cmd['msg']['cmdFunc'];
    //muster['header']['cmdId'] = cmd['msg']['cmdId'];

    const cmsMaxChgSoc = await adapter.getStateAsync(`${serial}.DisplayPropertyUpload.cmsMaxChgSoc`).catch(e => {
        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMaxChgSoc ->${e}`);
    });
    const cmsMinDsgSoc = await adapter.getStateAsync(`${serial}.DisplayPropertyUpload.cmsMinDsgSoc`).catch(e => {
        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMinDsgSoc ->${e}`);
    });

    switch (state) {
        case 'relay2Onoff':
        case 'relay3Onoff':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = value ? 1 : 0;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 9;
            break;
        case 'cmsMinDsgSoc':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata']['cmsMaxChgSoc'] = parseInt(cmsMaxChgSoc.val); //int
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['dataLen'] = 12;
            break;
        case 'cmsMaxChgSoc':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['pdata']['cmsMinDsgSoc'] = parseInt(cmsMinDsgSoc.val); //int
            muster['header']['dataLen'] = 12;
            break;
        case 'powConsumptionMeasurement':
        case 'backupReverseSoc':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = parseInt(value); //int
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 9;
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
    cmdId: {
        50: { cmdFunc: { 32: 'BMSHeartBeatReport' } },
        22: { cmdFunc: { 254: 'RuntimePropertyUpload' } },
        21: { cmdFunc: { 254: 'DisplayPropertyUpload' } },
        18: { cmdFunc: { 254: 'ConfigWriteAck' } },
        17: { cmdFunc: { 254: 'ConfigWrite' } },
        2: { cmdFunc: { 32: 'CMSHeartBeatReport' } },
    },
};
/*
const stream_ac_pro = {
    cmdFunc: {
        32: {
            cmdId: {
                2: 'CMSHeartBeatReport',
                50: 'BMSHeartBeatReport'
            }
        },
        254: {
            cmdId: {
                17: 'set_dp3',
                18: 'setReply_dp3',
                21: 'DisplayPropertyUpload',
                22: 'RuntimePropertyUpload',
            },
        },
    },
};
*/
const protoSource = `
syntax = 'proto3';

message RuntimePropertyUpload {
   optional int32 display_property_full_upload_period = 293;
   optional int32 display_property_incremental_upload_period = 294;
   optional int32 runtime_property_full_upload_period = 295;
   optional int32 runtime_property_incremental_upload_period = 296;
}

message TimeAdjust {
    optional uint32 time = 1;
    optional uint32 timeZoneOffset = 2;
}

message TimeAdjustReport {
    repeated TimeAdjust adjustTask = 1;
}

message DevErrcodeList {
  repeated uint32 dev_errcode = 1;
}

enum PANEL_GRID_STA {
  PANEL_GRID_STA_NO_VAILD = 0;
  PANEL_GRID_IN = 1;
  PANEL_GRID_NOT_ONLINE = 2;
  PANEL_FEED_GRID = 3;
}

enum GRID_STD_CODE {
  GRID_STD_CODE_NULL = 0;
  GRID_STD_CODE_AUSTRIA = 1;
  GRID_STD_CODE_SWITZER = 2;
  GRID_STD_CODE_POLAND = 3;
  GRID_STD_CODE_NETHERLANDS = 4;
  GRID_STD_CODE_VDE_4105 = 5;
  GRID_STD_CODE_IEEE_1547 = 6;
  GRID_STD_CODE_USER_DEFINED = 7;
  GRID_STD_CODE_NORWAY = 8;
  GRID_STD_CODE_CZECH_REPUBLIC = 9;
  GRID_STD_CODE_DENMARK = 10;
  GRID_STD_CODE_IRELAND = 11;
  GRID_STD_CODE_SWEDEN = 12;
  GRID_STD_CODE_LATVIA = 13;
  GRID_STD_CODE_GREECE_A = 14;
  GRID_STD_CODE_GREECE_B = 15;
  GRID_STD_CODE_PORTUGAL = 16;
  GRID_STD_CODE_ROMANIA = 17;
  GRID_STD_CODE_LITHUANIA = 18;
  GRID_STD_CODE_HUNGARY = 19;
  GRID_STD_CODE_ITALY = 20;
  GRID_STD_CODE_G98 = 21;
  GRID_STD_CODE_G99 = 22;
  GRID_STD_CODE_NTS_631 = 23;
  GRID_STD_CODE_UNE_217001 = 24;
  GRID_STD_CODE_UNE_217002 = 25;
  GRID_STD_CODE_UTE_MAINLAND = 26;
  GRID_STD_CODE_UTE_50HZ_ISLAND = 27;
  GRID_STD_CODE_UTE_60HZ_ISLAND = 28;
  GRID_STD_CODE_BELGIUM = 29;
  GRID_STD_CODE_UKRAINE = 30;
  GRID_STD_CODE_SLOVENIA = 31;
  GRID_STD_CODE_BULGARIA = 32;
  GRID_STD_CODE_EU_GENERAL = 33;
  GRID_STD_CODE_NORTH_AMERICA = 1001;
}

enum METER_MODEL {
  NONE = 0;
  CT_EF_01 = 1;
  CT_SHELLY_3EM = 2;
  CT_SHELLY_PRO_3EM = 3;
  IR_TIBBER_PULSE = 4;
  IR_POWERFOX_PA201902 = 5;
  CT_EF_PRO_3EM = 6;
}

enum MASTER_AND_SLAVE {
  ELECTION = 0;
  MASTER = 1;
  SLAVE = 2;
}

message DayResidentLoadList {
  repeated ResidentLoad load = 1;
}

message ResidentLoad {
  optional uint32 start_min = 1;
  optional uint32 end_min = 2;
  optional uint32 load_power = 3;
}

message CloudMeter {
   optional uint32 has_meter = 1; //
   optional METER_MODEL model = 2;
   optional string meterSn = 3;
   optional int32 powerA = 4;
   optional int32 powerB = 5;
   optional int32 powerC = 6;
}

enum POWER_SOCKET_MODEL {
  POWER_SOCKET_NONE = 0;
  POWER_SOCKET_EF_PLUG_S_MTR_GEN_3 = 1;
}

message PowerSocket {
  optional uint32 has_selected = 1; //bool
  optional POWER_SOCKET_MODEL model = 2;
  optional string sn = 3;
}

message PowerSocketList {
  repeated PowerSocket power_socket_cfg = 1;
}

message WifiApMeshIdInfo {
  repeated uint32 id_list = 1;
}

message CfgBmsPushWrite {
  optional bool bms_heartbeap_open = 1;
  optional bool bms_health_open = 2;
  optional uint32 bms_heartbeap_freq = 3;
  optional uint32 bms_health_freq = 4;
}

message CfgEnergyStrategyOperateMode {
  optional uint32 operate_self_powered_open = 1; //bool
  optional uint32 operate_scheduled_open = 2; //bool
  optional uint32 operate_tou_mode_open = 3; //bool
}

message TimezoneChangeItem {
  optional uint32 utc_time = 1;
  optional int32 utc_timezone = 2;
}

message TimezoneChangeList {
  repeated TimezoneChangeItem time_zone_change_item = 1;
}

message CfgIntelligentScheduleMode {
  optional uint32 intelligent_schedule_mode = 1;
  optional uint32 join_intelligent_schedule = 2;
}

message CfgTimeScheduleTask {
  repeated TimeScheduleTaskItem time_schedule_task_item_list = 1;
  repeated CfgIntelligentScheduleChannelItem intelligent_schedule_channel_item_list = 2;
}

message TimeScheduleTaskItem {
  optional uint32 start_timestamp = 1;
  optional uint32 end_timestamp = 2;
  optional uint32 grid_chg_wh = 3;
  optional uint32 grid_dischg_wh = 4;
  optional uint32 chg_wh = 5;
  optional uint32 dischg_wh = 6;
  optional uint32 v2h_output_wh = 7;
}

message CfgIntelligentScheduleChannelItem {
  optional string sn = 1;
  repeated uint32 channel_num = 2;
  repeated uint32 cfg_turn_off = 3;
}

message gridConnectionPortBind {
  optional string sn = 1;
  optional uint32 port_num = 2;
  optional uint32 err = 3;
}

message DisplayPropertyUpload {
   optional uint32 energy_backup_state = 6;
   optional float pow_get_pv2 = 70;
   optional float plug_in_info_pv2_amp = 71;
   optional PowerSocketList power_socket = 75;
   optional int32 utc_timezone = 133;
   optional string utc_timezone_id = 134;
   optional uint32 utc_set_mode = 135; //bool
   optional uint32 dev_sleep_state = 212;
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
   optional float pow_get_pv = 361;
   optional uint32 plug_in_info_pv_flag = 362; //bool
   optional int32 inv_ntc_temp3 = 371;
   optional float plug_in_info_pv_vol = 380;
   optional float plug_in_info_pv_amp = 381;
   optional CfgEnergyStrategyOperateMode energy_strategy_operate_mode = 393;
   optional uint32 plug_in_info_pv2_flag = 421; //bool
   optional float plug_in_info_pv2_vol = 442;
   optional uint32 cms_batt_pow_out_max = 459;
   optional uint32 cms_batt_pow_in_max = 460;
   optional uint32 backup_reverse_soc = 461;
   optional uint32 cms_batt_full_energy = 462;
   optional uint32 storm_pattern_enable = 467; //bool
   optional uint32 storm_pattern_open_flag = 468; //bool
   optional uint32 storm_pattern_end_time = 469;
   optional float pow_get_sys_grid = 515;
   optional float pow_get_sys_load = 516;
   optional float pow_get_pv_sum = 517;
   optional float pow_get_bp_cms = 518;
   optional uint32 feed_grid_mode = 520;
   optional uint32 feed_grid_mode_pow_limit = 521;
   optional float module_wifi_rssi = 602;
   optional float grid_connection_vol = 613;
   optional float grid_connection_freq = 615;
   optional float grid_connection_power = 616;
   optional PANEL_GRID_STA grid_connection_sta = 619;
   optional DevErrcodeList dev_errcode_list = 627;
   optional uint32 feed_grid_mode_pow_max = 727;
   optional uint32 town_code = 729;
   optional GRID_STD_CODE grid_code_selection = 730;
   optional int32 grid_code_version = 731;
   optional uint32 grid_sys_device_cnt = 758;
   optional WifiApMeshIdInfo wifi_ap_mesh_id = 759;
   optional uint32 pow_consumption_measurement = 760;
   optional CloudMeter cloud_meter = 785;
   optional TimeAdjustReport timeAdjust = 976;
   optional uint32 update_ban_flag = 977;
   optional DayResidentLoadList day_resident_load_list = 978;
   optional uint32 relay2_onoff = 980; //bool
   optional uint32 relay4_onoff = 981; //bool
   optional uint32 relay3_onoff = 982; //bool
   optional uint32 relay1_onoff = 983; //bool
   optional uint32 system_group_id = 984;
   optional int32 pow_sys_ac_out_max = 985;
   optional uint32 plug_in_info_pv3_flag = 987; //bool
   optional uint32 plug_in_info_pv4_flag = 988; //bool
   optional uint32 pow_sys_ac_in_max = 989;
   optional MASTER_AND_SLAVE distributed_device_status = 990;
   optional MASTER_AND_SLAVE series_connect_device_status = 991;
   optional float sys_grid_connection_power = 992;
   optional float socket_measure_power = 993;
   optional uint32 brightness = 994;
   optional uint32 system_mesh_id = 995;
   optional float pow_get_pv3 = 996;
   optional float pow_get_pv4 = 997;
   optional float plug_in_info_pv3_vol = 998;
   optional float plug_in_info_pv3_amp = 999;
   optional float plug_in_info_pv4_vol = 1000;
   optional float plug_in_info_pv4_amp = 1001;
   optional float pow_get_sys_load_from_pv = 1002;
   optional float pow_get_sys_load_from_bp = 1003;
   optional float pow_get_sys_load_from_grid = 1004;
   optional float pow_get_schuko1 = 1210;
   optional float pow_get_schuko2 = 1211;
   optional uint32 bms_batt_heating = 1212; //bool
   optional uint32 dev_ctrl_status = 1278;
   optional int32 busbar_pow_limit = 1280;
   optional int32 max_inv_input = 1281;
   optional int32 max_inv_output = 1282;
   optional int32 max_bp_input = 1283;
   optional int32 max_bp_output = 1284;
   optional uint32 series_connect_device_id = 1285;
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

message BMSHeartBeatReport{
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
   optional uint32 heatfilm_ntc_num = 59;
   optional uint32 cur_sensor_ntc_num = 61;
   optional int32 max_env_temp = 63;
   optional int32 min_env_temp = 64;
   optional int32 max_heatfilm_temp = 65;
   optional int32 min_heatfilm_temp = 66;
   optional int32 max_cur_sensor_temp = 67;
   optional int32 min_cur_sensor_temp = 68;
   optional uint32 balance_cmd = 69;
   optional uint32 remain_balance_time = 70;
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

message ConfigWrite {
  optional uint32 cfgUtcTime = 6;
  optional uint32 cms_max_chg_soc = 33; //ac
  optional uint32 cms_min_dsg_soc = 34; //ac
  optional uint32 backup_reverse_soc = 102; //ac
  optional uint32 cfg_feed_grid_mode_pow_limit = 169; //ac
  optional uint32 relay2Onoff = 380; //ac bool
  optional uint32 relay3Onoff = 381; //ac bool
  optional uint32 pow_consumption_measurement = 239;

  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;

  optional int32 cfg_utc_timezone = 7;
  optional PowerSocketList cfg_power_socket = 27;
  optional bool cfg_bms_power_off = 30;
  optional uint32 cfg_soc_cali = 31;
  optional CfgBmsPushWrite cfg_bms_push = 32;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional CfgEnergyStrategyOperateMode cfg_energy_strategy_operate_mode = 106;
  optional string cfg_utc_timezone_id = 135;
  optional bool cfg_utc_set_mode = 136;
  optional uint32 cfg_feed_grid_mode = 168;
  optional string cfg_country_code = 211;
  optional uint32 cfg_town_code = 212;
  optional bool active_sys_reboot = 213;
  optional float cfg_inv_target_pwr = 220;
  optional bool cfg_factory_mode_enable = 222;
  optional bool cfg_debug_mode_enable = 223;
  optional float cfg_grid_connection_power_factor_setting = 224;
  optional float cfg_grid_connection_power_setting = 225;
  optional uint32 cfg_grid_sys_device_cnt = 237;
  optional WifiApMeshIdInfo cfg_wifi_ap_mesh_id = 238;

  optional TimezoneChangeList cfg_timezone_change_list = 378;
  optional DayResidentLoadList cfg_day_resident_load_list = 379;
  optional uint32 cfg_system_group_id = 382;
  optional CloudMeter cfg_cloud_metter = 383;
  optional uint32 cfg_brightness = 384;
  optional uint32 cfg_system_mesh_id = 385;
  optional CfgIntelligentScheduleMode cfg_cfg_intelligent_schedule_mode = 546;
  optional CfgTimeScheduleTask cfg_cfg_time_schedule_task = 547;
  optional gridConnectionPortBind grid_connection_port_bind = 564;
  optional string scoket1_bind_device_sn = 565;
  optional string scoket2_bind_device_sn = 566;
}

message ConfigWriteAck {
  optional uint32 action_id = 1;
  optional bool config_ok = 2;

  optional uint32 cfgUtcTime = 6;
  optional uint32 cms_max_chg_soc = 33; //ac
  optional uint32 cms_min_dsg_soc = 34; //ac
  optional uint32 backup_reverse_soc = 102; //ac
  optional uint32 cfg_feed_grid_mode_pow_limit = 169; //ac
  optional uint32 relay2Onoff = 380; //ac bool
  optional uint32 relay3Onoff = 381; //ac bool
  optional uint32 pow_consumption_measurement = 239;

  optional bool cfg_power_off = 3;
  optional bool cfg_power_on = 4;
  optional uint32 reset_factory_setting = 5;

  optional int32 cfg_utc_timezone = 7;
  optional PowerSocketList cfg_power_socket = 27;
  optional bool cfg_bms_power_off = 30;
  optional uint32 cfg_soc_cali = 31;
  optional CfgBmsPushWrite cfg_bms_push = 32;
  optional int32 cfg_display_property_full_upload_period = 67;
  optional int32 cfg_display_property_incremental_upload_period = 68;
  optional int32 cfg_runtime_property_full_upload_period = 69;
  optional int32 cfg_runtime_property_incremental_upload_period = 70;
  optional bool active_display_property_full_upload = 71;
  optional bool active_runtime_property_full_upload = 72;
  optional CfgEnergyStrategyOperateMode cfg_energy_strategy_operate_mode = 106;
  optional string cfg_utc_timezone_id = 135;
  optional bool cfg_utc_set_mode = 136;
  optional uint32 cfg_feed_grid_mode = 168;
  optional string cfg_country_code = 211;
  optional uint32 cfg_town_code = 212;
  optional bool active_sys_reboot = 213;
  optional float cfg_inv_target_pwr = 220;
  optional bool cfg_factory_mode_enable = 222;
  optional bool cfg_debug_mode_enable = 223;
  optional float cfg_grid_connection_power_factor_setting = 224;
  optional float cfg_grid_connection_power_setting = 225;
  optional uint32 cfg_grid_sys_device_cnt = 237;
  optional WifiApMeshIdInfo cfg_wifi_ap_mesh_id = 238;

  optional TimezoneChangeList cfg_timezone_change_list = 378;
  optional DayResidentLoadList cfg_day_resident_load_list = 379;
  optional uint32 cfg_system_group_id = 382;
  optional CloudMeter cfg_cloud_metter = 383;
  optional uint32 cfg_brightness = 384;
  optional uint32 cfg_system_mesh_id = 385;
  optional CfgIntelligentScheduleMode cfg_cfg_intelligent_schedule_mode = 546;
  optional CfgTimeScheduleTask cfg_cfg_time_schedule_task = 547;
  optional gridConnectionPortBind grid_connection_port_bind = 564;
  optional string scoket1_bind_device_sn = 565;
  optional string scoket2_bind_device_sn = 566;
}


message setMessage {
    setHeader header = 1;
 }
message setHeader {
    ConfigWrite pdata = 1;
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
};
