import React from 'react'
import styled from 'styled-components'

const StyledMail = styled.svg`
  fill: none;
  stroke: ${props => props.theme.iconColor};
  width: 15px;
  height: 15px;
  padding-right: 5px;
`

const Mail = () => {
  return (
    <StyledMail
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </StyledMail>
  )
}

export default Mail
