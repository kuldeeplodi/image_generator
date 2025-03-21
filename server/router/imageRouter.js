import express from "express"
import authUser from "../middleware/auth.js"
import { generateImage } from "../controller/imageController.js"

const imageRouter =express.Router()

imageRouter.post("/generate-image",authUser,generateImage)

export default imageRouter