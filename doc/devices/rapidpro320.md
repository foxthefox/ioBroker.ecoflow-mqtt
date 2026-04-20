# States for  RAPIDPRO320
### version: 1.4.8

[RuntimePropertyUpload](#RuntimePropertyUpload)

[DisplayPropertyUpload](#DisplayPropertyUpload)



## RuntimePropertyUpload

### string

| State  |  Name |
|----------|------|
|displayPropertyFullUploadPeriod| Display Property Full Upload Period |
|displayPropertyIncrementalUploadPeriod| Display Property Incremental Upload Period |
|runtimePropertyFullUploadPeriod| Runtime Property Full Upload Period |
|runtimePropertyIncrementalUploadPeriod| Runtime Property Incremental Upload Period |

## DisplayPropertyUpload

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errcode| Global error code | {0:OK?} |
|sysStatus| System status | {0:device off,1:device on,2:device standby} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|utcSetMode| utc set mode | {0:OK?} |
|batteryMaintainModel| battery Maintain Model | {0:0?,1:1?} |
|chargeOptCtrlEnable| charge Opt Ctrl Enable | {0:0?,1:1?,2:2?} |
|chargeOptState| charge Opt State | {0:0?,1:1?} |
|tempSmartCtrlEnable| temp Smart Ctrl Enable | {0:0?,1:1?,2:2?} |
|lowPowerDsgCtrlEnable| low UsbP ower Dsg Ctrl Enable | {0:0?,1:1?,2:2?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|-400 | 400 | W | 1 |  Total input power |
|powOutSumW|-400 | 400 | W | 1 |  Total output power |
|cmsBattSoc|0 | 100 | % | 1 |  Overall SOC |
|cmsBattSoh|0 | 100 | % | 1 |  Overall SOH |
|cmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|cmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time |
|usbTypeA1DisplayInfo_usbPow|-150 | 150 | W | 1 |  power of the USB A port |
|usbTypeA1DisplayInfo_usbVolt|-50 | 50 | V | 1 |  voltage of the USB A port |
|usbTypeA1DisplayInfo_usbAmp|-10 | 10 | A | 1 |  current of the USB A port |
|usbTypec1DisplayInfo_usbPow|-150 | 150 | W | 1 |  power of the USB 1 port |
|usbTypec1DisplayInfo_usbVolt|-50 | 50 | V | 1 |  voltage of the USB 1 port |
|usbTypec1DisplayInfo_usbAmp|-10 | 10 | A | 1 |  current of the USB 1 port |
|usbTypec2DisplayInfo_usbPow|-150 | 150 | W | 1 |  power of the USB 2 port |
|usbTypec2DisplayInfo_usbVolt|-50 | 50 | V | 1 |  voltage of the USB 2 port |
|usbTypec2DisplayInfo_usbAmp|-10 | 10 | A | 1 |  current of the USB 2 port |
|usbTypec3DisplayInfo_usbPow|-150 | 150 | W | 1 |  power of the USB 3 port |
|usbTypec3DisplayInfo_usbVolt|-50 | 50 | V | 1 |  voltage of the USB 3 port |
|usbTypec3DisplayInfo_usbAmp|-10 | 10 | A | 1 |  current of the USB 3 port |
|usbTypec4DisplayInfo_usbPow|-150 | 150 | W | 1 |  power of the USB 4 port |
|usbTypec4DisplayInfo_usbVolt|-50 | 50 | V | 1 |  voltage of the USB 4 port |
|usbTypec4DisplayInfo_usbAmp|-10 | 10 | A | 1 |  current of the USB 4 port |
|pogopin_1DisplayInfo_usbPow|-350 | 350 | W | 1 |  power of the pogopin |
|pogopin_1DisplayInfo_usbVolt|-50 | 50 | V | 1 |  voltage of the pogopin |
|pogopin_1DisplayInfo_usbAmp|-20 | 20 | A | 1 |  current of the pogopin |
|typec3MaxAllowUsbPow|0 | 100 | % | 1 |  type c 3 Max Allow Usb Pow |
|typec4MaxAllowUsbPow|0 | 100 | % | 1 |  type c 4 Max Allow Usb Pow |
|typec2MaxAllowUsbPow|0 | 100 | % | 1 |  type c 2 Max Allow Usb Pow |
|typec1MaxAllowUsbPow|0 | 100 | % | 1 |  type c 1 Max Allow Usb Pow |
|cmsBattTemp|-20 | 80 | °C | 1 |  battery temperature |
|cmsBattFullCap|0 | 40000 | mAh | 1 |  main battery full cap |
|cmsBattDesignCap|0 | 40000 | mAh | 1 |  main battery full cap |
|cmsBattRemainCap|0 | 40000 | mAh | 1 |  main battery full cap |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |
|cmsBattCycleNum|0 | 6000 |  | 1 |  cms Batt Number of cycles |
|cmsEnergyOutSum|0 |  n/a | Wh | 1 |  cms Energy Out Sum |
|cmsEnergyInSum|0 |  n/a | Wh | 1 |  cms Energy In Sum |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|lcdLight| 0 | 100 | % | 0.390625 |  Screen brightness | {dest:2,cmdFunc:254,cmdId:17,dataLen:2} |
|screenOffTime| 0 | 1800 | s | 1 |  Screen timeout (s) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### string

| State  |  Name |
|----------|------|
|moduleWifiRssi| Wi-Fi signal intensity |
|utcTimezoneId| utc timezone id |
|screenSaverSwitchEnable| screen Saver Switch Enable |
|screenSaverDisplayTimes| screen Saver Display Times |
|screenSaverDisplayIndex| screen Saver Display Index |
|screenClockSwitchEnable| screen Clock Switch Enable |
|screenClockDisplayTimes| screen Clock Display Times |
|screenClockDisplayFormat| screen Clock Display Format |
|screenThemeDisplayIndex| screen Theme Display Index |
|batteryMaintainCycleNum| battery Maintain Cycle Num |
|screenClockDisplayTimesCharging| screen Clock Display Times Charging |
|screenPicPreview| screen PicP review |
|screenSourceFileRecvSta| screen Source File Recv Sta |
|screenSourceRecvProgress| screen SourceR ecv Progress |
|pdFirmVerDisplay| pd Firm Ver Display |

### array

| State  |  Name |
|----------|------|
|devErrcodeList| dev Errcode List |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|typec1PortEnable| off | on | type c 1 Port Enable | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|typec2PortEnable| off | on | type c 2 Port Enable | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|typec3PortEnable| off | on | type c 3 Port Enable | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|typec4PortEnable| off | on | type c 4 Port Enable | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|pogopinPortEnable| off | on | pogopin Port Enable | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|lowPowerAlarmSwitch| off | on | low Power Alarm Switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

