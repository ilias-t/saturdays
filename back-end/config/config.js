export default (app) => {
  app.port = process.env.PORT || 8080
  app.use((req, res, next) => {
    //CORS
    res.header("Access-Control-Allow-Origin", "http://localhost:8080") //whitelist port 8080
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
}