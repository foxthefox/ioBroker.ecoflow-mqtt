# States for  ALTERNATOR
### version: 1.1.0

[alternatorHeartbeat](#alternatorHeartbeat)



## alternatorHeartbeat

### string

| State  |  Name |
|----------|------|
|status1| X_status1 |
|unknown130| X_unknown130 |
|unknown427| X_unknown427 |
|unknown428| X_unknown428 |
|unknown608| X_unknown608 |
|unknown609| X_unknown609 |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|temp|0 | 80 | °C | 1 |  Temperature |
|actPower|0 | 800 | W | 1 |  Alternator actual power |
|carBatVolt|10 | 30 | V | 1 |  Car battery voltage |
|batSoc|0 | 100 | % | 1 |  Powerstation battery state of charge |
|unknown268|0 | 144000 | min | 1 |  Battery Charging Time |
|unknown269|0 | 144000 | min | 1 |  Battery Discharging Time |
|current425|0 | 30 | A | 0.001 |  current |
|wifiRssi|-90 | 10 | dBm | 1 |  Wifi RSSI |
|ratedPower|0 | 800 | W | 1 |  Alternator rated power |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|startVoltage| 11 | 30 | V | 0.1 |  Start voltage | {dest:20,cmdFunc:2,cmdId:17,dataLen:6} |
|operationMode| 1 | 3 |  | 1 |  Operation mode | {dest:20,cmdFunc:2,cmdId:17,dataLen:6} |
|permanentWatts| 0 | 800 | W | 1 |  Permanent Power Limit | {dest:20,cmdFunc:2,cmdId:17,dataLen:6} |

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|startStop| off | on | Start/Stop cmd | {dest:20,cmdFunc:2,cmdId:17,dataLen:6} |

