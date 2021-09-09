#   CRUD Pedido Front-end
- **autor**: João Vitor Porto (jvaporto@gmail.com)

Aplicação web montada através das ferramentas Node, Angular e Angular Material para realização de um crud básico de pedidos

## Dependências:

- (Node)[https://nodejs.org/en/]
- (Angular)[https://angular.io/]
- (Angular Material)[https://material.angular.io/]

## Setup:

- verificar se as credenciais na linha 9 de src/app/services/api_conn.services.ts coincidem com as informações da Api que será consumida

## Execução:

Ao executar a aplicação pelo comando ng serve em um terminal dentro da pasta principal do projeto (crud-angular), uma página web será aberta e nela estará presente toda a interface de execução do programa.

as principais funcionalidades presentes nesta tela são:
- GetAll
- GetId
- Put
- Post
- Delete

Quando ocorre uma listagem geral pela função GetAll, a tabela próxima do fim da página é preenchida, para a identificação da validade a ultima coluna apresenta uma cor característica para cada nível de validade:
- verde: válido
- amarelo: quase vencendo
- vermelho: vencido

O campo de desconto só aparecerá após uma pesquisa unitária que também é necessária para realizar a operação Put, caso contrário nenhum dado será apresentado par o usuário relativo ao ide preenchido.

### Componentes:
- app: agrupa todas as funcionalidades em um só programa e executa o site.
- views/home: é onde as principais funcionalidades do programa são realizadas.
- shared/header: é o cabeçalho da página.
- shared/footer: é o rodapé da página.
- models/GetElement: modelo de transferencia de dados para operação get.
- models/PElement: modelo da tranferencia de dados para post e put.
services/api_conn.services: arquivo responsável pela comunicação com a Api (ainda apresenta alguns problemas relativos ao CORS).