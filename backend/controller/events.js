const { uploadImageToCloudinary } = require("../config/imageUpload");
const report = require("../db/reports");
// const } =require("../db/reports")

exports.createEvent=async(req,res)=>{

    try{

        const reportFile=req.files.report
        const {monthName}=req.body;
        
        // upload file to cloud
        const updateCloud=await uploadImageToCloudinary(
            reportFile,
           "ds3cpwvtf"
        )

        console.log(updateCloud);

        // make entry in DB;
        const updateDB=await report.create({
            monthName,
            file:updateCloud.url
        }) 

        return res.status(200).json({
            updateDB,
            updateCloud
        })

    }catch(e){
        console.log("ERROR AT CREATE EVENT:",e)
    }
}