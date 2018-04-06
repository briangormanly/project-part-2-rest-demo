function terrain(name, imageUrl) {
	this.name = name;
	this.imageUrl = imageUrl;
}

var terrains = [];
terrains.push(new terrain("Valley", "/images/valley.jpg"));
terrains.push(new terrain("Mountain", "/images/mountain.jpg"));
terrains.push(new terrain("Forest", "/images/forest.png"));

exports.getRandomTerrain = function() {
	console.log("-");
	var rand = Math.floor(Math.random() * terrains.length);
	console.log(rand);
	return terrains[rand];
}

exports.getAllTerrains = function() {
	return terrains;
}