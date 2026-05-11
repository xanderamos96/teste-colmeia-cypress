// BUG IDENTIFICADO:
// Botão Refresh apaghando os bancos de dados criados.
describe('Botão refresh', () => {

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

  it('Deve atualizar a lista de bancos de dados ao clicar no botão de refresh', () => {

    cy.url()
      .should('include', '/dashboard')

    cy.xpath('/html/body/app-root/ng-component/div/div/aside/a')
      .click()

   cy.url()
      .should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha')

    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/div/menu/ul/li[1]/a')
      .should('exist')
      .should('be.visible')
      .click()

    cy.url()
      .should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha/bancos-de-dados')

    // Validação do botão de criar banco de dados
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[2]/button[2]')
      .should('exist')
      .should('be.visible')
      .click()

    // Preenchimento do campo de nome do banco de dados
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/div/input')
      .should('exist')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Nome do item')
      .type('Teste Cypress1')

    // Validação botão Salvar
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/button')
      .should('exist')
      .should('be.visible')
      .click()

      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table')
      .contains(/^Teste Cypress1$/)

    cy.wait(2000)

    // Validação do botão de refresh
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[2]/button[1]')
        .should('exist') 
        .should('be.visible')
        .click()

      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table')
      .should('not.contain', /^Teste Cypress1$/)

    cy.log('BUG: Banco de dados criado e removido da lista após clicar no botão de refresh!')

      
    
  })

})