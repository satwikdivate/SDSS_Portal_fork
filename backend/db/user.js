const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Student", "Admin", "Operator"],
      required: true,
    },
    Profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
  },
  
  {
    timestamps: true,
  }
);
// add profile in user schema
const User = mongoose.model("User", userSchema);
module.exports = User;
