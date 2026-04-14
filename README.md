![Logo](admin/ecoflow-mqtt.png)

# ioBroker.ecoflow-mqtt

[![NPM version](https://img.shields.io/npm/v/iobroker.ecoflow-mqtt.svg)](https://www.npmjs.com/package/iobroker.ecoflow-mqtt)
[![Downloads](https://img.shields.io/npm/dm/iobroker.ecoflow-mqtt.svg)](https://www.npmjs.com/package/iobroker.ecoflow-mqtt)
![Number of Installations](https://iobroker.live/badges/ecoflow-mqtt-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/ecoflow-mqtt-stable.svg)

[![NPM](https://nodei.co/npm/iobroker.ecoflow-mqtt.png?downloads=true)](https://nodei.co/npm/iobroker.ecoflow-mqtt/)

**Tests:** ![Test and Release](https://github.com/foxthefox/ioBroker.ecoflow-mqtt/workflows/Test%20and%20Release/badge.svg)

## ecoflow-mqtt adapter for ioBroker

connects to products of Ecoflow ([https://www.ecoflow.com])

## WARNING

This adapter uses a non-offical communication with the devices.
Wrong communication or setting wrong values can affect the functionality of the device and may lead to exclusion from the service.

The adapter is based on the work of:

- my own evaluation and research
- https://github.com/tolwi/hassio-ecoflow-cloud
- https://haus-automatisierung.com/hardware/2023/02/13/ecoflow-river-2-usv-batteriespeicher.html
- https://forum.iobroker.net/topic/66743/ecoflow-connector-script-zur-dynamischen-leistungsanpassung
- https://konkludenz.de/en/making-ecoflow-wave2-smart-home-capable-with-node-red-and-mqtt

## EF credentials

In Admin Page (first tab) the mqqt credentials for the mqqt Broker need to be inserted.

- UserName - something like "app-...."
- UserID - a 19 digit number
- UserPassword - an alphanumeric
- ClientID - a string starting with "ANDROID\_...."

There are 3 possibilities:

1. by script https://github.com/mmiller7/ecoflow-withoutflow/blob/main/cloud-mqtt/ecoflow_get_mqtt_login.sh
2. by website https://energychain.github.io/site_ecoflow_mqtt_credentials/
3. by adapters own alogorithm (pressing the button), for this the ecoflow username and password is necessary.

The mqqt Broker settings are default and usually need no modification.

!!! In cases where the mqtt-server refuses the connection it might be helpfull to check with option #2 the output of that website, in some cases it will return a different mqtt-broker address !!!

## Device setup and Configuration

Use the tab "Device(s) Configuration" for adding your equipment.

<details><summary><i> Parametrizing the Powerstream or STREAM</i></summary>
<p>

- add a new row
- set the deviceID of (Power)Stream as shown in the app, something like "HW51..../BK...."
- give it a name
- select the version

</p></details>

<details><summary><i>Parametrizing the Powerstation</i></summary>
<p>

- add a new row
- set the deviceID of Powerstation as shown in the app, string varies by type of device
- give it a name
- select the device type
- if additional battery pack is connected, check the port number where it is connected

</p></details>

<details><summary><i>Parametrizing the Smart Plug</i></summary>
<p>

- add a new row
- set the deviceID of Smart Plug as shown in the app, something like "HW52...."
- give it a name
- set the type to "plug"

</p></details>

<details><summary><i>Parametrizing the Smartmeter</i></summary>
<p>

- add a new row
- set the deviceID of Smartmeter (Shelly or EF) as shown in the app, if Shelly please be aware that the ID is different to the Shelly device itself
- give it a name
- set the type to "Shelly3EM" or "EF smartmeter"

</p></details>

<details><summary><i>Parametrizing the Generator</i></summary>
<p>

- add a new row
- set the deviceID of Generator as shown in the app, something like "DGEB...."
- give it a name
- set the type to "Generator"

</p></details>

<details><summary><i>Parametrizing the Smart Home Panel</i></summary>
<p>

- add a new row
- set the deviceID of Generator as shown in the app, something like "SP10...."
- give it a name
- set the type to "SHP" or "SHP2"

</p></details>

<details><summary><i>Parametrizing the Power Kit & Hub</i></summary>
<p>

- add a new row
- set the deviceID of power kit as shown in the app, something like "M10...."
- give it a name
- set the type to "Power Kit BP2000" or "Power Kit BP5000"
- if there is a second or third battery connected, then check it as slave1 or slave2

</p></details>

<details><summary><i>Parametrizing the Power Ocean DC fit</i></summary>
<p>

- add a new row
- set the deviceID of Generator as shown in the app, something like "HJ31...."
- give it a name
- set the type to "Power Ocean"
- if there is a second or third battery connected, then check it as slave1 or slave2

</p></details>

<details><summary><i>Parametrizing the Wave</i></summary>
<p>

- add a new row
- set the deviceID of Smart Plug as shown in the app, something like "KT21ZCH..."
- give it a name
- set the type to "Wave2"

</p></details>

<details><summary><i>Parametrizing the Glacier</i></summary>
<p>

- add a new row
- set the deviceID of Smart Plug as shown in the app, something like "BX11ZCB..."
- give it a name
- set the type to "Glacier"

</p></details>

<details><summary><i>Parametrizing the Alternator</i></summary>
<p>

- add a new row
- set the deviceID of Smart Plug as shown in the app, something like "F371ZE..."
- give it a name
- set the type to "Alternator 800W"

</p></details>

Use the tab "Homeassistant" for setup of MQTT connection to HA

<details><summary><i>Parametrizing Homeassistant Connector</i></summary>
<p>

- enable the service
- set the user settings of the MQTT Broker of HA
- set the connection parameter of the MQTT Broker of HA
- select debug settings if required

Modification at HA side:

- The adapter uses the discovery function in HA, no configuration of datapoints in HA is needed.
- MQTT add-on ...

</p></details>

## Updating the adapter

Usually it is enough to install the next version on top of the old one. In some cases (e.g. 1.0.0) it might be needed to erase the whole object tree.
If datapoint related values are changed, like min or max of the range, the you have to:

- stop the adapter
- deleted the concerned datapoints
- start the adapter
  After this the new ranges are taken over.

## ioBroker adapter functions

- the defined devices are connected to the adapter via mqtt
- the adapter filters the incomming messages of the devices. only changed values are stored internally
- if the App prevents adjusting at a certain condition, when known it is replicated (e.g. inverter ON when below minimum battery charge is prevented, you can see a warning in the log )
- not everything is known, so information to status interpretation may be uncertain, this is mostly marked with trailing "?"

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

- the MQTT discovery function in HA enables an elegant way of information exchange
- the MQTT discovery function may not be activated when MQTT broker is already running in HA, it needs to be enabled during reconfiguration of MQTT service
- at each start of iobroker adapter all discovery objects are transmitted to HA (even they should retain in HA)
- iobroker adapter filters the incomming messages of the devices. only changed values are stored internally and transferred to HA.
- if a value is not set by device data update, it will appear as unknown in HA
- if the device is reachable, then the availability will be shown in the device connectivity, this is inherited to the "sub-devices" (unavailability is precessed in the same way)

[some_hints_for HA](./doc/en/IOB_HA/navi.md)

### annotations to functionality

- Due to to the asynchronity of information updates and command transfer sometimes race conditions may be visible. So a switch is commanded and its toggling back and forth before it stays, can be observed.

## Implemented Devices & Structure with Datapoints

some explanation to the device data

- number -> data point with numeric value
- level -> adjustable data point with numeric value, sometimes also selections which have numeric representation
- switch -> adjustable data point boolean
- diagnostic -> boolean or multi state data point transferred to text
- string -> datapoint as text only
- array -> datapoint with array
- value to text conversion might use a non-validated text (feedback is welcome), this is indicated be "?" at the end of text

### Powerstation

[River Max](./doc/devices/rivermax.md)

[River Pro](./doc/devices/riverpro.md)

[River 2 Max](./doc/devices/river2max.md)

[River 2 Pro](./doc/devices/river2pro.md)

[River 3](./doc/devices/river3.md)

[River 3 Plus](./doc/devices/river3plus.md)

[Delta Mini](./doc/devices/deltamini.md)

[Delta](./doc/devices/delta.md)

[Delta Max](./doc/devices/deltamax.md)

[Delta 2](./doc/devices/delta2.md)

[Delta 2 Max](./doc/devices/delta2max.md)

[Delta 3](./doc/devices/delta3.md)

[Delta 3 Plus](./doc/devices/delta3plus.md)

[Delta 3 Max Plus](./doc/devices/delta3maxplus.md)

[Delta 3 Classic](./doc/devices/delta3classic.md)

[Delta Pro](./doc/devices/deltapro.md)

[Delta Pro 3](./doc/devices/deltapro3.md)

[Delta Pro Ultra](./doc/devices/deltaproultra.md)

### Smart Home Panel

[Smart Home Panel](./doc/devices/panel.md)

[Smart Home Panel 2](./doc/devices/panel2.md)

### Power Kit & Hub

[Power Kit](./doc/devices/powerkit.md)

### Power Ocean

[Power Ocean DC](./doc/devices/powerocean.md)

[Power Ocean Plus](./doc/devices/poweroceanplus.md)

[Power Ocean DC FIT](./doc/devices/poweroceanfit.md)

### Generator

[Generator](./doc/devices/generator.md)

Dual Fuel generator is not available, could be implemented, if data is available.

### Powerstream & Stream

[Powerstream](./doc/devices/pstream600.md)

[Stream AC](./doc/devices/stream_ac.md)

[Stream AC PRO](./doc/devices/stream_ac_pro.md)

[Stream Ultra](./doc/devices/stream_ultra.md)

[Stream Inverter](./doc/devices/stream_inverter.md)

The 800W version is also implemented and only difference is the 800W maximum power.
supply priority
-> 0/false = prioritized grid supply;
-> 1/true = prioritized battery supply (charging)

### Smart Plugs

[Smart Plug](./doc/devices/plug.md)

### Smartmeter devices

[Shelly3EM](./doc/devices/shelly3em.md)

[Smartmeter](./doc/devices/smartmeter.md)

### Wave Air conditioner

[Wave2](./doc/devices/wave2.md)

[Wave3](./doc/devices/wave3.md)

Wave is not available, could be implemented, if data is available.

### Glacier refrigerator

[Glacier](./doc/devices/glacier.md)

[Glacier Classic 55L](./doc/devices/glacier55.md)

### Alternator

[Alternator](./doc/devices/alternator.md)

### Charger

[Rapid Pro 320W](./doc/devices/rapidpro320.md)

### Unsupported devices

for debugging purpose this section is created, please select the device (delta pro3, delta3, delta3 plus) und put the serial in the added line
it is anticipated that the unknown device is using protobuf
it creates [PROTOBUF unknown] messages in th log, they contain the raw hex telegram

## ToDo

- check forgotten boundary conditions for commands (inhibit cmd, or additional value)
- check beep command if reversing needed
- SlaveBattery DM, outWatts multiplication by 10
- more getCmds for SHP values

## Changelog

### 1.4.9 (WIP)

- (foxthefox) new datapoints Delta2max

### 1.4.8 (npm)

- (foxthefox) new device Glacier Classic 55L support
- (foxthefox) new device Delta 3 Max Plus support
- (foxthefox) new device Stream AC support
- (foxthefox) new device Rapid Pro 320W support
- (foxthefox) enhancements on wave3
- (foxthefox) corrections in river3plus for data processing
- (foxthefox) corrections in D2M for command inv.cfgAcEnabled #340
- (foxthefox) poweroceanplus set hrPwr/fromPv/romBat/fromGrid values to 0 for non transmitted datapoints in HeatingRodEnergyStreamShow
- (foxthefox) poweroceanplus pcsActPwr max 20kW, pcsXPhase_amp max 60A
- (foxthefox) corrections in BMSHeartBeatReport for river3/river3plus
- (foxthefox) powGetSysLoad for streamAC/ACPro/Ultra set to 10kW, powGetSchuko 2100W
- (foxthefox) new msg counter for received telegrams from EF-cloud (within 10s)
- (foxthefox) correction of enBeep (dataLen=2) for Delta3/+/max+/pro
- (foxthefox) correction of AC1/2/3 switching on SHP2 (issue #312)
- (foxthefox) Stream AC timetask58x exclude
- (foxthefox) correction of powerocean / powerocean+ (issue #378), new ENERGY_STREAM_DETAIL and switch for missing datapoint -> value = 0
- (foxthefox) dev dependencies cleanup

[older changes](./CHANGELOG.md)

## License

MIT License

Copyright (c) 2023-2026 foxthefox <foxthefox@wysiwis.net>

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
