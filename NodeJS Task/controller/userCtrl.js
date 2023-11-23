const user = require("../models/userModel");

const registerUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await user.findOne({ email: req.body.email });
  if (!findUser) {
    const newUser = await user.create(req.body);
    res.json(newUser);
  } else {
    res.json({
      msg: "User Already Exists",
      success: false,
    });
  }
};

module.exports = { registerUser };
