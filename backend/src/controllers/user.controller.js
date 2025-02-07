import User from "../models/users.model.js";

export const getUsers=async(req,res)=>{
    try {
        const user=await User.find();
        if(user.length===0){
            return res.status(400).json({message:"No Users found"});
        }
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const postUsers = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json({ message: "User created successfully", user: result });
    } catch (err) {
        console.error("Error here:", err);
        res.status(500).json({ error: "Failed to create user", details: err.message });
    }
};
export const deleteUsers=async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        res.send(user);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" }); 
        }

        res.status(200).json(user); 
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

export const updateUser=async(req,res)=>{
    try{
        let user=await User.updateOne({_id:req.params.id},{$set:req.body});
        if(!user){
            return res.status(400).json({message:"User not found"});
            }
        res.send(user);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}