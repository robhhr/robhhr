import React from 'react'
import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {primaryFont} from '../utils'

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    background-color: ${props => props.theme.backgroundColor}
  }
  body {
    margin: 0;
    padding: 0 20px;
    position: relative;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    font-family: ${primaryFont};
    font-size: 1rem;
    color: ${props => props.theme.textColor}
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
