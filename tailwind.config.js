/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6f61", // Coral
        secondary: "#4a90e2", // Sky Blue
        accent: "#7ed321", // Lime Green
        background: "#f7f9fc", // Soft White
        textPrimary: "#333333", // Dark Charcoal
        muted: "#c4c4c4", // Gray
        "glassy-green":
          "linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(0, 255, 0, 0.2))",
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive"],
    },
  },
  plugins: [],
};
