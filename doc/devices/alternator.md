# States for  ALTERNATOR
### version: 1.4.5

[alternatorHeartbeat](#alternatorHeartbeat)



## alternatorHeartbeat

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|status1| X_status1 | {0:no undervoltage,32:undervoltage at conn. to car batt. } |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|temp|0 | 80 | °C | 1 |  Temperature |
|alternatorPower|0 | 900 | W | 1 |  Alternator power |
|carBatVolt|10 | 30 | V | 1 |  Car battery voltage |
|batSoc|0 | 100 | % | 1 |  Powerstation battery state of charge |
|unknown269|0 | 144000 | min | 1 |  Battery Charging Time |
|chargeToFull268|0 | 144000 | min | 1 |  Battery Charging Time |
|stationPower|0 | 900 | W | 1 |  Station Power |
|wifiRssi|-100 | 10 | dBm | 1 |  Wifi RSSI |
|ratedPower|0 | 800 | W | 1 |  Alternator rated power |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|switchOFF130| off | on | Switch OFF cmd | {dest:20,cmdFunc:254,cmdId:17,dataLen:3} |
|startStop| off | on | Start/Stop cmd | {dest:20,cmdFunc:254,cmdId:17,dataLen:3} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|startVoltage| 11 | 30 | V | 0.1 |  Start voltage | {dest:20,cmdFunc:254,cmdId:17,dataLen:4} |
|operationMode| 1 | 3 |  | 1 |  Operation mode | {dest:20,cmdFunc:254,cmdId:17,dataLen:3} |
|permanentWatts| 0 | 800 | W | 1 |  Permanent Power Limit | {dest:20,cmdFunc:254,cmdId:17,dataLen:6} |
|cableLength608| 0 | 10 | m | 1 |  X_cableLength608 | {dest:20,cmdFunc:254,cmdId:17,dataLen:6} |

### string

| State  |  Name |
|----------|------|
|unknown427| X_unknown427 |
|unknown428| X_unknown428 |
|unknown609| X_unknown609 |

