# Troy's Next JS / TS Template
The original `create-next-app` documentation is included as `README.next.md`.
See the [Next.js documentation](https://nextjs.org/docs/getting-started) to learn more about Next.
## Setup
1. clone the repo
1. `yarn` to install packages
1. edit the meta properties
    - name, version, description, author, and deploy command in package.json
    - title and meta description in `src/components/meta/Head.tsx`
    - change the favicon in the `public`

## Running Locally
There are 2 ways to run the app locally:

- `yarn dev`
- `yarn build:serve`

`dev` uses a `development` next.js' dev configuration. This is what should be used for regular development (defaults to port 3000).

`build:serve` runs the `build` command to create a production build of the app, then serves that build via a local server (defaults to port 3003). This should be used for things like lighthouse score, etc. You can modify the port used by modifying the value after the `-p` flag for the `build:serve` command in `package.json`.

## Storybook
Storybook is TODO

## Deploying
Before deploying, run `yarn build` to make a production build of your app, then follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment) to deploy on Vercel. 

## TODOs
1. Configure storybook and storybook commands
1. Investigate custom `deploy` command to automate more of the deployment process