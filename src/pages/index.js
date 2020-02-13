import React from "react"
import {
  Button,
  Contact,
  Footer,
  Layout,
  NavBar,
  ProjectSection,
  SEO,
} from "../components"
import { Section, Summary } from "../components/Typography"

const App = () => (
  <>
    <NavBar />
    <Layout>
      <SEO title="Roberto Hernandez | Web Developer" />
      <Summary>
        Hello! I'm Roberto, a{" "}
        <span style={{ color: "#fc3565" }}>web developer</span> based in
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
    </Layout>
    <Footer />
  </>
)

export default App
