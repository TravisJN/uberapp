// Express server
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3333;

app.use('/', express.static(__dirname + '/client'));

app.use(bodyParser.json());

app.listen(port, function() { console.log('listening on port ' + port + '...')});
