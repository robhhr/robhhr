import React from "react"
import { css } from "@emotion/core"
import Layout from "./components/layout"
import Particles from "react-particles-js"

export default () => (
  <Layout>
    <Particles
      css={css`
        position: absolute;
        height: 100%;
        z-index: -999;
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
        className="about-section"
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
          About me
        </h1>
        <p
          css={css`
            padding: 30px 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 1rem;
            font-weight: 300;
            line-height: 2;
          `}
        >
          I am a design-oriented front-end web developer with a passion for
          building safer, faster and more accesible web content. I strive to
          build immersive and efficient web applications, which is where my
          passion for design and development converge. <br />
          <div
            css={css`
              padding: 15px 0;
            `}
          >
            See my previous work history on{" "}
            <a href="https://linkedin.com/in/robertohhr" target="_blank">
              LinkedIn
            </a>{" "}
            and check out my latest work on{" "}
            <a href="https://github.com/robhhr" target="_blank">
              Github
            </a>
          </div>
        </p>
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
