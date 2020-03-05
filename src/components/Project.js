import React from "react"
import { Description } from "../components/Typography"
import styled from "styled-components"
import "font-awesome/css/font-awesome.min.css"
import "../assets/fonts.css"

const Name = styled.a`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  @media (min-width: 850px) {
    font-size: 20px;
  }
`
const Container = styled.div`
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  -moz-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  margin: 0px 8px;
  margin-bottom: 25px;
  padding: 25px 30px;
  max-width: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media (min-width: 850px) {
    min-width: 250px;
    margin: 0;
    width: auto;
    height: 260px;
    position: relative;
  }
`

const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  @media (min-width: 850px) {
    position: absolute;
    bottom: 15px;
  }
`

const Repo = styled.a`
  font-size: 14px;
  border-radius: 5px;
  text-decoration: none;
  width: 70px;
  text-align: center;
  margin-right: 10px;
  @media (min-width: 850px) {
    font-size: 16px;
    width: auto;
    margin-right: 20px;
  }
`

const Site = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 8px;
  text-decoration: none;
  width: 70px;
  text-align: center;
  @media (min-width: 850px) {
    font-size: 16px;
    width: 85px;
  }
`

const SkillContainer = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  flex-wrap: wrap;
  @media (min-width: 850px) {
    width: 90%;
    margin: 0;
  }
`

const Skill = styled.p`
  font-size: 13px;
  text-transform: lowercase;
  border-radius: 5px;
  margin: 0 10px 10px 0;
  padding: 2px 10px;
  min-width: max-content;
  @media (min-width: 850px) {
    font-size: 14px;
    text-transform: initial;
  }
`
const TAG_COLORS = {
  "React Native": "#427EAD",
  NodeJS: "#F7524A",
  PostgreSQL: "#5f759a",
  React: "#41A6F4",
  Apollo: "#db7093",
  Meteor: "#159e15",
  GraphQL: "#B30000",
  Prisma: "#7352F7",
  JavaScript: "#b8860b",
  Sass: "#5284F7",
  MongoDB: "#9EB63A",
  Express: "#e67300",
  PHP: "#2D9095",
  WordPress: "#007ACC",
  jQuery: "#639f90",
  CSS3: "#CC0088",
}

const Project = ({ description, link, github, title, tech, site }) => {
  return (
    <Container>
      <Name href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </Name>
      <Description>{description}</Description>
      <SkillContainer>
        {tech && tech.length
          ? tech.map(skill => {
              const color = TAG_COLORS[skill] ? TAG_COLORS[skill] : "#FFFFFF"
              return (
                <Skill
                  key={skill}
                  style={{
                    border: `1px solid ${color}`,
                    color,
                  }}
                >
                  {skill}
                </Skill>
              )
            })
          : null}
      </SkillContainer>
      <SourceContainer>
        <Repo href={github} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" /> Source
        </Repo>
        {site ? (
          <Site href={site} target="_blank" rel="noopener noreferrer">
            View <i className="fa fa-external-link" />
          </Site>
        ) : null}
      </SourceContainer>
    </Container>
  )
}

export default Project
