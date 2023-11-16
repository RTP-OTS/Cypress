/// <refernce types="Cypress" />

describe("Check UI Element" , () => {

    it("Check Radio Button" ,() => {

            cy.visit("https://example.cypress.io/commands/actions")
            cy.get("input[value='checkbox1']").should('be.visible')
            cy.get("input[value='checkbox1']").should('be.checked')

            cy.get(".action-checkboxes [type='checkbox']").first().check()
            .should('be.checked')

            cy.get(".action-checkboxes [type='checkbox']").last().check()
            .should('be.checked')


            // Check radio button should be disable
            cy.get('.action-radios [disabled]')
            .check({ force: true }).should('be.checked')
        })
})