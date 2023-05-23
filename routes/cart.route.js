const express = require("express");
const cartRouter = express.Router();
const jwt = require("jsonwebtoken");
const { CartModel } = require("../models/cart.model");

// GET
cartRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const decoded = jwt.verify(token, "avengers");
      if (decoded) {
        const cartData = await CartModel.find({ userID: decoded.userID });
        res.status(200).send({ msg: cartData });
      } else {
        res.status(400).send({ msg: "userID not found !!!" });
      }
    } else {
      res.status(400).send({ msg: "Token not found !!!" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
cartRouter.post("/add", async (req, res) => {
  try {
    const newCartItem = new CartModel(req.body);
    await newCartItem.save();
    res.status(200).send({ msg: "New cart item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

cartRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  try {
    if (token) {
      const decoded = jwt.verify(token, "avengers");
      if (decoded) {
        await CartModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "Cart Item deleted successfully" });
      } else {
        res.status(400).send({ msg: "userID not found !!!" });
      }
    } else {
      res.status(400).send({ msg: "Token not found !!!" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  cartRouter,
};
