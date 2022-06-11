const equipmentModel = require("../../Model/EquipmentModel");
const verify = rwquire("../../Utils/Authorize.js")
const {image} = require("../../Utils/multer")
const cloudinary= require("../../Utils/cloudinary")
const getUsers = async (req, res) => {
  try {
    const user = await equipmentModel.find();
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
    const user = await equipmentModel.findById(req.params.id);
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
    const user = await equipmentModel.find(req.params.id);
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
  getUsers,
  getOneUser,
  deleteUser,
};

router.post("/equipment", image, verify, async (req, res) => {
  try {
    // const
    const check = user.findById(req.params.id);
    if (!check) {
      res.status(400).json({
        status: "fail",
        message: "You have not signed up yet",
      });
    } else {
      const { email, password, natureOfBusiness, address, description } =
        req.body;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      const image = await cloudinary.uploader.upload(req.file.path);
      const id = req.params.id
      await user.findByIdAndUpdate(id, {Admin:true}, {new:true})
      const createUser = await ParentLab.create({
        email,
        password: hashed,
        userName,
        avatar: image.secure_url,
        avatarID: image.public_id,
        natureOfBusiness,
        address,
        description,
      });
      res.status(201).json({
        message: "Parent Lab created",
        data: createUser,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});

// const createParentLab= async(req, res)=>{
//     const user= await equipmentModel.create()
// }
