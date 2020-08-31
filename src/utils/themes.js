import {blue, dark, green, neutral, pink, red} from './colors'
import {primaryFont} from './typography'

export const defaultTheme = {
  primaryColor: dark[400],
  primaryColorHover: blue[300],
  backgroundColor: neutral[200],
  profileBackground: neutral[200],
  textColor: dark[400],
  iconColor: dark[400],
  summaryColor: blue[300],
  primaryFont,
}

export const darkTheme = {
  primaryColor: neutral[200],
  primaryColorHover: blue[200],
  backgroundColor: dark[300],
  profileBackground: neutral[200],
  textColor: neutral[300],
  iconColor: neutral[200],
  summaryColor: pink[400],
  primaryFont,
}

export const greenTheme = {
  primaryColor: green[100],
  primaryColorHover: pink[300],
  backgroundColor: green[600],
  profileBackground: green[100],
  textColor: green[100],
  iconColor: green[200],
  summaryColor: green[200],
  primaryFont,
}

export const blueTheme = {
  primaryColor: blue[100],
  primaryColorHover: blue[300],
  backgroundColor: blue[500],
  profileBackground: blue[200],
  textColor: blue[100],
  iconColor: blue[200],
  summaryColor: blue[200],
  primaryFont,
}

export const redTheme = {
  primaryColor: pink[200],
  primaryColorHover: red[100],
  backgroundColor: red[400],
  profileBackground: pink[500],
  textColor: pink[300],
  iconColor: pink[500],
  summaryColor: pink[500],
  primaryFont,
}
