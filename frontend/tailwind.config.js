/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        cardBg: "rgba(30, 41, 59, 0.7)",
        primary: "#6366f1",
        secondary: "#ec4899",
      }
    },
  },
  plugins: [],
}
