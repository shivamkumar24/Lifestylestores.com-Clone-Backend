const express = require("express");
const kidRouter = express.Router();
const { KidModel } = require("../models/kid.model");

// GET
kidRouter.get("/", async (req, res) => {
  try {
    const kids = await KidModel.find();
    res.status(200).send({ kids });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
kidRouter.post("/add", async (req, res) => {
  try {
    const newKidsItem = new KidModel(req.body);
    await newKidsItem.save();
    res.status(200).send({ msg: "New kid item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
kidRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await KidModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Kid item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
kidRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await KidModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Kid item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  kidRouter,
};
