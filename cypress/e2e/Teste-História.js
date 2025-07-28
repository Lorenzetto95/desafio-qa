describe('Deve acessar a Página Inicial', () => {
  beforeEach(() => {
        cy.visit('https://nexdom.tec.br/');
})

      it('Então deve clicar em "Saiba mais"', () => {
        cy.get('.elementor-element-bdbb258 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click();
      })

      it('Deve estar visível a cronologia da Empresa', () => {
        cy.contains('2021').should('be.visible');
        cy.contains('O início').should('be.visible');
        cy.contains('Essa importante trajetória iniciou - se com a criação do Projeto Sinergia ERP, cujo objetivo era integrar tecnologias e soluções desenvolvidas para a operação de planos de saúde (ERP).').should('be.visible');
        cy.contains('Imagem').should('be.visible');
        cy.contains('2023').should('be.visible');
        cy.contains('A evolução').should('be.visible');
        cy.contains('Prevendo evoluções em tecnologia, integração').should('be.visible');
        cy.contains('de novos modelos de negócio, processos e, principalmente, assegurar uma opção robusta').should('be.visible');
        cy.contains('e competitiva para as operadoras que buscam o').should('be.visible');
        cy.contains('melhor sistema de gestão, trazendo inovação para as cooperativas e possibilitando o melhor acesso à saúde aos 19,3 milhões de beneficiários do Sistema Unimed.').should('be.visible');
        cy.contains('Em 2024 o projeto Sinergia ERP evoluiu!').should('be.visible');
        cy.contains('Imagem').should('be.visible');
        cy.contains('2024').should('be.visible');
        cy.contains('A NEXDOM').should('be.visible');
        cy.contains('E com isso, o nascimento de uma nova empresa: NEXDOM Healthtech.').should('be.visible');
        cy.contains('A condução do Sinergia ERP foi realizada por executivos com experiência em Tecnologia e Negócios e dirigentes das seis empresas do Sistema Unimed que, com governança proprietária e de acordo com as boas práticas do mercado, criaram uma empresa única que já nasceu com a estrutura de mais de 300 colaboradores.').should('be.visible');
        cy.contains('Imagem').should('be.visible');
      })


})

//npx cypress run
//npm install --save-dev- mochawesome