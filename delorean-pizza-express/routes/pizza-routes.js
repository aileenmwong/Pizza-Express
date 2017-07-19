const express = require('express');
const pizzaRoutes = express.Router();

const pizzaController = require('../controllers/pizza-controller');

pizzaRoutes.get('/', pizzaController.index);
pizzaRoutes.post('/', pizzaController.create);

pizzaRoutes.get('/:id', pizzaController.show);
pizzaRoutes.put('/:id', pizzaController.update);
pizzaRoutes.delete('/:id', pizzaController.destroy);

module.exports = pizzaRoutes;