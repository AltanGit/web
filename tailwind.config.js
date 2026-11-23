/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        obsidian: '#06070A',
        surface: '#0D0F14',
        borderSubtle: 'rgba(255, 255, 255, 0.08)',
        accent: '#38BDF8'
      }
    }
  },
  plugins: []
};