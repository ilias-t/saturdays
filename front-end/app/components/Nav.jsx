import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render () {
    return (
      <div>
        <h3>Nav!</h3>
        <ul>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </div>
    )
  }
}