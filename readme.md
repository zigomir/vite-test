# vite-test

> use `vite` to test your vue app in real browser and/or `puppeteer`

## benefits

- very quick execution
- native environment compared to `jest` & `js-dom`

## usage

### terminal / CI
`vite-test` will run your tests in `puppeteer`

### browser through vite

Open http://localhost:3000/test.html when running `vite` dev server and open your dev tools

## dependencies

- [@vue/test-utils](https://github.com/vuejs/vue-test-utils-next) – version 2+ which supports Vue 3
- [puppeteer](https://pptr.dev) to run tests on your CI
- [zora test runner](https://github.com/lorenzofox3/zora)
