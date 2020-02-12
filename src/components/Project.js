import React from "react"
import { Description } from "../components/Typography"
import styled from "styled-components"
import "font-awesome/css/font-awesome.min.css"
import "../assets/fonts.css"

const Name = styled.a`
  font-size: 1.15rem;
  font-weight: 400;
  text-decoration: none;
`
const Container = styled.div`
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  -moz-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  margin: 0 8px;
  padding: 20px 15px;
`

const Repo = styled.a`
  font-size: 0.9rem;
  background-color: #f1f1f1;
  box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 5px 8px;
  text-decoration: none;
  width: 70px;
  text-align: center;
  margin: 5px 0;
`

const Site = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  font-size: 0.9rem;
  background-color: #dfebf6;
  box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 5px 8px;
  text-decoration: none;
  width: 70px;
  text-align: center;
  margin: 5px 0;
`

const Skill = styled.p`
  font-size: 0.9rem;
  border: 2px solid #bfd8ed;
  border-radius: 5px;
  margin: 0;
  padding: 2px 10px;
  width: min-content;

  &:not(:first-child) {
    margin: 0 12px;
  }
`

const Project = ({ description, link, github, title, tech, site }) => {
  return (
    <Container>
      <Name href={link} target="_blank">
        {title}
      </Name>
      <Description>{description}</Description>
      <div style={{ display: "flex", margin: "10px 0 20px 0" }}>
        {tech && tech.length
          ? tech.map(skill => <Skill key={skill}>{skill}</Skill>)
          : null}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Repo href={github} target="_blank">
          <i className="fa fa-github" /> Source
        </Repo>
        {site ? (
          <Site href={site} target="_blank">
            View <i className="fa fa-external-link" />
          </Site>
        ) : null}
      </div>
    </Container>
  )
}

export default Project