import locator from '../Locators/elementLocators'
import action from '../Locators/elementAction'
class E2EMethods {
    appOpen = async () => {
        await browser.maximizeWindow()
        await browser.url('/');
        await browser.pause(3000)
    }
    sigIn = async (phoneNum: string, password: string) => {
        await action.Click(locator.signInText);
        await browser.pause(3000)
        await action.setText(locator.phoneNum, phoneNum)
        await browser.pause(3000)
        await action.Click(locator.continueButton);
        await browser.pause(3000)
        await action.setText(locator.password, password)
        await browser.pause(3000)
        await action.Click(locator.signInButton)
        await browser.pause(10000)
       


    }
    productFilter=async () => {
        

        for(let i=0;i< (await locator.productCategory).length;i++){
           const mainProduct= await locator.productCategory[i].getText();
           console.log("product",mainProduct)
           if(mainProduct.includes("Electronics")){
            await action.Click(await locator.productCategory[i])
            await browser.pause(3000)
           }
        }
        for(let i=0;i<( await locator.productSubCategory).length;i++){
            const mainProduct= await (await locator.productSubCategory[i]).getText();
            console.log("product",mainProduct)
            if(mainProduct.includes("Mobiles & Accessories")){
             await action.Click(await locator.productSubCategory[i])
             await browser.pause(6000)
            }
         }
        
    }
}
export default new E2EMethods()