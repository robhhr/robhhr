import React from 'react'
import styled from 'styled-components'
import {Live, Git} from '../assets'

const Container = styled.div`
  padding: 10px 0 30px 0;
`
const Description = styled.p`
  margin: 0;
  width: 85%;
`
const Link = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.9rem;
  padding: 2.5px 8px;
  margin-right: 15px;
  background-color: ${props => props.theme.backgroundColor};
  border: 0.8px solid ${props => props.theme.iconColor};
  border-radius: 5px;
  transition: all 0.25s linear;
  @media (min-width: 1000px) {
    margin-top: 10px;
  }
`
const LinkSection = styled.div`
  display: flex;
  padding: 5px 0;
`
const Title = styled.h1`
  text-transform: uppercase;
  padding-bottom: 10px;
  margin: 0;
  word-spacing: 1.5px;
  letter-spacing: 1px;
  @media (min-width: 1000px) {
    font-size: 1.1rem;
  }
`

const Project = ({description, live, repo, title}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LinkSection>
        <Link href={repo} target="_blank" rel="noreferrer">
          <Git /> Source
        </Link>
        {live ? (
          <Link href={live} target="_blank" rel="noreferrer">
            <Live /> Live
          </Link>
        ) : null}
      </LinkSection>
    </Container>
  )
}

export default Project
