const mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
      min: 4,
      max: 80,
      index: true,
    },
    description: {
      type: String,
      require: false,
      trim: true,
      lowercase: true,
      min: 4,
      max: 150,
      index: true,
    },
    status: {
      type: String,
      require: false,
      trim: true,
      lowercase: true,
      min: 4,
      max: 50,
      index: true,
    },
    dueDate: {
      type: Date,
      require: false,
      trim: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);
const TaskModel = mongoose.model("Task", tasksSchema);
module.exports = TaskModel;
