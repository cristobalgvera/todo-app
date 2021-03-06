module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  babel: {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: ['@emotion'],
  },
};
