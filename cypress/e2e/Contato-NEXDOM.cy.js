describe('Deve acessar a Página Inicial e clicar em "Contato"', () => {
    beforeEach(() => {
      cy.visit('https://nexdom.tec.br/');
      cy.get('#e-n-menu-title-2395 > .e-n-menu-title-container > .e-n-menu-title-text').click();
      
  })
    it('Então deve preencher os campos com dados de teste', () => {
      cy.contato('Usuário de Teste', 'email_de_teste@gmail.com', 'Empresa de Teste', 'Cargo de Teste', '11999999999', 'Olá, gostaria de mais informações sobre os serviços da NEXDOM.'); 
    
    })
})
