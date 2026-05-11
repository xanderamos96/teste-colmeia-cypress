Funcionalidade: Login

Como um usuário da aplicação
Quero acessar o sistema
Para utilizar as funcionalidades disponíveis

#################################################################
# Arquivo de automação:
# cypress\e2e\login\testes_login\success_login_credenciais_válidas.cy.js
Cenário: Realizar login com sucesso 

Dado que o usuário acessa a tela de login
E informa um email válido
E informa uma senha válida
Quando clicar no botão "Entrar"
Então o sistema deve autenticar o usuário com sucesso

obs: Para caso de não exposição do email e senha, necessário consultar o QA para receber o email e senha válidos utilizados para teste.

#################################################################
# Arquivo de automação:
# cypress\cypress\e2e\login\testes_bugs_login\bug_login_mensagem_incorreta_apos_login_valido.cy.js
Cenário: Sistema apresenta mensagem incorreta para login válido

Dado que o usuário informa credenciais válidas
Quando clicar no botão "Entrar"
Então o sistema não deveria apresentar a mensagem:
"Seu login está incorreto, quer continuar?"

#################################################################
# Arquivo de automação:
# cypress\cypress\e2e\login\testes_bugs_login\bug_login_acesso_dashboard_sem_credenciais.cy.js
Cenário: Não permitir acesso ao dashboard sem autenticação

Dado que o usuário não realizou login na aplicação
Quando acessar diretamente a URL:
"https://teste-colmeia-qa.colmeia-corp.com/dashboard"
Então o sistema deve redirecionar o usuário para a tela de login
E o acesso ao dashboard não deve ser permitido