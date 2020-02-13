import React from "react"
import {
  Author,
  Button,
  Contact,
  Footer,
  layout,
  NavBar,
  ProjectSection,
  SEO,
} from "../components"
import { Section, Summary } from "../components/Typography"

const App = () => (
  <>
    <NavBar />
    <layout>
      <SEO title="web developer" />
      <Summary>
        Hello! I'm Roberto, a{" "}
        <span style={{ color: "#fc3565" }}>web developer</span> living in
        Vancouver
      </Summary>
      <div>
        <Section>Featured Projects</Section>
        <ProjectSection />
        <Button link="https://github.com/robhhr">More Projects</Button>
      </div>
      <div style={{ margin: "40px 0" }}>
        <Section>Contact</Section>
        <Contact />
      </div>
      <Author />
    </layout>
    <Footer />
  </>
)

export default App
