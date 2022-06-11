const mongoose = require("mongoose");
const ToolModel = mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    name: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tool", ToolModel);
