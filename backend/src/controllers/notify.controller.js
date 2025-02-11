import Notification from "../models/notification.model.js";

export const getNotifications=async(req,res)=>{
    try {
        const notification=await Notification.find();
        if(notification.length===0){
            return res.status(400).json({message:"No Notifications found"});
        }
        res.status(200).json(notification);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const postNotifications = async (req, res) => {
    try {
        const notification = new Notification(req.body);
        const result = await notification.save();
        res.status(201).json({ message: "Notification created successfully", notification: result });
    } catch (err) {
        console.error("Error here:", err);
        res.status(500).json({ error: "Failed to create notification", details: err.message });
    }
};
export const deleteNotifications=async(req,res)=>{
    try {
        const notification=await Notification.findByIdAndDelete(req.params.id);
        if(!notification){
            return res.status(400).json({message:"Notification not found"});
        }
        res.send(notification);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getOneNotification = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);

        if (!notification) {
            return res.status(404).json({ message: "Notification not found" }); 
        }

        res.status(200).json(notification); 
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

export const updateNotification=async(req,res)=>{
    try{
        let notification=await Notification.updateOne({_id:req.params.id},{$set:req.body});
        if(!notification){
            return res.status(400).json({message:"Notification not found"});
            }
        res.send(notification);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}