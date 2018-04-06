var terrain = require("./terrain");

function gameData() {
	this.groupHealth = 100;
	this.terrain = terrain.getRandomTerrain();
	this.playerNames = ["Bob", "Sally", "Brian"];
}

exports.getGameData = function() {
	return new gameData();
}