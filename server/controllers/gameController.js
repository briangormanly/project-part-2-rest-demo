var terrain = require('../models/terrain');
var gameData = require('../models/gameData');

var localGameData = gameData.getGameData();

exports.getRandomTerrain = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(terrain.getRandomTerrain())
}

exports.getAllTerrains = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(terrain.getAllTerrains())
}

exports.getGameData = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}

exports.updateGame = function(req, res) {

	localGameData.terrain = terrain.getRandomTerrain();
	localGameData.groupHealth -= 3;


	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}