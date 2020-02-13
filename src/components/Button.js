import React from "react"
import styled from "styled-components"
import "font-awesome/css/font-awesome.min.css"

const StyledButton = styled.a`
  /* border: 1.5px solid #a7a7a7; */
  color: #858585;
  font-size: 1.05rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin: 0 auto;
  padding: 5px 0;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  -moz-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
`

const StyledIcon = styled.i`
  font-size: 0.9rem;
  margin-left: 10px;
`

const Button = ({ children, link }) => (
  <StyledButton href={link} target="_blank">
    {children} <StyledIcon className="fa fa-external-link" />
  </StyledButton>
)

export default Button
