import React from 'react'
import styled from 'styled-components'
import {Git, Mail, Twitter} from '../assets'

const ContactSection = styled.div`
  margin: 0 5px;
  padding-bottom: 15px;
`
const LinkSection = styled.div`
  display: flex;
`
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
`
const Title = styled.h1`
  font-size: 1.5rem;
  padding-top: 10px;
`

const Contact = () => {
  return (
    <ContactSection>
      <Title>Contact</Title>
      <LinkSection>
        <StyledLink
          href="https://github.com/robhhr"
          target="_blank"
          rel="noreferrer"
        >
          <Git /> GitHub
        </StyledLink>
        <StyledLink href="mailto:robhhr@outlook.com">
          <Mail /> Email
        </StyledLink>
        <StyledLink
          href="https://twitter.com/hallorob"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter /> Twitter
        </StyledLink>
      </LinkSection>
    </ContactSection>
  )
}

export default Contact
