/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      colors:{
        background: "#dfdfdf",
        backgroundDark:"#262626",
        darkPrimary : "#262626",
        primaryDark : "#262626",
        primary : " #dfdfdf",
        darkBorder: "#404040",
        borderDark: "#404040",
        primaryBorder: "#b7b6b6",
        border: "#b7b6b6",
        subtext:"#797E87"
      }
    },
  },
  plugins: [],
}