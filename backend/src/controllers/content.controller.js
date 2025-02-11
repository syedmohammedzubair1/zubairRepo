import Content from "../models/content.model.js";

export const getContents=async(req,res)=>{
    try {
        const content=await Content.find();
        if(content.length===0){
            return res.status(400).json({message:"No Contents found"});
        }
        res.status(200).json(content);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const postContents = async (req, res) => {
    try {
        const content = new Content(req.body);
        const result = await content.save();
        res.status(201).json({ message: "Content created successfully", content: result });
    } catch (err) {
        console.error("Error here:", err);
        res.status(500).json({ error: "Failed to create content", details: err.message });
    }
};
export const deleteContents=async(req,res)=>{
    try {
        const content=await Content.findByIdAndDelete(req.params.id);
        if(!content){
            return res.status(400).json({message:"Content not found"});
        }
        res.send(content);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getOneContent = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);

        if (!content) {
            return res.status(404).json({ message: "Content not found" }); 
        }

        res.status(200).json(content); 
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

export const updateContent=async(req,res)=>{
    try{
        let content=await Content.updateOne({_id:req.params.id},{$set:req.body});
        if(!content){
            return res.status(400).json({message:"Content not found"});
            }
        res.send(content);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}