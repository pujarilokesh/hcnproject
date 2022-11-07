/*const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:50,     
    })
    const page = await browser.newPage()
    await page.goto("https://plus.medibuddy.in/#/")
    await (await page.$('input[placeholder="Username or Email"]')).type(username);
    await page.waitForTimeout(1000)

    await (await page.$('#login-form_password')).type(password);
    await page.waitForTimeout(1000)
    await browser.close()

})();

import { username, password } from "../constants";

export async function ihxLogin(page, takeScreenshot) {
    console.log(`Filling ihx insurance login details`);
    await takeScreenshot();
    await page.waitForSelector('input[type=text]');

    console.log(username, password);
    await (await page.$('input[placeholder="Username or Email"]')).type(username);
    await page.waitForTimeout(1000)

    await (await page.$('#login-form_password')).type(password);
    await page.waitForTimeout(1000)

    await takeScreenshot();
    await Promise.all([
        page.click('button[type="submit"]')
        // page.waitForNavigation(),
    ]);

    return await page.waitForTimeout(3000)
};*/

const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({
    headless: false
    });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200, height: 720
    });
  await page.goto('https://plus.medibuddy.in/#/') // wait until page load
  await page.waitForSelector('#login-form')
  await page.type('#login-form_username', 'MH1035905@medibuddy.in')
  await page.type('#login-form_password', 'Giri@123')
  // await page.waitForTimeout(10000)
  await Promise.all([page.click('button[type="submit"]')]);
  // await Promise.waitForNavigation(110000)
  await page.waitForTimeout(100000)
  await browser.close()

  
  }
main();