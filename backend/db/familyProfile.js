const moogoes=require('mongoose');

const famailyProfileSchma=new moogoes.Schema({

    motherName:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true        
    },
    contact:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    income:{
        type:String,
        required:true,
    },
    siblingCount:{
        type:Number,
        required:true
    }
})

const FamilyProfile=moogoes.model("FamilyProfile",famailyProfileSchma);
module.exports = FamilyProfile;