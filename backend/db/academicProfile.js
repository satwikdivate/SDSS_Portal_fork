const mongoose = require("mongoose");
const academicProfileSchema = mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  schoolAddress: {
    type: String,
    required: true,
  },
  classTeacher: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    enum: ["English", "Marathi", "Semi"],
    required: true,
  },
});

const AcademicProfile = mongoose.model(
  "AcademicProfile",
  academicProfileSchema
);
module.exports = AcademicProfile;
