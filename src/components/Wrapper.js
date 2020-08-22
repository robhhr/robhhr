import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    position: relative;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    font-size: 1rem;
  }
  main {
    margin: 0;
  }
`

const Wrapper = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Wrapper
