const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

/** 
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Excluir uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: PArâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Tipos de banco de dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * No SQL: MongoDB, CouchDB, etc.
 */

 /**
  * Tipos de comunicação com o banco de dados
  * 
  * Driver: SELECT * FROM users
  * QUery Builder: table('users').select('*').where()
  */

app.use(routes);

app.listen(3333);