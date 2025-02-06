import mongoose from "mongoose"
let userModel= new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum :["employee", "superAdmin", "thirdParty"],
        required: true,
    },
    companyId:{
        type: mongoose.Schema.Types.ObjectId,
        required :function(){this.role === 'thirdParty'},
        ref: "companies", //third party admins
    },
    firstName: {
        type:String,
        required:true,

    },
    lastName: {
        type:String,
        required:true,
    },
    phone: {
        type: Number,
        minLength :10,
        maxLength :10
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt :{
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type : Date,
    }
    
})

const User = mongoose.model("User", userModel);

export default User;