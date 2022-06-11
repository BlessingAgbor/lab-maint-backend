const mongoose = require('mongoose')

const StaffModel= mongoose.Schema({

    firstName:{
        type: String,
        required: true,
        unique:true
    },
    lastName:{
        type: String,
        required: true,
        unique:true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique:true
    },
    organisationalRole:{
        type: String,
        required: true,
    },  
    description:{
        type: String,
    },
    avatar:{
        type: String,
    },
    avatarID:{
        type: String,  
    },
    Lab: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'sublab'
    }],
},{timestamps: true})


module.exports=mongoose.model('staff', StaffModel)

