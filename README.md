# TS Next Starter

This is a template for starting a [Next.js](https://nextjs.org/) project based on [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🧠 Philosophy

To be opinionated on the tooling, but not on the code

### What's included

- [TypeScript](https://www.typescriptlang.org/) support
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (provided by [@swc/jest](https://swc.rs/docs/usage/jest) for better performance)
- [Mock for http req and res](https://github.com/howardabrams/node-mocks-http)
- Two [layouts](https://nextjs.org/docs/basic-features/layouts) ready to be used: One common for all pages and one empty.
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
  - prettier integration
  - [automatic import sorting](https://github.com/lydell/eslint-plugin-simple-import-sort)
  - [Testing library integration](https://github.com/testing-library/eslint-plugin-testing-library)
- [conventional commits](https://www.conventionalcommits.org/) integration:
  - [linting](https://github.com/conventional-changelog/commitlint)
  - [commitizen](https://github.com/commitizen/cz-cli) integration
  - [changelog generation](https://github.com/absolute-version/commit-and-tag-version)
- runs linting for code and commit message [on each commit](https://github.com/typicode/husky)
- [github actions](https://github.com/features/actions):
  - linting
  - testing & building
  - package.json & tag version bumping (based on semantic commits)

### What's not included?

- any styling solution
- any library for state management, nor for graphql/rest handling
- visual changes to the standard create-next-app template

## 🎛️ Scripts

- `dev`: Start server on dev mode
- `build`: Build code for production
- `start`: Start production server
- `lint`: Lint code
- `test`: Run Jest
- `test:watch`: Run Jest on watch mode for the file provided as argument
- `test:watchAll`: Run Jest on watch mode for all the files
- `test:coverage`: Run Jest on coverage mode
- `prepare`: Install husky hooks
- `commit`: Run commitizen
- `release`: Run changelog generation and version bumping

## How are folders organized

- While the configuration files live in the root folder, all the code related items are organized inside `src` (already supported by Next.js).
- The `pages` folder is used only for routing purposes. The code is organized in `scenes` (one scene could represent different routes).
- Each file from the `pages` folder must export by default a module living inside the `scenes` folder.
- Optionally, it could also export (by name) any related modules used for [data-fetching and dynamic routing (`getStaticProps`, `getStaticPaths`, `getServerSideProps`...)](https://nextjs.org/docs/basic-features/data-fetching/overview).
- Each `scene` could have many subfolders, representing types of files (`components`, `stateMachines`, `utils` or whatever you want).
- Outside of the `scenes` folder, there may be also other folders, representing types of files (`components`, `stateMachines`, `utils` or whatever you want) which are common to different `scenes`.
- There is a special folder called `apiHandlers`, to put those handlers along with tests, utils, types or any other auxiliary files.
- By moving the "real code" outside of the `pages` folder, it is possible to place the unit tests along with the code, while the integration tests can be located inside the `__tests__` folder placed in the root.

## F.A.Q.

### Shall I use the version bumping manually or with the action provided

#### If you are using already github actions

- If are comfortable with the workflow, just remember not to run the `release` command manually
- If you prefer to bump manually, delete the `bumping.yml` file inside `.github/workflows` folder. Whenenver you want to do the bumping, run the `release` script and push your files and tags.

#### If you are not using github actions

You can safely delete the `.github` folder or just forget about its existence as it won't harm your project.

### How to integrate X feature in my project?

Please, refer to the official [Next.js documentation](https://nextjs.org/docs)
