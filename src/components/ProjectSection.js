import React from "react"
import { Project } from "../components"
import styled from "styled-components"

const Container = styled.div`
  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 2rem;
    padding: 0;
    justify-content: center;
  }
`

const ProjectSection = () => (
  <Container>
    <Project
      title="Kindred Notes"
      link="https://github.com/redacademy/KindredNotes-WS2-2019"
      description="Full-stack native app for sharing kind messages with people"
      tech={["React Native", "GraphQL", "Apollo", "Prisma"]}
      github="https://github.com/redacademy/KindredNotes-WS2-2019"
    />
    <Project
      title="R10 App"
      link="https://github.com/robhhr/R10"
      description="iOS/Android app for an upcoming tech conference"
      tech={["React Native", "GraphQL", "Apollo"]}
      github="https://github.com/robhhr/R10"
    />
    <Project
      title="Inhabitent"
      link="https://github.com/robhhr/inhabitent-site"
      description="WP-based theme inspired by the outdoors and active lifestyle made w/ custom plugins and post types "
      tech={["JavaScript", "WordPress", "PHP", "CSS3", "Sass"]}
      github="https://github.com/robhhr/inhabitent-site"
      site="http://tent.academy.red"
    />
    <Project
      title="Boomtown"
      link="https://github.com/robhhr/boomtown"
      description="Full-stack site to share and borrow items between users"
      tech={["React", "NodeJS", "PostgreSQL", "GraphQL", "Apollo"]}
      github="https://github.com/robhhr/boomtown"
    />
    <Project
      title="Coral"
      link="https://github.com/robhhr/coral"
      description="Coral is a beautiful, powerful full-stack writing app for personal and collaborative notes"
      tech={["React", "Meteor", "MongoDB"]}
      github="https://github.com/robhhr/coral"
    />
    <Project
      title="Instanews"
      link="https://github.com/robhhr/instanews-app"
      description="New York Times News API front-end"
      tech={["JavaScript", "CSS3", "Sass", "jQuery"]}
      github="https://github.com/robhhr/instanews-app"
      site="https://robhhr.github.io/instanews-app/"
    />
    <Project
      title="Beyond the Conversation"
      link="https://github.com/robhhr/beyond-ws1-2019"
      description="Custom WP theme for the volunteer-led initiative Beyond the Conversation"
      tech={["JavaScript", "WordPress", "PHP", "CSS3", "Sass"]}
      github="https://github.com/robhhr/beyond-ws1-2019"
      site="https://beyond.van.cp.academy.red/"
    />
  </Container>
)

export default ProjectSection
