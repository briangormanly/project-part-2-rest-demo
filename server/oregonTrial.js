const express = require('express');
const app = express();

// required to parse the body of a request (post)  <-- 
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));


app.use(express.static('client/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views' })
})

app.get('/mainmenu', function (req, res) {
  res.sendFile('mainmenu.html', {root: './client/views' })
})

app.get('/class', function (req, res) {
  res.sendFile('class-demo.html', {root: './client/views' })
})

app.get('/demo', function (req, res) {
  res.sendFile('index-demo.html', {root: './client/views' })
})

// include the controller
var topTenController = require('./controllers/topTenController');
var gameController = require('./controllers/gameController');

// RESTful route for topTen
app.route('/api/topTen')
	.get(topTenController.getTopScores)
	.post(topTenController.saveTopScore);

app.route('/api/getRandomTerrain')
	.get(gameController.getRandomTerrain);

app.route('/api/getAllTerrains')
	.get(gameController.getAllTerrains);	

app.route('/api/gameData')
	.get(gameController.getGameData);

app.route('/api/updateGame')
	.get(gameController.updateGame);

app.route('/api/pace')
	.get(gameController.getPace)
	.post(gameController.setPace);

app.route('/api/getAllPaces')
	.get(gameController.getAllPaces);

/*
app.route('/api/setup/screen/:id')
	.get(setupController.getgameScreen);


app.route('/api/setup/profession')
	.post(setupController.saveProfession);
*/

app.listen(1337, () => console.log('OregonTrail listening on port 1337!'));