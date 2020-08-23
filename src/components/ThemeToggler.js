import React from 'react'
import {Moon} from '../assets/moon'

const ThemeToggler = ({onClick}) => {
  return (
    <div onClick={onClick}>
      <Moon />
    </div>
  )
}

export default ThemeToggler
