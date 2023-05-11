const express = require("express");
const adminRouter = express.Router();
const { AdminModel } = require("../models/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register
adminRouter.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const admin = new AdminModel({
        name,
        email,
        phone,
        password: hash,
      });
      await admin.save();
      res.status(200).send("Admin Registration Successfully");
    });
  } catch (err) {
    res.status(400).send("Admin Registartion failed");
  }
});

// Login
adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.findOne({ email });
    if (admin) {
      bcrypt.compare(password, admin.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "Admin Login Successfully",
            token: jwt.sign({ adminID: admin._id }, "avengers"),
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
  adminRouter,
};
