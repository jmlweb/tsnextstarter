# TS Next Starter

This is a template for starting a [Next.js](https://nextjs.org/) project based on [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🧠 Philosophy

To be opinionated on the tooling, but not on the code

### What's included

- [TypeScript](https://www.typescriptlang.org/) support
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (provided by [@swc/jest](https://swc.rs/docs/usage/jest) for better performance)
- [Mock for http req and res](https://github.com/howardabrams/node-mocks-http)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
  - prettier integration
  - [automatic import sorting](https://github.com/lydell/eslint-plugin-simple-import-sort)
  - [Testing library integration](https://github.com/testing-library/eslint-plugin-testing-library)
- conventional commits integration:
  - [linting](https://github.com/conventional-changelog/commitlint)
  - [commitizen](https://github.com/commitizen/cz-cli) integration
  - [changelog generation](https://github.com/absolute-version/commit-and-tag-version)
- runs linting for code and commit message [on each commit](https://github.com/typicode/husky)
- [github actions](https://github.com/features/actions) integration for linting and testing

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
