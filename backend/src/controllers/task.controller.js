import Task from "../models/task.model.js";

<<<<<<< HEAD
export const getTasks=async(req,res)=>{
    try {
        const task=await Task.find();
        if(task.length===0){
            return res.status(400).json({message:"No Tasks found"});
        }
        res.status(200).json(task);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const postTasks = async (req, res) => {
    try {
        const task = new Task(req.body);
        const result = await task.save();
        res.status(201).json({ message: "Task created successfully", task: result });
    } catch (err) {
        console.error("Error here:", err);
        res.status(500).json({ error: "Failed to create task", details: err.message });
    }
};
export const deleteTasks=async(req,res)=>{
    try {
        const task=await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(400).json({message:"Task not found"});
        }
        res.send(task);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getOneTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" }); 
        }

        res.status(200).json(task); 
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

export const updateTask=async(req,res)=>{
    try{
        let task=await Task.updateOne({_id:req.params.id},{$set:req.body});
        if(!task){
            return res.status(400).json({message:"Task not found"});
            }
        res.send(task);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
=======
import Task from "../models/Task.js";


export const getTasksForEmployee = async (req, res) => {
    try {
      
      const employeeId = req.user._id;

      const tasks = await Task.find({ assignedTo: { $in: [employeeId] } })
        .populate("assignedTo", "firstName lastName email")
        .populate("assignedBy", "firstName lastName email");
  
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


export const getTasks = async (req, res) => {
  try {
    const { employeeId } = req.query;
    let query = {};
    if (employeeId) {
      query.assignedTo = { $in: [employeeId] };
    }
    const tasks = await Task.find(query)
      .populate("assignedTo", "firstName lastName email")
      .populate("assignedBy", "firstName lastName email");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id)
      .populate("assignedTo", "firstName lastName email")
      .populate("assignedBy", "firstName lastName email");
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      deadline,
      assignedTo,
      assignedBy,
      type,
      companyId,
      feedback,
      priority,
    } = req.body;

    const newTask = new Task({
      title,
      description,
      deadline,
      status,
      assignedTo,
      assignedBy,
      type,
      companyId,
      feedback,
      priority,
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = { ...req.body, updatedAt: Date.now() };

    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!["pending", "in-progress", "completed", "rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addPerformanceRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { reviewedBy, marks, comments } = req.body;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Create the review object and add it to the task's reviews array
    const review = {
      reviewedBy,
      marks,
      comments,
      reviewedAt: Date.now(),
    };
    task.reviews.push(review);
    task.updatedAt = Date.now();
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Admin assign a Task to employee Thats Fine 
// But Every day or every task completion he need to sit and select the employee and assigning a task is very irretating 
// how Can i solve This Problem 
// If Take Team lead hierarchy  - > HR - > PROJECT MANAGER - > TEAM LEAD - > TEAM MEMBERS
>>>>>>> fb68908f05537bc58cf71935f078312e67779036
