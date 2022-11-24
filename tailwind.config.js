/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 3px 3px rgba(0, 0, 0, 0.4)',
      }
    }
  },
  plugins: [],
}
