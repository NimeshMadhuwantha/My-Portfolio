/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // This adds !important to all Tailwind utilities
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Ensure Tailwind scans all your JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
