describe('Elementos da tela Dashboard', () => {

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

  it('Deve exibir os elementos principais da tela Dashboard', () => {

    cy.url()
      .should('include', '/dashboard')

    // Valida título da página
    cy.contains('Colmeia')
      .should('be.visible')

    // Valida imagem do título da página
    cy.get('img[alt="Colmeia"]')
      .should('be.visible')

    // Valida botão Candidato
    cy.contains('Candidato')
      .should('be.visible') 

    // Valida botão Campanha do submenu 
    cy.xpath('/html/body/app-root/ng-component/div/div/aside/a')
      .should('be.visible')


    

})

})