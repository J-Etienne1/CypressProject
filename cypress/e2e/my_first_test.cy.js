
/// <reference types="cypress" />


it("google test", function () {
    cy.visit("https://google.com")
    cy.get('#L2AGLb > .QS5gu').click()

    // Adding Timeouts at a command level
    cy.get('#APjFqb', {timeout: 6000}).type("Cypress{enter}")
    cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()

    // Handle new Origin as moved for Google during the test
    cy.origin('https://www.cypress.io', () => {
        cy.get('.osano-cm-denyAll').should('be.visible').then($button => {
            cy.wrap($button).click()
        })
        cy.contains("With Cypress, you can easily create tests for your modern web applications", { timeout: 10000 }).should('be.visible')
    })

})

