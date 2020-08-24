import React, {useState, useEffect} from 'react'
import {NavBar, SEO, Wrapper} from '../components'
import {ThemeProvider} from 'styled-components'
import {
  darkTheme,
  defaultTheme,
  greenTheme,
  blueTheme,
  redTheme,
} from '../utils'

const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
const greenThemeQuery = window.matchMedia('(prefers-color-scheme: green)')
const blueThemeQuery = window.matchMedia('(prefers-color-scheme: blue)')
const redThemeQuery = window.matchMedia('(prefers-color-scheme: red)')
const savedTheme = localStorage.getItem('theme')

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
      <Wrapper>
        <NavBar onClick={toggleTheme} />
        <SEO title="web developer" />
        <p>new site</p>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
