"use strict"

//Dependencies
import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from "./routes"
//Render multi-page application
render(<Router routes={routes} />, document.getElementById("app"))