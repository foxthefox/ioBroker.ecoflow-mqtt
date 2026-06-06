# States for  STREAM_ULTRA_X
### version: 1.4.9

[RuntimePropertyUpload](#RuntimePropertyUpload)

[dayResidentLoadList](#dayResidentLoadList)

[DisplayPropertyUpload](#DisplayPropertyUpload)

[BMSHeartBeatReport](#BMSHeartBeatReport)



## RuntimePropertyUpload

### string

| State  |  Name |
|----------|------|
|displayPropertyFullUploadPeriod| Display Property Full Upload Period |
|displayPropertyIncrementalUploadPeriod| Display Property Incremental Upload Period |
|runtimePropertyFullUploadPeriod| Runtime Property Full Upload Period |
|runtimePropertyIncrementalUploadPeriod| Runtime Property Incremental Upload Period |
|lanSysMeterValue| lan sys meter value |
|cascadeSysCanId| cascade sys can id |
|pvStateMonitor1| pv state monitor1 |
|pvStateMonitor2| pv state monitor2 |
|dabStateMonitor1| dab state monitor1 |
|dabStateMonitor2| dab state monitor2 |
|dabStateMonitor3| dab state monitor3 |
|pv1InsRx| pv1 ins rx |
|pv2InsRx| pv2 ins rx |
|pv3InsRx| pv3 ins rx |
|pv4InsRx| pv4 ins rx |
|pv1GndInsRy| pv1 gnd ins ry |
|pv2GndInsRy| pv2 gnd ins ry |
|pv3GndInsRy| pv3 gnd ins ry |
|pv4GndInsRy| pv4 gnd ins ry |
|invTodcData| inv todc data |
|dcToInvData| dc to inv data |
|emsPfcChgPwrTag| ems pfc chg pwr tag |
|chgPowerLoopRef| chg power loop ref |
|iDabLv| i dab lv |
|exPsD1| ex ps d1 |
|pvIoutFilt| pv iout filt |
|ref1P65| ref1 p65 |
|ref2P5| ref2 p5 |
|dcvFilt| dcv filt |
|dciFilt| dci filt |
|voltFreqfilter| volt freqfilter |
|pfcVbusTag| pfc vbus tag |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|lanSysHomeNeedPwr|0 | 6000 | W | 1 |  lan sys home need pwr |
|aiTouTargetSoc|0 | 100 | % | 1 |  ai tou target soc |
|lanSysDeviceCnt|0 | 7 |  | 1 |  lan sys device cnt |
|lanSysTargetPwr|0 | 6000 | W | 1 |  lan sys target pwr |
|cascadeSysTargetPwr|0 | 6000 | W | 1 |  cascade sys target pwr |
|cascadeSysSoc|0 | 100 | % | 1 |  cascade sys soc |
|cascadeSysDeviceCnt|0 | 7 |  | 1 |  cascade sys device cnt |
|cascadeSysDistributedPwrSum|-2000 | 2000 | W | 1 |  cascade sys distributed pwr sum |
|cascadeSysOutputPwrDiff|0 | 6000 | W | 1 |  cascade sys output pwr diff |
|dev1DistributeTarget|0 | 2000 | W | 1 |  dev1 distribute target |
|dev2DistributeTarget|0 | 2000 | W | 1 |  dev2 distribute target |
|dev3DistributeTarget|0 | 2000 | W | 1 |  dev3 distribute target |
|dev4DistributeTarget|0 | 2000 | W | 1 |  dev4 distribute target |
|dev5DistributeTarget|0 | 2000 | W | 1 |  dev5 distribute target |
|dev6DistributeTarget|0 | 2000 | W | 1 |  dev6 distribute target |
|dev1ToPcsPwr|0 | 2000 | W | 1 |  dev1 to pcs pwr |
|dev2ToPcsPwr|0 | 2000 | W | 1 |  dev2 to pcs pwr |
|dev3ToPcsPwr|0 | 2000 | W | 1 |  dev3 to pcs pwr |
|dev4ToPcsPwr|0 | 2000 | W | 1 |  dev4 to pcs pwr |
|dev5ToPcsPwr|0 | 2000 | W | 1 |  dev5 to pcs pwr |
|dev6ToPcsPwr|0 | 2000 | W | 1 |  dev6 to pcs pwr |
|dev1PvRemain|0 | 2000 | W | 1 |  dev1 pv remain |
|dev2PvRemain|0 | 2000 | W | 1 |  dev2 pv remain |
|dev3PvRemain|0 | 2000 | W | 1 |  dev3 pv remain |
|dev4PvRemain|0 | 2000 | W | 1 |  dev4 pv remain |
|dev5PvRemain|0 | 2000 | W | 1 |  dev5 pv remain |
|dev6PvRemain|0 | 2000 | W | 1 |  dev6 pv remain |
|dev1PowerAbility|0 | 2000 | W | 1 |  dev1 power ability |
|dev2PowerAbility|0 | 2000 | W | 1 |  dev2 power ability |
|dev3PowerAbility|0 | 2000 | W | 1 |  dev3 power ability |
|dev4PowerAbility|0 | 2000 | W | 1 |  dev4 power ability |
|dev5PowerAbility|0 | 2000 | W | 1 |  dev5 power ability |
|dev6PowerAbility|0 | 2000 | W | 1 |  dev6 power ability |
|dev1PowerInAbility|0 | 2000 | W | 1 |  dev1 power in ability |
|dev2PowerInAbility|0 | 2000 | W | 1 |  dev2 power in ability |
|dev3PowerInAbility|0 | 2000 | W | 1 |  dev3 power in ability |
|dev4PowerInAbility|0 | 2000 | W | 1 |  dev4 power in ability |
|dev5PowerInAbility|0 | 2000 | W | 1 |  dev5 power in ability |
|dev6PowerInAbility|0 | 2000 | W | 1 |  dev6 power in ability |
|chgOverCurOffCnt|0 |  n/a | A | 1 |  chg over cur off cnt |
|vinPv1|0 | 70 | V | 0.1 |  v in pv1 |
|vinPv2|0 | 70 | V | 0.1 |  v in pv2 |
|vinPv3|0 | 70 | V | 0.1 |  vin pv3 |
|vinPv4|0 | 70 | V | 0.1 |  v in pv4 |
|iinPv1|-1 | 15 | A | 0.01 |  i in pv1 |
|iinPv2|-1 | 15 | A | 0.01 |  i in pv2 |
|iinPv3|-1 | 15 | A | 0.01 |  i in pv3 |
|iinPv4|-1 | 15 | A | 0.01 |  i in pv4 |
|pinPv1|0 | 600 | W | 0.1 |  p in pv1 |
|pinPv2|0 | 600 | W | 0.1 |  p in pv2 |
|pinPv3|0 | 600 | W | 0.1 |  p in pv3 |
|pinPv4|0 | 600 | W | 0.1 |  p in pv4 |
|bmsChgReqVolt|0 | 60 | V | 0.001 |  bms chg req volt |
|bmsChgReqCurr|0 | 60 | A | 0.001 |  bms chg req curr |
|curAvaiToBmsPower|0 | 2000 | W | 1 |  cur avai to bms power |
|invInPowerAbilityMax|0 | 2000 | W | 1 |  inv in power ability max |
|invOutPowerAbilityMax|0 | 2000 | W | 1 |  inv out power ability max |
|ongridOutPowerAbilityMax|0 | 3000 | W | 1 |  ongrid out power ability max |
|bypassOutPowerAbilityMax|0 | 3000 | W | 1 |  bypass out power ability max |
|vBusHv|0 | 60 | V | 0.1 |  v bus hv |
|vBat|0 | 60 | V | 0.001 |  v bat |
|ioutBat|0 | 60 | A | 0.01 |  iout bat |
|vBusPidRef|0 | 60 | V | 0.1 |  v bus pid ref |
|dcTemp1Ntc|0 | 100 | °C | 1 |  dc temp1 ntc |
|dcTemp2Ntc|0 | 100 | °C | 1 |  dc temp2 ntc |
|dcTemp3Ntc|0 | 100 | °C | 1 |  dc temp3 ntc |
|dabLvTempNtc|0 | 100 | °C | 1 |  dab lv temp ntc |
|invIl1Rms|0 | 60 | A | 0.1 |  inv il1 rms |
|ongridIinRms|0 | 60 | A | 0.1 |  ongrid iin rms |
|vBus|0 | 60 | V | 0.1 |  v bus |
|ongridVinRms|0 | 250 | V | 0.1 |  ongrid vin rms |
|ongridVoutRms|0 | 250 | V | 0.1 |  ongrid vout rms |
|offgridVout1Rms|0 | 250 | V | 0.1 |  offgrid v out1 rms |
|offgridVout2Rms|0 | 250 | V | 0.1 |  offgrid v out2 rms |
|invVcapRms|0 | 250 | V | 0.1 |  inv vcap rms |
|acTotalActivePower|0 | 6000 | W | 1 |  ac total active power |
|ongridInActivePower|0 | 6000 | W | 1 |  ongrid in active power |
|ongridInReactivePower|0 | 6000 | W | 1 |  ongrid in reactive power |
|offgrid1ActivePower|-200 | 2000 | W | 1 |  offgrid1 active power |
|offgrid2ActivePower|-2000 | 2000 | W | 1 |  offgrid2 active power |
|seriesPower|-6000 | 6000 | W | 1 |  series power |
|offgrid1ApperentPower|0 | 6000 | W | 1 |  offgrid1 apperent power |
|offgrid2ApperentPower|0 | 6000 | W | 1 |  offgrid2 apperent power |
|offgridInvDeratePower|0 | 6000 | W | 1 |  offgrid inv derate power |
|ongridInvDeratePower|0 | 6000 | W | 1 |  ongrid inv derate power |
|acTotalInvDeratePower|0 | 6000 | W | 1 |  ac total inv derate power |
|mosVolt|0 | 60 | V | 0.1 |  mos volt |
|reactPwrRefDelta|0 | 6000 | W | 1 |  react pwr ref delta |
|addPwrActLimit|0 | 6000 | W | 1 |  add pwr act limit |
|invTempNtc|0 | 100 | °C | 1 |  inv temp ntc |
|dabHighTempNtc|0 | 100 | °C | 1 |  dab high temp ntc |
|emsSetRatedPower|0 | 6000 | W | 1 |  ems set rated power |
|actPwrRated|0 | 6000 | W | 1 |  act pwr rated |
|activePowerNeed|0 | 6000 | W | 1 |  active power need |
|actPwrByPerc|0 | 1000 | W | 1 |  act pwr by perc |
|actPwrByRampUp|0 | 1000 | W | 1 |  act pwr by ramp up |
|actPwrByOfdp|0 | 1000 | W | 1 |  act pwr by ofdp |
|actPwrByUfip|0 | 1000 | W | 1 |  act pwr by ufip |
|actPwrByFreqDroop|0 | 1000 | W | 1 |  act pwr by freq droop |
|actPwrByOvdp|0 | 1000 | W | 1 |  act pwr by ovdp |
|ongridActivePowerRef|0 | 1000 | W | 1 |  ongrid active power ref |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|aiTouValid| ai tou valid | {0:OK?} |
|lanSysWorkMode| lan sys work mode | {0:OK?} |
|cascadeSysWorkMode| cascade sys work mode | {0:OK?} |
|dev1ToPcsWorkMode| dev1 to pcs work mode | {0:OK?} |
|dev2ToPcsWorkMode| dev2 to pcs work mode | {0:OK?} |
|dev3ToPcsWorkMode| dev3 to pcs work mode | {0:OK?} |
|dev4ToPcsWorkMode| dev4 to pcs work mode | {0:OK?} |
|dev5ToPcsWorkMode| dev5 to pcs work mode | {0:OK?} |
|dev6ToPcsWorkMode| dev6 to pcs work mode | {0:OK?} |
|mpptFaultComm| mppt fault comm | {0:OK?} |
|mpptPv1Fault| mppt pv1 fault | {0:OK?} |
|mpptPv2Fault| mppt pv2 fault | {0:OK?} |
|mpptPv3Fault| mppt pv3 fault | {0:OK?} |
|mpptPv4Fault| mppt pv4 fault | {0:OK?} |
|dabFault| dab fault | {0:OK?} |
|dabFaultLock| dab fault lock | {0:OK?} |
|invStateMonitor1| inv state monitor1 | {0:OK?} |
|invStateMonitor2| inv state monitor2 | {0:OK?} |
|invStateMonitor3| inv state monitor3 | {0:OK?} |
|invFault| inv fault | {0:OK?} |
|invFaultLock| inv fault lock | {0:OK?} |
|pfcFault| pfc fault | {0:OK?} |
|invCommFault| inv comm fault | {0:OK?} |
|gridFault| grid fault | {0:OK?} |

### array

| State  |  Name |
|----------|------|
|lanSysScheduleOutput| lan sys schedule output |

## dayResidentLoadList

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|startMin1|-1440 | 1440 | min | 1 |  starting minutes task#1 |
|endMin1|-1440 | 1440 | min | 1 |  ending minutes task#1 |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|loadPower1| 0 | 800 | W | 1 |  load output power task#1 | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:9,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,cfg_feed_grid_mode_pow_limit:169,cfg_day_resident_load_list:{startMin:1,endMin:2,loadPower:3}}} |

## DisplayPropertyUpload

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powGetPv2|0 | 600 | W | 1 |  pow get pv2 |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |
|bmsBattSoc|0 | 100 | % | 1 |  SOC of the main battery |
|bmsBattSoh|0 | 100 | % | 1 |  SOH of the main battery |
|bmsDesignCap|0 | 20000 | mAh | 1 |  Battery capacity |
|bmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|bmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time of the main battery |
|bmsMinCellTemp|0 | 80 | °C | 1 |  Minimum temperature of the main battery |
|bmsMaxCellTemp|0 | 80 | °C | 1 |  Temperature of the main battery |
|bmsMinMosTemp|0 | 100 | °C | 1 |  main battery min mos temp |
|bmsMaxMosTemp|0 | 100 | °C | 1 |  main battery max mos temp |
|invNtcTemp3|0 | 100 | °C | 1 |  inv Ntc Temp 3 |
|cmsBattSoc|0 | 100 | % | 1 |  Overall SOC |
|cmsBattSoh|0 | 100 | % | 1 |  Overall SOH |
|cmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|cmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time |
|powGetPv|0 | 600 | W | 1 |  pow get pv |
|cmsBattPowOutMax|0 | 8000 | W | 1 |  cms batt pow out max |
|cmsBattPowInMax|0 | 8000 | W | 1 |  cms batt pow in max |
|cmsBattFullEnergy|0 | 3840 | Wh | 1 |  cms batt full energy |
|stormPatternEndTime|0 | 60 | h | 1 |  storm pattern end time |
|powGetSysGrid|0 | 4000 | W | 1 |  pow get sys grid |
|powGetSysLoad|0 | 10000 | W | 1 |  pow get sys load |
|powGetPvSum|0 | 3600 | W | 1 |  pow get pv sum |
|powGetBpCms|0 | 4000 | W | 1 |  pow get bp cms |
|powSysAcOutMax|0 | 4000 | W | 1 |  pow sys ac out max |
|gridConnectionVol|0 | 250 | V | 1 |  grid Connection Vol |
|gridConnectionFreq|0 | 62 | Hz | 1 |  grid connection freq |
|gridConnectionPower|0 | 2000 | W | 1 |  Grid Connection Power |
|sysGridConnectionPower|0 | 2500 | W | 1 |  sys Grid Connection Power |
|powGetPv3|0 | 600 | W | 1 |  pow get pv3 |
|powGetPv4|0 | 600 | W | 1 |  pow get pv4 |
|plugInInfoPvVol|0 | 60 | V | 1 |  plug in info pv1 vol |
|plugInInfoPvAmp|0 | 15 | A | 1 |  plug in info pv1 current |
|plugInInfoPv2Vol|0 | 60 | V | 1 |  plug in info pv2 vol |
|plugInInfoPv2Amp|0 | 15 | A | 1 |  plug in info pv2 current |
|plugInInfoPv3Vol|0 | 60 | V | 1 |  plug in info pv3 vol |
|plugInInfoPv3Amp|0 | 15 | A | 1 |  plug in info pv3 current |
|plugInInfoPv4Vol|0 | 60 | V | 1 |  plug in info pv4 vol |
|plugInInfoPv4Amp|0 | 15 | A | 1 |  plug in info pv4 current |
|powGetSysLoadFromPv|0 | 2000 | W | 1 |  power get sys load from Pv  |
|powGetSysLoadFromBp|0 | 4000 | W | 1 |  pow get gys load from bp |
|powGetSysLoadFromGrid|0 | 10000 | W | 1 |  pow get sys load from grid |
|powSysAcInMax|0 | 4000 | W | 1 |  pow Sys Ac In Max |
|socketMeasurePower|0 | 4000 | W | 1 |  socket Measure Power |
|powGetSchuko1|0 | 2100 | W | 1 |  Power Outlet 1 |
|powGetSchuko2|0 | 2100 | W | 1 |  Power Outlet 2 |
|busbarPowLimit|0 | 2300 | W | 1 |  Busbar Power Limit |
|maxInvInput|0 | 2000 | W | 1 |  max Inv Input |
|maxInvOutput|0 | 2000 | W | 1 |  max Inv Output |
|maxBpInput|0 | 2000 | W | 1 |  max Bp Input |
|maxBpOutput|0 | 2000 | W | 1 |  max Bp Output |
|feedGridModePowLimit|0 | 1500 | W | 1 |  feed Grid Mode Pow Limit |
|feedGridModePowMax|0 | 1500 | W | 1 |  feed Grid Mode Pow Max |
|brightness|0 | 100 | % | 1 |  brightness |
|sysGridInPwrLimit|0 | 2300 | W | 1 |  sys Grid In Pwr Limit |
|feedGridSafetyPowMax|0 | 2300 | W | 1 |  feed Grid Safety Power Max |


### string

| State  |  Name |
|----------|------|
|utcTimezoneId| utc timezone id |
|townCode| town code |
|systemMeshId| system Mesh Id |
|systemGroupId| system Group Id |
|seriesConnectDeviceId| series Connect Device Id |
|gridSysDeviceCnt| grid Sys Device Cnt |
|moduleWifiRssi| Wi-Fi signal intensity |
|gridCodeVersion| grid Code Version |
|socket1BindDeviceSn| socket1 Bind Device Sn |
|socket2BindDeviceSn| socket2 Bind Device Sn |
|socket1PwrInUnbind| socket1 Pwr In Unbind |
|socket2PwrInUnbind| socket2 Pwr In Unbind |
|pcsSerialNumber| pcs Serial Number |

### array

| State  |  Name |
|----------|------|
|wifiApMeshId| wifi Ap Mesh Id |
|powerSocket| power Socket |
|devErrcodeList| dev Errcode List |
|timezoneChangeList| timezone Change List |
|dayResidentLoadList| day Resident Load List |
|cloudMeter| cloud meter |
|energyStrategyOperateMode| Energy Strategy Operate Mode |
|timeAdjust| timeadjust |
|gridConnectionPortBind| grid Connection Port Bind |
|controllableLoadList| Controllable Load List |
|allTimerTask| all timer task |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|utcSetMode| utc set mode | {0:OK?} |
|devSleepState| Sleep status | {0:Off?,1:On?} |
|cmsBmsRunState| On/Off status | {0:off,1:on} |
|bmsChgDsgState| Charging/Discharging status of the main battery | {0:not charging or discharging,1:discharging,2:charging} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|plugInInfoPvFlag| plug in info pv flag | {0:OK?} |
|gridCodeSelection| grid Code Selection | {0:NULL,1:AUSTRIA,2:SWITZER,3:POLAND,4:NETHERLANDS,5:VDE_4105,6:IEEE_1547,7:USER_DEFINED,8:NORWAY,9:CZECH_REPUBLIC,10:DENMARK,11:IRELAND,12:SWEDEN,13:LATVIA,14:GREECE_A,15:GREECE_B,16:PORTUGAL,17:ROMANIA,18:LITHUANIA,19:HUNGARY,20:ITALY,21:G98,22:G99,23:NTS_631,24:UNE_217001,25:UNE_217002,26:UTE_MAINLAND,27:UTE_50HZ_ISLAND,28:UTE_60HZ_ISLAND,29:BELGIUM,30:UKRAINE,31:SLOVENIA,32:BULGARIA,33:EU_GENERAL,1001:NORTH_AMERICA} |
|plugInInfoPv2Flag| plug in info pv2 flag | {0:OK?} |
|plugInInfoPv3Flag| plug in info pv3 flag | {0:OK?} |
|plugInInfoPv4Flag| plug in info pv4 flag | {0:OK?} |
|relay1Onoff| relay 1 status | {0:off?,1:on} |
|relay4Onoff| relay 4 status | {0:off?,1:on} |
|feedGridMode| feed grid mode | {1:online?} |
|bmsBattHeating| bms Batt Heating status | {0:off?,1:on} |
|stormPatternEnable| storm pattern enable | {0:off?,1:on?} |
|stormPatternOpenFlag| storm pattern open flag | {0:off?,1:on?} |
|gridConnectionSta| grid Connection Sta | {0:GRD_STA_NO_VAILD,1:GRID_IN,2:GRID_NOT_ONLINE,3:FEED_GRID} |
|energyBackupState| energy Backup State | {0:OK?} |
|distributedDeviceStatus| distributed Device Status | {0:Election,1:Master,2:Slave} |
|seriesConnectDeviceStatus| series Connect Device Status | {0:Election,1:Master,2:Slave} |
|devCtrlStatus| dev Ctrl Status | {0:not ok?,1:ok?} |
|updateBanFlag| update Ban Flag | {0:not set?,1:set?} |
|useLanMeter| use Lan Meter | {0:no?,1:yes?} |
|sysOffgrid| sys Offgrid | {0:online?,1:offgrid?} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:12,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,cmsMaxChgSoc:33}} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:12,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,cmsMinDsgSoc:34}} |
|backupReverseSoc| 0 | 100 | % | 1 |  Backup Reserve SOC | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:9,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,backupReverseSoc:102}} |
|powConsumptionMeasurement| 1 | 2 |  | 1 |  pow Consumption Measurement handling | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:9,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,powConsumptionMeasurement:239}} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|relay2Onoff| off | on | relay AC out #1 | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:9,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,relay2Onoff:380}} |
|relay3Onoff| off | on | relay AC out #2 | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:9,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,relay3Onoff:380}} |

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
|amp|0 | 40 | A | 0.0001 |  amp |
|temp|0 | 90 | °C | 1 |  temp |
|designCap|0 | 200000 | mAh | 1 |  design cap |
|remainCap|0 | 200000 | mAh | 1 |  remain cap |
|fullCap|0 | 200000 | mAh | 1 |  full cap |
|cycles|0 | 6000 |  | 1 |  Number of cycles |
|soh|0 | 100 | % | 1 |  soh |
|maxCellVol|0 | 5 | V | 0.001 |  max cell vol |
|minCellVol|0 | 5 | V | 0.001 |  min cell vol |
|maxCellTemp|0 | 90 | °C | 1 |  max cell temp |
|minCellTemp|0 | 90 | °C | 1 |  min cell temp |
|maxMosTemp|0 | 100 | °C | 1 |  max mos temp |
|minMosTemp|0 | 100 | °C | 1 |  min mos temp |
|tagChgAmp|0 | 90 | A | 0.001 |  tag chg amp |
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

