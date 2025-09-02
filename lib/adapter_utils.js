'use strict';
/**
 * @param adapter - THIS transfer
 * @param {string} device - seria#
 * @param {string} channel - upper struct of datapoints
 * @param {string} name - datapoint name
 * @param {string} role - IOB role
 */
async function createMyChannel(adapter, device, channel, name, role) {
    if (
        (adapter.config.msgStateCreationPstation && adapter.pstations[device]) ||
        (adapter.config.msgStateCreationPstream && adapter.pstreams[device])
    ) {
        adapter.log.debug('____________________________________________');
        adapter.log.debug(`create  channel ${channel} as role ${role}`);
    }
    await adapter.setObjectNotExistsAsync(`${device}.${channel}`, {
        type: 'channel',
        common: {
            name: name,
            role: role,
        },
        native: {},
    });
    return;
}

/**
 * @param adapter - THIS transfer
 * @param {string} device - serial#
 * @param {string} channel - upper struct of datapoints
 * @param {string} datapoint - datapoint name
 * @param {object} stateObj - datapoint definition
 */
async function createMyState(adapter, device, channel, datapoint, stateObj) {
    try {
        let read = true;
        let write = false;
        let type = '';
        // adapter.log.debug(JSON.stringify(stateObj));
        let role = stateObj['role'];
        let device_class = null;
        let subrole = null;
        let name = stateObj['name'];

        if (stateObj['subrole']) {
            subrole = stateObj['subrole'];
        }
        if (stateObj['device_class']) {
            device_class = stateObj['device_class'];
        }

        switch (role) {
            case 'switch':
                type = 'boolean';
                write = true;
                break;
            case 'indicator':
                type = 'boolean';
                break;
            case 'button':
                type = 'boolean';
                read = false;
                write = true;
                break;
            case 'sensor':
                type = 'boolean';
                break;
            case 'info':
                type = 'string';
                break;
            case 'value':
                // always numbers read only
                if (device_class) {
                    role = role.concat('.', device_class);
                }
                //workaround when IOB does not have the device_class
                if (subrole) {
                    if (subrole === 'none' || subrole === 'mode') {
                        role = stateObj['role'];
                    } else {
                        role = stateObj['role'].concat('.', subrole);
                    }
                }
                type = 'number';
                break;
            case 'level':
                // always numbers
                if (device_class) {
                    role = role.concat('.', device_class);
                }
                //workaround when IOB does not have the device_class
                if (subrole) {
                    if (subrole === 'none' && subrole === 'mode') {
                        role = stateObj['role'];
                    } else {
                        role = stateObj['role'].concat('.', subrole);
                    }
                }
                type = 'number';
                write = true;
                break;
            case 'date':
                type = 'string'; //parsable by new Date(ddd) string
                // common.type = number - epoch seconds * 1000
                break;
            case 'list':
                type = 'array';
                break;
            default:
                role = 'nix';
                break;
        }
        let common = {
            name: name,
            type: type,
            read: read,
            write: write,
            role: role,
            desc: name,
        };
        if (stateObj['min']) {
            common['min'] = stateObj['min'];
        }
        if (stateObj['max']) {
            common['max'] = stateObj['max'];
        }
        if (stateObj['step']) {
            common['step'] = stateObj['step'];
        }
        if (stateObj['unit_of_measurement']) {
            common['unit'] = stateObj['unit_of_measurement'];
        }
        if (stateObj['states']) {
            common['states'] = stateObj['states'];
        }
        if (
            (adapter.config.msgStateCreationPstation && adapter.pstations[device]) ||
            (adapter.config.msgStateCreationPstream && adapter.pstreams[device])
        ) {
            adapter.log.debug(`create datapoint ${datapoint} used common ${JSON.stringify(common)}`);
        }
        await adapter.setObjectNotExistsAsync(`${device}.${channel}.${datapoint}`, {
            type: 'state',
            common: common,
            native: {},
        });
        if (channel === 'action') {
            await adapter.setStateAsync(`${device}.${channel}.${datapoint}`, { val: false, ack: true });
        }
        if (role === 'level' || role === 'switch' || role === 'button' || role.includes('level')) {
            adapter.subscribeStates(`${device}.${channel}.${datapoint}`);
        }
        if (channel === 'info' && datapoint === 'status') {
            await adapter.setStateAsync(`${device}.${channel}.${datapoint}`, { val: 'offline', ack: true });
            await adapter.subscribeStatesAsync(`${device}.${channel}.${datapoint}`);
            adapter.log.debug(`SET initial ${device}.${channel}.${datapoint} to offline`);
        }
        if (channel === 'info' && datapoint === 'msgCount') {
            await adapter.setStateAsync(`${device}.${channel}.${datapoint}`, { val: 0, ack: true });
            adapter.log.debug(`SET initial ${device}.${channel}.${datapoint} to 0`);
        }
    } catch (error) {
        adapter.log.error(`createMyState ${channel}  ${datapoint}  ${JSON.stringify(stateObj)}---> ${error}`);
    }

    return;
}

/**
 * @param  adapter - THIS transfer
 * @param {boolean} haenable - enable bit
 */
async function createInfoStates(adapter, haenable) {
    await adapter.setObjectNotExistsAsync('info.reconnects', {
        type: 'state',
        common: {
            name: 'reconnects',
            type: 'number',
            read: true,
            write: false,
            role: 'indicator',
            desc: 'needed reconnects',
        },
        native: {},
    });
    await adapter.setStateAsync('info.reconnects', { val: 0, ack: true });
    await adapter.setObjectNotExistsAsync('info.cntDevOnline', {
        type: 'state',
        common: {
            name: 'Count online devices',
            type: 'number',
            read: true,
            write: false,
            role: 'indicator',
            desc: 'Count online devices',
        },
        native: {},
    });
    await adapter.setStateAsync('info.cntDevOnline', { val: 0, ack: true });
    if (haenable) {
        await adapter.setObjectNotExistsAsync('info.haConnection', {
            type: 'state',
            common: {
                name: 'Status of HA connection',
                type: 'string',
                read: true,
                write: false,
                role: 'info',
                desc: 'Status of HA connection',
            },
            native: {},
        });
        await adapter.setStateAsync('info.haConnection', { val: 'offline', ack: true });
        adapter.log.debug('SET initial ' + 'info.haConnection' + ' to offline');

        await adapter.setObjectNotExistsAsync('info.haConnAvgLoad', {
            type: 'state',
            common: {
                name: '10s avg load to HA',
                type: 'number',
                read: true,
                write: false,
                role: 'indicator',
                desc: '10s avg load to HA',
            },
            native: {},
        });
        await adapter.subscribeStatesAsync('info.haConnection');
        await adapter.setObjectNotExistsAsync('info.haBrokerStatus', {
            type: 'state',
            common: {
                name: 'Status of HA Broker',
                type: 'string',
                read: true,
                write: false,
                role: 'info',
                desc: 'Status of HA Broker',
            },
            native: {},
        });
        await adapter.setStateAsync('info.haBrokerStatus', { val: 'unknown', ack: true });
        await adapter.subscribeStatesAsync('info.haBrokerStatus');
    }
}

exports.createMyChannel = createMyChannel;
exports.createMyState = createMyState;
exports.createInfoStates = createInfoStates;
