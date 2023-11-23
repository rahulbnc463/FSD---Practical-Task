const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getallUsers,
} = require("../controller/userCtrl");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getusers", getallUsers);
module.exports = router;
