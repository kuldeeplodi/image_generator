import mongoose from "mongoose"


// const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    console.log("MongoDB URL:", process.env.MONGODB_URL); // Debugging

    if (!process.env.MONGODB_URL) {
      throw new Error("❌ MONGODB_URL is not set in environment variables!");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`✅ Database connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectedDB;
