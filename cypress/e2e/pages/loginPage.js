
export class LoginPage{
    navigate(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    }

    enterUserName(){
        cy.get('input[name="username"]').type("Admin")
    }

    enterPassword(){
        cy.get('input[name="password"]').type("admin123")
    }

    clickLogin(){
        cy.get('.oxd-button').click()
    }
}