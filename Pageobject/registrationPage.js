class RegistrationPage {
    constructor() {
        this.urls = {
            registrationPage: 'https://demo.nopcommerce.com/register?returnUrl=%2F'
        };
        this.selectors = {
            gender: (gender) => `#gender-${gender}`,
            firstName: '#FirstName',
            lastName: '#LastName',
            dobDay: 'select[name="DateOfBirthDay"]',
            dobMonth: 'select[name="DateOfBirthMonth"]',
            dobYear: 'select[name="DateOfBirthYear"]',
            email: '#Email',
            company: '#Company',
            newsletter: '#Newsletter',
            password: '#Password',
            confirmPassword: '#ConfirmPassword',
            registerButton: '#register-button',
            continueButton: 'Continue'
        };
    }

    navigateTo() {
        cy.visit(this.urls.registrationPage);
    }

    selectGender(gender) {
        cy.get(this.selectors.gender(gender)).click().should('be.checked');
    }

    enterFirstName(name) {
        cy.get(this.selectors.firstName).type(name).should('have.value', name);
    }

    enterLastName(name) {
        cy.get(this.selectors.lastName).type(name).should('have.value', name);
    }

    selectDateOfBirth(day, month, year) {
        cy.get(this.selectors.dobDay).select(day);
        cy.get(this.selectors.dobMonth).select(month);
        cy.get(this.selectors.dobYear).select(year);
    }

    enterEmail(email) {
        cy.get(this.selectors.email).type(email).should('have.value', email);
    }

    enterCompanyName(company) {
        cy.get(this.selectors.company).type(company).should('have.value', company);
    }

    toggleNewsletter(subscribe) {
        const action = subscribe ? 'check' : 'uncheck';
        cy.get(this.selectors.newsletter)[action]().should(subscribe ? 'be.checked' : 'not.be.checked');
    }

    enterPassword(password) {
        cy.get(this.selectors.password).type(password).should('have.value', password);
        cy.get(this.selectors.confirmPassword).type(password).should('have.value', password);
    }

    submitRegistration() {
        cy.get(this.selectors.registerButton).click();
        cy.url().should('include', '/registerresult');
    }

    continueAfterRegistration() {
        cy.contains(this.selectors.continueButton).click();
    }
}

module.exports = { RegistrationPage };
