/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      aspectRatio: {
        'w-4': 4,
        'h-3': 3,
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.aspect-w-4': {
          aspectRatio: '4 / 3',
        },
        '.aspect-h-3': {
          aspectRatio: '4 / 3',
        },
      });
    },
  ],
};
