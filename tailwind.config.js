/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: 'Monument Extended',
        'monument': ['Monument', 'serif'],
      },
      colors: {
        overlay: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color as needed
      },
    },
  },
  plugins: [],
}

