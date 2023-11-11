const Attendance = require("../db/attendance");
const Class = require("../db/class");
const User = require("../db/user");
const wbm = require('wbm');



exports.markAttendece=async(req,res)=>{

    try{

        const {attendenceId,userId,data,status}=req.body;
        console.log(req.body)
        if(!attendenceId||!userId || !data || !status)
            return res.status.json({
                message:"Something missing at markAttendence"
            })

        const newEntry={
            data,
            profile:userId,
            status:status
        }

        

        const result =await Attendance.findOne({_id:attendenceId}).then(addEntry=>{

            if(addEntry){
                addEntry.attendance.push(newEntry)
                return addEntry.save();
            }
           
        })

        
        return res.status(200).json({
            message:"Attendece mark suceefully",
            sucess:true
        })


    }catch(e){
        console.log("ERROR AT MARK ATTENDECE:",e.message);
    }
}


exports.enrollStudent=async(req,res)=>{

    try{
        
        const {userId,classId}=req.body;

        if(!userId || !classId)
            return res.status(400).json({
                message:"Something missing at enrollStudnet"
        })
        // update studnet 
        const updatedUser = await User.findByIdAndUpdate(userId, { class: classId }, { new: true });


        console.log("Updated Studnet:",updatedUser)

        // update the class studnet list

        const updateClass=await Class.findById({_id:classId});

        if(updateClass){

            updateClass.studentList.push(userId);
            await updateClass.save();
        }



        return res.status(200).json({
            message:"Studnet updated sucessfully"
        })
    }catch(e){
        console.log("ERROR AT ENROLLSTUDENT:",e);
    }
}


