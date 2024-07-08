
it("learning assertions", function(){
    cy.visit("https://example.cypress.io/")
    cy.contains("get").click()
    cy.get('#query-btn', {timeout: 6000})
        .should("contain","Button")
        .should("have.class", "query-btn")
        .should("be.visible")
        .should("be.enabled")

    cy.get("#query-btn").invoke("attr", "id")
        .should("equal", "query-btn")


    cy.get("#query-btn")
        .should("contain","Button")
        .and("have.class", "query-btn")
})