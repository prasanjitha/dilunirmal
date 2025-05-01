// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
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
  