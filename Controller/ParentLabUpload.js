const express = require("express");
const bcrypt = require("bcrypt");
const ParentLab = require('../Model/ParentLabModel')
const verify = require("../Utils/Authorize");
const StaffModel = require("../Model/staffModel");

const user = require("../Model/UserModel")
const router = express.Router();
const cloudinary = require("../Utils/cloudinary");
const { upload, image } = require("../Utils/multer");


router.post("/signup_ParentLab", upload, async (req, res) => {
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

router.post('/signup_user', upload, async(req, res)=>{
    try{
        // const 
        // const check =ParentLab.find()
        // if(check.length<2){
        //     res.status(400).json({
        //         status:'fail',
        //         message: 'You have no access to this route'
        //     })
        // }else{
        const { email, password,  description,fullName,  } = req.body;
        const salt = await bcrypt.genSalt(10);
		const hashed = await bcrypt.hash(password, salt);

		const image = await cloudinary.uploader.upload(req.file.path);
        const createUser = await user.create({
			email,
			password: hashed,
			fullName,
			avatar: image.secure_url,
			avatarID: image.public_id,
            description
		})
        res.status(201).json({
			message: `Welcome ${fullName}`,
			data: createUser,
		});
        // }
        
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
})


router.patch('/:id/update', upload, async(req, res)=>{
    try{
        const {userName, natureOfBusiness, address, description } = req.body;
        const id = req.params.id
         await cloudinary.uploader.destroy(id.avatar)
		const image = await cloudinary.uploader.upload(req.file.path);
        const createUser = await ParentLab.findByIdAndUpdate(
          id,
          {
            fullName,
            avatar: image.secure_url,
            avatarID: image.public_id,
            description,
          },
          { new: true }
        );
        res.status(201).json({
			message: "Parent Lab updated",
			data: createUser,
		});
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
})

router.post(":id/register_staff", verify, image, async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.id);
    if (getUser.Admin === "true") {
      const { firstName, lastName, phoneNumber, description } = req.body;
      const cloudImage = await cloudinary.uploader.upload(req.file.path);

      const getContent = new StaffModel({
        firstName,
        lastName,
        phoneNumber,
        description,
        organisationalRole,
        image: cloudImage.secure_url,
        imageID: cloudImage.public_id,
      });

      getContent.user = getUser;
      getContent.save();

      getUser.content.push(getContent);
      getUser.save();

      res.status(201).json({
        status: "content created",
        data: getContent,
      });
    } else {
      res.status(404).json({
        message: "You can't carry out this Operation",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      data: err.message,
    });
  }
});

module.exports= router