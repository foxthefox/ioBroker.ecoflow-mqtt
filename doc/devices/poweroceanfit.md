# States for  POWEROCEANFIT
### version: 1.4.0

[CloudBmsInfoReport](#CloudBmsInfoReport)

[EMSHeartbeatReport](#EMSHeartbeatReport)

[EnergyStreamItem](#EnergyStreamItem)

[bpInfo0](#bpInfo0)

[bpInfo1](#bpInfo1)

[bpInfo2](#bpInfo2)



## CloudBmsInfoReport

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 25000 | W | 1 |  Battery power |
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpSoh|0 | 100 | % | 1 |  Battery SOH |
|bpSop|0 | 100 | % | 1 |  Battery SOP |
|bpCellMaxVol|0 | 60 | V | 0.01 |  bp cell max vol |
|bpCellMinVol|0 | 60 | V | 0.01 |  bp cell min vol |
|bpVol|0 | 60 | V | 1 |  Battery Voltage |
|bpAmp|0 | 60 | A | 1 |  Battery Current |
|bpBusVol|0 | 1000 | V | 1 |  Bus voltage |
|bpBusAmp|0 | 100 | A | 1 |  bp bus amp |
|bpCycles|0 |  n/a |  | 1 |  Battery cycles |
|bpHvMosTemp|0 | 90 | °C | 1 |  High voltage Mos temperature |
|bpLvMosTemp|0 | 90 | °C | 1 |  Low voltage Mos temparature |
|bpPtcTemp|0 | 90 | °C | 1 |  PTC temperature |
|bpHtsTemp|0 | 60 | °C | 1 |  Hts temperature |
|bpBusNegTemp|0 | 90 | °C | 1 |  Bus neg. temperature |
|bpBusPosTemp|0 | 90 | °C | 1 |  Bus pos. temperature |
|bpEnvTemp|0 | 90 | °C | 1 |  Env. temperature |
|bpAccuChgCap|0 | 7500000 | mAh | 0.001 |  Accu charge capacity |
|bpAccuDsgCap|0 | 7500000 | mAh | 0.001 |  Accu discharge capacity |
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
|bpTargetSoc|0 | 100 | % | 1 |  Target SOC |
|bpDiffSoc|0 | 100 | % | 1 |  Diff. SOC |
|bpMaxSoc|0 | 100 | % | 1 |  Maximum SOC |
|bpMinSoc|0 | 100 | % | 1 |  Minimum SOC |
|bpLimitSoc|0 | 100 | % | 1 |  Limit SOC |
|bpCalendarSoh|0 | 100 | % | 1 |  Calendar SOH |
|bpCycleSoh|0 | 100 | % | 1 |  Cycle SOH |


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
|bpDsrc| bpDsrc | {0:OK?,1:1?,2:2?} |
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

### string

| State  |  Name |
|----------|------|
|bpSn| Battery serial number |
|bpEcloundSoc| Eclound Soc |
|bpHeartbeatVer| Heartbeat version |
|bpTimestamp| Timestamp |
|moduleProductInfo| Module product info |
|moduleAplSwVer| Module Aplication SW version |
|moduleLoaderSwVer| Module Loader SW version |

## EMSHeartbeatReport

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|sysWorkSta| sys work sta | {0:OK?} |
|bpChgDsgSta| bp chg dsg sta | {0:OK?} |
|emsErrCode| ems err code | {0:OK?} |
|sysErrCode| sys err code | {0:OK?} |
|epoSwitchState| epo switch state | {0:OK?} |
|currentNetif| current netif | {0:OK?} |
|meterType| meter type | {0:OK?} |
|emsSystemState| ems system state | {0:OK?} |
|appCtrlState| app ctrl state | {0:OK?} |
|pvInvWiringMode| pv inv wiring mode | {0:OK?} |
|workingMode| working mode | {0:OK?} |
|emsErrorCodeMask| ems error code mask | {0:OK?} |
|bpErrorCodeMask| bp error code mask | {0:OK?} |
|pv1ErrorCodeMask| pv1 error code mask | {0:OK?} |
|pv2ErrorCodeMask| pv2 error code mask | {0:OK?} |
|pvaErrorCodeMask| pva error code mask | {0:OK?} |
|pvWiringType| pv wiring type | {0:OK?} |
|invWiringType| inv wiring type | {0:OK?} |
|isPvToInvDirectly| isPvToInvDirectly | {0:OK?} |
|autoDetectStartPowerEn| auto detect start power en | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpRemainWatth|0 | 25000 | Wh | 1 |  bp remain watth |
|bpSoc|0 | 100 | % | 1 |  bp soc |
|bpDsgTime|0 | 159990 | h | 1 |  bp dsg time |
|meterTotalPower|0 | 50000 | W | 1 |  meter total power |
|meterAVoltage|0 | 250 | V | 1 |  meter a voltage |
|meterBVoltage|0 | 250 | V | 1 |  meter b voltage |
|meterCVoltage|0 | 250 | V | 1 |  meter c voltage |
|meterACurrent|0 | 120 | A | 1 |  meter a current |
|meterBCurrent|0 | 120 | A | 1 |  meter b current |
|meterCCurrent|0 | 120 | A | 1 |  meter c current |
|bp1SocCoefficient|0 | 100 | % | 100 |  bp1 soc coefficient |
|bp2SocCoefficient|0 | 100 | % | 100 |  bp2 soc coefficient |
|bp3SocCoefficient|0 | 100 | % | 100 |  bp3 soc coefficient |
|bpBusVoltCoefficient|0 | 100 | % | 100 |  bp bus volt coefficient |
|pvInDayEnergy|0 | 100000 | Wh | 1 |  pv in day energy |
|bpInDayEnergy|0 | 100000 | Wh | 1 |  bp in day energy |
|bpOutDayEnergy|-25000 | 100000 | Wh | 1 |  bp out day energy |
|gridInDayEnergy|0 | 100000 | Wh | 1 |  grid in day energy |
|gridOutDayEnergy|-25000 | 100000 | Wh | 1 |  grid out day energy |
|loadDayEnergy|-25000 | 100000 | Wh | 1 |  load day energy |
|batterySocUpperLimit|0 | 100 | % | 1 |  battery soc upper limit |
|batterySocLowerLimit|0 | 100 | % | 1 |  battery soc lower limit |
|mpptVoltageMaximum|0 | 1000 | V | 1 |  mppt voltage maximum |
|mpptVoltageMinimum|0 | 1000 | V | 1 |  mppt voltage minimum |
|mpptRatePower|0 | 25000 | W | 1 |  mppt rate power |
|mpptWithstandVoltage|0 | 1000 | V | 1 |  mppt withstand voltage |
|bpSocBaseCoefficient|0 | 100 | % | 100 |  bp soc base coefficient |
|bpBusVoltageBaseCoefficient|0 | 60 | V | 1 |  bp bus voltage base coefficient |
|sysRunMeterTakePower|-25000 | 25000 | W | 1 |  sys run meter take power |
|sysRunMeterFeedPower|0 | 50000 | W | 1 |  sys run meter feed power |
|gridFeedPowerMinimum|0 | 2000 | W | 1 |  grid feed power minimum |
|gridFeedRate|0 | 100 | % | 1 |  grid feed rate |
|manualSetStartChargePower|0 | 2000 | W | 1 |  manual set start charge power |
|startDischargePower|0 | 2000 | W | 1 |  start discharge power |
|underVoltageProtectPoint|0 | 500 | V | 1 |  under voltage protect point |


### string

| State  |  Name |
|----------|------|
|meterAddress| meter address |
|reportCycleTime| report cycle time |
|inverterBand| inverter band |
|bpDichargeAbilityAdjustValueLv1| bp dicharge ability adjust value lv1 |
|bpDichargeAbilityAdjustValueLv2| bp dicharge ability adjust value lv2 |
|bpRunDelay| bp run delay |
|bpStopDelay| bp stop delay |
|bpSaveSocStopDelay| bp save soc stop delay |
|disOrChargeAbilityStepValue| dis or charge ability step value |

### array

| State  |  Name |
|----------|------|
|meterRatio| meter ratio |
|meterPhasePower| meter phase power |
|meterPowerFactor| meter power factor |

## EnergyStreamItem

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|gridPwr|0 | 25000 | W | 1 |  grid pwr |
|dcdcPwr|0 | 25000 | W | 1 |  dcdc pwr |
|bpPwr|0 | 25000 | W | 1 |  bp pwr |
|pvPwr|0 | 25000 | W | 1 |  pv pwr |
|timezone|-1200 | 1200 | h | 1 |  timezone |
|bpSoc|0 | 100 | % | 1 |  bp soc |
|loadPwr|0 | 25000 | W | 1 |  load pwr |
|bpHeatingPower|0 | 1000 | W | 1 |  bp heating power |
|heatingPower|0 | 1000 | W | 1 |  heating power |


### string

| State  |  Name |
|----------|------|
|timestamp| bp timestamp |

## bpInfo0

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 20000 | W | 1 |  bp pwr |
|bpSoc|0 | 100 | % | 1 |  bp soc |
|bpVol|0 | 100 | V | 1 |  bp vol |
|bpAmp|0 | 100 | A | 1 |  bp amp |
|bpRemainWatth|0 | 40000 | W | 1 |  bp remain watth |
|bpBusVol|0 | 1000 | V | 1 |  bp bus vol |
|bpBusAmp|0 | 100 | A | 1 |  bp bus amp |
|bpDownLimitSoc|0 | 100 | % | 1 |  bp down limit soc |
|bpUpLimitSoc|0 | 100 | % | 1 |  bp up limit soc |
|bpBusVolFilter|0 | 1000 | V | 1 |  bp bus vol filter |
|bpModuleChgMaxPwr|0 | 20000 | W | 1 |  bp module chg max pwr |
|bpModuleDsgMaxPwr|0 | 10000 | W | 1 |  bp module dsg max pwr |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bpRunSta| bp run sta | {0:OK?} |
|bpModSta| bp mod sta | {0:OK ? } |
|bpChgDsgStat| bp chg dsg stat | {0:OK?} |
|errCode| err code | {0:OK ? } |
|bpSpinSwitch| bp spin switch | {0:OK?} |
|bpAcRechargeFlag| bp ac recharge flag | {0:OK ? } |
|bpActiveCalReqStat| bp active cal req stat | {0:OK?} |
|bpActiveCalRunStat| bp active cal run stat | {0:OK ? } |
|bpErrCode| bp err code | {0:OK?} |
|bpHeatFault| bp heat fault | {0:OK ? } |

### string

| State  |  Name |
|----------|------|
|bpTimestamp| bp timestamp |
|bpIna228A| bp ina228 a |
|bpSn| bp sn |

## bpInfo1

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 20000 | W | 1 |  bp pwr |
|bpSoc|0 | 100 | % | 1 |  bp soc |
|bpVol|0 | 100 | V | 1 |  bp vol |
|bpAmp|0 | 100 | A | 1 |  bp amp |
|bpRemainWatth|0 | 40000 | W | 1 |  bp remain watth |
|bpBusVol|0 | 1000 | V | 1 |  bp bus vol |
|bpBusAmp|0 | 100 | A | 1 |  bp bus amp |
|bpDownLimitSoc|0 | 100 | % | 1 |  bp down limit soc |
|bpUpLimitSoc|0 | 100 | % | 1 |  bp up limit soc |
|bpBusVolFilter|0 | 1000 | V | 1 |  bp bus vol filter |
|bpModuleChgMaxPwr|0 | 20000 | W | 1 |  bp module chg max pwr |
|bpModuleDsgMaxPwr|0 | 10000 | W | 1 |  bp module dsg max pwr |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bpRunSta| bp run sta | {0:OK?} |
|bpModSta| bp mod sta | {0:OK ? } |
|bpChgDsgStat| bp chg dsg stat | {0:OK?} |
|errCode| err code | {0:OK ? } |
|bpSpinSwitch| bp spin switch | {0:OK?} |
|bpAcRechargeFlag| bp ac recharge flag | {0:OK ? } |
|bpActiveCalReqStat| bp active cal req stat | {0:OK?} |
|bpActiveCalRunStat| bp active cal run stat | {0:OK ? } |
|bpErrCode| bp err code | {0:OK?} |
|bpHeatFault| bp heat fault | {0:OK ? } |

### string

| State  |  Name |
|----------|------|
|bpTimestamp| bp timestamp |
|bpIna228A| bp ina228 a |
|bpSn| bp sn |

## bpInfo2

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpPwr|0 | 20000 | W | 1 |  bp pwr |
|bpSoc|0 | 100 | % | 1 |  bp soc |
|bpVol|0 | 100 | V | 1 |  bp vol |
|bpAmp|0 | 100 | A | 1 |  bp amp |
|bpRemainWatth|0 | 40000 | W | 1 |  bp remain watth |
|bpBusVol|0 | 1000 | V | 1 |  bp bus vol |
|bpBusAmp|0 | 100 | A | 1 |  bp bus amp |
|bpDownLimitSoc|0 | 100 | % | 1 |  bp down limit soc |
|bpUpLimitSoc|0 | 100 | % | 1 |  bp up limit soc |
|bpBusVolFilter|0 | 1000 | V | 1 |  bp bus vol filter |
|bpModuleChgMaxPwr|0 | 20000 | W | 1 |  bp module chg max pwr |
|bpModuleDsgMaxPwr|0 | 10000 | W | 1 |  bp module dsg max pwr |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bpRunSta| bp run sta | {0:OK?} |
|bpModSta| bp mod sta | {0:OK ? } |
|bpChgDsgStat| bp chg dsg stat | {0:OK?} |
|errCode| err code | {0:OK ? } |
|bpSpinSwitch| bp spin switch | {0:OK?} |
|bpAcRechargeFlag| bp ac recharge flag | {0:OK ? } |
|bpActiveCalReqStat| bp active cal req stat | {0:OK?} |
|bpActiveCalRunStat| bp active cal run stat | {0:OK ? } |
|bpErrCode| bp err code | {0:OK?} |
|bpHeatFault| bp heat fault | {0:OK ? } |

### string

| State  |  Name |
|----------|------|
|bpTimestamp| bp timestamp |
|bpIna228A| bp ina228 a |
|bpSn| bp sn |

