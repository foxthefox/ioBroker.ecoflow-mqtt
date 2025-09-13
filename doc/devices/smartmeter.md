# States for  SMARTMETER
### version: 1.4.5

[DisplayPropertyUpload](#DisplayPropertyUpload)



## DisplayPropertyUpload

### number
| State  |      Min     |      Max     |  Unit |  Mult |  Name |
|----------|:-------------:|:-------------:|:------:|:-----:|-----|
|voltageL1|0 | 250 | V | 1 |  Voltage L1 |
|voltageL2|0 | 250 | V | 1 |  Voltage L2 |
|voltageL3|0 | 250 | V | 1 |  Voltage L3 |
|totalPower|-23000 | 23000 | W | 1 |  Total Power |
|powerL1|0 | 23000 | W | 1 |  Power L1 |
|powerL2|0 | 23000 | W | 1 |  Power L2 |
|powerL3|0 | 23000 | W | 1 |  Power L3 |
|energyL1daily|0 |  n/a | kWh | 0.001 |  Energy L1 |
|energyL2daily|0 |  n/a | kWh | 0.001 |  Energy L2 |
|energyL3daily|0 |  n/a | kWh | 0.001 |  Energy L3 |
|lifeTimeEnergyConsumption|0 |  n/a | kWh | 0.001 |  Lifetime Consumption |
|lifeTimeEnergyDelivery|0 |  n/a | kWh | 0.001 |  Lifetime Delivery |
|netEnergyConsumption|0 |  n/a | kWh | 0.001 |  net Energy Consumption |
|utcTimezone|-1200 | 1200 |  | 1 |  utc timezone |


### string

| State  |  Name |
|----------|------|
|utcTimezoneId| utc timezone id |
|unknown618| unknown618 |
|unknown619| unknown619 |
|unknown627| unknown627 |
|unknown728| unknown728 |
|unknown729| unknown729 |
|unknown732| unknown732 |
|unknown733| unknown733 |
|unknown762| unknown762 |
|unknown763| unknown763 |
|unknown764| unknown764 |

### diagnostic

| State  |     Name |  values |
|----------|:-------------:|------|
|utcSetMode| utc set mode | {0:OK?} |

