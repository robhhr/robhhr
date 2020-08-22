import React from 'react'
import {Link} from 'gatsby'
import Logo from '../assets/blue-logo.svg'

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <img src={Logo} alt="home" />
      </Link>
      <p>navbar</p>
    </div>
  )
}

export default NavBar
