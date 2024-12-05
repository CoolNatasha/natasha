/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      maxWidth: {
        'headerContainer': '1270px',
      },

      colors:{
        btnhover:"#F5C362"
      },

      fontFamily:{
        'karla':["Karla"],
        'pop' :["Poppins"],
      },



    },
  },
  plugins: [],
}

