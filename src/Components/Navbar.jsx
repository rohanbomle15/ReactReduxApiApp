import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <li className="nav-links">
        <Link to="/">Breweries</Link>
        <Link to="/bars">Restro & Bar</Link>
      </li>
    </div>
  )
}

export default Navbar
