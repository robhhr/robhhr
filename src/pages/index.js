import React from "react"
import {
  Author,
  Button,
  Contact,
  Footer,
  NavBar,
  ProjectSection,
  SEO,
  Wrapper,
} from "../components"
import { Section, Summary, SummarySkills } from "../components/Typography"

const App = () => (
  <>
    <NavBar />
    <Wrapper>
      <SEO title="web developer" />
      <Summary>
        Hello! I'm Roberto, a{" "}
        <span style={{ color: "#fc3565" }}>web developer</span> living in
        Vancouver
      </Summary>
      <SummarySkills>
        React/React Native, Node, GraphQL, MySQL/MongoDB
      </SummarySkills>
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
    </Wrapper>
    <Footer />
  </>
)

export default App
