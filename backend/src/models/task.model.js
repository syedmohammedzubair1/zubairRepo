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
  }, 
  assignedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users" 
  }, 

  type: { 
    type: String, 
    enum: ["employee", "thirdparty"], 
    required: true 
  },

  companyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "companies" 
  },

  feedback: { 
    type: String 
  },

  priority: { 
    type: String, 
    enum: ["low", "medium", "high"], 
    default: "medium" 
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
