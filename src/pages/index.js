import React from "react"
import {
  Button,
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
      <Section>Skillset</Section>
      <Section>Contact</Section>
    </Layout>
    <Footer />
  </>
)

export default App
