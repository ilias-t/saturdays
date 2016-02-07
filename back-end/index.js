var app = require('express')();
var request = require('request');
var apiKeys = require('./api-keys');

//App settings
var port = process.env.PORT || 8080;
app.use(function(req, res, next) {
  //CORS
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //whitelist port 8080
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Root
app.get('/', function(req, res) {
  res.send("HELLO!");
});

// Create a new campsite to track
app.get('/campsites/:name', function(req, res) {
  var baseURL = "http://api.amp.active.com/camping/campgrounds/?pstate=CA&pname=" + req.params.name + "&api_key=" + apiKeys.campgroundSearch;
  request(baseURL, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      console.log("success");
    } else {
      console.log("error");
    }
  });
});

//Start server
app.listen(port, function() {
  console.log("server listening on" + port);
});


//xml2json
//https://github.com/Leonidas-from-XIV/node-xml2js