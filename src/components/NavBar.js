import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/profile.svg'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.profileBackground};
  border-radius: 50%;
  padding: 10px;
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
