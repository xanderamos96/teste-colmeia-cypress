describe('Login inválido', () => {

  it('Deve impedir login com credenciais incorretas', () => {

    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]')
      .type('usuario_invalido@test.com')

    cy.get('input[type="password"]')
      .type('senha_incorreta')

    cy.contains('Entrar')
      .click()

    cy.contains('Usuário ou senha inválidos')
      .should('be.visible')

    cy.url()
      .should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/')

    cy.log('Teste de login inválido concluído com sucesso.')
    cy.log('Podemos ver que o sistema impede o login com credenciais incorretas, exibindo a mensagem de erro apropriada e mantendo o usuário na página de login.')

  })

})