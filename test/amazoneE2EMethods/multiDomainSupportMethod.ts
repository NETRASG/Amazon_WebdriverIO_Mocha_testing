import locators from '../AmazonE2ELocators/multiDomainsupportLocator'
import action from '../AmazonE2ELocators/elementAction'
export const searchProduct=async () => {
    await action.setText(locators.searchBox,'kurtha')
    await browser.keys('Enter')
    await browser.pause(5000)
    
}
export const filterProduct=async () => {
    try{
    await action.LocatorArray(locators.filterProductSection,"")
    }
    catch(err){

    }
}