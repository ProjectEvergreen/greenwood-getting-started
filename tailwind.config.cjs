console.debug('for prod?', process.env.NODE_ENV);

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
