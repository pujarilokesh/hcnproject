/*const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newpage();
    await page.setViewport({
        width: 1920,
        height:1080,
    });

    await page.goto("https://www.tutorialspoint.com/puppeteer/puppeteer_quick_guide.htm");
    await page.sceenshot({path:"puppeteer.png"})
    await browser.close();
})();*/

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto('https://oxylabs.io/');
  await page.screenshot({path: 'oxylabs_1080.png'})
  await browser.close();
})();