const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        primary: ["Alegreya Sans", "sans-serif"],
      },
      colors: {
        brand: {
          yellow: "#fcbd02",
          "gray-100": "#F7F7F7",
          "gray-300": "#ededed",
          "gray-500": "#9e9e9e",
          "gray-900": "#535353",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
