import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to="/search">Track Campsites</Link></li>
        <li><Link to="/calendar">Book an Upcoming Trip</Link></li>
      </ul>
    )
  }
}