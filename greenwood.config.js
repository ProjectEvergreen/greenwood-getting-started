import fs from 'fs/promises';
import { URL } from 'url';

const pkg = JSON.parse((await fs.readFile( new URL('./package.json', import.meta.url), 'utf-8')));

export default {
  title: 'My Personal Blog',
  meta: [
    { rel: 'icon', href: '/assets/favicon.ico' },
    { name: 'description', content: pkg.description } // replace the pkg.description with a custom string if you prefer
  ]
};
