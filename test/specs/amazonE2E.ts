import E2Emethod from '../amazoneE2EMethods/amazoneE2EMethods'
import data from '../resources/userCredential.json'
describe("Amazone shopping site", () => {
    it("Open web app using appUrl", async () => {
        await E2Emethod.appOpen()
    })
    it("get sign in into the app using phone number and password", async () => {
        await E2Emethod.sigIn(data.phonenum, data.password);
    })

    it("product filtering",async () => {
        await E2Emethod.productFilter();
        
    })

})