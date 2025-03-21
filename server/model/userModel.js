import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  name:{type:String,
    required:true
  },
  email:{type:String,
    required:true,default:true
  }
  , password:{type:String,
    required:true
  },
  creditBalance: { type: Number,  default: 10} // ✅ Default: 10


})
const userModel=mongoose.model.user|| mongoose.model("user",userSchema)
export default userModel
