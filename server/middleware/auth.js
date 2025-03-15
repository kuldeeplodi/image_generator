import jwt from "jsonwebtoken"

const authUser=async(req,res,next)=>{
    const {token}=req.headers
    if(!token){
return res.json({success:false,message:"not authorized Login again"})
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        if(token_decode.id){
            req.body.UserId=token_decode.id;
        }
        else{
            return res.json({success:false,message:"not authorized Login again"})
        }
        next()
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
    }
}
export default  authUser