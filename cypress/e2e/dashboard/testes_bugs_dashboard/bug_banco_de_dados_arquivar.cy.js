// BUG IDENTIFICADO:
// Botão de arquivar banco de dados não funcionando corretamente, o banco de dados arquivado não está aparecendo na lista de bancos de dados arquivados.
describe('Arquivar banco de dados', () => {

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

  it('Deve permitir arquivar um banco de dados', () => {

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
    
    // Validação botão Arquivar
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table/tbody/tr/td[3]/div/button[2]')
      .should('exist')
      .should('be.visible')
      .click()

    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/button')
      .should('exist')
      .should('be.visible')
      .click()

    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table')
      .should('not.contain', 'Teste Cypress1')

    cy.log('BUG: O banco de dados arquivado não está aparecendo na lista de bancos de dados arquivados.')

      
    
  })

})

