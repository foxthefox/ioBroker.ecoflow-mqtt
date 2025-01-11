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

const protoMsg = {
	cmdId: {
		22: { cmdFunc: { 254: 'cmdFunc254_cmdId22_Report' } },
		18: { cmdFunc: { 254: 'setReply_dp3' } },
		17: { cmdFunc: { 254: 'set_dp3' } }
	}
};

const protoSource = `
syntax = "proto3";

message cmdFunc254_cmdId22_Report {
	optional int32 unknown21 = 21;
	optional int32 unknown24 = 24;
    optional float unknown26 = 26;
    optional float unknown27 = 27;
    optional float unknown28 = 28;
    optional float unknown29 = 29;
    optional float unknown41 = 41;
    optional float unknown44 = 44;
    optional float unknown59 = 59;
    optional int32 unknown60 = 60;
    optional int32 unknown66 = 66;
    optional float unknown67 = 67;
    optional float voltage68 = 68; //voltage 119V
    optional float current69 = 69; //current?
    optional float voltage149 = 149; //voltage 24V?
    optional float current150 = 150; //current?
    optional float voltage151 = 151; //voltage 119V output ?
    optional float unknown167 = 167;
    optional float unknown168 = 168;
    optional float unknown169 = 169; //power ?
    optional int32 unknown172 = 172;
	optional int32 unknown173 = 173;
    optional int32 unknown174 = 174;
	optional int32 unknown175 = 175;
    optional int32 unknown176 = 176; //status?
	optional int32 unknown177 = 177; //status?
    optional int32 unknown178 = 178; //status?
	optional int32 unknown179 = 179; //status?
    optional float unknown196 = 196;
    optional float voltage197 = 197; //voltage 119V
    optional float unknown198 = 198;
    optional float unknown199 = 199;
    optional float unknown201 = 201;
    optional int32 unknown220 = 220; //
    optional float unknown221 = 221;
    optional float unknown222 = 222;
    optional float unknown223 = 223;
    optional float unknown224 = 224;
    optional float unknown225 = 225;
    optional int32 unknown231 = 231; //
    optional float unknown239 = 239;
    optional float unknown240 = 240;
    optional int32 unknown241 = 241; //
    optional float voltage244 = 244; //voltage battery 52V or inv/pd/ems
    optional float unknown245 = 245; //current -0,32A
    optional int32 unknown246 = 246; //
    optional int32 unknown247 = 247; // full capacity 80000mAh
    optional int32 unknown249 = 249; // remaining capacity 26400mAh ?
    optional int32 unknown250 = 250; // 
    optional int32 unknown251 = 251; // 
    optional int32 unknown252 = 252; // 
    optional int32 unknown253 = 253; // 
    optional int32 unknown256 = 256; // min vol batt 3309 -> 3,309V
    optional int32 unknown257 = 257; // max vol batt 3313 -> 3,313V
    optional float voltage264 = 264; // voltage battery 52V or inv/pd/ems
    optional float unknown265 = 265; // current -0,36A
    optional float voltage266 = 266; // voltage battery 54V or inv/pd/ems
    optional float unknown267 = 267; // 60% oilstart?
    optional int32 unknown276 = 276; //
    optional int32 unknown277 = 277; //
    optional int32 unknown278 = 278; //
    optional int32 unknown279 = 279; //
    optional int32 unknown280 = 280; //
    optional int32 unknown291 = 291; //
    optional int32 unknown292 = 292; //
    optional int32 unknown293 = 293; // 120000
    optional int32 unknown294 = 294; // 2000
    optional int32 unknown295 = 295; // 300000
    optional int32 unknown296 = 296; // 60000
    optional float voltage318 = 318; // voltage battery 56V or inv/pd/ems
    optional float unknown337 = 337; // 80% charge max?
    optional float unknown338 = 338; // 
    optional float unknown339 = 339; // 
    optional float unknown340 = 340; // current?
    optional float voltage341 = 341; // voltage 52,4V
    optional float unknown342 = 342; // current
    optional int32 unknown343 = 343; //
    optional int32 unknown344 = 344; //
    optional int32 unknown345 = 345; //
    optional int32 unknown346 = 346; //
    optional int32 unknown347 = 347; //
    optional int32 unknown348 = 348; //
    optional int32 unknown349 = 349; //
    optional int32 unknown350 = 350; //
    optional int32 unknown351 = 351; //
    optional float unknown352 = 352; // 
    optional float unknown353 = 353; // 
    optional float unknown354 = 354; // 
    optional float unknown369 = 369; // power mppt? 440W
    optional int32 unknown370 = 370; //
    optional int32 unknown371 = 371; //
    optional int32 unknown372 = 372; //
    optional int32 unknown373 = 373; //
    optional int32 unknown374 = 374; //
    optional int32 unknown375 = 375; //
    optional float unknown376 = 376; // %
    optional float unknown377 = 377; // 57,25V mppt
    optional float unknown378 = 378; // power mppt
    optional float unknown382 = 382; //
    optional float unknown383 = 383; //
    optional float unknown384 = 384; //
    optional float unknown385 = 385; //    
    optional float unknown386 = 386; //  
    optional float unknown387 = 387; //  
    optional float unknown388 = 388; //
    optional float unknown389 = 389; //    
    optional float unknown390 = 390; //  
    optional float unknown391 = 391; //  
}

message set_dp3 {
	optional int32 beepCmd = 9;
	optional int32 unknwon13 = 13; //60 30
    optional int32 switchACoutHvCmd = 15;
    optional int32 switchACoutLvCmd = 16;
    optional int32 switch12VdcCmd = 18;
    optional int32 switchXboostCmd = 25;
    optional int32 levelChargeLimitCmd = 33;
    optional int32 levelDisChargeLimitCmd = 34;
    optional int32 level12VchargeCmd = 52;
    optional int32 level48VchargeCmd = 53;
    optional int32 levelACchargeSpeedCmd = 54;
    optional int32 levelACpowerInOutCmd = 56;
	optional int32 highChargeLimit = 59;
    optional int32 switchGFCIRCDCmd = 61;
	optional int32 lowDischargeLimitCmd =102;
}

message setReply_dp3 {
    optional int32 cmdId = 1;
    optional int32 ack = 2;
    optional int32 switchACoutHvStatus = 15;
    optional int32 switchACoutLvStatus = 16;
    optional int32 switch12VdcStatus = 18;
    optional int32 switchXboostStatus = 25;
    optional int32 levelChargeLimitStatus = 33;
    optional int32 levelDisChargeLimitStatus = 34;
    optional int32 level12VchargeStatus = 52; //seen as 0 instead 7
    optional int32 level48VchargeStatus = 53; //seen as 0 instead 17
    optional int32 levelACchargeSpeedStatus = 54;
    optional int32 levelACpowerInOutStatus = 56;
    optional int32 switchGFCIRCDStatus = 61;
}

`;

module.exports = {
	deltapro3States,
	deltapro3StatesDict,
	deltapro3Ranges,
	deltapro3Cmd,
	protoMsg,
	protoSource
};
