import React from 'react'
import styled from 'styled-components'

const StyledMoon = styled.svg`
  fill: ${props => props.theme.iconColor};
  stroke: none;
  width: 35px;
  height: 35px;
`

export const Moon = () => {
  return (
    <StyledMoon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </StyledMoon>
  )
}
