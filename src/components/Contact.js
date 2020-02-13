import React from "react"
import { Contact as Title, Links } from "./Typography"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 5px;
`

const Contact = () => (
  <Container>
    <Title>Getting in touch is easy!</Title>
    <Links link="mailto:robhhr@outlook.com">email</Links>
    <Links link="https://linkedin.com/in/roberto-h">linkedin</Links>
    <Links link="https://twitter.com/hallorob">twitter</Links>
  </Container>
)

export default Contact
