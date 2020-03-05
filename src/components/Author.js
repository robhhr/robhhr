import React from "react"
import styled, { keyframes } from "styled-components"
import { Author as Info } from "./Typography"
import "font-awesome/css/font-awesome.min.css"

const heartbeat = keyframes`
     0% {
  -webkit-transform:rotate(0deg) scale(1);
  transform:rotate(0deg) scale(1)
 }
 50% {
  -webkit-transform:rotate(0deg) scale(1.2);
  transform:rotate(0deg) scale(1.2)
 }
 100% {
  -webkit-transform:rotate(0deg) scale(1);
  transform:rotate(0deg) scale(1)
 }
`

const Icon = styled.i`
  animation: ${heartbeat} 1.2s ease infinite;
  color: #6dbfd7;
  font-size: 0.8rem;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 0;
  width: 100%;
`

const Author = () => (
  <Container>
    <Info>
      Made with <Icon className="fa fa-heart" /> by Roberto
    </Info>
  </Container>
)

export default Author
