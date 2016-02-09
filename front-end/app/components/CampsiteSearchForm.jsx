import React from 'react'
import req from '../utilities/httpRequestHelper'

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
    //refactor req method
    req("GET", "localhost:8000", (data) => {
      console.log(data)
    })
  }
}