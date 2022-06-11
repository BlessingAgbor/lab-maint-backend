const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: "blessingagbor",
	api_key: "251426353614413",
	api_secret: "i7NihlveKCanEyzV19DQFez8Dyk",
	secure: true,
});

module.exports = cloudinary;

