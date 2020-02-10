/// <reference types="cypress" />
describe('page', () => {
  // it('works', () => {
  //   cy.visit('https://example.cypress.io')
  // })
  it('fails', () => {
    cy.visit('https://ourworldindata.org/polio')
    // cy.wait(5000) // no effect
    cy.contains('here').click() // error: CypressError: Timed out retrying: Constructor is not a constructor
  })
})
