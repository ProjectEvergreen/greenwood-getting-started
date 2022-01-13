/*
 *
 * Enables using JavaScript to @import SASS files in your CSS or use import / ESM syntax.
 *
 */
import rollupPluginSass from 'rollup-plugin-sass';
import { ResourceInterface } from '@greenwood/cli/src/lib/resource-interface.js';
import sass from 'sass';

class SassResource extends ResourceInterface {
  constructor(compilation, options) {
    super(compilation, options);
    this.extensions = ['.scss'];
    this.contentType = 'text/css';
  }

  async serve(url) {
    return Promise.resolve(this.extensions.indexOf(path.extname(url)) >= 0);
  }

  async serve(url) {
    return new Promise(async (resolve, reject) => {
      try {
        // https://sass-lang.com/documentation/js-api
        const result = sass.renderSync({ file: url });

        resolve({
          body: result.css.toString(),
          contentType: this.contentType
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

const greenwoodPluginSass = (options = {}) => {
  return [{
    type: 'resource',
    name: 'plugin-import-sass:resource',
    provider: (compilation) => new SassResource(compilation, options)
  }, {
    type: 'rollup',
    name: 'plugin-import-sass:rollup',
    provider: () => {
      return [
        rollupPluginSass()
      ];
    }
  }];
};

export {
  greenwoodPluginSass
};