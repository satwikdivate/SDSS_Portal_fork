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

        // create PersonalProfile object
        const personalProfle=await personalProfile.create({age,dateOfBirth,grade,contact,bloodGroup});


        // find student and update its PersonalProfile
        const user=await User.find({id:id});
         console.log("Profile Id:",user[0].Profile);

         const profile=user[0].Profile;
         const findProfile=await Profile.findByIdAndUpdate({_id:String(profile)},
            {$set:{personalProfile:personalProfle._id}},{new:true});

        //  console.log("Got the profile:",findProfile[0]._id);

        //  const updatePersonalProfile= await Profile.findByIdAndUpdate({_id:profile.toString(), personalProfile:personalProfle._id});
        
         return res.status(200).json({message:"Sucess",findProfile});
    }catch(e){
        console.log("ERROR AT PROFILE SCHEMA:",e.message);
    }
}