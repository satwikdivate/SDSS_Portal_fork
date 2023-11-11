const PersonalProfile = require('../db/personalProfile');
const personalProfile=require('../db/personalProfile');
const Profile = require('../db/profile');
const User = require('../db/user');


exports.createPersonalProfile=async(req,res)=>{

    try{

        const{age,dateOfBirth,grade,contact,bloodGroup}=req.body;

        //validation 
        const id=req.user.id;
        if(!id || !age || !dateOfBirth || !grade ||!contact||!bloodGroup){
            return res.status(400).json({message:"Something missing at createPersonalProfile"});
        }
  // find student and update its PersonalProfile
  const user=await User.find({id:id});
 const personalPfrofileId=user[0].personalProfile;

        const result=await PersonalProfile.findByIdAndUpdate({_id:personalPfrofileId}, {
            age: req.body.age,
            dateOfBirth: req.body.dateOfBirth,
            grade: req.body.grade,
            contact: req.body.contact,
            bloodGroup: req.body.bloodGroup
        }, // Update
        { new: true })

    
        
         return res.status(200).json({message:"Personal profile updated sucessfuly",result});
    }catch(e){
        console.log("ERROR AT PROFILE SCHEMA:",e.message);
    }
}