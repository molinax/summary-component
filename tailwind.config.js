/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "red-hat-display": ["'Red Hat Display'", "sans-serif"]
      },
      colors: {
        "pale-blue": "var(--pale-blue)",
        "bright-blue": "var(--bright-blue)",
        "very-pale-blue": "var(--very-pale-blue)",
        "desaturated-blue": "var(--desaturated-blue)",
        "dark-blue": "var(--dark-blue)"
      }
    },
  },
  plugins: [],
}

