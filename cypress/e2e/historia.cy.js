describe('Cronologia da Empresa', () => {
  it('Deve acessar a página inicial, clicar em "Saiba mais", e deve estar visível a cronologia da Empresa', () => {
    cy.visit('https://nexdom.tec.br/');
    cy.get('.elementor-element-bdbb258 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click();
    cy.contains('O início').should('be.visible');
    cy.contains('Essa importante trajetória iniciou - se com a criação do Projeto Sinergia ERP, cujo objetivo era integrar tecnologias e soluções desenvolvidas para a operação de planos de saúde (ERP).').should('be.visible');
    cy.contains('A evolução').should('be.visible');
    cy.contains('Prevendo evoluções em tecnologia, integração').should('be.visible');
    cy.contains('de novos modelos de negócio, processos e, principalmente, assegurar uma opção robusta').should('be.visible');
    cy.contains('e competitiva para as operadoras que buscam o').should('be.visible');
    cy.contains('melhor sistema de gestão, trazendo inovação para as cooperativas e possibilitando o melhor acesso à saúde aos 19,3 milhões de beneficiários do Sistema Unimed.').should('be.visible');
    cy.contains('Em 2024 o projeto Sinergia ERP evoluiu!').should('be.visible');
  })
  
})