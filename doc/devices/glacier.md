# States for  GLACIER
### version: 1.4.8

[pd](#pd)

[bmsMaster](#bmsMaster)

[ems](#ems)



## pd

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|exhaustTmp|0 | 60 | °C | 0.1 |  Exhaust pipe wall temperature |
|batTime|0 | 5999 | min | 1 |  batTime; a negative value indicates a discharging time, and positive value indicates a charging time |
|tempWater|0 | 60 | °C | 0.1 |  Water temperature of the ice making zone |
|A12Val|0 | 15 | V | 0.001 |  12 V auxiliary supply voltage |
|motorCur|0 | 60 | A | 0.001 |  Motor Current |
|tmpM|-20 | 60 | °C | 1 |  Combined temperature zone temperature |
|icePercent|0 | 100 | % | 1 |  Ice making progress |
|powerBatInTime|0 |  n/a | min | 0.0166667 |  Duration of battery pack in place |
|ambientTmp|0 | 60 | °C | 0.1 |  Ambient temperature |
|coolZoneSingleTime|0 |  n/a | min | 0.0166667 |  Single temperature zone duration |
|tmpAver|-20 | 60 | C | 0.1 |  Real-time temperature of single temperature zone |
|batPct|0 | 100 | % | 1 |  Battery level |
|iceTmTag|0 | 1440 | min | 1 |  The ice making target time (used for app and LCD effect display) |
|coolCoverTime|0 |  n/a | min | 0.0166667 |  Duration of cooling zone being opened |
|powerBatOutTime|0 |  n/a | min | 0.0166667 |  Duration of battery pack not in place |
|chargeWorkTime|0 |  n/a | min | 0.0166667 |  Duration of working while charging |
|motorVol|0 | 60 | V | 0.001 |  Motor voltage |
|coolZoneDoubleTime|0 |  n/a | min | 0.0166667 |  Duration of dual temperature zone |
|motorSpeed|0 | 3600 | rpm | 1 |  Motor speed |
|motorWat|0 | 600 | W | 1 |  Motor power |
|iceTm|0 | 1440 | min | 1 |  Duration of the current ice making (for app and LCD effect display) |
|tmpR|-20 | 60 | °C | 0.11 |  Actual Right temperature zone value |
|tmpL|-20 | 60 | °C | 1 |  Actual temperature of the left temperature zone |


### array

| State  |  Name |
|----------|------|
|tempCoolTime| Length of time when the actual temperature of the cooling zone falls in each interval: COOL_ ZONE_ MAX*TEMP_ COOL_ MAX |
|appSensorAdv| Duration of sensor blocking: SENSOR_ADV_MAX |
|errorTimePower| Duration of each type of fault in the POWER module: ERROR_MAX_POWER |
|tempIceTime| Length of time when temperature of the ice-making zone falls in each interval: TEMP_ICE_MAX |
|networkTypeTime| Duration of being networked: NETWORK_TYPE_MAX |
|powerXt60Time| Duration of each type of power supply on XT60: POWER_TYPE_MAX |
|chargeXt60Time| Duration of each type of charging power supply on XT60: POWER_TYPE_MAX |
|errorTimeBms| Duration of each type of fault in BMS module: ERROR_MAX_BMS |
|appOpTimeBlTime| Screen timeout set through app: BL_TIME_MAX |
|errorTimePd| Duration of each type of fault in PD module: ERROR_MAX_PD |
|workFsmTime| Running duration of state machine under each state: USER_BEHAVIOR_FSM_MAX |
|workModeTime| Running duration of each work mode; WORK_MODE_MAX |
|tempAmbientTime| Length of time when ambient temperature falls in each interval: TEMP_AMBIENT_MAX |
|tempCoolSetTime| Length of time when the set temperature of the cooling zone falls in each interval: COOL_ZONE_MAX*TEMP_COOL_SET_MAX |
|buttonLong| Count of long presses: USER_BEHAVIOR_BUTTON_MAX |
|networkTypeCount| Count of being networked: NETWORK_TYPE_MAX |
|powerXt60Count| Count of each type of power supply on XT60: POWER_TYPE_MAX |
|errorCountPower| Count of each type of fault in POWER module: ERROR_MAX_POWER |
|workFsmCount| Count of entering each state of state machine: USER_BEHAVIOR_FSM_MAX |
|errorCountBldc| Count of each type of fault in BLDC module: ERROR_MAX_BLDC |
|workModeCount| Count of entering each work mode; WORK_MODE_MAX |
|errorCountBms| Count of each type of fault in BMS module: ERROR_MAX_PD |
|chargeXt60Count| Count of each type of charging power supply on XT60: POWER_TYPE_MAX |
|appOpCountWorkMode| Count of each work mode set through app: WORK_MODE_MAX |
|appOpCountBlTime| Count of setting different screen timeout through app: BL_TIME_MAX |
|errorCountPd| Count of each fault in PD module: ERROR_MAX_PD |
|buttonShort| Count of short pressings: USER_BEHAVIOR_BUTTON_MAX |
|errorTimeBldc| array errors? |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|tmpMSet| -20 | 50 | °C | 0.01 |  Set Temperature of the middle temperature zone | {valName:tmpM,moduleType:1,operateType:temp,params:{tmpR:-19,tmpL:0,tmpM:0}} |
|tmpRSet| -20 | 50 | °C | 0.01 |  Set Temperature of the right temperature zone (valid when partition is inserted) | {valName:tmpR,moduleType:1,operateType:temp,params:{tmpR:-19,tmpL:0,tmpM:0}} |
|tmpLSet| -20 | 50 | °C | 0.01 |  Set Temperature of the left temperature zone (valid when partition is inserted) | {valName:tmpL,moduleType:1,operateType:temp,params:{tmpR:-19,tmpL:0,tmpM:0}} |
|powerPbLevel| 0 | 2 | level | 1 |  Battery protection level 0: Low; 1: Medium; 2: High | {valName:level,moduleType:1,operateType:protectBat,params:{state:1,level:0}} |
|blTime| 0 | 3600 | s | 1 |  Screen timeout | {valName:time,moduleType:1,operateType:blTime,params:{time:600}} |

### string

| State  |  Name |
|----------|------|
|errBms| BMS fault code |
|errPd| PD fault code |
|errBldc| BLDC fault code |
|emsChgFlg| EMS charging flag |
|errLcd| Fault code displayed on LCD screen |
|threeWayState| Refrigerant flow direction flag bit |
|flagTwoZone| Partition detection |
|errCode| Error code |
|errPwr| POWER fault code |
|coolZoneDoubleCount| Count of dual temperature zones |
|coolCoverCount| Count of cooling zone openings |
|appOpCountDeIce| Count of ice detaching through app |
|dntMakeIceDevice| Count of pressing the ice making button when ice making is disabled |
|appOpCountBeepOff| Count of turning off buzzer through app |
|appOpCountPowerOn| Count of powering on through app |
|countinueMakeIceMax| Maximum count of consecutive ice making |
|appOpCountPowerOff| Count of powering off through app |
|appOpCountDntMakeIce| Count of ice making through app when ice making is disabled |
|powerBatInCount| Count of battery pack in place |
|makeIceCount| Total count of ice making |
|chargeWorkCount| Count of working while charging |
|coolZoneSingleCount| Count of single temperature zone |
|countinueMakeIceAve| Average count of consecutive ice making actions |
|appOpCountTempUnitC| Count of setting degrees in Celsius through app |
|appOpCountTempUnitF| Count of setting degrees in Fahrenheit through app |
|appOpCountBeepOn| Count of enabling buzzer through app |
|err| PD error |
|appOpCountMakeIce| Count of ice making through app? |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|iceMkMode| Large/small ice cube status | {0:Small ice cube (in preparation),1:Large ice cube (in preparation),2:Small ice cube (ice making in progress; cannot be changed),3:Large ice cube (ice making in progress)} |
|fsmState| Real-time running status  | {0:Small ice cube (in preparation)?,1:Large ice cube (in preparation)?,2:Small ice cube (ice making in progress; cannot be changed)?,3:Large ice cube (ice making in progress)?,4:Detaching ice,5:Detaching completed} |
|motorWait| Waiting for compressor:  | {0:No need to wait,1:Need to wait} |
|pwrState| pwrState | {0:Powered off,1:Powered on} |
|bldcDntWork| Compressor work limit  | {0:Allow to work,1:Do not allow to work} |
|waterLine| Ice making zone water level: 0-3 levels | {0:OK?} |
|flagAmbintReady| Ambient temperature reliability | {0:Unreliable,1:Reliable} |
|batFlag| Battery pack in-place status  | {0:Not in place,1:In place} |
|xt150InState| xt150InState | {0:no input,1:has input} |
|doorStat| Door status detection | {0:Closed,1:Open} |
|runState| Operating status | {0:Normal (24 V output, 40 V output),1:Charging suspended (or when there is no input) (24 V off, 40 V output),2:Standby (24 V off, 40 V off)} |
|chgType| Charger type //Charger type | {0:NULL,1:XT150 charging,2:Adapter charging (hardware detection),3:Car charging (hardware detection),4:Solar panel charging (hardware detection),5:Car charging (software detection),6:Solar panel charging (software detection),7:Input source cannot be identified (0xff): the charging cable is connected, but it actually does not work due to charging being disabled} |
|sensor| Sensor status; refer to @ST_SENSOR for data explanation; bit 1: Error; bit 0: Normal | {0:Normal,2:Error} |
|xt60InState| xt60 connection status  | {0:no input,1:has input} |
|iceAlert| Ice taking reminder | {0:Do not remind,1:Remind} |
|carBatLow| Car charger battery protection reminder | {0:Do not remind,1:Remind} |
|bmsInFlag| BMS in-place flag, detected through BMS-&gt;PD heartbeat packet | {0:Not in place,1:In place} |
|bldcDntIce| Ice making limit on compressor | {0:Ice making is allowed,1:Ice making is not allowed} |
|warnInfo| Warning | {0:no warning?,1:overtemperature,2:Under-temperature,4:Overload,8:Charging error,16:Fan error,32:BLCD communication error} |
|fanLvl| Fan level | {0:non-rotation,1:Level 1,2:Level 2,3:Level3,4:Level 4,5:Level 5} |
|deiceAct| Deice Active? | {0:inactive,1:active} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|iceMode| Disable | Enable | Ice Making | {valName:enable,moduleType:1,operateType:iceMake,params:{enable:1,iceShape:1}} |
|iceShape| small cubes | large cubes | Ice Shape | {valName:iceShape,moduleType:1,operateType:iceMake,params:{enable:1,iceShape:1}} |
|iceDetach| Disable | Enable | Ice Detaching | {valName:enable,moduleType:1,operateType:deIce,params:{enable:0}} |
|coolMode| Normal | Eco | cool Mode | {valName:mode,moduleType:1,operateType:ecoMode,params:{mode:1}} |
|sensorAdv| Unblocked | Blocked | Sensor detection blocking. Refer to @ST_SENSOR for data explanation. Bit: 1: Blocked; 0: Unblocked. | {valName:senseorAdv,moduleType:1,operateType:sensorAdv,params:{sensorAdv:1}} |
|beepEn| Disabled | Enabled | Buzzer enabling status | {valName:flag,moduleType:1,operateType:beepEn,params:{flag:1}} |
|pwrPbEn| Disable | Enable | Battery protection switch | {valName:state,moduleType:1,operateType:protectBat,params:{state:1,level:0}} |
|tmpUnit| Celsius | Fahrenheit | Temperature Unit | {valName:unit,moduleType:1,operateType:tmpUnit,params:{unit:0}} |

## bmsMaster

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|designCap|0 | 13800 | mAh | 1 |  Design capacity |
|f32ShowSoc|0 | 100 | % | 1 |  SOC |
|minMosTmp|0 | 80 | °C | 1 |  Minimum MOS temperature |
|vol|0 | 60 | V | 0.001 |  Voltage |
|fullCap|0 | 13800 | mAh | 1 |  Full capacity |
|remainCap|0 | 13800 | mAh | 1 |  Remaining capacity |
|tmp|0 | 60 | °C | 1 |  Temperature |
|outWatts|0 | 500 | W | 1 |  Output power |
|cycles|0 | 6000 |  | 1 |  Number of cycles |
|minCellVol|0 | 60 | V | 0.001 |  Minimum cell voltage |
|maxCellVol|0 | 60 | V | 0.001 |  Maximum cell voltage |
|maxMosTmp|0 | 80 | °C | 1 |  Maximum MOS temperature |
|inWatts|0 | 600 | W | 1 |  Input power |
|soc|0 | 100 | % | 1 |  Remaining battery percentage |
|tagChgAmp|0 | 100 | A | 0.0001 |  Target charging current |
|minCellTmp|0 | 60 | °C | 1 |  Minimum cell temperature |
|maxCellTmp|0 | 60 | °C | 1 |  Maximum cell temperature |
|remainTime|0 | 143999 | min | 1 |  Time remaining |
|amp|0 | 25 | A | 0.001 |  Current |


### string

| State  |  Name |
|----------|------|
|bmsFault| BMS permanent fault |
|num| BMS number |
|err| Global error code |
|bqStatReg| BQ hardware protection register |
|ver| System version |
|soh| Health status |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|type| BMS type | {1:Lithium battery,2:Oil-powered} |
|cellId| Battery capacity type | {1:2.5 Ah per battery,2:2 Ah per battery} |
|openBmsIdx| Battery pack status | {0:Not enabled,1:Enabled} |

## ems

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|closeOilEbSocMax|60 | 100 | % | 1 |  SOC for turning off Smart Generator |
|chgVol|0 | 150 | V | 0.001 |  Charging voltage |
|dsgRemain|0 | 5999 | min | 1 |  Remaining discharging time |
|maxAvailNum|0 | 40000 | mAh | 1 |  Maximum available quantity |
|paraVolMax|0 | 60 | V | 0.001 |  Maximum parallel voltage |
|paraVolMin|0 | 60 | V | 0.001 |  Minimum parallel voltage |
|lcdSoc|0 | 100 | % | 1 |  SoC value displayed on LCD |
|chgRemain|0 | 5999 | min | 1 |  Remaining charging time |
|openOilEbSocMin|0 | 30 | % | 1 |  SoC for turning on Smart Generator |
|minDsgSoc|0 | 30 | % | 1 |  Minimum discharging SOC |
|maxChgSoc|60 | 100 | % | 1 |  Maximum charging SOC |
|f32LcdSoc|0 | 100 | % | 1 |  SOC on LCD |
|chgAmp|0 | 100 | A | 0.0001 |  Charging current |


### array

| State  |  Name |
|----------|------|
|bmsIsConnt| BMS online signal |

### string

| State  |  Name |
|----------|------|
|openBmsIdx| Open BMS index |
|upsFlag| UPS mode enable flag |
|bmsModel| BMS model |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|warnState| BMS warning state | {0:no warning?,1:hi_temp,2:low_temp,4:overload,8:chg_flag} |
|dsgCmd| Discharge switch | {0:off,1:on,2:2?} |
|emsFlag| ems Flag | {0:sleep,1:normal} |
|chgCmd| Charge switch | {0:off,1:on,2:2?} |
|fanLvl| Fan level | {0:non-rotation,1:Level 1,2:Level 2,3:Level3,4:Level 4,5:Level 5} |
|chgState| Charging state | {0:disabled,1:CC,2:CV,3:UPS,4:PARA 0x55: Charging error} |

