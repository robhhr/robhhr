import React from "react"
import { Link } from "gatsby"
import Logo from "../images/blueLogo.svg"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
`

const NavBar = () => {
  return (
    <StyledNav>
      <Link to="index">
        <StyledLogo src={Logo} />
      </Link>
      <div>
        <Link to="about">about</Link>
        <Link to="contact">contact</Link>
      </div>
    </StyledNav>
  )
}

export default NavBar
