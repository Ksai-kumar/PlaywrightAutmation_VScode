
//Playwright includes test assertions in the form of expect function

const {test, expect}= require ('@playwright/test')

test('AssertionsTest',async ({page})=>{

    //open url
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //1)expect(page).toHaveURL()    - page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //2)expect(page).toHaveTitle()     - page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3)expect(locator).toBeVisible()       - Element is visible
    const logoElement  = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4)expect(locator).toBeEnabled()     - control is enabled
    const searchBox = await page.locator("//input[@id='small-searchterms']")
    await expect(searchBox).toBeEnabled()

    //5)expect(locator).toBeChecked      - Radio/Checkbox is checked
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()   // Select radio button
    await expect(maleRadioButton).toBeChecked()

    //Checkbox
    const newsletterCheckbox= await page.locator('.form-check-input')
    await expect(newsletterCheckbox).toBeChecked()

    //6)expect(locator).toHaveAttribute()   Element has attribute
    const regButton= await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    // 7) expect(locator).toHaveText()  Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register') //full text

    // 8) expect(locator).toContainText()  //partial text
    await expect(await page.locator('.page-title h1')).toContainText('Reg')  //partial text


})  