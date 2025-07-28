# Desafio QA Pleno - NEXDOM

## Resumo

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Pré-requisitos

Para o funcionamento completo, se faz necessária a instalação dos itens abaixo:
- [Cypress](https://www.cypress.io)
- [Node.js](https://www.npmjs.com/mochawesome)
- [mochawesome](https://www.npmjs.com/mochawesome)
- [Cypress plugin API](https://github.com/filiphric/cypress-plugin-api) (Opcional)

### Instalação

- Faça o download .zip do arquivo, e extraia em uma pasta de sua preferência;
- Abra seu editor de código-fonte (VSCode ou similares) e selecione a pasta do arquivo baixado;

*Se já tem instalado os seguintes pacotes, pode pular para o próximo tópico.*


**Para instalação do Cypress**:

Abra o terminal e digite:

    npm install cypress --save-dev

**Para instalação do mochawesome:**

Abra o terminal e digite:

    npm install --save-dev mochawesome

**Para instalação do Cypress plugin API** (Opcional):

Abra o terminal e digite:

    npm i cypress-plugin-api


**Para instalação do Node.js**

    https://nodejs.org/pt/download


## Rodando os testes


No terminal, digite:

    npx cypress open

Para testar em modo Headless:

    npx cypress run

Para realização de um teste específico(Headless), utilizar o comando:

    npx cypress run --spec "cypress/e2e/exemplo.cy.js"


## Versões

- **Versão 1.0 (Final)**

## Autor

  - **Diego Lorenzetto** 

## Créditos

- [Filip Hrich](https://filiphric.com)


