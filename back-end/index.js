var app = require('express')();
var apiKeys = require('./api-keys');

console.log(apiKeys);

app.get('/campsites/:id', function(req, res) {
  res.send("campsite" + id);
})