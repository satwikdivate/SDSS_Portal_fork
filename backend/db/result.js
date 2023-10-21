const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  result: [
    {
      subject: {
        type: String,
        required: true,
      },
      marks: {
        type: String,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
