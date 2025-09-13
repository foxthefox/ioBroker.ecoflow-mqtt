# States for  WAVE3
### version: 1.4.5

[RuntimePropertyUpload](#RuntimePropertyUpload)

[DisplayPropertyUpload](#DisplayPropertyUpload)



## RuntimePropertyUpload

### string

| State  |  Name |
|----------|------|
|displayPropertyFullUploadPeriod| display property full upload period |

## DisplayPropertyUpload

### string

| State  |  Name |
|----------|------|
|errcode| errcode |
|pcsFanLevel| pcs fan level |
|utcTimezoneId| utc timezone id |
|bmsErrCode| bms err code |
|pdErrCode| pd err code |
|plugInInfoDcpDetail| plug in info dcp detail |
|plugInInfoDcpResv| plug in info dcp resv |
|plugInInfoDcpSn| plug in info dcp sn |
|plugInInfoDcpFirmVer| plug in info dcp firm ver |
|plugInInfoDcpErrCode| plug in info dcp err code |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|0 | 8000 | W | 1 |  Total input power |
|powOutSumW|0 | 8000 | W | 1 |  Total output power |
|powGetQcusb1|0 | 120 | W | 1 |  Real-time power of the USB 1 port |
|powGetTypec1|0 | 4000 | W | 1 |  Real-time power of Type-C port 1 |
|powGetAc|0 | 8000 | W | 1 |  Real-time AC power |
|powGetAcIn|0 | 8000 | W | 1 |  Real-time AC input power |
|plugInInfoAcInFeq|50 | 60 | Hz | 1 |  AC input frequency |
|currentTimeTaskV2Item|0 | 60 | A | 1 |  current time task v2 item |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |
|powGetBms|0 | 8000 | W | 1 |  pow get bms |
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
|plugInInfoPvDcAmpMax|0 | 60 | A | 1 |  plug in info pv dc amp max |
|powGetPv|0 | 60 | W | 1 |  pow get pv |
|plugInInfoPvChgAmpMax|0 | 60 | A | 1 |  plug in info pv chg amp max |
|plugInInfoPvChgVolMax|0 | 60 | V | 1 |  plug in info pv chg vol max |
|powGetDcp|0 | 60 | W | 1 |  pow get dcp |
|plugInInfoAcInChgHalPowMax|0 | 2000 | W | 1 |  Maximum AC charging power |
|inletTemp484|0 |  n/a | °C | 1 |  inlet temp? |
|humidity485|0 |  n/a | % | 1 |  humidity? |
|fanLevel486|0 |  n/a |  | 1 |  fan level? |
|outletTemp494|0 |  n/a | °C | 1 |  outlet temp? |
|unknown504|0 |  n/a |  | 1 |  unknown 504 |
|unknown510|0 |  n/a |  | 1 |  unknown 510 |
|unknown777|0 |  n/a |  | 1 |  unknown 777 |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|lcdLight| 0 | 100 | % | 0.390625 |  Screen brightness | {dest:2,cmdFunc:254,cmdId:17,dataLen:2} |
|devStandbyTime| 0 | 1440 | min | 1 |  Device timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|screenOffTime| 0 | 1800 | s | 1 |  Screen timeout (s) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoAcInChgPowMax| 100 | 1500 | W | 1 |  Maximum AC input power for charging | {dest:2,cmdFunc:254,cmdId:17,dataLen:7} |
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|flowInfoQcusb1| USB output port 1 switch status | {0:off,2:on} |
|flowInfoTypec1| Type-C port 1 switch status | {0:off,2:on} |
|flowInfoAc2dc| flow info ac2dc | {0:off,2:on} |
|flowInfoAcIn| AC input switch status | {0:off,2:on} |
|plugInInfoAcInFlag| Indicates whether the AC charging port is connected | {0:disconnected,1:connected} |
|utcSetMode| utc set mode | {0:OK?} |
|flowInfoBmsDsg| flow info bms dsg | {0:off,2:on} |
|flowInfoBmsChg| flow info bms chg | {0:off,2:on} |
|plugInInfoAcChargerFlag| Indicates whether the charger is connected to the AC port | {0:not charging?,1:charging?} |
|devSleepState| Sleep status | {0:Off?,1:On?} |
|cmsBmsRunState| On/Off status | {0:off,1:on} |
|bmsChgDsgState| Charging/Discharging status of the main battery | {0:not charging or discharging,1:discharging,2:charging} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|timeTaskConflictFlag| time task conflict flag | {0:no conflict?,1:conflict?} |
|flowInfoPv| flow info pv | {0:OK?} |
|plugInInfoPvType| plug in info pv type | {0:OK?} |
|plugInInfoPvChargerFlag| plug in info pv charger flag | {0:OK?} |
|flowInfoDcpIn| flow info dcp in | {0:OK?} |
|flowInfoDcpOut| flow info dcp out | {0:OK?} |
|plugInInfoDcpInFlag| plug in info dcp in flag | {0:OK?} |
|plugInInfoDcpType| plug in info dcp type | {0:OK?} |
|plugInInfoDcpDsgChgType| plug in info dcp dsg chg type | {0:OK?} |
|plugInInfoDcpChargerFlag| plug in info dcp charger flag | {0:OK?} |
|plugInInfoDcpRunState| plug in info dcp run state | {0:OK?} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|enBeep| off | on | Beeper on/off. (true: on, false: off.) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

