function terrain(name, imageUrl) {
	this.name = name;
	this.imageUrl = imageUrl;
}

var terrains = [];
terrains.push(new terrain("Mountain", "/images/mountain.jpg"));
terrains.push(new terrain("Valley", "/images/valley.jpg"));
terrains.push(new terrain("Plains", "/images/plains.jpg"));

exports.getAllTerrains = function() {
	return terrains;
}

exports.getRandomTerrain = function() {
	var rand = Math.floor(Math.random() * terrains.length);
	return terrains[rand];
}