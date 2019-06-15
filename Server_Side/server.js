const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

// Create application to start with express
const app = express();

// Listen application on some port
app.listen(3000, err => {
  if (!err) console.log("Server started on port 3000");
  else
    console.log(
      "Server couldn't be connected due to ",
      JSON.stringify(err, undefined, 2)
    );
});
