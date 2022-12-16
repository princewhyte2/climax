/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/loginBg.svg')",
        "conva-bg": "url('/convaBg.svg')",
      },
    },
  },
  plugins: [],
};
