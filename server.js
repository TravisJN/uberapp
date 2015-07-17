// Express server
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
var port = process.env.PORT || 3333;

app.use('/', express.static(__dirname + '/client'));

app.use(bodyParser.json());

var parameters = {
  'server_token': 'INSERT_SERVER_TOKEN_HERE',
  'latitude': 37.775818,
  'longitude': -122.418028
};

app.get('/uberData', function(req, response) {
  console.log('uberData');
  request({
    url: 'https://sandbox-api.uber.com/v1/products',
    method: 'GET',
    qs: {
      server_token: 'wsHKtggSl-GeCLrC5f7vfStaRdEOZh-qEui6Mxuo',
      latitude: 37.775818,
      longitude: -122.418028
    },
    headers: {
      'Content-Type': 'application/JSON',
    }
  }, function(error, res, body) {
    console.log('body:', body);
    console.log('error:', error);
    response.send(JSON.parse(body));
  });
})

app.listen(port, function() { console.log('listening on port ' + port + '...')});
