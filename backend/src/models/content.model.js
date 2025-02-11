import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  type: { type: String, enum: ["service", "project", "location"], required: true },
  title: { type: String, required: true },
  description: { type: String },
  metadata: {
    year: { type: Number },
    client: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  status: { type: String, enum: ["draft", "published"], default: "draft" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


const Content = mongoose.model("Content", contentSchema);

export default Content;