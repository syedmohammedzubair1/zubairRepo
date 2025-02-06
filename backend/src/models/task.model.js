import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'assignedToModel'
  },
  assignedToModel: {
    type: String,
    required: true,
    enum: ['Employee'],
    default: 'Employee'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  dueDate: {
    type: Date,
    required: true
  },
  assignedBy: {
    type: Schema.Types.ObjectId,
    ref: 'SuperAdmin',
    required: true
  },
  markAsCompleted: {
    type: Boolean,
    enum: [true, false],
    default: false
  },
  verifiedByAdmin: {
    type: Boolean,
    enum: [true, false],
    default: false
  },
  performanceRating: {
    type: Number,
    min: 1,
    max: 5
  },
  feedback: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
