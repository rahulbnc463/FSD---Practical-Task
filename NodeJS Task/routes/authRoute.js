const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userCtrl");

router.post("/register", registerUser);
module.exports = router;
