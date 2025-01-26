Troubleshooting and Status checking

Most of the checking we have to do is on the io ioBroker instance.

What status is shown at the adapter instance?
![adapter_status](Bildschirmfoto%202025-01-26%20um%2010.57.35.png)

if you go to Objects and the ecoflow-mqtt instance (the first is .0), are there values shown?
![device_status](Bildschirmfoto%202025-01-26%20um%2010.59.49.png)

in the info section should be some "good" status reported and the values for msgPstream should increase in your case
![EF_connection](Bildschirmfoto%202025-01-26%20um%2011.00.25.png)

Otherwise, what does the log show?

Cecking HA should be on the Settings-> Devices -> MQTT

if HA is connected is shown on IOBconnector:
![IOB_conn_status](Bildschirmfoto%202025-01-26%20um%2011.05.23.png)

when the ioBroker adapter is receiving data from EF servers, it reports as connected
![EF_conn_status](Bildschirmfoto%202025-01-26%20um%2011.05.45.png)

