describe('app spec', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/');

    // Must present the header
    cy.get('h1').contains('Welcome to');

    // Must respond to the api route
    cy.request('/api/hello')
      .its('body')
      .should('deep.equal', { name: 'John Doe' });
  });
});
