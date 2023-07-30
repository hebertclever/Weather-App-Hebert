/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'cinza': '#6E707A',
        'midnight': '#121063',
        'button': '#3C47E9',
        'background': '#100E1D',
        'primary': '#1E213A',
        'text': '#E7E7EB',
        'barraAmarela': '#FFEC65',
      },
    },
  },
  plugins: [],
}
