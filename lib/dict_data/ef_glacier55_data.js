const deviceStates = {
    RuntimePropertyUpload: {
        number: {
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
        },
        string: {
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
            curSensorNtcNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'cur sensor ntc num',
            },
            type: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'type',
                role: 'info',
            },
            packSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pack sn',
                role: 'info',
            },
            waterInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'water in flag',
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
            mosTemp: {
                min: 0,
                max: 100,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'mos temp',
                subrole: 'number',
            },
            envTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'env temp',
                subrole: 'number',
            },

            curSensorTemp: {
                min: 0,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'cur sensor temp',
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
            heatfilmTemp: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'heatfilm Temp',
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
            bmsErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'main battery err code',
                role: 'info',
            },
            pdErrCode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pd err code',
                role: 'info',
            },
            bmsMainSn: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'bms Main Sn',
                role: 'info',
            },
            errCodeRecordList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'err code record list',
                role: 'info',
            },
            batTemp102: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'battery temperature',
                role: 'info',
            },

            unknown623: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown623', role: 'info' },
            unknown631: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown631', role: 'info' },

            unknown746: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown746', role: 'info' },
            unknown747: { entity_type: 'text', entity_category: 'diagnostic', name: 'unknown747', role: 'info' },
        },
        number: {
            screenOffTime: {
                min: 0,
                max: 1800,
                unit_of_measurement: 's',
                mult: 1,
                entity_type: 'select',
                device_class: 'duration',
                name: 'Screen timeout (s)',
                role: 'value',
                subrole: 'number',
            },
            lcdLight: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 0.390625,
                entity_type: 'number',
                name: 'Screen brightness',
                role: 'value',
                subrole: 'number',
            },
            cmsBattDesignCap: {
                min: 0,
                max: 1000,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                role: 'value',
                name: 'cms Battery Design Cap',
                subrole: 'number',
            },
            uptime749: {
                min: 0,
                unit_of_measurement: 's',
                mult: 0.001,
                entity_type: 'sensor',
                device_class: 'duration',
                role: 'value',
                name: 'ice time duration',
                subrole: 'number',
            },
            inputVolt777: {
                min: 0,
                max: 40,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'input voltage',
                subrole: 'number',
            },
            tempMonitorLeft: {
                min: -30,
                max: 40,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Temp Monitor Left',
                subrole: 'number',
            },
            tempMonitorRight: {
                min: -30,
                max: 40,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'Temp Monitor Right',
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
                max: 1000,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Total output power',
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
        },
        level: {
            setPointLeft: {
                min: -20,
                max: 20,
                unit_of_measurement: '°C',
                mult: 1,
                step: 1,
                entity_type: 'number',
                name: 'Setpoint Temp. Left',
                role: 'level',
                subrole: 'number',
            },
            setPointRight: {
                min: -20,
                max: 20,
                unit_of_measurement: '°C',
                mult: 1,
                step: 1,
                entity_type: 'number',
                name: 'Setpoint Temp. Right',
                role: 'level',
                subrole: 'number',
            },
            devStandbyTime: {
                min: 0,
                max: 96400,
                unit_of_measurement: 'min',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'duration',
                name: 'Device timeout',
                role: 'level',
                subrole: 'timer',
                select: ['Never', '30 min', '1 hr', '2 hr', '4 hr', '6 hr', '12 hr', '24 hr'],
                select_obj: {
                    Never: 0,
                    '30 min': 1800,
                    '1 hr': 3600,
                    '2 hr': 7200,
                    '4 hr': 14400,
                    '6 hr': 21600,
                    '12 hr': 43200,
                    '24 hr': 86400,
                },
                states: {
                    0: 'Never',
                    1800: '30 min',
                    3600: '1 hr',
                    7200: '2 hr',
                    14400: '4 hr',
                    21600: '6 hr',
                    43200: '12 hr',
                    86400: '24 hr',
                },
            },
            batProtect: {
                min: 0,
                max: 3,
                unit_of_measurement: '',
                mult: 1,
                step: 1,
                entity_type: 'select',
                device_class: 'enum',
                name: 'Starter battery protection',
                role: 'level',
                subrole: 'mode',
                select: ['off', 'on High power', 'on Mild power', 'on Low power'],
                select_obj: { off: 0, 'on High power': 1, 'on Mild power': 2, 'on Low power': 3 },
                states: { 0: 'off', 1: 'on High power', 2: 'on Mild power', 3: 'on Low power' },
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
        switch: {
            enBeep: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'Beeper on/off',
                role: 'switch',
                enBeep: { 0: 'off', 1: 'on' },
            },
            childLock: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'child lock',
                role: 'switch',
                childLock: { 0: 'off', 1: 'on' },
            },
            simpleMode: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'simple mode',
                role: 'switch',
                simpleMode: { 0: 'off', 1: 'on' },
            },
            coolingMode: {
                entity_type: 'switch',
                device_class: 'switch',
                payload_off: 'off',
                payload_on: 'on',
                name: 'cooling mode',
                role: 'switch',
                coolingMode: { 0: 'Max', 1: 'Eco' },
            },
        },
        diagnostic: {
            tempUnit: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Unit of Temperature ',
                role: 'info',
                tempUnit: { 0: 'not set?', 1: '°C (Celsius)', 2: '°F (Fahrenheit)' },
            },
            sysStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'System status',
                role: 'info',
                sysStatus: { 0: 'device off', 1: 'device on', 2: 'device standby' },
            },
            cmsChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charging/Discharging status',
                role: 'info',
                cmsChgDsgState: { 0: 'not charging or discharging', 1: 'discharging', 2: 'charging' }, // 0 = Device off (Device Shutted down, only with long press power button on device, can be powered on from APP network connection remains, if shutdown occurs from the APP (function with battery inserted only) then value not updates and remains in previous state)
            },
            plugInInfoPvFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv flag',
                role: 'info',
                plugInInfoPvFlag: {
                    0: 'XT60 connector AC power adapter removed',
                    1: 'XT60 connector AC power adapter inserted',
                },
            },
            plugInInfoPvType: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info pv type',
                role: 'info',
                plugInInfoPvType: { 0: 'AC power cord removed, only battery', 1: 'AC power cord inserted' },
            },
            plugInInfoDcpInFlag: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'plug in info dcp in flag',
                role: 'info',
                plugInInfoDcpInFlag: { 0: 'Battery not inserted', 1: 'Battery inserted' },
            },
            lidStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'lid/door status',
                role: 'info',
                lidStatus: { 0: 'Closed', 1: 'Open' },
            },
            zoneStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Zone Status (Compartment Separator)',
                role: 'info',
                zoneStatus: { 0: 'Dual Zone', 1: 'Single Zone (when in Single, the Left Setpoint takes charge)' },
            },
            tempAlert: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Temperature alarm',
                role: 'info',
                tempAlert: { 0: 'off', 1: 'on' },
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
    glacier55: {
        RuntimePropertyUpload: {
            plugInInfoAcInVol: { entity: 'number' },
            displayPropertyFullUploadPeriod: { entity: 'string' },
            displayPropertyIncrementalUploadPeriod: { entity: 'string' },
            runtimePropertyFullUploadPeriod: { entity: 'number' },
            runtimePropertyIncrementalUploadPeriod: { entity: 'number' },
        },
        DisplayPropertyUpload: {
            errcode: { entity: 'string' },
            sysStatus: { entity: 'diagnostic' },
            powInSumW: { entity: 'number' },
            powOutSumW: { entity: 'number' },
            lcdLight: { entity: 'number' },
            devStandbyTime: { entity: 'level' },
            screenOffTime: { entity: 'number' },
            batTemp102: { entity: 'string' },
            bmsErrCode: { entity: 'string' },
            errCodeRecordList: { entity: 'string' },
            enBeep: { entity: 'switch' },
            pdErrCode: { entity: 'string' },
            cmsBattSoc: { entity: 'number' },
            cmsDsgRemTime: { entity: 'number' },
            cmsChgRemTime: { entity: 'number' },
            cmsMaxChgSoc: { entity: 'level' },
            cmsMinDsgSoc: { entity: 'level' },
            cmsChgDsgState: { entity: 'diagnostic' },
            cmsBattDesignCap: { entity: 'number' },
            plugInInfoPvFlag: { entity: 'diagnostic' },
            plugInInfoPvType: { entity: 'diagnostic' },
            bmsMainSn: { entity: 'string' },
            plugInInfoDcpInFlag: { entity: 'diagnostic' },
            cmsBattPowOutMax: { entity: 'number' },
            cmsBattPowInMax: { entity: 'number' },
            tempUnit: { entity: 'diagnostic' },
            unknown623: { entity: 'string' },
            unknown631: { entity: 'string' },
            setPointLeft: { entity: 'level' },
            setPointRight: { entity: 'level' },
            childLock: { entity: 'switch' },
            simpleMode: { entity: 'switch' },
            batProtect: { entity: 'level' },
            lidStatus: { entity: 'diagnostic' },
            coolingMode: { entity: 'switch' },
            tempMonitorLeft: { entity: 'number' },
            tempMonitorRight: { entity: 'number' },
            zoneStatus: { entity: 'diagnostic' },
            unknown746: { entity: 'string' },
            unknown747: { entity: 'string' },
            tempAlert: { entity: 'diagnostic' },
            uptime749: { entity: 'number' },
            inputVolt777: { entity: 'number' },
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
            mosTemp: { entity: 'number' },
            envNtcNum: { entity: 'string' },
            envTemp: { entity: 'number' },
            curSensorNtcNum: { entity: 'string' },
            curSensorTemp: { entity: 'number' },
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
            heatfilmNtcNum: { entity: 'number' },
            minHeatfilmTemp: { entity: 'number' },
            maxHeatfilmTemp: { entity: 'number' },
            heatfilmTemp: { entity: 'array' },
            packSn: { entity: 'string' },
            waterInFlag: { entity: 'string' },
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
    glacier55: {
        DisplayPropertyUpload: {
            setPointRight: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 6 } },
            setPointLeft: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 6 } },
            coolingMode: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            childLock: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            simpleMode: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            tempAlert: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            batProtect: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            devStandbyTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMaxChgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMinDsgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            enBeep: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 2 } },
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
                for (let j = 0; j < payloadarr.length; j++) {
                    const payload = payloadarr[j];
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
                                        case 'errCodeRecordList':
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
                            case 'BMSHeartBeatReport':
                                await setOnlineStatus(adapter, topic);
                                if (payload[channel]['num'] == 0) {
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
                                }
                                break;
                            case 'ConfigWrite': //
                                for (let state in payload[channel]) {
                                    switch (state) {
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
                                            case 'actionId':
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
                from: 'Android',
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
            dest: 66,
            dSrc: 1,
            dDest: 1,
            //encType: 1,
            checkType: 3,
            cmdFunc: 254,
            cmdId: 17,
            needAck: 1,
            seq: seq,
            //productId: 1,
            version: 19,
            payloadVer: 1,
            from: 'Android',
            deviceSn: serial,
        },
    };

    // encryption is set but is actually not done, if needed then to find a way to only encrypt pdata

    switch (state) {
        // skipping: cfgPowerOff, cfg_power_on, standby, temp_unit, cfg_utc_set_mode, Wi-Fi (cmdFunc:53)
        case 'enBeep':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = value ? 1 : 0;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 2;
            break;
        case 'coolingMode':
        case 'childLock':
        case 'simpleMode':
        case 'tempAlert':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = value ? 1 : 0;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
            break;
        case 'batProtect':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = value;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
            break;
        case 'devStandbyTime':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = parseInt(String(value)); //int
            if (Number(value) > 65535) {
                muster['header']['dataLen'] = 3;
            } else if (Number(value) > 128) {
                muster['header']['dataLen'] = 3;
            } else {
                muster['header']['dataLen'] = 2;
            }
            break;
        case 'cmsMinDsgSoc':
        case 'cmsMaxChgSoc':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = parseInt(String(value)); //int
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 3;
            break;
        case 'setPointLeft':
        case 'setPointRight':
            muster['header']['pdata'] = {};
            muster['header']['pdata'][state] = parseFloat(String(value)); //float
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 6;
            break;
        default:
            muster = null;
            adapter.log.debug('command not recognized');
            break;
    }

    if (log) {
        adapter.log.debug(`[PROTOBUF encode] ${state} ${value} send stream ${JSON.stringify(muster)}`);
    }
    const root = protobuf.parse(protoSource).root;
    const SetMessage = root.lookupType('setMessage');
    const message = SetMessage.create(muster);
    const messageBuffer = SetMessage.encode(message).finish();
    return messageBuffer;
}

const protoMsg = {
    cmdFunc: {
        32: {
            cmdId: {
                2: 'CMSHeartBeatReport',
                50: 'BMSHeartBeatReport',
            },
        },
        //53: { cmdId: { 38: 'Wi-Fi details', 39: {'WiFi Network Auto'} } }, //IOT_CMD_SETS
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
    CMSHeartBeatReport: { cmdId: 2, cmdFunc: 32 },
    BMSHeartBeatReport: { cmdId: 50, cmdFunc: 32 },
    DisplayPropertyUpload: { cmdId: 21, cmdFunc: 254 },
    RuntimePropertyUpload: { cmdId: 22, cmdFunc: 254 },
};

const protoSource = `
syntax = "proto3";


message ErrcodeRecordItem {
  optional uint32 errcode = 1;
  optional uint32 errcode_timestamp = 2;
}

message ErrcodeRecordList {
  repeated ErrcodeRecordItem list_info = 1;
}

message ResvInfo {
  repeated uint32 resv_info = 1;
}

message SetTimeTaskWrite {
  optional uint32 task_index = 1;
  optional uint32 is_valid = 2; //bool
  optional uint32 is_cfg = 3; //bool
  optional uint32 is_enable = 4; //bool
  optional uint32 conflict_flag = 5;
  optional uint32 type = 6;
  optional uint32 time_mode = 7;
  optional uint32 time_param = 8;
  repeated uint32 time_table = 9;
}


message RuntimePropertyUpload {
   optional float plug_in_info_ac_in_vol = 68;
   optional int32 display_property_full_upload_period = 293;
   optional int32 display_property_incremental_upload_period = 294;
   optional int32 runtime_property_full_upload_period = 295;
   optional int32 runtime_property_incremental_upload_period = 296;
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

message DisplayPropertyUpload {
   optional uint32 errcode = 1;
   optional uint32 sys_status = 2;
   optional float pow_in_sum_w = 3;
   optional float pow_out_sum_w = 4;
   optional uint32 lcd_light = 5;
   optional uint32 energy_backup_en = 7; //bool
   optional uint32 dev_standby_time = 17;
   optional uint32 screen_off_time = 18;
   optional uint32 bat_temp102 = 102;
   optional uint32 bms_err_code = 140;
   optional .ErrcodeRecordList err_code_record_list = 141;
   optional uint32 en_beep = 195; //bool
   optional uint32 pd_err_code = 213;
   optional float cms_batt_soc = 262;
   optional uint32 cms_dsg_rem_time = 268;
   optional uint32 cms_chg_rem_time = 269;
   optional uint32 cms_max_chg_soc = 270;
   optional uint32 cms_min_dsg_soc = 271;
   optional uint32 cms_chg_dsg_state = 282;
   optional uint32 cms_batt_design_cap = 288;
   optional uint32 plug_in_info_pv_flag = 362; //bool
   optional uint32 plug_in_info_pv_type = 363;
   optional string bms_main_sn = 392;
   optional uint32 plug_in_info_dcp_in_flag = 426; //bool
   optional uint32 cms_batt_pow_out_max = 459;
   optional uint32 cms_batt_pow_in_max = 460;
    optional uint32 temp_unit = 512;
    optional uint32 unknown623 = 623;
    optional uint32 unknown631 = 631;
    optional float set_point_left = 736; // -20grad Set Point Left
    optional float set_point_right = 737; // -20grad Set Point Right
    optional uint32 child_lock = 738;
    optional uint32 simple_mode = 739;
    optional uint32 bat_protect = 740;
    optional uint32 cooling_mode = 741;
    optional float temp_monitor_left = 742; //Temp Monitor Left
    optional float temp_monitor_right = 743;  //Temp Monitor Right
    optional uint32 lid_status = 744;
    optional uint32 zone_status = 745;
    optional float unknown746 = 746; // 125
    optional float unknown747 = 747;  //125
    optional uint32 temp_alert = 748;
    optional uint32 uptime749 = 749; //  86467620 run time /1000 in sec
    optional float input_volt777 = 777; // 14.45 Volt input Volt
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

message ConfigWrite {
    optional int32 cfgPowerOff = 3;
    optional int32 cfg_power_on = 4;
    optional uint32 cfg_utc_time = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 enBeep = 9;
    optional int32 devStandbyTime = 13; // [30min,1h,2h,4h,12h,24h,never]
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;

    optional string cfg_utc_timezone_id  = 135;
    optional int32 cfg_utc_set_mode  = 136; //bool
    optional int32 temp_unit = 166;
    optional int32 standby = 172; //Power changed to Standby (device off with network connection on)
    optional float temp_left = 226;   
    optional float temp_right = 227;     
    optional uint32 child_lock = 228;
    optional uint32 simple_mode = 229;
    optional uint32 bat_protect = 230;
    optional uint32 cooling_mode = 231;
    optional uint32 temp_alert = 234;
}

message ConfigWriteAck {
    optional int32 actionId = 1;
    optional bool configOk = 2; //bool
    optional uint32 cfg_utc_time = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 enBeep = 9;
    optional int32 devStandbyTime = 13;
    optional int32 cmsMaxChgSoc = 33;
    optional int32 cmsMinDsgSoc = 34;
    
    optional string cfg_utc_timezone_id  = 135;
    optional int32 cfg_utc_set_mode  = 136; //bool
    optional int32 temp_unit = 166;
    optional int32 standby = 172; //Power changed to Standby (device off with network connection on)
    optional float temp_left = 226;   
    optional float temp_right = 227;     
    optional uint32 child_lock = 228;
    optional uint32 simple_mode = 229;
    optional uint32 bat_protect = 230;
    optional uint32 cooling_mode = 231;
    optional uint32 temp_alert = 234;
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

    message sentBMSHeartBeatReport {
        setHeader1 header = 1;
    }

    message sentCMSHeartBeatReport {
        setHeader3 header = 1;
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
    deviceCmd,
    protoMsg,
    protoSource,
    storeProtoPayload,
    prepareProtoCmd,
    msgNameObj,
};
