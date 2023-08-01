import React from 'react'
import '../MyCSSForComponents/NavBarCSS.css'
const Navbar = () => {
  return (
    <div className = "Nav">
      <a href="#" className = "siteName">On The Fly</a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar