import React from 'react'
import {Contact, NavBar, ProjectSection, SEO, Wrapper} from '../components'
import styled, {ThemeProvider} from 'styled-components'
import {useDarkMode} from '../hooks/useDarkMode'
import {darkTheme, defaultTheme, ParticlesCanvas} from '../utils'

const SummarySection = styled.div`
  padding: 0 5px;
  padding-bottom: 1rem;
  @media (min-width: 1000px) {
    padding-top: 0.5rem;
    padding-bottom: 3rem;
  }
`

const SummaryTech = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: ${props => props.theme.summaryColor};
  @media (min-width: 1000px) {
    font-size: 1.15rem;
  }
`

const SummaryTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
  @media (min-width: 1000px) {
    font-size: 1.7rem;
  }
`

const Summary = styled.p`
  font-size: 1.12rem;
  @media (min-width: 1000px) {
    font-size: 1.25rem;
  }
`

const App = () => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'default' ? defaultTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      {theme === 'default' ? <ParticlesCanvas /> : null}
      <Wrapper>
        <NavBar onClick={toggleTheme} />
        <SEO title="full-stack developer" />
        <SummarySection>
          <SummaryTitle>Hello, I'm Roberto</SummaryTitle>
          <Summary>Full-stack developer. Based in Vancouver, CA</Summary>
          <Summary>
            I am a design-oriented developer, striving for building safer,
            faster and more accessible web content
          </Summary>
          <SummaryTech>
            React/React Native, Redux, NodeJS, GraphQL, PostgreSQL/MongoDB
          </SummaryTech>
        </SummarySection>
        <ProjectSection />
        <Contact />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
