module.exports = {
  content: ['./src/**/*.{hbs,html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
