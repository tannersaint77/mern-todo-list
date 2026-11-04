// Task model (A3): defines the shape of a task document in MongoDB
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },       // task text, must be present
  completed: { type: Boolean, default: false },  // new tasks start incomplete
  createdAt: { type: Date, default: Date.now },  // set automatically
});

module.exports = mongoose.model("Task", taskSchema);
