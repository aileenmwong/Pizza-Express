// Write your controller in this file!

// import the pizza model
const Pizza = require('../models/pizza');

// declare the empty pizza controller object
const pizzaController = {};

// make the controller for the pizza index. It will be called when someone GETs the /pizza route, and will ask the model to get all the pizzas and send them back as JSON data.
pizzaController.index = (req, res) => {
  // find all of the pizzas
  Pizza.findAll()
  // then needs to come first as a promise
  .then(pizza => {
    //send back pizza as JSON data
    res.json({
      message: 'ok',
      data: pizza,
    });
  // catch comes second as a promise
  }).catch(err => {
    // if there is an error, console log the error and return the 500 status
    console.log(err);
    res.status(500).json(err);
  });
}

// In the show method, we're getting a Pizza back from the database and sending it as json and passing req.params.id into the model's method.
pizzaController.show = (req, res) => {
  // find the pizza by the ID given in the URL
  Pizza.findById(req.params.id)
    //then is the promise
    .then(pizza => {
      // console log the pizza
      console.log(pizza);
      // send requested pizza as JSON data
      res.json({
        message: 'ok',
        data: pizza
      });
      // catch comes second as a promise
    }).catch(err => {
      // if there is an error, console log the error and return the 500 status
      console.log(err);
      res.status(500).json(err);
    });
};

// make a create method to make new pizzas and insert them into the pizza database
pizzaController.create = (req, res) => {
  // create a pizza
  Pizza.create({
    // make sure the new pizza has the properties of flavor, description and location which are being parsed from the body
    flavor: req.body.flavor,
    description: req.body.description,
    location: req.body.location
  })
  // then is the promise
  .then(pizza => {
    // return json message and the pizza data
    res.json({
      message: 'Pizza added successfully!',
      data: pizza
    });
  })
  // if there is an error, use the catch promise
  .catch(err => {
    //console log the error and the 500 status
    res.status(500).json(err);
  });
};

// make an update method to update the pizzas
pizzaController.update = (req, res) => {
  //update a pizza
  Pizza.update({
    // update the properties of the pizza's flavors, description, and location at a specific id by parsing through the body
    flavor: req.body.flavor,
    description: req.body.description,
    location: req.body.location,
    // target the id, then return json data with message and pizza data
  }, req.params.id).then(pizza => {
    res.json({
      message: 'Pizza updated successfully!',
      data: pizza,
    });
    // run catch promise if there are any errors
  }).catch(err => {
    // console log the error
    console.log(err);
    // return the error and status of 500
    res.status(500).json(err);
  });
}

// In the delete method, we're not getting anything back from the database -- we're just sending back a message that it worked.
pizzaController.delete = (req, res) => {
  console.log('im in delete function')
  //destroy the pizza by id number
  Pizza.destroy(req.params.id)
  //then destroy the json data and the message that the pizza was deleted successfully
  .then(() => {
    res.json({
      message: 'Pizza deleted succesfully!',
    });
    //catch any errors
  }).catch(err => {
    //console log the errors
    console.log(err);
    //return the error and the status of 500
    res.status(500).json(err);
  });
}

// export the pizza controller
module.exports = pizzaController;
