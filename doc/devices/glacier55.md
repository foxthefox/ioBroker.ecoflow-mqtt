# States for  GLACIER55
### version: 1.4.8

[RuntimePropertyUpload](#RuntimePropertyUpload)

[DisplayPropertyUpload](#DisplayPropertyUpload)

[BMSHeartBeatReport](#BMSHeartBeatReport)



## RuntimePropertyUpload

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|plugInInfoAcInVol|0 | 250 | V | 1 |  plug in info ac in vol |
|runtimePropertyFullUploadPeriod|0 |  n/a | s | 1 |  runtime property full upload period |
|runtimePropertyIncrementalUploadPeriod|0 |  n/a | s | 1 |  runtime property incremental upload period |


### string

| State  |  Name |
|----------|------|
|displayPropertyFullUploadPeriod| display property full upload period |
|displayPropertyIncrementalUploadPeriod| display property incremental upload period |

## DisplayPropertyUpload

### string

| State  |  Name |
|----------|------|
|errcode| errcode |
|batTemp102| battery temperature |
|bmsErrCode| main battery err code |
|errCodeRecordList| err code record list |
|pdErrCode| pd err code |
|bmsMainSn| bms Main Sn |
|unknown623| unknown623 |
|unknown631| unknown631 |
|unknown746| unknown746 |
|unknown747| unknown747 |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|sysStatus| System status | {0:device off,1:device on,2:device standby} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|plugInInfoPvFlag| plug in info pv flag | {0:XT60 connector AC power adapter removed,1:XT60 connector AC power adapter inserted} |
|plugInInfoPvType| plug in info pv type | {0:AC power cord removed, only battery,1:AC power cord inserted} |
|plugInInfoDcpInFlag| plug in info dcp in flag | {0:Battery not inserted,1:Battery inserted} |
|tempUnit| Unit of Temperature  | {0:not set?,1:°C (Celsius),2:°F (Fahrenheit)} |
|lidStatus| lid/door status | {0:Closed,1:Open} |
|zoneStatus| Zone Status (Compartment Separator) | {0:Dual Zone,1:Single Zone (when in Single, the Left Setpoint takes charge)} |
|tempAlert| Temperature alarm | {0:off,1:on} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|0 | 4000 | W | 1 |  Total input power |
|powOutSumW|0 | 1000 | W | 1 |  Total output power |
|lcdLight|0 | 100 | % | 0.390625 |  Screen brightness |
|screenOffTime|0 | 1800 | s | 1 |  Screen timeout (s) |
|cmsBattSoc|0 | 100 | % | 1 |  Overall SOC |
|cmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|cmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time |
|cmsBattDesignCap|0 | 1000 | Wh | 1 |  cms Battery Design Cap |
|cmsBattPowOutMax|0 | 4000 | W | 1 |  cms batt pow out max |
|cmsBattPowInMax|0 | 4000 | W | 1 |  cms batt pow in max |
|tempMonitorLeft|-30 | 40 | °C | 1 |  Temp Monitor Left |
|tempMonitorRight|-30 | 40 | °C | 1 |  Temp Monitor Right |
|uptime749|0 |  n/a | s | 0.001 |  ice time duration |
|inputVolt777|0 | 40 | V | 1 |  input voltage |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|devStandbyTime| 0 | 96400 | min | 1 |  Device timeout | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|setPointLeft| -20 | 20 | °C | 1 |  Setpoint Temp. Left | {dest:2,cmdFunc:254,cmdId:17,dataLen:6} |
|setPointRight| -20 | 20 | °C | 1 |  Setpoint Temp. Right | {dest:2,cmdFunc:254,cmdId:17,dataLen:6} |
|batProtect| 0 | 3 |  | 1 |  Starter battery protection | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|enBeep| off | on | Beeper on/off | {dest:2,cmdFunc:254,cmdId:17,dataLen:2} |
|childLock| off | on | child lock | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|simpleMode| off | on | simple mode | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|coolingMode| off | on | cooling mode | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

## BMSHeartBeatReport

### string

| State  |  Name |
|----------|------|
|num| num |
|type| type |
|cellId| cell id |
|errCode| err code |
|sysVer| sys ver |
|bqSysStatReg| bq sys stat reg |
|cellSeriesNum| cell series num |
|cellNtcNum| cell ntc num |
|hwVer| hw ver |
|bmsHeartbeatVer| bms heartbeat ver |
|ecloudOcv| ecloud ocv |
|bmsSn| bms sn |
|productType| product type |
|productDetail| product detail |
|sysLoaderVer| sys loader ver |
|mosNtcNum| mos ntc num |
|envNtcNum| env ntc num |
|curSensorNtcNum| cur sensor ntc num |
|balanceCmd| balance cmd |
|afeSysStatus| afe sys status |
|mcuPinInStatus| mcu pin in status |
|mcuPinOutStatus| mcu pin out status |
|packSn| pack sn |
|waterInFlag| water in flag |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|soc|0 | 100 | % | 1 |  soc |
|vol|0 | 60 | V | 0.001 |  vol |
|amp|0 | 30 | A | 0.001 |  amp |
|temp|0 | 90 | °C | 1 |  temp |
|designCap|0 | 20000 | mAh | 1 |  design cap |
|remainCap|0 | 20000 | mAh | 1 |  remain cap |
|fullCap|0 | 20000 | mAh | 1 |  full cap |
|cycles|0 | 6000 |  | 1 |  Number of cycles |
|soh|0 | 100 | % | 1 |  soh |
|maxCellVol|0 | 5 | V | 0.001 |  max cell vol |
|minCellVol|0 | 5 | V | 0.001 |  min cell vol |
|maxCellTemp|0 | 90 | °C | 1 |  max cell temp |
|minCellTemp|0 | 90 | °C | 1 |  min cell temp |
|maxMosTemp|0 | 100 | °C | 1 |  max mos temp |
|minMosTemp|0 | 100 | °C | 1 |  min mos temp |
|tagChgAmp|0 | 60 | A | 0.001 |  tag chg amp |
|f32ShowSoc|0 | 100 | % | 1 |  f32 show soc |
|inputWatts|0 | 1000 | W | 1 |  input watts |
|outputWatts|0 | 1000 | W | 1 |  output watts |
|remainTime|0 | 5999 | h | 1 |  remain time |
|maxVolDiff|0 | 1 | V | 0.001 |  max vol diff |
|actSoc|0 | 100 | % | 1 |  act soc |
|diffSoc|0 | 100 | % | 1 |  diff soc |
|targetSoc|0 | 100 | % | 1 |  target soc |
|accuChgCap|0 |  n/a | mAh | 1 |  accu chg cap |
|accuDsgCap|0 |  n/a | mAh | 1 |  accu dsg cap |
|realSoh|0 | 100 | % | 1 |  real soh |
|calendarSoh|0 | 100 | % | 1 |  calendar soh |
|cycleSoh|0 | 100 | % | 1 |  cycle soh |
|mosTemp|0 | 100 | °C | 1 |  mos temp |
|envTemp|0 | 80 | °C | 1 |  env temp |
|curSensorTemp|0 | 80 | °C | 1 |  cur sensor temp |
|maxEnvTemp|0 | 80 | °C | 1 |  max env temp |
|minEnvTemp|-10 | 80 | °C | 1 |  min env temp |
|maxCurSensorTemp|0 | 90 | °C | 1 |  max cur sensor temp |
|minCurSensorTemp|0 | 90 | °C | 1 |  min cur sensor temp |
|heatfilmNtcNum|0 | 10 |  | 1 |   heatfilm Ntc Num |
|minHeatfilmTemp|0 | 90 | °C | 1 |  min Heatfilm Temp |
|maxHeatfilmTemp|0 | 90 | °C | 1 |  max Heatfilm Temp |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|openBmsFlag| open bms flag | {0:OK?} |
|bmsFault| bms fault | {0:OK?} |
|mosState| mos state | {0:OK?} |
|balanceState| balance state | {0:OK?} |
|sysState| sys state | {0:OK?} |
|chgDsgState| chg dsg state | {0:OK?} |
|allErrCode| all err code | {0:OK?} |
|allBmsFault| all bms fault | {0:OK?} |
|bmsAlarmState1| bms alarm state1 | {0:OK?} |
|bmsAlarmState2| bms alarm state2 | {0:OK?} |
|bmsProtectState1| bms protect state1 | {0:OK?} |
|bmsProtectState2| bms protect state2 | {0:OK?} |
|bmsFaultState| bms fault state | {0:OK?} |

### array

| State  |  Name |
|----------|------|
|cellVol| Cell voltage |
|cellTemp| Cell temperature |
|remainBalanceTime| remain balance time |
|heatfilmTemp| heatfilm Temp |

