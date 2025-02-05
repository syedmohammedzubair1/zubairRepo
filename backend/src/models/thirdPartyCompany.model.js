import mongoose from "mongoose";

const thirdPartyCompanySchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  earnings: {
    total: {
      type: Number,
      default: 0
    },
    history: [{
      amount: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        required: true,
        default: Date.now
      },
      description: {
        type: String,
        trim: true
      },
      projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
      }
    }]
  }
}, { timestamps: true });

const ThirdPartyCompany = mongoose.model('ThirdPartyCompany', thirdPartyCompanySchema);

export default ThirdPartyCompany;
