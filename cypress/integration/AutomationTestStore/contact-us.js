/// <reference types="Cypress" />

describe("Automation Test store ",()=>{
    it("Should be able to submit successful submition via contct us form", ()=>{
        cy.visit("https://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("joe").should('have.value', 'joe')
        cy.get('#ContactUsFrm_email').type("fake@gmail.com").should('have.value', 'fake@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type("testing going on").should('have.value', 'testing going on')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')


    })

})