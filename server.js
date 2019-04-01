//Dependencies
const express = require("express");
const path = require("path");

// et up the Express App

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// you can use this to server static 
// files from the public folder
app.use(express.static('public'));

//Require routing

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Starts the server to begin listening
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });