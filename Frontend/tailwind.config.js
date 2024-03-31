/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Himalayas.jpg')",
        'India': "url('/src/assets/India2.jpeg')",
        'Background': "url('/src/assets/background.png')"
      },
      colors:{
        'primary': '#000000',
        'accent':'#59BBB6',
        'indigo': "#104872",
        'light': '#D06B36'
      }
    },
  },
  plugins: [],
}

