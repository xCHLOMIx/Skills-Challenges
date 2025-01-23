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
        offwhite : "#F9FAFB"
      }
    },
  },
  plugins: [],
}