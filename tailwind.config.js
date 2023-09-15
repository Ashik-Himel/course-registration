/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/*.jsx', 'src/**/*.jsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      }
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}

