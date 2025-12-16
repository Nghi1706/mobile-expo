/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#22C55E",
        danger: "#EF4444",
        background: "#F9FAFB",
        text: "#111827",
      },
      spacing: {
        safe: 44,
      },
      borderRadius: {
        xl: 16,
        "2xl": 24,
      },
    },
  },
  plugins: [],
};
