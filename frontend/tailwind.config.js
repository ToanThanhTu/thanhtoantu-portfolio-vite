/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#f5f5f0',
          white: '#FFFFFF',
          black: '#000000',
        },
        secondary: {
          100: '#f0f7f0',
        },
        tertiary: {
          100: '#f0f0f7',
        }
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        'header-1': ['3rem', { lineHeight: '3.5rem' }],
        'header-2': ['2rem', { lineHeight: '2.5rem' }],
        'header-3': ['1.75rem', { lineHeight: '2rem' }],
        'header-4': ['1.5rem', { lineHeight: '1.5rem' }],
      },
      borderRadius: {
        'sm': '0.25rem',
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
    plugins: [],
  }
}
