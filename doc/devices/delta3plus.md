# States for  DELTA3PLUS
### version: 1.3.0

[RuntimePropertyUpload](#RuntimePropertyUpload)

[DisplayPropertyUpload](#DisplayPropertyUpload)



## RuntimePropertyUpload

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|tempPcsDc|0 | 100 | °C | 1 |  temp pcs dc |
|tempPcsAc|0 | 100 | °C | 1 |  temp pcs ac |
|plugInInfoAcOutFreq|49 | 61 | Hz | 1 |  plug in info ac out freq |
|plugInInfoAcOutVol|0 | 250 | V | 1 |  plug in info ac out vol |
|plugInInfoAcInVol|0 | 250 | V | 1 |  plug in info ac in vol |
|plugInInfoPv2Amp|0 | 60 | A | 1 |  plug in info pv2 amp |
|plugInInfoBmsVol|0 | 60 | V | 1 |  plug in info bms vol |
|plugInInfoAcInAmp|0 | 30 | A | 1 |  plug in info ac in amp |
|plugInInfoAcOutAmp|0 | 60 | A | 1 |  plug in info ac out amp |
|bmsBattVol|0 | 60 | V | 1 |  bms batt vol |
|bmsBattAmp|-80 | 80 | A | 1 |  bms batt amp |
|bmsFullCap|0 | 80000 | mAh | 1 |  bms full cap |
|bmsRemainCap|0 | 80000 | mAh | 1 |  bms remain cap |
|bmsMinCellVol|0 | 5 | V | 0.001 |  Minimum voltage of the main battery |
|bmsMaxCellVol|0 | 5 | V | 0.001 |  bms max cell vol |
|cmsBattVol|0 | 60 | V | 1 |  cms batt vol |
|cmsBattAmp|-80 | 80 | A | 1 |  cms batt amp |
|cmsChgReqVol|0 | 60 | V | 1 |  cms chg req vol |
|cmsChgReqAmp|0 | 80 | A | 1 |  cms chg req amp |
|runtimePropertyFullUploadPeriod|0 |  n/a | s | 1 |  runtime property full upload period |
|runtimePropertyIncrementalUploadPeriod|0 |  n/a | s | 1 |  runtime property incremental upload period |
|tempPv|0 | 60 | °C | 1 |  temp pv |
|plugInInfoPvVol|0 | 60 | V | 1 |  plug in info pv vol |
|plugInInfoPvAmp|0 | 60 | A | 1 |  plug in info pv amp |
|tempPv2|0 | 60 | °C | 1 |  temp pv2 |
|plugInInfoPv2Vol|0 | 60 | V | 1 |  plug in info pv2 vol |
|plugInInfoDcpVol|0 | 60 | V | 1 |  plug in info dcp vol |
|plugInInfoDcpAmp|0 | 60 | A | 1 |  plug in info dcp amp |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|plugInInfoAcOutType| plug in info ac out type | {0:OK?} |
|bmsBalState| bms bal state | {0:OK?} |
|bmsAlmState| bms alm state | {0:OK?} |
|bmsProState| bms pro state | {0:OK?} |
|bmsFltState| bms flt state | {0:OK?} |
|bmsAlmState_2| bms alm state_2 | {0:OK?} |
|bmsProState_2| bms pro state_2 | {0:OK?} |

### string

| State  |  Name |
|----------|------|
|pdBmsCommErr| pd bms comm err |
|pdIotCommErr| pd iot comm err |
|pdFirmVer| pd firm ver |
|iotFirmVer| iot firm ver |
|bmsFirmVer| bms firm ver |
|bmsErrCode| bms err code |
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
|plugInInfoPv2ChgMaxList| plug in info pv2 chg max list |
|bmsErrCode| bms err code |
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

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|0 | 8000 | W | 1 |  Total input power |
|powOutSumW|0 | 1000 | W | 1 |  Total output power |
|energyBackupStartSoc|0 | 100 | % | 1 |  Backup reserve level |
|powGetQcusb1|0 | 120 | W | 1 |  Real-time power of the USB 1 port |
|powGetQcusb2|0 | 120 | W | 1 |  Real-time power of the USB 2 port |
|powGetTypec1|0 | 4000 | W | 1 |  Real-time power of Type-C port 1 |
|powGetTypec2|0 | 4000 | W | 1 |  Real-time power of Type-C port 2 |
|acAlwaysOnMiniSoc|0 | 100 | % | 1 |  Sets the minimum SOC to enable the AC Always-on function |
|powGet_12v|0 | 60 | W | 1 |  Real-time 12V power |
|powGetAc|0 | 8000 | W | 1 |  Real-time AC power |
|powGetAcIn|0 | 8000 | W | 1 |  Real-time AC input power |
|plugInInfoAcInFeq|50 | 60 | Hz | 1 |  AC input frequency |
|powGetPv2|0 | 60 | W | 1 |  pow get pv2 |
|plugInInfoPv2DcAmpMax|0 | 60 | A | 1 |  plug in info pv2 dc amp max |
|plugInInfoPv2ChgAmpMax|0 | 60 | A | 1 |  plug in info pv2 chg amp max |
|plugInInfoPv2ChgVolMax|0 | 60 | V | 1 |  plug in info pv2 chg vol max |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |
|wirelessOilOnSoc|0 | 60 | % | 1 |  wireless oil on soc |
|wirelessOilOffSoc|0 | 60 | % | 1 |  wireless oil off soc |
|powGetBms|0 | 8000 | W | 1 |  pow get bms |
|acOutFreq|49 | 61 | Hz | 1 |  AC output frequency |
|timeTaskCurrent|0 | 60 | A | 1 |  time task current |
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
|powGetDc|0 | 60 | W | 1 |  pow get dc |
|plugInInfoPvDcAmpMax|0 | 60 | A | 1 |  plug in info pv dc amp max |
|powGetPv|0 | 60 | W | 1 |  pow get pv |
|plugInInfoPvChgAmpMax|0 | 60 | A | 1 |  plug in info pv chg amp max |
|plugInInfoPvChgVolMax|0 | 60 | V | 1 |  plug in info pv chg vol max |
|powGetAcOut|0 | 60 | W | 1 |  pow get ac out |
|powGetDcp|0 | 60 | W | 1 |  pow get dcp |
|cmsBattPowOutMax|0 | 60 | W | 1 |  cms batt pow out max |
|cmsBattPowInMax|0 | 60 | W | 1 |  cms batt pow in max |
|cmsBattFullEnergy|0 | 60 | Wh | 1 |  cms batt full energy |
|stormPatternEndTime|0 | 60 | h | 1 |  storm pattern end time |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|lcdLight| 0 | 100 | % | 0.390625 |  Screen brightness | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|devStandbyTime| 0 | 1440 | min | 1 |  Device timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|screenOffTime| 0 | 1800 | s | 1 |  Screen timeout (s) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|acStandbyTime| 0 | 1440 | min | 1 |  AC timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|dcStandbyTime| 0 | 1440 | min | 1 |  DC timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoAcInChgPowMax| 400 | 1500 | W | 1 |  Maximum AC input power for charging | {dest:2,cmdFunc:254,cmdId:17,dataLen:4} |
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
|plugInInfoAcInChgMode| plug in info ac in chg mode | {0:OK?} |
|utcSetMode| utc set mode | {0:OK?} |
|outputPowerOffMemory| output power off memory | {0:OFF?,1:ON?} |
|flowInfoBmsDsg| flow info bms dsg | {0:off,2:on} |
|flowInfoBmsChg| flow info bms chg | {0:off,2:on} |
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
|flowInfoPv2| flow info pv2 | {0:OK?} |
|plugInInfoPv2Flag| plug in info pv2 flag | {0:OK?} |
|plugInInfoPv2Type| plug in info pv2 type | {0:OK?} |
|flowInfoDcpIn| flow info dcp in | {0:OK?} |
|flowInfoDcpOut| flow info dcp out | {0:OK?} |
|plugInInfoDcpInFlag| plug in info dcp in flag | {0:OK?} |
|plugInInfoDcpType| plug in info dcp type | {0:OK?} |
|plugInInfoPv2ChargerFlag| plug in info pv2 charger flag | {0:OK?} |
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

