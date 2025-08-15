/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-200": "#1a1a1a",
        "black-300": "#2a2a2a",
        "black-500": "#4a4a4a",
        "black-600": "#5a5a5a",
        "white-500": "#a0a0a0",
        "white-600": "#c0c0c0",
        "white-800": "#e0e0e0",
      },
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
