![Logo](admin/ecoflow-mqtt.png)
# ioBroker.ecoflow-mqtt

[![NPM version](https://img.shields.io/npm/v/iobroker.ecoflow-mqtt.svg)](https://www.npmjs.com/package/iobroker.ecoflow-mqtt)
[![Downloads](https://img.shields.io/npm/dm/iobroker.ecoflow-mqtt.svg)](https://www.npmjs.com/package/iobroker.ecoflow-mqtt)
![Number of Installations](https://iobroker.live/badges/ecoflow-mqtt-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/ecoflow-mqtt-stable.svg)

[![NPM](https://nodei.co/npm/iobroker.ecoflow-mqtt.png?downloads=true)](https://nodei.co/npm/iobroker.ecoflow-mqtt/)

**Tests:** ![Test and Release](https://github.com/foxthefox/ioBroker.ecoflow-mqtt/workflows/Test%20and%20Release/badge.svg)

## ecoflow-mqtt adapter for ioBroker

connects to ecoflow products

## WARNING

This adapter uses a non-offical communication with the devices. 
Wrong communication or setting wrong values can affect the functionality of the device.


The adapter is based on the work of:
* my own evaluation and research
* https://github.com/tolwi/hassio-ecoflow-cloud
* https://haus-automatisierung.com/hardware/2023/02/13/ecoflow-river-2-usv-batteriespeicher.html
* https://forum.iobroker.net/topic/66743/ecoflow-connector-script-zur-dynamischen-leistungsanpassung
* https://konkludenz.de/en/making-ecoflow-wave2-smart-home-capable-with-node-red-and-mqtt


## Installation and Configuration

Install the adapter from github.

![some mor details](doc/en/installation.md)

In Admin Page (first tab) the mqqt credentials for the mqqt Broker need to be inserted.
* UserName - something like "app-...."
* UserID - a 19 digit number
* UserPassword - an alphanumeric
* ClientID - a string starting with "ANDROID_...."

There are 3 possibilities:
1. by script https://github.com/mmiller7/ecoflow-withoutflow/blob/main/cloud-mqtt/ecoflow_get_mqtt_login.sh
2. by website https://energychain.github.io/site_ecoflow_mqtt_credentials/
3. by adapters own alogorithm (pressing the button), for this the ecoflow username and password is necessary.

The mqqt Broker settings are default and usually need no modification.

Use the second tab "Device(s) Configuration" for adding your equipment.

Parametrizing the Powerstream:
* add a new row
* set the deviceID of Powerstream as shown in the app, something like "HW51...."
* give it a name
* select the version (600W or 800W)

Parametrizing the Powerstation:
* add a new row
* set the deviceID of Powerstation as shown in the app, string varies by type of device
* give it a name
* select the device type
* if additional battery pack is connected, check the port number where it is connected

Parametrizing the Smart Plug:
* add a new row
* set the deviceID of Smart Plug as shown in the app, something like "HW52...."
* give it a name
* set the type to "plug"

Use the third tab "Wave / Glacier Configuration" for adding your equipment.

Parametrizing the Wave :
* add a new row
* set the deviceID of Smart Plug as shown in the app, something like "KT21ZCH..."
* give it a name
* set the type to "plug"

Parametrizing the Glacier:
* add a new row
* set the deviceID of Smart Plug as shown in the app, something like "BX11ZCB..."
* give it a name
* set the type to "plug"

## data point update

If settings to a data point are changed in the new version of adapter (e.g. name, unit, max value) the change is not effective until you:
- stop the adapter instance
- delete the respective datapoint or the whole object structure of the adapter instance
- start the adapter instance

During startup the datapoints are created, but not changed when existing.

## Implemented Devices

### Powerstation
![River Max](./doc/devices/rivermax.md)

![River Pro](./doc/devices/riverpro.md)

![Delta Mini](./doc/devices/deltamini.md)

![Delta](./doc/devices/delta.md)

![Delta Max](./doc/devices/deltamax.md)

![Delta Pro](./doc/devices/deltapro.md)

![River 2 Max](./doc/devices/river2max.md)

![River 2 Pro](./doc/devices/river2pro.md)

![Delta 2](./doc/devices/delta2.md)

![Delta 2 Max](./doc/devices/delta2max.md)

### Powerstream
![Powerstream](./doc/devices/pstream600.md)

The 800W version is also implemented and only difference ist the 800W maximum power.

### Smart Plugs
![Smart Plug](./doc/devices/plug.md)

### Wave 2 Air conditioner
![Wave](./doc/devices/wave.md)

### Glacier refrigerator
![Glacier](./doc/devices/glacier.md)

## ToDo
* check forgotten boundary conditions for commands (inhibit cmd, or additional value)

## Changelog
### 0.0.20
* (foxthefox) first additional integration tests
* (foxthefox) corrections in data model
* (foxthefox) new datapoints for glacier
* (foxthefox) new button in config for 'debug quotas' (retrieving data for all JSON-devices and displaying it)

### 0.0.19 (npm)
* (foxthefox) better error handling of incomplete messages from pstream
* (foxthefox) added indication of time tasks
* (foxthefox) cleanup pstream/plugs creation (both are protobuf)
* (foxthefox) further refactoring of code -> devices must be again defined !
* (foxthefox) differentiation between actual energy values and historical
* (foxthefox) getAllTaskCfg for powerstations in structure info
* (foxthefox) initial lastQuotas after adapter start for powerstream and plug
* (foxthefox) interpreted unknown values have now clear names
* (foxthefox) cyclic latestQuotas call instead of forced disconnect and reconnect (reconnects value only for checking, if stays with 0/null adapter has still mqtt telegrams)
* (foxthefox) new data points for deltamax
* (foxthefox) corrected pstream value changes to 0 (numbers), pdata must be omitted

### 0.0.18 (npm)
* (foxthefox) correction of wrong version number io io-package.json

### 0.0.17
* (foxthefox) added ems objects for River2Pro
* (foxthefox) more logging to pstream decode
* (foxthefox) spelling correction for latestQuotas 

### 0.0.16
* (foxthefox) correction for array of devices, cause of "loosing" power stations

### 0.0.15
* (foxthefox) new implementation of Wave 2 Air conditioner
* (foxthefox) new implementation of Glacier refrigerator
* (foxthefox) correction of factors for delta2/delta2max/river2pro/river2max (mppt.?Vol, mppt.?Amp, mppt.?Watts)
* (foxthefox) some shifting from string to diagnostics
* (foxthefox) some updates to max values
* (foxthefox) delta2/delta2max pd.chgPowerAC and pd.chgPowerDC changed from power to energy 
* (foxthefox) correction of plug_heartbeat values, protobuf shifts from snake_case to camelCase

### 0.0.14
* (foxthefox) new implementation of River 2 Pro, River 2 Max, River Pro, River Max
* (foxthefox) new feature get "lastQuotas"
* (foxthefox) recfactoring of protobuf encoding
* (foxthefox) watth5=daily energy plug, watth6=on time plug
* (foxthefox) plug_heartbeat new values unknown16...19

### 0.0.13
* (foxthefox) correction for changing of factors for pstations
* (foxthefox) watth5 for plugs
* (foxthefox) more logging pstream/plug
* (foxthefox) optional detection of no updates from mqtt server -> reconnection

### 0.0.12
* (foxthefox) new command brightness for plugs
* (foxthefox) correction of factors for plugs
* (foxthefox) powerstream bpType with value as texts
* (foxthefox) DELTA 2 factors corrected (mppt.inVol, mppt.inAmp,mppt.carOutAmp, mppt.carOutVol)
* (foxthefox) naming of watth1...8 (except 5)

### 0.0.11
* (foxthefox) correction this.pstreamStatesDict to cope with pstream and plug

### 0.0.10
* (foxthefox) unknown pstream message debug possibility
* (foxthefox) inv.outTemp max=90°C, inverter_heartbeat.pv1/2inputWatts max=600W
* (foxthefox) new function -> smart plugs

### 0.0.9
* (foxthefox) final version of credential creation, at least 6.12.3 for admin required
* (foxthefox) pd.wattsInSum max=4000W, pd.wattsOutSum max=4000W
* (foxthefox) unknwon59 -> batChargingTime, battMin -> batDischargingTime
* (foxthefox) processing multiple messages in one datagram 

### 0.0.8
* (foxthefox) Delta2Max mppt.outVol mult=0.001 instead 0.1
* (foxthefox) handling additional battery for Delta2Max
* (foxthefox) pd.dsgPowerAC -> mult 0.001 Delta2Max
* (foxthefox) pd.chgPowerAC -> mult 0.001 Delta2Max
* (foxthefox) inv.acChgRatedPower -> max 4000W
* (foxthefox) inv.FastChgWatts -> max 2400W
* (foxthefox) chgwatts Delta 2 -> min 50W

### 0.0.7
* (foxthefox) jsonUI wrong attr for additional battery corrected

### 0.0.6
* (foxthefox) device doc
* (foxthefox) cfgDcChgCurrent/pv2DcChgCurrent changed back to start at 4A

### 0.0.5
* (foxthefox) cfgDcChgCurrent/pv2DcChgCurrent again with min=0, seems that there comes 0 at a certein telegram and causing warning
* (foxthefox) energy values (yield per day) for powerstream

### 0.0.4
* (foxthefox) new switch inverter_heartbeat.feedPriority (handling the excessive solar energy when battery is full)

### 0.0.3
* (foxthefox) requirement for admin 6.12.2 -> 6.12.0
* (foxthefox) iverter_heartbeat pv1InputCur, pv2InputCur factor corrected now 0.1
* (foxthefox) ems.chgAmp factor 0.0001 ( seemed too high by factor 10 )
* (foxthefox) bmsMaster.tagChgAmp factor 0.0001 ( seemed too high by factor 10 )
* (foxthefox) delta2max command for cfgDcChgCurrent/pv2DcChgCurrent changed
* (foxthefox) ensuring that commanded bppowerSoc value is always minimum 5% higher than the ems.minDsgSoc, also putting actual minDsgSoc into the command

### 0.0.2
* (foxthefox) pv2DcChgCurrent as level in delta2max
* (foxthefox) *pv2DcChgCurrent with range 4-8 and step 2
* (foxthefox) chgPauseFlag as switch in delta2max

### 0.0.1 (npm)
* (foxthefox) initial release

## License
MIT License

Copyright (c) 2023-2024 foxthefox <foxthefox@wysiwis.net>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Disclaimer
This open-source software is not affiliated with or endorsed by the company Ecoflow in any way. 
Use of the software is at your own risk and discretion, and I assume no liability for any potential 
damages or issues that may arise from using the software. It is important to be aware that using 
this open-source software comes without direct support or guarantees from the company Ecoflow.

