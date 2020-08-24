import React, {useState, useEffect} from 'react'
import {NavBar, SEO, ThemeToggler, Wrapper} from '../components'
import {ThemeProvider} from 'styled-components'
import {
  darkTheme,
  defaultTheme,
  greenTheme,
  blueTheme,
  redTheme,
} from '../utils'

const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
const savedTheme = localStorage.getItem('theme')

const App = () => {
  const [theme, setTheme] = useState(
    savedTheme ? savedTheme : darkThemeQuery.matches ? darkTheme : 'default',
  )
  useEffect(() => {
    darkThemeQuery.addListener(event => {
      setTheme(event.matches ? 'dark' : 'default')
    })
  }, [])
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'dark' : 'default'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    // if (theme === 'default') {
    //   setTheme('dark')
    // } else if (theme === 'dark') {
    //   setTheme('green')
    // } else if (theme === 'green') {
    //   setTheme('blue')
    // } else if (theme === 'blue') {
    //   setTheme('red')
    // } else if (theme === 'red') {
    //   setTheme('default')
    // }
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
