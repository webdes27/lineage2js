var CryptInit = require("./CryptInit.js");
var CharacterSelectInfo = require("./CharacterSelectInfo.js");
var CharacterTemplates = require("./CharacterTemplates.js");
var AuthLoginFail = require("./AuthLoginFail.js");
var CharacterCreateSuccess = require("./CharacterCreateSuccess.js");
var CharacterCreateFail = require("./CharacterCreateFail.js");
var CharacterSelected = require("./CharacterSelected.js");
var QuestList = require("./QuestList.js");
var UserInfo = require("./UserInfo.js");
var MoveToLocation = require("./MoveToLocation.js");
var LogoutOK = require("./LogoutOK.js");
var NpcInfo = require("./NpcInfo.js");
var SunRise = require("./SunRise.js");
var SunSet = require("./SunSet.js");

module.exports = {
	CryptInit: CryptInit,
	CharacterSelectInfo: CharacterSelectInfo,
	CharacterTemplates: CharacterTemplates,
	AuthLoginFail: AuthLoginFail,
	CharacterCreateSuccess: CharacterCreateSuccess,
	CharacterCreateFail: CharacterCreateFail,
	CharacterSelected: CharacterSelected,
	QuestList: QuestList,
	UserInfo: UserInfo,
	MoveToLocation: MoveToLocation,
	LogoutOK: LogoutOK,
	NpcInfo: NpcInfo,
	SunRise: SunRise,
	SunSet: SunSet
}