// BUG IDENTIFICADO:
// Botão Candidato sem ação ao clicar.

describe('Bug - Click no botão Candidato', () => {

   beforeEach(() => {

    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]')
      .type('qa@test.com')

    cy.get('input[type="password"]')
      .type('123456')

    cy.contains('Entrar')
      .click()

    cy.contains('Continuar')
      .click()

  })

  it('Validar se o botão Candidato é clicavel', () => {

    cy.url()
      .should('include', '/dashboard')


    // Valida botão Candidato
    cy.contains('Candidato')
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled')
      .click()


    cy.log('Teste concluído com sucesso!');
    cy.log('Não foi possível clicar no botão Candidato, indicando um bug na funcionalidade.');
    
    cy.url()
      .should('include', '/candidato')


    

})

})