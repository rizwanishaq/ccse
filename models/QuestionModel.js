const mongoose = require("mongoose");

const QuestionModelSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please enter the question"],
      unique: true,
    },
    answer: {
      type: String,
      required: [true, "Please provide the correct answer"],
    },
    others: {
      type: [String],
      required: [true, "Please provide others options"],
    },
    tarea: {
      type: String,
      required: [true, "Please provide the tarea number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuestionModel", QuestionModelSchema);
