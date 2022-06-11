const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    lab: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "parentlab",
      },
    ],
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    Admin: {
      type: Boolean,
    },
  
 
    description: {
      type: String,
    },
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
