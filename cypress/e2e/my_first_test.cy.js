
/// <reference types="cypress" />


it("google test", function () {
    cy.visit("https://google.com")
    cy.get('#L2AGLb > .QS5gu').click()

    // Adding Timeouts at a command level
    cy.get('#APjFqb', {timeout: 6000}).type("stackoverflow{enter}")
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .notranslate > .q0vns > .CA5RN > :nth-child(1) > .VuuXrf').should("be.visible")

})

it.only("login test", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    cy.get('.oxd-topbar-body-nav-tab-link').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--ghost').click()


})

