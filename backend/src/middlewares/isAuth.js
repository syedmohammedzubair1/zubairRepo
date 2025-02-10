import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config()

export const isAuth = (req, res, next) => {
  const token = req.signedCookies.token;
  console.log(token)
  console.log(req)


  if (!token) {
    console.log("hello")
    return res.status(401).json({ message: "authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
    req.user = decoded;  
    next(); 
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
