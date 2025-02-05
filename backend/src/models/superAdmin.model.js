import mongoose from "mongoose";

const superAdminSchema = new Schema({
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
    required: true,
  },
  role: {
    type: String,
    enum: ['SuperAdmin'],
    required: true,
    default: 'SuperAdmin'
  },
}, { timestamps: true });


const superAdmin = mongoose.model('Superadmin', superAdminSchema);

export default superAdmin;
