import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           'rgb(var(--color-bg) / <alpha-value>)',
        'bg-subtle':  'rgb(var(--color-bg-subtle) / <alpha-value>)',
        'bg-card':    'rgb(var(--color-bg-card) / <alpha-value>)',
        surface:      'rgb(var(--color-surface) / <alpha-value>)',
        border:       'rgb(var(--color-border) / <alpha-value>)',
        text:         'rgb(var(--color-text) / <alpha-value>)',
        muted:        'rgb(var(--color-muted) / <alpha-value>)',
        accent:       'rgb(var(--color-accent) / <alpha-value>)',
        'accent-dim': 'rgb(var(--color-accent-dim) / <alpha-value>)',
        ember:        'rgb(var(--color-ember) / <alpha-value>)',
        sienna:       'rgb(var(--color-sienna) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        grotesk: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgb(var(--color-accent) / 0.15)',
        'glow-lg': '0 0 70px rgb(var(--color-accent) / 0.24)',
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.05em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
