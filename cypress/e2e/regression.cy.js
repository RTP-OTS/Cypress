const { generateRandomEmail }=require ('./Resource/utils_generateEmail');
const JSONdata  = require ('./Resource/config.json')

describe('Register page when input invalid information', () => {
    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F');
    });
  
    it('should display the correct page title', () => {
      cy.title().should('eq', 'nopCommerce demo store. Register');
    });
  
    it('should allow user to register with valid details', () => {
      // Select gender
      cy.get('#gender-male').click().should('be.checked');
  
      // Fill in first name
      cy.get('#FirstName').type(JSONdata.user.username).should('have.value', JSONdata.user.username);
  
      // Fill in last name
      cy.get('#LastName').type(JSONdata.account).should('have.value', JSONdata.account);
  
      // Select date of birth
      cy.get('select[name="DateOfBirthDay"]').select('4').should('have.value', '4');
      cy.get('select[name="DateOfBirthMonth"]').select('August').should('have.value', '8');
      cy.get('select[name="DateOfBirthYear"]').select('1992').should('have.value', '1992');
  
      // Generate a random email and fill in the email input
      const randomEmail = generateRandomEmail();
      cy.get('#Email').type(randomEmail).should('have.value', randomEmail);
  
      // Fill in company name
      cy.get('#Company').type('Cypress').should('have.value', 'Cypress');
  
      // Check the newsletter option
      cy.get('#Newsletter').check().should('be.checked');
  
      // Fill in the new password
      cy.get('#Password').type('abc123456').should('have.value', 'abc123456');
  
      // Confirm the new password
      cy.get('#ConfirmPassword').type('abc123456').should('have.value', 'abc123456');
  
      // Submit the registration form and verify navigation
      cy.get('#register-button').click();
      cy.url().should('include', '/registerresult');
  
      // Continue to the next page after registration
      cy.contains('Continue').click();
    });
  });
  