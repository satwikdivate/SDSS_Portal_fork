const mongoose = require("mongoose");
const dotenv = require('dotenv');

const mongoURI = "mongodb+srv://datasdss:sdss2003@web.kwojvcr.mongodb.net/?retryWrites=true&w=majority";
require("dotenv").config();

mongoose.connect(process.env.MOGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
 