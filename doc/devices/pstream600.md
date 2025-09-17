# States for  PSTREAM
### version: 1.4.6

[inverter_heartbeat](#inverter_heartbeat)

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
|invOutputWatts|0 | 810 | W | 0.1 |  Inverter AC power |
|invTemp|0 | 80 | °C | 0.1 |  Inverter temperature |
|invFreq|0 | 52 | Hz | 0.1 |  Inverter AC frequency |
|invDcCur|0 | 20 | A | 0.001 |  Inverter DC input current |
|heartbeatFrequency|0 | 20 | Hz | 1 |  Inverter heartbeat |
|dynamicWatts|0 | 10000 | W | 0.1 |  Dynamic Power |
|batChargingTime|0 | 144000 | min | 1 |  Battery Charging Time |
|batDischargingTime|0 | 144000 | min | 1 |  Battery Discharging Time |
|pvToInvWatts|0 | 5000 | W | 0.1 |  pv to inv watts |
|gridConsWatts|0 | 10000 | W | 0.1 |  grid cons watts |
|plugTotalWatts|0 | 10000 | W | 0.1 |  plug total watts |
|invToPlugWatts|0 | 5000 | W | 0.1 |  inv to plug watts |
|spaceDemandWatts|0 | 5000 | W | 0.1 |  space demand watts |
|invDemandWatts|0 | 5000 | W | 0.1 |  inv demand watts |
|bmsReqChgVol|0 | 65 | V | 0.0001 |  bms req chg vol |
|bmsReqChgAmp|0 | 15 | A | 0.00001 |  bms req chg amp |
|invToOtherWatts|0 | 5000 | W | 0.1 |  inv to other watts |
|wifiRssi|-90 | 10 | dBm | 1 |  wifi rssi |
|floadLimitOut|0 | 850 | W | 0.1 |  fload limit out |
|invOutputLoadLimit|0 | 850 | W | 0.1 |  inv output load limit |
|batOutputLoadLimit|0 | 850 | W | 0.1 |  bat output load limit |
|pvPowerLimitAcPower|0 | 850 | W | 0.1 |  pv power limit ac power |
|batErrorInvLoadLimit|0 | 850 | W | 0.1 |  bat error inv load limit |
|geneNum|0 | 10 | pcs | 1 |  gene num |
|consNum|0 | 20 | pcs | 1 |  cons num |
|geneWatt|0 | 5000 | W | 0.1 |  gene watt |
|consWatt|0 | 10000 | W | 0.1 |  cons watt |
|acSetWatts|0 | 900 | W | 0.1 |  ac set watts |
|fisoRxyz|0 | 1000 | V | 1 |  fiso rxyz |
|historyPvToInvWatts|0 |  n/a | W | 0.1 |  history pv to inv watts |
|historyBatInputWatts|0 |  n/a | W | 0.1 |  history bat input watts |
|historyInvOutputWatts|0 |  n/a | W | 0.1 |  history inv output watts |
|historyGridConsWatts|0 |  n/a | W | 0.1 |  history grid cons watts |
|historyPlugTotalWatts|0 |  n/a | W | 0.1 |  history plug total watts |
|historyInvToPlugWatts|0 |  n/a | W | 0.1 |  history inv to plug watts |
|historyPermanentWatts|0 |  n/a | W | 0.1 |  history permanent watts |
|espTempsensor|-20 | 90 | °C | 0.1 |  esp tempsensor |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|permanentWatts| 0 | 800 | W | 0.1 |  Permanent Power | {cmdFunc:20,cmdId:129,dataLen:3} |
|ratedPower| 0 | 800 | W | 1 |  Inverter rated power | {cmdFunc:20,cmdId:146,dataLen:3} |
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
|interfaceConnFlag| interface conn flag |
|pv1CtrlMpptOffFlag| pv1 ctrl mppt off flag |
|pv2CtrlMpptOffFlag| pv2 ctrl mppt off flag |
|batOffFlag| bat off flag |
|llcOffFlag| llc off flag |
|acOffFlag| ac off flag |
|uwloadLimitFlag| uwload limit flag |
|invLoadLimitFlag| inv load limit flag |
|batLoadLimitFlag| bat load limit flag |
|antiBackFlowFlag| anti back flow flag |
|uwsocFlag| uwsoc flag |
|uwlowLightFlag| uwlow light flag |
|batSystem| bat system |
|resetReason| reset reason |
|resetCount| reset count |
|meshId| mesh id |
|meshLayel| mesh layel |
|selfMac| self mac |
|parentMac| parent mac |
|staIpAddr| sta ip addr |
|wifiErr| wifi err |
|wifiErrTime| wifi err time |
|mqttErr| mqtt err |
|mqttErrTime| mqtt err time |
|stackFree| stack free |
|stackMinFree| stack min free |
|mqttTlsLastErr| mqtt tls last err |
|mqttTlsStackErr| mqtt tls stack err |
|mqttSockErrno| mqtt sock errno |
|mqttLastDisReason| mqtt last dis reason |
|mqttConnectReturnCode| mqtt connect return code |
|wifiFirmwareVersion| wifi firmware version |
|wifiConnectChannel| wifi connect channel |
|wifiEncryptMode| wifi encrypt mode |
|noiseFloor| noise floor |
|rssiThreshold| rssi threshold |
|rssiVariance| rssi variance |

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
|watth16|0 | 10000 | Wh | 1 |  Energy 16 |
|watth17|0 | 10000 | Wh | 1 |  Energy 17 |
|watth18|0 | 10000 | Wh | 1 |  Energy 18 |


