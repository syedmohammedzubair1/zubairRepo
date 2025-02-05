import mongoose from "mongoose";

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  dept: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    default: 0
  },
  employeeId: {
    type: String,
    required: true,
    unique: true,
    maxLength: 10,
    minLength: 10,
    trim: true,
    uppercase: true
  },
  role: {
    type: String,
    enum: ['employee'],
    default: 'employee'
  },
  status: {
    type: Boolean,
    default: true  // Active or inactive employee status
  },
  overallPerformanceRating: {
    type: Number,
    min: 1,
    max: 5
  },
  numberOfRatings: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
