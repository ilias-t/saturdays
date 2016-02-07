"use strict"

//Dependencies
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createHistory, useBasename } from 'history'
//Components
import App from './components/App'
import Search from './components/CampsiteSearchForm'
import Calendar from './components/Calendar'
import NotFound from './components/404'

//Use HTML5 history API
const history = useBasename(createHistory)({
  basename: '/'
});

//Render multi-page, client-side routed application
render(
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
)