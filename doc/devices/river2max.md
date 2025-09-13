# States for  RIVER2MAX
### version: 1.4.5

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

### array

| State  |  Name |
|----------|------|
|bmsIsConnt| BMS online signal |

### string

| State  |  Name |
|----------|------|
|bmsModel| BMS model |
|fanLevel| Fan level |
|maxAvailNum| Maximum available quantity |
|openBmsIdx| Open BMS index |
|openUpsFlag| UPS mode enable flag |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bmsWarState| BMS warning state | {0:no warning?,1:hi_temp,2:low_temp,4:overload,8:chg_flag} |
|chgCmd| Charge switch | {0:off,1:on,2:2?} |
|chgState| Charging state | {0:disabled,1:CC,2:CV,3:UPS,4:PARA 0x55: Charging error} |
|dsgCmd| Discharge switch | {0:off,1:on,2:2?} |
|emsIsNormalFlag| Energy storage state: 0: sleep; 1: normal | {0:sleep,1:normal} |

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
|maxChargeSoc| 50 | 100 | % | 1 |  Charge upper limit | {valName:maxChgSoc,moduleType:2,operateType:upsConfig,params:{maxChgSoc:90}} |
|minDsgSoc| 0 | 30 | % | 1 |  Discharge lower limit | {valName:minDsgSoc,moduleType:2,operateType:dsgCfg,params:{minDsgSoc:30}} |

## inv

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|acDipSwitch| AC fast/slow charging dip switch | {0:unknown,1:fast charging mode,2:slow charging mode} |
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |
|chargerType| Charger type | {0:no charging,1:AC charging,2:DC adapter charging,3:solar charging,4:CC,5:BC} |
|dischargeType| Discharging type | {0:no discharge?,1:AC discharging,2:PR,3:BC} |
|fanState| Fan state | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|acInAmp|0 | 13 | A | 0.001 |  Inverter input current |
|acInFreq|0 | 62 | Hz | 1 |  Inverter input frequency |
|acInVol|0 | 250 | V | 0.001 |  Inverter input voltage |
|dcInAmp|0 | 13 | A | 0.001 |  DC input current |
|dcInTemp|0 | 80 | °C | 1 |  DC temperature |
|dcInVol|0 | 60 | V | 0.001 |  DC input voltage |
|inputWatts|0 | 4000 | W | 1 |  Charging power |
|invOutAmp|0 | 13 | A | 0.001 |  Inverter output current |
|invOutFreq|0 | 62 | Hz | 1 |  Inverter output frequency |
|invOutVol|0 | 250 | V | 0.001 |  Actual inverter output voltage |
|outTemp|0 | 90 | °C | 1 |  Inverter temperature |
|outputWatts|0 | 4000 | W | 1 |  Discharging power |
|standbyMins|0 | 1440 | min | 1 |  AC standby time /min 0 Never standby 720 Default value |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgAcEnabled| off | on | AC discharge (INV) switch setting | {valName:enabled,moduleType:5,operateType:acOutCfg,params:{enabled:1,out_freq:255,out_voltage:4294967295,xboost:255}} |
|cfgAcWorkMode| full power | mute | AC charging mode | {} |
|cfgAcXboost| off | on | X-Boost switch | {valName:xboost,moduleType:5,operateType:acOutCfg,params:{xboost:1,enabled:255,out_freq:255,out_voltage:4294967295}} |
|chgPauseFlag| not stopped? | charge stopped | AC Charging Pause | {valName:chgPauseFlag,moduleType:5,operateType:acOutCfg,params:{chgPauseFlag:1}} |

### string

| State  |  Name |
|----------|------|
|cfgAcOutVol| Inverter output voltage (V): 0xffffffff: ignored |
|errCode| Global error code |
|invType| PSDR model code |
|sysVer| System version |

## mppt

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|acStandbyMins| 0 | 720 | min | 1 |  AC standby time /min 0 Never standby 720 Default value | {valName:standbyMins,moduleType:5,operateType:acStandby,params:{standbyMins:720}} |
|carStandbyMin| 0 | 720 | min | 1 |  CAR standby time /min 0 Never standby 720 Default value | {valName:standbyMins,moduleType:5,operateType:standbyTime,params:{standbyMins:720}} |
|cfgChgWatts| 0 | 2200 | W | 1 |  Maximum charging power for charging (W) ? | {valName:chgWatts,moduleType:5,operateType:acChgCfg,params:{chgWatts:200}} |
|dcChgCurrent| 4 | 8 | A | 0.001 |  On-board charging current | {valName:dcChgCfg,moduleType:5,operateType:dcChgCfg,params:{dcChgCfg:8000}} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|beepState| normal | quiet | Beep status | {valName:enabled,moduleType:5,operateType:quietCfg,params:{enabled:1}} |
|carState| off | on | Car charger switch setting | {valName:enabled,moduleType:5,operateType:mpptCar,params:{enabled:1}} |
|cfgAcEnabled| off | on | AC discharge switch setting |  |
|cfgAcXboost| off | on | X-Boost switch |  |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|carOutAmp|0 | 13 | A | 0.01 |  Car charging output current |
|carOutVol|0 | 60 | V | 0.1 |  Car charging output voltage |
|carOutWatts|0 | 500 | W | 0.1 |  Car charging output power |
|carTemp|0 | 80 | °C | 1 |  Car charging temperature |
|dc24vTemp|0 | 80 | °C | 1 |  DCDC24V temperature |
|dcdc12vAmp|0 | 13 | A | 0.01 |  DC12V30A output current, which is valid only for DELTA Pro |
|dcdc12vVol|0 | 60 | V | 0.1 |  DC12V30A output voltage, which is valid only for DELTA Pro |
|dcdc12vWatts|0 | 500 | W | 0.1 |  DC12V30A output power, which is valid only for DELTA Pro |
|inAmp|0 | 13 | A | 0.01 |  PV input current |
|inVol|0 | 150 | V | 0.1 |  PV input voltage |
|inWatts|0 | 500 | W | 0.1 |  PV input power |
|mpptTemp|0 | 80 | °C | 1 |  MPPT temperature |
|outAmp|0 | 13 | A | 0.01 |  PV output current |
|outVol|0 | 60 | V | 0.1 |  PV output voltage |
|outWatts|0 | 600 | W | 0.1 |  PV output power |
|powStandbyMin|0 | 720 | min | 1 |  Power standby time /min 0 Never standby 720 Default value ? |
|scrStandbyMin|0 | 720 | min | 1 |  SCR standby time /min 0 Never standby 720 Default value ? |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |
|cfgChgType| Configured charging type: This parameter is valid when xt60_chg_type is 0. | {0:auto,1:MPPT,2:adapter} |
|chgPauseFlag| PV charging pause flag | {0:not stopped ?,1:charging stopped} |
|chgState| Charging state | {0:disabled,1:charging,2:standby (DC charging stopped during AC charging)} |
|chgType| Actual charging type | {0:null,1:adapter (adapter/DC source),2:MPPT (solar),3:AC (mains supply),4:gas,5:wind} |
|dc24vState| DCDC24 switch state | {0:off,1:on} |
|dischargeType| Discharging type | {0:no discharge?,1:AC discharging,2:PR,3:BC} |
|faultCode| Error code | {0:OK?,1:mppt_fault,2:car_fault,4:dc24v_fault} |
|x60ChgType| XT60 charging type | {0:not detected,1:MPPT,2:adapter} |

### string

| State  |  Name |
|----------|------|
|cfgAcOutVol| Inverter output voltage (mV) |
|swVer| Version number |

## pd

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|acAutoOutConfig| off | on | AC auto out Config | {} |
|dcOutState| off | on | DC button state | {valName:enabled,moduleType:1,operateType:dcOutCfg,params:{enabled:1}} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|acAutoOutPause|0 | 255 | s (0-255?) | 1 |  AC Auto out Pause |
|carTemp|0 | 80 | °C | 1 |  CAR temperature |
|carUsedTime|0 | 9999999 | min | 0.0166 |  Car use time |
|carWatts|0 | 500 | W | 0.1 |  CAR output power |
|chgPowerAC|0 |  n/a | kWh | 0.001 |  Cumulative AC power charged for PD (wall socket) |
|chgPowerDC|0 |  n/a | kWh | 0.001 |  Cumulative DC power charged for PD (adapter) |
|chgSunPower|0 | 65000 | kWh | 0.001 |  Cumulative solar power charged |
|dcInUsedTime|0 | 9999999 | min | 0.0166 |  DC charging time |
|dsgPowerAC|0 |  n/a | kWh | 0.001 |  Cumulative AC power discharged  |
|dsgPowerDC|0 |  n/a | kWh | 0.001 |  Cumulative DC discharge capacity |
|invUsedTime|0 | 9999999 | min | 0.0166 |  Inverter use time |
|minAcoutSoc|0 | 255 | % (0-255?) | 1 |  minimum AC out SOC |
|mpptUsedTime|0 | 9999999 | min | 0.0166 |  MPPT use time |
|qcUsb1Watts|0 | 500 | W | 1 |  Quick charge usb1 output power |
|qcUsb2Watts|0 | 500 | W | 0.1 |  Quick charge usb2 output power |
|remainTime|0 | 143999 | min | 1 |  Time remaining (min) &gt; 0: remaining charging time; time remaining (min) &lt; 0: remaining discharging time |
|soc|0 | 100 | % | 1 |  Displayed SOC |
|typec1Temp|0 | 80 | °C | 1 |  Type-C 1 temperature |
|typec1Watts|0 | 500 | W | 1 |  Typec1 output power |
|typec2Temp|0 | 80 | °C | 1 |  Type-C 2 temperature |
|typec2Watts|0 | 500 | W | 1 |  Typec2 output power |
|typecChaWatts|0 | 500 | W | 0.1 |  PD? charging power |
|typecUsedTime|0 | 9999999 | min | 0.0166 |  Type-C use time |
|usb1Watts|0 | 500 | W | 1 |  Common usb1 output power |
|usb2Watts|0 | 500 | W | 1 |  Common usb2 output power |
|usbUsedTime|0 | 9999999 | min | 0.0166 |  USB use time |
|usbqcUsedTime|0 | 9999999 | min | 0.0166 |  USB QC use time |
|wattsInSum|0 | 4000 | W | 1 |  Total input power |
|wattsOutSum|0 | 4000 | W | 1 |  Total output power |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|beepMode| Beep mode | {0:normal,1:quiet} |
|carState| CAR button state | {0:off,1:on} |
|chgDsgState| Charging/discharging state on screen | {0:discharging,1:charging} |
|errCode| Global error code | {0:OK?} |
|ext3p8Port| Infinity port / 3+8 ports | {0:NULL,1:CC,2:PR,3:SP (BC)} |
|ext4p8Port| Extra battery port. Only the status of the leftmost port can be identified. | {0:NULL,1:Extra battery,2:Smart generator} |
|extRj45Port| RJ45 port | {0:NULL,1:RC(BLE_CTL)} |
|watchIsConfig| Power management configuration:  | {0:disable,1:enable} |
|wifiAutoRcvy| Wi-Fi auto mode | {0:default mode (STA),1:The Wi-Fi network is automatically restored to the last mode (STA/AP) after powering on} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|bpPowerSoc| 0 | 100 | % | 1 |  Backup Power SOC | {valName:bpPowerSoc,moduleType:1,operateType:watthConfig,params:{isConfig:1,bpPowerSoc:55,minDsgSoc:0,minChgSoc:0}} |
|lcdOffSec| 0 | 1800 | s | 1 |  LCD screen-off duration: 0: never off | {valName:delayOff,moduleType:1,operateType:lcdCfg,params:{brighLevel:255,delayOff:300}} |
|standbyMin| 0 | 720 | min | 1 |  Standby time /min 0 Never standby 720 Default value ? | {} |

### string

| State  |  Name |
|----------|------|
|brightLevel| LCD brightness level: 0-3 |
|hysteresisAdd| Hysteresis SOC |
|model| Product model |
|relaySwitchCnt| Number of relay disconnections |
|sysVer| System version |
|wifiRssi| Wi-Fi signal intensity |
|wifiVer| Wi-Fi version |
|wireWatts| Wireless charging output power (W) |

