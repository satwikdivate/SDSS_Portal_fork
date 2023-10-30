const mongoose=require('mongoose');

const currentCouter=mongoose.Schema({

    currentRno:{
        type:String,
        require:true
    }
})