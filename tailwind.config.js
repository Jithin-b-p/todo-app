/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primaryBlue: "hsl(var(--color-primary-blue))",
        primaryCyan: "hsl(var(--color-primary-cyan))",
        primaryPurple: "hsl(var(--color-primary-purple))",

        light: {
          100: "hsl(var(--color-light-100))",
          200: "hsl(var(--color-light-200))",
          300: "hsl(var(--color-light-300))",
          400: "hsl(var(--color-light-400))",
          500: "hsl(var(--color-light-500))",
        },
        dark: {
          100: "hsl(var(--color-dark-100))",
          200: "hsl(var(--color-dark-200))",
          300: "hsl(var(--color-dark-300))",
          400: "hsl(var(--color-dark-400))",
          500: "hsl(var(--color-dark-500))",
          600: "hsl(var(--color-dark-600))",
          700: "hsl(var(--color-dark-700))",
        },
      },
    },
  },
  plugins: [],
};
