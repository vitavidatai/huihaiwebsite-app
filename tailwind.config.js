/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAF9F6',
          100: '#F5F2EB',
          200: '#EFECE6',
          300: '#E5E0D8',
          400: '#D5CF8',
          500: '#C5BDC1',
        },
        charcoal: {
          900: '#2D2B2A',
          800: '#3D3A39',
          600: '#5E5A56',
          400: '#8C8883',
          300: '#B0ACA6',
        },
        nordic: {
          blue: '#4A6B82',
          blueHover: '#3A5568',
          lightBlue: '#F0F4F7',
        },
        sage: {
          green: '#7A8B7B',
          light: '#F2F5F2',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(100, 90, 80, 0.05)',
        'elevated-warm': '0 12px 32px -4px rgba(80, 70, 60, 0.08)',
      }
    },
  },
  plugins: [],
};
