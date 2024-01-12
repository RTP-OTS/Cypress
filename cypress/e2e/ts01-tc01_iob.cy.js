describe('Create a new account', () => {
    beforeEach(() => {
      cy.visit('https://iwealth-uat.se.scb.co.th/portalserver/scb-indi/login')
    })
  
    it('should be able to login', () => {
      // Enter username and password
      cy.get('#username').type('s99973')
      cy.get('#password').type('scb1234!')
  
      // Click login button
      cy.get('#login').click()
  
      // Verify that login is successful
      cy.contains('ข้อความของคุณถูกส่งไปยังผู้อนุมัติเรียบร้อยแล้ว')
    })
  
    it('should be able to select a branch', () => {
      // Click branch dropdown
      cy.get('#dropdown').click()
  
      // Select branch
      cy.get('li[data-value="0111"]').click()
  
      // Verify that branch is selected
      cy.get('#dropdown').should('have.value', '0111')
    })
  
    it('should be able to fill out personal information', () => {
      // Fill out name
      cy.get('#name').type('สมชาย')
      cy.get('#surname').type('ชายสม')
  
      // Fill out address
      cy.get('#address').type('999/111')
      cy.get('#moo').type('20')
      cy.get('#trok').type('บ้าน')
  
      // Fill out city
      cy.get('#city').type('บ้านเป็ด')
  
      // Fill out occupation
      cy.get('#occupation').type('พนักงานบริษัท')
  
      // Fill out source of income
      cy.get('#sourceOfIncome').type('ไทย')
  
      // Fill out actual income
      cy.get('#actualIncome').type('9000')
  
      // Fill out marital status
      cy.get('#maritalStatus').type('โสด')
  
      // Fill out contact information
      cy.get('#mobile_areacode_0').type('088')
      cy.get('#mobile_number_0').type('1234567')
      cy.get('#email_number_0').type('test@example.com')
  
      // Verify that personal information is filled out correctly
      cy.get('#name').should('have.value', 'สมชาย')
      cy.get('#surname').should('have.value', 'ชายสม')
      cy.get('#address').should('have.value', '999/111 บ้านเป็ด')
      cy.get('#city').should('have.value', 'บ้านเป็ด')
      cy.get('#occupation').should('have.value', 'พนักงานบริษัท')
      cy.get('#sourceOfIncome').should('have.value', 'ไทย')
      cy.get('#actualIncome').should('have.value', '9000')
      cy.get('#maritalStatus').should('have.value', 'โสด')
      cy.get('#mobile_areacode_0').should('have.value', '088')
      cy.get('#mobile_number_0').should('have.value', '1234567')
      cy.get('#email_number_0').should('have.value', 'test@example.com')
    })
  
    it('should be able to complete the application', () => {
      // Click save button
      cy.get('#customer-info').find('button[name="save"]').click()
  
      // Verify that application is completed
      cy.contains('ข้อความของคุณถูกส่งไปยังผู้อนุมัติเรียบร้อยแล้ว')
    })
  })