const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  grade: {
    typeof: "string",
    required: true,
  },
  classTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  studentList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  classHead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
// make Profile ans User because we are making user as primary and inside that we add the prodile schma 
const Class = mongoose.Model("Class", classSchema);
module.exports = Class;
