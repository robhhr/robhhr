import {useEffect, useState} from 'react'

export const useCustomTheme = () => {
  const [theme, setTheme] = useState('default')
  const toggleTheme = () => {
    if (theme === 'default') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else if (theme === 'dark') {
      window.localStorage.setItem('theme', 'green')
      setTheme('green')
    } else if (theme === 'green') {
      window.localStorage.setItem('theme', 'blue')
      setTheme('blue')
    } else if (theme === 'blue') {
      window.localStorage.setItem('theme', 'red')
      setTheme('red')
    } else {
      window.localStorage.setItem('theme', 'default')
      setTheme('default')
    }
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])
  return [theme, toggleTheme]
}
