
// these 2 import functions we are use to writing  our playwright
//const{test, expect} = require('@playwright/test')
import {test, expect} from'@playwright/test'

test('Locators',async ({page})=> {

    await page.goto('https://www.demoblaze.com')

    //click on login button - property
    //await page.locator("login2").click()
    await page.click('//a[@id="login2"]')

    //provide username -CSS
    //await page.locator.apply('#loginusername').fill("pavanol")
    await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername')


    //Provide password
    await page.fill('#loginpassword','test@123')

    //click on login button  - Xpath
    await page.click("//button[text()='Log in']")

    //verify login link presense - xpath
    const logoutlink= await page.locator("//button[text()='Log in']")

    await expect(logoutlink).toBeVisible();

    await page.close();

})