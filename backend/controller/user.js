const User=require("../db/user")
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken");
const currentIndex = require("../db/currentINdex");
const Profile = require("../db/profile");




// signup
exports.signUp=async(req,res)=>{

    try{

        const{firstName,lastName,contact,email,password,role}=req.body;

      

        // validation of input
        if(!firstName ||!lastName ||!contact || !email ||!password){

            return res.status(400).json({
                messsage:"Something is missing at signup",
                sucess:false
            })
        }

        // find the index and current no of document in user schma 
        const recordCount = await User.countDocuments();
        // printjson(index)     

        // check if user already present 
            const findUser=await User.find({email:email});

            if(findUser.length>0){
                return res.status(400).json({
                    messsage:"User already registerd",
                    sucess:false
                })
            }
            const hashPassword=await bcrypt.hash(password,10);

            // create profile schema object 
           
            const profileSchma=await Profile.create({
                personalProfile:null,
                familyProfile:null,
                academicProfile:null,
                attendance:null
            })

        // creating entry in DB
        const user= await User.create({
           id:recordCount+1000, 
           firstName,
           lastName,
           contact,
           email,
           password:hashPassword ,
           role,
          Profile: profileSchma
        });


       return  res.status(200).json({
            message:"User signUp sucessfully",
            sucess:true
        })

    }catch(e){
        console.log("ERROR AT SIGNUP ",e.message);
    }

}


// login
exports.login=async(req,res)=>{

    try{

        const {id,password}=req.body;
        let token;
        // validation
        if(!id || !password){
            return res.status(400).json({
                message:"Something is missing ar Login",
                sucess:false
            })
        }

        // check user present or not
        const findUser=await User.find({id:id});

        if(findUser.length==0){
            return res.status(404).json({
                message:"Invalide credintials",
                sucess:false
            })
        }

      
        if(await bcrypt.compare(password,findUser[0].password)){

            // create a payload
            const payload={
                id:findUser[0].id,
                role:findUser[0].role
            }

            // creating token
           token=await jwt.sign(payload,"token",{
                expiresIn:"24hr"
            })

           

        }else{

            return res.status(404).json({
                message:"Password dosent match",
                sucess:false
                
            })
        }

        
        return res.status(200).json({
            message:"User Login sucessfully",
            user:findUser,
            token:token
            
        })
        
    }catch(e){
        console.log("ERROR AT LOGIN",e.message);
    }
}


exports.getStudent=async(req,res)=>{
    try{

        const id=req.user.id;

        const user=await User.findOne(
           {id:id},
       ).populate({
        path:"Profile",
       populate: {
            path:"personalProfile"
        }
       })

       return res.status(200).json({
        user
       })
    }catch(e){
        console.log("ERROR AT GET USER:",e.message)
    }
}