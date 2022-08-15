describe('Testing home page', () => {
  it('Visits the home page and redirects to auth page', () => {
    cy.visit('/auth');

    cy.get('input[name="username"]').type('tandel');
    cy.get('input[name="password"]').type('pass123');

    cy.get('.btn').click();

    // cy.screenshot();
    cy.wait(5000);
    cy.get('nav').should('be.visible');
  });
});
