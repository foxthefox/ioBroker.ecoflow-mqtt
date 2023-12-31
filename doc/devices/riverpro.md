# States for  RIVERPRO
### version: 0.0.15

[bmsMaster](#bmsMaster)

[inv](#inv)

[pd](#pd)



## bmsMaster

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|amp|0 | 13 | A | 0.001 |  Current |
|cycles|0 | 6000 | cycles | 1 |  Number of cycles |
|fullCap|0 | 80000 | mAh | 1 |  Full capacity |
|maxCellTemp|0 | 80 | °C | 1 |  Maximum cell temperature |
|maxCellVol|0 | 60 | V | 0.001 |  Maximum cell voltage |
|maxMosTemp|0 | 80 | °C | 1 |  Maximum MOS temperature |
|minCellTemp|0 | 80 | °C | 1 |  Minimum cell temperature |
|minCellVol|0 | 60 | V | 0.001 |  Minimum cell voltage |
|minMosTemp|0 | 80 | °C | 1 |  Minimum MOS temperature |
|remainCap|0 | 80000 | mAh | 1 |  Remaining capacity |
|soc|0 | 100 | % | 1 |  Remaining battery percentage |
|tagChgAmp|0 | 100 | A | 0.0001 |  Target charging current |
|temp|0 | 80 | °C | 1 |  Temperature |
|vol|0 | 60 | V | 0.001 |  Voltage |
|tagChgVol|0 | 100 | V | 0.001 |  Target charging voltage |


### string

| State  |  Name |
|----------|------|
|bmsFault| BMS permanent fault |
|openBmsIdx| Battery pack enable state |
|sysVer| System version |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errCode| Global error code | {0:OK?} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|maxChargeSoc| 50 | 100 | % | 1 |  Charge upper limit | {from:Android,operateType:TCP,id:38461351,lang:en-us,params:{id:49,maxChgSoc:95},version:1.0} |

## inv

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgAcEnabled| off | on | AC discharge switch setting | {from:Android,operateType:TCP,id:554272649,lang:en-us,params:{id:66,enabled:1},version:1.0} |
|cfgAcXboost| off | on | X-Boost switch | {from:Android,operateType:TCP,id:602507362,lang:en-us,params:{id:66,xboost:1},version:1.0} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |
|chargerType| Charger type | {0:no charging,1:AC charging,2:DC adapter charging,3:solar charging,4:CC,5:BC} |
|fanState| Fan state | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |
|cfgAcChgModeFlg| AC charging mode flag | {0:?,1:?} |
|cfgFanMode| Fan mode | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |

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

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|dcInAmp|0 | 13 | A | 0.001 |  DC input current |
|dcInVol|0 | 60 | V | 0.001 |  DC input voltage |
|inputWatts|0 | 4000 | W | 1 |  Charging power |
|invOutAmp|0 | 13 | A | 0.001 |  Inverter output current |
|invOutFreq|0 | 62 | Hz | 1 |  Inverter output frequency |
|invOutVol|0 | 250 | V | 0.001 |  Actual inverter output voltage |
|outTemp|0 | 90 | °C | 1 |  Inverter temperature |
|outputWatts|0 | 4000 | W | 1 |  Discharging power |
|inTemp|0 | 80 | °C | 1 |  Inverter temperature |
|invInAmp|0 | 13 | A | 0.001 |  Inverter input current |
|invInFreq|0 | 62 | Hz | 1 |  Inverter input frequency |
|invInVol|0 | 250 | V | 0.001 |  Inverter input voltage |


## pd

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|beepState| normal | quiet | Beep status | {from:Android,operateType:TCP,id:834553333,lang:en-us,params:{id:38,enabled:1},version:1.0} |
|carSwitch| off | on | Car charger switch | {from:Android,operateType:TCP,id:689699572,lang:en-us,params:{id:34,enabled:1},version:1.0} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|carTemp|0 | 80 | °C | 1 |  CAR temperature |
|carUsedTime|0 | 143999 | min | 0.0166 |  Car use time |
|carWatts|0 | 500 | W | 0.1 |  CAR output power |
|chgPowerAC|0 | 65000 | kWh | 0.001 |  Cumulative AC power charged for PD (wall socket) |
|chgPowerDC|0 | 65000 | kWh | 0.001 |  Cumulative DC power charged for PD (adapter) |
|chgSunPower|0 | 65000 | kWh | 0.001 |  Cumulative solar power charged |
|dcInUsedTime|0 | 143999 | min | 0.0166 |  DC charging time |
|dsgPowerAC|0 | 4000 | W | 0.001 |  Discharge Power AC |
|dsgPowerDC|0 | 4000 | W | 0.1 |  Discharge Power DC |
|invUsedTime|0 | 143999 | min | 0.0166 |  Inverter use time |
|mpptUsedTime|0 | 143999 | min | 0.0166 |  MPPT use time |
|remainTime|0 | 143999 | min | 1 |  Time remaining (min) &gt; 0: remaining charging time; time remaining (min) &lt; 0: remaining discharging time |
|soc|0 | 100 | % | 1 |  Displayed SOC |
|typecUsedTime|0 | 143999 | min | 0.0166 |  Type-C use time |
|usb1Watts|0 | 500 | W | 0.1 |  Common usb1 output power |
|usb2Watts|0 | 500 | W | 0.1 |  Common usb2 output power |
|usbUsedTime|0 | 143999 | min | 0.0166 |  USB use time |
|usbqcUsedTime|0 | 143999 | min | 0.0166 |  USB QC use time |
|wattsInSum|0 | 4000 | W | 1 |  Total input power |
|wattsOutSum|0 | 4000 | W | 1 |  Total output power |
|ledWatts|0 | 100 | W | 0.1 |  LED output power |
|typecTemp|0 | 80 | °C | 1 |  Type-C temperature |
|typecWatts|0 | 500 | W | 1 |  Type-C output power |
|usb3Watts|0 | 500 | W | 0.1 |  Common usb3 output power |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errCode| Global error code | {0:OK?} |
|ledState| LED state | {0:off?,1:on?} |

### string

| State  |  Name |
|----------|------|
|model| Product model |
|sysVer| System version |
|bmsSlave| BMS slave |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|standByMode| 0 | 5999 | min | 1 |  Device standby time /min 0 Never standby 5999 Max value | {from:Android,operateType:TCP,id:119032574,lang:en-us,params:{id:33,standByMode:360},version:1.0} |

