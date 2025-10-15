import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#FAF8F6',
          100: '#F3EFE9',
          200: '#E8E0D6',
          300: '#D4C5B0',
          400: '#C4B5A0',
          500: '#A99B86',
          600: '#8E806C',
          700: '#6B5E4F',
          800: '#4A4139',
          900: '#2D2822',
          DEFAULT: '#C4B5A0',
        },
        red: {
          50: '#FEF2F3',
          100: '#FCE4E6',
          200: '#F9C9CD',
          300: '#E85D66',
          400: '#D13D47',
          500: '#B32D37',
          600: '#951E27',
          700: '#7A1820',
          800: '#5E131A',
          900: '#3D0C11',
          DEFAULT: '#D13D47',
        },
        charcoal: '#2C2C2C',
        slate: '#4A4A4A',
        'gray-light': '#E8E6E3',
        'off-white': '#FAFAF8',
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(135deg, #D13D47 0%, #B32D37 100%)',
        'gradient-gold': 'linear-gradient(135deg, #A99B86 0%, #8E806C 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(44,44,44,0.4) 0%, rgba(44,44,44,0.7) 100%)',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 3vw + 0.5rem, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.5rem, 2vw + 0.5rem, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

export default config

