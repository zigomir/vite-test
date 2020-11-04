# vite-test

## motivation

We're using `vite` and `vue 3` in development and production at @sleuth.io
When I wanted to add front-end testing with `@vue/test-utils`, I had to add: `jest`, `@babel/preset-env`, `babel-jest`, `eslint-plugin-jest`, `ts-jest` and `vue-jest`. 🤦‍♂️
Besides that, I also prefer running frontend test in browser whenever possible. `node` and `jsdom` will never feel like home.

## requirements

- `@vue/test-utils` and `puppeteer` if you want to run same tests on your CI

## benefits

- very quick execution
- native environment

## TODOs

- [ ] instead of including mocha directly in `./test.html`, find alternative that can be imported in `src/test.js`
- [ ] ESM compatible assertion library; Currently using `@esm-bundle/chai` as a `chai` bundled as ESM
- [ ] `vue-test-utils-next` browser compatible ESM build
- [ ] figure out HMR for even faster feedback cycle; see more in https://github.com/vitejs/vite#hot-module-replacement
