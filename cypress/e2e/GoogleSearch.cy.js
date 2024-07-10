

it("Google search 1st Test", () => {
    cy.log("Google 1st Test starts")
    cy.visit("https://google.com")
    cy.get('#W0wltc > .QS5gu').click()
    cy.get(".gLFyf").type("Google 1st Test ends")
    cy.log("Google 1st Test ends")

})


it("Google search 2st Test", () => {
    cy.log("Google 2st Test starts")
    cy.visit("https://google.com")
    cy.get('#W0wltc > .QS5gu').click()
    cy.get(".gLFyf").type("Google 2st Test ends")
    cy.log("Google 2st Test ends")
})
