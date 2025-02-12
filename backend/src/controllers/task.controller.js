import Task from "../models/task.model.js";

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

//Deadline Updation
// Status Updation
export const updateTask=async(req,res)=>{

    try{
        let task = await Task.updateOne({_id:req.params.id},{$set:req.body});
        if(!task){
            return res.status(400).json({message:"Task not found"});
        }
        res.status(200).json({message : `Task Updated Successfully`});
    }
    catch(e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message : `Error Occured : ${e.message}`})
    }
}