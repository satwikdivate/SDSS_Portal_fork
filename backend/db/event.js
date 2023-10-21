const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
  tasika: [
    {
      type: String,
      required: true,
    },
  ],
  maidan: [
    {
      type: String,
      required: true,
    },
  ],
  karyakram: [
    {
      type: String,
      required: true,
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
