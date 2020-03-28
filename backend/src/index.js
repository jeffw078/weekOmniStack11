const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);





/**Rota / recurso */

/**Métodos HTTP
 * 
 * GET: Busca uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Editar uma informação no Backend
 * DELETE: Deletar uma informação no Backend
 */

 /**
  * 
  * Tipos de Parametros
  * 
  * Query Params: parametros nomeados nas rotas após o "?"  ex: Filtrar e paginar
  * Route Params: Parametros usados para idenficar recursos
  * RequestBody: Corpo da requisição para criar ou alterar recursos
  */



