import E2Emethod from '../amazoneE2EMethods/amazoneE2EMethods'
import data from '../resources/userCredential.json'
import filterData from '../resources/filterData.json'
describe("Amazone shopping site", () => {
    it("Open web app using appUrl", async () => {
        await E2Emethod.appOpen()
    })
    it("get sign in into the app using phone number and password", async () => {
        await E2Emethod.sigIn(data.phonenum, data.password);
    })
    it("product filtering", async () => {
        await E2Emethod.categoryFilter(filterData.categoty, filterData.subCategory);
        await E2Emethod.specificProductFilter(filterData.brand);
        await E2Emethod.specificProductFilter(filterData.rating);
        await E2Emethod.specificProductFilter(filterData.price);
        await E2Emethod.specificProductFilter(filterData.ItemCondition);
    })
    it("open desired product and add to cart", async () => {
        await E2Emethod.selectSpecificProduct(filterData.productName);
    })
    it("go to cart and proceed to buy", async () => {
        await E2Emethod.cartItems();
        await E2Emethod.proceedToBuy()
    })
    it("address", async () => {
        await E2Emethod.address()
    })
    it("select Payment Option", async () => {
        await E2Emethod.payMentOption(filterData.bank)
    })
})