Tabela de Usuários:
-Armazenar informações como nome, email, senha criptografada e nível de permissão.
Níveis de permissão sugeridos: Administrador, Usuário Regular.
-USER TABLE -> name, email, role, password, deletedAt

Tabela de Gastos Fixos (Enum):
-Armazenar categorias de gastos fixos predefinidas, como Aluguel, Contas de Serviços, etc.
Utilize um campo ENUM ou relacionamento para vincular os gastos variáveis a essas categorias.
Opção do usuário criar um novo gasto fixo

Tabela de Gastos Variáveis:
-Armazenar informações sobre gastos variáveis, incluindo descrição, valor, data e a categoria vinculada.

Tabela de Entradas:
-Armazenar informações sobre as entradas de dinheiro no sistema, incluindo valor, data e fonte da entrada.

Tabela Relacional Entradas-Gastos com Saldo:
-Criar uma tabela para relacionar entradas e gastos, calculando o saldo resultante.
Registrar o ID da entrada, o ID do gasto associado e o saldo após a transação.

CRUD para Gastos:
-Implementar operações CRUD para os gastos variáveis.
Implementar validações de entrada e tratamento de erros adequados.
{delete deve ser soft delete}

CRUD para Entradas:
-Implementar operações CRUD para as entradas de dinheiro.
Garantir que as datas das entradas estejam dentro de limites aceitáveis.
{delete deve ser soft delete}

Rotas para API:
-Definir rotas bem estruturadas para cada operação CRUD e outras ações relevantes.
Utilizar um padrão de nomenclatura RESTful para as rotas.

Usuários com Diferentes Níveis de Permissão:
-Implementar autenticação e autorização baseada em tokens JWT (JSON Web Tokens).
Restringir certas rotas e ações com base nos níveis de permissão dos usuários.

Sistema de Login:
-Implementar um sistema de autenticação seguro, utilizando bcrypt para a criptografia das senhas.
Fornecer endpoints para registro, login e logout de usuários.

- geração de relatórios para serem exportados 

- Registrar logs de atividades importantes para fins de auditoria e solução de problemas.
- Implementar paginação e ordenação para listagens longas de dados.

- lista de gastos e entradas deve, primariamente, aparecer somente aqueles não “soft deleted”

- Permitir que os usuários adicionem notas ou anexos a transações para manter um registro mais detalhado.

Opcoes de Read de gastos e entradas devem retornar com datas dos ultimos 1, 7, 15, 30, 90 dias

Deve ser possível quais usuários estão online, em que todo login altere o status "active"

Usario deve poder anotar comentários nas entradas e saídas (OPCIONAL, NULL OPTION ENABLED)

DRE deve ser uma rota já fixa que retorne o calculo realizado no backend do saldo.

Deve haver uma tabela que seja modificada em toda compra, anotando o saldo. Nesta tabela irá retornar para o front o “saldo do cliente no mês”
