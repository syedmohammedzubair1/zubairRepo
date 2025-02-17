import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"uploads"
    },
});
 const upload=multer({storage})

 export default upload;