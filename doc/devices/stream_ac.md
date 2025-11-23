# States for  STREAM_AC
### version: 1.4.8

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
|cmsBattPowOutMax|0 | 4000 | W | 1 |  cms batt pow out max |
|cmsBattPowInMax|0 | 4000 | W | 1 |  cms batt pow in max |
|cmsBattFullEnergy|0 | 1920 | Wh | 1 |  cms batt full energy |
|stormPatternEndTime|0 | 60 | h | 1 |  storm pattern end time |
|powGetSysGrid|0 | 3000 | W | 1 |  pow get sys grid |
|powGetSysLoad|0 | 3000 | W | 1 |  pow get sys load |
|powGetPvSum|0 | 2400 | W | 1 |  pow get pv sum |
|powGetBpCms|0 | 2000 | W | 1 |  pow get bp cms |
|powSysAcOutMax|0 | 2000 | W | 1 |  pow sys ac out max |
|gridConnectionVol|0 | 250 | V | 1 |  grid Connection Vol |
|gridConnectionFreq|0 | 62 | Hz | 1 |  grid connection freq |
|gridConnectionPower|0 | 2000 | W | 1 |  Grid Connection Power |
|sysGridConnectionPower|0 | 2000 | W | 1 |  sys Grid Connection Power |
|powGetSysLoadFromPv|0 | 2000 | W | 1 |  power get sys load from Pv  |
|powGetSysLoadFromBp|0 | 2500 | W | 1 |  pow get gys load from bp |
|powGetSysLoadFromGrid|0 | 10000 | W | 1 |  pow get sys load from grid |
|powSysAcInMax|0 | 3000 | W | 1 |  pow Sys Ac In Max |
|socketMeasurePower|0 | 2000 | W | 1 |  socket Measure Power |
|busbarPowLimit|0 | 2300 | W | 1 |  Busbar Power Limit |
|maxInvInput|0 | 2000 | W | 1 |  max Inv Input |
|maxInvOutput|0 | 2000 | W | 1 |  max Inv Output |
|maxBpInput|0 | 2000 | W | 1 |  max Bp Input |
|maxBpOutput|0 | 2000 | W | 1 |  max Bp Output |
|feedGridModePowLimit|0 | 1500 | W | 1 |  feed Grid Mode Pow Limit |
|feedGridModePowMax|0 | 1500 | W | 1 |  feed Grid Mode Pow Max |
|brightness|0 | 100 | % | 1 |  brightness |


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

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|utcSetMode| utc set mode | {0:OK?} |
|devSleepState| Sleep status | {0:Off?,1:On?} |
|cmsBmsRunState| On/Off status | {0:off,1:on} |
|bmsChgDsgState| Charging/Discharging status of the main battery | {0:not charging or discharging,1:discharging,2:charging} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |
|gridCodeSelection| grid Code Selection | {0:NULL,1:AUSTRIA,2:SWITZER,3:POLAND,4:NETHERLANDS,5:VDE_4105,6:IEEE_1547,7:USER_DEFINED,8:NORWAY,9:CZECH_REPUBLIC,10:DENMARK,11:IRELAND,12:SWEDEN,13:LATVIA,14:GREECE_A,15:GREECE_B,16:PORTUGAL,17:ROMANIA,18:LITHUANIA,19:HUNGARY,20:ITALY,21:G98,22:G99,23:NTS_631,24:UNE_217001,25:UNE_217002,26:UTE_MAINLAND,27:UTE_50HZ_ISLAND,28:UTE_60HZ_ISLAND,29:BELGIUM,30:UKRAINE,31:SLOVENIA,32:BULGARIA,33:EU_GENERAL,1001:NORTH_AMERICA} |
|feedGridMode| feed grid mode | {1:online?} |
|bmsBattHeating| bms Batt Heating status | {0:off?,1:on} |
|stormPatternEnable| storm pattern enable | {0:off?,1:on?} |
|stormPatternOpenFlag| storm pattern open flag | {0:off?,1:on?} |
|gridConnectionSta| grid Connection Sta | {0:GRD_STA_NO_VALID,1:GRID_IN,2:GRID_NOT_ONLINE,3:FEED_GRID} |
|energyBackupState| energy Backup State | {0:OK?} |
|distributedDeviceStatus| distributed Device Status | {0:Election,1:Master,2:Slave} |
|seriesConnectDeviceStatus| series Connect Device Status | {0:Election,1:Master,2:Slave} |
|devCtrlStatus| dev Ctrl Status | {0:not ok?,1:ok?} |
|updateBanFlag| update Ban Flag | {0:not set?,1:set?} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:12,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,cmsMaxChgSoc:33}} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:12,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,cmsMinDsgSoc:34}} |
|backupReverseSoc| 0 | 100 | % | 1 |  Backup Reserve SOC | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:9,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,backupReverseSoc:102}} |
|powConsumptionMeasurement| 1 | 2 |  | 1 |  pow Consumption Measurement handling | {src:32,dest:2,dSrc:1,dDest:1,cmdFunc:254,cmdId:17,dataLen:9,productId:56,version:3,payloadVer:1,pdata:{cfgUtcTime:6,powConsumptionMeasurement:239}} |

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
|designCap|0 | 100000 | mAh | 1 |  design cap |
|remainCap|0 | 100000 | mAh | 1 |  remain cap |
|fullCap|0 | 100000 | mAh | 1 |  full cap |
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

