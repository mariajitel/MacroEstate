/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {},
    screens: {
      'sb': {'raw': '(min-width: 541px) and (max-width:844px)'},
      'sl': {'raw': '(min-width: 200px) and (max-width:540px)'},
      'sx': {'raw': '(min-width:845px) and (max-width:1680px)'}
    },
    colors: {
    },
    extend: {
      width: {
      },
      height: {
      },
      blur: {
      },
      padding: {
      }
    },
  },
  plugins: [],
}

