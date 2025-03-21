import userModel from "../model/userModel.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }
    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No credit balance",
        creditBalance: user.creditBalance,
      });
    }
    const formData = new FormData();
    formData.append("prompt", prompt);
    console.log("ClipDrop API Key:", process.env.CLIPDROP_API);

    const { data } = await axios.post("https://clipdrop-api.co/cleanup/v1",formData, {
      method: "POST",
      headers: {
        "x-api-key": process.env.CLIPDROP_API,
      },
      responseType: "arraybuffer",
    });
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
