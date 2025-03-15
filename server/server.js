import "dotenv/config";
import express from "express";
import cors from "cors";
import userController from "./controller/userController.js"; // Ensure the case matches


import connectedDB from "./config/mongodb.js";
import userRouter from "./router/userRouter.js";
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());


await connectedDB(); // Ensures DB is connected before starting the server
 
app.use("/api/user",userRouter)

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`server connected on port:${port}`);
});
