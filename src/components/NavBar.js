import React from "react"
import { Link } from "gatsby"
import Logo from "../images/blueLogo.svg"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
  height: 70px;
`

const StyledLogo = styled.img`
  margin: 0 20px;
  width: 100px;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  margin: 0 14px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;

  &:last-child {
    margin-right: 20px;
  }
`

const NavBar = () => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={Logo} />
      </Link>
      <div>
        <StyledLink to="/about">about</StyledLink>
        <StyledLink to="/work">work</StyledLink>
      </div>
    </StyledNav>
  )
}

export default NavBar
