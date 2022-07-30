[![Stargazers](https://img.shields.io/github/stars/jmlweb/tsnextstarter.svg?style=for-the-badge)](https://github.com/jmlweb/tsnextstarter/stargazers)
[![GitHub followers](https://img.shields.io/github/followers/jmlweb?style=for-the-badge)](https://github.com/jmlweb?tab=followers)
[![License](https://img.shields.io/github/license/jmlweb/tsnextstarter.svg?style=for-the-badge)](https://github.com/jmlweb/tsnextstarter/blob/master/LICENSE.txt)
[![GitHub last commit](https://img.shields.io/github/last-commit/jmlweb/tsnextstarter?style=for-the-badge)](https://github.com/jmlweb/tsnextstarter/commits/main)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/jmlweb/tsnextstarter?style=for-the-badge)](https://github.com/jmlweb/tsnextstarter/tags)
[![GitHub Workflow Status: cicd](https://img.shields.io/github/workflow/status/jmlweb/tsnextstarter/cicd?label=CI/CD&style=for-the-badge)](https://github.com/jmlweb/tsnextstarter/actions/workflows/cicd.yml)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/josemanuel.lucas)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/jmlweb)

<h1 align="center">

![TS Next Starter](https://repository-images.githubusercontent.com/517446374/3f7edb66-baed-443f-8341-ab34e9191c2f)

</h1>

<p align="center">
  This is a template for a <a href="https://nextjs.org/">Next.js</a> project based on <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app">create-next-app</a>
  <br />
  <a href="https://github.com/jmlweb/tsnextstarter/issues">Report Bug</a>
  ·
  <a href="https://github.com/jmlweb/tsnextstarter/issues">Request Feature</a>
</p>

<hr />

## ⚡ Quickstart

You can click on the button **Use this template** or start a new project with create-next-app

```bash
npx create-next-app -e https://github.com/jmlweb/tsnextstarter
#or
yarn create next-app -e https://github.com/jmlweb/tsnextstarter
#or
pnpm create next-app -e https://github.com/jmlweb/tsnextstarter
```

## 🧠 Philosophy

- To be opinionated on the tools, but not on the code
- To help implementing a scalable, module-based directory organization

### What's included

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

- The basic Next.js template with [TypeScript](https://www.typescriptlang.org/) support
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (provided by [@swc/jest](https://swc.rs/docs/usage/jest) for better performance)
- [Mocking for http req and res](https://github.com/howardabrams/node-mocks-http) (useful for API handlers)
- Two [layouts](https://nextjs.org/docs/basic-features/layouts) are ready to be used: A "common" one (intended to be used as default) and an "empty" one (just in case you need a completely different look & feel for some pages)
- [Storybook](https://storybook.js.org/) configured and integrated with Next.js
- [Cypress](https://www.cypress.io/) is already configured for Next.js and integrated with GitHub actions
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
- [GitHub actions](https://github.com/features/actions):
  - linting
  - testing & building
  - package.json & tag version bumping (based on semantic commits)

### What's not included?

- Any styling solution
- Any library for state management, nor for graphql/rest handling
- Visual changes to the standard create-next-app template

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
- `storybook`: Run Storybook in development mode
- `build-storybook`: Run Storybook in build mode

## 🔪 Directories organization

### src

For a better organization, the code is organized inside the `src` folder, while the configuration files and the `public` directory are located at the root level.

[This is supported by Next.js by default](https://nextjs.org/docs/advanced-features/src-directory).

#### src/pages

This folder is used only for routing purposes. Every file inside the `pages` folder should not have any logic attached but to re-export the modules (default for the Component, named for server-side data fetching functions) from the `scenes` folder.

#### src/scenes

A `scene` represents a logical set of screens (or just one) from the application and is formed by:

- One or more ["page" components](https://nextjs.org/docs/basic-features/pages).
- If they are needed, one or more [data-fetching functions](https://nextjs.org/docs/basic-features/data-fetching/overview) (`getStaticProps`, `getStaticPaths`, `getServerSideProps`)
- Other files or folders which are used by the scene(s) component(s).
  - `components`
  - `utils`
  - `*.stories.tsx`
  - ...

Each `scene` can serve to different `pages`, by using different combinations of `page components` and `data-fetching functions`:

- A `scene` could export two different components (or "sub-scenes"), along with the same `getStaticProps` function.
- The two components represent the same information and use internally most of the same sub-components while maintaining a completely different layout (including subtle variations on the sub-components).
- The route "/items/layout-a" could point to one of the components, while "/items/layout-b" could point to the other one.

If needed, a `scene` can contain also other folders like `components`, and `data`... with modules shared across the scene.

If you want, you can place your unit tests and stories at the same level as your code.

#### src/apiHandlers

Each subfolder inside the `apiHandlers` folder contains one or more handlers (which will be later imported by the [api routes](https://nextjs.org/docs/api-routes/introduction)) and optionally the tests, utilities, or any other type of auxiliary file.

#### src/layouts

The layout is formed by a component, along with a function called `getLayout` which will be imported by the scene and placed in the special `getLayout` property of the scene component.

[Refer to the Next.js documentation for more info about the layouts](https://nextjs.org/docs/basic-features/layouts)

#### src/components, src/data, src/helpers, src/utils...

Just use a folder at the `src` level for any kind of file which is shared by two or more `scenes`.

### **test**

You can use this directory for your integration tests with Jest

### cypress

e2e (and/or integration) tests and fixtures for Cypress

### .storybook

Configuration files for Storybook

### .github/workflows

CI/CD and bumping workflows for GitHub Actions

## 🤷 F.A.Q.

### Shall I use the version bumping manually or with the action provided

#### If you are using already GitHub actions

- If are comfortable with the workflow, just remember not to run the `release` command manually
- If you prefer to bump manually, delete the `bumping.yml` file inside `.github/workflows` folder. Whenever you want to do the bumping, run the `release` script and push your files and tags.

#### If you are not using GitHub actions

You can safely delete the `.github` folder or just forget about its existence as it won't harm your project.

### How to integrate X feature/technology into my project?

Please, refer to the official [Next.js documentation](https://nextjs.org/docs)
