/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
        dancing: ['"Dancing Script"', 'cursive']
      },
      colors:{
        myRed: "#DF0E62",
        myYellow: "#FAC70B",
        myGreen: "#127681",
        myDark: "#21174A"
      }
    },

    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px"
    }
  },
  plugins: [],
}
