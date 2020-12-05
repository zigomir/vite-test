# vite-test

## motivation

We're using `vite` and `vue 3` at @sleuth.io.
When I wanted to add front-end testing with `@vue/test-utils` and `jest` I had to add: `jest`, `eslint-plugin-jest`, `ts-jest` and `vue-jest`.
`ts-jest` was broken (at the time) as described in this [issue](https://github.com/vuejs/vue-jest/issues/294).
Besides that, I prefer running frontend test in browser whenever possible – `node` and `jsdom` will never feel like home.

## benefits

- very quick execution
- native environment

## setup

```sh
npm install vite-test --save-dev
# or
yarn add -D vite-test
echo '<script type="module" src="./test.js"></script>' > test.html
echo "export * from '@vue/test-utils/dist/vue-test-utils.esm-browser'" > test.js
```

add `vite-test` to your `package.json`

```json
{
  "scripts": {
    "test": "vite-test"
  }
}
```

add imports of your tests into just created `test.js`, e.g.

```js
import './src/components/HelloWorld.test.js'
```

## usage

### terminal / CI
`vite-test` will run your tests in `puppeteer`

### browser through vite

Open http://localhost:3000/test.html when running `vite` dev server and open your dev tools

## dependencies

- [@vue/test-utils](https://github.com/vuejs/vue-test-utils-next) – version 2+ which supports Vue 3
- [puppeteer](https://pptr.dev) to run tests on your CI
- [uvu test runner](https://github.com/lukeed/uvu)

## else

I tried to figuring out [HMR](https://github.com/vitejs/vite#hot-module-replacement) for even faster feedback cycle but
couldn't make it work because test runner doesn't implement a `re-run` as a feature.
