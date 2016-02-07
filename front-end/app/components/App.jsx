import React from 'react'
import Nav from './Nav'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Saturdays</h1>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}