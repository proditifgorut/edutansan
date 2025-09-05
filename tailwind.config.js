/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          light: '#60a5fa',   // blue-400
          dark: '#2563eb',    // blue-600
        },
        secondary: {
          DEFAULT: '#10b981', // green-500
        },
        accent: {
          DEFAULT: '#f59e0b', // amber-500
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
