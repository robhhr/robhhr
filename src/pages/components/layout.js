import React from "react"
import { Global, css } from "@emotion/core"
import NavBar from "./NavBar"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-size: 16px;
          line-height: 1.4;
          padding: 10px 15px;

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

            + * {
              margin-top: 0.5rem;
            }
          }

          li > * {
            padding: 0 8px;
          }
        }
      `}
    />
    <NavBar />
    <main>{children}</main>
  </>
)

export default Layout
