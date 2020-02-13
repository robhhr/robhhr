import React from "react"
import styled from "styled-components"
import Resume from "../assets/roberto-resume.pdf"
import "font-awesome/css/font-awesome.min.css"

const StyledFooter = styled.footer`
  /* position: fixed; */
  bottom: 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.04);
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @media (min-width: 850px) {
    position: fixed;
    height: 55px;
  }
`

const IconContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  @media (min-width: 850px) {
    justify-content: space-evenly;
  }
`

const StyledIcon = styled.a`
  text-decoration: none;
  margin: 0 30px;
  font-size: 1.2rem;
  @media (min-width: 850px) {
    font-size: 1.5rem;
  }
`

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <IconContainer>
          <StyledIcon
            className="fa fa-github"
            href="https://github.com/robhhr"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          />
          <StyledIcon
            className="fa fa-envelope"
            href="mailto:robhhr@outlook.com"
            aria-label="Mail"
            target="_blank"
            rel="noopener noreferrer"
          />
          <StyledIcon
            className="fa fa-linkedin"
            href="https://linkedin.com/in/roberto-h"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          />
          <StyledIcon
            className="fa fa-file"
            href={Resume}
            aria-label="Resume"
            download="roberto-resume"
            rel="noopener noreferrer"
          />
        </IconContainer>
      </StyledFooter>
    </>
  )
}

export default Footer
