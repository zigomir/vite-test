# vite-test

## motivation

We're using `vite` and `vue 3` at @sleuth.io.
When I wanted to add front-end testing with `@vue/test-utils` and `jest` I had to add: `jest`, `eslint-plugin-jest`, `ts-jest` and `vue-jest`.
`ts-jest` was broken (at the time) as described in this [issue](https://github.com/vuejs/vue-jest/issues/294).
Besides that, I prefer running frontend test in browser whenever possible – `node` and `jsdom` will never feel like home.

## benefits

- very quick execution
- native environment

## extra dependencies

- `@vue/test-utils`
- `puppeteer` only if you want to run same tests on your CI

See ./test directory

## usage

edit `test/test.js` and

```sh
# for ci
yarn test

# for local dev; open http://localhost:3000/test/
yarn dev
```

## else

I tried to figuring out [HMR](https://github.com/vitejs/vite#hot-module-replacement) for even faster feedback cycle but
couldn't make it work because test runner doesn't implement a `re-run` as a feature.
