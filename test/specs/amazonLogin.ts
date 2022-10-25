import {appOpen,sigIn} from '../amazoneE2EMethods/helper'
import data from '../resources/userCredential.json'
import {searchProduct} from '../amazoneE2EMethods/multiDomainSupportMethod'


describe("Amazone shopping site", () => {
    it("Open web app using appUrl", async () => {
        await appOpen()
    })
    it("get sign in into the app using phone number and password", async () => {
        await sigIn(data.phonenum, data.password);
    })
    it("search product",async () => {
        await searchProduct()
    })
})