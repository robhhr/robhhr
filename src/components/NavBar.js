import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/blue-logo.svg'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
`

const NavBar = () => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={Logo} alt="home" />
      </Link>
    </StyledNav>
  )
}

export default NavBar
