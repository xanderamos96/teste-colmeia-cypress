Funcionalidade: Login

Como um usuário da aplicação
Quero acessar o sistema
Para utilizar as funcionalidades disponíveis

#################################################################

Cenário: Realizar login com sucesso - login_sucesso.cy.js

Dado que o usuário acessa a tela de login
E informa o email "qa@test.com"
E informa a senha "123456"
Quando clicar no botão "Entrar"
Então o sistema deve autenticar o usuário com sucesso

#################################################################

Cenário: Sistema apresenta mensagem incorreta para login válido

Dado que o usuário informa credenciais válidas
Quando clicar no botão "Entrar"
Então o sistema não deveria apresentar a mensagem:
"Seu login está incorreto, quer continuar?"

#################################################################

Cenário: Não permitir acesso ao dashboard sem autenticação

Dado que o usuário não realizou login na aplicação
Quando acessar diretamente a URL:
"https://teste-colmeia-qa.colmeia-corp.com/dashboard"
Então o sistema deve redirecionar o usuário para a tela de login
E o acesso ao dashboard não deve ser permitido