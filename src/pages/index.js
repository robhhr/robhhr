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
import { Bio, Section, Summary, SummarySkills } from "../components/Typography"

const App = () => (
  <>
    <NavBar />
    <Wrapper>
      <SEO title="web developer" />
      <Summary>
        I'm Roberto, a <span style={{ color: "#fc3565" }}> developer</span>{" "}
        based in Vancouver
      </Summary>
      <Bio>
        I am a design-oriented Web Developer with a passion for building safer,
        faster and more accessible web content. I strive to build immersive and
        efficient web applications, which is where my passion for design and
        development converge.
      </Bio>
      <SummarySkills>
        React/React Native, Node, GraphQL, PostgreSQL/MongoDB
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
