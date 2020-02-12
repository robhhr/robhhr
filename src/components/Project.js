import React from "react"
import { Description, Name } from "../components/Typography"
import styled from "styled-components"

const Skill = styled.p`
  font-size: 0.9rem;
  border: 1px solid #bfd8ed;
  border-radius: 5px;
  margin: 0;
  padding: 2px 10px;
  width: min-content;
`
const Container = styled.div`
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  -moz-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  margin: 0 8px;
  padding: 15px;
`

const Project = ({ description, title, tech }) => {
  return (
    <Container>
      <Name>{title}</Name>
      <Description>{description}</Description>
      <div style={{ display: "flex" }}>
        {tech && tech.length
          ? tech.map(skill => <Skill key={skill}>{skill}</Skill>)
          : null}
      </div>
    </Container>
  )
}

export default Project
