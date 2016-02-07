"use strict"

import React from 'react'
import ReactDOM from 'react-dom'

class CampSiteSearch extends React.Component {
  render() {
    return (
      <form id="camp-site-search" onSubmit={this.submit}>
        <input type="text" placeholder=""></input>
        <input type="submit"></input>
      </form>
    )
  }

  submit(e) { //form submit event
    e.preventDefault() //prevent form submission
    var request = new XMLHttpRequest()
    request.onreadystatechange = () => { //event listener to track request's state
      if (request.readyState === 4) { //request state is set to complete
        console.log(request.responseText)
      }
    }
    request.open("GET", "http://localhost:8000") //initialize request
    request.send(null) //send request
  }
}

ReactDOM.render(<CampSiteSearch/>, document.getElementById("root"))