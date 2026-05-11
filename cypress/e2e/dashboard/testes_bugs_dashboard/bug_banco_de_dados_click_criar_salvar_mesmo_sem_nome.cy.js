// BUG IDENTIFICADO:
// Botão Salvar salvando mesmo sem preencher o nome do banco de dados, e não exibe mensagem de erro.

describe('Bug: Salvar sem nome do banco de dados', () => {

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

  it('Não Deve deixar salvar mesmo depois de apresentar mensagem de erro ao tentar salvar banco de dados sem preencher o nome', () => {

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
      

    // Validação botão Salvar
      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/button')
      .should('exist')
      .should('be.visible')
      .click()

    // Validação se exibe mensagem de erro ao tentar criar banco de dados sem preencher o nome
      cy.contains('O nome do item é obrigatório')
      .should('exist')
      .should('be.visible') 

      cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/ng-component/div[2]/div/button')
      .should('exist')
      .should('be.visible')
      .click()


      cy.log('BUG: O sistema permitiu salvar mesmo sem preencher o nome do banco de dados e depois de exibir mensagem de erro.')
    
  })

})