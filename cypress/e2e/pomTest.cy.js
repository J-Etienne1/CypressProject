
import {LoginPage} from "./pages/loginPage";

let loginPage = new LoginPage()

it("login test using POM", function(){
    loginPage.navigate()
    loginPage.enterUserName()
    loginPage.enterPassword()
    loginPage.clickLogin()
})