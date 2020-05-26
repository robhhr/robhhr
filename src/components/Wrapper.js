import React from "react"
import { createGlobalStyle } from "styled-components"
import { ParticlesCanvas } from "../components"
import "../assets/fonts.css"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    color: #222222;
  }

  main {
    margin: 0 15px;
    z-index: 999;

    @media (min-width: 850px) {
      margin: 40px 150px 60px 150px;
    }
  }

  canvas {
    z-index: -999;
    height: 100%
  }
`

const Wrapper = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ParticlesCanvas />
      <main>{children}</main>
    </>
  )
}

export default Wrapper
