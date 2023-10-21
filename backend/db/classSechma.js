const { default: mongoose } = require('mongoose')
const mogoogest = require('mongoose')


const ClassSchema=new mongoose.Schema({

    grade:{
        typeof:"string",
        required:true,
    },
    classTeacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true
    },
    studentList:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Profile",
            required:true
        }
    ],
    classHead:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Profile",
            required:true
        }
    
})