 class multiDomainlocators{
    get productCard(){
        return $$("//h2[contains(@class,'a-size-mini ')]/a/span")
    }
    get searchBox(){
        return $("#twotabsearchtextbox")
    }
    get filterProductSection() {
        return $$("//div[@id='s-refinements'] //a")
    }
    get rating() {
        return $("//a //section[@aria-label='4 Stars & Up']")
    }

}
export default new multiDomainlocators()
