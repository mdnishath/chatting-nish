/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      fontFamily: {
        work: ["Work Sans", " sans-serif"],
      },
      colors: {
        primary: "#6C63FF",
      },
      boxShadow: {
        all: "0px 0px 40px -1px rgba(108,99,255,0.2)",
        btn: "0px 5px 20px -1px rgba(108,99,255,0.7)",
      },
    },
  },
  plugins: [],
};
