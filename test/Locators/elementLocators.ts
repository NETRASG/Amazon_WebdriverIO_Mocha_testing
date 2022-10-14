class EleLocators{
    get signInText(){
        return $("//span[text()='Hello, sign in']/../..")
    }
    get phoneNum(){
        return $("#ap_email")
    }
    get password(){
        return $("#ap_password")
    }
    get continueButton(){
        return $("#continue")
    }
    get signInButton(){
        return $("#auth-signin-button")
    }
    get productCategory(){
        return $$("//div[@id='nav-xshop-container'] //a")
    }
    get productSubCategory(){
        return $$("//div[@id='nav-subnav'] //a")
    }
    get filterProduct(){
        return $$("//div[@id='s-refinements'] //a")
    }

}
export default new EleLocators()