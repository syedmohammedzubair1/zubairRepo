import Project from "../models/projects.model.js";
export const getProject=async(req,res)=>{
  try{
    const projects = await Project.find();
    if(projects.length==0){
    return res.status(404).json({message:"No projects found"});
}
    res.json(projects);
  }

catch(err){
    console.log(err);
}
}

export const postProject = async (req,res)=>{
    try{
        const project = new Project(req.body);
        let result = await project.save();
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

export const deleteProject = async (req,res)=>{
    try{
        const project = await Project.findOneAndDelete(req.params.id)
        if(!project){
            return res.status(404).json({message:"Project not found"})
        }
        res.send(project);
    }
    catch(err){
        console.log(err);
    }
}