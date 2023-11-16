describe ('Dropdown',() => {

    it.skip ('Dropdown selection', () =>{
        
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#opc-product-selection [id="product_3186"]')
        .check()
        .should('be.visible')
        
        cy.get('#customer_details [name="travname"]')
        .type('RTP')

        cy.get('#customer_details [name="travlastname"]')
        .type('OTGS')

        cy.get('#customer_details []')

    })
})


    it ('Auto Search dropdown' ,() =>{

        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput')
        .type('Lopburi') // input lopburi
 
        cy.get('#searchInput')
        .should('have.value','Lopburi') // verify Lopburi on input

        cy.get('.suggestion-title')
        .contains('Lopburi').click() // Click lopburi

        cy.get('.mw-first-heading')
        .contains('Lopburi')

       
    })