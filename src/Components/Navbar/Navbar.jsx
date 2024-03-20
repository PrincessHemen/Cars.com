import React from 'react'
import './Navbar.css'    

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">L - U - X - U - R - Y</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>Menu</li> 
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}
