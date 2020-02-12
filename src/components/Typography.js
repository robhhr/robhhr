import React from "react"
import styled from "styled-components"
import "../assets/fonts.css"

const ProjectDescription = styled.p`
  font-family: "Cairo", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
`

const StyledSection = styled.h1`
  font-family: "Cairo", sans-serif;
  font-size: 1.35rem;
  font-weight: 500;
  padding: 0 5px 20px 5px;

  &::after {
    content: " ";
    border-bottom: 4px solid #464f59;
    display: block;
    width: 50px;
    margin: 10px 0 5px;
  }
`
const StyledSummary = styled.h1`
  font-size: 1.7rem;
  font-weight: 300;
  padding: 20px 5px;
  line-height: 1.8;
  width: 80%;
`

const Description = ({ children }) => (
  <ProjectDescription>{children}</ProjectDescription>
)

const Section = ({ children }) => <StyledSection>{children}</StyledSection>

const Summary = ({ children }) => <StyledSummary>{children}</StyledSummary>

export { Description, Section, Summary }
