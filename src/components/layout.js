import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import "../assets/fonts.css"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    color: #464f59;
  }

  main {
    margin: 0 15px;
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
