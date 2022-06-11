
const express = require("express");
import verify  from "../../Utils/Authorize";
import equipmentModel from "../../Model/EquipmentModel"
const {image }= require('../../Utils/multer')
const router = express.Router();
const {
  getUsers,
  getOneUser,
  deleteUser,
} = require("../Controller/otherControls/equipment");
router.route("/get").get(getUsers);
router.route("/:id").get(getOneUser).delete(deleteUser);




router.post("/equipment", verify, image,   async (req, res) => {
  try {
    // const
    const check = user.findById(req.params.id);
    if (req.user.Admin) {

 const { email, password, natureOfBusiness, address, description } = req.body;
 const salt = await bcrypt.genSalt(10);
 const hashed = await bcrypt.hash(password, salt);

 const image = await cloudinary.uploader.upload(req.file.path);
 const id = req.params.id;
 await user.findByIdAndUpdate(id, { Admin: true }, { new: true });
 const createUser = await equipmentModel.create({
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
    
    } else {


          res.status(400).json({
            status: "fail",
            message: "You have not signed up yet",
          });
     
 
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});


module.exports = router;
