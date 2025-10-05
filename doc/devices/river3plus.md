# States for  RIVER3PLUS
### version: 1.4.7

[RuntimePropertyUpload](#RuntimePropertyUpload)

[DisplayPropertyUpload](#DisplayPropertyUpload)

[StatisticsSum](#StatisticsSum)

[BMSHeartBeatReport0](#BMSHeartBeatReport0)

[BMSHeartBeatReport1](#BMSHeartBeatReport1)

[setDp3](#setDp3)



## RuntimePropertyUpload

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|pcsWorkMode| pcs work mode | {0:OK?} |
|plugInInfoAcOutType| plug in info ac out type | {0:OK?} |
|bmsBalState| bms bal state | {0:OK?} |
|bmsAlmState| bms alm state | {0:OK?} |
|bmsProState| bms pro state | {0:OK?} |
|bmsFltState| bms flt state | {0:OK?} |
|bmsAlmState_2| bms alm state_2 | {0:OK?} |
|bmsProState_2| bms pro state_2 | {0:OK?} |
|invMainFsmstate| inv main fsmstate | {0:OK?} |
|l1MainFsmstate| l1 main fsmstate | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|tempPcsDc|0 | 100 | °C | 1 |  temp pcs dc |
|tempPcsAc|0 | 100 | °C | 1 |  temp pcs ac |
|plugInInfoAcOutFreq|49 | 61 | Hz | 1 |  plug in info ac out freq |
|plugInInfoAcOutVol|0 | 250 | V | 1 |  plug in info ac out vol |
|plugInInfoAcInVol|0 | 250 | V | 1 |  plug in info ac in vol |
|plugInInfoBmsVol|0 | 60 | V | 0.001 |  plug in info bms vol |
|plugInInfoAcInAmp|0 | 30 | A | 1 |  plug in info ac in amp |
|plugInInfoAcOutAmp|0 | 60 | A | 1 |  plug in info ac out amp |
|bmsBattVol|0 | 60 | V | 0.001 |  bms batt vol |
|bmsBattAmp|-80 | 80 | A | 0.001 |  bms batt amp |
|bmsFullCap|0 | 80000 | mAh | 1 |  bms full cap |
|bmsRemainCap|0 | 80000 | mAh | 1 |  bms remain cap |
|bmsMinCellVol|0 | 5 | V | 0.001 |  Minimum voltage of the main battery |
|bmsMaxCellVol|0 | 5 | V | 0.001 |  bms max cell vol |
|cmsBattVol|0 | 60 | V | 0.001 |  cms batt vol |
|cmsBattAmp|-80 | 80 | A | 0.001 |  cms batt amp |
|cmsChgReqVol|0 | 60 | V | 0.001 |  cms chg req vol |
|cmsChgReqAmp|0 | 80 | A | 0.001 |  cms chg req amp |
|runtimePropertyFullUploadPeriod|0 |  n/a | s | 1 |  runtime property full upload period |
|runtimePropertyIncrementalUploadPeriod|0 |  n/a | s | 1 |  runtime property incremental upload period |
|dcdcChgReqCur|0 | 80 | A | 1 |  dcdc chg req cur |
|llcRecvCmsChgReqVol|0 | 60 | V | 1 |  llc recv cms chg req vol |
|tempPv|0 | 60 | °C | 1 |  temp pv |
|plugInInfoPvVol|0 | 60 | V | 1 |  plug in info pv vol |
|plugInInfoPvAmp|0 | 60 | A | 1 |  plug in info pv amp |
|plugInInfo_12vVol|0 | 16 | V | 1 |  plug in info_12v vol |
|plugInInfo_12vAmp|0 | 10 | A | 1 |  plug in info_12v amp |
|llcBatVol|0 | 60 | V | 1 |  llc bat vol |
|llcBatCur|-60 | 60 | A | 1 |  llc bat cur |
|llcBusVol|0 | 60 | V | 0.1 |  llc bus vol |
|plugInInfoDcpVol|0 | 60 | V | 1 |  plug in info dcp vol |
|plugInInfoDcpAmp|0 | 60 | A | 1 |  plug in info dcp amp |


### string

| State  |  Name |
|----------|------|
|pdMpptCommErr| pd mppt comm err |
|pdLlcCommErr| pd llc comm err |
|pdBmsCommErr| pd bms comm err |
|pdIotCommErr| pd iot comm err |
|pdFirmVer| pd firm ver |
|iotFirmVer| iot firm ver |
|mpptFirmVer| mppt firm ver |
|bmsFirmVer| bms firm ver |
|bmsErrCode| bms err code |
|displayPropertyFullUploadPeriod| display property full upload period |
|displayPropertyIncrementalUploadPeriod| display property incremental upload period |
|pvVinRef| pv vin ref |

### array

| State  |  Name |
|----------|------|
|runtimeStatisticsSum| runtime Statistics |

## DisplayPropertyUpload

### string

| State  |  Name |
|----------|------|
|errcode| errcode |
|pcsFanLevel| pcs fan level |
|dcOutOpen| dc out open |
|plugInInfoDcp2Detail| plug in info dcp2 detail |
|plugInInfoDcp2Sn| plug in info dcp2 sn |
|plugInInfoDcp2FirmVer| plug in info dcp2 firm ver |
|plugInInfoDcp2Resv| plug in info dcp2 resv |
|bmsErrCode| bms err code |
|errCodeRecordList| err code record list |
|pdErrCode| pd err code |
|mpptErrCode| mppt err code |
|llcInvErrCode| llc inv err code |
|upsAlram| ups alram |
|plugInInfoDcpDetail| plug in info dcp detail |
|plugInInfoDcpResv| plug in info dcp resv |
|plugInInfoDcpSn| plug in info dcp sn |
|plugInInfoDcpFirmVer| plug in info dcp firm ver |
|plugInInfoDcpErrCode| plug in info dcp err code |
|plugInInfoDcp2ErrCode| plug in info dcp2 err code |
|displayStatisticsSum| display statistics sum |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|0 | 800 | W | 1 |  Total input power |
|powOutSumW|0 | 1000 | W | 1 |  Total output power |
|powGetQcusb1|0 | 120 | W | 1 |  Real-time power of the USB 1 port |
|powGetQcusb2|0 | 120 | W | 1 |  Real-time power of the USB 2 port |
|powGetTypec1|0 | 4000 | W | 1 |  Real-time power of Type-C port 1 |
|powGetTypec2|0 | 4000 | W | 1 |  Real-time power of Type-C port 2 |
|acAlwaysOnMiniSoc|0 | 100 | % | 1 |  Sets the minimum SOC to enable the AC Always-on function |
|powGet_12v|0 | 60 | W | 1 |  Real-time 12V power |
|powGetAc|0 | 8000 | W | 1 |  Real-time AC power |
|powGetAcIn|0 | 8000 | W | 1 |  Real-time AC input power |
|plugInInfoAcInFeq|0 | 61 | Hz | 1 |  AC input frequency |
|powGetDcp2|0 | 60 | W | 1 |  pow get dcp2 |
|powGetBms|0 | 8000 | W | 1 |  pow get bms |
|acOutFreq|49 | 61 | Hz | 1 |  AC output frequency |
|plugInInfoAcOutDsgPowMax|0 | 4000 | W | 1 |  Maximum AC discharging power |
|bmsBattSoc|0 | 100 | % | 1 |  SOC of the main battery |
|bmsBattSoh|0 | 100 | % | 1 |  SOH of the main battery |
|bmsDesignCap|0 | 80000 | mAh | 1 |  Battery capacity |
|bmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|bmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time of the main battery |
|bmsMinCellTemp|0 | 80 | °C | 1 |  Minimum temperature of the main battery |
|bmsMaxCellTemp|0 | 80 | °C | 1 |  Temperature of the main battery |
|bmsMinMosTemp|0 | 100 | °C | 1 |  bms min mos temp |
|bmsMaxMosTemp|0 | 100 | °C | 1 |  bms max mos temp |
|cmsBattSoc|0 | 100 | % | 1 |  Overall SOC |
|cmsBattSoh|0 | 100 | % | 1 |  Overall SOH |
|cmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|cmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time |
|timeTaskChangeCnt|0 | 60 |  | 1 |  time task change cnt |
|lowPowerAlarm|0 | 60 | W | 1 |  low power alarm |
|silenceChgWatt|0 | 600 | W | 1 |  silence chg watt |
|powGetPv|0 | 60 | W | 1 |  pow get pv |
|plugInInfoPvChgAmpMax|0 | 60 | A | 1 |  plug in info pv chg amp max |
|plugInInfoPvChgVolMax|0 | 60 | V | 1 |  plug in info pv chg vol max |
|powGetAcOut|0 | 60 | W | 1 |  pow get ac out |
|powGetDcp|0 | 60 | W | 1 |  pow get dcp |
|plugInInfoAcInChgHalPowMax|0 | 2000 | W | 1 |  Maximum AC charging power |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|energyBackupEn| off | on | Backup reserve function switch | {cfg_energy_backup:{energy_backup_en:1,energy_backup_start_soc:2}} |
|xboostEn| off | on | X-Boost switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|outputPowerOffMemory| off | on | output power off memory | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|enBeep| off | on | Beeper on/off. (true: on, false: off.) | {dest:2,cmdFunc:254,cmdId:17,dataLen:2} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|energyBackupStartSoc| 0 | 30 | % | 1 |  Backup reserve level | {cfg_energy_backup:{energy_backup_en:1,energy_backup_start_soc:2}} |
|devStandbyTime| 0 | 1440 | min | 1 |  Device timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|screenOffTime| 0 | 1800 | s | 1 |  Screen timeout (s) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|acStandbyTime| 0 | 1440 | min | 1 |  AC timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|pvChgType| 0 | 2 |  | 1 |  DC charging mode | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoAcInChgPowMax| 50 | 305 | W | 1 |  Maximum AC input power for charging | {dest:2,cmdFunc:254,cmdId:17,dataLen:4} |
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoPvDcAmpMax| 4 | 8 | A | 1 |  plug in info pv dc amp max | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
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
|flowInfoDcp2In| flow info dcp2 in | {0:OK?} |
|flowInfoDcp2Out| flow info dcp2 out | {0:OK?} |
|plugInInfoDcp2InFlag| plug in info dcp2 in flag | {0:OK?} |
|plugInInfoDcp2DsgChgType| plug in info dcp2 dsg chg type | {0:OK?} |
|plugInInfoDcp2ChargerFlag| plug in info dcp2 charger flag | {0:OK?} |
|plugInInfoDcp2Type| plug in info dcp2 type | {0:OK?} |
|plugInInfoDcp2RunState| plug in info dcp2 run state | {0:OK?} |
|flowInfoBmsDsg| flow info bms dsg | {0:off,2:on} |
|flowInfoBmsChg| flow info bms chg | {0:off,2:on} |
|plugInInfoAcChargerFlag| Indicates whether the charger is connected to the AC port | {0:not charging?,1:charging?} |
|devSleepState| Sleep status | {0:Off?,1:On?} |
|llcHvLvFlag| High-voltage/Low-voltage AC identifier | {0:LV?,1:HV?} |
|cmsBmsRunState| On/Off status | {0:off,1:on} |
|bmsChgDsgState| Charging/Discharging status of the main battery | {0:not charging or discharging,1:discharging,2:charging} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|timeTaskConflictFlag| time task conflict flag | {0:no conflict?,1:conflict?} |
|ledMode| led mode | {0:OK?} |
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

### array

| State  |  Name |
|----------|------|
|timeTaskCurrent| time task current |

## StatisticsSum

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|start|0 |  n/a |  | 1 |  start |
|devWorkTime|0 |  n/a | min | 1 |  Devicd Work Time |
|acOutEnergy|0 |  n/a | kWh | 0.001 |  Cumulative AC out energy |
|dc12VoutEnergy|0 |  n/a | kWh | 0.001 |  Cumulative DC out Energy |
|typecOutEnergy|0 |  n/a | kWh | 0.001 |  Cumulative Type C out energy |
|usbaOutEnergy|0 |  n/a | kWh | 0.001 |  Cumulative USB A out energy |
|acInEnergy|0 |  n/a | kWh | 0.001 |  Cumulative AC in energy |
|pvInEnergy|0 |  n/a | kWh | 0.001 |  Cumulative PV in energy |
|acIn0W100WTime|0 |  n/a | min | 1 |  AC In 0W to 100W Time |
|acInOver100WTime|0 |  n/a | min | 1 |  AC In Over 100W Time |
|acOut0W50WTime|0 |  n/a | min | 1 |  AC Out 0W to 50W Time |
|acOut50W100WTime|0 |  n/a | min | 1 |  AC Out 50W to 100W Time |
|acOut100W200WTime|0 |  n/a | min | 1 |  AC Out 100W to 200W Time |
|acOutOver200WTime|0 |  n/a | min | 1 |  AC Out Over 200W Time |
|acOut200W300WTime|0 |  n/a | min | 1 |  AC Out 200W to 300W Time |
|acOut300W400WTime|0 |  n/a | min | 1 |  AC Out 300W to 400W Time |
|acOut400W500WTime|0 |  n/a | min | 1 |  AC Out 400W to 500W Time |
|acOutOver500WTime|0 |  n/a | min | 1 |  AC Out Over 500W Time |
|pvInTime|0 |  n/a | min | 1 |  PV In Time |
|typecInTime|0 |  n/a | min | 1 |  Type C In Time |
|dcOut0W60WTime|0 |  n/a | min | 1 |  DC Out 0W to 60W Time |
|dcOutOver60WTime|0 |  n/a | min | 1 |  DC Out Over 60W Time |
|typecOut0W30WTime|0 |  n/a | min | 1 |  Type C Out 0W to 30W Time |
|typecOut30W60WTime|0 |  n/a | min | 1 |  Type C Out 30W to 60W Time |
|typecOutOver60WTime|0 |  n/a | min | 1 |  Type C Out Over 60W Time |
|usbaOutTime|0 |  n/a | min | 1 |  USB A Out Time |
|ledOutTime|0 |  n/a | min | 1 |  LED Out Time |


## BMSHeartBeatReport0

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
|designCap|0 | 12800 | mAh | 1 |  design cap |
|remainCap|0 | 12800 | mAh | 1 |  remain cap |
|fullCap|0 | 12800 | mAh | 1 |  full cap |
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
|remainBalanceTime| remain balance time |
|heatfilmTemp| heatfilm Temp |

## BMSHeartBeatReport1

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
|designCap|0 | 12800 | mAh | 1 |  design cap |
|remainCap|0 | 12800 | mAh | 1 |  remain cap |
|fullCap|0 | 12800 | mAh | 1 |  full cap |
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
|remainBalanceTime| remain balance time |
|heatfilmTemp| heatfilm Temp |

## setDp3

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgAcOutOpen| off | on | AC output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cfgDc12vOutOpen| off | on | 12V output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

