import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Particles from "react-particles-js"
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
    color: #464f59;
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
      <Particles
        style={{ position: "absolute", width: "100%", height: "100%" }}
        params={{
          particles: {
            number: {
              value: 75,
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
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
