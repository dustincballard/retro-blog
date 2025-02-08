/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        'mono': ['"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        'retro-yellow': '#ffde00',
        'retro-pink': '#ff69b4',
        'retro-green': '#98ff98',
      }
    },
  },
  plugins: [],
}
