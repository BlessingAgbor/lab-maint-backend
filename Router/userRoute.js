const express = require("express");

const router = express.Router();
const {
	signInUser,
	getUsers,
	getOneUser,
	deleteUser,
} = require("../Controller/userControl");
router.route("/get").get(getUsers);
router.route("/signin").post(signInUser);
router.route("/:id").get(getOneUser).delete(deleteUser);

module.exports = router;
