module.exports = function routes(app) {
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
}