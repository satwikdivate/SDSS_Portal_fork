const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  personalProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalProfile",
  },
  familyProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "",
  },
  academicProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicProfile",
  },
  role: {
    type: String,
    enum: ["Student", "Admin", "Operator"],
    required: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
