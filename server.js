const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
  // Regarding the force code: false || true
    // To clear out the tables it should be true
    // To start the server, and it holds data, make it false
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

//code below was from the starter code- not sure if this is needed if I've added the sequelize.sync- ask 
  // app.listen(PORT, () => {
  //   console.log(`App listening on port ${PORT}!`);
  // });
