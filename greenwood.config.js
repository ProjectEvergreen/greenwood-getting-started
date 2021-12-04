import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

export default {
  title: 'My Personal Blog',
  meta: [
    { rel: 'icon', href: '/assets/favicon.ico' },
    { name: 'description', content: pkg.description } // replace the pkg.description with a custom string if you prefer
  ]
};
