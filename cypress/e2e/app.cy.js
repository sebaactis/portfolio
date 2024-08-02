describe("Main to more about me", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    it("Should display the main name", () => {
        cy.get("h2").contains("SEBASTIAN")
    })

    it("Go to more about me page", () => {
        cy.visit("http://localhost:3000/")

        cy.get("a").contains("MORE ABOUT ME").click();

        cy.url().should('include', '/aboutme')

        cy.get("h2").contains("I am a developer living in Buenos Aires, Argentina.")

    })
})