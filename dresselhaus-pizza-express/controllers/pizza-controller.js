// Write your controller in this file!

// import the pizza model
const Pizza = require('../models/pizza');

// declare the empty pizza controller object
const pizzaController = {};

// make the controller for the pizza index. It will be called when someone GETs the /pizza route, and will ask the model to get all the pizzas and send them back as JSON data.
pizzaController.index = (req, res) => {
  Pizza.findAll()
  // then needs to come first as a promise
  .then(pizza => {
    res.json({
      message: 'ok',
      data: pizza,
    });
  // catch comes second as a promise
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

// In both of these, we're passing req.params.id into the model's method.
// In the show method, we're getting a Quote back from the database and sending it as json.
pizzaController.show = (req, res) => {
  Pizza.findById(req.params.id)
    .then(pizza => {
      console.log(pizza);
      res.json({
        message: 'ok',
        data: pizza
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

pizzaController.create = (req, res) => {
  Pizza.create({
    flavor: req.body.flavor,
    description: req.body.description,
    location: req.body.location
  })
  .then(quote => {
    res.json({
      message: 'Pizza added successfully!',
      data: pizza
    });
  })
  .catch(err => {
    res.status(500).json(err);
  });
};

// In the delete method, we're not getting anything back from the database -- we're just sending back a message that it worked.
pizzaController.delete = (req, res) => {
  console.log('im in delete function')
  Pizza.destroy(req.params.id)
  .then(() => {
    res.json({
      message: 'Pizza deleted succesfully!',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

// export the pizza controller
module.exports = pizzaController;
