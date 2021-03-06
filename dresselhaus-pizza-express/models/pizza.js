// Write your model in this file!

// import the pg-promise instance
const db = require('../db/config');

// declare an empty Pizza object
const Pizza = {};

// add a method to Pizza, findAll, that makes use of the pg-promise query() method
Pizza.findAll = () => {
  return db.query('SELECT * FROM pizza');
}

// make a new method on the Pizza object called findByID and set it equal to an arrow function. The arrow function takes a parameter id, which refers to the id in the database of the Quote we want to find.
Pizza.findById = (id) => {
  // oneOrNone() method will find a single Pizza, this method will handle that whether or not there is one.
  //Instead of putting the id variable right in the query, we use the $1 syntax, and then pass a second argument to the method. The second argument is an array that contains all of the values for the items we need in our SQL query. This is a security measure that prevents something called SQL injection.
  return db.oneOrNone(`
    SELECT * FROM pizza
    WHERE id = $1
    `,[id]);
}

// add a create method to pizza that inserts in to the pizza database new pizzas
Pizza.create = pizza => {
  return db.one(
    `
    INSERT INTO pizza
    (flavor, description, location)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [pizza.flavor, pizza.description, pizza.location]
    );
}

//add an update method to pizza that updates the pizzas flavor, description and location by id
Pizza.update = (pizza, id) => {
  return db.one(`
    UPDATE pizza SET
    flavor = $1,
    description = $2,
    location = $3
    WHERE id = $4
    RETURNING *
    `, [pizza.flavor, pizza.description, pizza.location, id]);
}
//add a destroy method to pizza that destroys pizzas by id number
Pizza.destroy = (id) => {
  return db.none(`
    DELETE FROM pizza
    WHERE id = $1
    `, [id]);
}

// export the Pizza object from the model file
module.exports = Pizza;
//this is sent to pizza controller
