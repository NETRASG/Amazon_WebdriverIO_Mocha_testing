class EleLocators {
    get signInText() {
        return $("//span[text()='Hello, sign in']/../..")
    }
    get phoneNum() {
        return $("#ap_email")
    }
    get password() {
        return $("#ap_password")
    }
    get continueButton() {
        return $("#continue")
    }
    get signInButton() {
        return $("#auth-signin-button")
    }
    get productCategory() {
        return $$("//div[@id='nav-xshop-container'] //a")
    }
    get productSubCategory() {
        return $$("//div[@id='nav-subnav'] //a")
    }
    get filterProductSection() {
        return $$("//div[@id='s-refinements'] //a")
    }
    get rating() {
        return $("//a //section[@aria-label='4 Stars & Up']")
    }
    get clickSpecificProduct() {
        return $$("//div[@class='sg-col-inner'] //div/h2 //span")
    }
    get addToCartButton() {
        return $("//input[@value='Add to Cart']")
    }
    get gotoCart() {
        return $("#attach-view-cart-button-form")
    }
    get addedToCartText() {
        return $("//div[@id='attachDisplayAddBaseAlert'] //span")
    }
    get proceedToBuy() {
        return $("//input[@name='proceedToRetailCheckout']")
    }
    get deliveryToAddress() {
        return $("//div[contains(@class,'ship-to-this-address')]")
    }
    get addressEdit() {
        return $$("//div[contains(@class,'ship-to-this-address')]/following-sibling::div //a")
    }
    get street() {
        return $("#address-ui-widgets-enterAddressLine2")
    }
    get useThisAddress() {
        return $("#address-ui-widgets-form-submit-button-announce")
    }
    get payOnDelivery() {
        return $("#pp-5rzII9-130")
    }
    get paymentOnCard(){
        return $("//input[@value='SelectableAddCreditCard']")
    }
    get enterCardDetails(){
        return $("#pp-3NzcAG-91")
    }
    get netBanking(){
        return $("//span[@class='a-text-bold'][normalize-space()='Net Banking']")
    }
    get chooseBank(){
        return $("(//span[contains(text(),'Choose an Option')])[1]")
    }
    get allBank(){
        return $$("//ul/li/a")
    }
    get spinner(){
        return $("#loading-spinner-img")
    }
    get continueToReview() {
        return $("#pp-P7zHNQ-133-announce")
    }
}
export default new EleLocators()