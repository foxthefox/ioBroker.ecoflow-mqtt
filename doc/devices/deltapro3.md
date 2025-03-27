# States for  DELTAPRO3
### version: 1.3.0

[DisplayPropertyUpload](#DisplayPropertyUpload)

[RuntimePropertyUpload](#RuntimePropertyUpload)

[setDp3](#setDp3)



## DisplayPropertyUpload

### string

| State  |  Name |
|----------|------|
|errcode| errcode |
|utcTimezoneId| utc timezone id |
|pcsFanLevel| pcs fan level |
|plugInInfo_5p8Detail| plug in info_5p8 detail |
|bmsErrCode| bms err code |
|plugInInfo_4p8_1Detail| plug in info_4p8_1 detail |
|plugInInfo_4p8_2Detail| plug in info_4p8_2 detail |
|plugInInfo_4p8_1Sn| SN of the device connected to the Extra Battery port |
|plugInInfo_4p8_1FirmVer| plug in info_4p8_1 firm ver |
|plugInInfo_4p8_2Sn| SN of the ecosystem product connected to Extra Battery Port 2 |
|plugInInfo_4p8_2FirmVer| plug in info_4p8_2 firm ver |
|plugInInfo_5p8DsgChg| Charging/Discharging type of the Power In/Out port |
|plugInInfo_5p8Sn| SN of the device connected to the Power In/Out port |
|plugInInfo_5p8FirmVer| plug in info_5p8 firm ver |
|pdErrCode| pd err code |
|llcErrCode| llc err code |
|mpptErrCode| mppt err code |
|plugInInfo_5p8ErrCode| plug in info_5p8 err code |
|plugInInfo_4p8_1ErrCode| plug in info_4p8_1 err code |
|plugInInfo_4p8_2ErrCode| plug in info_4p8_2 err code |
|llcInvErrCode| llc inv err code |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|0 | 8000 | W | 1 |  Total input power |
|powOutSumW|0 | 8000 | W | 1 |  Total output power |
|energyBackupStartSoc|0 | 100 | % | 1 |  Backup reserve level |
|powGetQcusb1|0 | 120 | W | 1 |  Real-time power of the USB 1 port |
|powGetQcusb2|0 | 120 | W | 1 |  Real-time power of the USB 2 port |
|powGetTypec1|0 | 4000 | W | 1 |  Real-time power of Type-C port 1 |
|powGetTypec2|0 | 4000 | W | 1 |  Real-time power of Type-C port 2 |
|acAlwaysOnMiniSoc|0 | 100 | % | 1 |  Sets the minimum SOC to enable the AC Always-on function |
|powGetPvH|0 | 1600 | W | 1 |  Real-time high-voltage PV power |
|powGetPvL|0 | 1000 | W | 1 |  Real-time low-voltage PV power |
|powGet_12v|0 | 60 | W | 1 |  Real-time 12V power |
|powGet_24v|0 | 400 | W | 1 |  Real-time 24V power |
|powGetLlc|0 | 8000 | W | 1 |  pow get llc |
|powGetAc|0 | 8000 | W | 1 |  Real-time AC power |
|powGetAcIn|0 | 8000 | W | 1 |  Real-time AC input power |
|powGetAcHvOut|0 | 8000 | W | 1 |  Real-time grid power |
|powGetAcLvOut|0 | 4000 | W | 1 |  Real-time low-voltage AC output power |
|powGetAcLvTt30Out|0 | 8000 | W | 1 |  Real-time power of the low-voltage AC output port |
|powGet_5p8|0 | 4000 | W | 1 |  Real-time power of the Power In/Out port |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |
|powGetBms|0 | 8000 | W | 1 |  pow get bms |
|powGet_4p8_1|0 | 4000 | W | 1 |  Real-time power of Extra Battery Port 1 |
|powGet_4p8_2|0 | 4000 | W | 1 |  Real-time power of Extra Battery Port 2 |
|acOutFreq|49 | 61 | Hz | 1 |  AC output frequency |
|plugInInfoPvHChgVolMax|0 | 150 | V | 1 |  Maximum charging voltage of the high-voltage PV port |
|plugInInfoPvHChgAmpMax|0 | 15 | A | 1 |  Maximum charging current of the high-voltage PV port |
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
|generatorPvHybridModeSocMax|0 | 100 | % | 1 |  generator pv hybrid mode soc max |
|generatorCareModeStartTime|0 | 2000 | h | 1 |  generator care mode start time |
|plugInInfoAcInFeq|50 | 60 | Hz | 1 |  AC input frequency |
|plugInInfoPvLChgVolMax|0 | 60 | V | 1 |  Maximum charging voltage of the low-voltage PV port |
|plugInInfoPvLChgAmpMax|0 | 20 | A | 1 |  Maximum charging current of the PV port |
|plugInInfo_5p8DsgPowMax|0 | 4000 | W | 1 |  Maximum discharging power of the Power In/Out port |
|plugInInfoAcOutDsgPowMax|0 | 4000 | W | 1 |  Maximum AC discharging power |
|plugInInfo_5p8ChgHalPowMax|0 | 4000 | W | 1 |  Maximum AC charging power In/Out port |
|plugInInfoAcInChgHalPowMax|0 | 2000 | W | 1 |  Maximum AC charging power |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|lcdLight| 0 | 100 | % | 0.390625 |  Screen brightness | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|devStandbyTime| 0 | 1440 | min | 1 |  Device timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|screenOffTime| 0 | 1800 | s | 1 |  Screen timeout (s) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|acStandbyTime| 0 | 1440 | min | 1 |  AC timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|dcStandbyTime| 0 | 1440 | min | 1 |  DC timeout (min) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoPvHDcAmpMax| 0 | 10 | A | 1 |  Maximum input current of the high-voltage PV port | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsOilOnSoc| 10 | 30 | % | 1 |  SOC for automatically starting the Smart Generator | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsOilOffSoc| 50 | 100 | % | 1 |  SOC for automatically stopping the Smart Generator | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|bleStandbyTime| 0 | 2592000 | s | 1 |  Device timeout | {dest:2,cmdFunc:254,cmdId:17,dataLen:4} |
|multiBpChgDsgMode| 0 | 2 |  | 1 |  Battery charging/discharging order | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoPvLDcAmpMax| 0 | 15 | A | 1 |  Maximum input current of the low-voltage PV port | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|plugInInfoAcInChgPowMax| 400 | 1500 | W | 1 |  Maximum AC input power for charging | {dest:2,cmdFunc:254,cmdId:17,dataLen:4} |
|plugInInfo_5p8ChgPowMax| 500 | 4000 | W | 1 |  Maximum charging power of the Power In/Out port | {dest:2,cmdFunc:254,cmdId:17,dataLen:4} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|energyBackupState| energy backup state | {0:OK?} |
|energyBackupEn| Backup reserve function switch | {0:off,1:on} |
|flowInfoQcusb1| USB output port 1 switch status | {0:off,2:on} |
|flowInfoQcusb2| USB output port 2 switch status | {0:off,2:on} |
|flowInfoTypec1| Type-C port 1 switch status | {0:off,2:on} |
|flowInfoTypec2| Type-C port 2 switch status | {0:off,2:on} |
|flowInfoPvH| High-voltage PV switch status | {0:off,2:on} |
|flowInfoPvL| Low-voltage PV switch status | {0:off,2:on} |
|flowInfo_12v| flow info_12v | {0:off,2:on} |
|flowInfo_24v| flow info_24v | {0:off,2:on} |
|plugInInfoPvHFlag| Indicates whether the high-voltage PV port is connected | {0:disconnected,1:connected} |
|plugInInfoPvHType| High-voltage PV port charging mode | {1:car charging,2:solar charging,3:DC charging} |
|plugInInfoPvLFlag| Indicates whether the low-voltage PV port is connected | {0:disconnected,1:connected} |
|flowInfoAc2dc| flow info ac2dc | {0:off,2:on} |
|flowInfoDc2ac| flow info dc2ac | {0:off,2:on} |
|flowInfoAcIn| AC input switch status | {0:off,2:on} |
|flowInfoAcHvOut| High-voltage AC output switch status | {0:off,2:on} |
|flowInfoAcLvOut| AC low-voltage output switch status | {0:off,2:on} |
|flowInfo_5p8In| Power In/Out port switch status | {0:off,2:on} |
|flowInfo_5p8Out| Power In/Out port switch status | {0:off,2:on} |
|utcSetMode| utc set mode | {0:OK?} |
|outputPowerOffMemory| output power off memory | {0:OFF?,1:ON?} |
|flowInfoBmsDsg| flow info bms dsg | {0:off,2:on} |
|flowInfoBmsChg| flow info bms chg | {0:off,2:on} |
|flowInfo_4p8_1In| Extra Battery Port 1 input switch status | {0:off,2:on} |
|flowInfo_4p8_1Out| Extra Battery Port 1 switch status | {0:off,2:on} |
|flowInfo_4p8_2In| Extra Battery Port 2 input switch status | {0:off,2:on} |
|flowInfo_4p8_2Out| Extra Battery port output switch status | {0:off,2:on} |
|plugInInfoPvHChargerFlag| PV connection status | {0:disconnected,1:connected} |
|fastChargeSwitch| Fast charging slider switch | {0: fast charging,1:custom charging power} |
|devSleepState| Sleep status | {0:Off?,1:On?} |
|llcHvLvFlag| High-voltage/Low-voltage AC identifier | {0:LV?,1:HV?} |
|cmsBmsRunState| On/Off status | {0:off,1:on} |
|bmsChgDsgState| Charging/Discharging status of the main battery | {0:not charging or discharging,1:discharging,2:charging} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|acHvAlwaysOn| Sets the High-voltage AC Always-on function | {0:OK?} |
|acLvAlwaysOn| AC Always-on | {0:OK?} |
|timeTaskConflictFlag| time task conflict flag | {0:no conflict?,1:conflict?} |
|generatorPvHybridModeOpen| Generator and solar energy hybrid mode | {0:off,1:on} |
|generatorCareModeOpen| Night care mode switch | {0:off,1:on} |
|plugInInfoPvLType| PV port charging mode | {0:disconnected,1:connected} |
|plugInInfoAcInFlag| Indicates whether the AC charging port is connected | {0:disconnected,1:connected} |
|plugInInfo_5p8Flag| Indicates whether the Power In/Out port is connected | {0:disconnected,1:connected} |
|plugInInfo_5p8Type| plug in info_5p8 type | {0:type?} |
|plugInInfo_4p8_1InFlag| Indicates whether Extra Battery Port 1 is connected | {0:disconnected,1:connected} |
|plugInInfo_4p8_1Type| plug in info_4p8_1 type | {0:type?} |
|plugInInfo_4p8_2InFlag| Indicates whether the Extra Battery port is connected | {0:disconnected,1:connected} |
|plugInInfo_4p8_2Type| plug in info_4p8_2 type | {0:type?} |
|plugInInfoPvLChargerFlag| Identifier of charger connection to the low-voltage PV port | {0:disconnected,1:connected} |
|plugInInfo_4p8_1DsgChgType| Charging/Discharging type of Extra Battery Port 1 | {0:reserved,1:charging/discharging,2:charging only,3:discharging only} |
|plugInInfo_4p8_2DsgChgType| Charging/Discharging type of Extra Battery Port 2 | {0:reserved,1:charging/discharging,2:charging only,3:discharging only} |
|plugInInfoAcChargerFlag| Indicates whether the charger is connected to the AC port | {0:not charging?,1:charging?} |
|plugInInfo_5p8ChargerFlag| Operating status of the device connected to the Power In/Out port | {0:not charging?,1:charging?} |
|plugInInfo_5p8RunState| Operating status of the device connected to the Power In/Out port | {0:OK?} |
|plugInInfo_4p8_1ChargerFlag| Identifier of charger connection to Extra Battery Port 1 | {0:not charging?,1:charging?} |
|plugInInfo_4p8_1RunState| Operating status of the device connected to Extra Battery Port 1 | {0:OK?} |
|plugInInfo_4p8_2ChargerFlag| Identifier of charger connection to Extra Battery Port 2 | {0:not charging?,1:charging?} |
|plugInInfo_4p8_2RunState| Operating status of the device connected to Extra Battery Port 2 | {0:OK?} |
|pcsFanErrFlag| pcs fan err flag | {0:OK?,1:error} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|xboostEn| off | on | X-Boost switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|enBeep| off | on | Beeper on/off. (true: on, false: off.) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|llc_GFCIFlag| off | on | GFCI switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsOilSelfStart| off | on | Smart Generator auto start/stop switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|acEnergySavingOpen| off | on | AC energy-saving mode switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### array

| State  |  Name |
|----------|------|
|plugInInfo_4p8_1Resv| plug in info_4p8_1 resv |
|plugInInfo_4p8_2Resv| plug in info_4p8_2 resv |
|plugInInfo_5p8Resv| plug in info_5p8 resv |

## RuntimePropertyUpload

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|acPhaseType| ac phase type | {0:OK?} |
|pcsWorkMode| pcs work mode | {0:OK?} |
|plugInInfoAcOutType| plug in info ac out type | {0:OK?} |
|mpptMonitorFlag| mppt monitor flag | {0:OK?} |
|bmsBalState| bms bal state | {0:OK?} |
|bmsAlmState| bms alm state | {0:OK?} |
|bmsProState| bms pro state | {0:OK?} |
|bmsFltState| bms flt state | {0:OK?} |
|bmsAlmState_2| bms alm state_2 | {0:OK?} |
|bmsProState_2| bms pro state_2 | {0:OK?} |
|invMonitorFlag| inv monitor flag | {0:OK?} |
|invMainFsmstate| inv main fsmstate | {0:OK?} |
|l1MainFsmstate| l1 main fsmstate | {0:OK?} |
|l2MainFsmstate| l2 main fsmstate | {0:OK?} |
|llcMonitorFlag| llc monitor flag | {0:OK?} |
|llcFsmstate| llc fsmstate | {0:OK?} |
|pdToInvDsgMode| pd to inv dsg mode | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|tempPcsDc|0 | 100 | °C | 1 |  temp pcs dc |
|tempPcsAc|0 | 100 | °C | 1 |  temp pcs ac |
|tempPvH|0 | 100 | °C | 1 |  temp pv h |
|tempPvL|0 | 100 | °C | 1 |  temp pv l |
|plugInInfoPvHVol|0 | 150 | V | 1 |  plug in info pv h vol |
|plugInInfoPvLVol|0 | 60 | V | 1 |  plug in info pv l vol |
|plugInInfoAcOutFreq|49 | 61 | Hz | 1 |  plug in info ac out freq |
|plugInInfo_5p8Freq|0 | 61 | Hz | 1 |  plug in info_5p8 freq |
|plugInInfoAcInVol|0 | 250 | V | 1 |  plug in info ac in vol |
|plugInInfo_24vVol|0 | 30 | V | 1 |  plug in info_24v vol |
|plugInInfo_24vAmp|-30 | 30 | A | 1 |  plug in info_24v amp |
|plugInInfoL1Vol|0 | 240 | V | 1 |  plug in info l1 vol |
|plugInInfo_4p8_1Vol|0 | 240 | V | 1 |  plug in info_4p8_1 vol |
|plugInInfo_4p8_2Vol|0 | 240 | V | 1 |  plug in info_4p8_2 vol |
|plugInInfoBmsVol|0 | 60 | V | 1 |  plug in info bms vol |
|plugInInfoL1Amp|0 | 30 | A | 1 |  plug in info l1 amp |
|plugInInfoL2Vol|0 | 240 | V | 1 |  plug in info l2 vol |
|plugInInfoL2Amp|0 | 30 | A | 1 |  plug in info l2 amp |
|plugInInfoAcpL1Vol|0 | 240 | V | 1 |  plug in info acp l1 vol |
|plugInInfoAcpL1l2Vol|0 | 240 | V | 1 |  plug in info acp l1l2 vol |
|plugInInfoPvHAmp|0 | 15 | A | 1 |  plug in info pv h amp |
|plugInInfoPvLAmp|0 | 20 | A | 1 |  plug in info pv l amp |
|plugInInfoAcInAmp|0 | 30 | A | 1 |  plug in info ac in amp |
|plugInInfo_4p8_1Amp|0 | 30 | A | 1 |  plug in info_4p8_1 amp |
|plugInInfo_4p8_2Amp|0 | 30 | A | 1 |  plug in info_4p8_2 amp |
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
|mpptRecvCmsChgReqVol|0 | 60 | V | 1 |  mppt recv cms chg req vol |
|mpptRecvCmsChgReqAmp|0 | 80 | A | 1 |  mppt recv cms chg req amp |
|pv2BusVol|0 | 150 | V | 1 |  pv2 bus vol |
|mpptBatVol|0 | 60 | V | 1 |  mppt bat vol |
|mpptBatAmp|0 | 20 | A | 1 |  mppt bat amp |
|adsNtcTemp|0 | 100 | °C | 1 |  ads ntc temp |
|plugInInfoPfcOutVol|0 | 60 | V | 1 |  plug in info pfc out vol |
|powGetL1|0 | 4000 | W | 1 |  pow get l1 |
|powGetL2|0 | 4000 | W | 1 |  pow get l2 |
|invBusVol|0 | 60 | V | 1 |  inv bus vol |
|invNtcTemp2|0 | 100 | °C | 1 |  inv ntc temp2 |
|invNtcTemp3|0 | 100 | °C | 1 |  inv ntc temp3 |
|llcNtcTemp|0 | 100 | °C | 1 |  llc ntc temp |
|dcdcChgReqCur|0 | 80 | A | 1 |  dcdc chg req cur |
|llcRecvCmsChgReqVol|0 | 60 | V | 1 |  llc recv cms chg req vol |
|invToLlcAcPowLim|0 | 4000 | W | 1 |  inv to llc ac pow lim |
|plugInInfo_12vVol|0 | 16 | V | 1 |  plug in info_12v vol |
|plugInInfo_12vAmp|0 | 10 | A | 1 |  plug in info_12v amp |
|llcBatVol|0 | 60 | V | 1 |  llc bat vol |
|llcBatCur|-60 | 60 | A | 1 |  llc bat cur |
|llcBusVol|0 | 60 | V | 1 |  llc bus vol |


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
|llcFirmVer| llc firm ver |
|llcInvFirmVer| llc inv firm ver |
|bmsFirmVer| bms firm ver |
|bmsErrCode| bms err code |
|displayPropertyFullUploadPeriod| display property full upload period |
|displayPropertyIncrementalUploadPeriod| display property incremental upload period |
|pvVinRef| pv vin ref |
|pv2VinRef| pv2 vin ref |
|pvPauseCnt| pv pause cnt |
|pv2PauseCnt| pv2 pause cnt |
|mpptFanspeed| mppt fanspeed |
|mpptHardwareVer| mppt hardware ver |
|pdSktOcp1| pd skt ocp1 |
|pdSktOcp2| pd skt ocp2 |
|pdSktOcp3| pd skt ocp3 |
|pdSktOcp4| pd skt ocp4 |
|pdSktOcp5| pd skt ocp5 |

## setDp3

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|cfgPowerOff| off | on | Shut down the entire device | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cfgHvAcOutOpen| off | on | high-voltage AC output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cfgLvAcOutOpen| off | on | low-voltage AC output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cfgDc12vOutOpen| off | on | 12V output switch | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

