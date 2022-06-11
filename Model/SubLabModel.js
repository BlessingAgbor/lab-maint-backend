const mongoose = require('mongoose')
const SubLab= mongoose.Schema({
    name: {
      type:String,
    },
    equipments:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:'equipment'
      }],
      tools:[{
        type:String,
        ref:"tool"
      }],
      tests:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'test'
      }],
      staffs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staff'
    }],
    facilityMgt:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'facilityMgt'
    }]
}, {timestamps: true})

module.exports= mongoose.model('subLab', SubLab)