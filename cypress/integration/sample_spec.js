describe('Scénario 1', function() {
  it('Visit shop in localhost:4000', function() {
    cy.visit('http://localhost:4000/')
    cy.get('.add-to-cart-3').click()
    cy.get('.add-to-cart-3').click()
    cy.contains('Cart').click()
    cy.get('.item-cart').should('have.length', 1)
    cy.get('.clear-cart').click()
    cy.contains('Your cart is empty at the moment.')
    cy.get('.cart-link').contains('Cart')
  })
})