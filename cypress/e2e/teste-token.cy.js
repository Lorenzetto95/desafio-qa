it('Testa autenticação com GitHub API', () => {
  cy.request({
    method: 'GET',
    url: 'https://api.github.com/user',
    headers: {
      Authorization: `token ${Cypress.env('github_token')}`
    }
  }).then((res) => {
    expect(res.status).to.eq(200);
    cy.log(`Autenticado como: ${res.body.login}`);
  });
});
