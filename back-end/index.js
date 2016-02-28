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

// routes
require('./config/routes')(app);

//Start server
app.listen(port, function() {
  console.log("server listening on" + port);
});


//xml2json
//https://github.com/Leonidas-from-XIV/node-xml2js