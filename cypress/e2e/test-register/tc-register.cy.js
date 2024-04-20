const { generateRandomEmail } = require ('../Resource/utils_generateEmail');
const { RegistrationPage } = require('../../../Pageobject/registrationPage')

beforeEach(() => {
    cy.fixture('userData').as('userData');
});

describe('Registration Test', () => {
    const registrationPage = new RegistrationPage();
    const randomEmail = generateRandomEmail();

    it('successfully registers a user', function () {  
        registrationPage.navigateTo();
        registrationPage.selectGender(this.userData.user.gender);
        registrationPage.enterFirstName(this.userData.user.firstName);
        registrationPage.enterLastName(this.userData.user.lastName);
        registrationPage.selectDateOfBirth(
            this.userData.user.dateOfBirth.day,
            this.userData.user.dateOfBirth.month,
            this.userData.user.dateOfBirth.year
        );
        // cy.pause();
        registrationPage.enterEmail(randomEmail);
        registrationPage.enterCompanyName(this.userData.user.companyName);
        registrationPage.toggleNewsletter(this.userData.user.subscribeToNewsletter);
        registrationPage.enterPassword(this.userData.user.password);
        registrationPage.submitRegistration();
        cy.pause();
        registrationPage.continueAfterRegistration();
    });
});
