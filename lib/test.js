const https = require('https');

async function getEcoFlowMqttCredits(email, password) {
	let mqttDaten = {
		UserID: '',
		User: '',
		Passwort: '',
		URL: '',
		Port: '',
		protocol: '',
		clientID: ''
	};
	const options = {
		hostname: 'api.ecoflow.com',
		path: '/auth/login',
		method: 'POST',
		headers: {
			Host: 'api.ecoflow.com',
			lang: 'de-de',
			platform: 'android',
			sysversion: '11',
			version: '4.1.2.02',
			phonemodel: 'SM-X200',
			'content-type': 'application/json',
			'user-agent': 'okhttp/3.14.9'
		}
	};
	const data = {
		appVersion: '4.1.2.02',
		email: email,
		os: 'android',
		osVersion: '30',
		password: Buffer.from(password).toString('base64'),
		scene: 'IOT_APP',
		userType: 'ECOFLOW'
	};
	function httpsRequest(options, data) {
		return new Promise((resolve, reject) => {
			const req = https.request(options, (res) => {
				let data = '';
				res.on('data', (chunk) => {
					data += chunk;
				});
				res.on('end', () => {
					resolve(data);
				});
			});
			req.on('error', (error) => {
				reject(error);
			});

			if (data) {
				req.write(JSON.stringify(data));
			}
			req.end();
		});
	}

	function uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (Math.random() * 16) | 0,
				v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}
	let token;
	let userid;
	let response;
	try {
		response = await httpsRequest(options, data);
		console.log('erster ' + response);
		token = JSON.parse(response).data.token;
		userid = JSON.parse(response).data.user.userId;
	} catch (error) {
		console.log(error); //
		throw new Error(
			'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.'
		);
	}

	options.path = `/iot-auth/app/certification?userId=${userid}`;
	options.method = 'GET';
	options.headers.authorization = `Bearer ${token}`;

	try {
		response = await httpsRequest(options);
		console.log('httpresp:' + response);
		mqttDaten.Password = JSON.parse(response).data.certificatePassword;
		mqttDaten.Port = JSON.parse(response).data.port;
		mqttDaten.UserID = userid;
		mqttDaten.User = JSON.parse(response).data.certificateAccount;
		mqttDaten.URL = JSON.parse(response).data.url;
		mqttDaten.protocol = JSON.parse(response).data.protocol;
		mqttDaten.clientID = 'ANDROID_' + uuidv4() + '_' + userid;
	} catch (error) {
		console.log(error);

		throw new Error(
			'Ein Fehler bei der Ermittlung der Zugangsdaten ist aufgetreten. Bitte prüfe die Zugangsdaten.'
		);
	}
	console.log('mqtt:' + JSON.stringify(mqttDaten));
	return mqttDaten;
}

//console.log(getEcoFlowMqttCredits('ecoflow@wysiwis.net', 'EfAkku_0815!'));
/*
const response = {
	native: {
		mqttUserId: 'login.UserID',
		mqttUserName: 'login.User',
		mqttPwd: 'login.Password',
		mqttClientId: 'login.clientID'
	}
};
const attrs = Object.keys(response.native);
for (const attr of attrs) {
	console.log(attr + '  ' + response.native[attr]);
}
attrs.forEach((attr) => console.log(attr + '  ' + response.native[attr]));
*/
const msgobj32 = {
	sysSeq: 65535,
	sysEnergyStream: [
		{
			timestamp: 1699056000,
			watthType: 1,
			watth: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 20, 0, 0, 0, 0 ]
		},
		{
			timestamp: 1699056000,
			watthType: 2,
			watth: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
		},
		{
			timestamp: 1699056000,
			watthType: 3,
			watth: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 183, 191, 52, 18, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
		},
		{
			timestamp: 1699056000,
			watthType: 4,
			watth: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 21, 0, 0, 0, 0 ]
		},
		{
			timestamp: 1699056000,
			watthType: 7,
			watth: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 83, 44, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
		},
		{
			timestamp: 1699056000,
			watthType: 8,
			watth: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 107, 153, 51, 22, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
		}
	]
};

function energy(msgobj32) {
	let energyobj = {
		watth1: 0,
		watth2: 0,
		watth3: 0,
		watth4: 0,
		watth5: 0,
		watth6: 0,
		watth7: 0,
		watth8: 0
	};
	for (let i = 0; i < msgobj32.sysEnergyStream.length; i++) {
		const watthType = msgobj32.sysEnergyStream[i].watthType;
		const energy = msgobj32.sysEnergyStream[i].watth.reduce((a, b) => a + b, 0);
		const string = String('watth' + watthType);
		console.log(string, energy);
		energyobj['watth' + watthType] = energy;
	}
	return { energy2: energyobj };
}
console.log(energy(msgobj32));
