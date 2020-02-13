import React from "react"
import styled from "styled-components"

const StyledButton = styled.a`
  border: 1.5px solid #a7a7a7;
  color: #969696;
  font-size: 1.05rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 45%;
  margin: 0 auto;
  padding: 5px 0;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  -moz-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
`

const Button = ({ children, link }) => (
  <StyledButton href={link} target="_blank">
    {children}
  </StyledButton>
)

export default Button
