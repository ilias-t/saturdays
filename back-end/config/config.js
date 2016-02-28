export default (app) => {
  app.port = process.env.PORT || 8000
  app.use((req, res, next) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //whitelist port 8080
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })
}