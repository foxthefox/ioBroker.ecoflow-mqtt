# States for  DELTAPRO
### version: 0.0.22

[bmsMaster](#bmsMaster)

[ems](#ems)

[inv](#inv)

[pd](#pd)

[mppt](#mppt)



## bmsMaster

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|f32ShowSoc|0 | 100 | % | 1 |  SOC |
|designCap|0 | 80000 | mAh | 1 |  Design capacity |
|remainCap|0 | 80000 | mAh | 1 |  Remaining capacity |
|temp|0 | 80 | °C | 1 |  Temperature |
|maxCellTemp|0 | 80 | °C | 1 |  Maximum cell temperature |
|vol|0 | 60 | V | 0.001 |  Voltage |
|amp|0 | 25 | A | 0.001 |  Current |
|outputWatts|0 | 4000 | W | 0.1 |  Output power |
|soc|0 | 100 | % | 1 |  Remaining battery percentage |
|minCellTemp|0 | 80 | °C | 1 |  Minimum cell temperature |
|maxMosTemp|0 | 80 | °C | 1 |  Maximum MOS temperature |
|tagChgAmp|0 | 100 | A | 0.0001 |  Target charging current |
|maxCellVol|0 | 60 | V | 0.001 |  Maximum cell voltage |
|inputWatts|0 | 4000 | W | 0.1 |  Input power |
|minMosTemp|0 | 80 | °C | 1 |  Minimum MOS temperature |
|remainTime|0 | 143999 | min | 1 |  Time remaining |
|minCellVol|0 | 60 | V | 0.001 |  Minimum cell voltage |
|fullCap|0 | 80000 | mAh | 1 |  Full capacity |
|cycles|0 | 6000 |  | 1 |  Number of cycles |


### string

| State  |  Name |
|----------|------|
|bmsFault| BMS permanent fault |
|soh| Health status |
|sysVer| System version |
|bqSysStatReg| BQ hardware protection register |
|num| BMS number |
|openBmsIdx| Battery pack enable state |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|type| BMS type | {1:Lithium battery,2:Oil-powered} |
|errCode| Global error code | {0:OK?} |
|cellId| Battery capacity type | {1:2.5 Ah per battery,2:2 Ah per battery} |

## ems

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|chgCmd| Charge switch | {0:off,1:on,2:2?} |
|bmsWarningState| BMS warning state: bit0: hi_temp; bit1: low_temp; bit2: overload; bit3: chg_flag | {0:no warning?,1:hi_temp,2:low_temp,4:overload,8:chg_flag} |
|emsIsNormalFlag| Energy storage state: 0: sleep; 1: normal | {0:sleep,1:normal} |
|dsgCmd| Discharge switch | {0:off,1:on,2:2?} |
|chgState| Charging state | {0:disabled,1:CC,2:CV,3:UPS,4:PARA 0x55: Charging error} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|minDsgSoc| 0 | 30 | % | 1 |  Discharge lower limit | {from:Android,operateType:TCP,id:38454960,lang:en-us,params:{id:51,minDsgSoc:25},version:1.0} |
|minOpenOilEbSoc| 0 | 30 | % | 1 |  The upper threshold of smart generator auto on Range: 0~100 | {from:Android,operateType:TCP,id:878666957,lang:en-us,params:{id:52,openOilSoc:0},version:1.0} |
|maxChargeSoc| 50 | 100 | % | 1 |  Charge upper limit | {from:Android,operateType:TCP,id:38461351,lang:en-us,params:{id:49,maxChgSoc:95},version:1.0} |
|maxCloseOilEbSoc| 50 | 100 | % | 1 |  The lower threshold of smart generator auto off Range: 0~100 | {from:Android,operateType:TCP,id:878673259,lang:en-us,params:{id:53,closeOilSoc:84},version:1.0} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|paraVolMax|0 | 60 | V | 0.001 |  Maximum parallel voltage |
|f32LcdShowSoc|0 | 100 | % | 1 |  SOC on LCD |
|lcdShowSoc|0 | 100 | % | 1 |  SOC on LCD |
|chgRemainTime|0 | 143999 | min | 1 |  Remaining charging time |
|paraVolMin|0 | 60 | V | 0.001 |  Minimum parallel voltage |
|dsgRemainTime|0 | 143999 | min | 1 |  Remaining discharging time |
|chgVol|0 | 150 | V | 0.001 |  Charging voltage |
|chgAmp|0 | 100 | A | 0.0001 |  Charging current |


### string

| State  |  Name |
|----------|------|
|bms0Online| BMS online signal: BIT0: hardware online signal; BIT1: software online signal |
|openBmsIdx| Open BMS index |
|maxAvailableNum| Maximum available quantity |
|bms1Online| BMS online signal: BIT0: hardware online signal; BIT1: software online signal |
|bmsModel| BMS model |
|openUpsFlag| UPS mode enable flag |
|fanLevel| Fan level |
|bms2Online| BMS online signal: BIT0: hardware online signal; BIT1: software online signal |

## inv

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|dcInVol|0 | 60 | V | 0.001 |  DC input voltage |
|dcInAmp|0 | 13 | A | 0.001 |  DC input current |
|outputWatts|0 | 4000 | W | 1 |  Discharging power |
|dcInTemp|0 | 80 | °C | 1 |  DC temperature |
|invOutFreq|0 | 62 | Hz | 1 |  Inverter output frequency |
|cfgFastChgWatts|200 | 2900 | W | 1 |  Maximum charging power for AC fast charging (W) |
|acInAmp|0 | 13 | A | 0.001 |  Inverter input current |
|outTemp|0 | 90 | °C | 1 |  Inverter temperature |
|invOutVol|0 | 250 | V | 0.001 |  Actual inverter output voltage |
|acInVol|0 | 250 | V | 0.001 |  Inverter input voltage |
|inputWatts|0 | 4000 | W | 1 |  Charging power |
|acInFreq|0 | 62 | Hz | 1 |  Inverter input frequency |
|invOutAmp|0 | 13 | A | 0.001 |  Inverter output current |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgAcWorkMode| full power | mute | AC charging mode |  |
|cfgAcEnabled| off | on | AC discharge switch setting | {from:Android,operateType:TCP,id:554272649,lang:en-us,params:{id:66,enabled:1},version:1.0} |
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
|cfgStandbyMin| 0 | 720 | min | 1 |  AC standby time /min 0 Never standby 720 Default value | {from:Android,operateType:TCP,id:153750799,lang:en-us,params:{id:153,standByMins:360},version:1.0} |
|cfgSlowChgWatts| 200 | 2900 | W | 1 |  Maximum charging power for AC slow charging (W) | {from:Android,operateType:TCP,id:747329085,lang:en-us,params:{id:69,slowChgPower:300},version:1.0} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |
|chargerType| Charger type | {0:no charging,1:AC charging,2:DC adapter charging,3:solar charging,4:CC,5:BC} |
|fanState| Fan state | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |
|acDipSwitch| AC fast/slow charging dip switch | {0:unknown,1:fast charging mode,2:slow charging mode} |
|acPassByAutoEn| acPassByAutoEn | {0:0?,1:1?} |
|chgPauseFlag| AC charging pause flag | {0:no pause?,1:charging stopped} |
|dischargeType| Discharging type | {0:no discharge?,1:AC discharging,2:PR,3:BC} |

## pd

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|wattsInSum|0 | 4000 | W | 1 |  Total input power |
|typec2Watts|0 | 500 | W | 1 |  Typec2 output power |
|usb1Watts|0 | 500 | W | 1 |  Common usb1 output power |
|chgPowerDc|0 | 65000 | kWh | 0.001 |  Cumulative DC power charged (adapter) |
|dsgPowerDc|0 | 65000 | kWh | 0.001 |  Cumulative DC power discharged |
|typccUsedTime|0 | 9999999 | min | 0.0166 |  Type-C use time |
|typec2Temp|0 | 80 | °C | 1 |  Type-C 2 temperature |
|carUsedTime|0 | 9999999 | min | 0.0166 |  Car use time |
|typec1Watts|0 | 500 | W | 1 |  Typec1 output power |
|soc|0 | 100 | % | 1 |  Displayed SOC |
|wattsOutSum|0 | 4000 | W | 1 |  Total output power |
|invUsedTime|0 | 9999999 | min | 0.0166 |  Inverter use time |
|typec1Temp|0 | 80 | °C | 1 |  Type-C 1 temperature |
|dsgPowerAc|0 | 65000 | kWh | 0.001 |  Cumulative AC power discharged |
|dcInUsedTime|0 | 9999999 | min | 0.0166 |  DC charging time |
|chgPowerAc|0 | 65000 | kWh | 0.001 |  Cumulative AC power charged (wall socket) |
|remainTime|0 | 143999 | min | 1 |  Time remaining (min) &gt; 0: remaining charging time; time remaining (min) &lt; 0: remaining discharging time |
|chgSunPower|0 | 65000 | kWh | 0.001 |  Cumulative solar power charged |
|carTemp|0 | 80 | °C | 1 |  CAR temperature |
|qcUsb2Watts|0 | 500 | W | 0.1 |  Quick charge usb2 output power |
|qcUsb1Watts|0 | 500 | W | 1 |  Quick charge usb1 output power |
|usbqcUsedTime|0 | 9999999 | min | 0.0166 |  USB QC use time |
|usbUsedTime|0 | 9999999 | min | 0.0166 |  USB use time |
|mpptUsedTime|0 | 9999999 | min | 0.0166 |  MPPT use time |
|carWatts|0 | 500 | W | 0.1 |  CAR output power |
|usb2Watts|0 | 500 | W | 1 |  Common usb2 output power |
|minAcoutSoc|0 | 255 | % (0-255?) | 1 |  minimum AC out SOC |
|acautooutPause|0 | 255 | s (0-255?) | 1 |  AC Auto out Pause |


### string

| State  |  Name |
|----------|------|
|wifiVer| Wi-Fi version |
|wirelessWatts| Wireless charging output power (W): Reserved, not available |
|model| Product model |
|lcdBrightness| delta max special |
|sysVer| System version |
|wifiRssi| Wi-Fi signal intensity |
|relayswitchcnt| relayswitchcnt status or cnt? |
|hysteresisAdd| Hysteresis SOC |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|standByMode| 0 | 5999 | min | 1 |  Device standby time /min 0 Never standby 5999 Max value | {from:Android,operateType:TCP,id:119032574,lang:en-us,params:{id:33,standByMode:360},version:1.0} |
|lcdOffSec| 0 | 1800 | s | 1 |  LCD screen-off duration: 0: never off | {from:Android,operateType:TCP,id:93980337,lang:en-us,params:{id:39,lcdTime:1800},version:1.0} |
|bppowerSoc| 0 | 100 | % | 1 |  Backup Power SOC | {from:Android,operateType:TCP,id:834553333,lang:en-us,params:{id:94,isConfig:1,bpPowerSoc:0,minDsgSoc:20,maxChgSoc:100},version:1.0} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|extRj45Port| RJ45 port | {0:NULL,1:RC(BLE_CTL)} |
|ext3p8Port| Infinity port / 3+8 ports | {0:NULL,1:CC,2:PR,3:SP (BC)} |
|carState| CAR button state: 0: off; 1: on | {0:off,1:on} |
|wifiAutoRcvy| Wi-Fi auto mode | {0:default mode (STA),1:The Wi-Fi network is automatically restored to the last mode (STA/AP) after powering on} |
|ext4p8Port| Extra battery port. Only the status of the leftmost port can be identified. | {0:NULL,1:Extra battery,2:Smart generator} |
|iconRechgTimeMode| Charge icon mode | {0:normal,1:blinking} |
|sysChgDsgState| Charging/discharging state on screen | {0:discharged,1:charged} |
|errCode| Global error code | {0:OK?} |
|watthisconfig| Power management configuration | {0:disable,1:enable} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|beepState| normal | quiet | Beep status | {from:Android,operateType:TCP,id:834553333,lang:en-us,params:{id:38,enabled:1},version:1.0} |
|dcOutState| off | on | DC button state | {from:Android,operateType:TCP,id:689699572,lang:en-us,params:{id:34,enabled:1},version:1.0} |
|acautooutConfig| off | on | AC auto out Config | {from:Android,operateType:TCP,id:834553333,lang:en-us,params:{id:95,acautooutConfig:1},version:1.0} |

## mppt

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|carOutVol|0 | 15 | V | 0.1 |  Car charging output voltage |
|carTemp|0 | 80 | °C | 1 |  Car charging temperature |
|outWatts|0 | 500 | W | 0.1 |  PV output power |
|carOutAmp|0 | 13 | A | 0.01 |  Car charging output current |
|outAmp|0 | 13 | A | 0.01 |  PV output current |
|dcdc12vWatts|0 | 500 | W | 0.1 |  DC12V30A output power, which is valid only for DELTA Pro |
|inWatts|0 | 500 | W | 0.1 |  PV input power |
|dcdc12vVol|0 | 60 | V | 0.1 |  DC12V30A output voltage, which is valid only for DELTA Pro |
|inAmp|0 | 13 | A | 0.01 |  PV input current |
|inVol|0 | 100 | V | 0.1 |  PV input voltage |
|carOutWatts|0 | 500 | W | 0.1 |  Car charging output power |
|mpptTemp|0 | 80 | °C | 1 |  MPPT temperature |
|outVol|0 | 60 | V | 0.1 |  PV output voltage |
|dcdc12vAmp|0 | 13 | A | 0.01 |  DC12V30A output current, which is valid only for DELTA Pro |
|dc24vTemp|0 | 80 | °C | 1 |  DCDC24V temperature |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|carState| off | on | Car charger switch setting | {from:Android,operateType:TCP,id:639503104,lang:en-us,params:{id:81,enabled:1},version:1.0} |

### string

| State  |  Name |
|----------|------|
|faultCode| Error code: byte0: mppt_fault; byte1: car_fault; byte2: dc24v_fault |
|swVer| Version number |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|xt60ChgType| XT60 charging type | {0:not detected,1:MPPT,2:adapter} |
|dc24vState| DCDC24 switch state | {0:off,1:on} |
|chgPauseFlag| PV charging pause flag | {0:not stopped ?,1:charging stopped} |
|chgType| Actual charging type | {0:null,1:adapter (adapter/DC source),2:MPPT (solar),3:AC (mains supply),4:gas,5:wind} |
|cfgChgType| Configured charging type: This parameter is valid when xt60_chg_type is 0. | {0:auto,1:MPPT,2:adapter} |
|chgState| Charging state | {0:disabled,1:charging,2:standby (DC charging stopped during AC charging)} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|cfgDcChgCurrent| 4 | 13 | A | 0.001 |  On-board charging current | {from:Android,operateType:TCP,id:787426012,lang:en-us,params:{id:71,currMa:6000},version:1.0} |

