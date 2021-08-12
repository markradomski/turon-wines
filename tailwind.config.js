const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "3rem 1fr 6rem",
        container: "1fr 10rem",
      },
      fontFamily: {
        inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
