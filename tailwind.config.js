export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
      colors: {
        scrollbarThumb: '#888', // Customize the scrollbar thumb color
        scrollbarThumbHover: '#555', // Customize the scrollbar thumb hover color
        scrollbarTrack: '#22223B', // Customize the scrollbar track color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar': {
          'overflow-y': 'auto',
          'scrollbar-width': 'thin', // For Firefox
          'scrollbar-color': '#888 #22223B', // For Firefox
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '12px',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          background: '#333',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '10px',
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      });
    },
  ],
}
