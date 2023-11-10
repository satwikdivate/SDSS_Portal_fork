
const jwt=require("jsonwebtoken")
exports.auth=(req,res)=>{

    try{

        const {token}=req.body;
        

        const result= jwt.verify(token,"token");
        console.log(result);

        return res.status(200).json({
            message:"Token decoded sucessfully",
            token:result
        })

    }catch(e){
        console.log("ERROR AT AUTHENTICATION: ",e.message);
    }
}