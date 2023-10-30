const mongoose = require("mongoose");
const personalProfileSchema = mongoose.Schema({
 
  age: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
});

const PersonalProfile = mongoose.model(
  "PersonalProfile",
  personalProfileSchema
);
module.exports = PersonalProfile;
