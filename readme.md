# vite-test

See ./test directory


```sh
git clone git@github.com:vuejs/vue-test-utils-next.git
cd vue-test-utils-next
yarn
yarn test # for puppeteer
yarn dev # for actual browser
```

## usage

edit `test/test.js` and

```sh
# for ci
yarn test

# for local dev; open http://localhost:3000/test/
yarn dev
```

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

- [ ] try out all / most of @vue/test-utils and see if / how they work
- [ ] figure out HMR for even faster feedback cycle; see more in https://github.com/vitejs/vite#hot-module-replacement
  tried few things but couldn't make tests to run again
