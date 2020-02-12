import React from "react"
import styled from "styled-components"
import "../assets/fonts.css"

const StyledSummary = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2;
  width: 80%;
`

const Summary = ({ children }) => <StyledSummary>{children}</StyledSummary>

export { Summary }
