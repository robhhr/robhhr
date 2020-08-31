import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {Profile, Moon} from '../assets'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
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
        <Profile />
        <Title>robhhr</Title>
      </StyledLink>
      <MoonContainer onClick={onClick} aria-label="theme toggler">
        <Moon />
      </MoonContainer>
    </StyledNav>
  )
}

export default NavBar
