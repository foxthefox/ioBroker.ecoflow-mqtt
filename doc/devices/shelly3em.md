# States for  SHELLY3EM
### version: 1.4.1

[emeters](#emeters)

[communication](#communication)



## emeters

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|currentL1|0 | 50 | A | 1 |  Current L1 |
|currentL2|0 | 50 | A | 1 |  Current L2 |
|currentL3|0 | 50 | A | 1 |  Current L3 |
|voltageL1|0 | 250 | V | 1 |  Voltage L1 |
|voltageL2|0 | 250 | V | 1 |  Voltage L2 |
|voltageL3|0 | 250 | V | 1 |  Voltage L3 |
|powerL1|0 | 23000 | W | 1 |  Power L1 |
|powerL2|0 | 23000 | W | 1 |  Power L2 |
|powerL3|0 | 23000 | W | 1 |  Power L3 |
|pfL1|0 | 1 |  | 1 |  Powerfactor L1 |
|pfL2|0 | 1 |  | 1 |  Powerfactor L2 |
|pfL3|0 | 1 |  | 1 |  Powerfactor L3 |
|totalL1|0 |  n/a | kWh | 0.001 |  Energy L1 |
|totalL2|0 |  n/a | kWh | 0.001 |  Energy L2 |
|totalL3|0 |  n/a | kWh | 0.001 |  Energy L3 |
|total_returnedL1|0 |  n/a | kWh | 0.001 |  Energy returned L2 |
|total_returnedL2|0 |  n/a | kWh | 0.001 |  Energy returned L2 |
|total_returnedL3|0 |  n/a | kWh | 0.001 |  Energy returned L3 |
|total_power|0 |  n/a | W | 1 |  Total power |


## communication

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|cloud_connected| cloud connected | {false:off,true:on} |
|cloud_enabled| cloud enabled | {false:off,true:on} |
|mqtt_connected| mqtt connected | {false:off,true:on} |
|wifi_sta_connected| wifi_sta connected | {false:off,true:on} |

