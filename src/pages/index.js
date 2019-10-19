import React from "react"
import Layout from "../pages/components/layout"
import Particles from "react-particles-js"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import colors from "../colors"

const dynamicProjects = props =>
  css`
    display: ${props.display};
  `
const Project = styled.div`
  ${dynamicProjects};
`

const Home = () => {
  return (
    <Layout>
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
      <section
        css={css`
          padding: 0 20px;
        `}
      >
        <div className="index__title">
          <h1
            css={css`
              padding: 20px 0;
              line-height: 1.8;
            `}
          >
            Hello! I'm Roberto, a{" "}
            <span
              css={css`
                color: #fc3565;
              `}
            >
              front-end developer
            </span>{" "}
            living in Vancouver
          </h1>
        </div>
        <h1
          className="index__section"
          css={css`
            font-size: 1.3rem;
            font-weight: 500;
            font-family: "Roboto Mono", monospace;
            letter-spacing: -0.5px;
            padding: 20px 0;
          `}
        >
          Featured Projects
        </h1>
        <section
          className="project__section"
          css={css`
            background-color: #fff;
            border-radius: 5px;
            -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
            -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
            box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
          `}
        >
          <Project
            display="flex"
            css={css`
              flex-direction: column;
            `}
          >
            <h1
              css={css`
                color: ${colors.grey};
                padding: 15px;
              `}
            >
              Magic Toolbox
            </h1>
            <p
              css={css`
                font-size: 0.875rem;
                padding: 5px 15px;
              `}
            >
              Multi-tool app with a digital clock, weather, unit convertor,
              to-do list and digital calculator 🧙{" "}
            </p>
            <div
              className="project-description"
              css={css`
                padding: 15px 15px;
              `}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Sass</span>
              <span>JavaScript</span>
            </div>
          </Project>
        </section>{" "}
      </section>
    </Layout>
  )
}

export default Home
