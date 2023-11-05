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


## Installation and Configuration

Install the adapter from github.

![some mor details](doc/en/installation.md)

In Admin Page the mqqt credentials for the mqqt Broker need to be inserted.
* UserName - something like "app-...."
* UserID - a 19 digit number
* UserPassword - an alphanumeric
* ClientID - a string starting with "ANDROID_...."

There are 3 possibilities:
1. by script https://github.com/mmiller7/ecoflow-withoutflow/blob/main/cloud-mqtt/ecoflow_get_mqtt_login.sh
2. by website https://energychain.github.io/site_ecoflow_mqtt_credentials/
3. (pending feature) by adapters own alogorithm (pressing the button), for this the ecoflow username and password is necessary.
until now you have to copy the values from the pop-up window into temporary editor and the in the authentication settings

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

## Implemented Devices

### Powerstation
![Delta Mini](./doc/devices/deltamini.md)

![Delta](./doc/devices/delta.md)

![Delta Max](./doc/devices/deltamax.md)

![Delta Pro](./doc/devices/deltapro.md)

![Delta2](./doc/devices/delta2.md)

![Delta2 Max](./doc/devices/delta2max.md)

River series is started, but lacking on information.

### Powerstream
![Powerstream](./doc/devices/pstream600.md)

The 800W version is also implemented and only difference ist the 800W maximum power.

## Changelog
### 0.0.8
* (foxthefox) Delta2Max mppt.outVol mult=0.001 instead 0.1

### 0.0.7
* (foxthefox) jsonUI wrong attr for additional battery corrected

### 0.0.6
* (foxthefox) device doc
* (foxthefox) fgDcChgCurrent/pv2DcChgCurrent changed back to start at 4A

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

Copyright (c) 2023 foxthefox <foxthefox@wysiwis.net>

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