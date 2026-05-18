/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#A855F7",
        dark: {
          bg: "#0B0B0F",
          card: "rgba(255, 255, 255, 0.04)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        light: {
          bg: "#F9FAFB",
          card: "rgba(255, 255, 255, 0.7)",
          border: "rgba(0, 0, 0, 0.05)",
        }
      },
      borderRadius: {
        'premium': '24px',
      },
      animation: {
        'glow': 'glow 3s infinite alternate',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
