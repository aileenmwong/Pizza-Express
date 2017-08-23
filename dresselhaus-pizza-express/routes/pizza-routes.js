const express = require('express');
const pizzaRoutes = express.Router();
//import the pizza controller from it's file
const pizzaController = require('../controllers/pizza-controller');

pizzaRoutes.get('/', pizzaController.index);
pizzaRoutes.post('/', pizzaController.create);

/*
the update route is still commented out, we will learn about how to do it tomorrow
pizzaRoutes.put('/:id', pizzaController.update);
*/
pizzaRoutes.get('/:id', pizzaController.show);
pizzaRoutes.delete('/:id', pizzaController.delete);

module.exports = pizzaRoutes;
