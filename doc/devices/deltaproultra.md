# States for  DELTAPROULTRA
### version: 1.3.1

[AppParaHeartbeatReport](#AppParaHeartbeatReport)

[AppShowHeartbeatReport](#AppShowHeartbeatReport)

[BackendRecordHeartbeatReport](#BackendRecordHeartbeatReport)

[BPInfo](#BPInfo)



## AppParaHeartbeatReport

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|sysWorkMode| System Work Mode | {0:OK?} |
|sysBackupEvent| System Backup Event | {0:OK?} |
|acXboost| AC X-Boost | {0:disabled?,1:enabled?} |
|bmsModeSet| BMS Mode Setting | {0:?} |
|acOftenOpenFlg| acOftenOpenFlg | {0:OK?} |
|solarOnlyFlg| Solar only | {0:all?,1:solar only?} |
|timezoneSettype| Timezone tracking | {0:no tracking?,1:tracking?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|sysBackupSoc|0 | 100 | % | 1 |  System backup SOC |
|backupRatio|20 | 90 | % | 1 |  Backup limit (ratio?) |
|acOutFreq|50 | 60 | Hz | 1 |  AC output frequency |
|acOftenOpenMinSoc|0 | 30 | % | 1 |  acOftenOpenMinSoc |
|sysTimezone|-12 | 12 | h | 0.01 |  Timezone offset |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|energyManageEnable| off | on | Enable energy management | {dest:2,cmdFunc:2,cmdId:94,dataLen:4} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|chgMaxSoc| 50 | 100 | % | 1 |  Maximum charge SOC | {dest:2,cmdFunc:2,cmdId:87,dataLen:2} |
|dsgMinSoc| 0 | 30 | % | 1 |  Minimum discharge SOC | {dest:2,cmdFunc:2,cmdId:88,dataLen:2} |
|chg_5p8SetWatts| 200 | 7200 | W | 1 |  Default charge power PowerI/O | {dest:2,cmdFunc:2,cmdId:73,dataLen:3} |
|chgC20SetWatts| 200 | 2400 | W | 1 |  Default charge power AC IN | {dest:2,cmdFunc:2,cmdId:73,dataLen:3} |
|powerStandbyMins| 0 | 800 | min | 1 |  System standby time | {dest:2,cmdFunc:2,cmdId:81,dataLen:2} |
|screenStandbySec| 0 | 1800 | s | 1 |  Screen standby time | {dest:2,cmdFunc:2,cmdId:82,dataLen:3} |
|dcStandbyMins| 0 | 1440 | min | 1 |  DC12V standby time | {dest:2,cmdFunc:2,cmdId:84,dataLen:2} |
|acStandbyMins| 0 | 1440 | min | 1 |  AC standby time | {dest:2,cmdFunc:2,cmdId:83,dataLen:2} |

### string

| State  |  Name |
|----------|------|
|sysTimezoneId| Timezone |

## AppShowHeartbeatReport

### string

| State  |  Name |
|----------|------|
|protoVer| Version |
|simIccid| simIccid: |
|chgTimeTaskTable_0| Charging Time Task Table 0 |
|chgTimeTaskTable_1| Charging Time Task Table 1 |
|chgTimeTaskTable_2| Charging Time Task Table 2 |
|dsgTimeTaskTable_0| Discharging Time Task Table 0 |
|dsgTimeTaskTable_1| Discharging Time Task Table 1 |
|dsgTimeTaskTable_2| Discharging Time Task Table 2 |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|showFlag|0 |  n/a |  | 1 |  show flag |
|soc|0 | 100 | % | 1 |  SOC |
|bpNum|0 | 5 |  | 1 |  Battery pack count |
|c20ChgMaxWatts|0 | 7200 | W | 1 |  Max charging power AC IN |
|paraChgMaxWatts|0 | 7200 | W | 1 |  Max parallel charging power |
|remainTime|0 |  n/a | min | 1 |  Remaining time |
|fullCombo|0 | 100 | % | 1 |  fullCombo |
|remainCombo|0 | 100 | % | 1 |  remainCombo |
|wattsInSum|0 | 7200 | W | 1 |  Total power input |
|wattsOutSum|0 | 7200 | W | 1 |  Total power output |
|outUsb1Pwr|0 | 12 | W | 1 |  Output power USB-A 1 |
|outUsb2Pwr|0 | 12 | W | 1 |  Output power USB-A 2 |
|outTypec1Pwr|0 | 100 | W | 1 |  Output power USB-C 1 |
|outTypec2Pwr|0 | 100 | W | 1 |  Output power USB-C 2 |
|outAdsPwr|0 | 378 | W | 1 |  Output power DC12V |
|outAcL1_1Pwr|0 | 2400 | W | 1 |  Output power Backup 1 |
|outAcL1_2Pwr|0 | 2400 | W | 1 |  Output power Backup 2 |
|outAcL2_1Pwr|0 | 2400 | W | 1 |  Output power UPS 1 |
|outAcL2_2Pwr|0 | 2400 | W | 1 |  Output power UPS 2 |
|outAcTtPwr|0 | 3600 | W | 1 |  Output power UPS TT-30 |
|outAcL14Pwr|0 | 4800 | W | 1 |  Output power Backup L-14 |
|outAc_5p8Pwr|0 | 3600 | W | 1 |  Output power Power I/O |
|inAc_5p8Pwr|0 | 7200 | W | 1 |  Input power Power I/O |
|inAcC20Pwr|0 | 2800 | W | 1 |  Input power AC IN |
|inLvMpptPwr|0 | 1600 | W | 1 |  LV solar power input |
|inHvMpptPwr|0 | 4000 | W | 1 |  HV solar power input |
|outPrPwr|0 | 7200 | W | 1 |  outPrPwr |
|timeTaskChangeCnt|0 |  n/a |  | 1 |  Time Task Change Count |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|accessType| Access Type | {0:OK?} |
|wireless_4gSta| 4G connection status | {0:Operator not search?,1:registered?,2:searching?,3:refuses?,4:unknwon?,5:roaming registered?} |
|access_5p8InType| Power I/O input type | {0:idle?,1:AC EV?,2:SHP2?,3:L14 transfer switch?} |
|access_5p8OutType| Power I/O output type | {0:idle?,1:parallel box?,2:SHP2?} |
|wireless_4gCon| 4G connection | {0:none?,1:2G?,4:4G?,2?:3G?} |
|wirlesss_4gErrCode| 4G error code | {0:OK?,1:SIM not inserted?,2:PIN required?,3:PUK required?,4:SIM error?,6:No Operator?,7:USB disconnect?,8:unknown device?,9:CTL error?} |
|pcsType| PCS type | {0:OK?} |
|sysErrCode| System error code | {0:OK?} |
|timeTaskConflictFlag| Time Task Conflict | {0:OK?} |
|chgTimeTaskNotice| Charging Time Task Notice | {0:OK?} |
|chgTimeTaskType| Charging Time Task Type | {0:AC charge?,1:AC discharge?,2:DC discharge?,-1:nothing set?} |
|chgTimeTaskIndex| Charging Time Task Index | {0:OK?,-1:nothing set?} |
|chgTimeTaskMode| Charging Time Task Mode | {0:OK?,-1:nothing set?} |
|chgTimeTaskParam| Charging Time Task Param | {0:OK?} |
|dsgTimeTaskNotice| Discharging Time Task Notice | {0:OK?} |
|dsgTimeTaskType| Discharging Time Task Type | {0:AC charge?,1:AC discharge?,2:DC discharge?,-1:nothing set?} |
|dsgTimeTaskIndex| Discharging Time Task Index | {0:OK?,-1:nothing set?} |
|dsgTimeTaskMode| Discharging Time Task Mode | {0:OK?,-1:nothing set?} |
|dsgTimeTaskParam| Discharging Time Task Param | {0:OK?} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|wireless_4gOn| off | on | 4G connection off/on | {dest:53,cmdFunc:2,cmdId:117,dataLen:2} |

## BackendRecordHeartbeatReport

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|recordFlag| Record flag | {0:OK?} |
|sysWorkSta| System work status | {0:OK?} |
|chgReignSta| chgReignSta | {0:OK?} |
|pcsWorkSta| PCS work status | {0:OK?} |
|fanState| Fan state | {0:off?,1:level 1?} |
|emsWorkSta| EMS work status | {0:OK?} |
|c20InType| AC IN type | {0:120V?,1:240V?} |
|work_5p8Mode| Power I/O work mode | {0:comm?,1:solar only?,2:backup?,3:dbg?} |
|emsOpenBmsIdx| Battery pack enable state | {0:off,1:OK?} |
|pcsDcErrCode| Error code PCS DC | {0:OK?} |
|pcsAcErrCode| Error code PCS AC | {0:OK?} |
|lvPvErrCode| Error code LV MPPT | {0:OK?} |
|hvPvErrCode| Error code HV MPPT | {0:OK?} |
|adsErrCode| Error code DC12V | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|acInFreq|50 | 60 | Hz | 1 |  AC input frequency |
|emsMaxAvailNum|0 | 5 | pcs | 1 |  EMS max avail. number |
|emsParaVolMin|0 | 120 | V | 0.001 |  Minimum parallel voltage |
|emsParaVolMax|0 | 120 | V | 0.001 |  Maximum parallel voltage |
|acOutFreq|0 | 60 | Hz | 1 |  AC output frequency |
|batVol|0 | 120 | V | 1 |  Battery voltage |
|batAmp|0 | 60 | A | 1 |  Battery current |
|bmsInputWatts|0 | 7200 | W | 1 |  BMS input power |
|bmsOutputWatts|0 | 7200 | W | 1 |  BMS output power |
|outUsb1Vol|0 | 6 | V | 1 |  Output voltage USB-A 1 |
|outUsb1Amp|0 | 3 | A | 1 |  Output current USB-A 1 |
|outUsb2Vol|0 | 6 | V | 1 |  Output voltage USB-A 2 |
|outUsb2Amp|0 | 3 | A | 1 |  Output current USB-A 2 |
|outTypec1Vol|0 | 25 | V | 1 |  Output voltage USB-C 1 |
|outTypec1Amp|0 | 6 | A | 1 |  Output current USB-C 1 |
|outTypec2Vol|0 | 25 | V | 1 |  Output voltage USB-C 2 |
|outTypec2Amp|0 | 6 | A | 1 |  Output current USB-C 2 |
|outAdsVol|0 | 13 | V | 1 |  Output voltage DC12V |
|outAdsAmp|0 | 30 | A | 1 |  Output current DC12V |
|outAcL1_1Vol|0 | 130 | V | 1 |  Output voltage Backup 1 |
|outAcL1_1Amp|0 | 20 | A | 1 |  Output current Backup 1 |
|outAcL1_2Vol|0 | 130 | V | 1 |  Output voltage Backup 2 |
|outAcL1_2Amp|0 | 20 | A | 1 |  Output current Backup 2 |
|outAcL2_1Vol|0 | 130 | V | 1 |  Output voltage UPS 1 |
|outAcL2_1Amp|0 | 20 | A | 1 |  Output current UPS 1 |
|outAcL2_2Vol|0 | 130 | V | 1 |  Output voltage UPS 2 |
|outAcL2_2Amp|0 | 20 | A | 1 |  Output current UPS 2 |
|outAcTtVol|0 | 130 | V | 1 |  Output voltage UPS TT-30 |
|outAcTtAmp|0 | 30 | A | 1 |  Output current UPS TT-30 |
|outAcL14Vol|0 | 250 | V | 1 |  Output voltage Backup L-14 |
|outAcL14Amp|0 | 20 | A | 1 |  Output current Backup L-14 |
|outAc_5p8Vol|0 | 250 | V | 1 |  Output voltage PowerI/O |
|outAc_5p8Amp|0 | 30 | A | 1 |  Output current PowerI/O |
|inAc_5p8Vol|0 | 260 | V | 1 |  Input voltage PowerI/O |
|inAc_5p8Amp|0 | 31 | A | 1 |  Input current PowerI/O |
|inAcC20Vol|0 | 250 | V | 1 |  Input voltage AC IN |
|inAcC20Amp|0 | 20 | A | 1 |  Input current AC IN |
|inLvMpptVol|0 | 150 | V | 1 |  LV solar input voltage |
|inLvMpptAmp|0 | 15 | A | 1 |  LV solar input current |
|inHvMpptVol|0 | 450 | V | 1 |  HV solar input voltage |
|inHvMpptAmp|0 | 15 | A | 1 |  HV solar input current |
|pcsDcTemp|0 | 90 | °C | 1 |  Temperature PCS DC |
|pcsAcTemp|0 | 90 | °C | 1 |  Temperature PCS AC |
|mpptLvTemp|0 | 69 | °C | 1 |  Temperature LV MPPT |
|mpptHvTemp|0 | 90 | °C | 1 |  Temperature HV MPPT |
|pdTemp|0 | 90 | °C | 1 |  Temperature PD |
|evMaxChargerCur|0 | 30 | A | 1 |  Maximum EV charge current |


## BPInfo

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpNo|0 | 5 |  | 1 |  Battery pack number |
|bpSoc|0 | 100 | % | 1 |  Battery pack SOC |
|bpPwr|0 | 7200 | W | 1 |  Battery pack power |
|bpEnergy|0 | 6200 | Wh | 1 |  Battery pack energy |
|heatTime|0 | 360 | min | 1 |  Battery pack heating time |
|remainTime|0 |  n/a | min | 1 |  Battery pack remain time |
|bpSocMax|60 | 100 | % | 1 |  Battery pack max SOC |
|bpSocMin|0 | 30 | % | 1 |  Battery pack min SOC |
|bpTemp|0 | 80 | °C | 1 |  Battery pack temperature |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bpChgSta| Battery pack Charge State | {0:OK?} |
|bpErrCode| Battery pack Error Code | {0:OK?} |

