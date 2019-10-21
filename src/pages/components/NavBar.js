import React from "react"
import Logo from "../../../images/blueLogo.svg"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import colors from "../../colors"
import Particles from "react-particles-js"

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
        padding: 20px;
      `}
    >
      <Particles
        css={css`
          position: absolute;
        `}
        params={{
          particles: {
            number: {
              value: 85,
              density: {
                enable: true,
                value_area: 850,
              },
            },
            color: {
              value: "#989898",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#989898",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#989898",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div
        className="logo"
        css={css`
          width: 100px;
          position: relative;
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
