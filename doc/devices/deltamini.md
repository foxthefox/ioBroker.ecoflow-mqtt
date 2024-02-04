# States for  DELTAMINI
### version: 0.0.22

[bmsMaster](#bmsMaster)

[ems](#ems)

[inv](#inv)

[mppt](#mppt)

[pd](#pd)



## bmsMaster

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|amp|0 | 25 | A | 0.001 |  Current |
|cycles|0 | 6000 |  | 1 |  Number of cycles |
|designCap|0 | 80000 | mAh | 1 |  Design capacity |
|f32ShowSoc|0 | 100 | % | 1 |  SOC |
|fullCap|0 | 80000 | mAh | 1 |  Full capacity |
|inputWatts|0 | 4000 | W | 0.1 |  Input power |
|maxCellTemp|0 | 80 | °C | 1 |  Maximum cell temperature |
|maxCellVol|0 | 60 | V | 0.001 |  Maximum cell voltage |
|maxMosTemp|0 | 80 | °C | 1 |  Maximum MOS temperature |
|minCellTemp|0 | 80 | °C | 1 |  Minimum cell temperature |
|minCellVol|0 | 60 | V | 0.001 |  Minimum cell voltage |
|minMosTemp|0 | 80 | °C | 1 |  Minimum MOS temperature |
|outputWatts|0 | 4000 | W | 0.1 |  Output power |
|remainCap|0 | 80000 | mAh | 1 |  Remaining capacity |
|remainTime|0 | 143999 | min | 1 |  Time remaining |
|soc|0 | 100 | % | 1 |  Remaining battery percentage |
|tagChgAmp|0 | 100 | A | 0.0001 |  Target charging current |
|temp|0 | 80 | °C | 1 |  Temperature |
|vol|0 | 60 | V | 0.001 |  Voltage |


### string

| State  |  Name |
|----------|------|
|bmsFault| BMS permanent fault |
|bqSysStatReg| BQ hardware protection register |
|num| BMS number |
|openBmsIdx| Battery pack enable state |
|soh| Health status |
|sysVer| System version |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cellId| Battery capacity type | {1:2.5 Ah per battery,2:2 Ah per battery} |
|errCode| Global error code | {0:OK?} |
|type| BMS type | {1:Lithium battery,2:Oil-powered} |

## ems

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bms0Online| BMS0 online signal | {0:not online?,1:HW online,2:SW online,3:HW-SW online} |
|bms1Online| BMS1 online signal | {0:not online?,1:HW online,2:SW online,3:HW-SW online} |
|bms2Online| BMS2 online signal | {0:not online?,1:HW online,2:SW online,3:HW-SW online} |
|bmsWarningState| BMS warning state | {0:no warning?,1:hi_temp,2:low_temp,4:overload,8:chg_flag} |
|chgCmd| Charge switch | {0:off,1:on,2:2?} |
|chgState| Charging state | {0:disabled,1:CC,2:CV,3:UPS,4:PARA 0x55: Charging error} |
|dsgCmd| Discharge switch | {0:off,1:on,2:2?} |
|emsIsNormalFlag| Energy storage state: 0: sleep; 1: normal | {0:sleep,1:normal} |

### string

| State  |  Name |
|----------|------|
|bmsModel| BMS model |
|fanLevel| Fan level |
|maxAvailableNum| Maximum available quantity |
|openBmsIdx| Open BMS index |
|openUpsFlag| UPS mode enable flag |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|chgAmp|0 | 100 | A | 0.0001 |  Charging current |
|chgRemainTime|0 | 143999 | min | 1 |  Remaining charging time |
|chgVol|0 | 150 | V | 0.001 |  Charging voltage |
|dsgRemainTime|0 | 143999 | min | 1 |  Remaining discharging time |
|f32LcdShowSoc|0 | 100 | % | 1 |  SOC on LCD |
|lcdShowSoc|0 | 100 | % | 1 |  SOC on LCD |
|paraVolMax|0 | 60 | V | 0.001 |  Maximum parallel voltage |
|paraVolMin|0 | 60 | V | 0.001 |  Minimum parallel voltage |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|maxChargeSoc| 50 | 100 | % | 1 |  Charge upper limit | {from:Android,operateType:TCP,id:38461351,lang:en-us,params:{id:49,maxChgSoc:95},version:1.0} |
|minDsgSoc| 0 | 30 | % | 1 |  Discharge lower limit | {from:Android,operateType:TCP,id:38454960,lang:en-us,params:{id:51,minDsgSoc:25},version:1.0} |

## inv

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|acDipSwitch| AC fast/slow charging dip switch | {0:unknown,1:fast charging mode,2:slow charging mode} |
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |
|chargerType| Charger type | {0:no charging,1:AC charging,2:DC adapter charging,3:solar charging,4:CC,5:BC} |
|chgPauseFlag| AC charging pause flag | {0:no pause?,1:charging stopped} |
|dischargeType| Discharging type | {0:no discharge?,1:AC discharging,2:PR,3:BC} |
|fanState| Fan state | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|acInAmp|0 | 13 | A | 0.001 |  Inverter input current |
|acInFreq|0 | 62 | Hz | 1 |  Inverter input frequency |
|acInVol|0 | 250 | V | 0.001 |  Inverter input voltage |
|cfgFastChgWatts|200 | 900 | W | 1 |  Maximum charging power for AC fast charging (W) |
|dcInAmp|0 | 13 | A | 0.001 |  DC input current |
|dcInTemp|0 | 80 | °C | 1 |  DC temperature |
|dcInVol|0 | 60 | V | 0.001 |  DC input voltage |
|inputWatts|0 | 4000 | W | 1 |  Charging power |
|invOutAmp|0 | 13 | A | 0.001 |  Inverter output current |
|invOutFreq|0 | 62 | Hz | 1 |  Inverter output frequency |
|invOutVol|0 | 250 | V | 0.001 |  Actual inverter output voltage |
|outTemp|0 | 90 | °C | 1 |  Inverter temperature |
|outputWatts|0 | 4000 | W | 1 |  Discharging power |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgAcEnabled| off | on | AC discharge switch setting | {from:Android,operateType:TCP,id:554272649,lang:en-us,params:{id:66,enabled:1},version:1.0} |
|cfgAcWorkMode| full power | mute | AC charging mode |  |
|cfgAcXboost| off | on | X-Boost switch | {from:Android,operateType:TCP,id:602507362,lang:en-us,params:{id:66,xboost:1},version:1.0} |

### string

| State  |  Name |
|----------|------|
|cfgAcOutVoltage| Inverter output voltage (V): 0xffffffff: ignored |
|errCode| Global error code |
|invType| PSDR model code |
|sysVer| System version |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|cfgSlowChgWatts| 200 | 800 | W | 1 |  Maximum charging power for AC slow charging (W) | {from:Android,operateType:TCP,id:747329085,lang:en-us,params:{id:69,slowChgPower:300},version:1.0} |
|cfgStandbyMin| 0 | 720 | min | 1 |  AC standby time /min 0 Never standby 720 Default value | {from:Android,operateType:TCP,id:153750799,lang:en-us,params:{id:153,standByMins:360},version:1.0} |

## mppt

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|carOutAmp|0 | 13 | A | 0.01 |  Car charging output current |
|carOutVol|0 | 15 | V | 0.1 |  Car charging output voltage |
|carOutWatts|0 | 500 | W | 0.1 |  Car charging output power |
|carTemp|0 | 80 | °C | 1 |  Car charging temperature |
|dc24vTemp|0 | 80 | °C | 1 |  DCDC24V temperature |
|dcdc12vAmp|0 | 13 | A | 0.01 |  DC12V30A output current, which is valid only for DELTA Pro |
|dcdc12vVol|0 | 60 | V | 0.1 |  DC12V30A output voltage, which is valid only for DELTA Pro |
|dcdc12vWatts|0 | 500 | W | 0.1 |  DC12V30A output power, which is valid only for DELTA Pro |
|inAmp|0 | 13 | A | 0.01 |  PV input current |
|inVol|0 | 75 | V | 0.1 |  PV input voltage |
|inWatts|0 | 500 | W | 0.1 |  PV input power |
|mpptTemp|0 | 80 | °C | 1 |  MPPT temperature |
|outAmp|0 | 13 | A | 0.01 |  PV output current |
|outVol|0 | 60 | V | 0.1 |  PV output voltage |
|outWatts|0 | 500 | W | 0.1 |  PV output power |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|carState| off | on | Car charger switch setting | {from:Android,operateType:TCP,id:639503104,lang:en-us,params:{id:81,enabled:1},version:1.0} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cfgChgType| Configured charging type: This parameter is valid when xt60_chg_type is 0. | {0:auto,1:MPPT,2:adapter} |
|chgPauseFlag| PV charging pause flag | {0:not stopped ?,1:charging stopped} |
|chgState| Charging state | {0:disabled,1:charging,2:standby (DC charging stopped during AC charging)} |
|chgType| Actual charging type | {0:null,1:adapter (adapter/DC source),2:MPPT (solar),3:AC (mains supply),4:gas,5:wind} |
|dc24vState| DCDC24 switch state | {0:off,1:on} |
|faultCode| Error code | {0:OK?,1:mppt_fault,2:car_fault,4:dc24v_fault} |
|xt60ChgType| XT60 charging type | {0:not detected,1:MPPT,2:adapter} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|cfgDcChgCurrent| 4 | 8 | A | 0.001 |  On-board charging current | {from:Android,operateType:TCP,id:787426012,lang:en-us,params:{id:71,currMa:6000},version:1.0} |

### string

| State  |  Name |
|----------|------|
|swVer| Version number |

## pd

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|beepState| normal | quiet | Beep status | {from:Android,operateType:TCP,id:834553333,lang:en-us,params:{id:38,enabled:1},version:1.0} |
|dcOutState| off | on | DC button state | {from:Android,operateType:TCP,id:689699572,lang:en-us,params:{id:34,enabled:1},version:1.0} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|carState| CAR button state | {0:off,1:on} |
|errCode| Global error code | {0:OK?} |
|iconRechgTimeMode| Charge icon mode | {0:normal,1:blinking} |
|sysChgDsgState| Charging/discharging state on screen | {0:discharged,1:charged} |
|wifiAutoRcvy| Wi-Fi auto mode | {0:default mode (STA),1:The Wi-Fi network is automatically restored to the last mode (STA/AP) after powering on} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|carTemp|0 | 80 | °C | 1 |  CAR temperature |
|carUsedTime|0 | 9999999 | min | 0.0166 |  Car use time |
|carWatts|0 | 500 | W | 0.1 |  CAR output power |
|chgPowerAc|0 | 65000 | kWh | 0.001 |  Cumulative AC power charged (wall socket) |
|chgPowerDc|0 | 65000 | kWh | 0.001 |  Cumulative DC power charged (adapter) |
|chgSunPower|0 | 65000 | kWh | 0.001 |  Cumulative solar power charged |
|dcInUsedTime|0 | 9999999 | min | 0.0166 |  DC charging time |
|dsgPowerAc|0 | 65000 | kWh | 0.001 |  Cumulative AC power discharged |
|dsgPowerDc|0 | 65000 | kWh | 0.001 |  Cumulative DC power discharged |
|invUsedTime|0 | 9999999 | min | 0.0166 |  Inverter use time |
|mpptUsedTime|0 | 9999999 | min | 0.0166 |  MPPT use time |
|qcUsb1Watts|0 | 500 | W | 1 |  Quick charge usb1 output power |
|qcUsb2Watts|0 | 500 | W | 0.1 |  Quick charge usb2 output power |
|remainTime|0 | 143999 | min | 1 |  Time remaining (min) &gt; 0: remaining charging time; time remaining (min) &lt; 0: remaining discharging time |
|soc|0 | 100 | % | 1 |  Displayed SOC |
|typccUsedTime|0 | 9999999 | min | 0.0166 |  Type-C use time |
|typec1Temp|0 | 80 | °C | 1 |  Type-C 1 temperature |
|typec1Watts|0 | 500 | W | 1 |  Typec1 output power |
|typec2Temp|0 | 80 | °C | 1 |  Type-C 2 temperature |
|typec2Watts|0 | 500 | W | 1 |  Typec2 output power |
|usb1Watts|0 | 500 | W | 1 |  Common usb1 output power |
|usb2Watts|0 | 500 | W | 1 |  Common usb2 output power |
|usbUsedTime|0 | 9999999 | min | 0.0166 |  USB use time |
|usbqcUsedTime|0 | 9999999 | min | 0.0166 |  USB QC use time |
|wattsInSum|0 | 4000 | W | 1 |  Total input power |
|wattsOutSum|0 | 4000 | W | 1 |  Total output power |


### string

| State  |  Name |
|----------|------|
|lcdBrightness| delta max special |
|model| Product model |
|sysVer| System version |
|wifiRssi| Wi-Fi signal intensity |
|wifiVer| Wi-Fi version |
|wirelessWatts| Wireless charging output power (W) |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|lcdOffSec| 0 | 1800 | s | 1 |  LCD screen-off duration: 0: never off | {from:Android,operateType:TCP,id:93980337,lang:en-us,params:{id:39,lcdTime:1800},version:1.0} |
|standByMode| 0 | 5999 | min | 1 |  Device standby time /min 0 Never standby 5999 Max value | {from:Android,operateType:TCP,id:119032574,lang:en-us,params:{id:33,standByMode:360},version:1.0} |

