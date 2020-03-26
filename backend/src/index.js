const express = require("express");
const cors = require("cors");
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
* Métodos HTTP:
*
* GET: Buscar/Listar uma informação no backend
* POST: Criar uma informação no backend
* PUT: Alterar uma informação no backend
* DELETE: Deletar uma informação no backend
**/

/**
* Tipos de Paramêtros:
*
* Query Params: Paramêtros nomeados enviados na rota após o simbolo de *?* (filtros/paginação)
* Routes Params: Paramêtros ultilizados para identificar recursos
* Request Body: Corpo da requisição ultilizado para criar ou alterar recursos
**/

/**
* SQL: MySQL, SQLite, PostgreSql, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
**/

/** 
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
**/

app.listen(3333);