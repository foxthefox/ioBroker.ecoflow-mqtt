'use strict';

/*
 * Created with @iobroker/create-adapter v2.5.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const myutils = require('./lib/adapter_utils.js');
const ef = require('./lib/ecoflow_utils.js');
const ha = require('./lib/ha_utils.js');
const mqtt = require('mqtt');

// Load your modules here, e.g.:
// const fs = require("fs");

let recon_timer = null;
let lastQuotInterval = null;
let haLoadInterval = null;

const version = require('./io-package.json').common.version;

class EcoflowMqtt extends utils.Adapter {
    /**
     * @param options - Optionen
     */
    constructor(options) {
        super({
            ...options,
            name: 'ecoflow-mqtt',
        });
        this.mqttClient = null;
        this.msgReconnects = 0;
        this.mqttUserId = '';
        this.mqttUserName = '';
        this.mqttPwd = '';
        this.mqttClientId = '';
        this.mqttPort = 8883;
        this.mqttProtocol = 'mqtts://';
        this.mqttUrl = 'mqtt-e.ecoflow.com';
        this.pdevices = {};
        this.pdevicesStates = {};
        this.pdevicesStatesDict = {};
        this.pdevicesStates = {};
        this.pdevicesCmd = {};
        this.protoSource = {};
        this.protoMsg = {};
        this.storeProtoPayload = {};
        this.prepareProtoCmd = {};
        this.quotas = {};
        this.unknownPBmsg = {};
        this.haDevices = null;
        this.haCounter = 0;
        this.haCountMem = 0;
        this.onlineDevices = [];

        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        // this.on('objectChange', this.onObjectChange.bind(this));
        this.on('message', this.onMessage.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Initialize your adapter here
        this.log.info('adapter entered ready');
        try {
            this.mqttUserId = this.config.mqttUserId;
            this.mqttUserName = this.config.mqttUserName;
            this.mqttPwd = this.config.mqttPwd;
            this.mqttClientId = this.config.mqttClientId;
            this.mqttPort = this.config.mqttPort || 8883;
            this.mqttProtocol = 'mqtts://';
            this.mqttUrl = this.config.mqttUrl || 'mqtt-e.ecoflow.com';

            //modify this.pstationStates
            this.log.info('your configration:');
            this.log.info(`powerstream  -> ${JSON.stringify(this.config.pstreams)}`);
            this.log.info(`powerstation -> ${JSON.stringify(this.config.pstations)}`);
            this.log.info(`smartplug    -> ${JSON.stringify(this.config.plugs)}`);
            this.log.info(`wave         -> ${JSON.stringify(this.config.waves)}`);
            this.log.info(`glacier      -> ${JSON.stringify(this.config.glaciers)}`);
            //this.log.info('blade        -> ' + JSON.stringify(this.config.blades));
            this.log.info(`generator    -> ${JSON.stringify(this.config.generators)}`);
            this.log.info(`panel        -> ${JSON.stringify(this.config.panels)}`);
            this.log.info(`smartmeter   -> ${JSON.stringify(this.config.shellies)}`);
            this.log.info(`powerkit     -> ${JSON.stringify(this.config.powerkits)}`);
            this.log.info(`powerocean   -> ${JSON.stringify(this.config.poweroceans)}`);
            this.log.info(`alternator   -> ${JSON.stringify(this.config.alternators)}`);
            this.log.info(`unknown      -> ${JSON.stringify(this.config.unknowns)}`);

            //loop durch alle Geräte

            const confdevices = [].concat(
                this.config.pstreams,
                this.config.plugs,
                this.config.pstations,
                this.config.waves,
                this.config.glaciers,
                this.config.generators,
                this.config.panels,
                this.config.shellies,
                this.config.powerkits,
                this.config.poweroceans,
                this.config.alternators,
                this.config.unknowns,
            );
            if (confdevices.length > 0) {
                //loop durch alle devices
                for (let psta = 0; psta < confdevices.length; psta++) {
                    let devtype = confdevices[psta]['devType'];
                    try {
                        if (devtype !== 'none' && devtype !== '') {
                            const id = confdevices[psta]['devId'];
                            const name = confdevices[psta]['devName'];
                            let haEnable = false;
                            //Testgeräte haben kein haEnable
                            if (confdevices[psta]['haEnable']) {
                                haEnable = confdevices[psta]['haEnable'];
                            }
                            const debugEnable = confdevices[psta]['debugEnable'];
                            this.pdevices[id] = {};
                            this.pdevices[id]['devType'] = devtype;
                            this.pdevices[id]['devName'] = name;
                            this.pdevices[id]['haEnable'] = haEnable;
                            this.pdevices[id]['debugEnable'] = debugEnable;
                            if (confdevices[psta]['pstationsSlave1']) {
                                this.pdevices[id]['pstationsSlave1'] = confdevices[psta]['pstationsSlave1'];
                            }
                            if (confdevices[psta]['pstationsSlave2']) {
                                this.pdevices[id]['pstationsSlave2'] = confdevices[psta]['pstationsSlave2'];
                            }
                            if (confdevices[psta]['pstationsSlave3']) {
                                this.pdevices[id]['pstationsSlave3'] = confdevices[psta]['pstationsSlave3'];
                            }
                            let devStates = null;
                            if (devtype === 'pstream600' || devtype === 'pstream800') {
                                devStates = require('./lib/dict_data/ef_pstream_data.js').deviceStates;
                            } else if (
                                devtype === 'powerkitbp2000' ||
                                devtype === 'powerkitbp5000' ||
                                devtype === 'powerkit'
                            ) {
                                devStates = require('./lib/dict_data/ef_powerkit_data.js').deviceStates;
                            } else if (devtype === 'plug') {
                                devStates = require('./lib/dict_data/ef_plug_data.js').deviceStates;
                            } else {
                                devStates = require(`./lib/dict_data/ef_${devtype}_data.js`).deviceStates;
                            }

                            if (!devStates) {
                                this.log.warn(`no states for ${devtype}`);
                            }

                            //create pdevices objects
                            const origdevtype = devtype;
                            if (devtype === 'pstream600' || devtype === 'pstream800') {
                                devtype = 'pstream';
                            }
                            if (devtype === 'powerkitbp2000' || devtype === 'powerkitbp5000') {
                                devtype = 'powerkit';
                            }

                            let pdevicesStatesDict = null;
                            let pdevicesCmd = null;
                            let protoSource = null;
                            let protoMsg = null;
                            let storeProtoPayload = null;
                            let prepareProtoCmd = null;
                            //protobuf devices
                            if (
                                devtype === 'pstream' ||
                                devtype === 'plug' ||
                                devtype === 'powerocean' ||
                                devtype === 'poweroceanplus' ||
                                devtype === 'poweroceanfit' ||
                                devtype === 'panel2' ||
                                devtype === 'deltaproultra' ||
                                devtype === 'alternator' ||
                                devtype === 'deltapro3' ||
                                devtype === 'delta3' ||
                                devtype === 'delta3plus' ||
                                devtype === 'river3' ||
                                devtype === 'river3plus' ||
                                devtype === 'smartmeter' ||
                                devtype === 'stream_ac_pro' ||
                                devtype === 'stream_pro' ||
                                devtype === 'stream_ultra' ||
                                devtype === 'wave3' ||
                                devtype === 'unknown'
                            ) {
                                pdevicesStatesDict = require(`./lib/dict_data/ef_${devtype}_data.js`).deviceStatesDict[
                                    devtype
                                ];
                                pdevicesCmd = require(`./lib/dict_data/ef_${devtype}_data.js`).deviceCmd[origdevtype];
                                protoSource = require(`./lib/dict_data/ef_${devtype}_data.js`).protoSource;
                                protoMsg = require(`./lib/dict_data/ef_${devtype}_data.js`).protoMsg;
                                storeProtoPayload = require(`./lib/dict_data/ef_${devtype}_data.js`).storeProtoPayload;
                                prepareProtoCmd = require(`./lib/dict_data/ef_${devtype}_data.js`).prepareProtoCmd;
                            } else if (devtype === 'powerkit') {
                                pdevicesStatesDict = require(`./lib/dict_data/ef_${devtype}_data.js`).deviceStatesDict[
                                    devtype
                                ];
                                pdevicesCmd = require(`./lib/dict_data/ef_${devtype}_data.js`).deviceCmd[devtype];
                            } else {
                                //JSON devices
                                pdevicesStatesDict = require(`./lib/dict_data/ef_${devtype}_data.js`).deviceStatesDict[
                                    origdevtype
                                ];
                                pdevicesCmd = require(`./lib/dict_data/ef_${devtype}_data.js`).deviceCmd[origdevtype];
                            }

                            if (!pdevicesStatesDict) {
                                this.log.warn(`no states dict for ${devtype}`);
                            }
                            if (!pdevicesCmd) {
                                this.log.warn(`no CMD dict for ${devtype}`);
                            }

                            //create device objects
                            //we store only the dict from used components
                            if (!this.pdevicesStatesDict[origdevtype]) {
                                this.pdevicesStatesDict[origdevtype] = pdevicesStatesDict;
                            }

                            if (!this.pdevicesStates[origdevtype]) {
                                this.pdevicesStates[origdevtype] = ef.statesFromDict(devStates, pdevicesStatesDict);
                            }
                            //if protobuf devices store additionally the protoSource and protoMsg
                            if (protoSource) {
                                if (!this.protoSource[devtype]) {
                                    this.protoSource[devtype] = protoSource;
                                }
                            }
                            if (protoMsg) {
                                if (!this.protoMsg[devtype]) {
                                    this.protoMsg[devtype] = protoMsg;
                                }
                            }
                            // and storing the functions
                            if (storeProtoPayload) {
                                if (!this.storeProtoPayload[devtype]) {
                                    this.storeProtoPayload[devtype] = storeProtoPayload;
                                }
                            }
                            if (prepareProtoCmd) {
                                if (!this.prepareProtoCmd[devtype]) {
                                    this.prepareProtoCmd[devtype] = prepareProtoCmd;
                                }
                            }
                            //we store only the cmd from used components
                            if (!this.pdevicesCmd[origdevtype]) {
                                this.pdevicesCmd[origdevtype] = pdevicesCmd;
                            }
                            // create devices
                            if (devtype !== 'none' && devStates && pdevicesStatesDict) {
                                this.log.info('==========================');
                                this.log.info(`start device state creation ->${devtype} for Id ${id}`);
                                try {
                                    if (this.config.msgStateCreation) {
                                        this.log.debug('____________________________________________');
                                        this.log.debug(`create  device ${id}`);
                                    }
                                    await this.setObjectNotExistsAsync(id, {
                                        type: 'device',
                                        common: {
                                            name: name,
                                            role: 'device',
                                        },
                                        native: {},
                                    });
                                    for (let part in pdevicesStatesDict) {
                                        if (
                                            part !== 'bmsSlave1' &&
                                            part !== 'bp2' &&
                                            part !== 'statusReportBattery2' &&
                                            part !== 'BPInfo1' &&
                                            part !== 'BMSHeartBeatReport1' &&
                                            part !== 'bPInfo1' &&
                                            part !== 'bmsSlave2' &&
                                            part !== 'bp3' &&
                                            part !== 'statusReportBattery3' &&
                                            part !== 'BPInfo2' &&
                                            part !== 'BMSHeartBeatReport2' &&
                                            part !== 'bPInfo2' &&
                                            part !== 'BPInfo3'
                                        ) {
                                            if (this.config.msgStateCreation) {
                                                this.log.debug('____________________________________________');
                                                this.log.debug(`create  channel ${part}`);
                                            }
                                            await myutils.createMyChannel(this, id, part, part, 'channel');
                                            for (let key in pdevicesStatesDict[part]) {
                                                let type = pdevicesStatesDict[part][key]['entity'];
                                                if (type !== 'icon') {
                                                    if (devStates[part][type][key]) {
                                                        if (this.config.msgStateCreation) {
                                                            this.log.debug(`state creation ${key}`);
                                                        }
                                                        await myutils.createMyState(
                                                            this,
                                                            id,
                                                            part,
                                                            key,
                                                            devStates[part][type][key],
                                                        );
                                                    } else {
                                                        this.log.info(`not created/mismatch ->${part} ${key} ${type}`);
                                                    }
                                                }
                                            }
                                        } else if (
                                            ((part === 'bmsSlave1' ||
                                                part === 'bp2' ||
                                                part === 'statusReportBattery2' ||
                                                part === 'BPInfo1' ||
                                                part === 'BMSHeartBeatReport1' ||
                                                part !== 'bPInfo1') &&
                                                confdevices[psta]['pstationsSlave1']) ||
                                            ((part === 'bmsSlave2' ||
                                                part === 'bp3' ||
                                                part === 'statusReportBattery3' ||
                                                part === 'BPInfo2' ||
                                                part === 'BMSHeartBeatReport2' ||
                                                part !== 'bPInfo2') &&
                                                confdevices[psta]['pstationsSlave2']) ||
                                            (part === 'BPInfo3' && confdevices[psta]['pstationsSlave3'])
                                        ) {
                                            if (this.config.msgStateCreation) {
                                                this.log.debug('____________________________________________');
                                                this.log.debug(`create  channel ${part}`);
                                            }
                                            await myutils.createMyChannel(this, id, part, part, 'channel');
                                            for (let key in pdevicesStatesDict[part]) {
                                                let type = pdevicesStatesDict[part][key]['entity'];
                                                if (type !== 'icon') {
                                                    if (devStates[part][type][key]) {
                                                        if (this.config.msgStateCreation) {
                                                            this.log.debug(`state creation ${key}`);
                                                        }
                                                        await myutils.createMyState(
                                                            this,
                                                            id,
                                                            part,
                                                            key,
                                                            devStates[part][type][key],
                                                        );
                                                    } else {
                                                        this.log.info(`not created/mismatch ->${part} ${key} ${type}`);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    //create timeTask only for certain devices
                                    if (devtype === 'pstream' || devtype === 'plug') {
                                        let part = 'time_task_config_post';
                                        if (this.config.msgStateCreation) {
                                            this.log.debug('____________________________________________');
                                            this.log.debug(`create  channel ${part}`);
                                        }
                                        //createMyChannel(adapter, device, channel, name, role)
                                        await myutils.createMyChannel(this, id, part, part, 'channel');
                                        for (let j = 1; j < 12; j++) {
                                            const task = `task${j}`;
                                            await myutils.createMyChannel(this, `${id}.${part}`, task, task, 'channel');
                                            //taskIndex
                                            //createMyState(adapter, device, channel, datapoint, stateObj)
                                            await myutils.createMyState(
                                                this,
                                                id,
                                                `${part}.${task}`,
                                                'taskIndex',
                                                devStates[part]['tasks']['taskIndex'],
                                            );
                                            //type
                                            await myutils.createMyState(
                                                this,
                                                id,
                                                `${part}.${task}`,
                                                'type',
                                                devStates[part]['tasks']['type'],
                                            );
                                            //timerange
                                            await myutils.createMyChannel(
                                                this,
                                                `${id}.${part}.${task}`,
                                                'timeRange',
                                                'timeRange',
                                                'channel',
                                            );
                                            for (let key in devStates[part]['tasks']['timeRange']) {
                                                if (key === 'startTime' || key === 'stopTime') {
                                                    for (let key2 in devStates[part]['tasks']['timeRange'][key]) {
                                                        await myutils.createMyState(
                                                            this,
                                                            id,
                                                            `${part}.${task}.timeRange.${key}`,
                                                            key2,
                                                            devStates[part]['tasks']['timeRange'][key][key2],
                                                        );
                                                    }
                                                } else {
                                                    await myutils.createMyState(
                                                        this,
                                                        id,
                                                        `${part}.${task}.timeRange`,
                                                        key,
                                                        devStates[part]['tasks']['timeRange'][key],
                                                    );
                                                }
                                            }
                                        }
                                    } else if (devtype === 'deltamax') {
                                        let part = 'timeTask';
                                        if (this.config.msgStateCreation) {
                                            this.log.debug('____________________________________________');
                                            this.log.debug(`create  channel ${part}`);
                                        }
                                        //createMyChannel(adapter, device, channel, name, role)
                                        await myutils.createMyChannel(this, id, part, part, 'channel');
                                        //"totalTaskNum"
                                        await myutils.createMyState(
                                            this,
                                            id,
                                            part,
                                            'totalTaskNum',
                                            devStates[part]['totalTaskNum'],
                                        );
                                        for (let j = 0; j < 6; j++) {
                                            const task = `task${j}`;
                                            await myutils.createMyChannel(this, `${id}.${part}`, task, task, 'channel');

                                            for (let type in devStates[part]) {
                                                if (type !== 'totalTaskNum') {
                                                    for (let key in devStates[part][type]) {
                                                        await myutils.createMyState(
                                                            this,
                                                            id,
                                                            `${part}.${task}`,
                                                            key,
                                                            devStates[part][type][key],
                                                        );
                                                    }
                                                }
                                            }
                                        }
                                    } else if (devtype === 'panel') {
                                        let part = 'timeTask';
                                        if (this.config.msgStateCreation) {
                                            this.log.debug('____________________________________________');
                                            this.log.debug(`create  channel ${part}`);
                                        }
                                        //createMyChannel(adapter, device, channel, name, role)
                                        await myutils.createMyChannel(this, id, part, part, 'channel');
                                        for (let j = 1; j < 21; j++) {
                                            const task = `task${j}`;
                                            await myutils.createMyChannel(this, `${id}.${part}`, task, task, 'channel');
                                            //param
                                            await myutils.createMyChannel(
                                                this,
                                                `${id}.${part}.${task}`,
                                                'param',
                                                'param',
                                                'channel',
                                            );
                                            for (let key in devStates[part]['cfg']['param']) {
                                                await myutils.createMyState(
                                                    this,
                                                    id,
                                                    `${part}.${task}.param`,
                                                    key,
                                                    devStates[part]['cfg']['param'][key],
                                                );
                                            }
                                            //comCfg
                                            await myutils.createMyChannel(
                                                this,
                                                `${id}.${part}.${task}`,
                                                'comCfg',
                                                'comCfg',
                                                'channel',
                                            );
                                            for (let key in devStates[part]['cfg']['comCfg']) {
                                                if (key === 'setTime') {
                                                    //setTime
                                                    await myutils.createMyChannel(
                                                        this,
                                                        `${id}.${part}.${task}.comCfg`,
                                                        'setTime',
                                                        'setTime',
                                                        'channel',
                                                    );
                                                    for (let key2 in devStates[part]['cfg']['comCfg'][key]) {
                                                        await myutils.createMyState(
                                                            this,
                                                            id,
                                                            `${part}.${task}.comCfg.${key}`,
                                                            key2,
                                                            devStates[part]['cfg']['comCfg'][key][key2],
                                                        );
                                                    }
                                                } else if (key === 'timeRange') {
                                                    //timerange
                                                    await myutils.createMyChannel(
                                                        this,
                                                        `${id}.${part}.${task}.comCfg`,
                                                        'timeRange',
                                                        'timeRange',
                                                        'channel',
                                                    );
                                                    for (let key2 in devStates[part]['cfg']['comCfg'][key]) {
                                                        if (key2 === 'startTime' || key2 === 'endTime') {
                                                            for (let key3 in devStates[part]['cfg']['comCfg'][key][
                                                                key2
                                                            ]) {
                                                                await myutils.createMyState(
                                                                    this,
                                                                    id,
                                                                    `${part}.${task}.comCfg.${key}.${key2}`,
                                                                    key3,
                                                                    devStates[part]['cfg']['comCfg'][key][key2][key3],
                                                                );
                                                            }
                                                        } else {
                                                            await myutils.createMyState(
                                                                this,
                                                                id,
                                                                `${part}.${task}.comCfg.${key}`,
                                                                key2,
                                                                devStates[part]['cfg']['comCfg'][key][key2],
                                                            );
                                                        }
                                                    }
                                                } else {
                                                    await myutils.createMyState(
                                                        this,
                                                        id,
                                                        `${part}.${task}.comCfg`,
                                                        key,
                                                        devStates[part]['cfg']['comCfg'][key],
                                                    );
                                                }
                                            }
                                        }
                                    }
                                    this.setState(`${id}.info.msgCount`, {
                                        val: 0,
                                        ack: true,
                                    });
                                    this.log.info(`device states created for ${id} / ${devtype} / ${name}`);
                                    this.log.info('==========================');
                                } catch (error) {
                                    this.log.error(`create states ${error}`);
                                }
                            } else {
                                this.log.error(
                                    `something empty ID->${id} states -> ${devStates} dict -> ${
                                        pdevicesStatesDict
                                    } type -> ${devtype}`,
                                );
                            }
                        }
                    } catch (error) {
                        this.log.error(`${devtype} modification or state creation went wrong ->${error}`);
                    }
                }
            }
        } catch (error) {
            this.log.error(`read config ${error}`);
        }

        //Homeassistant connection
        if (this.config.haMqttEnable) {
            this.haDevices = ha.defineHaDevices(this.pdevices);
            this.log.info('HA communication:');
            this.log.info(`devices  -> ${JSON.stringify(this.config.pstreams)}`);
        }
        await myutils.createInfoStates(this, this.config.haMqttEnable);

        //create subscription topics
        let topics = [];
        if (this.mqttUserId.length > 0) {
            topics = topics.concat(ef.createSubscribeTopics(this.mqttUserId, this.pdevices));
        }
        // this.log.debug('subscription topics EF ' + JSON.stringify(topics));

        //connect to Ecoflow
        const optionsMqtt = {
            port: this.mqttPort || 8883,
            clientId: this.mqttClientId,
            username: this.mqttUserName,
            password: this.mqttPwd,
            keepalive: 60,
            reconnectPeriod: 5000,
            clean: true,
            //manualConnect: true
        };
        if (optionsMqtt.clientId.length > 18 && optionsMqtt.username.length > 18 && optionsMqtt.password.length > 18) {
            try {
                this.log.info('[EF] ' + 'going to connect to mqtt broker');
                this.log.debug('[EF] ' + 'your mqtt configuration:');
                //this.log.debug('[EF] ' + 'user          -> ' + this.mqttUserId);
                //this.log.debug('[EF] ' + 'name          -> ' + this.mqttUserName);
                //this.log.debug('[EF] ' + 'client        -> ' + this.mqttClientId);
                this.log.debug(`[EF] ` + `port          -> ${this.mqttPort}`);
                this.log.debug(`[EF] ` + `url           -> ${this.mqttUrl}`);
                this.log.debug(`[EF] ` + `protocol      -> ${this.mqttProtocol}`);

                this.client = mqtt.connect(`${this.mqttUrl}:${this.mqttPort}`, optionsMqtt);

                this.client.on('connect', async () => {
                    this.log.info('EF connected');
                    if (topics.length > 0) {
                        if (this.client) {
                            this.client.subscribe(topics, async err => {
                                if (!err) {
                                    this.log.debug('EF subscribed the topics');
                                    //initial and interval for requesting last quotas
                                    await ef.getLastQuotas(this, this.pdevices);
                                    lastQuotInterval = this.setInterval(async () => {
                                        await ef.getLastQuotas(this, this.pdevices);
                                    }, 300 * 1000); // lastQuot every 5min
                                } else {
                                    this.log.warn(`EF could not subscribe to topics ${err}`);
                                }
                            });
                        }
                    } else {
                        this.log.debug('EF no topics for subscription');
                    }
                    this.setState('info.connection', true, true);
                });

                this.client.on('message', async (topic, message) => {
                    // message is Buffer
                    // this.log.debug(topic + ' got ' + message.toString());

                    const msgtop = ef.getIdFromTopic(topic, this.mqttUserId);
                    const msgtype = msgtop.msg;
                    //this topic only contains the id of device
                    topic = msgtop.topic;

                    let devtype = '';
                    let logged = false;
                    let devicelogged = false;
                    if (this.pdevices) {
                        if (this.pdevices[topic]) {
                            devtype = this.pdevices[topic]['devType'];
                            if (this.pdevices[topic]['debugEnable'] === true) {
                                devicelogged = true;
                                if (this.config.msgUpdate && msgtype === 'update') {
                                    logged = true;
                                } else if (
                                    this.config.msgSetGet &&
                                    msgtype !== 'update' &&
                                    msgtype !== 'unknown msgtype'
                                ) {
                                    logged = true;
                                }
                                if (msgtype == 'unknown msgtype') {
                                    logged = true;
                                }
                            }
                        } else {
                            this.log.debug(`${topic} not part of configured devices`);
                        }
                    }
                    //protobuf msg
                    const origdevtype = devtype;
                    if (devtype === 'pstream600' || devtype === 'pstream800') {
                        devtype = 'pstream';
                    }
                    if (
                        devtype === 'pstream' ||
                        devtype === 'plug' ||
                        devtype === 'deltaproultra' ||
                        devtype === 'powerocean' ||
                        devtype === 'poweroceanplus' ||
                        devtype === 'poweroceanfit' ||
                        devtype === 'panel2' ||
                        devtype === 'alternator' ||
                        devtype === 'deltapro3' ||
                        devtype === 'delta3' ||
                        devtype === 'delta3plus' ||
                        devtype === 'river3' ||
                        devtype === 'river3plus' ||
                        devtype === 'smartmeter' ||
                        devtype === 'stream_ac_pro' ||
                        devtype === 'stream_pro' ||
                        devtype === 'stream_ultra' ||
                        devtype === 'wave3' ||
                        devtype === 'unknown'
                    ) {
                        if (this.pdevicesStatesDict && this.pdevicesStates) {
                            let msgdecode = null;
                            /*
                            if (devtype === 'unknown') {
                                this.log.debug(
                                    `[PROTOBUF unknown] ${topic} [${devtype}/${msgtype}] raw (hex): ${message.toString(
                                        'hex',
                                    )}`,
                                );
                            } else {
                                */
                            try {
                                msgdecode = ef.pstreamDecode(
                                    this,
                                    message,
                                    '',
                                    topic,
                                    msgtype,
                                    this.protoSource[devtype],
                                    this.protoMsg[devtype],
                                    logged,
                                );
                            } catch (error) {
                                this.log.debug(`pstreamDecode call ->${error}`);
                            }
                            if (
                                msgtype === 'update' ||
                                msgtype === 'get_reply' ||
                                msgtype === 'set_reply' ||
                                msgtype === 'set'
                            ) {
                                if (msgdecode !== null && typeof msgdecode === 'object') {
                                    if (Object.keys(msgdecode).length > 0) {
                                        //storeStreamPayload handles multiple objects
                                        const haupdate = await this.storeProtoPayload[devtype](
                                            this,
                                            this.pdevicesStatesDict[origdevtype],
                                            this.pdevicesStates[origdevtype],
                                            topic,
                                            msgdecode,
                                            devtype,
                                            this.pdevices[topic]['haEnable'],
                                            logged,
                                        );
                                        if (haupdate.length > 0) {
                                            for (let i = 0; i < haupdate.length; i++) {
                                                if (haupdate[i]) {
                                                    if (typeof haupdate[i].payload === 'string') {
                                                        ha.publish(
                                                            this,
                                                            topic,
                                                            haupdate[i].topic,
                                                            haupdate[i].payload,
                                                            { qos: 1 },
                                                            devicelogged && this.config.msgHaOutgoing,
                                                            'HA EF PB UPDATE RCV',
                                                        );
                                                    } else {
                                                        this.log.warn(
                                                            `not a string! : ${haupdate[i].topic}  ${
                                                                haupdate[i].payload
                                                            }`,
                                                        );
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                //msg counter, only when receiving telegrams
                                if (msgtype === 'update' || msgtype === 'get_reply' || msgtype === 'set_reply') {
                                    try {
                                        let countobj = await this.getStateAsync(`${topic}.info.msgCount`);
                                        if (countobj) {
                                            if (countobj.val !== null) {
                                                await this.setState(`${topic}.info.msgCount`, {
                                                    val: parseInt(countobj.val) + 1,
                                                    ack: true,
                                                });
                                            }
                                        } else {
                                            this.log.debug(`did not get count info ${topic}  ${countobj}`);
                                        }
                                    } catch (error) {
                                        this.log.error(`Error writing msg count ${error}`);
                                    }
                                }
                            } else {
                                //ef.pstreamDecode()
                            }
                        }
                    } else {
                        // JSON msg
                        switch (msgtype) {
                            case 'set':
                            case 'set_reply':
                                if (logged === true) {
                                    let setmsg = JSON.parse(message.toString());
                                    if (setmsg.params) {
                                        let key = setmsg.params.id;
                                        switch (key) {
                                            case 40:
                                            case 68:
                                            case 72:
                                                //Lebenszeichen der APP?

                                                break;
                                            default:
                                                this.log.debug(
                                                    `[JSON] ${topic} [${msgtype}] -> ` +
                                                        ` key:${key}  ${JSON.stringify(setmsg)}`,
                                                );
                                                break;
                                        }
                                    } else {
                                        this.log.debug(
                                            `[JSON] ${topic} [${msgtype}] -> set w/o params ${JSON.stringify(setmsg)}`,
                                        );
                                    }
                                }
                                break;
                            default:
                                if (logged === true) {
                                    this.log.debug(`[JSON] ${topic} [${msgtype}] -> ${message.toString()}`);
                                }
                                break;
                        }

                        if (
                            this.pdevicesStatesDict &&
                            this.pdevicesStates &&
                            (msgtype === 'get_reply' || msgtype === 'update')
                        ) {
                            const dict = this.pdevicesStatesDict[devtype];
                            let haupdate = [];
                            switch (devtype) {
                                case 'panel':
                                    haupdate = await ef.storeSHPpayload(
                                        this,
                                        dict,
                                        this.pdevicesStates[devtype],
                                        topic,
                                        msgtype,
                                        JSON.parse(message.toString()),
                                        this.pdevices[topic]['haEnable'],
                                        logged,
                                    );
                                    break;
                                case 'powerkitbp2000':
                                case 'powerkitbp5000':
                                    haupdate = await ef.storePowerkitPayload(
                                        this,
                                        dict,
                                        this.pdevicesStates[devtype],
                                        topic,
                                        msgtype,
                                        JSON.parse(message.toString()),
                                        this.pdevices[topic]['haEnable'],
                                        logged,
                                    );
                                    break;
                                case 'shelly3em':
                                    haupdate = await ef.storeSHELLYpayload(
                                        this,
                                        dict,
                                        this.pdevicesStates[devtype],
                                        topic,
                                        msgtype,
                                        JSON.parse(message.toString()),
                                        this.pdevices[topic]['haEnable'],
                                        logged,
                                    );
                                    break;
                                case 'unknownjson':
                                    break;
                                default:
                                    haupdate = await ef.storeStationPayload(
                                        this,
                                        dict,
                                        this.pdevicesStates[devtype],
                                        topic,
                                        msgtype,
                                        JSON.parse(message.toString()),
                                        this.pdevices[topic]['haEnable'],
                                        logged,
                                    );
                                    break;
                            }
                            //msg counter, only when receiving telegrams
                            try {
                                let countobj = await this.getStateAsync(`${topic}.info.msgCount`);
                                if (countobj) {
                                    if (countobj.val !== null) {
                                        await this.setState(`${topic}.info.msgCount`, {
                                            val: parseInt(countobj.val) + 1,
                                            ack: true,
                                        });
                                    }
                                } else {
                                    this.log.debug(`did not get count info ${topic}  ${countobj}`);
                                }
                            } catch (error) {
                                this.log.error(`Error writing msg count ${error}`);
                            }
                            if (haupdate.length > 0) {
                                for (let i = 0; i < haupdate.length; i++) {
                                    if (typeof haupdate[i].payload === 'string') {
                                        ha.publish(
                                            this,
                                            topic,
                                            haupdate[i].topic,
                                            haupdate[i].payload,
                                            { qos: 1 },
                                            devicelogged && this.config.msgHaOutgoing,
                                            'HA EF JSON UPDATE RCV',
                                        );
                                    } else {
                                        this.log.warn(`not a string! : ${haupdate[i].topic}  ${haupdate[i].payload}`);
                                    }
                                }
                            }
                        }
                    }

                    //reconnection trial
                    if (this.config.enableMqttReconnect) {
                        if (recon_timer) {
                            this.clearTimeout(recon_timer);
                        }
                        // online check
                        recon_timer = this.setTimeout(() => {
                            this.log.debug('no telegrams from devices within 10min');
                            this.msgReconnects++;
                            this.setState('info.reconnects', {
                                val: this.msgReconnects,
                                ack: true,
                            });
                        }, 600 * 1000); // retrigger time
                    }
                });

                this.client.on('close', () => {
                    this.setState('info.connection', false, true);
                    //all info/status auf offline setzen
                    for (let key in this.pdevices) {
                        this.log.debug(`${key} is offline`);
                        this.setState(`${key}.info.status`, { val: 'offline', ack: true });
                    }
                    this.log.info('ecoflow connection closed');
                });
                this.client.on('error', error => {
                    this.setState('info.connection', false, true);
                    //all info/status auf offline setzen
                    for (let key in this.pdevices) {
                        this.setState(`${key}.info.status`, { val: 'offline', ack: true });
                    }
                    this.log.error(`Error inconnection to Ecoflow MQTT-Broker:${error}`);
                });

                this.client.on('reconnect', async () => {
                    this.log.debug('Reconnecting to Ecoflow MQTT broker...');
                });
            } catch (error) {
                this.log.error(`create mqtt client handling ${error}`);
            }
        } else {
            this.log.warn('check your mqtt credentials, they seem too short');
        }

        //connect to Homeassistant
        if (this.config.haMqttEnable) {
            try {
                this.log.info('[HA] ' + 'going to connect to HA mqtt broker');
                this.log.debug('[HA] ' + 'your HA mqtt configration:');
                this.log.debug(`[HA] ` + `topic         -> ${this.config.haTopic}`);
                this.log.debug(`[HA] ` + `user          -> ${this.config.haMqttUserId}`);
                this.log.debug(`[HA] ` + `port          -> ${this.config.haMqttPort}`);
                this.log.debug(`[HA] ` + `url           -> ${this.config.haMqttUrl}`);
                this.log.debug(`[HA] ` + `protocol      -> ${this.config.haMqttProtocol}`);
                this.log.debug(`[HA] ` + `devices       -> ${JSON.stringify(this.haDevices)}`);

                const optionsHaMqtt = {
                    port: this.config.haMqttPort || 1883,
                    username: this.config.haMqttUserId,
                    password: this.config.haMqttUserPWd,
                    keepAlive: 60,
                    reconnectPeriod: 5000,
                    will: {
                        topic: `${this.config.haTopic}/iob/info/status`,
                        payload: 'offline',
                        qos: 1,
                        retain: false,
                    },
                };

                this.haClient = mqtt.connect(
                    `${this.config.haMqttProtocol + this.config.haMqttUrl}:${this.config.haMqttPort}`,
                    optionsHaMqtt,
                );

                this.haClient.on('connect', async () => {
                    this.log.info('[HA] ' + 'connected');
                    this.setState('info.haConnAvgLoad', { val: 0, ack: true });
                    this.log.debug('[HA] ' + 'haConnAvgLoad  interval started');
                    haLoadInterval = this.setInterval(() => {
                        const msgcnt = this.haCounter - this.haCountMem;
                        this.haCountMem = this.haCounter;
                        this.setState('info.haConnAvgLoad', { val: msgcnt, ack: true });
                    }, 10 * 1000);

                    if (this.haDevices && this.haDevices.length > 0) {
                        //iob
                        const iob_topic = 'homeassistant/binary_sensor/iob/status/config';
                        const iob_payload = {
                            unique_id: 'iob_0_status',
                            device: {
                                identifiers: 'iob_0_status',
                                manufacturer: 'foxthefox',
                                name: 'IOB connector',
                                model: 'iob.ecoflow-mqtt adapter',
                                sw_version: version,
                                suggested_area: 'energy',
                            },
                            device_class: 'connectivity',
                            payload_on: 'online',
                            payload_off: 'offline',
                            state_topic: `${this.config.haTopic}/iob/info/status`,
                            name: 'ioBroker Connection',
                        };
                        ha.publish(
                            this,
                            'IOB',
                            iob_topic,
                            JSON.stringify(iob_payload),
                            { qos: 1, retain: this.config.haDiscoveryRetain || false },
                            this.config.msgHaAutoDiscovery,
                            'HA INIT (iob_connector)',
                        );

                        ha.publish(
                            this,
                            'IOB',
                            `${this.config.haTopic}/iob/info/status`,
                            'online',
                            { qos: 1 },
                            this.config.msgHaAutoDiscovery,
                            'HA INIT (status online)',
                        );

                        ha.subscribe(this, 'homeassistant/status', 'HA INIT ha/status subscription');

                        for (let j = 0; j < this.haDevices.length; j++) {
                            const id = this.haDevices[j];
                            const type = this.pdevices[id]['devType'];
                            let bat1 = false;
                            let bat2 = false;
                            let bat3 = false;
                            if (this.pdevices[id]['pstationsSlave1']) {
                                bat1 = this.pdevices[id]['pstationsSlave1'];
                            }
                            if (this.pdevices[id]['pstationsSlave2']) {
                                bat2 = this.pdevices[id]['pstationsSlave2'];
                            }
                            if (this.pdevices[id]['pstationsSlave3']) {
                                bat3 = this.pdevices[id]['pstationsSlave3'];
                            }
                            const discovery = ha.prepareFullDiscovery(
                                this.haDevices[j],
                                type,
                                this.pdevicesStatesDict[type],
                                this.pdevicesStates[type],
                                this.config.haTopic,
                                bat1,
                                bat2,
                                bat3,
                                version,
                            );
                            if (this.config.showDiscoveryObject) {
                                this.log.debug(`[HA] ${id} autoconf: ${JSON.stringify(discovery)}`);
                            }

                            ha.publishArrayObjects(
                                this,
                                id,
                                discovery,
                                { qos: 1, retain: this.config.haDiscoveryRetain || false },
                                this.config.msgHaAutoDiscovery,
                                'HA INIT (publish discovery objects)',
                            );

                            const status = await this.getStateAsync(`${id}.info.status`);
                            if (status && status.val) {
                                //eventuell zu früh um das zu senden
                                const mode = status.val === 'online' ? 'online' : 'offline';
                                this.haClient.publish(
                                    `${this.config.haTopic}/${id}/info/status`,
                                    mode,
                                    { qos: 1 },
                                    error => {
                                        if (error) {
                                            this.log.error(`[HA] Error when publishing the HA MQTT message: ${error}`);
                                        } else {
                                            this.haCounter++;
                                            if (this.config.msgHaAutoDiscovery) {
                                                this.log.debug(`[HA] sent ${mode} to HA broker for ${id}`);
                                            }
                                        }
                                    },
                                );
                            }

                            ha.subscribe(this, `${this.config.haTopic}/${this.haDevices[j]}/set/#`, 'HA INIT');
                        }
                        // this.setState('HA info.connection', true, true);
                    } else {
                        this.log.info(
                            `[HA] no discovery to send, since no devices assigned for HA communication ${
                                this.haDevices.length
                            }`,
                        );
                    }
                    //we set the connection status after the discovery things, this triggers the full update of states
                    this.setState('info.haConnection', { val: 'online', ack: true });
                });

                this.haClient.on('message', async (topic, message) => {
                    if (this.config.msgHaIncomming) {
                        this.log.debug(`[HA] msg: ${topic} ${message} ${JSON.stringify(message)}`);
                    }
                    if (topic !== 'homeassistant/status') {
                        const idsplit = topic.split('/');
                        const device = idsplit[1];
                        const channel = idsplit[3];
                        const item = idsplit[4];
                        let devtype = '';
                        if (this.pdevices && device && channel && item) {
                            if (this.pdevices[device] && idsplit[2] === 'set') {
                                devtype = this.pdevices[device]['devType'];
                                //select decoding
                                //select_obj
                                //split message and set the state
                                //must contain /set/
                                if (this.config.msgHaIncomming) {
                                    this.log.debug(
                                        `[HA] ${devtype}: processing ${device}  ${channel}   ${item} value : ${String(
                                            message,
                                        )}`,
                                    );
                                }

                                let value;
                                if (this.pdevicesStatesDict[devtype] && this.pdevicesStates) {
                                    const type = this.pdevicesStatesDict[devtype][channel][item]['entity'];
                                    if (type === 'switch') {
                                        const payloadtrue =
                                            this.pdevicesStates[devtype][channel]['switch'][item]['payload_on'];
                                        //const payloadfalse = this.pdevicesStates[devtype][channel]['switch'][item]['payload_off']
                                        value = String(message) === payloadtrue ? true : false;
                                        // send back the cmd for toggle prevention in HA
                                    } else if (type === 'level') {
                                        if (
                                            this.pdevicesStates[devtype][channel]['level'][item]['entity_type'] ===
                                            'number'
                                        ) {
                                            value = parseInt(String(message));
                                        } else if (
                                            this.pdevicesStates[devtype][channel]['level'][item]['entity_type'] ===
                                            'select'
                                        ) {
                                            try {
                                                value =
                                                    this.pdevicesStates[devtype][channel]['level'][item]['select_obj'][
                                                        String(message)
                                                    ];
                                            } catch (error) {
                                                this.log.error(
                                                    `[HA] ` +
                                                        `Wrong selection value ${String(message)} for ${device}  ${
                                                            channel
                                                        } possible is : ${
                                                            this.pdevicesStates[devtype][channel]['level'][item][
                                                                'select_obj'
                                                            ]
                                                        }   -> ${error}`,
                                                );
                                            }
                                        } else {
                                            this.log.debug('[HA] ' + 'type level but not number or select ');
                                        }
                                    }

                                    // send back the received value, so HA populates it internally
                                    /*
									let devicelogged = false
									if (this.pdevices[device]['debugEnable'] === true) {
										devicelogged = true;
									}
									*/
                                    ha.publish(
                                        this,
                                        device,
                                        `iob_ef/${device}_${channel}/${item}`,
                                        String(message),
                                        { qos: 1 },
                                        true, //devicelogged && this.config.msgHaOutgoing,
                                        'HA EF JSON UPDATE value to HA',
                                    );
                                } else {
                                    this.log.debug('[HA] ' + 'states or dict missing for cmd evaluation');
                                }
                                if (this.config.msgHaIncomming) {
                                    this.log.debug(
                                        `[HA] ` + `sending cmd value ${value} to ${device}.${channel}.${item}`,
                                    );
                                }
                                this.setState(`${device}.${channel}.${item}`, {
                                    val: value,
                                    ack: false,
                                });
                            } else {
                                this.log.debug(`[HA] ${topic} not part of configured devices`);
                            }
                        }
                    } else if (topic === 'homeassistant/status') {
                        this.log.info(`[HA] got broker status: ${String(message)}`);
                        this.setState('info.haBrokerStatus', { val: String(message), ack: true });
                        //wenn online darauf reagieren und discovery schicken ?!
                    }
                });

                this.haClient.on('close', () => {
                    this.setState('info.haConnection', { val: 'offline', ack: true });
                    this.log.info('[HA] ' + ' connection closed');
                });
                this.haClient.on('error', error => {
                    this.setState('info.haConnection', { val: 'error', ack: true });
                    this.log.error(`[HA] ` + `Error inconnection to HA MQTT-Broker: ${error}`);
                });

                this.haClient.on('reconnect', () => {
                    this.setState('info.haConnection', { val: 'reconnect', ack: true });
                    this.log.debug('[HA] ' + 'Reconnecting to HA MQTT broker...');
                });
            } catch (error) {
                this.log.error(`[HA] ` + `create HA mqtt client handling ${error}`);
            }
        }
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     *
     * @param {() => void} callback - callback
     */
    async onUnload(callback) {
        try {
            // Here you must clear all timeouts or intervals that may still be active
            // clearTimeout(timeout1);
            // clearTimeout(timeout2);
            // ...
            // clearInterval(interval1);
            if (recon_timer) {
                this.clearTimeout(recon_timer);
                this.log.debug('recon_timer stopped');
            }
            if (lastQuotInterval) {
                this.clearInterval(lastQuotInterval);
                this.log.debug('lastQuotInterval  interval stopped');
            }
            if (haLoadInterval) {
                clearInterval(haLoadInterval);
                this.log.debug('haConnAvgLoad  interval stopped');
            }
            if (this.haClient && this.haDevices) {
                // await ha.publishAsync(this, this.config.haTopic + '/iob/info/status', 'offline', 1);
                ha.publish(
                    this,
                    'IOB',
                    `${this.config.haTopic}/iob/info/status`,
                    'offline',
                    { qos: 1 },
                    true,
                    'HA UNLOAD',
                );

                for (let i = 0; i < this.haDevices.length; i++) {
                    ha.publish(
                        this,
                        this.haDevices[i],
                        `${this.config.haTopic}/${this.haDevices[i]}/info/status`,
                        'offline',
                        { qos: 1 },
                        true,
                        'HA UNLOAD',
                    );
                }
            }
            for (let key in this.pdevices) {
                this.setState(`${key}.info.status`, { val: 'offline', ack: true });
            }
            if (this.client) {
                this.client.end();
            }

            if (this.haClient) {
                this.setState('info.haConnection', { val: 'offline', ack: true });
                this.haClient.end();
            }
            this.log.info('cleaned everything up...');
            callback();
        } catch (e) {
            this.log.error(e);
            callback();
        }
    }

    /**
     * Is called if a subscribed state changes
     *
     * @param {string} id - name of data object
     * @param {ioBroker.State | null | undefined} state - state of the datapoint
     */
    async onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
            if (!state.ack) {
                // kein DC/AC/USB Einschalten wenn SOC unterhalb von minDsg liegt
                // kein Ladezuschaltung, wenn SOC über maxChg liegt
                const idsplit = id.split('.');
                const device = idsplit[2];
                const channel = idsplit[3];
                const item = idsplit[4];
                this.log.info(`(ack=false) ->cmd : channel ${channel} state ${item}`);
                let topic = '';
                if (item === 'latestQuotas' || item.includes('get')) {
                    topic = `/app/${this.mqttUserId}/${device}/thing/property/get`;
                    //reset of switch
                    // not needed we trigger at 0 and 1
                    // await this.setStateAsync(device + '.' + channel + '.' + item, {val:false, ack: true});
                } else {
                    topic = `/app/${this.mqttUserId}/${device}/thing/property/set`;
                }
                let devicetype = '';
                let logged = false;
                let type = '';
                let cmd = null;

                if (this.pdevices && this.pdevicesCmd) {
                    if (this.pdevices[device]) {
                        switch (this.pdevices[device]['devType']) {
                            case 'pstream600':
                            case 'pstream800':
                            case 'plug':
                            case 'deltaproultra':
                            case 'powerocean':
                            case 'poweroceanplus':
                            case 'poweroceanfit':
                            case 'panel2':
                            case 'alternator':
                            case 'deltapro3':
                            case 'delta3plus':
                            case 'delta3':
                            case 'river3plus':
                            case 'river3':
                            case 'smartmeter':
                            case 'stream_ac_pro':
                            case 'stream_pro':
                            case 'stream_ultra':
                            case 'wave3':
                            case 'unknown':
                                devicetype = this.pdevices[device]['devType'];
                                type = 'protobuf'; //includes also plugs
                                cmd = this.pdevicesCmd[devicetype];
                                logged = this.pdevices[device]['debugEnable'] && this.config.msgCmd;
                                break;
                            case 'powerkitbp2000':
                            case 'powerkitbp5000':
                                devicetype = this.pdevices[device]['devType'];
                                type = 'json'; //includes also glacier, wave
                                cmd = this.pdevicesCmd[devicetype];
                                logged = this.pdevices[device]['debugEnable'] && this.config.msgCmd;
                                break;
                            default:
                                // all other is not protobuf
                                devicetype = this.pdevices[device]['devType'];
                                type = 'json'; //includes also glacier, wave
                                cmd = this.pdevicesCmd[devicetype];
                                logged = this.pdevices[device]['debugEnable'] && this.config.msgCmd;
                                break;
                        }
                    } else {
                        this.log.warn(
                            `pdevices -> ${JSON.stringify(
                                this.pdevices,
                            )} or pdevicesCmd problematic -> ${JSON.stringify(this.pdevicesCmd)}`,
                        );
                    }
                }

                switch (type) {
                    case 'protobuf':
                        if (devicetype === 'pstream600' || devicetype === 'pstream800') {
                            devicetype = 'pstream';
                        }
                        if (devicetype !== '' && devicetype !== 'none' && cmd) {
                            const msgBuf = await this.prepareProtoCmd[devicetype](
                                this,
                                device,
                                devicetype,
                                item,
                                state.val,
                                cmd[channel][item],
                                logged,
                            );

                            if (msgBuf) {
                                if (logged == true) {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    this.log.debug(
                                        `[PROTOBUF encode] converted  Hex-String:${Buffer.from(msgBuf).toString(
                                            'hex',
                                        )}`,
                                    );
                                }
                                if (this.client) {
                                    this.client.publish(topic, msgBuf, error => {
                                        // , { qos: 1 }
                                        if (error) {
                                            this.log.error(`Error when publishing the MQTT message:: ${error}`);
                                        } else {
                                            if (logged === true) {
                                                const msgtop = ef.getIdFromTopic(topic, this.mqttUserId);
                                                this.log.debug(
                                                    ` Message succesfully published.${msgtop.topic} ../..${msgtop.msg}`,
                                                );
                                            }
                                        }
                                    });
                                }
                            } else {
                                this.log.debug('missing msgBuf for sending');
                            }
                        } else {
                            this.log.debug(`nothing to send ${devicetype}   ${JSON.stringify(cmd)}`);
                        }
                        break;
                    case 'json':
                        if (devicetype !== '' && devicetype !== 'none' && cmd) {
                            const msg = await ef.prepareStationCmd(
                                this,
                                device,
                                devicetype,
                                item,
                                state.val,
                                cmd[channel][item],
                                channel,
                                logged,
                            );
                            if (Object.keys(msg).length > 0) {
                                if (logged === true) {
                                    this.log.debug(`publish  ${topic}`);
                                    this.log.debug(`publish  ${JSON.stringify(msg)}`);
                                }

                                if (this.client) {
                                    this.client.publish(topic, JSON.stringify(msg), error => {
                                        // , { qos: 1 }
                                        if (error) {
                                            this.log.error(`Error when publishing the MQTT message: ${error}`);
                                        } else {
                                            if (logged === true) {
                                                const msgtop = ef.getIdFromTopic(topic, this.mqttUserId);
                                                this.log.debug(
                                                    ` Message succesfully published.${msgtop.topic} ../..${msgtop.msg}`,
                                                );
                                            }
                                        }
                                    });
                                }
                            } else {
                                this.log.debug(`nothing to send ${devicetype}${JSON.stringify(msg)}`);
                            }
                        } else {
                            this.log.debug(`nothing send ${devicetype}  ${JSON.stringify(cmd)}`);
                        }
                        break;
                    default:
                        break;
                }
            } else {
                const idsplit = id.split('.');
                const device = idsplit[2];
                if (device === 'info') {
                    // Top level (non-device specific) states
                    const item = idsplit[3];
                    if (item === 'haConnection') {
                        if (state.val == 'offline') {
                            //stop interval
                            if (haLoadInterval) {
                                this.clearInterval(haLoadInterval);
                            }
                            await this.setStateAsync('info.haConnAvgLoad', { val: 0, ack: true });
                        } else if (state.val == 'online') {
                            this.log.debug('HA broker is online; start init of devices');
                            ha.publish(
                                this,
                                'IOB',
                                `${this.config.haTopic}/iob/info/status`,
                                'online',
                                { qos: 1 },
                                true,
                                'HA INIT',
                            );
                            //initial update of HA when haConnection is online
                            if (this.pdevices) {
                                for (const device in this.pdevices) {
                                    if (this.haClient && this.pdevices[device]['haEnable'] === true) {
                                        this.log.debug(`[HA] init device ${device}`);
                                        const status = await this.getStateAsync(`${device}.info.status`);
                                        if (status && status.val) {
                                            //maybe also here only when online
                                            await ha.initDeviceWithHA(
                                                this,
                                                device,
                                                status.val === 'online' ? 'online' : 'offline',
                                                this.pdevices,
                                                this.pdevicesStatesDict,
                                                this.pdevicesStates,
                                                this.config.haTopic,
                                                this.config.msgHaStatusInitial,
                                            );
                                            /*
                                            await this.initDeviceWithHA(
                                                device,
                                                status.val === 'online' ? 'online' : 'offline',
                                            );
                                            */
                                        }
                                    }
                                }
                            }
                        } else {
                            this.log.debug(`got info.haConnection status ${state.val}`);
                        }
                    }
                } else {
                    // Device specific states
                    const channel = idsplit[3];
                    const item = idsplit[4];
                    if (channel === 'info' && item === 'status') {
                        if (state.val === 'online') {
                            if (!this.onlineDevices.includes(device)) {
                                this.onlineDevices.push(device);
                            }
                        } else if (state.val === 'offline') {
                            let index = this.onlineDevices.indexOf(device);
                            if (index !== -1) {
                                this.onlineDevices.splice(index, 1);
                            }
                        }
                        this.setState('info.cntDevOnline', { val: this.onlineDevices.length, ack: true });

                        //update of HA depending on the status change of device
                        if (this.haClient && this.pdevices[device]['haEnable'] === true) {
                            await ha.initDeviceWithHA(
                                this,
                                device,
                                String(state.val),
                                this.pdevices,
                                this.pdevicesStatesDict,
                                this.pdevicesStates,
                                this.config.haTopic,
                                this.config.msgHaStatusInitial,
                            );
                            //await this.initDeviceWithHA(device, String(state.val));
                        }
                    } else if (channel === 'info' && item === 'cntDevOnline') {
                        if (state.val === 0) {
                            //stop recon_timer_long
                            //start recon_timer
                            this.log.debug('no devices reachable at EF cloud');
                        }
                    }
                }
            }
        } else {
            // The state was deleted
            this.log.info(`state ${id} deleted`);
        }
    }

    // If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
    // /**
    //  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
    //  * Using this method requires "common.messagebox" property to be set to true in io-package.json
    //  * @param {ioBroker.Message} obj
    //  */
    async onMessage(obj) {
        this.log.info('send command');
        //this.log.info('obj ' + JSON.stringify(obj));
        //this.log.info('obj ' + obj.message);
        if (!obj || !obj.command) {
            return;
        }
        switch (obj.command) {
            case 'create':
                if (obj.callback && obj.message) {
                    this.log.info('send msg create mqtt data');
                    const user = obj.message['user'];
                    const pwd = obj.message['pass'];
                    if (user && pwd) {
                        try {
                            const login = await ef.getEcoFlowMqttCredits(this, user, pwd);

                            let result = {
                                native: {
                                    mqttUserId: login.UserID,
                                    mqttUserName: login.User,
                                    mqttPwd: login.Password,
                                    mqttClientId: login.clientID,
                                },
                            };
                            this.sendTo(obj.from, obj.command, result, obj.callback);
                        } catch (error) {
                            this.log.error(error);
                            this.sendTo(
                                obj.from,
                                obj.command,
                                {
                                    error: 'Error getting mqtt credentials. See log for more information.',
                                },
                                obj.callback,
                            );
                        }
                    } else {
                        this.sendTo(obj.from, obj.command, { error: 'user and pwd are undefined' }, obj.callback);
                    }
                }
                break;

            case 'quotajson':
                if (obj.callback && obj.message) {
                    this.log.info('send msg quota data');
                    await ef.getLastQuotas(this, this.pdevices);
                    const timeout = this.setTimeout(() => {
                        try {
                            const quotas = JSON.stringify(this.quotas);
                            this.sendTo(
                                obj.from,
                                obj.command,
                                {
                                    error: `device data:${quotas}`,
                                },
                                obj.callback,
                            );
                        } catch (error) {
                            this.log.debug(`send quota req ->${error}`);
                            this.clearTimeout(timeout);
                        }
                    }, 5000);
                }
                break;
            case 'quotabuf':
                if (obj.callback && obj.message) {
                    this.log.info('send msg protobuf unknown data');
                    const timeout = this.setTimeout(() => {
                        try {
                            const quotas = JSON.stringify(this.unknownPBmsg);
                            this.sendTo(
                                obj.from,
                                obj.command,
                                {
                                    error: `device data:${quotas}`,
                                },
                                obj.callback,
                            );
                        } catch (error) {
                            this.log.debug(`send unknown pb data req ->${error}`);
                            this.clearTimeout(timeout);
                        }
                    }, 2000);
                }
                break;
            case 'test': {
                // Try to connect to mqtt broker
                if (obj.callback && obj.message) {
                    const mqtt = require('mqtt');

                    const _url = `${obj.message.url}:${obj.message.port}`;

                    const optionsMqtt = {
                        port: obj.message.port || 8883,
                        clientId: obj.message.clientId,
                        username: obj.message.user,
                        password: obj.message.pass,
                    };

                    const _client = mqtt.connect(_url, optionsMqtt);
                    // Set timeout for connection
                    const timeout = this.setTimeout(() => {
                        _client.end();
                        this.sendTo(obj.from, obj.command, { result: 'timeout' }, obj.callback);
                    }, 2000);

                    // If connected, return success
                    _client.on('connect', () => {
                        _client.end();
                        this.clearTimeout(timeout);
                        this.sendTo(obj.from, obj.command, { result: 'connected' }, obj.callback);
                    });
                    // If not connected, return error
                    _client.on('error', err => {
                        _client.end();
                        this.clearTimeout(timeout);
                        this.log.warn(`Error on mqtt test: ${err}`);
                        this.sendTo(obj.from, obj.command, { error: err }, obj.callback);
                    });
                }
                break;
            }
            case 'sendmsg': {
                // Try to connect to mqtt broker
                if (obj.callback && obj.message) {
                    this.mqttClient();
                    // Set timeout for connection
                    const timeout = this.setTimeout(() => {
                        this.mqttClient.end();
                        this.sendTo(obj.from, obj.command, { result: 'timeout' }, obj.callback);
                    }, 2000);

                    // If connected, return success
                    this.mqttClient.on('connect', () => {
                        this.mqttClient.end();
                        this.clearTimeout(timeout);
                        this.sendTo(obj.from, obj.command, { result: 'connected' }, obj.callback);
                    });
                    // If not connected, return error
                    this.mqttClient.on('error', err => {
                        this.mqttClient.end();
                        this.clearTimeout(timeout);
                        this.log.warn(`Error on mqtt test: ${err}`);
                        this.sendTo(obj.from, obj.command, { error: err }, obj.callback);
                    });
                }
                break;
            }
        }
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<utils.AdapterOptions>} [options] - keine Ahnung
     */
    module.exports = options => new EcoflowMqtt(options);
} else {
    // otherwise start the instance directly
    new EcoflowMqtt();
}
