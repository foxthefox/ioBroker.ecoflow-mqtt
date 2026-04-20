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
            errcode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Global error code',
                errcode: {
                    0: 'OK?',
                },
            },
            cmsChgDsgState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Charging/Discharging status',
                role: 'info',
                cmsChgDsgState: { 0: 'not charging or discharging', 1: 'discharging', 2: 'charging' },
            },
            sysStatus: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'System status',
                role: 'info',
                sysStatus: { 0: 'device off', 1: 'device on', 2: 'device standby' },
            },
            utcSetMode: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc set mode',
                role: 'info',
                utcSetMode: { 0: 'OK?' },
            },
            chargeOptCtrlEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'charge Opt Ctrl Enable',
                role: 'info',
                chargeOptCtrlEnable: { 0: '0?', 1: '1?', 2: '2?' },
            },
            tempSmartCtrlEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'temp Smart Ctrl Enable',
                role: 'info',
                tempSmartCtrlEnable: { 0: '0?', 1: '1?', 2: '2?' },
            },
            lowPowerDsgCtrlEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'low UsbP ower Dsg Ctrl Enable',
                role: 'info',
                lowPowerDsgCtrlEnable: { 0: '0?', 1: '1?', 2: '2?' },
            },
            batteryMaintainModel: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'battery Maintain Model',
                role: 'info',
                batteryMaintainModel: { 0: '0?', 1: '1?' },
            },
            chargeOptState: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'charge Opt State',
                role: 'info',
                chargeOptState: { 0: '0?', 1: '1?' },
            },
        },
        string: {
            moduleWifiRssi: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'info',
                name: 'Wi-Fi signal intensity',
            },
            utcTimezoneId: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'utc timezone id',
                role: 'info',
            },
            batteryMaintainCycleNum: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'battery Maintain Cycle Num',
                role: 'info',
            },
            screenSaverSwitchEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Saver Switch Enable',
                role: 'info',
            },
            screenSaverDisplayTimes: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Saver Display Times',
                role: 'info',
            },
            screenSaverDisplayIndex: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Saver Display Index',
                role: 'info',
            },
            screenClockSwitchEnable: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Clock Switch Enable',
                role: 'info',
            },
            screenClockDisplayTimes: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Clock Display Times',
                role: 'info',
            },
            screenClockDisplayFormat: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Clock Display Format',
                role: 'info',
            },
            screenThemeDisplayIndex: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Theme Display Index',
                role: 'info',
            },
            screenClockDisplayTimesCharging: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Clock Display Times Charging',
                role: 'info',
            },
            screenPicPreview: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen PicP review',
                role: 'info',
            },
            screenSourceFileRecvSta: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen Source File Recv Sta',
                role: 'info',
            },
            screenSourceRecvProgress: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'screen SourceR ecv Progress',
                role: 'info',
            },
            pdFirmVerDisplay: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'pd Firm Ver Display',
                role: 'info',
            },
        },
        array: {
            devErrcodeList: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                role: 'list',
                name: 'dev Errcode List',
            },
        },
        number: {
            powInSumW: {
                min: -400,
                max: 400,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'Total input power',
                subrole: 'number',
            },
            powOutSumW: {
                min: -400,
                max: 400,
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
            usbTypec1DisplayInfo_usbPow: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 1 port',
                subrole: 'number',
            },
            usbTypec1DisplayInfo_usbVolt: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 1 port',
                subrole: 'number',
            },
            usbTypec1DisplayInfo_usbAmp: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 1 port',
                subrole: 'number',
            },
            usbTypec2DisplayInfo_usbPow: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 2 port',
                subrole: 'number',
            },
            usbTypec2DisplayInfo_usbVolt: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 2 port',
                subrole: 'number',
            },
            usbTypec2DisplayInfo_usbAmp: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 2 port',
                subrole: 'number',
            },
            usbTypec3DisplayInfo_usbPow: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 3 port',
                subrole: 'number',
            },
            usbTypec3DisplayInfo_usbVolt: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 3 port',
                subrole: 'number',
            },
            usbTypec3DisplayInfo_usbAmp: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 3 port',
                subrole: 'number',
            },
            usbTypec4DisplayInfo_usbPow: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB 4 port',
                subrole: 'number',
            },
            usbTypec4DisplayInfo_usbVolt: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB 4 port',
                subrole: 'number',
            },
            usbTypec4DisplayInfo_usbAmp: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB 4 port',
                subrole: 'number',
            },
            usbTypeA1DisplayInfo_usbPow: {
                min: -150,
                max: 150,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the USB A port',
                subrole: 'number',
            },
            usbTypeA1DisplayInfo_usbVolt: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the USB A port',
                subrole: 'number',
            },
            usbTypeA1DisplayInfo_usbAmp: {
                min: -10,
                max: 10,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the USB A port',
                subrole: 'number',
            },
            pogopin_1DisplayInfo_usbPow: {
                min: -350,
                max: 350,
                unit_of_measurement: 'W',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'power',
                role: 'value',
                name: 'power of the pogopin',
                subrole: 'number',
            },
            pogopin_1DisplayInfo_usbVolt: {
                min: -50,
                max: 50,
                unit_of_measurement: 'V',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'voltage',
                role: 'value',
                name: 'voltage of the pogopin',
                subrole: 'number',
            },
            pogopin_1DisplayInfo_usbAmp: {
                min: -20,
                max: 20,
                unit_of_measurement: 'A',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'current',
                role: 'value',
                name: 'current of the pogopin',
                subrole: 'number',
            },
            cmsBattTemp: {
                min: -20,
                max: 80,
                unit_of_measurement: '°C',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'temperature',
                role: 'value',
                name: 'battery temperature',
                subrole: 'number',
            },
            cmsBattFullCap: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'main battery full cap',
                subrole: 'number',
            },
            cmsBattDesignCap: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'main battery full cap',
                subrole: 'number',
            },
            cmsBattRemainCap: {
                min: 0,
                max: 40000,
                unit_of_measurement: 'mAh',
                mult: 1,
                entity_type: 'sensor',
                //device_class: 'capacity',
                role: 'value',
                name: 'main battery full cap',
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
            cmsBattCycleNum: {
                min: 0,
                max: 6000,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'cms Batt Number of cycles',
                role: 'value',
            },
            cmsEnergyOutSum: {
                min: 0,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'cms Energy Out Sum',
                state_class: 'total_increasing',
                role: 'value',
            },
            cmsEnergyInSum: {
                min: 0,
                unit_of_measurement: 'Wh',
                mult: 1,
                entity_type: 'sensor',
                device_class: 'energy',
                name: 'cms Energy In Sum',
                state_class: 'total_increasing',
                role: 'value',
            },
            typec3MaxAllowUsbPow: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'type c 3 Max Allow Usb Pow',
                role: 'value',
            },
            typec4MaxAllowUsbPow: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'type c 4 Max Allow Usb Pow',
                role: 'value',
            },
            typec2MaxAllowUsbPow: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'type c 2 Max Allow Usb Pow',
                role: 'value',
            },
            typec1MaxAllowUsbPow: {
                min: 0,
                max: 100,
                unit_of_measurement: '%',
                mult: 1,
                step: 1,
                entity_type: 'number',
                device_class: 'battery',
                name: 'type c 1 Max Allow Usb Pow',
                role: 'value',
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
            typec1PortEnable: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'type c 1 Port Enable',
                payload_off: 'off',
                payload_on: 'on',
                typec1PortEnable: { 0: 'off', 1: 'on' },
            },
            typec2PortEnable: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'type c 2 Port Enable',
                payload_off: 'off',
                payload_on: 'on',
                typec2PortEnable: { 0: 'off', 1: 'on' },
            },
            typec3PortEnable: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'type c 3 Port Enable',
                payload_off: 'off',
                payload_on: 'on',
                typec3PortEnable: { 0: 'off', 1: 'on' },
            },
            typec4PortEnable: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'type c 4 Port Enable',
                payload_off: 'off',
                payload_on: 'on',
                typec4PortEnable: { 0: 'off', 1: 'on' },
            },
            pogopinPortEnable: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'pogopin Port Enable',
                payload_off: 'off',
                payload_on: 'on',
                pogopinPortEnable: { 0: 'off', 1: 'on' },
            },
            lowPowerAlarmSwitch: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'low Power Alarm Switch',
                payload_off: 'off',
                payload_on: 'on',
                lowPowerAlarmSwitch: { 0: 'off', 1: 'on' },
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
    rapidpro320: {
        RuntimePropertyUpload: {
            displayPropertyFullUploadPeriod: { entity: 'string' },
            displayPropertyIncrementalUploadPeriod: { entity: 'string' },
            runtimePropertyFullUploadPeriod: { entity: 'string' },
            runtimePropertyIncrementalUploadPeriod: { entity: 'string' },
        },
        DisplayPropertyUpload: {
            errcode: { entity: 'diagnostic' },
            sysStatus: { entity: 'diagnostic' },
            powInSumW: { entity: 'number' },
            powOutSumW: { entity: 'number' },
            lcdLight: { entity: 'level' },
            screenOffTime: { entity: 'level' },
            cmsBattSoc: { entity: 'number' },
            cmsBattSoh: { entity: 'number' },
            cmsDsgRemTime: { entity: 'number' },
            cmsChgRemTime: { entity: 'number' },
            cmsMaxChgSoc: { entity: 'level' },
            cmsMinDsgSoc: { entity: 'level' },
            cmsChgDsgState: { entity: 'diagnostic' },
            moduleWifiRssi: { entity: 'string' },
            devErrcodeList: { entity: 'array' },
            usbTypeA1DisplayInfo_usbPow: { entity: 'number' },
            usbTypeA1DisplayInfo_usbVolt: { entity: 'number' },
            usbTypeA1DisplayInfo_usbAmp: { entity: 'number' },
            usbTypec1DisplayInfo_usbPow: { entity: 'number' },
            usbTypec1DisplayInfo_usbVolt: { entity: 'number' },
            usbTypec1DisplayInfo_usbAmp: { entity: 'number' },
            usbTypec2DisplayInfo_usbPow: { entity: 'number' },
            usbTypec2DisplayInfo_usbVolt: { entity: 'number' },
            usbTypec2DisplayInfo_usbAmp: { entity: 'number' },
            usbTypec3DisplayInfo_usbPow: { entity: 'number' },
            usbTypec3DisplayInfo_usbVolt: { entity: 'number' },
            usbTypec3DisplayInfo_usbAmp: { entity: 'number' },
            usbTypec4DisplayInfo_usbPow: { entity: 'number' },
            usbTypec4DisplayInfo_usbVolt: { entity: 'number' },
            usbTypec4DisplayInfo_usbAmp: { entity: 'number' },
            pogopin_1DisplayInfo_usbPow: { entity: 'number' },
            pogopin_1DisplayInfo_usbVolt: { entity: 'number' },
            pogopin_1DisplayInfo_usbAmp: { entity: 'number' },
            typec1PortEnable: { entity: 'switch' },
            typec2PortEnable: { entity: 'switch' },
            typec3PortEnable: { entity: 'switch' },
            typec4PortEnable: { entity: 'switch' },
            pogopinPortEnable: { entity: 'switch' },
            typec3MaxAllowUsbPow: { entity: 'number' },
            typec4MaxAllowUsbPow: { entity: 'number' },
            typec2MaxAllowUsbPow: { entity: 'number' },
            typec1MaxAllowUsbPow: { entity: 'number' },
            cmsBattTemp: { entity: 'number' },
            cmsBattFullCap: { entity: 'number' },
            cmsBattDesignCap: { entity: 'number' },
            cmsBattRemainCap: { entity: 'number' },
            utcTimezone: { entity: 'number' },
            utcTimezoneId: { entity: 'string' },
            utcSetMode: { entity: 'diagnostic' },
            lowPowerAlarmSwitch: { entity: 'switch' },
            screenSaverSwitchEnable: { entity: 'string' },
            screenSaverDisplayTimes: { entity: 'string' },
            screenSaverDisplayIndex: { entity: 'string' },
            screenClockSwitchEnable: { entity: 'string' },
            screenClockDisplayTimes: { entity: 'string' },
            screenClockDisplayFormat: { entity: 'string' },
            screenThemeDisplayIndex: { entity: 'string' },
            batteryMaintainModel: { entity: 'diagnostic' },
            chargeOptCtrlEnable: { entity: 'diagnostic' },
            chargeOptState: { entity: 'diagnostic' },
            tempSmartCtrlEnable: { entity: 'diagnostic' },
            lowPowerDsgCtrlEnable: { entity: 'diagnostic' },
            cmsBattCycleNum: { entity: 'number' },
            batteryMaintainCycleNum: { entity: 'string' },
            screenClockDisplayTimesCharging: { entity: 'string' },
            screenPicPreview: { entity: 'string' },
            screenSourceFileRecvSta: { entity: 'string' },
            cmsEnergyOutSum: { entity: 'number' },
            cmsEnergyInSum: { entity: 'number' },
            screenSourceRecvProgress: { entity: 'string' },
            pdFirmVerDisplay: { entity: 'string' },
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
    rapidpro320: {
        DisplayPropertyUpload: {
            lcdLight: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 2 } },
            screenOffTime: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMaxChgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            cmsMinDsgSoc: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            typec1PortEnable: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            typec2PortEnable: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            typec3PortEnable: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            typec4PortEnable: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            pogopinPortEnable: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
            lowPowerAlarmSwitch: { msg: { dest: 2, cmdFunc: 254, cmdId: 17, dataLen: 3 } },
        },
        action: {
            latestQuotas: { msg: { cmdFunc: 2, cmdId: 1, dataLen: 0 } },
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
                                // all cases without nested states
                                await setOnlineStatus(adapter, topic);
                                for (let state in payload[channel]) {
                                    let val;
                                    let haupd;
                                    switch (state) {
                                        case 'usbTypec1DisplayInfo':
                                        case 'usbTypec2DisplayInfo':
                                        case 'usbTypec3DisplayInfo':
                                        case 'usbTypec4DisplayInfo':
                                        case 'usbTypeA1DisplayInfo':
                                        case 'pogopin_1DisplayInfo':
                                            for (let item in payload[channel][state]) {
                                                val = payload[channel][state][item];
                                                haupd = await compareUpdate(
                                                    adapter,
                                                    stateDictObj,
                                                    stateObj,
                                                    haenable,
                                                    topic,
                                                    channel,
                                                    state.concat('_', item),
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
    let muster = {
        header: {
            src: 32,
            dest: 20,
            dSrc: 1,
            dDest: 1,
            encType: 1,
            checkType: 3,
            cmdFunc: 254,
            cmdId: 17,
            needAck: 1,
            seq: Date.now(),
            version: 19,
            payloadVer: 1,
            from: 'Android',
            deviceSn: serial,
        },
    };
    const timestamp = Math.floor(Date.now() / 1000);
    // encryption is set but is actually not done, if needed then to find a way to only encrypt pdata

    switch (state) {
        case 'relay2Onoff':
        case 'relay3Onoff':
            muster['header']['pdata'] = {};
            muster['header']['pdata']['cfgUtcTime'] = timestamp;
            muster['header']['pdata'][state] = value ? 1 : 0;
            muster['header']['dataLen'] = cmd['msg']['dataLen'] || 9;
            break;
        case 'cmsMinDsgSoc':
            {
                const cmsMaxChgSoc = await adapter
                    .getStateAsync(`${serial}.DisplayPropertyUpload.cmsMaxChgSoc`)
                    .catch(e => {
                        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMaxChgSoc ->${e}`);
                    });
                muster['header']['pdata'] = {};
                muster['header']['pdata']['cfgUtcTime'] = timestamp;
                muster['header']['pdata']['cmsMaxChgSoc'] = parseInt(cmsMaxChgSoc.val); //int
                muster['header']['pdata'][state] = parseInt(value); //int
                muster['header']['dataLen'] = 12;
            }
            break;
        case 'cmsMaxChgSoc':
            {
                const cmsMinDsgSoc = await adapter
                    .getStateAsync(`${serial}.DisplayPropertyUpload.cmsMinDsgSoc`)
                    .catch(e => {
                        adapter.log.warn(`did not get ${serial}.DisplayPropertyUpload.cmsMinDsgSoc ->${e}`);
                    });
                muster['header']['pdata'] = {};
                muster['header']['pdata']['cfgUtcTime'] = timestamp;
                muster['header']['pdata'][state] = parseInt(value); //int
                muster['header']['pdata']['cmsMinDsgSoc'] = parseInt(cmsMinDsgSoc.val); //int
                muster['header']['dataLen'] = 12;
            }
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
        254: {
            cmdId: {
                17: 'ConfigWrite',
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

const protoSource = `
syntax = 'proto3';

message DevErrcodeList {
  repeated uint32 dev_errcode = 1;
}

message UsbRealDisplayInfo  {
    optional float usb_pow = 1;
    optional float usb_volt = 2;
    optional float usb_amp = 3;
}

message ScreenFileIndexInfo {
  string file_id = 1;
}

message DisplayPropertyUpload {
    optional uint32 errcode = 1;
    optional uint32 sys_status = 2;
    optional float pow_in_sum_w = 3;
    optional float pow_out_sum_w = 4;
    optional uint32 lcd_light = 5;
    optional uint32 screen_off_time = 18;
    optional uint32 cms_batt_temp = 102;
    optional int32 utc_timezone = 133;
    optional string utc_timezone_id = 134;
    optional uint32 utc_set_mode = 135; //bool
    optional float cms_batt_soc = 262;
    optional float cms_batt_soh = 263;
    optional uint32 cms_dsg_rem_time = 268;
    optional uint32 cms_chg_rem_time = 269;
    optional uint32 cms_max_chg_soc = 270;
    optional uint32 cms_min_dsg_soc = 271;
    optional uint32 cms_chg_dsg_state = 282;
    optional uint32 cms_batt_full_cap = 287;
    optional uint32 cms_batt_design_cap = 288;
    optional uint32 cms_batt_remain_cap = 289;
    optional float module_wifi_rssi = 602;
    optional DevErrcodeList dev_errcode_list = 627;

    optional uint32 screen_saver_switch_enable = 822;
    optional uint32 screen_saver_display_times = 823;
    optional ScreenFileIndexInfo screen_saver_display_index = 824;
    optional uint32 screen_clock_switch_enable = 825;
    optional uint32 screen_clock_display_times = 826;
    optional uint32 screen_clock_display_format = 827;
    optional ScreenFileIndexInfo screen_theme_display_index = 829;
        optional uint32 low_power_alarm_switch = 835;
    optional uint32 typec1_port_enable = 836;
    optional uint32 typec2_port_enable = 837;
    optional uint32 typec3_port_enable = 838;
    optional uint32 typec4_port_enable = 839;
//optional uint32 usb1_port_enable = 840;
    optional uint32 pogopin_port_enable = 841;
    optional float typec3_max_allow_usbPow = 843;
    optional float typec4_max_allow_usbPow = 844;
//optional float pogopin_max_allow_usbPow = 845;
    optional float typec2_max_allow_usbPow = 846;
    optional float typec1_max_allow_usbPow = 847;
    optional uint32 battery_maintain_model = 848;
    optional uint32 charge_opt_ctrl_enable = 849;
    optional uint32 charge_opt_state = 850;
    optional UsbRealDisplayInfo usb_typec1_display_info = 852;
    optional UsbRealDisplayInfo usb_typec3_display_info = 853;
    optional UsbRealDisplayInfo usb_typec4_display_info = 854;
    optional UsbRealDisplayInfo usb_typeA1_display_info = 855;
    optional UsbRealDisplayInfo usb_typec2_display_info = 856;
    optional UsbRealDisplayInfo pogopin_1_display_info = 857;
    optional uint32 temp_smart_ctrl_enable = 1249;
    optional uint32 low_power_dsg_ctrl_enable = 1250;
    optional uint32 cms_batt_cycle_num = 1251;
    optional uint32 battery_maintain_cycle_num = 1252;
    optional uint32 screen_clock_display_times_charging = 1259; 
    optional uint32 screen_pic_preview = 1262;
    optional uint32 screen_source_file_recv_sta = 1263;
    optional uint32 cms_energy_out_sum = 1274;
    optional uint32 cms_energy_in_sum = 1275;
    optional float screen_source_recv_progress = 1640;
    optional uint32 pd_firm_ver_display = 1645;
}


message RuntimePropertyUpload {
   optional int32 display_property_full_upload_period = 293;
   optional int32 display_property_incremental_upload_period = 294;
   optional int32 runtime_property_full_upload_period = 295;
   optional int32 runtime_property_incremental_upload_period = 296;
}

message ConfigWrite {
    optional uint32 cfgUtcTime = 6;
    optional int32 cfg_utc_timezone = 7;
    optional int32 screenOffTime = 12;
    optional int32 lcdLight = 14;
    optional uint32 cms_max_chg_soc = 33;
    optional uint32 cms_min_dsg_soc = 34;

      optional uint32 cfg_charge_opt_ctrl_enable = 189;


    optional string cfg_utc_timezone_id = 135;
    optional uint32 cfg_utc_set_mode = 136; //bool

  optional uint32 cfg_typec1_port_enable = 176;
  optional uint32 cfg_typec2_port_enable = 177;
  optional uint32 cfg_typec3_port_enable = 178;
  optional uint32 cfg_typec4_port_enable = 179;
  //optional uint32 cfg_usb1_port_enable = 180;
  optional uint32 cfg_pogopin_port_enable = 181;
    optional float cfg_typec3_max_allow_pow = 183;
  optional float cfg_typec4_max_allow_pow = 184;
  optional float cfg_pogopin_max_allow_pow = 185;
  optional float cfg_typec2_max_allow_pow = 186;
  optional float cfg_typec1_max_allow_pow = 187;

   optional uint32 cfg_battery_maintain_model = 188;
optional uint32 cfg_low_power_alarm_switch = 309;
    optional uint32 cfg_temp_smart_ctrl_enable = 550;

   optional uint32 cfg_low_power_dsg_ctrl_enable = 551;
    optional uint32 cfg_reset_screen_source_file_recv_sta = 556;
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

    message sentDisplayPropertyUpload {
        setHeader1 header = 1;
    }

    message sentRuntimePropertyUpload {
        setHeader2 header = 1;
    } 

 message setHeader2 {
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

 message setHeader1 {
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
    storeProtoPayload,
    prepareProtoCmd,
    msgNameObj,
};
