describe('Deve acessar a Página Inicial e clicar em "Contato"', () => {
    beforeEach(() => {
      cy.visit('https://nexdom.tec.br/');
      cy.get('#e-n-menu-title-2395 > .e-n-menu-title-container > .e-n-menu-title-text').click();
      
  })
      it('Então deve preencher os campos com dados de teste', () => {
        cy.get('#form-field-name').type('Usuário de Teste');
        cy.get('#form-field-email').type('Email_de_Teste@gmail.com');
        cy.get('#form-field-message').type('Empresa de Teste');
        cy.get('#form-field-field_67e0483').type('Analista de QA');
        cy.get('#form-field-field_5778e7b').type('11999999999');
        cy.get('#form-field-field_f77a763').type('Olá, gostaria de saber mais sobre os serviços oferecidos pela NEXDOM Healthtech.');
        cy.get('#form-field-field_7651528').click();
        cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper').should('be.visible');
      })
})