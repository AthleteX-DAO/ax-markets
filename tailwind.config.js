/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            gold: {
              100: '#FFF9E6',
              200: '#FFEEB8',
              300: '#FFE38A',
              400: '#FFD75C',
              500: '#FFCC2E', // Primary gold
              600: '#E6B829',
              700: '#CCA324',
              800: '#B38F1F',
              900: '#997A1A',
            },
          },
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'serif'], // Luxe serif font
          },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        dropShadow: {
            'glow': '0 0 8px rgba(59, 130, 246, 0.6)',
          },
        borderRadius: {
          '4xl': '2rem',
        },
        colors: {
            gold: {
              400: '#FFD700',
              500: '#D4AF37',
            },
          },
          boxShadow: {
            'gold-md': '0 4px 15px -3px rgba(212, 175, 55, 0.3)',
            'gold-lg': '0 10px 25px -5px rgba(212, 175, 55, 0.4)',
          },
      }
    },
  }