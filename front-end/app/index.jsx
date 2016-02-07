"use strict"

//React imports
import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'

//Component imports
import App from './components/App'
import CampSiteSearch from './components/CampsiteSearchForm'
import Home from './components/Home'
import routes from "./routes"

render(<Router routes={routes} />, document.getElementById("app"))