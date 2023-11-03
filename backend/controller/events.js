const { uploadImageToCloudinary } = require("../config/imageUpload")


exports.createEvent=async(req,res)=>{

    try{

        const report=req.files.report

        const updateCloud=await uploadImageToCloudinary(
            report,
           "ds3cpwvtf"
        )

        console.log(updateCloud);
        return res.status(200).json({
            updateCloud
        })

    }catch(e){
        console.log("ERROR AT CREATE EVENT:",e)
    }
}