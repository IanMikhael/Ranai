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
        // --- WARNA BAWAAN (Jangan Dihapus) ---
        "primary": "#0052FF",
        "secondary-fixed-dim": "#00dce5",
        "on-secondary-fixed": "#002021",
        "surface": "#131313",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c3c5d9",
        "surface-container-lowest": "#0e0e0e",
        
        // --- TAMBAHAN UNTUK VIBE KINGS & QUEENS + QROWD ---
        "gold": {
          DEFAULT: "#D4AF37", // Emas klasik yang elegan
          light: "#F3E5AB",   // Emas muda untuk highlight teks
        },
        "tosca": {
          DEFAULT: "#00dce5", // Menyamakan dengan secondary-fixed-dim
          dim: "rgba(0, 220, 229, 0.15)", // Transparan untuk efek glow/gradasi
        },
        "charcoal": {
          DEFAULT: "#111111", // Hitam bertekstur
          dark: "#0a0a0a",    // Hitam pekat untuk sudut gradasi
        }
      },
      fontFamily: {
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
      },
      // TAMBAHAN ANIMASI MARQUEE DI SINI 👇
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
      // SAMPAI SINI 👆
    },
  },
  plugins: [],
}