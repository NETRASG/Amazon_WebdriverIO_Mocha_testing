class Actions {
    async setText(locator: ChainablePromiseElement<WebdriverIO.Element>, inputText: string) {
        await (await locator).setValue(inputText);
    }
    async Click(locator: ChainablePromiseElement<WebdriverIO.Element>) {
        await (await locator).click();
    }
    async LocatorArray(locator: ChainablePromiseElement<WebdriverIO.Element>, name: string) {
        for (let i = 0; i < (await locator).length; i++) {
            const eachElement = await locator[i].getText();
        
            if (eachElement.includes(name)) {
                await this.Click(await locator[i])
                break;
            }
        }
    }
    async GetText(locator: ChainablePromiseElement<WebdriverIO.Element>) {
        await (await locator).getText();
    }
}
export default new Actions()
