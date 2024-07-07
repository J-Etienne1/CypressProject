
/// <reference types="cypress" />


it("google test", function () {
    cy.visit("https://google.com")
    cy.get('#L2AGLb > .QS5gu').click()

    // Adding Timeouts at a command level
    cy.get('#APjFqb', {timeout: 6000}).type("stackoverflow{enter}")
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .notranslate > .q0vns > .CA5RN > :nth-child(1) > .VuuXrf').should("be.visible")

})

