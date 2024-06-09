# States for  PSTREAM
### version: 0.0.33

[inverter_heartbeat](#inverter_heartbeat)

[InverterHeartbeat2](#InverterHeartbeat2)

[energy](#energy)



## inverter_heartbeat

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|pv1InputVolt|0 | 60 | V | 0.1 |  PV1 input voltage |
|pv1OpVolt|0 | 62 | V | 0.01 |  PV1 operation voltage |
|pv1InputCur|0 | 13 | A | 0.1 |  PV1 input current |
|pv1InputWatts|0 | 600 | W | 0.1 |  PV1 input power |
|pv1Temp|0 | 80 | °C | 0.1 |  PV1 mppt temperature |
|pv2InputVolt|0 | 60 | V | 0.1 |  PV2 input voltage |
|pv2OpVolt|0 | 62 | V | 0.01 |  PV2 operation voltage |
|pv2InputCur|0 | 13 | A | 0.1 |  PV2 input current |
|pv2InputWatts|0 | 600 | W | 0.1 |  PV2 input power |
|pv2Temp|0 | 80 | °C | 0.1 |  PV2 mppt temperature |
|batInputVolt|0 | 60 | V | 0.1 |  Battery input voltage |
|batOpVolt|0 | 62 | V | 0.1 |  Battery operation voltage |
|batInputCur|0 | 20 | A | 0.001 |  Battery input current |
|batInputWatts|0 | 800 | W | 0.1 |  Battery input power |
|batTemp|0 | 90 | °C | 0.1 |  Battery temperature |
|batSoc|0 | 100 | % | 1 |  Battery state of charge |
|llcInputVolt|0 | 65 | V | 0.1 |  Converter input voltage |
|llcOpVolt|0 | 62 | V | 0.01 |  Converter operation voltage |
|llcTemp|0 | 80 | °C | 0.1 |  Converter temperature |
|invInputVolt|0 | 60 | V | 0.01 |  Inverter DC input voltage |
|invOpVolt|0 | 250 | V | 0.1 |  Inverter AC output voltage |
|invOutputCur|0 | 20 | A | 0.001 |  Inverter AC output current |
|invOutputWatts|0 | 800 | W | 0.1 |  Inverter AC power |
|invTemp|0 | 80 | °C | 0.1 |  Inverter temperature |
|invFreq|0 | 52 | Hz | 0.1 |  Inverter AC frequency |
|invDcCur|0 | 20 | A | 0.001 |  Inverter DC input current |
|heartbeatFrequency|0 | 20 | Hz | 1 |  Inverter heartbeat |
|dynamicWatts|0 | 10000 | W | 0.1 |  Dynamic Power |
|batChargingTime|0 | 144000 | min | 1 |  Battery Charging Time |
|batDischargingTime|0 | 144000 | min | 1 |  Battery Discharging Time |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|permanentWatts| 0 | 600 | W | 0.1 |  Permanent Power | {cmdFunc:20,cmdId:129,dataLen:3} |
|ratedPower| 0 | 600 | W | 0.1 |  Inverter rated power | {cmdFunc:20,cmdId:146,dataLen:3} |
|lowerLimit| 0 | 30 | % | 1 |  Battery SOC lower limit | {cmdFunc:20,cmdId:132,dataLen:2} |
|upperLimit| 50 | 100 | % | 1 |  Battery SOC upper limit | {cmdFunc:20,cmdId:133,dataLen:2} |
|invBrightness| 0 | 100 | % | 0.1 |  Inverter brightness | {cmdFunc:20,cmdId:135,dataLen:3} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|supplyPriority| supply prio | charge prio | Supply Priority | {cmdFunc:20,cmdId:130,dataLen:2} |
|feedPriority| all sun to power | only permanent watt | Excessive Power Feed Priority | {cmdFunc:20,cmdId:143,dataLen:2} |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|invErrCode| Inverter Error Code | {0:OK,8:high voltage?,72:no voltage?,4096:no voltage,4160:4160,8192:8192,12288:12288} |
|invWarnCode| Inverter Warning Code | {0:0} |
|pv1ErrCode| PV1 Error Code | {0:0,128:128,130:130,256:256,384:384} |
|pv1WarnCode| PV1 Warning Code | {0:0} |
|pv2ErrCode| PV2 Error Code | {0:0,128:128,130:130,256:256,384:384} |
|pv2WarningCode| PV2 Warning Code | {0:0} |
|batErrCode| Battery Error Code | {0:0,4:4,8:8} |
|bpType| Batterypack Type | {0:no battery,1:secondary pack,2:primary pack,3:primary pack} |
|batWarningCode| Battery Warning Code | {0:0} |
|llcErrCode| llc Error Code | {0:0,1:1} |
|llcWarningCode| llc Warning Code | {0:0} |
|wirelessErrCode| Wireless Error Code | {0:0} |
|wirelessWarnCode| Wireless Warning Code | {0:0} |
|pv1Status| PV1 Status | {1:1,2:2,3:3,4:4,6:6,7:7} |
|pv2Status| PV2 Status | {1:1,2:2,3:3,4:4,6:6,7:7} |
|batStatus| Battery Status | {5:5} |
|llcStatus| llc Status | {1:idle,2:starting/check logic,3:3,5:5,6:6} |
|invStatus| Inverter Status | {1:synced/idle,2:starting/check inv. logic,6:successful grid connection,11:disconnected} |
|invRelayStatus| Inverter Relay Status | {0:on,8:8,16:16,17:17,18:18,24:24} |
|pv1RelayStatus| PV1 Relay Status | {0:0} |
|pv2RelayStatus| PV2 Relay Status | {0:0} |
|invOnOff| Inverter OnOff: | {0:0,1:1} |

### string

| State  |  Name |
|----------|------|
|installCountry| Install Country |
|installTown| Install Town |

## InverterHeartbeat2

### string

| State  |  Name |
|----------|------|
|pv1Active_1| X_Unknown_1 |
|pv1Status_2| X_Unknown_2 |
|pv2Active_3| X_Unknown_3 |
|pv2Status_4| X_Unknown_4 |
|X_Unknown_5| X_Unknown_5 |
|status_6| X_Unknown_6 |
|status_9| X_Unknown_9 |
|status_10| X_Unknown_10 |
|X_Unknown_11| X_Unknown_11 |
|X_Unknown_14| X_Unknown_14 |
|X_Unknown_16| X_Unknown_16 |
|X_Unknown_18| X_Unknown_18 |
|X_Unknown_19| X_Unknown_19 |
|X_Unknown_20| X_Unknown_20 |
|X_Unknown_21| X_Unknown_21 |
|X_Unknown_22| X_Unknown_22 |
|X_Unknown_23| X_Unknown_23 |
|X_Unknown_24| X_Unknown_24 |
|X_Unknown_25| X_Unknown_25 |
|X_Unknown_26| X_Unknown_26 |
|X_Unknown_27| X_Unknown_27 |
|X_Unknown_28| X_Unknown_28 |
|X_Unknown_29| X_Unknown_29 |
|X_Unknown_30| X_Unknown_30 |
|X_Unknown_31| X_Unknown_31 |
|X_Unknown_33| X_Unknown_33 |
|X_Unknown_35| X_Unknown_35 |
|X_Unknown_36| X_Unknown_36 |
|X_Unknown_37| X_Unknown_37 |
|X_Unknown_38| X_Unknown_38 |
|X_Unknown_39| X_Unknown_39 |
|X_Unknown_40| X_Unknown_40 |
|X_Unknown_41| X_Unknown_41 |
|X_Unknown_42| X_Unknown_42 |
|X_Unknown_43| X_Unknown_43 |
|plugsConn_44| X_Unknown_44 |
|X_Unknown_47| X_Unknown_47 |
|unixtime_48| X_Unknown_48 |
|X_Unknown_49| X_Unknown_49 |
|unixtime_50| X_Unknown_50 |
|X_Unknown_51| X_Unknown_51 |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|upperLimit|60 | 100 | % | 1 |  Charging upper limit |
|lowerLimit|0 | 30 | % | 1 |  Discharging lower limit |
|baseLoad|0 | 800 | W | 0.1 |  Home base load |
|powerPlugsPos|0 | 10000 | W | 0.1 |  Power of plugs |
|X_Unknown_15|-1000 | 1000 |  | 1 |  X_Unknown_15 |
|X_Unknown_17|0 | 100 |  | 0.0001 |  X_Unknown_17 |
|uptime|0 |  n/a | s | 1 |  Power Stream uptime |
|X_Unknown_34|-100 | 100 |  | 1 |  X_Unknown_34 |
|gridWatt_45|0 | 10000 | W | 0.1 |  Power to Grid |
|powerPlugsNeg|0 | 10000 | W | 0.1 |  Power of plugs (-) |
|wifiRssi|-90 | 10 | dBm | 1 |  wifi RSSI |


## energy

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|watth1|0 | 6000 | Wh | 1 |  Energy to house loads |
|watth2|0 | 6000 | Wh | 1 |  Energy to smart plugs |
|watth3|0 | 6000 | Wh | 1 |  Energy to battery |
|watth4|0 | 6000 | Wh | 1 |  Energy from battery |
|watth7|0 | 6000 | Wh | 1 |  Energy from solar PV1 |
|watth8|0 | 6000 | Wh | 1 |  Energy from solar PV2 |


