/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        newBlue: {
          Cornflower: "#6992FB",
          Dodger: "#2F64F7",
        },
        Solitude: "#E6EEFE",
        LinkWater: "#eeedfb",
      },
    },
  },
  plugins: [],
};
