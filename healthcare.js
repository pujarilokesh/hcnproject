const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({
    headless: false
    });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200, height: 720
    });
  await page.goto('https://plus.medibuddy.in/#/') 
  //await page.waitForSelector('#login-form')
  await page.type('#login-form_username', 'MH1035905@medibuddy.in')
  await page.type('#login-form_password', 'Giri@123')
  await Promise.all([page.click('button[type="submit"]')]);
  await page.waitForTimeout(5000)
  const output = (await page.$x("//tr[contains(., '110378804')]"));
  if (output.length> 0) {
    await output[0].click();
    await page.waitForTimeout(10000);
  }
  await page.pdf({ path: 'api.pdf', format: 'A4' })
  await browser.close();



  
  }
main();



