import React from "react"
import Layout from "../pages/components/layout"
import { Link } from "gatsby"
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
// const MoreWork = styled.Link`
// background-color: #fff;
// text-align: center;
// text-transform: uppercase;
// font-family: "Poppins", serif;
// font-size: 0.875rem;
// box-shadow: none;
// border-radius: 50px;
//   &:visited {
//     color: red;
//   }
// `

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
            height: auto;
          `}
        >
          <Project
            display="flex"
            css={css`
              flex-direction: column;
              background-color: #fff;
              border-radius: 5px;
              -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
            `}
          >
            <h1
              css={css`
                color: ${colors.grey};
                padding: 15px;
                font-weight: 600;
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
              className="project__description"
              css={css`
                padding: 15px 15px;
              `}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Sass</span>
              <span>JavaScript</span>
            </div>
            <div
              className="project__btn"
              css={css`
                padding: 5px 15px 15px 15px;
              `}
            >
              <a
                href="https://github.com/robhhr/magic-toolbox"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  text-decoration: none;
                  font-weight: 400;
                  display: flex;
                  align-items: center;
                  -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  background-color: #f7f7f7;
                  border-radius: 5px;
                  padding: 5px 8px;
                  width: 90px;
                `}
              >
                <span
                  className="fa fa-github"
                  css={css`
                    font-size: 1rem;
                  `}
                ></span>
                <span
                  css={css`
                    font-family: "Poppins", serif;
                    font-size: 0.875rem;
                    padding: 0 5px;
                  `}
                >
                  Source
                </span>
              </a>
              <a
                href="https://magic-toolbox.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  text-decoration: none;
                  font-weight: 400;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #dfebf6;
                  border-radius: 5px;
                  padding: 5px 8px;
                  width: 90px;
                  margin-top: 10px;
                `}
              >
                <span
                  css={css`
                    font-family: "Poppins", serif;
                    font-size: 0.875rem;
                    padding: 0 5px;
                  `}
                >
                  View
                </span>
                <span
                  className="fa fa-external-link"
                  css={css`
                    font-size: 1rem;
                  `}
                ></span>
              </a>
            </div>
          </Project>
          <Project
            display="flex"
            css={css`
              flex-direction: column;
              background-color: #fff;
              border-radius: 5px;
              -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              margin: 25px 0;
            `}
          >
            <h1
              css={css`
                color: ${colors.grey};
                padding: 15px;
                font-weight: 600;
              `}
            >
              Rock, Paper, Scissors, Lizard, Spock
            </h1>
            <p
              css={css`
                font-size: 0.875rem;
                padding: 5px 15px;
              `}
            >
              An altered/newer version of the classic Rock, Paper, Scissors game
              👾{" "}
            </p>
            <div
              className="project__description"
              css={css`
                padding: 15px 15px;
              `}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Sass</span>
              <span>JavaScript</span>
            </div>
            <div
              className="project__btn"
              css={css`
                padding: 5px 15px 15px 15px;
              `}
            >
              <a
                href="https://github.com/robhhr/rock-paper-scissors-lizard-spock"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  text-decoration: none;
                  font-weight: 400;
                  display: flex;
                  align-items: center;
                  -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  background-color: #f7f7f7;
                  border-radius: 5px;
                  padding: 5px 8px;
                  width: 90px;
                `}
              >
                <span
                  className="fa fa-github"
                  css={css`
                    font-size: 1rem;
                  `}
                ></span>
                <span
                  css={css`
                    font-family: "Poppins", serif;
                    font-size: 0.875rem;
                    padding: 0 5px;
                  `}
                >
                  Source
                </span>
              </a>
              <a
                href="https://rpsl-spock.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  text-decoration: none;
                  font-weight: 400;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #dfebf6;
                  border-radius: 5px;
                  padding: 5px 8px;
                  width: 90px;
                  margin-top: 10px;
                `}
              >
                <span
                  css={css`
                    font-family: "Poppins", serif;
                    font-size: 0.875rem;
                    padding: 0 5px;
                  `}
                >
                  View
                </span>
                <span
                  className="fa fa-external-link"
                  css={css`
                    font-size: 1rem;
                  `}
                ></span>
              </a>
            </div>
          </Project>
          <Project
            display="flex"
            css={css`
              flex-direction: column;
              background-color: #fff;
              border-radius: 5px;
              -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
              margin: 25px 0;
            `}
          >
            <h1
              css={css`
                color: ${colors.grey};
                padding: 15px;
                font-weight: 600;
              `}
            >
              Inhabitent
            </h1>
            <p
              css={css`
                font-size: 0.875rem;
                padding: 5px 15px;
              `}
            >
              WP-based theme inspired by the outdoors and active lifestyle 🧗{" "}
            </p>
            <div
              className="project__description"
              css={css`
                padding: 15px 15px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
              `}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Sass</span>
              <span>JavaScript</span>
              <span>Wordpress</span>
              <span>PHP</span>
            </div>
            <div
              className="project__btn"
              css={css`
                padding: 5px 15px 15px 15px;
              `}
            >
              <a
                href="https://github.com/robhhr/inhabitent-site"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  text-decoration: none;
                  font-weight: 400;
                  display: flex;
                  align-items: center;
                  -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
                  background-color: #f7f7f7;
                  border-radius: 5px;
                  padding: 5px 8px;
                  width: 90px;
                `}
              >
                <span
                  className="fa fa-github"
                  css={css`
                    font-size: 1rem;
                  `}
                ></span>
                <span
                  css={css`
                    font-family: "Poppins", serif;
                    font-size: 0.875rem;
                    padding: 0 5px;
                  `}
                >
                  Source
                </span>
              </a>
              <a
                href="https://tent.academy.red/"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  text-decoration: none;
                  font-weight: 400;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #dfebf6;
                  border-radius: 5px;
                  padding: 5px 8px;
                  width: 90px;
                  margin-top: 10px;
                `}
              >
                <span
                  css={css`
                    font-family: "Poppins", serif;
                    font-size: 0.875rem;
                    padding: 0 5px;
                  `}
                >
                  View
                </span>
                <span
                  className="fa fa-external-link"
                  css={css`
                    font-size: 1rem;
                  `}
                ></span>
              </a>
            </div>
          </Project>
        </section>{" "}
        <Link
          to="/work/"
          css={css`
            display: flex;
            justify-content: center;
            background-color: #fff;
            text-transform: uppercase;
            text-decoration: none;
            font-family: "Poppins", serif;
            letter-spacing: -0.25px;
            font-size: 0.875rem;
            box-shadow: none;
            border-radius: 50px;
            &:visited {
              color: ${colors.font_color};
            }
          `}
        >
          More Projects
        </Link>
      </section>
    </Layout>
  )
}

export default Home
