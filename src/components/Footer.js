import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.04);
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
`

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>footer</div>
      </StyledFooter>
    </>
  )
}

export default Footer
