const pkg = require('./package.json');

module.exports = {
  title: 'My Personal Blog',
  meta: [
    { rel: 'icon', href: '/assets/favicon.ico' },
    { name: 'description', content: pkg.description } // replace the pkg.description with a custom string if you prefer
  ]
};
