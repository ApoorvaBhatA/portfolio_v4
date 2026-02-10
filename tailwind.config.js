/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        text: "#480f00",
        muted: "#7a3a2f",
        accent: "#007bff",
        accentHover: "#b8445a",
        hoverBg: "#C8C8CE",
        border: "#f2c2cc",
      },
    },
  },
  plugins: [],
};
