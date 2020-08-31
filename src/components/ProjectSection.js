import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const Section = styled.div`
  padding: 0 5px;
`

const Title = styled.h1`
  font-size: 1.5rem;
  padding-top: 10px;
`

const ProjectSection = () => {
  return (
    <Section>
      <Title>Projects</Title>
      <Project
        title="react native palettes"
        description="React Native iOS/Android custom color palette creator built w/ React Native"
        repo="https://github.com/robhhr/react-native-palettes"
      />
      <Project
        title="design system"
        description="A mini design system example for reusable UI components. Made w/ React, Storybook and Styled Components"
        repo="https://github.com/robhhr/design-system"
        live="https://my-design-system.netlify.app/"
      />
      <Project
        title="redux state counter"
        description="React state counter widget made with React and Redux"
        repo="https://github.com/robhhr/redux-state-counter"
        live="https://robhhr.github.io/redux-state-counter/"
      />
      <Project
        title="R10"
        description="React Native iOS/Android app for an upcoming tech conference"
        repo="https://github.com/robhhr/R10"
      />
      <Project
        title="kindred notes"
        description="React Native iOS/Android app for sharing and receiving kind messages with other users"
        repo="https://github.com/robhhr/kindred-notes"
      />
      <Project
        title="inhabitent"
        description="WP-based theme inspired by the outdoors and active lifestyle"
        repo="https://github.com/robhhr/inhabitent-site"
      />
    </Section>
  )
}

export default ProjectSection
