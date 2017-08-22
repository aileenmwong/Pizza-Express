const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const pizzaRoutes = require('./routes/pizza-routes');
app.use('/pizza', pizzaRoutes);

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
