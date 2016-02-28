import express from 'express'
import request from 'request'
import apiKeys from './api-keys'
import config from './config/config'
import routes from './config/routes'

// initialize app
const app = express()
// configuration
config(app)
// register routes
routes(app)
// start server
app.listen(app.port, () => {
  console.log("server listening on" + app.port);
})


//notes: xml2json
//https://github.com/Leonidas-from-XIV/node-xml2js