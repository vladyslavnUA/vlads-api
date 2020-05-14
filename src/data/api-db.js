/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

// const url = "mongodb://localhost/api-db";
const mongo_uri = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(
  mongo_uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, db) {
    assert.equal(null, err);
    console.log("Sucessfully connected to database.");

    // db.close(); turn on for testing
  }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);
 
module.exports = mongoose.connection;