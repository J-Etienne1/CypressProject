
export class LoginPage{

    loginPage_userName = 'input[name="username"]'
    loginPage_password = 'input[name="password"]'
    loginPage_loginButton = '.oxd-button'

    navigate(url){
        cy.visit(url)
    }

    enterUserName(username){
        cy.get(this.loginPage_userName).type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}