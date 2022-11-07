const puppeteer = require('puppeteer');
describe("Automte Login and Registration Page in puppeteer",()=>{
    let browser
    let page
    before(async function(){
      browser = await puppeteer.launch({
        headless:false,
        slowMo:0
      })
      //Launch browser
      page = await browser.newPage()
      //Enter Url
      await page.goto("http://automationpractice.com/index.php")
    })
    it('Navigate to URL', async()=>{
      //Click to login link
      await page.waitForSelector('.login');
      await page.click('.login');
    })
   it("Register As user",async()=>{
     //Enter Email Id
     await page.waitForSelector('#email_create');
     await page.type('#email_create','Codebuntut06@gmail.com')
     await page.click('#SubmitCreate');
     await page.waitForSelector('#id_gender1');
     await page.click('#id_gender1');
     //Enter FirstNmae........
     await page.type('#customer_firstname', 'bhupi');
     //Enter LastName.....
     await page.type('#customer_lastname', 'Patel');
    
     //Enter password....
     await page.type('#passwd','Demo@123');
     //Select Date Of Birth.....
     await page.select('#days','8');
     await page.select('#months','5');
     await page.select('#years','1992');
     //Enter your address
     await page.type('#company','Bhupi');
     await page.type('#address1','Bhupi');
     await page.type('#city','Imorec');
     await page.select('#id_state','4');
     await page.type('#postcode','25968');
     await page.type('#phone_mobile','8585858585');
     await page.type('#alias','gfdg fdgfdgf');
     
     //Click to Registration button..
     await page.click('#submitAccount');
     await page.waitForSelector('.logout');
     let signoutText = await page.$eval('.logout', element=>element.textContent);
     //Verify signout text...
     console.log(signoutText);
     expect(signoutText).to.include('Sign out');
     //Logout
     await page.click('.logout');
    })
    it('Login as user',async()=>{
      //Enter username...
      await page.waitForSelector('#email')
      await page.type('#email','Codebuntut06@gmail.com');
      //Enter password
      await page.type('#passwd', 'Demo@123');
      //click to login b3utton.
      await page.click('#SubmitLogin');
      //Verify login
      await page.waitForSelector('.logout');
      let signoutText = await page.$eval('.logout', element=>element.textContent);
      //Verify signout text...
      console.log(signoutText);
      expect(signoutText).to.include('Sign out');
    })
    after(async function(){
       await browser.close()
    })

});
