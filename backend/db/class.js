const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  grade: {
    typeof: "string",
    required: true,
  },
  classTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  studentList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
  ],
  classHead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
});

const Class = mongoose.Model("Class", classSchema);
module.exports = Class;
