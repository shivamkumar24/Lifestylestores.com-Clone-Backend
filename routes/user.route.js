const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register
userRouter.post("/register", async (req, res) => {
  const { name, email, phone, password, address } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({
        name,
        email,
        phone,
        password: hash,
        address,
      });
      await user.save();
      res.status(200).send("User Registration Successfully");
    });
  } catch (err) {
    res.status(400).send("User Registartion failed");
  }
});

// Login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "User Login Successfully",
            token: jwt.sign({ userID: user._id }, "avengers"),
          });
        } else {
          res.status(400).send({ msg: "Wrong Credentials" });
        }
      });
    }
  } catch (err) {
    res.status(400).send("Error: ", err);
  }
});

module.exports = {
  userRouter,
};
