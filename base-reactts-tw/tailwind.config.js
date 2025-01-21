/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        hand: ['Grape Nuts', 'Caveat', 'Segoe Print', 'Bradley Hand', 'Marker Felt', 'casual', 'cursive'],
        display: ['IBM Plex Serif', 'serif']
      }
    },
  },
  plugins: [],
};


