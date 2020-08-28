import React, {useState, useEffect} from 'react'
import {NavBar, SEO, Wrapper} from '../components'
import styled, {ThemeProvider} from 'styled-components'
import {
  darkTheme,
  defaultTheme,
  greenTheme,
  blueTheme,
  redTheme,
  ParticlesCanvas,
} from '../utils'

const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
const greenThemeQuery = window.matchMedia('(prefers-color-scheme: green)')
const blueThemeQuery = window.matchMedia('(prefers-color-scheme: blue)')
const redThemeQuery = window.matchMedia('(prefers-color-scheme: red)')
const savedTheme = localStorage.getItem('theme')

const SummaryTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
  padding: 0 5px;
`

const Summary = styled.p`
  font-size: 1.12rem;
  padding: 0 5px;
`

const SummaryTech = styled.p`
  font-size: 0.9rem;
  padding: 0 5px;
  font-style: italic;
  color: ${props => props.theme.primaryColorHover};
`

const SkillTitle = styled.h1`
  font-size: 1.3rem;
  padding: 10px 5px;
`

const App = () => {
  const [theme, setTheme] = useState(
    savedTheme
      ? savedTheme
      : darkThemeQuery.matches
      ? darkTheme
      : greenThemeQuery.matches
      ? greenTheme
      : blueThemeQuery.matches
      ? blueTheme
      : redThemeQuery.matches
      ? redTheme
      : 'default',
  )
  useEffect(() => {
    darkThemeQuery.addListener(e => {
      setTheme(e.matches ? 'dark' : 'default')
    })
  }, [])
  useEffect(() => {
    greenThemeQuery.addListener(e => {
      setTheme(e.matches ? 'green' : 'default')
    })
  }, [])
  useEffect(() => {
    blueThemeQuery.addListener(e => {
      setTheme(e.matches ? 'blue' : 'default')
    })
  }, [])
  useEffect(() => {
    redThemeQuery.addListener(e => {
      setTheme(e.matches ? 'red' : 'default')
    })
  }, [])
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme =
      theme === 'default'
        ? 'dark'
        : theme === 'dark'
        ? 'green'
        : theme === 'green'
        ? 'blue'
        : theme === 'blue'
        ? 'red'
        : 'default'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeProvider
      theme={
        theme === 'default'
          ? defaultTheme
          : theme === 'dark'
          ? darkTheme
          : theme === 'green'
          ? greenTheme
          : theme === 'blue'
          ? blueTheme
          : theme === 'red'
          ? redTheme
          : defaultTheme
      }
    >
      {theme === 'default' ? <ParticlesCanvas /> : null}
      <Wrapper>
        <NavBar onClick={toggleTheme} />
        <SEO title="full-stack developer" />
        <SummaryTitle>Hello, I'm Roberto</SummaryTitle>
        <Summary>Full-stack developer. Based in Vancouver, CA</Summary>
        <Summary>
          I am a design-oriented developer, passionate for building safer,
          faster and more accessible web content
        </Summary>
        <SummaryTech>
          React/React Native, Redux, NodeJS, GraphQL, PostgreSQL/MongoDB
        </SummaryTech>
        <SkillTitle>Projects</SkillTitle>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
