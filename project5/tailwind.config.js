/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "450px",
      md: "451px",
      lg: "976px",
      xl: "1440px",
    },
    backgroundPosition: {
      bottom: "bottom",
      "top-right-4": "top 1rem right  6rem",
      "right-top": "right top",
    },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      colors: {
        modViolet: "hsl(263, 55%, 52%)",
        borViolet: "#9167d3",
        VDGrayishBlue: "hsl(217, 19%, 35%)",
        VDBlackishBlue: "hsl(219, 29%, 14%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        Barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
    plugins: [],
  },
};
