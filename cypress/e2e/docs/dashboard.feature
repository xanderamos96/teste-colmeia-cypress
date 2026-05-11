Funcionalidade: Validação dos elementos da tela Dashboard

Como um usuário autenticado
Quero visualizar corretamente os elementos principais do dashboard
Para garantir a usabilidade e funcionamento da aplicação

#################################################################
# Arquivo de automação:
# cypress\cypress\e2e\dashboard\testes_dashboard\success_elementos_dashboard.cy.js
Cenário: Exibir elementos principais da tela Dashboard

Dado que o usuário realizou login com sucesso
Quando acessar a tela Dashboard
Então o sistema deve exibir o título da página juntamente com a logo
E deve exibir o menu lateral de navegação com o submenu Campanha
E deve exibir botão de Candidato

#################################################################
# Arquivo de automação:
# cypress\cypress\e2e\dashboard\testes_dashboard\success_elementos_dashboard.cy.js
Cenário: Exibir elementos principais da tela Dashboard

Dado que o usuário realizou login com sucesso
Quando acessar a tela Dashboard
Então o sistema deve exibir o título da página juntamente com a logo
E deve exibir o menu lateral de navegação com o submenu Campanha
E deve exibir botão de Candidato

#################################################################
# Arquivo de automação:
# cypress\cypress\e2e\dashboard\testes_dashboard\success_elementos_dashboard.cy.js
Cenário: Exibir elementos principais da tela Dashboard

Dado que o usuário realizou login com sucesso
Quando acessar a tela Dashboard
Então o sistema deve exibir o título da página juntamente com a logo
E deve exibir o menu lateral de navegação com o submenu Campanha
E deve exibir botão de Candidato

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_bugs_dashboard\bug_click_botão_candidato.cy.js
Cenário: Botão Candidato deve permitir interação

Dado que o usuário está autenticado
Quando acessar a página "/dashboard"
Então o botão "Candidato" deve existir
E o botão "Candidato" deve estar visível
E o botão "Candidato" não deve estar desabilitado
Quando clicar no botão "Candidato"
Então o sistema deve executar a ação esperada

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_bugs_dashboard\bug_click_botão_candidato.cy.js
Cenário: Botão Campanha deve abrir submenu 

Dado que o usuário está autenticado
Quando acessar a página "/dashboard"
Então o botão "Camapanha" deve existir
E o botão "Campanha" deve estar visível
E o botão "Campanha" não deve estar desabilitado
Quando clicar no botão "Campanha"
Então o sistema deve abrir o submenu contendo os botões "Banco de dados" e "Colmeia Forms"

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_dashboard\success_click_botão_banco_de_dados.cy.js
Cenário: Botão Banco de dados redirecionar para a página de Banco de Dados 

Dado que o usuário está autenticado
Quando acessar a página "/dashboard"
Então o botão "Camapanha" deve existir
Quando clicar no botão "Campanha"
Então o sistema deve abrir o submenu contendo os botões "Banco de dados" e "Colmeia Forms"
Quando clicar no botão "Banco de Dados" deve ser redirecionado a página Banco de dados 

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_dashboard\success_click_botão_colmeia_forms.cy.js
Cenário: Botão Colmeia Forms redirecionar para a página de Colmeia Forms

Dado que o usuário está autenticado
Quando acessar a página "/dashboard"
Então o botão "Camapanha" deve existir
Quando clicar no botão "Campanha"
Então o sistema deve abrir o submenu contendo os botões "Banco de dados" e "Colmeia Forms"
Quando clicar no botão "Colmeia Forms" deve ser redirecionado a página Colmeia Forms

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_dashboard\testes_página_banco_de_dados\success_elementos_banco_de_dados.cy.js
Cenário: Exibir elementos da tela Bancos de Dados

Dado que o usuário está autenticado
Quando acessar a página de Bancos de Dados
Então o sistema deve exibir o título da página "Bancos de Dados"
E deve exibir o botão de Itens Arquivados
E deve exibir o campo de pesquisa de itens com o placeholder "Pesquisar" juntamente com o botão "Lupa" para buscar
E deve exibir o botão Refresh
E deve exibir o botão Criar 
E deve exibir a grid de itens de bancos de dados com as colunas "Nome do banco de dados", "Data de criação" e uma coluna com os botões de ações "Arquivar" e "Deletar"
Quando não houver nenhum item cadastrado da grid
Então o sistema deve apresentar a mensagem "Nenhum banco de dados encontrado" 

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_dashboard\testes_página_banco_de_dados\success_banco_de_dados_click_criar.cy.js
# cypress\e2e\dashboard\testes_bugs_dashboard\bug_banco_de_dados_click_criar_salvar_mesmo_sem_nome.cy.js
# cypress\e2e\dashboard\testes_dashboard\testes_página_banco_de_dados\fail_banco_de_dados_click_criar.cy.js

Cenário: Criar um item novo na tela Banco de dados

Dado que o usuário está autenticado
Quando acessar a página de Bancos de Dados
E clicar no botão "Criar"
Então o sistema deve exibir abrir uma modal
E deve exibir o titulo "Adicionar novo item"
E deve exibir um campo a ser preenchido pelo usuário com o nome do novo item
E dexe exibir um botão Salvar
Quando o usuário clicar no botão Salvar apos o usuário preencher o item
Então o sistema deve salvar este novo item e adicionar a grid, assim exibindo nome e data de criação em suas colunas apropriadas
Quando o usuário clicar no botão Salvar e não tiver preenchido o campo de nome
Então o sistema deve exibir uma mensagem em vermelho "O nome do item é obrigatório"

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_dashboard\testes_página_banco_de_dados\success_banco_de_dados_click_apagar.cy.js

Cenário: Apagar um item da grid de bancos de dados

Dado que o usuário está autenticado
Quando acessar a página de Bancos de Dados
E clicar no botão "Apagar"
Então o sistema deve deletar o item em questão

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_dashboard\testes_página_banco_de_dados\success_banco_de_dados_pesquisar.cy.js

Cenário: Validar campo de pesquisar da página banco de dados

Dado que o usuário está autenticado
Quando acessar a página de Bancos de Dados
E tiver itens de banco de dados cadastrados
E clicar no campo Pesquisar, escrever algum nome ou parte de nome de algum item
Então o sistema deve filtrar a grid e mostrar apenas os itens pesquisados.

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_bugs_dashboard\bug_banco_de_dados_click_botao_refresh.cy.js

Cenário: Validar botão Refresh

Dado que o usuário está autenticado
Quando acessar a página de Bancos de Dados
E tiver itens de banco de dados cadastrados
E clicar no botão Refresh.
Então o sistema atualziar a grid

#################################################################
# Arquivo de automação:
# cypress\e2e\dashboard\testes_bugs_dashboard\bug_banco_de_dados_arquivar.cy.js

Cenário: Validar botão ação Arquivar

Dado que o usuário está autenticado
Quando acessar a página de Bancos de Dados
E tiver itens de banco de dados cadastrados
E clicar no botão ação Arquivar.
Então o sistema deve jogar o item em questão para a caixa de banco de dados Arquivados, acessado por meio do botão de Itens Arquivados
Quando acessar os itens arquivados
Então o sistema deve exibir os itens de banco de dados que foram arquivados