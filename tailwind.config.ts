// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: "360px",
      // => @media (min-width: 360px) { ... }

      md: "600px",
      // => @media (min-width: 600px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "904px",
      // => @media (min-width: 904px) { ... }

      smallDesktop: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      keyframes: {
        zoomSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        bounceIn: {
          '0%':   { transform: 'scale(0)', opacity: 0 },
          '60%':  { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)',   opacity: 1 },
        },
      },
      animation: {
        zoomSlow: 'zoomSlow 20s ease-in-out infinite',
        bounceIn: 'bounceIn 1s ease-out',
      },
    },
  },
  plugins: [],
}
