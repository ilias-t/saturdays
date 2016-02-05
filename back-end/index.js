var server = require('express')();
var request = require('request');
var apiKeys = require('./api-keys');

server.get('/', function(req, res) {
  res.send("HELLO!")
})

// Create a new campsite to track
server.get('/campsites/:name', function(req, res) {
  var baseURL = "http://api.amp.active.com/camping/campgrounds/?pstate=CA&pname=" + req.params.name + "&api_key=" + apiKeys.campgroundSearch;
  request(baseURL, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      console.log("success");
    } else {
      console.log("error");
    }
  });
});

server.listen(8000, function() {
  console.log("server listening on 8000");
});


//xml2json
//https://github.com/Leonidas-from-XIV/node-xml2js