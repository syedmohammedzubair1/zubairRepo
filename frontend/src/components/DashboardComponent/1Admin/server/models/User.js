import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Completed', 'In Progress', 'Pending'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);