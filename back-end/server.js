import express from 'express'
import request from 'request'
import bodyParser from 'body-parser'
import apiKeys from './api-keys'
import config from './config/config'
import routes from './config/routes'

// initialize app
const app = express()
// configuration
config(app, bodyParser)
// register routes
routes(app)
// start server
app.listen(app.port, () => {
  console.log("server listening on" + app.port);
})