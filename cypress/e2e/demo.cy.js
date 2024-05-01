import '@testing-library/cypress/add-commands'


describe('Login Tests', () => {
    const urlWeb = "http://the-internet.herokuapp.com/login";
    const validUser = "tomsmith";
    const validPassword = "SuperSecretPassword!";
    const invalidUser = "tomholland";
    const invalidPassword = "Password!";

    beforeEach(() => {
        cy.visit(urlWeb);
    });

    it('Testcase 1 - Login success', () => {
        cy.get('#username').type(validUser);
        cy.get('#password').type(validPassword);
        cy.get('[type="submit"]').click();

        cy.get('#flash-messages').contains('You logged into a secure area!');
        cy.get('a').contains('Logout').click();
        cy.url().should('include', urlWeb);
        cy.get('#flash-messages').contains('You logged out of the secure area!');
    });

    it('Testcase 2 - Login failed Password incorrect', () => {
        cy.get('#username').type(validUser);
        cy.get('#password').type(invalidPassword);
        cy.get('[type="submit"]').click();

        cy.get('#flash-messages').should('be.visible').and('contain', 'Your password is invalid!');
    });

    it('Testcase 3 - Login failed Username not found', () => {
        cy.get('#username').type(invalidUser);
        cy.get('#password').type(validPassword);
        cy.get('[type="submit"]').click();

        cy.get('#flash-messages').should('be.visible').and('contain', 'Your username is invalid!');
    });
});
