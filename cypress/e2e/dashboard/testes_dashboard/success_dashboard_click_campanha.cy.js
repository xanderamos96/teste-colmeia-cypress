
describe('Click no botão Campanha', () => {

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

  it('Validar se o botão Campanha é clicavel', () => {

    cy.url()
      .should('include', '/dashboard')

    // Valida botão Campanha
    cy.xpath('/html/body/app-root/ng-component/div/div/aside/a')
      .click()

   cy.url()
      .should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha')

    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/div/menu/ul/li[1]/a')
      .should('exist')
      .should('be.visible')

    cy.xpath('/html/body/app-root/ng-component/div/div/ng-component/div/menu/ul/li[2]/a')
      .should('exist')
      .should('be.visible')

    cy.log('Botão Campanha clicado com sucesso e redirecionado para a página de Campanha')  

      
      


    
    


    

})

})