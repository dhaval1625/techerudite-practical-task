/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          DEFAULT: '#FF6400'
        },
        gray: {
          DEFAULT: '#232323',
          100: '#606060',
          200: '#263238',
        },
        blue: {
          DEFAULT: "#3D5FDD",
          100: '#90A4AE',
          200: '#E7F1F2',
          300: '#00D5F8'
        },
        red: {
          DEFAULT: '#D0021B'
        }
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}