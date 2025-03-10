/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        work : 'Work Sans'
      },
      colors : {
        primary : '#2B71F0',
        secondary: '#03192E',
        "dark-blue" : '#041738',
        offwhite : '#F9FAFB',
        open:"#0F973D",
        grey: "#F1F1F1",
        "gray-blue" : "#687588",
        "black-blue" : "#2B3338",
        "light-blue" : "#D0E0FC",
        "white-blue" : "#E7F6EC",
        offwhite : "#F9FAFB",
        'slate-dark' : "#475367",
        'slate-light' : "#E4E7EC",
        'slate-mid':'#8C94A6'
      }
    },
  },
  plugins: [],
}