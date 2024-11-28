/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fe3a64",
        secondary: "#f090fc",
        black: "#333333",
        hover: "#fe3a64",
        blueForest: "#207178",
        error: "#dc3545",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
