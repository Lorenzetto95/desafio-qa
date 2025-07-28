Cypress.Commands.add('contato', (usuario, email, empresa, cargo, telefone, mensagem) => { 
    cy.get('#form-field-name').type(usuario);
    cy.get('#form-field-email').type(email);
    cy.get('#form-field-message').type(empresa);
    cy.get('#form-field-field_67e0483').type(cargo);
    cy.get('#form-field-field_5778e7b').type(telefone);
    cy.get('#form-field-field_f77a763').type(mensagem);
    cy.get('#form-field-field_7651528').click();
    cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper').should('be.visible');
 })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })