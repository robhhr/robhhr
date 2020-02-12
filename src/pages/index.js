import React from "react"
import { Footer, Layout, NavBar, SEO } from "../components"
import { Summary } from "../components/Typography"

const App = () => (
  <>
    <NavBar />
    <Layout>
      <SEO title="Roberto Hernandez | Web Developer" />
      <Summary>Hello! I'm Roberto, a web developer based in Vancouver</Summary>
    </Layout>
    <Footer />
  </>
)

export default App
