/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas'],
      },
      colors: {
        bg: {
          50:  'var(--bg-50)',
          100: 'var(--bg-100)',
          200: 'var(--bg-200)',
          800: 'var(--bg-800)',
          950: 'var(--bg-950)',
        },
        text: {
          50:  'var(--text-50)',
          900: 'var(--text-900)',
          950: 'var(--text-950)',
        },
        border: {
          100: 'var(--border-100)',
          950: 'var(--border-950)',
        },
        primary: 'var(--primary)',
      },
      screens: {
        'xs':  '30em',
        'sm':  '37.5em',
        'md':  '48em',
        'lg':  '64em',
        'xl':  '71.25em',
        '2xl': '95.5em',
        '3xl': '120em',
      },
      maxWidth: {
        text:    '56ch',
        heading: '30ch',
      },
      transitionTimingFunction: {
        'primary': 'cubic-bezier(0.68, 0, 0.1, 1)',
      },
      transitionDuration: {
        '300':  '0.3s',
        '600':  '0.6s',
        '1300': '1.3s',
      },
      animation: {
        'beacon':      'Badge-beacon-fade 1.3s linear infinite',
        'fade-up':     'fade-up 0.8s cubic-bezier(0.68, 0, 0.1, 1) both',
        'splash-text': 'Splash-text 0.8s cubic-bezier(0.68, 0, 0.1, 1) both',
      },
    },
  },
  plugins: [],
}
