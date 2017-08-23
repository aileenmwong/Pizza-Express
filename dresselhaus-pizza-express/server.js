//make sure express is required for app
const express = require('express');
//require morgan as the logger for the app
const logger = require('morgan');
const path = require('path');
// require body parses to parse through the data
const bodyParser = require('body-parser');

//declare a variable called app and make that express
const app = express();

//make sure the app uses logger
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
//make sure the app uses body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//declare a variable called pizzaRoutes and link that to the route file
const pizzaRoutes = require('./routes/pizza-routes');
//make sure teh app is using the pizza routes file
app.use('/pizza', pizzaRoutes);

//if the app is trying to get anything except the /, then return the status 404 and let user know that is an invalid route
app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});

// connect the port to the app so you can run the app on local host
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
