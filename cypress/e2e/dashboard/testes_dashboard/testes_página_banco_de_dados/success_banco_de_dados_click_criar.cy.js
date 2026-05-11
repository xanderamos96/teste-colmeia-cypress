describe('Click no botão de criar banco de dados', () => {

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

  it('Deve permitir criar um novo banco de dados', () => {

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

    // Validação título modal de criação de banco de dados
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/h2')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Adicionar novo item')

    // Validação do campo de nome do banco de dados
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/div/input')
      .should('exist')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Nome do item')
      .type('Teste Cypress')

    // Validação botão Salvar
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/button')
      .should('exist')
      .should('be.visible')
      .click()

    // Validação se o banco de dados foi criado com sucesso
      cy.contains('Teste Cypress')
      .should('exist')
      .should('be.visible') 

      cy.log('Banco de dados criado com sucesso!')
    
  })

})