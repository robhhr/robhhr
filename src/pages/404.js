import React from "react"

import layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </layout>
)

export default NotFoundPage
