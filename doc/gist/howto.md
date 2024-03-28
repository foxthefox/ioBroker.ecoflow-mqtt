## setup
import the json into node-red
after all it should look like this:


## mqtt credentials 

obtain them from:
here
* by script https://github.com/mmiller7/ecoflow-withoutflow/blob/main/cloud-mqtt/ecoflow_get_mqtt_login.sh
or
* by website https://energychain.github.io/site_ecoflow_mqtt_credentials/
by using your ecoflow loginname and pwd

you get:

* certificateAccount -> app-....
* certificatePassword -> xyz
* clientId -> ANDROID-...
* userID -> 1xxxxx

## Setup MQTT
* click on node ef-mqtt
* click on Verbindung/Connection
* replace the clientID with the one you obtained 

* click on Sicherheit/security
* replace the user name with the one you obtained  
* replace the password with the one you obtained  

* store tehe settings in the node and sequentially close it

## Setup the Topics
* each mqtt node needs modification
* replace mqttuserID with the userID you obtained
* replace XXXdeviceID with the ID of your device ( shows in the app, like: DEAB5Z12345677)

## using the flow
* deploy the flow
* click on connect for establishing the mqtt connection
* click on disconnect for stopping the communication
* select the debug node you are interested in
