const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://github.com/login')
    await page.type('#login_field', 'lokesh123.com')
    await page.type('#password', 9666003079)
    await page.click('[name="commit"]')
    await page.waitForNavigation()
    await page.screenshot({ path: screenshot })
    browser.close();
    console.log('See screenshot: ' + screenshot)
   })();