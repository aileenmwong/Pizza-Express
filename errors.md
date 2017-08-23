ERROR 1
Error: Route.post() requires callback functions but got a [object Undefined]

SOLN
Commented out create in the routes since the method didn't exist yet

ERROR 2
ReferenceError: pizza is not defined
    at Pizza.findById.then.quote 

SOLN 
    .then(pizza => {
      console.log(pizza);
      res.json({
        message: 'ok',
        data: pizza

Passed in quotes, not pizza, but later defined data as pizza, so it was coming back undefined. Switched to pizza.

ERROR 3
Error: Route.delete() requires callback functions but got a [object Undefined]

SOLN
Needed to keep delete/destroy consistent throughout the documents
