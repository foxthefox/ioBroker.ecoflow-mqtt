'use strict';
/**
	 * @param {string} device
	 * @param {string} channel
	 * @param {string} name
	 * @param {string} role
	 */
async function createMyChannel(adapter, device, channel, name, role) {
	if (
		(adapter.config.msgStateCreationPstation && adapter.pstations[device]) ||
		(adapter.config.msgStateCreationPstream && adapter.pstreams[device])
	) {
		adapter.log.debug('____________________________________________');
		adapter.log.debug('create  channel ' + channel + ' as role ' + role);
	}
	await adapter.setObjectNotExistsAsync(device + '.' + channel, {
		type: 'channel',
		common: {
			name: name,
			role: role
		},
		native: {}
	});
	return;
}

/**
	 * @param {string} device
	 * @param {string} channel
	 * @param {string} datapoint
	 * @param {object} stateObj
	 */
async function createMyState(adapter, device, channel, datapoint, stateObj) {
	let write = false;
	let type = '';
	let role = stateObj['role'];
	// adapter.log.debug(JSON.stringify(stateObj));
	let subrole = '';
	let name = stateObj['name'];

	if (stateObj['subrole']) subrole = stateObj['subrole'];

	switch (role) {
		case 'switch':
			type = 'boolean';
			write = true;
			break;
		case 'indicator':
			if ((subrole = 'number')) {
				type = 'number';
			} else if ((subrole = 'boolean')) {
				type = 'boolean';
			}
			break;
		case 'button':
			type = 'boolean';
			write = true;
			break;
		case 'info':
			type = 'string';
			break;
		case 'value':
			if (subrole) {
				//value or value....
				role.concat('.', subrole);
			}
			type = 'number';
			write = true;
			break;
		case 'date':
			type = 'string';
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
		read: true,
		write: write,
		role: role,
		desc: name
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
		adapter.log.debug('create datapoint ' + datapoint + ' used common ' + JSON.stringify(common));
	}
	// @ts-ignore
	await adapter.setObjectNotExistsAsync(device + '.' + channel + '.' + datapoint, {
		type: 'state',
		common: common,
		native: {}
	});

	if (role === 'value' || role === 'switch') {
		adapter.subscribeStates(device + '.' + channel + '.' + datapoint);
	}
	if (channel === 'info' && datapoint === 'status') {
		await adapter.setStateAsync(device + '.' + channel + '.' + datapoint, { val: 'offline', ack: true });
		await adapter.subscribeStatesAsync(device + '.' + channel + '.' + datapoint);
		adapter.log.debug('SET initial ' + device + '.' + channel + '.' + datapoint + ' to offline');
	}
	return;
}

async function createInfoStates(adapter, haenable) {
	await adapter.setObjectNotExistsAsync('info.msgCountPstream', {
		type: 'state',
		common: {
			name: 'msgCountPstream',
			type: 'number',
			read: true,
			write: false,
			role: 'indicator',
			desc: 'msgCountPstream'
		},
		native: {}
	});
	await adapter.setObjectNotExistsAsync('info.msgCountPlug', {
		type: 'state',
		common: {
			name: 'msgCountPlug',
			type: 'number',
			read: true,
			write: false,
			role: 'indicator',
			desc: 'msgCountPlug'
		},
		native: {}
	});
	await adapter.setObjectNotExistsAsync('info.msgCountPstation', {
		type: 'state',
		common: {
			name: 'msgCount Pstation/Glacier/Wave',
			type: 'number',
			read: true,
			write: false,
			role: 'indicator',
			desc: 'msgCountPstation'
		},
		native: {}
	});
	await adapter.setObjectNotExistsAsync('info.reconnects', {
		type: 'state',
		common: {
			name: 'reconnects',
			type: 'number',
			read: true,
			write: false,
			role: 'indicator',
			desc: 'needed reconnects'
		},
		native: {}
	});
	if (haenable) {
		await adapter.setObjectNotExistsAsync('info.haConnection', {
			type: 'state',
			common: {
				name: 'Status of HA connection',
				type: 'string',
				read: true,
				write: false,
				role: 'info',
				desc: 'Status of HA connection'
			},
			native: {}
		});

		await adapter.setObjectNotExistsAsync('info.haConnAvgLoad', {
			type: 'state',
			common: {
				name: '10s avg load to HA',
				type: 'number',
				read: true,
				write: false,
				role: 'indicator',
				desc: '10s avg load to HA'
			},
			native: {}
		});
		await adapter.subscribeStatesAsync('info.haConnection');
	}
}

exports.createMyChannel = createMyChannel;
exports.createMyState = createMyState;
exports.createInfoStates = createInfoStates;
