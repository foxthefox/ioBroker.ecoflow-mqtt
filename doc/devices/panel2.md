# States for  PANEL2
### version: 1.4.5

[ProtoTime](#ProtoTime)

[ProtoPushAndSet](#ProtoPushAndSet)

[backupIncreInfo](#backupIncreInfo)

[backupCh1Info](#backupCh1Info)

[backupCh2Info](#backupCh2Info)

[backupCh3Info](#backupCh3Info)

[Energy1Info](#Energy1Info)

[Energy2Info](#Energy2Info)

[Energy3Info](#Energy3Info)

[DeltaPro1Info](#DeltaPro1Info)

[DeltaPro2Info](#DeltaPro2Info)

[loadIncreInfo](#loadIncreInfo)

[masterIncreInfo](#masterIncreInfo)

[LoadStrategyCfg](#LoadStrategyCfg)

[loadCurrent](#loadCurrent)

[loadPower](#loadPower)



## ProtoTime

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|master_gridWatt|0 | 12000 | W | 1 |  Master Grid Power |
|backupDischargeTime|0 | 180000 | min | 1 |  Backup discharge time |
|bkpEnerg1ChargeTime|0 | 30000 | min | 1 |  Backup Energy#1 charge time |
|bkpEnerg1DischargeTime|0 | 30000 | min | 1 |  Backup Energy#1 discharge time |
|bkpEnerg2ChargeTime|0 | 30000 | min | 1 |  Backup Energy#2 charge time |
|bkpEnerg2DischargeTime|0 | 30000 | min | 1 |  Backup Energy#2 discharge time |
|wattInfoGridWatt|0 | 24000 | W | 1 |  Power info grid |
|wattInfoChWatt|0 | 12000 | W | 1 |  Power info channel sum |
|wattInfoChWatt1|0 | 12000 | W | 1 |  Power info channel 1 |
|wattInfoChWatt2|0 | 12000 | W | 1 |  Power info channel 2 |
|wattInfoChWatt3|0 | 12000 | W | 1 |  Power info channel 3 |
|wattInfoAllHallWatt|0 | 12000 | W | 1 |  Power info all hall |


### string

| State  |  Name |
|----------|------|
|sysTimezone| System Timezone |
|timezoneId| System Timezone Id |
|appMainVer| Master app main version |
|appDbgVer| Master app debug version |
|appTestVer| Master app test version |

### array

| State  |  Name |
|----------|------|
|hall1Watt| Hall1 power |
|hall1Curr| Hall1 current |
|bkpChWatt| Backup charge power |

## ProtoPushAndSet

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|gridVol|0 | 250 | V | 1 |  Grid voltage |
|gridFreq|0 | 61 | Hz | 1 |  Grid Frequency |
|foceChargeHight|60 | 100 | % | 1 |  Charge upper threshold percentage |
|chargeWattPower|0 | 3600 | W | 1 |  Charging Power |
|discLower|0 | 30 | % | 1 |  Discharge lower threshold percentage |
|masterCur|0 | 100 | A | 1 |  Master current |
|oilEngineWatt|0 | 12000 | W | 1 |  Oil engine power |
|backupReserveSoc|0 | 100 | % | 1 |  Backup Reserve SOC |
|timeZone|-12 | 12 |  | 1 |  time zone |
|solarBackupReserveSoc|0 | 100 | % | 1 |  Solar backup reserve SOC |
|oilMaxOutputWatt|500 | 7200 | W | 1 |  Oil max. charging output power? |
|inletBoxCurrent|0 | 100 | A | 1 |  Inlet box current |
|phaseSubValue|0 | 360 | ° | 1 |  phase Sub Value |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|productType| Product type | {0:GRID_OFF_LOAD12,1:GRID_CONNECTED_LOAD12,2:GRID_OFF_LOAD36,3:GRID_CONNECTED_LOAD36} |
|powerSta| Power Status | {0:LOAD_CH_EG_POWER,1:LOAD_CH_ES_POWER,2:LOAD_CH_OIL_POWER,3:LOAD_CH_STOP_EM,4:LOAD_CH_OFF_POWER} |
|isSetOilEngine| isSetOilEngine | {0:no generator?,1:generator?} |
|isAreaErr| Area error | {0:OK?,1:Error?} |
|ch1ForceCharge| Ch1 force charging | {0:normal?,1:forced?} |
|ch2ForceCharge| Ch2 force charging | {0:normal?,1:forced?} |
|ch3ForceCharge| Ch3 force charging | {0:normal?,1:forced?} |
|stormIsEnable| Storm is enable | {0:off?,1:on} |
|inStormMode| Storm mode | {0:inactive?,1:active?} |
|ch1EnableSet| Ch1 enabled | {0:off?,1:on?} |
|ch2EnableSet| Ch2 enabled | {0:off?,1:on?} |
|ch3EnableSet| Ch3 enabled | {0:off?,1:on?} |
|oilEngineToBackChargePersent| Oil Engine To Back Charge Present | {0:not present?,1:present?} |
|ntcOverTempErr| NTC over temp error | {0:OK?,1:error?} |
|smartBackupMode| Smart Backup Mode | {0:off?,1:on?} |
|backupReserveEnable| Backup Reserve Enable | {0:off?,1:on?} |
|oilType| Oil engine type | {0:120V single phase?,1:240V split phase?} |
|stormRequestFlag| Storm request flag | {0:off?,1:on?} |
|stormCurTimeStopFlag| stormCurTimeStopFlag | {0:off?,1:on?} |
|sysCurRunningState| sysCurRunningState | {0:off?,1:on?} |
|rly1RealSta| Relay1 Real Status | {0:off?,1:on?} |
|rly2RealSta| Relay2 Real Status | {0:off?,1:on?} |
|rly3RealSta| Relay3 Real Status | {0:off?,1:on?} |
|rly4RealSta| Relay4 Real Status | {0:off?,1:on?} |
|curRunningStrategy| Current running strategy | {0:?} |
|reasonOfStopDischar| Reason of Stop Discharge | {0:?} |
|reasonOsStopCharge| Reason of Stop Charge | {0:?} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|epsModeInfo| off | on | EPS mode | {from:iOS,operateType:latestQuotas,id:83154039,lang:de-de,params:{},version:1.0} |

### string

| State  |  Name |
|----------|------|
|hasConfigDone| hasConfigDone |
|area| Area Info |
|stormEndTimestamp| Storm End Timestamp |
|localTime| local time |

## backupIncreInfo

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|backupFullCap|0 | 100000 | mAh | 1 |  Full capacity |
|backupBatPer|0 | 100 | % | 1 |  Battery SOC |
|backupDischargeRmainBatCap|0 | 20000 | mAh | 1 |  Discharge remain. capacity |


## backupCh1Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|backupIsReady| backupIsReady | {0:not ready?,1:ready?} |
|ctrlSta| ctrlSta | {0:OK?} |
|forceChargeSta| forceChargeSta | {0:OK?} |
|wakeUpChargeSta| wakeUpChargeSta | {0:OK?} |
|energy_5p8Type| Charge type | {0:idle?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|backupRly1Cnt|0 |  n/a |  | 1 |  Backup Relay1 Count |
|backupRly2Cnt|0 |  n/a |  | 1 |  Backup Relay2 Count |


## backupCh2Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|backupIsReady| backupIsReady | {0:not ready?,1:ready?} |
|ctrlSta| ctrlSta | {0:OK?} |
|forceChargeSta| forceChargeSta | {0:OK?} |
|wakeUpChargeSta| wakeUpChargeSta | {0:OK?} |
|energy_5p8Type| Charge type | {0:idle?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|backupRly1Cnt|0 |  n/a |  | 1 |  Backup Relay1 Count |
|backupRly2Cnt|0 |  n/a |  | 1 |  Backup Relay2 Count |


## backupCh3Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|backupIsReady| backupIsReady | {0:not ready?,1:ready?} |
|ctrlSta| ctrlSta | {0:OK?} |
|forceChargeSta| forceChargeSta | {0:OK?} |
|wakeUpChargeSta| wakeUpChargeSta | {0:OK?} |
|energy_5p8Type| Charge type | {0:idle?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|backupRly1Cnt|0 |  n/a |  | 1 |  Backup Relay1 Count |
|backupRly2Cnt|0 |  n/a |  | 1 |  Backup Relay2 Count |


## Energy1Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|isEnable| Device enabled | {0:off?,1:on} |
|isConnect| Device connected | {0:not connected?,1:connected?} |
|isAcOpen| AC switch open | {0:off?,1:on} |
|isPowerOutput| Power output | {0:off?,1:on} |
|isGridCharge| Grid charge | {0:off?,1:on} |
|isMpptCharge| MPPT charge | {0:off?,1:on} |
|emsChgFlag| EMS Charge flag | {0:off?,1:on} |
|hwConnect| HW connected | {0:off?,1:on} |
|errorCodeNum| Error code | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|batteryPercentage|0 | 100 | % | 1 |  Battery SOC |
|outputPower|0 | 7200 | W | 1 |  Output power |
|emsBatTemp|0 | 80 | °C | 1 |  EMS battery temperature |
|lcdInputWatts|0 | 7200 | W | 1 |  Input power (LCD) |
|pvChargeWatts|0 | 5600 | W | 1 |  Charge power |
|pvLowChargeWatts|0 | 1600 | W | 1 |  Low charge power |
|pvHeightChargeWatts|0 | 4000 | W | 1 |  High charge power |


### string

| State  |  Name |
|----------|------|
|oilPackNum| Oil pack# |
|multPackNum| Multo pack# |

## Energy2Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|isEnable| Device enabled | {0:off?,1:on} |
|isConnect| Device connected | {0:not connected?,1:connected?} |
|isAcOpen| AC switch open | {0:off?,1:on} |
|isPowerOutput| Power output | {0:off?,1:on} |
|isGridCharge| Grid charge | {0:off?,1:on} |
|isMpptCharge| MPPT charge | {0:off?,1:on} |
|emsChgFlag| EMS Charge flag | {0:off?,1:on} |
|hwConnect| HW connected | {0:off?,1:on} |
|errorCodeNum| Error code | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|batteryPercentage|0 | 100 | % | 1 |  Battery SOC |
|outputPower|0 | 7200 | W | 1 |  Output power |
|emsBatTemp|0 | 80 | °C | 1 |  EMS battery temperature |
|lcdInputWatts|0 | 7200 | W | 1 |  Input power (LCD) |
|pvChargeWatts|0 | 5600 | W | 1 |  Charge power |
|pvLowChargeWatts|0 | 1600 | W | 1 |  Low charge power |
|pvHeightChargeWatts|0 | 4000 | W | 1 |  High charge power |


### string

| State  |  Name |
|----------|------|
|oilPackNum| Oil pack# |
|multPackNum| Multo pack# |

## Energy3Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|isEnable| Device enabled | {0:off?,1:on} |
|isConnect| Device connected | {0:not connected?,1:connected?} |
|isAcOpen| AC switch open | {0:off?,1:on} |
|isPowerOutput| Power output | {0:off?,1:on} |
|isGridCharge| Grid charge | {0:off?,1:on} |
|isMpptCharge| MPPT charge | {0:off?,1:on} |
|emsChgFlag| EMS Charge flag | {0:off?,1:on} |
|hwConnect| HW connected | {0:off?,1:on} |
|errorCodeNum| Error code | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|batteryPercentage|0 | 100 | % | 1 |  Battery SOC |
|outputPower|0 | 7200 | W | 1 |  Output power |
|emsBatTemp|0 | 80 | °C | 1 |  EMS battery temperature |
|lcdInputWatts|0 | 7200 | W | 1 |  Input power (LCD) |
|pvChargeWatts|0 | 5600 | W | 1 |  Charge power |
|pvLowChargeWatts|0 | 1600 | W | 1 |  Low charge power |
|pvHeightChargeWatts|0 | 4000 | W | 1 |  High charge power |


### string

| State  |  Name |
|----------|------|
|oilPackNum| Oil pack# |
|multPackNum| Multo pack# |

## DeltaPro1Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|isConnect| Device connected | {0:off?,1:on?} |
|isAcOpen| AC switch open | {0:off?,1:on?} |
|pvInsertState| Insert state | {0:off?,1:on?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|batterySoc|0 | 100 | % | 1 |  Battery SOC |
|fullCap|0 | 80000 | mAh | 1 |  Full capacity |
|ratePower|0 | 7200 | W | 1 |  Rated power |
|outputPower|0 | 7200 | W | 1 |  Output power |
|emsBatTemp|0 | 80 | °C | 1 |  EMS battery temperature |
|lcdInputWatts|0 | 7200 | W | 1 |  Input power (LCD) |
|pvLowChargeWatts|0 | 1600 | W | 1 |  Low charge power |
|chargeTime|0 | 15999 | min | 1 |  Charge time |
|dischargeTime|0 | 15999 | min | 1 |  Discharge time |


## DeltaPro2Info

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|isConnect| Device connected | {0:off?,1:on?} |
|isAcOpen| AC switch open | {0:off?,1:on?} |
|pvInsertState| Insert state | {0:off?,1:on?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|batterySoc|0 | 100 | % | 1 |  Battery SOC |
|fullCap|0 | 80000 | mAh | 1 |  Full capacity |
|ratePower|0 | 7200 | W | 1 |  Rated power |
|outputPower|0 | 7200 | W | 1 |  Output power |
|emsBatTemp|0 | 80 | °C | 1 |  EMS battery temperature |
|lcdInputWatts|0 | 7200 | W | 1 |  Input power (LCD) |
|pvLowChargeWatts|0 | 1600 | W | 1 |  Low charge power |
|chargeTime|0 | 15999 | min | 1 |  Charge time |
|dischargeTime|0 | 15999 | min | 1 |  Discharge time |


## loadIncreInfo

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|midPriorityDischargeTime|0 | 15499 | min | 1 |  midPriorityDischargeTime |
|highPriorityDischargeTime|0 | 15499 | min | 1 |  highPriorityDischargeTime: |
|ch1Info_linkCh|0 | 12 |  | 1 |  Split channel number #1 |
|ch1Info_setAmp|0 | 30 | A | 1 |  Current setting #1 |
|ch1Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #1 |
|ch2Info_linkCh|0 | 12 |  | 1 |  Split channel number #2 |
|ch2Info_setAmp|0 | 30 | A | 1 |  Current setting #2 |
|ch2Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #2 |
|ch3Info_linkCh|0 | 12 |  | 1 |  Split channel number #3 |
|ch3Info_setAmp|0 | 30 | A | 1 |  Current setting #3 |
|ch3Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #3 |
|ch4Info_linkCh|0 | 12 |  | 1 |  Split channel number #4 |
|ch4Info_setAmp|0 | 30 | A | 1 |  Current setting #4 |
|ch4Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #4 |
|ch5Info_linkCh|0 | 12 |  | 1 |  Split channel number #5 |
|ch5Info_setAmp|0 | 30 | A | 1 |  Current setting #5 |
|ch5Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #5 |
|ch6Info_linkCh|0 | 12 |  | 1 |  Split channel number #6 |
|ch6Info_setAmp|0 | 30 | A | 1 |  Current setting #6 |
|ch6Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #6 |
|ch7Info_linkCh|0 | 12 |  | 1 |  Split channel number #7 |
|ch7Info_setAmp|0 | 30 | A | 1 |  Current setting #7 |
|ch7Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #7 |
|ch8Info_linkCh|0 | 12 |  | 1 |  Split channel number #8 |
|ch8Info_setAmp|0 | 30 | A | 1 |  Current setting #8 |
|ch8Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #8 |
|ch9Info_linkCh|0 | 12 |  | 1 |  Split channel number #9 |
|ch9Info_setAmp|0 | 30 | A | 1 |  Current setting #9 |
|ch9Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #9 |
|ch10Info_linkCh|0 | 12 |  | 1 |  Split channel number #10 |
|ch10Info_setAmp|0 | 30 | A | 1 |  Current setting #10 |
|ch10Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #10 |
|ch11Info_linkCh|0 | 12 |  | 1 |  Split channel number #11 |
|ch11Info_setAmp|0 | 30 | A | 1 |  Current setting #11 |
|ch11Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #11 |
|ch12Info_linkCh|0 | 12 |  | 1 |  Split channel number #12 |
|ch12Info_setAmp|0 | 30 | A | 1 |  Current setting #12 |
|ch12Info_loadRlyCnt|0 |  n/a |  | 1 |  Load relay count #12 |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|ch1Info_linkMark| Split status channel #1 | {0:Not be split?,1:Should be split?} |
|ch2Info_linkMark| Split status channel #2 | {0:Not be split?,1:Should be split?} |
|ch3Info_linkMark| Split status channel #3 | {0:Not be split?,1:Should be split?} |
|ch4Info_linkMark| Split status channel #4 | {0:Not be split?,1:Should be split?} |
|ch5Info_linkMark| Split status channel #5 | {0:Not be split?,1:Should be split?} |
|ch6Info_linkMark| Split status channel #6 | {0:Not be split?,1:Should be split?} |
|ch7Info_linkMark| Split status channel #7 | {0:Not be split?,1:Should be split?} |
|ch8Info_linkMark| Split status channel #8 | {0:Not be split?,1:Should be split?} |
|ch9Info_linkMark| Split status channel #9 | {0:Not be split?,1:Should be split?} |
|ch10Info_linkMark| Split status channel #10 | {0:Not be split?,1:Should be split?} |
|ch11Info_linkMark| Split status channel #11 | {0:Not be split?,1:Should be split?} |
|ch12Info_linkMark| Split status channel #12 | {0:Not be split?,1:Should be split?} |
|ch1Sta_loadSta| Channel #1 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch1Sta_ctrlMode| Channel #1 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch1Sta_noticeEnable| Channel #1 Notice enable | {0:off?,1:on?} |
|ch1Sta_noticeAction| Channel #1 Notice action | {0:OK?} |
|ch1Sta_loadChSwitchCause| Channel #1 Load switch cause | {0:OK?} |
|ch2Sta_loadSta| Channel #2 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch2Sta_ctrlMode| Channel #2 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch2Sta_noticeEnable| Channel #2 Notice enable | {0:off?,1:on?} |
|ch2Sta_noticeAction| Channel #2 Notice action | {0:OK?} |
|ch2Sta_loadChSwitchCause| Channel #2 Load switch cause | {0:OK?} |
|ch3Sta_loadSta| Channel #3 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch3Sta_ctrlMode| Channel #3 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch3Sta_noticeEnable| Channel #3 Notice enable | {0:off?,1:on?} |
|ch3Sta_noticeAction| Channel #3 Notice action | {0:OK?} |
|ch3Sta_loadChSwitchCause| Channel #3 Load switch cause | {0:OK?} |
|ch4Sta_loadSta| Channel #4 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch4Sta_ctrlMode| Channel #4 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch4Sta_noticeEnable| Channel #4 Notice enable | {0:off?,1:on?} |
|ch4Sta_noticeAction| Channel #4 Notice action | {0:OK?} |
|ch4Sta_loadChSwitchCause| Channel #4 Load switch cause | {0:OK?} |
|ch5Sta_loadSta| Channel #5 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch5Sta_ctrlMode| Channel #5 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch5Sta_noticeEnable| Channel #5 Notice enable | {0:off?,1:on?} |
|ch5Sta_noticeAction| Channel #5 Notice action | {0:OK?} |
|ch5Sta_loadChSwitchCause| Channel #5 Load switch cause | {0:OK?} |
|ch6Sta_loadSta| Channel #6 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch6Sta_ctrlMode| Channel #6 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch6Sta_noticeEnable| Channel #6 Notice enable | {0:off?,1:on?} |
|ch6Sta_noticeAction| Channel #6 Notice action | {0:OK?} |
|ch6Sta_loadChSwitchCause| Channel #6 Load switch cause | {0:OK?} |
|ch7Sta_loadSta| Channel #7 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch7Sta_ctrlMode| Channel #7 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch7Sta_noticeEnable| Channel #7 Notice enable | {0:off?,1:on?} |
|ch7Sta_noticeAction| Channel #7 Notice action | {0:OK?} |
|ch7Sta_loadChSwitchCause| Channel #7 Load switch cause | {0:OK?} |
|ch8Sta_loadSta| Channel #8 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch8Sta_ctrlMode| Channel #8 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch8Sta_noticeEnable| Channel #8 Notice enable | {0:off?,1:on?} |
|ch8Sta_noticeAction| Channel #8 Notice action | {0:OK?} |
|ch8Sta_loadChSwitchCause| Channel #8 Load switch cause | {0:OK?} |
|ch9Sta_loadSta| Channel #9 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch9Sta_ctrlMode| Channel #9 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch9Sta_noticeEnable| Channel #9 Notice enable | {0:off?,1:on?} |
|ch9Sta_noticeAction| Channel #9 Notice action | {0:OK?} |
|ch9Sta_loadChSwitchCause| Channel #9 Load switch cause | {0:OK?} |
|ch10Sta_loadSta| Channel #10 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch10Sta_ctrlMode| Channel #10 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch10Sta_noticeEnable| Channel #10 Notice enable | {0:off?,1:on?} |
|ch10Sta_noticeAction| Channel #10 Notice action | {0:OK?} |
|ch10Sta_loadChSwitchCause| Channel #10 Load switch cause | {0:OK?} |
|ch11Sta_loadSta| Channel #11 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch11Sta_ctrlMode| Channel #11 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch11Sta_noticeEnable| Channel #11 Notice enable | {0:off?,1:on?} |
|ch11Sta_noticeAction| Channel #11 Notice action | {0:OK?} |
|ch11Sta_loadChSwitchCause| Channel #11 Load switch cause | {0:OK?} |
|ch12Sta_loadSta| Channel #12 power supply type | {0:Grid supply,1:storage power supply,2:close} |
|ch12Sta_ctrlMode| Channel #12 contol mode  0-Auto/1-Manual | {0:Auto,1:Manual,2:failure} |
|ch12Sta_noticeEnable| Channel #12 Notice enable | {0:off?,1:on?} |
|ch12Sta_noticeAction| Channel #12 Notice action | {0:OK?} |
|ch12Sta_loadChSwitchCause| Channel #12 Load switch cause | {0:OK?} |

### string

| State  |  Name |
|----------|------|
|ch1Info_chName| Channel name #1 |
|ch2Info_chName| Channel name #2 |
|ch3Info_chName| Channel name #3 |
|ch4Info_chName| Channel name #4 |
|ch5Info_chName| Channel name #5 |
|ch6Info_chName| Channel name #6 |
|ch7Info_chName| Channel name #7 |
|ch8Info_chName| Channel name #8 |
|ch9Info_chName| Channel name #9 |
|ch10Info_chName| Channel name #10 |
|ch11Info_chName| Channel name #11 |
|ch12Info_chName| Channel name #12 |
|ch1Sta_noticeSetTime| Channel #1 notice set time |
|ch2Sta_noticeSetTime| Channel #2 notice set time |
|ch3Sta_noticeSetTime| Channel #3 notice set time |
|ch4Sta_noticeSetTime| Channel #4 notice set time |
|ch5Sta_noticeSetTime| Channel #5 notice set time |
|ch6Sta_noticeSetTime| Channel #6 notice set time |
|ch7Sta_noticeSetTime| Channel #7 notice set time |
|ch8Sta_noticeSetTime| Channel #8 notice set time |
|ch9Sta_noticeSetTime| Channel #9 notice set time |
|ch10Sta_noticeSetTime| Channel #10 notice set time |
|ch11Sta_noticeSetTime| Channel #11 notice set time |
|ch12Sta_noticeSetTime| Channel #12 notice set time |

## masterIncreInfo

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|gridSta| Grid status | {0:Grid volt. not detected,1:Grid OK,2:Grid overvolt./overfreq} |
|masterRlyErrFlg| Master Relay Error Flag | {0:OK?,1:Error?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|gridVol|0 | 250 | V | 1 |  Grid volatge |
|masterRly1Cnt|0 |  n/a |  | 1 |  Master Relay1 count |
|masterRly2Cnt|0 |  n/a |  | 1 |  Master Relay2 count |
|masterRly3Cnt|0 |  n/a |  | 1 |  Master Relay3 count |
|masterRly4Cnt|0 |  n/a |  | 1 |  Master Relay4 count |
|backupVol_L1SafeData|0 | 250 | V | 1 |  backupVol_L1SafeData |
|backupVol_L2SafeData|0 | 250 | V | 1 |  backupVol_L2SafeData |
|backupPhaseDiffSafeData|0 | 65535 |  | 1 |  backupPhaseDiffSafeData |
|loadVol_L1SafeData|0 | 250 | V | 1 |  loadVol_L1SafeData |
|loadVol_L2SafeData|0 | 250 | V | 1 |  loadVol_L2SafeData |
|loadPhaseDiffSafeData|0 | 65535 |  | 1 |  loadPhaseDiffSafeData |
|masterVol_L1SafeData|0 | 250 | V | 1 |  masterVol_L1SafeData |
|masterVol_L2SafeData|0 | 250 | V | 1 |  masterVol_L2SafeData |
|masterPhaseDiffSafeData|0 | 65535 |  | 1 |  masterPhaseDiffSafeData |


## LoadStrategyCfg

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|isCfg| Is config | {0:Config pending?,1:Config done?} |
|loadIsEnable1| Channel #1 load status | {0:off,1:on} |
|loadIsEnable2| Channel #2 load status | {0:off,1:on} |
|loadIsEnable3| Channel #3 load status | {0:off,1:on} |
|loadIsEnable4| Channel #4 load status | {0:off,1:on} |
|loadIsEnable5| Channel #5 load status | {0:off,1:on} |
|loadIsEnable6| Channel #6 load status | {0:off,1:on} |
|loadIsEnable7| Channel #7 load status | {0:off,1:on} |
|loadIsEnable8| Channel #8 load status | {0:off,1:on} |
|loadIsEnable9| Channel #9 load status | {0:off,1:on} |
|loadIsEnable10| Channel #10 load status | {0:off,1:on} |
|loadIsEnable11| Channel #11 load status | {0:off,1:on} |
|loadIsEnable12| Channel #12 load status | {0:off,1:on} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|midPriorityChDischargeLow|0 | 30 | % | 1 |  midPriorityChDischargeLow |
|loadPriority1|0 |  n/a |  | 1 |  Channel #1 load priority |
|loadPriority2|0 |  n/a |  | 1 |  Channel #2 load priority |
|loadPriority3|0 |  n/a |  | 1 |  Channel #3 load priority |
|loadPriority4|0 |  n/a |  | 1 |  Channel #4 load priority |
|loadPriority5|0 |  n/a |  | 1 |  Channel #5 load priority |
|loadPriority6|0 |  n/a |  | 1 |  Channel #6 load priority |
|loadPriority7|0 |  n/a |  | 1 |  Channel #7 load priority |
|loadPriority8|0 |  n/a |  | 1 |  Channel #8 load priority |
|loadPriority9|0 |  n/a |  | 1 |  Channel #9 load priority |
|loadPriority10|0 |  n/a |  | 1 |  Channel #10 load priority |
|loadPriority11|0 |  n/a |  | 1 |  Channel #11 load priority |
|loadPriority12|0 |  n/a |  | 1 |  Channel #12 load priority |


## loadCurrent

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
|cur_10|0 | 30 | A | 1 |  Channel #11 current |
|cur_11|0 | 30 | A | 1 |  Channel #12 current |
|sumCur|0 | 30 | A | 1 |  Total Load Current |


## loadPower

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
|chWatt_10|0 | 3600 | W | 1 |  Power channel #11 |
|chWatt_11|0 | 3600 | W | 1 |  Power channel #12 |
|sumWatt|0 | 10000 | W | 1 |  Total Load Power |


