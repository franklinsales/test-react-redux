/// <reference types="cypress" />

import "cypress-localstorage-commands";

describe('Login E2E Fail Test', () => {
  it('Fill the username and password fields with an invalid username, check for invalid username message.', () => {
    cy.visit('http://localhost:3000/')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('[data-cy="login_input_username"]')
          .type('teste1')

      cy.get('[data-cy="login_input_password"]')
          .type('teste')

      cy.get('[data-cy="btn_login"]').click();

      cy.contains("Usuário inválido! Tente novamente.");
  })
})

describe('Login E2E Success Test', () => {
  
  before(() => {
    cy.register('test1', '123')
    cy.saveLocalStorage();
  });
  
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  it('Fill the username and password fields with an invalid username, check for invalid username message.', () => {
    cy.visit('http://localhost:3000/')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('[data-cy="login_input_username"]')
          .type('test1')

      cy.get('[data-cy="login_input_password"]')
          .type('123')

      cy.get('[data-cy="btn_login"]').click();

      cy.contains("Login Realizado com Sucesso.");
  })
})