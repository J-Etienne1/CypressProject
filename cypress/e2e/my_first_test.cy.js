
/// <reference types="cypress" />


it("google test", function () {
    cy.visit("https://google.com")
    cy.get('#L2AGLb > .QS5gu').click()
})