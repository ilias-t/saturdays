"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class CampSiteSearch extends React.Component {
  render() {
    return (
      <form id="camp-site-search" onSubmit={this.submit}>
        <input type="text" placeholder=""></input>
        <input type="submit"></input>
      </form>
    )
  }

  submit(e) {
    e.preventDefault();
    console.log("submit")
  }
}

ReactDOM.render(<CampSiteSearch/>, document.getElementById("root"));