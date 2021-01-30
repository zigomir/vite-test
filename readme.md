# vite-test

> use `vite` to test your vue app in real browser and/or `puppeteer`

## benefits

- fast execution, simple setup
- compared to `jest` this setup is a breeze, e.g. no additional config files, no transformations, just ES modules
- native environment compared to `jest` & `js-dom`

## usage

- in your `vite` project you'll need to install this 3 packages
- `tap-dot` is only needed if you use CI and want to get correct exit code

```sh
npm install --save-dev vite-test @vue/test-utils@next tap-dot
```

sample `package.json` scripts:

```json
"scripts": {
  "test:debug": "vite-test --debug",
  "test": "vite-test | tap-dot"
}
```

- `vite-test --debug` to keep vite server open on `http://localhost:3000` to debug your test in browser dev tools directly, e.g. on `http://localhost:3000/test.html`
- `vite-test | tap-dot` CI friendly exit code by tap-dot library (`npm install tap-dot`)

Also see `/test` directory

### terminal / CI

`vite-test` will run your tests in `puppeteer`

### browser through vite

Open http://localhost:3000/test.html when running `vite` dev server and open your dev tools

## dependencies

- [@vue/test-utils](https://github.com/vuejs/vue-test-utils-next) – version 2+ which supports Vue 3
- [puppeteer](https://pptr.dev) to run tests on your CI
- [zora test runner](https://github.com/lorenzofox3/zora)
