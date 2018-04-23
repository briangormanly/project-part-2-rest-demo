var terrain = require('../models/terrain');
var gameData = require('../models/gameData');
var pace = require('../models/pace');

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

exports.getPace = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData.currentPace);
}

exports.getAllPaces = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(pace.getAllPaces());
}

exports.setPace = function(req, res) {
	console.log("change pace, id sent: " + req.body.pace);
	localGameData.currentPace = pace.getAllPaces()[req.body.pace];
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);	
}
