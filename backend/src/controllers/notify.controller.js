import Notification from "../models/notification.model.js";
<<<<<<< HEAD

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
=======
import User from "../models/users.model.js";

export const sendThirdPartyNotification = async (req, res) => {
    try {
        const { email, message, type } = req.body;

        if (!email || !message || !type) {
            return res.status(400).json({ message: "Please provide office email, message, and type" });
        }

        const thirdPartyUser = await User.findOne({ email: email, role: "thirdParty" });

        if (!thirdPartyUser) {
            return res.status(404).json({ message: "Third-party admin not found" });
        }

        const notification = new Notification({
            userId: thirdPartyUser._id,
            message,
            type
        });

        await notification.save();
        res.status(200).json({ message: "Notification sent successfully!" });

    } catch(e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message : `Error Occured : ${e.message}`})
    }
};

export const sendEmployeeNotification = async (req, res) => {
    try {
        const { message, type } = req.body;

        if (!message || !type) {
            return res.status(400).json({ message: "Please provide message and type" });
        }

        const employees = await User.find({ role: "employee" });

        if (employees.length === 0) {
            return res.status(404).json({ message: "No employees found" });
        }

        const notifications = employees.map(emp => ({
            userId: emp._id,
            message,
            type
        }));

        await Notification.insertMany(notifications);
        res.status(200).json({ message: "Notification sent to all employees!" });

    } catch(e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message : `Error Occured Emp : ${e.message}`})
    }
};


//Send Task Notification to Assigned User
export const sendTaskNotification = async (req, res) => {
    try {
        const { assignedTo, taskId, message } = req.body;

        if (!assignedTo || !taskId || !message) {
            return res.status(400).json({ message: "Please provide assignedTo, taskId, and message" });
        }

        const notification = new Notification({
            userId: assignedTo,
            taskId,
            message,
            type: "task"
        });

        await notification.save();
        res.status(200).json({ message: "Task notification sent!" });

    } catch(e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message : `Error Occured Emp Task : ${e.message}`})
    }
};



// Fetch Last 1 Month Notification History
export const getLastMonthNotifications = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "Please provide email" });
        }

        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        const notifications = await Notification.find({
            userId
        }).sort({ createdAt: -1 });

        if (notifications.length == 0) {
            return res.status(404).json({ message: "No notifications in the last month" });
        }

        res.status(200).json(notifications);

    } catch (error) {
        console.error("Error fetching notifications:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
>>>>>>> fb68908f05537bc58cf71935f078312e67779036
