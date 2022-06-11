const mongoose= require('mongoose')

const EquipmentModel= mongoose.Schema({
    // supplierDetails:[
    //    { 
           brandName: {
            type: String,
        },
        unitSupplied: {
            type: String,
        },
        dateAcquired: {
            type: String,
        },
        mfgDate: {
            type: String,
        },
        expDate: {
            type: String,
        },
    // }
    // ],
    volumeAcquired:{
        type: String,
    },
    modeOfPower: {
        type: String,
    },
    manufacturerInstruction:{
        type: String,
    }, 
    deptOfUse:{
        type: String,
    }, 
    maintenanceSchedule:{
        type:String
    },

}, {timestamps: true})

module.exports=mongoose.model('equipment', EquipmentModel)
