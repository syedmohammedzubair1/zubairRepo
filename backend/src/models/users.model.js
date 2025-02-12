import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ["employee", "superAdmin", "thirdParty"], 
        required: true 
    },
    companyId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "companies", required: function () { return this.role === 'thirdParty' } },
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: Number, 
        minLength: 10, 
        maxLength: 10 
    },
    status: { 
        type: Boolean, 
        default: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now
    },
    lastLogin: { 
        type: Date, 
        default: Date.now 
    },

    totalAmount: { 
        type: Number, 
        default: 0 
    },  
    totalBonus: { 
        type: Number, 
        default: 0 
    }, 

    paymentHistory: [
        {
            amount: { 
                type: Number, 
                required: true 
            },
            bonus: { 
                type: Number, 
                default: 0 
            },
            paymentDate: { 
                type: Date, 
                required: true, 
                default: Date.now 
            }
        }
    ],
});

const User = mongoose.model("User", userSchema);
export default User;
