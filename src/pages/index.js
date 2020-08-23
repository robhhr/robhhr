import React, {useState} from 'react'
import {NavBar, SEO, Wrapper} from '../components'
import {ThemeProvider} from 'styled-components'
import {darkTheme, defaultTheme} from '../utils'
import ThemeButton from '../assets/moon.svg'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <Wrapper>
        <NavBar />
        <SEO title="web developer" />
        <p>new site</p>
        <img src={ThemeButton} onClick={() => setIsDarkTheme(!isDarkTheme)} />
        <p>{isDarkTheme ? 'dark theme enabled' : 'dark theme disabled'}</p>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
