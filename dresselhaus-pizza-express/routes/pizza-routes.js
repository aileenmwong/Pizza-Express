// run express in routes
const express = require('express');
// establish pizzaRoutes as the express router
const pizzaRoutes = express.Router();
// import the pizza controller from it's file
const pizzaController = require('../controllers/pizza-controller');

// with command get / in Postman, access the pizza controller's index method
pizzaRoutes.get('/', pizzaController.index);
// with command post / in Postman, access the pizza controller's create method
pizzaRoutes.post('/', pizzaController.create);

// with command put by id in Postman, access the pizza controller's update method
pizzaRoutes.put('/:id', pizzaController.update);

// with command get by id in Postman, access the pizza controller's show method
pizzaRoutes.get('/:id', pizzaController.show);
// with command delete by id in Postman, access the pizza controller's delete method
pizzaRoutes.delete('/:id', pizzaController.delete);

// export Pizza Routes
module.exports = pizzaRoutes;
