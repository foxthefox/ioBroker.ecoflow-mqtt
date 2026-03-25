# States for  RAPIDPRO320
### version: 1.4.8

[RuntimePropertyUpload](#RuntimePropertyUpload)

[DisplayPropertyUpload](#DisplayPropertyUpload)



## RuntimePropertyUpload

### string

| State  |  Name |
|----------|------|
|displayPropertyFullUploadPeriod| Display Property Full Upload Period |
|displayPropertyIncrementalUploadPeriod| Display Property Incremental Upload Period |
|runtimePropertyFullUploadPeriod| Runtime Property Full Upload Period |
|runtimePropertyIncrementalUploadPeriod| Runtime Property Incremental Upload Period |

## DisplayPropertyUpload

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|errcode| Global error code | {0:OK?} |
|sysStatus| System status | {0:device off,1:device on,2:device standby} |
|cmsChgDsgState| Charging/Discharging status | {0:not charging or discharging,1:discharging,2:charging} |

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powInSumW|-400 | 400 | W | 1 |  Total input power |
|powOutSumW|-400 | 400 | W | 1 |  Total output power |
|cmsBattSoc|0 | 100 | % | 1 |  Overall SOC |
|cmsBattSoh|0 | 100 | % | 1 |  Overall SOH |
|cmsDsgRemTime|0 | 15999 | min | 1 |  Remaining discharging time |
|cmsChgRemTime|0 | 15999 | min | 1 |  Remaining charging time |
|usbApower|-150 | 150 | W | 1 |  power of the USB A port |
|usbAvoltage|-50 | 50 | V | 1 |  voltage of the USB A port |
|usbAcurrent|-10 | 10 | A | 1 |  current of the USB A port |
|usbC1power|-150 | 150 | W | 1 |  power of the USB 1 port |
|usbC1voltage|-50 | 50 | V | 1 |  voltage of the USB 1 port |
|usbC1current|-10 | 10 | A | 1 |  current of the USB 1 port |
|usbC2power|-150 | 150 | W | 1 |  power of the USB 2 port |
|usbC2voltage|-50 | 50 | V | 1 |  voltage of the USB 2 port |
|usbC2current|-10 | 10 | A | 1 |  current of the USB 2 port |
|usbC3power|-150 | 150 | W | 1 |  power of the USB 3 port |
|usbC3voltage|-50 | 50 | V | 1 |  voltage of the USB 3 port |
|usbC3current|-10 | 10 | A | 1 |  current of the USB 3 port |
|usbC4power|-150 | 150 | W | 1 |  power of the USB 4 port |
|usbC4voltage|-50 | 50 | V | 1 |  voltage of the USB 4 port |
|usbC4current|-10 | 10 | A | 1 |  current of the USB 4 port |
|pogoPinpower|-350 | 350 | W | 1 |  power of the pogoPin |
|pogoPinvoltage|-50 | 50 | V | 1 |  voltage of the pogoPin |
|pogoPincurrent|-20 | 20 | A | 1 |  current of the pogoPin |


### level

| State  |      Min     |     Max     |  Unit |  Mult |  Name |  cmd |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|------|
|lcdLight| 0 | 100 | % | 0.390625 |  Screen brightness | {dest:2,cmdFunc:254,cmdId:17,dataLen:2} |
|screenOffTime| 0 | 1800 | s | 1 |  Screen timeout (s) | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMaxChgSoc| 50 | 100 | % | 1 |  Charge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |
|cmsMinDsgSoc| 0 | 30 | % | 1 |  Discharge limit | {dest:2,cmdFunc:254,cmdId:17,dataLen:3} |

### string

| State  |  Name |
|----------|------|
|moduleWifiRssi| Wi-Fi signal intensity |

### array

| State  |  Name |
|----------|------|
|devErrcodeList| dev Errcode List |

