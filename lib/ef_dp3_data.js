const deltapro3States = {
	action: {
		switch: {
			latestQuotas: {
				entity_type: 'switch',
				device_class: 'switch',
				role: 'switch',
				name: 'Get latest Quotas',
				payload_off: 'no trigger',
				payload_on: 'trigger',
				latestQuotas: { '0': 'no trigger', '1': 'trigger' }
			}
		}
	},
	info: {
		diagnostic: {
			status: {
				entity_type: 'text',
				entity_category: 'diagnostic',
				name: 'Cloud Connection Status',
				role: 'info',
				status: { '-2': 'offline', '0': 'offline', '1': 'online' }
			}
		}
	}
};

const deltapro3StatesDict = {
	deltapro3: {
		action: {
			latestQuotas: { entity: 'switch' }
		},
		info: {
			status: { entity: 'diagnostic' }
		}
	}
};

const deltapro3Ranges = {
	deltapro3: {
		energy: {
			number: {
				watth5: {
					max: 60000
				},
				watth6: {
					max: 1440
				}
			}
		}
	}
};

const deltapro3Cmd = {
	deltapro3: {
		action: {
			latestQuotas: { msg: { cmdFunc: 20, cmdId: 1, dataLen: 0 } }
		}
	}
};

const protoSource = `
syntax = "proto3";
`;

module.exports = {
	deltapro3States,
	deltapro3StatesDict,
	deltapro3Ranges,
	deltapro3Cmd
};
