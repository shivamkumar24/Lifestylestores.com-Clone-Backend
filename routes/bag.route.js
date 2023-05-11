const express = require("express");
const bagRouter = express.Router();
const { BagModel } = require("../models/bag.model");

// GET
bagRouter.get("/", async (req, res) => {
  try {
    const bags = await BagModel.find();
    res.status(200).send({ bags });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
bagRouter.post("/add", async (req, res) => {
  try {
    const newBagItem = new BagModel(req.body);
    await newBagItem.save();
    res.status(200).send({ msg: "New bag item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
bagRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await BagModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Bag item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
bagRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await BagModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Bag item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  bagRouter,
};
