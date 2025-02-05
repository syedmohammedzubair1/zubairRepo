//HomepageContent
import mongoose from "mongoose";

const homepageContentSchema = new Schema({
  bannerText: {
    type: String,
    required: true
  },
  services: [{
    type: String
  }],
  projects: [{
    type: String
  }],
  locations: [{
    type: String
  }],
  about: [{
    type: String
  }],
  contactUs: [{
    type: String
  }]
}, { timestamps: true });

const HomepageContent= mongoose.model('HomepageContent', homepageContentSchema);

export default HomepageContent;
