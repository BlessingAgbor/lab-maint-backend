const mongoose = require('mongoose')
const ParentLabShema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    // description:{
    //     type: String,
    // },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    description: {
      type: String,
    },
    subLab: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subLab",
      },
    ],
    equipments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "equipment",
      },
    ],
    facilityManagement: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "facilityMgt",
      },
    ],
    tool: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tool",
      },
    ],
    labs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staff",
      },
    ],
    description: {
      type: String,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('parentLab', ParentLabShema)
