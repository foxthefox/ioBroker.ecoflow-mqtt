# States for  WAVE2
### version: 0.0.15

[pd](#pd)

[power](#power)

[motor](#motor)

[bmsMaster](#bmsMaster)



## pd

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|idleMode| Disable | Enable | Screen timeout | {valName:idleMode,moduleType:1,operateType:display,params:{idleTime:5,idleMode:1}} |
|tempDisplay| Display ambient temperature | Display air outlet temperature | Temperature display | {valName:tempDisplay,moduleType:1,operateType:tempDisplay,params:{tempDisplay:0}} |
|tempSys| Celsius | Fahrenheit | Unit of temperature | {valName:mode,moduleType:1,operateType:tempSys,params:{mode:1}} |
|beepEn| Disabled | Enabled | Buzzer enabling status | {valName:en,moduleType:1,operateType:beepEn,params:{en:1}} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|heatEnv|0 | 60 | °C | 0.01 |  Return air temperature in condensation zone |
|mpptPwr|0 | 400 | W | 1 |  PV input power |
|batVolt|0 | 65 | V | 0.01 |  Battery voltage |
|busVol|0 | 65 | V | 1 |  Bus voltage |
|batSoc|0 | 100 | % | 1 |  Battery SoC |
|sacWorkTime|0 | 1000000 | min | 1 |  Device working duration |
|condTemp|0 | 60 | °C | 0.01 |  Condensation temperature |
|batCurr|0 | 10 | A | 0.001 |  Battery current |
|setTempCel|0 | 60 | °C | 1 |  Set temperature in degrees Celsius |
|pvPower|0 | 400 | W | 1 |  PV charging power |
|batPwrOut|0 | 500 | W | 1 |  Battery output power |
|acFreq|0 | 60 | Hz | 1 |  AC input frequency |
|mpptVol|0 | 60 | V | 0.01 |  PV voltage |
|acCurrRms|0 | 10 | A | 0.001 |  RMS value of the AC input current |
|batPowerSupplyTime|0 | 10000000 | min | 1 |  Duration of using battery provided with the air conditioner |
|acPwrIn|0 | 600 | W | 1 |  AC input power |
|tempNtc|0 | 60 | °C | 0.1 |  NTC temperature |
|envTemp|0 | 60 | °C | 1 |  Ambient temperature |
|sacIdleTime|0 | 1440 | min | 1 |  Device standby time |
|acVoltRms|0 | 250 | V | 0.1 |  RMS value of the AC input voltage |
|dp2PowerSupplyTime|0 | 1000000 | min | 1 |  Duration of using DELTA 2 as the power source |
|coolEnv|0 | 60 | °C | 0.01 |  Air outlet temperature |
|batChgRemain|0 | 5999 | min | 1 |  Remaining battery charging time |
|coolTemp|0 | 60 | °C | 1 |  Air outlet temperature |
|mpptCur|0 | 15 | A | 0.001 |  PV current |
|busVolt|0 | 60 | V | 1 |  Bus voltage |
|psdrPower|0 | 600 | W | 1 |  Power supply power |
|dpPowerSupplyTime|0 | 1000000 | min | 1 |  Duration of using DELTA Pro as the power source |
|timeRemain|0 | 5999 | min | 1 |  Remaining time in current mode |
|sysPowerWatts|0 | 600 | W | 1 |  System power |
|evapTemp|0 | 60 | °C | 0.01 |  Evaporation temperature |
|batDsgRemain|0 | 5999 | min | 1 |  Remaining battery discharging time |
|batPower|0 | 600 | W | 1 |  Battery power |
|motorOutTemp|0 | 60 | °C | 0.01 |  Exhaust temperature |
|airInTemp|0 | 60 | °C | 0.01 |  Evaporation zone return air temperature |
|setTempfah|0 | 100 | °F | 1 |  Set temperature in degrees Fahrenheit |
|llcCurr|0 | 10 | A | 1 |  LLC output current |
|dmPowerSupplyTime|0 | 1000000 | min | 1 |  Duration of using DELTA Max as the power source |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|pdSubMode| 0 | 3 | mode | 1 |  Set sub-mode (0: Max, 1: Sleep, 2: Eco, 3: Manual ) | {valName:subMode,moduleType:1,operateType:subMode,params:{subMode:3}} |
|fanValue| 0 | 3 | mode | 1 |  Wind speed in the current mode: 0: Low; 1: Medium; 2: High | {valName:fanValue,moduleType:1,operateType:fanValue,params:{fanValue:1}} |
|setTemp| 16 | 30 | °C | 1 |  Temperature set in current mode | {valName:setTemp,moduleType:1,operateType:setTemp,params:{setTemp:27}} |
|idleTime| 0 | 3600 | s | 1 |  Screen timeout (sec) | {valName:idleTime,moduleType:1,operateType:display,params:{idleTime:5,idleMode:1}} |
|mainMode| 0 | 2 | mode | 1 |  Main mode: 0: Cool; 1: Heat; 2: Fan | {valName:mainMode,moduleType:1,operateType:mainMode,params:{mainMode:1}} |
|timeSet| 0 | 65535 | min | 1 |  Time set for current mode | {valName:timeSet,moduleType:1,operateType:sacTiming,params:{timeSet:10,timeEn:1}} |
|wteFthEn| 0 | 3 | mode | 1 |  bit1 (main switch of automatic drainage function): 0: On; 1: Off bit0: (in Cool/Fan mode): 0: Manual drainage; 1: No drainage (in Heat mode): 0: Off; 1: Physical drainage (In Cool/Fan mode: 0: Turn on Manual drainage，1: Turn on No drainage, 2: Turn off Manual drainage, 3 Turn off No drainage In Heat Mode: 0: Turn off, 1: Turn on Manual drainage， 3: Turn off Manual drainage) | {valName:wteFthEn,moduleType:1,operateType:wteFthEn,params:{wteFthEn:3}} |
|rgbState| 0 | 3 | mode | 1 |  Light strip settings: 0: Follow the screen; 1: Always on; 2: Always off | {valName:powerMode,moduleType:1,operateType:powerMode,params:{powerMode:2}} |

### string

| State  |  Name |
|----------|------|
|batChgStatus| Battery charging/discharging status |
|ver| Version of drainage logic |
|deviceName| Name |
|pdTempSys| Unit of temperature |
|bmsPid| Product ID of BMS |
|sacWattRangeTime| Length of time the device power falls in each interval (sec). The intervals include 101 W-200 W, 201 W-300 W, 301 W-400 W, 401 W-500 W, 501 W-600 W, and 601 W-700 W. |
|mpptSts| PV execution status |
|bmsErr| BMS error code |
|powerSts| Power supply status |
|pdErrCode| Error code |
|lcdStatus| Screen enabling bit |
|midWindSpeedCnt| Count of setting medium wind speed |
|lowWindSpeedCnt| Count of setting low wind speed |
|dmPowerSupplyCnt| Count of using DELTA Max as the power source |
|CompressorTempCnt| Count of temperature sensor errors at the compressor discharge pipe |
|envTempRangeCnt| Count of ambient temperature intervals; the range is 0-55 degrees Celsius; each interval covers 5 degrees; it is counted every time the button is pressed to power on. |
|dp2PowerSupplyCnt| Count of using DELTA 2 as the power source |
|hotSleepCnt| Count of setting the Sleep mode in Heat mode |
|hotNormalCnt| Count of setting the Normal mode in Heat mode |
|coolMaxCnt| Count of setting the Max mode in Cool mode |
|frontInTempErrCnt| Count of temperature sensor errors at the front air inlet |
|coolNormalCnt| Count of setting the Normal mode in Cool mode |
|powerOffCounts| Count of shutdown |
|errPowerCommCnt| Count of power communication errors |
|backPipeTempErrCnt| Count of temperature sensor errors at the rear copper pipe |
|dpPowerSupplyCnt| Count of using DELTA Pro as the power source |
|powerOnCounts| Count of startup |
|hotEcoCnt| Count of setting the ECO mode in Heat mode |
|errAllCnt| Total count of errors |
|frontPipeTempErrCnt| Count of temperature sensor errors at the front copper pipe |
|highWindSpeedCnt| Count of setting high wind speed |
|errMotorCommCnt| Count of motor communication errors |
|hotMaxCnt| Count of setting the Max mode in Heat mode |
|batPowerSupplyCnt| Count of using battery provided with the air conditioner |
|errWifiCommCnt| Count of Wi-Fi communication errors |
|windCnt| Count of setting in Fan mode |
|frontOutTempErrCnt| Count of temperature sensor errors at the front air outlet |
|coolSleepCnt| Count of setting the Sleep mode in Cool mode |
|frontBarTempErrCnt| Count of temperature sensor errors at the front copper bar |
|psdrCnt| Communication counter |
|coolEcoCnt| Count of setting the ECO mode in Cool mode |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|powerMode| Remotely power on/off  | {1:Power on,2:Power off} |
|bmsBoundFlag| Upper and lower limits on main battery pack charging and discharging | {0:Normal charging and discharging,1:Upper limit on charging} |
|runSts| bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run | {0:OK?} |
|rlySts| bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open | {0:OK?} |
|timeEn| Timer enable status | {0:Timer off,1:Timer on} |
|setFanVal| Fan speed | {0:Low,1:Medium,2:High} |
|bmsUnderVoltage| Battery undervoltage flag bit | {0:Normal,1:Undervoltage} |
|waterValue| Water level | {0:Level 1,1:Level 2,2:Full} |
|mpptWork| MPPT operating status | {1:Car charging,2:Solar charging} |
|refEn| Cool/Heat enabling flag | {0:Cool/Heat mode cannot be set,1:Cool/Heat mode can be set} |
|pdMainMode| Set mode | {0:Cool,1:Heat,2:Fan} |
|powerSrc| Input source: bit0: AC; bit1: MPTT; bit2: Battery main pack; bit3: Battery slave pack | {0:OK?} |
|subMode| Set sub-mode  | {0:Max,1:Sleep,2:Eco,3:Manual} |
|fanSts| Fan speed level | {0:non-rotation,1:Level 1,2:Level 2,3:Level3,4:Level 4} |
|errCode| Global error code | {0:OK?} |

## power

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|acFreq|0 | 60 | Hz | 1 |  AC input frequency |
|batVolt|0 | 60 | V | 1 |  Battery voltage |
|acWattsRange0Time|0 | 9000000 | min | 0.00027778 |  Length of time when AC power falls in interval 0 (101 W-200 W) |
|mpptVolRange0Time|0 | 9000000 | min | 0.00027778 |  Length of time when MPPT power supply voltage falls in interval 0 (11 V-20 V) |
|batCurr|0 | 10 | A | 0.001 |  Battery current |
|acWattsRange4Time|0 | 90000000 | min | 0.00027778 |  Length of time when AC power falls in interval 4 (501 W-600 W) |
|fanSts|0 | 4 | level | 1 |  Fan speed level: 0-4; 0 for non-rotation |
|mpptVolRange3Time|0 | 90000000 | min | 0.00027778 |  Length of time when MPPT power supply voltage falls in interval 3 (41 V-50 V) |
|batPwrOut|0 | 600 | W | 1 |  Battery output power |
|mpptVolRange1Time|0 | 9000000 | min | 0.00027778 |  Length of time when MPPT power supply voltage falls in interval 1 (21 V-30 V) |
|acWattsRange1Time|0 | 90000000 | min | 0.00027778 |  Length of time when AC power falls in interval 1 (201 W-300 W) |
|acVoltRms|0 | 250 | V | 0.1 |  RMS value of the AC input voltage |
|mpptWattsRange0Time|0 | 900000000 | min | 0.00027778 |  Length of time when MPPT power supply falls in interval 0 (101 W-200 W) |
|busVol|0 | 60 | V | 0.1 |  Bus voltage |
|acPwrIn|0 | 700 | W | 1 |  AC input power |
|acWattsRange5Time|0 | 90000000 | min | 0.00027778 |  Length of time when AC power falls in interval 5 (601 W-700 W) |
|mpptCur|0 | 15 | A | 0.001 |  PV current |
|mpptVolRange2Time|0 | 90000000 | min | 0.00027778 |  Length of time when MPPT power supply voltage falls in interval 2 (31 V-40 V) |
|mpptWattsRange1Time|0 | 90000000 | min | 0.00027778 |  Length of time when MPPT power supply falls in interval 1 (201 W-300 W) |
|acCurrRms|0 | 10 | A | 0.001 |  RMS value of the AC input current |
|llcCurr|0 | 15 | A | 1 |  LLC output current |
|busVolt|0 | 60 | V | 1 |  Bus voltage |
|acWattsRange2Time|0 | 90000000 | min | 0.00027778 |  Length of time when AC power falls in interval 2 (301 W-400 W) |
|tempNtc|0 | 60 | °C | 0.1 |  NTC temperature |
|tempMax|0 | 80 | °C | 1 |  The highest temperature among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature |
|tempMin|0 | 80 | °C | 1 |  The minimum temperature value among the four temperatures: MPPT temperature, PFC temperature, LLC high-voltage side temperature, and LLC low-voltage side temperature |
|mpptVol|0 | 60 | V | 0.01 |  PV voltage |
|mpptWattsRange2Time|0 | 90000000 | min | 0.00027778 |  Length of time when MPPT power supply falls in interval 2 (301 W-400 W) |
|mpptPwr|0 | 400 | W | 1 |  PV input power |
|mpptVolRange4Time|0 | 9000000 | min | 0.00027778 |  Length of time when MPPT power supply voltage falls in interval 4 (51 V-60 V) |
|acWattsRange3Time|0 | 9000000 | min | 0.00027778 |  Length of time when AC power falls in interval 3 (401 W-500 W) |


### string

| State  |  Name |
|----------|------|
|mpptLockFlag| MPPT lock flag |
|errCode| Fault error |
|errLock| Error lock |
|mpptSts| PV execution status |
|pfcOcpS| Count of PFC software overcurrent |
|acPowerSupplyCnt| Count of using AC power supply |
|pvOcpHw| Count of PV overcurrent |
|carPowerSupplyCnt| Count of car charging |
|pvPowerSupplyCnt| Count of using PV power supply |
|llcOcpInt| Count of LLC overcurrent |
|psdrCnt| Communication counter |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|runSts| bit0 ac_in; bit1 pfc; bit2 llc; bit3 mppt: 1: Run; 0: Not run | {0:OK?} |
|mpptWork| MPPT operating status | {1:Car charging,2:Solar charging} |
|rlySts| bit0 soft start rly; bit1 ac rly; 1: Closed; 0: Open | {0:OK?} |

## motor

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|power|0 | 500 | W | 1 |  Motor operating power |
|motorFsmState|0 | 15 | state | 1 |  Current state of main state machine |
|windTime|0 | 90000000 | min | 0.00027778 |  Working duration in fan mode |
|vBus|0 | 13 | V | 0.001 |  Bus voltage feedback |
|mosTemp|0 | 80 | °C | 1 |  MOS tube temperature feedback |
|frontFanWorkTime|0 | 9000000 | min | 0.00027778 |  Working duration of front fan |
|compressorWorkTime|0 | 90000000 | min | 0.00027778 |  Working duration of compressor |
|coolSleepTime|0 | 90000000 | min | 0.00027778 |  Working duration in the Sleep mode of Cool mode |
|setCondFanRpm|0 | 4 | level | 1 |  Set condensing fan speed |
|setEvapFanRpm|0 | 5 | level | 1 |  Set evaporative fan speed |
|drainageTime|0 | 90000000 | min | 0.00027778 |  Duration of outward drainage |
|hotNormalTime|0 | 9000000 | min | 0.00027778 |  Working duration in Normal mode of the Heat mode |
|hotSleepTime|0 | 9000000 | min | 0.00027778 |  Working duration in the Sleep mode of Heat mode |
|evapFanRpm|0 | 2000 | rpm | 1 |  Evaporative fan speed feedback |
|fourWayWorkTime|0 | 9000000 | min | 0.00027778 |  Working duration of four-way valve |
|mtrLogicErr|0 | 15 | state | 1 |  Current state of the service state machine |
|coolMaxTime|0 | 90000000 | min | 0.00027778 |  Working duration in the Max mode of Cool mode |
|setWaterRpm|0 | 1000 | rpm | 1 |  Water pump speed settings |
|hotEcoTime|0 | 9000000 | min | 0.00027778 |  Working duration in the ECO mode of the Heat mode |
|hotMaxTime|0 | 9000000 | min | 0.00027778 |  Working duration in the Max mode of Heat mode |
|backFanWorkTime|0 | 90000000 | min | 0.00027778 |  Working duration of rear fan |
|condeFanRpm|0 | 1000 | rpm | 1 |  Condensing fan speed feedback |
|setCompressorRpm|0 | 1000 | rpm | 1 |  Compressor speed settings |
|waterPumpWorkTime|0 | 9000000 | min | 0.00027778 |  Working duration of water pump |
|coolEcoTime|0 | 9000000 | min | 0.00027778 |  Working duration in the ECO mode of Cool mode |
|coolNormalTime|0 | 9000000 | min | 0.00027778 |  Working duration in the Normal mode of Cool mode |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|threeWayState| Three-way valve status | {0:OK?} |
|waterValue| Water level | {0:Level 1,1:Level 2,2:Full} |

### string

| State  |  Name |
|----------|------|
|hpProtFlg| High pressure protection flag bit |
|serveFsmState| Current state of the service state machine |
|ecoStopFlag| Energy-saving shutdown protection flag bit |
|setEleExpansStep| Opening of electronic expansion valve |
|errCode| Error code |
|focId| foc id |
|protFlag| Shutdown protection flag bit |
|compressorRpm| Compressor speed feedback |
|fourWayState| Status of the four-way valve |
|commcAck| Motor operating mode |
|serveCtrlErr| Service shutdown error code |
|v24| 24 V voltage feedback |
|fourWaySwitchCnt| Count of four-way valve switching |
|drainageCnt| Count of outward drainage |
|frontFanBlockCnt| Count of front fan blocking |
|pMtrCnt| Motor communication counter |
|backFanBlockCnt| Count of rear fan blocking |

## bmsMaster

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bmsDisplayTime|0 | 5999 | min | 1 |  Time displayed in BMS |
|maxCellVol|0 | 60 | V | 0.001 |  Maximum cell voltage |
|bmsSoc|0 | 100 | % | 1 |  Battery SoC |
|remainCap|0 | 80000 | mAh | 1 |  Remaining capacity |
|bmsCur|0 | 15 | A | 0.001 |  BMS current |
|maxCellTemp|0 | 80 | °C | 1 |  Maximum cell temperature |
|minCellVol|0 | 60 | V | 0.001 |  Minimum cell voltage |
|bmsReqVol|0 | 60 | V | 0.001 |  BMS request voltage |
|bmsDsgTime|0 | 5999 | min | 1 |  BMS discharging time |
|minCellTemp|0 | 80 | °C | 1 |  Minimum cell temperature |
|bmsVol|0 | 60 | V | 0.001 |  BMS voltage |
|bmsReqCur|0 | 15 | A | 0.001 |  BMS request current |
|bmsChgTime|0 | 5999 | min | 1 |  BMS charging duration |
|bmsMinDsgSoc|0 | 30 | % | 1 |  UPS minimum discharge SoC |
|bmsMaxChgSoc|60 | 100 | % | 1 |  UPS maximum charging SOC |


### string

| State  |  Name |
|----------|------|
|bmsBatErrCode| BMS error code |
|chgWattRangeTime| Length of time (sec) when the charging power falls in each of the four intervals |
|bmsHwFlag| Hardware in place |
|bmsSwFlag| Software in place |
|sleepCnt| Count of pressing the Sleep button |
|xt150AccessCnt| Count of XT150 connections |
|awakeCnt| Count of pressing button for wakeup |
|powerOnCnt| Count of pressing button for startup |
|powerOffCnt| Count of pressing button for shutdown |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|bmsType| bmsType | {0:master,1:slave} |
|bmsChgDsgSts| bms Charge Discharge Status | {0:idle,1:chg,2:dsg} |

