import "cypress-localstorage-commands";

  describe('Search E2E Success Test', () => {

    before(() => {
      cy.register('test1', '123')
      cy.saveLocalStorage();
    });
    
    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    it('Fill the username. Check if result was found.', () => {
      cy.visit('http://localhost:3000/sign-up')
    
        // Get an input, type into it and verify that the value has been updated
        cy.get('[data-cy="search_input_username"]')
            .type('test1')
  
        cy.get('[data-cy="btn_search"]').click();

        cy.get('table').should('contain', 'test1');
    })
  })


  describe('Search E2E Success Test', () => {

    before(() => {
      cy.register('test1', '123')
      cy.saveLocalStorage();
    });
    
    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    it('Fill the username. Check if result was not found.', () => {
      cy.visit('http://localhost:3000/sign-up')
    
        // Get an input, type into it and verify that the value has been updated
        cy.get('[data-cy="search_input_username"]')
            .type('test2')
  
        cy.get('[data-cy="btn_search"]').click();

        cy.get('table').should('not.contain', 'test1');
    })
  })