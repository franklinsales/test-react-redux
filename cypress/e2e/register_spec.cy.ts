import "cypress-localstorage-commands";

describe('Register E2E Fail Test', () => {
    it('Fill the username, password and confirmation password. Confirmation password is wrong, check for invalid message.', () => {
      cy.visit('http://localhost:3000/sign-up')
    
        // Get an input, type into it and verify that the value has been updated
        cy.get('[data-cy="register_input_username"]')
            .type('teste1')
  
        cy.get('[data-cy="register_input_password"]')
            .type('123')

        cy.get('[data-cy="register_input_password_confirmation"]')
            .type('123456')
  
        cy.get('[data-cy="btn_register"]').should('be.disabled');
    })
  })


  describe('Register E2E Success Test', () => {
    it('Fill the username, password and confirmation password. Check for valid message.', () => {
      cy.visit('http://localhost:3000/sign-up')
    
        // Get an input, type into it and verify that the value has been updated
        cy.get('[data-cy="register_input_username"]')
            .type('teste1')
  
        cy.get('[data-cy="register_input_password"]')
            .type('123')

        cy.get('[data-cy="register_input_password_confirmation"]')
            .type('123')
  
        cy.get('[data-cy="btn_register"]').click();

        cy.contains("Cadastro Realizado com Sucesso!");
    })
  })