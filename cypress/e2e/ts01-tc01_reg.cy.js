require('cypress-xpath');
describe('Register page with invalid information', () => {
    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F');
    });
  
    it('should display the registration page', () => {
      cy.title().should('contain', 'nopCommerce demo store. Register');
    });
  
    it('should allow selecting gender and filling in personal information', () => {
      cy.get('#gender-male').click();
      cy.get('#FirstName').type('RTP');
      cy.get('#LastName').type('OTGS');
      cy.get('select[name="DateOfBirthDay"]').select('4');
      cy.get('select[name="DateOfBirthMonth"]').select('8');
      cy.get('select[name="DateOfBirthYear"]').select('1992');
    });
  
    it('should allow entering email, company, and password', () => {
      //const randomEmail = generateRandomEmail(); // Assuming you have this function defined
      cy.get('#Email').type('testing_automated12@gmail.com');
      cy.get('#Company').type('Playwright');
      cy.get('#Newsletter').check();
      cy.get('#Password').type('abc123456');
      cy.get('#ConfirmPassword').type('abc123456');
    });
  
    it('should submit the registration form and continue', () => {
      cy.get('#register-button').click();
      //cy.url().should('include', '/registerresult'); // Assuming registration redirects here
      cy.get('a[href*="/customer/info"]').click(); // Assuming the "Continue" link has this href
    });
  });
  