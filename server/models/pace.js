/**
 * Pace
 */
function pace(name, miles, healthChange) {
	this.name = name;
	this.miles = miles;
	this.healthChange = healthChange;
}

var allPaces = [];
allPaces.push(new pace("Steady", 20, 0));
allPaces.push(new pace("Strenuous", 25, -3));
allPaces.push(new pace("Grueling", 30, -8));
allPaces.push(new pace("Resting", 0, 5));

exports.getAllPaces = function() {
	return(allPaces);
}