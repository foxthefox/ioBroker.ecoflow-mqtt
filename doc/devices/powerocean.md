# States for  POWEROCEAN
### version: 1.0.5

[statusReportBattery1](#statusReportBattery1)

[JTS1_ENERGY_STREAM_REPORT](#JTS1_ENERGY_STREAM_REPORT)

[JTS1_EMS_HEARTBEAT](#JTS1_EMS_HEARTBEAT)

[JTS1_EMS_CHANGE_REPORT](#JTS1_EMS_CHANGE_REPORT)



## statusReportBattery1

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 7000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpMaxCellVol|0 | 15 | V | 0.001 |  Battery maximum cell voltage |
|bpMinCellVol|0 | 15 | V | 0.001 |  Battery miniimum cell voltage |
|bpVol|0 | 60 | V | 1 |  Battery Voltage |
|bpAmp|0 | 60 | A | 1 |  Battery Current |
|bpBusVol|0 | 900 | V | 1 |  Bus voltage |
|bpCycles|0 |  n/a |  | 1 |  Battery cycles |
|bpHvMosTemp|0 | 90 | °C | 1 |  High voltage Mos temperature |
|bpLvMosTemp|0 | 90 | °C | 1 |  Low voltage Mos temparature |
|bpPtcTemp|0 | 90 | °C | 1 |  PTC temperature |
|bpHtsTemp|0 | 60 | °C | 1 |  Hts temperature |
|bpBusNegTemp|0 | 90 | °C | 1 |  Bus neg. temperature |
|bpBusPosTemp|0 | 90 | °C | 1 |  Bus pos. temperature |
|bpEnvTemp|0 | 90 | °C | 1 |  Env. temperature |
|bpAccuChgCap|0 | 7500000 | mAh | 0.01 |  Accu charge capacity |
|bpAccuDsgCap|0 | 7500000 | mAh | 0.01 |  Accu discharge capacity |
|bpDesignCap|0 | 110000 | mAh | 1 |  Design cpapcity |
|bpFullCap|0 | 110000 | mAh | 1 |  Full capacity |
|bpMaxCellTemp|0 | 80 | °C | 1 |  Battery maximum cell temperature |
|bpMinCellTemp|0 | 80 | °C | 1 |  Battery minimum cell temperature |
|bpMaxMosTemp|0 | 90 | °C | 1 |  Maximum Mos temperature |
|bpMinMosTemp|0 | 90 | °C | 1 |  Minimum Mos temperature |
|bpEcloundSoc|0 | 100 | % | 1 |  EcloundSoc |
|bpRealSoc|0 | 100 | % | 1 |  Real SOC |
|bpRealSoh|0 | 110 | % | 1 |  REAL SOH |
|bpDownLimitSoc|0 | 30 | % | 1 |  Discharge limit SOC |
|bpUpLimitSoc|60 | 100 | % | 1 |  Charge limit SOC |
|bpChgSop|0 | 100 | % | 1 |  ChgSop |
|bpDsgSop|0 | 100 | % | 1 |  DsgSop |
|bpRemainWatth|0 | 7000 | Wh | 1 |  Remain energy |
|bpTargetSoc|0 | 100 | % | 1 |  Target SOC |
|bpDiffSoc|0 | 100 | % | 1 |  Diff. SOC |
|bpMaxSoc|0 | 100 | % | 1 |  Maximum SOC |
|bpMinSoc|0 | 100 | % | 1 |  Minimum SOC |
|bpLimitSoc|0 | 100 | % | 1 |  Limit SOC |
|bpCalendarSoh|0 | 100 | % | 1 |  Calendar SOH |
|bpCycleSoh|0 | 100 | % | 1 |  Cycle SOH |
|bpAccuChgEnergy|0 |  n/a | kWh | 0.01 |  Accu Charged energy |
|bpAccuDsgEnergy|0 |  n/a | kWh | 0.01 |  Accu Discharged energy |
|bpPtcTemp2|0 | 90 | °C | 1 |  PTC temperature 2 |


### array

| State  |  Name |
|----------|------|
|bpTemp| Battery tremperatures |
|bpCellVol| Battery Cell voltages |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bpRunSta| Baattery Run Status | {1:RUNSTA_RUN} |
|bpErrCode| Battery Error Code | {0:OK?} |
|bpDsrc| bpDsrc | {0:OK?,1:1?,2:2?} |
|bpBalanceState| Balance state | {0:OK?} |
|bpBmsFault| BMS fault | {0:OK?} |
|bpGlobalProtect| Global Protect | {0:OK?} |
|bpActiveCalReqStat| Active Cal. request status | {0:OK?} |
|bpActiveCalRunStat| active Cal. run status | {0:OK?} |
|moduleProgramSta| Module program start | {0:OK?} |
|bmsRunSta| Running status | {1:PB_BMS_STATE_NORMAL} |
|bmsChgDsgSta| Charge/Discharge status | {0:PB_DSG_STATE} |
|dabModSta| dabModSta | {0:PB_MOD_STA_NORMAL} |
|bpAcRechargeFlag| AC recharge flag | {0:no AC recharge,1:AC recharge} |
|bpPtcHeatFlag| PTC heat flag | {0:OK?} |
|bpPtcExitEvent| PTC Exit event | {0:PB_PTC_OT_STATE} |
|bpSysState| Syste state | {2:NORMAL_STATE} |

### string

| State  |  Name |
|----------|------|
|bpSn| Battery serial number |
|bpHeartbeatVer| Heartbeat version |
|bpTimestamp| Timestamp |
|moduleProductInfo| Module product info |
|moduleAplSwVer| Module Aplication SW version |
|moduleLoaderSwVer| Module Loader SW version |

## JTS1_ENERGY_STREAM_REPORT

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|sysLoadPwr|0 | 15000 | W | 1 |  System load |
|sysGridPwr|0 | 15000 | W | 1 |  Grid power |
|mpptPwr|0 | 5000 | W | 1 |  Solar power |
|bpPwr|0 | 5200 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |


## JTS1_EMS_HEARTBEAT

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|pcsAPhase_volt|0 | 250 | V | 1 |  Phase A voltage |
|pcsAPhase_amp|0 | 20 | A | 1 |  Phase A current |
|pcsAPhase_actPwr|-2000 | 5000 | W | 1 |  Phase A active power |
|pcsAPhase_reactPwr|-1000 | 5000 | VAr | 1 |  Phase A reactive power |
|pcsAPhase_apparentPwr|0 | 5000 | VA | 1 |  Phase A apparent power |
|pcsBPhase_volt|0 | 250 | V | 1 |  Phase B voltage |
|pcsBPhase_amp|0 | 20 | A | 1 |  Phase B current |
|pcsBPhase_actPwr|-2000 | 5000 | W | 1 |  Phase B active power |
|pcsBPhase_reactPwr|-1000 | 15000 | VAr | 1 |  Phase B reactive power |
|pcsBPhase_apparentPwr|0 | 5000 | VA | 1 |  Phase B apparent power |
|pcsCPhase_volt|0 | 250 | V | 1 |  Phase C voltage |
|pcsCPhase_amp|0 | 20 | A | 1 |  Phase C current |
|pcsCPhase_actPwr|-2000 | 5000 | W | 1 |  Phase C active power |
|pcsCPhase_reactPwr|-1000 | 5000 | VAr | 1 |  Phase C reactive power |
|pcsCPhase_apparentPwr|0 | 5000 | VA | 1 |  Phase C apparent power |
|mpptHeartBeat_mpptPv_vol0|0 | 1000 | V | 1 |  Solar 1 voltage |
|mpptHeartBeat_mpptPv_vol1|0 | 1000 | V | 1 |  Solar 2 voltage |
|mpptHeartBeat_mpptPv_amp0|0 | 21 | A | 1 |  Solar 1 current |
|mpptHeartBeat_mpptPv_amp1|0 | 21 | A | 1 |  Solar 2 current |
|mpptHeartBeat_mpptPv_pwr0|0 | 5000 | W | 1 |  Solar 1 power |
|mpptHeartBeat_mpptPv_pwr1|0 | 5000 | W | 1 |  Solar 2 power |
|mpptHeartBeat_mpptInsResist|0 | 1000 |  | 1 |  MPPT insulation resistance |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|mpptHeartBeat_mpptPv_lightSta0| Solar 1 state | {0:disabled?,1:OK?} |
|mpptHeartBeat_mpptPv_lightSta1| Solar 2 state | {0:disabled?,1:OK?} |

### array

| State  |  Name |
|----------|------|
|mpptHeartBeat_mpptTempVal| MPPT temperature values |

## JTS1_EMS_CHANGE_REPORT

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpTotalChgEnergy|0 |  n/a | kWh | 0.001 |  Battery total energy charged |
|bpTotalDsgEnergy|0 |  n/a | kWh | 0.001 |  Battery total energy discharged |


