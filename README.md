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

## Installation

The adapter is in stable repository and therefore you can install it by searching it.
If updates are available the you should install them.

If a very new version is available it might be neccesary to make a custom install from npm/github.
In such case the expert mode must be enabled to get access to the "octacat" icon.
![some more details](doc/en/installation.md)

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

[Delta Mini](./doc/devices/deltamini.md)

[Delta](./doc/devices/delta.md)

[Delta Max](./doc/devices/deltamax.md)

[Delta Pro](./doc/devices/deltapro.md)

[River 2 Max](./doc/devices/river2max.md)

[River 2 Pro](./doc/devices/river2pro.md)

[River 3](./doc/devices/river3.md)

[River 3 Plus](./doc/devices/river3plus.md)

[Delta 2](./doc/devices/delta2.md)

[Delta 2 Max](./doc/devices/delta2max.md)

[Delta 3 Plus](./doc/devices/delta3plus.md)

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

[Stream AC PRO](./doc/devices/stream_ac_pro.md)

[Stream Ultra](./doc/devices/stream_ultra.md)

[Stream Inverter](./doc/devices/stream_inverter.md)

The 800W version is also implemented and only difference ist the 800W maximum power.
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

### Alternator

[Alternator](./doc/devices/alternator.md)

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

- (foxthefox) poweroceanplus set hrPwr/fromPv/romBat/fromGrid values to 0 for non transmitted datapoints in HeatingRodEnergyStreamShow
- (foxthefox) poweroceanplus pcsActPwr max 20kW, pcsXPhase_amp max 60A
- (foxthefox) dev dependencies cleanup

### 1.4.7 (npm)

- (foxthefox) poweroceanplus, set mpptPwr/sysGridPwr/bpPwr values to 0, when the entity is not sent within the telegram
- (foxthefox) poweroceanplus, bpTargetSoc max new set to 101%, pcsBpPower max=10kW, pcsXPhase_actPwr min=-5kW

### 1.4.6 (npm)

- (foxthefox) powerocean implementation of ParallelEnergyStreamDetail which is the update to ParallelEnergyStreamReport
- (foxthefox) powerocean implementation of EnergyStreamDetail which is the update to EnergyStreamReport

### 1.4.5 (npm)

- (foxthefox) change from object to array for messages (for telegrams with multiple messages of same type i.e. powerocean)
- (foxthefox) change of cmdId/CmdFunc structure

### 1.4.4 (npm)

- (foxthefox) new datapoints for PowerOcean (HeatingRod, ParallelEnergy)
- (foxthefox) improvements tp powerocean plus
- (foxthefox) corrections for powerocean
- (foxthefox) testing JSON->buffer

### 1.4.3 (npm)

- (foxthefox) new cmd Stream to adjust output power via load task (dayResidentLoadList)
- (foxthefox) correction energyBackupand cmd for River3(Plus)
- (foxthefox) new device Stream Inverter supported
- (foxthefox) first improvements for power ocean plus (i.e. 6 batteries)
- (foxthefox) SHP time task enable switch and load level adjustment

### 1.4.2 (npm)

- (foxthefox) completion commands for River3(Plus)
- (foxthefox) correction of bool in proto of River3(Plus)

### 1.4.1 (npm)

- (foxthefox) Correction of multiplication, some float values may be incorrect now
- (foxthefox) new commands for STREAM and River3
- (foxthefox) River3 llcbusvol correction
- (foxthefox) Stream max settings for power,
- (foxthefox) separate handler for unknown devices

### 1.4.0 (npm)

- (foxthefox) new support of EF Smartmeter
- (foxthefox) new support of River3 (without cmds)
- (foxthefox) new support of Stream Series
- (foxthefox) new support of Power Ocean Plus
- (foxthefox) new Statistics for Gen3 powerstattions
- (foxthefox) new battery data for Gen3 powerstattions
- (foxthefox) new support of Power Ocean DC FIT
- (foxthefox) new support of Wave3 (without cmds!)
- (foxthefox) support of 3 extra batteries DeltaProUltra
- (foxthefox) new datapoints for stream series
- (foxthefox) new datapoints for river2max/pro in pd section
- (foxthefox) correction of river2max command chgWatts
- (foxthefox) corrections at history.. values for powerstream (not kWh, it is W)
- (foxthefox) issue #264, correction, additional bat Delta 2 has different data names than D2M
- (foxthefox) improved recognition of HA broker status and better initializing of data
- (foxthefox) telegram counter now in each device/info
- (foxthefox) major refactoring for the "JSON-devices"
- (foxthefox) min nodejs version >=20
- (foxthefox) debug button for latestQuotas, dbug button for unknown protobuf msg
- (foxthefox) iobroker/eslint-config

### 1.3.2 (npm)

- (foxthefox) improvement on HA cmds with numbers
- (foxthefox) correction on startVoltage for alternator, new cablelength

### 1.3.1 (npm)

- (foxthefox) new cmd for Delta3Plus and corrections to ranges
- (foxthefox) correction to cmd DPU,D3P,D3+,R3+ to appear correctly in HA (must be number to be adjustable)
- (foxthefox) improvement on HA cmds to devices with protobuf
- (foxthefox) delta2 settings improvement (unit, device_class)

### 1.3.0 (npm)

- (foxthefox) correction for PStream energy
- (foxthefox) new Delta Pro 3 implementation
- (foxthefox) new Delta 3 Plus implementation
- (foxthefox) new River 3 Plus implementation
- (foxthefox, radeonorama) enhancements alternator
- (foxthefox) major refactoring
- (foxthefox) new items to PowerOcean and HeatingRod

### 1.2.2 (npm)

- (foxthefox) some documentation for HA users
- (foxthefox) corrections in SHP2 protobuf definition
- (foxthefox) new datapoints in SHP2 ProtoTime, new telegram ProtoTimeStat mapped to ProtoTime
- (foxthefox) corrections to alternator (objects 268,269), power,wifiRssi setting,
- (foxthefox) DeltaPro mpptTemp, outAmp new max value

### 1.2.1 (npm)

- (foxthefox) corrections for pstream objects, some changed from string to number
- (foxthefox) new SHP time task config values

### 1.2.0 (npm)

- (foxthefox) new values powerocean
- (foxthefox) new values powerstream
- (foxthefox) new values plug
- (foxthefox) enhancements on values for SHP2,DPU,alternator

### 1.1.3 (npm)

- (foxthefox) enhancements to alternator values
- (foxthefox) refactoring of protobuf handling/structure/component data

### 1.1.2 (npm)

- (bh1cqx) handle HA restart #PR193
- (foxthefox) initial state population of BPInfo2/3 to HA
- (foxthefox) jsonConfig enhancements

### 1.1.1 (npm)

- (foxthefox) changed code structure
- (foxthefox) initial state creation of BPInfo2/3 to HA

### 1.1.0 (npm)

- (foxthefox) added a preliminary version of alternator (no cmd, non final state names)
- (foxthefox) added a config possibility for unsupported devices for capturing the transmitted telegrams
- (foxthefox) #168 changed SHP2 masterIncreInfo.gridSta '0': 'Grid volt. not detected', '1': 'Grid OK'
- (foxthefox) #173 DPU added additional battery selection
- (foxthefox) #174 SHP2 added in ProtoTime the wattInfoChWatt, wattInfoAllHallWatt
- (foxthefox) #174 SHP2 added channel values of power and current in loadPower/loadCurrent including the sum of the values
- (foxthefox) #167 DELTA2/2Max pd.dsgPowerAC and pd.dsgPowerDC (type from 'power' to 'energy')

### 1.0.5 (npm)

- (foxthefox) mppt.outWatts 500 -> 600; inverter_heartbeat.invOutputWatts 800 -> 810
- (foxthefox) update of Readme (adapter now in stable)
- (foxthefox) changes for responsive design #160

### 1.0.4 (npm)

- (foxthefox) some more protobuf decoding for power ocean (ev pulse portion)
- (foxthefox) correction for powerkit telegram reception #99
- (foxthefox) corrected/imroved powerkit datapoints

### 1.0.3 (npm)

- (foxthefox) watth16/17/18 upper range 10kWh
- (foxthefox) 'Backup reserve' option added for D2M #137
- (foxthefox) preparations for DeltaPro3 decode

### 1.0.2 (npm)

- (foxthefox) correction of SHP commands (#130)

### 1.0.1 (npm)

- (foxthefox) correction to level commands (not recognized when appendix level.xxx)
- (foxthefox) "this." for timer functions
- (foxthefox) corrected some debug functions
- (foxthefox) min js-controller = 5.0.12

### 1.0.0 (npm) BREAKING

- (foxthefox) correction of state roles (requires deletion of ecoflow objecttree!)
- (foxthefox) deletion of InverterHeartbeat2 of power stream, since latest FW does not deliver this telegram anymore (most likely part of the larger inverter_heartbeat)
- (foxthefox) some multiplication and max settings for SHP and Power Ocean corrected,

### 0.0.42 (npm)

- (foxthefox) correction SHP command
- (foxthefox) new data point power ocean, range min corrections
- (foxthefox) shelly3em model definition
- (foxthefox) IOB checker corrections

### 0.0.41 (npm)

- (foxthefox) correction in Compare function

### 0.0.40 (npm)

- (foxthefox) IOB checker corrections

### 0.0.39 (npm)

- (foxthefox) update devDeps
- (foxthefox) eslint upgrade and corrections

### 0.0.38 (npm)

- (foxthefox) additional datapoints for power ocean
- (foxthefox) corrections for upper limit on power ocean data points

### 0.0.37 (npm)

- (foxthefox) corrections for HA discovery of PowerOcean/SHP2/PowerKit

### 0.0.36 (npm)

- (foxthefox) correction bmsMaster.cellVol/cellTemp as array for DeltaPro
- (foxthefox) correction for transfer of values derived from protobuf to HA
- (foxthefox) enhanced to device specific logging

### 0.0.35 (npm)

- (foxthefox) unified detail debug settings, device specific debugging (new checkbox in device config)

### 0.0.34 (npm)

- (foxthefox) first implementation for power ocean kit
- (foxthefox) first implementation for smart home panel 2
- (foxthefox) new values watth16/17/18 for powerstream
- (foxthefox) deltapro max values mmpt.inAmp, mpptTemp
- (foxthefox) fixed updates to info.reconnects
- (foxthefox) fixed #90 cfgAcEnabled on river2max
- (foxthefox) logging enhancements

### 0.0.33 (npm)

- (foxthefox) added Power Kit
- (foxthefox) added new object ratedPower as command for powerstream

### 0.0.32 (npm)

- (foxthefox) added Shelly3EM reporting (cloud to cloud connection to be setup in EF App)

### 0.0.31 (npm)

- (foxthefox) optimization EF MQTT reconnect
- (foxthefox) initial update slave battery to HA
- (foxthefox) online status from latestQuotas
- (foxthefox) adapter config merge all device tabs into one (to overcome the problem that on tablets the last tab is not reachable), size adjustment
- (foxthefox) correction for deltapro at xt60ChgType
- (foxthefox) correction for river2max commands

### 0.0.30 (npm)

- (foxthefox) correction for River2Pro/Max cmd dcChgCurrent
- (foxthefox) correction for Delta2 cmd dcChgCurrent/pv2DcChgCurrent
- (foxthefox) correction for slave battery transfer to HA

### 0.0.29 (npm)

- (foxthefox) new objects for wave2
- (foxthefox) device emulation
- (foxthefox) mppt max value corrections

### 0.0.28 (npm)

- (foxthefox) fix value normalization (DP,wave2,glacier)
- (foxthefox) set actions initially to false to avoid null
- (foxthefox) fix latestQuotas for glacier/wave2
- (foxthefox) enhance logging

### 0.0.27 (npm)

- (foxthefox) fixed issues with additional battery and homeassistant transfer
- (foxthefox) bmsMaster Delta Pro new points (maxVolDiff,mosState,cellSeriesNum,cellNtcNum)
- (foxthefox) fix issue with SHP heartbeat.errorCodes

### 0.0.26 (npm)

- (foxthefox) bmasMaster.amp max = 50
- (foxthefox) corrections SHP

### 0.0.25 (npm)

- (foxthefox) new datapoints for DeltaPro

### 0.0.24 (npm)

- (foxthefox) SHP incomming data processing

### 0.0.23 (npm)

- (foxthefox) correction to latestQuotas (shift from info to action)
- (foxthefox) X_Unknown_15 range max 1000
- (foxthefox) new debug button for devices with protobuf msg

### 0.0.22 (npm)

- (foxthefox) Homeassistant Connector/Gateway
- (foxthefox) added Generator (indication only, no knowledge on commands)
- (foxthefox) added Delta Pro Ultra
- (foxthefox) added Smart Home Panel
- (foxthefox) latestQuotas/getTimeTaskConfig moved from info to action
- (foxthefox) uptime no max boundary
- (foxthefox) several adjustable values which represent a mode or predefined set of settings are now using "states" definition (IOB)
- (foxthefox) changed factor for pd/usb1Watts, usb2Watts, qcUsb1Watts, qcUsb2Watts
- (foxthefox) info for offline/online status with EF cloud
- (foxthefox) correction for protobuf cmds (dataLen)
- (foxthefox) some strings are now diagnostic
- (foxthefox) X_unknown_15/17/34 are now numbers
- (foxthefox) skip telegrams where openBmsIdx=0, bqSysStatReg=0
- (foxthefox) deltapro mppt value changes (inWatts/outWatts max=1600, mult= 0.001)
- (foxthefox) deltapro new values bmsMaster.diffSoc, bmsMaster.packSn

### 0.0.21 (npm)

- (foxthefox) more debug on connection
- (foxthefox) new datapoints for wave2
- (foxthefox) deleted max on duration values
- (foxthefox) moved several datapoints from number/string to arrays (mainly wave2/glacier)
- (foxthefox) moved datapoints from string to arrays (bms*.hwVersion, bms*.hwEdition, bms*.cellVol, bms*.cellTemp, pd.bmsKitState)
- (foxthefox) plug switch "dynWattEnable" which includes plug for dynamic watts of powerstream

### 0.0.20 (npm)

- (foxthefox) first additional integration tests
- (foxthefox) corrections in data model
- (foxthefox) new datapoints for glacier
- (foxthefox) new button in config for 'debug quotas' (retrieving data for all JSON-devices and displaying it)

### 0.0.19 (npm)

- (foxthefox) better error handling of incomplete messages from pstream
- (foxthefox) added indication of time tasks
- (foxthefox) cleanup pstream/plugs creation (both are protobuf)
- (foxthefox) further refactoring of code -> devices must be again defined !
- (foxthefox) differentiation between actual energy values and historical
- (foxthefox) getAllTaskCfg for powerstations in structure info
- (foxthefox) initial lastQuotas after adapter start for powerstream and plug
- (foxthefox) interpreted unknown values have now clear names
- (foxthefox) cyclic latestQuotas call instead of forced disconnect and reconnect (reconnects value only for checking, if stays with 0/null adapter has still mqtt telegrams)
- (foxthefox) new data points for deltamax
- (foxthefox) corrected pstream value changes to 0 (numbers), pdata must be omitted

### 0.0.18 (npm)

- (foxthefox) correction of wrong version number io io-package.json

### 0.0.17

- (foxthefox) added ems objects for River2Pro
- (foxthefox) more logging to pstream decode
- (foxthefox) spelling correction for latestQuotas

### 0.0.16

- (foxthefox) correction for array of devices, cause of "loosing" power stations

### 0.0.15

- (foxthefox) new implementation of Wave 2 Air conditioner
- (foxthefox) new implementation of Glacier refrigerator
- (foxthefox) correction of factors for delta2/delta2max/river2pro/river2max (mppt.?Vol, mppt.?Amp, mppt.?Watts)
- (foxthefox) some shifting from string to diagnostics
- (foxthefox) some updates to max values
- (foxthefox) delta2/delta2max pd.chgPowerAC and pd.chgPowerDC changed from power to energy
- (foxthefox) correction of plug_heartbeat values, protobuf shifts from snake_case to camelCase

### 0.0.14

- (foxthefox) new implementation of River 2 Pro, River 2 Max, River Pro, River Max
- (foxthefox) new feature get "lastQuotas"
- (foxthefox) recfactoring of protobuf encoding
- (foxthefox) watth5=daily energy plug, watth6=on time plug
- (foxthefox) plug_heartbeat new values unknown16...19

### 0.0.13

- (foxthefox) correction for changing of factors for pstations
- (foxthefox) watth5 for plugs
- (foxthefox) more logging pstream/plug
- (foxthefox) optional detection of no updates from mqtt server -> reconnection

### 0.0.12

- (foxthefox) new command brightness for plugs
- (foxthefox) correction of factors for plugs
- (foxthefox) powerstream bpType with value as texts
- (foxthefox) DELTA 2 factors corrected (mppt.inVol, mppt.inAmp,mppt.carOutAmp, mppt.carOutVol)
- (foxthefox) naming of watth1...8 (except 5)

### 0.0.11

- (foxthefox) correction this.pstreamStatesDict to cope with pstream and plug

### 0.0.10

- (foxthefox) unknown pstream message debug possibility
- (foxthefox) inv.outTemp max=90°C, inverter_heartbeat.pv1/2inputWatts max=600W
- (foxthefox) new function -> smart plugs

### 0.0.9

- (foxthefox) final version of credential creation, at least 6.12.3 for admin required
- (foxthefox) pd.wattsInSum max=4000W, pd.wattsOutSum max=4000W
- (foxthefox) unknwon59 -> batChargingTime, battMin -> batDischargingTime
- (foxthefox) processing multiple messages in one datagram

### 0.0.8

- (foxthefox) Delta2Max mppt.outVol mult=0.001 instead 0.1
- (foxthefox) handling additional battery for Delta2Max
- (foxthefox) pd.dsgPowerAC -> mult 0.001 Delta2Max
- (foxthefox) pd.chgPowerAC -> mult 0.001 Delta2Max
- (foxthefox) inv.acChgRatedPower -> max 4000W
- (foxthefox) inv.FastChgWatts -> max 2400W
- (foxthefox) chgwatts Delta 2 -> min 50W

### 0.0.7

- (foxthefox) jsonUI wrong attr for additional battery corrected

### 0.0.6

- (foxthefox) device doc
- (foxthefox) cfgDcChgCurrent/pv2DcChgCurrent changed back to start at 4A

### 0.0.5

- (foxthefox) cfgDcChgCurrent/pv2DcChgCurrent again with min=0, seems that there comes 0 at a certein telegram and causing warning
- (foxthefox) energy values (yield per day) for powerstream

### 0.0.4

- (foxthefox) new switch inverter_heartbeat.feedPriority (handling the excessive solar energy when battery is full)

### 0.0.3

- (foxthefox) requirement for admin 6.12.2 -> 6.12.0
- (foxthefox) iverter_heartbeat pv1InputCur, pv2InputCur factor corrected now 0.1
- (foxthefox) ems.chgAmp factor 0.0001 ( seemed too high by factor 10 )
- (foxthefox) bmsMaster.tagChgAmp factor 0.0001 ( seemed too high by factor 10 )
- (foxthefox) delta2max command for cfgDcChgCurrent/pv2DcChgCurrent changed
- (foxthefox) ensuring that commanded bppowerSoc value is always minimum 5% higher than the ems.minDsgSoc, also putting actual minDsgSoc into the command

### 0.0.2

- (foxthefox) pv2DcChgCurrent as level in delta2max
- (foxthefox) \*pv2DcChgCurrent with range 4-8 and step 2
- (foxthefox) chgPauseFlag as switch in delta2max

### 0.0.1 (npm)

- (foxthefox) initial release

## License

MIT License

Copyright (c) 2023-2025 foxthefox <foxthefox@wysiwis.net>

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
