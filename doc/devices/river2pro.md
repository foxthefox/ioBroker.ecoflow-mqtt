# States for  RIVER2PRO
### version: 0.0.14

[pd](#pd)

[bmsMaster](#bmsMaster)

[inv](#inv)

[mppt](#mppt)

[info](#info)



## pd

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|typec1Temp|0 | 80 | °C | 1 |  Type-C 1 temperature |
|qcUsb1Watts|0 | 500 | W | 0.1 |  Quick charge usb1 output power |
|wattsInSum|0 | 4000 | W | 1 |  Total input power |
|dcInUsedTime|0 | 143999 | min | 0.0166 |  DC charging time |
|dsgPowerDC|0 | 4000 | W | 0.1 |  Discharge Power DC |
|chgPowerDC|0 | 4000 | W | 0.1 |  Charge Power DC |
|remainTime|0 | 143999 | min | 1 |  Time remaining (min) &gt; 0: remaining charging time; time remaining (min) &lt; 0: remaining discharging time |
|typecUsedTime|0 | 143999 | min | 0.0166 |  Type-C use time |
|typec2Watts|0 | 500 | W | 1 |  Typec2 output power |
|usbqcUsedTime|0 | 143999 | min | 0.0166 |  USB QC use time |
|chgSunPower|0 | 65000 | kWh | 0.001 |  Cumulative solar power charged |
|wattsOutSum|0 | 4000 | W | 1 |  Total output power |
|carTemp|0 | 80 | °C | 1 |  CAR temperature |
|usbUsedTime|0 | 143999 | min | 0.0166 |  USB use time |
|mpptUsedTime|0 | 143999 | min | 0.0166 |  MPPT use time |
|usb1Watts|0 | 500 | W | 0.1 |  Common usb1 output power |
|dsgPowerAC|0 | 4000 | W | 0.001 |  Discharge Power AC |
|qcUsb2Watts|0 | 500 | W | 0.1 |  Quick charge usb2 output power |
|chgPowerAC|0 | 4000 | W | 0.001 |  Charge Power AC |
|carWatts|0 | 500 | W | 0.1 |  CAR output power |
|typec2Temp|0 | 80 | °C | 1 |  Type-C 2 temperature |
|carUsedTime|0 | 143999 | min | 0.0166 |  Car use time |
|typec1Watts|0 | 500 | W | 1 |  Typec1 output power |
|usb2Watts|0 | 500 | W | 0.1 |  Common usb2 output power |
|soc|0 | 100 | % | 1 |  Displayed SOC |
|invUsedTime|0 | 143999 | min | 0.0166 |  Inverter use time |
|typecChaWatts|0 | 500 | W | 0.1 |  PD? charging power |


### string

| State  |  Name |
|----------|------|
|wifiVer| Wi-Fi version |
|ext3p8Port| Infinity port |
|model| Product model |
|ext4p8Port| Extra battery port. Only the status of the leftmost port can be identified. |
|brightLevel| LCD brightness level: 0-3 |
|wifiRssi| Wi-Fi signal intensity |
|wireWatts| Wireless charging output power (W): Reserved, not available |
|extRj45Port| RJ45 port |
|sysVer| System version |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|wifiAutoRcvy| Wi-Fi auto mode | {0:default mode (STA),1:The Wi-Fi network is automatically restored to the last mode (STA/AP) after powering on} |
|beepMode| Beep mode | {0:normal?,1:quit?} |
|errCode| Global error code | {0:OK?} |
|chgDsgState| Charging/discharging state on screen | {0:discharged,1:charged} |
|carState| CAR button state: 0: off; 1: on | {0:off,1:on} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|standbyMin| 0 | 720 | min | 1 |  Standby time /min 0 Never standby 720 Default value ? | {} |
|lcdOffSec| 0 | 1800 | s | 1 |  LCD screen-off duration: 0: never off | {valName:delayOff,moduleType:1,operateType:lcdCfg,params:{brighLevel:255,delayOff:300}} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|dcOutState| off | on | DC button state | {valName:enabled,moduleType:1,operateType:dcOutCfg,params:{enabled:1}} |

## bmsMaster

### string

| State  |  Name |
|----------|------|
|sysVer| System version |
|soh| Health status |
|bqSysStatReg| BQ hardware protection register |
|openBmsIdx| Battery pack enable state |
|num| BMS number |
|bmsFault| BMS permanent fault |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|minCellTemp|0 | 80 | °C | 1 |  Minimum cell temperature |
|designCap|0 | 80000 | mAh | 1 |  Design capacity |
|temp|0 | 80 | °C | 1 |  Temperature |
|minCellVol|0 | 60 | V | 0.001 |  Minimum cell voltage |
|cycles|0 | 6000 | cycles | 1 |  Number of cycles |
|f32ShowSoc|0 | 100 | % | 1 |  SOC |
|outputWatts|0 | 4000 | W | 0.1 |  Output power |
|maxCellVol|0 | 60 | V | 0.001 |  Maximum cell voltage |
|maxCellTemp|0 | 80 | °C | 1 |  Maximum cell temperature |
|remainCap|0 | 80000 | mAh | 1 |  Remaining capacity |
|minMosTemp|0 | 80 | °C | 1 |  Minimum MOS temperature |
|vol|0 | 60 | V | 0.001 |  Voltage |
|remainTime|0 | 143999 | min | 1 |  Time remaining |
|fullCap|0 | 80000 | mAh | 1 |  Full capacity |
|amp|0 | 13 | A | 0.001 |  Current |
|soc|0 | 100 | % | 1 |  Remaining battery percentage |
|inputWatts|0 | 4000 | W | 0.1 |  Input power |
|tagChgAmp|0 | 100 | A | 0.0001 |  Target charging current |
|maxMosTemp|0 | 80 | °C | 1 |  Maximum MOS temperature |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|type| BMS type | {1:Lithium battery,2:Oil-powered} |
|cellId| Battery capacity type | {1:2.5 Ah per battery,2:2 Ah per battery} |
|errCode| Global error code | {0:OK?} |

## inv

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|dcInVol|0 | 60 | V | 0.001 |  DC input voltage |
|SlowChgWatts|200 | 1000 | W | 1 |  Maximum charging power for AC slow charging (W) |
|dcInAmp|0 | 13 | A | 0.001 |  DC input current |
|outputWatts|0 | 4000 | W | 1 |  Discharging power |
|dcInTemp|0 | 80 | °C | 1 |  DC temperature |
|invOutFreq|0 | 62 | Hz | 1 |  Inverter output frequency |
|acInAmp|0 | 13 | A | 0.001 |  Inverter input current |
|outTemp|0 | 90 | °C | 1 |  Inverter temperature |
|acInVol|0 | 250 | V | 0.001 |  Inverter input voltage |
|invOutVol|0 | 250 | V | 0.001 |  Actual inverter output voltage |
|FastChgWatts|200 | 2400 | W | 1 |  Maximum charging power for AC fast charging (W) |
|inputWatts|0 | 4000 | W | 1 |  Charging power |
|standbyMins|0 | 1440 | min | 1 |  AC standby time /min 0 Never standby 720 Default value |
|acInFreq|0 | 62 | Hz | 1 |  Inverter input frequency |
|invOutAmp|0 | 13 | A | 0.001 |  Inverter output current |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cfgAcWorkMode| AC charging mode | {0:full power,1:mute} |
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |
|chargerType| Charger type | {0:no charging,1:AC charging,2:DC adapter charging,3:solar charging,4:CC,5:BC} |
|fanState| Fan state | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |
|cfgAcXboost| X-Boost switch | {0:off,1:on,ff:ignored} |
|cfgAcEnabled| AC discharge switch setting | {0:off,1:on} |
|acDipSwitch| AC fast/slow charging dip switch | {0:unknown,1:fast charging mode,2:slow charging mode} |
|chgPauseFlag| AC charging pause flag | {0:no pause?,1:charging stopped} |
|dischargeType| Discharging type | {0:no discharge?,1:AC discharging,2:PR,3:BC} |

### string

| State  |  Name |
|----------|------|
|errCode| Global error code |
|invType| PSDR model code |
|cfgAcOutVol| Inverter output voltage (V): 0xffffffff: ignored |
|sysVer| System version |

## mppt

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|carOutVol|0 | 15 | V | 0.001 |  Car charging output voltage |
|carTemp|0 | 80 | °C | 1 |  Car charging temperature |
|outWatts|0 | 500 | W | 0.1 |  PV output power |
|carOutAmp|0 | 13 | A | 0.001 |  Car charging output current |
|outAmp|0 | 13 | A | 0.01 |  PV output current |
|dcdc12vWatts|0 | 500 | W | 0.1 |  DC12V30A output power, which is valid only for DELTA Pro |
|powStandbyMin|0 | 720 | min | 1 |  Power standby time /min 0 Never standby 720 Default value ? |
|inWatts|0 | 500 | W | 0.1 |  PV input power |
|dcdc12vVol|0 | 60 | V | 0.1 |  DC12V30A output voltage, which is valid only for DELTA Pro |
|inAmp|0 | 13 | A | 0.001 |  PV input current |
|scrStandbyMin|0 | 720 | min | 1 |  SCR standby time /min 0 Never standby 720 Default value ? |
|inVol|0 | 150 | V | 0.001 |  PV input voltage |
|carOutWatts|0 | 500 | W | 0.1 |  Car charging output power |
|mpptTemp|0 | 80 | °C | 1 |  MPPT temperature |
|outVol|0 | 60 | V | 0.001 |  PV output voltage |
|dcdc12vAmp|0 | 13 | A | 0.01 |  DC12V30A output current, which is valid only for DELTA Pro |
|dc24vTemp|0 | 80 | °C | 1 |  DCDC24V temperature |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|carState| off | on | Car charger switch setting | {valName:enabled,moduleType:5,operateType:mpptCar,params:{enabled:1}} |
|cfgAcXboost| off | on | X-Boost switch | {valName:xboost,moduleType:5,operateType:acOutCfg,params:{enabled:255,out_freq:255,out_voltage:4294967295,xboost:1}} |
|chgPauseFlag| not stopped? | charge stopped | AC Charging Pause | {valName:chgPauseFlag,moduleType:5,operateType:acChgCfg,params:{chgWatts:100,chgPauseFlag:255}} |
|cfgAcEnabled| off | on | AC discharge switch setting | {valName:enabled,moduleType:5,operateType:acOutCfg,params:{enabled:1,out_freq:255,out_voltage:4294967295,xboost:255}} |
|beepState| normal | quiet | Beep status | {valName:enabled,moduleType:5,operateType:quietMode,params:{enabled:1}} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|dischargeType| Discharging type | {0:no discharge?,1:AC discharging,2:PR,3:BC} |
|dc24vState| DCDC24 switch state | {0:off,1:on} |
|x60ChgType| XT60 charging type | {0:not detected,1:MPPT,2:adapter} |
|chgType| Actual charging type | {0:null,1:adapter (adapter/DC source),2:MPPT (solar),3:AC (mains supply),4:gas,5:wind} |
|cfgChgType| Configured charging type: This parameter is valid when xt60_chg_type is 0. | {0:auto,1:MPPT,2:adapter} |
|chgState| Charging state | {0:disabled,1:charging,2:standby (DC charging stopped during AC charging)} |
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |

### string

| State  |  Name |
|----------|------|
|faultCode| Error code: byte0: mppt_fault; byte1: car_fault; byte2: dc24v_fault |
|swVer| Version number |
|cfgAcOutVol| Inverter output voltage (V): 0xffffffff: ignored |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|acStandbyMins| 0 | 720 | min | 1 |  AC standby time /min 0 Never standby 720 Default value | {valName:standbyMins,moduleType:5,operateType:acStandby,params:{standbyMins:360}} |
|carStandbyMin| 0 | 720 | min | 1 |  CAR standby time /min 0 Never standby 720 Default value | {valName:standbyMins,moduleType:5,operateType:standbyTime,params:{standbyMins:720}} |
|dcChgCurrent| 4 | 8 | A | 0.001 |  On-board charging current | {valName:dcChgCfg,moduleType:5,operateType:dcChgCfg,params:{dcChgCfg:8000}} |
|cfgChgWatts| 100 | 940 | W | 1 |  Maximum charging power for charging (W) ? | {valName:chgWatts,moduleType:5,operateType:acChgCfg,params:{chgWatts:100,chgPauseFlag:255}} |

## info

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|latestQuotas| no trigger | trigger | Get latest Quotas | {from:iOS,operateType:latestQuotas,id:83154039,lang:de-de,params:{},version:1.0} |

