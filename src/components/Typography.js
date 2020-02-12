import React from "react"
import styled from "styled-components"
import "../assets/fonts.css"

const StyledSection = styled.h1`
  font-family: "Cairo", sans-serif;
  font-size: 1.35rem;
  font-weight: 500;
  padding-bottom: 20px;

  &::after {
    content: " ";
    border-bottom: 4px solid #464f59;
    display: block;
    width: 50px;
    margin: 10px 0 5px;
  }
`
const StyledSummary = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 20px 0;
  line-height: 1.8;
  width: 80%;
`

const Section = ({ children }) => <StyledSection>{children}</StyledSection>

const Summary = ({ children }) => <StyledSummary>{children}</StyledSummary>

export { Section, Summary }
