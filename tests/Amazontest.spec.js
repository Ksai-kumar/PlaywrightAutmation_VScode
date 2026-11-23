import {test, expect} from'@playwright/test'

test('Amazon',async ({page})=> {

    await page.goto('https://www.amazon.com/');
    const pageTitle=page.title();
    console.log('Page title is:', pageTitle);
    await page.fill("//input[@id='twotabsearchtextbox']",'laptop');
    await page.locator("#nav-search-submit-button").click();
    await page.locator("a-dropdown-label").click();
    page.selectOption("Price: High to Low");
})