
const mongoose = require("mongoose");
const url = "mongodb://localhost/LabMangement";

const uri =
	"mongodb+srv://blessingagbor:Agbor2000@cluster0.r2enh.mongodb.net/LabManagementSystem?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
	console.log("Database now connected...!");
}).catch((err)=>{
    console.log(err.message)
});
