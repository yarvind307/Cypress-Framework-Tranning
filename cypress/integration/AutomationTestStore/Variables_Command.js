/// <reference types="Cypress" />

describe("Vrifing variables, cypress commands and jqury commands",()=>{
    it("Navigating to specific product pages", ()=>{
        cy.visit("https://www.automationteststore.com/")
     /*  
    //This will pass.
        const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        makeupLink.click();
        const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
       skincareLink.click();


//This will fail.
       cy.visit("https://www.automationteststore.com/")
        const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        makeupLink.click();
        skincareLink.click();

        */

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()

    })


})