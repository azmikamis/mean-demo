var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var app        = express();
var mongoose   = require('mongoose');
var meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/views/index.html'));
});

app.use('/js', express.static(path.join(__dirname, '/client/js')));

app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3000, function () {
    console.log('I\'m listening...');
});
