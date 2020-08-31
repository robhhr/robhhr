import React from 'react'
import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {primaryFont} from '../utils'

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    background-color: ${props => props.theme.backgroundColor};
    transition: all 0.25s linear;
  }
  body {
    margin: 0;
    padding: 0;
    position: relative;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    font-family: ${primaryFont};
    font-size: 1rem;
    color: ${props => props.theme.textColor};
    line-height: 1.625;
    transition: all 0.25s linear;
  }
  main {
    margin: 0;
    padding: 0.5rem 1.5rem;
  }
  a {
    text-decoration: none
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
