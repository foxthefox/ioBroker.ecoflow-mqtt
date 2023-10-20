'use strict';

/*
 * Created with @iobroker/create-adapter v2.5.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');

// Load your modules here, e.g.:
// const fs = require("fs");

class EcoflowMqtt extends utils.Adapter {
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: 'ecoflow-mqtt'
		});
		this.on('ready', this.onReady.bind(this));
		this.on('stateChange', this.onStateChange.bind(this));
		// this.on('objectChange', this.onObjectChange.bind(this));
		// this.on('message', this.onMessage.bind(this));
		this.on('unload', this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here

		// Reset the connection indicator during startup
		this.setState('info.connection', false, true);

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		this.log.info('config option1: ' + this.config.option1);
		this.log.info('config option2: ' + this.config.option2);

		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/
		await this.setObjectNotExistsAsync('testVariable', {
			type: 'state',
			common: {
				name: 'testVariable',
				type: 'boolean',
				role: 'indicator',
				read: true,
				write: true
			},
			native: {}
		});

		// In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
		this.subscribeStates('testVariable');
		// You can also add a subscription for multiple states. The following line watches all states starting with "lights."
		// this.subscribeStates('lights.*');
		// Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
		// this.subscribeStates('*');

		/*
			setState examples
			you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		await this.setStateAsync('testVariable', true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		await this.setStateAsync('testVariable', { val: true, ack: true });

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		await this.setStateAsync('testVariable', { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		let result = await this.checkPasswordAsync('admin', 'iobroker');
		this.log.info('check user admin pw iobroker: ' + result);

		result = await this.checkGroupAsync('admin', 'admin');
		this.log.info('check group user admin group admin: ' + result);
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			// clearInterval(interval1);

			callback();
		} catch (e) {
			callback();
		}
	}

	// If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
	// You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
	// /**
	//  * Is called if a subscribed object changes
	//  * @param {string} id
	//  * @param {ioBroker.Object | null | undefined} obj
	//  */
	// onObjectChange(id, obj) {
	// 	if (obj) {
	// 		// The object was changed
	// 		this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
	// 	} else {
	// 		// The object was deleted
	// 		this.log.info(`object ${id} deleted`);
	// 	}
	// }

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
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
	// onMessage(obj) {
	// 	if (typeof obj === 'object' && obj.message) {
	// 		if (obj.command === 'send') {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info('send command');

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
	// 		}
	// 	}
	// }

	async createChannel(typ, newId, name, role) {
		this.log.info('____________________________________________');
		this.log.info('create Main object ' + typ + ' ' + newId + ' ' + name + ' ' + role);
		await this.setObjectNotExistsAsync(typ + newId, {
			type: 'channel',
			common: {
				name: name,
				role: role
			},
			native: {
				aid: newId
			}
		});
		return;
	}

	// role 'info', 'indicator'

	/**
	 * @param {string} newId
	 * @param {string} datapoint
	 * @param {string} name
	 * @param {string} role
	 * @param {string} subrole
	 * @param {number} min
	 * @param {number} max
	 * @param {string} unit
	 */
	async createMyState(newId, datapoint, name, role, subrole, min, max, unit) {
		let write = false;
		let type = '';
		switch (role) {
			case 'switch':
				type = 'boolean';
				write = true;
				break;
			case 'indicator':
				if ((subrole = 'number')) {
					type = 'number';
				}
				if ((subrole = 'boolean')) {
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
		}

		this.log.debug('create datapoint ' + newId + ' with  ' + datapoint);

		if (!min && !max) {
			// @ts-ignore
			await this.setObjectNotExistsAsync(newId + '.' + datapoint, {
				type: 'state',
				common: {
					name: name,
					type: type,
					read: true,
					write: write,
					role: role,
					desc: name
				},
				native: {}
			});
		} else {
			// @ts-ignore
			await this.setObjectNotExistsAsync('DECT_' + newId + '.' + datapoint, {
				type: 'state',
				common: {
					name: name,
					type: type,
					min: min,
					max: max,
					unit: unit,
					read: true,
					write: write,
					role: 'info',
					desc: name
				},
				native: {}
			});
		}

		return;
	}
}

if (require.main !== module) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new EcoflowMqtt(options);
} else {
	// otherwise start the instance directly
	new EcoflowMqtt();
}
