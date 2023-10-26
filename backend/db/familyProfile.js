const { default: mongoose } = require("mongoose");
const moogoes = require("mongoose");

const familyProfileSchema = new moogoes.Schema({
  motherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  income: {
    type: String,
    required: true,
  },
  siblingCount: {
    type: Number,
    required: true,
  },
});

const FamilyProfile = mongoose.model("FamilyProfile", familyProfileSchema);
module.exports = FamilyProfile;
