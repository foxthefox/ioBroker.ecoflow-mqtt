# States for  GENERATOR
### version: 1.4.4

[oil](#oil)



## oil

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|oilVal|0 | 100 | % | 1 |  Fuel tank |
|acPower|0 | 2000 | W | 1 |  AC power |
|totalPower|0 | 2000 | W | 1 |  Total power |
|remainTime|0 | 5999 | min | 1 |  Remaining time |
|dcPower|0 | 2000 | W | 1 |  DC power |
|oilMaxOutPower|0 | 2000 | W | 1 |  Oil max power |
|motorUseTime|0 |  n/a | min | 1 |  Working duration of generator |


### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|acState| AC state | {0:off,1:on} |
|sysMode| System Mode | {0:eco?,1:full power?} |
|errCode| Error Code | {0:OK?} |
|dcOutState| DC out state | {0:off,1:on} |
|motorState| Motor state | {0:off,1:on} |

### string

| State  |  Name |
|----------|------|
|num| num |
|type| type |
|version| version |
|ceelId| ceelId |

