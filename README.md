# greenwood-getting-started

## Overview
Repository for Greenwood's [Getting Started](TBD) guide.

## Development
Currently this project requires using [`npm link`](https://docs.npmjs.com/cli/link) for development.  To link with a local copy of Greenwood, do the following.

1. `git clone` Greenwood repo - https://github.com/ProjectEvergreen/greenwood
1. In the directory of the Greenwood repo, run `npm link`, ex.
  ```bash
  $ npm link
  
  .
  .
  .

  found 151 vulnerabilities (7 low, 142 high, 2 critical)
    run `npm audit fix` to fix them, or `npm audit` for details
  /Users/owenbuckley/.nvm/versions/node/v10.15.1/lib/node_modules/greenwood -> /Users/owenbuckley/Workspace/project-evergreen/repos/greenwood
  ```
1. In the directory of _this_ repo, run `npm link greenwood`, ex.
  ```
  $ npm link greenwood
  /Users/owenbuckley/Workspace/github/repos/greenwood-getting-started/node_modules/greenwood -> /Users/owenbuckley/.nvm/versions/node/v10.15.1/lib/node_modules/greenwood -> /Users/owenbuckley/Workspace/project-evergreen/repos/greenwood
  ```
If linking working, you should now see **greenwood** show up in your _node_modules_ directory.
1.  Install dependencies and move
```
cd node_modules/greenwood
npm install
mv -r node_modules ../
```

Now `yarn build` should work for