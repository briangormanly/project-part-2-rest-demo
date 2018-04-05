var terrain = require("./terrain")

function gameData() {
	this.groupHealth = 100;
	this.terrain = terrain.getRandomTerrain();
}

var gameData = new gameData();

exports.getGameData = function() {
	return gameData;
}