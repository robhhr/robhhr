import {useEffect, useState} from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('default')
  const toggleTheme = () => {
    if (theme === 'default') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
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
