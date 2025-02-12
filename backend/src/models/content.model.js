import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  images: [{ type: String }]
  
});

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true },
  description: { 
    type: String 
  },
  video: { type: String },
  metadata: {
    year: { type: Number },
    client: { type: String }
  }
});

const serviceSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { type: String }
});

const locationSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  }
});

const contentSchema = new mongoose.Schema({
  about: aboutSchema, // About section as a single object
  projects: [projectSchema], // Projects section as an array of objects
  services: [serviceSchema], // Services section as an array of objects
  locations: [locationSchema], // Locations section as an array of objects
  contact: {
    email: { type: String },
    phone: { type: String }
  },
  status: { 
    type: String, 
    enum: ["draft", "published"], 
    default: "draft" },
  createdAt: { 
    type: Date, 
    default: Date.now },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Content = mongoose.model("Content", contentSchema);

export default Content;
