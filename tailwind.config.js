/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', '**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        lime: '#d7da2f'
      }
    },
  },
  plugins: [],
};
