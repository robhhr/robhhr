import React from "react"
import styled from "styled-components"
import "font-awesome/css/font-awesome.min.css"

const StyledButton = styled.a`
  font-family: "Cairo", sans-serif;
  color: #464f59;
  background-color: #fff;
  text-transform: lowercase;
  font-size: 1.15rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: baseline;
  max-width: 45%;
  margin: 0 auto;
  padding: 5px 0;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  -moz-box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  box-shadow: 0px 0px 8px -4px rgba(167, 167, 167, 1);
  @media (min-width: 850px) {
    width: 250px;
    font-size: 1.25rem;
    margin: 35px auto;
  }
`

const StyledIcon = styled.i`
  font-size: 0.9rem;
  margin-left: 10px;
`

const Button = ({ children, link }) => (
  <StyledButton href={link} target="_blank" rel="noopener noreferrer">
    {children} <StyledIcon className="fa fa-external-link" />
  </StyledButton>
)

export default Button
