import express from "express";
import userController from "../controller/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/credits", authUser, userController.userCredits);

export default userRouter;
