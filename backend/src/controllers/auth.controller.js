import User from "../models/users.model.js";
import httpStatus from 'http-status';
import jwt from "jsonwebtoken";

export const validateEmail = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if email exists in the database
      const user = await User.findOne({ email });
  
      if (user) {
        return res.status(200).json({ exists: true });
      } else {
        return res.status(200).json({ exists: false });
      }
    } catch (error) {
      console.error('Error validating email:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };


export const Login = async (req,res) =>{
    const {email, password} = req.body;
    console.log(email, password)

    if(!email || !password){
        return res.status(httpStatus.BAD_REQUEST).json({message : "Please Enter All Fields"})
    }

    try{

        const user = await User.findOne({email});
        console.log(user)
        
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message : "Invalid Credentials"})
        }

        // const isMatch = await bcrypt.compare(password,user.password);

        if(user){

            const token = jwt.sign(
                {id : user._id, email : user.email, role : user.role},
                process.env.JWT_SECRET || "default_secret",
                { expiresIn: "3h" }
            )

            res.cookie("token", token, {
                httpOnly: true,      
                secure: process.env.NODE_ENV === "production", 
                sameSite: process.env.NODE_ENV === "production" ? "Strict" : "Lax",
                maxAge: 2 * 60 * 60 * 1000, // Token expiry time in milliseconds (2 hours)
              });

              console.log(req.body)


            res.status(httpStatus.OK).json({
                message : "Login Successfully",
                token : token,
                user : {id: user._id, email: user.email}
            });

        }else{
            res.status(httpStatus.UNAUTHORIZED).json({message : 'Invalid Credentials'}); //401
        }

    }catch(e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message : `Error occured : ${e.name}`})
    }
}
