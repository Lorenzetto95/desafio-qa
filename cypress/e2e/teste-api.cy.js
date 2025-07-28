describe('Teste de API do GitHub com Cypress', () => {
  const githubToken = Cypress.env('github_token');
  const githubUsername = Cypress.env('github_username');

  const headers = {
    Authorization: `token ${githubToken}`,
    Accept: 'application/vnd.github.v3+json'
  };

  const repoName = `repo-teste-cypress-${Date.now()}`;
  let issueNumber;

  it('1. Cria um repositório', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.github.com/user/repos',
      headers,
      body: {
        name: repoName,
        description: 'Repositório de teste criado com Cypress',
        private: false
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.log(`Repositório ${repoName} criado.`);
    });
  });

  it('2. Consulta o repositório', () => {
    cy.request({
      method: 'GET',
      url: `https://api.github.com/repos/${githubUsername}/${repoName}`,
      headers
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(repoName);
    });
  });

  it('3. Cria uma issue no repositório', () => {
    cy.request({
      method: 'POST',
      url: `https://api.github.com/repos/${githubUsername}/${repoName}/issues`,
      headers,
      body: {
        title: 'Issue de teste Cypress',
        body: 'Esta é uma issue criada automaticamente via teste.'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      issueNumber = response.body.number;
      cy.log(`Issue #${issueNumber} criada.`);
    });
  });

  it('4. Consulta a issue criada', () => {
    cy.request({
      method: 'GET',
      url: `https://api.github.com/repos/${githubUsername}/${repoName}/issues/${issueNumber}`,
      headers
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Issue de teste Cypress');
    });
  });

  it('5. Exclui o repositório', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.github.com/repos/${githubUsername}/${repoName}`,
      headers
    }).then((response) => {
      expect(response.status).to.eq(204);
      cy.log(`Repositório ${repoName} excluído.`);
    });
  });

  it('6. Verifica se o repositório foi excluído', () => {
    cy.request({
      method: 'GET',
      url: `https://api.github.com/repos/${githubUsername}/${repoName}`,
      headers,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
