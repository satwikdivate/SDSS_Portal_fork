
const moogoes=require('mongoose');
const event=require("../db/reports");

exports.createReport=async(req,res)=>{

    try{
        const {eventName,eventDate,eventDescrition}=req.body;

        
        const result= await event.create()
    }catch(e){
    console.log("ERROR AT CREATE REPORT");
}

}