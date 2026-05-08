// BUG IDENTIFICADO:
// Sistema apresenta mensagem de login incorreto
// mesmo utilizando credenciais válidas.

describe('Bug no fluxo de autenticação', () => {

  it('Não deveria exibir mensagem de erro para login válido', () => {

    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]')
      .type('qa@test.com')

    cy.get('input[type="password"]')
      .type('123456')

    cy.contains('Entrar')
      .click()

    cy.contains('Seu login está incorreto, quer continuar?')
      .should('exist')

  })

})