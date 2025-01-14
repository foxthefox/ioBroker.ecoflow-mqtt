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
		50: { cmdFunc: { 32: 'cmdFunc50_cmdId30_Report' } },
		23: { cmdFunc: { 254: 'cmdFunc254_cmdId23_Report' } },
		22: { cmdFunc: { 254: 'cmdFunc254_cmdId22_Report' } },
		21: { cmdFunc: { 254: 'cmdFunc254_cmdId21_Report' } },
		// 20: {},
		// 19: {},
		18: { cmdFunc: { 254: 'setReply_dp3' } },
		17: { cmdFunc: { 254: 'set_dp3' } },
		2: { cmdFunc: { 32: 'cmdFunc32_cmdId2_Report' } }
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

message cmdFunc50_cmdId30_Report {
    optional int32 unknown1 = 1;
    optional int32 unknown2 = 2;
    optional int32 unknown3 = 3;
    optional int32 unknown4 = 4;
    optional int32 unknown5 = 5;
    optional int32 unknown6 = 6;
    optional int32 unknown7 = 7;
    optional int32 unknown8 = 8;
    optional int32 unknown9 = 9;
    optional int32 unknown10 = 10;
    optional int32 unknown11 = 11;
    optional int32 remainCap12 = 12;
    optional int32 unknown13 = 13;
    optional int32 unknown14 = 14;
    optional int32 unknown15 = 15;
    optional int32 maxCellVol16 = 16;
    optional int32 minCellVol17 = 17;
    optional int32 maxCellTemp18 = 18;
    optional int32 minCellTemp19 = 19;
    optional int32 maxMosTemp20 = 20;
    optional int32 minMosTemp21 = 21;
    optional int32 unknown22 = 22;
    optional int32 unknown23 = 23;
    optional int32 unknown24 = 24;
    optional float unknown25 = 25;
    optional int32 unknown26 = 26;
    optional int32 unknown27 = 27;
    optional int32 unknown28 = 28;
    optional int32 unknown29 = 29;
    optional int32 unknown30 = 30;
    optional int32 unknown31 = 31;
    optional int32 unknown32 = 32;
    repeated int32  cellVol33 = 33;
    optional int32 unknown34 = 34;
    repeated int32 cellTemp35 = 35;
    optional string version36 = 36;
    optional int32 bmsHeartVer37 = 37;
    optional int32 ecloudOcv38 = 38;
    optional string deveiceSn39 = 39;
    optional int32 unknown40 = 40;
    optional int32 unknown41 = 41;
    optional float unknown42 = 42;
    optional float unknown43 = 43;
    optional float unknown44 = 44;
    optional int32 unknown45 = 45;
    optional int32 unknown46 = 46;
    optional int32 unknown47 = 47;
    optional int32 unknown48 = 48;
    optional int32 unknown49 = 49;
    optional int32 unknown50 = 50;
    optional int32 unknown51 = 51;
    optional float unknown52 = 52;
    optional float unknown53 = 53;
    optional float soh54 = 54;
    optional int32 unknown55 = 55;
    repeated int32 mosTemp56 = 56;
    optional int32 unknown57 = 57;
    repeated int32 unknown58 = 58;
    optional int32 unknown61 = 61;
    repeated int32 unknown62 = 62;
    optional int32 unknown63 = 63;
    optional int32 unknown64 = 64;
    optional int32 unknown67 = 67;
    optional int32 unknown68 = 68;
    optional int32 unknown69 = 69;
    repeated int32 error70 = 70;
    optional int32 unknown71 = 71;
    repeated int32 batVolt72 = 72;
    optional int32 unknown73 = 73;
    optional int32 unknown74 = 74;
    optional int32 unknown75 = 75;
    optional int32 unknown76 = 76;
    optional int32 unknown77 = 77;
    optional int32 unknown78 = 78;
    optional int32 unknown79 = 79;
    optional int32 unknown80 = 80;
    optional string packSn81 = 81;
    optional int32 unknown82 = 82;
}

message cmdFunc254_cmdId21_Report {
    optional int32 unknown1 = 1;
    optional float unknown3 = 3;
    optional float unknown4 = 4;
    optional int32 unknown5 = 5;
    optional int32 unknown6 = 6;
    optional int32 unknown7 = 7;
    optional int32 unknown8 = 8;
    optional float unknown9 = 9;
    optional float unknown10 = 10;
    optional float unknown11 = 11;
    optional float unknown12 = 12;
    optional int32 unknown13 = 13;
    optional int32 unknown14 = 14;
    optional int32 unknown15 = 15;
    optional int32 unknown16 = 16;
    optional int32 unknown17 = 17;
    optional int32 unknown18 = 18;
    optional int32 unknown19 = 19;
    optional int32 unknown20 = 20;
    optional int32 unknown23 = 23;
    optional int32 unknown25 = 25;
    optional int32 unknown31 = 31;
    optional int32 unknown32 = 32;
    optional int32 unknown33 = 33;
    optional int32 unknown34 = 34;
    optional float unknown35 = 35;
    optional float unknown36 = 36;
    optional float unknown37 = 37;
    optional float unknown38 = 38;
    optional int32 unknown39 = 39;
    optional int32 unknown40 = 40;
    optional int32 unknown42 = 42;
    optional int32 unknown45 = 45;
    optional int32 unknown46 = 46;
    optional int32 unknown47 = 47;
    optional int32 unknown48 = 48;
    optional int32 unknown49 = 49;
    optional int32 unknown50 = 50;
    optional int32 unknown51 = 51;
    optional float unknown52 = 52;
    optional float unknown53 = 53;
    optional float unknown54 = 54;
    optional float unknown55 = 55;
    optional float unknown56 = 56;
    optional float unknown57 = 57;
    optional float unknown58 = 58;
    optional bytes unknown126 = 126;
    optional int32 unknown133 = 133;
    optional string unknown134 = 134;
    optional int32 unknown135 = 135;
    optional int32 unknown147 = 147;
    optional int32 unknown152 = 152;
    optional int32 unknown153 = 153;
    optional int32 unknown154 = 154;
    optional int32 unknown155 = 155;
    optional int32 unknown156 = 156;
    optional int32 unknown157 = 157;
    optional float unknown158 = 158;
    optional float unknown159 = 159;
    optional float unknown160 = 160;
    optional int32 unknown171 = 171;
    optional int32 unknown181 = 181;
    optional int32 unknown182 = 182;
    optional int32 unknown195 = 195;
    optional int32 unknown200 = 200;
    optional int32 unknown211 = 211;
    optional int32 unknown212 = 212;
    optional int32 unknown227 = 227;
    optional int32 unknown233 = 233;
    optional int32 unknown236 = 236;
    optional float unknown242 = 242;
    optional float unknown243 = 243;
    optional int32 unknown248 = 248;
    optional int32 unknown254 = 254;
    optional int32 unknown255 = 255;
    optional int32 unknown258 = 258;
    optional int32 unknown259 = 259;
    optional int32 unknown260 = 260;
    optional int32 unknown261 = 261;
    optional float unknown262 = 262;
    optional float unknown263 = 263;
    optional int32 unknown268 = 268;
    optional int32 unknown269 = 269;
    optional int32 unknown270 = 270;
    optional int32 unknown271 = 271;
    optional int32 unknown272 = 272;
    optional int32 unknown273 = 273;
    optional int32 unknown274 = 274;
    optional int32 unknown275 = 275;
    optional int32 unknown281 = 281;
    optional int32 unknown282 = 282;
    optional int32 unknown283 = 283;
    optional int32 unknown284 = 284;
    optional int32 unknown285 = 285;
    optional int32 unknown286 = 286;
    optional int32 unknown290 = 290;
    optional int32 unknown451 = 451;
    optional int32 unknown452 = 452;
    optional int32 unknown453 = 453;
    optional int32 unknown454 = 454;
    optional int32 unknown455 = 455;
    optional int32 unknown456 = 456;
}
//ems
message struct32_2_1 {
    optional int32 unknown1 = 1;
    optional int32 unknown2 = 2;
    optional int32 unknown3 = 3;
    optional int32 volt4 = 4;
    optional int32 unknown5 = 5;
    optional int32 unknown6 = 6;
    optional int32 maxChargeSoc7 = 7;
    optional int32 unknown8 = 8;
    optional int32 unknown9 = 9;
    optional int32 unknown10 = 10;
    optional int32 unknown11 = 11;
    optional int32 unknown12 = 12;
    optional int32 unknown13 = 13;
    optional int32 unknown14 = 14;
    optional float soc15 = 15;
    repeated int32 bmsIsConnt16 = 16;
    optional int32 unknown17 = 17;
    optional int32 unknown18 = 18;
    optional int32 unknown19 = 19;
    optional int32 unknown20 = 20;
    optional int32 unknown21 = 21;
    optional int32 unknown22 = 22;
    optional int32 unknown23 = 23;
}

message struct32_2_2 {
    optional int32 unknown1 = 1;
    optional int32 unknown2 = 2;
    optional int32 unknown3 = 3;
    optional int32 unknown4 = 4;
    optional int32 unknown5 = 5;
}

message cmdFunc32_cmdId2_Report {
    optional struct32_2_1 msg32_2_1 = 1;
    optional struct32_2_2 msg32_2_2 = 2;
}

message cmdFunc254_cmdId23_Report {
    optional int32 timestamp1 = 1;
    optional float unknown2 = 2;
    optional int32 unknown5 = 5;
}

message set_dp3 {
    optional int32 shutdown = 3;
	optional int32 beepCmd = 9;
    optional int32 acTimeOut = 10;
    optional int32 dcTimeOut = 11;
    optional int32 screenTimeOut = 12;
	optional int32 deviceTimeOut = 13; 
    optional int32 screenBrightness = 13; 
    optional int32 switchACoutHvCmd = 15;
    optional int32 switchACoutLvCmd = 16;
    optional int32 switch12VdcCmd = 18;
    optional int32 switchXboostCmd = 25;
    optional int32 levelChargeLimitCmd = 33;
    optional int32 levelDisChargeLimitCmd = 34;
    optional int32 levelPVcurrentLVCmd = 52;
    optional int32 levelPVcurrentHVCmd = 53;
    optional int32 levelACchargePowerCmd = 54;
    optional int32 levelACpowerInOutCmd = 56;
    optional int32 generatorStartStopCmd = 58;
	optional int32 highChargeGeneratorStopLimit = 59;
    optional int32 lowDischargeGeneratorStartLimit = 59;
    optional int32 switchGFCIRCDCmd = 61;
    optional int32 acEnergySavingOpen = 99;
    optional int32 multiBpChgDsgMode = 100;
	optional int32 lowDischargeLimitCmd =102; //not EF-API
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

const officialapi = {
	beeper: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgBeepEn: true
		}
	},
	actimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgAcStandbyTime: 120
		}
	},
	dctimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgDcStandbyTime: 120
		}
	},
	screentimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgScreenOffTime: 30
		}
	},
	devicetimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgDevStandbyTime: 30
		}
	},
	screenbrightness: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgLcdLight: 30
		}
	},
	highvoltacout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgHvAcOutOpen: true
		}
	},
	lowvoltacout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgLvAcOutOpen: true
		}
	},
	frequency: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgAcOutFreq: 50
		}
	},
	car12voutput: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgDc12vOutOpen: true
		}
	},
	xboost: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgXboostEn: true
		}
	},
	shutdown: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPowerOff: true
		}
	},
	chargelimit: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgMaxChgSoc: 70
		}
	},
	dischargelimit: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgMinDsgSoc: 30
		}
	},
	backupreservelevel: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgEnergyBackup: {
				energyBackupStartSoc: 40,
				energyBackupEn: true
			}
		}
	},
	maxinputcurrentPVlowVolt: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfoPvLDcAmpMax: 7
		}
	},
	maxinputcurrentPVhighVolt: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfoPvHDcAmpMax: 12
		}
	},
	maxACcharge: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfoAcInChgPowMax: 3000
		}
	},
	maxChargePowerPort: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgPlugInInfo5p8ChgPowMax: 1800
		}
	},
	generatorAutoStart: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgCmsOilSelfStart: true
		}
	},
	socStartGenerator: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgCmsOilOnSoc: 36
		}
	},
	socStopGenerator: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgCmsOilOffSoc: 67
		}
	},
	gfciswitch: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgLlcGFCIFlag: true
		}
	},
	bluetoothtimeout: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgBleStandbyTime: 200
		}
	},
	acenergysavingmode: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgAcEnergySavingOpen: true
		}
	},
	batterychargingmode: {
		sn: 'MR51ZAS2PG330026',
		cmdId: 17,
		dirDest: 1,
		dirSrc: 1,
		cmdFunc: 254,
		dest: 2,
		needAck: true,
		params: {
			cfgMultiBpChgDsgMode: 1
		}
	}
};

module.exports = {
	deltapro3States,
	deltapro3StatesDict,
	deltapro3Ranges,
	deltapro3Cmd,
	protoMsg,
	protoSource
};
