Este projeto é uma API RESTful desenvolvida em Node.js utilizando o framework Express e o ORM Prisma para integração com banco de dados MongoDB. O objetivo é gerenciar usuários, permitindo operações de criação, leitura, atualização e exclusão (CRUD).

Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.
Express: Framework para criação de APIs HTTP.
Prisma: ORM para manipulação do banco de dados MongoDB.
MongoDB: Banco de dados NoSQL para armazenar os usuários.
Estrutura da API
Endpoints
GET /usuarios
Retorna todos os usuários cadastrados.

POST /usuarios
Cria um novo usuário.
Body:

PUT /usuarios/:id
Atualiza os dados de um usuário pelo ID.
Body:

DELETE /usuarios/:id
Remove um usuário pelo ID.
