const { uploadImageToCloudinary } = require("../config/imageUpload");
const report = require("../db/reports");
// const } =require("../db/reports")

exports.createEvent=async(req,res)=>{

    try{

        const reportFile=req.files.report
        const {monthName}=req.body;
        console.log("File",reportFile)
        console.log("Month",monthName)

        if(!reportFile ||! monthName)
            return res.status(400).json({
        message:"something missing at upload cloud"})


        // upload file to cloud
        const updateCloud=await uploadImageToCloudinary(
            reportFile,
           "ds3cpwvtf"
        )

        console.log("File uploaded :",updateCloud);

        // make entry in DB;
        const updateDB=await report.create({
            monthName,
            file:updateCloud.url
        }) 

        console.log("Update DB",updateDB)

        return res.status(200).json({
            updateDB,
            updateCloud
        })

    }catch(e){
        console.log("ERROR AT CREATE EVENT:",e)
    }
}