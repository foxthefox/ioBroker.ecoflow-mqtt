# States for  GENERATOR
### version: 0.0.22

[oil](#oil)



## oil

### string

| State  |  Name |
|----------|------|
|oilVal| oilVal |
|num| num |
|type| type |
|version| version |
|ceelId| ceelId |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
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
|sysMode| System Mode | {0:OK?} |
|errCode| Error Code | {0:OK?} |
|dcOutState| DC out state | {0:off,1:on} |
|motorState| Motor state | {0:off,1:on} |

