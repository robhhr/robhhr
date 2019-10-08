import React from "react"
import Layout from "../pages/components/layout"
import Particles from "react-particles-js"

const Home = () => {
  return (
    <Layout style={{ position: "relative", height: "100vh" }}>
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
              },
            },
          },
        }}
      />
      <h1 style={{ position: "absolute", top: 0 }}>Hello world!</h1>
    </Layout>
    // </Particles>
  )
}

export default Home
