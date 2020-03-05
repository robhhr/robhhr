import React from "react"
import styled from "styled-components"
import "../assets/fonts.css"

const AuthorTitle = styled.p`
  font-size: 0.95rem;
  @media (min-width: 850px) {
    font-size: 1.05rem;
  }
`

const ContactTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 20px;
  @media (min-width: 850px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`

const ContactLinks = styled.a`
  text-decoration: underline;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  margin-right: 20px;
  @media (min-width: 850px) {
    font-size: 1.2rem;
  }
`

const AboutLinks = styled.a`
  text-decoration: underline;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;

  &:visited {
    color: #464f59;
  }
`

const ProjectDescription = styled.p`
  font-family: "Cairo", sans-serif;
  line-height: 1.5;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 15px;
  @media (min-width: 850px) {
    font-size: 1.2rem;
    width: 90%;
    margin-bottom: 22px;
  }
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

  @media (min-width: 850px) {
    font-size: 1.5rem;
  }
`
const StyledSummary = styled.h1`
  font-size: 1.7rem;
  font-weight: 300;
  padding: 20px 5px;
  line-height: 1.8;
  width: 80%;

  @media (min-width: 850px) {
    font-size: 2rem;
    width: 80%;
  }
`

const Author = ({ children }) => <AuthorTitle>{children}</AuthorTitle>

const Contact = ({ children }) => <ContactTitle>{children}</ContactTitle>

const Description = ({ children }) => (
  <ProjectDescription>{children}</ProjectDescription>
)

const Links = ({ children, link }) => (
  <ContactLinks href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </ContactLinks>
)

const AboutLink = ({ children, link }) => (
  <AboutLinks href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </AboutLinks>
)

const Section = ({ children }) => <StyledSection>{children}</StyledSection>

const Summary = ({ children }) => <StyledSummary>{children}</StyledSummary>

export { AboutLink, Author, Contact, Description, Links, Section, Summary }
