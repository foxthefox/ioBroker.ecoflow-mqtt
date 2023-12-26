# States for  PLUG
### version: 0.0.14

[plug_heartbeat](#plug_heartbeat)

[energy](#energy)

[info](#info)



## plug_heartbeat

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|err_code| Plug Error Code | {0:OK ?} |
|warn_code| Plug Warn Code | {0:OK ?} |

### string

| State  |  Name |
|----------|------|
|country| Install Country |
|town| Install Town |
|unknown16| unknown16 |
|unknown17| unknown17 |
|unknown18| unknown18 |
|unknown19| unknown19 |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|max_cur|0 | 11 | A | 0.1 |  Plug AC max. current |
|temp|0 | 80 | °C | 1 |  Plug temperature |
|freq|0 | 52 | Hz | 1 |  Plug AC frequency |
|current|0 | 11 | A | 0.001 |  Plug AC current |
|volt|0 | 250 | V | 1 |  Plug AC voltage |
|watts|0 | 2500 | W | 0.1 |  Plug AC power |
|heartbeat_frequency|0 | 20 | 1/s | 1 |  Plug heartbeat |


### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|switch| off | on | Plug Switch | {cmdFunc:2,cmdId:129,dataLen:2} |
|mesh_enable| off | on | Plug Mesh enable | {cmdFunc:2,cmdId:138,dataLen:2} |

### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|brightness| 0 | 100 | % | 0.00097752 |  Plug brightness | {cmdFunc:2,cmdId:130,dataLen:3} |
|max_watts| 1000 | 2500 | W | 1 |  Plug Max. AC power | {cmdFunc:2,cmdId:137,dataLen:3} |

## energy

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|watth5|0 | 60000 | Wh | 1 |  Energy of smart plug |
|watth6|0 | 60000 | min | 1 |  Smart plug ON time |


## info

### switch

| State  |      off    |  on |  Name |  cmd |
|----------|:-------------:|:------:|------|------|
|latestQuotas| no trigger | trigger | Get latest Quotas | {cmdFunc:20,cmdId:1,dataLen:0} |

