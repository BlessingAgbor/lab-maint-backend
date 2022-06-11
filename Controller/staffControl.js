const staffModel = require("../Model/staffModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await staffModel.findOne({ email });
    // userModel[findUser].length>2
    if (findUser) {
      const passCheck = await bcrypt.compare(password, findUser.password);
      if (passCheck) {
        const token = jwt.sign(
          {
            _id: findUser._id,
            email: findUser.email,
            userName: findUser.userName,
            Admin: findUser.Admin,
            avatar: findUser.avatar,
          },
          "LabORaToRYManGeMEnT",
          { expiresIn: "1d" }
        );
        const { password, ...info } = findUser._doc;

        res.status(201).json({
          status: `Welcome back ${findUser.userName} `,
          data: { token, ...info },
        });
      } else {
        res.status(500).json({
          status: "password is incorrect",
        });
      }
    } else {
      res.status(500).json({
        status: "user not in our database",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: err.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await staffModel.find();
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: err.message,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await staffModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await staffModel.find(req.params.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: err.message,
    });
  }
};

module.exports = {
  signInUser,
  getUsers,
  getOneUser,
  deleteUser,
};

// const createParentLab= async(req, res)=>{
//     const user= await staffModel.create()
// }
