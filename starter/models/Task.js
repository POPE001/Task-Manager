const { Boolean } = require("buffer-layout");
const moogose = require("mongoose");

const TaskSchema = new moogose.Schema({
  name: {
    type: String,
    required: [true, "must provided a name"],
    trim: true,
    maxLength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = moogose.model("Task", TaskSchema);
