export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        brand: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#1F66A8',
          300: '#1F66A8',
          400: '#1F66A8',
          500: '#1F66A8',
          600: '#1F66A8',
          700: '#1F66A8',
          800: '#1F66A8',
          900: '#1F66A8',
          950: '#1F66A8'
        }
      },
      boxShadow: {
        soft: '0 20px 50px rgba(31, 102, 168, 0.12)'
      }
    }
  },
  plugins: [],
};
