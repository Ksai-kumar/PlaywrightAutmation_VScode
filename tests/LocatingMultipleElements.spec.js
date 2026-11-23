const { test, expect } = require('@playwright/test');

//title of the test, ({})=> {})- anonimeus function will take page friction 
// and before we write async keyword 
test('LocateMultipleElements', async ({page})=>{

    await page.goto('https://www.demoblaze.com')

    /*const links = await page.$$('a');

    for(const link of links)
    {
        const linktest =await link.textContent();  //written the test of the element
        console.log(linktest);
    }
    */

    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products)
    {
        const prodName=await product.textContent();
        console.log(prodName);

    }

})