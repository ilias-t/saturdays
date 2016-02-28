export default (app) => {
  //Root
  app.get('/', (req, res) => {
    res.send("HELLO!");
  })

  // Create a new campsite to track
  app.get('/campsites/:name', (req, res) => {
    const baseURL = "http://api.amp.active.com/camping/campgrounds/?pstate=CA&pname=" + req.params.name + "&api_key=" + apiKeys.campgroundSearch;
    request(baseURL, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        console.log("success");
      } else {
        console.log("error");
      }
    })
  })
}