const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// GET
userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send({ users });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// Register
userRouter.post("/register", async (req, res) => {
  const { name, email, phone, password, address } = req.body;
  try {
    bcrypt.hash(password, 5, async (error, hash) => {
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
  } catch (error) {
    res.status(400).send("User Registartion failed", error);
  }
});

// Login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          res.status(200).send({
            msg: "User Login Successfully",
            token: jwt.sign({ userID: user._id }, "avengers"),
            user: user,
          });
        } else {
          res.status(400).send({ msg: "Wrong Credentials" });
        }
      });
    }
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
});

module.exports = {
  userRouter,
};
