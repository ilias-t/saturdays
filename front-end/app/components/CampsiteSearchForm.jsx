import React from 'react'

export default class CampSiteSearch extends React.Component {
  render() {
    return (
      <form id="camp-site-search" onSubmit={this.submit}>
        <input type="text" name="campsite" placeholder=""></input>
        <input type="submit"></input>
      </form>
    )
  }

  submit(e) { //form submit event
    e.preventDefault() //prevent form submission
    window.blah = request;
    //TODO: refactor this.
    var request = new XMLHttpRequest()
    request.onreadystatechange = () => { //event listener to track request's state
      if (request.readyState === 4) { //request state is set to complete
        console.log(request.responseText)
      }
    }
    request.open("POST", "http://localhost:8000/campsites") //initialize request
    request.send(null) //send request
  }
}