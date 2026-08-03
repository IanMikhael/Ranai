/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0052FF",
        "secondary-fixed-dim": "#00dce5",
        "on-secondary-fixed": "#002021",
        "surface": "#131313",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c3c5d9",
        "surface-container-lowest": "#0e0e0e",
        // ... (Kamu bisa tambahkan warna lain dari script config Stitch jika perlu, 
        // tapi ini warna-warna utamanya agar tampilannya tidak hancur)
      },
      fontFamily: {
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}