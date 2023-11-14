describe('Go to URL', () => {
  it('TC01-Can go to webpage and verify title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')

    cy.get("input[name='username'][class='oxd-input oxd-input--active']").type("Admin") 

    cy.get("input[name='password']").type("admin123")

    cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

    cy.get("span[class='oxd-topbar-header-breadcrumb']").contains("Dashboard")


    
  })

})