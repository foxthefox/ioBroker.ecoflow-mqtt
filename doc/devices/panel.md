# States for  PANEL
### version: 1.4.5

[heartbeat](#heartbeat)

[backupCmdChCtrlInfos](#backupCmdChCtrlInfos)

[loadCmdChCtrlInfos](#loadCmdChCtrlInfos)

[epsModeInfo](#epsModeInfo)

[cfgSta](#cfgSta)

[chUseInfo](#chUseInfo)

[splitPhaseInfo](#splitPhaseInfo)

[loadChInfo](#loadChInfo)

[loadChCurInfo](#loadChCurInfo)

[gridInfo](#gridInfo)

[backupLoadWatt](#backupLoadWatt)

[mainsLoadWatt](#mainsLoadWatt)

[topupLoadWatt](#topupLoadWatt)

[emergencyStrategy](#emergencyStrategy)

[channelPower](#channelPower)

[areaInfo](#areaInfo)

[backupChaDiscCfg](#backupChaDiscCfg)



## heartbeat

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|backupChaTime|0 |  n/a | min | 1 |  Backup discharge time |
|workTime|0 |  n/a | min | 1 |  Device work time |
|backupBatPer|0 | 100 | % | 1 |  Backup battery percentage |
|backupFullCap|0 | 80000 | Wh | 1 |  Backup full capacity |
|backupDayWatth|0 | 864000 | Wh | 1 |  Backup electricity consumption per day |
|gridDayWatth|0 | 864000 | Wh | 1 |  Grid electricity consumption per day |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|gridSta| Grid electricity status | {0:off,1:on} |

### array

| State  |  Name |
|----------|------|
|errorCodes| Error Codes |

## backupCmdChCtrlInfos

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powCh_10|0 | 12 |  | 1 |  Channel number DP1 |
|priority_10|0 | 10 |  | 1 |  Channel priority DP1 |
|powCh_11|0 | 12 |  | 1 |  Channel number DP2 |
|priority_11|0 | 10 |  | 1 |  Channel priority DP2 |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|ctrlSta_10| 0 | 2 |  | 1 |  Power supply type DP1 0 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:10,cmdSet:11,id:17}} |
|ctrlSta_11| 0 | 2 |  | 1 |  Power supply type DP2 0 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:11,cmdSet:11,id:17}} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|ctrlMode_10| auto | manual | Contol mode DP1 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:10,cmdSet:11,id:17}} |
|ctrlMode_11| auto | manual | Contol mode DP2 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:11,cmdSet:11,id:17}} |

## loadCmdChCtrlInfos

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powCh_0|0 | 9 |  | 1 |  Channel number #1 |
|priority_0|0 | 9 |  | 1 |  Priority channel #1 |
|powCh_1|0 | 9 |  | 1 |  Channel number #2 |
|priority_1|0 | 9 |  | 1 |  Priority channel #2 |
|powCh_2|0 | 9 |  | 1 |  Channel number #3 |
|priority_2|0 | 9 |  | 1 |  Priority channel #3 |
|powCh_3|0 | 9 |  | 1 |  Channel number #4 |
|priority_3|0 | 9 |  | 1 |  Priority channel #4 |
|powCh_4|0 | 9 |  | 1 |  Channel number #5 |
|priority_4|0 | 9 |  | 1 |  Priority channel #5 |
|powCh_5|0 | 9 |  | 1 |  Channel number #6 |
|priority_5|0 | 9 |  | 1 |  Priority channel #6 |
|powCh_6|0 | 9 |  | 1 |  Channel number #7 |
|priority_6|0 | 9 |  | 1 |  Priority channel #7 |
|powCh_7|0 | 9 |  | 1 |  Channel number #8 |
|priority_7|0 | 9 |  | 1 |  Priority channel #8 |
|powCh_8|0 | 9 |  | 1 |  Channel number #9 |
|priority_8|0 | 9 |  | 1 |  Priority channel #9 |
|powCh_9|0 | 9 |  | 1 |  Channel number #10 |
|priority_9|0 | 9 |  | 1 |  Priority channel #10 |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|ctrlSta_0| 0 | 2 |  | 1 |  Power supply type channel #1 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:0,cmdSet:11,id:16}} |
|ctrlSta_1| 0 | 2 |  | 1 |  Power supply type channel #2 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:1,cmdSet:11,id:16}} |
|ctrlSta_2| 0 | 2 |  | 1 |  Power supply type channel #3 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:2,cmdSet:11,id:16}} |
|ctrlSta_3| 0 | 2 |  | 1 |  Power supply type channel #4 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:3,cmdSet:11,id:16}} |
|ctrlSta_4| 0 | 2 |  | 1 |  Power supply type channel #5 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:4,cmdSet:11,id:16}} |
|ctrlSta_5| 0 | 2 |  | 1 |  Power supply type channel #6 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:5,cmdSet:11,id:16}} |
|ctrlSta_6| 0 | 2 |  | 1 |  Power supply type channel #7 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:6,cmdSet:11,id:16}} |
|ctrlSta_7| 0 | 2 |  | 1 |  Power supply type channel #8 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:7,cmdSet:11,id:16}} |
|ctrlSta_8| 0 | 2 |  | 1 |  Power supply type channel #9 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:8,cmdSet:11,id:16}} |
|ctrlSta_9| 0 | 2 |  | 1 |  Power supply type channel #10 Grid supply, 1 storage power supply, 2 close/off | {valName:sta,moduleType:0,operateType:TCP,params:{sta:2,ctrlMode:1,ch:9,cmdSet:11,id:16}} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|ctrlMode_0| auto | manual | Contol mode channel #1 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:0,cmdSet:11,id:16}} |
|ctrlMode_1| auto | manual | Contol mode channel #2 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:1,cmdSet:11,id:16}} |
|ctrlMode_2| auto | manual | Contol mode channel #3 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:2,cmdSet:11,id:16}} |
|ctrlMode_3| auto | manual | Contol mode channel #4 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:3,cmdSet:11,id:16}} |
|ctrlMode_4| auto | manual | Contol mode channel #5 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:4,cmdSet:11,id:16}} |
|ctrlMode_5| auto | manual | Contol mode channel #6 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:5,cmdSet:11,id:16}} |
|ctrlMode_6| auto | manual | Contol mode channel #7 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:6,cmdSet:11,id:16}} |
|ctrlMode_7| auto | manual | Contol mode channel #8 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:7,cmdSet:11,id:16}} |
|ctrlMode_8| auto | manual | Contol mode channel #9 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:8,cmdSet:11,id:16}} |
|ctrlMode_9| auto | manual | Contol mode channel #10 0-Auto/1-Manual/Grid | {valName:ctrlMode,moduleType:0,operateType:TCP,params:{sta:0,ctrlMode:0,ch:9,cmdSet:11,id:16}} |

## epsModeInfo

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|eps| off | on | EPS mode | {valName:eps,moduleType:0,operateType:TCP,params:{cmdSet:11,id:24,eps:0}} |

## cfgSta

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|sta| config status | {0:Config pending?,1:Config done?} |

## chUseInfo

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|isEnable_0| Load status channel #1 | {0:off,1:on} |
|isEnable_1| Load status channel #2 | {0:off,1:on} |
|isEnable_2| Load status channel #3 | {0:off,1:on} |
|isEnable_3| Load status channel #4 | {0:off,1:on} |
|isEnable_4| Load status channel #5 | {0:off,1:on} |
|isEnable_5| Load status channel #6 | {0:off,1:on} |
|isEnable_6| Load status channel #7 | {0:off,1:on} |
|isEnable_7| Load status channel #8 | {0:off,1:on} |
|isEnable_8| Load status channel #9 | {0:off,1:on} |
|isEnable_9| Load status channel #10 | {0:off,1:on} |

## splitPhaseInfo

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|linkMark_0| Split status channel #1 | {0:Not be split,1:Should be split} |
|linkMark_1| Split status channel #2 | {0:Not be split,1:Should be split} |
|linkMark_2| Split status channel #3 | {0:Not be split,1:Should be split} |
|linkMark_3| Split status channel #4 | {0:Not be split,1:Should be split} |
|linkMark_4| Split status channel #5 | {0:Not be split,1:Should be split} |
|linkMark_5| Split status channel #6 | {0:Not be split,1:Should be split} |
|linkMark_6| Split status channel #7 | {0:Not be split,1:Should be split} |
|linkMark_7| Split status channel #8 | {0:Not be split,1:Should be split} |
|linkMark_8| Split status channel #9 | {0:Not be split,1:Should be split} |
|linkMark_9| Split status channel #10 | {0:Not be split,1:Should be split} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|linkCh_0|0 | 9 |  | 1 |  Split channel number #1 |
|linkCh_1|0 | 9 |  | 1 |  Split channel number #2 |
|linkCh_2|0 | 9 |  | 1 |  Split channel number #3 |
|linkCh_3|0 | 9 |  | 1 |  Split channel number #4 |
|linkCh_4|0 | 9 |  | 1 |  Split channel number #5 |
|linkCh_5|0 | 9 |  | 1 |  Split channel number #6 |
|linkCh_6|0 | 9 |  | 1 |  Split channel number #7 |
|linkCh_7|0 | 9 |  | 1 |  Split channel number #8 |
|linkCh_8|0 | 9 |  | 1 |  Split channel number #9 |
|linkCh_9|0 | 9 |  | 1 |  Split channel number #10 |


## loadChInfo

### string

| State  |  Name |
|----------|------|
|chName_0| Channel #1 nick name |
|chName_1| Channel #2 nick name |
|chName_2| Channel #3 nick name |
|chName_3| Channel #4 nick name |
|chName_4| Channel #5 nick name |
|chName_5| Channel #6 nick name |
|chName_6| Channel #7 nick name |
|chName_7| Channel #8 nick name |
|chName_8| Channel #9 nick name |
|chName_9| Channel #10 nick name |

## loadChCurInfo

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|cur_0|0 | 30 | A | 1 |  Channel #1 current |
|cur_1|0 | 30 | A | 1 |  Channel #2 current |
|cur_2|0 | 30 | A | 1 |  Channel #3 current |
|cur_3|0 | 30 | A | 1 |  Channel #4 current |
|cur_4|0 | 30 | A | 1 |  Channel #5 current |
|cur_5|0 | 30 | A | 1 |  Channel #6 current |
|cur_6|0 | 30 | A | 1 |  Channel #7 current |
|cur_7|0 | 30 | A | 1 |  Channel #8 current |
|cur_8|0 | 30 | A | 1 |  Channel #9 current |
|cur_9|0 | 30 | A | 1 |  Channel #10 current |
|cur_10|0 | 30 | A | 1 |  DP1 current |
|cur_11|0 | 30 | A | 1 |  DP2 current |


## gridInfo

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|gridVol|0 | 240 | V | 1 |  Grid voltage |
|gridFreq|0 | 60 | Hz | 1 |  Grid Frequency |


## backupLoadWatt

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|watthDaytoDate_0|0 | 86400 | Wh | 1 |  Daily backup energy ch #1 |
|watthDaytoDate_1|0 | 86400 | Wh | 1 |  Daily backup energy ch #2 |
|watthDaytoDate_2|0 | 86400 | Wh | 1 |  Daily backup energy ch #3 |
|watthDaytoDate_3|0 | 86400 | Wh | 1 |  Daily backup energy ch #4 |
|watthDaytoDate_4|0 | 86400 | Wh | 1 |  Daily backup energy ch #5 |
|watthDaytoDate_5|0 | 86400 | Wh | 1 |  Daily backup energy ch #6 |
|watthDaytoDate_6|0 | 86400 | Wh | 1 |  Daily backup energy ch #7 |
|watthDaytoDate_7|0 | 86400 | Wh | 1 |  Daily backup energy ch #8 |
|watthDaytoDate_8|0 | 86400 | Wh | 1 |  Daily backup energy ch #9 |
|watthDaytoDate_9|0 | 86400 | Wh | 1 |  Daily backup energy ch #10 |


### array

| State  |  Name |
|----------|------|
|watth_0| Hourly backup energy ch #1 |
|watth_1| Hourly backup energy ch #2 |
|watth_2| Hourly backup energy ch #3 |
|watth_3| Hourly backup energy ch #4 |
|watth_4| Hourly backup energy ch #5 |
|watth_5| Hourly backup energy ch #6 |
|watth_6| Hourly backup energy ch #7 |
|watth_7| Hourly backup energy ch #8 |
|watth_8| Hourly backup energy ch #9 |
|watth_9| Hourly backup energy ch #10 |

## mainsLoadWatt

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|watthDaytoDate_0|0 | 86400 | Wh | 1 |  Daily mains energy ch #1 |
|watthDaytoDate_1|0 | 86400 | Wh | 1 |  Daily mains energy ch #2 |
|watthDaytoDate_2|0 | 86400 | Wh | 1 |  Daily mains energy ch #3 |
|watthDaytoDate_3|0 | 86400 | Wh | 1 |  Daily mains energy ch #4 |
|watthDaytoDate_4|0 | 86400 | Wh | 1 |  Daily mains energy ch #5 |
|watthDaytoDate_5|0 | 86400 | Wh | 1 |  Daily mains energy ch #6 |
|watthDaytoDate_6|0 | 86400 | Wh | 1 |  Daily mains energy ch #7 |
|watthDaytoDate_7|0 | 86400 | Wh | 1 |  Daily mains energy ch #8 |
|watthDaytoDate_8|0 | 86400 | Wh | 1 |  Daily mains energy ch #9 |
|watthDaytoDate_9|0 | 86400 | Wh | 1 |  Daily mains energy ch #10 |


### array

| State  |  Name |
|----------|------|
|watth_0| Hourly mains energy ch #1 |
|watth_1| Hourly mains energy ch #2 |
|watth_2| Hourly mains energy ch #3 |
|watth_3| Hourly mains energy ch #4 |
|watth_4| Hourly mains energy ch #5 |
|watth_5| Hourly mains energy ch #6 |
|watth_6| Hourly mains energy ch #7 |
|watth_7| Hourly mains energy ch #8 |
|watth_8| Hourly mains energy ch #9 |
|watth_9| Hourly mains energy ch #10 |

## topupLoadWatt

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|watthDaytoDate_10|0 | 86400 | Wh | 1 |  Daily energy DP1 |
|watthDaytoDate_11|0 | 86400 | Wh | 1 |  Daily energy DP2 |


### array

| State  |  Name |
|----------|------|
|watth_10| Hourly energy DP1 |
|watth_11| Hourly energy DP2 |

## emergencyStrategy

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|backupMode| Backup mode | {0:0?,1:1?} |
|isCfg| Backup config | {0:0?,1:1?} |
|overloadMode| Backup overload mode | {0:0?,1:1?} |

## channelPower

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|powType_0| Power type channel #1 | {0:0?,1:1?} |
|powType_1| Power type channel #2 | {0:0?,1:1?} |
|powType_2| Power type channel #3 | {0:0?,1:1?} |
|powType_3| Power type channel #4 | {0:0?,1:1?} |
|powType_4| Power type channel #5 | {0:0?,1:1?} |
|powType_5| Power type channel #6 | {0:0?,1:1?} |
|powType_6| Power type channel #7 | {0:0?,1:1?} |
|powType_7| Power type channel #8 | {0:0?,1:1?} |
|powType_8| Power type channel #9 | {0:0?,1:1?} |
|powType_9| Power type channel #10 | {0:0?,1:1?} |
|powType_10| Power type DP1 | {0:0?,1:1?} |
|powType_11| Power type DP2 | {0:0?,1:1?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|chWatt_0|0 | 3600 | W | 1 |  Power channel #1 |
|chWatt_1|0 | 3600 | W | 1 |  Power channel #2 |
|chWatt_2|0 | 3600 | W | 1 |  Power channel #3 |
|chWatt_3|0 | 3600 | W | 1 |  Power channel #4 |
|chWatt_4|0 | 3600 | W | 1 |  Power channel #5 |
|chWatt_5|0 | 3600 | W | 1 |  Power channel #6 |
|chWatt_6|0 | 3600 | W | 1 |  Power channel #7 |
|chWatt_7|0 | 3600 | W | 1 |  Power channel #8 |
|chWatt_8|0 | 3600 | W | 1 |  Power channel #9 |
|chWatt_9|0 | 3600 | W | 1 |  Power channel #10 |
|chWatt_10|0 | 7200 | W | 1 |  Power DP1 |
|chWatt_11|0 | 7200 | W | 1 |  Power DP2 |


## areaInfo

### string

| State  |  Name |
|----------|------|
|area| Area Info |

## backupChaDiscCfg

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|forceChargeHigh| 60 | 100 | % | 1 |  Charge upper threshold percentage | {valName:forceChargeHigh,operateType:TCP,params:{discLower:30,forceChargeHigh:78,cmdSet:11,id:29}} |
|discLower| 0 | 30 | % | 1 |  Discharge lower threshold percentage | {valName:discLower,moduleType:0,operateType:TCP,params:{discLower:30,forceChargeHigh:78,cmdSet:11,id:29}} |

