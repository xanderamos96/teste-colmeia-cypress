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
Então o sistema deve exibir o título da página
E deve exibir o menu lateral de navegação com o submenu Campanha
E deve exibir botão de Candidato
