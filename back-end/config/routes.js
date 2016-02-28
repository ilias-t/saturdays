export default (app) => {
  //Root
  app.get('/', (req, res) => {
    res.send("Root route");
  })

  //Track a new campsite
  app.post('/campsites', (req, res) => {
    console.log("just posted", req.body);
  });

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