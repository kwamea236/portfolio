/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons"
      },

      screens:{
        sm:"480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      }
    },
  },
  plugins: [],
}
