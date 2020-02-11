/// <reference types="cypress" />
describe('page', () => {
  // it('works', () => {
  //   cy.visit('https://example.cypress.io')
  // })
  it('fails', () => {
    // launch local server with npx http-server to serve files in /public
    cy.visit('http://127.0.0.1:8080/page1.html')
    // cy.wait(500)
    cy.contains('Page 2').click() // error: CypressError: Timed out retrying: Constructor is not a constructor
  })
})
