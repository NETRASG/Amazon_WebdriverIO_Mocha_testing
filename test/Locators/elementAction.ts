class Actions{

    async setText(locator:ChainablePromiseElement<WebdriverIO.Element>,inputText:string){
        await (await locator).setValue(inputText);
    }

    async Click(locator:ChainablePromiseElement<WebdriverIO.Element>){
        await (await locator).click();
    }
 
}
export default new Actions()


