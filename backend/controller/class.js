const Class = require("../db/class");

exports.createClass=async(req,res)=>{

    try{

        const{classsName, classTeacher}=req.body;
        if(!classsName || !classTeacher)
            return res.status(400).json({
        message:"Something missing at the  create class"})

        const studentList=[]
        const  updateForClass="No Update"
        const updateInFileFormate="No Update"

        const createClass= await Class.create({classsName:classsName,classTeacher:classTeacher,studentList:studentList,updateForClass:updateForClass,updateInFileFormate:updateInFileFormate});

        console.log(createClass)
        if(createClass)
                return res.status(200).json({message:"Class created succefully",
            createClass,
            sucess:true})


    }catch(e){
        console.log("ERROR AT CREATE CLASS:",e.message);
    }
}