// Write your database config in this file!

// declare a variable called options
const options = {
  query: (e) => {
    console.log(e.query);
  }
};

// middleware - require pg-promise dependency to run app
const pgp = require('pg-promise')(options);

// create variable called database, but do not define
let db;

// if node environment is in development or if the process is a non specified state, then request the development database running in local host
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'pizza_dresselhaus_dev',
    port: 5432,
    host: 'localhost'
  });

// if the node environment is in production, then request the database URL
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

// export database
module.exports = db;
//this is sent to model
