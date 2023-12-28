const mongoose=require('mongoose');

const highlightsSchma=new mongoose.Schema({

    title:{
            type:String,
            require:true
    },
    image:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    }
})

const highlight=mongoose.model('highlight',highlightsSchma);
module.exports=highlight;