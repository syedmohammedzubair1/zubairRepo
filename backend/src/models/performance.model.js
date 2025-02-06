import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  taskCompletionRate: { type: Number }, // Percentage
  averageTimePerTask: { type: Number }, // Hours
  feedbackScore: { type: Number, min: 1, max: 5 }, // 1-5 scale
  lastEvaluationDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});


const Performance = mongoose.model("Performance", performanceSchema);

export { Performance };