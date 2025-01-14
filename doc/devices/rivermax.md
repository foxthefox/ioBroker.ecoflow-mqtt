# States for  RIVERMAX
### version: 1.1.3

[inv](#inv)

[bmsMaster](#bmsMaster)

[pd](#pd)



## inv

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cfgFanMode| Fan mode | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |
|cfgAcChgModeFlg| AC charging mode flag | {0:?,1:?} |
|cfgAcOutFreq| Inverter output frequency (Hz) | {1:50 Hz,2:60 Hz,255:ignored} |
|chargerType| Charger type | {0:no charging,1:AC charging,2:DC adapter charging,3:solar charging,4:CC,5:BC} |
|fanState| Fan state | {0:disabled,1:Level 1,2:Level 2,3:Level 3} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|dcInVol|0 | 60 | V | 0.001 |  DC input voltage |
|dcInAmp|0 | 13 | A | 0.001 |  DC input current |
|outputWatts|0 | 4000 | W | 1 |  Discharging power |
|invOutFreq|0 | 62 | Hz | 1 |  Inverter output frequency |
|inTemp|0 | 80 | °C | 1 |  Inverter temperature |
|outTemp|0 | 90 | °C | 1 |  Inverter temperature |
|invOutVol|0 | 250 | V | 0.001 |  Actual inverter output voltage |
|invInAmp|0 | 13 | A | 0.001 |  Inverter input current |
|inputWatts|0 | 4000 | W | 1 |  Charging power |
|invInFreq|0 | 62 | Hz | 1 |  Inverter input frequency |
|invOutAmp|0 | 13 | A | 0.001 |  Inverter output current |
|invInVol|0 | 250 | V | 0.001 |  Inverter input voltage |


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
|cfgStandbyMin| 0 | 1440 | min | 1 |  AC standby time /min 0 Never standby 1440 Default value | {from:Android,operateType:TCP,id:153750799,lang:en-us,params:{id:153,standByMins:360},version:1.0} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgAcEnabled| off | on | AC discharge (INV) switch setting | {from:Android,operateType:TCP,id:554272649,lang:en-us,params:{id:66,enabled:1},version:1.0} |
|cfgAcXboost| off | on | X-Boost switch | {from:Android,operateType:TCP,id:602507362,lang:en-us,params:{id:66,xboost:1},version:1.0} |

## bmsMaster

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|maxCellTemp|0 | 80 | °C | 1 |  Maximum cell temperature |
|temp|0 | 80 | °C | 1 |  Temperature |
|cycles|0 | 6000 |  | 1 |  Number of cycles |
|remainCap|0 | 80000 | mAh | 1 |  Remaining capacity |
|vol|0 | 60 | V | 0.001 |  Voltage |
|minCellVol|0 | 60 | V | 0.001 |  Minimum cell voltage |
|soc|0 | 100 | % | 1 |  Remaining battery percentage |
|amp|0 | 50 | A | 0.001 |  Current |
|minCellTemp|0 | 80 | °C | 1 |  Minimum cell temperature |
|minMosTemp|0 | 80 | °C | 1 |  Minimum MOS temperature |
|maxCellVol|0 | 60 | V | 0.001 |  Maximum cell voltage |
|fullCap|0 | 80000 | mAh | 1 |  Full capacity |
|maxMosTemp|0 | 80 | °C | 1 |  Maximum MOS temperature |


### string

| State  |  Name |
|----------|------|
|bmsFault| BMS permanent fault |
|sysVer| System version |
|bqSysStatReg| BQ hardware protection register |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errCode| Global error code | {0:OK?} |

## pd

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|wattsInSum|0 | 500 | W | 1 |  Total input power |
|dcInUsedTime|0 | 9999999 | min | 0.0166 |  DC charging time |
|chgPowerDC|0 |  n/a | kWh | 0.001 |  Cumulative DC power charged for PD (adapter) |
|dsgPowerDC|0 |  n/a | kWh | 0.001 |  Cumulative DC discharge capacity |
|remainTime|0 | 143999 | min | 1 |  Time remaining (min) &gt; 0: remaining charging time; time remaining (min) &lt; 0: remaining discharging time |
|usb3Watts|0 | 500 | W | 0.1 |  Common usb3 output power |
|typecUsedTime|0 | 9999999 | min | 0.0166 |  Type-C use time |
|typecWatts|0 | 500 | W | 1 |  Type-C output power |
|usbqcUsedTime|0 | 9999999 | min | 0.0166 |  USB QC use time |
|chgSunPower|0 | 65000 | kWh | 0.001 |  Cumulative solar power charged |
|wattsOutSum|0 | 4000 | W | 1 |  Total output power |
|carTemp|0 | 80 | °C | 1 |  CAR temperature |
|usbUsedTime|0 | 9999999 | min | 0.0166 |  USB use time |
|mpptUsedTime|0 | 9999999 | min | 0.0166 |  MPPT use time |
|ledWatts|0 | 100 | W | 0.1 |  LED output power |
|usb1Watts|0 | 500 | W | 1 |  Common usb1 output power |
|dsgPowerAC|0 |  n/a | kWh | 0.001 |  Cumulative AC power discharged  |
|chgPowerAC|0 |  n/a | kWh | 0.001 |  Cumulative AC power charged for PD (wall socket) |
|carWatts|0 | 500 | W | 0.1 |  CAR output power |
|carUsedTime|0 | 9999999 | min | 0.0166 |  Car use time |
|usb2Watts|0 | 500 | W | 1 |  Common usb2 output power |
|soc|0 | 100 | % | 1 |  Displayed SOC |
|typecTemp|0 | 80 | °C | 1 |  Type-C temperature |
|invUsedTime|0 | 9999999 | min | 0.0166 |  Inverter use time |


### string

| State  |  Name |
|----------|------|
|model| Product model |
|bmsSlave| BMS slave |
|sysVer| System version |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|ledState| LED state | {0:off?,1:on?} |
|errCode| Global error code | {0:OK?} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|beepState| normal | quiet | Beep status | {from:Android,operateType:TCP,id:834553333,lang:en-us,params:{id:38,enabled:1},version:1.0} |
|carSwitch| off | on | Car charger switch | {from:Android,operateType:TCP,id:689699572,lang:en-us,params:{id:34,enabled:1},version:1.0} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|standByMode| 0 | 5999 | min | 1 |  Device standby time /min 0 Never standby 5999 Max value | {from:Android,operateType:TCP,id:119032574,lang:en-us,params:{id:33,standByMode:360},version:1.0} |

