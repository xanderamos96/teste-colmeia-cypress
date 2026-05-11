// BUG IDENTIFICADO:
// Botão esqueceu sua senha não funcionando
describe('Botão de Esqueceu sua senha ', () => {

  it('Deve exibir a tela de recuperação de senha', () => {

    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.xpath('/html/body/app-root/ng-component/article/main/form/a')
      .contains('Esqueceu sua senha?')
      .click()

    cy.log('Teste do botão "Esqueceu sua senha?" concluído com sucesso.')
    cy.log('Podemos ver que o botão "Esqueceu sua senha?" está funcionando incorretamente, não redirecionando para a página de recuperação de senha.')
    
    cy.url()
      .should('include', '/recuperar-senha')

  
  })

})