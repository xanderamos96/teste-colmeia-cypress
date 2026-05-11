describe('Elementos da tela Bancos de dados', () => {

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

  it('Deve exibir os elementos principais da tela Bancos de dados', () => {

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

    // Validação do texto Bancos de dados
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/h2')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Bancos de dados')

    // Validação do botão de Arquivar
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/button')
      .should('exist')
      .should('be.visible') 

    // Validação do campo de busca com placeholder
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/input')
      .should('exist')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Pesquisar');
    
    // Validação do botão de pesquisar do campo de busca
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[1]/div/button')
      .should('exist')
      .should('be.visible')

    // Validação do botão refresh
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[2]/button[1]')
      .should('exist')
      .should('be.visible')
    
    // Validação do botão de criar banco de dados
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div/div[2]/button[2]')
      .should('exist')
      .should('be.visible')

    // Validação existência da tabela de bancos de dados
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table')
      .should('exist')
      .should('be.visible')

    // Validação do texto de nenhum banco de dados encontrado
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table/tbody/tr/td[1]')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Nenhum banco de dados encontrado')

    // Validação do texto da coluna Nome de banco de dados
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table/thead/tr/th[1]')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Nome do banco de dados')

    // Validação do texto da coluna data de criação
    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/table/thead/tr/th[2]')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Data de criação')
      
      cy.log('Elementos da tela de Bancos de dados validados com sucesso')
    
  })

})