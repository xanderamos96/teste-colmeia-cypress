// BUG IDENTIFICADO:
// Sistema permite acesso ao dashboard
// sem autenticação prévia.

describe('Proteção de rota', () => {

  it('Não deveria permitir acesso ao dashboard sem login', () => {

    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')

    cy.url()
      .should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/dashboard')

  })

})