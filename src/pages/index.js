import React, {useState} from 'react'
import {NavBar, SEO, ThemeToggler, Wrapper} from '../components'
import {ThemeProvider} from 'styled-components'
import {
  darkTheme,
  defaultTheme,
  greenTheme,
  blueTheme,
  redTheme,
} from '../utils'

const App = () => {
  const [theme, setTheme] = useState('default')
  const toggleTheme = () => {
    if (theme === 'default') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('green')
    } else if (theme === 'green') {
      setTheme('blue')
    } else if (theme === 'blue') {
      setTheme('red')
    } else if (theme === 'red') {
      setTheme('default')
    }
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
        <NavBar />
        <ThemeToggler onClick={toggleTheme} />
        <SEO title="web developer" />
        <p>new site</p>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
