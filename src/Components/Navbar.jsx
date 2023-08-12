import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="nav-links classes.navlinks">
        <li><NavLink exact activeClassName="active" to="/">Breweries</NavLink></li>
        <li><NavLink activeClassName="active" to="/bars">Restro & Bar</NavLink></li>
        <li><NavLink activeClassName="active" to="/contactus">Contact Us</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
