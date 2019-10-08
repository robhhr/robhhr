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
        align-items: center;
        height: 100px;
        /* padding: 30px; */
      `}
    >
      <div
        className="logo"
        css={css`
          width: 100px;
          /* height: 100px; */
        `}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="site-logo"
            css={css`
              width: 100%;
              /* height: 50%; */
            `}
          />
        </Link>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
