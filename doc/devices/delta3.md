# States for  DELTA3
### version: 1.4.6

[RuntimePropertyUpload](#RuntimePropertyUpload)

[DisplayPropertyUpload](#DisplayPropertyUpload)

[BMSHeartBeatReport](#BMSHeartBeatReport)

[setDp3](#setDp3)



## RuntimePropertyUpload

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|tempPcsDc|0 | 100 | °C | 1 |  temp pcs dc |
|tempPcsAc|0 | 100 | °C | 1 |  temp pcs ac |
|plugInInfoAcOutFreq|49 | 61 | Hz | 1 |  plug in info ac out freq |
|plugInInfoAcOutVol|0 | 250 | V | 1 |  plug in info ac out vol |
|plugInInfoAcInVol|0 | 250 | V | 1 |  plug in info ac in vol |
|plugInInfoBmsVol|0 | 60 | V | 1 |  plug in info main battery vol |
|plugInInfoAcInAmp|0 | 10 | A | 1 |  plug in info ac in amp |
|plugInInfoAcOutAmp|0 | 10 | A | 1 |  plug in info ac out amp |
|bmsBattVol|0 | 60 | V | 1 |  main battery batt vol |
|bmsBattAmp|-80 | 80 | A | 1 |  main battery batt amp |
|bmsFullCap|0 | 20000 | mAh | 1 |  main battery full cap |
|bmsRemainCap|0 | 20000 | mAh | 1 |  main battery remain cap |
|bmsMinCellVol|0 | 5 | V | 0.001 |  Minimum voltage of the main battery |
|bmsMaxCellVol|0 | 5 | V | 0.001 |  main battery max cell vol |
|cmsBattVol|0 | 60 | V | 1 |  cms batt vol |
|cmsBattAmp|-80 | 80 | A | 1 |  cms batt amp |
|cmsChgReqVol|0 | 60 | V | 1 |  cms chg req vol |
|cmsChgReqAmp|0 | 60 | A | 1 |  cms chg req amp |
|runtimePropertyFullUploadPeriod|0 |  n/a | s | 1 |  runtime property full upload period |
|runtimePropertyIncrementalUploadPeriod|0 |  n/a | s | 1 |  runtime property incremental upload period |
|tempPv|0 | 100 | °C | 1 |  temp pv |
|plugInInfoPvVol|0 | 60 | V | 1 |  plug in info pv vol |
|plugInInfoPvAmp|0 | 15 | A | 1 |  plug in info pv amp |
|plugInInfoDcpVol|0 | 60 | V | 1 |  plug in info dcp vol |
|plugInInfoDcpAmp|0 | 15 | A | 1 |  plug in info dcp amp |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|plugInInfoAcOutType| plug in info ac out type | {0:OK?} |
|bmsBalState| main battery bal state | {0:OK?} |
|bmsAlmState| main battery alm state | {0:OK?} |
|bmsProState| main battery pro state | {0:OK?} |
|bmsFltState| main battery flt state | {0:OK?} |
|bmsAlmState_2| main battery alm state_2 | {0:OK?} |
|bmsProState_2| main battery pro state_2 | {0:OK?} |

### string

| State  |  Name |
|----------|------|
|pdBmsCommErr| pd main battery comm err |
|pdIotCommErr| pd iot comm err |
|pdFirmVer| pd firm ver |
|iotFirmVer| iot firm ver |
|bmsFirmVer| main battery firm ver |
|bmsErrCode| main battery err code |
|displayPropertyFullUploadPeriod| display property full upload period |
|displayPropertyIncrementalUploadPeriod| display property incremental upload period |
|pdDcdcCommErr| pd dcdc comm err |
|pdInvCommErr| pd inv comm err |
|dcdcFirmVer| dcdc firm ver |
|invFirmVer| inv firm ver |

## DisplayPropertyUpload

### string

| State  |  Name |
|----------|------|
|errcode| errcode |
|pcsFanLevel| pcs fan level |
|pvDcChgSettingList| pv dc chg setting list |
|utcTimezoneId| utc timezone id |
|plugInInfoPvChgMaxList| plug in info pv chg max list |
|bmsErrCode| main battery err code |
|wirelessCoordinateDevList| wireless coordinate dev list |
|wirelessOilSelfStart| wireless oil self start |
|bypassOutDisable| bypass out disable |
|pdErrCode| pd err code |
|plugInInfoDcpDetail| plug in info dcp detail |
|plugInInfoDcpResv| plug in info dcp resv |
|plugInInfoDcpSn| plug in info dcp sn |
|plugInInfoDcpFirmVer| plug in info dcp firm ver |
|dcdcErrCode| dcdc err code |
|plugInInfoDcpErrCode| plug in info dcp err code |
|invErrCode| inv err code |
|selfPoweredConflictFlag| Self Powered Conflict Flag |
|touModeConflictFlag| TOU Mode Conflict Flag |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|0 | 4000 | W | 1 |  Total input power |
|powOutSumW|0 | 1200 | W | 1 |  Total output power |
|energyBackupStartSoc|0 | 100 | % | 1 |  Backup reserve level |
|powGetQcusb1|0 | 120 | W | 1 |  Real-time power of the USB 1 port |
|powGetQcusb2|0 | 120 | W | 1 |  Real-time power of the USB 2 port |
|powGetTypec1|0 | 4000 | W | 1 |  Real-time power of Type-C port 1 |
|powGetTypec2|0 | 4000 | W | 1 |  Real-time power of Type-C port 2 |
|acAlwaysOnMiniSoc|0 | 100 | % | 1 |  Sets the minimum SOC to enable the AC Always-on function |
|powGet_12v|0 | 150 | W | 1 |  Real-time 12V power |
|powGetAc|0 | 4000 | W | 1 |  Real-time AC power |
|powGetAcIn|0 | 4000 | W | 1 |  Real-time AC input power |
|plugInInfoAcInFeq|49 | 61 | Hz | 1 |  AC input frequency |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |
|wirelessOilOnSoc|0 | 100 | % | 1 |  wireless oil on soc |
|wirelessOilOffSoc|0 | 100 | % | 1 |  wireless oil off soc |
|powGetBms|0 | 4000 | W | 1 |  pow get bms |
|acOutFreq|49 | 61 | Hz | 1 |  AC output frequency |
|plugInInfoAcOutDsgPowMax|0 | 4000 | W | 1 |  Maximum AC discharging power |
|bmsBattSoc|0 | 100 | % | 1 |  SOC of the main battery |
|bmsBattSoh|0 | 100 | % | 1 |  SOH of the main battery |
|bmsDesignCap|0 | 20000 | mAh | 1 |  Battery capacity |
|bmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|bmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time of the main battery |
|bmsMinCellTemp|0 | 80 | °C | 1 |  Minimum temperature of the main battery |
|bmsMaxCellTemp|0 | 80 | °C | 1 |  Temperature of the main battery |
|bmsMinMosTemp|0 | 100 | °C | 1 |  main battery min mos temp |
|bmsMaxMosTemp|0 | 100 | °C | 1 |  main battery max mos temp |
|cmsBattSoc|0 | 100 | % | 1 |  Overall SOC |
|cmsBattSoh|0 | 100 | % | 1 |  Overall SOH |
|cmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|cmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time |
|timeTaskChangeCnt|0 |  n/a |  | 1 |  time task change cnt |
|powGetDc|0 | 150 | W | 1 |  pow get dc |
|plugInInfoPvDcAmpMax|0 | 15 | A | 1 |  plug in info pv dc amp max |
|powGetPv|0 | 600 | W | 1 |  pow get pv |
|plugInInfoPvChgAmpMax|0 | 15 | A | 1 |  plug in info pv chg amp max |
|plugInInfoPvChgVolMax|0 | 61 | V | 1 |  plug in info pv chg vol max |
|powGetAcOut|0 | 4000 | W | 1 |  pow get ac out |
|powGetDcp|0 | 600 | W | 1 |  pow get dcp |
|cmsBattPowOutMax|0 | 4000 | W | 1 |  cms batt pow out max |
|cmsBattPowInMax|0 | 4000 | W | 1 |  cms batt pow in max |
|cmsBattFullEnergy|0 | 1024 | Wh | 1 |  cms batt full energy |
|stormPatternEndTime|0 | 60 | h | 1 |  storm pattern end time |
|backupReverseSoc|0 | 100 | % | 1 |  Backup Reverse Soc |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|lcdLight| 0 | 100 | % | 0.390625 |  Screen brightness | {dest:2,cmdFunc:254,cmdId:17,dataLen:2} |
|devStandbyTime| 0 | 1440 | min | 1 |  Device timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|screenOffTime| 0 | 1800 | s | 1 |  Screen timeout (s) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|acStandbyTime| 0 | 1440 | min | 1 |  AC timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|dcStandbyTime| 0 | 1440 | min | 1 |  DC timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoAcInChgMode| 0 | 2 |  | 1 |  plug in info ac in chg mode | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoAcInChgPowMax| 100 | 1500 | W | 1 |  Maximum AC input power for charging | {dest:2,cmdFunc:254,cmdId:17,dataLen:7} |
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsOilOnSoc| 10 | 30 | % | 1 |  SOC for automatically starting the Smart Generator | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsOilOffSoc| 50 | 100 | % | 1 |  SOC for automatically stopping the Smart Generator | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|energyBackupEn| Backup reserve function switch | {0:off,1:on} |
|flowInfoQcusb1| USB output port 1 switch status | {0:off,2:on} |
|flowInfoQcusb2| USB output port 2 switch status | {0:off,2:on} |
|flowInfoTypec1| Type-C port 1 switch status | {0:off,2:on} |
|flowInfoTypec2| Type-C port 2 switch status | {0:off,2:on} |
|acAlwaysOnFlag| ac always on flag | {0:OK?} |
|flowInfo_12v| flow info_12v | {0:off,2:on} |
|flowInfoAc2dc| flow info ac2dc | {0:off,2:on} |
|flowInfoDc2ac| flow info dc2ac | {0:off,2:on} |
|flowInfoAcIn| AC input switch status | {0:off,2:on} |
|plugInInfoAcInFlag| Indicates whether the AC charging port is connected | {0:disconnected,1:connected} |
|utcSetMode| utc set mode | {0:OK?} |
|outputPowerOffMemory| output power off memory | {0:OFF?,1:ON?} |
|flowInfoBmsDsg| flow info main battery dsg | {0:off,2:on} |
|flowInfoBmsChg| flow info main battery chg | {0:off,2:on} |
|fastChargeSwitch| Fast charging slider switch | {0: fast charging,1:custom charging power} |
|plugInInfoAcChargerFlag| Indicates whether the charger is connected to the AC port | {0:not charging?,1:charging?} |
|devSleepState| Sleep status | {0:Off?,1:On?} |
|pcsFanErrFlag| pcs fan err flag | {0:OK?,1:error} |
|cmsBmsRunState| On/Off status | {0:off,1:on} |
|bmsChgDsgState| Charging/Discharging status of the main battery | {0:not charging or discharging,1:discharging,2:charging} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|timeTaskConflictFlag| time task conflict flag | {0:no conflict?,1:conflict?} |
|flowInfoPv| flow info pv | {0:OK?} |
|plugInInfoPvFlag| plug in info pv flag | {0:OK?} |
|plugInInfoPvType| plug in info pv type | {0:OK?} |
|plugInInfoPvChargerFlag| plug in info pv charger flag | {0:OK?} |
|flowInfoAcOut| flow info ac out | {0:OK?} |
|flowInfoDcpIn| flow info dcp in | {0:OK?} |
|flowInfoDcpOut| flow info dcp out | {0:OK?} |
|plugInInfoDcpInFlag| plug in info dcp in flag | {0:OK?} |
|plugInInfoDcpType| plug in info dcp type | {0:OK?} |
|plugInInfoDcpDsgChgType| plug in info dcp dsg chg type | {0:OK?} |
|plugInInfoDcpChargerFlag| plug in info dcp charger flag | {0:OK?} |
|plugInInfoDcpRunState| plug in info dcp run state | {0:OK?} |
|stormPatternEnable| storm pattern enable | {0:OK?} |
|stormPatternOpenFlag| storm pattern open flag | {0:OK?} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|xboostEn| off | on | X-Boost switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|enBeep| off | on | Beeper on/off. (true: on, false: off.) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsOilSelfStart| off | on | Smart Generator auto start/stop switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### array

| State  |  Name |
|----------|------|
|timeTaskCurrent| time task current |
|energyStrategyOperateMode| Energy Strategy Operate Mode |

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
|maxEnvTemp|0 | 80 | °C | 1 |  max env temp |
|minEnvTemp|-10 | 80 | °C | 1 |  min env temp |
|maxCurSensorTemp|0 | 90 | °C | 1 |  max cur sensor temp |
|minCurSensorTemp|0 | 90 | °C | 1 |  min cur sensor temp |
|accuChgEnergy|0 |  n/a | kWh | 0.001 |  accu chg energy |
|accuDsgEnergy|0 |  n/a | kWh | 0.001 |  accu dsg energy |
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
|mosTemp| mos temp |
|envTemp| env temp |
|curSensorTemp| cur sensor temp |
|remainBalanceTime| remain balance time |
|heatfilmTemp| heatfilm Temp |

## setDp3

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgAcOutOpen| off | on | AC output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cfgDc12vOutOpen| off | on | 12V output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cfgUsbOpen| off | on | USB output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

