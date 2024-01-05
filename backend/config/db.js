const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://datasdss:sdss2003@web.kwojvcr.mongodb.net/?retryWrites=true&w=majority";
const dotenv = require("dotenv");
dotenv.config();

// process.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
 