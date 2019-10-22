import React from "react"
import { css } from "@emotion/core"
import Layout from "./components/layout"
import Particles from "react-particles-js"
import Projects from "./components/projects"

const Work = () => {
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
        <div
          className="contact-section"
          css={css`
            position: relative;
            padding: 20px 0;
            line-height: 1.8;
          `}
        >
          <h1
            className="index__section"
            css={css`
              font-size: 1.3rem;
              font-weight: 500;
              font-family: "Roboto Mono", monospace;
              letter-spacing: -0.5px;
            `}
          >
            Portfolio
          </h1>
          <section
            className="project__section"
            css={css`
              height: auto;
            `}
          >
            <Projects
              title="Personal Site"
              description="Personal static site built with Gatsby.js"
              url="https://github.com/robhhr/robhhr"
              skills={["HTML5", "CSS3", "JavaScript", "React.js", "Gatsby.js"]}
              live="https://robhhr.com"
            />
            <Projects
              title="Beyond The Conversation"
              description="Community project - site development for Beyond The Conversation 💬"
              url="https://github.com/robhhr/beyond-ws1-2019"
              skills={[
                "HTML5",
                "CSS3",
                "Sass",
                "JavaScript",
                "jQuery",
                "PHP",
                "WordPress",
              ]}
              live="https://beyond.van.cp.academy.red/"
            />
            <Projects
              title="Magic Toolbox"
              description="Multi-tool app with a digital clock, weather, unit convertor, to-do list
            and digital calculator 🧙"
              url="https://github.com/robhhr/magic-toolbox"
              skills={["HTML5", "CSS3", "Sass", "JavaScript"]}
              live="https://magic-toolbox.netlify.com/"
            />
            <Projects
              title="Recipe Finder"
              description="Recipe finder by ingredient made w/ React.js and Spoonacular Recipe API 🍜"
              url="https://github.com/robhhr/recipe-finder"
              skills={["HTML5", "Sass", "JavaScript", "React.js"]}
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
              title="Instanews App"
              description="New York Times top news fetcher with an easy-looking individual grid 📰"
              url="https://github.com/robhhr/instanews-app"
              skills={["HTML5", "CSS3", "Sass", "JavaScript", "jQuery"]}
              live="https://robhhr.github.io/instanews-app/"
            />
            <Projects
              title="Inhabitent"
              description="WP-based theme inspired by the outdoors and active lifestyle 🧗"
              url="https://github.com/robhhr/inhabitent-site"
              skills={[
                "HTML5",
                "CSS3",
                "Sass",
                "JavaScript",
                "PHP",
                "WordPress",
              ]}
              live="https://tent.academy.red/"
            />
            <Projects
              title="Quotes on Dev"
              description="WP-based random quote generator 💬"
              url="https://github.com/robhhr/quotes"
              skills={[
                "HTML5",
                "CSS3",
                "Sass",
                "JavaScript",
                "PHP",
                "WordPress",
              ]}
              live="https://quotes.academy.red/"
            />
            <Projects
              title="Aloha Apparel Co."
              description="Responsive e-commerce website inspired by the beach 🏖️"
              url="https://github.com/robhhr/aloha-project"
              skills={["HTML5", "CSS3", "Sass", "JavaScript"]}
              live="https://robhhr.github.io/aloha-project/"
            />
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default Work
