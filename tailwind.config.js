/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56",
        },
        fontFamily: {
          openSans: ["Open Sans", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
        },
      }
    },
  },
  plugins: [],
}

