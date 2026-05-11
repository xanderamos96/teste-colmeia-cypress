describe('Elementos da tela Login', () => {

  it('Deve exibir os elementos principais da tela Login', () => {

    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    // Valida imagem com título da página
    cy.xpath('/html/body/app-root/ng-component/article/main/img')
      .should('be.visible')
      
    // Valida imagem de fundo da página
    cy.xpath('/html/body/app-root/ng-component/article/img')
      .should('be.visible')

    // Valida nome campo Login
    cy.contains('Login')
      .should('be.visible') 

    // Valida nome campo Email
    cy.contains('Email')
      .should('be.visible')

    // Valida nome campo Password
    cy.contains('Password')
      .should('be.visible')

    // Valida Esqueceu sua senha? 
    cy.contains('Esqueceu sua senha?')
      .should('be.visible')

    // Valida botão Entrar
    cy.contains('Entrar')
      .should('be.visible')

    
      
    

})

})