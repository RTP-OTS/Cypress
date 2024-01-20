/// <reference types="cypress-xpath" />
require('cypress-xpath');
describe("Assertions learning", () => {

    it.skip("Implicit assertions", () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq',"OrangeHRM")
        .and('contain',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value','Admin')
        cy.xpath("//a").should('have.length','5')

    })

    it("TC02-Add user in role admin", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value','Admin')
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("input[placeholder='Password']").should('have.value','admin123')
        
        cy.get("button[type='submit']").click()

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        
        cy.get('.oxd-table-filter-header-title > .oxd-text').contains('System Users')

        cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click()

        cy.get('.orangehrm-card-container > .oxd-text--h6').contains('Add User')

        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type('ESS')
        cy.contains(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input', 'ESS').click()

        



    })
})