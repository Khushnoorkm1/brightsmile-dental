import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0b7a6e',
          light: '#0ea090',
          subtle: '#e6f5f3',
        },
        navy: '#0d2137',
        gold: '#c8920a',
        sand: '#f0ebe2',
        muted: '#6e6860',
        ink: '#0c0c0b',
        wa: '#25D366',
        'wa-dark': '#075E54',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config