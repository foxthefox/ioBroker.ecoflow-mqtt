const deviceStates = {
    action: {
        switch: {
            latestQuotas: {
                entity_type: 'switch',
                device_class: 'switch',
                role: 'switch',
                name: 'Get latest Quotas',
                payload_off: 'no trigger',
                payload_on: 'trigger',
                latestQuotas: { 0: 'no trigger', 1: 'trigger' },
            },
        },
    },
    info: {
        number: {
            msgCount: {
                min: 0,
                unit_of_measurement: '',
                mult: 1,
                entity_type: 'sensor',
                name: 'received MSG#',
                role: 'value',
            },
        },
        diagnostic: {
            status: {
                entity_type: 'text',
                entity_category: 'diagnostic',
                name: 'Cloud Connection Status',
                role: 'info',
                status: { '-2': 'offline', 0: 'offline', 1: 'online' },
            },
        },
    },
};

const deviceStatesDict = {
    unknownjson: {
        action: {
            latestQuotas: { entity: 'switch' },
        },
        info: {
            msgCount: { entity: 'number' },
            status: { entity: 'diagnostic' },
        },
    },
};

const deviceCmd = {
    unknownjson: {
        action: {
            latestQuotas: {
                valName: '',
                operateType: 'latestQuotas',
                params: {},
            },
        },
    },
};

module.exports = {
    deviceStates,
    deviceStatesDict,
    deviceCmd,
};
