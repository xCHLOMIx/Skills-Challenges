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
<<<<<<< HEAD
        primary : '#2B71F0',
        secondary: '#03192E',
        offwhite : '#F9FAFB',
        open:"#0F973D",
        
=======
        primary : "#2B71F0",
        "light-blue" : "#D0E0FC",
        "white-blue" : "#E7F6EC",
        offwhite : "#F9FAFB",
        'slate-dark' : "#475367",
        'slate-light' : "#E4E7EC"
>>>>>>> f54de3df465c8a5b1482dfe5866d698ba79ee639
      }
    },
  },
  plugins: [],
}