import plugin from 'tailwindcss/plugin'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#0a0a0a',
      },
      fontFamily: {
        'ms-sans-serif': ['MS Sans Serif', 'sans-serif'],
      },
      backgroundColor: {
        obsidian: '#151615',
        silver: '#C0C0C0',
      },
      backgroundImage: {
        'title-bar': 'linear-gradient(90deg,navy,#1084d0)',
        'title-bar-error': 'linear-gradient(90deg,#ff2727,#ff8989)',
      },
      boxShadow: {
        input:
          'inset -1px -1px #fff,inset 1px 1px grey,inset -2px -2px #dfdfdf,inset 2px 2px #0a0a0a',
        'button-admin':
          'inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf',
        'button-admin-pressed':
          'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',
        window:
          'inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff',
      },
      textShadow: {
        button: '0 0 #222',
        'button-disabled': '1px 1px 0 #fff',
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}) {
      const newUtilities = {
        '.text-shadow-button': {
          textShadow: '0 0 #222',
        },
        '.text-shadow-button-disabled': {
          textShadow: '1px 1px 0 #fff',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}

