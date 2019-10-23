import React from "react"
import Logo from "../../../images/blueLogo.svg"
import navSize from "./scrollEffect"
import { Link } from "gatsby"
import { css, keyframes } from "@emotion/core"
import colors from "../../colors"
import Particles from "react-particles-js"

const NavBar = () => {
  const isScrolled = navSize()
  return (
    <nav
      className={isScrolled ? "nav__resize" : ""}
      css={css`
        position: fixed;
        background-color: ${colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 80px;
        padding: 50px 20px;
        z-index: 100;

        &.nav__resize {
          height: 50px;
          padding: 37px 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
          transition: all 0.5s ease-in-out;

          @media (min-width: 850px) {
            padding: 0px 135px;
            height: 80px;
          }
        }

        @media (min-width: 850px) {
          padding: 0px 135px;
          height: 120px;
        }
      `}
    >
      <div
        className="logo"
        css={css`
          width: 100px;
          position: relative;
          /* height: 100px; */

          @media (min-width: 850px) {
            width: 120px;
          }
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
      <div
        className="nav-menu"
        css={css`
          position: relative;
        `}
      >
        <ul
          css={css`
            display: flex;
          `}
        >
          <li>
            <Link to="/about/">About</Link>
          </li>
          {/* <li>
            <Link to="/contact/">Contact</Link>
          </li> */}
          <li>
            <Link to="/work/">Work</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
