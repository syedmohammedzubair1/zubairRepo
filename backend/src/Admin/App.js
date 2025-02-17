// import express from "express";
// import upload from "./config/multerConfig.js";
// import {json} from "express";

// const App= express();

// App.post("/upload",upload.single("image"),(req,res)=>{
//     try{
//         const ImageUrl=req.file.path;
//         res.json({
//             success:true,
//             message:"image uploaded",
//             imageUrl:ImageUrl,
//         });
      
//     }
//     catch (error) {
//         res.status(500).json({
//             success:false,
//             message:"not uploaded",
//             error:error.message,
//         });
//     }
// });


// App.get("/",(req,res)=>{
//     res.json({message:"hello"})
// })
// App.listen(5000,()=>{
//     console.log("server is running on port http://localhost:5000")
// })
