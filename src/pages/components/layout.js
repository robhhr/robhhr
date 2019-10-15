import React from "react"
import { Global, css } from "@emotion/core"
import NavBar from "./NavBar"
import Footer from "./footer"
import colors from "../../colors"

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
          }

          li {
            list-style: none;
          }

          li > * {
            padding: 0 5px;
            text-decoration: none;
            color: ${colors.grey};
            &:visited {
              color: ${colors.grey};
            }
          }
        }

        body {
          position: relative;
          height: 100vh;
        }

        .fa {
          font-size: 20px;
        }
      `}
    />
    <NavBar />
    <main
      css={css`
        position: relative;
      `}
    >
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
