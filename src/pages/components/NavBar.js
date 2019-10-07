import React from "react"
import Logo from "../../../images/blueLogo.svg"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import colors from "../../colors"

const NavBar = () => {
  return (
    <nav
      css={css`
        position: relative;
        background-color: ${colors.white};
        display: flex;
        justify-content: space-between;
        /* padding: 30px; */
      `}
    >
      <div
        className="logo"
        css={css`
          width: 100px;
          height: 100px;
        `}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="site-logo"
            css={css`
              width: 100%;
              height: 50%;
            `}
          />
        </Link>
      </div>
      <div className="nav-menu">
        <ul>
          <li
            css={css`
              list-style: none;
            `}
          >
            <Link
              to="/about/"
              css={css`
                text-decoration: none;
                color: ${colors.grey};
                &:visited {
                  color: ${colors.grey};
                }
              `}
            >
              About
            </Link>
            <Link
              to="/contact/"
              css={css`
                text-decoration: none;
                color: ${colors.grey};
                &:visited {
                  color: ${colors.grey};
                }
              `}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
