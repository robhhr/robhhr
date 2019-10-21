import React from "react"
import { Helmet } from "react-helmet"
import Favicon from "../../../images/myInitial.png"
import { Global, css } from "@emotion/core"
import NavBar from "./NavBar"
import Footer from "./footer"
import colors from "../../colors"
import "../../index.css"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-size: 16px;
          line-height: 1.4;
          /* remove margin from main div built with Gatsby */
          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;
            font-family: "Poppins", serif;
            font-weight: 400;
          }

          h1,
          h2,
          h3,
          h3,
          h4,
          h5,
          h6,
          p,
          span {
            color: ${colors.grey};
          }

          li {
            list-style: none;
          }

          li > * {
            padding: 0 12px;
            text-decoration: none;
            color: ${colors.grey};
            font-family: "Poppins", serif;
            font-weight: 500;
            text-transform: lowercase;
            &:visited {
              color: ${colors.grey};
            }
          }
        }

        body {
          position: relative;
          height: 100%;
        }

        .fa {
          font-size: 20px;
        }

        .css-1g9eken-Home,
        canvas {
          z-index: -999;
          height: 100vh;
        }
      `}
    />
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={`${Favicon}`} />
      <title>Roberto Hernandez | Web Developer</title>
    </Helmet>
    <NavBar />
    <main
      css={css`
        position: relative;
        padding-bottom: 50px;
      `}
    >
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
