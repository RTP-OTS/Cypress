
it('should be able to login', () => {

cy.visit('https://oba-frontend-web-app-dev.se.scb.co.th/')
cy.get('#username').type('s99973')
cy.get('#password').type('scb1234!')
cy.get('#login').click()

cy.get('[name="dropdown"]').click();
cy.contains('option', 'สาขารัชโยธิน (0111)').then(option => {
    cy.get('[name="dropdown"]').select(option.val());
});
cy.get("[name='submitDropdown']").click();

});
