import React from "react"
import Layout from "../pages/components/layout"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import { css } from "@emotion/core"
import colors from "../colors"
import Projects from "./components/projects"
import Skillset from "./components/Skillset"
import iconNPM from "../../images/iconNPM.svg"
import iconJS from "../../images/iconJS.svg"
import iconReact from "../../images/iconReact.svg"
import iconMongo from "../../images/iconMongo.svg"
import iconSASS from "../../images/iconSASS.svg"
import iconHTML from "../../images/iconHTML.svg"
import iconCSS from "../../images/iconCSS.svg"
import iconNode from "../../images/iconNode.svg"
import iconPHP from "../../images/iconPHP.svg"
import iconMeteor from "../../images/iconMeteor.svg"
import iconGatsby from "../../images/iconGatsby.svg"
import Skills from "./components/skills"

const Home = () => {
  return (
    <Layout>
      <Particles
        css={css`
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: -999;
        `}
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
      <section
        css={css`
          padding: 0 20px;

          @media (min-width: 850px) {
            padding: 0 150px;
          }
        `}
      >
        <div className="index__title">
          <h1
            css={css`
              padding: 20px 0 10px 0;
              line-height: 1.8;

              @media (min-width: 850px) {
                width: 60%;
              }
            `}
          >
            Hello! I'm Roberto, a{" "}
            <span
              css={css`
                color: #fc3565;
              `}
            >
              {" "}
              web developer
            </span>{" "}
            living in Vancouver
          </h1>
          <p
            css={css`
              font-size: 0.95rem;
              line-height: 1.8;
              font-family: "Poppins", serif;
              font-weight: 300;
              padding-bottom: 20px;

              @media (min-width: 850px) {
                width: 60%;
                font-size: 1.1rem;
                line-height: 2.2;
              }
            `}
          >
            I am a front-end web developer with a passion for building safer,
            faster and more accessible websites
          </p>
        </div>
        <h1
          className="index__section"
          css={css`
            font-size: 1.3rem;
            font-weight: 500;
            font-family: "Roboto Mono", monospace;
            letter-spacing: -0.5px;
            padding: 20px 0;

            @media (min-width: 850px) {
              padding: 40px 0;
            }
          `}
        >
          Featured Projects
        </h1>
        <section
          className="project__section"
          css={css`
            height: auto;
            z-index: 100;

            @media (min-width: 850px) {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 30px;
            }
          `}
        >
          <Projects
            title="Magic Toolbox"
            description="Multi-tool app with a digital clock, weather, unit convertor, to-do list
            and digital calculator 🧙"
            url="https://github.com/robhhr/magic-toolbox"
            skills={["HTML5", "CSS3", "Sass", "JavaScript"]}
            live="https://magic-toolbox.netlify.com/"
          />
          <Projects
            title="Rock, Paper, Scissors, Lizard, Spock"
            description="An altered/newer version of the classic Rock, Paper, Scissors game
            👾"
            url="https://github.com/robhhr/rock-paper-scissors-lizard-spock"
            skills={["HTML5", "CSS3", "Sass", "JavaScript"]}
            live="https://rpsl-spock.netlify.com/"
          />
          <Projects
            title="Inhabitent"
            description="WP-based theme inspired by the outdoors and active lifestyle 🧗"
            url="https://github.com/robhhr/inhabitent-site"
            skills={["HTML5", "CSS3", "Sass", "JavaScript", "PHP", "WordPress"]}
            live="https://tent.academy.red/"
          />
          <Projects
            title="Instanews App"
            description="New York Times top news fetcher with an easy-looking individual grid 📰"
            url="https://github.com/robhhr/instanews-app"
            skills={["HTML5", "CSS3", "Sass", "JavaScript", "jQuery"]}
            live="https://robhhr.github.io/instanews-app/"
          />
        </section>{" "}
        <Link
          to="/work/"
          css={css`
            display: flex;
            justify-content: center;
            padding: 15px 0 25px 0;
            background-color: #fff;
            text-transform: uppercase;
            text-decoration: none;
            font-family: "Poppins", serif;
            letter-spacing: -0.25px;
            font-size: 0.875rem;
            /* box-shadow: none;
            border-radius: 50px; */
            &:visited {
              color: ${colors.font_color};
            }

            @media (min-width: 850px) {
              padding: 40px 0;
            }
          `}
        >
          More Projects
        </Link>
        <h1
          className="index__section"
          css={css`
            font-size: 1.3rem;
            font-weight: 500;
            font-family: "Roboto Mono", monospace;
            letter-spacing: -0.5px;
            padding: 20px 0;

            @media (min-width: 850px) {
              padding: 40px 0;
            }
          `}
        >
          Skillset
        </h1>
        <div
          className="skill__section"
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            @media (min-width: 850px) {
              display: flex;
              flex-direction: row;
              margin: 0 auto;
            }
          `}
        >
          <Skillset>
            <Skills skill={iconHTML} />
            <Skills skill={iconCSS} />
            <Skills skill={iconJS} />
            <Skills skill={iconReact} />
            <Skills skill={iconSASS} />
          </Skillset>
          <Skillset>
            <Skills skill={iconMeteor} />
            <Skills skill={iconNode} />
            <Skills skill={iconPHP} />
            <Skills skill={iconMongo} />
          </Skillset>
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
          Contact me!
        </h1>
        <p
          css={css`
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 1rem;
            font-weight: 300;
            line-height: 2;
          `}
        >
          If you like my work don't hesitate to contact me!
        </p>
        <div
          className="contact-items"
          css={css`
            padding: 15px 0 50px 0;
            display: flex;
            flex-direction: column;
          `}
        >
          {" "}
          <a
            href="mailto:robhhr@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              font-size: 1rem;
              font-weight: 300;
              color: #464f59;
              text-decoration: none;
              padding: 10px 0;
              width: max-content;
              &.visited {
                color: #464f59;
              }
            `}
          >
            email
          </a>
          <a
            href="https://linkedin.com/in/robertohhr"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              font-size: 1rem;
              font-weight: 300;
              color: #464f59;
              text-decoration: none;
              padding: 10px 0;
              width: max-content;
              &.visited {
                color: #464f59;
              }
            `}
          >
            linkedin
          </a>
          <a
            href="https://twitter.com/hallorob"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              font-size: 1rem;
              font-weight: 300;
              color: #464f59;
              text-decoration: none;
              padding: 10px 0;
              width: max-content;
              &.visited {
                color: #464f59;
              }
            `}
          >
            twitter
          </a>
        </div>
        <p
          className="author-footer"
          css={css`
            position: absolute;
            bottom: 55px;
            right: 30px;
            font-size: 0.8rem;
            font-weight: lighter;
            font-family: "Roboto Mono", monospace;
          `}
        >
          Made with 💙 by{" "}
          <a
            href="https://github.com/robhhr"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: #464f59;
            `}
          >
            Roberto
          </a>
        </p>
      </section>
    </Layout>
  )
}

export default Home
