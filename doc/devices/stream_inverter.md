# States for  STREAM_INVERTER
### version: 1.4.5

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

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|powGetPv2|0 | 600 | W | 1 |  pow get pv2 |
|plugInInfoPv2Amp|0 | 15 | A | 1 |  plug in info pv2 current |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |
|powGetPv|0 | 600 | W | 1 |  pow get pv |
|invNtcTemp3|0 | 100 | °C | 1 |  inv Ntc Temp 3 |
|plugInInfoPvVol|0 | 60 | V | 1 |  plug in info pv1 vol |
|plugInInfoPvAmp|0 | 15 | A | 1 |  plug in info pv1 current |
|plugInInfoPv2Vol|0 | 60 | V | 1 |  plug in info pv2 vol |
|feedGridModePowLimit|0 | 1500 | W | 1 |  feed Grid Mode Pow Limit |
|gridConnectionVol|0 | 250 | V | 1 |  grid Connection Vol |
|gridConnectionFreq|0 | 62 | Hz | 1 |  grid connection freq |
|gridConnectionPower|0 | 2000 | W | 1 |  Grid Connection Power |
|feedGridModePowMax|0 | 1500 | W | 1 |  feed Grid Mode Pow Max |
|gridConnectionAmp|0 | 15 | A | 1 |  grid connection amp |
|gridConnectionReactivePower|0 | 1200 | var | 1 |  Grid Connection Reactive Power |
|gridConnectionPowerFactor|-1 | 1 |  | 1 |  grid connection power factor |
|invTargetPwr|0 | 1200 | W | 1 |  inv target pwr |
|gridConnectionPowerFactorSetting|-1 | 1 |  | 1 |  grid connection power factor setting |


### string

| State  |  Name |
|----------|------|
|utcTimezoneId| utc timezone id |
|moduleWifiRssi| Wi-Fi signal intensity |
|townCode| town code |
|gridCodeVersion| grid Code Version |
|countryCode| country code |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|utcSetMode| utc set mode | {0:OK?} |
|gridConnectionSta| grid Connection Sta | {0:GRD_STA_NO_VALID,1:GRID_IN,2:GRID_NOT_ONLINE,3:FEED_GRID} |
|gridCodeSelection| grid Code Selection | {0:NULL,1:AUSTRIA,2:SWITZER,3:POLAND,4:NETHERLANDS,5:VDE_4105,6:IEEE_1547,7:USER_DEFINED,8:NORWAY,9:CZECH_REPUBLIC,10:DENMARK,11:IRELAND,12:SWEDEN,13:LATVIA,14:GREECE_A,15:GREECE_B,16:PORTUGAL,17:ROMANIA,18:LITHUANIA,19:HUNGARY,20:ITALY,21:G98,22:G99,23:NTS_631,24:UNE_217001,25:UNE_217002,26:UTE_MAINLAND,27:UTE_50HZ_ISLAND,28:UTE_60HZ_ISLAND,29:BELGIUM,30:UKRAINE,31:SLOVENIA,32:BULGARIA,33:EU_GENERAL,1001:NORTH_AMERICA} |
|factoryModeEnable| factory mode enable | {0:disabled?,1:enabled?} |
|debugModeEnable| debug mode enable | {0:disabled?,1:enabled?} |

### array

| State  |  Name |
|----------|------|
|devErrcodeList| dev Errcode List |
|gridCurtailmentSignal| grid curtailment signal |

