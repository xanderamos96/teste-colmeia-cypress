describe('Pesquisar banco de dados', () => {

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

  it('Deve permitir pesquisar um banco de dados existente', () => {

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

    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[2]/button[2]')
      .should('exist')
      .should('be.visible')
      .click()
    // Preenchimento do campo de nome do banco de dados
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/div/input')
      .should('exist')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Nome do item')
      .type('Teste Cypress2')

    // Validação botão Salvar
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/button')
      .should('exist')
      .should('be.visible')
      .click()


    // Validação do campo pesquisar
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .should('exist')
      .should('be.visible')
      .click()
      .type('Teste Cypress1')  
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .click()
      cy.wait(2000) 
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table')
        .contains(/^Teste Cypress1$/)
    cy.log('Pesquisa de somente o banco de dados "Teste Cypress1", deve ser filtrado todos os bancos de dados que contenham "Teste Cypress1" no nome.')
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .clear()

      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .should('exist')
      .should('be.visible')
      .click()
      .type('Teste Cypress2')  
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .click()
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table')
        .contains(/^Teste Cypress2$/)
      cy.wait(2000) 
      cy.log('Pesquisa de somente o banco de dados "Teste Cypress2", deve ser filtrado todos os bancos de dados que contenham "Teste Cypress2" no nome.')
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .clear()

      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .should('exist')
      .should('be.visible')
      .click()
      .type('Teste Cypress')  
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .click()
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table')
        .contains('Teste Cypress')
      cy.wait(2000)
      cy.log('Pesquisa de somente o banco de dados "Teste Cypress", deve ser filtrado todos os bancos de dados que contenham "Teste Cypress" no nome.')
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .clear()

    cy.log('Teste de pesquisa de banco de dados concluído com sucesso.')

  })

})