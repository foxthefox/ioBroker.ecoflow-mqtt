# States for  POWEROCEANPLUS
### version: 1.4.8

[statusReportBattery1](#statusReportBattery1)

[statusReportBattery2](#statusReportBattery2)

[statusReportBattery3](#statusReportBattery3)

[statusReportBattery4](#statusReportBattery4)

[statusReportBattery5](#statusReportBattery5)

[statusReportBattery6](#statusReportBattery6)

[JTS1_ENERGY_STREAM_REPORT](#JTS1_ENERGY_STREAM_REPORT)

[JTS1_EMS_HEARTBEAT](#JTS1_EMS_HEARTBEAT)

[JTS1_EMS_CHANGE_REPORT](#JTS1_EMS_CHANGE_REPORT)

[EVChargingParamReport](#EVChargingParamReport)

[HRChargingParamReport](#HRChargingParamReport)

[HeatingRodEnergyStreamShow](#HeatingRodEnergyStreamShow)



## statusReportBattery1

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 7000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpSop|0 | 100 | % | 1 |  Battery SOP |
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
|bpRealSoc|0 | 100 | % | 1 |  Real SOC |
|bpRealSoh|0 | 110 | % | 1 |  REAL SOH |
|bpDownLimitSoc|0 | 30 | % | 1 |  Discharge limit SOC |
|bpUpLimitSoc|60 | 100 | % | 1 |  Charge limit SOC |
|bpChgSop|0 | 100 | % | 1 |  ChgSop |
|bpDsgSop|0 | 100 | % | 1 |  DsgSop |
|bpRemainWatth|0 | 7000 | Wh | 1 |  Remain energy |
|bpTargetSoc|0 | 101 | % | 1 |  Target SOC |
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
|bpRunSta| Baattery Run Status | {0:RUNSTA_STANDBY,1:RUNSTA_RUN,2:RUNSTA_STOP} |
|bpErrCode| Battery Error Code | {0:OK?} |
|bpBalanceState| Balance state | {0:OK?} |
|bpBmsFault| BMS fault | {0:OK?} |
|bpGlobalProtect| Global Protect | {0:OK?} |
|bpActiveCalReqStat| Active Cal. request status | {0:OK?} |
|bpActiveCalRunStat| active Cal. run status | {0:OK?} |
|moduleProgramSta| Module program start | {0:OK?} |
|bmsRunSta| Running status bms | {0:PB_BMS_STATE_SHUTDOWN,1:PB_BMS_STATE_NORMAL,2:PB_BMS_STATE_CHARGEABLE,3:PB_BMS_STATE_DISCHARGEABLE,4:PB_BMS_STATE_FAULT} |
|bmsChgDsgSta| Charge/Discharge status | {0:PB_STANDBY_STATE ,1:PB_DSG_STATE,2:PB_CHG_STATE} |
|dabModSta| dabModSta | {0:PB_MOD_STA_NORMAL,1:PB_MOD_STA_WARNNING,3:PB_MOD_STA_FAULT} |
|bpAcRechargeFlag| AC recharge flag | {0:no AC recharge,1:AC recharge} |
|bpPtcHeatFlag| PTC heat flag | {0:OK?} |
|bpPtcExitEvent| PTC Exit event | {0:PB_PTC_OT_STATE,1:HEAT_EVENT_TEMP_OK,2:HEAT_EVENT_ABNORMAL,3:HEAT_EVENT_TEMP_DIFF,4:HEAT_EVENT_BMS_FAULT,5:HEAT_EVENT_OVERTIME,6:HEAT_EVENT_CHG_DISABLE,7:HEAT_EVENT_POWER_LOW,8:HEAT_EVENT_AB_DSG,9:HEAT_EVENT_DSG_SOC_LOW,10:HEAT_EVENT_DSG_VOL_LOW,11:HEAT_EVENT_DSG_DISABLE,12:HEAT_EVENT_AFE_FAULT,13:HEAT_EVENT_FTOP_FAULT,14:HEAT_EVENT_FVOP_FAULT,15:HEAT_EVENT_PWR_FAULT,16:HEAT_EVENT_PTC_SC,17:HEAT_EVENT_MOS_SC,18:HEAT_EVENT_PTC_TEMP_FAULT,19:HEAT_EVENT_PTC_TEMP_SOT} |
|bpSysState| Syste state | {0:PRE_POWER_ON_STATE,1:CFM_POWER_ON_STATE,2:NORMAL_STATE,3:POWER_OFF_STATE,4:SLEEP_STATE} |

### string

| State  |  Name |
|----------|------|
|bpDsrc| bpDsrc |
|bpSn| Battery serial number |
|bpEcloundSoc| Eclound Soc |
|bpHeartbeatVer| Heartbeat version |
|bpTimestamp| Timestamp |
|moduleProductInfo| Module product info |
|moduleAplSwVer| Module Aplication SW version |
|moduleLoaderSwVer| Module Loader SW version |

## statusReportBattery2

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 7000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpSop|0 | 100 | % | 1 |  Battery SOP |
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
|bpRealSoc|0 | 100 | % | 1 |  Real SOC |
|bpRealSoh|0 | 110 | % | 1 |  REAL SOH |
|bpDownLimitSoc|0 | 30 | % | 1 |  Discharge limit SOC |
|bpUpLimitSoc|60 | 100 | % | 1 |  Charge limit SOC |
|bpChgSop|0 | 100 | % | 1 |  ChgSop |
|bpDsgSop|0 | 100 | % | 1 |  DsgSop |
|bpRemainWatth|0 | 7000 | Wh | 1 |  Remain energy |
|bpTargetSoc|0 | 101 | % | 1 |  Target SOC |
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
|bpRunSta| Baattery Run Status | {0:RUNSTA_STANDBY,1:RUNSTA_RUN,2:RUNSTA_STOP} |
|bpErrCode| Battery Error Code | {0:OK?} |
|bpBalanceState| Balance state | {0:OK?} |
|bpBmsFault| BMS fault | {0:OK?} |
|bpGlobalProtect| Global Protect | {0:OK?} |
|bpActiveCalReqStat| Active Cal. request status | {0:OK?} |
|bpActiveCalRunStat| active Cal. run status | {0:OK?} |
|moduleProgramSta| Module program start | {0:OK?} |
|bmsRunSta| Running status bms | {0:PB_BMS_STATE_SHUTDOWN,1:PB_BMS_STATE_NORMAL,2:PB_BMS_STATE_CHARGEABLE,3:PB_BMS_STATE_DISCHARGEABLE,4:PB_BMS_STATE_FAULT} |
|bmsChgDsgSta| Charge/Discharge status | {0:PB_STANDBY_STATE ,1:PB_DSG_STATE,2:PB_CHG_STATE} |
|dabModSta| dabModSta | {0:PB_MOD_STA_NORMAL,1:PB_MOD_STA_WARNNING,3:PB_MOD_STA_FAULT} |
|bpAcRechargeFlag| AC recharge flag | {0:no AC recharge,1:AC recharge} |
|bpPtcHeatFlag| PTC heat flag | {0:OK?} |
|bpPtcExitEvent| PTC Exit event | {0:PB_PTC_OT_STATE,1:HEAT_EVENT_TEMP_OK,2:HEAT_EVENT_ABNORMAL,3:HEAT_EVENT_TEMP_DIFF,4:HEAT_EVENT_BMS_FAULT,5:HEAT_EVENT_OVERTIME,6:HEAT_EVENT_CHG_DISABLE,7:HEAT_EVENT_POWER_LOW,8:HEAT_EVENT_AB_DSG,9:HEAT_EVENT_DSG_SOC_LOW,10:HEAT_EVENT_DSG_VOL_LOW,11:HEAT_EVENT_DSG_DISABLE,12:HEAT_EVENT_AFE_FAULT,13:HEAT_EVENT_FTOP_FAULT,14:HEAT_EVENT_FVOP_FAULT,15:HEAT_EVENT_PWR_FAULT,16:HEAT_EVENT_PTC_SC,17:HEAT_EVENT_MOS_SC,18:HEAT_EVENT_PTC_TEMP_FAULT,19:HEAT_EVENT_PTC_TEMP_SOT} |
|bpSysState| Syste state | {0:PRE_POWER_ON_STATE,1:CFM_POWER_ON_STATE,2:NORMAL_STATE,3:POWER_OFF_STATE,4:SLEEP_STATE} |

### string

| State  |  Name |
|----------|------|
|bpDsrc| bpDsrc |
|bpSn| Battery serial number |
|bpEcloundSoc| Eclound Soc |
|bpHeartbeatVer| Heartbeat version |
|bpTimestamp| Timestamp |
|moduleProductInfo| Module product info |
|moduleAplSwVer| Module Aplication SW version |
|moduleLoaderSwVer| Module Loader SW version |

## statusReportBattery3

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 7000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpSop|0 | 100 | % | 1 |  Battery SOP |
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
|bpRealSoc|0 | 100 | % | 1 |  Real SOC |
|bpRealSoh|0 | 110 | % | 1 |  REAL SOH |
|bpDownLimitSoc|0 | 30 | % | 1 |  Discharge limit SOC |
|bpUpLimitSoc|60 | 100 | % | 1 |  Charge limit SOC |
|bpChgSop|0 | 100 | % | 1 |  ChgSop |
|bpDsgSop|0 | 100 | % | 1 |  DsgSop |
|bpRemainWatth|0 | 7000 | Wh | 1 |  Remain energy |
|bpTargetSoc|0 | 101 | % | 1 |  Target SOC |
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
|bpRunSta| Baattery Run Status | {0:RUNSTA_STANDBY,1:RUNSTA_RUN,2:RUNSTA_STOP} |
|bpErrCode| Battery Error Code | {0:OK?} |
|bpBalanceState| Balance state | {0:OK?} |
|bpBmsFault| BMS fault | {0:OK?} |
|bpGlobalProtect| Global Protect | {0:OK?} |
|bpActiveCalReqStat| Active Cal. request status | {0:OK?} |
|bpActiveCalRunStat| active Cal. run status | {0:OK?} |
|moduleProgramSta| Module program start | {0:OK?} |
|bmsRunSta| Running status bms | {0:PB_BMS_STATE_SHUTDOWN,1:PB_BMS_STATE_NORMAL,2:PB_BMS_STATE_CHARGEABLE,3:PB_BMS_STATE_DISCHARGEABLE,4:PB_BMS_STATE_FAULT} |
|bmsChgDsgSta| Charge/Discharge status | {0:PB_STANDBY_STATE ,1:PB_DSG_STATE,2:PB_CHG_STATE} |
|dabModSta| dabModSta | {0:PB_MOD_STA_NORMAL,1:PB_MOD_STA_WARNNING,3:PB_MOD_STA_FAULT} |
|bpAcRechargeFlag| AC recharge flag | {0:no AC recharge,1:AC recharge} |
|bpPtcHeatFlag| PTC heat flag | {0:OK?} |
|bpPtcExitEvent| PTC Exit event | {0:PB_PTC_OT_STATE,1:HEAT_EVENT_TEMP_OK,2:HEAT_EVENT_ABNORMAL,3:HEAT_EVENT_TEMP_DIFF,4:HEAT_EVENT_BMS_FAULT,5:HEAT_EVENT_OVERTIME,6:HEAT_EVENT_CHG_DISABLE,7:HEAT_EVENT_POWER_LOW,8:HEAT_EVENT_AB_DSG,9:HEAT_EVENT_DSG_SOC_LOW,10:HEAT_EVENT_DSG_VOL_LOW,11:HEAT_EVENT_DSG_DISABLE,12:HEAT_EVENT_AFE_FAULT,13:HEAT_EVENT_FTOP_FAULT,14:HEAT_EVENT_FVOP_FAULT,15:HEAT_EVENT_PWR_FAULT,16:HEAT_EVENT_PTC_SC,17:HEAT_EVENT_MOS_SC,18:HEAT_EVENT_PTC_TEMP_FAULT,19:HEAT_EVENT_PTC_TEMP_SOT} |
|bpSysState| Syste state | {0:PRE_POWER_ON_STATE,1:CFM_POWER_ON_STATE,2:NORMAL_STATE,3:POWER_OFF_STATE,4:SLEEP_STATE} |

### string

| State  |  Name |
|----------|------|
|bpDsrc| bpDsrc |
|bpSn| Battery serial number |
|bpEcloundSoc| Eclound Soc |
|bpHeartbeatVer| Heartbeat version |
|bpTimestamp| Timestamp |
|moduleProductInfo| Module product info |
|moduleAplSwVer| Module Aplication SW version |
|moduleLoaderSwVer| Module Loader SW version |

## statusReportBattery4

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 7000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpSop|0 | 100 | % | 1 |  Battery SOP |
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
|bpRealSoc|0 | 100 | % | 1 |  Real SOC |
|bpRealSoh|0 | 110 | % | 1 |  REAL SOH |
|bpDownLimitSoc|0 | 30 | % | 1 |  Discharge limit SOC |
|bpUpLimitSoc|60 | 100 | % | 1 |  Charge limit SOC |
|bpChgSop|0 | 100 | % | 1 |  ChgSop |
|bpDsgSop|0 | 100 | % | 1 |  DsgSop |
|bpRemainWatth|0 | 7000 | Wh | 1 |  Remain energy |
|bpTargetSoc|0 | 101 | % | 1 |  Target SOC |
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
|bpRunSta| Baattery Run Status | {0:RUNSTA_STANDBY,1:RUNSTA_RUN,2:RUNSTA_STOP} |
|bpErrCode| Battery Error Code | {0:OK?} |
|bpBalanceState| Balance state | {0:OK?} |
|bpBmsFault| BMS fault | {0:OK?} |
|bpGlobalProtect| Global Protect | {0:OK?} |
|bpActiveCalReqStat| Active Cal. request status | {0:OK?} |
|bpActiveCalRunStat| active Cal. run status | {0:OK?} |
|moduleProgramSta| Module program start | {0:OK?} |
|bmsRunSta| Running status bms | {0:PB_BMS_STATE_SHUTDOWN,1:PB_BMS_STATE_NORMAL,2:PB_BMS_STATE_CHARGEABLE,3:PB_BMS_STATE_DISCHARGEABLE,4:PB_BMS_STATE_FAULT} |
|bmsChgDsgSta| Charge/Discharge status | {0:PB_STANDBY_STATE ,1:PB_DSG_STATE,2:PB_CHG_STATE} |
|dabModSta| dabModSta | {0:PB_MOD_STA_NORMAL,1:PB_MOD_STA_WARNNING,3:PB_MOD_STA_FAULT} |
|bpAcRechargeFlag| AC recharge flag | {0:no AC recharge,1:AC recharge} |
|bpPtcHeatFlag| PTC heat flag | {0:OK?} |
|bpPtcExitEvent| PTC Exit event | {0:PB_PTC_OT_STATE,1:HEAT_EVENT_TEMP_OK,2:HEAT_EVENT_ABNORMAL,3:HEAT_EVENT_TEMP_DIFF,4:HEAT_EVENT_BMS_FAULT,5:HEAT_EVENT_OVERTIME,6:HEAT_EVENT_CHG_DISABLE,7:HEAT_EVENT_POWER_LOW,8:HEAT_EVENT_AB_DSG,9:HEAT_EVENT_DSG_SOC_LOW,10:HEAT_EVENT_DSG_VOL_LOW,11:HEAT_EVENT_DSG_DISABLE,12:HEAT_EVENT_AFE_FAULT,13:HEAT_EVENT_FTOP_FAULT,14:HEAT_EVENT_FVOP_FAULT,15:HEAT_EVENT_PWR_FAULT,16:HEAT_EVENT_PTC_SC,17:HEAT_EVENT_MOS_SC,18:HEAT_EVENT_PTC_TEMP_FAULT,19:HEAT_EVENT_PTC_TEMP_SOT} |
|bpSysState| Syste state | {0:PRE_POWER_ON_STATE,1:CFM_POWER_ON_STATE,2:NORMAL_STATE,3:POWER_OFF_STATE,4:SLEEP_STATE} |

### string

| State  |  Name |
|----------|------|
|bpDsrc| bpDsrc |
|bpSn| Battery serial number |
|bpEcloundSoc| Eclound Soc |
|bpHeartbeatVer| Heartbeat version |
|bpTimestamp| Timestamp |
|moduleProductInfo| Module product info |
|moduleAplSwVer| Module Aplication SW version |
|moduleLoaderSwVer| Module Loader SW version |

## statusReportBattery5

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 7000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpSop|0 | 100 | % | 1 |  Battery SOP |
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
|bpRealSoc|0 | 100 | % | 1 |  Real SOC |
|bpRealSoh|0 | 110 | % | 1 |  REAL SOH |
|bpDownLimitSoc|0 | 30 | % | 1 |  Discharge limit SOC |
|bpUpLimitSoc|60 | 100 | % | 1 |  Charge limit SOC |
|bpChgSop|0 | 100 | % | 1 |  ChgSop |
|bpDsgSop|0 | 100 | % | 1 |  DsgSop |
|bpRemainWatth|0 | 7000 | Wh | 1 |  Remain energy |
|bpTargetSoc|0 | 101 | % | 1 |  Target SOC |
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
|bpRunSta| Baattery Run Status | {0:RUNSTA_STANDBY,1:RUNSTA_RUN,2:RUNSTA_STOP} |
|bpErrCode| Battery Error Code | {0:OK?} |
|bpBalanceState| Balance state | {0:OK?} |
|bpBmsFault| BMS fault | {0:OK?} |
|bpGlobalProtect| Global Protect | {0:OK?} |
|bpActiveCalReqStat| Active Cal. request status | {0:OK?} |
|bpActiveCalRunStat| active Cal. run status | {0:OK?} |
|moduleProgramSta| Module program start | {0:OK?} |
|bmsRunSta| Running status bms | {0:PB_BMS_STATE_SHUTDOWN,1:PB_BMS_STATE_NORMAL,2:PB_BMS_STATE_CHARGEABLE,3:PB_BMS_STATE_DISCHARGEABLE,4:PB_BMS_STATE_FAULT} |
|bmsChgDsgSta| Charge/Discharge status | {0:PB_STANDBY_STATE ,1:PB_DSG_STATE,2:PB_CHG_STATE} |
|dabModSta| dabModSta | {0:PB_MOD_STA_NORMAL,1:PB_MOD_STA_WARNNING,3:PB_MOD_STA_FAULT} |
|bpAcRechargeFlag| AC recharge flag | {0:no AC recharge,1:AC recharge} |
|bpPtcHeatFlag| PTC heat flag | {0:OK?} |
|bpPtcExitEvent| PTC Exit event | {0:PB_PTC_OT_STATE,1:HEAT_EVENT_TEMP_OK,2:HEAT_EVENT_ABNORMAL,3:HEAT_EVENT_TEMP_DIFF,4:HEAT_EVENT_BMS_FAULT,5:HEAT_EVENT_OVERTIME,6:HEAT_EVENT_CHG_DISABLE,7:HEAT_EVENT_POWER_LOW,8:HEAT_EVENT_AB_DSG,9:HEAT_EVENT_DSG_SOC_LOW,10:HEAT_EVENT_DSG_VOL_LOW,11:HEAT_EVENT_DSG_DISABLE,12:HEAT_EVENT_AFE_FAULT,13:HEAT_EVENT_FTOP_FAULT,14:HEAT_EVENT_FVOP_FAULT,15:HEAT_EVENT_PWR_FAULT,16:HEAT_EVENT_PTC_SC,17:HEAT_EVENT_MOS_SC,18:HEAT_EVENT_PTC_TEMP_FAULT,19:HEAT_EVENT_PTC_TEMP_SOT} |
|bpSysState| Syste state | {0:PRE_POWER_ON_STATE,1:CFM_POWER_ON_STATE,2:NORMAL_STATE,3:POWER_OFF_STATE,4:SLEEP_STATE} |

### string

| State  |  Name |
|----------|------|
|bpDsrc| bpDsrc |
|bpSn| Battery serial number |
|bpEcloundSoc| Eclound Soc |
|bpHeartbeatVer| Heartbeat version |
|bpTimestamp| Timestamp |
|moduleProductInfo| Module product info |
|moduleAplSwVer| Module Aplication SW version |
|moduleLoaderSwVer| Module Loader SW version |

## statusReportBattery6

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 7000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpSop|0 | 100 | % | 1 |  Battery SOP |
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
|bpRealSoc|0 | 100 | % | 1 |  Real SOC |
|bpRealSoh|0 | 110 | % | 1 |  REAL SOH |
|bpDownLimitSoc|0 | 30 | % | 1 |  Discharge limit SOC |
|bpUpLimitSoc|60 | 100 | % | 1 |  Charge limit SOC |
|bpChgSop|0 | 100 | % | 1 |  ChgSop |
|bpDsgSop|0 | 100 | % | 1 |  DsgSop |
|bpRemainWatth|0 | 7000 | Wh | 1 |  Remain energy |
|bpTargetSoc|0 | 101 | % | 1 |  Target SOC |
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
|bpRunSta| Baattery Run Status | {0:RUNSTA_STANDBY,1:RUNSTA_RUN,2:RUNSTA_STOP} |
|bpErrCode| Battery Error Code | {0:OK?} |
|bpBalanceState| Balance state | {0:OK?} |
|bpBmsFault| BMS fault | {0:OK?} |
|bpGlobalProtect| Global Protect | {0:OK?} |
|bpActiveCalReqStat| Active Cal. request status | {0:OK?} |
|bpActiveCalRunStat| active Cal. run status | {0:OK?} |
|moduleProgramSta| Module program start | {0:OK?} |
|bmsRunSta| Running status bms | {0:PB_BMS_STATE_SHUTDOWN,1:PB_BMS_STATE_NORMAL,2:PB_BMS_STATE_CHARGEABLE,3:PB_BMS_STATE_DISCHARGEABLE,4:PB_BMS_STATE_FAULT} |
|bmsChgDsgSta| Charge/Discharge status | {0:PB_STANDBY_STATE ,1:PB_DSG_STATE,2:PB_CHG_STATE} |
|dabModSta| dabModSta | {0:PB_MOD_STA_NORMAL,1:PB_MOD_STA_WARNNING,3:PB_MOD_STA_FAULT} |
|bpAcRechargeFlag| AC recharge flag | {0:no AC recharge,1:AC recharge} |
|bpPtcHeatFlag| PTC heat flag | {0:OK?} |
|bpPtcExitEvent| PTC Exit event | {0:PB_PTC_OT_STATE,1:HEAT_EVENT_TEMP_OK,2:HEAT_EVENT_ABNORMAL,3:HEAT_EVENT_TEMP_DIFF,4:HEAT_EVENT_BMS_FAULT,5:HEAT_EVENT_OVERTIME,6:HEAT_EVENT_CHG_DISABLE,7:HEAT_EVENT_POWER_LOW,8:HEAT_EVENT_AB_DSG,9:HEAT_EVENT_DSG_SOC_LOW,10:HEAT_EVENT_DSG_VOL_LOW,11:HEAT_EVENT_DSG_DISABLE,12:HEAT_EVENT_AFE_FAULT,13:HEAT_EVENT_FTOP_FAULT,14:HEAT_EVENT_FVOP_FAULT,15:HEAT_EVENT_PWR_FAULT,16:HEAT_EVENT_PTC_SC,17:HEAT_EVENT_MOS_SC,18:HEAT_EVENT_PTC_TEMP_FAULT,19:HEAT_EVENT_PTC_TEMP_SOT} |
|bpSysState| Syste state | {0:PRE_POWER_ON_STATE,1:CFM_POWER_ON_STATE,2:NORMAL_STATE,3:POWER_OFF_STATE,4:SLEEP_STATE} |

### string

| State  |  Name |
|----------|------|
|bpDsrc| bpDsrc |
|bpSn| Battery serial number |
|bpEcloundSoc| Eclound Soc |
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
|mpptPwr|0 | 20000 | W | 1 |  Solar power |
|bpPwr|0 | 20000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |


## JTS1_EMS_HEARTBEAT

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|pcsAPhase_volt|0 | 250 | V | 1 |  Phase A voltage |
|pcsAPhase_amp|0 | 20 | A | 1 |  Phase A current |
|pcsAPhase_actPwr|-5000 | 5000 | W | 1 |  Phase A active power |
|pcsAPhase_reactPwr|-1000 | 5000 | var | 1 |  Phase A reactive power |
|pcsAPhase_apparentPwr|0 | 5000 | VA | 1 |  Phase A apparent power |
|pcsBPhase_volt|0 | 250 | V | 1 |  Phase B voltage |
|pcsBPhase_amp|0 | 20 | A | 1 |  Phase B current |
|pcsBPhase_actPwr|-5000 | 5000 | W | 1 |  Phase B active power |
|pcsBPhase_reactPwr|-1000 | 15000 | var | 1 |  Phase B reactive power |
|pcsBPhase_apparentPwr|0 | 5000 | VA | 1 |  Phase B apparent power |
|pcsCPhase_volt|0 | 250 | V | 1 |  Phase C voltage |
|pcsCPhase_amp|0 | 20 | A | 1 |  Phase C current |
|pcsCPhase_actPwr|-5000 | 5000 | W | 1 |  Phase C active power |
|pcsCPhase_reactPwr|-1000 | 5000 | var | 1 |  Phase C reactive power |
|pcsCPhase_apparentPwr|0 | 5000 | VA | 1 |  Phase C apparent power |
|mpptHeartBeat_mpptPv_vol0|0 | 1000 | V | 1 |  Solar 1 voltage |
|mpptHeartBeat_mpptPv_vol1|0 | 1000 | V | 1 |  Solar 2 voltage |
|mpptHeartBeat_mpptPv_amp0|0 | 21 | A | 1 |  Solar 1 current |
|mpptHeartBeat_mpptPv_amp1|0 | 21 | A | 1 |  Solar 2 current |
|mpptHeartBeat_mpptPv_pwr0|0 | 5000 | W | 1 |  Solar 1 power |
|mpptHeartBeat_mpptPv_pwr1|0 | 5000 | W | 1 |  Solar 2 power |
|mpptHeartBeat_mpptInsResist|0 | 1000 |  | 1 |  MPPT insulation resistance |
|pcsLoadInfo_vol|0 | 410 | V | 1 |  load voltage |
|pcsLoadInfo_amp|0 | 35 | A | 1 |  load current |
|pcsLoadInfo_freq|0 | 65 | Hz | 1 |  load frequency |
|pcsLoadInfo_pwr|0 | 10000 | W | 1 |  load power |
|bpRemainWatth|0 |  n/a | kWh | 0.001 |  bp remain watth |
|bpDsgTime|0 |  n/a | min | 1 |  bp dsg time |
|pcsActPwr|0 | 20000 | W | 1 |  pcs act pwr |
|pcsAcFreq|0 | 65 | Hz | 1 |  pcs ac freq |
|pcsBusVolt|0 | 900 | V | 1 |  pcs bus volt |
|pcsLeakAmp|0 | 1000 | mA | 1 |  pcs leak amp |
|pcsBpPower|0 | 10000 | W | 1 |  pcs bp power |
|pcsBpPowerChgLimit|0 | 10000 | Wh | 1 |  pcs bp power chg limit |
|pcsPfcCurReal|0 | 10 | A | 1 |  pcs pfc cur real |
|pcsPfcCurRef|0 | 10 | A | 1 |  pcs pfc cur ref |
|pcsMeterPower|0 | 20000 | W | 1 |  pcs meter power |
|pcsAverageVoltage|0 | 900 | V | 1 |  pcs average voltage |
|pcsVgridThd|0 | 60 |  | 1 |  pcs vgrid thd |
|emsBusVolt|0 | 900 | V | 1 |  ems bus volt |
|emsBpPower|0 | 10000 | W | 1 |  ems bp power |
|emsBpChg|0 |  n/a | kWh | 0.001 |  ems bp chg |
|emsBpDsg|0 | 60 | kWh | 0.001 |  ems bp dsg |
|emsSelfUsedCnt|0 |  n/a |  | 1 |  ems self used cnt |
|emsAcMakeupMinSoc|0 | 100 | % | 1 |  ems ac makeup min soc |
|emsAcMakeupCnt|0 |  n/a |  | 1 |  ems ac makeup cnt |
|emsNtcTempMax|0 | 100 | °C | 1 |  ems ntc temp max |
|emsBusVoltRipple|0 | 60 | % | 1 |  ems bus volt ripple |
|emsPvInvPwr|0 | 7000 | W | 1 |  ems pv inv pwr |
|dcdcBpVol|0 | 900 | V | 1 |  dcdc bp vol |
|dcdcInductanceCurr|0 | 10 | A | 1 |  dcdc inductance curr |
|innerTemperature|0 | 100 | °C | 1 |  inner temperature |
|invRatedPower|0 | 7000 | W | 1 |  inv rated power |
|pcsBackupPwr|0 | 7000 | W | 1 |  pcs backup pwr |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|mpptHeartBeat_mpptPv_lightSta0| Solar 1 state | {0:disabled?,1:OK?} |
|mpptHeartBeat_mpptPv_lightSta1| Solar 2 state | {0:disabled?,1:OK?} |
|pcsCommInterfaceState| pcs comm interface state | {0:OK?} |
|emsMpptSelfcheckState| ems mppt selfcheck state | {0:OK?} |
|emsMpptStartupState| ems mppt startup state | {0:OK?} |
|emsBpSelfcheckState| ems bp selfcheck state | {0:OK?} |
|emsBpStartupState| ems bp startup state | {0:OK?} |
|emsPcsSelfcheckState| ems pcs selfcheck state | {0:OK?} |
|emsPcsStartupState| ems pcs startup state | {0:OK?} |
|emsStartFsmState| ems start fsm state | {0:OK?} |
|emsMpptRunState| ems mppt run state | {0:OK?} |
|emsMpptModStat| ems mppt mod stat | {0:OK?} |
|emsLpState| ems lp state | {0:OK?} |
|emsMpptHbState| ems mppt hb state | {0:OK?} |
|powerLimitMode| power limit mode | {0:off?,1:on?} |
|emsWorkMode| ems work mode | {0:SELFUSE,1:TOU,2:BACKUP,3:DBG,4:AC_MAKEUP,5:DRM_MODE,6:REMOTE_SCHED,7:STANDBY_MODE,8:SOC_CALIB,9:TIMER_MODE} |

### array

| State  |  Name |
|----------|------|
|mpptHeartBeat_mpptTempVal| MPPT temperature values |

### string

| State  |  Name |
|----------|------|
|meterHeartBeat_meterType0| meter type #0 |
|meterHeartBeat_meterAddr0| meter addr #0 |
|meterHeartBeat_meterData0| meter data #0 |
|meterHeartBeat_meterType1| meter type #1 |
|meterHeartBeat_meterAddr1| meter addr #1 |
|meterHeartBeat_meterData1| meter data #1 |
|rateCtrlSwtich| rate ctrl swtich |
|sysRateCtrlTime| sys rate ctrl time |
|duraTime| dura time |
|pcsDci| pcs dci |
|pcsDcv| pcs dcv |
|pcsVbusRef| pcs vbus ref |
|pcsActivePowerRef| pcs active power ref |
|pcsActivePowerLimitUp| pcs active power limit up |
|pcsActivePowerLimitDn| pcs active power limit dn |
|pcsRelayStateShow| pcs relay state show |
|pcsGridSafetyFuncRecord| pcs grid safety func record |
|pcsGridSafetyStateRecord| pcs grid safety state record |
|pcsGridInvErrorRms| pcs grid inv error rms |
|pcsReactivePowerRef| pcs reactive power ref |
|pcsInterruptOccupancyRate| pcs interrupt occupancy rate |
|emsActiveOffGridCmd| ems active off grid cmd |
|emsBpAliveNum| ems bp alive num |
|emsBpChgRequest| ems bp chg request |
|emsAcMakeupTriggleSoc| ems ac makeup triggle soc |
|emsAcMakeupExitSoc| ems ac makeup exit soc |
|emsStopCmd| ems stop cmd |
|emsSysCfg| ems sys cfg |
|emsLpType| ems lp type |
|emsLpMpptCnt| ems lp mppt cnt |
|emsLpBpCnt| ems lp bp cnt |
|emsLpStateFlag| ems lp state flag |
|emsSocCalibState| ems soc calib state |
|emsSocCalibRequest| ems soc calib request |
|emsBusVoltErrSlidFilter| ems bus volt err slid filter |
|mpptBusVolRef| mppt bus vol ref |
|dcdcBusVolRef| dcdc bus vol ref |
|dcdcStateRecord| dcdc state record |

## JTS1_EMS_CHANGE_REPORT

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|emsWorkMode| ems work mode | {0:SELFUSE,1:TOU,2:BACKUP,3:DBG,4:AC_MAKEUP,5:DRM_MODE,6:REMOTE_SCHED,7:STANDBY_MODE,8:SOC_CALIB,9:TIMER_MODE} |
|emsFeedMode| ems feed mode | {0:off?,1:on?} |
|emsSgRunStat| ems sg run stat | {0:OK?} |
|chgDsgMode| chg dsg mode | {0:off?,1:on?} |

### string

| State  |  Name |
|----------|------|
|emsBackupEvent| ems backup event |
|sysMeterCfg| sys meter cfg |
|sysTypeCfg| sys type cfg |
|rateCtrlSwtich| rate ctrl swtich |
|sysRateCtrlTime| sys rate ctrl time |
|duraTime| dura time |
|emsCtrlLedType| ems ctrl led type |
|emsCtrlLedBright| ems ctrl led bright |
|sysMulPeakSwitch| sys mul peak switch |
|sysMulPeakTime| sys mul peak time |
|emsSgReady| ems sg ready |
|emsSgReadyEn| ems sg ready en |
|userRole| user role |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|sysBatDsgDownLimit|0 | 100 | % | 1 |  sys bat dsg down limit |
|emsFeedRatio|0 | 100 | % | 1 |  ems feed ratio |
|emsFeedPwr|0 | 20000 | W | 1 |  ems feed pwr |
|chgDsgPwr|0 | 7000 | W | 1 |  chg dsg pwr |


## EVChargingParamReport

### string

| State  |  Name |
|----------|------|
|evSn| ev sn |
|onlineBits| online bits |
|evPlugAndPlay| ev plug and play |
|errorCode| error code |
|defaultVehicleId| default vehicle id |
|chargeVehicleId| charge vehicle id |
|useGridFirst| use grid first |
|unknown30| unknown30 |
|unknown31| unknown31 |
|unknown32| unknown32 |
|unknown33| unknown33 |
|unknown34| unknown34 |
|unknown35| unknown35 |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|expectChargingEnergy|0 | 150 | kWh | 0.001 |  expect charging energy |
|stopChargingSoc|0 | 100 | % | 1 |  stop charging soc |
|evPwr|0 | 30000 | W | 1 |  ev pwr |
|evChargingEnergy|0 | 150 | kWh | 0.001 |  ev charging energy |
|orderTime|0 |  n/a |  | 1 |  order time |
|orderStartTimestamp|0 |  n/a |  | 1 |  order start timestamp |
|orderEndTimestamp|0 |  n/a |  | 1 |  order end timestamp |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|chargingStatus| charging status | {0:OK?} |
|workMode| work mode | {0:off?,1:on?} |
|orderState| order state | {0:OK?} |

## HRChargingParamReport

### string

| State  |  Name |
|----------|------|
|hrSn| hr serial |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|mode| mode | {0:OK?,1:1?,2:2?} |
|onlineBits| onlineBits | {0:0?,1:1?,2:2?} |
|runStat| runStat | {0:off?,1:on?} |
|errorCode| errorCode: | {0:OK?,1:fault?} |
|runFlag| run Flag | {0:off?,1:on?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|heatingPower|0 | 10000 | W | 1 |  heating power |
|targetPower|0 | 10000 | W | 1 |  target power |
|temp|0 | 90 | °C | 1 |  water temperature |
|targetTemp|0 | 90 | °C | 1 |  target temperature |
|waterTankVolume|0 | 2000 | l | 1 |  water tank vaolume |
|selfcheckPercent|0 | 100 | % | 1 |  selfcheck Percent |


## HeatingRodEnergyStreamShow

### string

| State  |  Name |
|----------|------|
|rod1_hrSn| hr serial |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|rod1_hrPwr|0 | 10000 | W | 1 |  heating power |
|rod1_temp|0 | 90 | °C | 1 |  rod temperature |
|rod1_fromPv|0 | 10000 | W | 1 |  power from pv |
|rod1_fromBat|0 | 10000 | W | 1 |  power from bat |
|rod1_fromGrid|0 | 10000 | W | 1 |  power from grid |


