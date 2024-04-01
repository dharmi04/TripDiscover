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
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins:["Poppins", "sans-serif"]
      },
      backgroundImage: {
        // 'hero-pattern': "url('/src/assets/gateway.jpeg')",
        'hero-pattern': "url('/src/assets/Himalayas.jpg')",
        'India': "url('/src/assets/India2.jpeg')",
        'Background': "url('/src/assets/background.png')"
      },
      colors:{
        'primary': '#3c3b3b',
        'accent':'#333334',
        'indigo': "#104872",
        'light': '#D06B36'
      }
    },
  },
  plugins: [],
}

