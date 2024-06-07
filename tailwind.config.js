/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppines: ["Poppins", "sans-serif"],
      },
      colors: {
        "bg-color": "#091420",
        "bg-dark-color": "#0c1a28",
        "primary-color": "#4fe98c",
      },
    },
  },
  plugins: [],
};
