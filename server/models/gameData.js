var terrain = require("./terrain");
var pace = require("./pace");

function gameData() {
	this.groupHealth = 100;
	this.terrain = terrain.getRandomTerrain();
	this.playerNames = ["Bob", "Sally", "Brian"];
	this.currentPace = pace.getAllPaces()[0];
}

exports.getGameData = function() {
	return new gameData();
}