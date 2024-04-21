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

Install the adapter from github (adapter is not yet in the stable repo).

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

Use the tab "Device(s) Configuration" for adding your power equipment.

<details><summary><i> Parametrizing the Powerstream</i></summary>
<p>

* add a new row
* set the deviceID of Powerstream as shown in the app, something like "HW51...."
* give it a name
* select the version (600W or 800W)

</p></details>

<details><summary><i>Parametrizing the Powerstation</i></summary>
<p>

* add a new row
* set the deviceID of Powerstation as shown in the app, string varies by type of device
* give it a name
* select the device type
* if additional battery pack is connected, check the port number where it is connected

</p></details>

<details><summary><i>Parametrizing the Smart Plug</i></summary>
<p>

* add a new row
* set the deviceID of Smart Plug as shown in the app, something like "HW52...."
* give it a name
* set the type to "plug"

</p></details>

Use the tab "Generator / SHP Configuration" for adding your power equipment.

<details><summary><i>Parametrizing the Generator</i></summary>
<p>

* add a new row
* set the deviceID of Generator as shown in the app, something like "DGEB...."
* give it a name
* set the type to "Generator"

</p></details>

<details><summary><i>Parametrizing the Smart Home Panel</i></summary>
<p>

* add a new row
* set the deviceID of Generator as shown in the app, something like "SP10...."
* give it a name
* set the type to "panel"

</p></details>

Use the tab "Wave / Glacier Configuration" for adding your equipment.

<details><summary><i>Parametrizing the Wave</i></summary>
<p>

* add a new row
* set the deviceID of Smart Plug as shown in the app, something like "KT21ZCH..."
* give it a name
* set the type to "Wave2"

</p></details>

<details><summary><i>Parametrizing the Glacier</i></summary>
<p>

* add a new row
* set the deviceID of Smart Plug as shown in the app, something like "BX11ZCB..."
* give it a name
* set the type to "Glacier"

</p></details>

Use the tab "Homeassistant" for setup of MQTT connection to HA

<details><summary><i>Parametrizing Homeassistant Connector</i></summary>
<p>

* enable the service
* set the user settings of the MQTT Broker of HA
* set the connection parameter of the MQTT Broker of HA
* select debug settings if required

Modification at HA side:

* The adapter uses the discovery function in HA, no configuration of datapoints in HA is needed.
* MQTT add-on ...

</p></details>

## ioBroker adapter functions 

* the defined devices are connected to the adapter via mqtt
* the adapter filters the incomming messages of the devices. only changed values are stored internally
* if the App prevents adjusting at a certain condition, when known it is replicated (e.g. inverter ON when below minimum battery charge is prevented, you can see a warning in the log )
* not everything is known, so information to status interpretation may be uncertain, this is mostly marked with trailing "?"

### remarks to update of data point setup (min, max, unit, ....)

If settings to a data point are changed in the new version of adapter (e.g. name, unit, max value) the change is not effective until you:
- stop the adapter instance
- delete the respective datapoint or the whole object structure of the adapter instance
- start the adapter instance

During startup the datapoints are created, but not changed when existing.

### remarks to warnings/errors

Some occurances in the adapter are tagged as warning or error in order to appear in the log when the loglevel is in info mode.
This is not necessarily a failure or an indicator for not working adapter, it is more a sign for a not expected behaviour. The cause might not be in the adapter itself, but the attention is set.

## HA connector/gateway

* the MQTT discovery function in HA enables an elegant way of information exchange
* the MQTT discovery function may not be activated when MQTT broker is already running in HA, it needs to be enabled during reconfiguration of MQTT service
* at each start of iobroker adapter all discovery objects are transmitted to HA (even they should retain in HA)
* iobroker adapter filters the incomming messages of the devices. only changed values are stored internally and transferred to HA.
* if a value is not set by device data update, it will appear as unknown in HA
* if the device is reachable, then the availability will be shown in the device connectivity, this is inherited to the "sub-devices" (unavailability is precessed in the same way)

### annotations to functionality

* Due to to the asynchronity of information updates and command transfer sometimes race conditions may be visible. So a switch is commanded and its toggling back and forth before it stays, can be observed.
* restart of HA may not be recognized correctly in iobroker, so it needs a manual restart of the adapter (WIP)

## Implemented Devices

some explanation to the device data
* number -> data point with numeric value
* level -> adjustable data point with numeric value, sometimes also selections which have numeric representation
* switch -> adjustable data point boolean
* diagnostic -> boolean or multi state data point transferred to text
* string -> datapoint as text only
* array -> datapoint with array
* value to text conversion might use a non-validated text (feedback is welcome), this is indicated be "?" at the end of text


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

![Delta Pro Ultra](./doc/devices/deltaproultra.md)

### Smart Home Panel
![Smart Home Panel](./doc/devices/panel.md)

### Generator
![Generator](./doc/devices/generator.md)

Dual Fuel generator is not available, could be implemented, if data is available.

### Powerstream
![Powerstream](./doc/devices/pstream600.md)

The 800W version is also implemented and only difference ist the 800W maximum power.
supply priority -> 0/false = prioritized grid supply; 1/true = prioritized battery supply (charging)

### Smart Plugs
![Smart Plug](./doc/devices/plug.md)

### Wave 2 Air conditioner
![Wave2](./doc/devices/wave2.md)

Wave is not available, could be implemented, if data is available.

### Glacier refrigerator
![Glacier](./doc/devices/glacier.md)


## ToDo
* check forgotten boundary conditions for commands (inhibit cmd, or additional value)
* check beep command if reversing needed

## Changelog
### 0.0.29 (npm)
* (foxthefox) new objects for wave2
* (foxthefox) device emulation
* (foxthefox) mppt max value corrections

### 0.0.28 (npm)
* (foxthefox) fix value normalization (DP,wave2,glacier)
* (foxthefox) set actions initially to false to avoid null
* (foxthefox) fix latestQuotas for glacier/wave2
* (foxthefox) enhance logging

### 0.0.27 (npm)
* (foxthefox) fixed issues with additional battery and homeassistant transfer
* (foxthefox) bmsMaster Delta Pro new points (maxVolDiff,mosState,cellSeriesNum,cellNtcNum)
* (foxthefox) fix issue with SHP heartbeat.errorCodes

### 0.0.26 (npm)
* (foxthefox) bmasMaster.amp max = 50
* (foxthefox) corrections SHP

### 0.0.25 (npm)
* (foxthefox) new datapoints for DeltaPro

### 0.0.24 (npm)
* (foxthefox) SHP incomming data processing

### 0.0.23 (npm)
* (foxthefox) correction to latestQuotas (shift from info to action)
* (foxthefox) X_Unknown_15 range max 1000
* (foxthefox) new debug button for devices with protobuf msg

### 0.0.22 (npm)
* (foxthefox) Homeassistant Connector/Gateway
* (foxthefox) added Generator (indication only, no knowledge on commands)
* (foxthefox) added Delta Pro Ultra
* (foxthefox) added Smart Home Panel
* (foxthefox) latestQuotas/getTimeTaskConfig moved from info to action
* (foxthefox) uptime no max boundary
* (foxthefox) several adjustable values which represent a mode or predefined set of settings are now using "states" definition (IOB)
* (foxthefox) changed factor for pd/usb1Watts, usb2Watts, qcUsb1Watts, qcUsb2Watts
* (foxthefox) info for offline/online status with EF cloud
* (foxthefox) correction for protobuf cmds (dataLen)
* (foxthefox) some strings are now diagnostic
* (foxthefox) X_unknown_15/17/34 are now numbers
* (foxthefox) skip telegrams where openBmsIdx=0, bqSysStatReg=0
* (foxthefox) deltapro mppt value changes (inWatts/outWatts max=1600, mult= 0.001)
* (foxthefox) deltapro new values bmsMaster.diffSoc, bmsMaster.packSn


### 0.0.21 (npm)
* (foxthefox) more debug on connection
* (foxthefox) new datapoints for wave2
* (foxthefox) deleted max on duration values
* (foxthefox) moved several datapoints from number/string to arrays (mainly wave2/glacier)
* (foxthefox) moved datapoints from string to arrays (bms*.hwVersion, bms*.hwEdition, bms*.cellVol, bms*.cellTemp, pd.bmsKitState)
* (foxthefox) plug switch "dynWattEnable" which includes plug for dynamic watts of powerstream

### 0.0.20 (npm)
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

