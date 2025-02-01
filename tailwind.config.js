/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        f89633: "#F89633", // Custom orange color
        f78f30: "#F78F30", // Another custom orange shade
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};