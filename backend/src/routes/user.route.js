import express from "express";
import { deleteUsers, getOneUser, getUsers, postUsers, updateUser } from "../controllers/user.controller.js";
const router=express.Router();
router.get("/user",getUsers);
router.get("/user/:id",getOneUser);
router.post("/user",postUsers);
router.delete("/user/:id",deleteUsers);
router.put("/user/:id",updateUser);
export default router;
