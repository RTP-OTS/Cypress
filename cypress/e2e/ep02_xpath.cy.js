/// <reference types="cypress-xpath" />

describe('Xpath', () =>{

    it ('find locator by xpath', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//div[@id='app']")

    })
})