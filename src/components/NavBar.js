import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/profile.svg'
import {Moon} from '../assets/moon'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`

const StyledLogo = styled.img`
  width: 35px;
  height: 35px;
  background-color: ${props => props.theme.profileBackground};
  border-radius: 50%;
`

const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 0 10px;
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
      <StyledLink to="/">
        <StyledLogo src={Logo} alt="home" />
        <Title>robhhr</Title>
      </StyledLink>
      <MoonContainer onClick={onClick}>
        <Moon />
      </MoonContainer>
    </StyledNav>
  )
}

export default NavBar
