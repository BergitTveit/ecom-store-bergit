// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#075985",
        secondary: "",
        black: "#333333",
        hover: "#fe3a64",
        blueForest: "#207178",
        error: "#b91c1c",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
