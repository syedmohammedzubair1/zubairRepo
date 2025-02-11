import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
    type: String 
},
  deadline: { 
    type: Date 
},
  status: { 
    type: String, 
    enum: ["pending", "in-progress", "completed", "rejected"], 
    default: "pending" 
},
  assignedTo: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users" 
}, // Employee or Third-Party Admin
  assignedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users" 
}, // Super Admin
  type: { 
    type: String, 
    enum: ["employee", "thirdparty"], 
    required: true 
},
  companyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "companies" 
}, // For tasks assigned to third-party companies
  feedback: { 
    type: String 
},
  createdAt: { 
    type: Date,
     default: Date.now 
    },
  updatedAt: { 
    type: Date, 
    default: Date.now 
}
});

const Task = mongoose.model("Task", taskSchema);
export default Task;