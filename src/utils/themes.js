import {blue, dark, green, neutral, pink, red} from './colors'
import {primaryFont} from './typography'

export const defaultTheme = {
  primaryColor: dark[400],
  primaryColorHover: blue[300],
  backgroundColor: neutral[200],
  textColor: dark[400],
  primaryFont,
}

export const darkTheme = {
  primaryColor: neutral[200],
  primaryColorHover: blue[200],
  backgroundColor: dark[400],
  textColor: neutral[200],
  primaryFont,
}

export const greenTheme = {
  primaryColor: green[100],
  primaryColorHover: green[300],
  backgroundColor: green[600],
  textColor: green[100],
  primaryFont,
}

export const blueTheme = {
  primaryColor: blue[100],
  primaryColorHover: blue[300],
  backgroundColor: blue[400],
  textColor: blue[100],
  primaryFont,
}

export const redTheme = {
  primaryColor: pink[200],
  primaryColorHover: red[100],
  backgroundColor: red[400],
  textColor: pink[200],
  primaryFont,
}
