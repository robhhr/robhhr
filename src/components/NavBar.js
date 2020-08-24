import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/profile.svg'
import {Moon} from '../assets/moon'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.profileBackground};
  border-radius: 50%;
  padding: 10px;
`

const MoonContainer = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`

const NavBar = ({onClick}) => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={Logo} alt="home" />
      </Link>
      <MoonContainer onClick={onClick}>
        <Moon />
      </MoonContainer>
    </StyledNav>
  )
}

export default NavBar
