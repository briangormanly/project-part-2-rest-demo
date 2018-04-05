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

app.route('/api/allTerrains')
	.get(gameController.getAllTerrains);

app.route('/api/getRandomTerrain')
	.get(gameController.getRandomTerrain);

app.route('/api/gameData')
	.get(gameController.getGameData);

app.listen(1337, () => console.log('OregonTrail listening on port 1337!'));