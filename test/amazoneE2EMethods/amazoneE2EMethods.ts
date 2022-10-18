import locator from '../AmazonE2ELocators/elementLocators'
import action from '../AmazonE2ELocators/elementAction'
class E2EMethods {
   
   
    categoryFilter = async (map:Map<string,string>) => {
        await action.LocatorArray(locator.productCategory, map.get("category"));
        await browser.pause(3000)
        await action.LocatorArray(locator.productSubCategory, map.get("subCategory"))
        await browser.pause(3000)
    }
    specificProductFilter = async (map:Map<string,string>) => {
        await action.LocatorArray(locator.filterProductSection, map.get("brand"))
        await action.LocatorArray(locator.filterProductSection, map.get("rating"))
        await action.LocatorArray(locator.filterProductSection, map.get("price"))
        await action.LocatorArray(locator.filterProductSection, map.get("itemCondition"))

        await browser.pause(3000)
    }
    selectSpecificProduct = async (productName: string) => {
        let parentWindow = await browser.getWindowHandle();
        await action.LocatorArray(locator.clickSpecificProduct, productName);
        await browser.pause(3000)
        let alltabId = await browser.getWindowHandles()
        let childTab: string;
        for (let i = 0; i < (await alltabId).length; i++) {
            if (alltabId[i] != parentWindow) {
                childTab = alltabId[i]
                break
            }
        }
        await browser.switchToWindow(childTab)
        await browser.maximizeWindow()
        await browser.pause(3000)
        await action.Click(locator.addToCartButton)
        await browser.pause(3000)
    }
    cartMessage = async (message: string) => {
        const toastMessage = await action.GetText(locator.addedToCartText);
        expect(message).toContain(String(toastMessage))
    }
    cartItems = async () => {
        await (await locator.gotoCart).waitForClickable({ timeout: 2000 })
        await action.Click(locator.gotoCart)
        await browser.pause(3000)
    }
    proceedToBuy = async () => {
        await action.Click(locator.proceedToBuy)
        await browser.pause(3000)
    }
    // EditAddress =async (street:string) => {
    //     await action.LocatorArray(locator.addressEdit,'Edit')
    //    await browser.pause(2000)
    //     await action.setText(locator.street,street)
    //     await browser.pause(1000)
    //     await action.Click(locator.useThisAddress)
    //     await browser.pause(6000)
    // }
    address = async () => {
        await action.Click(locator.deliveryToAddress)
        await browser.pause(3000)
    }
    payMentOption = async (bankName: string) => {
        await (await locator.spinner).waitForDisplayed({ timeout: 5000, reverse: true })
        await action.Click(locator.netBanking)
        await action.Click(locator.chooseBank)
        await action.LocatorArray(locator.allBank, bankName)
        await browser.pause(3000)
        //   await action.Click(locator.continueToReview)
    }
}
export default new E2EMethods()