# vite-test

> use `vite` to test your vue app in real browser and/or `puppeteer`

## benefits

- very quick execution
- native environment compared to `jest` & `js-dom`

## setup

```sh
npm install vite-test --save-dev
# or
yarn add -D vite-test
echo '<script type="module" src="./test.js"></script>' > test.html
echo "export * from '@vue/test-utils/dist/vue-test-utils.esm-browser'" > test.js
```

You need to use `@vue/test-utils/dist/vue-test-utils.esm-browser` above or else `vite` won't serve browser compatible `vue-test-utils`.
Then in your tests, you can use `import { shallowMount, ... } from './test.js'` to import `vue-test-utils` functions you need.

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
