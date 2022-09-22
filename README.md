# Monorepo info

This boilerplate was gotten from the official Yarn v1 starter [turborepo](https://turborepo.org/).

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `demos`: a simple create react app for testing and demoing our packages
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### How to start contributing

All you need to do is fork the repository and install locally. And then do this:

```
npm install
cd packages/paystack
```

Change something, and send in a PR!

### How do I test

First of all you will need to create a free [Paystack](https://paystack.com) account and get a public API
Add the key as an env variable (REACT_APP_PAYSTACK_PUBLIC_KEY). And then do this:

```
cd apps/demos
npm start
```

Click the link to open the pop up, and you are good to go!
