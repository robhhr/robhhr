import React, {useState} from 'react'
import {NavBar, SEO, Wrapper} from '../components'
import {ThemeProvider} from 'styled-components'
import {
  darkTheme,
  defaultTheme,
  greenTheme,
  blueTheme,
  redTheme,
} from '../utils'
import ThemeButton from '../assets/moon.svg'

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
        <SEO title="web developer" />
        <p>new site</p>
        <img src={ThemeButton} alt="theme-button" onClick={toggleTheme} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
