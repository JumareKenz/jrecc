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
        // Primary Palette
        'research-blue': {
          DEFAULT: '#0B3C5D',
          dark: '#0A2F4A',
          light: '#0D4A6F',
        },
        'impact-green': {
          DEFAULT: '#2E7D32',
          dark: '#1B5E20',
          light: '#388E3C',
        },
        'gold': {
          DEFAULT: '#F9A825',
          dark: '#F57F17',
          light: '#FBC02D',
        },
        // Secondary / Support
        'sky-blue': {
          DEFAULT: '#E3F2FD',
          light: '#F5FAFF',
        },
        'soft-grey': {
          DEFAULT: '#F4F6F8',
          dark: '#E8EBED',
        },
        'charcoal': {
          DEFAULT: '#263238',
          light: '#37474F',
          dark: '#1A2327',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
