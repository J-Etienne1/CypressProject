
export class LoginPage{

    navigate(url){
        cy.visit(url)
    }

    enterUserName(username){
        cy.get('input[name="username"]').type(username)
    }

    enterPassword(password){
        cy.get('input[name="password"]').type(password)
    }

    clickLogin(){
        cy.get('.oxd-button').click()
    }
}