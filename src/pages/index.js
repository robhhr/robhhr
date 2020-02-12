import React from "react"
import { Footer, Layout, NavBar, SEO } from "../components"
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
      <Section>Featured Projects</Section>
    </Layout>
    <Footer />
  </>
)

export default App
