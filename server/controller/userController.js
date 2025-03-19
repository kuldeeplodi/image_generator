import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../model/userModel.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing details",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    const newUser = new userModel(userData);
    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token, user: { name: user.name } });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

const userCredits = async (req, res) => {
  try {
    console.log("✅ Received Request Body:", req.body);

    const { userId } = req.body; // Extract userId
    if (!userId) {
      return res.status(400).json({ success: false, message: "Missing userId in request" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    console.log("✅ User Found:", user);

    if (user.creditBalance === undefined) {
      return res.status(400).json({ success: false, message: "Credit balance not found for user" });
    }

    console.log("✅ Credit Balance:", user.creditBalance);

    return res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (err) {
    console.error("❌ Error in userCredits:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};





const userController = { registerUser, loginUser, userCredits };
export default userController;
