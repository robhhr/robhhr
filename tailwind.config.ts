import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ms-sans-serif': ['MS Sans Serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

