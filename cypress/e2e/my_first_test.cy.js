
/// <reference types="cypress" />


it("google test", function () {
    cy.visit("https://google.com")
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type("Cypress{enter}")
    cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
})