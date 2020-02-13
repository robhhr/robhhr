import React from "react"
import { Link } from "gatsby"
import Logo from "../images/blueLogo.svg"
import Resume from "../assets/roberto-resume.pdf"
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

const ResumeLink = styled.a`
  text-decoration: none;
  margin-right: 20px;
  font-size: 1rem;
`

const NavBar = () => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={Logo} />
      </Link>
      <div>
        <StyledLink to="/about">about</StyledLink>
        <ResumeLink
          href={Resume}
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </ResumeLink>
      </div>
    </StyledNav>
  )
}

export default NavBar
