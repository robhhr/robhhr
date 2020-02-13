import React from "react"
import { Project } from "../components"

const ProjectSection = () => (
  <>
    <Project
      title="R10 App"
      link="https://github.com/robhhr/R10"
      description="iOS/Android app for an upcoming tech conference"
      tech={["React Native", "GraphQL", "Apollo"]}
      github="https://github.com/robhhr/R10"
    />
    <Project
      title="Boomtown"
      link="https://github.com/robhhr/boomtown"
      description="Full-stack site to share and borrow items between users"
      tech={[
        "React",
        "NodeJS",
        "Express",
        "Postgres",
        "GraphQL",
        "Apollo",
        "Material UI",
      ]}
      github="https://github.com/robhhr/boomtown"
    />
    <Project
      title="Inhabitent"
      link="https://github.com/robhhr/inhabitent-site"
      description="WP-based theme inspired by the outdoors and active lifestyle made w/ custom plugins and post types "
      tech={["HTML5", "WordPress", "PHP", "JS", "CSS3", "Sass"]}
      github="https://github.com/robhhr/inhabitent-site"
      site="http://tent.academy.red"
    />
    <Project
      title="Coral"
      link="https://github.com/robhhr/coral"
      description="Coral is a beautiful, powerful full-stack writing app for personal and collaborative notes"
      tech={["React", "Meteor", "MongoDB", "Ant Design"]}
      github="https://github.com/robhhr/coral"
    />
    <Project
      title="Instanews"
      link="https://github.com/robhhr/instanews-app"
      description="New York Times News API front-end"
      tech={["HTML5", "CSS", "Sass", "JavaScript", "jQuery"]}
      github="https://github.com/robhhr/instanews-app"
      site="https://robhhr.github.io/instanews-app/"
    />
    <Project
      title="Beyond the Conversation"
      link="https://github.com/robhhr/beyond-ws1-2019"
      description="Custom WP theme for the volunteer-led initiative Beyond the Conversation"
      tech={["WordPress", "PHP", "Sass", "JavaScript", "jQuery"]}
      github="https://github.com/robhhr/beyond-ws1-2019"
      site="https://beyond.van.cp.academy.red/"
    />
  </>
)

export default ProjectSection
