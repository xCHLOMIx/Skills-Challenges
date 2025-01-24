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
        primary : "#2B71F0",
        "light-blue" : "#D0E0FC",
        "white-blue" : "#E7F6EC",
        offwhite : "#F9FAFB",
        'slate-dark' : "#475367",
        'slate-light' : "#E4E7EC"
      }
    },
  },
  plugins: [],
}