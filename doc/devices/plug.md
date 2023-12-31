# States for  PLUG
### version: 0.0.15

[plug_heartbeat](#plug_heartbeat)

[energy](#energy)

[info](#info)



## plug_heartbeat

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errCode| Plug Error Code | {0:OK ?} |
|warnCode| Plug Warn Code | {0:OK ?} |

### string

| State  |  Name |
|----------|------|
|country| Install Country |
|town| Install Town |
|unknown16| unknown16 |
|unknown17| unknown17 |
|unknown18| unknown18 |
|unknown19| unknown19 |
|unknown20| unknown20 |
|unknown21| unknown21 |
|unknown22| unknown22 |
|unknown23| unknown23 |
|unknown24| unknown24 |
|unknown25| unknown25 |
|unknown26| unknown26 |
|unknown27| unknown27 |
|unknown28| unknown28 |
|unknown29| unknown29 |
|unknown30| unknown30 |
|unknown31| unknown31 |
|cntPlugs_32| count of included plugs |
|streamPower_33| PS delivery power |
|sumInclPlugs_34| sum power of included plugs *10 |
|unknown35| unknown35 |
|unknown36| unknown36 |
|unknown37| unknown37 |
|unknown38| unknown38 |
|unknown39| unknown39 |
|unknown40| unknown40 |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|maxCur|0 | 11 | A | 0.1 |  Plug AC max. current |
|temp|0 | 80 | °C | 1 |  Plug temperature |
|freq|0 | 52 | Hz | 1 |  Plug AC frequency |
|current|0 | 11 | A | 0.001 |  Plug AC current |
|volt|0 | 250 | V | 1 |  Plug AC voltage |
|watts|0 | 2500 | W | 0.1 |  Plug AC power |
|heartbeatFrequency|0 | 20 | 1/s | 1 |  Plug heartbeat |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|switch| off | on | Plug Switch | {cmdFunc:2,cmdId:129,dataLen:2} |
|mesh_enable| off | on | Plug Mesh enable | {cmdFunc:2,cmdId:138,dataLen:2} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|brightness| 0 | 100 | % | 0.097752 |  Plug brightness | {cmdFunc:2,cmdId:130,dataLen:3} |
|maxWatts| 1000 | 2500 | W | 1 |  Plug Max. AC power | {cmdFunc:2,cmdId:137,dataLen:3} |

## energy

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|watth5|0 | 60000 | Wh | 1 |  Energy of smart plug |
|watth6|0 | 1440 | min | 1 |  Smart plug ON time |


## info

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|latestQuotas| no trigger | trigger | Get latest Quotas | {cmdFunc:20,cmdId:1,dataLen:0} |

