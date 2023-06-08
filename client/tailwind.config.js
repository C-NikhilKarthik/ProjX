/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#64FFDD',
        'primary-light': '#64FFDD24',
      }
    },
  },
  plugins: [],
}