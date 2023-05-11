const express = require("express");
const shoesRouter = express.Router();
const { ShoesModel } = require("../models/shoes.model");

// GET
shoesRouter.get("/", async (req, res) => {
  try {
    const shoes = await ShoesModel.find();
    res.status(200).send({ shoes });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
shoesRouter.post("/add", async (req, res) => {
  try {
    const newShoesItem = new ShoesModel(req.body);
    await newShoesItem.save();
    res.status(200).send({ msg: "New shoes item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
shoesRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await ShoesModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Shoes item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
shoesRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await ShoesModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Shoes item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  shoesRouter,
};
