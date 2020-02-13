import React from "react"
import { Author, Footer, Layout, NavBar } from "../components"
import { AboutLink, Description, Section } from "../components/Typography"

const About = () => {
  return (
    <>
      <NavBar />
      <Layout>
        <Section>About</Section>
        <Description>
          I am a design-oriented Web Developer with a passion for building
          safer, faster and more accessible web content. I strive to build
          immersive and efficient web applications, which is where my passion
          for design and development converge
        </Description>
        <Description>
          {" "}
          See my previous work history on{" "}
          <AboutLink link="https://linkedin.com/in/roberto-h">
            LinkedIn
          </AboutLink>{" "}
          and check out my latest work on{" "}
          <AboutLink link="https://github.com/robhhr">Github</AboutLink>.
          Occassionally you can see me retweeting interesting stuff in my{" "}
          <AboutLink link="https://twitter.com/hallorob">Twitter</AboutLink>
        </Description>
        <Author />
      </Layout>
    </>
  )
}

export default About
