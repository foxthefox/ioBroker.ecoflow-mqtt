# States for  POWERKIT
### version: 0.0.33

[bp1](#bp1)

[bbcout](#bbcout)

[bmsTotal](#bmsTotal)

[kitscc](#kitscc)

[onLineModuleSnList](#onLineModuleSnList)

[wireless](#wireless)

[bbcin](#bbcin)

[iclow](#iclow)

[ichigh](#ichigh)

[ldac](#ldac)

[lddc](#lddc)



## bp1

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |
|kitNum| Unique dynamic ID for CAN Mediation |
|canId| Version No. |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|oilCloseSoc|60 | 100 | % | 1 |  Smart generator shutoff SOC |
|amp|0 | 60 | A | 0.001 |  Current mA |
|fullCap|0 | 100000 | mAh | 1 |  Capacity of full charging (mAh) |
|soc|0 | 100 | % | 1 |  soc |
|minCellVol|0 | 6 | V | 0.001 |  Minimum battery cell voltage (mV) |
|ptcRemaintime|0 | 360 | min | 1 |  Remaining time of PTC heating (min) |
|vol|0 | 60 | V | 0.001 |  Voltage (mV) |
|minCellTemp|-30 | 100 | °C | 1 |  Minimum battery cell temperature (℃) |
|ptcChgErrCnt|0 |  n/a |  | 1 |  Error count of PTC heating |
|remainCap|0 | 100000 | mAh | 1 |  Remaining capacity (mAh) |
|inWatts|0 | 5000 | W | 1 |  Input power (W) |
|temp|-30 | 100 | °C | 1 |  Showing current temperature (℃) |
|maxMosTemp|0 | 100 | °C | 1 |  Maximum MOS temperature (℃) |
|remaintime|0 | 15000 | min | 1 |  Remaining time (min) |
|maxCellTemp|-30 | 80 | °C | 1 |  Maximum battery cell temperature (℃) |
|minMosTemp|0 | 100 | °C | 1 |  Minimum MOS temperature (℃) |
|lcdStandbyMin|0 | 3600 | min | 1 |  LCD screen standby time |
|maxPtcTemp|-30 | 100 | °C | 1 |  Maximum PTC temperature (℃) |
|maxCellVol|0 | 6 | V | 0.001 |  Maximum battery cell voltage (mV) |
|dsgSetSoc|0 | 30 | % | 1 |  SOC lower limit when discharging the UPS |
|minPtcTemp|0 | 100 | °C | 1 |  Minimum PTC temperature (℃) |
|chgSetSoc|60 | 100 | % | 1 |  SOC upper limit when charging the UPS |
|oilOpenSoc|0 | 60 | % | 1 |  Smart generator startup SOC |
|designCap|0 | 100000 | mAh | 1 |  Design capacity (mAh) |
|outWatts|0 | 6000 | W | 1 |  Output power (W) |
|bmsChgUpline|0 | 100 | % | 1 |  Upper limit of UPS charging of BMS |
|remainTime|0 | 15000 | min | 1 |  Remaining time |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|chgDsgMosState| Status of charging and discharging MOS | {0:OK?} |
|ptcHeatingEvent| PTC stop heating event | {0:OK?} |
|upsFlag| Status of UPS mode | {0:OK?} |
|warnCode| Alarm code | {0:OK?} |
|openBmsIdex| Enable the battery or not. 0: not enabled, 1: enabled | {0:not enabled,1:enabled} |
|ptcHeatingFlag| Current status of PTC: 0: stop, 1: heating, in delay due to error | {0:stop,1:heating, in delay due to error} |
|proChgDsgMosState| Pre-discharging MOS status | {0:OK?} |
|chgState| Charging/Discharging status | {0:charging?,1:discharging?} |
|ptcMosErr| Heating MOS exception | {0:OK?} |
|ptcAllowFlag| Allow PTC heating indication: 0: not allowed, 1: allowed | {0:not allowed,1:allowed} |
|eventCode| Event code | {0:OK?} |
|errCode| Error code | {0:OK?} |
|ptcTouchFlag| PTC triggering event: 0: not triggered, 1: heating by charging, 2: heating by discharging | {0:not triggered,1:heating by charging,2:heating by discharging} |
|balanceFlag| Balancing status | {0:OK?} |
|bmsFault| BMS permanent failure | {0:OK?} |
|bmsType| 0:BP5000 1:BP2000 | {0:BP5000,1:BP2000} |
|doubleOilErrorFlag| Dual smart generator error | {0:OK?} |

## bbcout

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|dsgEnergy|0 |  n/a | Wh | 1 |  Accumulative power discharged (Wh) |
|ldOutCurr|0 | 60 | A | 0.001 |  Output current (mA) |
|ldOutWatts|0 | 7200 | W | 1 |  Output power (W) |
|hs1Temp|0 | 60 | °C | 1 |  Radiator 1 temperature (℃) |
|l1Curr|0 | 30 | A | 0.001 |  Inductor L1 current (mA) |
|batCurr|0 | 60 | A | 0.001 |  Battery current (mA) |
|batWatts|0 | 7200 | W | 1 |  Battery power (W) |
|l2Curr|0 | 30 | A | 0.001 |  Inductor L2 current (mA) |
|pcbTemp|0 | 100 | °C | 1 |  PCB temperature (℃) |
|hs2Temp|0 | 60 | °C | 1 |  Radiator 2 temperature(℃) |
|standbyTime|0 |  n/a | min | 1 |  Standby time with open load |
|batVol|0 | 60 | V | 0.001 |  Battery voltage (mV) |
|ldOutVol|0 | 60 | V | 0.001 |  Output voltage (mV) |
|dayEnergy|0 |  n/a | Wh | 1 |  Daily power discharged (Wh) |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|workMode| Operating mode, 1: charging mode, 2: power supply mode | {0:charging mode,2:power supply mode} |
|dcOutSta| DC output status | {0:OK?} |
|warnCode| Alarm code | {0:OK?} |
|eventCode| Event code | {0:OK?} |
|cfgVolTag| Configured output voltage type | {0:OK?} |
|errCode| See the preceding details of error codes. | {0:OK?} |

## bmsTotal

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|totalChgDsgState| Overall charging/discharging status, 0: idle, 1: discharging, 2: charging | {0:idle,1:discharging,2:charging} |
|doubleOilErrorFlag| Dual smart generator error | {0:OK?} |
|remindDsgPtcFlag| HUB under-voltage reminder to heat by charging | {0:OK?} |
|warningEvent| Alarm event, 0: no warning, 1: charging, shutoff warning not allowed | {0:no warning,1:charging, shutoff warning not allowed} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|bmsChgUpline|0 | 100 | % | 1 |  Upper limit of UPS charging of BMS |
|totalFullCap|0 | 120000 | mAh | 1 |  Total battery capacity |
|totalOutWatts|0 | 7200 | W | 1 |  Total output power (W) |
|acDcLsplShutdMin|0 | 7200 | min | 1 |  Time to shutoff when both AC and DC enter low power mode |
|totalInWatts|0 | 3000 | W | 1 |  Total input power (W) |
|totalSoc|0 | 100 | % | 1 |  Total SOC |
|lcdOffConfirmS|0 | 7200 | min | 1 |  Screen shutoff time |
|totalAmp|0 | 60 | A | 0.1 |  Total current (0.1 A) |
|totalRemainTime|0 | 15000 | min | 1 |  Total remaining time (min) |
|oilStartDownline|0 | 30 | % | 1 |  Lower limit for the smart generator to start |
|oilStopUpline|60 | 100 | % | 1 |  Upper limit for the smart generator to disable |
|bmsDsgDownline|0 | 30 | % | 1 |  Lower limit of UPS charging of BMS |


## kitscc

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|pv2ErrCode| PV2 error code | {0:OK?} |
|pv1ErrCode| PV1 error code | {0:OK?} |
|alt1VoltLmtEn| Custom restricted voltage 1 enable | {0:OK?} |
|pv2WorkMode| Operating mode, 1: solar, 2: adapter | {1:solar,2:adapter} |
|mppt2SwSta| MPPT2 button status | {0:OK?} |
|alt2VoltLmtEn| Custom restricted voltage 2 enable | {0:OK?} |
|mppt1SwSta| MPPT1 button status | {0:OK?} |
|pv2InputFlag| PV2 input status | {0:OK?} |
|pv1InputFlag| PV1 input status | {0:OK?} |
|pv1WorkMode| Operating mode, 1: solar, 2: adapter | {1:solar,2:adapter} |
|eventCode2| Event code | {0:OK?} |
|eventCode1| Event code | {0:OK?} |
|alt1CableUnit| ALT power charging cable length unit, 0: meter, 1: foot | {0:meter,1:foot} |
|warnCode2| Alarm code | {0:OK?} |
|warnCode1| Alarm code | {0:OK?} |
|pv1_hot_out| pv1_hot_out | {0:OK?,1:?} |
|pv2_hot_out| pv2_hot_out | {0:OK?,1:?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|pv1InWatts|0 | 1600 | W | 1 |  PV1 input power (W) |
|pv2InWatts|0 | 1600 | W | 1 |  PV2 input power (W) |
|chgEnergy|0 |  n/a | Wh | 1 |  Accumulative power discharged (Wh) |
|l1Curr|0 | 60 | A | 0.001 |  Inductor L1 current (mA) |
|alt2CableUnit|0 |  n/a | Wh | 1 |  Accumulative power discharged (Wh) |
|batCurr|0 | 60 | A | 0.001 |  Battery current (mA) |
|batWatts|0 | 7200 | W | 0.01 |  Battery power (W) |
|pv1InCurr|0 | 60 | A | 0.001 |  PV1 input current (mA) |
|pv2InVol|0 | 70 | V | 0.001 |  PV2 input voltage (mV) |
|alt1CableLen|1 | 30 | m | 0.01 |  ALT1 power charging cable length: 1 m to 30 m |
|hs2Temp|0 | 60 | °C | 1 |  Radiator 2 temperature(℃) |
|alt2CableLen|1 | 30 | m | 0.01 |  ALT2 power charging cable length: 1 m to 30 m |
|dayEnergy|0 |  n/a | Wh | 1 |  Daily power discharged (Wh) |
|alt1VoltLmt|0 | 60 | V | 0.1 |  Custom restricted voltage value 1, unit: 100 mV |
|alt2VoltLmt|0 | 60 | V | 0.1 |  Custom restricted voltage value 2, unit: 100 mV |
|hs1Temp|0 | 60 | °C | 1 |  Radiator 1 temperature (℃) |
|pv2InCurr|0 | 60 | A | 0.001 |  PV2 input current (mA) |
|l2Curr|0 | 30 | A | 0.001 |  Inductor L2 current (mA) |
|pcbTemp|0 | 80 | °C | 1 |  PCB temperature (℃) |
|batVol|0 | 60 | V | 0.001 |  Battery voltage (mV) |
|pv1InVol|0 | 70 | V | 0.001 |  PV1 input voltage (mV) |
|dsgEnergy|0 |  n/a | Wh | 1 |  Accumulative power discharged (Wh) |


## onLineModuleSnList

### string

| State  |  Name |
|----------|------|
|m0_customData| Custom data |
|m0_loaderVersion| Loader version |
|m0_moduleAddr| Module static address |
|m0_moduleDAddr| Module dynamic address |
|m0_moduleDetail| Module detail |
|m0_moduleSn| Module SN |
|m0_moduleType| Module type |
|m0_moduleVersion| Module version |
|m1_customData| Custom data |
|m1_loaderVersion| Loader version |
|m1_moduleAddr| Module static address |
|m1_moduleDAddr| Module dynamic address |
|m1_moduleDetail| Module detail |
|m1_moduleSn| Module SN |
|m1_moduleType| Module type |
|m1_moduleVersion| Module version |
|m2_customData| Custom data |
|m2_loaderVersion| Loader version |
|m2_moduleAddr| Module static address |
|m2_moduleDAddr| Module dynamic address |
|m2_moduleDetail| Module detail |
|m2_moduleSn| Module SN |
|m2_moduleType| Module type |
|m2_moduleVersion| Module version |
|m3_customData| Custom data |
|m3_loaderVersion| Loader version |
|m3_moduleAddr| Module static address |
|m3_moduleDAddr| Module dynamic address |
|m3_moduleDetail| Module detail |
|m3_moduleSn| Module SN |
|m3_moduleType| Module type |
|m3_moduleVersion| Module version |
|m4_customData| Custom data |
|m4_loaderVersion| Loader version |
|m4_moduleAddr| Module static address |
|m4_moduleDAddr| Module dynamic address |
|m4_moduleDetail| Module detail |
|m4_moduleSn| Module SN |
|m4_moduleType| Module type |
|m4_moduleVersion| Module version |
|m5_customData| Custom data |
|m5_loaderVersion| Loader version |
|m5_moduleAddr| Module static address |
|m5_moduleDAddr| Module dynamic address |
|m5_moduleDetail| Module detail |
|m5_moduleSn| Module SN |
|m5_moduleType| Module type |
|m5_moduleVersion| Module version |
|m6_customData| Custom data |
|m6_loaderVersion| Loader version |
|m6_moduleAddr| Module static address |
|m6_moduleDAddr| Module dynamic address |
|m6_moduleDetail| Module detail |
|m6_moduleSn| Module SN |
|m6_moduleType| Module type |
|m6_moduleVersion| Module version |
|m7_customData| Custom data |
|m7_loaderVersion| Loader version |
|m7_moduleAddr| Module static address |
|m7_moduleDAddr| Module dynamic address |
|m7_moduleDetail| Module detail |
|m7_moduleSn| Module SN |
|m7_moduleType| Module type |
|m7_moduleVersion| Module version |
|m8_customData| Custom data |
|m8_loaderVersion| Loader version |
|m8_moduleAddr| Module static address |
|m8_moduleDAddr| Module dynamic address |
|m8_moduleDetail| Module detail |
|m8_moduleSn| Module SN |
|m8_moduleType| Module type |
|m8_moduleVersion| Module version |
|m9_customData| Custom data |
|m9_loaderVersion| Loader version |
|m9_moduleAddr| Module static address |
|m9_moduleDAddr| Module dynamic address |
|m9_moduleDetail| Module detail |
|m9_moduleSn| Module SN |
|m9_moduleType| Module type |
|m9_moduleVersion| Module version |

## wireless

### string

| State  |  Name |
|----------|------|
|scenes| Scenario |

## bbcin

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errCode| See the preceding details of error codes. | {0:OK?} |
|workMode| Operating mode, 1: charging mode, 2: power supply mode | {1:charging mode,2:power supply mode} |
|dcInState| DC input status, 0: not connected, 1: connected | {0:not connected,1:connected} |
|bpOnlinePos| BP in place information, BIT0:BP1 in place, BIT1:BP2 in place, BIT2:BP3 in place | {0:OK?} |
|inHwTpe| Input wire harness type, 0: ALT wire, 1: PV wire | {0:ALT wire,1:PV wire} |
|chgType| Charging type, 0: unknown, 1: ALT, 2: PV | {0:unknown,1:ALT,2:PV} |
|isCarMoving| Operating or not, enable after charging and operating | {0:OK?} |
|chargeMode| 0: charging, 1: discharging | {0:charging,1:discharging} |
|warnCode| Alarm code | {0:OK?} |
|eventCode| Event code | {0:OK?} |
|workMode2| Operating mode, 0: charging mode, 1 reverse charging mode | {0:charging mode,1:reverse charging mode} |
|allowDsgOn| Operation status: 1: allow to open the discharging switch, 0: not allow to open the discharging switch | {0:not allow to open the discharging switch,1:allow to open the discharging switch} |
|chgPause| Pause of charging, 0: normal, 1: pause charging | {0:normal,1:pause charging} |
|shakeCtrlDisable| Disable vibration detection while operating, 0 enabled, 1 disabled | {0:enabled,1:disabled} |
|altCableUnit| ALT power charging cable length unit, 0: meter, 1: foot | {0:meter,1:foot} |
|altVoltLmtEn| Custom restricted voltage enable | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|dcInVol|0 | 60 | V | 0.001 |  Input voltage (mV) |
|dcInCurr|0 | 60 | A | 0.001 |  Input current (mA) |
|dcInWatts|0 | 1600 | W | 1 |  Input power (W) |
|batVol|0 | 60 | V | 0.001 |  Battery voltage (mV) |
|batCurr|0 | 60 | A | 0.001 |  Battery current (mA) |
|batWatts|0 | 3600 | W | 1 |  Battery power (W) |
|l1Curr|0 | 30 | A | 0.001 |  Inductor L1 current (mA) |
|l2Curr|0 | 30 | A | 0.001 |  Inductor L2 current (mA) |
|hs1Temp|0 | 60 | °C | 1 |  Radiator 1 temperature (℃) |
|hs2Temp|0 | 60 | °C | 1 |  Radiator 2 temperature(℃) |
|pcbTemp|0 | 60 | °C | 1 |  PCB temperature (℃) |
|chgMaxCurr|0 | 70 | A | 0.001 |  Maximum charging current configured (mA) |
|dayEnergy|0 |  n/a | Wh | 1 |  Daily power discharged (Wh) |
|dsgEnergy|0 |  n/a | Wh | 1 |  Accumulative power discharged (Wh) |
|altCableLen|1 | 30 | m | 0.01 |  ALT power charging cable length |
|altVoltLmt|0 | 60 | V | 0.1 |  Custom restricted voltage value, unit: 100 mV |


## iclow

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errCode| Error code | {0:OK?} |
|warn_code| Alarm keyword | {0:OK?} |
|event_code| Event keyword | {0:OK?} |
|fanLevel| Fan level: 0–3 | {0:OK?} |
|chgType| Charger type, 0: NULL, 1: AC charging, 2: adapter charging, 3: solar panel charging, 0xff: unknown charger type | {0:NULL,1:AC charging,2:adapter charging,3:solar panel charging,0xff:unknown charger type} |
|chgDsgState| Charging/discharging status, bit0~bit1: 00: idle, 01: discharging, 10: charging | {0:OK?} |
|protectState| Exception information displayed, BIT0: high temperature, BIT1: low temperature, BIT2: overload, BIT3: charging exception, BIT4: fan exception, BIT5: communication exception, BIT6: BMS failure | {0:OK?} |
|chrgFlag| 0: BMS idle or disconnected, 1: allowed to charge 2: not allowed to charge | {0:BMS idle or disconnected,1:allowed to charge,2:not allowed to charge} |
|chgInType| Input type of charging and discharging, bit0~bit1: 00: null, 01: AC, 10: MPPT, 11: AC && MPPT | {0:OK?} |
|extKitType| External accessory type, CC/PR/BC(SP), only MR500 is valid | {0:OK?} |
|lsplFlag| Low power indication, 1: enter low power mode, 0: exit low power mode | {0:exit low power mode,1:enter low power mode} |
|warnCode| Alarm code | {0:OK?} |
|eventCode| Event code | {0:OK?} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|batVol|0 | 60 | V | 0.001 |  Battery voltage (mV) |
|batCurr|0 | 60 | A | 0.001 |  Battery current (mA) |
|busVol|0 | 60 | V | 0.0001 |  Bus Voltage (mV) |
|dcTemp|0 | 60 | °C | 1 |  DC temperature |
|maxChgCurr|0 | 60 | A | 0.001 |  Maximum chargeable current (mA) |
|bmsChgCurr|0 | 60 | A | 0.001 |  BMS chargeable current (mA) |
|chgBatVol|0 | 60 | V | 0.001 |  Charging voltage (mA) |
|realSoc|0 | 100 | 5 | 1 |  Real SOC |


## ichigh

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|inVol|0 | 60 | V | 0.001 |  Input voltage (mV) |
|inCurr|0 | 60 | A | 0.001 |  Input current (mA) |
|inWatts|0 | 60 | W | 1 |  Input power (W) |
|outVol|0 | 250 | V | 0.001 |  Output voltage (mV) |
|outCurr|0 | 60 | A | 0.001 |  Output current (mA) |
|outWatts|0 | 60 | W | 1 |  Output power (W) |
|outVa|0 | 7200 | VA | 1 |  Output apparent power (VA) |
|acTemp|0 | 60 | °C | 1 |  AC temperature |
|inFreq|0 | 62 | Hz | 1 |  Inverter input frequency (Hz) 0,50,60 |
|outFreq|0 | 62 | Hz | 1 |  Inverter output frequency (Hz) 0,50,60 |
|cfgOutFreq|0 | 60 | Hz | 1 |  Output frequency (Hz) |
|inputWhInDay|0 |  n/a | Wh | 1 |  1 day input watt-hour |
|outputWhInDay|0 |  n/a | Wh | 1 |  1 day output watt-hour |
|acVolSet|0 | 250 | V | 1 |  RMS value, 220/110 V |
|acFreqSet|0 | 60 | Hz | 1 |  50/60Hz |
|acMaxCurrSer|0 | 30 | A | 1 |  Maximum AC input current (A) |
|passByMaxCurr|0 | 60 | A | 1 |  Setting bypass maximum current |
|standbyTime|0 | 60 | min | 1 |  Standby time with open load |
|outAmp2|0 | 60 | A | 0.001 |  Output current channel 2 (mA) |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|invType| Machine type | {0:OK?} |
|invSwSta| Inverter switch, 1: on, 0: off | {0:off,1:on} |
|appCfg| Object Application configuration | {0:OK?} |
|powerOn| Command for discharging; valid for the rising edge, 0: off, 1: on | {0:off,1:on} |
|acChgDisable| Charging not allowed | {0:OK?} |
|acRlyCtrlDis| AC earth relay control not allowed | {0:OK?} |
|wakeup| Exit low power mode, wake up | {0:OK?} |
|ch2Watt| Channel 2 power Is the power of the standalone socket on the KIT for the MM100 project | {0:OK?} |
|passByModeEn| Use the grid power in priority when the button is disabled, 0: ignored, 1: enabled, 2: disabled    | {0:ignored,1:enabled,2:disabled} |

## ldac

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|acTemp1|0 | 80 | °C | 1 |  PCB temperature measurement (℃) |
|acTemp2|0 | 80 | °C | 1 |  PCB temperature measurement (℃) |
|acInVol|0 | 250 | V | 0.001 |  Input voltage (mV) |
|acTotalWatts|0 | 7200 | W | 1 |  Total active power (W) |


### array

| State  |  Name |
|----------|------|
|acChWatt| 6-way channel active power (W) |
|errorCodeAdd| Matching of comments for error codes (supplementary) |
|acChCur| 6-way channel current (mA) |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|acChSta| 6-way channel status, bot0-&gt;ch1, 0: off, 1: on | {0:off,1:on} |
|acSetChSta| Setting 6-way channel status, bot0-&gt;ch1, 0: not allowed to use, 1: allowed to use   | {0:not allowed to use,1:allowed to use} |

## lddc

### string

| State  |  Name |
|----------|------|
|moduleSn| Module SN# |

### array

| State  |  Name |
|----------|------|
|errorCode| Error code |
|dcChCur| 12-way channel current (mA) |
|dcChWatt| Total power + 12-way channel active power (W) |
|errorCodeAdd| Error codes (supplementary) |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|dcInVol|0 | 60 | V | 0.001 |  Input voltage (mV) |
|dcTotalWatts|0 | 7200 | W | 1 |  Total power (W) |
|dcTemp1|0 | 80 | °C | 1 |  PCB temperature measurement (℃) |
|dcTemp2|0 | 60 | °C | 1 |  PCB temperature measurement (℃) |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|dcChRelay| 6-way relay status, bit0-&gt;ch1, 0: off, 1: on | {0:off,1:on} |
|dcChSta| 12 way channel status bit0-&gt;ch1 0: off 1: on | {0:off,1:on} |
|dcSetChSta| Setting 12 way channel status bot0-&gt;ch1 0: not allowed to use 1: allowed to use | {0:not allowed to use,1:allowed to use} |

