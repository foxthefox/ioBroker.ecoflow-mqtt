# States for  POWEROCEAN
### version: 1.3.0

[statusReportBattery1](#statusReportBattery1)

[JTS1_ENERGY_STREAM_REPORT](#JTS1_ENERGY_STREAM_REPORT)

[JTS1_EMS_HEARTBEAT](#JTS1_EMS_HEARTBEAT)

[JTS1_EMS_CHANGE_REPORT](#JTS1_EMS_CHANGE_REPORT)

[EVChargingParamReport](#EVChargingParamReport)

[JTS1_EMS_PARAM_CHANGE_REPORT](#JTS1_EMS_PARAM_CHANGE_REPORT)



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
|bpSysState| Syste state | {0:PRE_POWER_ON_STATE,1:CFM_POWER_ON_STATE,2:NORMAL_STATE,3:POWER_OFF_STATE,4:SLEEP_STATE} |

### string

| State  |  Name |
|----------|------|
|bpSn| Battery serial number |
|bpEcloundSoc| EcloundSoc |
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
|pcsLoadInfo_vol|0 | 410 | V | 1 |  load voltage |
|pcsLoadInfo_amp|0 | 35 | A | 1 |  load current |
|pcsLoadInfo_freq|0 | 65 | Hz | 1 |  load frequency |
|pcsLoadInfo_pwr|0 | 10000 | W | 1 |  load power |
|bpRemainWatth|0 |  n/a | kWh | 0.001 |  bp remain watth |
|bpDsgTime|0 |  n/a | min | 1 |  bp dsg time |
|pcsActPwr|0 | 7000 | W | 1 |  pcs act pwr |
|pcsAcFreq|0 | 65 | Hz | 1 |  pcs ac freq |
|pcsBusVolt|0 | 900 | V | 1 |  pcs bus volt |
|pcsLeakAmp|0 | 1000 | mA | 1 |  pcs leak amp |
|pcsBpPower|0 | 7000 | W | 1 |  pcs bp power |
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

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bpSoc|0 | 100 | % | 1 |  Battery SOC |
|bpTotalChgEnergy|0 |  n/a | kWh | 0.001 |  Battery total energy charged |
|bpTotalDsgEnergy|0 |  n/a | kWh | 0.001 |  Battery total energy discharged |
|sysBatChgUpLimit|0 | 100 | % | 1 |  sys bat chg up limit |
|sysBatDsgDownLimit|0 | 100 | % | 1 |  sys bat dsg down limit |
|sysBatBackupRatio|0 | 100 | % | 1 |  sys bat backup ratio |
|emsFeedRatio|0 | 100 | % | 1 |  ems feed ratio |
|emsFeedPwr|0 | 20000 | W | 1 |  ems feed pwr |
|chgDsgPwr|0 | 7000 | W | 1 |  chg dsg pwr |


### array

| State  |  Name |
|----------|------|
|evBindList| ev bind list |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|sysWorkSta| sys work sta | {0:OK?} |
|sysGridSta| sys grid sta | {0:OK?} |
|emsWorkMode| ems work mode | {0:SELFUSE,1:TOU,2:BACKUP,3:DBG,4:AC_MAKEUP,5:DRM_MODE,6:REMOTE_SCHED,7:STANDBY_MODE,8:SOC_CALIB,9:TIMER_MODE} |
|bpChgDsgSta| bp chg dsg sta | {0:OK?} |
|emsFeedMode| ems feed mode | {0:off?,1:on?} |
|pcsRunSta| pcs run sta | {0:STANDBY,1:RUN,2:STOP} |
|emsSgRunStat| ems sg run stat | {0:OK?} |
|iot_4gSta| iot_4g sta | {0:OK?} |
|sysHeatStat| sys heat stat | {0:OK?} |
|batRealyStatus| bat realy status | {0:OK?} |
|wifiStaStat| wifi sta stat | {0:OK?} |
|chgDsgMode| chg dsg mode | {0:off?,1:on?} |

### string

| State  |  Name |
|----------|------|
|emsBackupEvent| ems backup event |
|emsKeepSoc| ems keep soc |
|emsSysSelfCheckStat| ems sys self check stat |
|bpOnlineSum| bp online sum |
|sysOnOffMachineStat| sys on off machine stat |
|sysMeterCfg| sys meter cfg |
|sysTypeCfg| sys type cfg |
|pcsAcErrCode| pcs ac err code |
|pcsDcErrCode| pcs dc err code |
|pcsOverVol1| pcs over vol1 |
|pcsOverVol2| pcs over vol2 |
|pcsOverVol3| pcs over vol3 |
|pcsOverVolTime1| pcs over vol time1 |
|pcsOverVolTime2| pcs over vol time2 |
|pcsOverVolTime3| pcs over vol time3 |
|pcsLowVol1| pcs low vol1 |
|pcsLowVol2| pcs low vol2 |
|pcsLowVol3| pcs low vol3 |
|pcsLowVolTime1| pcs low vol time1 |
|pcsLowVolTime2| pcs low vol time2 |
|pcsLowVolTime3| pcs low vol time3 |
|pcsOverVolRecover| pcs over vol recover |
|pcsLowVolRecover| pcs low vol recover |
|pcsVolRecoverTime| pcs vol recover time |
|pcs_10minOverVol| pcs_10min over vol |
|pcs_10minOverVolTime| pcs_10min over vol time |
|pcsOverFreq1| pcs over freq1 |
|pcsOverFreq2| pcs over freq2 |
|pcsOverFreqTime1| pcs over freq time1 |
|pcsOverFreqTime2| pcs over freq time2 |
|pcsLowFreq1| pcs low freq1 |
|pcsLowFreq2| pcs low freq2 |
|pcsLowFreqTime1| pcs low freq time1 |
|pcsLowFreqTime2| pcs low freq time2 |
|pcsOverFreqRecover| pcs over req recover |
|pcsLowFreqRecover| pcs low freq recover |
|pcsFreqRecoverTime| pcs freq recover time |
|pcsHvrtLvrtSwitch| pcs hvrt lvrt switch |
|pcsOverVolRideThroughStart1| pcs over vol ride through start1 |
|pcsOverVolRideThroughStart2| pcs over vol ride through start2 |
|pcsOverVolRideThroughProtectTime1| pcs over vol ride through protect time1 |
|pcsOverVolRideThroughProtectTime2| pcs over vol ride through protect time2 |
|pcsLowVolRideThroughStart1| pcs low vol ride through start1 |
|pcsLowVolRideThroughStart2| pcs low vol ride through start2 |
|pcsLowVolRideThroughStart3| pcs low vol ride through start3 |
|pcsLowVolRideThroughProtectTime1| pcs low vol ride through protect time1 |
|pcsLowVolRideThroughProtectTime2| pcs low vol ride through protect time2 |
|pcsLowVolRideThroughProtectTime3| pcs low vol ride through protect time3 |
|pcsHighVolRideThroughRecover| pcs high vol ride through recover |
|pcsLowVolRideThroughRecover| pcs low vol ride through recover |
|pcsIslandDetectSwitch| pcs island detect switch |
|pcsActivePowerDeratingSwitch| pcs active power derating switch |
|pcsActivePowerDeratingPercent| pcs active power derating percent |
|pcsActivePowerGradient| pcs active power gradient |
|pcsActivePowerSoftstartSwitch| pcs active power softstart switch |
|pcsActivePowerSoftstartTime| pcs active power softstart time |
|pcsOverFreqDeratingSwitch| pcs over freq derating switch |
|pcsOverFreqDeratingPowerBased| pcs over freq derating power based |
|pcsOverFreqDeratingStart| pcs over freq derating start |
|pcsOverFreqDeratingEnd| pcs over freq derating end |
|pcsOverFreqDeratingSlope| pcs over freq derating slope |
|pcsOverFreqDeratingRecoverSlope| pcs over freq derating recover slope |
|pcsOverFreqDeratingFrozeSwitch| pcs over freq derating froze switch |
|pcsOverFreqDeratingCutoffPower| pcs over freq derating cutoff power |
|pcsUnderFreqIncrementSwitch| pcs under freq increment switch |
|pcsUnderFreqIncrementStart| pcs under freq increment start |
|pcsUnderFreqIncrementEnd| pcs under freq increment end |
|pcsUnderFreqIncrementSlope| pcs under freq increment slope |
|pcsUnderFreqIncrementRecoverSlope| pcs under freq increment recover slope |
|pcsUnderFreqIncrementFrozeSwitch| pcs under freq increment froze switch |
|pcsAntiBackFlowSwitch| pcs anti back flow switch |
|pcsOverVolDeratingSwitch| pcs over vol derating switch |
|pcsOverVolDeratingStart| pcs over vol derating start |
|pcsOverVolDeratingEnd| pcs over vol derating end |
|pcsOverVolDeratingStartingPower| pcs over vol derating starting power |
|pcsOverVolDeratingEndPower| pcs over vol derating end power |
|pcsOverVolDeratingTimeConst| pcs over vol derating time const |
|pcsReactPwrModeSelect| pcs react pwr mode select |
|pcsReactPwrCompensation| pcs react pwr compensation |
|pcsPfValue| pcs pf value |
|pcsReactPwrPercent| pcs react pwr percent |
|pcsQuV1| pcs qu v1 |
|pcsQuV2| pcs qu v2 |
|pcsQuV3| pcs qu v3 |
|pcsQuV4| pcs qu v4 |
|pcsQuQ1| ppcs qu q1 |
|pcsQuQ2| ppcs qu q2 |
|pcsQuQ3| ppcs qu q3 |
|pcsQuQ4| ppcs qu q4 |
|pcsQuTimeConst| pcs qu time const |
|pcsCospP1| pcs cosp p1 |
|pcsCospP2| pcs cosp p2 |
|pcsCospP3| pcs cosp p3 |
|pcsCospPf1| pcs cosp pf1 |
|pcsCospPf2| pcs cosp pf2 |
|pcsCospPf3| pcs cosp pf3 |
|pcsSafetyCountryCodeSelection| pcs safety country code selection |
|pcsReconnectGridDetectSwitch| pcs reconnect grid detect switch |
|pcsOnGridWaitTime| pcs on grid wait time |
|pcsHighVolOnGrid| pcs high vol on grid |
|pcsLowVolOnGrid| pcs low vol on grid |
|pcsHighFreqOnGrid| pcs high freq on grid |
|pcsLowFreqOnGrid| pcs low freq on grid |
|pcsFaultRecoverOnGridWaitTime| pcs fault recover on grid wait time |
|pcsFaultRecoverHighVolOnGrid| pcs fault recover high vol on grid |
|pcsFaultRecoverLowVolOnGrid| pcs fault recover low vol on grid |
|pcsFaultRecoverHighFreqOnGrid| pcs fault recover high freq on grid |
|pcsFaultRecoverLowFreqOnGrid| pcs fault recover low freq on grid |
|pcsPowerDeratingFlag| pcs power derating flag |
|pcsPowerDeratingSet| pcs power derating set |
|pcsSendEnd| pcs send end |
|rateCtrlSwtich| rate ctrl swtich |
|sysRateCtrlTime| sys rate ctrl time |
|duraTime| dura time |
|pcs_10minOverVolSwitch| pcs_10min over vol switch |
|pcsActivePowerSoftStartRate| pcs active power soft start rate |
|pcsActivePowerNormalRampUpRate| pcs active power normal ramp up rate |
|pcsOverFreqDeratingStartDelay| pcs over freq derating start delay |
|pcsOverFreqDeratingEndDelay| pcs over freq derating end delay |
|pcsOverFreqDeratingRecoverSlopeSwitch| pcs over freq derating recover slope switch |
|pcsUnderFreqIncrementStartDelay| pcs under freq increment start delay |
|pcsUnderFreqIncrementEndDelay| pcs under freq increment end delay |
|pcsOverVolDeratingDelayTime| pcs over vol derating delay time |
|pcsOngridReconnectFlag| pcs ongrid reconnect flag |
|pcsQuLockinPower| pcs qu lockin power |
|pcsQuLockoutPower| pcs qu lockout power |
|pcsQuMinimumCosphi| pcs qu minimum cosphi |
|pcsFastCheck| pcs fast check |
|pcsFunctionEnable| pcs function enable |
|emsCtrlLedType| ems ctrl led type |
|emsCtrlLedBright| ems ctrl led bright |
|pcsUnderFreqIncrementRecoverSlopeSwitch| pcs under freq increment recover slope switch |
|pcsOverVolDeratingDaleyTime| pcs over vol derating daley time |
|pcsCospP4| pcs cosp p4 |
|pcsCospPf4| pcs cosp pf4 |
|pcsReserved1| pcs reserved1 |
|pcsReserved2| pcs reserved2 |
|pcsReserved3| pcs reserved3 |
|pcsReserved4| pcs reserved4 |
|pcsReserved5| pcs reserved5 |
|pcsReserved6| pcs reserved6 |
|pcsReserved7| pcs reserved7 |
|pcsReserved8| pcs reserved8 |
|pcsReserved9| pcs reserved9 |
|pcsReserved10| pcs reserved10 |
|pcsReserved11| pcs reserved11 |
|pcsReserved12| pcs reserved12 |
|pcsReserved13| pcs reserved13 |
|pcsReserved14| pcs reserved14 |
|pcsReserved15| pcs reserved15 |
|pcsReserved16| pcs reserved16 |
|sysMulPeakSwitch| sys mul peak switch |
|sysMulPeakTime| sys mul peak time |
|emsSgReady| ems sg ready |
|emsSgReadyEn| ems sg ready en |
|emsStopAll| ems stop all |
|iot_4gOn| iot_4g on |
|iot_4gPdp| iot_4g pdp |
|iot_4gErr| iot_4g err |
|pcsAcWarningCode| pcs ac warning code |
|pcsRelaySelfCheckSta| pcs relay self check sta |
|pcsRunFsmState| pcsRunFsmState |
|mppt1FaultCode| mppt1 fault code |
|mppt2FaultCode| mppt2 fault code |
|mppt1WarningCode| mppt1 warning code |
|mppt2WarningCode| mppt2 warning code |
|bpLineOffFlag| bp line off flag |
|bpRestartFlag| bp restart flag |
|bpReverseFlag| bp reverse flag |
|batRelayCloseFailFlag| bat relay close fail flag |
|batSoftRelayStatus| bat soft relay status |
|pcsRelayStateShow| pcsRelayStateShow |
|emsWorkState| ems work state |
|afciFaultCntCh1| afci fault cnt ch1 |
|afciFaultValueCh1| afci fault value ch1 |
|afciFaultMaxValueCh1| afci fault max value ch1 |
|afciProtectValueCh1| afci protect value ch1 |
|afciFaultFlagCh1| afci fault flag ch1 |
|afciFaultCntCh2| afci fault cnt ch2 |
|afciFaultValueCh2| afci fault value ch2 |
|afciFaultMaxValueCh2| afci fault max value ch2 |
|afciProtectValueCh2| afci protect value ch2 |
|afciFaultFlagCh2| afci fault flag ch2 |
|afciSelfTestCmdState| afci self test cmd state |
|afciEnableCmdState| afci enable cmd state |
|afciFaultClearState| afci fault clear state |
|afciSellfTestResult| afci sellf test result |
|afciSwitchFreqCh1| afci switch freq ch1 |
|afciSwitchFreqCh2| afci switch freq ch2 |
|sysCalStat| sys cal stat |
|ethWanStat| eth wan stat |
|wireless_4gIccid| wireless_4g iccid |
|virtualHardEdition| virtual hard edition |
|userRole| user role |
|parallelAllowState| parallel allow state |
|parallelTypeSet| parallel type set |
|parallelType| parallel type |
|afciIsExist| afci is exist |
|afciEn| afci en |
|afciEnSet| afci en set |
|parallelTypeCur| parallel type cur |

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

## JTS1_EMS_PARAM_CHANGE_REPORT

### string

| State  |  Name |
|----------|------|
|smartCtrl| smart ctrl |
|energyEfficientEnable| energy efficient enable |
|sysZone| sys zone |
|sysTimeTab| sys time tab |
|bpBurst| bp burst |
|lowerPowerStat| lower power stat |
|breakerCapacityMax| breaker capacity max |
|breakerEnableState| breaker enable state |

