
import {LoginPage} from "./pages/loginPage";

let loginPage = new LoginPage()

it("login test using POM", function(){
    loginPage.navigate("https://opensource-demo.orangehrmlive.com/")
    loginPage.enterUserName("Admin")
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()
})