const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  attendance: [
    {
      type: Date,
      required: true,
    },
  ],
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
