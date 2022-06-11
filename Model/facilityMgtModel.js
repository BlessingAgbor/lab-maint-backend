const mongoose= require('mongoose')
const FacilityMgtSchema= mongoose.Schema({
    name:{
        type:String
    },
    dateOfLatestService:{
        type:String
    },
    dateOfNextService:{
        type:String
    },
    typeOfMaintenance:{
        type: String
    },
    partsToOrder:{
        type:String
    },
    specialistAssistance:{
        type:String
    },
    typeOfSpecialist:{
        type:String
    },
    requiredBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'subLab'
    }
})
mongoose.exports=mongoose.model('facilityMgt', FacilityMgtSchema)