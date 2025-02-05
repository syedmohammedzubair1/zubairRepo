import mongoose from "mongoose";

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    trim: true
  },
  transactionId: {
    type: String,
    trim: true
  }
}, { _id: false });

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'ThirdPartyCompany'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  totalCost: {
    type: Number,
    required: true
  },
  payments: [paymentSchema]
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;
