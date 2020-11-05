import puppeteer from 'puppeteer'
import { createServer } from 'vite'
const PORT = 3001

;(async () => {
  const vite = await createServer({}).listen(PORT)

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const address = `http://localhost:${PORT}/test/`
  await page.goto(address, { waitUntil: 'domcontentloaded' })

  let passedTests = 0
  let failedTests = 0

  page.on('console', (msg) => {
    if (msg._text === 'fail') {
      failedTests++
      process.stdout.write('\x1b[31m.') // red dot
    }
    if (msg._text === 'pass') {
      passedTests++
      process.stdout.write('\x1b[32m.') // green dot
    }
  })

  await page.evaluate(() => {}) // needed for mocha to load
  await browser.close()

  const passed = failedTests === 0 && passedTests > 0
  const exitCode = passed ? 0 : 1

  console.log('\x1b[0m') // resets color
  console.log(
    passed
    ? '🤘 Tests passed.'
    : `💩 Tests failed. Open in real browser to debug while running vite server`
  )

  vite.close()
  process.exit(exitCode)
})()
