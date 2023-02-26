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
      animation:{
        "slow": "bounce 5s linear infinite"
      },
    },

    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px"
    }
  },
  plugins: [],
}
