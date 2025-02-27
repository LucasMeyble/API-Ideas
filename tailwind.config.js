/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,html,js,ts,jsx,tsx}', // ou qualquer outro diretório onde seu código esteja
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      sans: ['Fira Code', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

