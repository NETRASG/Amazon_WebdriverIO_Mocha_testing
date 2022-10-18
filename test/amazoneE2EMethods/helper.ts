import locator from '../AmazonE2ELocators/elementLocators'
import action from '../AmazonE2ELocators/elementAction'
export const appOpen = async () => {
    await browser.maximizeWindow()
    await browser.url('/');
    await browser.pause(3000)
}
export const sigIn = async (phoneNum: string, password: string) => {
    await action.Click(locator.signInText);
    await browser.pause(3000)
    await action.setText(locator.phoneNum, phoneNum)
    await browser.pause(3000)
    await action.Click(locator.continueButton);
    await browser.pause(3000)
    await action.setText(locator.password, password)
    await browser.pause(3000)
    await action.Click(locator.signInButton)
    await browser.pause(5000)
}