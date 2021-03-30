/// <reference types="Cypress" />

describe("Test Contect US page ",()=>{
    it("Should be able to submit successful submition via contct us form", ()=>{
        //Cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("arvind")
        cy.get('[name="last_name"]').type("Yadav")
        cy.get('[name="email"]').type("fake@gmail.com")
        cy.get('textarea.feedback-input').type("Testing")
        cy.get('[type="submit"]').click({force: true})



    })

    it("Should not be able to submit successful submition via contct us form", ()=>{
        //Cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("arvind")
        cy.get('[name="last_name"]').type("Yadav")
        cy.get('textarea.feedback-input').type("Testing")
        cy.get('[type="submit"]').click({force: true})


    })



})